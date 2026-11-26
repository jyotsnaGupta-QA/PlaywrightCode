# GoCare requirement clarifications and suspected defects

**Final documentation checkpoint · 26 November 2026**

The 11 requirement clarifications remain open. Ten cases gained explicit Test Data without changing intended expectations. Keep protected roles, log operations, notification sinks, account outcomes, and permission-sensitive verification separately gated. Help and Export Data remain unresolved. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

The 11 requirement cases are unchanged. Help and Export Data remain unresolved, and both legacy candidates remain retained. Provider Country-to-center interaction and Health Check required-unit behavior require new evidence. No changes were inferred from empty role-dependent UI. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

The 11 requirement clarifications and two legacy candidates retain their dispositions. Error Logs and Unlock User hrefs are now known. Scoped roles and sanitized or disposable targets remain required. No server lookups, registration writes, clinical operations or message generation were exercised. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

C8934355 and C8934356 now distinguish client-only behavior from the intended server results. Eligible, zero-eligible and export branches still require synthetic-only data and output permission. All 11 product decisions and the two retained legacy candidates remain open. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

11 requirement clarifications and two candidates for product confirmation retain their prior dispositions. Help and Export Data remain open. The current handoff keeps intended expected results and observed behavior separate. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Review baseline refreshed 25 November 2026.

| Module and cases | Observed behavior | Documented expectation and discrepancy | Evidence | Clarification and impact | Status |
| --- | --- | --- | --- | --- | --- |
| Help, C8934304 and C15239318 | Both entry points opened the same role-specific popup. An existing footer run recorded Requested Resource Not Found in the content frame. | Both cases expect readable Help content. Navigation succeeds while the recorded content assertion fails. | [Prior workflow audit](gocare-master-suite-correction-progress-2026-11-25.md), [Allure result](../allure-results/62cb4bae-fde8-4cf2-b170-2abcfbf96aba-result.json) | Confirm the supported Help landing frame and content for this account. Users may reach the shell without instructions. | Content failure reproduced on both entry points. Expected content retained. |
| Change Password, C15239311 and C15239317 | Current live inspection found Cancel in the main form. Cancel returned the untouched form to Search Employees. | C15239311 also requires approved policy text and the full control list. C15239317 expects cancellation after changing form values. | Live browser observation and [case update audit](gocare-testrail-review-report.md) | Confirm the policy and provide approved synthetic form inputs to verify the edited-form outcome. | C15239317 navigation updated and read back. Edited-form case remains partially corrected. |
| Login, C8928021 | Fresh public login loaded. The prior initial-state check observed Submit disabled on the empty form. | Title expects an alert. The separated step and overall result instead expect disabled Submit after entry of a verification code with username and password blank. | Live case GET and [prior login observation](gocare-master-suite-correction-progress-2026-11-25.md) | Confirm the interaction design and reproduce the specific credential-blank state with an authorized interactive session before correcting the title or steps. | Requirement clarification required |
| Login guides, C8934314 and C8934315 | Earlier inspection did not locate the documented PDF links on the public login page or Search Employees. | The cases require opening the informational PDFs. | [Prior workflow audit](gocare-master-suite-correction-progress-2026-11-25.md) | Confirm whether the documents remain supported and identify their intended access path. | Obsolete candidates pending confirmation |
| Search Employees, C8927858 | Prior synthetic query yielded zero located result rows and did not establish a completed search postback or the result message. | The case requires an explicit no-results message after search. | [Prior workflow audit](gocare-master-suite-correction-progress-2026-11-25.md) | Re-run against a confirmed synthetic-only scope and capture the postback and message. Lack of a confirmed response leaves the application behavior unresolved. | Application evidence required |
| My Details, C15239321 | Profile route resolves from Search Employees. Its contents remain uncharacterized. | The current case expects Team Member Details to display. | [Prior individual review](gocare-testrail-case-review-2026-11-25.md) | Provide a synthetic profile with the same applicable permissions before asserting page content. | Prior HOLD retained |
| Employee Details Quit, C15239582 and C8934323 | Employee record route and Quit action remain unobserved for an approved synthetic record. | C15239582 mixes Employee Details and Team Member Details and expects Search Employees in the step. C8934323 also names Search Employees in its title and warrants a coverage comparison. | [Prior individual review](gocare-testrail-case-review-2026-11-25.md), live inventory | Verify the actual Employee Details exit and unsaved-change behavior using an approved record. Compare the cases before any duplicate disposition. | Prior HOLD retained for C15239582 |
| Employee Dashboard, C8928138 | The dashboard was not opened because an approved synthetic employee was unavailable. | The case expects a new tab with welcome text and named health sections. | [Prior individual review](gocare-testrail-case-review-2026-11-25.md) | Confirm the approved synthetic record, account permissions and expected section set. | Prior NOT APPROVED retained |

## Current browser evidence

- Both Need Help? and Help opened the expected popup. Each content frame displayed Requested Resource Not Found in a live Playwright check, and neither displayed the checked Introduction or Quick Guide content. The existing Help cases retain their expected result.
- The public login page again showed disabled Submit in the empty state. The Forgot Password / Unlock link opened Forgot Password Username. No recovery request was sent.
- Where the existing session reached a configuration page but a documented control was unconfirmed, the [case register](gocare-testrail-review-report.md) names the affected case and control. The documented expectations remain in TestRail while role access, field labels, and configuration context are clarified.

## Continuation findings

