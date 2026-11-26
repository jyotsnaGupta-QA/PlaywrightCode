# GoCare Master suite progress

## Standing GoCare autopilot checkpoint

Continue from the latest verified case and coverage inventories. Apply discovery, design, fresh GET, independent review, and re-audit after each meaningful batch. Keep authenticated TestRail and headed GoCare visible where supported. Preserve exact approved fixture scope, excluded subtrees, provisional requirements, and known defects.

The live baseline reconciled to 307 cases, 110 in-scope sections, 1,594 separated steps, and 176 app-health cases. Use the accepted checkpoint for the full readiness and control breakdown. TestRail updates remain documentation-only. Real data, account state changes, protected operations, notifications, and TestRail runs stay gated.

Use `playwright.gocare.config.ts` for the guarded automation phase. It separates signed-out navigation and existing-session actions from legacy automatic authentication. Continue with headful verification and record per-case evidence in the [autopilot self-review](gocare-autopilot-self-review.md) and [implementation backlog](gocare-automation-implementation-backlog.csv).

**Final documentation checkpoint · 26 November 2026**

Created nine TestRail cases and updated twelve distinct baseline cases. Every write passed a fresh GET check. 176 cases carry app-health. TestRail and the headed GoCare UAT page were left visible beside the VS Code workspace. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

Updated 198 distinct cases and added five. All writes passed case-specific fresh GET verification. Smoke remains at ten and app-health covers 167 distinct cases. Live suite membership and scoped execution are tracked separately. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

This phase updated 164 distinct existing cases, including 158 app-health labels and 14 cases with substantive evidence changes. It created five cases. The final inventory confirms 293 cases, 163 with app-health, and 54 automation-ready or mapped. The authenticated Chrome and headed GoCare review windows were refreshed. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

The visible TestRail batch updated C8934355 and C8934356 and created C15290403. All writes passed individual fresh GET verification and related case steps retained prior evidence and attachment references. Latest live scope is 288 cases across 110 sections. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

287 live cases across 110 sections are individually classified. 286 existing cases were updated and one new case was created. All writes passed fresh GET verification. Documentation disposition, readiness and execution authorization are separate. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Continuation baseline verified against the live TestRail project.

| Measure | Count |
| --- | --- |
| Top-level TestRail workflow groups | 21 |
| Groups fully verified | 0 |
| Groups with destination or behavior observed | 16 |
| Groups awaiting fuller exploration | 5 |
| Total TestRail sections | 177 |
| In-scope sections | 110 |
| Excluded sections | 67 |
| Archival Activity sections excluded | 5 |
| Native mobile sections excluded | 13 |
| Reporting sections excluded | 49 |
| Original in-scope cases | 272 |
| Current in-scope cases | 286 |
| Individual case documentation dispositions | 272 |
| Fully verified existing case corrections | 64 |
| Fully verified existing case corrections in the earlier continuation | 10 |
| Cases requiring no changes | 2 |
| Partially corrected | 98 |
| Navigation setup corrections in the earlier pass, current scope | 105 |
| Navigation setup corrections in the fixture review pass | 10 |
| Existing cases updated in the earlier web-only pass | 4 |
| Existing cases updated in the requirement investigation pass | 6 |
| Requirement clarification required | 11 |
| Blocked dispositions | 95 |
| Obsolete candidates | 2 |
| Pending individual review | 0 |
| New cases created and verified | 14 |
| Existing case completion | 66/272 (24.3%) |
| Live cases audited for documentation | 286 |
| Individual partial cases analyzed in the earlier quality phase | 125 |
| Blocked cases mapped to reusable fixture families | 95 |
| Application-verified case outcomes | 80 |
| Documentation complete on reviewed evidence | 80 |
| Verified and automation-ready or already automated | 47 |
| Existing cases with quality edits read back in the earlier phase | 19 |
| Existing cases updated and read back in the fixture-plan phase | 2 |
| Existing cases updated and read back in the UAT preflight | 5 |

