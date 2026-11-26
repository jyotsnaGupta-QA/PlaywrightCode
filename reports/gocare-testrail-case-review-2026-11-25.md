# GoCare TestRail Case Review — 25 November 2026

## Scope and safety

The latest case details below were retrieved from TestRail with GET requests using the repository's `.env` configuration. No exporter was run. No TestRail cases were changed. No Playwright tests were created or executed, and no application or employee data was modified.

The existing authenticated GoCare session was used only to open the **My Details** navigation path. No employee search result was opened, no medical or employee field values were read or reported, no screenshot was captured, and no Quit control was activated. A supplementary attempt to read table-cell labels was rejected by automatic approval review as potentially exposing personal content; no workaround was attempted. Accordingly, the review treats unknown page contents and unobserved navigation as unresolved.

The case records currently include embedded screenshot attachments. Their IDs are listed for traceability; the attachments were not downloaded or viewed because their contents could contain personal or health information.

## Executive recommendation

| Case | Current decision | Recommendation |
|---|---|---|
| C15239321 | HOLD | Keep on HOLD. My Details navigation is verified, but the page's displayed data and a safe page-load assertion are not yet characterized. |
| C15239582 | HOLD | Keep on HOLD. TestRail now documents Search Employees as the destination, but that behavior was not observed; the case also conflicts between its precondition, multi-action step, and case-level expected result. |
| C8928138 | NOT APPROVED | Keep NOT APPROVED. The workflow opens an employee record and asserts health-summary content. The approved synthetic record and access were not independently verified, and no employee record was opened. |

No decision is changed by this report. The proposed wording below is review material only, not approved TestRail text.

## TestRail details retrieved

### C15239321

- **Latest title:** Verify My Details link Page Loads Successfully
- **Section:** Search employee (section 434894) / My Details (section 978873)
- **Preconditions:** User is authenticated and is on an application page.
- **Step 1:** Click the My Details link displayed in the header in search employee page.
- **Expected result:** The Team Member Details page is displayed successfully.
- **Overall expected result:** User is successfully redirected to the Team Member Details page.
- **Test data:** “No test data is required.”
- **References/dependencies:** No refs or dependencies returned.
- **Attachments:** One embedded screenshot, attachment 1000518014; not viewed.

### C15239582

- **Latest title:** Verify Quit Button Exits the Employee Details Page
- **Section:** Search employee (section 434894) / My Details (section 978873)
- **Preconditions:** User is logged into the application. User is on the Employee Details page.
- **Test data field:** “No test data is required.” The step itself contains hard-coded employee search criteria; those values are omitted from this report because their synthetic/approved status is unverified.
- **Step content, in current order:**
  1. Search employee via First Name and Employee GIN (specific values redacted here).
  2. Click on search button.
  3. Click on first name link in search result table.
  4. User navigated to the Employee Details page.
  5. Click the Quit button.
  6. Verify the destination page.
- **Expected-result content, in current order:**
  1. First name and GIN entered successfully.
  2. Search button clicked.
  3. First name link got clicked.
  4. Employee Details page is displayed successfully.
  5. User is redirected from the Employee Details page to Search Employees page.
  6. Search Employees page is displayed successfully.
- **Overall expected result:** User exits the Team Member Details page successfully without any application errors.
- **References/dependencies:** No refs or dependencies returned.
- **Attachments:** No embedded attachments were found in the returned case fields.

The case is stored as one multi-action step with six expected-result lines, rather than six separately mapped steps. Its precondition says the user is already on Employee Details, while its step content first searches for and opens a record. Its title and step refer to Employee Details, while its overall result refers to Team Member Details. The recorded destination is Search Employees, but this destination has not been verified in the app.

### C8928138

