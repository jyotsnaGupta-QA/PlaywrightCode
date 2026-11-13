# TestRail Suite 26097 - Read-only Assessment

Generated: 2026-11-12T09:38:22.019Z

Project ID: 73  
Suite ID: 26097  
TestRail source: https://internationalsos.testrail.net

## Scope and method

- Retrieved cases using TestRail REST API GET requests only. No TestRail records or application data were changed.
- Retrieved 294 cases in two pages (250 + 44) and 177 sections; 93 sections contain cases.
- The repository script `npm run testrail:cases` currently stops at the first page: TestRail returns a page-level `size` of 250, which the script treats as the total. The suite has 294 cases. Do not rely on the current generated cache as a complete suite inventory until pagination is corrected and approved.

## Executive summary

- Suite inventory: **294 cases** in **93 populated sections** (177 sections returned by the API).
- TestRail case types: Functional: 209; System Testing: 83; Sanity Test: 2.
- Priorities: Medium: 292; High: 2.
- Case specification completeness: 278/294 have preconditions; 287/294 have steps; 287/294 have at least one expected result; 0/294 have explicit TestRail test data.
- Exact duplicate title groups: 17 groups covering 35 cases; review before migration, but do not assume duplicates are redundant.
- TestRail AI automation flag: 0 cases are marked true. This is not a reliable indicator of automation outside TestRail.
- Current test specs contain TestRail IDs for **7 of 294 cases**: C8927857, C8927858, C8935292, C8935293, C15237380, C15239052, C15239309.
- C8928070 ("Successfully search a team member") exists in the suite, but its spec is deleted in the current worktree by user choice; it is not counted as active coverage.

### Exact duplicate title groups

These are exact normalized title matches only; compare steps and expected results before consolidating.

- C8934318, C8934320
- C8934319, C8934321
- C8934426, C8934430
- C8934460, C8934587
- C8934501, C8935136, C8935141
- C8934580, C8934585
- C8935137, C8935142
- C8935138, C8935143
- C8935140, C8935144
- C8928019, C9216981
- C8928020, C9216982
- C8928021, C9216983
- C8928022, C9216984
- C8928023, C9216985
- C9217325, C9217324
- C9405408, C9405412
- C9405409, C9405413

## Phase 1 - Framework assessment

### Architecture and existing coverage

- **Runner/config:** Playwright Test with TypeScript; `playwright.config.ts` loads `.env`, sets GoCare `baseURL`, `auth.json` storage state, one worker, one retry, 20-second test timeout, headed Chromium/WebKit projects, HTML/Allure/list reporters, failure screenshots/videos, and first-retry trace.
- **Page objects:** `LoginPage`, `SearchEmployeePage`, `CreateEmployeePage`, and `SearchVaccinationPage`; tests use these for repeated page interaction.
- **Current TestRail-linked specs:** `tests/searchEmployee.spec.ts` covers C8927857, C8927858, C15239052, C15239309; `tests/searchVaccination.spec.ts` covers C8935292, C8935293, C15237380. `tests/CreateEmployee.spec.ts`, login specs, and `tests/api.spec.ts` have no TestRail ID in the test title.
- **Data/utilities:** JSON/CSV readers in `utils/dataProvider.ts`; Faker wrapper in `utils/randomDataGenerator.ts`; employee/login fixtures in `testdata/`.
- **TestRail integration:** `scripts/testrail-cases.js` uses `.env` and GET `/get_cases`; current pagination defect described above means its generated `.testrail-cases.json` contains only the first 250 cases.
- **CI:** `.github/workflows/playwright.yml` runs `npm run test:sanity`, but the workflow currently does not map MedTrack/TestRail credentials from GitHub secrets into the job environment.

### Assessment findings and risks

1. **Credential/session exposure:** `auth.json` is tracked and stores browser session state. `.env` is ignored, but login JSON/CSV fixtures contain username/password fields. Do not upload these values to ChatGPT; expire session state and remove sensitive files from Git/history before external sharing.
2. **Personal data in fixtures:** employee fixture JSON and `CreateEmployee.spec.ts` include email fields/values; the create spec uses fixed data and can persist records. Replace with synthetic unique values only after approval and only in a non-production environment.
3. **TestRail data review:** no case has an explicit `custom_testdata` field (0/294); data is embedded in steps or absent. Automated scan found email-like values in 1 case(s) (IDs: 8927852) and phone-like numeric patterns in 66 case(s). Patterns are indicators only; inspect manually. Name recognition is not reliable, so names still need human review.
4. **Authentication wiring:** `auth.setup.ts` writes `auth.json`, but Playwright projects do not declare a dependency on the setup project. Other specs mix explicit login with configured storage state, so stale-session failures are possible.
5. **Pagination:** fix and validate the TestRail export script before relying on it for full-suite migration; preserve read-only GET behavior.
6. **Test data / maintainability:** some test paths use fixed employee data; `RandomDataUtil` is available but does not yet provide a shared, reproducible fixture strategy. Review unique IDs, cleanup, and test independence before increasing workers.
7. **Selector/flow review:** ASP.NET generated IDs are used throughout. Verify locators against the live DOM; at least one employee fitness-status locator lacks a leading `#` and is currently not exercised.
8. **Tag scripts:** package scripts grep `@master`, `@regression`, and `@datadriven`, while the inspected suite primarily tags tests `@sanity`; confirm intended tag coverage before using those scripts as release gates.
9. `test.config.ts` is a commented legacy placeholder; `tests/test.spec.ts` is empty.

### Proposed migration approach (not implemented)

1. Correct the read-only export pagination and verify all pages/sections before trusting subsequent inventories.
2. Review and sanitize credential/session state and employee PII before any repository or ChatGPT sharing.
3. Use the case inventory below as the source map; preserve TestRail IDs and verify duplicates against steps and expected behavior.
4. Prioritize low-risk UI search/validation cases that have explicit preconditions and expected results; reuse current page objects and verified selectors.
5. Treat account/email, employee create/delete, imports, notifications, password/security, archive/database, and external-system workflows as guarded candidates requiring a dedicated non-production environment, unique data, cleanup, and/or clarification.
6. Mark cases with missing steps/expected results or ambiguous backend dependencies for clarification; do not invent behavior or update TestRail.
7. After your approval, implement a small batch, validate on Chromium, then add browser/CI coverage only when data and environment support it.

### Provisional classification counts

The labels below are keyword-based triage only. Review each original case and its environment dependencies before committing to an automation type.

| Provisional category | Cases |
| --- | ---: |
| Backend/data candidate - clarify access and expected evidence | 4 |
| Manual review - interface or expected result unclear | 6 |
| Needs clarification | 4 |
| UI candidate | 155 |
| UI candidate - clarify missing case details | 9 |
| UI candidate - external notification side effect | 17 |
| UI candidate - state-changing; isolate data and clean up | 99 |

## Populated section counts

| Section | Cases |
| --- | ---: |
| Additional Information | 5 |
| Administration Tab | 1 |
| Area | 5 |
| BP/BM/Cholestrol | 4 |
| Business Area | 5 |
| Change Password | 7 |
| Change status of an Exam | 2 |
| Chief Recruiter | 1 |
| Client Reviewer | 1 |
| Code Description | 5 |
| Compnay | 5 |
| COVID-19 Content Removal | 9 |
| Create dummy exam | 2 |
| Create Exam | 4 |
| Create My Exam | 1 |
| Create New Employee | 3 |
| Create Team Member | 2 |
| Criteria | 3 |
| Dashboard | 1 |
| Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years | 2 |
| Data is moved to the Archives DB when an employee's status has been inactive for 2 years | 2 |
| Definitions | 1 |
| Delete an Exam | 2 |
| Delete Employee | 2 |
| Delete recommendation letter | 3 |
| Delete Reminders | 3 |
| Dependents | 1 |
| Download | 1 |
| Edit Information | 1 |
| Employee Category | 5 |
| Encryption Utility | 3 |
| ERAMET - Setup new METs and switch between fuller and lighter METs | 9 |
| Error Logs | 5 |
| Export Quest | 1 |
| Fitness Conclusion | 9 |
| Footer Links | 3 |
| Forgot Password / Unlock Account | 2 |
| Forgot Password? | 1 |
| Generate | 2 |
| Generate Master Report | 2 |
| Geo Market | 5 |
| Global MET | 4 |
| Header Links | 3 |
| Health Check Item | 4 |
| Import File | 2 |
| Intl. SOS DROP BOX - Click here to send your report | 1 |
| ISOS Admin | 1 |
| ISOS Reviewer | 1 |
| ISOS User | 1 |
| Job Site | 5 |
| Job Title | 5 |
| Landing Page | 3 |
| Login Page | 11 |
| Logo Information | 4 |
| Logout | 1 |
| Maintenance | 3 |
| Medical Center | 5 |
| Medical Exam Expirations | 2 |
| Medical History | 8 |
| Menu Item | 5 |
| MET | 5 |
| My Dashboard | 1 |
| My Details | 7 |
| My Documetns | 1 |
| My Exam Tracker | 1 |
| My Information | 1 |
| My Profile | 2 |
| My Vaccinations | 1 |
| New column added in search screen result page for all the employees | 1 |
| Notification | 3 |
| Partner | 1 |
| Password length | 8 |
| Quit | 1 |
| Recruiter | 1 |
| Register Employee | 3 |
| Resend Notification | 2 |
| Search COVID-19 Vaccination | 3 |
| Search employee | 4 |
| Search Reviewed Exams | 3 |
| Search Team Members | 2 |
| Send LTA | 1 |
| Send Welcome Email | 4 |
| SLB employee cannot create exam | 1 |
| Static Content | 9 |
| Unlock User | 3 |
| Upload | 4 |
| Vaccination | 5 |
| Vaccination Reminder | 5 |
| View Employee | 1 |
| View Exam | 3 |
| Widget Configuration | 5 |
| Your Dashboard! | 1 |
| Your Mobile Application! | 1 |

## Case-by-case inventory

Text is copied from TestRail for assessment only. Email-like strings, phone-like numbers, long numeric values, and explicit credential assignments are redacted; this automated scrub cannot reliably identify people by name. Review the report before sharing externally. ?Preliminary classification? is a triage hint, not an approved automation decision.

### C8927385 - Successfully Delete an employee

- Section: Delete Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927385](https://internationalsos.testrail.net/index.php?/cases/view/8927385)

**Preconditions**
> 1. Employee record should exist in the system
> 2. User is on Administration tab

**Steps and expected results**

1. **Step:**
> user select delete employee from select an operation drop down field
   **Expected:**
> User is able to select data from drop-down

2. **Step:**
> user select check box for Confirm employee deletion
   **Expected:**
> User is able to select checkbox
> ![](index.php?/attachments/get/8a44a[PHONE/NUMBER REDACTED]f-a583-c71a1079cb2f)
> _Not provided._

3. **Step:**
> User click on Submit button
   **Expected:**
> User navigated to new window to validate credential
> ![](index.php?/attachments/get/e3358995-ded5-[NUMERIC TEST DATA REDACTED]-b1fe-2b84022281d4)
> _Not provided._

4. **Step:**
> User enter username, password click on submit button
   **Expected:**
> User see a success message for delete an employee
> ![](index.php?/attachments/get/fdca106b-fed9-452f-9a36-fc68023a984f)
> _Not provided._

### C8927386 - Change status of an Exam if exam exist

- Section: Change status of an Exam
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927386](https://internationalsos.testrail.net/index.php?/cases/view/8927386)

**Preconditions**
> 1. Exam should be created for employee
> 2. User is on Administration tab

**Steps and expected results**

1. **Step:**
> Select change status of Exam from drop-down
   **Expected:**
> User is able to select data from drop-down

2. **Step:**
> Select exam date from drop-down
   **Expected:**
> User is able to select data from drop-down and can see fields Current exam status, Change to exam status and Send for client review checkbox

3. **Step:**
> Select change to exam status drop-down and click on submit button
   **Expected:**
> User is able to select data from drop-down and navigated to validate credential window where user enters credential details and click on submit button and can see status changed for an exam
> ![](index.php?/attachments/get/006152fe-13c1-4dda-[NUMERIC TEST DATA REDACTED]-c3b48ecc4c72)  ![](index.php?/attachments/get/8f870946-a36d-4c5f-baea-55c470531c22)
> _Not provided._

4. **Step:**
> Select change to exam status drop-down, select checkbox for Send for client review and click on submit button
   **Expected:**
> User is able to select data from drop-down and navigated to validate credential window where user enters credential details and click on submit button and can see status changed for an exam
> ![](index.php?/attachments/get/5e71f92c-83e3-4e8b-ac45-b62d24d4ea9e)
> _Not provided._

### C8927485 - Create dummy exam if exam present for employee

- Section: Create dummy exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927485](https://internationalsos.testrail.net/index.php?/cases/view/8927485)

**Preconditions**
> 1. Employee and exam record should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> Select create dummy Exam from select an operation drop-down
   **Expected:**
> User is able to select data from drop-down

2. **Step:**
> Select MET from drop-down
   **Expected:**
> User is able to select data from drop-down

3. **Step:**
> Select date of exam and enter comments
   **Expected:**
> User is able to select data from drop-down and enter data in text field

4. **Step:**
> Click on Submit button
   **Expected:**
> User get to see success message

### C8927533 - Delete an Exam if exam present

- Section: Delete an Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927533](https://internationalsos.testrail.net/index.php?/cases/view/8927533)

**Preconditions**
> **Exam should exist for an employee**

**Steps and expected results**

1. **Step:**
> Select delete an Exam from select an operation drop-down
   **Expected:**
> User is able to select data from drop-down

2. **Step:**
> Select exam from select an exam drop-down
   **Expected:**
> User is able to select data from drop-down
> ![](index.php?/attachments/get/bca1944e-353f-4f95-b776-f837b84d840a)
> _Not provided._

3. **Step:**
> Tick the checkbox for Confirm exam deletion
   **Expected:**
> User is able to select checkbox
> ![](index.php?/attachments/get/86be2605-532b-439a-815c-6109f020771d)
> _Not provided._

4. **Step:**
> Click on Submit button
   **Expected:**
> User navigated to new window to validate credential and click on submit button and get to see an exam deletion success message
> ![](index.php?/attachments/get/9de3b169-cae[PHONE/NUMBER REDACTED]db7f6d853b)  ![](index.php?/attachments/get/29ee[PHONE/NUMBER REDACTED]e7-8a07-5a8d09a2ab0b)
> _Not provided._

### C8927534 - Delete recommendation letter if exam present

- Section: Delete recommendation letter
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927534](https://internationalsos.testrail.net/index.php?/cases/view/8927534)

**Preconditions**
> Employee record should present with an exam

**Steps and expected results**

1. **Step:**
> User select delete recommendation letter from select an operation drop-down
   **Expected:**
> User can see "Select an exam" drop-down (If there is exam exist)

2. **Step:**
> User select data from "Select an exam" drop-down
   **Expected:**
> User can see checkbox for Delete Recommendation Letter and Advice/Recommendations and Comments from Doctor
> ![](index.php?/attachments/get/1db3abcd-b43e-[NUMERIC TEST DATA REDACTED]-be3c-3a2b65775818)
> _Not provided._

3. **Step:**
> User select checkbox for Delete Recommendation Letter and Advice/Recommendations and Comments from Doctor and click on submit button
   **Expected:**
> User navigated to new window
> ![](index.php?/attachments/get/cabc8afc-7c53-46ab-af8d-ffc3ec6bdaf0)
> _Not provided._

4. **Step:**
> User enter credential details to  validate credential and click on submit button
   **Expected:**
> User can see success message

### C8927852 - Verify Employee Record Is Created Successfully

- Section: Create New Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927852](https://internationalsos.testrail.net/index.php?/cases/view/8927852)

**Preconditions**
> - User is logged into the application.
> - User has permission to create employee records.
> - Valid employee information is available.

**Steps and expected results**

1. **Step:**
> - Navigate to the Create New Employee page.
> - Enter Employee Status = Active.
> Enter Last Name [VALUE REDACTED]
> Enter First Name [VALUE REDACTED]
> Enter Gender = Male
> Enter Company = Eramet
> Enter Date of Birth = 15-Jan-[NUMERIC TEST DATA REDACTED]
> Enter GIN Number = [LONG NUMBER REDACTED]
> Enter Primary Email Address = [EMAIL REDACTED]
> - Click Submit.
   **Expected:**
> - Create New Employee page is displayed successfully.
> - Details are accepted successfully.
> - Employee creation request is processed successfully.

### C8927853 - Verify Employee Record Creation Fails with Invalid Data

- Section: Create New Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927853](https://internationalsos.testrail.net/index.php?/cases/view/8927853)

**Preconditions**
> - User is logged into the application.
> - User has permission to create employee records.

**Steps and expected results**

1. **Step:**
> - Navigate to the Create New Employee page.
> - Enter invalid employee information like Employee Status = Active.
> Enter Last Name [VALUE REDACTED]
> Enter First Name [VALUE REDACTED]
> Enter Gender = Male.
> Enter Company = International SOS.
> Enter Date of Birth = 15-Jan-[NUMERIC TEST DATA REDACTED].
> Enter GIN Number [VALUE REDACTED]%&[NUMERIC TEST DATA REDACTED].
> Enter Primary Email Address [VALUE REDACTED]#mail.com
> - Click Submit.
   **Expected:**
> - Create New Employee page is displayed successfully.
> - Information is accepted for validation.
> - System validation is triggered and employee record submission is prevented.

### C8927855 - Successfully create an exam

- Section: Create Exam
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927855](https://internationalsos.testrail.net/index.php?/cases/view/8927855)

**Preconditions**
> Employee record should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> User search an employee
   **Expected:**
> Search result gets displayed
> _Not provided._
> _Not provided._

2. **Step:**
> Select radio button for the employee
   **Expected:**
> Radio button gets selected
> _Not provided._
> _Not provided._

3. **Step:**
> Click on Create Exam Button
   **Expected:**
> User navigated to Create New Exam page
> _Not provided._
> _Not provided._

4. **Step:**
> User do authorization and enter mandatory details
   **Expected:**
> User able to enter mandatory details
> _Not provided._
> _Not provided._

5. **Step:**
> Click on submit button with invalid data or skipped mandatory fields
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._

6. **Step:**
> Click on submit button with valid data
   **Expected:**
> Navigated to Medical Exam Information page
> _Not provided._
> _Not provided._

7. **Step:**
> Enter mandatory details in tabs:
> _Not provided._
> _Not provided._
> - Physician's Report
> - Lab Analysis
> - Attached Medical Reports
> - Fitness Conclusion
> - Document History tabs
> _Not provided._
   **Expected:**
> Able to enter required details
> _Not provided._
> _Not provided._

8. **Step:**
> In fitness conclusion tab, enter details in Physician Review and click on submit button
   **Expected:**
> User can see new section for Intl. SOS Review

9. **Step:**
> Enter details in Intl. SOS Review section
   **Expected:**
> User able to enter details
> _Not provided._
> _Not provided._

10. **Step:**
> Click on submit button with invalid data or skipped mandatory fields
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._

11. **Step:**
> Click on submit button with valid data
   **Expected:**
> User can see a success message 'Thank you. The comments have been saved successfully.' with 'Ready to Print' status. Also user will receive an email in provided mail ID
> _Not provided._
> _Not provided._

### C8927856 - Medical exam creation gets failed for the employee

- Section: Create Exam
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8927856](https://internationalsos.testrail.net/index.php?/cases/view/8927856)

**Preconditions**
> Employee record should exist in the system

**Steps and expected results**

1. **Step:**
> User search an employee
   **Expected:**
> Search result gets displayed

2. **Step:**
> Select radio button for the employee
   **Expected:**
> Radio button gets selected

3. **Step:**
> Click on Create Exam Button
   **Expected:**
> User navigated to Create New Exam page

4. **Step:**
> User do authorized and enter required details except one mandatory field
   **Expected:**
> User able to enter details

5. **Step:**
> User click on submit button
   **Expected:**
> User can see alert message

### C8927857 - Verify User Can Successfully Search an Employee Using Valid Search Criteria

- Section: Search employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchEmployee.spec.ts` - C8927857: Search employee using valid criteria @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C8927857](https://internationalsos.testrail.net/index.php?/cases/view/8927857)

**Preconditions**
> - User is on Search Employees page
> - Employee record should exist in the system

**Steps and expected results**

1. **Step:**
> 1. Navigate to the Search Employees page.
> 2. Enter First Name [VALUE REDACTED] and GIN Number [VALUE REDACTED]
> 3. Click the Search button.
> 4. Review the search results.
   **Expected:**
> 1. Search Employees page is displayed successfully.
> 2. First Name and GIN Number are accepted.
> 3. Search is executed successfully.
> 4. Employee record matching Last Name [VALUE REDACTED] and GIN Number [VALUE REDACTED] is displayed in the search results.

### C8927858 - Verify System Displays No Results for Invalid Employee Search Criteria

- Section: Search employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchEmployee.spec.ts` - C8927858: Search employee with invalid criteria @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C8927858](https://internationalsos.testrail.net/index.php?/cases/view/8927858)

**Preconditions**
> - - User is logged into the application.
> - User is on the Search Employees page.

**Steps and expected results**

1. **Step:**
> - Navigate to Search Employees page.
> - Enter an invalid Employee First Name [VALUE REDACTED] and Last Name [VALUE REDACTED]
> - Click Search.
> - Review the search results section.
   **Expected:**
> - Search Employees page is displayed successfully.
> - Search criteria are accepted.
> - Search is executed successfully.
> - No matching employee records are displayed.

### C8928019 - Verify if a user will be able to login with a valid username and valid password.

- Section: Login Page
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928019](https://internationalsos.testrail.net/index.php?/cases/view/8928019)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User enter valid username, password, verification code and click on submit button
   **Expected:**
> User navigated to search employee page
> _Not provided._
> _Not provided._
> _Not provided._

### C8928020 - Verify if a user cannot login with a valid username and an invalid password.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928020](https://internationalsos.testrail.net/index.php?/cases/view/8928020)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> user enter valid username, invalid password, verification code and click on submit button
   **Expected:**
> User can see an error message 'Your user name or password is incorrect. Please try again.'
> _Not provided._
> _Not provided._
> _Not provided._

### C8928021 - Verify the login page for both, when the field is blank and Submit button is clicked.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928021](https://internationalsos.testrail.net/index.php?/cases/view/8928021)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> user skipped username and password, enter verification code and click on submit button
   **Expected:**
> user able to click on submit button without entering username and password field

### C8928022 - Verify the ‘Forgot Password’ functionality.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928022](https://internationalsos.testrail.net/index.php?/cases/view/8928022)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> User click on forgot / unlock password
   **Expected:**
> User is able to click on forgot / unlock password link and navigated to 'Forgot Password / Unlock Account' page
> _Not provided._
> _Not provided._
> _Not provided._

### C8928023 - Verify the messages for invalid login.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928023](https://internationalsos.testrail.net/index.php?/cases/view/8928023)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> user enter invalid credential and verification code
   **Expected:**
> user is able to enter invalid credential and verification code

2. **Step:**
> User click on submit button
   **Expected:**
> User can see a message 'Your user name or password is incorrect. Please try again.'
> _Not provided._
> ![](index.php?/attachments/get/c229c424-42f4-494a-8c27-bd96ce4ecedc)
> _Not provided._

### C8928025 - Verify forgot password link navigated to different page

- Section: Forgot Password / Unlock Account
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928025](https://internationalsos.testrail.net/index.php?/cases/view/8928025)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> User click on forgot / unlock password link
   **Expected:**
> user is navigated to Forgot Password / Unlock Account page

2. **Step:**
> user enter username in text field and click on Go button
   **Expected:**
> user asked to enter some security related questions

3. **Step:**
> user entered required details and click on submit button
   **Expected:**
> user will see an alert message

### C8928026 - Verify user able to change or reset password

- Section: Forgot Password / Unlock Account
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928026](https://internationalsos.testrail.net/index.php?/cases/view/8928026)

**Preconditions**
> Forgot Password / Unlock Account page

**Steps and expected results**

1. **Step:**
> user enter username in text field and click on Go button
   **Expected:**
> user asked to enter some security related questions

2. **Step:**
> user entered required details and click on submit button
   **Expected:**
> user will see an alert message

### C8928027 - Employee or Pre-employee

- Section: Register Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928027](https://internationalsos.testrail.net/index.php?/cases/view/8928027)

**Preconditions**
> user should be on Employee Registration page

**Steps and expected results**

1. **Step:**
> user enter GIN No. or Applicant ID for Pre-employee, Date of Birth and International SOS ID
   **Expected:**
> user is able to enter mandatory details
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/a83cf1fc-[NUMERIC TEST DATA REDACTED]-49d3-[NUMERIC TEST DATA REDACTED]-6c9075922e94)

2. **Step:**
> user click on get details button (With correct details)
   **Expected:**
> user navigated to Employee Registration page where user enter required details
> _Not provided._
> ![](index.php?/attachments/get/1780c076-fb0b-470d-9da5-e77b2aeb9a65)
> _Not provided._

3. **Step:**
> user click on get details button (With incorrect details)
   **Expected:**
> User can see error message 'There is no employee present in the system with the given criteria.'
> _Not provided._
> ![](index.php?/attachments/get/b1c99ead-78bd-41ae-a34e-b860501690b3)
> _Not provided._

4. **Step:**
> User click on Cancel button
   **Expected:**
> User navigated to login page
> _Not provided._
> ![](index.php?/attachments/get/7ff7f247-d939-[NUMERIC TEST DATA REDACTED]-bed0-072b4b8227f2)
> _Not provided._

5. **Step:**
> User click on Reset button
   **Expected:**
> Entered details will be cleared
> _Not provided._
> ![](index.php?/attachments/get/6951b176-a4af-[NUMERIC TEST DATA REDACTED]-ad8b-715cf7f62b44)
> _Not provided._

6. **Step:**
> User click on Register button (Validation check unsuccessful)
   **Expected:**
> User will get validation message if:
> 1. User id not matched with requirement
> ![](index.php?/attachments/get/8f66c28a-[NUMERIC TEST DATA REDACTED]-4a64-a3fb-e0bfb73127aa)
> _Not provided._
> 2. Password not matched with requirement
> ![](index.php?/attachments/get/07f379dc-7e1c-423f-bc1b-127802e5ccb8)
> _Not provided._
> 3. If left mandatory questions
> ![](index.php?/attachments/get/30794ae5-91fa-46ad-94c3-fe929b6a507e)

7. **Step:**
> User click on Register button (Validation check successful)
   **Expected:**
> User can see a success message and automatically navigated to login page
> ![](index.php?/attachments/get/acea75ab-e0d4-43a4-a03f-ee9caa369c6d) ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-eae9-459d-9ee4-f803412ca904)
> _Not provided._

### C8928028 - Doctor/Medical Center