Individual documentation dispositions come from the live preconditions, separated actions, expected results and available browser evidence for each case. A blocked disposition identifies the specific evidence, access or permission needed to finish functional verification.

## Continuation and resume point

Finish blocked cases when authorized synthetic fixtures and role access are available. Resume with the remaining accessible web configuration checks and then the fixture-dependent web records, output and role workflows. Use the case register to find the specific open condition for each case.

The known Help content failure, disputed outcomes, and edited-form Change Password cancellation remain open. Functional follow-up requires an approved synthetic tenant and fixtures, authorized web role access, and the missing requirements. TestRail creation for evidence-backed coverage is authorized. GoCare state-changing operations remain subject to explicit authorization. [Case register and update audit](gocare-testrail-review-report.md)

## Current read-only pass

The repository search fixture contains First Name and GIN under a synthetic label. No seed approval, fixture owner, tenant confirmation, or equivalent authorization was present in the fixture, the repository audit, or the relevant TestRail cases. It remains unused. The create-employee fixture defines input defaults, and the generator produces candidate values. Neither establishes an approved seeded record. The vaccination spec reuses the employee search fixture and has no independent seed approval. No approved team-member, exam, or vaccination seed was identified.

Playwright verified the starting screens for team-member search, medical exam expirations, reviewed exams and vaccination search. Ten existing cases received navigation setup updates and C15289380 was created for Basic Search. Each TestRail write was read back and verified.

| Workflow | Cases | Open dependency |
| --- | --- | --- |
| Search Team Members | C8928070, C8928071 | Approved synthetic team member and company scope. Search and validation outcomes still require verification. |
| Medical Exam Expirations | C8934355, C8934356 | Synthetic company, employee status and matching/empty expiration windows. Exports require a synthetic-only dataset. |
| Search Reviewed Exams | C8934300, C8934301, C8934302 | Synthetic reviewed exams, authorized reviewer data, and matching/empty date windows. |
| COVID-19 Vaccination search | C8935292, C8935293, C15237380 | Synthetic-only employee and vaccination data plus an approved absent match. Search and validation outcomes still require verification. |

## Consolidated fixture requests

Please return the approved tenant and seed references through the agreed secure channel, with the fixture owner and a confirmation that the attached exam, vaccination, certificate and profile data are synthetic.

| Workflow | Exact fixture inputs and dependencies | States to prepare |
| --- | --- | --- |
| Employee search and details | Fictional first and last names, unique GIN for employees or Applicant ID for pre-employees, Date of Birth and an approved Company. Include a known Certificate Expiry Date for C9404218. Provide matching category, Area, Job Site and Geo Market only if those filters are in the authorized test scope. | One Active employee, one Inactive employee, one Pre-employee, and approved criteria guaranteed absent in the scoped tenant. For Details and Dashboard, provide an approved fixture with synthetic related health summary and a known dependent state if those cases are in scope. |
| Employee creation form | Blank form marks Employee Status, Title, First Name, Last Name, Gender, Date of Birth, Company and GIN Number required. It also defines enabled required validators for Primary Email and Relation. For later authorized creation, supply a fictional date of birth, tenant-approved option values and a mailbox sink for any email field. Confirm status-dependent GIN versus Applicant ID behavior. | A disposable candidate for each status under test, a known unused GIN or Applicant ID and an approved invalid or duplicate value where the case calls for it. Creation and invalid Submit still require explicit authorization. |
| Team-member search and role-based entry | Synthetic First Name, Last Name, Username, Email Address, User Role and approved Company. Include linked Employee GIN only where needed. The initial create screen requires User Role. Hidden validators cover Title, First Name, Last Name, Gender and Primary Email. Confirm whether Username and Owner Company become required for the selected role. | A matching enabled synthetic account, an inactive or locked disposable account where required, and a guaranteed absent username. Use a separate disposable fixture for unlock or edit scenarios. |
| Create and view medical exams | Approved employee GIN or Applicant ID, synthetic exam identifier where present, tenant-enabled exam type/MET to verify, and an approved Medical Center for the positive creation case. C8927856 documents Medical Center as mandatory. Other create-form requirements need the approved employee fixture before they can be confirmed. | An employee with no exam, one with an exam in Processing, and one with an existing synthetic exam suitable for view. For later record-changing cases, confirm which fixture may be changed and which notifications are directed to a test sink. |
| Reviewed exams and expirations | For reviewed exams, supply ISOS Reviewer or Client Reviewer role, synthetic reviewer User ID where used, the linked synthetic exam, and exact inclusive From Date and To Date. For expiration search, supply Company, employee Status, a supported Expiration Period or Custom period value, and known exam/certificate expiration dates. | A reviewed exam in range and an approved interval with no reviewed exam. Provide one expiration inside the chosen window, one outside it, and an approved empty-result company/status/period combination. Exports need a synthetic-only scope and separately authorized artifact handling. |
| COVID-19 vaccination search | Synthetic First Name, Last Name, GIN or Applicant ID, Date of Birth, Status and approved Company. Link a synthetic vaccination with the expected Vaccination Date, Vaccine Name and Brand. Supply Assignment Country, Employee Category, City and Area if those filters are to be verified. | One employee with a matching synthetic vaccination, approved criteria guaranteed absent, and an approved synthetic invalid First Name input for C8935293. No mandatory markers were observed on the initial search form. |

