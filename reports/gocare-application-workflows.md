# GoCare application workflows

**Final documentation checkpoint · 26 November 2026**

Newly verified behavior covers Employee and Provider draft data, scoped Company no-match search, vaccination-dependent criteria, Widget relation and item retention, Team Member roles and access criteria, public blank registration, and active-filter retention on nine catalog pages. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

Added exact negative validation for vaccination GIN/date and expiration Status. Confirmed the retained vaccine brand, Numeric/Boolean dependency, and global versus company MET scope. The positive clinical and account workflows still need the approved fixtures. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

The new branches cover draft Team Member and Vaccination criteria Reset, Job Title checkbox Reset, unsaved Web Mobile Menu Item Cancel, and company-dependent Reminder Reset. Reopening Create Team Member verified an unsaved draft was discarded. Public Employee Registration Cancel returned to login without a form request. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

Medical Exam Expirations starts with Select Company, Active and Expire in 1 month. Setting Inactive and Custom period and entering 37 reveals the numeric field. Reset restores the defaults, hides Custom Period and does not send a form request. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

The current business inventory has 233 non-navigation scenarios and eight candidate cross-module chains. Reviewed Exams date Reset is now verified without a reviewer or exam fixture. Downstream protected or mutating steps remain gated. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Live TestRail baseline refreshed 25 November 2026.

The current browser pass repeated public and saved-session entry. Remaining historical observations retain their earlier evidence and limitations. [Previous workflow and correction audit](gocare-master-suite-correction-progress-2026-11-25.md)

## Public login and recovery

1. Open the GoCare application root in a fresh context. GoCare Read Write - MedTrack Login displays a password input and Submit is disabled with the form empty.
2. Select Forgot Password / Unlock on the login page. The current browser pass opened Forgot Password Username at /UserManagement/ForgotPasswordUserName.aspx and located a text input.
3. Account recovery submission, email delivery, successful interactive login, and post-verification-code states remain pending. The current browser pass used an existing saved state for authenticated coverage.

## Authenticated landing and Search Employees

1. Open GoCare with the existing authenticated state. The browser lands at /Employee/SearchEmployee.aspx.
2. Expand Advanced Search. Earlier inspection observed Area, Job Site, and Geo Market.
3. Enter synthetic text, change the documented status selections, and select Created By Intl. SOS. Select Reset. The prior observation confirmed cleared text, default selections and an unchecked checkbox for the controls exercised.
4. The no-result message and record selection outcomes require further evidence. Employee Details, Dashboard, health and administration workflows require approved synthetic records.

## Header and footer navigation

From Search Employees, earlier observations found that My Details opens /UserManagement/ViewUser.aspx and Change Password opens /UserManagement/ChangePassword.aspx. Need Help? and footer Help open the same role-specific Help popup. Contact Us and Privacy Policy each open a popup. See the [clarification and defect report](gocare-clarifications-and-defects.md) for the unresolved Help content, Cancel and Quit behavior.

Need Help? ? /HelpFile/DefaultHelp/ISOSAdmin/OnlineHelp.htm. The content frame displayed Requested Resource Not Found.

Help ? /HelpFile/DefaultHelp/ISOSAdmin/OnlineHelp.htm. The content frame displayed Requested Resource Not Found.

Contact Us ? /StaticContent/public-contact-us.html. 1 public phone or email link(s) were present.

Privacy Policy ? /privacy-centre. The popup displayed a privacy heading and policy-related content.

## System Configuration

1. Start signed in on Search Employees with permission for the configuration module.
2. Hover System Configuration. Hover Company, Exam, or Medical Data to reveal the submenu.
3. Select the exact link in the [module inventory](gocare-application-module-inventory.md). The destination opens in the same page and exposes the documented heading and search controls where confirmed.
4. Add, Search and Reset are present on the verified Company and Exam case screens. Side effects, validation, mandatory fields, result grids and persistence remain pending.

## Change Password Cancel

From Search Employees, select Change Password. The page opens at /UserManagement/ChangePassword.aspx with title MedFit - Change Password. The current pass located a visible Cancel in the main form and three password inputs. Selecting Cancel with an untouched form returned to Search Employees. C15239317 retains its separate edited-form expectation pending approved synthetic input. No password-change submission was performed.