- Section: Register Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928028](https://internationalsos.testrail.net/index.php?/cases/view/8928028)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User click on Doctor/Medical Center link on the login page
> _Not provided._
> ![](index.php?/attachments/get/6e0eda05-42c0-[NUMERIC TEST DATA REDACTED]-88b1-4edf9683ec6b)
> _Not provided._
   **Expected:**
> User navigated to Doctor/Medical Center Registration page
> _Not provided._
> ![](index.php?/attachments/get/65609be7-efc5-[NUMERIC TEST DATA REDACTED]-80b2-7432b1328668)
> _Not provided._

2. **Step:**
> User click on Cancel button
   **Expected:**
> User navigated to login page
> _Not provided._
> ![](index.php?/attachments/get/07d7693b-[NUMERIC TEST DATA REDACTED]-40f5-9a62-5f8a6aa3294c)
> _Not provided._

3. **Step:**
> User click on Reset button
   **Expected:**
> Entered details will be cleared
> _Not provided._
> ![](index.php?/attachments/get/392571cd-e18d-4fa6-a024-5243fd183665)
> _Not provided._
> _Not provided._

4. **Step:**
> User click on Register button (Validation check unsuccessful)
   **Expected:**
> User will get validation message if:
> _Not provided._
> 1. Mandatory fields skipped
> _Not provided._
> ![](index.php?/attachments/get/9084c1d6-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-a12e-39ff3cd5e2fd)
> _Not provided._
> 2. Entered incorrect data
> _Not provided._
> ![](index.php?/attachments/get/9f9b3b40-42de-[NUMERIC TEST DATA REDACTED]-9eac-eae1a7f33671)
> _Not provided._
> 3. Password mismatch
> _Not provided._
> ![](index.php?/attachments/get/e5bb58a3-3fad-4ad4-adff-4a539465c576)
> _Not provided._
> 4. Password validation
> ![](index.php?/attachments/get/e7efe0fb-44cc-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-f52e54c53d04) ![](index.php?/attachments/get/71092f8b-f07c-405f-acd3-ff0687e10376)
> _Not provided._
> _Not provided._

5. **Step:**
> User click on Register button (Validation check successful)
   **Expected:**
> User can see a success message and automatically navigated to login page
> _Not provided._
> ![](index.php?/attachments/get/f6d0ee90-f415-4f45-a04b-3daba82b8d30) ![](index.php?/attachments/get/03db7b59-c182-45db-887b-eef6b1a7d3eb)
> _Not provided._

### C8928068 - Successfully creating team member

- Section: Create Team Member
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928068](https://internationalsos.testrail.net/index.php?/cases/view/8928068)

**Preconditions**
> Successful login into the application
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on left panel 'Create Team Member' link
> _Not provided._
   **Expected:**
> User navigated to Create Team Member page

2. **Step:**
> select user role from drop-down
   **Expected:**
> Successfully selected user role from drop-down

3. **Step:**
> User enter mandatory details in Personal Information, Contact Information, Account Information sections
   **Expected:**
> User able to enter required details

4. **Step:**
> User click on submit button
   **Expected:**
> Team member creation Success message will get displayed

### C8928069 - Team member creation gets failed

- Section: Create Team Member
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928069](https://internationalsos.testrail.net/index.php?/cases/view/8928069)

**Preconditions**
> Successful login into the application

**Steps and expected results**

1. **Step:**
> User click on left panel 'Create Team Member' link
   **Expected:**
> User navigated to Create Team Member page

2. **Step:**
> select user role from drop-down
   **Expected:**
> _Not provided._
> Successfully selected user role from drop-down

3. **Step:**
> User missed to enter mandatory details in one of the section from Personal Information, Contact Information, Account Information sections
   **Expected:**
> _Not provided._
> User able to enter required details except one mandatory field
> ![](index.php?/attachments/get/385186b0-e652-4a83-9f8a-748152fc816b)
> _Not provided._
> _Not provided._

4. **Step:**
> User enter special character or numeric value in text field
   **Expected:**
> Able to enter details but will get alert message during save records
> ![](index.php?/attachments/get/75fb457d-f521-[NUMERIC TEST DATA REDACTED]-a954-d799217e818b)
> _Not provided._

5. **Step:**
> User click on submit button
   **Expected:**
> User can see alert message saying 'Please enter a valid

### C8928070 - Successfully search a team member

- Section: Search Team Members
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928070](https://internationalsos.testrail.net/index.php?/cases/view/8928070)

**Preconditions**
> User is on Search Employees page after successful login
> _Not provided._

**Steps and expected results**

1. **Step:**
> Enter details in any search fields like User role, Account Status, Last Name, First Name, Username,  Employee GIN, DOB, E-mail Address, Company and Locked
   **Expected:**
> Able to enter data

2. **Step:**
> Click on Search button
   **Expected:**
> Search results gets displayed

### C8928071 - Unable to search team member

- Section: Search Team Members
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928071](https://internationalsos.testrail.net/index.php?/cases/view/8928071)

**Preconditions**
> User is on Search Employees page after successful login

**Steps and expected results**

1. **Step:**
> Click on Search button without enter data on any field (All fields should be blank) and click on search button
   **Expected:**
> Alert message should display to the user - Please select at least one search criteria before searching.
> ![](index.php?/attachments/get/21acfe52-90ae-4fc6-a3a1-14db2d0726b3)
> _Not provided._

2. **Step:**
> Enter special character or numbers in fields and click on search button
   **Expected:**
> Alert message should display to the user - Please enter a valid
> ![](index.php?/attachments/get/b01e80e2-[NUMERIC TEST DATA REDACTED]-4dfa-b90b-6a3b977e02f0)
> _Not provided._

3. **Step:**
> User enter team member details (not exist in the system)
   **Expected:**
> User will get to see an alert message "There are no users available for the search performed."
> ![](index.php?/attachments/get/6fe[PHONE/NUMBER REDACTED]b-9be3-8c2f45aa3fc5)
> _Not provided._

### C8928112 - Delete Reminders if there is exam and reminders both are present

- Section: Delete Reminders
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928112](https://internationalsos.testrail.net/index.php?/cases/view/8928112)

**Preconditions**
> Employee with exam exist in the system

**Steps and expected results**

1. **Step:**
> Select 'Delete Reminders' from "Select an operation" drop-down
   **Expected:**
> Existing exam and Upcoming exam with radio button will get displayed
> ![](index.php?/attachments/get/5a0a9aa9-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-b132-62a0e1e6d78d)

2. **Step:**
> User select any radio button for Existing exam and Upcoming exam (If reminder present)
   **Expected:**
> User get to see drop down list "Exam Reminder Type"

3. **Step:**
> User select data from "Exam Reminder Type"
   **Expected:**
> User can see table 'Sent Reminder Details' with check box and buttons submit, cancel
> ![](index.php?/attachments/get/efcb10eb-3ebe-4e1b-86ff-fdabb4ded5f7)
> _Not provided._

4. **Step:**
> User select checkbox for reminder and click on submit button
   **Expected:**
> User get to see a popup window with Ok button for reminder confirmation
> ![](index.php?/attachments/get/b0cbbb52-99f0-4b58-[NUMERIC TEST DATA REDACTED]-c97da73c614c)
> _Not provided._
> _Not provided._

5. **Step:**
> User click on OK button on the popup window for delete reminder
   **Expected:**
> User navigated to new window to validate credential
> ![](index.php?/attachments/get/98b[PHONE/NUMBER REDACTED]d66-813d-07ce64c0dea3)
> _Not provided._

6. **Step:**
> User enter credential and click on submit button
   **Expected:**
> Reminder gets deleted successfully

### C8928136 - Verify view employee page

- Section: View Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8928136](https://internationalsos.testrail.net/index.php?/cases/view/8928136)

**Preconditions**
> 1. User is on Search Employees page
> _Not provided._

**Steps and expected results**

1. **Step:**
> Enter details in Last Name, First Name fields and click on search button
   **Expected:**
> Search results gets displayed based on user input
> ![](index.php?/attachments/get/8a1f530b-6d37-4c50-ac3d-7ff6fe60162d)
> _Not provided._

2. **Step:**
> User click on Search results Last Name, First Name fields link
   **Expected:**
> User navigated to Employee Details page where user can see detail like:
> 1. Sections: Contact Information, Next MET Details, Other Information
> 2. Links: Edit Information
> Buttons: Resend Notification, Create Exam, View Exam, LTA, Quit
> Tabs: Dependents, Administration, Dashboard
> _Not provided._
> ![](index.php?/attachments/get/e981375f-[NUMERIC TEST DATA REDACTED]-4fa9-999b-710e61aecfc8)
> _Not provided._
> _Not provided._

### C8928137 - Verify Dependents page

- Section: Dependents
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8928137](https://internationalsos.testrail.net/index.php?/cases/view/8928137)

**Preconditions**
> User is on Search Employees page after successful login and Employee record should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> Enter details in Last Name, First Name fields and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search results gets displayed based on user input
> ![](index.php?/attachments/get/8a1f530b-6d37-4c50-ac3d-7ff6fe60162d)
> _Not provided._

2. **Step:**
> User click on Search results Last Name, First Name fields link
   **Expected:**
> User navigated to Employee Details page

3. **Step:**
> User click on Dependents tab (If dependent exist with the record)
   **Expected:**
> User is on Dependents tab where user can see Dependents table. And table has column details and radio button with each record:
> Columns are: Last Name, First Name, GIN Number, DOB, Last Exam Date, Relation
> Buttons: Add New Dependents, Create Exam, View Exam, Quit
> ![](index.php?/attachments/get/0eb0efad-[NUMERIC TEST DATA REDACTED]-46ef-9ddc-e064cc7fdf6b)
> _Not provided._

4. **Step:**
> User click on Dependents tab (If dependent does not exist with the record)
   **Expected:**
> User can see alert message in dependent section "There is no dependent available for this employee."
> ![](index.php?/attachments/get/fd86c897-33be-4d1b-85a2-b5e2b5be8bb7)
> _Not provided._

### C8928138 - Verify dashboard page

- Section: Dashboard
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8928138](https://internationalsos.testrail.net/index.php?/cases/view/8928138)

**Preconditions**
> User is on Search Employees page after successful login and Employee record should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> Enter details in Last Name, First Name fields and click on search button
   **Expected:**
> Search results gets displayed based on user input

2. **Step:**
> User click on Search results Last Name, First Name fields link
   **Expected:**
> User navigated to Employee Details page

3. **Step:**
> User click on dashboard tab
   **Expected:**
> User navigated to new tab and can see welcome text as 'Welcome to your health dashboard !'. Sections like My profile, My notifications, Final fitness status, Overall health status and Standard health indicators

### C8932676 - Verify administration tab

- Section: Administration Tab
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8932676](https://internationalsos.testrail.net/index.php?/cases/view/8932676)

**Preconditions**
> Employee record should exist in the system
> User is on Administration tab

**Steps and expected results**

1. **Step:**
> When user is on Administration tab
   **Expected:**
> User can see Administration label, Select an operation drop-down and Quit button on the screen
> ![](index.php?/attachments/get/a43deb16-9b4c-46da-8b31-37d2872afc6b)
> _Not provided._

### C8932729 - Failed to delete an employee

- Section: Delete Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932729](https://internationalsos.testrail.net/index.php?/cases/view/8932729)

**Preconditions**
> Employee record should not exist in the system
> User is on Administration tab

**Steps and expected results**

1. **Step:**
> user select delete employee from select an operation drop down field
> _Not provided._
   **Expected:**
> User is able to select data from drop-down

2. **Step:**
> user select check box for Confirm employee deletion
   **Expected:**
> User is able to select checkbox
> ![](index.php?/attachments/get/3a165552-0a7a-[NUMERIC TEST DATA REDACTED]-b994-33484c8a4e26)
> _Not provided._

3. **Step:**
> User click on Quit button
   **Expected:**
> User navigated to search employee page

### C8932730 - Change status of an Exam if there is no exam

- Section: Change status of an Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932730](https://internationalsos.testrail.net/index.php?/cases/view/8932730)

**Preconditions**
> No exam created for employee
> User is on Administration tab

**Steps and expected results**

1. **Step:**
> Select change status of Exam from drop-down
   **Expected:**
> User can see alert message 'No exams found for the selected employee' in Change Medical Exam Status section
> ![](index.php?/attachments/get/a40615a5-bcce-4c10-9f4a-d586c5da677f)
> _Not provided._

### C8932731 - Create dummy exam if there is no exam present for employee

- Section: Create dummy exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932731](https://internationalsos.testrail.net/index.php?/cases/view/8932731)

**Preconditions**
> Employee record should present in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> Select create dummy Exam from select an operation drop-down
   **Expected:**
> User can see a message 'There are no MET's.' within Create Dummy Exam section
> ![](index.php?/attachments/get/db2e0ef3-[NUMERIC TEST DATA REDACTED]-4f92-bb50-9f8ae46baf74)
> _Not provided._

### C8932732 - Delete an exam if there is no exam present

- Section: Delete an Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932732](https://internationalsos.testrail.net/index.php?/cases/view/8932732)

**Preconditions**
> There is no exam present for an employee

**Steps and expected results**

1. **Step:**
> Select delete an Exam from select an operation drop-down
   **Expected:**
> user can see a message 'No exams found for the selected employee' within Delete Medical Exam section
> ![](index.php?/attachments/get/873b1e03-52ac-4a20-b856-4840ebf89403)
> _Not provided._

### C8932733 - Delete recommendation letter if there is no exam

- Section: Delete recommendation letter
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Needs clarification
- TestRail case: [Open C8932733](https://internationalsos.testrail.net/index.php?/cases/view/8932733)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C8932734 - Delete recommendation letter if exam present but no recommendation letter present

- Section: Delete recommendation letter
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932734](https://internationalsos.testrail.net/index.php?/cases/view/8932734)

**Preconditions**
> Employee record with exam should be present
> _Not provided._

**Steps and expected results**

1. **Step:**
> User select delete recommendation letter from select an operation drop-down
   **Expected:**
> User can see "Select an exam" drop-down
> ![](index.php?/attachments/get/a0f00dee-539f-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-cc3b3211aab2)
> _Not provided._

2. **Step:**
> User select data from "Select an exam" drop-down
   **Expected:**
> User can see a message 'There is no recommendation letter and comment for medical exam selected'
> ![](index.php?/attachments/get/e41ec[PHONE/NUMBER REDACTED]f-c1fc97b348ed)
> _Not provided._

### C8932739 - Delete reminders If there is no exam present for Existing exam or Upcoming exam

- Section: Delete Reminders
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932739](https://internationalsos.testrail.net/index.php?/cases/view/8932739)

**Preconditions**
> Employee with exam should present in the system

**Steps and expected results**

1. **Step:**
> Select 'Delete Reminders' from "Select an operation" drop-down
   **Expected:**
> User can see two radio button within Delete reminders for medical exam section
> 1. Existing Exams
> 2. Upcoming Exams
> ![](index.php?/attachments/get/342faebf-73c3-4bc3-9b29-8347d1c18e15)
> _Not provided._

2. **Step:**
> User select radio button for Existing Exams
   **Expected:**
> User can see a message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
> ![](index.php?/attachments/get/276698a1-d16d-4de5-8fb7-d9fc2736f397)
> _Not provided._

3. **Step:**
> User select radio button for Upcoming Exams
   **Expected:**
> User can see a message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
> ![](index.php?/attachments/get/5e3fc35c-[NUMERIC TEST DATA REDACTED]-46c0-b2fa-b0915228c959)
> _Not provided._

### C8932744 - Delete reminders If there is exam present but no reminder for Existing or Upcoming exam

- Section: Delete Reminders
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8932744](https://internationalsos.testrail.net/index.php?/cases/view/8932744)

**Preconditions**
> Employee with exam should present in the system

**Steps and expected results**

1. **Step:**
> Select 'Delete Reminders' from "Select an operation" drop-down
   **Expected:**
> User can see two radio button within Delete reminders for medical exam section
> _Not provided._
> Existing Exams
> Upcoming Exams
> ![](index.php?/attachments/get/9ea18d4d-4f05-4fc1-bf0a-d143d319c8e5)
> _Not provided._

2. **Step:**
> User select radio button for Existing Exams
   **Expected:**
> User can see a drop-down 'Select an exam'
> ![](index.php?/attachments/get/c50c200a-f254-4bdb-[NUMERIC TEST DATA REDACTED]-b8e6dec2a36e)
> _Not provided._

3. **Step:**
> User select date from 'Select an exam' drop-down
   **Expected:**
> User can see message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
> ![](index.php?/attachments/get/db328a2c-e7de-[NUMERIC TEST DATA REDACTED]-826f-ecfd2eae7003)
> _Not provided._

### C8933401 - User successfully import file

- Section: Import File
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8933401](https://internationalsos.testrail.net/index.php?/cases/view/8933401)

**Preconditions**
> User successfully login into application

**Steps and expected results**

1. **Step:**
> User click on submenu Import under Import Data menu
   **Expected:**
> 1. User navigated to Import File page and user can see a title 'Select a file to import', a button 'Choose File' and Import button.
> 2. Also user can see a table with multiple uploaded files with radio button with each records
> 3. Buttons 'Resolve Discrepancies', 'Discard import'
> _Not provided._
> ![](index.php?/attachments/get/f01a8f83-debe-[NUMERIC TEST DATA REDACTED]-b855-190e9ca36128)
> _Not provided._

2. **Step:**
> User click on Choose File button
   **Expected:**
> A popup window gets opened to select file from local machine. User select required file and click on Open button
> _Not provided._
> ![](index.php?/attachments/get/bcfe7842-7f4d-4bf3-b6b9-96c7502127ae)
> _Not provided._

3. **Step:**
> User click on Import button
   **Expected:**
> File imported successfully and user can see a success message ''

### C8933402 - User has failed to import file

- Section: Import File
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8933402](https://internationalsos.testrail.net/index.php?/cases/view/8933402)

**Preconditions**
> User successfully login into application
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on submenu Import under Import Data menu
   **Expected:**
> 1. User navigated to Import File page and user can see a title 'Select a file to import', a button 'Choose File' and Import button.
> 2. Also user can see a table with multiple uploaded files with radio button with each records
> 3. Buttons 'Resolve Discrepancies', 'Discard import'
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/fd4f6e1c-89e5-49b9-ba59-5bd90cbd8d69)
> _Not provided._

2. **Step:**
> User click on Choose File button (Files with other format)
   **Expected:**
> A popup window gets opened to select file from local machine. User select required file and click on Open button
> _Not provided._
> ![](index.php?/attachments/get/fcc45973-c37a-4f60-98d7-2ca248fc9a57)
> _Not provided._

3. **Step:**
> User click on Import button
   **Expected:**
> The import filename SearchReviewedExams_5_31_2022 (1).xlsx is not in the expected format
> _Not provided._
> ![](index.php?/attachments/get/63a956eb-d888-4afa-[NUMERIC TEST DATA REDACTED]-63b9a4d1409c)
> _Not provided._
> _Not provided._

### C8933403 - User successfully download file

- Section: Export Quest
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8933403](https://internationalsos.testrail.net/index.php?/cases/view/8933403)

**Preconditions**
> User successfully login into application
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on submenu Export Quest under Import Data menu
   **Expected:**
> User navigated to Export Quest - Schlumberger Import Confirmation page and user can see Generate new Confirmation File button and Download button
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Generate new Confirmation File button
   **Expected:**
> User can see a message 'SOS_EMP.CSV has been generated successfully and uploaded to FTP Server'
> _Not provided._
> ![](index.php?/attachments/get/c4360dfc-f951-4a4a-[NUMERIC TEST DATA REDACTED]-88a40814fd10)
> _Not provided._

3. **Step:**
> User click on Download button
   **Expected:**
> User can se downloaded file
> _Not provided._
> ![](index.php?/attachments/get/d36befc0-cb7c-43b4-8a8a-e6639c748e41)
> _Not provided._

### C8933408 - User successfully Generate Reminders and Documents

- Section: Generate
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8933408](https://internationalsos.testrail.net/index.php?/cases/view/8933408)

**Preconditions**
> User successfully login into application
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on submenu Generate under Reminders and Documents menu
   **Expected:**
> User navigated to Generate Reminders and Documents page and user can see drop-down for Company as enable and disable for Assignment Country, Area, Business Area, Job Site, Nationality, Geo Market, Category, Health Passport, Label, Cover Letter, Fitness Certificate, From Date, To Date
> _Not provided._
> ![](index.php?/attachments/get/a455e2b5-1ad2-4f26-8f20-d9695453e771)
> _Not provided._

2. **Step:**
> User select data from company drop-down
   **Expected:**
> All disabled drop-down fields gets enabled
> _Not provided._
> ![](index.php?/attachments/get/bd57fec0-670e-40f8-96ca-78b101c08c47)
> _Not provided._

3. **Step:**
> User select data from drop-down and click on search button
   **Expected:**
> Reminders and Documents section gets displayed
> 1. Reminders Section:
> LTA  (0)
> Reminder 1  (0)
> Reminder 2  (0)
> _Not provided._
> 2. Documents Section:
> Health Passport(0)
> Cover Letter(0)
> Label(0)
> Fitness Certificate(0)
> _Not provided._
> 3. Print Reminders Buttons
> 4. Print Documents buttons
> _Not provided._
> ![](index.php?/attachments/get/68a738c8-eb76-496c-a760-9bd3f96a2a76)
> _Not provided._

### C8933409 - User failed to Generate Reminders and Documents

- Section: Generate
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Needs clarification
- TestRail case: [Open C8933409](https://internationalsos.testrail.net/index.php?/cases/view/8933409)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C8933427 - User successfully able to download document

- Section: Download
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8933427](https://internationalsos.testrail.net/index.php?/cases/view/8933427)

**Preconditions**
> User successfully login into application
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on submenu Download under Reminders and Documents menu
   **Expected:**
> User navigated to Document Generation Queue Page and can see table with columns: Document Name, Generated Date, Generated By, Downloaded By, Downloaded Date, Status. And Can see Download Button and Error Log Button
> _Not provided._
> ![](index.php?/attachments/get/d194f7fe-9bc2-[NUMERIC TEST DATA REDACTED]-b642-9ccc23d941f1)
> _Not provided._

2. **Step:**
> User click on Download button
   **Expected:**
> _Not provided._

3. **Step:**
> User click on Error Log button
   **Expected:**
> User can see a message at the bottom of the page
> _Not provided._
> ![](index.php?/attachments/get/6126abbc-4ce2-[NUMERIC TEST DATA REDACTED]-b5fa-b0fe577a62ec)
> _Not provided._

### C8934300 - User successfully search a reviewed exam

- Section: Search Reviewed Exams
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934300](https://internationalsos.testrail.net/index.php?/cases/view/8934300)

**Preconditions**
> Reviewed Exam for the employee should exist in the system
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> 1. User click on Search Reviewed Exams link on the left panel
   **Expected:**
> User navigated to Search Reviewed Exams page. And user can see User Role as enabled, User ID as disabled, From Date, To Date fields as enabled and Search, Reset buttons
> _Not provided._
> ![](index.php?/attachments/get/bf977985-4fbf-43a9-b2eb-5e56c6c122b0)
> _Not provided._

2. **Step:**
> User select User role from drop-down
   **Expected:**
> User ID field gets enabled
> _Not provided._
> ![](index.php?/attachments/get/388ff611-363f-44f6-b30b-e6c8aedf2b15) ![](index.php?/attachments/get/112ab39c-ddb9-44c3-835f-24ccfab94728)
> _Not provided._

3. **Step:**
> User enter details in fields and click on search button
   **Expected:**
> Search results gets displayed and user can see a table.
> 1. Table has columns: Last Name, First Name, GIN Number, Date of Exam, Date of Review, Company, Last MET Taken along with radio button with each record
> 2. Export and View Exam button
> 3. Previous Page \\| Next Page link
> _Not provided._
> ![](index.php?/attachments/get/9a0deb60-3e97-47d7-b29b-ae72b01c2d09)
> _Not provided._

4. **Step:**
> User select radio button from search result and click on View exam button
   **Expected:**
> User navigated to Medical Exam Information page where user can review details
> _Not provided._
> ![](index.php?/attachments/get/9416898b-134f-4a25-b054-79783e1baf39)
> _Not provided._

### C8934301 - Validation on Search Reviewed Exams page

- Section: Search Reviewed Exams
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934301](https://internationalsos.testrail.net/index.php?/cases/view/8934301)

**Preconditions**
> 1. Reviewed Exam for the employee should exist in the system
> 2. User is on Search Reviewed Exams page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User skip to select any fields from User Role, User ID , From Date and To Date
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/50b584be-8fb3-[NUMERIC TEST DATA REDACTED]-b3b9-98912dee8592)  ![](index.php?/attachments/get/2c7af578-e57e-[NUMERIC TEST DATA REDACTED]-afbf-fd02c0d1b559) ![](index.php?/attachments/get/b1297aee-59f6-44a6-[NUMERIC TEST DATA REDACTED]-8fd2eb7fbf37)
> _Not provided._

### C8934302 - No review exam exist

- Section: Search Reviewed Exams
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934302](https://internationalsos.testrail.net/index.php?/cases/view/8934302)

**Preconditions**
> 1. Reviewed Exam for the employee should not exist in the system
> 2. User is on Search Reviewed Exams page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User select data from drop down and click on search button
   **Expected:**
> User can see a message 'There are no exams Reviewed by the user between the given date range'
> _Not provided._
> ![](index.php?/attachments/get/aad9652c-e14b-4bd3-820b-465dc42beb73)
> _Not provided._

### C8934303 - User successfully able to generate report

- Section: Generate Master Report
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934303](https://internationalsos.testrail.net/index.php?/cases/view/8934303)

**Preconditions**
> Exam for the employee should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on subsection 'Generate Master Report' under Reports link
   **Expected:**
> User navigated to Select Reports you wish to merge page
> _Not provided._
> ![](index.php?/attachments/get/5ecf7ef[PHONE/NUMBER REDACTED]-a42cd19ec497)
> _Not provided._

2. **Step:**
> User tick on checkbox and click on Generate button
   **Expected:**
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/b9e247c0-ea2c-442b-9fe5-cb6f8740f53a)
> _Not provided._

### C8934304 - Verify Need Help Link Navigation

- Section: Header Links
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934304](https://internationalsos.testrail.net/index.php?/cases/view/8934304)

**Preconditions**
> Employee record should exist in the system

**Steps and expected results**

1. **Step:**
> Click the Need Help? link displayed in the
   **Expected:**
> Need Help page/window opens successfully and relevant help information is displayed.

### C8934305 - Verify maintenance page

- Section: Maintenance
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934305](https://internationalsos.testrail.net/index.php?/cases/view/8934305)

**Preconditions**
> Exam of the employee should exist in the system

**Steps and expected results**

1. **Step:**
> User click on maintenance sub-section under maintenance section
   **Expected:**
> User navigated to Maintenance page where user can see Select an operation drop-down list
> _Not provided._
> ![](index.php?/attachments/get/d6dd51dd-b984-45e1-baef-e675b1ab0d48)
> _Not provided._

2. **Step:**
> Options in Select an operation drop-down
   **Expected:**
> And user can see four options under drop-down
> _Not provided._
> 1. Message
> 2. Page
> 3. Start/Stop Email Service
> 4. Delete Email Queue
> _Not provided._
> ![](index.php?/attachments/get/a033e929-c4c7-4edc-b394-bf95f454e145)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934306 - Successfully unlock user

- Section: Unlock User
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934306](https://internationalsos.testrail.net/index.php?/cases/view/8934306)

**Preconditions**
> User should exist in the system

**Steps and expected results**

1. **Step:**
> User click on sub-section 'Unlock User' under Maintenance section
   **Expected:**
> User navigated to Application Maintenance page where user can see 'User' text field and 'Unlock' button
> _Not provided._
> ![](index.php?/attachments/get/06be3f3f-[NUMERIC TEST DATA REDACTED]-4d9a-afcb-37d2b097b5fb)
> _Not provided._

2. **Step:**
> User enter user details in text field and click on unlock button
   **Expected:**
> User can see a message 'User TempAdmin unlocked successfully!'
> _Not provided._
> ![](index.php?/attachments/get/092f5a90-08bc-448a-[NUMERIC TEST DATA REDACTED]-10b86cb2e0eb)
> _Not provided._

### C8934307 - Failed to unlock user

- Section: Unlock User
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934307](https://internationalsos.testrail.net/index.php?/cases/view/8934307)

**Preconditions**
> User should not exist in the system or incorrect user details

**Steps and expected results**

1. **Step:**
> User click on sub-section 'Unlock User' under Maintenance section
   **Expected:**
> User navigated to Application Maintenance page where user can see 'User' text field and 'Unlock' button
> _Not provided._
> ![](index.php?/attachments/get/3a6791c0-8e22-43f8-8e3d-0e830d9193e4)
> _Not provided._

2. **Step:**
> User enter user details in text field and click on unlock button
   **Expected:**
> User can see a message 'The username or password entered is invalid.'
> _Not provided._
> ![](index.php?/attachments/get/b71c241d-9e16-48e9-[NUMERIC TEST DATA REDACTED]-9e50b8791699)
> _Not provided._

### C8934314 - User able to see mobile application page

- Section: Your Mobile Application!
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934314](https://internationalsos.testrail.net/index.php?/cases/view/8934314)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User click on 'MobileIconYour Mobile Application!' link
> _Not provided._
> ![](index.php?/attachments/get/798522a4-20e1-4aad-951d-b1d2eef28303)
> _Not provided._
   **Expected:**
> User navigated to 'Quick_Guide_Mobile_App.pdf' page
> _Not provided._
> ![](index.php?/attachments/get/cbaa2043-b588-[NUMERIC TEST DATA REDACTED]-a366-1171d54b4aab)
> _Not provided._

### C8934315 - User able to see dashboard page

- Section: Your Dashboard!
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934315](https://internationalsos.testrail.net/index.php?/cases/view/8934315)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User click on 'Your Dashboard!' link
> _Not provided._
> ![](index.php?/attachments/get/fd478a5d-b211-[NUMERIC TEST DATA REDACTED]-a2e0-31e267ea8e6b)
> _Not provided._
   **Expected:**
> User navigated to 'Quick_Guide_Dashboard.pdf' page
> _Not provided._
> ![](index.php?/attachments/get/3853beda-4cc0-4a9e-8cf4-eaff201875db)
> _Not provided._
> _Not provided._

### C8934316 - User navigated to drop box page

- Section: Intl. SOS DROP BOX - Click here to send your report
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934316](https://internationalsos.testrail.net/index.php?/cases/view/8934316)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User click on 'Intl. SOS DROP BOX - Click here to send your report' link
> _Not provided._
> ![](index.php?/attachments/get/5a7a[PHONE/NUMBER REDACTED]bad-fee2c02fb0b2)
> _Not provided._
   **Expected:**
> User navigated to DropboxLogin.aspx
> _Not provided._
> ![](index.php?/attachments/get/a89d26c8-4f1c-49ff-96f9-bc893cab6f6c)
> _Not provided._
> Where user can see
> 1. fields -  User Name, Password text fields
> 2. Buttons - Submit and Cancel
> 3. Checkbox for 'Login with Corporate Account'
> 4. A logo 'Welcome to the International SOS Drop Box!'
> 5. A link 'Forgot Password?' and 'About SSL Certificates'
> _Not provided._
> _Not provided._

2. **Step:**
> User entered details in DropboxLogin.aspx (With invalid details)
   **Expected:**
> User can see a error message 'Your user name or password is incorrect. Please try again.'
> _Not provided._
> ![](index.php?/attachments/get/b199618e-74e9-4d8f-b3bf-e25d53ff1ac3)
> _Not provided._

3. **Step:**
> User entered details in DropboxLogin.aspx (With valid details)
   **Expected:**
> User navigated to 'Drop Box - Download Medical Reports' page
> _Not provided._
> ![](index.php?/attachments/get/226b6afb-78f7-4ce2-[NUMERIC TEST DATA REDACTED]-38bcfff67947)
> _Not provided._

### C8934317 - User successfully able to view exam

- Section: View Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934317](https://internationalsos.testrail.net/index.php?/cases/view/8934317)

**Preconditions**
> 1. User is on search employee page
> 2. Search result should be visible to user

**Steps and expected results**

1. **Step:**
> User select radio button from search result and click on View Exam button
> _Not provided._
> ![](index.php?/attachments/get/b0c48dfd-63fd-454a-a76d-b03ac9bfa035)
> _Not provided._
   **Expected:**
> User navigated to 'Medical Exam Information' page
> _Not provided._
> ![](index.php?/attachments/get/f69f2dd0-[NUMERIC TEST DATA REDACTED]-4fe1-[NUMERIC TEST DATA REDACTED]-9f2b09f860f8)
> _Not provided._

2. **Step:**
> User can see data in 'Medical Exam Information' page
   **Expected:**
> User can see details like:
> 1. Tabs: Medical Exam, Medical History, Vaccinations and Tracking
> 2. Drop-down for 'View Previous Exams'
> 3. 'Employee Information' section
> 4. Buttons: Print Health Passport, Print Questionnaire, Print Medical Compliance Certificate
> 5. Tabs: Medical Exam Details, Physician's Report, Lab Analysis, Attached Medical Reports, Fitness Conclusion and Document History
> 6. Buttons: Create Exam, Cancel
> _Not provided._
> ![](index.php?/attachments/get/96fca6b8-[NUMERIC TEST DATA REDACTED]-409c-954c-3d2049fe2cf7)
> _Not provided._

3. **Step:**
> User click on Medical History tab
   **Expected:**
> User navigated to Medical History page
> _Not provided._
> ![](index.php?/attachments/get/e8c8da1b-f2e1-487b-aec2-1822bf315d00)
> _Not provided._

4. **Step:**
> User click on Vaccination History tab
   **Expected:**
> User navigated to Vaccination History page
> _Not provided._
> ![](index.php?/attachments/get/5a592a81-0ebd-[NUMERIC TEST DATA REDACTED]-b322-0c9a29882dc2)
> _Not provided._

5. **Step:**
> User click on Tracking tab
   **Expected:**
> User navigated to Medical Exam Information page
> _Not provided._
> ![](index.php?/attachments/get/711347c6-8d31-467a-b670-c717dd16c9bf)
> _Not provided._

6. **Step:**
> User click on 'Print Health Passport' button
   **Expected:**
> User navigated to Print Health Passport page

7. **Step:**
> User click on Quit button
   **Expected:**
> User navigated to Employee Details page
> _Not provided._
> ![](index.php?/attachments/get/ab51d0ff-97f4-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-ec16e44a029f)
> _Not provided._

8. **Step:**
> User click on 'Print Questionnaire' button
   **Expected:**
> User navigated to Print Questionnaire page

9. **Step:**
> User click on 'Print Medical Compliance Certificate' button
   **Expected:**
> User navigated to Print Medical Compliance Certificate page

### C8934318 - If exam doesn't exist for the employee

- Section: Create Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934318](https://internationalsos.testrail.net/index.php?/cases/view/8934318)

**Preconditions**
> 1. User in on Employee Details page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Create Exam button
> _Not provided._
> ![](index.php?/attachments/get/c70babbc-97ef-[NUMERIC TEST DATA REDACTED]-bf3e-c8612e31f440)
> _Not provided._
   **Expected:**
> User navigated to 'Create New Exam' page
> _Not provided._
> ![](index.php?/attachments/get/b4caee3a-caba-4aec-adb0-d2310f010e2b)
> _Not provided._

### C8934319 - If exam exist for the employee

- Section: Create Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934319](https://internationalsos.testrail.net/index.php?/cases/view/8934319)

**Preconditions**
> User in on Employee Details page

**Steps and expected results**

1. **Step:**
> User click on Create Exam button
   **Expected:**
> User can see a error message 'You cannot create this exam. Another exam is currently being processed.'
> ![](index.php?/attachments/get/6a99c62d-a933-450b-82a2-cd0ac9590bc7)
> _Not provided._

### C8934320 - If exam doesn't exist for the employee

- Section: View Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934320](https://internationalsos.testrail.net/index.php?/cases/view/8934320)

**Preconditions**
> User in on Employee Details page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on View Exam button
   **Expected:**
> User navigated to 'Medical Exam' tab and can see message 'There are no medical exams found for this employee.' Also User can see buttons: Create Exam, Cancel
> _Not provided._
> ![](index.php?/attachments/get/5b38f7f3-f345-455b-a51c-a7363dd9545a)
> _Not provided._

### C8934321 - If exam exist for the employee

- Section: View Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934321](https://internationalsos.testrail.net/index.php?/cases/view/8934321)

**Preconditions**
> User in on Employee Details page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on View Exam button
> _Not provided._
> ![](index.php?/attachments/get/123fbc99-56eb-[NUMERIC TEST DATA REDACTED]-8dc4-b5371764dffd)
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical Exam Information page
> _Not provided._
> ![](index.php?/attachments/get/370a0e58-9fb7-4c37-[NUMERIC TEST DATA REDACTED]-a4cbb21ac9c7)
> _Not provided._

### C8934322 - User click on 'Send LTA' button

- Section: Send LTA
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934322](https://internationalsos.testrail.net/index.php?/cases/view/8934322)

**Preconditions**
> User is on Employee Details page

**Steps and expected results**

1. **Step:**
> User click on 'Send LTA' button
   **Expected:**
> User should see success message 'The e-mail request has been added to the queue. It will be sent in few minutes' and get an email
> _Not provided._
> ![](index.php?/attachments/get/02fb6f72-be10-4d14-a93c-6702c191ef77) ![](index.php?/attachments/get/62bfa2c2-[NUMERIC TEST DATA REDACTED]-437d-aad5-79cf2b9760d8)
> _Not provided._

### C8934323 - User click on 'Quit' button

- Section: Quit
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934323](https://internationalsos.testrail.net/index.php?/cases/view/8934323)

**Preconditions**
> User is on Employee Details page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on 'Quit' button
> _Not provided._
> ![](index.php?/attachments/get/6ec0e429-557f-[NUMERIC TEST DATA REDACTED]-8aba-eb70d71ca2d3)
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search employees page
> _Not provided._
> ![](index.php?/attachments/get/4f43e6d1-3c44-435a-a2e7-1702fc9d6234)
> _Not provided._

### C8934324 - If record has any previous notification

- Section: Resend Notification
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8934324](https://internationalsos.testrail.net/index.php?/cases/view/8934324)

**Preconditions**
> User is on Employee Details page

**Steps and expected results**

1. **Step:**
> User click on 'Resend Notification' button
> _Not provided._
> ![](index.php?/attachments/get/cf799e47-6f40-4e4f-a5c2-df61b4430f93)
> _Not provided._
   **Expected:**
> User should see success message 'The e-mail request has been added to the queue. It will be sent in few minutes' and get an email
> _Not provided._
> ![](index.php?/attachments/get/f0fddfea-1e0f-41bb-befb-fc874974b3b5) ![](index.php?/attachments/get/d392ad8c-e[PHONE/NUMBER REDACTED]-f5ef604e7d5f)
> _Not provided._

### C8934325 - If record doesn't have any previous notification

- Section: Resend Notification
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8934325](https://internationalsos.testrail.net/index.php?/cases/view/8934325)

**Preconditions**
> User is on Employee Details page

**Steps and expected results**

1. **Step:**
> User click on 'Resend Notification' button
> _Not provided._
> ![](index.php?/attachments/get/de3519e2-db[PHONE/NUMBER REDACTED]b9f3da2af)
> _Not provided._
   **Expected:**
> User can see a alert message 'There is no previous notification e-mail sent for this employee'
> _Not provided._
> ![](index.php?/attachments/get/d580a24f-68dd-449a-9e55-e06daedb67aa)
> _Not provided._

### C8934326 - User is able to Edit Information

- Section: Edit Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934326](https://internationalsos.testrail.net/index.php?/cases/view/8934326)

**Preconditions**
> User is on Employee Details page

**Steps and expected results**

1. **Step:**
> User click on 'Edit Information' link
> _Not provided._
> ![](index.php?/attachments/get/9da8d738-fd1e-46e0-[NUMERIC TEST DATA REDACTED]-04d53ca938c8)
> _Not provided._
   **Expected:**
> User navigated to Modify Employee Record page
> _Not provided._
> ![](index.php?/attachments/get/a9b6c706-4c06-40db-be42-0f1817980bb1)
> _Not provided._

### C8934355 - User successfully able to search Medical Exam Expirations reports

- Section: Medical Exam Expirations
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934355](https://internationalsos.testrail.net/index.php?/cases/view/8934355)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on Medical Exam Expirations link
   **Expected:**
> User navigated to Medical Exam Expirations page and can see:
> 1. Drop-down fields - Company, Expiration period and Status
> 2. Buttons - Search and Reset
> _Not provided._
> ![](index.php?/attachments/get/141577ec-03bf-[NUMERIC TEST DATA REDACTED]-882f-3f1e10e75dbb)
> _Not provided._

2. **Step:**
> User select data from 'Company' drop-down and click on search button
   **Expected:**
> User can see search results based on user input
> 1. A table with columns - Last Name, First Name, GIN Number, Date Of Birth, Last Exam Date, Next Exam Date, Fitness Status and Status
> 2. Button - Export
> _Not provided._
> ![](index.php?/attachments/get/ff2c64ba-5dbc-4ce7-9cf1-2345246c5df1)
> _Not provided._

3. **Step:**
> User click on Export button
   **Expected:**
> User can see file gets downloaded in local
> _Not provided._
> ![](index.php?/attachments/get/32f6cb1f-3df5-4afd-bf83-d6000ef9b39c)
> _Not provided._

4. **Step:**
> Check validation on Medical Exam Expirations page
   **Expected:**
> 1. User click on search button without select any data on drop-down fields then can see a message 'The Company is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/12b0e081-8a47-4f36-b3bc-2ccd949485b5)
> _Not provided._
> 2. No employee exist with selected company then user can see a message 'There are no employees available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/c6fe3c44-865a-40ff-b730-b1ce215b0715)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934356 - User failed to search Medical Exam Expirations reports

- Section: Medical Exam Expirations
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934356](https://internationalsos.testrail.net/index.php?/cases/view/8934356)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on search button without select any data on drop-down fields
   **Expected:**
> User can see a message 'The Company is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/cb5760cc-02c0-425f-8f4c-07488f0f930f)
> _Not provided._

2. **Step:**
> No employee exist with selected company
   **Expected:**
> User can see a message 'There are no employees available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/52503b5b-741a-42ba-94b5-b377f270ce2c)
> _Not provided._

### C8934357 - Unable to generate report

- Section: Generate Master Report
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934357](https://internationalsos.testrail.net/index.php?/cases/view/8934357)

**Preconditions**
> Exam for the employee should exist in the system
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on subsection 'Generate Master Report' under Reports link
> _Not provided._
   **Expected:**
> User navigated to Select Reports you wish to merge page
> _Not provided._
> ![](index.php?/attachments/get/c411ec1a-48cb-428b-bd18-897c03e9ebd4)
> _Not provided._

2. **Step:**
> User click on Generate button without select any checkbox
   **Expected:**
> User can see a validation message
> _Not provided._
> ![](index.php?/attachments/get/2b36e9d1-773d-48b0-a1b1-5a[PHONE/NUMBER REDACTED]) ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-f68b-4be8-b968-bf30d8834d8a)
> _Not provided._

