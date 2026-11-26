# GoCare application module inventory

**Final documentation checkpoint · 26 November 2026**

The final live scope covers 16 GoCare web modules and 87 case-bearing features. The 253 non-navigation, non-retained cases include draft, validation, business, permission and integration scenarios. No exact protected destination was inferred. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

Reviewed 16 modules and 87 case-bearing features. New evidence covers clinical criteria, Healthcare Item type behavior and read-only cross-catalog MET scope. The mapping keeps protected downstream destinations separate. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

The headed pass verified the public Employee and Doctor/Medical Center registration entries. Confirmed Maintenance menu targets for Error Logs and Unlock User without loading protected destinations. The read-only ERAMET entry is anchored to the Company MET and Exam Global MET routes. The scope remains 16 modules and 87 case-bearing feature sections. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

Headed UAT verification at Medical Exam Expirations confirmed the conditional Custom Period input and local Reset. Current inventory remains 16 modules, 87 case-bearing features and 110 included sections. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

The current taxonomy has 16 modules and 87 case-bearing feature sections. The navigation matrix reconciles 66 mapped destinations or workflow entry points with a 46-route UAT refresh and two additional shell links pending destination evidence. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Project 73 / Master suite 26097. Live TestRail baseline refreshed 25 November 2026.

The live unauthenticated root returned HTTP 200 and displayed a password input. The existing authenticated Playwright session landed on Search Employees at /Employee/SearchEmployee.aspx. The session can see System Configuration. Other role entitlements remain to be verified. Prior observed navigation is carried forward with its original evidence level. [Previous workflow and correction audit](gocare-master-suite-correction-progress-2026-11-25.md)

## Suite workflow groups

| Suite group | In-scope cases | Navigation evidence | Exploration status |
| --- | --- | --- | --- |
| Search employee | 29 | `/Employee/SearchEmployee.aspx` | Advanced Search and Reset observed; no-match result inconclusive; employee detail flows unverified |
| Employee | 32 | `/Employee/SearchEmployee.aspx`; `/Employee/CreateEmployee.aspx` | Search/reset and blank create form partially observed; record details, exams, dashboard, and changes unverified |
| Search Team Members | 2 | Blank team-member filter form opens. | Search and Reset controls and local draft entry observed. Case results need synthetic records. |
| Create Team Member | 3 | `/UserManagement/CreateUser.aspx` | Blank form route observed; submit/validation unverified |
| Medical Exam Expirations | 3 | Required Company and custom period boundary behavior verified. | Record queries and export await synthetic scope. |
| Import Data | 4 | Import File and Export Quest open from Import Data. | Local workbook selection and refresh verified. Import and output operations need approval and fixtures. |
| Reminders and Documents | 3 | Generate opens the reminders and documents entry form. | Company, From Date, To Date, Search and Reset observed. Generation needs synthetic fixtures and authorization. |
| Search Reviewed Exams | 4 | Blank reviewed-exam filters open. | Reviewer role and date filters observed. Record search awaits synthetic scope. |
| Export Data | 0 | Menu link and direct route timed out. | Builder behavior remains unresolved. |
| System Configuration | 134 | Menu postback; nested route map below | Submenus and route targets partly observed; case-specific configuration behavior unverified; no setting changed |
| Certificate of Fitness | 0 | No in-scope cases | No workflow observed |
| Send Welcome Email | 4 | `/Employee/SendWelcomeEmail.aspx` | Partial. Landing and selected controls observed. Recipient and sending workflows pending. |
| Drop Box | 5 | Upload opens the medical-report entry form. | Untouched Cancel verified. Upload and lookup need approved synthetic records. |
| Maintenance | 12 | Maintenance and Service Management entry pages observed. | Service heading observed. Operational controls unavailable for the saved role. |
| COVID-19 Vaccination | 3 | Search COVID-19 Vaccination opens its filter form. | Filter controls and local input observed. Record search remains fixture-dependent. |
| Login Page | 14 | Public Login and recovery routes observed. | Blank-code Submit gating and recovery return verified. Account and email scenarios need authorized fixtures. |
| Application User | 7 | No safe role-switch path established | Unverified; role-specific pages/permissions need approved role accounts |
| My Profile | 1 | My Details postback reaches `/UserManagement/ViewUser.aspx`; Change Password link reaches `/UserManagement/ChangePassword.aspx` | Routes observed; My Details contents uncharacterized. Password form controls observed without reading values or submitting changes. |
| Password length | 8 | Change Password fields and client validators observed. | Server rules, policy and account workflow need approved fixtures and requirement evidence. |
| ERAMET - Setup new METs and switch between fuller and lighter METs | 9 | Shared Company MET and Global MET screens reached. | ERAMET-specific rules and transitions require an approved company mapping and synthetic employees/exams. |
| MD-804 | 9 | No app entry point established | Unverified pending detailed case review |

## Additional screens and controls

| Module or screen | Navigation from current starting page | Observed route or link target | Status, operations and dependencies |
| --- | --- | --- | --- |
| Change Password | Search Employees > Change Password | /UserManagement/ChangePassword.aspx | Partial. Password/security question controls, Submit and Log out observed in prior audit. Cancel and policy are unresolved. |
| Help | Search Employees > Need Help? or footer Help | /HelpFile/DefaultHelp/ISOSAdmin/OnlineHelp.htm | Partial. Popup observed. Help frame content failure recorded. |
| Contact Us | Search Employees > Contact Us | /StaticContent/public-contact-us.html | Partial. Popup title and page presence observed in prior audit. |
| Privacy Policy | Search Employees > Privacy Policy | /privacy-centre | Partial. Popup path, title and page presence observed in prior audit. |
| Logout | Authenticated Log out control | — | Control observed. Session exit and redirect pending. |
| Create New Employee | Search Employees > Create New Employee | /Employee/CreateEmployee.aspx | Partial. Prior blank form observation. Field-level behavior, validation and creation pending. |
| Advanced Employee Search | Search Employees > Advanced Search | /Employee/SearchEmployee.aspx | Partial. Area, Job Site, Geo Market criteria and basic reset observed in prior audit. |
| Employee Details / Dashboard / Administration | Search Employees entry observed | — | Blocked for record-level exploration pending an approved synthetic-only employee scope. |
| Medical Examinations / Medical History / Fitness Status / Vaccination | Employee entry point referenced by cases | — | Record-level routes and operations pending synthetic health records. Medical Data configuration pages are recorded separately. |
| Team Member Management | Search Team Members entry target; Create Team Member blank form | /UserManagement/SearchUsers.aspx; /UserManagement/CreateUser.aspx | Results, record operations and permissions pending synthetic team-member scope. |

