# GoCare automation readiness matrix

**Final documentation checkpoint · 26 November 2026**

68 cases are automation-ready or already mapped, including seven existing mappings and 61 new candidates. The implementation backlog covers all 307 cases and separates immediately actionable branches, page-object work, and gated execution. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

59 cases are ready or mapped, including seven existing mappings and 52 new candidates. The complete 298-case implementation backlog prioritizes Smoke, then verified branches and reusable page objects. Gated cases retain named dependencies. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

54 cases are automation-ready or already mapped. The seven existing mappings are retained and there are 47 new candidates in the handoff. The five latest candidates are for guarded read-only and client actions. See their exact synthetic inputs and assertion mappings. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

49 cases are ready or already automated. This includes seven existing mappings and 42 candidates. C15290403 is a fixture-free addition. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

48 cases are automation-ready or already automated. Seven existing mappings and 41 new candidates include Reviewed Exams Reset C15290371. Follow the ordered implementation handoff and per-case status in traceability. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Live TestRail baseline refreshed 25 November 2026.

Every live in-scope case appears below. Existing spec IDs and the [previous automation assessment](automation-coverage-assessment-2026-11-24.md) supply mapping evidence, including data-driven cases. Mapped cases were classified from existing coverage. No regression suite was executed. The readiness of pending cases depends on individual workflow review.