## Consolidated access and requirement requests

Approved requirement references are currently unavailable. Repository history, existing TestRail expectations and observed behavior support the dispositions below.

| Request | Purpose |
| --- | --- |
| Current-role synthetic-only scope | Confirm the saved web role can query the named synthetic employee, team-member, exam and vaccination fixtures without exposing real records. |
| ISOS Reviewer and Client Reviewer | Use authorized synthetic reviewer accounts where role-scoped reviewed-exam results or permission differences must be verified. |
| ISOS Admin, ISOS User, Chief Recruiter, Recruiter, Partner | Provide only the roles whose documented permission cases are in scope. Check their menu access and role-specific team-member or employee controls. |
| SLB restricted role and fixture | Verify the Create Exam denial documented by C9404214. Confirm the exact role/account combination the requirement covers. |
| Configuration, maintenance and outputs | Confirm an isolated configuration or maintenance scope for the controls missing in the current web role. Provide sanitized logs, an isolated email sink, or synthetic report fixtures as applicable before testing those workflows. |
| Approved requirements | Provide the Help content reference, Login validation and recovery rules, Change Password policy and edited-form Cancel expectation, role entitlements, exam status transitions and date-window rules. Confirm whether the Export Data builder should open for the saved role, which Service Management controls that role should see, and the expected successful import and file-validation outcomes. |

## Web-only continuation result

Four existing cases were updated and read back. The blank Owner Company check on web Mobile Static Content was verified. Import and Export Quest entry screens were verified. C15289381 was created and read back for the Service Management entry. Export Data remains inaccessible in the saved session.

## Requirement investigation pass

Reviewed current TestRail preconditions, step descriptions and expected results alongside the repository history, Playwright checks and dated audits. Reviewed metadata for 14 attached images in the targeted cases. Image contents with unverified sensitivity remain uninspected. No approved requirement reference was identified for the disputed expectations.

6 existing cases were updated and read back. C15289382 and C15289383 were created and read back for safe functional checks. Reminders and Documents is now counted among groups with an observed destination. Service Management operational checks still require a role and test service that expose those controls.

## Workflow validation and quality phase

All live case fields were checked. The 125 partial cases have separate navigation, action, expected-outcome and dependency entries. The 98 blocked cases have one primary reusable fixture family each. The dedicated Change Password surface was inspected for the Password length group. ERAMET was checked at its shared Company MET and Global MET screens, while the specific journeys remain fixture-dependent. Five groups still lack group-specific application evidence. No group has completed all applicable functional paths.