## Navigation link targets

| Link | Observed target or behavior |
| --- | --- |
| Create Team Member | 2 |
| Export Data | 0 |
| Maintenance | 11 |
| Medical Exam Expirations | 3 |
| Search Reviewed Exams | 3 |
| Search Team Members | 2 |
| Send Welcome Email | 4 |
| Search Employees | `/Employee/SearchEmployee.aspx` |
| Create New Employee | `/Employee/CreateEmployee.aspx` |
| Search Team Members | `/UserManagement/SearchUsers.aspx` |
| Create Team Member | `/UserManagement/CreateUser.aspx` |
| Medical Exam Expirations | `/Employee/MedicalExamExpirations.aspx` |
| Search Reviewed Exams | `/MedicalExam/SearchReviewedExams.aspx` |
| Export Data | `/Export/BuildReport.aspx` |
| Send Welcome Email | `/Employee/SendWelcomeEmail.aspx` |
| Maintenance | `/SystemConfiguration/Maintenance.aspx` |
| My Details | Postback; observed destination `/UserManagement/ViewUser.aspx` |
| Help, Contact Us | Link target resolves to the current route; popup/navigation behavior not yet verified |

## System Configuration screen map

| Menu path | Actual link target recorded in earlier audit |
| --- | --- |
| System Configuration > Code Description | `/SystemConfiguration/CodeMaster.aspx` (followed; title and documented controls verified) |
| System Configuration > Encryption Utility | `/Miscellaneous/EncryptionUtility.aspx` (followed; title, labels, headings, and separate Decrypt/Encrypt controls verified without using them) |
| System Configuration > Company > Company | `/Company/SearchCompany.aspx` (followed; page title and documented controls verified) |
| System Configuration > Company > Logo Information | `/Company/CompanyLogoInformation.aspx` |
| System Configuration > Company > Area / Business Area / Geo Market / Job Site / Job Title / Employee Category | `/Company/CompanyArea.aspx`; `/Company/CompanyBusinessArea.aspx`; `/Company/CompanyGeoMarket.aspx`; `/Company/CompanyJobSite.aspx`; `/Company/CompanyJobTitle.aspx`; `/Company/CompanyEmpCategory.aspx` |
| System Configuration > Company > Additional Information / Criteria / MET / Fitness Conclusion / Static Content / Medical History | `/Company/CompanyAdditionalInformation.aspx`; `/Company/CompanyMETCriteria.aspx`; `/Company/SearchMET.aspx`; `/Company/FitnessConclusion.aspx`; `/Company/CompanyStaticContent.aspx`; `/Company/CompanyMedicalHistory.aspx` |
| System Configuration > Company > Dashboard > Widget Configuration / Notifications / Landing Page | `/SystemConfiguration/SearchWidgetConfiguration.aspx`; `/Company/CompanyNotification.aspx`; `/Company/DashboardConfiguration.aspx` |
| System Configuration > Company > Mobile > Static Content / Menu Item | `/Company/CompanyMobileStaticContent.aspx`; `/Company/CompanyMenuItem.aspx` |
| System Configuration > Exam > Medical Center / Global MET / Fitness Conclusion | `/SystemConfiguration/SearchMedicalCenter.aspx`; `/SystemConfiguration/SearchGlobalMET.aspx`; `/SystemConfiguration/FitnessConclusionMaster.aspx` |
| System Configuration > Medical Data > BP/BMI/Cholestrol / Health Check Item / Medical History / Vaccination / Vaccination Reminder | `/SystemConfiguration/BloodPressureMaster.aspx`; `/SystemConfiguration/SearchHealthCheckItem.aspx`; `/SystemConfiguration/MedicalHistoryItem.aspx`; `/SystemConfiguration/VaccinationMaster.aspx`; `/SystemConfiguration/VaccinationReminder.aspx` |

### Current live screen and control observations

Role evidence is limited to the existing session with access to each menu. Start on Search Employees. The controls below were verified for presence. Input values, action outcomes, records, business rules and permission-matrix behavior are pending. No configuration action was submitted.