| Case ID | Section | Title | Playwright mapping | Readiness | Dependencies and blockers |
| --- | --- | --- | --- | --- | --- |
| C8927857 | Search employee | Verify User Can Successfully Search an Employee Using Valid Search Criteria | tests/EmployeeCreationAndSearch.spec.ts; tests/searchEmployee.spec.ts | Already Automated | Approved synthetic records or account within a role-scoped test tenant. |
| C8927858 | Search employee | Verify System Displays No Results for Invalid Employee Search Criteria | Existing automated coverage referenced in the baseline | Already Automated | Use verified company scope, absent alphabetic names and the explicit no-results assertion. |
| C15239052 | Search employee | Verify Reset Button Clears All Search Criteria | tests/searchEmployee.spec.ts | Partially Automated | Reset assertion omits Fitness Status |
| C15239309 | Search employee | Verify Advanced Search Link Expands Additional Search Criteria | tests/searchEmployee.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C8927855 | Search employee / Create Exam | Verify User Can Create and Submit a Medical Exam Successfully | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8927856 | Search employee / Create Exam | Verify Exam Submission Is Rejected When Medical Center Is Blank | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8934317 | Search employee / View Exam | Verify User Can View Medical Exam Details and Navigate Related Sections | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9404218 | Search employee / New column added in search screen result page for all the employees | Verify Certificate Expiry Date Column Is Displayed in Employee Search Results | tests/searchEmployee.spec.ts | Already Automated | Approved synthetic records or account within a role-scoped test tenant. |
| C8934304 | Search employee / Header Links | Verify Need Help Link Navigation | — | Partially Automated | Help popup/frame assertion requires approved content and defect resolution |
| C15239053 | Search employee / Header Links | Verify My Details Link Navigation | tests/navigation.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C15239310 | Search employee / Header Links | Verify Change Password Link Navigation | tests/navigation.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C15239321 | Search employee / My Details | Verify My Details link Page Loads Successfully | — | Requires Test Data | Prior HOLD. Profile route observed; approved synthetic profile and safe page-content assertion needed. |
| C15239322 | Search employee / My Details | Verify Edit Information Page Displays Profile Fields and Controls | — | Blocked | Approved synthetic profile and correct role. Account edits and unlock require explicit authorization. |
| C15239323 | Search employee / My Details | Verify Contact Information Section Is Displayed | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C15239324 | Search employee / My Details | Verify Administrative Information Section Is Displayed | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C15239580 | Search employee / My Details | Verify User Information Can Be Modified Successfully | — | Blocked | Approved synthetic profile and correct role. Account edits and unlock require explicit authorization. |
| C15239581 | Search employee / My Details | Verify Unlock Account Button Functionality | — | Blocked | Approved synthetic profile and correct role. Account edits and unlock require explicit authorization. |
| C15239582 | Search employee / My Details | Verify Quit Button Exits the Employee Details Page | — | Requires Test Data | Prior HOLD. Conflicting page names, starting state and bundled steps; verified Employee Details Quit destination needed. |
| C15239318 | Search employee / Footer Links | Verify Help Link Navigation | tests/footerNavigation.spec.ts | Partially Automated | Help popup/frame assertion requires approved content and defect resolution |
| C15239319 | Search employee / Footer Links | Verify Contact Us Link Navigation | tests/footerNavigation.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C15239320 | Search employee / Footer Links | Verify Privacy Policy Link Navigation | tests/footerNavigation.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C15239311 | Search employee / Change Password | Verify Change Password Page Loads Successfully | — | Requires Requirement Clarification | Split verified route, fields and buttons into separate steps. The existing password-policy expectation was retained for follow-up. |
| C15239312 | Search employee / Change Password | Verify Password Is Changed Successfully | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C15239313 | Search employee / Change Password | Verify Mandatory Field Validation | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C15239314 | Search employee / Change Password | Verify Existing Password Validation | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C15239315 | Search employee / Change Password | Verify Password Policy Validation | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C15239316 | Search employee / Change Password | Verify New Password and Confirm Password Mismatch Validation | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C15239317 | Search employee / Change Password | Verify Cancel Button Functionality | — | Requires Requirement Clarification | Starting page and separated navigation saved. Blank-form Cancel returned to Search Employees. Edited-form outcome and approved input remain pending. |
| C8927852 | Employee / Create New Employee | Verify Employee Record Is Created Successfully | tests/CreateEmployee.spec.ts; tests/EmployeeCreationAndSearch.spec.ts | Already Automated | Approved synthetic records or account within a role-scoped test tenant. |
| C8927853 | Employee / Create New Employee | Verify Employee Record Creation Fails with Invalid Data | Existing automated coverage referenced in the baseline | Automation Ready | Use the documented synthetic values with all network calls blocked after opening the form. |
| C15239583 | Employee / Create New Employee | Verify Validation Messages for Mandatory Fields | Client validation | Automation Ready | Untouched form with network blocked. Verify nine exact messages and zero attempted submissions. |
| C8928138 | Employee / Employee Details / Dashboard | Verify Employee Dashboard Displays Health Summary Sections | — | Requires Test Data | Prior NOT APPROVED. Approved synthetic employee and permissible health-dashboard access needed. |
| C8928137 | Employee / Employee Details / Dependents | Verify Dependents Tab Displays Records or No-Dependents Message | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8932676 | Employee / Employee Details / Administration Tab | Verify Administration Tab Displays the Operation Selector and Quit Control | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8927385 | Employee / Employee Details / Administration Tab / Delete Employee | Verify Employee Deletion | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8932729 | Employee / Employee Details / Administration Tab / Delete Employee | Failed to delete an employee | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8927386 | Employee / Employee Details / Administration Tab / Change status of an Exam | Verify Exam Status Change When an Exam Exists | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8932730 | Employee / Employee Details / Administration Tab / Change status of an Exam | Verify No Exams Message When Changing Exam Status Without an Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8927485 | Employee / Employee Details / Administration Tab / Create dummy exam | Verify Dummy Exam Creation When an Exam Exists | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8932731 | Employee / Employee Details / Administration Tab / Create dummy exam | Verify No-METs Message for the Dummy Exam Operation | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8927533 | Employee / Employee Details / Administration Tab / Delete an Exam | Verify Exam Deletion When an Exam Exists | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8932732 | Employee / Employee Details / Administration Tab / Delete an Exam | Verify No-Exam Message for Delete Exam Operation | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8927534 | Employee / Employee Details / Administration Tab / Delete recommendation letter | Verify Recommendation Letter Deletion When an Exam Exists | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8932733 | Employee / Employee Details / Administration Tab / Delete recommendation letter | Verify Recommendation Letter Deletion When No Exam Exists | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C8932734 | Employee / Employee Details / Administration Tab / Delete recommendation letter | Verify No-Documents Message for an Exam Without Recommendation Letter | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8928112 | Employee / Employee Details / Administration Tab / Delete Reminders | Verify Reminder Deletion When an Exam and Reminder Exist | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C8932739 | Employee / Employee Details / Administration Tab / Delete Reminders | Verify No Reminder Message for Existing and Upcoming Exams | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8932744 | Employee / Employee Details / Administration Tab / Delete Reminders | Verify No Reminder Message When No Reminder Exists for an Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8928136 | Employee / Employee Details / View Employee | Verify Employee Details Page Displays Profile Sections and Actions | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8934318 | Employee / Employee Details / View Employee / Create Exam | Verify Create Exam Page Opens When Employee Has No Exam | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8934319 | Employee / Employee Details / View Employee / Create Exam | Verify Exam Creation Is Blocked While Another Exam Is Processing | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8934320 | Employee / Employee Details / View Employee / View Exam | Verify No-Exam Message Is Displayed When Employee Has No Medical Exams | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8934321 | Employee / Employee Details / View Employee / View Exam | Verify Medical Exam Information Opens for Employee With an Existing Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8934322 | Employee / Employee Details / View Employee / Send LTA | Verify LTA Request Submission | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C8934323 | Employee / Employee Details / View Employee / Quit | Verify Quit Returns User to Search Employees Page | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8934324 | Employee / Employee Details / View Employee / Resend Notification | Verify Notification Resend When a Previous Notification Exists | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C8934325 | Employee / Employee Details / View Employee / Resend Notification | Verify Resend Notification Shows No Prior Notification Alert | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C8934326 | Employee / Employee Details / View Employee / Edit Information | Verify Edit Information Opens the Modify Employee Record Page | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C9404214 | Employee / SLB employee cannot create exam | Verify SLB Roles Cannot Create an Exam | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8928070 | Search Team Members | Verify Team Member Search Returns Records Matching Criteria | — | Blocked | Starting route verified. Approved synthetic team member and company scope. Search and validation outcomes still require verification. |
| C8928071 | Search Team Members | Verify Team Member Search Validates Missing, Invalid, and Unmatched Criteria | — | Blocked | Verified invalid First Name and unmatched synthetic name outcomes. The documented blank-search result remains pending because its request was blocked to avoid an unscoped user search. |
| C8928068 | Create Team Member | Verify a Team Member Can Be Created with Required Information | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8928069 | Create Team Member | Verify Team Member Creation Is Rejected for Missing or Invalid Information | — | Blocked | Approved synthetic records and explicit authorization for this record-changing action. |
| C8934355 | Medical Exam Expirations | Verify Medical Exam Expiration Report Search, Export, and Validation | — | Blocked | Starting route verified. Synthetic company, employee status and matching/empty expiration windows. Exports require a synthetic-only dataset. |
| C15290180 | Medical Exam Expirations | Verify Medical Exam Expirations validates Custom Period from 0 to 500 | Browser client validation | Automation Ready | Block network after form load. Verify invalid requests never start and evaluate valid bounds locally. |
| C8934356 | Medical Exam Expirations | Verify Medical Exam Expiration Search Validates a Missing Company and No-Result Criteria | — | Blocked | Starting route verified. Synthetic company, employee status and matching/empty expiration windows. Exports require a synthetic-only dataset. |
| C8933401 | Import Data / Import File | Verify Import File Workflow Reports a Successful Import | — | Requires Requirement Clarification | Verified the file selection step and restored the missing overall result from the existing final success expectation. Import execution still needs authorization. |
| C8933402 | Import Data / Import File | Verify Import File Upload Rejects a Workbook in an Unsupported Format | — | Blocked | Verified the file selection step. The existing filename-format rejection expectation was retained. The naming rule and import execution remain pending. |
| C8933403 | Import Data / Export Quest | Verify Export Quest Confirmation File Generation and Download | — | Blocked | Entry is verified. Functional testing requires approved synthetic files or approved output scope. |
| C8933408 | Reminders and Documents / Generate | Generate Reminders and Documents for Eligible Test Records | — | Blocked | Verified the Generate Reminders and Documents entry and initial search controls. Generation outcomes remain dependent on approved synthetic data and authorization. |
| C8933409 | Reminders and Documents / Generate | Reminder and Document Generation Case Requires Steps and Expected Result | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C8933427 | Reminders and Documents / Download | Verify Document Download and Error Log Behavior | — | Blocked | Synthetic-only records and approved report, import or download scope. |
| C15290212 | Search Reviewed Exams | Verify Search Reviewed Exams rejects malformed and impossible dates | Browser client validation | Automation Ready | Invalid From Date and impossible To Date were rejected with no search request. |
| C8934300 | Search Reviewed Exams | Verify Search and View Reviewed Exams for Matching Criteria | — | Blocked | Starting route verified. Synthetic reviewed exams, authorized reviewer data, and matching/empty date windows. |
| C8934301 | Search Reviewed Exams | Verify Search Reviewed Exams Validates Missing Criteria | — | Blocked | Starting route verified. Synthetic reviewed exams, authorized reviewer data, and matching/empty date windows. |
| C8934302 | Search Reviewed Exams | Verify No-Results Message When No Reviewed Exams Match the Date Range | — | Blocked | Starting route verified. Synthetic reviewed exams, authorized reviewer data, and matching/empty date windows. |
| C8934358 | System Configuration / Company / Compnay | Verify Company Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934359 | System Configuration / Company / Compnay | Verify Company Creation with Valid Configuration Data | — | Blocked | Added exact candidate name and verified owner-validator behavior to the required test data. Server-side standalone creation and delivery safety remain blocked. |
| C8934360 | System Configuration / Company / Compnay | Verify Company Creation Validates Missing or Invalid Fields | — | Automation Ready | Reproduce both client validation branches in an authorized session. Assert the exact messages and absence of a Submit request. |
| C8934361 | System Configuration / Company / Compnay | Verify Company Search Active Filter and No-Results Message | — | Blocked | Verified the unmatched-name branch across active and inactive status scope. Active-only and owner-company results still need approved fixtures. |
| C8934362 | System Configuration / Company / Compnay | Verify Company Details Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934363 | System Configuration / Company / Logo Information | Verify Logo Information Page Controls | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934364 | System Configuration / Company / Logo Information | Verify Logo Information Requires Company Selection and Reset Clears Validation | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934365 | System Configuration / Company / Logo Information | Verify Logo Upload Succeeds for a Supported Image Format | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934366 | System Configuration / Company / Logo Information | Verify Logo Upload Rejects an Unsupported File Format | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934372 | System Configuration / Company / Area | Verify Area Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934373 | System Configuration / Company / Area | Verify Area Master Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934374 | System Configuration / Company / Area | Verify Area Creation Rejects an Invalid Area Name | Verified browser scenario | Automation Ready | Area rejects QA#Fixture before any create request. |
| C8934375 | System Configuration / Company / Area | Verify Area Master Active Filter and Search Results | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934376 | System Configuration / Company / Area | Verify Area Master Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934377 | System Configuration / Company / Business Area | Verify Business Area Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934378 | System Configuration / Company / Business Area | Verify Business Area Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934379 | System Configuration / Company / Business Area | Verify Business Area Creation Rejects an Invalid Name | Verified browser scenario | Automation Ready | Business Area rejects QA#Fixture before any create request. |
| C8934380 | System Configuration / Company / Business Area | Verify Business Area Active Filter and Search Results | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934381 | System Configuration / Company / Business Area | Verify Business Area Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934383 | System Configuration / Company / Geo Market | Verify Geo Market Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934384 | System Configuration / Company / Geo Market | Verify Geo Market Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934385 | System Configuration / Company / Geo Market | Verify Geo Market Creation Rejects an Invalid Name | Verified browser scenario | Automation Ready | Geo Market rejects QA#Fixture. The rendered message spells the field GeoMarket. |
| C8934386 | System Configuration / Company / Geo Market | Verify Geo Market Active Filter and Search Results | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934387 | System Configuration / Company / Geo Market | Verify Geo Market Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934393 | System Configuration / Company / Job Site | Verify Job Site Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934394 | System Configuration / Company / Job Site | Verify Job Site Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934395 | System Configuration / Company / Job Site | Verify Job Site Creation Rejects Invalid and Duplicate Names | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934396 | System Configuration / Company / Job Site | Verify Job Site Active Filter and Search Results | Verified browser scenario | Automation Ready | MY COMPANY returned active Job Sites. The absent synthetic name returned the documented no-job-sites message. |
| C8934397 | System Configuration / Company / Job Site | Verify Job Site Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934398 | System Configuration / Company / Job Title | Verify Job Title Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934399 | System Configuration / Company / Job Title | Verify Job Title Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934400 | System Configuration / Company / Job Title | Verify Job Title Creation Rejects an Invalid Name | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934401 | System Configuration / Company / Job Title | Verify Job Title Active Filter and Search Results | Verified browser scenario | Automation Ready | MY COMPANY returned active Job Titles. The absent synthetic name returned the documented no-job-titles message. |
| C8934402 | System Configuration / Company / Job Title | Verify Job Title Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934403 | System Configuration / Company / Employee Category | Verify Employee Category Master Search Page Controls | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934404 | System Configuration / Company / Employee Category | Verify Employee Category Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934405 | System Configuration / Company / Employee Category | Verify Employee Category Creation Rejects an Invalid Name | Verified browser scenario | Automation Ready | Employee Category rejects QA#Fixture before any create request. |
| C8934406 | System Configuration / Company / Employee Category | Verify Employee Category Search and Handled by Intl. SOS Filter | Verified browser scenario | Automation Ready | The filtered MY COMPANY result was active and marked Handled by Intl. SOS. The absent synthetic name returned the documented no-employee-categories message. |
| C8934407 | System Configuration / Company / Employee Category | Verify Employee Category Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934413 | System Configuration / Company / Additional Information | Verify Additional Information Master Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934414 | System Configuration / Company / Additional Information | Verify Additional Information Field Creation and Cancel Navigation | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934415 | System Configuration / Company / Additional Information | Verify Additional Information Creation Rejects Invalid and Duplicate Names | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934416 | System Configuration / Company / Additional Information | Verify Additional Information Active Filter and Search Results | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934417 | System Configuration / Company / Additional Information | Verify Additional Information Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934420 | System Configuration / Company / Criteria | Verify Company Criteria Master Page Controls | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934421 | System Configuration / Company / Criteria | Verify Company Criteria Settings Can Be Saved and Reset | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934422 | System Configuration / Company / Criteria | Verify Owner Company Is Required Before Loading Criteria | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934425 | System Configuration / Company / MET | Verify MET Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934426 | System Configuration / Company / MET | Verify MET Search Validation, No-Results, and Reset Behaviors | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934428 | System Configuration / Company / MET | Verify MET Configuration Can Be Added with Criteria | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934430 | System Configuration / Company / MET | Verify MET Configuration Validates Required and Numeric Fields | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934436 | System Configuration / Company / MET | Verify MET Search Shows No Results for Unmatched Criteria | Verified browser scenario | Automation Ready | Both MY COMPANY searches using the selected Global MET returned the exact no-match message. |
| C8934459 | System Configuration / Company / Fitness Conclusion | Verify Fitness Conclusion Master Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934460 | System Configuration / Company / Fitness Conclusion | Verify Fitness Conclusion Search, Required-Field, and Reset Behaviors | Verified browser scenario | Automation Ready | Both MY COMPANY no-match branches, the three blank Add fields, and all four Reset controls matched the expected behavior. |
| C8934461 | System Configuration / Company / Fitness Conclusion | Verify Fitness Conclusion Creation with Required Selections | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934462 | System Configuration / Company / Fitness Conclusion | Verify Fitness Conclusion Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934463 | System Configuration / Company / Fitness Conclusion | Verify Fitness Conclusion Search Shows No Results for Unmatched Selections | Verified browser scenario | Automation Ready | MY COMPANY, Client Reviewer and Fit with restrictions returned the exact no-match message. |
| C8934490 | System Configuration / Company / Static Content | Verify Static Content Master Search Page Controls | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934491 | System Configuration / Company / Static Content | Verify Static Content Required Fields, URL Validation, and Reset | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934492 | System Configuration / Company / Static Content | Verify Static Content Menu Creation with an Approved URL | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934493 | System Configuration / Company / Static Content | Verify Static Content Menu Edit Workflow | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934494 | System Configuration / Company / Static Content | Verify Static Content Search Shows No Results for an Unmatched Subsidiary | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934501 | System Configuration / Company / Medical History | Verify Company Medical History Master Page Controls | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8934502 | System Configuration / Company / Medical History | Verify Medical History Requires Company Selection and Handles No-Change Submit | — | Blocked | Expected utility or validation outcome and approved specification. |
| C8934503 | System Configuration / Company / Medical History | Verify Medical History Configuration Changes Can Be Saved | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934504 | System Configuration / Company / Dashboard / Widget Configuration | Verify Widget Configuration Search Page Controls | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934505 | System Configuration / Company / Dashboard / Widget Configuration | Verify Widget Configuration Search and Validation Behaviors | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934506 | System Configuration / Company / Dashboard / Widget Configuration | Verify Widget Configuration Can Be Added with Required Details | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934507 | System Configuration / Company / Dashboard / Widget Configuration | Verify Widget Configuration Rejects Invalid Input | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934508 | System Configuration / Company / Dashboard / Widget Configuration | Verify Widget Configuration Search Shows No Results for an Unmatched Name | — | Automation Ready | Use the authorized role and synthetic unmatched Widget Name. Assert the exact empty result on the same page. |
| C8934509 | System Configuration / Company / Dashboard / Notification | Verify Company Notification Master Page Controls | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934510 | System Configuration / Company / Dashboard / Notification | Verify Notification Settings Require a Company and Warn When Disabled | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934511 | System Configuration / Company / Dashboard / Notification | Verify Company Notification Settings Can Be Saved | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934512 | System Configuration / Company / Dashboard / Landing Page | Verify Landing Page Master Search Page Controls | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934513 | System Configuration / Company / Dashboard / Landing Page | Verify Landing Page Search, Reset, and Duplicate-Configuration Validation | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934514 | System Configuration / Company / Dashboard / Landing Page | Verify Landing Page Configuration Can Be Added | — | Blocked | Configuration permissions for the controls and an approved test tenant. |
| C8934515 | System Configuration / Company / Mobile / Static Content | Navigate to the Mobile Static Content Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934516 | System Configuration / Company / Mobile / Static Content | Validate required fields on the Mobile Static Content Master | — | Blocked | Blank Owner Company validation is verified. Remaining Add, Submit and Cancel checks require approved configuration scope. |
| C8934517 | System Configuration / Company / Mobile / Static Content | Create Mobile Static Content | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934518 | System Configuration / Company / Mobile / Static Content | Edit Mobile Static Content | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934519 | System Configuration / Company / Mobile / Menu Item | Navigate to the Mobile Menu Item Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934520 | System Configuration / Company / Mobile / Menu Item | Validate search and required fields on the Mobile Menu Item Master | Verified browser scenario | Automation Ready | MY COMPANY unmatched alternate name returned no menus. Invalid search and blank Add were rejected locally. |
| C8934521 | System Configuration / Company / Mobile / Menu Item | Create a Mobile Menu Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934522 | System Configuration / Company / Mobile / Menu Item | Edit a Mobile Menu Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934523 | System Configuration / Company / Mobile / Menu Item | Delete a Mobile Menu Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934526 | System Configuration / Exam / Medical Center | Navigate to the Medical Center Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C15290370 | System Configuration / Exam / Medical Center | Verify Medical Center opening hours cannot be later than closing hours | Browser client validation | Automation Ready | The reversed time pair fails the client ordering rule. The corrected pair passes the three enabled time validators. |
| C8934527 | System Configuration / Exam / Medical Center | Validate Medical Center search and required fields | Verified browser scenario | Automation Ready | Invalid search, filter Reset, Bouvet Island no-match, blank and malformed Add validation, and unsaved Cancel were all verified. |
| C8934535 | System Configuration / Exam / Medical Center | Create a Medical Center | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934552 | System Configuration / Exam / Medical Center | Edit a Medical Center | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934580 | System Configuration / Exam / Medical Center | Filter Medical Center Records | — | Blocked | Approved configuration fixtures for matching, invalid, duplicate, or boundary inputs and observation of the documented outcome. |
| C8934582 | System Configuration / Exam / Global MET | Navigate to the Global MET Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934583 | System Configuration / Exam / Global MET | Validate Global MET Search and Required Fields | Verified browser scenario | Automation Ready | Blank or invalid search, reset and blank Add checks all matched the documented client and server behavior. |
| C8934584 | System Configuration / Exam / Global MET | Create a Global MET | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934585 | System Configuration / Exam / Global MET | Filter Global MET Records | Verified browser scenario | Automation Ready | The exact existing Global MET catalog name returned the matching configuration row. |
| C8934586 | System Configuration / Exam / Fitness Conclusion | Navigate to the Fitness Conclusion Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934587 | System Configuration / Exam / Fitness Conclusion | Validate Fitness Conclusion Search and Required Fields | Verified browser scenario | Automation Ready | Fitness Conclusion rejected invalid search, reset text and Active, and rejected blank Add. |
| C8934588 | System Configuration / Exam / Fitness Conclusion | Create a Fitness Conclusion | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934589 | System Configuration / Exam / Fitness Conclusion | Filter Fitness Conclusion Records | Verified browser scenario | Automation Ready | The existing Fit catalog row appeared by name and retained Active Yes with Show only Active selected. |
| C8934592 | System Configuration / Medical Data / BP/BM/Cholestrol | Navigate to the Blood Pressure, BMI, and Cholesterol Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C15290213 | System Configuration / Medical Data / BP/BM/Cholestrol | Verify BP/BMI master rejects a reversed range and accepts the corrected order locally | Browser client validation | Automation Ready | Reversed 10 to 5 rejected without a request. Corrected 5 to 10 passes client validators. |
| C8934593 | System Configuration / Medical Data / BP/BM/Cholestrol | Validate Blood Pressure, BMI, and Cholesterol Master Inputs | Verified browser scenario | Automation Ready | Synthetic search returned no results. Blank and malformed Add values were blocked before posting. |
| C8934594 | System Configuration / Medical Data / BP/BM/Cholestrol | Create a Blood Pressure, BMI, or Cholesterol Master Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934595 | System Configuration / Medical Data / BP/BM/Cholestrol | Reject a Duplicate Blood Pressure, BMI, or Cholesterol Master Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934596 | System Configuration / Medical Data / Health Check Item | Navigate to the Health Check Item Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8934597 | System Configuration / Medical Data / Health Check Item | Validate Health Check Item Search and Required Fields | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934621 | System Configuration / Medical Data / Health Check Item | Create a Health Check Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8934622 | System Configuration / Medical Data / Health Check Item | Edit a Health Check Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935136 | System Configuration / Medical Data / Medical History | Navigate to the Medical History Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8935137 | System Configuration / Medical Data / Medical History | Validate Medical History Search and Required Fields | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935138 | System Configuration / Medical Data / Medical History | Create a Medical History Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935140 | System Configuration / Medical Data / Medical History | Edit a Medical History Item | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935150 | System Configuration / Medical Data / Medical History | Medical History Edit Scenario Requires Outcome Clarification | — | Blocked | Expected utility or validation outcome and approved specification. |
| C8935141 | System Configuration / Medical Data / Vaccination | Navigate to the Vaccination Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8935142 | System Configuration / Medical Data / Vaccination | Validate Vaccination Search and Required Fields | Verified browser scenario | Automation Ready | Vaccination master returned no synthetic matches and rejected blank and malformed input locally. |
| C8935143 | System Configuration / Medical Data / Vaccination | Create a Vaccination Record | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935144 | System Configuration / Medical Data / Vaccination | Edit a Vaccination Record | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935148 | System Configuration / Medical Data / Vaccination | Reject Vaccination Edit with Invalid Name and Frequency | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935205 | System Configuration / Medical Data / Vaccination Reminder | Navigate to the Vaccination Reminder Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C15290214 | System Configuration / Medical Data / Vaccination Reminder | Verify Vaccination Reminder Add accepts both frequency limits and rejects adjacent values | Browser client validation | Automation Ready | Client accepts -999 and 999, and rejects -1000 and 1000 without submitting. |
| C8935206 | System Configuration / Medical Data / Vaccination Reminder | Validate Vaccination Reminder Search and Required Fields | Verified browser scenario | Automation Ready | Active Reminder Type1 returned no results. Required and malformed Add values were rejected before posting. |
| C8935207 | System Configuration / Medical Data / Vaccination Reminder | Create a Vaccination Reminder | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935208 | System Configuration / Medical Data / Vaccination Reminder | Edit a Vaccination Reminder | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935209 | System Configuration / Medical Data / Vaccination Reminder | Reject Vaccination Reminder Edit with Out-of-Range Frequency | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935210 | System Configuration / Code Description | Navigate to the Code Description Master | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8935211 | System Configuration / Code Description | Validate Code Description Search and Required Fields | Verified browser scenario | Automation Ready | Invalid Description returned no results. Active Gender codes were returned and blank or malformed Add was blocked. |
| C8935212 | System Configuration / Code Description | Create a Code Description Entry | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935213 | System Configuration / Code Description | Edit a Code Description Entry | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935214 | System Configuration / Code Description | Reject Code Description Add or Edit with Invalid Characters | — | Blocked | Approved isolated configuration data and explicit authorization for operations that may save or change settings. |
| C8935215 | System Configuration / Encryption Utility | Navigate to the Encryption and Decryption Utility | — | Requires Page Object | Authenticated Search Employees landing and authorized System Configuration menu. Add a page object exposing exact menu links, route, heading, and visible form controls. |
| C8935228 | System Configuration / Encryption Utility | Validate Encryption Utility Rejects Invalid Base64 Input | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8935237 | System Configuration / Encryption Utility | Verify Encryption and Decryption with Synthetic Inputs | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8935245 | Send Welcome Email | Navigate to the Send Welcome E-mail Page | Verified browser scenario | Automation Ready | Both email sections, checkboxes and controls were verified without sending. |
| C8935246 | Send Welcome Email | Validate Send Welcome E-mail Form Requirements | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C8935270 | Send Welcome Email | Queue Welcome E-mail for an Approved Test Company | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C8935491 | Send Welcome Email | Retrieve Employee Details for an Approved Test Company | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8935271 | Drop Box / Upload | Navigate to Drop Box Medical Report Upload | — | Requires Page Object | Observed browser controls and menu route, with an authorized Search Employees session. |
| C8935272 | Drop Box / Upload | Validate Medical Report Upload Form Requirements | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C8935273 | Drop Box / Upload | Upload an Approved Synthetic Medical Report File | — | Blocked | Approved synthetic file and target record, plus authorization before a potentially record-changing upload/import. |
| C8935274 | Drop Box / Upload | Reject Medical Report Upload with Unsupported File Format | — | Blocked | Approved synthetic file and target record, plus authorization before a potentially record-changing upload/import. |
| C8934305 | Maintenance / Maintenance | Navigate to the Maintenance Page | — | Requires Requirement Clarification | Documented label or control not confirmed by this inspection: Select an operation. |
| C8935282 | Maintenance / Maintenance | Review Maintenance Actions and Their Outcomes | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8935283 | Maintenance / Maintenance | Validate Maintenance Form Requirements | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8935284 | Maintenance / Error Logs | Navigate to the Error Logs Page | — | Blocked | Individual workflow and assertion review pending |
| C8935287 | Maintenance / Error Logs | Validate Error Log Filters and Download Preconditions | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8935288 | Maintenance / Error Logs | Error Log Download Case Requires Steps and Expected Result | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C8935289 | Maintenance / Error Logs | Error Log Deletion Case Requires Steps and Expected Result | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C8935290 | Maintenance / Error Logs | Filter Error Logs by Type and Date | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8935291 | Maintenance / Unlock User | Navigate to the Unlock User Page | — | Blocked | Individual workflow and assertion review pending |
| C8934306 | Maintenance / Unlock User | Unlock an Approved Disposable Test Account | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8934307 | Maintenance / Unlock User | Reject Unlock Request for an Unknown or Invalid Test Account | — | Blocked | Approved maintenance role and sanitized logs or disposable account, plus authorization for state-changing actions. |
| C8935292 | COVID-19 Vaccination / Search COVID-19 Vaccination | Search COVID-19 Vaccination Status with Valid Synthetic Criteria | tests/searchVaccination.spec.ts | Already Automated | Starting route verified. Synthetic-only employee and vaccination data plus an approved absent match. Search and validation outcomes still require verification. |
| C8935293 | COVID-19 Vaccination / Search COVID-19 Vaccination | Reject Special Characters in Vaccination Search First Name | tests/searchVaccination.spec.ts | Requires Requirement Clarification | Invalid First Name message verified without a request. Overall expected result names a different no-criteria message. |
| C15237380 | COVID-19 Vaccination / Search COVID-19 Vaccination | Verify No Results for Non-Matching Vaccination Search Criteria | tests/searchVaccination.spec.ts | Already Automated | No-match search verified with synthetic names. Assert the exact no-employees result. Existing spec mapping retained. |
| C8928019 | Login Page | Verify Login Succeeds with Valid Credentials and Verification Code | tests/login.spec.ts | Already Automated | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8928020 | Login Page | Verify Login Is Rejected with a Valid Username and Invalid Password | tests/LoginDataDriven.spec.ts | Already Automated | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8928021 | Login Page | Verify Login Submission with Blank Username and Password Displays an Alert | tests/LoginDataDriven.spec.ts | Already Automated | Existing mapping; review assertion parity and synthetic data before re-execution |
| C8928022 | Login Page | Verify Forgot Password / Unlock Account Link Opens the Recovery Page | tests/LoginDataDriven.spec.ts | Already Automated | Confirmed the recovery form shows User Name, Go, and Back to Log in. Use of the recovery submission remains outside this case. |
| C8928023 | Login Page | Verify the Documented Error Appears for Invalid Login Credentials | tests/LoginDataDriven.spec.ts | Already Automated | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C9031928 | Login Page | Verify Submit Is Disabled When the Verification Code Is Blank | — | Automation Ready | Confirmed disabled Submit after entering synthetic field values and leaving verification blank. No login was attempted. |
| C8928025 | Login Page / Forgot Password / Unlock Account | Verify Forgot Password Flow Requests a Reset Email | tests/LoginDataDriven.spec.ts | Already Automated | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8928026 | Login Page / Forgot Password / Unlock Account | Verify Password Reset Request from the Recovery Page | — | Blocked | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8928027 | Login Page / Register Employee | Register an Employee or Pre-Employee and Validate Registration | — | Blocked | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8928028 | Login Page / Register Employee | Register a Doctor or Medical Center User and Validate Registration | — | Blocked | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8934315 | Login Page / Your Dashboard! | Verify Dashboard Link Opens the Quick Guide PDF | — | Requires Requirement Clarification | Documented guide link not located on inspected screens. Confirm supported path. |
| C8934314 | Login Page / Your Mobile Application! | Verify Mobile Application Link Opens the Mobile Guide PDF | — | Requires Requirement Clarification | Documented guide link not located on inspected screens. Confirm supported path. |
| C8934316 | Login Page / Intl. SOS DROP BOX - Click here to send your report | Verify Intl. SOS Drop Box Login with Approved Test Credentials | — | Blocked | Approved synthetic credentials and verification-code flow, plus authorized delivery or registration where applicable. |
| C8935483 | Application User / ISOS Admin | Verify ISOS Admin Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935484 | Application User / ISOS User | Verify ISOS User Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935485 | Application User / Chief Recruiter | Verify Chief Recruiter Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935486 | Application User / Recruiter | Verify Recruiter Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935487 | Application User / ISOS Reviewer | Verify ISOS Reviewer Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935488 | Application User / Client Reviewer | Verify Client Reviewer Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C8935490 | Application User / Partner | Verify Partner Page and Menu Access | — | Blocked | Authorized account for the role and expected entitlement reference. |
| C9217325 | My Profile | My Profile Case Requires Field Details and Expected Result | — | Requires Requirement Clarification | Approved workflow and expected result for the missing documentation. |
| C9404079 | Password length | Update Minimum Password Length to 12 Characters | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9404080 | Password length | Verify Existing Password Field Does Not Validate Length | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9404081 | Password length | Verify New Password Field Enforces Minimum 12 Characters | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9430419 | Password length | Verify Confirm New Password Field Enforces Minimum 12 Characters | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9430421 | Password length | Verify Password Mismatch Validation | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9430422 | Password length | Verify Successful Password Update with Valid 12+ Character Password | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9430423 | Password length | Verify Login with New Password | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9430424 | Password length | Verify Old Password No Longer Works | — | Blocked | Disposable account, approved policy reference and explicit authorization for password changes. |
| C9428818 | ERAMET - Setup new METs and switch between fuller and lighter METs | Verify N1 and N2 MET Linking to Global METs | — | Blocked | Shared MET entry verified. Provision approved synthetic N1/N2 METs and the Full exam/Light exam Global MET mappings. |
| C9428819 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Haute Altitude – No Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428821 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Haute Altitude – Active Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428822 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Zone Impaludée – Age < 45 – No Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428823 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Zone Impaludée – Age < 45 – Active Exam | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428824 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Zone Impaludée – Male – Age > 45 | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428825 | ERAMET - Setup new METs and switch between fuller and lighter METs | Assign MET for Zone Impaludée – Female – Age > 45 | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428826 | ERAMET - Setup new METs and switch between fuller and lighter METs | N1 to N2 Exam Switching – 4 Year Validity | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9428827 | ERAMET - Setup new METs and switch between fuller and lighter METs | N1 to N2 Exam Switching – 2 Year Validity | — | Blocked | Approved synthetic records or account within a role-scoped test tenant. |
| C9430379 | MD-804 / COVID-19 Content Removal | Verify Welcome Email – No COVID Content | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430380 | MD-804 / COVID-19 Content Removal | Verify LTA Email – No COVID Content | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430381 | MD-804 / COVID-19 Content Removal | Verify Reminder 1 Email – No COVID Content | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430382 | MD-804 / COVID-19 Content Removal | Verify Account Enabled Email – No COVID Content | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430383 | MD-804 / COVID-19 Content Removal | Verify HVP Notification – No COVID Content | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430384 | MD-804 / COVID-19 Content Removal | Verify No Email Sent to HCC Employee | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430385 | MD-804 / COVID-19 Content Removal | Verify No Email Sent to HCR Employee | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430386 | MD-804 / COVID-19 Content Removal | Verify Welcome Email – No MedTrack Registration Instruction | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |
| C9430387 | MD-804 / COVID-19 Content Removal | Verify Dynamic Fields in Received Email | — | Blocked | Approved disposable fixture and isolated output sink, plus authorization for notification or generation. |