## Other menu paths

Hovering Import Data exposed Import and Export Quest. Hovering COVID-19 Vaccination exposed Search COVID-19 Vaccination. The browser recorded their link targets. The links, forms and submissions were left for their case-specific safe workflow checks.

Maintenance opened at /SystemConfiguration/Maintenance.aspx. The documented operation dropdown was unconfirmed. Send Welcome Email opened /Employee/SendWelcomeEmail.aspx and showed Company, Get Details, Send-Email, and Reset. The two documented checkbox labels were unconfirmed. Drop Box Upload was visible as a menu link. Later checks opened Drop Box Upload. Export Data remained unavailable.

## Remaining workflows

The current browser pass followed Create New Employee and Create Team Member from the Search Employees menu. Both reached the corresponding creation page and showed Cancel. Create New Employee also showed Submit. Submit, persistence and cleanup remain unverified. Imports, exports, report generation, reminders, messages, document handling and maintenance require approved fixture scope or explicit authorization where an action persists or sends data. Approval of a synthetic-only tenant and role accounts is needed to establish record, write and permission-dependent paths.

## Continuation observations

- Logo Information and Criteria both displayed “The Company is mandatory and cannot be blank.” after Get Details on the default blank Owner Company selection. Logo Information Reset removed the message and left the selector at its default.
- The Company Medical History initial page has Owner Company and Get Details. Its observed blank lookup did not produce the Logo or Criteria validation text.
- Notifications and Landing Page opened for the saved session. The documented form controls were unavailable.
- Drop Box > Upload reached the medical-report entry form. Selecting Cancel with the form untouched returned to Search Employees.
- Search Employees > Advanced Search exposed Area, Job Site and Geo Market, and the basic Search and Reset controls stayed visible.
- The read-only menu inventory includes Reminders and Documents > Generate and Download, Drop Box > Download and Upload, and Maintenance > Service Management. These are observed link targets.
- Create New Employee opened /Employee/CreateEmployee.aspx. Cancel on the untouched form returned to /Employee/SearchEmployee.aspx.
- Create Team Member opened /UserManagement/CreateUser.aspx. Cancel on the untouched form returned to /UserManagement/SearchUsers.aspx.
- Upload opened /Employee/DropBoxUploadWithMenu.aspx. Cancel on the untouched form returned to /Employee/SearchEmployee.aspx.
- Encryption Utility displayed the documented invalid Base64 message for synthetic invalid input. A separate check produced ciphertext from synthetic plaintext and recovered the original text using Decrypt on a fresh utility form.

## Employee, team-member, exam and vaccination entry screens

- From Search Employees, use Search Employees. Advanced Search / Basic Search switches visibility of Area, Job Site and Geo Market. Search remains available.
- From Search Employees, open Create New Employee. Required marks on Employee Status, Title, First Name, Last Name, Gender, Date of Birth, Company and GIN Number. The page also defines enabled required validators for Primary Email and Relation.
- From Search Employees, open Search Team Members. User Role, Account Status, last and first names, Username, Employee GIN, Email Address, Company, lock status, Search and Reset.
- From Search Employees, open Create Team Member. User Role is the visible required control in the initial step. Cancel is available. The page defines additional validators for fields that are hidden until the role-dependent form is shown.
- From Search Employees, open Medical Exam Expirations. Company and Status are marked required. Expiration Period includes Custom period, with a validator for the conditional custom value. Search and Reset are visible.
- From Search Employees, open Search Reviewed Exams. User Role, From Date and To Date are marked required. User ID, Search and Reset are visible. The role list includes ISOS Reviewer and Client Reviewer.
- From Search Employees, open COVID-19 Vaccination > Search COVID-19 Vaccination. First and last names, Status, GIN Number / Applicant ID, Date of Birth, Company, Vaccine Name, Vaccine Brand Name, Assignment Country, Employee Category, City, Area, Search and Reset.
- From Search Employees, open Maintenance > Service Management. The page opened. Expected service controls were unavailable in the saved session.

