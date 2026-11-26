'use strict';

const assert = require('node:assert/strict');
const definition = require('../testdata/gocare-synthetic-fixtures.json');

function validateCases(families, expectedBlockedCases) {
  assert(Number.isInteger(expectedBlockedCases), 'Missing expected blocked case count');
  assert.equal(families.length, 9, 'Expected nine fixture families');
  const byKey = new Set(families.map((family) => family.key));
  assert.equal(byKey.size, families.length, 'Duplicate fixture family');
  for (const family of families) {
    assert(family.dependsOn.every((key) => byKey.has(key)), `Unknown family dependency for ${family.key}`);
    assert(family.blockedCaseIds.every(Number.isInteger), `Invalid case ID for ${family.key}`);
  }
  const cases = families.flatMap((family) => family.blockedCaseIds);
  assert.equal(cases.length, expectedBlockedCases, 'Unexpected number of primary blocked assignments');
  assert.equal(new Set(cases).size, cases.length, 'A blocked case is assigned more than once');
  return cases.length;
}

function validateSequence(records, families, absent) {
  const visited = new Set();
  const provisioned = new Set();
  const uniqueKeys = ['label', 'username', 'proposedIdentifier'];
  const values = Object.fromEntries(uniqueKeys.map((key) => [key, new Set()]));
  const allowed = new Set(families.map((family) => family.key));
  for (const record of records) {
    assert(!visited.has(record.key), `Duplicate record ${record.key}`);
    assert(allowed.has(record.family), `Unknown family for ${record.key}`);
    assert(record.dependsOn.every((key) => provisioned.has(key)), `Provision dependencies first for ${record.key}`);
    for (const [key, field] of Object.entries({ label: record.label, ...record.fields })) {
      if (uniqueKeys.includes(key)) {
        const normalized = field.toLowerCase();
        assert(!values[key].has(normalized), `Duplicate proposed ${key}`);
        values[key].add(normalized);
      }
      if (key === 'email' || key === 'primaryEmail' || key === 'syntheticRecipientExample') {
        assert(field.endsWith('@example.invalid'), `Expected a non-deliverable placeholder for ${record.key}`);
      }
    }
    visited.add(record.key);
    if (!record.fields.keepAbsentUntilCase) provisioned.add(record.key);
  }
  assert(!values.username.has(absent.username.toLowerCase()), 'Reserved absent username is provisioned');
  assert(!values.proposedIdentifier.has(absent.gin), 'Reserved absent GIN is provisioned');
}

const blockedCases = validateCases(definition.families, definition.expectedBlockedCases);
validateSequence(definition.records, definition.families, definition.reservedAbsentValues);

const provisioning = definition.authorizedProvisioning;
assert(Number.isInteger(provisioning.company.id), 'Missing the verified company identifier');
assert.equal(provisioning.firstRecord.status, 'Active', 'Start with one Active employee');

const plan = {
  ...definition,
  blockedCases,
  creationOrder: ['authorizedProvisioning.firstRecord'],
  historicalCreationOrder: definition.records
    .filter((record) => !record.fields.keepAbsentUntilCase)
    .map((record) => record.key),
  reservedScenarioCandidates: definition.records
    .filter((record) => record.fields.keepAbsentUntilCase)
    .map((record) => ({
      key: record.key,
      case: record.fields.keepAbsentUntilCase
    }))
};

process.stdout.write(`${JSON.stringify(plan, null, 2)}\n`);