### C8934358 - Verify company page

- Section: Compnay
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934358](https://internationalsos.testrail.net/index.php?/cases/view/8934358)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Company
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Company page. Where user can see:
> 1. 'Search Company' logo name and 'Add' button
> 2. 'Company Name' as a text field
> 3. 'Owner Company Name' as a drop-down field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/43e114c3-993f-427c-8a64-b0de48b23497)
> _Not provided._

### C8934359 - User successfully able to add company

- Section: Compnay
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934359](https://internationalsos.testrail.net/index.php?/cases/view/8934359)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Company subsection under System Configuration section
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Company page

2. **Step:**
> User click on Add button
> _Not provided._
> ![](index.php?/attachments/get/3d9c5126-a979-[NUMERIC TEST DATA REDACTED]-bc17-f93e14d95718)
> _Not provided._
   **Expected:**
> User navigated to Company Master page. Where user can see sections:
> 1. Company Details
> 2. Other Information
> 3. Contact Details
> 4. Examination Duration
> 5. Other Language Details
> 6. Disclosure Option
> 7. Local Doctor Association
> 8. Reminders/Notifications
> 9. Medical Centers
> 10. Button - Submit and Cancel
> _Not provided._
> ![](index.php?/attachments/get/76f075ed-113c-4a84-a175-d1363b11329d) ![](index.php?/attachments/get/b7e2930e-4e9a-45e[PHONE/NUMBER REDACTED]e01)
> _Not provided._

3. **Step:**
> User select data from 'Owner Company' drop-down
   **Expected:**
> User can see some of the fields auto populated
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/7ea7e716-[NUMERIC TEST DATA REDACTED]-43f9-aae8-6deb84011a90)

4. **Step:**
> User click on submit button (With valid data)
   **Expected:**
> User can see a message
> _Not provided._
> ![](index.php?/attachments/get/8d6b7752-b685-492c-b449-c59ade65cf72)
> _Not provided._

### C8934360 - User unable to add company

- Section: Compnay
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934360](https://internationalsos.testrail.net/index.php?/cases/view/8934360)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on Company subsection under System Configuration section
> _Not provided._
   **Expected:**
> User navigated to Search Company page

2. **Step:**
> User click on Add button
> _Not provided._
> ![](index.php?/attachments/get/3a78d08f-eb44-412a-b224-70b9a735ed31)
> _Not provided._
   **Expected:**
> User navigated to Company Master page

3. **Step:**
> User click on submit button (With invalid data on fields or skipped mandatory fields)
> _Not provided._
   **Expected:**
> User can see a validation error message
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/5b8c54f2-41fc-[NUMERIC TEST DATA REDACTED]-a3ec-758065d79aef) ![](index.php?/attachments/get/45ad782d-[NUMERIC TEST DATA REDACTED]-4c3c-a4b6-aa91465abd11)
> _Not provided._

### C8934361 - Validation check on company page

- Section: Compnay
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934361](https://internationalsos.testrail.net/index.php?/cases/view/8934361)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Company subsection under System Configuration section
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Company page
> _Not provided._
> ![](index.php?/attachments/get/cc2c453f-9ea[PHONE/NUMBER REDACTED]f9063e8338)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/99b69156-a77d-420d-97f3-7dea4c7ad601)
> _Not provided._

3. **Step:**
> User enter data in company name field and click on search button (If no company name present)
   **Expected:**
> User can see a message 'There are no companies available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/7ff0f865-310c-438e-987e-806611a65f6b)
> _Not provided._

4. **Step:**
> User select data from Company drop-down and click on search button
   **Expected:**
> Company specific records will get displayed. Where user can see:
> _Not provided._
> 1. A table with columns: Company Name, Owner Company Name, Access Rights, Active?
> 2. Edit button
> _Not provided._
> ![](index.php?/attachments/get/39816b3e-02b0-4c23-827b-28193d36889b)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934362 - Edit company details

- Section: Compnay
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934362](https://internationalsos.testrail.net/index.php?/cases/view/8934362)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Company subsection under System Configuration section
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Company page
> ![](index.php?/attachments/get/32be875c-a81f-4a43-a9ee-ef20d959f5e8)
> _Not provided._

2. **Step:**
> User select data from Company drop-down and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Company specific records will get displayed to the user
> _Not provided._
> ![](index.php?/attachments/get/fe7fe991-0fbd-46be-[NUMERIC TEST DATA REDACTED]-bcd58c960238)
> _Not provided._

3. **Step:**
> User click on Edit button
> _Not provided._
> ![](index.php?/attachments/get/63db29de-[NUMERIC TEST DATA REDACTED]-46b2-b612-ee62b71e0d6f)
> _Not provided._
   **Expected:**
> User navigated to Company Master page where user can edit details for the company
> _Not provided._
> ![](index.php?/attachments/get/e4ef1b40-4ab6-405a-bb91-cfa0cc43315a)

4. **Step:**
> User click on submit button
   **Expected:**
> User can see a success message 'The company qwer has been successfully modified in the system.
> '
> _Not provided._
> ![](index.php?/attachments/get/b79f01b5-b403-428b-b46d-9d24409c90e6)
> _Not provided._

### C8934363 - Verify  Logo Information page

- Section: Logo Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934363](https://internationalsos.testrail.net/index.php?/cases/view/8934363)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Logo Information
> _Not provided._
   **Expected:**
> User navigated to Logo Information page, Where user can see:
> _Not provided._
> 1. logo name -  'Logo Information'
> 2. Drop-down field -  'Owner Company'
> 3. Button - Get Details and Reset
> _Not provided._
> ![](index.php?/attachments/get/05023bbd-b59e-[NUMERIC TEST DATA REDACTED]-97d6-1cb8fd00a998)
> _Not provided._

### C8934364 - Validation check on Logo Information page

- Section: Logo Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934364](https://internationalsos.testrail.net/index.php?/cases/view/8934364)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Logo Information
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Logo Information page
> _Not provided._
> ![](index.php?/attachments/get/b424fb73-[NUMERIC TEST DATA REDACTED]-481b-[NUMERIC TEST DATA REDACTED]-3eb293768d41)
> _Not provided._

2. **Step:**
> User click on Get Details button without select any fields
   **Expected:**
> User can see a message 'The Company is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/23cb657e-0a87-4bf5-a6f5-799e8534d9e3)
> _Not provided._

3. **Step:**
> User click on reset button
   **Expected:**
> Selected drop-down fields value will get cleared and validation message will also get cleared
> _Not provided._
> ![](index.php?/attachments/get/73dc4467-25a0-4a93-91d4-21732df92c22)
> _Not provided._

### C8934365 - User is successfully able to upload logo information

- Section: Logo Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934365](https://internationalsos.testrail.net/index.php?/cases/view/8934365)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Logo Information
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Logo Information page
> _Not provided._
> ![](index.php?/attachments/get/af5a3260-05e6-[NUMERIC TEST DATA REDACTED]-b775-9d7dd7507b17)
> _Not provided._

2. **Step:**
> User select company name and click on Get Details button
   **Expected:**
> User can see logo information based on company and can see
> _Not provided._
> 1. Choose File button with each logo
> 2. Logo images (If uploaded any)
> 3. Submit button
> _Not provided._
> ![](index.php?/attachments/get/134c1aad-046f-422a-bcab-7280ccfa37c3)
> _Not provided._

3. **Step:**
> User click Choose File button
> _Not provided._
> ![](index.php?/attachments/get/c0fe961a-e2e4-4bd1-a4ee-c20c86ab8ffc)
> _Not provided._
   **Expected:**
> User redirected to local machine to browse logo file
> _Not provided._
> ![](index.php?/attachments/get/dee9f88c-[NUMERIC TEST DATA REDACTED]-4c2f-8cea-48cfc079dc8e)
> _Not provided._

4. **Step:**
> User select logo image and click on Open button
> _Not provided._
> ![](index.php?/attachments/get/d9345604-d3f3-40c3-88cd-b2966f8ba2bc)
> _Not provided._
   **Expected:**
> User can see uploaded file name
> _Not provided._
> ![](index.php?/attachments/get/84e00463-3f6b-4bed-9d17-6cfd78400324)
> _Not provided._

5. **Step:**
> User click on Submit button
   **Expected:**
> User can see a success message 'The logo information for company have been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/53b44bfb-0b27-4df[PHONE/NUMBER REDACTED])
> _Not provided._

### C8934366 - User unable to upload logo due to invalid format

- Section: Logo Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934366](https://internationalsos.testrail.net/index.php?/cases/view/8934366)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Logo Information
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Logo Information page
> _Not provided._
> ![](index.php?/attachments/get/27b9756f-52a8-4afe-b107-347986aaa688)
> _Not provided._

2. **Step:**
> User select company name and click on Get Details button
> _Not provided._
> _Not provided._
   **Expected:**
> _Not provided._
> User can see logo information based on company
> _Not provided._
> ![](index.php?/attachments/get/5511a3b6-3a98-47e8-[NUMERIC TEST DATA REDACTED]-b3ff7f543205)
> _Not provided._

3. **Step:**
> User click Choose File button
> _Not provided._
> ![](index.php?/attachments/get/b793159c-ec50-45df-[NUMERIC TEST DATA REDACTED]-ae1685ebd04b)
> _Not provided._
   **Expected:**
> User redirected to local machine to browse logo file
> _Not provided._
> ![](index.php?/attachments/get/374f968a-07c6-41c0-87e8-adb669504be5)
> _Not provided._

4. **Step:**
> User select file (Except image)
   **Expected:**
> User can see validation message 'Please upload a jpg/ gif/ jpeg/ tif/ png/ bmp file for company logo.'
> _Not provided._
> ![](index.php?/attachments/get/7c034a29-185c-4d16-a442-4aaf19c6dad5) ![](index.php?/attachments/get/7d53bae0-e823-41f4-a38c-a2014bda9e7f)
> _Not provided._

### C8934372 - Verify Area Master page

- Section: Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934372](https://internationalsos.testrail.net/index.php?/cases/view/8934372)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Area
> _Not provided._
   **Expected:**
> User navigated to Area Master page. Where user can see:
> _Not provided._
> 1. 'Area Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Area' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/e648bf4e-f337-430e-8c10-b739551a88c8)
> _Not provided._

### C8934373 - User successfully able to add Area Master

- Section: Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934373](https://internationalsos.testrail.net/index.php?/cases/view/8934373)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Area Master page
> _Not provided._
> ![](index.php?/attachments/get/104d6184-2c9e-452f-813e-d9eb896d6d3d)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Area
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/db44c513-5cc4-[NUMERIC TEST DATA REDACTED]-b0f0-58c0f3664caa)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-a34d-41a2-b32e-5747eb61b2b5)
   **Expected:**
> User can see a success message 'The area qwer has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/3a45eba3-a197-4db3-ae9f-44ea7e03bf09)
> _Not provided._

4. **Step:**
> User select company from drop-down, enter area in text field, select checkbox as active and click on Cancel button
   **Expected:**
> User navigated to Area Master page
> _Not provided._
> ![](index.php?/attachments/get/dcce9137-2db2-[NUMERIC TEST DATA REDACTED]-8d59-b4e7734f3bc2)
> _Not provided._

### C8934374 - User unable to add Area Master

- Section: Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934374](https://internationalsos.testrail.net/index.php?/cases/view/8934374)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Area Master page
> _Not provided._
> ![](index.php?/attachments/get/87c04fe0-bc8e-45fa-a873-40d63f3aaa1e)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Area
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/2ed9f72a-a666-4a82-aab0-aad5f083ecff)
> _Not provided._

3. **Step:**
> User select company name, enter area with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/0329dc34-e10c-4bcc-b92c-2e2791eb6cce)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Area Name.'
> _Not provided._
> ![](index.php?/attachments/get/b68efac9-4f6e-4e1a-b648-a6a78a7ee5c3)
> _Not provided._

### C8934375 - Validation check on Area Master page

- Section: Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934375](https://internationalsos.testrail.net/index.php?/cases/view/8934375)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Area Master page
> _Not provided._
> ![](index.php?/attachments/get/962c9bcf-07ae-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-a897c78d0564)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/ec65dfcc-14a7-402f-84f6-e4f855077ea6)
> _Not provided._

3. **Step:**
> User enter data in Owner Company field and click on search button (If no company name present)
   **Expected:**
> User can see a message 'There are no Areas available for the search performed..'
> _Not provided._
> ![](index.php?/attachments/get/eca1fb3a-e78e-429b-[NUMERIC TEST DATA REDACTED]-43eb0c2dedfa)
> _Not provided._

4. **Step:**
> User enter data in Area text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on area, if present
> _Not provided._
> ![](index.php?/attachments/get/dd88d37d-4c03-4d82-[NUMERIC TEST DATA REDACTED]-9c9d983b5f0a)
> _Not provided._
> Otherwise will get message 'There are no Areas available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/aa93a790-e2e2-4eea-b40f-e0ea33053271)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934376 - Edit Area Master details

- Section: Area
- Type / priority: Functional / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C8934376](https://internationalsos.testrail.net/index.php?/cases/view/8934376)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Area Master page
> _Not provided._
> ![](index.php?/attachments/get/2a860b56-de94-4c4b-98de-fe1d20a68aa3)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Area and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Serach result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/90d1d209-d7e2-4bb5-b32c-6a21d8fdacf4)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit area
> _Not provided._
> ![](index.php?/attachments/get/fd1e021a-2ec8-4e8e-8c5d-edfc4dae8596)
> _Not provided._

4. **Step:**
> User edit area and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/efa7e8e5-51d0-4e71-96ae-3e0a8381864a)
> _Not provided._
   **Expected:**
> User successfully able to edit area and can see a message 'The area qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/269162f1-f6f[PHONE/NUMBER REDACTED]a3d29350)
> _Not provided._

### C8934377 - Verify Business Area Master page

- Section: Business Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934377](https://internationalsos.testrail.net/index.php?/cases/view/8934377)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Business Area
> _Not provided._
   **Expected:**
> User navigated to Business Area Master page. Where user can see:
> _Not provided._
> 1. 'Business Area Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Business Area' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> ![](index.php?/attachments/get/ff0ef94c-2dfe-4af4-[NUMERIC TEST DATA REDACTED]-009a95a214bd)
> _Not provided._

### C8934378 - User successfully able to add Business Area Master

- Section: Business Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934378](https://internationalsos.testrail.net/index.php?/cases/view/8934378)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Business Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Business Area Master page
> _Not provided._
> ![](index.php?/attachments/get/2435d645-[NUMERIC TEST DATA REDACTED]-47bf-aa98-b71c44c79b92)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Business  Area
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/2641108e-756c-414c-[NUMERIC TEST DATA REDACTED]-e3b267df44af)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/2ae87f7f-574b-[NUMERIC TEST DATA REDACTED]-bc08-8c6da5e0f211)
> _Not provided._
   **Expected:**
> User can see a success message 'The Business area qwer has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/22a14644-2e65-[NUMERIC TEST DATA REDACTED]-9bba-9598faab1d79)
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Business Area in text field, select checkbox as active and click on Cancel button
   **Expected:**
> User navigated to Business Area Master page
> ![](index.php?/attachments/get/50877baf-e5f[PHONE/NUMBER REDACTED]d84790e90)
> _Not provided._

### C8934379 - User unable to add Business Area Master

- Section: Business Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934379](https://internationalsos.testrail.net/index.php?/cases/view/8934379)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Business Area
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Business Area Master page
> _Not provided._
> ![](index.php?/attachments/get/3f6c2189-c68f-4bbf-8fb5-fa23c2a9e4f9)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Business Area
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/ef5c8676-556b-[PHONE/NUMBER REDACTED]a8c1cd144)
> _Not provided._

3. **Step:**
> User select company name, enter Business Area with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/01ba365c-653d-4ab4-9cf5-19c0d83247e4)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Business Area Name.'
> _Not provided._
> ![](index.php?/attachments/get/94325d1c-91d7-4df3-b3cf-e632ed9ed746)
> _Not provided._

### C8934380 - Validation check on Business Area Master page

- Section: Business Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934380](https://internationalsos.testrail.net/index.php?/cases/view/8934380)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Business Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Business Area Master page
> _Not provided._
> ![](index.php?/attachments/get/931eb093-78b4-[NUMERIC TEST DATA REDACTED]-a579-820d901c8e34)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/402b1a3e-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-b2f0-89e9e28a9a69)
> _Not provided._

3. **Step:**
> User enter data in Owner Company field and click on search button (If no company name present)
   **Expected:**
> User can see a message 'There are no business areas available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/d5774f61-3e61-4e01-bf20-112dd6cd4c38)
> _Not provided._

4. **Step:**
> User enter data in Business Area text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Business Area, if present
> _Not provided._
> ![](index.php?/attachments/get/2e2bd60d-6b77-[NUMERIC TEST DATA REDACTED]-aaf0-27e4287dfa20)
> _Not provided._
> Otherwise will get message 'There are no Business Area available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/6a29c558-8d14-4e48-9ac3-ebcbdd972d06)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934381 - Edit Business Area Master details

- Section: Business Area
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934381](https://internationalsos.testrail.net/index.php?/cases/view/8934381)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Business Area
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Business Area Master page
> _Not provided._
> ![](index.php?/attachments/get/b89c95bb-85ad-40d1-aa3c-2742b25caa76)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Business Area and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/0f20f122-1b56-[NUMERIC TEST DATA REDACTED]-abd1-decad5783d49)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Business Area
> ![](index.php?/attachments/get/27acbf78-[NUMERIC TEST DATA REDACTED]-472c-83fe-929ba3688244)
> _Not provided._

4. **Step:**
> User edit area and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/4f24860e-f8ab-[NUMERIC TEST DATA REDACTED]-995b-bfdc9535d57a)
> _Not provided._
   **Expected:**
> User successfully able to edit area and can see a message 'The Business area qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/25ceb605-17af-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-e6086528d226)
> _Not provided._

### C8934383 - Verify Geo Market Master page

- Section: Geo Market
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934383](https://internationalsos.testrail.net/index.php?/cases/view/8934383)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Geo Market
> _Not provided._
   **Expected:**
> User navigated to Geo Market Master page. Where user can see:
> _Not provided._
> 1. 'Geo Market Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Geo Market Name' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/c4da85ab-33ac-437c-96ac-cb489d230638)
> _Not provided._

### C8934384 - User successfully able to add Geo Market Master

- Section: Geo Market
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934384](https://internationalsos.testrail.net/index.php?/cases/view/8934384)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Geo Market
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Geo Market Master page
> _Not provided._
> ![](index.php?/attachments/get/dd4594b7-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-b7cd-556ad9a8d0a9)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Geo Market
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/28a912c8-c32b-4fe3-89e7-1a6ac04128af)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/78b2ef16-ac3a-[NUMERIC TEST DATA REDACTED]-8f18-e53f0aebb335)
> _Not provided._
   **Expected:**
> User can see a success message 'The Geo Market qwer has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/62ae0eeb-7e17-4e7c-bfc2-33b0ec34b82c)
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Business Area in text field, select checkbox as active and click on Cancel button
   **Expected:**
> User navigated to Business Area Master page
> _Not provided._
> ![](index.php?/attachments/get/ce23190e-8e02-478b-accf-781bbbeb8475)
> _Not provided._

### C8934385 - User unable to add Geo Market Master

- Section: Geo Market
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934385](https://internationalsos.testrail.net/index.php?/cases/view/8934385)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Geo Market
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Geo Market Master page
> _Not provided._
> ![](index.php?/attachments/get/12d2a[PHONE/NUMBER REDACTED]a3-58412ec0397b)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Geo Market
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/89b0b478-cf5b-4c93-b872-ca2498ab73ff)
> _Not provided._

3. **Step:**
> User select company name, enter Geo Market with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/00e4fa8a-a8fd-444a-[NUMERIC TEST DATA REDACTED]-f[PHONE/NUMBER REDACTED])
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Geo Market Name.'
> _Not provided._
> ![](index.php?/attachments/get/0e75c7b8-503f-[NUMERIC TEST DATA REDACTED]-aac0-f0694f84317f)
> _Not provided._

### C8934386 - Validation check on Geo Market Master page

- Section: Geo Market
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934386](https://internationalsos.testrail.net/index.php?/cases/view/8934386)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Geo Market
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Geo Market Master page
> _Not provided._
> ![](index.php?/attachments/get/711bac08-[NUMERIC TEST DATA REDACTED]-43f9-a76e-f152e977ef9d)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/2afc371d-1b[PHONE/NUMBER REDACTED]-fb2669a57ccf)
> _Not provided._

3. **Step:**
> User enter data in Owner Company field and click on search button (If no company name present)
   **Expected:**
> User can see a message 'There are no geo markets available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/d[PHONE/NUMBER REDACTED]c-b942-004e2e7ae0c5)
> _Not provided._

4. **Step:**
> User enter data in Business Area text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Business Area, if present
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-e3fa-4c97-826b-4da73f549102)
> _Not provided._
> Otherwise will get message 'There are no geomarkets available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/da8e7b11-5ec2-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-a18e239334f1)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934387 - Edit Geo Market Master details

- Section: Geo Market
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934387](https://internationalsos.testrail.net/index.php?/cases/view/8934387)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Geo Market
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Geo Market Master page
> _Not provided._
> ![](index.php?/attachments/get/c5351d41-9f80-47e4-8eb7-3a709cc34248)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Business Area and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/d2aff909-e426-43e3-a85d-0a5fcdec7483)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Geo Market
> _Not provided._
> ![](index.php?/attachments/get/0726bbfe-12c9-46a0-ba3b-5ca877e35ecd)
> _Not provided._

4. **Step:**
> User edit Geo Market and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/f6bd6315-b823-4d2a-926e-aebf312f208b)
> _Not provided._
   **Expected:**
> User successfully able to edit area and can see a message 'The Geo Market qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/9f06ce80-[NUMERIC TEST DATA REDACTED]-4ecf-b725-f3622ec86955)
> _Not provided._

### C8934393 - Verify Job Site Master page

- Section: Job Site
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934393](https://internationalsos.testrail.net/index.php?/cases/view/8934393)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Site
> _Not provided._
   **Expected:**
> User navigated to Job Site Master page. Where user can see:
> _Not provided._
> 1. 'Job Site Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Job Site Name' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/ed2d47db-[PHONE/NUMBER REDACTED]daddaee5f9)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934394 - User successfully able to add Job Site Master

- Section: Job Site
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934394](https://internationalsos.testrail.net/index.php?/cases/view/8934394)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Site
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Site Master page
> _Not provided._
> ![](index.php?/attachments/get/e1f178d6-34c2-[NUMERIC TEST DATA REDACTED]-b677-c972535eced7)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Job Site
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/70c5f059-71de-4a14-a30e-fba5fbee2334)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter Job Site Name in text field, select checkbox as active and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/0034b3be-6b06-45e7-9bb5-a7207a110c2a)
> _Not provided._
   **Expected:**
> User can see a success message 'The Job Site qwer1 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/4c0765b7-721e-45cf-a850-b3a28c694df2)
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Job Site Name in text field, select checkbox as active and click on Cancel button
   **Expected:**
> User navigated to Job Site Master page
> _Not provided._
> ![](index.php?/attachments/get/ceb813a6-9e73-4b0e-a4b8-767f836b1d23)
> _Not provided._

### C8934395 - User unable to add Job Site Master

- Section: Job Site
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934395](https://internationalsos.testrail.net/index.php?/cases/view/8934395)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt;  Job Site
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Site Master page
> _Not provided._
> ![](index.php?/attachments/get/5d91f411-4d86-4db7-[NUMERIC TEST DATA REDACTED]-1e9756d9de15)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Job Site Name
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/21160bd1-1f6b-[PHONE/NUMBER REDACTED]cae868f)
> _Not provided._

3. **Step:**
> User select company name, enter Job Site with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/a84b4bef-971f-405d-94c6-2637f36db9ef)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Job Site Name.'
> _Not provided._
> ![](index.php?/attachments/get/df89f61b-782b-4fc8-[NUMERIC TEST DATA REDACTED]-d1a17dbae82f)
> _Not provided._

4. **Step:**
> User select company name, enter Job Site (Already exist) and click on submit button
> _Not provided._
   **Expected:**
> User can see a message 'The Job Site already exists in the system.'
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/282fdf44-412f-4df0-[NUMERIC TEST DATA REDACTED]-d1d153cdaa04)
> _Not provided._

### C8934396 - Validation check on Job Site Master page

- Section: Job Site
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934396](https://internationalsos.testrail.net/index.php?/cases/view/8934396)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Site
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Site Master page
> _Not provided._
> ![](index.php?/attachments/get/91ab468a-b756-4b54-b75b-4ea9f706af02)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/f37d8c99-ad89-4c66-b1d0-aee6496effb5)
> _Not provided._

3. **Step:**
> User enter data in Job Site Name text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Job Site Name, if present
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-f868-4dc9-893c-513155a5135f)
> _Not provided._
> Otherwise will get message 'There are no job sites available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/108a1162-bea4-4dcf-92e9-807c0f9be78a)
> _Not provided._
> _Not provided._

### C8934397 - Edit Job Site Master details

- Section: Job Site
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934397](https://internationalsos.testrail.net/index.php?/cases/view/8934397)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Job Site
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Site Master page
> _Not provided._
> ![](index.php?/attachments/get/30aae00a-f652-4a6f-988e-41684cb27be1)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Job Site Name and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/5557b485-1ffb-4ec0-b544-7eb0827d15fd)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Job Site
> _Not provided._
> ![](index.php?/attachments/get/36560bd7-7e8d-[NUMERIC TEST DATA REDACTED]-a28c-efcd88461067)
> _Not provided._

4. **Step:**
> User edit Job Site and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/c29027be-e6d9-4e52-a214-c90ca3c6acb5)
> _Not provided._
> _Not provided._
   **Expected:**