| C15289362 | Employee / Create New Employee | Verify Cancel returns from Create New Employee to Search Employees | — | Automation Ready | Authorized Search Employees session and documented route. No test data needed. |
| C15289363 | Create Team Member | Verify Cancel returns from Create Team Member to Search Team Members | — | Automation Ready | Authorized Search Employees session and documented route. No test data needed. |
| C15289364 | Drop Box / Upload | Verify Cancel exits the untouched Drop Box upload form | — | Automation Ready | Authorized Search Employees session and documented route. No test data needed. |
| C15289380 | Search employee | Verify Basic Search hides the advanced employee search filters | SearchEmployeePage provides the entry toggle locator | Automation Ready | Use the authorized Search Employees session. Assert advanced field visibility before and after Basic Search. No test record required. |
| C15289381 | Maintenance / Service Management | Verify Maintenance opens the Service Management page | — | Automation Ready | Use the saved web role with Maintenance access. Assert the route, title and heading. No fixture is required. |
| C15289382 | Import Data / Import File | Verify refreshing Import File clears an unsubmitted workbook selection | — | Automation Ready | Local synthetic workbook selection starts no request. Refresh clears it and keeps the Import File page available. |
| C15289383 | Login Page / Forgot Password / Unlock Account | Verify Back to Log in returns from the untouched recovery form | — | Automation Ready | Back to Log in on the untouched recovery form returns to /Login.aspx without a recovery request. |
| C15289415 | System Configuration / Company / Mobile / Static Content | Verify Mobile Static Content Reset clears the blank Owner Company validation | — | Automation Ready | Use authorized saved-role web Mobile Configuration. Assert the exact Reset outcome and retained route. No record fixture required. |
| C15289416 | System Configuration / Company / Mobile / Menu Item | Verify Mobile Menu Item Reset clears the Alternate Menu Name filter | — | Automation Ready | Use authorized saved-role web Mobile Configuration. Assert the exact Reset outcome and retained route. No record fixture required. |

