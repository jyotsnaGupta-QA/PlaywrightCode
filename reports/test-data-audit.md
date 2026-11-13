# Test Data Audit - Read Only

Generated: 2026-11-12T11:26:41.593Z

## Scope and safeguards

- Reviewed repository test-data files, local authentication/configuration asset names and shapes, active specs/page objects/utilities, and live TestRail fields for suite 26097.
- No existing test-data files, scripts, application records, or TestRail records were changed. No credential or personal-data values are reproduced.
- Local .env and auth.json values were inspected only for presence/shape; no values were printed or copied.

## Findings

- **30 sensitive-data source references** under this report's counting rule: 4 non-empty local credential entries in .env; 1 tracked auth.json session-state asset (7 cookie entries; values omitted); 4 candidate identity/date fields in fixtures; and 21 unique TestRail case records containing a privacy-pattern or current-fixture-value match. This counts source references, not confirmed individual people.
- Local credentials: .env contains 4 non-empty app/TestRail credential values; it is Git-ignored but unsafe to upload/share in its current local state.
- Session state: auth.json is tracked and contains 7 cookies. Treat it as a bearer credential; expire and remove from Git/history before external sharing (not performed).
- Test fixtures: logindata.json and logindata.csv contain scenario metadata only, not usernames/passwords. employee-search.json contains first name, last name, and GIN fields for a pre-seeded record; its synthetic/non-production status is unconfirmed. create-emp-data.json contains a date-of-birth field; its sample value is not reproduced.
- TestRail: explicit custom_testdata is present on 0/294 cases. Pattern scan: 1 email-like match, 64 phone-pattern matches, and 6 exact matches to current fixture values across 21 unique cases. Phone-shaped values may be IDs or other numbers; matches are not confirmed phone numbers, and indicator categories can overlap.
- Additional instruction references: 44 cases mention credential terms, 18 mention name fields, and 17 mention employee/GIN identifiers. These are instructions/field references, not proof of actual values.
- Name detection is not reliable without manual review. Inventory redactions are best-effort, not a complete de-identification guarantee.
- Existing-code risk: `LoginPage.setCaptcha()` reads the displayed arithmetic challenge and computes an answer; existing specs call this helper. No Playwright tests were run for this assessment. Do not use this behavior against live or access-restricted environments; use only an explicitly authorized test mechanism or manual verification.

## Proposed dummy-data replacements

| # | Data class | Proposed synthetic replacement | Guardrail |
| ---: | --- | --- | --- |
| 1 | Employee/applicant names | Seeded Faker first/last names with a QA-only prefix where accepted. | Dedicated non-production tenant; never reuse real names. |
| 2 | GIN / employee / applicant identifiers | Isolated test-tenant generated ID with uniqueness check and approved test prefix. | Never derive from or collide with production IDs. |
| 3 | Email addresses | qa-<unique>@example.invalid. | Reserved non-deliverable domain; use a mail sink for notifications. |
| 4 | Phone numbers | Reserved fictional range such as 202-555-0100 through 202-555-0199 where accepted. | Confirm tenant validation; never send SMS. |
| 5 | Dates of birth / expiry dates | Deterministic synthetic dates around documented boundaries, using a fixed seed. | Avoid copied DOBs; confirm age/time-zone rules. |

Credentials and session state are not Faker data: use an authorized test account in secret storage, keep session files untracked, and do not automate CAPTCHA/access-control bypasses. Company and role dropdown values must come from an approved test tenant.

## Scanner counts

- Proposed dummy-data replacement patterns: **5**.
- TestRail cases with explicit test-data field: **0**.
- TestRail case records flagged by privacy-pattern scan: **21**; raw values are not copied into reports.