> User successfully able to edit Job Site and can see a message 'The Job Site qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/ccb6a46d-8d9b-[NUMERIC TEST DATA REDACTED]-a14a-651180ab18ed)
> _Not provided._

### C8934398 - Verify Job Title Master page

- Section: Job Title
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934398](https://internationalsos.testrail.net/index.php?/cases/view/8934398)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Title
> _Not provided._
   **Expected:**
> User navigated to Job Title Master page. Where user can see:
> _Not provided._
> 1. 'Job Title Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Job Title Name' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

### C8934399 - User successfully able to add Job Title Master

- Section: Job Title
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934399](https://internationalsos.testrail.net/index.php?/cases/view/8934399)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Title
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Title Master page
> _Not provided._
> ![](index.php?/attachments/get/d54449a4-6be7-479f-ad1f-4293060b4ce3)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Job Title
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/9d7058bc-5c97-[NUMERIC TEST DATA REDACTED]-80f8-0109cc315667)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter Job Title in text field, select checkbox as active and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/7d5b0712-c157-42fb-bec0-6189ea2c6323)
> _Not provided._
   **Expected:**
> User can see a success message 'The Job Title qwer has been successfully created in the system.'
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Job Title in text field, select checkbox as active and click on Cancel button
   **Expected:**
> User navigated to Job Title Master page
> _Not provided._
> ![](index.php?/attachments/get/c9582a30-7b50-[NUMERIC TEST DATA REDACTED]-b1a9-b12ff3a84544)
> _Not provided._

### C8934400 - User unable to add Job Title Master

- Section: Job Title
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934400](https://internationalsos.testrail.net/index.php?/cases/view/8934400)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt;  Job Title
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Title Master page
> _Not provided._
> ![](index.php?/attachments/get/aaf188a5-8ae4-4c0d-9aa5-da248aeca861)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name
> 2. Job Title
> 3. Active?
> 4. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/42b4ef6e-ea72-4f5b-ba70-b4a7b85a3394)
> _Not provided._

3. **Step:**
> User select company name, enter Job Title with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/89dc0b7f-[NUMERIC TEST DATA REDACTED]-41af-a0d2-6db87adb6ed3)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Job Title Name.'
> _Not provided._
> ![](index.php?/attachments/get/e1662e25-61e0-43a8-89d8-3a877e818bb4)
> _Not provided._

### C8934401 - Validation check on Job Title Master page

- Section: Job Title
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934401](https://internationalsos.testrail.net/index.php?/cases/view/8934401)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Job Title
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Title Master page
> _Not provided._
> ![](index.php?/attachments/get/2f0f4bc4-e4fe-45d1-ac42-8b72c851607b)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/57e38108-067c-[NUMERIC TEST DATA REDACTED]-a6c3-0d0834bea85f)
> _Not provided._

3. **Step:**
> User enter data in Job Title text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Job Title, if present
> _Not provided._
> ![](index.php?/attachments/get/a7baf298-e292-44c5-ad65-6d8b0eff31b4)
> _Not provided._
> Otherwise will get message 'There are no job titles available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]d6a-b176-5d7fd6ff2865)
> _Not provided._
> _Not provided._

### C8934402 - Edit Job Title Master details

- Section: Job Title
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934402](https://internationalsos.testrail.net/index.php?/cases/view/8934402)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Job Title
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Job Title Master page
> _Not provided._
> ![](index.php?/attachments/get/cb7ea215-e80d-4cde-84d6-6f31aa4ec2dc)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Job Title and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/32936c7e-5dec-45fe-b217-8b2c2fa9e52a)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Job Title
> _Not provided._
> ![](index.php?/attachments/get/3670cf90-8ba7-450a-83c1-a71299fb6081)
> _Not provided._

4. **Step:**
> User edit Job Title and click on Submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User successfully able to edit Job Title and can see a message 'The Job Title qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/3627e9e2-[NUMERIC TEST DATA REDACTED]-443e-b7cb-d55b9e16b4df)
> _Not provided._

### C8934403 - Verify Employee Category Master page

- Section: Employee Category
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934403](https://internationalsos.testrail.net/index.php?/cases/view/8934403)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Employee Category
> _Not provided._
   **Expected:**
> User navigated to Employee Category Master page. Where user can see:
> _Not provided._
> 1. 'Employee Category Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Employee Category Name' as a text field
> 4. 'Show only Handled by Intl. SOS' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/fd73725c-77a5-42db-97f3-13da3f98063a)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

### C8934404 - User successfully able to add Employee Category Master

- Section: Employee Category
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934404](https://internationalsos.testrail.net/index.php?/cases/view/8934404)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Employee Category
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> ![](index.php?/attachments/get/1f0239bb-[NUMERIC TEST DATA REDACTED]-4ae1-a4fd-de656d2e1282)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Company Name - Dropdown field
> 2. Employee Category Name - Text Field
> 3. Active? - Checkbox
> 4. Employee Category Name - Checkbox
> 5. Submit and Cancel - button
> _Not provided._
> ![](index.php?/attachments/get/5f476b82-caf8-47a7-9ed3-7bab84ae73de)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter Employee Category Name in text field, select checkbox as active, Select checkbox as Handled by Intl. SOS and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/82efe92b-85fb-42d6-a2ef-f69be637bc70)
> _Not provided._
   **Expected:**
> User can see a success message 'The Employee Category qwer has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/c2515373-f708-40dd-b860-845c8e5a8c0b)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Employee Category Name in text field, select checkbox as active, Select checkbox as Handled by Intl. SOS and click on Cancel button
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> ![](index.php?/attachments/get/630aa8ef-842f-45ac-a12c-c00e287bd03d)
> _Not provided._

### C8934405 - User unable to add Employee Category Master

- Section: Employee Category
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934405](https://internationalsos.testrail.net/index.php?/cases/view/8934405)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt;  Employee Category
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> _Not provided._
> User can see a table with columns:
> _Not provided._
> 1. Company Name - Dropdown field
> 2. Employee Category Name - Text Field
> 3. Active? - Checkbox
> 4. Employee Category Name - Checkbox
> 5. Submit and Cancel - button
> _Not provided._
> ![](index.php?/attachments/get/9f1a06de-d810-[NUMERIC TEST DATA REDACTED]-ad41-bec03b63381e)
> _Not provided._
> _Not provided._
> _Not provided._

3. **Step:**
> User select company name, enter Employee Category Name with invalid data and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/a0e3c[PHONE/NUMBER REDACTED]b-8ada-ef13a39c65b9)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid Employee Category Name.'
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/c2f81dbe-28d9-4bb6-84a0-f4f5af9bc19f)

### C8934406 - Validation check on Employee Category Master page

- Section: Employee Category
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934406](https://internationalsos.testrail.net/index.php?/cases/view/8934406)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Employee Category
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> ![](index.php?/attachments/get/89e1e830-da5e-[NUMERIC TEST DATA REDACTED]-a21a-d5368aa648d1)
> _Not provided._

2. **Step:**
> User select checkbox ' Show only Handled by Intl. SOS'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/590f2c77-[NUMERIC TEST DATA REDACTED]-46d3-bcc3-c9045f5c3a2c)
> _Not provided._

3. **Step:**
> User enter data in Employee Category text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Employee Category, if present
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/2a1f0a62-de0d-4cb9-a81a-ae892136e516)
> _Not provided._
> Otherwise will get message 'There are no employee categories available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/29981fc7-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-ab53-bf0c724da2e1)
> _Not provided._
> _Not provided._

### C8934407 - Edit Employee Category Master details

- Section: Employee Category
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934407](https://internationalsos.testrail.net/index.php?/cases/view/8934407)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Employee Category
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> ![](index.php?/attachments/get/e14409b4-8d28-[NUMERIC TEST DATA REDACTED]-b013-c523710ff9f1)
> _Not provided._

2. **Step:**
> User select data from Owner Company drop-down, Enter Employee Category Name and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/0c6598ae-8b07-4fb2-[NUMERIC TEST DATA REDACTED]-9799ebaaeb9e)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Employee Category Name
> _Not provided._
> ![](index.php?/attachments/get/bb70ebe5-[NUMERIC TEST DATA REDACTED]-41f9-8f2f-f900d9d8a715)
> _Not provided._

4. **Step:**
> User edit Employee Category Name and click on Submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User successfully able to edit Employee Category Name and can see a message '
> The Employee Category qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/2ba8268d-36cf-49d6-a20f-88938f19bc90)
> _Not provided._

### C8934413 - Verify Additional Information Master page

- Section: Additional Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934413](https://internationalsos.testrail.net/index.php?/cases/view/8934413)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Additional Information
> _Not provided._
   **Expected:**
> User navigated to Additional Information Master page. Where user can see:
> _Not provided._
> 1. 'Additional Information Master' logo and 'Add' button
> 2. 'Owner Company' as a drop-down field
> 3. 'Field Name' as a text field
> 4. 'Show only Active' as a Checkbox
> 5. 'Search' and 'Reset' buttons
> _Not provided._
> ![](index.php?/attachments/get/83bfd9c7-32e1-42de-b8c2-74fcd5225bd5)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

### C8934414 - User successfully able to add Additional Information Master

- Section: Additional Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934414](https://internationalsos.testrail.net/index.php?/cases/view/8934414)

**Preconditions**
> User is on Search Employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Additional Information
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Additional Information Master page
> _Not provided._
> ![](index.php?/attachments/get/1f0239bb-[NUMERIC TEST DATA REDACTED]-4ae1-a4fd-de656d2e1282)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a section 'Add/Modify Additional Fields with details:
> _Not provided._
> 1. Company Name - Dropdown field
> 2. Additional Field Name - Text Field
> 3. Active- Checkbox
> 4. Column Name In HR Import - Checkbox
> 5. Additional Field Type - Drop-down
> 5. Submit and Cancel - button
> _Not provided._
> ![](index.php?/attachments/get/0fc217fa-b235-485e-b304-9abb6e39879b)
> _Not provided._

3. **Step:**
> User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/b1f581a3-3a4c-40c7-a66a-48d36e2f5402)
> _Not provided._
   **Expected:**
> User can see a success message 'The Additional Field qwer has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/a6edd4c9-898e-[NUMERIC TEST DATA REDACTED]-9f70-3a6b377dfbab)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Cancel button
   **Expected:**
> User navigated to Employee Category Master page
> _Not provided._
> ![](index.php?/attachments/get/8fcfdd61-c9f0-4ba8-[NUMERIC TEST DATA REDACTED]-2aab7b88b8d7)
> _Not provided._

### C8934415 - User unable to add Additional Information Master

- Section: Additional Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934415](https://internationalsos.testrail.net/index.php?/cases/view/8934415)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt;  Additional Information
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Additional Information Master page
> _Not provided._
> ![](index.php?/attachments/get/b1774a0b-aaa2-49c7-[NUMERIC TEST DATA REDACTED]-3b682c0017a7)
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> _Not provided._
> User can see a section 'Add/Modify Additional Fields with details:
> _Not provided._
> 1. Company Name - Dropdown field
> 2. Additional Field Name - Text Field
> 3. Active- Checkbox
> 4. Column Name In HR Import - Checkbox
> 5. Additional Field Type - Drop-down
> 6. Submit and Cancel - button
> _Not provided._
> ![](index.php?/attachments/get/c373710c-d7aa-4b68-864a-57b45be51ca9)
> _Not provided._
> _Not provided._

3. **Step:**
> User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/14b3c7d1-986d-4f79-[NUMERIC TEST DATA REDACTED]-a83d28391f37)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid additional field name.'
> _Not provided._
> ![](index.php?/attachments/get/8244dd1c-e587-4c7c-99ee-5a4da41ad48a) ![](index.php?/attachments/get/3e75c1e6-[NUMERIC TEST DATA REDACTED]-44c7-a65e-6262a36f198f)
> _Not provided._

4. **Step:**
> User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button (Already present)
   **Expected:**
> User can see a message 'The additional field already exists in the system.'
> _Not provided._
> ![](index.php?/attachments/get/6bfcd2d0-b186-46ea-[NUMERIC TEST DATA REDACTED]-d906fff42bf1)
> _Not provided._

### C8934416 - Validation check on Additional Information Master page

- Section: Additional Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934416](https://internationalsos.testrail.net/index.php?/cases/view/8934416)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Additional Information
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Additional Information Master page
> _Not provided._
> ![](index.php?/attachments/get/283c4245-[NUMERIC TEST DATA REDACTED]-4f18-a6fa-6c0a3098bd7f)
> _Not provided._

2. **Step:**
> User select checkbox 'Show only Active'
> _Not provided._
> _Not provided._
   **Expected:**
> Active records will get displayed
> _Not provided._
> ![](index.php?/attachments/get/59b979d0-cd69-4ab3-9f2b-c22a1d4db742)
> _Not provided._

3. **Step:**
> User enter data in Owner Company text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result should display based on Owner Company, if present
> _Not provided._
> ![](index.php?/attachments/get/7cd13df8-1dca-4aa2-bc59-216c8f0003a3)
> _Not provided._
> Otherwise will get message 'There are no additional fields available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/f6a7be91-99a7-45d5-[NUMERIC TEST DATA REDACTED]-884a31b7fe68)  ![](index.php?/attachments/get/0851e2e8-7d23-4df0-8ec4-a8fa51295abe)
> _Not provided._

### C8934417 - Edit Additional Information Master details

- Section: Additional Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934417](https://internationalsos.testrail.net/index.php?/cases/view/8934417)

**Preconditions**
> User is on Search Employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; company --&gt; Additional Information
> _Not provided._
   **Expected:**
> User navigated to Additional Information Master page
> _Not provided._
> ![](index.php?/attachments/get/cdadad6b-b7ba-4e81-8ecf-e9c885844cec)
> _Not provided._

2. **Step:**
> User enter data in Owner Company drop-down field, enter data in Field Name text field and click on search button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/e3552607-6ce4-439c-98de-10a6a60beb25)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> User able to edit Additional Information
> _Not provided._
> ![](index.php?/attachments/get/44251bdd-473f-4a04-963b-9baf65d2a40e)
> _Not provided._

4. **Step:**
> User edit Employee Category Name and click on Submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User successfully able to edit Employee Category Name and can see a message '
> The Additional Field qwer has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/3df98771-bccc-42a8-ba64-ef9e1cfd3033)
> _Not provided._

### C8934420 - Verify Criteria page

- Section: Criteria
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934420](https://internationalsos.testrail.net/index.php?/cases/view/8934420)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Criteria
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Criteria Master page and user can see details:
> _Not provided._
> 1. Owner Company - drop-down field
> 2. Get Details - button
> _Not provided._
> ![](index.php?/attachments/get/884a57a3-7a4e-40ae-8ac3-7c3142188b0e)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934421 - User is able to choose Company Criteria

- Section: Criteria
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934421](https://internationalsos.testrail.net/index.php?/cases/view/8934421)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Criteria
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Criteria Master page and user can see details:
> _Not provided._
> ![](index.php?/attachments/get/285b5894-6ea5-[NUMERIC TEST DATA REDACTED]-a804-55cd6daf820d)
> _Not provided._

2. **Step:**
> User select fata from Owner Company drop-down and click on Get Details button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with
> _Not provided._
> 1. Criteria Field - column
> 2. Optional Criteria? - Column
> 3. Submit button
> _Not provided._
> ![](index.php?/attachments/get/86147c47-d7fc-4f16-9cc2-7e53c6b8e0a8)
> _Not provided._
> _Not provided._

3. **Step:**
> User select checkbox as per requirement and click on submit button
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/71390cf8-4c8b-4cfe-9f10-47fac7b4e795)
   **Expected:**
> User can see a success message 'The criteria fields for Air Liquide have been successfully saved in the system.'
> _Not provided._
> ![](index.php?/attachments/get/9cc231ac-ba90-[NUMERIC TEST DATA REDACTED]-a943-6e0559dc6864)
> _Not provided._

4. **Step:**
> User select checkbox as per requirement and click on Reset button
> _Not provided._
> ![](index.php?/attachments/get/c956e073-f660-4c6a-bed6-08bf7b0b19fe)
> _Not provided._
   **Expected:**
> User navigated to Company Criteria Master page
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/d11663e9-f69c-4a68-a4b9-0dc515509711)
> _Not provided._

### C8934422 - Validation check on Criteria page

- Section: Criteria
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934422](https://internationalsos.testrail.net/index.php?/cases/view/8934422)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Criteria
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Criteria Master page and user can see details:
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/6fe7c281-b68d-4c62-9e82-6f15b7b71180)
> _Not provided._

2. **Step:**
> User click on Get Details button without select Owner Company drop-down
   **Expected:**
> User can see a message 'The Company is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/57c718c0-290a-[NUMERIC TEST DATA REDACTED]-a238-022dcf4bb5f9)
> _Not provided._

### C8934425 - Verify MET page

- Section: MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934425](https://internationalsos.testrail.net/index.php?/cases/view/8934425)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; MET
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search MET page
> _Not provided._
> ![](index.php?/attachments/get/c9f95a84-f04e-454e-87df-28f681bf36bf)
> _Not provided._
> And user can see details:
> 1. Company - drop-down
> 2. Global MET - drop-down
> 3. MET name - text field
> 4. Show only Active - Checkbox
> 5. Add, Search and Reset - button
> _Not provided._
> _Not provided._
> _Not provided._

### C8934426 - Validation check on MET page

- Section: MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934426](https://internationalsos.testrail.net/index.php?/cases/view/8934426)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; MET
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search MET page
> _Not provided._
> ![](index.php?/attachments/get/0ff7acde-6fa6-[NUMERIC TEST DATA REDACTED]-9d12-388129f21abb)
> _Not provided._

2. **Step:**
> User click on search button without selecting any search criteria
   **Expected:**
> User can see search results
> _Not provided._
> ![](index.php?/attachments/get/9863eb61-f07c-48e6-b8f6-187d9366b9eb)
> _Not provided._

3. **Step:**
> User select data from company and Global MET drop-down and click on search button (If there is no MET)
   **Expected:**
> User can see a message 'There are no METs available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/f175d98f-b0ce-[NUMERIC TEST DATA REDACTED]-9a7e-b08fbd8ae71b)

4. **Step:**
> User enter special characters in MET name text field
   **Expected:**
> User can see a message 'Please enter a valid MET Name.'
> _Not provided._
> ![](index.php?/attachments/get/dcb5a707-a442-40d6-a40f-a71f586dc48c)
> _Not provided._

5. **Step:**
> User select data from company and Global MET drop-down and click on Reset button
> _Not provided._
> ![](index.php?/attachments/get/e4bd[PHONE/NUMBER REDACTED]a7-9c27-e64cb4ddce2b)
> _Not provided._
   **Expected:**
> Entered data on text fields and checkbox value will be erased
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/93c25d9c-eb70-[NUMERIC TEST DATA REDACTED]-9f1b-aa1d30c1a137)

6. **Step:**
> User enter details in each fields on search MET and click on Reset button
> _Not provided._
> ![](index.php?/attachments/get/78c791d4-bea4-[NUMERIC TEST DATA REDACTED]-895d-64b30feca10e)
> _Not provided._
   **Expected:**
> All fields data get erased
> _Not provided._
> ![](index.php?/attachments/get/77e13701-e2a0-[NUMERIC TEST DATA REDACTED]-868d-5ccf56496d17)
> _Not provided._

### C8934428 - User successfully able to add MET

- Section: MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934428](https://internationalsos.testrail.net/index.php?/cases/view/8934428)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; MET
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search MET page
> _Not provided._
> ![](index.php?/attachments/get/a0653bd7-34ea-45eb-b02d-d7d630dc7a7c)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User can see a section 'MET Criteria List' and Add button
> _Not provided._
> ![](index.php?/attachments/get/c869a380-32d6-46a7-bf17-5613b8d6556e)
> _Not provided._

3. **Step:**
> User enter details in mandatory fields and click on Add button
> _Not provided._
> ![](index.php?/attachments/get/9e3fd6a3-65ad-4d69-8f3c-5201ebbb6084)
> _Not provided._
   **Expected:**
> User can see section 'Add/Modify MET Criteria' with details:
> 1. Criteria Name - Text field
> 2. Frequency in Years - Text field
> 3. Checkbox - Active
> 4. A table with columns: Criteria Name, Drop-down,  (Minimum Value), (Maximum Value)
> 5. A note - Note : Minimum value and Maximum value specified are included in the range.
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/09be2dde-28ff-45f2-a2b9-6e3cdbe48b90)
> _Not provided._

4. **Step:**
> User enter details in mandatory fields and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/f428a57d-c20e-4db4-919c-2141fc66d63d)
> _Not provided._
   **Expected:**
> User can see a success message

### C8934430 - Validation check on MET page

- Section: MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934430](https://internationalsos.testrail.net/index.php?/cases/view/8934430)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; MET
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search MET page
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-2bc3-48f8-a9a1-ff29ccee2555)
> _Not provided._

2. **Step:**
> User click on Add button without select any fields or enter any data
   **Expected:**
> User can see alert messages:
> _Not provided._
> The Company is mandatory and cannot be blank.
> The Global MET is mandatory and cannot be blank.
> The MET is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-0c5b-[NUMERIC TEST DATA REDACTED]-bac7-722c7a7116c5)
> _Not provided._

3. **Step:**
> User click on submit button without select any fields or enter any data
   **Expected:**
> User can see alert messages:
> _Not provided._
> The Criteria Name is mandatory and cannot be blank.
> The frequency for an MET Criteria is mandatory and cannot be blank.
> The value for AGE is mandatory and cannot be blank. Please enter at least the minimum value.
> The value for GENDER is mandatory and cannot be blank.
> The value for EMPLOYEE STATUS is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/56562efa-1d6d-4c53-[NUMERIC TEST DATA REDACTED]-9ae140a0b9cd)
> _Not provided._

4. **Step:**
> User enter special characters in text fields
   **Expected:**
> User can see message:
> _Not provided._
> Please enter a valid Criteria Name.
> Please enter 0 or greater than 0 for the Frequency.
> Please enter only whole numbers between 0 - [LONG NUMBER REDACTED] for Minimum Value of AGE.
> _Not provided._
> ![](index.php?/attachments/get/2e38d3c5-b8b7-49ed-a336-6e087a20befe)
> _Not provided._

### C8934436 - Unable to search MET

- Section: MET
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934436](https://internationalsos.testrail.net/index.php?/cases/view/8934436)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; MET
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search MET page
> _Not provided._
> ![](index.php?/attachments/get/516b7dee-d373-471a-83e8-625a01e11b7a)
> _Not provided._

2. **Step:**
> User select MET details from drop-down and enter MET name (not exist)
   **Expected:**
> User can see message 'There are no METs available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/76203fab-380a-40d8-8b03-9e3658e17f73)
> _Not provided._

3. **Step:**
> User select Global MET from drop-down (not exist)
   **Expected:**
> User can see message 'There are no METs available for the search performed.'
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/7f3ca42d-d2ac-4a2e-a8c1-1fde6d710a39)
> _Not provided._

### C8934459 - Verify Fitness Conclusion page

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934459](https://internationalsos.testrail.net/index.php?/cases/view/8934459)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Fitness Conclusion
> _Not provided._
   **Expected:**
> User navigated to Company Fitness Conclusion Master page
> _Not provided._
> ![](index.php?/attachments/get/3ffe94bd-5f54-[NUMERIC TEST DATA REDACTED]-9a46-853532f09f28)
> _Not provided._
> And user can see details:
> _Not provided._
> 1. Owner Company - drop-down
> 2. User Role - drop-down
> 3.Fitness Conclusion Name - drop-down
> 4. Show only Active - checkbox
> 5. Add, Search and Reset button
> _Not provided._
> _Not provided._
> _Not provided._

### C8934460 - Validation check on Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934460](https://internationalsos.testrail.net/index.php?/cases/view/8934460)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Fitness Conclusion
> _Not provided._
   **Expected:**
> User navigated to Company Fitness Conclusion Master page
> _Not provided._
> ![](index.php?/attachments/get/94d16943-bfc[PHONE/NUMBER REDACTED]a818538f40b)
> _Not provided._

2. **Step:**
> User enter user role (not available in the system)
   **Expected:**
> User can see a message 'There are no fitness conclusions available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/91d6b69c-763f-[NUMERIC TEST DATA REDACTED]-b058-68019cf873d4)
> _Not provided._
> _Not provided._
> _Not provided._

3. **Step:**
> User enter Fitness Conclusion Name (not available in the system)
   **Expected:**
> User can see a message 'There are no fitness conclusions available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/4182a265-f4ba-49ce-a4c9-4b288c912465)
> _Not provided._

4. **Step:**
> User click on Add button and without select any data from drop-down, user click on submit button
   **Expected:**
> User can see a message:
> _Not provided._
> The Company name is mandatory and cannot be blank.
> The User role is mandatory and cannot be blank.
> The fitness conclusion is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/ebf08f37-80fd-4c9a-91dd-3fc8530b696b)
> _Not provided._

5. **Step:**
> User enter data in each fields and click on reset button
> _Not provided._
> ![](index.php?/attachments/get/a1212830-3dd8-45ff-a65c-74db09808531)
> _Not provided._
   **Expected:**
> All fields and selected checkbox gets cleared
> _Not provided._
> ![](index.php?/attachments/get/8a4b4a2a-25f7-4aaa-9cec-ed33822789c4)
> _Not provided._
> _Not provided._
> _Not provided._

### C8934461 - User successfully able to add Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934461](https://internationalsos.testrail.net/index.php?/cases/view/8934461)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Fitness Conclusion Master page
> _Not provided._
> ![](index.php?/attachments/get/01a328be-14b4-[NUMERIC TEST DATA REDACTED]-8df8-f6163e3d5b37)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User can see a table with columns:
> _Not provided._
> 1. Owner Company
> 2. User Role
> 3. Active?
> 4. Fitness Conclusion Name
> 5. Submit and Cancel button
> _Not provided._
> ![](index.php?/attachments/get/16ec27c5-a859-4a71-989b-b1eaf16b8882)
> _Not provided._

3. **Step:**
> User select data from drop-down - Owner Company, User Role, Active? and Fitness Conclusion Name and click on Submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The fitness conclusion Fit has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/d0d7051d-d9a3-437e-[NUMERIC TEST DATA REDACTED]-2719a2b0f604)
> _Not provided._

### C8934462 - User successfully able to edit Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934462](https://internationalsos.testrail.net/index.php?/cases/view/8934462)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Fitness Conclusion Master page
> _Not provided._
> ![](index.php?/attachments/get/a86ebc8d-e1b9-42e0-b466-c991c1ec26b3)
> _Not provided._

2. **Step:**
> User select data from drop-down - Owner Company or User Role or Active? or Fitness Conclusion Name and click on Search button
   **Expected:**
> User can see search results
> _Not provided._
> ![](index.php?/attachments/get/d2f800e4-e349-4ae7-[NUMERIC TEST DATA REDACTED]-540ff7c208ed)
> _Not provided._

3. **Step:**
> User click on edit button
   **Expected:**
> User can see fields as editable
> _Not provided._
> ![](index.php?/attachments/get/8764fb3e-1e03-4d70-b140-5d45634c1926)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/09d32bfa-df8f-44a5-983b-38424e707e32)
> _Not provided._
   **Expected:**
> User can see a success message 'The fitness conclusion R09 has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/657c787c-[NUMERIC TEST DATA REDACTED]-45ef-b67c-1d7bab845756)
> _Not provided._

### C8934463 - Unable to search Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934463](https://internationalsos.testrail.net/index.php?/cases/view/8934463)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Fitness Conclusion Master page
> _Not provided._
> ![](index.php?/attachments/get/7f1cf094-63c2-[NUMERIC TEST DATA REDACTED]-8af2-023539b40afc)
> _Not provided._

2. **Step:**
> User select User Role and Fitness Conclusion Name (not exist in the system) from drop-down and click on search button
   **Expected:**
> User can see a message 'There are no fitness conclusions available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/e1c42f8f-0c0b-[NUMERIC TEST DATA REDACTED]-84c5-a81d5867ce16)
> _Not provided._

### C8934490 - Verify Static Content Master

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934490](https://internationalsos.testrail.net/index.php?/cases/view/8934490)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Static Content Master page
> _Not provided._
> ![](index.php?/attachments/get/416b0726-fb22-423e-a342-dcb78f4f7e17)
> _Not provided._
> And user can see content:
> 1. Owner Company - drop-down
> 2. Search and Reset button
> _Not provided._
> _Not provided._

### C8934491 - Validation check on Static Content Master

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934491](https://internationalsos.testrail.net/index.php?/cases/view/8934491)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Static Content
> _Not provided._
   **Expected:**
> User navigated to Static Content Master page
> _Not provided._
> ![](index.php?/attachments/get/6ca3f261-4e97-4e16-a13a-b82d48fa8fcb)
> _Not provided._

2. **Step:**
> User select data from drop-down and click on reset button
> _Not provided._
> ![](index.php?/attachments/get/0b5df37d-ae69-4dcc-860f-6d8adfb38804)
> _Not provided._
   **Expected:**
> Selected fields gets cleared
> _Not provided._
> ![](index.php?/attachments/get/82d7db2c-49b3-4bea-87d4-71497d1790db)
> _Not provided._

3. **Step:**
> User select data from drop-down, click on Search button. Again click on Add button
> _Not provided._
> ![](index.php?/attachments/get/66ce09d4-a49d-4edc-8dfc-666ed016099f)
> _Not provided._
> Again user click on Submit button without select any data from drop-down
> _Not provided._
> ![](index.php?/attachments/get/900be22e-7b65-45c5-becf-8e444d3128ef)
> _Not provided._
   **Expected:**
> Then user can see a validation message:
> _Not provided._
> The menu name is mandatory and cannot be blank.
> The URL location or path is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/3d475d29-840d-4eea-[NUMERIC TEST DATA REDACTED]-ca9cd28e797d)
> _Not provided._
> _Not provided._

4. **Step:**
> User select data from drop-down, click on Search button. Again click on Edit button
> _Not provided._
> ![](index.php?/attachments/get/6a2711f3-30f1-4a13-9a50-2abfc8fceed0)
> _Not provided._
> Again click on Submit button without select any data from drop-down
> _Not provided._
> ![](index.php?/attachments/get/441a1b86-603e-4bf0-9c61-83e2556f5b73)
> _Not provided._
   **Expected:**
> user can see a validation message:
> _Not provided._
> Please enter a valid location. For example: http://[PHONE/NUMBER REDACTED]:[NUMERIC TEST DATA REDACTED]/Employee/SearchEmployee.aspx Or https://www.abcd.com/login.asp
> _Not provided._
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/c7c38325-26b2-4d83-a9ac-3e4baed8a24f)

### C8934492 - User successfully able to add Static Content Master

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934492](https://internationalsos.testrail.net/index.php?/cases/view/8934492)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Static Content Master page
> _Not provided._
> ![](index.php?/attachments/get/7cd46380-ea73-432f-a84b-ee6162c15f7f)
> _Not provided._

2. **Step:**
> User select data from drop-down, click on Search button
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/20c029b9-3cbf-4a99-8b7d-d178ade94d57)
> _Not provided._

3. **Step:**
> User click on Add button
   **Expected:**
> User can see a table and contents
> _Not provided._
> ![](index.php?/attachments/get/a110fd28-a82d-443a-9aab-dcc8c71eb171)
> _Not provided._
> Columns: Company, Menu Name, URL location or path
> Button: Submit, Cancel
> _Not provided._

4. **Step:**
> User enter details in text boxes 'Menu Name' and 'URL location or path' and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/cf39ac8c-[NUMERIC TEST DATA REDACTED]-4d32-a498-1c0a334ecf86)
> _Not provided._
   **Expected:**
> User can see a success message 'The menu Test has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/294ed6ce-e49d-44ff-a9f0-f05f6b5417f9)
> _Not provided._

### C8934493 - User successfully able to edit Static Content Master

