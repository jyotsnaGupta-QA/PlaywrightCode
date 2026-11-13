const { existsSync, writeFileSync } = require('node:fs');
const path = require('node:path');

const pageSize = 250;

function getConfiguration() {
  const envFile = path.resolve(process.cwd(), '.env');
  if (existsSync(envFile)) {
    process.loadEnvFile(envFile);
  }

  const required = ['TESTRAIL_BASE_URL', 'TESTRAIL_USERNAME', 'TESTRAIL_API_KEY', 'TESTRAIL_PROJECT_ID'];
  const missing = required.filter((name) => !process.env[name]?.trim());
  if (missing.length > 0) {
    throw new Error(`Missing required TestRail settings: ${missing.join(', ')}`);
  }

  const projectId = process.env.TESTRAIL_PROJECT_ID.trim();
  const suiteId = process.env.TESTRAIL_SUITE_ID?.trim();
  if (!/^\d+$/.test(projectId) || (suiteId && !/^\d+$/.test(suiteId))) {
    throw new Error('TESTRAIL_PROJECT_ID and TESTRAIL_SUITE_ID must be numeric IDs.');
  }

  const baseUrl = process.env.TESTRAIL_BASE_URL.trim().replace(/\/index\.php\/?$/i, '').replace(/\/+$/, '');
  const parsedBaseUrl = new URL(baseUrl);
  if (!['http:', 'https:'].includes(parsedBaseUrl.protocol) || parsedBaseUrl.search || parsedBaseUrl.hash) {
    throw new Error('TESTRAIL_BASE_URL must be an HTTP(S) base URL without a query or fragment.');
  }

  return {
    baseUrl,
    username: process.env.TESTRAIL_USERNAME.trim(),
    apiKey: process.env.TESTRAIL_API_KEY.trim(),
    projectId,
    suiteId,
  };
}

async function fetchCases(configuration) {
  const cases = [];
  let offset = 0;

  while (true) {
    let endpoint = `${configuration.baseUrl}/index.php?/api/v2/get_cases/${configuration.projectId}`;
    if (configuration.suiteId) {
      endpoint += `&suite_id=${configuration.suiteId}`;
    }
    endpoint += `&limit=${pageSize}&offset=${offset}`;

    const response = await fetch(endpoint, {
      headers: {
        Authorization: `Basic ${Buffer.from(`${configuration.username}:${configuration.apiKey}`).toString('base64')}`,
        Accept: 'application/json',
      },
      signal: AbortSignal.timeout(30_000),
    });
    const responseText = await response.text();
    let payload;

    try {
      payload = JSON.parse(responseText);
    } catch {
      if (!response.ok) {
        throw new Error(`TestRail API request failed with HTTP ${response.status} ${response.statusText}.`);
      }
      throw new Error('TestRail API returned a response that was not valid JSON.');
    }

    if (!response.ok) {
      const detail = typeof payload?.error === 'string' ? `: ${payload.error}` : '';
      throw new Error(`TestRail API request failed with HTTP ${response.status} ${response.statusText}${detail}`);
    }

    const pageCases = Array.isArray(payload) ? payload : payload?.cases;
    if (!Array.isArray(pageCases)) {
      throw new Error('TestRail API response did not contain a cases array.');
    }

    cases.push(...pageCases);
    offset += pageCases.length;

    if (pageCases.length < pageSize) {
      return cases;
    }
  }
}

async function main() {
  const configuration = getConfiguration();
  const cases = await fetchCases(configuration);
  const outputPath = path.resolve(__dirname, '..', '.testrail-cases.json');

  writeFileSync(outputPath, `${JSON.stringify({
    projectId: configuration.projectId,
    suiteId: configuration.suiteId || null,
    fetchedAt: new Date().toISOString(),
    cases,
  }, null, 2)}\n`);

  console.log(`Fetched ${cases.length} TestRail case(s).`);
  console.log(`Case data saved to ${outputPath}`);
}

main().catch((error) => {
  console.error(`Unable to fetch TestRail cases: ${error.message}`);
  process.exitCode = 1;
});