Local First Name entry and clear were confirmed on Create New Employee, Search Team Members and vaccination search with network requests blocked during input. The browser initiated no requests during these checks. No record searches, uploads, form submissions, or business-record changes were performed. The exam entry form, record detail tabs and vaccination record details remain dependent on approved synthetic records. Export Data navigation still timed out in the saved session.

## Web-only continuation observations

- System Configuration > Company > Mobile > Static Content opens /Company/CompanyMobileStaticContent.aspx when the destination is available. Owner Company, Search and Reset are visible. Search with Owner Company at the blank default displays “The Company is mandatory and cannot be blank.”
- System Configuration > Company > Mobile > Menu Item opens /Company/CompanyMenuItem.aspx when the destination is available. Owner Company, Default Menu Name, Alternate Menu Name, Add, Search and Reset are visible. Search outcomes and changes to configuration need approved data.
- Import Data > Import opens /Import/ViewImportActivities.aspx when the destination is available. The Import File heading, file picker and Import button are visible. No file selection or import operation was performed.
- Import Data > Export Quest opens /Import/ExportQuest.aspx when the destination is available. The page opens with generation and download controls in the form. No file generation or download was performed.
- Maintenance > Service Management opens /SystemConfiguration/ServiceManagement.aspx when the destination is available. The menu opens the page in the same tab with a visible Service Management heading. No service controls were visible in the saved session.
- The menu target remains /Export/BuildReport.aspx. Both ordinary click and direct navigation timed out.
- The blank Owner Company validation is verified. The follow-up did not establish that Reset returns to the same Mobile Static Content form with the message cleared.

## Verification and local file selection

- Public Login at /. Submit was disabled with empty inputs and stayed disabled with synthetic values in User Name and Password while verification remained blank.
- Forgot Password / Unlock Account at /UserManagement/ForgotPasswordUserName.aspx. User Name, Go and Back to Log in were visible. Back to Log in returned the untouched form to /Login.aspx.
- Change Password at /UserManagement/ChangePassword.aspx. Existing Password, New Password, Confirm New Password, two security question selectors with answer fields, Submit and Cancel were visible.
- Import File at /Import/ViewImportActivities.aspx. The picker takes one local file and declares no browser accept filter. A one-cell synthetic workbook was selected with zero requests. Refresh cleared the selection.
- Service Management at /SystemConfiguration/ServiceManagement.aspx. The Service Management heading was visible. The saved role exposed no service controls.
- Generate Reminders and Documents at /MedicalExam/GenerateReminderAndHealthPassport.aspx. Company, From Date, To Date, Search and Reset were visible on the entry form.
- Export Data at /Export/BuildReport.aspx. Both the ordinary menu activation and direct navigation timed out in the previous web pass.

The pass ended before login submission, recovery email, import execution, service changes, or reminder generation.

## Workflow validation evidence

- Web Mobile Static Content at /Company/CompanyMobileStaticContent.aspx. Starting from a blank Owner Company, Search displayed “The Company is mandatory and cannot be blank.” Reset cleared the message and retained the blank default on the same form.
- Web Mobile Menu Item at /Company/CompanyMenuItem.aspx. Reset cleared the synthetic Alternate Menu Name value and kept Owner Company blank on the same form.
- System Configuration > Company > MET opens /Company/SearchMET.aspx and Exam > Global MET opens /SystemConfiguration/SearchGlobalMET.aspx. Shared controls are present. ERAMET mappings and assignment outcomes remain unverified.
- Change Password exposes three password fields with HTML maxlength 15 and client required, custom and compare validation hooks. Approved server policy and edited-form Cancel remain unresolved.

[Workflow completion matrix](gocare-workflow-completion-matrix.md) · [Synthetic fixture requirements](gocare-synthetic-test-data-requirements.md) · [Suite quality audit](gocare-testrail-final-quality-audit.md)

## Safe workflow checks during fixture preparation