- **Latest title:** Verify Employee Dashboard Displays Health Summary Sections
- **Section:** Employee (section 434896) / Employee Details (section 435401) / Dashboard (section 434951)
- **Preconditions:** User is authenticated and is on the Search Employees page. An employee record approved for test use exists and can be found; do not use or change real employee data.
- **Step 1:** Enter First Name and GIN search criteria (specific values omitted here because their synthetic/approved status was not independently verified), then click the search button.
- **Expected result for Step 1:** Search results gets displayed based on user input.
- **Step 2:** Click the First Name link in Search results.
- **Expected result for Step 2:** User navigated to Employee Details page.
- **Step 3:** Click the dashboard tab.
- **Expected result for Step 3:** User navigated to a new tab and can see the welcome text “Welcome to your health dashboard !” and the My profile, My notifications, Final fitness status, Overall health status, and Standard health indicators sections.
- **Overall expected result:** The employee dashboard opens in a new tab and displays the welcome text and the My Profile, My Notifications, Final Fitness Status, Overall Health Status, and Standard Health Indicators sections.
- **Test data:** “Use an approved synthetic employee record with synthetic first and last names. Do not use or record real employee data.”
- **References/dependencies:** No refs or dependencies returned. The precondition and test data require an approved synthetic record, but no approved record identifier/seed source or role is provided.
- **Attachments:** Two embedded screenshots, attachments 8a1f530b-6d37-4c50-ac3d-7ff6fe60162d and 5916a864-95d9-4845-89bc-e3ab7b8fbf2a; not viewed.

The stated sections include fitness and health indicators. Executing the case would require opening an employee record and accessing health-related content. The new-tab behavior is a current TestRail assertion, not an independently observed fact in this review.

## Application and repository evidence

### Confirmed application observation — C15239321 path only

Using the saved session configured by `playwright.config.ts`, the application was at `/Employee/SearchEmployee.aspx`. Clicking the **My Details** header link navigated to `/UserManagement/ViewUser.aspx`. This is the observed URL path; the page heading and field values were not read. A structural-only check found 46 input/select/textarea controls and one Quit-labeled control on that page. This is not evidence that the details page is safe to inspect or that its fields are non-sensitive. The page's exact displayed data and the safest page-load assertion remain unresolved.

### C15239582

The existing session's My Details page is not established as the same page reached by the case's employee-search workflow. To avoid opening an employee record, the search-result path was not followed. Quit was not activated. The function and destination of the Employee Details Quit control therefore remain unverified. The TestRail expected result currently names Search Employees as the destination, which should remain a documented claim until independently confirmed.

### C8928138

No employee search, record opening, dashboard navigation, health-content inspection, or screenshot capture was performed. The new-tab behavior and actual dashboard sections remain unverified. The case explicitly requires approved synthetic data, but this review did not verify that any specific record or access role meets that requirement.

### Existing automation

- `playwright.config.ts` uses `playwright/.auth/user.json` as the saved session and retains screenshots/videos on failure. This is why no test was run and no screenshots were made for these cases.
- `pages/HeaderNavigationPage.ts` implements `openMyDetails()`. It can support the navigation action in C15239321, but does not establish the safe assertions for the destination page.
- `pages/SearchEmployeePage.ts` contains employee-search and record-selection helpers. They were not used. The active search spec logs result rows, so those logging calls would need privacy review before any reuse involving employee records.
- No dedicated Employee Details or Dashboard Page Object or active spec for these exact TestRail IDs was found in the inspected framework.

## Proposed documentation — pending evidence, not approved for TestRail

The text in this section deliberately avoids asserting unverified business behavior. Placeholders and pending requirements must be resolved before a case is approved for automation or TestRail update.

### C15239321 — proposed review text

- **Recommended title:** Verify My Details navigation opens the user details page
- **Preconditions:** User is authenticated in an approved non-production GoCare environment and is on Search Employees. Confirm the account is approved for this test and determine whether its details page may be opened in automation artifacts.
- **Step 1:** Click the My Details header link.
- **Expected result:** The browser navigates to `/UserManagement/ViewUser.aspx`.
- **Step 2:** Verify the destination page using a non-personal page identifier approved by the application owner (for example, a confirmed page heading or stable route assertion). Do not assert or log personal field values.
- **Expected result:** **Pending application-owner confirmation** of a safe page identifier and of whether the page contains personal data.
- **Overall expected result:** The My Details navigation reaches the user details page, verified without reading or recording personal values. **Pending confirmation that this assertion is safe and stable.**
- **Required test data:** No employee test data. Use an approved test account; confirm the account and resulting page data are safe for screenshots/video and logs, or disable those artifacts for this test by an approved framework change before implementation.
- **Dependencies/access:** Authenticated account; approved non-production environment; application-owner confirmation of page identity and data-safety boundary.
- **Current decision:** **HOLD**.
- **Evidence:** The My Details link was followed from Search Employees and the URL became `/UserManagement/ViewUser.aspx`. The page values were not inspected. The current case's Team Member Details label and title assertion were not independently confirmed.