| Path from Search Employees | Route and browser title | Observed controls | TestRail case | Status |
| --- | --- | --- | --- | --- |
| System Configuration > Company > Area | /Company/CompanyArea.aspx / MedFit - Company Area | Owner Company, Area, Show only Active, Add, Search, Reset | C8934372 | Initial screen verified |
| System Configuration > Company > Business Area | /Company/CompanyBusinessArea.aspx / MedFit - Company Business Area Description | Owner Company, Business Area, Show only Active, Add, Search, Reset | C8934377 | Initial screen verified |
| System Configuration > Company > Geo Market | /Company/CompanyGeoMarket.aspx / MedFit - Geo Market Master | Owner Company, Geo Market Name, Show only Active, Add, Search, Reset | C8934383 | Initial screen verified |
| System Configuration > Company > Job Site | /Company/CompanyJobSite.aspx / MedFit - Job Site Master | Owner Company, Job Site Name, Show only Active, Add, Search, Reset | C8934393 | Initial screen verified |
| System Configuration > Company > Job Title | /Company/CompanyJobTitle.aspx / MedFit - Job Title Master | Owner Company, Job Title, Show only Active, Add, Search, Reset | C8934398 | Initial screen verified |
| System Configuration > Company > Employee Category | /Company/CompanyEmpCategory.aspx / MedFit - Employee Category Master | Owner Company, Employee Category Name, Add, Search, Reset | C8934403 | Partial, documented control evidence pending |
| System Configuration > Exam > Medical Center | /SystemConfiguration/SearchMedicalCenter.aspx / MedFit - Search Medical Center | Medical Center name, Type, Show only Active, Country, Add, Search, Reset | C8934526 | Initial screen verified |
| System Configuration > Exam > Global MET | /SystemConfiguration/SearchGlobalMET.aspx / MedFit - System Configuration > Search Global MET | Global MET Name, Show only Active, Add, Search, Reset | C8934582 | Initial screen verified |
| System Configuration > Exam > Fitness Conclusion | /SystemConfiguration/FitnessConclusionMaster.aspx / MedFit - Fitness Conclusion Master | Fitness Conclusion Name, Show only Active, Add, Search, Reset | C8934586 | Initial screen verified |
| System Configuration > Company > Logo Information | /Company/CompanyLogoInformation.aspx / MedFit - Logo Information | Get Details, Reset | C8934363 | Partial, documented control evidence pending |
| System Configuration > Company > Additional Information | /Company/CompanyAdditionalInformation.aspx / MedFit - Additional Information Master | Owner Company, Field Name, Show only Active, Add, Search, Reset | C8934413 | Initial screen verified |
| System Configuration > Company > Criteria | /Company/CompanyMETCriteria.aspx / MedFit - MET Criteria Description | Get Details | C8934420 | Partial, documented control evidence pending |
| System Configuration > Company > MET | /Company/SearchMET.aspx / MedFit - Search MET | Company, Global MET, MET name, Show only Active, Add, Search, Reset | C8934425 | Initial screen verified |
| System Configuration > Company > Fitness Conclusion | /Company/FitnessConclusion.aspx / MedFit - Fitness Conclusion Master | Owner Company, User Role, Fitness Conclusion Name, Show only Active, Add, Search, Reset | C8934459 | Initial screen verified |
| System Configuration > Company > Static Content | /Company/CompanyStaticContent.aspx / MedFit - Static Content Master | Search, Reset | C8934490 | Partial, documented control evidence pending |
| System Configuration > Company > Medical History | /Company/CompanyMedicalHistory.aspx / MedFit - Company Medical History Master | Get Details | C8934501 | Partial, documented control evidence pending |
| System Configuration > Company > Dashboard > Widget Configuration | /SystemConfiguration/SearchWidgetConfiguration.aspx / MedFit - Search Widget Configuration | Owner Company, User Preference, Widget Type, Health Check Item Name, Widget Category, Widget Name, Add, Search, Reset | C8934504 | Initial screen verified |
| System Configuration > Company > Dashboard > Notifications | /Company/CompanyNotification.aspx / MedFit - Company Notification |  | C8934509 | Partial, documented control evidence pending |
| System Configuration > Company > Dashboard > Landing Page | /Company/DashboardConfiguration.aspx / MedFit - Company LandingPage |  | C8934512 | Partial, documented control evidence pending |
| System Configuration > Company > Mobile > Static Content | /Company/CompanyMobileStaticContent.aspx / MedFit - Mobile Static Content Master | Owner Company, Search, Reset | C8934515 | Initial screen verified |
| System Configuration > Company > Mobile > Menu Item | /Company/CompanyMenuItem.aspx / MedFit - Company Menu Item | Owner Company, Default Menu Name, Alternate Menu Name, Add, Search, Reset | C8934519 | Initial screen verified |
| System Configuration > Medical Data > Medical History | /SystemConfiguration/MedicalHistoryItem.aspx / MedFit - Medical History Master | Medical History Item Name, Show Only Active, Add, Search, Reset | C8935136 | Initial screen verified |
| System Configuration > Medical Data > Vaccination | /SystemConfiguration/VaccinationMaster.aspx / MedFit - Vaccination Master | Vaccination Name, Show only Active, Add, Search, Reset | C8935141 | Initial screen verified |
| System Configuration > Medical Data > BP/BMI/Cholestrol | /SystemConfiguration/BloodPressureMaster.aspx / MedFit - Blood Pressure Master | Master Type, Category Name, Add, Search, Reset | C8934592 | Initial screen verified |
| System Configuration > Medical Data > Health Check Item | /SystemConfiguration/SearchHealthCheckItem.aspx / MedFit - System Configuration > Search Health Check Item | Health Check Item Name, Show only Active, Add, Search, Reset | C8934596 | Initial screen verified |
| System Configuration > Medical Data > Vaccination Reminder | /SystemConfiguration/VaccinationReminder.aspx / MedFit - Vaccination Reminder Master | Reminder Type, Show only Active, Add, Search, Reset | C8935205 | Initial screen verified |

## Current entry, form and popup observations