- C8934509 and C8934512 reached their expected routes. The authenticated session had no visible matching form controls. Approved role, tenant configuration, and field expectations are needed.
- C8934502 still needs the approved Company Medical History blank selection response and explicit authorization before testing Submit.
- C8935228 displayed the exact documented invalid Base64 message. C8935237 produced an encrypted result. A fresh utility form decrypted the result back to the original synthetic text.
- Both Help entry points retain the previously reproduced “Requested Resource Not Found” finding. Change Password cancellation after editing remains pending approved synthetic input.
- Export Data navigation still requires an accessible builder entry.

## Checks requiring fixtures or approved expectations

| Area | Current evidence | Outstanding |
| --- | --- | --- |
| Employee creation | Required marks and enabled validators observed on the blank form. | Confirm which Primary Email, Relation, GIN and date requirements change by employee status. |
| Team member creation | User Role required on entry. First Name, Last Name, Title, Gender and Primary Email have enabled validators on hidden fields. Username and Owner Company validators are initially disabled. | Confirm per-role field requirements and approved company bindings. |
| Exams | Blank Reviewed Exams and Medical Exam Expirations forms are accessible. | Provide synthetic reviewer/exam records and accepted date window rules. Confirm the create-exam field list after an approved employee is available. |
| Service Management | Maintenance > Service Management opens. | Confirm supported role and expected controls before testing operations. |
| Help and Change Password | Existing findings are preserved. | Approved Help content, password policy and edited-form cancellation expectations remain open. |

## Web-only continuation findings

- Export Data still times out at /Export/BuildReport.aspx. Confirm whether the builder should open for the saved web role and environment.
- Service Management opens with the documented route and heading. Confirm which service controls this web role should see before testing service operations.
- Import, Export Quest and Mobile Configuration operations that write or produce data remain dependent on approved fixtures and scope.
- The Login page case about the Mobile Guide PDF is a browser link check. Its open requirement is whether the web link is still supported.
- The blank Owner Company validation is verified. The follow-up did not establish that Reset returns to the same Mobile Static Content form with the message cleared.

## Requirement investigation and outcomes

Reviewed current TestRail preconditions, step descriptions and expected results alongside the repository history, Playwright checks and dated audits. Reviewed metadata for 14 attached images in the targeted cases. Image contents with unverified sensitivity remain uninspected. No approved requirement reference was identified for the disputed expectations.

| Area | Evidence and disposition |
| --- | --- |
| Help | Keep readable Help content as the intended outcome. C8934304 and C15239318 retain their expectations. Requested Resource Not Found is the observed defect on both entry points. |
| Login | C9031928 blank-code gating is verified. C8928021 still has an alert in its title and a disabled Submit expectation in its body. The credential-negative and recovery delivery cases await an authorized scope. |
| Change Password | C15239311 now separates the observed controls and preserves the existing policy assertion. C15239317 after-edit Cancel remains open. The password length expectation requires further requirement evidence. |
| Import File | The picker has no browser accept filter. The local selection check cannot establish server-side format validation. C8933402 describes a filename-format error for an .xlsx file. Its naming rule and the supported import template are unresolved. |
| Export Data | Timeout through the menu and direct URL is retained. The intended builder functionality remains in the case evidence. |
| Service Management | No operational controls were visible for the saved session. Role-specific status visibility and authorized service operations need additional evidence. |

[Historical TestRail case inventory](testrail-inventory.md) · [Earlier workflow observations and correction audit](gocare-master-suite-correction-progress-2026-11-25.md) · [Help assertions in Playwright](../tests/footerNavigation.spec.ts)

## Quality-phase follow-up

- The Mobile Static Content Reset follow-up now confirms return to the same form with the required message cleared. Menu Item Reset clears a synthetic alternate-name filter.
- The Change Password client inputs expose maxlength 15 and validation hooks. The required server policy and cancellation after editing remain open.
- Shared Company MET and Global MET controls were observed. ERAMET role, age-boundary, mapped MET and switching rules need approved evidence.
- Readable Help content remains the intended result. “Requested Resource Not Found” and the Export Data timeout remain recorded as defects or blockers.

[Workflow completion matrix](gocare-workflow-completion-matrix.md) · [Synthetic fixture requirements](gocare-synthetic-test-data-requirements.md) · [Suite quality audit](gocare-testrail-final-quality-audit.md)

## Fixture-phase follow-up

- Export Data timed out again through the saved role. Its intended behavior is preserved.
- Help content, password policy, edited-form Cancel, server-side Import validation and role-dependent Service Management remain open. The fixture setup requires a confirmed test tenant and approval before GoCare records can be provisioned.