## Approved existing company fixture path

An approved existing company and seeded synthetic records are preferred for read-only automation. Keep exact filters, positive assertions and fixture states in the data contract. Creation and status changes remain outside automation readiness until the required identifiers, role, existing lookups and absence of outbound effects are verified.

## MY COMPANY fixture authorization and Employee Create validation

C8927853 and C15239583 are ready for fixture-free client validation with network blocked after opening the form and outbound requests monitored. This batch did not change existing Playwright automation.

## MY COMPANY employee identifier preflight

C8927858 is verified for a company-scoped read-only name search. Use an absent alphabetic name pair and assert the explicit no-results text.

## MY COMPANY collision and recipient preflight

C8927852 remains blocked. A scoped no-match alone is insufficient for identifier preflight. Check the exact GIN in the wider role-visible directory and verify the approved-recipient boundary before Submit.

## Recipient verification and functional validation batch

C15290180 is automation-ready as a browser client-validation case with postbacks blocked. The verified branches of C8934356 and C8935272 can use the same request-monitoring setup. Record-dependent branches remain pending.

## Configuration and reviewed-exam validation continuation

The nine completed existing cases and C15290212 have testable browser assertions. Block network requests after form load for negative cases and the existing Fit catalog definition for the read-only positive check. Current verified ready/already automated total is 32.

