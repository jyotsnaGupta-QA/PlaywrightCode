# GoCare MedTrack Playwright Migration Plan

Assessment date: 2026-11-12  
TestRail project: 73  
TestRail suite: 26097

## Executive summary

The suite contains 294 unique TestRail cases across 177 section records. The inventory retrieved all 294 cases in two pages (250 and 44); the IDs reconcile with the local cache, with no duplicate case IDs or unresolved section references. Of the 177 section records, 101 distinct IDs and 101 parent-child paths contain cases; 76 records are empty. The 101 populated paths use 93 distinct leaf section names.

The current traceability matrix links 18 cases to an existing Playwright spec: 10 are fully automated, five are partial, and three have an existing script but remain gated. The other 276 cases have no linked spec. The revised migration statuses are 223 Not Automated, 56 Requires Clarification, five Partially Automated, and 10 Already Automated. These categories sum to 294; the partial and gated cases are not additional cases. No case is classified as manual-only or API Automation.

The module boundaries below are explicit and non-overlapping. Employee Search includes the four `Search employee` cases, the search-result-column case, and the two `Search Team Members` cases. Employee Creation includes employee creation/registration and team-member creation. Login includes login, password, recovery, unlock, and logout cases, including the Change Password navigation and My Details unlock cases. Vaccination Search includes the three COVID-19 vaccination search cases. Other sections remain under Remaining TestRail modules. These assignments total 294.

The inventory CSV separates the leaf `Section Name`, `TestRail Section ID`, and full parent-child `Section Path`; its Markdown headings use the full path. The traceability matrix likewise retains the full path plus section ID and leaf name.

## Repository and framework snapshot

| Area | Existing implementation | Assessment |
| --- | --- | --- |
| Configuration | `playwright.config.ts`, `test.config.ts`, `tsconfig.json` | Playwright Test with a setup project and Chromium project. Base URL is GoCare. One worker, one retry, 20-second test timeout, headed mode, and HTML/Allure/dot/list reporters are configured. WebKit is commented out. |
| Page Objects | `pages/LoginPage.ts`, `pages/HeaderNavigationPage.ts`, `pages/SearchEmployeePage.ts`, `pages/CreateEmployeePage.ts`, `pages/SearchVaccinationPage.ts` | Five reusable page objects exist for the main web flows. There are no identified page objects for the larger exam, reminder, report, administration, or team-member areas. |
| Specs | `tests/auth.setup.ts`, `login.spec.ts`, `LoginDataDriven.spec.ts`, `searchEmployee.spec.ts`, `CreateEmployee.spec.ts`, `searchVaccination.spec.ts`, `navigation.spec.ts`, `api.spec.ts`, `test.spec.ts` | Existing coverage is concentrated in login, employee search, employee form preparation, vaccination search, and navigation. The API spec is a read-only `GET /` smoke check and is not linked to a TestRail case. |
| Test data and helpers | `testdata/` contains employee and login JSON/CSV files; `utils/dataProvider.ts` and `utils/randomDataGenerator.ts` provide data access and generation | Employee identity/date fields need an approved synthetic-data policy and tenant ownership confirmation. The Faker helper calls some generation methods more than once and discards a result; review before reuse. No explicit TestRail `custom_testdata` was present on the 294 cases. |
| TestRail | `scripts/testrail-cases.js`, ignored local case cache, and local environment configuration | The existing exporter supports paginated retrieval. Assessment retrieval was read-only; the live suite and cases were not changed. |
| Authentication | `tests/auth.setup.ts`; configuration points at `playwright/.auth/user.json` | A tracked `auth.json` also exists and contains seven cookies. The tracked session state is sensitive, and the configured storage-state path differs from that filename. Resolve the intended source and keep session state out of version control before CI migration. |
| Reporting and CI | HTML and Allure reporters; `.github/workflows/playwright.yml` | GitHub Actions uses `windows-latest`, installs dependencies and browsers, then runs the sanity tag. No app credential mapping from GitHub secrets is configured. |