| Entry | Route and title | Observed labels or public content | Outstanding work |
| --- | --- | --- | --- |
| Login | GoCare Read Write - MedTrack Login | Blank Submit disabled: true; visible registration links: 0; visible guide links: 0 | Submission, role matrix and operation outcomes pending |
| Forgot Password / Unlock | Forgot Password Username | 1 text field(s), 2 submit control(s) | Submission, role matrix and operation outcomes pending |
| Create New Employee | /Employee/CreateEmployee.aspx MedFit - Create Employee | Submit, Cancel | Submission, role matrix and operation outcomes pending |
| Create Team Member | /UserManagement/CreateUser.aspx MedFit - Create Team Member | Cancel | Submission, role matrix and operation outcomes pending |
| Change Password | /UserManagement/ChangePassword.aspx | Cancel returned to /Employee/SearchEmployee.aspx with untouched form | Edited-form or builder workflow pending |
| Export Data | ? | TimeoutError navigation or control unavailable | Edited-form or builder workflow pending |
| Send Welcome Email | /Employee/SendWelcomeEmail.aspx | Send Welcome E-mail Address, Company, Get Details, Send-Email, Reset | See C8935245 in the case review |
| Drop Box > Upload | /Employee/DropBoxUploadWithMenu.aspx | Destination did not open | See C8935271 in the case review |
| Maintenance > Maintenance | /SystemConfiguration/Maintenance.aspx | Maintenance | See C8934305 in the case review |
| Maintenance > Error Logs | ? | Navigation-only destination not established | See C8935284 in the case review |
| Maintenance > Unlock User | ? | Navigation-only destination not established | See C8935291 in the case review |
| Need Help? | /HelpFile/DefaultHelp/ISOSAdmin/OnlineHelp.htm | Requested Resource Not Found in Help content frame | See case disposition |
| Help | /HelpFile/DefaultHelp/ISOSAdmin/OnlineHelp.htm | Requested Resource Not Found in Help content frame | See case disposition |
| Contact Us | /StaticContent/public-contact-us.html Contact-Us | 1 public tel/mail link(s) | See case disposition |
| Privacy Policy | /privacy-centre Privacy at International SOS | Privacy heading and policy-related content visible | See case disposition |

### Observed submenu links

| Hovered main menu | Additional visible link | Observed href target |
| --- | --- | --- |
| Import Data | Import | /Import/ViewImportActivities.aspx |
| Import Data | Export Quest | /Import/ExportQuest.aspx |
| System Configuration | Code Description | /SystemConfiguration/CodeMaster.aspx |
| System Configuration | Encryption Utility | /Miscellaneous/EncryptionUtility.aspx |
| COVID-19 Vaccination | Search COVID-19 Vaccination | /Vaccination/SearchEmployeeVaccination.aspx |

## Live section hierarchy and case IDs

Use the section paths and IDs below to find existing cases. See the [automation readiness matrix](gocare-automation-readiness-matrix.md) for case-level mappings and the [missing coverage report](gocare-missing-test-coverage.md) for open gap candidates.