## Company catalog filter follow-up

C8934396, C8934401 and C8934406 can automate a read-only company filter followed by an absent synthetic name. Assert the relevant Active or Handled by Intl. SOS column and the documented no-match response. Existing automation files were left intact.

## Catalog verification and status reconciliation

Seven completed existing cases and two new numeric validation cases can now be automated using existing catalog selections and a monitored browser context that blocks writes. The cumulative verified and ready/already automated total is 44.

## Automation handoff for the 44 verified cases

Repository review found 7 directly mapped cases and 37 candidates. The candidate count includes C8927853, whose existing implementation does not match the verified offline scenario. P1 protects higher-risk functional behavior or addresses a known parity gap. P2 covers reliable read-only and local regressions. P3 covers support navigation.

### Already automated

| Case IDs | Priority | Script mapping | Reusable page objects | Data and access | Recommended next automation action |
| --- | --- | --- | --- | --- | --- |
| C8927858 | P1 - parity and privacy | tests/searchEmployee.spec.ts | SearchEmployeePage, LoginPage | Synthetic nonmatching name and authorized UAT role. Script loads testdata/employee-search.json at module load. | Align with the documented company-scoped name pair before reuse. The current spec filters by first name only and logs row text. |
| C15239309 | P2 - assertion parity | tests/searchEmployee.spec.ts | SearchEmployeePage, LoginPage | Authorized role and Search Employees entry. No employee fixture for this scenario. | Reuse the existing toggle and advanced filter assertions. |
| C15239310 | P2 - assertion parity | tests/navigation.spec.ts | HeaderNavigationPage, LoginPage | Authorized sign-in context. No password input is required. | The mapped test asserts the route. Compare title and entry controls with TestRail before reusing. |
| C15239319, C15239320 | P3 - existing public links | tests/footerNavigation.spec.ts | FooterNavigationPage | Existing authorized storage state. No record fixtures. | Reuse popup helpers and expected route or title checks. |
| C15237380 | P1 - medical search privacy | tests/searchVaccination.spec.ts | SearchVaccinationPage, LoginPage | Generated alphabetic nonmatching names and approved scope. Script loads testdata/employee-search.json at module load. | Existing assertion checks the exact no-results message. Confirm case scope before reusing. |
| C8928022 | P1 - recovery route | tests/LoginDataDriven.spec.ts and testdata/logindata.json | LoginPage | Public recovery entry only. No actual recovery or credentials required. | The existing scenario opens the route. Add field/control parity in a future authorized automation phase. |