[Fixture setup proposal](gocare-synthetic-test-data-requirements.md#consolidated-fixture-setup-proposal-for-approval) · [Workflow completion matrix](gocare-workflow-completion-matrix.md)

## UAT fixture and requirement follow-up

- The approved UAT host is https://gocare.msbedrock.com/. Create Company exposes an Owner Company validator, Access Rights, Association, durations and notification-related settings. The current session has not established the approved synthetic values or no-delivery configuration for a safe new company.
- C8935293 displays “Please enter a valid First Name.” in the observed invalid-input branch. Its existing overall expectation mentions no criteria and was retained pending clarification.
- Help, Export Data, password policy, edited-form Cancel, server-side Import File, and role-dependent Service Management remain open. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Remaining fixture decisions

The Owner Company selector defaults to Select Company and offers eight existing-company entries. No standalone option is visible. Its required validator accepts the blank placeholder on the client because the selected sentinel 0 differs from its empty initial-value setting. The server-side owner rule and effects of a successful Submit remain unverified. HR notification, client reviewer email, latest reminder loop, vaccination reminder and due-date reminder controls are unchecked on the blank form. Active Company is checked. A completed Submit was not exercised, so delivery, queueing and inheritance remain unknown. The required numeric fields expose client ranges only. The approval table records the exact values or safety evidence still needed. [Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions) · [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Consolidated fixture decisions are the approved existing company name and ID, allowed record and role scope, exact synthetic identifiers and states, enabled clinical lookup values and evidence of no outbound notifications for any proposed creation. The Help defect, Export Data timeout, password policy, edited Change Password Cancel, server-side Import File validation and role-dependent Service Management remain open.

## MY COMPANY fixture authorization and Employee Create validation

Remaining inputs for the first Active employee are a reserved GIN or approved range and an approved isolated recipient with evidence that MY COMPANY Create Employee cannot send or queue outbound communications. An inactive checkbox or placeholder domain cannot establish server delivery behavior.

## MY COMPANY employee identifier preflight

The user approved the specific Primary Email for Aster QAfixture. Keep the address in the original approval. Create Employee remains on hold until no outbound email, notification or queueing is verified. No application record was created or changed. No approved UAT notification configuration or delivery evidence was available. All outstanding application defects and disputes remain open.

## MY COMPANY collision and recipient preflight

The user permits creation notifications to the supplied Primary Email. Existing UI, repository evidence and notification case descriptions did not establish whether Create Employee can send or queue messages to other recipients. Creation remains on hold pending confirmation of that recipient boundary and approval of an alternative GIN.

## Recipient verification and functional validation batch

The MY COMPANY details form (company 129) shows Client Reviewer email and Due Date Reminders enabled. HR notification, latest-reminder loop and Vaccination Reminder were unchecked. The authorized role could see no recipient allowlist or Create Employee recipient preview. The settings do not establish which recipients the server would use on creation. Hold Employee Create until that recipient boundary is verified. Ask only for the effective Create Employee recipient rule or UAT outbound allowlist for the approved address. No settings were changed.

## Configuration and reviewed-exam validation continuation

Job Title rejects the invalid entry but displays "Please enter a valid Job Site Name." The intended Job Title wording remains in C8934400. Employee creation remained deferred.

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

The configuration/catalog dependency now accounts for 27 of the remaining partial cases. The other dependency counts remain 52 requiring disposable configuration/write authorization, 11 for synthetic linked records, 11 for scoped file or messaging workflows, and 7 for role, defect or requirement evidence.

## Catalog verification and status reconciliation

Reviewed the seven priority cases without reopening the employee-create recipient investigation. Help is an observed application defect. Dashboard control absence may depend on role or tenant eligibility. Password policy copy and the contradictory Medical History expectations require authoritative decisions. Reviewed Exams blank criteria requires an authorized synthetic-only server-validation scope.

## Blocker-resolution matrix

Each unresolved case is listed once under its primary dependency. These counts are upper bounds for planning. A case can have further prerequisites after its primary dependency is resolved. Obsolete candidates remain separate in the primary audit.

| Required input or permission | Affected TestRail case IDs | Cases potentially unblocked | Proposed safe resolution | Associated risks |
| --- | --- | ---: | --- | --- |
| Fixed Help content or an authoritative route for the same Help entry points | C8934304, C15239318 | 2 | Retest the existing header and footer expectations after the application defect is resolved. | Masking the defect by adopting the error as the expected behavior. |
| Corrected wording or an approved specification decision for the Job Title validation | C8934400 | 1 | Retest the rejected Job Title value against the unchanged expected field name after the wording is resolved. | Accepting an incorrect field label as intended behavior. |
| Equivalent role or tenant configuration that should expose both Dashboard masters | C8934509, C8934512 | 2 | Compare the same routes using a sanctioned role and scope. Determine whether the controls are restricted or the UI fails to render. | Excess entitlements or misdiagnosing a permissions issue as a defect. |
| Approved current password policy and required UI copy | C15239311 | 1 | Verify the untouched Change Password form against the approved copy. Use separate authorized synthetic input for any edit/cancel behavior. | Validating inferred policy or changing an account. |
| A synthetic-only reviewer scope or authoritative evidence that blank criteria cannot return clinical data | C8934301 | 1 | Use the blank search only when the result scope is demonstrably safe. Keep the invalid-date client case separate. | An unfiltered query may expose protected exam records. |
| Authoritative product decisions or approved source material for the cited conflicting expectations | C8928021, C8928112, C8932733, C8933409, C8934305, C8935150, C8935288, C8935289, C9217325, C15239323, C15239324 | 11 | Resolve each intended business outcome before altering expected results. Keep observed behavior and existing prose as evidence. | Encoding a defect or an unsupported assumption as a product requirement. |
| Specific approved catalog choices, compatible combinations or server validation evidence | C8934375, C8934380, C8934386, C8934416, C8934426, C8934428, C8934430, C8934491, C8934494, C8934505, C8934506, C8934507, C8934510, C8934514, C8934516, C8934580, C8934597, C8935137 | 18 | Reuse MY COMPANY and existing non-personal catalog entries. Supply a scoped owner with the right state, or evidence for a disputed transition, where these options are unavailable. | Unbounded queries or treating an unverified data combination as an application defect. |
| Disposable configuration, compatible lookup values and operation-specific write permission | C8934365, C8934366, C8934373, C8934376, C8934378, C8934381, C8934384, C8934387, C8934394, C8934395, C8934397, C8934399, C8934402, C8934404, C8934407, C8934414, C8934415, C8934417, C8934421, C8934461, C8934462, C8934492, C8934493, C8934502, C8934503, C8934511, C8934513, C8934517, C8934518, C8934521, C8934522, C8934523, C8934535, C8934552, C8934584, C8934588, C8934594, C8934595, C8934621, C8934622, C8935138, C8935140, C8935143, C8935144, C8935148, C8935207, C8935208, C8935209, C8935212, C8935213, C8935214 | 51 | Use read-only catalogs and unsaved browser validation first. Run persistence or duplicate submission only in the approved disposable scope. Keep existing company settings and records intact. | Changes to active mappings, shared defaults or downstream access. |
| Approved synthetic linked employee, team-member, exam, or vaccination records | C8928068, C8928069, C8928070, C8928071, C8934300, C8934302, C8934355, C8934356, C8935292, C8935293, C15239317 | 11 | Supply known IDs and relevant statuses. Run exact read-only searches and separate record-free validation from positive results. | Opening real employee or clinical information or changing its state. |
| Approved synthetic-only import/upload fixtures, export scope, or isolated messaging setup | C8928025, C8933401, C8933402, C8933403, C8933408, C8935246, C8935270, C8935272, C8935273, C8935274, C8935491 | 11 | Verify local controls first. Submit, export or send only under the appropriate separate approval and isolated input/output boundary. | Accidental persistence, sensitive output, or unexpected delivery. |
| Disposable UAT web accounts and approved authentication policy | C8928019, C8928020, C8928023, C8928026, C8928027, C8928028, C8934306, C8934307, C8934316, C8935291, C9404079, C9404080, C9404081, C9430419, C9430421, C9430422, C9430423, C9430424, C15239053, C15239312, C15239313, C15239314, C15239315, C15239316, C15239321, C15239322, C15239580, C15239581 | 28 | Stage resettable test accounts and limited recovery routes. Use secure credential transfer and keep password change, lockout and delivery in a separately authorized test run. | Unplanned lockout, credential exposure, or recovery mail. |
| Accounts with the expected scoped role and a reference entitlement matrix | C8935483, C8935484, C8935485, C8935486, C8935487, C8935488, C8935490, C9404214 | 8 | Provide role-specific sessions with the least permission. Run read-only menu and action visibility comparisons. | Access to unrelated employee or company data. |
| Seeded synthetic employee and team-member identifiers and verified statuses | C8927385, C8927852, C8927857, C8928136, C8928137, C8928138, C8932676, C8932729, C8934323, C8934326, C9404218, C15239582 | 12 | Provide a small reusable MY COMPANY fixture set first. Inspect only the exact synthetic IDs and use independent absent keys for no-match tests. | Real employee disclosure or changes to a parent record. |
| Seeded synthetic employee, exam, vaccination and expiration combinations | C8927386, C8927485, C8927533, C8927534, C8927855, C8927856, C8932730, C8932731, C8932732, C8932734, C8932739, C8932744, C8934317, C8934318, C8934319, C8934320, C8934321 | 17 | Provide known reviewed, processing, and exam-free states plus approved clinical lookup values. Validate read-only paths before requesting any authorized child creation. | Clinical-data disclosure or inadvertent parent updates. |
| Isolated notifications or a documented recipient restriction and approved event triggers | C8934322, C8934324, C8934325, C9430379, C9430380, C9430381, C9430382, C9430383, C9430384, C9430385, C9430386, C9430387 | 12 | Use a separate recipient allowlist or sink and disposable event records. Keep Aster QAfixture creation deferred until recipient safety is independently established. | Delivery or queueing to unintended recipients. |
| Disposable company scope and explicit configuration-write permission | C8934359, C8934361, C8934362 | 3 | Use separate approved test configuration for create, edit, duplicate, and any requested destructive behavior. Use MY COMPANY only for approved read-only configuration inspection. | Config changes propagate to existing records or connected workflows. |
| Disposable ERAMET-equivalent mapping and approved MET rules | C9428818, C9428819, C9428821, C9428822, C9428823, C9428824, C9428825, C9428826, C9428827 | 9 | Use an isolated mapping and synthetic employee/exam variants with written validity, age and routing expectations. | Incorrect assignment or validity periods in shared configuration. |
| Scoped Maintenance role and sanitized logs or disposable services | C8935282, C8935283, C8935284, C8935287, C8935290 | 5 | Give read-only access first. Any service or user mutation requires separately approved disposable scope and authorization. | Service interruption or exposure of logs and user information. |
| Sanitized document, isolated output location, and permission to retrieve it | C8933427 | 1 | Use one seeded synthetic document and verify only its contents in an approved output location. | Sensitive document download or accidental disclosure. |

The 204 listed cases comprise 98 partially corrected, 95 blocked, and 11 needing a requirement decision. No approvals, configurations, data, or roles were changed while preparing this matrix.

## Business decisions for the 11 requirement cases

Expected behavior is from the current TestRail record. The two destructive scenarios were not executed. Field or route observations below are limited to approved read-only evidence.

| Case | Existing expected behavior | Observed application behavior | Discrepancy or gap | Business decision needed |
| --- | --- | --- | --- | --- |
| C15239323 | Title calls for a Contact Information section. The setup names Team Member Details. No steps or field expectations exist. | The authenticated My Details navigation opens /UserManagement/ViewUser.aspx. Contact fields were not inspected on a real profile. | The source names Team Member Details while prior evidence establishes My Details. The intended view and required fields are unspecified. | Is this for the signed-in user or for a team member opened through Search Team Members? Which contact labels and permissions must be visible on the approved synthetic profile? |
| C15239324 | Title calls for an Administrative Information section. No setup, steps, or overall result exists. | The My Details route is available. Section content has not been verified using a synthetic account. | The expected field list, values and role visibility are unspecified. | Which administrative fields must be shown, and to which role? Should fields be read-only, and how should missing values display? |
| C8932733 | Title describes Recommendation Letter deletion when no exam exists. No steps, fixture or expected response exists. | An approved exam-free synthetic profile and its recommendation-letter controls were unavailable. Delete was not exercised. | The case does not say whether the operation is hidden, disabled, or produces a message when no exam exists. | For a synthetic employee with no exam, should Delete Recommendation Letter be hidden, disabled, or selectable with an empty-state message? Supply the exact expected response. |
| C8928112 | Select Delete Reminders, choose an exam and reminder type, verify Sent Reminder Details, confirm, validate credentials, and delete the reminder successfully. The overall result is blank. | No approved synthetic employee/exam/reminder tuple or authorized deletion run was available. | The detailed flow claims deletion, while the scope, authentication role, and final effect on the reminder history are unspecified. | Is this a permanent removal or a status change? Which role can authenticate it, and should the target disappear or remain as an audit entry? |
| C8933409 | The record has no defined steps, fixture, or expected result. Its notes identify an intended negative scenario without specifying it. | Generate Reminders and Documents opens at /MedicalExam/GenerateReminderAndHealthPassport.aspx with Company, dates, Search and Reset. Generation was not triggered. | There is no defined negative business condition or safe expected output. | Which scenario should this case cover, such as no eligible records, invalid dates, or a missing company? What exact message, output count, and button state should follow? |
| C8935150 | The detailed Submit step expects a successful Medical History update. The overall expected result says the edit fails. | Record editing and Submit were not exercised. The Medical History master route was verified in the prior catalog work. | The detailed and overall expectations contradict each other. | Is this a valid edit that should persist, or a negative edit that should be rejected? Specify the test value, message, and final record state. |
| C8934305 | Maintenance should display Select an operation with Message, Page, Start/Stop Email Service, and Delete Email Queue. | /SystemConfiguration/Maintenance.aspx opened. The available role did not establish that selector or those four choices. No action was invoked. | The expected controls are not confirmed in this role. The cause could be access, tenant configuration, or a stale specification. | Are all four choices still supported on this route? Which role and tenant setting should show each one, and what labels should be used? |
| C8935288 | Title calls for an Error Log download, but no selection rules, steps, expected file, or contents are documented. | No approved sanitized log or role-confirmed download flow was available. No download occurred. | The expected action and result cannot be reproduced safely from the record. | Which role, log category and date range should be used, and what filename, format, and approved payload fields should a download contain? |
| C8935289 | Title calls for Error Log deletion. The case has no target, confirmation text, audit outcome, or postcondition. | The Delete path was not exercised. No disposable logs were authorized. | The business policy and expected scope of deletion are missing. | Which role may delete which disposable log entries? What confirmation, retention rule, audit entry, and result should be asserted? |
| C8928021 | Title expects an alert. Detailed and overall results say Submit is disabled with Username and Password blank after entering a verification code. | In a public offline form, Username and Password stayed blank. Submit was disabled both before and after entering a six-character placeholder, with no attempted request. A valid interactive challenge was not used. | The title conflicts with the body. The safe observation supports disabled Submit for the placeholder case but does not establish the valid-challenge behavior. | With a valid verification code and blank credentials, should Submit remain disabled or be enabled and raise an alert? If an alert is intended, what exact text is required? |
| C9217325 | The source says the user can see profile details below, but lists no labels and has no overall expected result. | The profile/My Details entry was observed. A synthetic account and field inspection were unavailable. | The intended profile view, field list, and permissions are unresolved. | Which page and role are in scope, and which sections, field labels, visibility rules, and blank-state defaults constitute a pass? |

## Obsolete candidates for product review

| Case | Existing coverage | Supporting evidence | Reason it may be obsolete and decision needed |
| --- | --- | --- | --- |
| C8934315 | Public login link Your Dashboard! opens Quick_Guide_Dashboard.pdf. | The earlier public login and Search Employees inspections found neither guide link. The latest anonymous login inspection also found no guide controls with the documented labels. | The legacy public access path may have been retired or moved. Confirm retirement or provide the supported label, route, and replacement PDF. |
| C8934314 | Public login link Your Mobile Application! opens Quick_Guide_Mobile_App.pdf. | The earlier public login and Search Employees inspections found neither guide link. The latest anonymous login inspection also found no guide controls with the documented labels. | Native mobile tests are excluded, while this existing case concerns a web login link. Confirm whether the web entry is retired or provide the supported replacement. |

Both records remain in TestRail as obsolete candidates pending the product decision.

## Ranked dependency groups

Scores use current evidence. Case reach contributes one point per case up to 30. Criticality and automation potential each contribute up to 20. Lower effort and risk each contribute up to 10. Authorized data availability contributes up to 10. Ratings run from 1 to 5. Higher effort or risk reduces priority. Ties favor case reach, then business criticality. The rankings do not authorize any operation.

| Rank | Dependency | Cases | Business criticality | Automation potential | Effort | Risk | Authorized data | Score |
| ---: | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
| 1 | Disposable UAT web accounts and approved authentication policy | 28 | 5 | 5 | 3 | 4 | 2 | 82 |
| 2 | Specific approved catalog choices, compatible combinations or server validation evidence | 18 | 4 | 5 | 2 | 2 | 4 | 78 |
| 3 | Disposable configuration, compatible lookup values and operation-specific write permission | 51 | 4 | 4 | 4 | 5 | 2 | 72 |
| 4 | Seeded synthetic employee and team-member identifiers and verified statuses | 12 | 5 | 5 | 3 | 3 | 2 | 68 |
| 5 | Seeded synthetic employee, exam, vaccination and expiration combinations | 17 | 5 | 5 | 4 | 4 | 1 | 67 |
| 6 | Approved synthetic linked employee, team-member, exam, or vaccination records | 11 | 5 | 5 | 3 | 3 | 1 | 65 |
| 7 | Authoritative product decisions or approved source material for the cited conflicting expectations | 11 | 4 | 4 | 2 | 2 | 1 | 61 |
| 8 | Accounts with the expected scoped role and a reference entitlement matrix | 8 | 5 | 4 | 3 | 3 | 1 | 58 |
| 9 | Approved current password policy and required UI copy | 1 | 5 | 4 | 1 | 2 | 1 | 57 |
| 10 | Isolated notifications or a documented recipient restriction and approved event triggers | 12 | 5 | 4 | 4 | 5 | 1 | 56 |
| 11 | Approved synthetic-only import/upload fixtures, export scope, or isolated messaging setup | 11 | 4 | 4 | 4 | 4 | 1 | 53 |
| 12 | Fixed Help content or an authoritative route for the same Help entry points | 2 | 3 | 4 | 2 | 1 | 2 | 52 |
| 13 | Disposable ERAMET-equivalent mapping and approved MET rules | 9 | 4 | 4 | 4 | 4 | 1 | 51 |
| 14 | Corrected wording or an approved specification decision for the Job Title validation | 1 | 2 | 3 | 1 | 1 | 4 | 49 |
| 15 | A synthetic-only reviewer scope or authoritative evidence that blank criteria cannot return clinical data | 1 | 4 | 4 | 2 | 4 | 1 | 47 |
| 16 | Equivalent role or tenant configuration that should expose both Dashboard masters | 2 | 3 | 3 | 2 | 2 | 2 | 46 |
| 17 | Scoped Maintenance role and sanitized logs or disposable services | 5 | 4 | 3 | 4 | 5 | 1 | 41 |
| 18 | Disposable company scope and explicit configuration-write permission | 3 | 4 | 3 | 4 | 5 | 1 | 39 |
| 19 | Sanitized document, isolated output location, and permission to retrieve it | 1 | 3 | 3 | 3 | 4 | 1 | 37 |

## Prioritized approval table

Each case is listed once under its primary dependency. Counts indicate potential coverage after approval and prerequisite verification. See the adjacent business decisions table for the 11 exact requirement questions.

| Rank | Dependency | Affected TestRail case IDs | Potentially unblocked | Exact input, permission, or decision needed | Recommended resolution | Risks |
| ---: | --- | --- | ---: | --- | --- | --- |
| 1 | Disposable UAT web accounts and approved authentication policy | C8928019, C8928020, C8928023, C8928026, C8928027, C8928028, C8934306, C8934307, C8934316, C8935291, C9404079, C9404080, C9404081, C9430419, C9430421, C9430422, C9430423, C9430424, C15239053, C15239312, C15239313, C15239314, C15239315, C15239316, C15239321, C15239322, C15239580, C15239581 | 28 | Provide securely provisioned UAT accounts for valid sign-in, isolated invalid-password tests, locked/unlocked and password-policy states as the case requires. Confirm lockout, recovery and verification-code behavior. | Start with reusable nonprivileged accounts and navigation-only checks. Separately authorize credential failures, account state changes and delivery. | Unplanned lockout, credential exposure, or recovery mail. |
| 2 | Specific approved catalog choices, compatible combinations or server validation evidence | C8934375, C8934380, C8934386, C8934416, C8934426, C8934428, C8934430, C8934491, C8934494, C8934505, C8934506, C8934507, C8934510, C8934514, C8934516, C8934580, C8934597, C8935137 | 18 | Supply an approved owner with the needed seeded area, business area, geo market, additional field and subsidiary states. Provide compatible group, subgroup, numeric unit, widget and MET choices where the current role lacks them, or an approved server validation rule. | Use exact read-only selection combinations and synthetic missing filters. Keep pending configuration-write branches separate. | Unbounded queries or treating an unverified data combination as an application defect. |
| 3 | Disposable configuration, compatible lookup values and operation-specific write permission | C8934365, C8934366, C8934373, C8934376, C8934378, C8934381, C8934384, C8934387, C8934394, C8934395, C8934397, C8934399, C8934402, C8934404, C8934407, C8934414, C8934415, C8934417, C8934421, C8934461, C8934462, C8934492, C8934493, C8934502, C8934503, C8934511, C8934513, C8934517, C8934518, C8934521, C8934522, C8934523, C8934535, C8934552, C8934584, C8934588, C8934594, C8934595, C8934621, C8934622, C8935138, C8935140, C8935143, C8935144, C8935148, C8935207, C8935208, C8935209, C8935212, C8935213, C8935214 | 51 | Provide one disposable company/configuration scope and exact allowed create, edit, duplicate and cleanup operations, with fixture owner and permitted lookup types. | Verify drafts and read-only branches first. Run individually scoped writes only in disposable configuration. | Changes to active mappings, shared defaults or downstream access. |
| 4 | Seeded synthetic employee and team-member identifiers and verified statuses | C8927385, C8927852, C8927857, C8928136, C8928137, C8928138, C8932676, C8932729, C8934323, C8934326, C9404218, C15239582 | 12 | Provide approved MY COMPANY synthetic employee and team-member IDs, applicable Active, Pre-employee or no-exam states and permitted roles. Supply exact search key types and expected scope. | Reuse narrow exact-ID searches and a small seeded set. Keep Aster creation deferred. | Real employee disclosure or changes to a parent record. |
| 5 | Seeded synthetic employee, exam, vaccination and expiration combinations | C8927386, C8927485, C8927533, C8927534, C8927855, C8927856, C8932730, C8932731, C8932732, C8932734, C8932739, C8932744, C8934317, C8934318, C8934319, C8934320, C8934321 | 17 | Provide synthetic employee IDs plus one reviewed exam, one Processing exam, one exam-free employee, a scoped expiration date, and an approved linked vaccination. Specify exam type/MET and Medical Center if required. | Begin with reusable seeded linked records and read-only exact-ID views. Defer dependent creation until parent and mail side effects are known. | Clinical-data disclosure or inadvertent parent updates. |
| 6 | Approved synthetic linked employee, team-member, exam, or vaccination records | C8928068, C8928069, C8928070, C8928071, C8934300, C8934302, C8934355, C8934356, C8935292, C8935293, C15239317 | 11 | Provide approved exact synthetic identifiers for positive employee, team-member, exam and vaccine searches. Specify names or safe IDs, status, dates and expected relationships by affected case. | Reuse the primary seeded clinical and employee set and assert only the relevant saved records. | Opening real employee or clinical information or changing its state. |
| 7 | Authoritative product decisions or approved source material for the cited conflicting expectations | C8928021, C8928112, C8932733, C8933409, C8934305, C8935150, C8935288, C8935289, C9217325, C15239323, C15239324 | 11 | Answer the 11 case-specific questions in the business decisions table. Provide the role, exact intended result, UI copy and safe fixture rules where requested. | Reconcile the intended outcomes before updating assertions. Preserve the historical expected behavior and screenshots. | Encoding a defect or an unsupported assumption as a product requirement. |
| 8 | Accounts with the expected scoped role and a reference entitlement matrix | C8935483, C8935484, C8935485, C8935486, C8935487, C8935488, C8935490, C9404214 | 8 | Provide role-specific UAT sessions with least privilege and a menu/action entitlement reference for the listed cases, including available medical-exam views. Share access securely. | Compare read-only actions and navigation using exact approved fixtures, avoiding broad role escalation. | Access to unrelated employee or company data. |
| 9 | Approved current password policy and required UI copy | C15239311 | 1 | Provide the current approved password policy and exact or permitted UI instructions, including role or tenant variation if applicable. | Compare only the untouched Change Password form against the approved reference. | Validating inferred policy or changing an account. |
| 10 | Isolated notifications or a documented recipient restriction and approved event triggers | C8934322, C8934324, C8934325, C9430379, C9430380, C9430381, C9430382, C9430383, C9430384, C9430385, C9430386, C9430387 | 12 | Provide authoritative GoCare UAT routing or recipient allowlist for the approved employee address, plus a synthetic message sink and approved event triggers for the other notification cases. | Treat recipient verification and synthetic event execution as separate decisions. Do not send or save new records until applicable gates are met. | Delivery or queueing to unintended recipients. |
| 11 | Approved synthetic-only import/upload fixtures, export scope, or isolated messaging setup | C8928025, C8933401, C8933402, C8933403, C8933408, C8935246, C8935270, C8935272, C8935273, C8935274, C8935491 | 11 | Provide approved synthetic workbook or report inputs, allowed import or upload scope, expected export format, and approved output or message sink. Specify whether validation-only submission is authorized. | Use syntax and local file checks first. Separate persistence, export and delivery tests and avoid real datasets. | Accidental persistence, sensitive output, or unexpected delivery. |
| 12 | Fixed Help content or an authoritative route for the same Help entry points | C8934304, C15239318 | 2 | Provide a UAT build with the Help resource restored, or an approved link and content contract for the supported header/footer destinations. | Verify both entry points and the expected Help content after the fix. | Masking the defect by adopting the error as the expected behavior. |
| 13 | Disposable ERAMET-equivalent mapping and approved MET rules | C9428818, C9428819, C9428821, C9428822, C9428823, C9428824, C9428825, C9428826, C9428827 | 9 | Provide an isolated ERAMET-equivalent mapping, approved full and light MET definitions, age and validity rules, and synthetic employee/exam states. Approve the exact mapping changes if applicable. | Start with read-only rule verification. Apply mapping changes only in explicitly disposable configuration. | Incorrect assignment or validity periods in shared configuration. |
| 14 | Corrected wording or an approved specification decision for the Job Title validation | C8934400 | 1 | Confirm whether Job Title must name Job Title in its validation message and provide the corrected build or approved message wording. | Retest the verified local invalid Job Title branch using the approved wording. | Accepting an incorrect field label as intended behavior. |
| 15 | A synthetic-only reviewer scope or authoritative evidence that blank criteria cannot return clinical data | C8934301 | 1 | Provide a synthetic-only reviewer scope or written evidence that a blank-criteria request cannot return clinical records. Supply the intended validation message and default role/date state. | Verify the limited blank server request with the approved fixture. Keep invalid dates covered by the existing client-only case. | An unfiltered query may expose protected exam records. |
| 16 | Equivalent role or tenant configuration that should expose both Dashboard masters | C8934509, C8934512 | 2 | Provide a scoped role expected to expose Dashboard Notification and Landing Page controls, and an approved entitlement or tenant-setting reference for the exact controls. | Compare the current and alternate permitted roles read-only. Resolve the permission-versus-rendering question from that evidence. | Excess entitlements or misdiagnosing a permissions issue as a defect. |
| 17 | Scoped Maintenance role and sanitized logs or disposable services | C8935282, C8935283, C8935284, C8935287, C8935290 | 5 | Provide a read-only Maintenance or Error Logs role, sanitized synthetic logs and disposable services if state changes are in scope. Specify exactly which operations are authorized. | Verify visibility and restricted search first. Treat unlock, stop/start, and destructive actions as separate operations. | Service interruption or exposure of logs and user information. |
| 18 | Disposable company scope and explicit configuration-write permission | C8934359, C8934361, C8934362 | 3 | Provide an isolated company or synthetic company creation settings and list permitted write operations for these company master cases. Confirm no impact to MY COMPANY or other existing companies. | Use approved company values and a tightly scoped disposable environment. Retain no-change protection on current records. | Config changes propagate to existing records or connected workflows. |
| 19 | Sanitized document, isolated output location, and permission to retrieve it | C8933427 | 1 | Provide one synthetic document ID, an approved output location and expected filename, file format and safe fixture contents. Approve the read-only retrieval operation. | Retrieve only the exact synthetic document and inspect it within the approved location. | Sensitive document download or accidental disclosure. |

## Dependency priority and documentation handoff

The approval table was refreshed after the Medical Center catalog dependency was resolved. The 11 business decisions and two obsolete candidate assessments above preserve the existing intended outcomes. See the automation matrix for separate coverage priority.

## Disposable accounts and configuration planning

The prioritized catalog dependency drops from 19 to 18 after C8934460. The account pack still covers all 28 primary account cases. The configuration proposal lists the 51 primary configuration cases and separates company-owned settings from shared masters. The password-length setting was not established safely. See the [disposable fixture proposals](gocare-synthetic-test-data-requirements.md#minimum-disposable-account-pack).

## Proposed decisions pending product confirmation

The review sponsor supplied a provisional direction for all 11 requirement cases. These choices guide the draft procedures. They do not establish the expected product behavior independently.

| Cases | Current provisional direction | Evidence still needed for closure |
| --- | --- | --- |
| C15239323, C15239324, C9217325 | Use self-service My Details for Contact Information and inspect applicable administrative and profile fields by role. | Confirm the canonical My Profile versus My Details route, the field names, visibility, value rules and empty states, and supply approved synthetic account evidence. |
| C8932733, C8928112 | Prevent recommendation-letter deletion for an exam-free employee. Verify authorized reminder removal or status change with appropriate audit history. | Confirm hidden, disabled or message behavior for the letter case. Specify the supported reminder operation, authorization, final record state and audit evidence. Deletion remains unexecuted. |
| C8933409 | Zero eligible records should produce no generated output or notifications. | The MY COMPANY 01-Jan-2099 to 02-Jan-2099 Search showed zero in all seven categories. Both Print controls were returned without a disabled attribute. Confirm whether Print should be enabled when every category is zero and what invocation should do. No print or messaging was exercised. |
| C8935150 | A valid Medical History edit should succeed. Treat invalid inputs as separate negative coverage. | Reconcile the detailed success and overall failure in the source case and confirm valid inputs, result text and final state. Use a disposable item only with precise write permission. |
| C8934305, C8935288, C8935289 | Verify role-appropriate Maintenance visibility. Use sanitized data for approved Error Log download. Defer deletion. | Confirm the role-to-control entitlement and the filename, format, data and output contract for retrieval. Retention and deletion authorization remain separate from read-only work. |
| C8928021 | Submit should remain disabled with mandatory credentials blank. | The placeholder entered offline left Submit disabled without a request. Confirm valid-challenge behavior with the authorized interactive workflow before resolving the existing alert-title discrepancy. |

Retain C8934315 and C8934314 as candidates only. Product confirmation is needed for each legacy web login link or its supported replacement route and PDF. The Help defect, Export Data timeout and Job Title message discrepancy remain documented with their intended expectations.

## Activities pending authority or fixture evidence

| Activity | Exact stopping condition |
| --- | --- |
| Create Aster QAfixture in MY COMPANY | Recipient evidence for Create Employee is still missing. Keep GIN 97101 and the approved address from the original request. Resume only after recipient safety and final exact uniqueness are verified. |
| Provision accounts or execute password changes, lockouts, unlocks, recovery, registration, or interactive authentication failures | Require dedicated disposable identities, scoped roles, a permitted verification workflow, explicitly allowed operation and reset owner. No existing account can be used for these write or risky scenarios. |
| View real profiles, employee details, exam results, vaccination records, or unscoped reviewer results | Obtain approved exact synthetic IDs and a limited role, or authoritative evidence that the disputed server query cannot return protected information. |
| Submit company, shared-catalog, Mobile Configuration, role, or credential-policy writes | Require a disposable environment, verified valid inputs and explicit operation-specific approval. MY COMPANY remains read-only. |
| Delete recommendations, reminders, documents, catalog rows, or Error Logs | Require product-defined behavior, disposable objects and explicit destructive authorization. Error Log deletion is deferred; reminder deletion was ruled out for this phase. |
| Generate, print, export, import, upload, download, or send real or unscoped output | Require synthetic-only inputs and an isolated approved output or messaging route. For the zero-result reminder search, enabled Print controls remain a separate pending requirement. |
| Run Maintenance service or email queue functions | Current authorization covers appropriate control visibility only. The operation and scope would require separate approval. |
| Retire the two legacy PDF cases or implement automation | Product must confirm the legacy links first. The automation handoff is prepared; implementation and existing scripts remain outside the approved activity. |

Reports / Reporting, native mobile, and Archival Activity and its descendants remain excluded. Web Mobile Configuration remains in scope.

## Provisional decisions and final documentation handoff

The 11 sponsor-proposed outcomes remain provisional after TestRail read-back. The prioritized approval table and both obsolete candidates remain active for product review. The exact execution stops are listed above. The MY COMPANY Search for 01-Jan-2099 through 02-Jan-2099 returned 0 for LTA, Reminder 1, Reminder 2, Health Passport, Cover Letter, Label and Fitness Certificate. The response returned Print Reminders and Print Documents without a disabled attribute. No print, generation, download or notification action was attempted. The behavior of invoking the Print controls remains unverified.