The existing framework should be extended rather than replaced. The current single-worker setting limits collisions today, but shared accounts, seeded records, and persistent storage state still require explicit isolation before broader parallel execution.

## Coverage and migration status

| Traceability classification | Cases |
| --- | ---: |
| Already Automated | 10 |
| Partially Automated | 5 |
| Not Automated | 223 |
| Requires Clarification | 56 |
| Manual Only | 0 |
| API Automation | 0 |
| **Total** | **294** |

There are 18 case-to-spec links: 10 fully automated, five partial, and three with scripts that are not currently eligible for an unguarded run. The matrix treats missing or gated coverage separately from whether a spec file exists. The previous traceability report recorded 14 fully passed TestRail cases; assertion review here reclassifies C8928021, C8928025, C15239052, and C8935292 as partial because their specs omit one or more case-required assertions. Historical execution results were not changed. A read-only API smoke test exists, but it does not automate a TestRail case.

### Coverage gaps and risks

- **Negative and boundary coverage:** login failure scenarios remain gated; password-length coverage is not automated. Employee search and creation cases include additional invalid-input, required-field, duplicate/uniqueness, and boundary checks that need review against the existing specs.
- **Unimplemented areas:** most of the suite covers exam lifecycle and details, team members, reminders, administration/configuration, reports/import/export, and additional navigation or platform scenarios. These areas lack corresponding automated specs and reusable page objects in the current project.
- **Clarifications:** 56 cases need human review before implementation because of incomplete or ambiguous case content, environment/data assumptions, platform scope, or state-changing/externally visible behavior. The inventory preserves absent fields rather than filling them in.
- **Mobile platform scope:** 16 cases are in iOS-named sections. The repository has web Playwright specs/page objects and no identified native-iOS Automation. They are marked Requires Clarification until the user confirms native iOS versus browser-based mobile web.
- **Potential duplicate coverage:** 17 normalized title groups cover 35 cases. Similar titles alone do not establish that cases are duplicates; compare preconditions, steps, expected results, and platform before merging coverage.
- **Data dependencies:** explicit TestRail test data is absent. Existing employee fixtures may reference a pre-seeded record whose non-production ownership is unconfirmed. Create, edit, unlock, delete, notification, and import/export flows need isolated data and an approved cleanup policy.
- **Parallel-execution conflicts:** current tests share authentication state and may rely on seeded employee records. Keep one worker until each test has isolated accounts/data and cleanup is safe; do not use shared account lockout or mutable records in parallel.
- **Reusable methods and locators:** reuse the five existing page objects where appropriate. Add focused page objects only for confirmed workflows; avoid copying locator logic or introducing a second framework. Review Faker helper behavior and centralize deterministic boundary/unique-ID generation before extending data-driven tests.
- **Authentication and CI:** resolve the tracked `auth.json` versus configured storage-state path discrepancy. CI needs approved secret provisioning and an authentication setup that does not commit or upload reusable session cookies.
- **Sensitive-data indicators:** the data audit counted 30 sensitive-data source references under its stated counting rule and proposed five dummy-data replacement patterns. These are pattern/fixture indicators, not confirmation that every match is personal data. Inventory output redacts detected fixture and contact-like values on a best-effort basis.

## Module-by-module plan

### 1. Login

- **TestRail cases:** 35.
- **Existing Automation:** 3 fully automated; 2 partially automated; 21 not automated; 9 require clarification. Seven rows have an existing spec association; gated scripts and iOS platform questions are not counted as fully automated.
- **Cases to modify or review:** complete C8928021's expected-alert assertion and C8928025's security-question/email-reset outcome assertions; separately review the two existing authentication-failure tests that are currently gated. Confirm whether account-unlock and password-recovery cases can run against isolated test accounts. No script was changed during this assessment.
- **Cases needing new Automation:** the remaining login, password-policy, recovery, unlock, and logout scenarios without a complete existing spec.
- **Dummy data:** authorized synthetic valid/invalid accounts, separately isolated lockout/recovery accounts, a password boundary set, and a mail sink if recovery messages are part of expected behavior. Keep credentials in approved secret storage, not fixtures.
- **Reuse:** `LoginPage`, `HeaderNavigationPage`, `login.spec.ts`, `LoginDataDriven.spec.ts`, and `tests/auth.setup.ts`.
- **Potential utilities:** deterministic password-boundary data and per-test account provisioning/reset only if the tenant offers an approved mechanism.
- **Risks/dependencies:** repeated failures can lock accounts; password and recovery flows mutate account state or send messages. Some cases are in iOS-named sections, so confirm whether they describe a browser-accessible web experience or native mobile behavior before selecting a runner.