- From Search Employees, hover System Configuration, Company and Dashboard, then select Widget Configuration. Enter QAAtlasAbsentWidgetNovember as Widget Name with all other filters unchanged. Search stays on /SystemConfiguration/SearchWidgetConfiguration.aspx and shows “There is no widget configuration available for the selected criteria.”
- Shared Company MET and Global MET screens were rechecked. The synthetic N1/N2 mappings needed to verify ERAMET remain proposals.

[Fixture setup proposal](gocare-synthetic-test-data-requirements.md#consolidated-fixture-setup-proposal-for-approval) · [Workflow completion matrix](gocare-workflow-completion-matrix.md)

## Revised UAT scope and safe validation

- Company Search with the active-only filter cleared returned “There are no companies available for the search performed.” for GoCare QA Atlas. This confirmed absence for that name and filter state.
- Add from Search Company opens Create Company. An untouched Submit attempt was rejected by client validation before any Submit request. Required-owner configuration and notification isolation remain prerequisites for provisioning.
- Search COVID-19 Vaccination rejected the synthetic invalid First Name before a search request. A separate unmatched synthetic search returned “There are no employees available for the search performed.” [Synthetic record registry](gocare-synthetic-record-registry.md)

## Create Company and Team Member validation

- Search Company > Add opens Create Company. Blank fields trigger client validation and preserve the form. The underscore Company Name QA_ATLAS_Company is rejected with “Please enter a valid Company Name.” GoCare QA Atlas passes the observed name-format validator. Neither validation sent Submit.
- Search Team Members rejects the synthetic invalid First Name locally and returns the exact no-users message for the synthetic unmatched names. The blank-search server request was blocked.
- Reviewed Exams attempted a server request with blank criteria. It was blocked, and the expected server validation remains unverified. The initial Exam Expirations filter did not satisfy the guard for an entirely blank form. [Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions) · [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Use an approved company and exact synthetic identifiers for positive searches. Create New Employee visibly requires Employee Status, Title, First Name, Last Name, Gender, Date of Birth, Company and GIN Number. Enabled validators also require Primary Email and Relation. Applicant ID substitution and role-specific server validation remain pending. Team Member creation begins with User Role. Medical Exam creation depends on the employee and company-enabled exam type and center. The COVID-19 Vaccination search is verified. A writable vaccine path independent of employee or exam updates remains unverified.

## MY COMPANY fixture authorization and Employee Create validation

MY COMPANY is authorized for controlled synthetic creation in UAT. The Create New Employee company selector verified its ID as 129. The first candidate is Active, Mr Aster QAfixture, Male, 12-Feb-1982, Relation Employee. GIN and Primary Email remain unset. Obtain a test GIN or approved range and an approved isolated address with verified no-outbound handling for Create Employee. Run an exact uniqueness check before submitting. Do not create dependent records until parent-record and notification behavior is established. C8927853 and C15239583 were verified in GoCare UAT with all network requests blocked before clicking Submit. Malformed GIN and Primary E-mail Address produced the two documented messages. Untouched Submit produced nine mandatory-field messages, including Employee Title. Both forms remained open and the browser attempted no record submission. C8927852, C8927853 and C15239583 were updated and verified through fresh TestRail GETs. Original expected results and existing attachments were preserved.

## MY COMPANY employee identifier preflight

Aster QAfixture candidate GIN 97101 follows the repository convention of five digits beginning with 9. It matched the Create Employee client format validator. The input limit is 30 characters and the client rule is broader than the five-digit convention. An exact search in MY COMPANY (129) with employee status unfiltered returned the explicit no-results message. This proves absence in the queried scope at the time of the check. Repeat the check before Submit and confirm wider uniqueness if required. The user approved the specific Primary Email for Aster QAfixture. Keep the address in the original approval. Create Employee remains on hold until no outbound email, notification or queueing is verified. No application record was created or changed.

## MY COMPANY collision and recipient preflight

Offline client validation passed for Active, Mr Aster QAfixture, Male, 12-Feb-1982 and Relation Employee with a synthetic placeholder email. No Create request was sent. The supplied GIN returned no match under MY COMPANY (129). With Company and Employee Status unfiltered, Search Employees returned one exact match in the GIN Number column. The checks recorded only the match outcome. No employee record was opened. Alternative 97101 returned no matches in both the earlier company-scoped check and the current role-visible directory check. It is pending approval and recheck.

## Recipient verification and functional validation batch

Medical Exam Expirations showed the missing-company popup with Active and Expire in 1 month as its initial filters. With MY COMPANY and Custom period selected, the browser rejected an empty value, -1 and 501 before a request. The enabled client validators accepted 0 and 500. The positive search and export still need a synthetic-only dataset. Drop Box Get Details displayed "Please select Company Name" with only the approved synthetic GIN, and "GIN number can not be empty" with MY COMPANY selected and no GIN. Neither validation attempted a request. The server no-match response remains unverified. The MY COMPANY details form (company 129) shows Client Reviewer email and Due Date Reminders enabled. HR notification, latest-reminder loop and Vaccination Reminder were unchecked. The authorized role could see no recipient allowlist or Create Employee recipient preview. The settings do not establish which recipients the server would use on creation. Hold Employee Create until that recipient boundary is verified.

## Configuration and reviewed-exam validation continuation

Form navigation allowed documented Add and Cancel only. Rejected synthetic input never attempted a Save request. The exact Fit catalog item returned Active Yes. A standalone Reviewed Exams case covers client rejection of malformed From Date and impossible To Date. Reconciled the 120 earlier partial cases and all 95 blocked fixture IDs against the live inventory. No existing automation scripts were changed. No application records or settings were changed. Employee creation stayed deferred without a repeat recipient investigation.

## Company catalog filter follow-up

The read-only catalog pass added verified evidence to C8934375, C8934380, C8934386, C8934396, C8934401, C8934406 and C8934416. TestRail read-back preserved each case ID, original attachment references and unrelated fields. Job Site, Job Title and Employee Category are complete. Area, Business Area, Geo Market and Additional Information retain their remaining owner-specific branches. Exact synthetic absent-name searches provide a repeatable alternative to creating configuration.

## Catalog verification and status reconciliation

Verified new cases C15290213 and C15290214 cover threshold ordering and the inclusive reminder-frequency limits. Used read-only scopes and existing catalog selections for positive and no-match searches. Every GoCare Save and Submit capable of persistence was blocked. No application records, configuration or existing automation scripts changed. The existing global Global MET catalog returned the documented blank-search no-result message. With compatible filters it returned the exact matching catalog entry. Company Notifications and Landing Page shells still have unresolved control availability.

## Dependency priority and documentation handoff

Medical Center filters reset to blank name, Show Both, unchecked Active, and Select Country. Bouvet Island returned the documented empty result. The Add form rejected invalid input locally and Cancel returned to Search Medical Center. The public login Submit stayed disabled when only a placeholder verification value was entered, with no login request.

Follow-up checks confirmed that blank Submit on the unsaved MET form reports Company, Global MET and MET Name as required, with no attempted request. MY COMPANY plus the Partner role returned the documented no-match Fitness Conclusion message. Fit with restrictions alone returned a different result, so the separate conclusion-only fixture is still needed. Fresh TestRail GETs verified C8934430 and C8934460 with their original attachment references.

## Disposable accounts and configuration planning

No dedicated QA account was verified. Six exact proposal lookups in MY COMPANY returned no matches. Two hyphenated aliases were rejected by local Username validation before any request. Both MY COMPANY no-match branches, the three blank Add fields, and all four Reset controls matched the expected behavior. The proposed setup uses one disposable company for its own mappings and one isolated shared-catalog scope. No configuration writes were performed. The existing role could select MY COMPANY, Health-Check item, Standard, BMI and Male for a Widget draft, but the preference controls were unavailable and Submit remained disabled.

## Provisional decisions and final documentation handoff

The MY COMPANY Search for 01-Jan-2099 through 02-Jan-2099 returned 0 for LTA, Reminder 1, Reminder 2, Health Passport, Cover Letter, Label and Fitness Certificate. The response returned Print Reminders and Print Documents without a disabled attribute. No print, generation, download or notification action was attempted. The behavior of invoking the Print controls remains unverified. Contact Information and Administrative Information use the observed My Details entry for the provisional self-service workflow, with role-specific details pending a seeded synthetic account.
