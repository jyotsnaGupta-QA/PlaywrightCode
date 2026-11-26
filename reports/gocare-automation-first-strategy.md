# GoCare automation-first test design and implementation

This design covers the TestRail Master Suite for GoCare UAT web, including Web Mobile Configuration. Reporting, Archival Activity and its descendants, and native mobile are excluded. Suite membership overlaps and preserves the existing case IDs, TestRail suite, hierarchy, template, case type, priority, attachments, and existing automation links.

## TestRail case standard

Use the supported Label case field for logical suite and execution tags. Keep the typed case fields and separated steps as the source of test intent. The case preconditions link each automation design to its approved evidence, route, data, and gates. Use the following design when adding a case or resolving a dependency.

| Design element | TestRail content |
| --- | --- |
| Objective | State the business rule or user outcome and the scenario under test. Name the module, feature, role, and tenant relationship. |
| Starting state | Specify a fresh anonymous browser or authenticated session, required entitlements, active tenant, prerequisite records, and any setup and teardown approvals. |
| Navigation | Start from the landing screen in the preconditions. Name each menu, submenu, tab, and intermediate selection. Assert the expected route or destination at every transition. |
| Data | Identify field-level inputs, types, generation and uniqueness rules, fixture provenance, dependencies, and controls that must remain at their defaults. Use the centralized data contract. |
| Steps | State one action per separated step. Give each step an observable expected result with the exact message, option, value, state, count, or route where evidence supports it. |
| Business outcome | State the outcome, record and tenant affected, whether persistence is expected, and the observable evidence of no change for rejected or canceled actions. |
| Cleanup | Specify whether a fresh browser or Reset is sufficient, or identify the fixture owner responsible for an independently approved cleanup operation. |
| Open dependency | State which assertion or action is gated and the exact role, fixture, product decision, or authorization needed. Preserve the documented expected result during defects and unresolved requirements. |

Case design tracks six independent dimensions. Documentation completeness describes the case text. Requirement confirmation describes the source of expected behavior. Application verification records the exact observed branch. Test data readiness records usable fixtures or generation. Automation readiness requires actionable navigation, inputs, and assertions. Execution authorization gates browser operations regardless of any other dimension.

## Assertion design

- Pair each action with a web-first assertion and the matching TestRail expected text. Assert the destination URL alongside its available heading or screen identifier. Use `toHaveValue`, `toBeChecked`, `toBeEnabled`, `toBeDisabled`, or `toHaveText` for control and validation states.
- For searches, pin the query and the row or empty state using an approved synthetic key. Scope assertions to the selected tenant and grid. For zero-result scenarios, use a verified empty state and assert that the result grid has zero matching rows.
- For events, register the response, popup, or download listener before the authorized trigger. Verify content type, sanitized filename pattern, and the intended business result where applicable. Record a timeout or access denial as an observation independently of the intended result.
- For future authorized writes, verify a success response or message, then independently reopen or search by synthetic key with tenant scoping. Check the reloaded state, output, or audit history. For negative or cancel scenarios, check that the controlled action produced no save event. Cases with unavailable persistence evidence keep the branch gated.
- Prefer role, label, or accessible name locators. Use an observed stable ID for controls without an accessible label. Keep selection, wait, and assertion logic tied to the specific control. Use the exact existing step expectation as the oracle when it is confirmed. Flag a disputed expectation or missing selector as a dependency.

## Safe execution and dependency matrix

| Gate | Examples | Future enforcement |
| --- | --- | --- |
| Verified read-only | Shell destinations, known read-only catalog selections, visible form controls | Confirm UAT origin and allowed route, use approved role and tenant, block form submissions by default, and avoid exposing payloads or grid rows. |
| Client form only | Validation, defaults, date and range feedback | Use synthetic local values and intercept every write request. Assert zero persistence and zero notifications. Reset local state by navigating away or closing the context. |
| Known read-only form post | An approved filter or Reset with server-side page state | Allow exact origin, route, and form action. Deny all other form actions. Keep query inputs synthetic and mask protected response bodies. |
| Requires fixture or role | Employee or team-member profile, exam, vaccination, logs, permissions | Validate the fixture registry, tenant, role capability and ownership before entering the workflow. Stop the test if a dependency is absent. |
| Requires approval | Creates, updates, state transitions, import, download or generation of sensitive content | Require operation-specific authorization and an isolated test target. Default to a skip whether the scenario has a suite label or appears in a broad filter. |
| Destructive or notification-capable | Deletion, service and queue operations, reminders, account recovery and lockout | Omit from the default project. Require explicit action and recipient or data isolation evidence, together with appropriate separate access. |
| Unresolved requirement or defective application | Provisional product decisions, Help, Export Data | Preserve the intended expected result and log the observed behavior. Keep open business decisions and defects out of passing automation claims. |