| Section path | Section ID | Cases or scope |
| --- | --- | --- |
| Search employee | 434894 | C8927857, C8927858, C15239052, C15239309, C15289380 |
| Search employee / Select for Merge | 435404 | 0 |
| Search employee / Create Exam | 434893 | C8927855, C8927856 |
| Search employee / View Exam | 435322 | C8934317 |
| Search employee / New column added in search screen result page for all the employees | 467405 | C9404218 |
| Search employee / Header Links | 978872 | C8934304, C15239053, C15239310 |
| Search employee / My Details | 978873 | C15239321, C15239322, C15239323, C15239324, C15239580, C15239581, C15239582 |
| Search employee / Footer Links | 978874 | C15239318, C15239319, C15239320 |
| Search employee / Change Password | 978890 | C15239311, C15239312, C15239313, C15239314, C15239315, C15239316, C15239317 |
| Employee | 434896 | 0 |
| Employee / Create New Employee | 434892 | C8927852, C8927853, C15239583, C15289362 |
| Employee / Employee Details | 435401 | 0 |
| Employee / Employee Details / Dashboard | 434951 | C8928138 |
| Employee / Employee Details / Dependents | 434950 | C8928137 |
| Employee / Employee Details / Administration Tab | 434795 | C8932676 |
| Employee / Employee Details / Administration Tab / Delete Employee | 435222 | C8927385, C8932729 |
| Employee / Employee Details / Administration Tab / Change status of an Exam | 435223 | C8927386, C8932730 |
| Employee / Employee Details / Administration Tab / Create dummy exam | 435224 | C8927485, C8932731 |
| Employee / Employee Details / Administration Tab / Delete an Exam | 435225 | C8927533, C8932732 |
| Employee / Employee Details / Administration Tab / Delete recommendation letter | 435226 | C8927534, C8932733, C8932734 |
| Employee / Employee Details / Administration Tab / Delete Reminders | 435227 | C8928112, C8932739, C8932744 |
| Employee / Employee Details / View Employee | 434949 | C8928136 |
| Employee / Employee Details / View Employee / Create Exam | 435405 | C8934318, C8934319 |
| Employee / Employee Details / View Employee / View Exam | 435406 | C8934320, C8934321 |
| Employee / Employee Details / View Employee / Send LTA | 435407 | C8934322 |
| Employee / Employee Details / View Employee / Quit | 435408 | C8934323 |
| Employee / Employee Details / View Employee / Resend Notification | 435409 | C8934324, C8934325 |
| Employee / Employee Details / View Employee / Edit Information | 435410 | C8934326 |
| Employee / Create Exam | 467402 | 0 |
| Employee / Employee status change based on exam status | 467403 | 0 |
| Employee / SLB employee cannot create exam | 467404 | C9404214 |
| Search Team Members | 434899 | C8928070, C8928071 |
| Create Team Member | 434900 | C8928068, C8928069, C15289363 |
| Medical Exam Expirations | 434901 | C8934355, C8934356, C15290180 |
| Import Data | 434902 | 0 |
| Import Data / Import File | 434903 | C8933401, C8933402, C15289382 |
| Import Data / Export Quest | 434904 | C8933403 |
| Reminders and Documents | 434905 | 0 |
| Reminders and Documents / Generate | 434906 | C8933408, C8933409 |
| Reminders and Documents / Download | 434907 | C8933427 |
| Search Reviewed Exams | 434908 | C8934300, C8934301, C8934302, C15290212 |
| Export Data | 434909 | 0 |
| Reports | 434910 | Excluded |
| Reports / Generate Master Report | 434911 | Excluded |
| Reports / Activity Reports | 434912 | Excluded |
| Reports / Activity Reports / Medical Exam | 434919 | Excluded |
| Reports / Activity Reports / Medical Exam / Medical Center | 435360 | Excluded |
| Reports / Activity Reports / Medical Exam / Age group | 435361 | Excluded |
| Reports / Activity Reports / Medical Exam / Medical Exam Type (MET) | 435362 | Excluded |
| Reports / Activity Reports / Medical Exam / Gender | 435363 | Excluded |
| Reports / Activity Reports / Medical Exam / Relation | 435364 | Excluded |
| Reports / Activity Reports / Medical History | 434920 | Excluded |
| Reports / Activity Reports / Medical History / Medical History Check | 435365 | Excluded |
| Reports / Activity Reports / Medical History / Medical History ICD | 435366 | Excluded |
| Reports / Activity Reports / Medical History / Allergies | 435367 | Excluded |
| Reports / Activity Reports / Medical History / Regularly Taken Medicines | 435368 | Excluded |
| Reports / Activity Reports / Medical History / Tobacco | 435369 | Excluded |
| Reports / Activity Reports / Medical History / Alcohol | 435370 | Excluded |
| Reports / Activity Reports / Reminders/Notifications | 434921 | Excluded |
| Reports / Activity Reports / Reminders/Notifications / LTA | 435371 | Excluded |
| Reports / Activity Reports / Reminders/Notifications / Reminder1 | 435372 | Excluded |
| Reports / Activity Reports / Reminders/Notifications / Reminder2 | 435373 | Excluded |
| Reports / Activity Reports / Medical Exam Results | 434922 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Vaccinations Taken | 435374 | Excluded |
| Reports / Activity Reports / Medical Exam Results / ECG | 435375 | Excluded |
| Reports / Activity Reports / Medical Exam Results / ECG ICD | 435376 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Blood Pressure | 435377 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Chest X-ray | 435378 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Chest X-ray ICD | 435379 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Different Tests | 435380 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Treadmill | 435381 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Treadmill ICD | 435382 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Mammography | 435383 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Mammography ICD | 435384 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Total Cholesterol | 435385 | Excluded |
| Reports / Activity Reports / Medical Exam Results / HDL Cholesterol | 435386 | Excluded |
| Reports / Activity Reports / Medical Exam Results / LDL Cholesterol | 435387 | Excluded |
| Reports / Activity Reports / Medical Exam Results / BMI | 435388 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Vision | 435389 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Hearing | 435390 | Excluded |
| Reports / Activity Reports / Medical Exam Results / Fitness Conclusion | 435391 | Excluded |
| Reports / Activity Reports / Internal ISOS | 434923 | Excluded |
| Reports / Activity Reports / Internal ISOS / Exams created by | 435392 | Excluded |
| Reports / Activity Reports / Internal ISOS / Data Capture | 435393 | Excluded |
| Reports / Activity Reports / Internal ISOS / Exam Review | 435394 | Excluded |
| Reports / Activity Reports / Internal ISOS / Active Employee in HR Import | 435395 | Excluded |
| Reports / Activity Reports / Internal ISOS / Exam review per MET | 435396 | Excluded |
| Reports / Activity Reports / Internal ISOS / Exam in No Show Status | 435397 | Excluded |
| Reports / Activity Reports / Internal ISOS / Enrollment Statistics | 435398 | Excluded |
| Reports / Activity Reports / Internal ISOS / Mobile Users Audit | 435399 | Excluded |
| Reports / Activity Reports / Internal ISOS / Web Users Audit | 435400 | Excluded |
| System Configuration | 434913 | 0 |
| System Configuration / Company | 434914 | 0 |
| System Configuration / Company / Compnay | 434955 | C8934358, C8934359, C8934360, C8934361, C8934362 |
| System Configuration / Company / Logo Information | 434956 | C8934363, C8934364, C8934365, C8934366 |
| System Configuration / Company / Area | 434957 | C8934372, C8934373, C8934374, C8934375, C8934376 |
| System Configuration / Company / Business Area | 434958 | C8934377, C8934378, C8934379, C8934380, C8934381 |
| System Configuration / Company / Geo Market | 434959 | C8934383, C8934384, C8934385, C8934386, C8934387 |
| System Configuration / Company / Job Site | 434960 | C8934393, C8934394, C8934395, C8934396, C8934397 |
| System Configuration / Company / Job Title | 434961 | C8934398, C8934399, C8934400, C8934401, C8934402 |
| System Configuration / Company / Employee Category | 434962 | C8934403, C8934404, C8934405, C8934406, C8934407 |
| System Configuration / Company / Additional Information | 434963 | C8934413, C8934414, C8934415, C8934416, C8934417 |
| System Configuration / Company / Criteria | 434964 | C8934420, C8934421, C8934422 |
| System Configuration / Company / MET | 434965 | C8934425, C8934426, C8934428, C8934430, C8934436 |
| System Configuration / Company / Fitness Conclusion | 434966 | C8934459, C8934460, C8934461, C8934462, C8934463 |
| System Configuration / Company / Static Content | 434967 | C8934490, C8934491, C8934492, C8934493, C8934494 |
| System Configuration / Company / Medical History | 434968 | C8934501, C8934502, C8934503 |
| System Configuration / Company / Dashboard | 434969 | 0 |
| System Configuration / Company / Dashboard / Widget Configuration | 434971 | C8934504, C8934505, C8934506, C8934507, C8934508 |
| System Configuration / Company / Dashboard / Notification | 434972 | C8934509, C8934510, C8934511 |
| System Configuration / Company / Dashboard / Landing Page | 434973 | C8934512, C8934513, C8934514 |
| System Configuration / Company / Mobile | 434970 | 0 |
| System Configuration / Company / Mobile / Static Content | 434974 | C8934515, C8934516, C8934517, C8934518, C15289415 |
| System Configuration / Company / Mobile / Menu Item | 434975 | C8934519, C8934520, C8934521, C8934522, C8934523, C15289416 |
| System Configuration / Exam | 434915 | 0 |
| System Configuration / Exam / Medical Center | 434976 | C8934526, C8934527, C8934535, C8934552, C8934580, C15290370 |
| System Configuration / Exam / Global MET | 434977 | C8934582, C8934583, C8934584, C8934585 |
| System Configuration / Exam / Fitness Conclusion | 434978 | C8934586, C8934587, C8934588, C8934589 |
| System Configuration / Medical Data | 434916 | 0 |
| System Configuration / Medical Data / BP/BM/Cholestrol | 434979 | C8934592, C8934593, C8934594, C8934595, C15290213 |
| System Configuration / Medical Data / Health Check Item | 434980 | C8934596, C8934597, C8934621, C8934622 |
| System Configuration / Medical Data / Medical History | 434981 | C8935136, C8935137, C8935138, C8935140, C8935150 |
| System Configuration / Medical Data / Vaccination | 434982 | C8935141, C8935142, C8935143, C8935144, C8935148 |
| System Configuration / Medical Data / Vaccination Reminder | 434983 | C8935205, C8935206, C8935207, C8935208, C8935209, C15290214 |
| System Configuration / Code Description | 434917 | C8935210, C8935211, C8935212, C8935213, C8935214 |
| System Configuration / Encryption Utility | 434918 | C8935215, C8935228, C8935237 |
| Certificate of Fitness | 434924 | 0 |
| Send Welcome Email | 434925 | C8935245, C8935246, C8935270, C8935491 |
| Drop Box | 434926 | 0 |
| Drop Box / Download | 434935 | 0 |
| Drop Box / Upload | 434936 | C8935271, C8935272, C8935273, C8935274, C15289364 |
| Maintenance | 434927 | 0 |
| Maintenance / Maintenance | 434931 | C8934305, C8935282, C8935283 |
| Maintenance / Error Logs | 434932 | C8935284, C8935287, C8935288, C8935289, C8935290 |
| Maintenance / Service Management | 434933 | C15289381 |
| Maintenance / Unlock User | 434934 | C8935291, C8934306, C8934307 |
| COVID-19 Vaccination | 434928 | 0 |
| COVID-19 Vaccination / Search COVID-19 Vaccination | 435498 | C8935292, C8935293, C15237380 |
| Login Page | 434952 | C8928019, C8928020, C8928021, C8928022, C8928023, C9031928 |
| Login Page / Forgot Password / Unlock Account | 434953 | C8928025, C8928026, C15289383 |
| Login Page / Register Employee | 434954 | C8928027, C8928028 |
| Login Page / Your Dashboard! | 435235 | C8934315 |
| Login Page / Your Mobile Application! | 435236 | C8934314 |
| Login Page / Intl. SOS DROP BOX - Click here to send your report | 435237 | C8934316 |
| Application User | 435514 | 0 |
| Application User / ISOS Admin | 435515 | C8935483 |
| Application User / ISOS User | 435516 | C8935484 |
| Application User / Chief Recruiter | 435517 | C8935485 |
| Application User / Recruiter | 435518 | C8935486 |
| Application User / ISOS Reviewer | 435519 | C8935487 |
| Application User / Client Reviewer | 435520 | C8935488 |
| Application User / Local Doctor | 435521 | 0 |
| Application User / Partner | 435522 | C8935490 |
| My Profile | 458015 | C9217325 |
| iOS Mobile App Test Cases | 457978 | Excluded |
| iOS Mobile App Test Cases / Login Page | 457979 | Excluded |
| iOS Mobile App Test Cases / Login Page / Register Employee | 457980 | Excluded |
| iOS Mobile App Test Cases / Login Page / Forgot Password? | 460763 | Excluded |
| iOS Mobile App Test Cases / My Information | 458020 | Excluded |
| iOS Mobile App Test Cases / My Vaccinations | 458018 | Excluded |
| iOS Mobile App Test Cases / My Dashboard | 457992 | Excluded |
| iOS Mobile App Test Cases / My Profile | 458014 | Excluded |
| iOS Mobile App Test Cases / My Exam Tracker | 458016 | Excluded |
| iOS Mobile App Test Cases / My Documetns | 458017 | Excluded |
| iOS Mobile App Test Cases / Create My Exam | 458019 | Excluded |
| iOS Mobile App Test Cases / Definitions | 458062 | Excluded |
| iOS Mobile App Test Cases / Logout | 460762 | Excluded |
| Password length | 467385 | C9404079, C9404080, C9404081, C9430419, C9430421, C9430422, C9430423, C9430424 |
| Archival Activity | 467401 | Excluded |
| Archival Activity / Data is moved to the Archives DB when an employee's status has been inactive for 2 years | 467529 | Excluded |
| Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years | 467530 | Excluded |
| Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years / Search employee with active status | 467532 | Excluded |
| Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years / Search employee with active status | 467533 | Excluded |
| ERAMET - Setup new METs and switch between fuller and lighter METs | 470048 | C9428818, C9428819, C9428821, C9428822, C9428823, C9428824, C9428825, C9428826, C9428827 |
| ERAMET - Setup new METs and switch between fuller and lighter METs / Verify N1 and N2 MET Linking to Global METs | 470049 | 0 |
| MD-804 | 470156 | 0 |
| MD-804 / COVID-19 Content Removal | 470157 | C9430379, C9430380, C9430381, C9430382, C9430383, C9430384, C9430385, C9430386, C9430387 |