### 2. Employee Search

- **TestRail cases:** 7, including the two Search Team Members cases.
- **Existing Automation:** 4 fully automated; 1 partially automated; 1 not automated; 1 requires clarification.
- **Cases to modify or review:** complete C15239052's Fitness Status reset setup/assertion; confirm ownership and stability of the current seeded employee fixture, and clarify the one ambiguous case before implementation.
- **Cases needing new Automation:** the remaining search/team-member scenario(s) without existing coverage.
- **Dummy data:** QA-only employee and team-member records with unique non-production identifiers; use reserved synthetic contact data only when a case requires it.
- **Reuse:** `SearchEmployeePage`, `HeaderNavigationPage`, `searchEmployee.spec.ts`, and the existing search fixture format.
- **Potential utilities:** unique fixture selection and read-only search assertions; avoid creating records as part of search tests.
- **Risks/dependencies:** results can vary as records change; a shared account or shared employee fixture can cause order-dependent tests. Confirm tenant and record ownership before relying on seeded data.

### 3. Employee Creation

- **TestRail cases:** 8, including employee registration and team-member creation.
- **Existing Automation:** 0 fully automated; 1 partially automated (form preparation only); 2 require clarification; 5 not automated.
- **Cases to modify or review:** the form-preparation case needs its intended completion/submit boundary reviewed; the guarded create case requires explicit authorization and a safe cleanup plan.
- **Cases needing new Automation:** registration, employee/team-member creation, and field-validation scenarios not covered by the partial form test.
- **Dummy data:** seeded synthetic names, unique isolated identifiers, reserved non-deliverable email/phone values where accepted, and deterministic synthetic dates. Use a disposable non-production tenant and avoid real notification delivery.
- **Reuse:** `CreateEmployeePage`, `CreateEmployee.spec.ts`, `testdata/create-emp-data.json`, and the existing Faker utility after review.
- **Potential utilities:** deterministic field-boundary data, uniqueness checks, and cleanup only where the environment provides an approved reversible workflow.
- **Risks/dependencies:** submission creates persistent records and may send notifications. Do not execute create/submit flows until the tenant, test data, cleanup, and authorization are confirmed. iOS registration cases need platform clarification.

### 4. Vaccination Search

- **TestRail cases:** 3.
- **Existing Automation:** 2 fully automated; 1 partially automated.
- **Cases to modify or review:** review the partial case's record-detail assertions; verify that each local spec maps to the intended case and that its fixture is synthetic and tenant-owned.
- **Cases needing new Automation:** 0 new specs identified; complete the partial assertions after approved fixture ownership is confirmed.
- **Dummy data:** approved non-production vaccination records and synthetic employee identifiers, if the existing fixture is not suitable.
- **Reuse:** `SearchVaccinationPage` and `searchVaccination.spec.ts`.
- **Potential utilities:** reuse the existing employee search/data helpers where their semantics match.
- **Risks/dependencies:** do not create or edit vaccination records for this assessment. Confirm date/time-zone and record ownership assumptions before extending boundary tests.

### 5. API Testing