[Workflow completion matrix](gocare-workflow-completion-matrix.md) · [Synthetic fixture requirements](gocare-synthetic-test-data-requirements.md) · [Suite quality audit](gocare-testrail-final-quality-audit.md)

## Fixture preparation and validation pass

The prior 283-case inventory was reconciled before the Reporting exclusion. GoCare QA Atlas is the proposed shared company. The local manifest and generator cover nine fixture families and 98 unique blocked case IDs. No application records were provisioned. C8934508 advanced to verified and C9428818 retained its blocked linking outcome after the verified entry paths and fixture inputs were added. No new TestRail case was needed for the verified no-match scenario.

Five groups still lack group-specific application evidence. The next fixture-dependent actions require confirmation of the approved test tenant, acceptable roles and lookup values, isolated mail routing, operation-by-operation permission and cleanup ownership.

[Fixture setup proposal](gocare-synthetic-test-data-requirements.md#consolidated-fixture-setup-proposal-for-approval) · [Workflow completion matrix](gocare-workflow-completion-matrix.md)

## Revised UAT scope and provisioning status

Live TestRail included 281 web cases and 110 web sections after excluding the 49-section Reporting subtree. Two Reporting cases were removed from active calculations. Their TestRail records were left intact. Safe Company and Vaccination checks supported five existing case updates. The first synthetic company remains unprovisioned pending approved owner, access, association and notification-safe settings. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Create Company dependency investigation

UAT Create Company options and default validation were inspected without sending a completed Submit. C8934360 is fully verified through its blank and invalid-name client checks. C8934359 and C8928071 were clarified and read back. The live suite remains 281 cases across 110 sections. No synthetic record was created. [Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions) · [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Next resume point is the first approved existing company and its pre-seeded synthetic employee, exam and vaccination identifiers. Keep standalone Atlas creation on hold. Fresh TestRail GETs confirmed 281 in-scope cases and 110 sections. The complete suite has 303 cases and 177 sections. The excluded subtrees account for 22 cases and 67 sections. C8927852 received a synthetic-only setup and 13 separated steps. Fresh GET verified the update and retained the prior expected result and embedded attachment. The case remains blocked on the approved company and fixture. No case disposition changed. No fixture was created or associated.

## MY COMPANY fixture authorization and Employee Create validation

The live scope is 281 cases across 110 sections after the three excluded subtrees. The batch leaves 53 documentation-complete, 120 partially corrected, 96 blocked and 20 verified and automation-ready or already automated. The other 12 dispositions are unchanged. Zero cases were created. C8927853 and C15239583 were verified in GoCare UAT with all network requests blocked before clicking Submit. Malformed GIN and Primary E-mail Address produced the two documented messages. Untouched Submit produced nine mandatory-field messages, including Employee Title. Both forms remained open and the browser attempted no record submission. C8927852, C8927853 and C15239583 were updated and verified through fresh TestRail GETs. Original expected results and existing attachments were preserved. MY COMPANY is authorized for controlled synthetic creation in UAT. The Create New Employee company selector verified its ID as 129. The first candidate is Active, Mr Aster QAfixture, Male, 12-Feb-1982, Relation Employee. GIN and Primary Email remain unset. Obtain a test GIN or approved range and an approved isolated address with verified no-outbound handling for Create Employee. Run an exact uniqueness check before submitting. Do not create dependent records until parent-record and notification behavior is established. The registry has zero verified creations.

## MY COMPANY employee identifier preflight

Live TestRail GETs confirmed 281 in-scope cases across 110 sections. The current totals are 54 documentation-complete, 120 partially corrected, 95 blocked and 21 verified and automation-ready or already automated. No new case was created. C8927852 now records candidate GIN 97101 and its verified company-scoped preflight. C8927858 now documents the independent scoped synthetic name search and explicit no-results message. Fresh GETs verified both updates. Positive creation remains blocked. The specific Primary Email is approved. Employee creation remains pending verification that the MY COMPANY workflow cannot send or queue outbound notifications. No synthetic employee was created.

## MY COMPANY collision and recipient preflight

C8927852 was updated with the collision checks and the approved-recipient prerequisite. A fresh TestRail GET verified the changes and preservation of the intended outcome, attachment and unrelated fields. The case stays blocked. The supplied GIN returned no match under MY COMPANY (129). With Company and Employee Status unfiltered, Search Employees returned one exact match in the GIN Number column. The checks recorded only the match outcome. No employee record was opened. Alternative 97101 returned no matches in both the earlier company-scoped check and the current role-visible directory check. It is pending approval and recheck. The user permits creation notifications to the supplied Primary Email. Existing UI, repository evidence and notification case descriptions did not establish whether Create Employee can send or queue messages to other recipients. Creation remains on hold pending confirmation of that recipient boundary and approval of an alternative GIN. No creation or notification occurred. No case disposition changed.

## Recipient verification and functional validation batch

Live TestRail inventory is 282 cases across 110 sections, including 10 created cases, with 55 documentation-complete, 120 partially corrected, 95 blocked and 22 verified and automation-ready or already automated. Created and read back C15290180 for Custom Period bounds. Updated and read back C8927852, C8934356, C8935272, C8934361 and C8934362. Existing expectations, attachments and unrelated fields were preserved. No execution results were published. The MY COMPANY details form (company 129) shows Client Reviewer email and Due Date Reminders enabled. HR notification, latest-reminder loop and Vaccination Reminder were unchecked. The authorized role could see no recipient allowlist or Create Employee recipient preview. The settings do not establish which recipients the server would use on creation. Hold Employee Create until that recipient boundary is verified.

## Configuration and reviewed-exam validation continuation

Live TestRail scope is 283 cases across 110 sections. Nine existing cases advanced to documentation complete and the new fixture-free Reviewed Exams case C15290212 was created. The batch verified writes for 23 existing cases and one new case. Totals are 65 documentation-complete, 111 partially corrected, 95 blocked, and 32 verified and automation-ready or already automated. Reconciled the 120 earlier partial cases and all 95 blocked fixture IDs against the live inventory. No existing automation scripts were changed. No application records or settings were changed. Employee creation stayed deferred without a repeat recipient investigation.

| Primary dependency | Remaining partial cases | Safe alternative or evidence still needed |
| --- | ---: | --- |
| Disposable configuration and write authorization | 52 | Add drafts, client rejection, and Cancel can be verified without writes. Successful persistence, duplicate handling, and delete need disposable configuration and specific permission. |
| Catalog data, selection combinations, or server validation | 27 | Use known read-only catalog entries and exact synthetic no-match searches. Remaining branches need a known compatible lookup, a scoped server query, or a product decision. |
| Synthetic linked business records | 11 | Reuse approved seeded employee, team-member, reviewed exam, expiry, or vaccination records. Use absent synthetic keys where the expected result is no match. |
| Scoped import, export, upload, or messaging | 11 | Verify local file and form controls. Server processing requires synthetic-only input, output, or authorized isolated delivery. |
| Role, defect, or disputed requirement | 7 | Retain intended results. The current role or available requirements cannot verify the remaining outcome. |

| Shared dependency for blocked cases | Cases |
| --- | ---: |
| Disposable web accounts | 28 |
| Reusable synthetic employee and clinical records | 29 |
| Disposable company/ERAMET configuration | 12 |
| Isolated notification delivery and events | 12 |
| Scope-specific role accounts | 8 |
| Sanitized services, logs and document outputs | 6 |

## Company catalog filter follow-up

Live scope is 283 cases across 110 sections. Across this continuation, 30 existing cases and one new case were written and verified through fresh GETs. Twelve existing cases advanced to complete. The current totals are 68 documentation-complete, 108 partially corrected, 95 blocked, and 35 verified and automation-ready or already automated. The read-only catalog pass added verified evidence to C8934375, C8934380, C8934386, C8934396, C8934401, C8934406 and C8934416. TestRail read-back preserved each case ID, original attachment references and unrelated fields. Job Site, Job Title and Employee Category are complete. Area, Business Area, Geo Market and Additional Information retain their remaining owner-specific branches. Three catalog cases were removed from the earlier partial dependency count.

## Catalog verification and status reconciliation

The live scope is 285 cases across 110 sections, including all 283 pre-phase cases and two new cases. Seven existing cases advanced to complete. Fresh GETs verified the changes to 23 existing cases and both newly created cases. Current counts are 77 documentation-complete, 100 partially corrected, 95 blocked, 11 requirement clarifications and 2 obsolete candidates. Automation readiness is tracked separately with 44 verified and automation-ready or already automated. Verified new cases C15290213 and C15290214 cover threshold ordering and the inclusive reminder-frequency limits. Used read-only scopes and existing catalog selections for positive and no-match searches. Every GoCare Save and Submit capable of persistence was blocked. No application records, configuration or existing automation scripts changed. [Blocker-resolution matrix](gocare-clarifications-and-defects.md#blocker-resolution-matrix)

## Dependency priority and documentation handoff

Live scope is 286 cases across 110 sections. All 285 prior cases remain present. Current outcomes are 79 documentation-complete, 99 partially corrected, 95 blocked, 11 requirement clarifications and 2 obsolete candidates. Automation readiness is tracked separately, with 46 verified and ready or already automated. Fresh TestRail GETs verified five existing case updates and the new case C15290370. The two requirement cases retain their original expectations. Existing attachments and unrelated fields were preserved. [Prioritized approvals](gocare-clarifications-and-defects.md#prioritized-approval-table) and [automation handoff](gocare-automation-readiness-matrix.md#automation-handoff-for-the-44-verified-cases).

Follow-up checks confirmed that blank Submit on the unsaved MET form reports Company, Global MET and MET Name as required, with no attempted request. MY COMPANY plus the Partner role returned the documented no-match Fitness Conclusion message. Fit with restrictions alone returned a different result, so the separate conclusion-only fixture is still needed. Fresh TestRail GETs verified C8934430 and C8934460 with their original attachment references.

## Disposable accounts and configuration planning

Live scope is 286 cases across 110 sections. Current statuses are 80 documentation-complete, 98 partially corrected, 95 blocked, 11 needing a requirement decision, and 2 obsolete candidates. Verified automation totals are 47, comprising the seven existing mapped cases, 39 previously planned candidates, and one additional Fitness Conclusion candidate. Six TestRail case updates were verified by fresh GET. C8934460 is documentation-complete. C8928071, C8934428, C15239053, C9404079 and C8934507 now record the verified branches or setup limits and retain their pending outcomes. Existing attachment references, unrelated fields and intended business results were preserved. [Minimum accounts and configuration proposal](gocare-synthetic-test-data-requirements.md#minimum-disposable-account-pack).

## Provisional decisions and final documentation handoff

The audited live inventory reconciles all 286 case IDs across 110 in-scope sections. Primary dispositions remain 80 documentation-complete, 98 partially corrected, 95 blocked, 11 requiring product clarification and 2 obsolete candidates. Verified automation readiness remains separate at seven mapped cases and 40 candidates. Fresh TestRail GETs confirmed 13 updated cases, including 11 provisional decisions and the related positive-generation and document-download cases. Existing intended and overall expectations, attachment references and unrelated fields were preserved. No new case was needed for the zero-eligible behavior because C8933409 already covers that scenario. [UAT owner request](gocare-synthetic-test-data-requirements.md#consolidated-uat-owner-provisioning-request) and [remaining decisions and activities](gocare-clarifications-and-defects.md#proposed-decisions-pending-product-confirmation).