- Section: Static Content
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934493](https://internationalsos.testrail.net/index.php?/cases/view/8934493)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Static Content Master page
> _Not provided._
> ![](index.php?/attachments/get/1a2a6859-bff0-42c8-a2f2-9c490271bac7)
> _Not provided._

2. **Step:**
> User select data from drop-down, click on Search button
> _Not provided._
> _Not provided._
   **Expected:**
> Search result gets displayed
> _Not provided._
> ![](index.php?/attachments/get/8d54fded-fd3e-4ec7-bb1a-9b304087f87d)
> _Not provided._

3. **Step:**
> User click on edit button for company
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/491d6846-38a1-[NUMERIC TEST DATA REDACTED]-897d-f739973bba8b)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/e27ea49e-8dbd-45cc-ae6d-c05e963fea4d)
> _Not provided._
   **Expected:**
> User can see a success message 'The menu Test1 has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/230f97af-75ee-4ce0-ba05-1a70280019d0)
> _Not provided._

### C8934494 - Unable to search Static Content Master

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934494](https://internationalsos.testrail.net/index.php?/cases/view/8934494)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Static Content Master page
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/749271db-[NUMERIC TEST DATA REDACTED]-43ee-[NUMERIC TEST DATA REDACTED]-39d4f733607d)
> _Not provided._

2. **Step:**
> User select data from drop-down, click on Search button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see Subsidiary Company	drop down
> _Not provided._
> ![](index.php?/attachments/get/ced0e44d-[NUMERIC TEST DATA REDACTED]-4ff7-a76a-17729a7a379e)
> _Not provided._

3. **Step:**
> User select data from 'Subsidiary Company' drop down and click on search button
> _Not provided._
> ![](index.php?/attachments/get/cd682469-7f68-4a57-82d9-331b7feefedd)
> _Not provided._
   **Expected:**
> User can see a message 'There are no static content menus for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/b3320605-4ae2-4ac4-b6b1-933f288342ec)
> _Not provided._

### C8934501 - Verify Medical History Page

- Section: Medical History
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934501](https://internationalsos.testrail.net/index.php?/cases/view/8934501)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Medical History
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/a4bbdf84-ed59-478a-b610-4c40d6135c3e)
> _Not provided._
> And user can see content:
> 1. Owner Company - drop-down
> 2. Get Details button
> _Not provided._
> _Not provided._

### C8934502 - Validation check on Medical History

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934502](https://internationalsos.testrail.net/index.php?/cases/view/8934502)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Medical History
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/6d6a9ee4-af3e-4d71-a3b5-869670b3194f)
> _Not provided._

2. **Step:**
> User click on Get Details button without select data from drop-down
   **Expected:**
> User can see a validation message 'Please select a Company to get the details.'
> _Not provided._
> ![](index.php?/attachments/get/0a3b6287-89b3-4d8f-8e30-57c49b082ba8)
> _Not provided._

3. **Step:**
> User select data from Owner Company drop-down, click on Get Details button. Again click on submit button without enter any details on the screen
   **Expected:**
> User can see a message 'There are no changes to save for medical history health check item.'
> _Not provided._
> ![](index.php?/attachments/get/045d72dc-8d08-[NUMERIC TEST DATA REDACTED]-8df5-c0e816f07735)
> _Not provided._

### C8934503 - User is able to do changes on Medical History page

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934503](https://internationalsos.testrail.net/index.php?/cases/view/8934503)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Medical History
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]e77-baa2-77c27d3ec3ba)
> _Not provided._

2. **Step:**
> User select data from drop-down and click on Get Details button
> _Not provided._
   **Expected:**
> User can see a section 'Additional Information' and a table 'Medical History Health Check Item'
> _Not provided._
> ![](index.php?/attachments/get/9569a410-35ad-42de-967f-75d851f908e7)
> _Not provided._

3. **Step:**
> User enter data in text field 'Medical History Note', select check box from 'Medical History Name', enter text in 'Sequence' text field and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/6fa6f0bb-806c-43a8-9ce9-92478d1d9761)
> _Not provided._
   **Expected:**
> User can see a message 'Modification have been changed successfully'
> _Not provided._
> ![](index.php?/attachments/get/38453e4e-bff9-4ddb-b181-873b3e21f705)
> _Not provided._

### C8934504 - Verify Widget Configuration page

- Section: Widget Configuration
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934504](https://internationalsos.testrail.net/index.php?/cases/view/8934504)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Widget Configuration
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/b2013b4b-ca1a-41de-b5bc-b97006ce075c)
> _Not provided._
> And user can see contents:
> 1. Owner Company - drop-down
> 2. User Preference - drop-down
> 3. Widget Type - drop-down
> 4. Health Check Item Name - drop-down
> 5. Widget Category - drop-down
> 6. Widget Name - text field
> 7. Search, Reset, Add - Button
> _Not provided._

### C8934505 - Validation check on Widget Configuration page

- Section: Widget Configuration
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934505](https://internationalsos.testrail.net/index.php?/cases/view/8934505)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt;  Widget Configuration
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/a2b107de-[NUMERIC TEST DATA REDACTED]-4acc-a6f3-7d804788c316)
> _Not provided._

2. **Step:**
> User enter incorrect data in Widget Name text field and click on search button
   **Expected:**
> User can see a message 'There is no widget configuration available for the selected criteria.'
> _Not provided._
> ![](index.php?/attachments/get/ec863c6c-1ff9-47b7-bf16-07fd9b01dc64)
> _Not provided._

3. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/3093566b-e922-40fb-[NUMERIC TEST DATA REDACTED]-e683d242ca8f)
> _Not provided._
> User skipped some mandatory drop-down fields and click on add button for smiley, then user can see validation message
> _Not provided._
> ![](index.php?/attachments/get/291b429a-7b4e-4fb5-ad5e-34b6cf3184f3)
> _Not provided._
> _Not provided._

4. **Step:**
> User enter special character in Widget Name text field and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/b53b283e-e1fb-47d8-b179-955d461e52b1)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid sequence number'
> _Not provided._
> ![](index.php?/attachments/get/66bcec69-e1ac-4f0b-b1ac-42fa38813718)
> _Not provided._

5. **Step:**
> User click on Preview button
   **Expected:**
> User can see a alert message
> _Not provided._
> ![](index.php?/attachments/get/0680398e-b5fd-45b[PHONE/NUMBER REDACTED]d9123)
> _Not provided._

### C8934506 - User is successfully able to add Widget Configuration

- Section: Widget Configuration
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934506](https://internationalsos.testrail.net/index.php?/cases/view/8934506)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Widget Configuration
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/3c83b90b-bd0e-408e-9e17-744f6fad99e5)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Widget Configuration page
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]f6-4d5e-850a-bc7d7865d35e)
> _Not provided._

3. **Step:**
> User enter mandatory details and add smiley
   **Expected:**
> User successfully able to add smiley
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]aea92d6b8f9)
> _Not provided._

4. **Step:**
> User click on submit button
   **Expected:**
> User can see a success message 'The widget configuration has been successfully added.'
> _Not provided._
> ![](index.php?/attachments/get/fc83695a-fc21-48f0-8a33-f9a419b6cceb)
> _Not provided._

5. **Step:**
> User click on cancel button
   **Expected:**
> User navigated to Search Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/178b0d2e-39fb-484e-[PHONE/NUMBER REDACTED]bac)
> _Not provided._

### C8934507 - User is failed to add Widget Configuration

- Section: Widget Configuration
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934507](https://internationalsos.testrail.net/index.php?/cases/view/8934507)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Widget Configuration
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Widget Configuration page
> _Not provided._
> ![](index.php?/attachments/get/3087e198-d6f5-49a3-bb7a-db00dec7c2f3)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Widget Configuration page
> ![](index.php?/attachments/get/fd53f2ed-11f7-4ae1-8fb3-9e0b88d2ec61)
> _Not provided._

3. **Step:**
> User enter special character in Widget Name text field and click on Submit button
> ![](index.php?/attachments/get/a1983cdb-bf32-4f31-a001-01c136f553b6)
> _Not provided._
   **Expected:**
> User can see a message 'Please enter a valid sequence number'
> ![](index.php?/attachments/get/67624c50-2f53-40a1-b2fa-fba5d00dcab4)
> _Not provided._

### C8934508 - Unable to search Widget Configuration

- Section: Widget Configuration
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934508](https://internationalsos.testrail.net/index.php?/cases/view/8934508)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Widget Configuration
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Search Widget Configuration page
> ![](index.php?/attachments/get/21bbd34b-dacf-4fae-9afa-04abc973dc88)
> _Not provided._

2. **Step:**
> User enter incorrect data in Widget Name text field and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message 'There is no widget configuration available for the selected criteria.'
> _Not provided._
> ![](index.php?/attachments/get/74379ce9-2dff-48c7-81be-d0dede2c1231)
> _Not provided._

### C8934509 - Verify Notifications page

- Section: Notification
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934509](https://internationalsos.testrail.net/index.php?/cases/view/8934509)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Notification
> _Not provided._
   **Expected:**
> User navigated to Company Notification Master page
> _Not provided._
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Owner Company - drop-down
> 2. Get Details, Reset - Button
> _Not provided._

### C8934510 - Validation check on Notifications page

- Section: Notification
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934510](https://internationalsos.testrail.net/index.php?/cases/view/8934510)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Notification
> _Not provided._
   **Expected:**
> User navigated to Company Notification Master page
> _Not provided._
> ![](index.php?/attachments/get/20a0a26e-[NUMERIC TEST DATA REDACTED]-4fad-af3d-325f11148b0b)
> _Not provided._

2. **Step:**
> User click on Get Details button without select drop-down
   **Expected:**
> User can see a message 'The Company field is mandatory and cannot be left blank.'
> _Not provided._
> ![](index.php?/attachments/get/0efef2c1-6b2f-4d29-b5a4-bcd108d5482f)
> _Not provided._

3. **Step:**
> User select data from drop-down and click on Get Details button
> _Not provided._
> ![](index.php?/attachments/get/9978ff86-fcfe-[NUMERIC TEST DATA REDACTED]-acce-52ab852746c2)
> _Not provided._
> And user click on Reset button
> _Not provided._
> _Not provided._
   **Expected:**
> All fields get cleared and user navigated to 'Company Notification Master'
> _Not provided._
> ![](index.php?/attachments/get/fdd9cd07-d871-4af4-8ad9-2652895f460d)

4. **Step:**
> User select data from drop-down and click on Get Details button
> _Not provided._
> ![](index.php?/attachments/get/a54bfbca-c2e9-[NUMERIC TEST DATA REDACTED]-b602-fda2357b1027)
> _Not provided._
> And user click on submit button (All checkbox is unchecked)
   **Expected:**
> User can see a message 'Not configuring the notification(s) will affect the mobile application.'
> _Not provided._
> ![](index.php?/attachments/get/82999bd2-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-aefd-e56b379280ff)
> _Not provided._

### C8934511 - User is able to do the changes on Notifications page

- Section: Notification
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934511](https://internationalsos.testrail.net/index.php?/cases/view/8934511)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Notification
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Company Notification Master page
> _Not provided._
> ![](index.php?/attachments/get/2551b548-b0c7-493d-[NUMERIC TEST DATA REDACTED]-c8bf53563485)
> _Not provided._

2. **Step:**
> User select data from drop-down and click on Get Details button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see details with checkboxes and Submit button
> _Not provided._
> ![](index.php?/attachments/get/5ca41f90-8e9e-[NUMERIC TEST DATA REDACTED]-abed-8ff8b632a0fc)
> _Not provided._

3. **Step:**
> User select checkbox and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/22713b27-ae59-413d-b9a1-14de0900377c)
> _Not provided._
   **Expected:**
> User can see a message 'The notification center has been successfully configured.'
> _Not provided._
> ![](index.php?/attachments/get/702dcb56-4e60-463f-89ae-d3d4cdd8a0ce)
> _Not provided._

### C8934512 - Verify Landing Page Master

- Section: Landing Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934512](https://internationalsos.testrail.net/index.php?/cases/view/8934512)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Landing Page
> _Not provided._
   **Expected:**
> User navigated to Landing Page Master
> _Not provided._
> ![](index.php?/attachments/get/4573a2a6-34df-4e51-[NUMERIC TEST DATA REDACTED]-62fe322014d4)
> _Not provided._
> And user can see contents:
> 1. Owner Company - drop-down
> 2. Profile - drop-down
> 3. Show only Enabled - Checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8934513 - Validation check on Landing Page Master

- Section: Landing Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934513](https://internationalsos.testrail.net/index.php?/cases/view/8934513)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Landing Page
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Landing Page Master
> _Not provided._
> ![](index.php?/attachments/get/1928506f-c913-42b4-9f2d-19b51fce5648)
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User select data from Owner Company drop down and click on Search button (No configuration available for company)
   **Expected:**
> User can see a message 'There are no Landing Page configuration available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/08871f7d-40e8-48a9-988a-e942caa34572)
> _Not provided._

3. **Step:**
> User select checkbox 'Show only Enabled' and click on search button
   **Expected:**
> User can see results based on selected criteria
> _Not provided._
> ![](index.php?/attachments/get/eae4db80-70e7-4e2c-ba99-6c715714b114)
> _Not provided._

4. **Step:**
> User select data from drop-down Owner Company and Profile, select checkbox 'Show only Enabled' and click on reset button
> _Not provided._
> ![](index.php?/attachments/get/dad14a12-f1f0-[NUMERIC TEST DATA REDACTED]-b0a1-4032e8819290)
> _Not provided._
   **Expected:**
> All fields gets cleared
> _Not provided._
> _Not provided._
> _Not provided._

5. **Step:**
> User select data from drop-down Owner Company and Profile and click on Submit button (landing page configuration already exists)
> _Not provided._
> ![](index.php?/attachments/get/003da305-10ec-4f91-8d18-25fa0c48bbfd)
> _Not provided._
   **Expected:**
> User can see a message 'The landing page configuration already exists in the system'
> _Not provided._
> ![](index.php?/attachments/get/9a8a0f01-c5cc-45a5-a89c-9af6317cfce5)
> _Not provided._
> _Not provided._

### C8934514 - User is successfully able to add Landing Page Master

- Section: Landing Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934514](https://internationalsos.testrail.net/index.php?/cases/view/8934514)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Dashboard --&gt; Landing Page
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Landing Page Master
> ![](index.php?/attachments/get/ac[PHONE/NUMBER REDACTED]f0b-8a1e-4aae0ff7b31e)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table
> _Not provided._
> ![](index.php?/attachments/get/0540efc1-bd38-[NUMERIC TEST DATA REDACTED]-8ce4-7ae30e874fd3)
> _Not provided._
> Columns: Owner Company, Profile, Enabled?
> Buttons: Submit and Cancel
> _Not provided._
> _Not provided._

3. **Step:**
> User select data from drop-down Owner Company and Profile and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/b6481233-43d2-48ba-a16c-c65a3a7616ff)
> _Not provided._
   **Expected:**
> User can see a success message

4. **Step:**
> User click on cancel button
   **Expected:**
> User navigated to Landing Page Master
> _Not provided._
> ![](index.php?/attachments/get/dfd40b69-d6a2-42ad-8bee-e1be9a123bab)
> _Not provided._

### C8934515 - Verify Static Content

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934515](https://internationalsos.testrail.net/index.php?/cases/view/8934515)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Static Content
> _Not provided._
   **Expected:**
> User navigated to Mobile Static Content Master
> _Not provided._
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Owner Company - drop-down
> 2. Search, Reset - Button
> _Not provided._

### C8934516 - Validation check on Mobile Static Content Master

- Section: Static Content
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934516](https://internationalsos.testrail.net/index.php?/cases/view/8934516)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Static Content
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Mobile Static Content Master
> ![](index.php?/attachments/get/6e71db08-ca56-4fcf-9c09-62363ea6bb3c)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Search button without select Owner Company drop-down
   **Expected:**
> User can see a message 'The Company is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/f8fb5da5-af1e-4c1e-a236-f648312e6f30)
> _Not provided._

3. **Step:**
> 1. User select data from Owner Company drop down and click on search button
> 2. User click on Add button
> 3. User click on Submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see validation message
> _Not provided._
> The menu name is mandatory and cannot be blank.
> The URL is mandatory and cannot be left blank.
> _Not provided._
> ![](index.php?/attachments/get/732124ab-d65a-43e7-b573-c755f3edb846)
> _Not provided._

4. **Step:**
> 1. User select data from Owner Company drop down and click on search button
> 2. User click on Edit button
> 3. Click on Submit button (Empty field will be empty)
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see validation message 'The menu name is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/62a718c4-1bf3-[NUMERIC TEST DATA REDACTED]-981b-c[PHONE/NUMBER REDACTED])
> _Not provided._

5. **Step:**
> 1. User select data from Owner Company drop down and click on search button
> 2. User click on Edit button
> 3. Click on Cancel button (Empty field will be empty)
   **Expected:**
> User navigated to Mobile Static Content Master
> _Not provided._
> ![](index.php?/attachments/get/420eb202-ba54-4fda-a8fa-e0334a4ff605)
> _Not provided._

### C8934517 - User is successfully able to create Mobile Static Content

- Section: Static Content
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934517](https://internationalsos.testrail.net/index.php?/cases/view/8934517)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Mobile Static Content Master
> _Not provided._
> ![](index.php?/attachments/get/7042d3bb-7af6-[NUMERIC TEST DATA REDACTED]-8abf-73f8260076ad)
> _Not provided._

2. **Step:**
> User select data from drop-down Owner Company and click on search button
   **Expected:**
> User can see Add button
> _Not provided._
> ![](index.php?/attachments/get/67b10c20-a238-44b9-83af-48818ee78371)
> _Not provided._

3. **Step:**
> User click on Add button
   **Expected:**
> User can see a table with editable fields
> _Not provided._
> ![](index.php?/attachments/get/017a66ed-3cd3-41d8-b9fc-2d833e314f80)
> _Not provided._

4. **Step:**
> User enter data in Menu Name and URL location or path text fields and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/ad4800c[PHONE/NUMBER REDACTED]e6f-4b58bd0df1eb)
> _Not provided._
   **Expected:**
> User can see a success message 'The menu test has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/08ef0cb7-fabf-46f3-b305-4df7f1ee4b6c)
> _Not provided._
> _Not provided._

### C8934518 - User is able to edit Mobile Static Content Master

- Section: Static Content
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934518](https://internationalsos.testrail.net/index.php?/cases/view/8934518)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Static Content
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Mobile Static Content Master
> _Not provided._
> ![](index.php?/attachments/get/158403e1-ac95-48b1-8f9a-4acd3a16aa56)
> _Not provided._

2. **Step:**
> User select data from drop-down Owner Company and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see Edit button
> _Not provided._
> ![](index.php?/attachments/get/192b65f3-[NUMERIC TEST DATA REDACTED]-427c-97d9-9f4dfb9d61af)
> _Not provided._

3. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a table with editable fields
> _Not provided._
> ![](index.php?/attachments/get/884fafa9-a0f9-46c1-[NUMERIC TEST DATA REDACTED]-3429d59eb69b)
> _Not provided._

4. **Step:**
> User modify details and click on Submit button
> _Not provided._
> ![](index.php?/attachments/get/5752c34f-3b2f-40f3-a5d6-fef2d98cbfa3)
> _Not provided._
   **Expected:**
> User can see a success message 'The menu test12 has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/dd544732-31fd-4d33-84d5-5070d80d3fe8)
> _Not provided._
> And user can see changed details

### C8934519 - Verify Menu Item

- Section: Menu Item
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934519](https://internationalsos.testrail.net/index.php?/cases/view/8934519)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Menu Item
> _Not provided._
   **Expected:**
> User navigated to Menu Item Master
> _Not provided._
> ![](index.php?/attachments/get/131ab57d-590b-48d1-b8c2-df6f059cca95)
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Owner Company - drop-down
> 2. Default Menu Name - drop-down
> 3. Alternate Menu Name - Text field
> 2. Search, Reset, Add - Button
> _Not provided._

### C8934520 - Validation check on Menu Item  Master

- Section: Menu Item
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934520](https://internationalsos.testrail.net/index.php?/cases/view/8934520)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Menu Item
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Menu Item Master
> _Not provided._
> ![](index.php?/attachments/get/2cf9909a-27f4-[NUMERIC TEST DATA REDACTED]-b6c2-0eea81669d67)
> _Not provided._

2. **Step:**
> User enter data in Alternate Menu Name text field (No menus exist) and click on Search button
   **Expected:**
> User can see a message 'There are no menus for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/7b4f4138-8a[PHONE/NUMBER REDACTED]-c9fab736af71)
> _Not provided._

3. **Step:**
> User enter special character in Alternate Menu Name text field (No menus exist) and click on Search button
   **Expected:**
> User can see a message 'Please enter a valid alternate menu item name'
> _Not provided._
> ![](index.php?/attachments/get/c6125224-f511-4c9e-89e3-33feb8ee1f8d)
> _Not provided._

4. **Step:**
> 1. User click on Add button
> 2. User click on Submit button without select drop-down
   **Expected:**
> User can see message
> _Not provided._
> The Company field is mandatory and cannot be left blank.
> The default menu name is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/8e74a6f9-dc14-40ee-[NUMERIC TEST DATA REDACTED]-08ea4d4528ea)
> _Not provided._

### C8934521 - User is successfully able to add Menu Item

- Section: Menu Item
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934521](https://internationalsos.testrail.net/index.php?/cases/view/8934521)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Menu Item
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Menu Item Master
> _Not provided._
> ![](index.php?/attachments/get/a6ef2fbf-[NUMERIC TEST DATA REDACTED]-48e4-a111-49b32f4b4e91)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> ![](index.php?/attachments/get/8b4fada9-3f33-44f7-[NUMERIC TEST DATA REDACTED]-c97a3c21a187)
> _Not provided._
   **Expected:**
> User can see a table and contents in table
> _Not provided._
> ![](index.php?/attachments/get/2c505144-18e3-[NUMERIC TEST DATA REDACTED]-a574-ce3bf333fdcb)
> _Not provided._
> Columns : Owner Company, Default Menu Name, Alternate Menu Name
> Button: Submit and Cancel
> _Not provided._
> _Not provided._

3. **Step:**
> User enter details in drop down Owner Company, Default Menu Name and text box Alternate Menu Name
> _Not provided._
> ![](index.php?/attachments/get/a01f7997-d00a-4b68-bf19-e247f4a20516)
> _Not provided._
> And click on Submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The menu has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/aae3f606-[NUMERIC TEST DATA REDACTED]-43c6-bb84-282589ebad87)
> _Not provided._

### C8934522 - User is successfully able to edit Menu Item

- Section: Menu Item
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934522](https://internationalsos.testrail.net/index.php?/cases/view/8934522)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Menu Item
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Menu Item Master
> _Not provided._
> ![](index.php?/attachments/get/4e051394-48cf-449d-af85-606599e0bd76)
> _Not provided._

2. **Step:**
> User select data from drop-down Owner Company and click on search button
   **Expected:**
> User can see search results with Edit button
> _Not provided._
> ![](index.php?/attachments/get/9db1243d-42ed-48d1-addf-5fa3796108ac)
> _Not provided._

3. **Step:**
> User click on Edit button
   **Expected:**
> Alternate Menu Name text filed gets editable
> _Not provided._
> ![](index.php?/attachments/get/60e[PHONE/NUMBER REDACTED]-bc3b-2d700eb87f44)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
   **Expected:**
> User can see a success message 'The menu COVID-19 Vaccination has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/a90ddd87-610a-[NUMERIC TEST DATA REDACTED]-bd38-1aeee7e67734)
> _Not provided._

### C8934523 - User is successfully able to Delete Menu Item

- Section: Menu Item
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934523](https://internationalsos.testrail.net/index.php?/cases/view/8934523)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Company --&gt; Mobile --&gt; Menu Item
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Menu Item Master
> _Not provided._
> ![](index.php?/attachments/get/98aada26-f0d2-40b1-974e-e532adccb69d)
> _Not provided._

2. **Step:**
> User select data from drop-down Owner Company and click on search button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see search results with Delete button
> _Not provided._
> ![](index.php?/attachments/get/00e2da8c-e385-417b-97cb-b8f28e0ecd7e)
> _Not provided._

3. **Step:**
> User click on delete button
   **Expected:**
> User can see a message in popup window
> _Not provided._
> ![](index.php?/attachments/get/8fea4ec9-41ed-4d8d-8bed-3a89b7a6bc9c)
> _Not provided._

4. **Step:**
> User click on OK button in popup window
> _Not provided._
   **Expected:**
> User can see a message 'The menu has been successfully deleted from the system.'
> _Not provided._
> ![](index.php?/attachments/get/05556d4f-6b57-432a-86cb-0b7f9f685e22)
> _Not provided._

### C8934526 - Verify Medical Center Master

- Section: Medical Center
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934526](https://internationalsos.testrail.net/index.php?/cases/view/8934526)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Medical Center
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> ![](index.php?/attachments/get/44cadda7-cfb8-48c0-b8fa-b2e84188cdfe)
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Medical Center name - Text field
> 2. Type - drop-down
> 3. Show only Active - Checkbox
> 4. Country - drop-down
> 5. Search, Reset, Add - Button
> _Not provided._

### C8934527 - Validation check on Medical Center Master

- Section: Medical Center
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934527](https://internationalsos.testrail.net/index.php?/cases/view/8934527)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Medical Center
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> ![](index.php?/attachments/get/008d[PHONE/NUMBER REDACTED]a2-bdd2-eb6604aa940f)
> _Not provided._

2. **Step:**
> User enter special characters on Medical Center name text field
   **Expected:**
> User can see message 'Please enter a valid Medical Center Name.'
> _Not provided._
> ![](index.php?/attachments/get/0ebd73ab-51d7-44b8-b89f-4be96ba279f8)
> _Not provided._

3. **Step:**
> User enter details on Medical Center name, select Type, Check the checkbox, select country and click on reset button
> _Not provided._
> ![](index.php?/attachments/get/eda6a1ba-27d9-[NUMERIC TEST DATA REDACTED]-a18f-d3948d40201a)
> _Not provided._
   **Expected:**
> All fields value gets cleared
> _Not provided._
> ![](index.php?/attachments/get/5b18b43e-8bcd-46a1-[NUMERIC TEST DATA REDACTED]-73e3a3918b28)
> _Not provided._

4. **Step:**
> User select Country drop down and click on search button (No medical centers available for this selected country)
   **Expected:**
> User can see a message 'There are no medical centers available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/912082e0-57b5-[NUMERIC TEST DATA REDACTED]-a8cc-b3546e248f1c)
> _Not provided._

5. **Step:**
> User click on Add button and click on submit button without select mandatory details
   **Expected:**
> User can see message:
> _Not provided._
> The Medical Center Name is mandatory and cannot be blank.
> The Last Name [VALUE REDACTED] and cannot be blank.
> The First Name [VALUE REDACTED] and cannot be blank.
> The complete postal address is mandatory and cannot be blank.
> The city is mandatory and cannot be blank.
> The Country is mandatory and cannot be blank.
> The Postal Code is mandatory and cannot be blank.
> The Phone Number [VALUE REDACTED] and cannot be blank.
> Please enter a valid E-mail Address.
> _Not provided._
> ![](index.php?/attachments/get/c63f398b-daf5-4b0b-b5a1-4bd6ddfa264c)
> _Not provided._

6. **Step:**
> User click on Add button and enter specials characters in text fields
   **Expected:**
> User can see message:
> _Not provided._
> Please enter a valid Medical Center Name.
> The complete postal address is mandatory and cannot be blank.
> Please enter a valid E-mail Address.
> _Not provided._
> ![](index.php?/attachments/get/deecd8c8-d7d5-4a71-[NUMERIC TEST DATA REDACTED]-f3fb9a814123)
> _Not provided._

7. **Step:**
> User click on cancel button on Medical Center Master page
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> ![](index.php?/attachments/get/525f5864-ecc8-[NUMERIC TEST DATA REDACTED]-adc6-1f8d06839ea6)
> _Not provided._

### C8934535 - User is successfully able to add Medical Center

- Section: Medical Center
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934535](https://internationalsos.testrail.net/index.php?/cases/view/8934535)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Medical Center
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> ![](index.php?/attachments/get/3671a0ea-[NUMERIC TEST DATA REDACTED]-43c7-9ba8-bb1314dcf00b)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Medical Center Master page
> _Not provided._
> ![](index.php?/attachments/get/2e1924cd-8ab0-4bdd-8ebb-5d8839b59709)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/5a23e0e4-[NUMERIC TEST DATA REDACTED]-40f3-b716-7f440686938c)
> _Not provided._
   **Expected:**
> User can see a success message

4. **Step:**
> User click on cancel button on Medical Center Master page
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> ![](index.php?/attachments/get/b574f053-c2ef-482a-a684-8407cae15178)
> _Not provided._

### C8934552 - User is successfully able to edit Medical Center

- Section: Medical Center
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934552](https://internationalsos.testrail.net/index.php?/cases/view/8934552)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Medical Center
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/b028ff93-06d9-43f6-a7bd-51efa6f92f8a)
> _Not provided._

2. **Step:**
> Type Medical Center name and user click on search button
   **Expected:**
> Search result gets displayed and user can see edit button
> _Not provided._
> ![](index.php?/attachments/get/f6c52b0a-f5bc-446f-b5db-e8bb75a8217c)
> _Not provided._

3. **Step:**
> User click on edit button
   **Expected:**
> User navigated to Medical Center Master page
> _Not provided._
> ![](index.php?/attachments/get/90c90897-36ee-49c2-aafe-c235deb58125)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
   **Expected:**
> User can see a message 'The Medical center Test has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/60c0c378-c6bd-454c-8c62-d0bde829c2da)
> _Not provided._

### C8934580 - Verify filters

- Section: Medical Center
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934580](https://internationalsos.testrail.net/index.php?/cases/view/8934580)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Medical Center
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical Center Master
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User enter data in Medical Center name text field and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/4f6a3b24-75f1-47b1-[NUMERIC TEST DATA REDACTED]-12b8ea02a715)
> _Not provided._

3. **Step:**
> User select data in type drop-down and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/ec93e05e-f7e3-44c1-[NUMERIC TEST DATA REDACTED]-160c5462a132)
> _Not provided._

4. **Step:**
> User select data in Country drop-down and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/e9c5bde5-49ae-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-ad68b55ce62a)
> _Not provided._

5. **Step:**
> User select checkbox 'show only active'
   **Expected:**
> Active records will be displayed
> _Not provided._
> ![](index.php?/attachments/get/8420f03e-c8f1-[NUMERIC TEST DATA REDACTED]-979c-05238aa7df1e)
> _Not provided._

### C8934582 - Verify Global MET

- Section: Global MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934582](https://internationalsos.testrail.net/index.php?/cases/view/8934582)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Global MET
> _Not provided._
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/020a[PHONE/NUMBER REDACTED]-b441-31de04e50296)
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Global MET Name - Text field
> 2. Show only Active - Checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8934583 - Validation check on Global MET

- Section: Global MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934583](https://internationalsos.testrail.net/index.php?/cases/view/8934583)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Global MET
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/dee9b6fa-36f8-4c04-bdda-2984d7c83b11)
> _Not provided._

2. **Step:**
> User enter special characters on Global MET Name text field and click on search button
   **Expected:**
> User can see message 'Please enter a valid Global MET Name.'
> _Not provided._
> ![](index.php?/attachments/get/70f0ac0d-[NUMERIC TEST DATA REDACTED]-49ad-b620-457591a9ad7f)
> _Not provided._

3. **Step:**
> User click on search button without enter data in Global MET Name text filed
> _Not provided._
> _Not provided._
   **Expected:**
> User can see message 'There are no Global METs available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/0bb6fe24-d7a6-[NUMERIC TEST DATA REDACTED]-81ad-12acacc76422)
> _Not provided._

4. **Step:**
> User enter data in Global MET Name text field, select checkbox and click on reset button
> _Not provided._
> ![](index.php?/attachments/get/9ca9185f-94cd-494c-b[PHONE/NUMBER REDACTED])
> _Not provided._
   **Expected:**