- **TestRail cases:** 0 currently identified as API Automation.
- **Existing Automation:** no TestRail-linked API case. `tests/api.spec.ts` performs a read-only `GET /` smoke check only.
- **Cases to modify or review:** none until API-appropriate TestRail cases and supported endpoints are confirmed.
- **Cases needing new Automation:** 0 mapped from the current suite; do not infer API coverage from the unlinked smoke test.
- **Dummy data:** none for the existing read-only check. Future API cases need approved non-production fixtures and documented read-only versus state-changing endpoints.
- **Reuse:** existing Playwright Test configuration and `tests/api.spec.ts`; no page object is applicable.
- **Potential utilities:** an API request fixture/auth helper only after the supported API contract and authentication mechanism are provided.
- **Risks/dependencies:** obtain the API base URL, supported endpoint documentation, test-account permissions, and an explicit write-operation policy. Keep assessment requests read-only.

### 6. Remaining TestRail modules

- **TestRail cases:** 241.
- **Existing Automation:** 1 fully automated; 196 not automated; 44 require clarification. This includes the remaining navigation case linked to an existing spec.
- **Cases to modify or review:** inspect the existing linked navigation case and resolve case-content/environment questions before prioritizing the 44 clarification cases.
- **Cases needing new Automation:** 196 not-automated cases, after a risk-based review and approval.
- **Major areas:** exam and employee-detail workflows, reminders, administration/system configuration, reports, import/export, and other navigation/platform cases.
- **Dummy data:** isolated synthetic exams, reminders, employee details, and import/export payloads. Use non-deliverable notification targets and generated files that contain no real data.
- **Reuse:** reuse the five existing page objects and navigation spec where applicable. Add page objects/specs only for confirmed application areas and stable controls.
- **Potential utilities:** per-test seeded-data lifecycle, deterministic file fixtures, report download assertions, and cleanup helpers only for operations explicitly approved in a non-production tenant.
- **Risks/dependencies:** many cases can create, edit, or delete records, trigger notifications, or export data. Some case sections reference mobile-app behavior. Confirm permissions, expected results, platform scope, notification sinks, and cleanup before implementation.

## Application assessment and prerequisites

The public GoCare application landing/login page was reachable and exposed login controls and public links. No sign-in was attempted, no authenticated page was inspected, no CAPTCHA or access control was bypassed, and no application record was created or changed. Code review found that `LoginPage.setCaptcha()` calculates the displayed arithmetic challenge and existing specs call it; those specs were not executed. Do not run that behavior against a live or access-restricted environment. Use only a specifically authorized test mechanism or manual verification.

Before implementation, provide or confirm:

1. An authorized non-production GoCare tenant and the permitted role(s) for each module.
2. A dedicated synthetic test account and a safe reset/unlock procedure; share credentials only through approved secret storage.
3. Ownership and lifecycle for the pre-seeded employee/team-member/vaccination fixtures, plus approved synthetic seed data for missing records.
4. A mail/SMS sink or a documented way to suppress external notifications in test.
5. Expected behavior for cases flagged as incomplete/ambiguous, and confirmation of which iOS-named cases are in scope for browser-based Playwright.
6. If a CAPTCHA or other access restriction is encountered, an authorized test environment or supported test mechanism; do not bypass it.
7. An explicit approval and cleanup policy before any create, edit, unlock, delete, or other persistent operation is automated or executed.

## Retrieval, audit, and report integrity

- TestRail returned 294 cases in pages of 250 and 44. All case IDs were unique and reconciled with the local cache; no live TestRail records were modified.
- All 294 returned cases had both `is_ai_automated` and `is_ai_generated` set to false; no generic Automation-status field was returned.
- Case metadata included 278 preconditions, 287 cases with steps, and 282 case-level expected results. At case or step level, expected results were present for 287 cases. Explicit `custom_testdata` was present on 0 cases.
- Type totals: 209 Functional, 83 System Testing, and 2 Sanity Test. Priority totals: 292 Medium and 2 High.
- The companion inventory and audit reports preserve missing fields as missing, redact detected fixture/contact-like values, and do not reproduce credentials. The audit's pattern counts are indicators and are not proof of real personal data.

## Approval boundary

This document is a migration plan only. No source, test, fixture, application, or live TestRail case was changed as part of the assessment. Do not start implementation, execute state-changing application tests, or update TestRail until the user reviews and approves the proposed scope and safeguards.
