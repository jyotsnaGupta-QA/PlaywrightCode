# GoCare missing test coverage

**Final documentation checkpoint · 26 November 2026**

The final UI control pass assigned 200 functional mappings. 121 entries have presence or planned action only and 25 await protected access. The proposed BMI catalog-to-Widget relationship remains pending because the catalog check did not establish the corresponding exact row. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

Five functional gaps were closed with duplicate-checked live cases. The Global MET relationship is the additional verified E2E scenario. Clinical, account, file and config persistence require their recorded scoped fixtures or approvals. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

Five functional gaps are now documented and live in TestRail. The dependent reminder criteria, scoped resets, and unsaved draft cancellation have explicit assertions. Matching clinical and account rows, tabs, business state transitions, calendar popup behavior, and role comparisons remain separately gated. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

C15290403 closes the verified Medical Exam Expirations draft Reset gap. Existing C15290180 retains the separate numeric validation branch. Search and export outcome coverage remains fixture-dependent. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

C15290371 closes paired Reviewed Exams date Reset coverage without duplicating the valid search, missing criteria, empty results or invalid date cases. Calendar popup interaction and protected reviewer results remain pending evidence. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Inventory baseline refreshed 25 November 2026.

| Module | Functionality | Scenario and proposed coverage | Priority | Evidence and reason | Approval | New case ID |
| --- | --- | --- | --- | --- | --- | --- |
| Export Data | Export Data menu entry | Candidate for investigation. Follow the observed menu entry and assert the approved screen and initial controls. | Medium if confirmed | The live Export Data section is empty. C8935483 and C8935484 mention menu access. Neither asserts opening the builder. The visible Export Data link targets /Export/BuildReport.aspx, but authorized activation timed out in the current browser pass. Verify the builder and controls before drafting a creation proposal. | Drafting pending | — |
| Login | Submission with blank credentials | Resolve the expectation in C8928021, which already covers the scenario. | — | Its title expects an alert, while its recorded step and overall expected results say Submit remains disabled. This is an existing coverage issue. | Existing case | — |
| Help | Help popup content | Resolve the failed content assertion in C8934304 and C15239318. | — | Both entry points currently cover opening Help and displaying content. | Existing cases | — |

The configuration navigation batch maps to existing cases. Proposed TestRail creation batch count is zero. Destination-only entries, requirements conflicts and counts of empty sections do not establish a missing scenario by themselves.

## Continuation coverage review

| Module | Verified uncovered scenario | Duplicate review | TestRail write |
| --- | --- | --- | --- |
| Employee / Create New Employee | Verify Cancel returns from Create New Employee to Search Employees | Fresh section inventory and live case steps checked for equivalent Cancel actions. The previous suite snapshot was searched for cross-section overlap. | Created and verified as C15289362 |
| Create Team Member | Verify Cancel returns from Create Team Member to Search Team Members | Fresh section inventory and live case steps checked for equivalent Cancel actions. The previous suite snapshot was searched for cross-section overlap. | Created and verified as C15289363 |
| Drop Box / Upload | Verify Cancel exits the untouched Drop Box upload form | Fresh section inventory and live case steps checked for equivalent Cancel actions. The previous suite snapshot was searched for cross-section overlap. | Created and verified as C15289364 |

Export Data remained unresolved in the new browser attempt. Advanced Search expansion is already covered. A Basic Search control was visible in one pass. The filter collapse outcome could not be confirmed consistently, so no collapse case was created. The Email and Drop Box restricted outcomes still depend on an approved synthetic test scope. New TestRail cases with verified functionality and duplicate review are authorized under the current brief.

## Fixture and form pass

C15289380 now covers returning from Advanced Search to Basic Search while leaving Search available. C15239309 already covers expansion. The distinction was confirmed in Playwright and the new case was read back from TestRail. Further result and validation coverage depends on the synthetic records listed in the [progress tracker](gocare-testrail-master-progress.md).

## Web-only continuation coverage

- C15289381 now covers web navigation to Service Management. Existing maintenance and application-user cases were checked for equivalent coverage.
- Existing cases cover Import File, Export Quest and the blank Owner Company validation on web Mobile Static Content. These cases received corrections based on the observed workflow.
- Export Data remains a coverage candidate. The builder could not be reached through its menu link or directly in the current session.

## Safe operation coverage

- C15289382 Local synthetic workbook selection starts no request. Refresh clears it and keeps the Import File page available.
- C15289383 Back to Log in on the untouched recovery form returns to /Login.aspx without a recovery request.

For Service Management, candidate checks are role-specific visibility, status display for a configured test service, and a read-only refresh if the authorized role exposes one. Start, Stop and Restart scenarios depend on the documented controls and explicitly authorized isolated service fixtures. The current saved role supports the existing navigation case. Operational candidates remain pending evidence.

## Functional coverage reassessment

- C15289415 verifies clearing the required-company message on Reset.
- C15289416 verifies clearing Alternate Menu Name on Reset.

| Area | Next functional coverage to verify |
| --- | --- |
| Employee, Team Members and Vaccination | Matching, absent and invalid filter combinations. Verify sorting or pagination on actual result controls. Verify Create, Edit and Delete persistence and cleanup with authorized fixtures. |
| Exams, Expirations, Reviewed Exams and Certificate of Fitness | No exam, Processing, reviewed and expired states. Validate date boundaries, related-document availability, and role-based access. |
| System Configuration and ERAMET | Detect required, invalid or duplicate input and state transitions with a disposable company and approved mappings. Confirm the exact age-45 rule. |
| Login, My Profile, Password Length and Application User | Read-only permission comparisons first. Verify accepted and rejected field states only with authorized disposable accounts and approved rules. |
| Import, Export Data and Drop Box | Verify field/file naming and format rules, approved synthetic output, and allowed operations such as refresh or cancel. Export Data timeout is recorded as a blocker. |
| Maintenance, Service Management, Reminders, Welcome Email and MD-804 | Verify available read-only controls first. Check state, template content, error paths and absence of delivery only in an approved service or sink. |