> All fields gets cleared
> _Not provided._
> _Not provided._
> _Not provided._

5. **Step:**
> 1. User click on Add button and navigated to Global MET (Medical Exam Type) Master
> 2. User click on submit button (Skip mandatory data)
   **Expected:**
> User can see message 'The Global MET Name is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/31f2661a-e5ea-49c4-b6be-2ff79721aa18)
> _Not provided._

### C8934584 - User is successfully able to add Global MET

- Section: Global MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934584](https://internationalsos.testrail.net/index.php?/cases/view/8934584)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Global MET
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/6bafc5f2-7a56-43e2-9f7e-2265a5c910ed)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/c05c7d45-b7f5-460e-9a54-f8731c4d5b13)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/2c77a8b0-61e4-41a0-a4de-bcedecad88bc)
> _Not provided._
   **Expected:**
> User can see a success message 'The Global MET test12 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/bd0fef18-[NUMERIC TEST DATA REDACTED]-4ce5-9ce1-fa4ac103a407)
> _Not provided._

4. **Step:**
> User click on cancel button on Medical Center Master page
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/7746f1b3-e4eb-4c6f-a2be-c4d90e7e1f99)
> _Not provided._

### C8934585 - Verify filters

- Section: Global MET
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934585](https://internationalsos.testrail.net/index.php?/cases/view/8934585)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Global MET
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Global MET (Medical Exam Type) Master
> _Not provided._
> ![](index.php?/attachments/get/e256d229-58c2-4a87-a923-bb44862d4601)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User enter data in Global MET Name text field and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/f9caf559-9c90-43d8-ba97-f5d919ce440f)
> _Not provided._

### C8934586 - Verify Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934586](https://internationalsos.testrail.net/index.php?/cases/view/8934586)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Fitness Conclusion
> _Not provided._
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/8d0eb0e7-a776-477d-aed2-cf9152d0d24c)
> _Not provided._
> _Not provided._
> And user can see contents:
> 1. Fitness Conclusion Name - Text field
> 2. Show only Active - Checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8934587 - Validation check on Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934587](https://internationalsos.testrail.net/index.php?/cases/view/8934587)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/aabc5882-bb04-[NUMERIC TEST DATA REDACTED]-891a-e300d512b2d3)
> _Not provided._

2. **Step:**
> User enter special characters on Fitness Conclusion Name text field and click on search button
   **Expected:**
> User can see message 'Please enter a valid Fitness Conclusion Name.'
> _Not provided._
> ![](index.php?/attachments/get/54ca2240-[NUMERIC TEST DATA REDACTED]-4b10-8c6f-d711755058a1)
> _Not provided._

3. **Step:**
> User enter data in Fitness Conclusion Name text field, select checkbox and click on reset button
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/2a99dbb5-5acd-436c-98b8-ab0794fdd47d)
   **Expected:**
> All fields gets cleared
> _Not provided._
> ![](index.php?/attachments/get/0c19d026-5d64-[NUMERIC TEST DATA REDACTED]-96aa-4e4343dca86f)
> _Not provided._

4. **Step:**
> 1. User click on Add button and navigated to Global MET (Medical Exam Type) Master
> 2. User click on submit button (Skip mandatory data)
> _Not provided._
> ![](index.php?/attachments/get/46960cd6-646c-40d3-810e-961920b6acf7)
> _Not provided._
   **Expected:**
> User can see message 'The Fitness Conclusion Name is mandatory and cannot be blank.'
> _Not provided._
> ![](index.php?/attachments/get/dcb4fc08-41cc-450c-b204-8ef8f5f88545)
> _Not provided._

### C8934588 - User is successfully able to add Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934588](https://internationalsos.testrail.net/index.php?/cases/view/8934588)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/2a0ec0cb-a29b-4a17-aec0-35c9855e387a)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/ef3180a7-8b46-442f-[NUMERIC TEST DATA REDACTED]-ac5127e81094)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/7c770460-9dd5-4fba-aff5-b139e5199615)
> _Not provided._
   **Expected:**
> User can see a success message 'The fitness conclusion test12 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/c[PHONE/NUMBER REDACTED]c55-10d48ee6d60a)
> _Not provided._

4. **Step:**
> User click on cancel button on Fitness Conclusion Master
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/fa9064a6-e79e-473f-a83c-06a5fd09779b)
> _Not provided._

### C8934589 - Verify filters on Fitness Conclusion

- Section: Fitness Conclusion
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934589](https://internationalsos.testrail.net/index.php?/cases/view/8934589)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Exam --&gt; Fitness Conclusion
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/62693afb-2d19-40e3-[NUMERIC TEST DATA REDACTED]-f541c0e327d7)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User enter data in Fitness Conclusion Name text field and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/e4864d18-[NUMERIC TEST DATA REDACTED]-4dea-ae39-31d53f49c288)
> _Not provided._

3. **Step:**
> User select checkbox 'show only active' and click on search button
   **Expected:**
> Search result gets displayed based on user input
> _Not provided._
> ![](index.php?/attachments/get/a1f0bb62-f6e6-4d9e-80b4-80d20f145964)
> _Not provided._

### C8934592 - Verify Blood Pressure/Cholestrol/BMI Master

- Section: BP/BM/Cholestrol
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934592](https://internationalsos.testrail.net/index.php?/cases/view/8934592)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; BP/BMI/Cholestrol
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/4c95d545-6fe0-[NUMERIC TEST DATA REDACTED]-91b0-86721960ae32)
> _Not provided._
> And user can see contents:
> 1. Master Type - drop-down
> 2. Category Name - text field
> 4. Search, Reset, Add - Button
> _Not provided._

### C8934593 - Validation check on Blood Pressure/Cholestrol/BMI Master

- Section: BP/BM/Cholestrol
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C8934593](https://internationalsos.testrail.net/index.php?/cases/view/8934593)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; BP/BMI/Cholestrol
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/d412f086-47fb-426a-b34b-24eb2d9e5e79)
> _Not provided._

2. **Step:**
> Enter data in Category Name text field and click on search button
   **Expected:**
> User can see a message 'There is no information available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/eaa00bd6-[NUMERIC TEST DATA REDACTED]-4a1b-87a1-3cbad00d2c9e)
> _Not provided._

3. **Step:**
> 1. User click on Add button and user can see a submit button
> 2. User click on submit button (Skip mandatory data)
   **Expected:**
> User can see a message:
> _Not provided._
> The master type is mandatory and cannot be blank.
> The category name is mandatory and cannot be blank.
> The minimum value is mandatory and cannot be blank.
> The maximum value is mandatory and cannot be blank
> _Not provided._
> ![](index.php?/attachments/get/6af13aa8-5e[PHONE/NUMBER REDACTED]-a3ce1c801031)
> _Not provided._

4. **Step:**
> User enter incorrect data in text fields - Category Name, Minimum Value and Maximum Value
> _Not provided._
> ![](index.php?/attachments/get/e0758095-23bc-494e-[NUMERIC TEST DATA REDACTED]-a75d39de836f)
> _Not provided._
   **Expected:**
> User can see alert message
> _Not provided._
> ![](index.php?/attachments/get/3b3c57a6-fcff-43d3-bc77-dd9848bbe4b1)
> _Not provided._

### C8934594 - User is successfully able to add Blood Pressure/Cholestrol/BMI

- Section: BP/BM/Cholestrol
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934594](https://internationalsos.testrail.net/index.php?/cases/view/8934594)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; BP/BMI/Cholestrol
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/3ca25732-db66-4c5e-[NUMERIC TEST DATA REDACTED]-686b1dc82d46)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/ef3180a7-8b46-442f-[NUMERIC TEST DATA REDACTED]-ac5127e81094)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/4b4ae8be-eb31-4f71-9d23-e74b39cf0565)
> _Not provided._
   **Expected:**
> User can see a success message 'The master item test1 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/c24f7794-e708-48c4-9bb3-9731e9338f8d)
> _Not provided._

4. **Step:**
> User click on cancel button on Fitness Conclusion Master
> _Not provided._
> ![](index.php?/attachments/get/aae261bc-dc5d-47cd-95b0-e54f892d6105)
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/2aa7ace9-dafb-4c0c-9ef3-8a99e52943f9)
> _Not provided._

### C8934595 - User is failed to add Blood Pressure/Cholesterol/BMI

- Section: BP/BM/Cholestrol
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934595](https://internationalsos.testrail.net/index.php?/cases/view/8934595)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; BP/BMI/Cholestrol
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> ![](index.php?/attachments/get/fa10f6f5-d13a-49be-a4df-baa9d7023815)
> _Not provided._

2. **Step:**
> User click on Add button
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Blood Pressure/Cholestrol/BMI Master
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/97a40bd7-183a-42d8-[NUMERIC TEST DATA REDACTED]-f46106e9f339)
> _Not provided._

3. **Step:**
> User enter mandatory details (item already exists in the system) and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message 'The BP/BMI/Cholesterol item already exists in the system.'
> _Not provided._
> ![](index.php?/attachments/get/15f1d91f-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-a2c5-3551f4e22e03)
> _Not provided._

### C8934596 - Verify Health Check Item page

- Section: Health Check Item
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934596](https://internationalsos.testrail.net/index.php?/cases/view/8934596)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Health Check Item
> _Not provided._
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]d-4ac7-aa92-7944cb526512)
> _Not provided._
> And user can see contents:
> 1. Health Check Item Name - text field
> 2. Show only Active - checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8934597 - Validation check on Health Check Item Master

- Section: Health Check Item
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C8934597](https://internationalsos.testrail.net/index.php?/cases/view/8934597)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Health Check Item
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/19ae76e2-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-b6cb-dc1cebe73fbd)
> _Not provided._

2. **Step:**
> Enter data in Health Check Item Name text field and click on search button (Item name not exist in the system)
   **Expected:**
> User can see a message 'There are no health check items available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-a119-4a94-b146-2b9e0765627c)
> _Not provided._

3. **Step:**
> 1. User click on Add button and user can see a submit button
> 2. User click on submit button (Skip mandatory data)
> _Not provided._
> ![](index.php?/attachments/get/4db70eab-54d5-45ce-864e-e0d7c984243c)
> _Not provided._
   **Expected:**
> User can see a message:
> _Not provided._
> The Health Check item name is mandatory and cannot be blank.
> The Group for a health check item is mandatory and cannot be blank.
> The Sub group for a health check item is mandatory and cannot be blank.
> The Item Type for a health check item is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/038058ab-538a-40ed-97a8-5cd28d7478c0)
> _Not provided._

4. **Step:**
> User enter special character in text fields - Health Check Item Name and enter details in mandatory fields and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/0ef1c89b-d896-4c13-ba34-d3e0a55127e3)
> _Not provided._
   **Expected:**
> User can see alert message:
> _Not provided._
> Please enter a valid Health Check Item Name.
> The International unit is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/9259f6d9-ef2d-4cec-9f5c-05e356a27b38)
> _Not provided._

### C8934621 - User is successfully able to add Health Check Item Master

- Section: Health Check Item
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8934621](https://internationalsos.testrail.net/index.php?/cases/view/8934621)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Health Check Item
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/a54ef934-8bbf-[NUMERIC TEST DATA REDACTED]-b8bb-6a9636efd52e)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/338e64ed-[NUMERIC TEST DATA REDACTED]-4ac2-95ec-45b8626d1d15)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/69dc93fe-14e7-[NUMERIC TEST DATA REDACTED]-8ba1-829a75051c8b)
> _Not provided._
   **Expected:**
> User can see a success message 'The Health Check item test12 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/a7c2d691-a106-48b8-85f9-9aa8cac03c0d)
> _Not provided._

4. **Step:**
> User click on cancel button on Health Check Item Master
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/e4a4b872-0ac4-[NUMERIC TEST DATA REDACTED]-837a-0028f53a0ae4)
> _Not provided._

### C8934622 - User is successfully able to edit Health Check Item Master

- Section: Health Check Item
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8934622](https://internationalsos.testrail.net/index.php?/cases/view/8934622)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Health Check Item
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Health Check Item Master
> _Not provided._
> ![](index.php?/attachments/get/a54ef934-8bbf-[NUMERIC TEST DATA REDACTED]-b8bb-6a9636efd52e)
> _Not provided._

2. **Step:**
> User enter data in text field and click on search button
> _Not provided._
> ![](index.php?/attachments/get/05f[PHONE/NUMBER REDACTED]e4c-bef8-4edd4e6d7675)
> _Not provided._
   **Expected:**
> Search results gets displayed and user can see edit button and a table with columns:
> _Not provided._
> Health Check Item Master, International Unit, Min Value, Max Value, Active?
> _Not provided._
> ![](index.php?/attachments/get/fd75298b-3fe3-[NUMERIC TEST DATA REDACTED]-a854-7c4b51d4cdf4)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Add/Modify Health Check Item section
> _Not provided._
> ![](index.php?/attachments/get/74d20167-3d2b-4fd5-9bec-62bf1d2d7ecd)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
   **Expected:**
> user can see a message 'The Health Check item test12 has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/7c2f2562-571d-478f-8e05-e30f1c6a7e34)
> _Not provided._

### C8935136 - Verify Medical History page

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935136](https://internationalsos.testrail.net/index.php?/cases/view/8935136)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Medical History
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/20d5f1d4-a4b6-488c-9bde-b74373d388d7)
> _Not provided._
> And user can see contents:
> 1. Medical History Item Name - text field
> 2. Show only Active - checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8935137 - Validation check on Medical History Master

- Section: Medical History
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935137](https://internationalsos.testrail.net/index.php?/cases/view/8935137)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Medical History
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/2672e994-e4a5-4aac-a9ca-0f192f984645)
> _Not provided._

2. **Step:**
> Enter data in Medical history Item Name text field and click on search button (Item name not exist in the system)
   **Expected:**
> User can see a message 'There is no information available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/119dfc69-f13e-[NUMERIC TEST DATA REDACTED]-b8f9-c932fc2e3aee)
> _Not provided._

3. **Step:**
> 1. User click on Add button and user can see a submit button
> 2. User click on submit button (Skip mandatory data)
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message:
> _Not provided._
> The Medical History Name is mandatory and cannot be blank.
> The type for the Medical History Item is mandatory and cannot be blank.
> Please select a Medical History Item Group.
> _Not provided._
> ![](index.php?/attachments/get/461b334a-df75-44d0-be2c-583dca53d69a)
> _Not provided._

4. **Step:**
> User enter special character in text fields - Medical History Item Name and enter details in mandatory fields and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see alert message:
> _Not provided._
> Please enter a valid Medical History Item Name.
> _Not provided._
> ![](index.php?/attachments/get/2d7b9ec1-418d-4cfd-b141-c8d71284410c)
> _Not provided._

### C8935138 - User is successfully able to add Medical History Master

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935138](https://internationalsos.testrail.net/index.php?/cases/view/8935138)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Medical History
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/9221c[PHONE/NUMBER REDACTED]-a255-565bd0da8a9c)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/06cf5b2d-ad0e-4cd1-be69-bc78c97a81e4)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> ![](index.php?/attachments/get/28a0c9d3-d502-469a-801a-43e39c976bec)
> _Not provided._
   **Expected:**
> User can see a success message 'The Medical History Item test has been successfully created in the system.'
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User click on cancel button on Health Check Item Master
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/61e20fc0-f566-4d66-a159-b937317dd061)
> _Not provided._

### C8935140 - User is successfully able to edit Medical History Master

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935140](https://internationalsos.testrail.net/index.php?/cases/view/8935140)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Medical History
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/9221c[PHONE/NUMBER REDACTED]-a255-565bd0da8a9c)
> _Not provided._

2. **Step:**
> User enter data in Medical History Item Name text field and click on search button
   **Expected:**
> User can see search result with edit button
> _Not provided._
> ![](index.php?/attachments/get/50d57345-61eb-[NUMERIC TEST DATA REDACTED]-9aba-bd413f9ede44)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
   **Expected:**
> User navigated to Medical History Master page
> _Not provided._
> ![](index.php?/attachments/get/2a4ed48d-[NUMERIC TEST DATA REDACTED]-4fc4-9ca9-042d47b0e9e9)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User edit details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Medical History Item test has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/d6db[PHONE/NUMBER REDACTED]d8a-80f0944579a7)
> _Not provided._

### C8935141 - Verify Medical History page

- Section: Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935141](https://internationalsos.testrail.net/index.php?/cases/view/8935141)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/9e434d6d-99d0-[NUMERIC TEST DATA REDACTED]-919f-2e3f12eae506)
> _Not provided._
> And user can see contents:
> 1. Vaccination  Name - text field
> 2. Show only Active - checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8935142 - Validation check on Medical History Master

- Section: Vaccination
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935142](https://internationalsos.testrail.net/index.php?/cases/view/8935142)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master page
> _Not provided._
> ![](index.php?/attachments/get/b9cb54b9-454c-45f8-8a00-6732528f79e4)
> _Not provided._

2. **Step:**
> Enter data in Vaccination Name text field and click on search button (Item name not exist in the system)
   **Expected:**
> User can see a message 'There are no vaccinations available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/ab41c3d1-f1c7-462f-b838-d3092c94d74f)
> _Not provided._

3. **Step:**
> 1. User click on Add button and user can see a submit button
> 2. User click on submit button (Skip mandatory data)
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message:
> _Not provided._
> The Vaccine name is mandatory and cannot be blank.
> The Frequency is mandatory and cannot be blank.
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/c24e6661-4da5-[NUMERIC TEST DATA REDACTED]-acbf-9d7499cd6d75)

4. **Step:**
> User enter special character in text fields - Medical History Item Name and enter details in mandatory fields and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see alert message:
> _Not provided._
> Please enter a valid Vaccination Name.
> Please enter a valid Frequency.
> _Not provided._
> ![](index.php?/attachments/get/06d6cb3e-dc92-4d3d-be8e-73f70b1b0a97)
> _Not provided._

### C8935143 - User is successfully able to add Medical History Master

- Section: Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935143](https://internationalsos.testrail.net/index.php?/cases/view/8935143)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/d16e21f1-cf6d-[NUMERIC TEST DATA REDACTED]-9b37-20ca2dd84cc7)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/a3bf76c7-[NUMERIC TEST DATA REDACTED]-4f85-83ce-a2ce4a4dfbc2)
> _Not provided._
> _Not provided._
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Vaccine test has been successfully created in the system.
> '
> ![](index.php?/attachments/get/d8694c3e-384e-4d31-826f-a73a462b8444)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User click on cancel button on Vaccination Master
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/9898a9d4-dc73-489f-9a14-9ee66edfcbf5)
> _Not provided._

### C8935144 - User is successfully able to edit Medical History Master

- Section: Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935144](https://internationalsos.testrail.net/index.php?/cases/view/8935144)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/cf5edca9-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-acdb-6aa3c6598e8c)
> _Not provided._

2. **Step:**
> User enter data in Vaccination Name text field and click on search button
   **Expected:**
> User can see search result with edit button
> _Not provided._
> ![](index.php?/attachments/get/d4784b19-41d5-4b5e-beb9-ff269dc185fd)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/aabd0028-71ab-[NUMERIC TEST DATA REDACTED]-8e40-eeb8d5c7f328)
> _Not provided._
> _Not provided._

4. **Step:**
> User edit details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Vaccine testone has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/0ada0b7b-51db-41e7-9aff-b20ab5e40e82)
> _Not provided._

### C8935148 - User is failed to edit Vaccination

- Section: Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935148](https://internationalsos.testrail.net/index.php?/cases/view/8935148)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/cf5edca9-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-acdb-6aa3c6598e8c)
> _Not provided._

2. **Step:**
> User enter data in Vaccination Name text field and click on search button
   **Expected:**
> User can see search result with edit button
> _Not provided._
> ![](index.php?/attachments/get/6aca6d75-[NUMERIC TEST DATA REDACTED]-4ed7-b2cd-c470d3883d7f)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
   **Expected:**
> User can see fields
> _Not provided._
> ![](index.php?/attachments/get/f42fe3fa-051f-44a0-957a-dda295b7f372)
> _Not provided._
> _Not provided._

4. **Step:**
> User edit details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see validation message
> _Not provided._
> Please enter a valid Vaccination Name.
> Please enter a valid Frequency.
> ![](index.php?/attachments/get/610c0e4b-deff-4aa5-b1db-5647afa4e31d)
> _Not provided._

### C8935150 - User is failed to edit Medical History Master

- Section: Medical History
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935150](https://internationalsos.testrail.net/index.php?/cases/view/8935150)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Medical History
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Medical History Master
> _Not provided._
> ![](index.php?/attachments/get/9221c[PHONE/NUMBER REDACTED]-a255-565bd0da8a9c)
> _Not provided._

2. **Step:**
> User enter data in Medical History Item Name text field and click on search button
   **Expected:**
> User can see search result with edit button
> _Not provided._
> ![](index.php?/attachments/get/50d57345-61eb-[NUMERIC TEST DATA REDACTED]-9aba-bd413f9ede44)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED]e-43c1-ae93-1d96f60641ad)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User edit details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Medical History Item test has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/608dd712-196d-[NUMERIC TEST DATA REDACTED]-a456-4e8fd1c99210)
> _Not provided._

### C8935205 - Verify Vaccination Reminder page

- Section: Vaccination Reminder
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935205](https://internationalsos.testrail.net/index.php?/cases/view/8935205)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination Reminder
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder Master
> _Not provided._
> ![](index.php?/attachments/get/af13f063-a014-43d1-ae82-c940fc16e0fe)
> _Not provided._
> And user can see contents:
> 1. Reminder Type - drop down field
> 2. Show only Active - checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8935206 - Validation check on vaccination reminder page

- Section: Vaccination Reminder
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935206](https://internationalsos.testrail.net/index.php?/cases/view/8935206)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination Reminder
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder page
> _Not provided._
> ![](index.php?/attachments/get/6270dca9-1fef-[NUMERIC TEST DATA REDACTED]-9a67-b707459e740b)
> _Not provided._

2. **Step:**
> Select Reminder type from drop-down and click on search button (If no reminder exist) Or show only active
   **Expected:**
> User can see a message 'There are no vaccination reminders available for the search performed.
> '
> _Not provided._
> ![](index.php?/attachments/get/81e24e5e-4b98-4bba-9d03-50615f38e4d0)  ![](index.php?/attachments/get/a35a11a4-a159-470d-bff0-2889481a5dc8)
> _Not provided._

3. **Step:**
> 1. User click on Add button and user can see a submit button
> 2. User click on submit button (Skip mandatory data)
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message:
> _Not provided._
> The Reminder Type is mandatory and cannot be blank.
> Please enter the frequency in days.
> _Not provided._
> ![](index.php?/attachments/get/76a754a3-7ecd-46a5-a826-324e6d3d1d90)
> _Not provided._

4. **Step:**
> User enter special character in text fields - E-mail Frequency and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see alert message:
> _Not provided._
> Please enter the E-mail Frequency in days between -999 and 999.
> _Not provided._
> ![](index.php?/attachments/get/d4ba8575-d550-4c4e-[NUMERIC TEST DATA REDACTED]-8158bc94ff74)
> _Not provided._

### C8935207 - User is successfully able to add Vaccination Reminder Master

- Section: Vaccination Reminder
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935207](https://internationalsos.testrail.net/index.php?/cases/view/8935207)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination Reminder
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder Master
> _Not provided._
> ![](index.php?/attachments/get/ddc4f4da-8aa5-46ed-ae51-725c76ec67ff)
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/ee39d139-[NUMERIC TEST DATA REDACTED]-4f3c-b677-1accd95d693c)
> _Not provided._
> _Not provided._
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Reminder Type Reminder Type1 has been successfully created in the system.'
> _Not provided._
> ![](index.php?/attachments/get/81ff403f-2a46-48d7-9d7f-c571b93a3d22)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User click on cancel button on Vaccination Reminder Master
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Master
> _Not provided._
> ![](index.php?/attachments/get/1aad840a-d419-4fd5-9d3a-6db12d311dc0)
> _Not provided._

### C8935208 - User is successfully able to edit Vaccination Reminder Master

- Section: Vaccination Reminder
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935208](https://internationalsos.testrail.net/index.php?/cases/view/8935208)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination Reminder
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder Master
> _Not provided._
> ![](index.php?/attachments/get/ddc4f4da-8aa5-46ed-ae51-725c76ec67ff)
> _Not provided._

2. **Step:**
> User select Reminder Type from drop-down and click on search button
   **Expected:**
> User can see table with edit button
> _Not provided._
> ![](index.php?/attachments/get/210b7224-d172-4ec1-9a07-9ac8f916242c)
> _Not provided._
> _Not provided._
> _Not provided._

3. **Step:**
> User click on edit button
   **Expected:**
> User can see editable fields
> _Not provided._
> ![](index.php?/attachments/get/f94b1ea3-5fbc-[NUMERIC TEST DATA REDACTED]-8bcc-bcdd0cd88fd9)
> _Not provided._

4. **Step:**
> User modify details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The Reminder Type Reminder Type1 has been successfully updated in the system.'
> _Not provided._
> ![](index.php?/attachments/get/563616b8-2e6a-4be1-8dc9-b006be7c265a)
> _Not provided._
> _Not provided._
> _Not provided._

5. **Step:**
> User click on cancel button on Vaccination Reminder Master
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder Master page
> _Not provided._
> ![](index.php?/attachments/get/1aad840a-d419-4fd5-9d3a-6db12d311dc0)
> _Not provided._

### C8935209 - User is failed to edit Vaccination Reminder Master

- Section: Vaccination Reminder
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935209](https://internationalsos.testrail.net/index.php?/cases/view/8935209)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Medical Data --&gt; Vaccination Reminder
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Vaccination Reminder Master
> _Not provided._
> ![](index.php?/attachments/get/cf5edca9-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-acdb-6aa3c6598e8c)
> _Not provided._

2. **Step:**
> User select Reminder Type from drop-down and click on search button
   **Expected:**
> User can see search result with edit button
> _Not provided._
> ![](index.php?/attachments/get/6aca6d75-[NUMERIC TEST DATA REDACTED]-4ed7-b2cd-c470d3883d7f)
> _Not provided._

3. **Step:**
> User click on edit button
> _Not provided._
   **Expected:**
> User can see fields for modification
> _Not provided._
> ![](index.php?/attachments/get/f42fe3fa-051f-44a0-957a-dda295b7f372)
> _Not provided._
> _Not provided._

4. **Step:**
> User edit special characters on text fields and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see validation message
> _Not provided._
> Please enter the E-mail Frequency in days between -999 and 999.
> _Not provided._
> ![](index.php?/attachments/get/3c19b82c-e98a-43e1-9b50-282690c52381)
> _Not provided._

### C8935210 - Verify Code Master page

- Section: Code Description
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935210](https://internationalsos.testrail.net/index.php?/cases/view/8935210)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Code Description
> _Not provided._
   **Expected:**
> User navigated to Code Master page
> _Not provided._
> ![](index.php?/attachments/get/0d92ff44-b5ff-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-7e59bd27b3ac)
> _Not provided._
> And user can see contents:
> 1. Code Type - drop down field
> 2. Description - Text field
> 3. Show only Active - checkbox
> 4. Search, Reset, Add - Button
> _Not provided._

### C8935211 - Validation check on Code Master page

- Section: Code Description
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935211](https://internationalsos.testrail.net/index.php?/cases/view/8935211)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Code Description
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master page
> _Not provided._
> ![](index.php?/attachments/get/ed7d74c5-[NUMERIC TEST DATA REDACTED]-4f68-9ac1-2049b0102699)
> _Not provided._

2. **Step:**
> User enter special character in Description text field and click on search button (If no reminder exist) Or show only active
   **Expected:**
> user can see a message 'There are no codes available for the search performed.'
> _Not provided._
> ![](index.php?/attachments/get/ebc63368-9e83-409b-adcb-d111ec942cd7)
> _Not provided._

3. **Step:**
> User select checkbox as show only active and click on search button
   **Expected:**
> User can see active records
> _Not provided._
> ![](index.php?/attachments/get/ad47e6e6-19cd-4eb2-[NUMERIC TEST DATA REDACTED]-f9c4e9255952)
> _Not provided._

4. **Step:**
> 1. User click on Add button and user can see a submit button (Skip mandatory data)
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a message:
> _Not provided._
> The code type is mandatory and cannot be blank.
> The description is mandatory and cannot be blank.
> The abbreviation is mandatory and cannot be blank.
> _Not provided._
> ![](index.php?/attachments/get/50ac0e47-f191-475e-806f-3d9501c13ee0)
> _Not provided._

5. **Step:**
> User enter special character in text fields - Abbreviation and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see alert message:
> _Not provided._
> Please enter only alphabets in the 'Abbreviation' of the code.
> _Not provided._
> ![](index.php?/attachments/get/ae0d7294-[NUMERIC TEST DATA REDACTED]-4c[PHONE/NUMBER REDACTED]ecce8c0)
> _Not provided._

### C8935212 - User is successfully able to add Code Master page

- Section: Code Description
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935212](https://internationalsos.testrail.net/index.php?/cases/view/8935212)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Code Description
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master page
> _Not provided._
> ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Add button
   **Expected:**
> User can see a table with submit and cancel button
> _Not provided._
> ![](index.php?/attachments/get/f87d16d1-9d1d-4a27-a69c-b96e66f1e6cb)
> _Not provided._

3. **Step:**
> User enter mandatory details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The master item @ has been successfully created in the system.
> '
> _Not provided._
> ![](index.php?/attachments/get/f43fa8a8-[NUMERIC TEST DATA REDACTED]-4e58-b264-8ab82a675692)
> _Not provided._
> _Not provided._
> _Not provided._

4. **Step:**
> User click on cancel button on Vaccination Reminder Master
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master
> _Not provided._
> ![](index.php?/attachments/get/2673bbae-05df-[NUMERIC TEST DATA REDACTED]-[NUMERIC TEST DATA REDACTED]-a1b032f70a31)
> _Not provided._

### C8935213 - User is successfully able to edit Code Master page

- Section: Code Description
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935213](https://internationalsos.testrail.net/index.php?/cases/view/8935213)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Code Description
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master page
> _Not provided._
> ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
> _Not provided._
> _Not provided._

2. **Step:**
> User enter data in description and click on search button
   **Expected:**
> Search results gets displayed with edit button
> _Not provided._
> ![](index.php?/attachments/get/28d9e852-a9f0-4a08-[NUMERIC TEST DATA REDACTED]-f5386935bcbc)
> _Not provided._

3. **Step:**
> User click on edit button
   **Expected:**
> User can see editable fields with submit and cancel button
> _Not provided._
> ![](index.php?/attachments/get/ed116763-272e-4e2b-8ba0-8045b2f673c6)
> _Not provided._

4. **Step:**
> User edit details details and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see a success message 'The master item 12 has been successfully modified in the system.'
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-d271-4e4f-ac19-e15a2ad2ef02)
> _Not provided._
> _Not provided._
> _Not provided._

5. **Step:**
> User click on cancel button on Vaccination Reminder Master
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master
> _Not provided._
> ![](index.php?/attachments/get/35d6c043-e4d0-498c-9a31-3e8a51256785)
> _Not provided._

### C8935214 - User is failed to add or edit Code Master page

- Section: Code Description
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935214](https://internationalsos.testrail.net/index.php?/cases/view/8935214)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Code Description
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Code Master page
> _Not provided._
> ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
> _Not provided._
> _Not provided._

2. **Step:**
> User click on Add button and enter special characters in text field and click on submit button
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/7a7d7fe1-[NUMERIC TEST DATA REDACTED]-49da-[NUMERIC TEST DATA REDACTED]-88b735de8c0e)
> _Not provided._

3. **Step:**
> User search record, click on edit button, enter special characters in text field and click on submit button
> _Not provided._
> _Not provided._
> _Not provided._
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-8b08-46dd-[NUMERIC TEST DATA REDACTED]-f62d4e1a8494)
> _Not provided._
> _Not provided._
> _Not provided._