Future Playwright filters can use `--grep @smoke`, `@sanity`, `@regression`, `@e2e`, `@navigation`, or `@ui-controls`. Apply an independent safety filter such as `--grep-invert "@requires-approval|@destructive|@notification|@data-creation|@data-modification|@requires-fixture"` for a default project. Apply a module filter by combining suite and module constraints or by project configuration. An explicit runtime guard must still verify host, role, company, fixture status and approved operation. A future guard must also recognize non-verification or disputed-oracle cases through traceability before attempting assertions.

`@app-health` is the union of `@navigation` and `@ui-controls`. Use it for navigation reachability, form and field behavior, reset and cancellation, and dependent-control checks. Its membership can include cases with protected steps. Apply the same runtime and data guards to `--grep @app-health`.

## Implementation sequence

1. Reconcile the seven mapped cases with their existing specs and the current TestRail expectations. Reuse `LoginPage`, `HeaderNavigationPage`, and `FooterNavigationPage` first. Establish authentication safety, route assertions, stable locators and the default network policy.
2. Implement safe navigation and read-only smoke candidates. Add reusable destination and menu helpers, dropdowns, date entry, radio and checkbox state, tables, pagination, and popup handling as justified by the case rows.
3. Use `SearchEmployeePage`, `SearchVaccinationPage`, and the observed search and filter controls for empty results, read-only criteria changes, reset behavior, and verified validations. Add exact expected counts or messages only with approved query data.
4. Align `CreateEmployeePage` to the verified client-side field restrictions and build common validating form and dialog interactions. Add equivalent safe UI-controls candidates for company/catalog and configuration forms. Keep server and state-changing actions gated.
5. Add disposable-role scenarios, record-dependent profile and medical workflows, and isolated configuration only after UAT provisioning. Use scoped fixtures, stable identifiers and explicit assertions of tenant boundaries and no unintended writes.
6. Implement end-to-end chains after each link has verified test data, explicit authorization, and an independently observable outcome. Add postcondition and cleanup steps to the approved fixture lifecycle. Activate destructive and notification-capable paths only through a separate authorized execution profile.

Use the case ID in each future Playwright title. The traceability matrix carries the spec, page object, component, TestRail identity, status, and existing mapping for each case. The current readiness set includes 68 cases. Seven have existing mappings and 61 are new candidates. The implementation backlog also includes proposed page objects and separately gated candidates.

## Visual review of API updates

Use the authenticated browser to open the GoCare project and Master Suite. After each batch, finish the API read-back before loading the changed case or section in the visible browser. The case view provides the title, preconditions, data, steps, expected result and the Label field used for logical suite membership. Launch the guarded UAT exploration in a separate headed Playwright window. Keep the TestRail window beside VS Code where the desktop layout allows it.

## First implementation batch

Use the ten safe Smoke cases to establish shared authenticated and public contexts, destination assertions, and exact request policies. Start with C9031928 for public sign-in state, C15239309 for employee search expansion, and C15290403 for fixture-free exam criteria. Then add the verified local validation pairs C15290409 and C15290451 to exercise reusable dialog handling and zero-request assertions. Add C15290446 and C15290447 next for dependent dropdowns, including the one guarded company initialization in Widget search. The [implementation backlog](gocare-automation-implementation-backlog.csv) carries the per-case priority, proposed spec, data contract, and execution tier.

[Suite and tag map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv) · [Assertions](gocare-automation-first-assertions.csv) · [Data contract](gocare-automation-first-data.md) · [Navigation](gocare-automation-first-navigation.md) · [UI controls](gocare-automation-first-controls.csv) · [End-to-end inventory](gocare-automation-first-e2e.md) · [UAT owner provisioning](gocare-synthetic-test-data-requirements.md#consolidated-uat-owner-provisioning-request) · [Case-specific blockers](gocare-clarifications-and-defects.md#blocker-resolution-matrix) · [Final quality audit](gocare-testrail-final-quality-audit.md) · [Business gap review](gocare-business-coverage-review.md) · [Implementation backlog](gocare-automation-implementation-backlog.csv)