### New or alignment candidates

| Case IDs | Priority | Existing mapping | Reusable page objects | Data and access | Recommended next automation action |
| --- | --- | --- | --- | --- | --- |
| C8927853 | P1 - parity candidate | tests/CreateEmployee.spec.ts exists but uses a separately gated Submit path | CreateEmployeePage, LoginPage | Synthetic malformed GIN/email. Existing spec requires ENABLE_PERSISTENT_EMPLOYEE_TESTS to post. | Use the verified no-request client rejection evidence before considering reuse. Keep the existing submission test disabled for this phase. |
| C15239583, C15289362 | P1 | No direct case spec | CreateEmployeePage, HeaderNavigationPage | Authenticated session. Untouched form only. | Assert required errors and zero requests, or untouched Cancel and return. |
| C9031928, C15289383 | P1 | No direct case spec | LoginPage | Fresh public session, synthetic field inputs for disabled gating, no account state changes. | Cover disabled login and untouched recovery Cancel separately. |
| C15290180, C15290212 | P1 | No direct case spec | SearchEmployeePage for authenticated entry. No date or expiration page object exists. | Synthetic date examples and Period values. Approved role, no employee or exam fixture. | Assert rejected inputs and zero attempted searches. Assert local valid boundary results when specified. |
| C15290213, C8934593, C15290214, C8935206 | P1 | No direct case spec | No dedicated master page object. Reuse authenticated navigation only. | Synthetic numeric inputs, Body Mass Index and Reminder Type1. Read-only lookup where stated. | Assert order, required inputs, numeric limits and zero Save requests. |
| C8934360, C8934374, C8934379, C8934385, C8934405 | P1 | No direct case spec | CreateEmployeePage is available for employee form only. Company master Add row needs its own future support. | Current role, approved MY COMPANY where specified, synthetic malformed names and blank rows. | Assert master-specific client text and zero attempted writes. |
| C8934520, C15289415, C15289416 | P1 | No direct case spec | No web Mobile configuration page object. Reuse authenticated entry. | MY COMPANY and absent synthetic alternate name where specified. No persisted mobile record. | Cover web Mobile no-match, rejected values, required fields and Reset. |
| C8934396, C8934401, C8934406 | P2 | No direct case spec | No dedicated Company catalog object. Reuse authenticated entry. | Current MY COMPANY active or Handled by Intl. SOS rows and absent synthetic name. | Check scoped positive results and exact empty-state message without logging raw results. |
| C8934436, C8934463, C8934508 | P2 | No direct case spec | No dedicated Company lookup object. Reuse authenticated entry. | Approved MY COMPANY, compatible MET and reviewer/conclusion choices as specified, plus absent Widget Name. | Use the exact documented missing combinations. Avoid querying unrelated company records. |
| C8934583, C8934585, C8934587, C8934589 | P2 | No direct case spec | No Global MET or Fitness Conclusion page object. Reuse authenticated entry. | Existing agreed Global MET and Fit catalog entries, synthetic absent/invalid values and current role. | Separate global positive lookup from no-save validation. Assert Active on the exact Fit row. |
| C8935142, C8935211 | P2 | No direct case spec | SearchVaccinationPage is for employee vaccination search. These configuration masters need dedicated future support. | Absent vaccine/description values, active Gender codes and malformed Add inputs. | Search only the catalog and monitor blocked Add submissions. |
| C15289382 | P2 | No direct case spec | No Import File page object. Reuse authenticated entry. | Local synthetic workbook. Do not submit import. | Confirm selection is local and refresh clears it. |
| C15289380 | P2 | No direct case spec | SearchEmployeePage | Authorized session. No employee fixture. | Reuse Advanced Search locators and add Basic Search state and visibility assertions later. |
| C15289363, C15289364 | P3 | No direct case spec | No dedicated Team Member or Drop Box page object. Reuse authenticated entry. | Authorized role and untouched forms. No employee or document fixture. | Verify Cancel leaves the form and attempts no save or upload. |
| C8935245, C15289381 | P3 | No direct case spec | No email or Maintenance master page object. Reuse authenticated entry. | Current role with page access. No recipient or service fixture. | Read-only control checks. No delivery or service operations. |