### C8935215 - Verify Encryption / Decryption Utility page

- Section: Encryption Utility
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935215](https://internationalsos.testrail.net/index.php?/cases/view/8935215)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Encryption Utility
> _Not provided._
   **Expected:**
> User navigated to Encryption / Decryption Utility page
> _Not provided._
> ![](index.php?/attachments/get/f13f5478-df89-463b-87ab-32a3207dfa2e)
> _Not provided._
> And user can see contents:
> 1. Decryption - Heading
> 2. Encrypted String - Text field
> 3. String to be encrypted - Label
> 4. Encryption - Heading
> 5. String to be encrypted - Text field
> 6. Encrypted String - Label
> 7. Decrypt and Encrypt - Button
> _Not provided._

### C8935228 - Validation check on Encryption / Decryption Utility page

- Section: Encryption Utility
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935228](https://internationalsos.testrail.net/index.php?/cases/view/8935228)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Encryption Utility
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Encryption / Decryption Utility page
> _Not provided._
> _Not provided._

2. **Step:**
> User enter special characters in Encrypted String text field
   **Expected:**
> User can see message 'The input is not a valid Base-64 string as it contains a non-base 64 character, more than two padding characters, or an illegal character among the padding characters.'
> _Not provided._
> ![](index.php?/attachments/get/3bc8b888-6cfe-[NUMERIC TEST DATA REDACTED]-a292-3faab81cb11a)
> _Not provided._

### C8935237 - User is successfully able to encrypt data

- Section: Encryption Utility
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935237](https://internationalsos.testrail.net/index.php?/cases/view/8935237)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on System Configuration --&gt; Encryption Utility
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Encryption / Decryption Utility page
> _Not provided._
> ![](index.php?/attachments/get/8ab9da4c-f9a[PHONE/NUMBER REDACTED]af504412df8)
> _Not provided._

2. **Step:**
> Enter data in 'Encrypted String' text field and click on Decrypt button
   **Expected:**
> User can see decrypted string

3. **Step:**
> Enter data in 'String to be encrypted' text field and click on Encrypt button
   **Expected:**
> User can see Encrypted string

### C8935245 - Verify Send Welcome E-mail page

- Section: Send Welcome Email
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935245](https://internationalsos.testrail.net/index.php?/cases/view/8935245)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Send Welcome E-mail
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Send Welcome E-mail Address page
> _Not provided._
> ![](index.php?/attachments/get/f2ae6153-b8ca-48c7-8ee7-be5e610c00db)
> _Not provided._
> And user can see two sections:
> 1. Send Welcome E-mail Address
> a. drop-down - Company
> b. Checkbox -  Include all employees that have already received Welcome E-mail but don't
> have created MedFit account yet
> c. Buttons: Get Details, Send-Email and Reset
> _Not provided._
> 2. Send Marketing E-mail
> a. drop-down - Company
> b. Checkbox -  Include all companies
> c. Buttons: Get Details, Send-Email and Reset
> _Not provided._
> _Not provided._

### C8935246 - Validation check in Send Welcome E-mail page

- Section: Send Welcome Email
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935246](https://internationalsos.testrail.net/index.php?/cases/view/8935246)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Send Welcome E-mail
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Send Welcome E-mail Address page
> _Not provided._
> ![](index.php?/attachments/get/a4007e32-199a-4ca5-ae85-ee06c2b8faeb)
> _Not provided._

2. **Step:**
> User select company from drop-down and click on get details button (section - Send Welcome E-mail Address)
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/ebbb0e87-[NUMERIC TEST DATA REDACTED]-47f9-[NUMERIC TEST DATA REDACTED]-ef4bc5f8e2bf)
> _Not provided._

3. **Step:**
> User select company from drop-down and click on get details button (section - Send Welcome E-mail Address)
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-a910-441a-af96-0eac000bc47b)
> _Not provided._

4. **Step:**
> User skip mandatory detail and click on 'Get Details' button
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/93c6821f-b928-45e6-8ae5-b[PHONE/NUMBER REDACTED])  ![](index.php?/attachments/get/d86caeca-97a2-4b05-b1e3-59968c5d4f78)
> _Not provided._

5. **Step:**
> User skip mandatory detail and click on 'Send E-mail' button
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/5e3ea477-[NUMERIC TEST DATA REDACTED]-4c79-ae5e-2aa4cfce42ad)  ![](index.php?/attachments/get/94c96f5a-6cfb-49bf-b56e-8c3e03171ced)
> _Not provided._

6. **Step:**
> User select data from drop down, select checkbox and click on Reset button
   **Expected:**
> All fields gets cleared

### C8935270 - User is successfully able to send E-mail

- Section: Send Welcome Email
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935270](https://internationalsos.testrail.net/index.php?/cases/view/8935270)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Send Welcome E-mail
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Send Welcome E-mail Address page
> _Not provided._
> ![](index.php?/attachments/get/fc2611c0-e686-47b9-8b66-6cb6a833ba2d)
> _Not provided._

2. **Step:**
> User select company from drop-down and click on 'Send E-mail' button
   **Expected:**
> User can see a success message 'The E-mail requests for the employees of Air Liquide have been added to the queue. It will be sent in a few minutes.'
> _Not provided._
> ![](index.php?/attachments/get/ed9de4cb-8ecf-4e4e-8fb3-dee3ebf36f14)  ![](index.php?/attachments/get/1dc2ec21-dd96-4a31-a388-4a663681ddf2)
> _Not provided._

### C8935271 - Verify Drop Box – Upload a Medical Report

- Section: Upload
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935271](https://internationalsos.testrail.net/index.php?/cases/view/8935271)

**Preconditions**
> User is on search employee page
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Drop Box --&gt; Upload
   **Expected:**
> User navigated to Drop Box – Upload a Medical Report
> _Not provided._
> _Not provided._
> _Not provided._
> And user can see two sections:
> _Not provided._
> _Not provided._
> - section - Please provide the Employee/Pre-Employee&rsquo;s Gin Number/Applicant ID
> - Drop-down -Owner company Name
> - Text field - GIN Number
> - Button: Get Details and Cancel
> _Not provided._

### C8935272 - Validation check on  Upload a Medical Report

- Section: Upload
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935272](https://internationalsos.testrail.net/index.php?/cases/view/8935272)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Drop Box --&gt; Upload
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Drop Box – Upload a Medical Report
> _Not provided._
> ![](index.php?/attachments/get/2751aa57-110a-[NUMERIC TEST DATA REDACTED]-8f23-b4f6178b5bc7)
> _Not provided._

2. **Step:**
> User select company from Owner company Name drop-down and click on Get Details button
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/e75e7c72-72bd-4ed9-89cc-8fc49b8de9eb)
> _Not provided._

3. **Step:**
> User enter GIN Number and click on Get Details button
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/22c5e45c-715f-440c-b9aa-0dabe0c18d43)
> _Not provided._

4. **Step:**
> User select company from Owner company Name drop-down, enter GIN Number and click on Get Details button (Incorrect match)
   **Expected:**
> User can see validation message
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/b6efbbd1-7d13-45de-befd-9f39510734fe)
> _Not provided._

### C8935273 - User is successfully able to upload file

- Section: Upload
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935273](https://internationalsos.testrail.net/index.php?/cases/view/8935273)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on Drop Box --&gt; Upload
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Drop Box – Upload a Medical Report
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/4637039c-49d3-42bf-a328-6e223d4cac97)
> _Not provided._

2. **Step:**
> User select company and GIN and click on get details button
   **Expected:**
> User can see some fields disabled and attach button for upload file
> _Not provided._
> ![](index.php?/attachments/get/e6524180-9da1-4bfb-a120-9ff6252d65c2)
> _Not provided._

3. **Step:**
> User upload file and click on attach button
   **Expected:**
> User can see a success message
> _Not provided._
> _Not provided._
> _Not provided._

### C8935274 - User is failed to upload file

- Section: Upload
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935274](https://internationalsos.testrail.net/index.php?/cases/view/8935274)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on Drop Box --&gt; Upload
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Drop Box – Upload a Medical Report
> _Not provided._
> _Not provided._
> ![](index.php?/attachments/get/4637039c-49d3-42bf-a328-6e223d4cac97)
> _Not provided._

2. **Step:**
> User select company and GIN and click on get details button
   **Expected:**
> User can see some fields disabled and attach button for upload file
> _Not provided._
> ![](index.php?/attachments/get/e6524180-9da1-4bfb-a120-9ff6252d65c2)
> _Not provided._

3. **Step:**
> User upload file (with incorrect format) and click on attach button
   **Expected:**
> User can see alert message
> _Not provided._
> _Not provided._
> _Not provided._

### C8935282 - Verify user can perform maintenance activity

- Section: Maintenance
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935282](https://internationalsos.testrail.net/index.php?/cases/view/8935282)

**Preconditions**
> Exam of the employee should exist in the system
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> 1. User select 'Message' from drop-down
> _Not provided._
> 2. User select date from calendar fields and click on submit button
> _Not provided._
> _Not provided._
   **Expected:**
> User can see fields
> _Not provided._
> ![](index.php?/attachments/get/98eb0c89-4aad-4b2e-8db7-9464f8a045a8)
> _Not provided._
> a. Section - Add Maintenance Message
> b. Text field - Message
> c. Calendar field - Start Date
> d. Calendar field - End Date
> e. Button - Submit and Cancel
> _Not provided._
> 2. User navigated to validate credential
> _Not provided._
> ![](index.php?/attachments/get/4c758780-4c50-4e1e-[NUMERIC TEST DATA REDACTED]-8f4cb4e9b0e3)
> _Not provided._
> User enter credential, click on submit button and user can see a success message
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> 1. User select 'Page' from drop-down
> _Not provided._
> 2. User select checkbox and click on submit button
   **Expected:**
> User can see fields
> _Not provided._
> ![](index.php?/attachments/get/99a101b3-3a50-44cb-[NUMERIC TEST DATA REDACTED]-ba32a4f10c57)
> _Not provided._
> a. Checkbox - Confirm Apply of Maintenance Page
> b. Button - Submit and Cancel
> _Not provided._
> 2. User navigated to validate credential
> _Not provided._
> ![](index.php?/attachments/get/aad88a64-36fa-4ad2-bca5-0bd46c3e4356)
> _Not provided._
> User enter credential, click on submit button and user can see a success message
> _Not provided._

3. **Step:**
> 1. User select 'Start/Stop Email Service' from drop-down
> _Not provided._
> 2. User select checkbox and click on submit button
   **Expected:**
> User can see fields
> _Not provided._
> ![](index.php?/attachments/get/4155b7ba-ac6d-4c3d-9b53-97b278197cdc)
> _Not provided._
> a. Radio button- Start Email Service
> b. Radio button- Stop Email Service
> c. Button - Submit and Cancel
> _Not provided._
> 2. User navigated to validate credential
> _Not provided._
> ![](index.php?/attachments/get/0cc6cd9a-[NUMERIC TEST DATA REDACTED]-4b42-8c0e-59fd50e5f530)
> _Not provided._
> User enter credential, click on submit button and user can see a success message
> _Not provided._
> _Not provided._

4. **Step:**
> 1. User select 'Delete Email Queue' from drop-down
> _Not provided._
> 2. User select Radio button for 'Delete errored emails'
> _Not provided._
> 3. User select Radio button for 'Delete emails to be sent'
> _Not provided._
   **Expected:**
> User can see fields
> _Not provided._
> ![](index.php?/attachments/get/52efd754-da0f-4a09-[NUMERIC TEST DATA REDACTED]-f851f651c691)
> _Not provided._
> a. Section - Delete Email Queue
> b. Radio button - Delete errored emails
> c. Radio button - Delete emails to be sent
> _Not provided._
> _Not provided._
> 2. User can see Error Description lists with checkbox
> ![](index.php?/attachments/get/3a4e646c-39aa-[NUMERIC TEST DATA REDACTED]-b353-9d8d16d52ab8)
> _Not provided._
> 3. User can see details:
> a. Drop-down - Email Type
> b. Drop-down - Company
> c. Button - Search and Reset
> _Not provided._
> ![](index.php?/attachments/get/9e04c36c-e854-4ab3-a24e-6f21506b25f3)
> _Not provided._

### C8935283 - Validation check in maintenance page

- Section: Maintenance
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935283](https://internationalsos.testrail.net/index.php?/cases/view/8935283)

**Preconditions**
> Exam of the employee should exist in the system
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> 1. User select 'Message' from drop-down and click on cancel button
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Maintenance page
> _Not provided._
> ![](index.php?/attachments/get/8fdef19a-[NUMERIC TEST DATA REDACTED]-445a-884d-f725b321b35f)
> _Not provided._
> _Not provided._

2. **Step:**
> 1. User select 'Page' from drop-down and click on submit button
> _Not provided._
   **Expected:**
> User can see validation message
> _Not provided._
> ![](index.php?/attachments/get/8eab1707-f541-[NUMERIC TEST DATA REDACTED]-a6ae-99469e980402)
> _Not provided._

### C8935284 - Verify Error Logs page

- Section: Error Logs
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935284](https://internationalsos.testrail.net/index.php?/cases/view/8935284)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on maintenance --&gt; Error Logs
   **Expected:**
> User navigated to Error Logs page
> _Not provided._
> ![](index.php?/attachments/get/01b55f58-56e6-[NUMERIC TEST DATA REDACTED]-a3c4-87c73cd9dccb)
> _Not provided._
> User can see details:
> 1. Log - drop-down
> 2. From - Calendar field
> 3. To - Calendar field
> 4. Filter, Configuration ,Download, Download All, Delete, Delete All - Button
> 5. Line Wrap - Checkbox
> _Not provided._
> _Not provided._

### C8935287 - Validation check on error logs page

- Section: Error Logs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935287](https://internationalsos.testrail.net/index.php?/cases/view/8935287)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on maintenance --&gt; Error Logs
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Error Logs page
> _Not provided._
> _Not provided._

2. **Step:**
> User select data from 'Log' drop-down
   **Expected:**
> User can see a alert message
> _Not provided._
> ![](index.php?/attachments/get/226ab5d1-3bc8-401d-[NUMERIC TEST DATA REDACTED]-645d82cef479)
> _Not provided._

3. **Step:**
> User enter incorrect date
   **Expected:**
> User can see a alert message
> _Not provided._
> ![](index.php?/attachments/get/504ec2d5-0c7c-465f-8e4c-7be8e13037ec)
> _Not provided._

4. **Step:**
> User click on download button (If logs are not available)
   **Expected:**
> User can see a alert message
> _Not provided._
> ![](index.php?/attachments/get/7cd2097c-b1d1-43b4-abd2-4316e3adca59)
> _Not provided._

5. **Step:**
> User select log from drop-down (System is out of service)
   **Expected:**
> user can see a message
> _Not provided._
> ![](index.php?/attachments/get/193c8c92-108d-464e-9e0b-5b31d05558e6)
> _Not provided._

### C8935288 - User is successfully able to download logs

- Section: Error Logs
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Needs clarification
- TestRail case: [Open C8935288](https://internationalsos.testrail.net/index.php?/cases/view/8935288)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C8935289 - User is successfully able to delete logs

- Section: Error Logs
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Needs clarification
- TestRail case: [Open C8935289](https://internationalsos.testrail.net/index.php?/cases/view/8935289)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C8935290 - User is successfully able to filter logs

- Section: Error Logs
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C8935290](https://internationalsos.testrail.net/index.php?/cases/view/8935290)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on maintenance --&gt; Error Logs
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Error Logs page
> _Not provided._
> _Not provided._

2. **Step:**
> User select log from drop-down, select date field (From, To) and click on filter button
   **Expected:**
> User can see logs record
> _Not provided._
> ![](index.php?/attachments/get/2dea74a4-698e-43a8-a527-9f4ce98319b8)
> _Not provided._

### C8935291 - Verify unlock user page

- Section: Unlock User
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935291](https://internationalsos.testrail.net/index.php?/cases/view/8935291)

**Preconditions**
> User is on search employee page

**Steps and expected results**

1. **Step:**
> User click on Maintenance --&gt; Unlock User
   **Expected:**
> User navigated to Application Maintenance page
> _Not provided._
> ![](index.php?/attachments/get/f0a41dae-b715-4a59-ba39-0c1cbf2ed1e8)
> _Not provided._
> And user can see:
> 1. User - Text field
> 2. Unlock - Button
> _Not provided._
> _Not provided._

### C8935292 - Verify user can search vaccination status using valid search criteria

- Section: Search COVID-19 Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchVaccination.spec.ts` - C8935292: Search vaccination records using valid criteria @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C8935292](https://internationalsos.testrail.net/index.php?/cases/view/8935292)

**Preconditions**
> - User is logged into the application.
> - User has access to the COVID-19 Vaccination module.
> - Employee vaccination records exist in the system.

**Steps and expected results**

1. **Step:**
> 1. Navigate to COVID-19 Vaccination &gt; Search Vaccination Status.
> 2. Enter a valid First Name [VALUE REDACTED]
> 3. Enter a valid GIN number [VALUE REDACTED]
> 4. Click Search
> 5. Verify the returned record details.
   **Expected:**
> 1. Search Vaccination Status page is displayed.
> 2. First Name [VALUE REDACTED]
> 3. GIN number accepted
> 4. Matching employee vaccination records are displayed.
> 5. Results match the search criteria entered and user can see table details:
> - Last Name - Text field
> - First Name- Text field
> - Date Of Birth - Calendar
> - GIN Number / Applicant ID - Text field
> - Company Name - drop-down
> - Vaccination Status
> - Vaccination Date
> - Vaccine First Shot
> - Second Shot Date
> - Vaccine Second Shot

### C8935293 - Validate Search COVID-19 Vaccination page with Special Characters

- Section: Search COVID-19 Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchVaccination.spec.ts` - C8935293: Validate Search COVID-19 Vaccination special characters @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C8935293](https://internationalsos.testrail.net/index.php?/cases/view/8935293)

**Preconditions**
> - User is logged in.
> - Search COVID-19 Vaccination page is accessible.

**Steps and expected results**

1. **Step:**
> Navigate to Search COVID-19 Vaccination page.
   **Expected:**
> Page loads successfully.

2. **Step:**
> Enter special characters such as @  in First Name.
   **Expected:**
> System validates the input according to business rules.

3. **Step:**
> Click Search.
   **Expected:**
> System should display a popup window. Saying Please enter valid first name

### C8935483 - Verify page details and access menu for ISOS Admin

- Section: ISOS Admin
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935483](https://internationalsos.testrail.net/index.php?/cases/view/8935483)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to search employee page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/d28bb5e[PHONE/NUMBER REDACTED]b7-63e5d0de3001)
> _Not provided._
> 1. Left Panel links
> a. Search Employees
> b. Create New Employee
> c. Search Team Members
> d. Create Team Member
> e. Medical Exam Expirations
> f. Import Data
> g. Reminders and Documents
> h. Search Reviewed Exams
> i. Export Data
> j. Reports
> k. System Configuration
> l. Certificate of Fitness
> m. Send Welcome Email
> n. Drop Box
> o. Maintenance
> p. COVID-19 Vaccination
> _Not provided._
> 2. Right side page label name
> 1. ISOS Admin (Intl. SOS Admin) \\| Last login date: 06-Jul-[NUMERIC TEST DATA REDACTED] 12:46:22
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7. Advance Search link
> _Not provided._
> _Not provided._

### C8935484 - Verify page details and access menu for ISOS USer

- Section: ISOS User
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935484](https://internationalsos.testrail.net/index.php?/cases/view/8935484)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to search employee page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/6d2f0cbb-03c8-4ab5-95d1-5d3af8d3b1ff)
> _Not provided._
> 1. Left Panel links
> a. Search Employees
> b. Create New Employee
> c. Search Team Members
> d. Import Data
> g. Reminders and Documents
> h. Search Reviewed Exams
> i. Export Data
> j. Reports
> k. System Configuration
> l. Certificate of Fitness
> m. Send Welcome Email
> _Not provided._
> _Not provided._
> 2. Right side page label name
> 1. ISOS User (Intl. SOS User) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:01:47
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7. Advance Search link
> _Not provided._
> _Not provided._

### C8935485 - Verify page details and access menu for Chief Recruiter

- Section: Chief Recruiter
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935485](https://internationalsos.testrail.net/index.php?/cases/view/8935485)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to search employee page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/3027d770-355a-405c-9add-fdb9c050ab41)
> _Not provided._
> 1. Left Panel links
> a. General Information
> b. Search Employees
> c. Create New Employee
> d. Search Team Members
> d. Create Team Members
> g. Medical Exam Expirations
> h. Help
> _Not provided._
> _Not provided._
> 2. Right side page label name
> 1. ChefRec SLB (Chief Recruiter) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:16:54
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7. Advanced Search - link

### C8935486 - Verify page details and access menu for Recruiter

- Section: Recruiter
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935486](https://internationalsos.testrail.net/index.php?/cases/view/8935486)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to search employee page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/0066aa2f-e7ca-4c30-8eae-427e6d29bccd)
> _Not provided._
> 1. Left Panel links
> a. General Information
> b. Search Employees
> c. Create New Employee
> d. Medical Exam
> _Not provided._
> 2. Right side page label name
> 1. Recruiter SLB (Recruiter) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:11:28
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7 . Advance Search - link
> _Not provided._
> _Not provided._

### C8935487 - Verify page details and access menu for ISOS Reviewer

- Section: ISOS Reviewer
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935487](https://internationalsos.testrail.net/index.php?/cases/view/8935487)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to Exams to Review page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/e3f24f8a-e6d2-48c5-8f07-d4936d1a5ed2)
> _Not provided._
> 1. Left Panel links
> a. Search Employees
> b. Exams to review
> c. Search Reviewed Exams
> _Not provided._
> _Not provided._
> 2. Right side page label name
> 1. ISOS Rviewer (Intl. SOS Reviewer) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:31:56
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7 . Advance Search - link
> _Not provided._
> _Not provided._

### C8935488 - Verify page details and access menu for Client Reviewer

- Section: Client Reviewer
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935488](https://internationalsos.testrail.net/index.php?/cases/view/8935488)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to Awaiting Employee Response page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/a7f0e434-652f-[NUMERIC TEST DATA REDACTED]-b921-0a830a0a4a26)
> _Not provided._
> 1. Left Panel links
> a. General Information
> b. Search Employees
> c. Search Team Members
> d. Create Team Member
> e. Exams to review
> f. Undo Cleared Exams
> g. Search Reviewed Exams
> h. Reports
> i. Drop Box
> j. Help
> _Not provided._
> _Not provided._
> 2. Right side page label name
> 1. ClntRev SLB (Client Reviewer) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:35:15
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7 . Advance Search - link
> _Not provided._
> _Not provided._

### C8935490 - Verify page details and access menu for Partner

- Section: Partner
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C8935490](https://internationalsos.testrail.net/index.php?/cases/view/8935490)

**Preconditions**
> User have valid credential

**Steps and expected results**

1. **Step:**
> User login and navigating to Awaiting your review page
   **Expected:**
> User can see sections:
> _Not provided._
> ![](index.php?/attachments/get/911e87d6-c249-431e-a6af-6ecb50a1e8b4)
> _Not provided._
> 1. Drop Box
> 2. Right side page label name
> 1. PartnerUser (Partner) \\| Last login date: 07-Jul-[NUMERIC TEST DATA REDACTED] 09:50:23
> 3. Need Help? - link
> 4. My Details - link
> 5. Change Password - link
> 6. Log out - button
> 7. Cancel - Button
> _Not provided._
> _Not provided._

### C8935491 - User is successfully able to get the details for the company

- Section: Send Welcome Email
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C8935491](https://internationalsos.testrail.net/index.php?/cases/view/8935491)

**Preconditions**
> User is on search employee page
> _Not provided._
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Send Welcome E-mail
> _Not provided._
> _Not provided._
   **Expected:**
> User navigated to Send Welcome E-mail Address page
> _Not provided._
> ![](index.php?/attachments/get/fc2611c0-e686-47b9-8b66-6cb6a833ba2d)
> _Not provided._

2. **Step:**
> User select company from drop-down and click on 'Get Details' button
   **Expected:**
> User can see Total numbers of employees label with details:
> _Not provided._
> ![](index.php?/attachments/get/c0fac679-c3ec-4a3a-a86b-05a15df308fb)
> _Not provided._

3. **Step:**
> User click on View Details link
   **Expected:**
> User navigated to new window and user can see Employee Details table
> _Not provided._
> ![](index.php?/attachments/get/b8f8f23e-0a71-45fc-b2ff-21fa683d2324)
> _Not provided._

### C9031928 - Verify submit button disabled if skipped verification code

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9031928](https://internationalsos.testrail.net/index.php?/cases/view/9031928)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> user enter username and password, skip verification code
   **Expected:**
> user should see submit button as disabled ![](index.php?/attachments/get/578d52d5-071e-44c2-9a4a-7a39fe2b6804)

### C9216981 - Verify if a user will be able to login with a valid username and valid password.

- Section: Login Page
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9216981](https://internationalsos.testrail.net/index.php?/cases/view/9216981)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> User enter valid username, password and click on submit button
   **Expected:**
> User navigated to search employee page
> _Not provided._
> _Not provided._
> _Not provided._

### C9216982 - Verify if a user cannot login with a valid username and an invalid password.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9216982](https://internationalsos.testrail.net/index.php?/cases/view/9216982)

**Preconditions**
> User is on login page

**Steps and expected results**

1. **Step:**
> user enter valid username, invalid password and click on submit button
   **Expected:**
> User can see an error message 'Your user name or password is incorrect. Please try again.'
> _Not provided._
> _Not provided._
> _Not provided._

### C9216983 - Verify the login page for both, when the field is blank and Submit button is clicked.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9216983](https://internationalsos.testrail.net/index.php?/cases/view/9216983)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> user skipped username and password and click on submit button
   **Expected:**
> user able to click on submit button without entering username and password field

### C9216984 - Verify the ‘Forgot Password’ functionality.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9216984](https://internationalsos.testrail.net/index.php?/cases/view/9216984)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> User click on forgot / unlock password
   **Expected:**
> User is able to click on forgot password link and navigated to 'Forgot Password  page
> _Not provided._
> _Not provided._
> _Not provided._

### C9216985 - Verify the messages for invalid login.

- Section: Login Page
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9216985](https://internationalsos.testrail.net/index.php?/cases/view/9216985)

**Preconditions**
> user is on login page

**Steps and expected results**

1. **Step:**
> user enter invalid credential
   **Expected:**
> user is able to enter invalid credential

2. **Step:**
> User click on submit button
   **Expected:**
> User can see a message 'Your user name or password is incorrect. Please try again.'
> _Not provided._
> _Not provided._
> _Not provided._

### C9216991 - Verify my dashboard page

- Section: My Dashboard
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9216991](https://internationalsos.testrail.net/index.php?/cases/view/9216991)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User click on my dashboard link
   **Expected:**
> User navigated to my dashboard page and can see details below:
> _Not provided._
> _Not provided._
> 1. Overall health status
> 2. Standard health indicators
> _Not provided._
> ![](index.php?/attachments/get/[LONG NUMBER REDACTED]-c054-[NUMERIC TEST DATA REDACTED]-a6c1-4ef652296c04)
> _Not provided._
> _Not provided._

### C9217324 - Verify my profile page

- Section: My Profile
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217324](https://internationalsos.testrail.net/index.php?/cases/view/9217324)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User is on My Profile page
   **Expected:**
> User can see details below:
> 1. GIN
> 2. Date of birth
> 3. Company
> 4. Assignment Country
> 5. Employee Category
> _Not provided._
> ![](index.php?/attachments/get/9c588ebd-[NUMERIC TEST DATA REDACTED]-4e49-[NUMERIC TEST DATA REDACTED]-e22a183e079e)
> _Not provided._
> _Not provided._

### C9217325 - Verify my profile page

- Section: My Profile
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217325](https://internationalsos.testrail.net/index.php?/cases/view/9217325)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User is on My Profile page
   **Expected:**
> User can see details below:
> 1.

### C9217326 - Verify my exam tracker page

- Section: My Exam Tracker
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217326](https://internationalsos.testrail.net/index.php?/cases/view/9217326)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> _Not provided._
> 1. User click on My Exam Tracker
> User is on My Profile page
   **Expected:**
> 1. User navigated to my exam tracker page and can see details below:
> a. Last completed exam
> b. Next exam
> c. Blood group
> d. Fitness conclusion
> _Not provided._
> ![](index.php?/attachments/get/223352cf-2d87-[NUMERIC TEST DATA REDACTED]-b3a4-33a2e10effb6)
> _Not provided._
> _Not provided._

### C9217327 - Verify my documents page

- Section: My Documetns
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217327](https://internationalsos.testrail.net/index.php?/cases/view/9217327)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User click on my documents link
   **Expected:**
> User navigated to my documents page and can see ddocuments attached if any
> _Not provided._
> ![](index.php?/attachments/get/0dbe9e5f-0f8e-4a6e-91c6-bd2dbc62987c)
> _Not provided._
> _Not provided._

### C9217328 - Verify my vaccination page

- Section: My Vaccinations
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217328](https://internationalsos.testrail.net/index.php?/cases/view/9217328)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User click on my vaccination link
   **Expected:**
> User navigated to my vaccinations page and can see details below:
> _Not provided._
> _Not provided._
> 1. details based on Grid view with back and forward icon
> _Not provided._
> ![](index.php?/attachments/get/5808deb6-93a4-4abd-a226-d4658c505e88)
> _Not provided._
> 2. details based on Table view and columns in tables are:
> a. Vaccination name
> b. Last shot
> c. Next shot
> d. Status
> _Not provided._
> ![](index.php?/attachments/get/4722a2d9-6e4a-40aa-8a64-d40b784c3937)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

### C9217329 - Verify create my exam page

- Section: Create My Exam
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9217329](https://internationalsos.testrail.net/index.php?/cases/view/9217329)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User click on create my exam link
   **Expected:**
> User navigated to my exam page and can see details below:
> _Not provided._
> _Not provided._
> 1. Your consent
> 2. Radio button - I do authorize
> 3. Radio button - I do not authorize
> 4. Drop down - Reason for medical exam
> 5. Date field - Approximate date of exam
> 6. Submit button
> _Not provided._
> ![](index.php?/attachments/get/9d4cc8d2-f7c2-443b-af01-6f9c47801f3f)
> _Not provided._
> _Not provided._

2. **Step:**
> User create an exam
   **Expected:**
> 1. User select radio button as I do authorize
> 2. User select value from drop down
> 3. User select date
> 4. User click on submit button
> 5. Exam created successfully.

### C9217330 - Verify my information page

- Section: My Information
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217330](https://internationalsos.testrail.net/index.php?/cases/view/9217330)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User click on my information link
   **Expected:**
> User navigated to my information page and can see details about medfit app.
> _Not provided._
> ![](index.php?/attachments/get/5aaf26b3-0ca9-4e76-9be1-6bb86adb9a44)
> _Not provided._
> _Not provided._
> _Not provided._

### C9217998 - Verify information page

- Section: Definitions
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9217998](https://internationalsos.testrail.net/index.php?/cases/view/9217998)

**Preconditions**
> User is logged-in

**Steps and expected results**

1. **Step:**
> User is on My Profile page
   **Expected:**
> User can see details below:
> 1.

### C9278154 - User able to logout from application

- Section: Logout
- Type / priority: Sanity Test / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9278154](https://internationalsos.testrail.net/index.php?/cases/view/9278154)

**Preconditions**
> user should be logged-in

**Steps and expected results**

1. **Step:**
> 1. User click on logout button
   **Expected:**
> 1. User can see a alert message 'Are you sure that you want to logout?' with buttons Ok or Cancel
> _Not provided._
> ![](index.php?/attachments/get/735f2569-b31a-40fd-a[PHONE/NUMBER REDACTED]b63)
> _Not provided._
> _Not provided._
> _Not provided._
> _Not provided._

2. **Step:**
> User click on cancel button
   **Expected:**
> User will remain on the application
> _Not provided._
> ![](index.php?/attachments/get/9290904d-9cb1-49e9-82e9-02d95d05ae3f)
> _Not provided._

3. **Step:**
> User click on Ok button
   **Expected:**
> User will be logged out and navigated to login page
> _Not provided._
> ![](index.php?/attachments/get/f796a758-10c4-4db0-878f-855ee7c99453)
> _Not provided._

### C9278155 - Verify forgot password functionality

- Section: Forgot Password?
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C9278155](https://internationalsos.testrail.net/index.php?/cases/view/9278155)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> User click on Forgot Password in login page
   **Expected:**
> User will get a popup window with text area to enter username
> _Not provided._
> ![](index.php?/attachments/get/ad6c5fe3-[NUMERIC TEST DATA REDACTED]-4d63-80da-fc38a0030e7f)
> _Not provided._

2. **Step:**
> 1. User enter username in textarea and click on ok button
> _Not provided._
> 2. User click on cancel button
> _Not provided._
> _Not provided._
   **Expected:**
> 1. User navigated to a new page to enter security answer
> _Not provided._
> ![](index.php?/attachments/get/e809cb05-a4e4-4b90-[NUMERIC TEST DATA REDACTED]-0c1cc24093aa)
> 2. User navigated to login page
> _Not provided._
> _Not provided._

3. **Step:**
> 1. User enter security answer and click on submit button
> _Not provided._
> 2. User click on cancel button
> _Not provided._
> _Not provided._
   **Expected:**
> 1. User successfully able to reset password
> _Not provided._
> 2. User navigated to login page
> _Not provided._
> _Not provided._

### C9278156 - User can register record

- Section: Register Employee
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9278156](https://internationalsos.testrail.net/index.php?/cases/view/9278156)

**Preconditions**
> User should be on login page

**Steps and expected results**

1. **Step:**
> User click on For register users only link
   **Expected:**
> User will be advised to go for register link  at their MedFit website
> _Not provided._
> ![](index.php?/attachments/get/e4f28224-aed9-4b9a-933d-98273498ae57)
> _Not provided._

### C9404079 - Update Minimum Password Length to 12 Characters

- Section: Password length
- Type / priority: Sanity Test / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9404079](https://internationalsos.testrail.net/index.php?/cases/view/9404079)

**Preconditions**
> - ISOS Admin user account exists in the system.
> - Admin user has access to System Configuration → Company.
> - “My Company” record exists in the system.

**Steps and expected results**

1. **Step:**
> - Log in with ISOS Admin profile.
> - Navigate to System Configuration → Company.
> - Search for “My Company”.
> - Click Edit on the search result.
> - Set minimum password length to 12 characters.
> - Click Save.
   **Expected:**
> - Changes are saved successfully.
> - Confirmation message is displayed (e.g., “Company settings updated successfully”).
> - Minimum password length now shows as 12 in company settings.

### C9404080 - Verify Existing Password Field Does Not Validate Length

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9404080](https://internationalsos.testrail.net/index.php?/cases/view/9404080)

**Preconditions**
> - Employee record for “My Company” exists.
> - Employee has an existing password (may be less than 12 characters if created before policy change).
> - Minimum password length is set to 12.
> - Employee is logged in successfully.

**Steps and expected results**

1. **Step:**
> - Log in as “My Company” employee.
> - Click Change Password (top-right corner).
> - Enter the current password in the Existing Password field (even if it is less than 12 characters).
> - Move to the next field.
   **Expected:**
> - Existing Password field accepts the current password regardless of length.
> - No validation error related to password length appears for the Existing Password field.
> - Only authentication validation occurs (correct/incorrect password).

### C9404081 - Verify New Password Field Enforces Minimum 12 Characters

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9404081](https://internationalsos.testrail.net/index.php?/cases/view/9404081)

**Preconditions**
> - Employee is logged in.
> - Minimum password length is set to 12 for “My Company”.

**Steps and expected results**

1. **Step:**
> - Navigate to Change Password.
> - Enter correct Existing Password.
> - In New Password, enter a password with fewer than 12 characters (e.g., 8–11 characters).
> - Enter same value in Confirm New Password.
> - Click Save/Submit.
   **Expected:**
> - System displays validation error indicating minimum 12 characters required.
> - Password change is not allowed.
> - Error message is clear and user-friendly.

### C9404214 - All SLB roles cannot create exam

- Section: SLB employee cannot create exam
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9404214](https://internationalsos.testrail.net/index.php?/cases/view/9404214)

**Preconditions**
> 1. Employee created and registered in the system

**Steps and expected results**

1. **Step:**
> 1. Login via any SLB roles login into application (Chief Recruiter, ISOS Reviewer, Client Reviewer, Local Doctor, Employee)
> 2. They cannot see create exam button or link
   **Expected:**
> 1. Successfully able to login into system
> 2. All roles can not create exam as they cannot see create exam button or link
> _Not provided._
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED])   ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED])
> _Not provided._