## Continuation inventory

Live inventory validated for project 73 / Master suite 26097. The current web totals and scope exclusions are stated above.

| Main menu | Visible submenu entry | Observed href target |
| --- | --- | --- |
| Import Data | Import | /Import/ViewImportActivities.aspx |
| Import Data | Export Quest | /Import/ExportQuest.aspx |
| Reminders and Documents | Generate | /MedicalExam/GenerateReminderAndHealthPassport.aspx |
| Reminders and Documents | Download | /MedicalExam/DocumentGenerationQueue.aspx |
| Drop Box | Download | /Employee/DropBoxDownload.aspx |
| Drop Box | Upload | /Employee/DropBoxUploadWithMenu.aspx |
| Maintenance | Maintenance | /SystemConfiguration/Maintenance.aspx |
| Maintenance | Service Management | /SystemConfiguration/ServiceManagement.aspx |
| COVID-19 Vaccination | Search COVID-19 Vaccination | /Vaccination/SearchEmployeeVaccination.aspx |

| Screen | Observed route | Operation evidence |
| --- | --- | --- |
| Logo | /Company/CompanyLogoInformation.aspx | Blank Owner Company validation observed; Reset cleared validation |
| Criteria | /Company/CompanyMETCriteria.aspx | Blank Owner Company validation observed |
| Static Content | /Company/CompanyStaticContent.aspx | Owner Company control verified |
| Drop Box | /Employee/DropBoxUploadWithMenu.aspx | Untouched Cancel returned to /Employee/SearchEmployee.aspx |
| Medical History | /Company/CompanyMedicalHistory.aspx | Owner Company control verified; documented validation unconfirmed |