These are scenarios to validate against live controls and approved data. Create further cases only after confirming applicability, expected behavior and duplicate coverage. [Workflow completion matrix](gocare-workflow-completion-matrix.md) · [Synthetic fixture requirements](gocare-synthetic-test-data-requirements.md) · [Suite quality audit](gocare-testrail-final-quality-audit.md)

## Fixture-phase coverage decision

C8934508 already covers the verified no-match Widget Name scenario. Its existing case was corrected. The proposed Atlas fixtures can support the remaining mapped business scenarios after approval. Exact role entitlements, writable configuration, output generation and server validation are still required for the outstanding coverage. [Fixture setup proposal](gocare-synthetic-test-data-requirements.md#consolidated-fixture-setup-proposal-for-approval) · [Workflow completion matrix](gocare-workflow-completion-matrix.md)

## Revised UAT coverage decision

Existing cases cover the observed company lookup, blank company validation, and vaccination search branches. They were updated instead of adding overlapping cases. Remaining fixture-dependent coverage includes positive company filtering, approved company provisioning, and synthetic employee, exam and vaccination workflows. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Scope and duplicate check

Company blank and invalid name validation is now covered by corrected C8934360. The two verified Team Member Search branches are covered by C8928071. Standalone company creation, blank team search and fixture-dependent outcomes remain open. No duplicate case was created. [Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions) · [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Reuse the approved existing company for synthetic employee search and profile, positive team-member search, existing exam views and positive COVID-19 Vaccination search. Existing cases cover these paths. Coverage for creation, progression, and role restrictions depends on safe record and entitlement evidence.

## MY COMPANY fixture authorization and Employee Create validation

The existing C8927853 and C15239583 cover invalid and blank Employee Create validation. No duplicate case is needed. Positive Employee Create, profile, exam and vaccination workflows remain fixture-dependent.

## MY COMPANY employee identifier preflight

C8927858 covers the scoped no-results behavior. The separate GIN lookup was a provisioning preflight. Positive creation and persistence coverage remain blocked.

## MY COMPANY collision and recipient preflight

The wider collision check is a precondition for C8927852. Positive persistence and server recipient behavior remain unverified. Existing search and validation cases already cover the independently verified outcomes.

## Recipient verification and functional validation batch

The verified Custom Period boundary gap is covered by C15290180. Existing positive search and export, Drop Box no-match, and Company Details save expectations remain pending evidence.

## Configuration and reviewed-exam validation continuation

C15290212 covers malformed and impossible Reviewed Exams dates. Existing Web Mobile, configuration and vaccination validation cases covered the other verified outcomes and were corrected instead of duplicated. Completion of persistent and record-linked branches remains fixture-dependent.

## Company catalog filter follow-up

Existing Job Site, Job Title and Employee Category filter cases now cover both scoped positive results and absent synthetic names. No duplicate cases were added for these outcomes.

## Catalog verification and status reconciliation

C15290213 covers reversed and corrected master ranges. C15290214 covers the inclusive frequency limits on the Vaccination Reminder Add form and both adjacent invalid values. Existing catalog filter and validation cases were completed where they already covered the behavior.

## Dependency priority and documentation handoff

C15290370 covers a reversed Medical Center opening/closing interval and corrected-order acceptance before Submit. The general Medical Center validation and no-match case was completed in place. No duplicate catalog case was added.

## Disposable accounts and configuration planning

The verified Username input case was added to the existing broad Team Member validation case. Existing Company Fitness Conclusion coverage was completed using compatible catalog values. No duplicate case was created.

## Provisional decisions and final documentation handoff

Added the read-only zero-eligible Search steps to existing C8933409. It remains pending a product rule for Print in the zero state and approved verification of side effects. C8933408 stays the distinct positive generation scenario.

## Verified new coverage and retained gates

| New case | Functional outcome | Existing coverage retained |
| --- | --- | --- |
| C15290404 | Reset cleared all three text fields and restored Select User Status without a request. | C8928071 |
| C15290405 | Reset cleared the name and Town filters and restored Select Employee Status without a request. | C15237380 |
| C15290406 | Reset cleared the synthetic Job Title and unchecked Show only Active. | C8934401 |
| C15290407 | Cancel closed the unsaved Add row and restored the master controls. | C8934521 |
| C15290408 | Selecting MY COMPANY enabled dependent controls. Reset cleared both dates, returned Company to its default and disabled criteria and Search. | C8933408 |

Calendar text format and paired date Reset are verified where cited. A popup month/year selector was not observed on the checked date forms. Record-backed tabs, table sorting and paging require scoped synthetic result grids. Reminder generation, exports, account changes, and service operations require their recorded approvals.

## Business coverage additions and remaining gaps

- C15290409 Both malformed GIN and impossible DOB triggered exact local dialogs without a request.
- C15290410 With MY COMPANY and default period, blank Status prevented the query.
- C15290411 The exact global name matched while the same definition had no MY COMPANY mapping.
- C15290412 Numeric enabled Min, Max, International Unit and Display UOM. Boolean disabled them.
- C15290413 The second-dose selection retained Moderna and issued no search.

[Module-by-module gap review](gocare-business-coverage-review.md)
