# GoCare web business coverage and remaining gaps

The review uses verified GoCare UAT web behavior, existing TestRail expectations, and approved fixture references. Reporting, Archival Activity and its descendants, and native mobile remain excluded. Web Mobile Configuration remains included. Route evidence, control behavior, intended product outcomes, and authorization are tracked independently.

| Module | Verified or documented coverage | Remaining business evidence and proposed test gates |
| --- | --- | --- |
| Login | Public sign-in state, recovery navigation, both registration entries and Employee Registration Cancel. | Validate challenge, login rejection, recovery delivery, and registration against disposable identities and rules. Provider Country-to-Medical Center behavior still needs a reproducible visible dependent-control branch. |
| Account | Role cases have defined public starts and preserved entitlement expectations. | Compare scoped role landing pages, menu visibility, denied actions, and any authorized transitions. Require role-specific accounts and an approved entitlement matrix. |
| Employee | Search, absent criteria, draft validations, and creation cancellation. Positive exact-identity search and Quit now require a registered synthetic identity. | Verify existing synthetic search result, profile, Dashboard, Dependents, Administration, and Edit on the same approved record. Positive creation remains gated on recipient routing and uniqueness. |
| Team Member | Search validation covers malformed name, username, and email. Draft Reset and Cancel are covered. | Verify exact matching records and blank-criteria behavior in a synthetic-only scope. Exercise creation or role-restricted operations only with disposable users and explicit authorization. |
| Medical Exam | Reviewed Exam date validation and Reset, Expirations boundaries and mandatory controls, and documented exam-state scenarios. | Verify linked views, role restrictions, state transitions, certificates, and eligible/expired results with exact synthetic exam IDs and approved output scope. |
| Vaccination | Search field format and impossible dates, draft dose/brand interaction, no match, and Reset. | Verify matched synthetic vaccine linkage, date/dose/brand persistence, and any authorized lifecycle or cross-module operations. |
| Company | Company master search and locally observed validation. | Verify positive scoped results, approved company provisioning, duplicate handling, and persisted settings only with an isolated company fixture. |
| Configuration | Approved catalog searches, Global-to-Company MET scope isolation, dependent Numeric Health Check controls, and local rejection paths. | Verify persistence, duplicate prevention, true ordering and required-unit behavior, catalog edit permissions, and ERAMET age/validity rules in an authorized disposable scope. |
| Dashboard | Master entry evidence and known filter or no-match cases. | Verify role visibility, compatible widget/profile assignment, configuration-to-display linkage, and role-denied behavior in a disposable tenant. |
| Web Mobile | Static Content and Menu Item required fields, search/filter controls, and unsaved draft cancellation. | Verify assignment and role visibility, valid/invalid and duplicate configuration, and persisted edit outcomes with isolated configuration scope. |
| Medical Center | Scoped search validation and read-only evidence, opening/closing time ordering, and unsaved form behavior. | Use an approved named synthetic center to test compatible country/type, exact result columns, persistence, and approved provider or exam linkage. |
| Reminder | Zero-eligible search, company-dependent criteria and date state, and documented eligible generation scenario. | Confirm zero-output rule with the product owner. Verify positive eligible counts, approved template selection, generated artifact, and delivery only in an isolated sink. |
| Import | Local workbook selection, local refresh, and intended successful import/validation outcomes. | Verify parser outcomes, exact activity ID and final status using an approved synthetic workbook and server authorization. Review the supported relationship to downstream records before adding persistence checks. |
| Export | Export Quest separates Generate and Download. Export Data still times out. | Verify scoped synthetic generation/download and exact artifact schema once approved. Preserve the intended Export Data behavior while its route remains defective. |
| Maintenance | Maintenance menu links and the Service Management entry are known. | Compare scoped roles and sanitized logs, then verify allowed read-only actions. Service, account unlock, and deletion operations retain separate approval requirements. |
| Support | Header/footer targets and Drop Box entry flows are documented. Help still returns Requested Resource Not Found. | Verify Help after a fix. Verify Drop Box association and retrieval using a synthetic file, exact employee fixture, a scoped account, and approved output handling. |

## End-to-end coverage decisions

- A live TestRail case now checks the same exact Global MET across the central catalog and the company mapping. The observed global record and scoped absence are part of a single readable business rule. The individual Global MET search and company no-match cases remain valuable component checks.
- Keep import-to-activity outcome, Drop Box upload-to-scoped retrieval, provider-to-center registration, and account recovery-to-reentry as gated workflow designs until the required data and observed linking behavior are available. The existing import, account, and file cases are the starting coverage. A successful first step does not establish downstream persistence or delivery.
- Keep the original eight E2E anchor cases and their synthetic record and authority requirements. Use isolated fixture aliases, capture exact linked identifiers from independent reads, and run each workflow from its own approved starting state.

## Application-health audit rules

Use one control identity per route and stable locator, including distinct controls with identical visible text. Reference exact TestRail steps for value, enabled state, selection, validation, business result, and request behavior. Controls with only presence evidence or gated actions retain that distinction. Record-backed grids, tabs, paging, sorting, downloads, and write controls stay gated when a synthetic-only target is missing. No popup calendar behavior is inferred from a date input or wrapper alone.

The [control matrix](gocare-automation-first-controls.csv) provides the deduplicated page-to-control mapping. [Assertion steps](gocare-automation-first-assertions.csv), [case traceability](gocare-automation-first-traceability.csv), and the [implementation backlog](gocare-automation-implementation-backlog.csv) provide the case-level contracts.

The final matrix contains 346 distinct entries. 200 have mapped functional assertions, 121 have presence or planned evidence and 25 require protected access. Functional coverage is 57.8% across all entries and 62.3% with protected destinations removed.

## Final local and scoped coverage

- C15290445 Identity, contact, nationality and marital-state inputs were verified in the unsubmitted draft.
- C15290446 Company selection populated Area and Category and preserved the independently chosen country and status.
- C15290447 MY COMPANY scoped Health Check choices and the Widget Type switch retained BMI.
- C15290448 Role, Company, Lock Status and corporate status retained their exact local values.
- C15290449 Exact approved owner and active-only absence returned the verified scoped no-company message.
- C15290450 Both approved roles initialized Username, AD account and Owner Company controls without creating an account.
- C15290451 All three identity field messages appeared and no lookup was attempted.
- C15290452 Five catalog drafts retained the exact owner and criterion during both active checkbox states.
- C15290453 Four catalog drafts retained the exact criterion during both active checkbox states.

The exact BMI catalog-to-widget relationship is still unverified. Remaining control gaps include recipient-scope and generation actions; password and verification challenges; role-specific options, record-backed tabs, protected grid sorting and paging; import activity radio selection and processing; and unsupported calendar popup behavior. The stable control key, action scope and associated cases are carried in the control matrix.