| Entry form | Route | Untouched Cancel destination |
| --- | --- | --- |
| Create New Employee | /Employee/CreateEmployee.aspx | /Employee/SearchEmployee.aspx |
| Create Team Member | /UserManagement/CreateUser.aspx | /UserManagement/SearchUsers.aspx |
| Upload | /Employee/DropBoxUploadWithMenu.aspx | /Employee/SearchEmployee.aspx |

| New case | Existing TestRail section | Workflow |
| --- | --- | --- |
| C15289362 | 434892 | Verify Cancel returns from Create New Employee to Search Employees |
| C15289363 | 434900 | Verify Cancel returns from Create Team Member to Search Team Members |
| C15289364 | 434936 | Verify Cancel exits the untouched Drop Box upload form |

## Read-only form evidence

| Workflow | Observed menu path | Route | Controls and dependencies |
| --- | --- | --- | --- |
| Employee search | Search Employees | /Employee/SearchEmployee.aspx | Advanced Search / Basic Search switches visibility of Area, Job Site and Geo Market. Search remains available. |
| Create employee | Create New Employee | /Employee/CreateEmployee.aspx | Required marks on Employee Status, Title, First Name, Last Name, Gender, Date of Birth, Company and GIN Number. The page also defines enabled required validators for Primary Email and Relation. |
| Search team members | Search Team Members | /UserManagement/SearchUsers.aspx | User Role, Account Status, last and first names, Username, Employee GIN, Email Address, Company, lock status, Search and Reset. |
| Create team member | Create Team Member | /UserManagement/CreateUser.aspx | User Role is the visible required control in the initial step. Cancel is available. The page defines additional validators for fields that are hidden until the role-dependent form is shown. |
| Medical exam expirations | Medical Exam Expirations | /Employee/MedicalExamExpirations.aspx | Company and Status are marked required. Expiration Period includes Custom period, with a validator for the conditional custom value. Search and Reset are visible. |
| Search reviewed exams | Search Reviewed Exams | /MedicalExam/SearchReviewedExams.aspx | User Role, From Date and To Date are marked required. User ID, Search and Reset are visible. The role list includes ISOS Reviewer and Client Reviewer. |
| Vaccination search | COVID-19 Vaccination > Search COVID-19 Vaccination | /Vaccination/SearchEmployeeVaccination.aspx | First and last names, Status, GIN Number / Applicant ID, Date of Birth, Company, Vaccine Name, Vaccine Brand Name, Assignment Country, Employee Category, City, Area, Search and Reset. |
| Service management | Maintenance > Service Management | /SystemConfiguration/ServiceManagement.aspx | The page opened. Expected service controls were unavailable in the saved session. |

Local First Name entry and clear were confirmed on Create New Employee, Search Team Members and vaccination search with network requests blocked during input. The browser initiated no requests during these checks.

## Web-only continuation observations

| Web workflow | Observed menu path | Route | Finding |
| --- | --- | --- | --- |
| Web Mobile Static Content | System Configuration > Company > Mobile > Static Content | /Company/CompanyMobileStaticContent.aspx | Owner Company, Search and Reset are visible. Search with Owner Company at the blank default displays “The Company is mandatory and cannot be blank.” |
| Web Mobile Menu Item | System Configuration > Company > Mobile > Menu Item | /Company/CompanyMenuItem.aspx | Owner Company, Default Menu Name, Alternate Menu Name, Add, Search and Reset are visible. Search outcomes and changes to configuration need approved data. |
| Import File | Import Data > Import | /Import/ViewImportActivities.aspx | The Import File heading, file picker and Import button are visible. No file selection or import operation was performed. |
| Export Quest | Import Data > Export Quest | /Import/ExportQuest.aspx | The page opens with generation and download controls in the form. No file generation or download was performed. |
| Service Management | Maintenance > Service Management | /SystemConfiguration/ServiceManagement.aspx | The menu opens the page in the same tab with a visible Service Management heading. No service controls were visible in the saved session. |
| Export Data | Export Data | /Export/BuildReport.aspx | The menu target remains /Export/BuildReport.aspx. Both ordinary click and direct navigation timed out. |

## Safe web operation evidence