### C15239582 — proposed review text

- **Recommended title:** Verify Quit returns from Employee Details to Search Employees — **provisional; confirm page terminology and destination first**
- **Preconditions:** User is authenticated with the required permission and is on Search Employees. Use a uniquely identified, approved synthetic employee record. The record owner must confirm that it contains no real personal data and is authorized for this test.
- **Step 1:** Search using the approved synthetic record's test criteria.
- **Expected result:** The approved test record appears in search results.
- **Step 2:** Open that result.
- **Expected result:** The Employee Details page opens. **Confirm whether this page is also called Team Member Details in GoCare.**
- **Step 3:** Verify the Quit control is present without activating it.
- **Expected result:** The Quit control is visible. **Confirm this control is the one covered by the case.**
- **Step 4:** After explicit authorization for the test action, activate Quit and observe the destination. **This action was not performed in this review.**
- **Expected result:** **Pending confirmation.** Current TestRail text says Search Employees; verify actual behavior before making this the accepted expected result.
- **Overall expected result:** **Pending confirmation** of the actual Quit destination and whether Quit has any additional effect.
- **Required test data:** An approved synthetic employee record and its access-approved search criteria. The current case's “No test data is required” conflicts with its search step and must be corrected after record approval. The current hard-coded values are not reproduced here.
- **Dependencies/access:** Authenticated role authorized to search/open the approved test record; application-owner confirmation that Quit is a safe navigation action and does not log out or otherwise affect the session.
- **Current decision:** **HOLD**.
- **Evidence:** Current TestRail steps describe a search/open/Quit workflow and state Search Employees as the destination. This review did not open a record or activate Quit, so the destination and side effects are not verified.

### C8928138 — proposed review text

- **Recommended title:** Verify the employee dashboard displays the documented health-summary sections — **retain only after data/access approval and behavior confirmation**
- **Preconditions:** User is authenticated and authorized for one specifically identified, approved synthetic employee record with synthetic health data in a non-production environment. Record owner confirms the record is synthetic, safe to access, and approved for this test. Do not use real employee data.
- **Step 1:** From Search Employees, search using the approved synthetic record's authorized test criteria.
- **Expected result:** The approved test record appears in results.
- **Step 2:** Open the approved record.
- **Expected result:** Employee Details opens.
- **Step 3:** Open the Dashboard tab/link.
- **Expected result:** **Pending confirmation** whether the dashboard opens in a new tab. If approved, verify only the agreed section headings and do not capture/log health values.
- **Step 4:** Verify the documented welcome text and section headings: My Profile, My Notifications, Final Fitness Status, Overall Health Status, and Standard Health Indicators.
- **Expected result:** The approved dashboard shows those headings. **Confirm exact labels and safe assertion boundaries against the application without reading health values.**
- **Overall expected result:** **Pending confirmation** that the approved synthetic record has synthetic health data and that verifying these section headings is permitted.
- **Required test data:** Identified approved synthetic employee and synthetic health-data seed, with record-owner approval. Current TestRail test-data guidance requires synthetic names, but no specific approved record/seed is established by this review.
- **Dependencies/access:** Authorized role for the approved record and dashboard; non-production environment; explicit approval for health-summary access; artifact/log policy that excludes health values.
- **Current decision:** **NOT APPROVED**.
- **Evidence:** Current TestRail documentation expects fitness/health summary sections and says a new tab opens. No employee record or dashboard was accessed in this review, so neither behavior nor data approval was verified.

## Documentation gaps and preservation

1. **C15239321:** TestRail's expected page name is not aligned with the observed route; safe page identity and data exposure are unresolved.
2. **C15239582:** The precondition says already on Employee Details, but the step also searches and opens a record. Search criteria are embedded in the step despite “No test data is required.” The destination claim is unverified, and Employee Details / Team Member Details terminology is inconsistent.
3. **C8928138:** The synthetic-data requirement is useful but lacks a specific approved data seed and role. Health-related section checks and new-tab behavior are unverified.
4. **No TestRail updates were made.** Case IDs, sections, classifications, and existing attachments remain untouched. Attachment binaries were not viewed or changed.