Mappings are based on source inspection. No automation implementation, regression execution or TestRail execution publishing was done during this phase.

### Additions after the 44-case baseline

| New candidates after the 44-case baseline | Priority | Existing script and reusable page object | Data and assertion |
| --- | --- | --- | --- |
| C8934527 | P2 | No direct script or center-specific object. Reuse authenticated Search Employees entry. | Use Bouvet Island for the no-match lookup, synthetic malformed fields and untouched Add values. Assert reset defaults, no write request, and Cancel. |
| C15290370 | P1 | No direct script or center-specific object. Reuse authenticated Search Employees entry. | Use 18:00 and 09:00, then reverse the values. Evaluate only the three local time validators. |

## Dependency priority and documentation handoff

The original 44 map to seven existing implementations and 37 candidates. Current count with the two phase additions is 46, comprising seven directly mapped and 39 candidates.

## Recommended automation implementation sequence

This sequence preserves seven mapped scripts and 39 future candidates. Stage 1 is source parity review. Later stages are implementation proposals only. Each step specifies data and access prerequisites.

| Stage | Workflow group | Reusable page objects | Data and safety dependencies | Case IDs |
| ---: | --- | --- | --- | --- |
| 1 | Mapped script parity before any future execution | LoginPage, SearchEmployeePage, SearchVaccinationPage, HeaderNavigationPage, FooterNavigationPage | Use the authorized role and synthetic inputs. Review company scope and raw result logging in the employee search spec. Keep the persistent Create Employee test out of the validation lane. | C8927858, C15239309, C15239310, C15239319, C15239320, C15237380, C8928022 |
| 2 | Public login and Search Employees controls | LoginPage and SearchEmployeePage | Fresh public context for disabled Submit and recovery return. Authenticated role for Advanced/Basic views. No real credentials for standalone client checks. | C9031928, C15289383, C15289380 |
| 3 | Create Employee no-write and untouched Cancel | CreateEmployeePage, SearchEmployeePage and LoginPage | Synthetic malformed GIN and email or blank form. Block all persistence. The existing C8927853 spec requires a future parity change before reuse. | C8927853, C15239583, C15289362 |
| 4 | Medical Exam and Medical Center validation | Reuse authenticated Search Employees entry. Future exam and center helpers as needed. | Use local invalid dates, expiration limits, synthetic center values, Bouvet Island no-match, and opening/closing times. No clinical or employee fixture. | C15290180, C15290212, C8934527, C15290370 |
| 5 | Company config validation and Web Mobile | Reuse authenticated entry. Company master locators are planned, with no new page objects yet. | Use approved MY COMPANY scopes and malformed or absent filters. Block Save and check exact required-field errors and Reset. | C8934360, C8934374, C8934379, C8934385, C8934405, C8934520, C15289415, C15289416 |
| 6 | Read-only company and global lookup filters | Reuse authenticated entry. Future dedicated lookup helpers only if approved. | Require stable read-only MY COMPANY controls, compatible MET and fitness catalog choices and absent synthetic keys. Never log unrelated result rows. | C8934396, C8934401, C8934406, C8934436, C8934463, C8934508, C8934583, C8934585, C8934587, C8934589 |
| 7 | Shared medical and code validation | Reuse authenticated entry. SearchVaccinationPage does not cover configuration masters. | Use synthetic numeric boundaries, Reminder Type1, Gender code, and approved empty catalog searches. Block all Save and delivery operations. | C15290213, C8934593, C8935142, C15290214, C8935206, C8935211 |
| 8 | Import, untouched forms and support pages | Reuse authenticated entry. Dedicated support page helpers are future work. | Synthetic local workbook for Import only. Eligible roles for Welcome Email and Maintenance. No recipient, document upload or service operation. | C15289382, C15289363, C15289364, C8935245, C15289381 |