| Screen | Route | Observed behavior |
| --- | --- | --- |
| Public Login | / | Submit was disabled with empty inputs and stayed disabled with synthetic values in User Name and Password while verification remained blank. |
| Forgot Password / Unlock Account | /UserManagement/ForgotPasswordUserName.aspx | User Name, Go and Back to Log in were visible. Back to Log in returned the untouched form to /Login.aspx. |
| Change Password | /UserManagement/ChangePassword.aspx | Existing Password, New Password, Confirm New Password, two security question selectors with answer fields, Submit and Cancel were visible. |
| Import File | /Import/ViewImportActivities.aspx | The picker takes one local file and declares no browser accept filter. A one-cell synthetic workbook was selected with zero requests. Refresh cleared the selection. |
| Service Management | /SystemConfiguration/ServiceManagement.aspx | The Service Management heading was visible. The saved role exposed no service controls. |
| Generate Reminders and Documents | /MedicalExam/GenerateReminderAndHealthPassport.aspx | Company, From Date, To Date, Search and Reset were visible on the entry form. |
| Export Data | /Export/BuildReport.aspx | Both the ordinary menu activation and direct navigation timed out in the previous web pass. |

## Functional follow-up

Web Mobile Static Content and Menu Item Reset are verified. The Password length group has direct form and validator evidence while policy and server behavior remain open. The six groups selected at the phase start are identified in the workflow completion matrix. [Workflow completion matrix](gocare-workflow-completion-matrix.md) · [Synthetic fixture requirements](gocare-synthetic-test-data-requirements.md) · [Suite quality audit](gocare-testrail-final-quality-audit.md)

## Fixture preparation evidence

- Dashboard > Widget Configuration. A seeded record is unnecessary for the verified no-match Widget Name scenario.
- Company > MET and Exam > Global MET. Shared screen controls were rechecked for the ERAMET fixture plan. The saved role does not establish ERAMET-specific availability.
- Export Data. Menu and direct-route timeout persisted. No standalone Certificate of Fitness link appeared on the saved-role landing.

[Fixture setup proposal](gocare-synthetic-test-data-requirements.md#consolidated-fixture-setup-proposal-for-approval) · [Workflow completion matrix](gocare-workflow-completion-matrix.md)

## UAT fixture preflight

System Configuration > Company > Company opens Search Company. Add opens /Company/CreateCompany.aspx using its dedicated navigation postback. The form exposes Company Name, Owner Company, Access Rights, address and contact fields, exam durations, Association and reminder-related controls. The controlled blank check displayed client validation without making a Submit request. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Create Company form details

The Owner Company selector defaults to Select Company and offers eight existing-company entries. No standalone option is visible. Its required validator accepts the blank placeholder on the client because the selected sentinel 0 differs from its empty initial-value setting. The server-side owner rule and effects of a successful Submit remain unverified. The Access Rights and Local Doctor Association selects have no usable default. Three exam/data-capture durations and two reminder-day fields are required and start empty. The integer client validators allow -10000 through 100000. The observed bounds do not establish business-safe values. HR notification, client reviewer email, latest reminder loop, vaccination reminder and due-date reminder controls are unchecked on the blank form. Active Company is checked. A completed Submit was not exercised, so delivery, queueing and inheritance remain unknown. [Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions) · [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Employee, Team Member, Employee Exams and COVID-19 Vaccination remain in scope. The preferred fixture is an approved existing company with permitted synthetic-only access. The company configuration stays intact. Standalone Company creation remains pending.

## MY COMPANY fixture authorization and Employee Create validation

The Employee Create form exposes MY COMPANY as option 129. No additional company configuration or clinical records were opened.

## MY COMPANY employee identifier preflight

Search Employees is available to the current role. An exact GIN and a separate synthetic-name search were exercised only under MY COMPANY.

## MY COMPANY collision and recipient preflight

Search Employees supports a company-scoped check and a separate search without a Company filter. Result handling returned only the collision or no-results outcome.

## Recipient verification and functional validation batch

Medical Exam Expirations now includes a verified client boundary case. Company Search returned the exact approved company with Show only Active checked. Its Edit link opened the existing details form at /Company/CreateCompany.aspx for inspection only.

## Configuration and reviewed-exam validation continuation

Added browser evidence across the in-scope Company, Exam, Medical Data and Web Mobile masters. Invalid lookup names, draft discard, New Reviewed Exams invalid-date validation, and the positive Fit catalog filter are recorded.

## Company catalog filter follow-up

The read-only MY COMPANY filter verified existing active configuration rows for Area, Business Area, Geo Market, Job Site and Job Title, plus the Handled by Intl. SOS Employee Category result.

## Catalog verification and status reconciliation

Current role and approved catalog selections produced additional company MET, global MET, fitness, code and reminder evidence. Static Content exposed Add for MY COMPANY. The expected Subsidiary Company selector was absent.

## Dependency priority and documentation handoff

Medical Center has verified empty-country filtering, Add validation and Cancel. C15290370 covers its distinct opening-hours ordering check. The anonymous login still lacks the two legacy guide controls.

## Disposable accounts and configuration planning

The team-member form accepted six exact scoped QA alias searches and locally rejected the two hyphenated suggestions. Company Fitness Conclusion now has separate verified scope filters for Partner and Fit to work with no restrictions.

## Provisional decisions and final documentation handoff

Generate Reminders and Documents was inspected at /MedicalExam/GenerateReminderAndHealthPassport.aspx. Search is disabled with Company blank and becomes available after MY COMPANY is selected. The MY COMPANY Search for 01-Jan-2099 through 02-Jan-2099 returned 0 for LTA, Reminder 1, Reminder 2, Health Passport, Cover Letter, Label and Fitness Certificate. The response returned Print Reminders and Print Documents without a disabled attribute. No print, generation, download or notification action was attempted. The behavior of invoking the Print controls remains unverified.