### C9404218 - New column added in search screen result table

- Section: New column added in search screen result page for all the employees
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9404218](https://internationalsos.testrail.net/index.php?/cases/view/9404218)

**Preconditions**
> 1. Already login into system

**Steps and expected results**

1. **Step:**
> 1. User enter employee details in search result page
> 2. Click on search button
> 3. User can see newly added column
   **Expected:**
> 1. Successfully enter employee details
> 2. search results gets display
> 3. Newly added column 'Certificate Expiry Date' can be seen in search result table
> ![](index.php?/attachments/get/[PHONE/NUMBER REDACTED])
> _Not provided._

### C9405408 - Search employee with active status

- Section: Data is moved to the Archives DB when an employee's status has been inactive for 2 years
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Backend/data candidate - clarify access and expected evidence
- TestRail case: [Open C9405408](https://internationalsos.testrail.net/index.php?/cases/view/9405408)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> 1. User login into application
> 2. User will enter inactive employee details in search screen page
> 3. User click on search button
   **Expected:**
> 1. User successfully able to login into application
> 2. User is able to enter employee details in search screen page
> 3. Search result will display

### C9405409 - Search employee with inactive status

- Section: Data is moved to the Archives DB when an employee's status has been inactive for 2 years
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Backend/data candidate - clarify access and expected evidence
- TestRail case: [Open C9405409](https://internationalsos.testrail.net/index.php?/cases/view/9405409)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> 1. User login into application
> 2. User will enter inactive employee details in search screen page
> 3. User click on search button
   **Expected:**
> 1. User successfully able to login into application
> 2. User is able to enter employee details in search screen page
> 3. Search result will display

### C9405412 - Search employee with active status

- Section: Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Backend/data candidate - clarify access and expected evidence
- TestRail case: [Open C9405412](https://internationalsos.testrail.net/index.php?/cases/view/9405412)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C9405413 - Search employee with inactive status

- Section: Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Backend/data candidate - clarify access and expected evidence
- TestRail case: [Open C9405413](https://internationalsos.testrail.net/index.php?/cases/view/9405413)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> _Not provided._
> 1. User login into application
> 2. User will enter inactive employee details in search screen page
> 3. User click on search button
   **Expected:**
> 1. User successfully able to login into application
> 2. User is able to enter employee details in search screen page
> 3. Search result will display

### C9428818 - Verify N1 and N2 MET Linking to Global METs

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9428818](https://internationalsos.testrail.net/index.php?/cases/view/9428818)

**Preconditions**
> - Global METs are already configured.
> - User has access to MET configuration details.

**Steps and expected results**

1. **Step:**
> - Open any MET ending with “N1”.
> - Check the linked Global MET exam type.
> - Open any MET ending with “N2”.
> - Check the linked Global MET exam type.
   **Expected:**
> - METs ending with “N1” are linked to Global METs with full exam.
> - METs ending with “N2” are linked to Global METs with light exam.

### C9428819 - Assign MET for Haute Altitude – No Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428819](https://internationalsos.testrail.net/index.php?/cases/view/9428819)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Haute Altitude”.
> - Employee has no active exam.

**Steps and expected results**

1. **Step:**
> - Assign MET to the employee.
> - Check assigned MET.
   **Expected:**
> Employee is assigned “A Haute Altitude N1”.

### C9428821 - Assign MET for Haute Altitude – Active Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9428821](https://internationalsos.testrail.net/index.php?/cases/view/9428821)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Haute Altitude”.
> - Employee has an active exam.

**Steps and expected results**

1. **Step:**
> - Assign MET to the employee.
> - Verify the assigned MET.
   **Expected:**
> Employee is assigned “A Haute Altitude N2”.

### C9428822 - Assign MET for Zone Impaludée – Age &lt; 45 – No Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428822](https://internationalsos.testrail.net/index.php?/cases/view/9428822)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Zone Impaludée”.
> - Age No active exam.

**Steps and expected results**

1. **Step:**
> - Assign MET to the employee.
> - Review assigned MET.
   **Expected:**
> Employee is assigned “A Zone Impaludée N1”.

### C9428823 - Assign MET for Zone Impaludée – Age &lt; 45 – Active Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428823](https://internationalsos.testrail.net/index.php?/cases/view/9428823)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Zone Impaludée”.
> - Age Active exam exists.

**Steps and expected results**

1. **Step:**
> - Assign MET to the employee.
> - Check MET assignment.
   **Expected:**
> Employee is assigned “A Zone Impaludée N2”.

### C9428824 - Assign MET for Zone Impaludée – Male – Age &gt; 45

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428824](https://internationalsos.testrail.net/index.php?/cases/view/9428824)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Zone Impaludée”.
> - Gender = Male.
> - Age &gt; 45 years.

**Steps and expected results**

1. **Step:**
> - Assign MET when no active exam exists.
> - Note assigned MET.
> - Assign MET when an active exam exists.
> - Note assigned MET.
   **Expected:**
> - Without exam → “B Male Zone Impaludée N1” is assigned.
> - With active exam → “B Male Zone Impaludée N2” is assigned.

### C9428825 - Assign MET for Zone Impaludée – Female – Age &gt; 45

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9428825](https://internationalsos.testrail.net/index.php?/cases/view/9428825)

**Preconditions**
> - Employee belongs to ERAMET.
> - Geo Market = “Zone Impaludée”.
> - Gender = Female.
> - Age &gt; 45 years.

**Steps and expected results**

1. **Step:**
> - Assign MET with no active exam.
> - Verify MET.
> - Assign MET with an active exam.
> - Verify MET.
   **Expected:**
> - Without exam → “B Fem Zone Impaludée N1” is assigned.
> - With active exam → “B Fem Zone Impaludée N2” is assigned.

### C9428826 - N1 to N2 Exam Switching – 4 Year Validity

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428826](https://internationalsos.testrail.net/index.php?/cases/view/9428826)

**Preconditions**
> - ERAMET employee.
> - Assigned N1 MET with 4-year validity.

**Steps and expected results**

1. **Step:**
> - Check MET status at Year 0.
> - Advance system year to Year 1, 2, and 3.
> - Check MET each year.
> - Advance to Year 4.
   **Expected:**
> - Year 0 → N1 MET (4 years validity)
> - Year 1 → N2 MET (1 year validity)
> - Year 2 → N2 MET (1 year validity)
> - Year 3 → N2 MET (1 year validity)
> - Year 4 → N1 MET reassigned (4 years validity)

### C9428827 - N1 to N2 Exam Switching – 2 Year Validity

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: Manual review - interface or expected result unclear
- TestRail case: [Open C9428827](https://internationalsos.testrail.net/index.php?/cases/view/9428827)

**Preconditions**
> - ERAMET employee.
> - Assigned N1 MET with 2-year validity.

**Steps and expected results**

1. **Step:**
> - Check MET at Year 0.
> - Move to Year 1.
> - Move to Year 2.
   **Expected:**
> - Year 0 → N1 MET (2 years validity)
> - Year 1 → N2 MET (1 year validity)
> - Year 2 → N1 MET reassigned (2 years validity)

### C9430379 - Verify Welcome Email – No COVID Content

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430379](https://internationalsos.testrail.net/index.php?/cases/view/9430379)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB (not HCC/HCR).
> - Valid official email address [VALUE REDACTED]
> - Welcome email trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger Welcome email for the SLB employee.
> - Log in to the employee’s mailbox.
> - Open the received Welcome email.
> - Review subject line and full email body content.
   **Expected:**
> - Welcome email [VALUE REDACTED] received.
> - Email does NOT contain any reference to:
> - COVID-19
> - Vaccination
> - Immunization requirements
> - Email formatting and dynamic fields display correctly.

### C9430380 - Verify LTA Email – No COVID Content

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430380](https://internationalsos.testrail.net/index.php?/cases/view/9430380)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB (not HCC/HCR).
> - LTA notification condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger LTA notification.
> - Access employee mailbox.
> - Open received LTA email.
> - Review complete content including links.
   **Expected:**
> - LTA email [VALUE REDACTED] successfully.
> - No COVID-19 vaccination references are present.
> - All dynamic data fields populate correctly.
> - Links are functional.

### C9430381 - Verify Reminder 1 Email – No COVID Content

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430381](https://internationalsos.testrail.net/index.php?/cases/view/9430381)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB.
> - Reminder 1 trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger Reminder 1 notification.
> - Open employee mailbox.
> - Review received email.
   **Expected:**
> - Reminder 1 email [VALUE REDACTED]
> - No COVID-related terminology exists.
> - Email content appears complete and properly formatted.

### C9430382 - Verify Account Enabled Email – No COVID Content

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9430382](https://internationalsos.testrail.net/index.php?/cases/view/9430382)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB.
> - Account is successfully enabled.

**Steps and expected results**

1. **Step:**
> - Enable employee account.
> - Open employee mailbox.
> - Review Account Enabled email.
   **Expected:**
> - Account Enabled email [VALUE REDACTED]
> - Email contains only account activation/login information.
> - No COVID-related instructions present.

### C9430383 - Verify HVP Notification – No COVID Content

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430383](https://internationalsos.testrail.net/index.php?/cases/view/9430383)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB.
> - HVP notification trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger HVP notification.
> - Access employee mailbox.
> - Review email content.
   **Expected:**
> - HVP email [VALUE REDACTED]
> - No COVID-19 vaccination messaging included.
> - Email displays correctly.

### C9430384 - Verify No Email Sent to HCC Employee

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430384](https://internationalsos.testrail.net/index.php?/cases/view/9430384)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is HCC.
> - Valid email address [VALUE REDACTED]
> - Email trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger Welcome/LTA/Reminder event.
> - Wait for email processing.
> - Check employee mailbox.
> - Verify email logs in system.
   **Expected:**
> - No email [VALUE REDACTED] in inbox or spam.
> - System logs show email suppression for HCC category.
> - No delivery attempt is recorded.

### C9430385 - Verify No Email Sent to HCR Employee

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430385](https://internationalsos.testrail.net/index.php?/cases/view/9430385)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is HCR.
> - Valid email address configured.
> - Email trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger notification event.
> - Wait for processing cycle.
> - Check employee mailbox.
> - Verify system logs.
   **Expected:**
> - No email [VALUE REDACTED]
> - System logs confirm suppression due to HCR category.

### C9430386 - Verify Welcome Email – No MedTrack Registration Instruction

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430386](https://internationalsos.testrail.net/index.php?/cases/view/9430386)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB.
> - Welcome email trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger Welcome email.
> - Open received email.
> - Carefully review login and registration instructions.
   **Expected:**
> - Email does NOT contain instructions to:
> - Register in MedTrack
> - Create a MedTrack account
> - Email clearly instructs employee to log in using official SLB email address only.
> - Login link redirects correctly.

### C9430387 - Verify Dynamic Fields in Received Email

- Section: COVID-19 Content Removal
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - external notification side effect
- TestRail case: [Open C9430387](https://internationalsos.testrail.net/index.php?/cases/view/9430387)

**Preconditions**
> - Employee record is present in the system.
> - Employee category is SLB.
> - Any email trigger condition is met.

**Steps and expected results**

1. **Step:**
> - Trigger any notification email.
> - Open received email.
> - Validate employee-specific data fields.
   **Expected:**
> - Employee Name displays correctly.
> - Employee ID (if applicable) displays correctly.
> - No placeholder text (e.g., {{Name}}).
> - Links function properly.

### C9430419 - Verify Confirm New Password Field Enforces Minimum 12 Characters

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9430419](https://internationalsos.testrail.net/index.php?/cases/view/9430419)

**Preconditions**
> - Employee is logged in.
> - Password policy is set to 12 characters.

**Steps and expected results**

1. **Step:**
> - Enter correct Existing Password.
> - Enter valid 12+ character password in New Password.
> - Enter fewer than 12 characters in Confirm New Password.
> - Click Submit.
   **Expected:**
> - System displays validation error.
> - Password update is not successful.
> - Confirm field enforces same minimum length rule.

### C9430421 - Verify Password Mismatch Validation

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9430421](https://internationalsos.testrail.net/index.php?/cases/view/9430421)

**Preconditions**
> - Employee logged in.
> - Password policy is set to 12 characters.

**Steps and expected results**

1. **Step:**
> - Enter correct Existing Password.
> - Enter valid 12+ character password in New Password.
> - Enter a different 12+ character password in Confirm New Password.
> - Click Submit.
   **Expected:**
> - System displays “Passwords do not match” error.
> - Password change is not completed.

### C9430422 - Verify Successful Password Update with Valid 12+ Character Password

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C9430422](https://internationalsos.testrail.net/index.php?/cases/view/9430422)

**Preconditions**
> - Employee logged in.
> - Password policy is set to 12 characters.

**Steps and expected results**

1. **Step:**
> - Enter correct Existing Password.
> - Enter a valid password with 12 or more characters in New Password.
> - Enter the same password in Confirm New Password.
> - Click Submit.
   **Expected:**
> - Password is successfully updated.
> - Confirmation message is displayed.
> - User remains logged in (if system behavior allows) or is prompted to log in again.

### C9430423 - Verify Login with New Password

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9430423](https://internationalsos.testrail.net/index.php?/cases/view/9430423)

**Preconditions**
> - Password has been successfully changed to a 12+ character password.

**Steps and expected results**

1. **Step:**
> - Log out of the employee account.
> - Navigate to login page.
> - Enter username/email.
> - Enter newly created password.
> - Click Login.
   **Expected:**
> - Login [VALUE REDACTED]
> - No errors occur.
> - User is redirected to the dashboard/home page.
> - Login process is smooth without unexpected validation errors.

### C9430424 - Verify Old Password No Longer Works

- Section: Password length
- Type / priority: System Testing / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C9430424](https://internationalsos.testrail.net/index.php?/cases/view/9430424)

**Preconditions**
> - Password has been successfully changed.

**Steps and expected results**

1. **Step:**
> - Log out.
> - Attempt to log in using the old password.
   **Expected:**
> - Login fails.
> - System displays “Invalid credentials” message.
> - Access is denied.

### C15237380 - Verify Search with No Matching Records on Search Vaccination Status Page

- Section: Search COVID-19 Vaccination
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchVaccination.spec.ts` - C15237380: Verify search with no matching records @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C15237380](https://internationalsos.testrail.net/index.php?/cases/view/15237380)

**Preconditions**
> - User is logged into the application.
> - User is on the Search Vaccination Status page.

**Steps and expected results**

1. **Step:**
> Enter a non-existing First Name [VALUE REDACTED]
> Enter a non-existing Last Name [VALUE REDACTED]
> Click Search.
> Verify the search result section.
> Observe system message.
   **Expected:**
> Value is accepted.
> Value is accepted.
> System executes the search successfully.
> No records are displayed.
> Appropriate message such as "There are no employees available for the search performed. is displayed. No application error occurs.

### C15239052 - Verify Reset Button Clears All Search Criteria

- Section: Search employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchEmployee.spec.ts` - C15239052: Reset all employee search criteria @sanity
- Preliminary classification: UI candidate
- TestRail case: [Open C15239052](https://internationalsos.testrail.net/index.php?/cases/view/15239052)

**Preconditions**
> - User is logged into the application.

**Steps and expected results**

1. **Step:**
> - Navigate to Search Employees page.
> - Enter values in Last Name [VALUE REDACTED], First Name [VALUE REDACTED], GIN [VALUE REDACTED]
> - Select values from Status as Active, Company as ALS, Category as HCC, and Fitness Status as Fit dropdowns.
> - Check the Created By Intl. SOS checkbox.
> - Click Reset.
> - Verify all fields on the page.
   **Expected:**
> - Search Employees page is displayed successfully.
> - Values are entered successfully.
> - Selected values are displayed.
> - Checkbox is selected.
> - Reset action is executed successfully.
> - All entered values are cleared, dropdowns return to default values, and the checkbox is unchecked.

### C15239053 - Verify My Details Link Navigation

- Section: Header Links
- Type / priority: Functional / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C15239053](https://internationalsos.testrail.net/index.php?/cases/view/15239053)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> - Click the My details link displayed
   **Expected:**
> - User profile/details page is displayed successfully.

### C15239309 - Verify Advanced Search Link Expands Additional Search Criteria

- Section: Search employee
- Type / priority: Functional / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: `tests/searchEmployee.spec.ts` - C15239309: Expand additional employee search criteria @sanity
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C15239309](https://internationalsos.testrail.net/index.php?/cases/view/15239309)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> - Click the Advanced Search
   **Expected:**
> Additional search fields (Area, Job Site, Geo Market) are displayed.

### C15239310 - Verify Change Password Link Navigation

- Section: Header Links
- Type / priority: Functional / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C15239310](https://internationalsos.testrail.net/index.php?/cases/view/15239310)

**Preconditions**
> _Not provided._

**Steps and expected results**

1. **Step:**
> Click the Change Password link displayed in the header.
   **Expected:**
> Change Password page is displayed successfully.

### C15239311 - Verify Change Password Page Loads Successfully

- Section: Change Password
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239311](https://internationalsos.testrail.net/index.php?/cases/view/15239311)

**Preconditions**
> - User is logged into the application.
> - User has access to the Change Password functionality.

**Steps and expected results**

1. **Step:**
> - Click the Change Password link from the application header.
> - Verify the page content.
> - Verify the action buttons.
> - Verify the password policy message.
   **Expected:**
> - Change Password page is displayed successfully.
> - Existing Password, New Password, Confirm New Password, Security Question 1, Security Answer 1, Security Question 2, Security Answer 2 fields are displayed.
> - Submit and Cancel buttons are displayed.
> - Password policy message is displayed correctly.

### C15239312 - Verify Password Is Changed Successfully

- Section: Change Password
- Type / priority: Functional / High
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239312](https://internationalsos.testrail.net/index.php?/cases/view/15239312)

**Preconditions**
> - User is logged into the application.
> - User knows the current password.
> - User has valid responses for security questions.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Enter a valid Existing Password.
> - Enter a valid New Password meeting the password policy requirements.
> - Enter the same value in Confirm New Password.
> - Select Security Question 1 and enter Security Answer 1.
> - Select Security Question 2 and enter Security Answer 2.
> - Click Submit.
   **Expected:**
> - Change Password page is displayed.
> - Password is accepted.
> - Password is accepted.
> - Passwords match successfully.
> - Values are accepted.
> - Values are accepted.
> - Password change request is processed successfully.

### C15239313 - Verify Mandatory Field Validation

- Section: Change Password
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239313](https://internationalsos.testrail.net/index.php?/cases/view/15239313)

**Preconditions**
> - User is logged into the application.
> - Change Password page is accessible.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Leave Existing Password, New Password, Confirm New Password, Security Questions, and Security Answers blank.
> - Click Submit.
   **Expected:**
> - Page is displayed successfully.
> - Fields remain empty.
> - A validation popup/message is displayed indicating mandatory fields must be completed.

### C15239314 - Verify Existing Password Validation

- Section: Change Password
- Type / priority: Functional / High
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239314](https://internationalsos.testrail.net/index.php?/cases/view/15239314)

**Preconditions**
> - User is logged into the application.
> - User has access to the Change Password page.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Enter an invalid Existing Password.
> - Enter a valid New Password.
> - Enter the same value in Confirm New Password.
> - Complete Security Question and Answer fields.
> - Click Submit.
   **Expected:**
> - Page is displayed successfully.
> - Value is accepted for validation.
> - Password is accepted.
> - Passwords match successfully.
> - Values are accepted.
> - Existing password validation is performed.

### C15239315 - Verify Password Policy Validation

- Section: Change Password
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239315](https://internationalsos.testrail.net/index.php?/cases/view/15239315)

**Preconditions**
> - User is logged into the application.
> - Change Password page is accessible.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Enter the Existing Password.
> - Enter a New Password that violates the policy (e.g., less than 12 characters or missing uppercase/lowercase/number/special character).
> - Enter the same value in Confirm New Password.
> - Complete Security Question and Answer fields.
> - Click Submit.
   **Expected:**
> - Page is displayed successfully.
> - Password is accepted.
> - Password is accepted for validation.
> - Value is accepted.
> - Values are accepted.
> - Password policy validation is triggered.

### C15239316 - Verify New Password and Confirm Password Mismatch Validation

- Section: Change Password
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239316](https://internationalsos.testrail.net/index.php?/cases/view/15239316)

**Preconditions**
> - User is logged into the application.
> - Change Password page is accessible.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Enter a valid Existing Password.
> - Enter a valid New Password.
> - Enter a different value in Confirm New Password.
> - Complete Security Question and Answer fields.
> - Click Submit.
   **Expected:**
> - Page is displayed successfully.
> - Password is accepted.
> - Password is accepted.
> - Value is accepted for validation.
> - Values are accepted.
> - Password comparison validation is performed.

### C15239317 - Verify Cancel Button Functionality

- Section: Change Password
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239317](https://internationalsos.testrail.net/index.php?/cases/view/15239317)

**Preconditions**
> - User is logged into the application.
> - Change Password page is accessible.

**Steps and expected results**

1. **Step:**
> - Navigate to the Change Password page.
> - Enter values in one or more fields.
> - Click Cancel.
   **Expected:**
> - Page is displayed successfully.
> - Values are entered successfully.
> - User is redirected from the Change Password page.

### C15239318 - Verify Help Link Navigation

- Section: Footer Links
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C15239318](https://internationalsos.testrail.net/index.php?/cases/view/15239318)

**Preconditions**
> - User is logged into the application.
> - User is on any application page displaying the footer.

**Steps and expected results**

1. **Step:**
> - Locate the Help link in the footer section.
> - Click the Help link.
> - Verify the page content.
   **Expected:**
> - Help link is displayed.
> - Help page opens successfully.
> - Help information is displayed correctly.

### C15239319 - Verify Contact Us Link Navigation

- Section: Footer Links
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C15239319](https://internationalsos.testrail.net/index.php?/cases/view/15239319)

**Preconditions**
> - User is logged into the application.
> - User is on any application page displaying the footer.

**Steps and expected results**

1. **Step:**
> - Locate the Contact Us link in the footer section.
> - Click the Contact Us link.
> - Verify the page content.
   **Expected:**
> - Contact Us link is displayed.
> - Contact Us page opens successfully.
> - Contact information is displayed correctly.

### C15239320 - Verify Privacy Policy Link Navigation

- Section: Footer Links
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C15239320](https://internationalsos.testrail.net/index.php?/cases/view/15239320)

**Preconditions**
> - User is logged into the application.
> - User is on any application page displaying the footer.

**Steps and expected results**

1. **Step:**
> - Locate the Privacy Policy link in the footer section.
> - Click the Privacy Policy link.
> - Verify the page content.
   **Expected:**
> - Privacy Policy link is displayed.
> - Privacy Policy page opens successfully.
> - Privacy Policy information is displayed correctly.

### C15239321 - Verify Team Member Details Page Loads Successfully

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C15239321](https://internationalsos.testrail.net/index.php?/cases/view/15239321)

**Preconditions**
> - User is logged into the application.
> - User is on any application page.

**Steps and expected results**

1. **Step:**
> - Click the My Details link displayed in the header.
> - Verify the page title.
   **Expected:**
> - Team Member Details page is displayed successfully.
> - Team Member Details title is displayed.

### C15239322 - Verify Edit Information Functionality

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239322](https://internationalsos.testrail.net/index.php?/cases/view/15239322)

**Preconditions**
> - User is logged into the application.
> - User is on the Team Member Details page.

**Steps and expected results**

1. **Step:**
> - Click the Edit Information link.
> - Verify Personal Information section.
> - Verify Contact Information section.
> - Verify Account Information section.
> - Verify action buttons.
   **Expected:**
> - Modify Team Member page is displayed successfully.
> - Title, Last Name, First Name, Date of Birth, and Gender fields are displayed.
> - Primary Email Address, Secondary Email Address, Address, Postal Code, City, Country, Phone, and Fax fields are displayed.
> - User Name, Owner Company, and AD Account fields are displayed.
> - Submit and Cancel buttons are displayed.

### C15239323 - Verify Contact Information Section Is Displayed

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C15239323](https://internationalsos.testrail.net/index.php?/cases/view/15239323)

**Preconditions**
> - User is logged into the application.
> - User is on the Team Member Details page.

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C15239324 - Verify Administrative Information Section Is Displayed

- Section: My Details
- Type / priority: System Testing / Medium
- Preconditions: Missing; explicit test data: Missing; case-level expected result: Missing
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - clarify missing case details
- TestRail case: [Open C15239324](https://internationalsos.testrail.net/index.php?/cases/view/15239324)

**Preconditions**
> _Not provided._

**Legacy step text**
> _Not provided._

**Case expected result**
> _Not provided._

### C15239580 - Verify User Information Can Be Modified Successfully

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239580](https://internationalsos.testrail.net/index.php?/cases/view/15239580)

**Preconditions**
> - User is logged into the application.
> - User is on the Modify Team Member page.

**Steps and expected results**

1. **Step:**
> - Update FirstName as NewName and City as Panna
> - Click Submit.
   **Expected:**
> - Entered values are accepted.
> - Changes are saved successfully.

### C15239581 - Verify Unlock Account Button Functionality

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239581](https://internationalsos.testrail.net/index.php?/cases/view/15239581)

**Preconditions**
> - User is logged into the application.
> - User is on the Team Member Details page.
> - User account is available for unlock operation.

**Steps and expected results**

1. **Step:**
> - Navigate to the Team Member Details page.
> - Verify the Unlock Account button is visible.
> - Click the Unlock Account button.
> - Review the system response.
   **Expected:**
> - Team Member Details page is displayed successfully.
> - Unlock Account button is displayed.
> - Unlock account action is initiated successfully.
> - Appropriate confirmation or status message is displayed.

### C15239582 - Verify Quit Button Functionality

- Section: My Details
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate
- TestRail case: [Open C15239582](https://internationalsos.testrail.net/index.php?/cases/view/15239582)

**Preconditions**
> - User is logged into the application.
> - User is on the Team Member Details page.

**Steps and expected results**

1. **Step:**
> - Navigate to the Team Member Details page.
> - Click the Quit button.
> - Verify the destination page.
   **Expected:**
> - Team Member Details page is displayed successfully.
> - User is redirected from the Team Member Details page.
> - Previous page or designated landing page is displayed successfully.

### C15239583 - Verify Validation Messages for Mandatory Fields

- Section: Create New Employee
- Type / priority: Functional / Medium
- Preconditions: Present; explicit test data: Missing; case-level expected result: Present
- TestRail AI automation flag: false; custom AI test reference: none
- Existing spec mapping: No matching TestRail ID found in current spec titles
- Preliminary classification: UI candidate - state-changing; isolate data and clean up
- TestRail case: [Open C15239583](https://internationalsos.testrail.net/index.php?/cases/view/15239583)

**Preconditions**
> - User is logged into the application.
> - User has permission to create employee records.

**Steps and expected results**

1. **Step:**
> - Navigate to the Create New Employee page.
> - Leave all fields blank.
> - Click Submit.
   **Expected:**
> - Create New Employee page is displayed successfully.
> - All fields remain blank.
> - System validates the mandatory fields and displays the corresponding validation messages.