No test or automation source file was created or changed.

## Disposable accounts and configuration planning

The eight-stage sequence preserves the requested seven mapped cases and 39 baseline candidates. Add C8934460 alongside the Stage 6 catalog filters after the baseline. Use MY COMPANY, Partner and Fit to work with no restrictions, and keep all Add submissions blocked. No automation code was created or edited.

## Reusable page-object and implementation acceptance checklist

Current scope is seven directly mapped cases and 40 candidates. Preserve the eight-stage order above and place C8934460 in Stage 6. This is an implementation handoff, with no code changes or automated execution in this phase.

| Reusable surface | Existing methods or scope | Acceptance criteria for a future implementation |
| --- | --- | --- |
| LoginPage | goto, clickForgotPassword, and existing public entry selectors | Use the official verification flow only where authorized. Assert disabled controls without sending authentication, recovery, or credential failures in client-only cases. |
| SearchEmployeePage | clickAdvancedSearch, filter setters, clickSearch, verifyNoMatchingResults | Extend Basic Search visibility assertions in the candidate implementation. Use exact approved company scope and synthetic filters, and verify absence without logging raw result rows. |
| HeaderNavigationPage and FooterNavigationPage | openMyDetails, openChangePassword, openContactUs and openPrivacyPolicy | Retain read-only navigation and popup assertions. My Details profile contents still require its own dedicated fixture and are not part of the verified baseline. |
| CreateEmployeePage | goto and existing form selectors | Separate the no-request client rejection and Cancel tests from the gated persistent legacy case. Preserve the fixture dependency and a guard that detects attempted writes. |
| SearchVaccinationPage | goto, fillSearchCriteria and search | Use scoped, synthetic no-match data and the documented message. Keep employee vaccination searches separate from configuration masters. |
| Company/Exam/Mobile configuration, catalog and support surfaces | Reuse authenticated entry only; current page-object inventory has no dedicated objects for these screens | Plan helpers around shared filter, reset, incomplete Add, and Cancel patterns. Use only recorded approved catalog options. For no-write validation, guard the request and assert both the actual UI result and zero attempted persistence. |

Sign-off for a future case requires the current TestRail case ID, exact verified fixture and permissions, named step assertions, any output boundary and cleanup responsibility, and a parity check against the documented business outcome. Do not promote provisional requirement cases into this readiness count.

## Provisional decisions and final documentation handoff

Current handoff is seven existing mapped cases and 40 future candidates. C8933409 remains outside the verified readiness set because only the safe scoped Search was exercised and the approved Print contract is pending. No automation files or scripts changed.

| Case | Workflow | Readiness | Implementation | Data and assertion |
| --- | --- | --- | --- | --- |
| C15290371 | Search Reviewed Exams date range Reset | Automation Ready | New candidate. Reuse the authenticated entry and shared date-range control. | Use two valid consecutive past dates and assert both are cleared, route is unchanged and Search is never requested. |
| C15290403 | Medical Exam Expirations draft Reset | Automation Ready | New candidate. Reuse the authenticated entry, enumeration and conditional number field. | Leave Company unselected, set Inactive and Custom period with 37, then assert all defaults, hidden Custom Period and no form request. |

## App-health candidates

| Case | Workflow | Dependency |
| --- | --- | --- |
| C15290404 | Verify Reset clears draft Team Member identity filters and restores User Status | Team Member Search route permission. No identity fixture required. |
| C15290405 | Verify Reset clears draft Vaccination search identity and location filters | Vaccination search route permission. No clinical fixture required. |
| C15290406 | Verify Job Title Reset clears the draft search and unchecks Show only Active | Allow the exact Job Title Reset request. No fixture required. |
| C15290407 | Verify Cancel discards an unsaved Web Mobile Menu Item draft | Allow exact Add and Cancel only. No compatible catalog item needed for this branch. |
| C15290408 | Verify Reset restores company-gated reminder criteria without searching or generating output | MY COMPANY 129 read-only criteria. Permit only company selection and Reset. |

## Business coverage additions

| Case | Implemented outcome to assert | Recommended asset |
| --- | --- | --- |
| C15290409 | Both malformed GIN and impossible DOB triggered exact local dialogs without a request. | Search fields, dialog and request guard |
| C15290410 | With MY COMPANY and default period, blank Status prevented the query. | Company and Status dropdowns, validation dialog |
| C15290411 | The exact global name matched while the same definition had no MY COMPANY mapping. | Catalog grids, Global MET and Company filters, exact scoped no-results state |
| C15290412 | Numeric enabled Min, Max, International Unit and Display UOM. Boolean disabled them. | Health Check Item type selector, numeric inputs, unit and display checkbox |
| C15290413 | The second-dose selection retained Moderna and issued no search. | Dose and brand dropdown selection |

[Prioritized implementation backlog](gocare-automation-implementation-backlog.csv)

## Final verified candidates

| Case | Candidate | Expected effect |
| --- | --- | --- |
| C15290445 | Verify the employee intake draft accepts synthetic identity and contact details | Identity, contact, nationality and marital-state inputs were verified in the unsubmitted draft. |
| C15290446 | Populate vaccination Area and Category criteria for the approved company | Company selection populated Area and Category and preserved the independently chosen country and status. |
| C15290447 | Scope Widget Configuration search criteria and retain the selected health item when Widget Type changes | MY COMPANY scoped Health Check choices and the Widget Type switch retained BMI. |
| C15290448 | Retain independent role, company, lock and corporate criteria before Team Member search | Role, Company, Lock Status and corporate status retained their exact local values. |
| C15290449 | Return no active company for an absent name scoped to an approved owner | Exact approved owner and active-only absence returned the verified scoped no-company message. |
| C15290450 | Initialize the Team Member account draft only after selecting a supported role | Both approved roles initialized Username, AD account and Owner Company controls without creating an account. |
| C15290451 | Require the three identity fields before Employee Registration can request a lookup | All three identity field messages appeared and no lookup was attempted. |
| C15290452 | Preserve owner and search input while toggling the company catalog Active filter | Five catalog drafts retained the exact owner and criterion during both active checkbox states. |
| C15290453 | Preserve the medical catalog criterion while toggling the Active filter | Four catalog drafts retained the exact criterion during both active checkbox states. |
