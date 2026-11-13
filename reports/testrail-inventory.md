# TestRail Inventory - Project 73, Suite 26097

Generated: 2026-11-12T11:25:02.297Z

Source: https://internationalsos.testrail.net (TestRail REST API v2; GET requests only)

## Retrieval verification

- Cases retrieved: **294**; unique IDs: **294**; duplicate IDs: **0**.
- Pagination: offset 0 returned 250; offset 250 returned 44. The API response exposed page sizes, not an independent suite-wide total.
- Live IDs reconcile exactly with the existing cache: 294/294; no missing or additional IDs.
- Sections returned: **177**; populated section IDs: **101**; populated parent-child paths: **101**; empty sections: **76**; distinct populated leaf section names: **93**.
- All referenced section IDs resolve. The 93 figure counts distinct leaf names; it is not the number of populated section records. The API returned 101 distinct populated IDs and paths because some leaf names occur under different parents.

## Field completeness from TestRail

- Preconditions present: 278/294.
- Cases with one or more steps: 287/294.
- Case-level expected result present: 282/294; expected result present at case or step level: 287/294.
- Explicit test data present: 0/294; missing values are labeled `Not supplied in TestRail`.
- Types: Functional: 209; System Testing: 83; Sanity Test: 2.
- Priorities: Medium: 292; High: 2.
- TestRail AI flags: is_ai_automated=false 294/294; is_ai_generated=false 294/294. The API does not expose a generic Automation-status field; AI flags do not prove local Playwright coverage.
- Sensitive email, phone-like, credential, DOB, and known fixture values are redacted; redaction does not alter TestRail.

## Search employee (section ID 434894; 4 case(s))

### C8927857 - Verify User Can Successfully Search an Employee Using Valid Search Criteria

- Section: Search employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employees page
  > Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > 1. Navigate to the Search Employees page.
    > 2. Enter First Name = [REDACTED] and GIN Number = [REDACTED_ID]
    > 3. Click the Search button.
    > 4. Review the search results.
    - Step expected result:
      > 1. Search Employees page is displayed successfully.
      > 2. First Name and GIN Number are accepted.
      > 3. Search is executed successfully.
      > 4. Employee record matching Last Name as [REDACTED] and GIN Number as [REDACTED_ID] is displayed in the search results.
- Case-level expected result:
  > User can successfully search and view employee records matching the entered criteria.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8927858 - Verify System Displays No Results for Invalid Employee Search Criteria

- Section: Search employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Search Employees page.
- Test steps:
  - Step 1 action:
    > Navigate to Search Employees page.
    > 
    > Enter an invalid Employee First Name as [REDACTED_NAME] and Last Name as [REDACTED_NAME]
    > 
    > Click Search.
    > 
    > Review the search results section.
    - Step expected result:
      > Search Employees page is displayed successfully.
      > 
      > Search criteria are accepted.
      > 
      > Search is executed successfully.
      > 
      > No matching employee records are displayed.
- Case-level expected result:
  > Appropriate "There are no employees available for the search performed." message is displayed.
  > No application errors occur.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239052 - Verify Reset Button Clears All Search Criteria

- Section: Search employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
- Test steps:
  - Step 1 action:
    > Navigate to Search Employees page.
    > 
    > Enter values in Last Name as [REDACTED_NAME], First Name as [REDACTED_NAME], GIN as [REDACTED_ID].
    > 
    > Select values from Status as Active, Company as ALS, Category as HCC, and Fitness Status as Fit dropdowns.
    > 
    > Check the Created By Intl. SOS checkbox.
    > 
    > Click Reset.
    > 
    > Verify all fields on the page.
    - Step expected result:
      > Search Employees page is displayed successfully.
      > 
      > Values are entered successfully.
      > 
      > Selected values are displayed.
      > 
      > Checkbox is selected.
      > 
      > Reset action is executed successfully.
      > 
      > All entered values are cleared, dropdowns return to default values, and the checkbox is unchecked.
- Case-level expected result:
  > All search criteria are reset to their default state.
  > User can perform a new search without manually clearing fields.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239309 - Verify Advanced Search Link Expands Additional Search Criteria

- Section: Search employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > Click the Advanced Search
    - Step expected result:
      > Additional search fields (Area, Job Site, Geo Market) are displayed.
- Case-level expected result:
  > Advanced Search expands successfully and displays additional search filters.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / Create Exam (section ID 434893; 2 case(s))

### C8927855 - Successfully create an exam

- Section: Search employee / Create Exam
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > User search an employee
    - Step expected result:
      > Search result gets displayed
  - Step 2 action:
    > Select radio button for the employee
    - Step expected result:
      > Radio button gets selected
  - Step 3 action:
    > Click on Create Exam Button
    - Step expected result:
      > User navigated to Create New Exam page
  - Step 4 action:
    > User do authorization and enter mandatory details
    - Step expected result:
      > User able to enter mandatory details
  - Step 5 action:
    > Click on submit button with invalid data or skipped mandatory fields
    - Step expected result:
      > User can see validation message
  - Step 6 action:
    > Click on submit button with valid data
    - Step expected result:
      > Navigated to Medical Exam Information page
  - Step 7 action:
    > Enter mandatory details in tabs:
    > 
    > Physician's Report
    > 
    > Lab Analysis
    > 
    > Attached Medical Reports
    > 
    > Fitness Conclusion
    > 
    > Document History tabs
    - Step expected result:
      > Able to enter required details
  - Step 8 action:
    > In fitness conclusion tab, enter details in Physician Review and click on submit button
    - Step expected result:
      > User can see new section for Intl. SOS Review
  - Step 9 action:
    > Enter details in Intl. SOS Review section
    - Step expected result:
      > User able to enter details
  - Step 10 action:
    > Click on submit button with invalid data or skipped mandatory fields
    - Step expected result:
      > User can see validation message
  - Step 11 action:
    > Click on submit button with valid data
    - Step expected result:
      > User can see a success message 'Thank you. The comments have been saved successfully.' with 'Ready to Print' status. Also user will receive an email in provided mail ID
- Case-level expected result:
  > User can see Ready to Print status
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8927856 - Medical exam creation gets failed for the employee

- Section: Search employee / Create Exam
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > User search an employee
    - Step expected result:
      > Search result gets displayed
  - Step 2 action:
    > Select radio button for the employee
    - Step expected result:
      > Radio button gets selected
  - Step 3 action:
    > Click on Create Exam Button
    - Step expected result:
      > User navigated to Create New Exam page
  - Step 4 action:
    > User do authorized and enter required details except one mandatory field
    - Step expected result:
      > User able to enter details
  - Step 5 action:
    > User click on submit button
    - Step expected result:
      > User can see alert message
- Case-level expected result:
  > The Medical Center is mandatory and cannot be blank.
  > ![](index.php?/attachments/get/4d4cecb8-e3f8-4628-8184-97e9b0df4169)
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / View Exam (section ID 435322; 1 case(s))

### C8934317 - User successfully able to view exam

- Section: Search employee / View Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. User is on search employee page
  > 2. Search result should be visible to user
- Test steps:
  - Step 1 action:
    > User select radio button from search result and click on View Exam button
    > 
    > ![](index.php?/attachments/get/b0c48dfd-63fd-454a-a76d-b03ac9bfa035)
    - Step expected result:
      > User navigated to 'Medical Exam Information' page
      > 
      > ![](index.php?/attachments/get/f69f2dd0-8065-4fe1-9604-9f2b09f860f8)
  - Step 2 action:
    > User can see data in 'Medical Exam Information' page
    - Step expected result:
      > User can see details like:
      > 1. Tabs: Medical Exam, Medical History, Vaccinations and Tracking
      > 2. Drop-down for 'View Previous Exams'
      > 3. 'Employee Information' section
      > 4. Buttons: Print Health Passport, Print Questionnaire, Print Medical Compliance Certificate
      > 5. Tabs: Medical Exam Details, Physician's Report, Lab Analysis, Attached Medical Reports, Fitness Conclusion and Document History
      > 6. Buttons: Create Exam, Cancel
      > 
      > ![](index.php?/attachments/get/96fca6b8-8376-409c-954c-3d2049fe2cf7)
  - Step 3 action:
    > User click on Medical History tab
    - Step expected result:
      > User navigated to Medical History page
      > 
      > ![](index.php?/attachments/get/e8c8da1b-f2e1-487b-aec2-1822bf315d00)
  - Step 4 action:
    > User click on Vaccination History tab
    - Step expected result:
      > User navigated to Vaccination History page
      > 
      > ![](index.php?/attachments/get/5a592a81-0ebd-4140-b322-0c9a29882dc2)
  - Step 5 action:
    > User click on Tracking tab
    - Step expected result:
      > User navigated to Medical Exam Information page
      > 
      > ![](index.php?/attachments/get/711347c6-8d31-467a-b670-c717dd16c9bf)
  - Step 6 action:
    > User click on 'Print Health Passport' button
    - Step expected result:
      > User navigated to Print Health Passport page
  - Step 7 action:
    > User click on Quit button
    - Step expected result:
      > User navigated to Employee Details page
      > 
      > ![](index.php?/attachments/get/ab51d0ff-97f4-4638-9001-ec16e44a029f)
  - Step 8 action:
    > User click on 'Print Questionnaire' button
    - Step expected result:
      > User navigated to Print Questionnaire page
  - Step 9 action:
    > User click on 'Print Medical Compliance Certificate' button
    - Step expected result:
      > User navigated to Print Medical Compliance Certificate page
- Case-level expected result:
  > User successful navigated to 'Medical Exam Information' page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / New column added in search screen result page for all the employees (section ID 467405; 1 case(s))

### C9404218 - New column added in search screen result table

- Section: Search employee / New column added in search screen result page for all the employees
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Already login into system
- Test steps:
  - Step 1 action:
    > 1. User enter employee details in search result page
    > 2. Click on search button
    > 3. User can see newly added column
    - Step expected result:
      > 1. Successfully enter employee details
      > 2. search results gets display
      > 3. Newly added column 'Certificate Expiry Date' can be seen in search result table
      > ![](index.php?/attachments/get/[REDACTED_ATTACHMENT_ID])
- Case-level expected result:
  > User can see new column added in search result table 'Certificate Expiry Date'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / Header Links (section ID 978872; 3 case(s))

### C8934304 - Verify Need Help Link Navigation

- Section: Search employee / Header Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > Click the Need Help? link displayed in the
    - Step expected result:
      > Need Help page/window opens successfully and relevant help information is displayed.
- Case-level expected result:
  > User is redirected to the Help page without any errors.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239053 - Verify My Details Link Navigation

- Section: Search employee / Header Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > Click the My details link displayed
    - Step expected result:
      > User profile/details page is displayed successfully.
- Case-level expected result:
  > User can view their account details successfully.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239310 - Verify Change Password Link Navigation

- Section: Search employee / Header Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > Click the Change Password link displayed in the header.
    - Step expected result:
      > Change Password page is displayed successfully.
- Case-level expected result:
  > User can access the Change Password functionality.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / My Details (section ID 978873; 7 case(s))

### C15239321 - Verify Team Member Details Page Loads Successfully

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on any application page.
- Test steps:
  - Step 1 action:
    > Click the My Details link displayed in the header.
    > 
    > Verify the page title.
    - Step expected result:
      > Team Member Details page is displayed successfully.
      > 
      > Team Member Details title is displayed.
- Case-level expected result:
  > User is successfully redirected to the Team Member Details page.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239322 - Verify Edit Information Functionality

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Team Member Details page.
- Test steps:
  - Step 1 action:
    > Click the Edit Information link.
    > 
    > Verify Personal Information section.
    > 
    > Verify Contact Information section.
    > 
    > Verify Account Information section.
    > 
    > Verify action buttons.
    - Step expected result:
      > Modify Team Member page is displayed successfully.
      > 
      > Title, Last Name, First Name, Date of Birth, and Gender fields are displayed.
      > 
      > Primary Email Address, Secondary Email Address, Address, Postal Code, City, Country, Phone, and Fax fields are displayed.
      > 
      > User Name, Owner Company, and AD Account fields are displayed.
      > 
      > Submit and Cancel buttons are displayed.
- Case-level expected result:
  > Modify Team Member page loads successfully with all editable fields and controls.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239323 - Verify Contact Information Section Is Displayed

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Team Member Details page.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239324 - Verify Administrative Information Section Is Displayed

- Section: Search employee / My Details
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239580 - Verify User Information Can Be Modified Successfully

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Modify Team Member page.
- Test steps:
  - Step 1 action:
    > Update FirstName as NewName and City as Panna
    > 
    > Click Submit.
    - Step expected result:
      > Entered values are accepted.
      > 
      > Changes are saved successfully.
- Case-level expected result:
  > User information is updated successfully and saved in the system.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239581 - Verify Unlock Account Button Functionality

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Team Member Details page.
  > User account is available for unlock operation.
- Test steps:
  - Step 1 action:
    > Navigate to the Team Member Details page.
    > 
    > Verify the Unlock Account button is visible.
    > 
    > Click the Unlock Account button.
    > 
    > Review the system response.
    - Step expected result:
      > Team Member Details page is displayed successfully.
      > 
      > Unlock Account button is displayed.
      > 
      > Unlock account action is initiated successfully.
      > 
      > Appropriate confirmation or status message is displayed.
- Case-level expected result:
  > Unlock Account functionality executes successfully and user get to see the message Account has been unlocked
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239582 - Verify Quit Button Functionality

- Section: Search employee / My Details
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Team Member Details page.
- Test steps:
  - Step 1 action:
    > Navigate to the Team Member Details page.
    > 
    > Click the Quit button.
    > 
    > Verify the destination page.
    - Step expected result:
      > Team Member Details page is displayed successfully.
      > 
      > User is redirected from the Team Member Details page.
      > 
      > Previous page or designated landing page is displayed successfully.
- Case-level expected result:
  > User exits the Team Member Details page successfully without any application errors.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / Footer Links (section ID 978874; 3 case(s))

### C15239318 - Verify Help Link Navigation

- Section: Search employee / Footer Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on any application page displaying the footer.
- Test steps:
  - Step 1 action:
    > Locate the Help link in the footer section.
    > 
    > Click the Help link.
    > 
    > Verify the page content.
    - Step expected result:
      > Help link is displayed.
      > 
      > Help page opens successfully.
      > 
      > Help information is displayed correctly.
- Case-level expected result:
  > User is able to access the Help page successfully without any errors.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239319 - Verify Contact Us Link Navigation

- Section: Search employee / Footer Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on any application page displaying the footer.
- Test steps:
  - Step 1 action:
    > Locate the Contact Us link in the footer section.
    > 
    > Click the Contact Us link.
    > 
    > Verify the page content.
    - Step expected result:
      > Contact Us link is displayed.
      > 
      > Contact Us page opens successfully.
      > 
      > Contact information is displayed correctly.
- Case-level expected result:
  > User is able to access the Contact Us page and view contact details successfully.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239320 - Verify Privacy Policy Link Navigation

- Section: Search employee / Footer Links
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on any application page displaying the footer.
- Test steps:
  - Step 1 action:
    > Locate the Privacy Policy link in the footer section.
    > 
    > Click the Privacy Policy link.
    > 
    > Verify the page content.
    - Step expected result:
      > Privacy Policy link is displayed.
      > 
      > Privacy Policy page opens successfully.
      > 
      > Privacy Policy information is displayed correctly.
- Case-level expected result:
  > User is able to access and view the Privacy Policy successfully without any errors.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search employee / Change Password (section ID 978890; 7 case(s))

### C15239311 - Verify Change Password Page Loads Successfully

- Section: Search employee / Change Password
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has access to the Change Password functionality.
- Test steps:
  - Step 1 action:
    > Click the Change Password link from the application header.
    > 
    > Verify the page content.
    > 
    > Verify the action buttons.
    > 
    > Verify the password policy message.
    - Step expected result:
      > Change Password page is displayed successfully.
      > 
      > Existing Password, New Password, Confirm New Password, Security Question 1, Security Answer 1, Security Question 2, Security Answer 2 fields are displayed.
      > 
      > Submit and Cancel buttons are displayed.
      > 
      > Password policy message is displayed correctly.
- Case-level expected result:
  > Change Password page loads successfully and all fields, controls, and instructions are displayed correctly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239312 - Verify Password Is Changed Successfully

- Section: Search employee / Change Password
- Priority: High
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User knows the current password.
  > User has valid responses for security questions.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Enter a valid Existing Password.
    > 
    > Enter a valid New Password meeting the password policy requirements.
    > 
    > Enter the same value in Confirm New Password.
    > 
    > Select Security Question 1 and enter Security Answer 1.
    > 
    > Select Security Question 2 and enter Security Answer 2.
    > 
    > Click Submit.
    - Step expected result:
      > Change Password page is displayed.
      > 
      > Password is accepted.
      > 
      > Password is accepted.
      > 
      > Passwords match successfully.
      > 
      > Values are accepted.
      > 
      > Values are accepted.
      > 
      > Password change request is processed successfully.
- Case-level expected result:
  > Password is updated successfully and a confirmation message is displayed.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239313 - Verify Mandatory Field Validation

- Section: Search employee / Change Password
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > Change Password page is accessible.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Leave Existing Password, New Password, Confirm New Password, Security Questions, and Security Answers blank.
    > 
    > Click Submit.
    - Step expected result:
      > Page is displayed successfully.
      > 
      > Fields remain empty.
      > 
      > A validation popup/message is displayed indicating mandatory fields must be completed.
- Case-level expected result:
  > System displays a validation popup/message for missing mandatory fields and prevents submission of the password change request.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239314 - Verify Existing Password Validation

- Section: Search employee / Change Password
- Priority: High
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has access to the Change Password page.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Enter an invalid Existing Password.
    > 
    > Enter a valid New Password.
    > 
    > Enter the same value in Confirm New Password.
    > 
    > Complete Security Question and Answer fields.
    > 
    > Click Submit.
    - Step expected result:
      > Page is displayed successfully.
      > 
      > Value is accepted for validation.
      > 
      > Password is accepted.
      > 
      > Passwords match successfully.
      > 
      > Values are accepted.
      > 
      > Existing password validation is performed.
- Case-level expected result:
  > An error message is displayed indicating that the Existing Password is incorrect and the password is not updated.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239315 - Verify Password Policy Validation

- Section: Search employee / Change Password
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > Change Password page is accessible.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Enter the Existing Password.
    > 
    > Enter a New Password that violates the policy (e.g., less than 12 characters or missing uppercase/lowercase/number/special character).
    > 
    > Enter the same value in Confirm New Password.
    > 
    > Complete Security Question and Answer fields.
    > 
    > Click Submit.
    - Step expected result:
      > Page is displayed successfully.
      > 
      > Password is accepted.
      > 
      > Password is accepted for validation.
      > 
      > Value is accepted.
      > 
      > Values are accepted.
      > 
      > Password policy validation is triggered.
- Case-level expected result:
  > Appropriate password policy validation message is displayed and password update is prevented.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239316 - Verify New Password and Confirm Password Mismatch Validation

- Section: Search employee / Change Password
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > Change Password page is accessible.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Enter a valid Existing Password.
    > 
    > Enter a valid New Password.
    > 
    > Enter a different value in Confirm New Password.
    > 
    > Complete Security Question and Answer fields.
    > 
    > Click Submit.
    - Step expected result:
      > Page is displayed successfully.
      > 
      > Password is accepted.
      > 
      > Password is accepted.
      > 
      > Value is accepted for validation.
      > 
      > Values are accepted.
      > 
      > Password comparison validation is performed.
- Case-level expected result:
  > System displays a validation message indicating that New Password and Confirm New Password do not match. Password update is not completed.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239317 - Verify Cancel Button Functionality

- Section: Search employee / Change Password
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > Change Password page is accessible.
- Test steps:
  - Step 1 action:
    > Navigate to the Change Password page.
    > 
    > Enter values in one or more fields.
    > 
    > Click Cancel.
    - Step expected result:
      > Page is displayed successfully.
      > 
      > Values are entered successfully.
      > 
      > User is redirected from the Change Password page.
- Case-level expected result:
  > Change Password operation is cancelled and no changes are saved.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Create New Employee (section ID 434892; 3 case(s))

### C8927852 - Verify Employee Record Is Created Successfully

- Section: Employee / Create New Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has permission to create employee records.
  > Valid employee information is available.
- Test steps:
  - Step 1 action:
    > Navigate to the Create New Employee page.
    > 
    > Enter Employee Status = Active.
    > Enter Last Name = [REDACTED_NAME]
    > Enter First Name = [REDACTED_NAME]
    > Enter Gender = Male
    > Enter Company = Eramet
    > Enter Date of Birth = 15-Jan-1995
    > Enter GIN Number = [REDACTED_ID]
    > Enter Primary Email Address = [REDACTED]
    > 
    > Click Submit.
    - Step expected result:
      > Create New Employee page is displayed successfully.
      > 
      > Details are accepted successfully.
      > 
      > Employee creation request is processed successfully.
- Case-level expected result:
  > Employee record is created successfully and a confirmation message is displayed.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8927853 - Verify Employee Record Creation Fails with Invalid Data

- Section: Employee / Create New Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has permission to create employee records.
- Test steps:
  - Step 1 action:
    > Navigate to the Create New Employee page.
    > 
    > Enter invalid employee information like Employee Status = Active.
    > Enter Last Name = [REDACTED_NAME].
    > Enter First Name = [REDACTED_NAME].
    > Enter Gender = Male.
    > Enter Company = International SOS.
    > Enter Date of Birth = 15-Jan-1995.
    > Enter GIN Number = 9%&654321.
    > Enter Primary Email Address = abc#mail.com
    > 
    > Click Submit.
    - Step expected result:
      > Create New Employee page is displayed successfully.
      > 
      > Information is accepted for validation.
      > 
      > System validation is triggered and employee record submission is prevented.
- Case-level expected result:
  > A validation popup is displayed with the messages:
  > • Please enter a valid GIN number.
  > • Please enter a valid Primary E-mail Address.
  > 
  > Employee record is not created.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15239583 - Verify Validation Messages for Mandatory Fields

- Section: Employee / Create New Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has permission to create employee records.
- Test steps:
  - Step 1 action:
    > Navigate to the Create New Employee page.
    > 
    > Leave all fields blank.
    > 
    > Click Submit.
    - Step expected result:
      > Create New Employee page is displayed successfully.
      > 
      > All fields remain blank.
      > 
      > System validates the mandatory fields and displays the corresponding validation messages.
- Case-level expected result:
  > The system displays validation messages for all mandatory fields:
  > 
  > • The Employee Status is mandatory and cannot be blank.
  > • The Last Name is [REDACTED_NAME] be blank.
  > • The First Name is [REDACTED_NAME] be blank.
  > • The Gender of the employee is mandatory and cannot be blank.
  > • The Date of Birth is mandatory and cannot be blank.
  > • The Company is mandatory and cannot be blank.
  > • The Employee GIN is mandatory and cannot be blank.
  > • The Primary E-mail Address is mandatory and cannot be blank.
  > 
  > Employee record is not created.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Dashboard (section ID 434951; 1 case(s))

### C8928138 - Verify dashboard page

- Section: Employee / Employee Details / Dashboard
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employees page after successful login and Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > Enter details in Last Name, First Name fields and click on search button
    - Step expected result:
      > Search results gets displayed based on user input
  - Step 2 action:
    > User click on Search results Last Name, First Name fields link
    - Step expected result:
      > User navigated to Employee Details page
  - Step 3 action:
    > User click on dashboard tab
    - Step expected result:
      > User navigated to new tab and can see welcome text as 'Welcome to your health dashboard !'. Sections like My profile, My notifications, Final fitness status, Overall health status and Standard health indicators
- Case-level expected result:
  > User navigated to new tab
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Dependents (section ID 434950; 1 case(s))

### C8928137 - Verify Dependents page

- Section: Employee / Employee Details / Dependents
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employees page after successful login and Employee record should exist in the system
- Test steps:
  - Step 1 action:
    > Enter details in Last Name, First Name fields and click on search button
    - Step expected result:
      > Search results gets displayed based on user input
      > ![](index.php?/attachments/get/8a1f530b-6d37-4c50-ac3d-7ff6fe60162d)
  - Step 2 action:
    > User click on Search results Last Name, First Name fields link
    - Step expected result:
      > User navigated to Employee Details page
  - Step 3 action:
    > User click on Dependents tab (If dependent exist with the record)
    - Step expected result:
      > User is on Dependents tab where user can see Dependents table. And table has column details and radio button with each record:
      > Columns are: Last Name, First Name, GIN Number, DOB, Last Exam Date, Relation
      > Buttons: Add New Dependents, Create Exam, View Exam, Quit
      > ![](index.php?/attachments/get/0eb0efad-7106-46ef-9ddc-e064cc7fdf6b)
  - Step 4 action:
    > User click on Dependents tab (If dependent does not exist with the record)
    - Step expected result:
      > User can see alert message in dependent section "There is no dependent available for this employee."
      > ![](index.php?/attachments/get/fd86c897-33be-4d1b-85a2-b5e2b5be8bb7)
- Case-level expected result:
  > User is on Dependents tab
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab (section ID 434795; 1 case(s))

### C8932676 - Verify administration tab

- Section: Employee / Employee Details / Administration Tab
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should exist in the system
  > User is on Administration tab
- Test steps:
  - Step 1 action:
    > When user is on Administration tab
    - Step expected result:
      > User can see Administration label, Select an operation drop-down and Quit button on the screen
      > ![](index.php?/attachments/get/a43deb16-9b4c-46da-8b31-37d2872afc6b)
- Case-level expected result:
  > User can see Administration page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Delete Employee (section ID 435222; 2 case(s))

### C8927385 - Successfully Delete an employee

- Section: Employee / Employee Details / Administration Tab / Delete Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Employee record should exist in the system
  > 2. User is on Administration tab
- Test steps:
  - Step 1 action:
    > user select delete employee from select an operation drop down field
    - Step expected result:
      > User is able to select data from drop-down
  - Step 2 action:
    > user select check box for Confirm employee deletion
    - Step expected result:
      > User is able to select checkbox
      > ![](index.php?/attachments/get/8a44a516-0287-484f-a583-c71a1079cb2f)
  - Step 3 action:
    > User click on Submit button
    - Step expected result:
      > User navigated to new window to validate credential
      > ![](index.php?/attachments/get/e3358995-ded5-4248-b1fe-2b84022281d4)
  - Step 4 action:
    > User enter username, password click on submit button
    - Step expected result:
      > User see a success message for delete an employee
      > ![](index.php?/attachments/get/fdca106b-fed9-452f-9a36-fc68023a984f)
- Case-level expected result:
  > Employee deleted successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932729 - Failed to delete an employee

- Section: Employee / Employee Details / Administration Tab / Delete Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should not exist in the system
  > User is on Administration tab
- Test steps:
  - Step 1 action:
    > user select delete employee from select an operation drop down field
    - Step expected result:
      > User is able to select data from drop-down
  - Step 2 action:
    > user select check box for Confirm employee deletion
    - Step expected result:
      > User is able to select checkbox
      > ![](index.php?/attachments/get/3a165552-0a7a-4452-b994-33484c8a4e26)
  - Step 3 action:
    > User click on Quit button
    - Step expected result:
      > User navigated to search employee page
- Case-level expected result:
  > Employee not deleted and User navigated to search employee page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Change status of an Exam (section ID 435223; 2 case(s))

### C8927386 - Change status of an Exam if exam exist

- Section: Employee / Employee Details / Administration Tab / Change status of an Exam
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Exam should be created for employee
  > 2. User is on Administration tab
- Test steps:
  - Step 1 action:
    > Select change status of Exam from drop-down
    - Step expected result:
      > User is able to select data from drop-down
  - Step 2 action:
    > Select exam date from drop-down
    - Step expected result:
      > User is able to select data from drop-down and can see fields Current exam status, Change to exam status and Send for client review checkbox
  - Step 3 action:
    > Select change to exam status drop-down and click on submit button
    - Step expected result:
      > User is able to select data from drop-down and navigated to validate credential window where user enters credential details and click on submit button and can see status changed for an exam
      > ![](index.php?/attachments/get/006152fe-13c1-4dda-8844-c3b48ecc4c72) ![](index.php?/attachments/get/8f870946-a36d-4c5f-baea-55c470531c22)
  - Step 4 action:
    > Select change to exam status drop-down, select checkbox for Send for client review and click on submit button
    - Step expected result:
      > User is able to select data from drop-down and navigated to validate credential window where user enters credential details and click on submit button and can see status changed for an exam
      > ![](index.php?/attachments/get/5e71f92c-83e3-4e8b-ac45-b62d24d4ea9e)
- Case-level expected result:
  > Exam status changed successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932730 - Change status of an Exam if there is no exam

- Section: Employee / Employee Details / Administration Tab / Change status of an Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > No exam created for employee
  > User is on Administration tab
- Test steps:
  - Step 1 action:
    > Select change status of Exam from drop-down
    - Step expected result:
      > User can see alert message 'No exams found for the selected employee' in Change Medical Exam Status section
      > ![](index.php?/attachments/get/a40615a5-bcce-4c10-9f4a-d586c5da677f)
- Case-level expected result:
  > User can see alert message 'No exams found for the selected employee'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Create dummy exam (section ID 435224; 2 case(s))

### C8927485 - Create dummy exam if exam present for employee

- Section: Employee / Employee Details / Administration Tab / Create dummy exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Employee and exam record should exist in the system
- Test steps:
  - Step 1 action:
    > Select create dummy Exam from select an operation drop-down
    - Step expected result:
      > User is able to select data from drop-down
  - Step 2 action:
    > Select MET from drop-down
    - Step expected result:
      > User is able to select data from drop-down
  - Step 3 action:
    > Select date of exam and enter comments
    - Step expected result:
      > User is able to select data from drop-down and enter data in text field
  - Step 4 action:
    > Click on Submit button
    - Step expected result:
      > User get to see success message
- Case-level expected result:
  > Dummy exam created successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932731 - Create dummy exam if there is no exam present for employee

- Section: Employee / Employee Details / Administration Tab / Create dummy exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should present in the system
- Test steps:
  - Step 1 action:
    > Select create dummy Exam from select an operation drop-down
    - Step expected result:
      > User can see a message 'There are no MET's.' within Create Dummy Exam section
      > ![](index.php?/attachments/get/db2e0ef3-1252-4f92-bb50-9f8ae46baf74)
- Case-level expected result:
  > User can see a message 'There are no MET's.'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Delete an Exam (section ID 435225; 2 case(s))

### C8927533 - Delete an Exam if exam present

- Section: Employee / Employee Details / Administration Tab / Delete an Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > **Exam should exist for an employee**
- Test steps:
  - Step 1 action:
    > Select delete an Exam from select an operation drop-down
    - Step expected result:
      > User is able to select data from drop-down
  - Step 2 action:
    > Select exam from select an exam drop-down
    - Step expected result:
      > User is able to select data from drop-down
      > ![](index.php?/attachments/get/bca1944e-353f-4f95-b776-f837b84d840a)
  - Step 3 action:
    > Tick the checkbox for Confirm exam deletion
    - Step expected result:
      > User is able to select checkbox
      > ![](index.php?/attachments/get/86be2605-532b-439a-815c-6109f020771d)
  - Step 4 action:
    > Click on Submit button
    - Step expected result:
      > User navigated to new window to validate credential and click on submit button and get to see an exam deletion success message
      > ![](index.php?/attachments/get/9de3b169-cae7-4607-8242-11db7f6d853b) ![](index.php?/attachments/get/29ee2834-3105-44e7-8a07-5a8d09a2ab0b)
- Case-level expected result:
  > Exam deleted successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932732 - Delete an exam if there is no exam present

- Section: Employee / Employee Details / Administration Tab / Delete an Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > There is no exam present for an employee
- Test steps:
  - Step 1 action:
    > Select delete an Exam from select an operation drop-down
    - Step expected result:
      > user can see a message 'No exams found for the selected employee' within Delete Medical Exam section
      > ![](index.php?/attachments/get/873b1e03-52ac-4a20-b856-4840ebf89403)
- Case-level expected result:
  > user can see a message 'No exams found for the selected employee'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Delete recommendation letter (section ID 435226; 3 case(s))

### C8927534 - Delete recommendation letter if exam present

- Section: Employee / Employee Details / Administration Tab / Delete recommendation letter
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record should present with an exam
- Test steps:
  - Step 1 action:
    > User select delete recommendation letter from select an operation drop-down
    - Step expected result:
      > User can see "Select an exam" drop-down (If there is exam exist)
  - Step 2 action:
    > User select data from "Select an exam" drop-down
    - Step expected result:
      > User can see checkbox for Delete Recommendation Letter and Advice/Recommendations and Comments from Doctor
      > ![](index.php?/attachments/get/1db3abcd-b43e-4957-be3c-3a2b65775818)
  - Step 3 action:
    > User select checkbox for Delete Recommendation Letter and Advice/Recommendations and Comments from Doctor and click on submit button
    - Step expected result:
      > User navigated to new window
      > ![](index.php?/attachments/get/cabc8afc-7c53-46ab-af8d-ffc3ec6bdaf0)
  - Step 4 action:
    > User enter credential details to validate credential and click on submit button
    - Step expected result:
      > User can see success message
- Case-level expected result:
  > Recommendation Letter will get deleted successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932733 - Delete recommendation letter if there is no exam

- Section: Employee / Employee Details / Administration Tab / Delete recommendation letter
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932734 - Delete recommendation letter if exam present but no recommendation letter present

- Section: Employee / Employee Details / Administration Tab / Delete recommendation letter
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record with exam should be present
- Test steps:
  - Step 1 action:
    > User select delete recommendation letter from select an operation drop-down
    - Step expected result:
      > User can see "Select an exam" drop-down
      > ![](index.php?/attachments/get/a0f00dee-539f-4894-8951-cc3b3211aab2)
  - Step 2 action:
    > User select data from "Select an exam" drop-down
    - Step expected result:
      > User can see a message 'There is no recommendation letter and comment for medical exam selected'
      > ![](index.php?/attachments/get/e41ec624-4884-4451-821f-c1fc97b348ed)
- Case-level expected result:
  > User can see a message 'There is no recommendation letter and comment for medical exam selected'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / Administration Tab / Delete Reminders (section ID 435227; 3 case(s))

### C8928112 - Delete Reminders if there is exam and reminders both are present

- Section: Employee / Employee Details / Administration Tab / Delete Reminders
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee with exam exist in the system
- Test steps:
  - Step 1 action:
    > Select 'Delete Reminders' from "Select an operation" drop-down
    - Step expected result:
      > Existing exam and Upcoming exam with radio button will get displayed
      > ![](index.php?/attachments/get/5a0a9aa9-4411-4733-b132-62a0e1e6d78d)
  - Step 2 action:
    > User select any radio button for Existing exam and Upcoming exam (If reminder present)
    - Step expected result:
      > User get to see drop down list "Exam Reminder Type"
  - Step 3 action:
    > User select data from "Exam Reminder Type"
    - Step expected result:
      > User can see table 'Sent Reminder Details' with check box and buttons submit, cancel
      > ![](index.php?/attachments/get/efcb10eb-3ebe-4e1b-86ff-fdabb4ded5f7)
  - Step 4 action:
    > User select checkbox for reminder and click on submit button
    - Step expected result:
      > User get to see a popup window with Ok button for reminder confirmation
      > ![](index.php?/attachments/get/b0cbbb52-99f0-4b58-9230-c97da73c614c)
  - Step 5 action:
    > User click on OK button on the popup window for delete reminder
    - Step expected result:
      > User navigated to new window to validate credential
      > ![](index.php?/attachments/get/98b19951-5663-4d66-813d-07ce64c0dea3)
  - Step 6 action:
    > User enter credential and click on submit button
    - Step expected result:
      > Reminder gets deleted successfully
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932739 - Delete reminders If there is no exam present for Existing exam or Upcoming exam

- Section: Employee / Employee Details / Administration Tab / Delete Reminders
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee with exam should present in the system
- Test steps:
  - Step 1 action:
    > Select 'Delete Reminders' from "Select an operation" drop-down
    - Step expected result:
      > User can see two radio button within Delete reminders for medical exam section
      > 1. Existing Exams
      > 2. Upcoming Exams
      > ![](index.php?/attachments/get/342faebf-73c3-4bc3-9b29-8347d1c18e15)
  - Step 2 action:
    > User select radio button for Existing Exams
    - Step expected result:
      > User can see a message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
      > ![](index.php?/attachments/get/276698a1-d16d-4de5-8fb7-d9fc2736f397)
  - Step 3 action:
    > User select radio button for Upcoming Exams
    - Step expected result:
      > User can see a message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
      > ![](index.php?/attachments/get/5e3fc35c-7931-46c0-b2fa-b0915228c959)
- Case-level expected result:
  > User can see a message 'There are no exam reminders for the selected medical exam.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8932744 - Delete reminders If there is exam present but no reminder for Existing or Upcoming exam

- Section: Employee / Employee Details / Administration Tab / Delete Reminders
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee with exam should present in the system
- Test steps:
  - Step 1 action:
    > Select 'Delete Reminders' from "Select an operation" drop-down
    - Step expected result:
      > User can see two radio button within Delete reminders for medical exam section
      > 
      > Existing Exams
      > Upcoming Exams
      > ![](index.php?/attachments/get/9ea18d4d-4f05-4fc1-bf0a-d143d319c8e5)
  - Step 2 action:
    > User select radio button for Existing Exams
    - Step expected result:
      > User can see a drop-down 'Select an exam'
      > ![](index.php?/attachments/get/c50c200a-f254-4bdb-8076-b8e6dec2a36e)
  - Step 3 action:
    > User select date from 'Select an exam' drop-down
    - Step expected result:
      > User can see message 'There are no exam reminders for the selected medical exam.' within Delete reminders for medical exam section
      > ![](index.php?/attachments/get/db328a2c-e7de-4855-826f-ecfd2eae7003)
- Case-level expected result:
  > User can see message 'There are no exam reminders for the selected medical exam.'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee (section ID 434949; 1 case(s))

### C8928136 - Verify view employee page

- Section: Employee / Employee Details / View Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. User is on Search Employees page
- Test steps:
  - Step 1 action:
    > Enter details in Last Name, First Name fields and click on search button
    - Step expected result:
      > Search results gets displayed based on user input
      > ![](index.php?/attachments/get/8a1f530b-6d37-4c50-ac3d-7ff6fe60162d)
  - Step 2 action:
    > User click on Search results Last Name, First Name fields link
    - Step expected result:
      > User navigated to Employee Details page where user can see detail like:
      > 1. Sections: Contact Information, Next MET Details, Other Information
      > 2. Links: Edit Information
      > Buttons: Resend Notification, Create Exam, View Exam, LTA, Quit
      > Tabs: Dependents, Administration, Dashboard
      > 
      > ![](index.php?/attachments/get/e981375f-2173-4fa9-999b-710e61aecfc8)
- Case-level expected result:
  > User navigated to Employee Details page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / Create Exam (section ID 435405; 2 case(s))

### C8934318 - If exam doesn't exist for the employee

- Section: Employee / Employee Details / View Employee / Create Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. User in on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on Create Exam button
    > 
    > ![](index.php?/attachments/get/c70babbc-97ef-4624-bf3e-c8612e31f440)
    - Step expected result:
      > User navigated to 'Create New Exam' page
      > 
      > ![](index.php?/attachments/get/b4caee3a-caba-4aec-adb0-d2310f010e2b)
- Case-level expected result:
  > User navigated to 'Create New Exam' page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934319 - If exam exist for the employee

- Section: Employee / Employee Details / View Employee / Create Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User in on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on Create Exam button
    - Step expected result:
      > User can see a error message 'You cannot create this exam. Another exam is currently being processed.'
      > ![](index.php?/attachments/get/6a99c62d-a933-450b-82a2-cd0ac9590bc7)
- Case-level expected result:
  > User unable to create exam
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / View Exam (section ID 435406; 2 case(s))

### C8934320 - If exam doesn't exist for the employee

- Section: Employee / Employee Details / View Employee / View Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User in on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on View Exam button
    - Step expected result:
      > User navigated to 'Medical Exam' tab and can see message 'There are no medical exams found for this employee.' Also User can see buttons: Create Exam, Cancel
      > 
      > ![](index.php?/attachments/get/5b38f7f3-f345-455b-a51c-a7363dd9545a)
- Case-level expected result:
  > User can see message 'There are no medical exams found for this employee.'
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934321 - If exam exist for the employee

- Section: Employee / Employee Details / View Employee / View Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User in on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on View Exam button
    > 
    > ![](index.php?/attachments/get/123fbc99-56eb-4107-8dc4-b5371764dffd)
    - Step expected result:
      > User navigated to Medical Exam Information page
      > 
      > ![](index.php?/attachments/get/370a0e58-9fb7-4c37-8553-a4cbb21ac9c7)
- Case-level expected result:
  > User navigated to Medical Exam Information page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / Send LTA (section ID 435407; 1 case(s))

### C8934322 - User click on 'Send LTA' button

- Section: Employee / Employee Details / View Employee / Send LTA
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on 'Send LTA' button
    - Step expected result:
      > User should see success message 'The e-mail request has been added to the queue. It will be sent in few minutes' and get an email
      > 
      > ![](index.php?/attachments/get/02fb6f72-be10-4d14-a93c-6702c191ef77) ![](index.php?/attachments/get/62bfa2c2-7064-437d-aad5-79cf2b9760d8)
- Case-level expected result:
  > User should see success message
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / Quit (section ID 435408; 1 case(s))

### C8934323 - User click on 'Quit' button

- Section: Employee / Employee Details / View Employee / Quit
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on 'Quit' button
    > 
    > ![](index.php?/attachments/get/6ec0e429-557f-4526-8aba-eb70d71ca2d3)
    - Step expected result:
      > User navigated to Search employees page
      > 
      > ![](index.php?/attachments/get/4f43e6d1-3c44-435a-a2e7-1702fc9d6234)
- Case-level expected result:
  > User navigated to Search employee page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / Resend Notification (section ID 435409; 2 case(s))

### C8934324 - If record has any previous notification

- Section: Employee / Employee Details / View Employee / Resend Notification
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on 'Resend Notification' button
    > 
    > ![](index.php?/attachments/get/cf799e47-6f40-4e4f-a5c2-df61b4430f93)
    - Step expected result:
      > User should see success message 'The e-mail request has been added to the queue. It will be sent in few minutes' and get an email
      > 
      > ![](index.php?/attachments/get/f0fddfea-1e0f-41bb-befb-fc874974b3b5) ![](index.php?/attachments/get/d392ad8c-e344-4253-8311-f5ef604e7d5f)
- Case-level expected result:
  > User should see success message 'The e-mail request has been added to the queue. It will be sent in few minutes' and get an email
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934325 - If record doesn't have any previous notification

- Section: Employee / Employee Details / View Employee / Resend Notification
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on 'Resend Notification' button
    > 
    > ![](index.php?/attachments/get/de3519e2-db50-4447-9606-513b9f3da2af)
    - Step expected result:
      > User can see a alert message 'There is no previous notification e-mail sent for this employee'
      > 
      > ![](index.php?/attachments/get/d580a24f-68dd-449a-9e55-e06daedb67aa)
- Case-level expected result:
  > User can see a alert message 'There is no previous notification e-mail sent for this employee'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / Employee Details / View Employee / Edit Information (section ID 435410; 1 case(s))

### C8934326 - User is able to Edit Information

- Section: Employee / Employee Details / View Employee / Edit Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Employee Details page
- Test steps:
  - Step 1 action:
    > User click on 'Edit Information' link
    > 
    > ![](index.php?/attachments/get/9da8d738-fd1e-46e0-8149-04d53ca938c8)
    - Step expected result:
      > User navigated to Modify Employee Record page
      > 
      > ![](index.php?/attachments/get/a9b6c706-4c06-40db-be42-0f1817980bb1)
- Case-level expected result:
  > User navigated to Modify Employee Record page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Employee / SLB employee cannot create exam (section ID 467404; 1 case(s))

### C9404214 - All SLB roles cannot create exam

- Section: Employee / SLB employee cannot create exam
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Employee created and registered in the system
- Test steps:
  - Step 1 action:
    > 1. Login via any SLB roles login into application (Chief Recruiter, ISOS Reviewer, Client Reviewer, Local Doctor, Employee)
    > 2. They cannot see create exam button or link
    - Step expected result:
      > 1. Successfully able to login into system
      > 2. All roles can not create exam as they cannot see create exam button or link
      > 
      > ![](index.php?/attachments/get/[REDACTED_ATTACHMENT_ID]) ![](index.php?/attachments/get/[REDACTED_ATTACHMENT_ID])
- Case-level expected result:
  > SLB employee cannot create exam
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search Team Members (section ID 434899; 2 case(s))

### C8928070 - Successfully search a team member

- Section: Search Team Members
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employees page after successful login
- Test steps:
  - Step 1 action:
    > Enter details in any search fields like User role, Account Status, Last Name, First Name, Username, Employee GIN, DOB, E-mail Address, Company and Locked
    - Step expected result:
      > Able to enter data
  - Step 2 action:
    > Click on Search button
    - Step expected result:
      > Search results gets displayed
- Case-level expected result:
  > User can see search results based on input criteria
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928071 - Unable to search team member

- Section: Search Team Members
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employees page after successful login
- Test steps:
  - Step 1 action:
    > Click on Search button without enter data on any field (All fields should be blank) and click on search button
    - Step expected result:
      > Alert message should display to the user - Please select at least one search criteria before searching.
      > ![](index.php?/attachments/get/21acfe52-90ae-4fc6-a3a1-14db2d0726b3)
  - Step 2 action:
    > Enter special character or numbers in fields and click on search button
    - Step expected result:
      > Alert message should display to the user - Please enter a valid
      > ![](index.php?/attachments/get/b01e80e2-9292-4dfa-b90b-6a3b977e02f0)
  - Step 3 action:
    > User enter team member details (not exist in the system)
    - Step expected result:
      > User will get to see an alert message "There are no users available for the search performed."
      > ![](index.php?/attachments/get/6fe93850-5965-427b-9be3-8c2f45aa3fc5)
- Case-level expected result:
  > Alert message should display to the user and team search gets failed
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Create Team Member (section ID 434900; 2 case(s))

### C8928068 - Successfully creating team member

- Section: Create Team Member
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Successful login into the application
- Test steps:
  - Step 1 action:
    > User click on left panel 'Create Team Member' link
    - Step expected result:
      > User navigated to Create Team Member page
  - Step 2 action:
    > select user role from drop-down
    - Step expected result:
      > Successfully selected user role from drop-down
  - Step 3 action:
    > User enter mandatory details in Personal Information, Contact Information, Account Information sections
    - Step expected result:
      > User able to enter required details
  - Step 4 action:
    > User click on submit button
    - Step expected result:
      > Team member creation Success message will get displayed
- Case-level expected result:
  > Team member created successfully in the system
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928069 - Team member creation gets failed

- Section: Create Team Member
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Successful login into the application
- Test steps:
  - Step 1 action:
    > User click on left panel 'Create Team Member' link
    - Step expected result:
      > User navigated to Create Team Member page
  - Step 2 action:
    > select user role from drop-down
    - Step expected result:
      > Successfully selected user role from drop-down
  - Step 3 action:
    > User missed to enter mandatory details in one of the section from Personal Information, Contact Information, Account Information sections
    - Step expected result:
      > User able to enter required details except one mandatory field
      > ![](index.php?/attachments/get/385186b0-e652-4a83-9f8a-748152fc816b)
  - Step 4 action:
    > User enter special character or numeric value in text field
    - Step expected result:
      > Able to enter details but will get alert message during save records
      > ![](index.php?/attachments/get/75fb457d-f521-4133-a954-d799217e818b)
  - Step 5 action:
    > User click on submit button
    - Step expected result:
      > User can see alert message saying 'Please enter a valid
- Case-level expected result:
  > Team member creation gets failed
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Medical Exam Expirations (section ID 434901; 2 case(s))

### C8934355 - User successfully able to search Medical Exam Expirations reports

- Section: Medical Exam Expirations
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Medical Exam Expirations link
    - Step expected result:
      > User navigated to Medical Exam Expirations page and can see:
      > 1. Drop-down fields - Company, Expiration period and Status
      > 2. Buttons - Search and Reset
      > 
      > ![](index.php?/attachments/get/141577ec-03bf-4697-882f-3f1e10e75dbb)
  - Step 2 action:
    > User select data from 'Company' drop-down and click on search button
    - Step expected result:
      > User can see search results based on user input
      > 1. A table with columns - Last Name, First Name, GIN Number, Date Of Birth, Last Exam Date, Next Exam Date, Fitness Status and Status
      > 2. Button - Export
      > 
      > ![](index.php?/attachments/get/ff2c64ba-5dbc-4ce7-9cf1-2345246c5df1)
  - Step 3 action:
    > User click on Export button
    - Step expected result:
      > User can see file gets downloaded in local
      > 
      > ![](index.php?/attachments/get/32f6cb1f-3df5-4afd-bf83-d6000ef9b39c)
  - Step 4 action:
    > Check validation on Medical Exam Expirations page
    - Step expected result:
      > 1. User click on search button without select any data on drop-down fields then can see a message 'The Company is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/12b0e081-8a47-4f36-b3bc-2ccd949485b5)
      > 
      > 2. No employee exist with selected company then user can see a message 'There are no employees available for the search performed.'
      > 
      > ![](index.php?/attachments/get/c6fe3c44-865a-40ff-b730-b1ce215b0715)
- Case-level expected result:
  > User can see search results based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934356 - User failed to search Medical Exam Expirations reports

- Section: Medical Exam Expirations
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on search button without select any data on drop-down fields
    - Step expected result:
      > User can see a message 'The Company is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/cb5760cc-02c0-425f-8f4c-07488f0f930f)
  - Step 2 action:
    > No employee exist with selected company
    - Step expected result:
      > User can see a message 'There are no employees available for the search performed.'
      > 
      > ![](index.php?/attachments/get/52503b5b-741a-42ba-94b5-b377f270ce2c)
- Case-level expected result:
  > User can see validation message and unable to search report
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Import Data / Import File (section ID 434903; 2 case(s))

### C8933401 - User successfully import file

- Section: Import Data / Import File
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User successfully login into application
- Test steps:
  - Step 1 action:
    > User click on submenu Import under Import Data menu
    - Step expected result:
      > 1. User navigated to Import File page and user can see a title 'Select a file to import', a button 'Choose File' and Import button.
      > 2. Also user can see a table with multiple uploaded files with radio button with each records
      > 3. Buttons 'Resolve Discrepancies', 'Discard import'
      > 
      > ![](index.php?/attachments/get/f01a8f83-debe-4670-b855-190e9ca36128)
  - Step 2 action:
    > User click on Choose File button
    - Step expected result:
      > A popup window gets opened to select file from local machine. User select required file and click on Open button
      > 
      > ![](index.php?/attachments/get/bcfe7842-7f4d-4bf3-b6b9-96c7502127ae)
  - Step 3 action:
    > User click on Import button
    - Step expected result:
      > File imported successfully and user can see a success message ''
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8933402 - User has failed to import file

- Section: Import Data / Import File
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User successfully login into application
- Test steps:
  - Step 1 action:
    > User click on submenu Import under Import Data menu
    - Step expected result:
      > 1. User navigated to Import File page and user can see a title 'Select a file to import', a button 'Choose File' and Import button.
      > 2. Also user can see a table with multiple uploaded files with radio button with each records
      > 3. Buttons 'Resolve Discrepancies', 'Discard import'
      > 
      > ![](index.php?/attachments/get/fd4f6e1c-89e5-49b9-ba59-5bd90cbd8d69)
  - Step 2 action:
    > User click on Choose File button (Files with other format)
    - Step expected result:
      > A popup window gets opened to select file from local machine. User select required file and click on Open button
      > 
      > ![](index.php?/attachments/get/fcc45973-c37a-4f60-98d7-2ca248fc9a57)
  - Step 3 action:
    > User click on Import button
    - Step expected result:
      > The import filename SearchReviewedExams_5_31_2022 (1).xlsx is not in the expected format
      > 
      > ![](index.php?/attachments/get/63a956eb-d888-4afa-8237-63b9a4d1409c)
- Case-level expected result:
  > User unable to upload a file
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Import Data / Export Quest (section ID 434904; 1 case(s))

### C8933403 - User successfully download file

- Section: Import Data / Export Quest
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User successfully login into application
- Test steps:
  - Step 1 action:
    > User click on submenu Export Quest under Import Data menu
    - Step expected result:
      > User navigated to Export Quest - Schlumberger Import Confirmation page and user can see Generate new Confirmation File button and Download button
  - Step 2 action:
    > User click on Generate new Confirmation File button
    - Step expected result:
      > User can see a message 'SOS_EMP.CSV has been generated successfully and uploaded to FTP Server'
      > 
      > ![](index.php?/attachments/get/c4360dfc-f951-4a4a-9545-88a40814fd10)
  - Step 3 action:
    > User click on Download button
    - Step expected result:
      > User can se downloaded file
      > 
      > ![](index.php?/attachments/get/d36befc0-cb7c-43b4-8a8a-e6639c748e41)
- Case-level expected result:
  > User able to download file
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Reminders and Documents / Generate (section ID 434906; 2 case(s))

### C8933408 - User successfully Generate Reminders and Documents

- Section: Reminders and Documents / Generate
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User successfully login into application
- Test steps:
  - Step 1 action:
    > User click on submenu Generate under Reminders and Documents menu
    - Step expected result:
      > User navigated to Generate Reminders and Documents page and user can see drop-down for Company as enable and disable for Assignment Country, Area, Business Area, Job Site, Nationality, Geo Market, Category, Health Passport, Label, Cover Letter, Fitness Certificate, From Date, To Date
      > 
      > ![](index.php?/attachments/get/a455e2b5-1ad2-4f26-8f20-d9695453e771)
  - Step 2 action:
    > User select data from company drop-down
    - Step expected result:
      > All disabled drop-down fields gets enabled
      > 
      > ![](index.php?/attachments/get/bd57fec0-670e-40f8-96ca-78b101c08c47)
  - Step 3 action:
    > User select data from drop-down and click on search button
    - Step expected result:
      > Reminders and Documents section gets displayed
      > 1. Reminders Section:
      > LTA (0)
      > Reminder 1 (0)
      > Reminder 2 (0)
      > 
      > 2. Documents Section:
      > Health Passport(0)
      > Cover Letter(0)
      > Label(0)
      > Fitness Certificate(0)
      > 
      > 3. Print Reminders Buttons
      > 4. Print Documents buttons
      > 
      > ![](index.php?/attachments/get/68a738c8-eb76-496c-a760-9bd3f96a2a76)
- Case-level expected result:
  > User is able to generate Reminders and Documents
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8933409 - User failed to Generate Reminders and Documents

- Section: Reminders and Documents / Generate
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Reminders and Documents / Download (section ID 434907; 1 case(s))

### C8933427 - User successfully able to download document

- Section: Reminders and Documents / Download
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User successfully login into application
- Test steps:
  - Step 1 action:
    > User click on submenu Download under Reminders and Documents menu
    - Step expected result:
      > User navigated to Document Generation Queue Page and can see table with columns: Document Name, Generated Date, Generated By, Downloaded By, Downloaded Date, Status. And Can see Download Button and Error Log Button
      > 
      > ![](index.php?/attachments/get/d194f7fe-9bc2-4878-b642-9ccc23d941f1)
  - Step 2 action:
    > User click on Download button
  - Step 3 action:
    > User click on Error Log button
    - Step expected result:
      > User can see a message at the bottom of the page
      > 
      > ![](index.php?/attachments/get/6126abbc-4ce2-4914-b5fa-b0fe577a62ec)
- Case-level expected result:
  > User successfully able to download document
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Search Reviewed Exams (section ID 434908; 3 case(s))

### C8934300 - User successfully search a reviewed exam

- Section: Search Reviewed Exams
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Reviewed Exam for the employee should exist in the system
- Test steps:
  - Step 1 action:
    > 1. User click on Search Reviewed Exams link on the left panel
    - Step expected result:
      > User navigated to Search Reviewed Exams page. And user can see User Role as enabled, User ID as disabled, From Date, To Date fields as enabled and Search, Reset buttons
      > 
      > ![](index.php?/attachments/get/bf977985-4fbf-43a9-b2eb-5e56c6c122b0)
  - Step 2 action:
    > User select User role from drop-down
    - Step expected result:
      > User ID field gets enabled
      > 
      > ![](index.php?/attachments/get/388ff611-363f-44f6-b30b-e6c8aedf2b15) ![](index.php?/attachments/get/112ab39c-ddb9-44c3-835f-24ccfab94728)
  - Step 3 action:
    > User enter details in fields and click on search button
    - Step expected result:
      > Search results gets displayed and user can see a table.
      > 1. Table has columns: Last Name, First Name, GIN Number, Date of Exam, Date of Review, Company, Last MET Taken along with radio button with each record
      > 2. Export and View Exam button
      > 3. Previous Page | Next Page link
      > 
      > ![](index.php?/attachments/get/9a0deb60-3e97-47d7-b29b-ae72b01c2d09)
  - Step 4 action:
    > User select radio button from search result and click on View exam button
    - Step expected result:
      > User navigated to Medical Exam Information page where user can review details
      > 
      > ![](index.php?/attachments/get/9416898b-134f-4a25-b054-79783e1baf39)
- Case-level expected result:
  > User can see and view reviewed exams
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934301 - Validation on Search Reviewed Exams page

- Section: Search Reviewed Exams
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Reviewed Exam for the employee should exist in the system
  > 2. User is on Search Reviewed Exams page
- Test steps:
  - Step 1 action:
    > User skip to select any fields from User Role, User ID , From Date and To Date
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/50b584be-8fb3-4419-b3b9-98912dee8592) ![](index.php?/attachments/get/2c7af578-e57e-4580-afbf-fd02c0d1b559) ![](index.php?/attachments/get/b1297aee-59f6-44a6-8769-8fd2eb7fbf37)
- Case-level expected result:
  > User can see validation message based on input criteria
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934302 - No review exam exist

- Section: Search Reviewed Exams
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > 1. Reviewed Exam for the employee should not exist in the system
  > 2. User is on Search Reviewed Exams page
- Test steps:
  - Step 1 action:
    > User select data from drop down and click on search button
    - Step expected result:
      > User can see a message 'There are no exams Reviewed by the user between the given date range'
      > 
      > ![](index.php?/attachments/get/aad9652c-e14b-4bd3-820b-465dc42beb73)
- Case-level expected result:
  > User can see a message 'There are no exams Reviewed by the user between the given date range'
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Reports / Generate Master Report (section ID 434911; 2 case(s))

### C8934303 - User successfully able to generate report

- Section: Reports / Generate Master Report
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Exam for the employee should exist in the system
- Test steps:
  - Step 1 action:
    > User click on subsection 'Generate Master Report' under Reports link
    - Step expected result:
      > User navigated to Select Reports you wish to merge page
      > 
      > ![](index.php?/attachments/get/5ecf7ef9-7905-4162-9995-a42cd19ec497)
  - Step 2 action:
    > User tick on checkbox and click on Generate button
    - Step expected result:
      > ![](index.php?/attachments/get/b9e247c0-ea2c-442b-9fe5-cb6f8740f53a)
- Case-level expected result:
  > User successfully able to generate report
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934357 - Unable to generate report

- Section: Reports / Generate Master Report
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Exam for the employee should exist in the system
- Test steps:
  - Step 1 action:
    > User click on subsection 'Generate Master Report' under Reports link
    - Step expected result:
      > User navigated to Select Reports you wish to merge page
      > 
      > ![](index.php?/attachments/get/c411ec1a-48cb-428b-bd18-897c03e9ebd4)
  - Step 2 action:
    > User click on Generate button without select any checkbox
    - Step expected result:
      > User can see a validation message
      > 
      > ![](index.php?/attachments/get/2b36e9d1-773d-48b0-a1b1-5a[REDACTED_PHONE]) ![](index.php?/attachments/get/40105161-f68b-4be8-b968-bf30d8834d8a)
- Case-level expected result:
  > User get to see a validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Compnay (section ID 434955; 5 case(s))

### C8934358 - Verify company page

- Section: System Configuration / Company / Compnay
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Company
    - Step expected result:
      > User navigated to Search Company page. Where user can see:
      > 1. 'Search Company' logo name and 'Add' button
      > 2. 'Company Name' as a text field
      > 3. 'Owner Company Name' as a drop-down field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/43e114c3-993f-427c-8a64-b0de48b23497)
- Case-level expected result:
  > User navigated to Search Company page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934359 - User successfully able to add company

- Section: System Configuration / Company / Compnay
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Company subsection under System Configuration section
    - Step expected result:
      > User navigated to Search Company page
  - Step 2 action:
    > User click on Add button
    > 
    > ![](index.php?/attachments/get/3d9c5126-a979-4827-bc17-f93e14d95718)
    - Step expected result:
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
      > 
      > ![](index.php?/attachments/get/76f075ed-113c-4a84-a175-d1363b11329d) ![](index.php?/attachments/get/b7e2930e-4e9a-45e2-8444-320149852e01)
  - Step 3 action:
    > User select data from 'Owner Company' drop-down
    - Step expected result:
      > User can see some of the fields auto populated
      > 
      > ![](index.php?/attachments/get/7ea7e716-0167-43f9-aae8-6deb84011a90)
  - Step 4 action:
    > User click on submit button (With valid data)
    - Step expected result:
      > User can see a message
      > 
      > ![](index.php?/attachments/get/8d6b7752-b685-492c-b449-c59ade65cf72)
- Case-level expected result:
  > User is successfully able to add company
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934360 - User unable to add company

- Section: System Configuration / Company / Compnay
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Company subsection under System Configuration section
    - Step expected result:
      > User navigated to Search Company page
  - Step 2 action:
    > User click on Add button
    > 
    > ![](index.php?/attachments/get/3a78d08f-eb44-412a-b224-70b9a735ed31)
    - Step expected result:
      > User navigated to Company Master page
  - Step 3 action:
    > User click on submit button (With invalid data on fields or skipped mandatory fields)
    - Step expected result:
      > User can see a validation error message
      > 
      > ![](index.php?/attachments/get/5b8c54f2-41fc-4909-a3ec-758065d79aef) ![](index.php?/attachments/get/45ad782d-7109-4c3c-a4b6-aa91465abd11)
- Case-level expected result:
  > User unable to add company details
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934361 - Validation check on company page

- Section: System Configuration / Company / Compnay
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Company subsection under System Configuration section
    - Step expected result:
      > User navigated to Search Company page
      > 
      > ![](index.php?/attachments/get/cc2c453f-9ea1-4165-8729-87f9063e8338)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/99b69156-a77d-420d-97f3-7dea4c7ad601)
  - Step 3 action:
    > User enter data in company name field and click on search button (If no company name present)
    - Step expected result:
      > User can see a message 'There are no companies available for the search performed.'
      > 
      > ![](index.php?/attachments/get/7ff0f865-310c-438e-987e-806611a65f6b)
  - Step 4 action:
    > User select data from Company drop-down and click on search button
    - Step expected result:
      > Company specific records will get displayed. Where user can see:
      > 
      > 1. A table with columns: Company Name, Owner Company Name, Access Rights, Active?
      > 2. Edit button
      > 
      > ![](index.php?/attachments/get/39816b3e-02b0-4c23-827b-28193d36889b)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934362 - Edit company details

- Section: System Configuration / Company / Compnay
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Company subsection under System Configuration section
    - Step expected result:
      > User navigated to Search Company page
      > ![](index.php?/attachments/get/32be875c-a81f-4a43-a9ee-ef20d959f5e8)
  - Step 2 action:
    > User select data from Company drop-down and click on search button
    - Step expected result:
      > Company specific records will get displayed to the user
      > 
      > ![](index.php?/attachments/get/fe7fe991-0fbd-46be-8590-bcd58c960238)
  - Step 3 action:
    > User click on Edit button
    > 
    > ![](index.php?/attachments/get/63db29de-8502-46b2-b612-ee62b71e0d6f)
    - Step expected result:
      > User navigated to Company Master page where user can edit details for the company
      > 
      > ![](index.php?/attachments/get/e4ef1b40-4ab6-405a-bb91-cfa0cc43315a)
  - Step 4 action:
    > User click on submit button
    - Step expected result:
      > User can see a success message 'The company qwer has been successfully modified in the system.
      > '
      > 
      > ![](index.php?/attachments/get/b79f01b5-b403-428b-b46d-9d24409c90e6)
- Case-level expected result:
  > User can edit company related details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Logo Information (section ID 434956; 4 case(s))

### C8934363 - Verify Logo Information page

- Section: System Configuration / Company / Logo Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Logo Information
    - Step expected result:
      > User navigated to Logo Information page, Where user can see:
      > 
      > 1. logo name - 'Logo Information'
      > 2. Drop-down field - 'Owner Company'
      > 3. Button - Get Details and Reset
      > 
      > ![](index.php?/attachments/get/05023bbd-b59e-4717-97d6-1cb8fd00a998)
- Case-level expected result:
  > User navigated to Logo Information page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934364 - Validation check on Logo Information page

- Section: System Configuration / Company / Logo Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Logo Information
    - Step expected result:
      > User navigated to Logo Information page
      > 
      > ![](index.php?/attachments/get/b424fb73-0253-481b-9445-3eb293768d41)
  - Step 2 action:
    > User click on Get Details button without select any fields
    - Step expected result:
      > User can see a message 'The Company is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/23cb657e-0a87-4bf5-a6f5-799e8534d9e3)
  - Step 3 action:
    > User click on reset button
    - Step expected result:
      > Selected drop-down fields value will get cleared and validation message will also get cleared
      > 
      > ![](index.php?/attachments/get/73dc4467-25a0-4a93-91d4-21732df92c22)
- Case-level expected result:
  > User can see validation message based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934365 - User is successfully able to upload logo information

- Section: System Configuration / Company / Logo Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Logo Information
    - Step expected result:
      > User navigated to Logo Information page
      > 
      > ![](index.php?/attachments/get/af5a3260-05e6-4832-b775-9d7dd7507b17)
  - Step 2 action:
    > User select company name and click on Get Details button
    - Step expected result:
      > User can see logo information based on company and can see
      > 
      > 1. Choose File button with each logo
      > 2. Logo images (If uploaded any)
      > 3. Submit button
      > 
      > ![](index.php?/attachments/get/134c1aad-046f-422a-bcab-7280ccfa37c3)
  - Step 3 action:
    > User click Choose File button
    > 
    > ![](index.php?/attachments/get/c0fe961a-e2e4-4bd1-a4ee-c20c86ab8ffc)
    - Step expected result:
      > User redirected to local machine to browse logo file
      > 
      > ![](index.php?/attachments/get/dee9f88c-1705-4c2f-8cea-48cfc079dc8e)
  - Step 4 action:
    > User select logo image and click on Open button
    > 
    > ![](index.php?/attachments/get/d9345604-d3f3-40c3-88cd-b2966f8ba2bc)
    - Step expected result:
      > User can see uploaded file name
      > 
      > ![](index.php?/attachments/get/84e00463-3f6b-4bed-9d17-6cfd78400324)
  - Step 5 action:
    > User click on Submit button
    - Step expected result:
      > User can see a success message 'The logo information for company have been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/53b44bfb-0b27-4df7-9964-025571019629)
- Case-level expected result:
  > User successfully able to upload logo
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934366 - User unable to upload logo due to invalid format

- Section: System Configuration / Company / Logo Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Logo Information
    - Step expected result:
      > User navigated to Logo Information page
      > 
      > ![](index.php?/attachments/get/27b9756f-52a8-4afe-b107-347986aaa688)
  - Step 2 action:
    > User select company name and click on Get Details button
    - Step expected result:
      > User can see logo information based on company
      > 
      > ![](index.php?/attachments/get/5511a3b6-3a98-47e8-8916-b3ff7f543205)
  - Step 3 action:
    > User click Choose File button
    > 
    > ![](index.php?/attachments/get/b793159c-ec50-45df-9288-ae1685ebd04b)
    - Step expected result:
      > User redirected to local machine to browse logo file
      > 
      > ![](index.php?/attachments/get/374f968a-07c6-41c0-87e8-adb669504be5)
  - Step 4 action:
    > User select file (Except image)
    - Step expected result:
      > User can see validation message 'Please upload a jpg/ gif/ jpeg/ tif/ png/ bmp file for company logo.'
      > 
      > ![](index.php?/attachments/get/7c034a29-185c-4d16-a442-4aaf19c6dad5) ![](index.php?/attachments/get/7d53bae0-e823-41f4-a38c-a2014bda9e7f)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Area (section ID 434957; 5 case(s))

### C8934372 - Verify Area Master page

- Section: System Configuration / Company / Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Area
    - Step expected result:
      > User navigated to Area Master page. Where user can see:
      > 
      > 1. 'Area Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Area' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/e648bf4e-f337-430e-8c10-b739551a88c8)
- Case-level expected result:
  > User navigated to Area Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934373 - User successfully able to add Area Master

- Section: System Configuration / Company / Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Area
    - Step expected result:
      > User navigated to Area Master page
      > 
      > ![](index.php?/attachments/get/104d6184-2c9e-452f-813e-d9eb896d6d3d)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Area
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/db44c513-5cc4-4210-b0f0-58c0f3664caa)
  - Step 3 action:
    > User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
    > 
    > ![](index.php?/attachments/get/62629145-a34d-41a2-b32e-5747eb61b2b5)
    - Step expected result:
      > User can see a success message 'The area qwer has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/3a45eba3-a197-4db3-ae9f-44ea7e03bf09)
  - Step 4 action:
    > User select company from drop-down, enter area in text field, select checkbox as active and click on Cancel button
    - Step expected result:
      > User navigated to Area Master page
      > 
      > ![](index.php?/attachments/get/dcce9137-2db2-4082-8d59-b4e7734f3bc2)
- Case-level expected result:
  > User successfully able to add area
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934374 - User unable to add Area Master

- Section: System Configuration / Company / Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Area
    - Step expected result:
      > User navigated to Area Master page
      > 
      > ![](index.php?/attachments/get/87c04fe0-bc8e-45fa-a873-40d63f3aaa1e)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Area
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/2ed9f72a-a666-4a82-aab0-aad5f083ecff)
  - Step 3 action:
    > User select company name, enter area with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/0329dc34-e10c-4bcc-b92c-2e2791eb6cce)
    - Step expected result:
      > User can see a message 'Please enter a valid Area Name.'
      > 
      > ![](index.php?/attachments/get/b68efac9-4f6e-4e1a-b648-a6a78a7ee5c3)
- Case-level expected result:
  > User is unable to add area due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934375 - Validation check on Area Master page

- Section: System Configuration / Company / Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Area
    - Step expected result:
      > User navigated to Area Master page
      > 
      > ![](index.php?/attachments/get/962c9bcf-07ae-4512-9896-a897c78d0564)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/ec65dfcc-14a7-402f-84f6-e4f855077ea6)
  - Step 3 action:
    > User enter data in Owner Company field and click on search button (If no company name present)
    - Step expected result:
      > User can see a message 'There are no Areas available for the search performed..'
      > 
      > ![](index.php?/attachments/get/eca1fb3a-e78e-429b-9852-43eb0c2dedfa)
  - Step 4 action:
    > User enter data in Area text field and click on search button
    - Step expected result:
      > Search result should display based on area, if present
      > 
      > ![](index.php?/attachments/get/dd88d37d-4c03-4d82-9738-9c9d983b5f0a)
      > 
      > Otherwise will get message 'There are no Areas available for the search performed.'
      > 
      > ![](index.php?/attachments/get/aa93a790-e2e2-4eea-b40f-e0ea33053271)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934376 - Edit Area Master details

- Section: System Configuration / Company / Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Area
    - Step expected result:
      > User navigated to Area Master page
      > 
      > ![](index.php?/attachments/get/2a860b56-de94-4c4b-98de-fe1d20a68aa3)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Area and click on search button
    - Step expected result:
      > Serach result gets displayed
      > 
      > ![](index.php?/attachments/get/90d1d209-d7e2-4bb5-b32c-6a21d8fdacf4)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit area
      > 
      > ![](index.php?/attachments/get/fd1e021a-2ec8-4e8e-8c5d-edfc4dae8596)
  - Step 4 action:
    > User edit area and click on Submit button
    > 
    > ![](index.php?/attachments/get/efa7e8e5-51d0-4e71-96ae-3e0a8381864a)
    - Step expected result:
      > User successfully able to edit area and can see a message 'The area qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/269162f1-f6f9-4756-9729-0663a3d29350)
- Case-level expected result:
  > User successfully able to edit area
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Business Area (section ID 434958; 5 case(s))

### C8934377 - Verify Business Area Master page

- Section: System Configuration / Company / Business Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Business Area
    - Step expected result:
      > User navigated to Business Area Master page. Where user can see:
      > 
      > 1. 'Business Area Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Business Area' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > ![](index.php?/attachments/get/ff0ef94c-2dfe-4af4-8882-009a95a214bd)
- Case-level expected result:
  > User navigated to Business Area Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934378 - User successfully able to add Business Area Master

- Section: System Configuration / Company / Business Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Business Area
    - Step expected result:
      > User navigated to Business Area Master page
      > 
      > ![](index.php?/attachments/get/2435d645-4161-47bf-aa98-b71c44c79b92)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Business Area
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/2641108e-756c-414c-8136-e3b267df44af)
  - Step 3 action:
    > User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
    > 
    > ![](index.php?/attachments/get/2ae87f7f-574b-4853-bc08-8c6da5e0f211)
    - Step expected result:
      > User can see a success message 'The Business area qwer has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/22a14644-2e65-4101-9bba-9598faab1d79)
  - Step 4 action:
    > User select company from drop-down, enter Business Area in text field, select checkbox as active and click on Cancel button
    - Step expected result:
      > User navigated to Business Area Master page
      > ![](index.php?/attachments/get/50877baf-e5f0-4566-8228-055d84790e90)
- Case-level expected result:
  > User successfully able to add Business Area
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934379 - User unable to add Business Area Master

- Section: System Configuration / Company / Business Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Business Area
    - Step expected result:
      > User navigated to Business Area Master page
      > 
      > ![](index.php?/attachments/get/3f6c2189-c68f-4bbf-8fb5-fa23c2a9e4f9)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Business Area
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/ef5c8676-556b-4699-8624-302a8c1cd144)
  - Step 3 action:
    > User select company name, enter Business Area with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/01ba365c-653d-4ab4-9cf5-19c0d83247e4)
    - Step expected result:
      > User can see a message 'Please enter a valid Business Area Name.'
      > 
      > ![](index.php?/attachments/get/94325d1c-91d7-4df3-b3cf-e632ed9ed746)
- Case-level expected result:
  > User is unable to add Business Area Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934380 - Validation check on Business Area Master page

- Section: System Configuration / Company / Business Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Business Area
    - Step expected result:
      > User navigated to Business Area Master page
      > 
      > ![](index.php?/attachments/get/931eb093-78b4-4450-a579-820d901c8e34)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/402b1a3e-4562-4181-b2f0-89e9e28a9a69)
  - Step 3 action:
    > User enter data in Owner Company field and click on search button (If no company name present)
    - Step expected result:
      > User can see a message 'There are no business areas available for the search performed.'
      > 
      > ![](index.php?/attachments/get/d5774f61-3e61-4e01-bf20-112dd6cd4c38)
  - Step 4 action:
    > User enter data in Business Area text field and click on search button
    - Step expected result:
      > Search result should display based on Business Area, if present
      > 
      > ![](index.php?/attachments/get/2e2bd60d-6b77-4523-aaf0-27e4287dfa20)
      > 
      > Otherwise will get message 'There are no Business Area available for the search performed.'
      > 
      > ![](index.php?/attachments/get/6a29c558-8d14-4e48-9ac3-ebcbdd972d06)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934381 - Edit Business Area Master details

- Section: System Configuration / Company / Business Area
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Business Area
    - Step expected result:
      > User navigated to Business Area Master page
      > 
      > ![](index.php?/attachments/get/b89c95bb-85ad-40d1-aa3c-2742b25caa76)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Business Area and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/0f20f122-1b56-4599-abd1-decad5783d49)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Business Area
      > ![](index.php?/attachments/get/27acbf78-8005-472c-83fe-929ba3688244)
  - Step 4 action:
    > User edit area and click on Submit button
    > 
    > ![](index.php?/attachments/get/4f24860e-f8ab-4107-995b-bfdc9535d57a)
    - Step expected result:
      > User successfully able to edit area and can see a message 'The Business area qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/25ceb605-17af-4854-9944-e6086528d226)
- Case-level expected result:
  > User successfully able to edit Business Area Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Geo Market (section ID 434959; 5 case(s))

### C8934383 - Verify Geo Market Master page

- Section: System Configuration / Company / Geo Market
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Geo Market
    - Step expected result:
      > User navigated to Geo Market Master page. Where user can see:
      > 
      > 1. 'Geo Market Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Geo Market Name' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/c4da85ab-33ac-437c-96ac-cb489d230638)
- Case-level expected result:
  > User navigated to Geo Market Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934384 - User successfully able to add Geo Market Master

- Section: System Configuration / Company / Geo Market
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Geo Market
    - Step expected result:
      > User navigated to Geo Market Master page
      > 
      > ![](index.php?/attachments/get/dd4594b7-8494-4890-b7cd-556ad9a8d0a9)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Geo Market
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/28a912c8-c32b-4fe3-89e7-1a6ac04128af)
  - Step 3 action:
    > User select company from drop-down, enter area in text field, select checkbox as active and click on Submit button
    > 
    > ![](index.php?/attachments/get/78b2ef16-ac3a-4862-8f18-e53f0aebb335)
    - Step expected result:
      > User can see a success message 'The Geo Market qwer has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/62ae0eeb-7e17-4e7c-bfc2-33b0ec34b82c)
  - Step 4 action:
    > User select company from drop-down, enter Business Area in text field, select checkbox as active and click on Cancel button
    - Step expected result:
      > User navigated to Business Area Master page
      > 
      > ![](index.php?/attachments/get/ce23190e-8e02-478b-accf-781bbbeb8475)
- Case-level expected result:
  > User successfully able to add Geo Market Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934385 - User unable to add Geo Market Master

- Section: System Configuration / Company / Geo Market
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Geo Market
    - Step expected result:
      > User navigated to Geo Market Master page
      > 
      > ![](index.php?/attachments/get/12d2a555-3349-4216-95a3-58412ec0397b)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Geo Market
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/89b0b478-cf5b-4c93-b872-ca2498ab73ff)
  - Step 3 action:
    > User select company name, enter Geo Market with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/00e4fa8a-a8fd-444a-8168-f94176057503)
    - Step expected result:
      > User can see a message 'Please enter a valid Geo Market Name.'
      > 
      > ![](index.php?/attachments/get/0e75c7b8-503f-4294-aac0-f0694f84317f)
- Case-level expected result:
  > User is unable to add Geo Market Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934386 - Validation check on Geo Market Master page

- Section: System Configuration / Company / Geo Market
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Geo Market
    - Step expected result:
      > User navigated to Geo Market Master page
      > 
      > ![](index.php?/attachments/get/711bac08-2500-43f9-a76e-f152e977ef9d)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/2afc371d-1b61-4695-9961-fb2669a57ccf)
  - Step 3 action:
    > User enter data in Owner Company field and click on search button (If no company name present)
    - Step expected result:
      > User can see a message 'There are no geo markets available for the search performed.'
      > 
      > ![](index.php?/attachments/get/d3731889-3748-493c-b942-004e2e7ae0c5)
  - Step 4 action:
    > User enter data in Business Area text field and click on search button
    - Step expected result:
      > Search result should display based on Business Area, if present
      > 
      > ![](index.php?/attachments/get/08504630-e3fa-4c97-826b-4da73f549102)
      > 
      > Otherwise will get message 'There are no geomarkets available for the search performed.'
      > 
      > ![](index.php?/attachments/get/da8e7b11-5ec2-4293-9885-a18e239334f1)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934387 - Edit Geo Market Master details

- Section: System Configuration / Company / Geo Market
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Geo Market
    - Step expected result:
      > User navigated to Geo Market Master page
      > 
      > ![](index.php?/attachments/get/c5351d41-9f80-47e4-8eb7-3a709cc34248)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Business Area and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/d2aff909-e426-43e3-a85d-0a5fcdec7483)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Geo Market
      > 
      > ![](index.php?/attachments/get/0726bbfe-12c9-46a0-ba3b-5ca877e35ecd)
  - Step 4 action:
    > User edit Geo Market and click on Submit button
    > 
    > ![](index.php?/attachments/get/f6bd6315-b823-4d2a-926e-aebf312f208b)
    - Step expected result:
      > User successfully able to edit area and can see a message 'The Geo Market qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/9f06ce80-9266-4ecf-b725-f3622ec86955)
- Case-level expected result:
  > User successfully able to edit Geo Market Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Job Site (section ID 434960; 5 case(s))

### C8934393 - Verify Job Site Master page

- Section: System Configuration / Company / Job Site
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Site
    - Step expected result:
      > User navigated to Job Site Master page. Where user can see:
      > 
      > 1. 'Job Site Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Job Site Name' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/ed2d47db-6850-4122-8881-15daddaee5f9)
- Case-level expected result:
  > User navigated to Job Site Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934394 - User successfully able to add Job Site Master

- Section: System Configuration / Company / Job Site
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Site
    - Step expected result:
      > User navigated to Job Site Master page
      > 
      > ![](index.php?/attachments/get/e1f178d6-34c2-4067-b677-c972535eced7)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Job Site
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/70c5f059-71de-4a14-a30e-fba5fbee2334)
  - Step 3 action:
    > User select company from drop-down, enter Job Site Name in text field, select checkbox as active and click on Submit button
    > 
    > ![](index.php?/attachments/get/0034b3be-6b06-45e7-9bb5-a7207a110c2a)
    - Step expected result:
      > User can see a success message 'The Job Site qwer1 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/4c0765b7-721e-45cf-a850-b3a28c694df2)
  - Step 4 action:
    > User select company from drop-down, enter Job Site Name in text field, select checkbox as active and click on Cancel button
    - Step expected result:
      > User navigated to Job Site Master page
      > 
      > ![](index.php?/attachments/get/ceb813a6-9e73-4b0e-a4b8-767f836b1d23)
- Case-level expected result:
  > User successfully able to add Job Site Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934395 - User unable to add Job Site Master

- Section: System Configuration / Company / Job Site
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Site
    - Step expected result:
      > User navigated to Job Site Master page
      > 
      > ![](index.php?/attachments/get/5d91f411-4d86-4db7-9552-1e9756d9de15)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Job Site Name
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/21160bd1-1f6b-4613-9561-57113cae868f)
  - Step 3 action:
    > User select company name, enter Job Site with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/a84b4bef-971f-405d-94c6-2637f36db9ef)
    - Step expected result:
      > User can see a message 'Please enter a valid Job Site Name.'
      > 
      > ![](index.php?/attachments/get/df89f61b-782b-4fc8-9658-d1a17dbae82f)
  - Step 4 action:
    > User select company name, enter Job Site (Already exist) and click on submit button
    - Step expected result:
      > User can see a message 'The Job Site already exists in the system.'
      > 
      > ![](index.php?/attachments/get/282fdf44-412f-4df0-8686-d1d153cdaa04)
- Case-level expected result:
  > User is unable to add Job Site Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934396 - Validation check on Job Site Master page

- Section: System Configuration / Company / Job Site
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Site
    - Step expected result:
      > User navigated to Job Site Master page
      > 
      > ![](index.php?/attachments/get/91ab468a-b756-4b54-b75b-4ea9f706af02)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/f37d8c99-ad89-4c66-b1d0-aee6496effb5)
  - Step 3 action:
    > User enter data in Job Site Name text field and click on search button
    - Step expected result:
      > Search result should display based on Job Site Name, if present
      > 
      > ![](index.php?/attachments/get/58286797-f868-4dc9-893c-513155a5135f)
      > 
      > Otherwise will get message 'There are no job sites available for the search performed.'
      > 
      > ![](index.php?/attachments/get/108a1162-bea4-4dcf-92e9-807c0f9be78a)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934397 - Edit Job Site Master details

- Section: System Configuration / Company / Job Site
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Job Site
    - Step expected result:
      > User navigated to Job Site Master page
      > 
      > ![](index.php?/attachments/get/30aae00a-f652-4a6f-988e-41684cb27be1)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Job Site Name and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/5557b485-1ffb-4ec0-b544-7eb0827d15fd)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Job Site
      > 
      > ![](index.php?/attachments/get/36560bd7-7e8d-4123-a28c-efcd88461067)
  - Step 4 action:
    > User edit Job Site and click on Submit button
    > 
    > ![](index.php?/attachments/get/c29027be-e6d9-4e52-a214-c90ca3c6acb5)
    - Step expected result:
      > User successfully able to edit Job Site and can see a message 'The Job Site qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/ccb6a46d-8d9b-4130-a14a-651180ab18ed)
- Case-level expected result:
  > User successfully able to edit Job Site Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Job Title (section ID 434961; 5 case(s))

### C8934398 - Verify Job Title Master page

- Section: System Configuration / Company / Job Title
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Title
    - Step expected result:
      > User navigated to Job Title Master page. Where user can see:
      > 
      > 1. 'Job Title Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Job Title Name' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
- Case-level expected result:
  > User navigated to Job Title Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934399 - User successfully able to add Job Title Master

- Section: System Configuration / Company / Job Title
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Title
    - Step expected result:
      > User navigated to Job Title Master page
      > 
      > ![](index.php?/attachments/get/d54449a4-6be7-479f-ad1f-4293060b4ce3)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Job Title
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/9d7058bc-5c97-4435-80f8-0109cc315667)
  - Step 3 action:
    > User select company from drop-down, enter Job Title in text field, select checkbox as active and click on Submit button
    > 
    > ![](index.php?/attachments/get/7d5b0712-c157-42fb-bec0-6189ea2c6323)
    - Step expected result:
      > User can see a success message 'The Job Title qwer has been successfully created in the system.'
  - Step 4 action:
    > User select company from drop-down, enter Job Title in text field, select checkbox as active and click on Cancel button
    - Step expected result:
      > User navigated to Job Title Master page
      > 
      > ![](index.php?/attachments/get/c9582a30-7b50-4593-b1a9-b12ff3a84544)
- Case-level expected result:
  > User successfully able to add Job Title Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934400 - User unable to add Job Title Master

- Section: System Configuration / Company / Job Title
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Title
    - Step expected result:
      > User navigated to Job Title Master page
      > 
      > ![](index.php?/attachments/get/aaf188a5-8ae4-4c0d-9aa5-da248aeca861)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name
      > 2. Job Title
      > 3. Active?
      > 4. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/42b4ef6e-ea72-4f5b-ba70-b4a7b85a3394)
  - Step 3 action:
    > User select company name, enter Job Title with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/89dc0b7f-1433-41af-a0d2-6db87adb6ed3)
    - Step expected result:
      > User can see a message 'Please enter a valid Job Title Name.'
      > 
      > ![](index.php?/attachments/get/e1662e25-61e0-43a8-89d8-3a877e818bb4)
- Case-level expected result:
  > User is unable to add Job Title Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934401 - Validation check on Job Title Master page

- Section: System Configuration / Company / Job Title
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Job Title
    - Step expected result:
      > User navigated to Job Title Master page
      > 
      > ![](index.php?/attachments/get/2f0f4bc4-e4fe-45d1-ac42-8b72c851607b)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/57e38108-067c-4452-a6c3-0d0834bea85f)
  - Step 3 action:
    > User enter data in Job Title text field and click on search button
    - Step expected result:
      > Search result should display based on Job Title, if present
      > 
      > ![](index.php?/attachments/get/a7baf298-e292-44c5-ad65-6d8b0eff31b4)
      > 
      > Otherwise will get message 'There are no job titles available for the search performed.'
      > 
      > ![](index.php?/attachments/get/45800566-1569-4d6a-b176-5d7fd6ff2865)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934402 - Edit Job Title Master details

- Section: System Configuration / Company / Job Title
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Job Title
    - Step expected result:
      > User navigated to Job Title Master page
      > 
      > ![](index.php?/attachments/get/cb7ea215-e80d-4cde-84d6-6f31aa4ec2dc)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Job Title and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/32936c7e-5dec-45fe-b217-8b2c2fa9e52a)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Job Title
      > 
      > ![](index.php?/attachments/get/3670cf90-8ba7-450a-83c1-a71299fb6081)
  - Step 4 action:
    > User edit Job Title and click on Submit button
    - Step expected result:
      > User successfully able to edit Job Title and can see a message 'The Job Title qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/3627e9e2-1996-443e-b7cb-d55b9e16b4df)
- Case-level expected result:
  > User successfully able to edit Job Title Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Employee Category (section ID 434962; 5 case(s))

### C8934403 - Verify Employee Category Master page

- Section: System Configuration / Company / Employee Category
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Employee Category
    - Step expected result:
      > User navigated to Employee Category Master page. Where user can see:
      > 
      > 1. 'Employee Category Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Employee Category Name' as a text field
      > 4. 'Show only Handled by Intl. SOS' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/fd73725c-77a5-42db-97f3-13da3f98063a)
- Case-level expected result:
  > User navigated to Employee Category Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934404 - User successfully able to add Employee Category Master

- Section: System Configuration / Company / Employee Category
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Employee Category
    - Step expected result:
      > User navigated to Employee Category Master page
      > 
      > ![](index.php?/attachments/get/1f0239bb-5043-4ae1-a4fd-de656d2e1282)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name - Dropdown field
      > 2. Employee Category Name - Text Field
      > 3. Active? - Checkbox
      > 4. Employee Category Name - Checkbox
      > 5. Submit and Cancel - button
      > 
      > ![](index.php?/attachments/get/5f476b82-caf8-47a7-9ed3-7bab84ae73de)
  - Step 3 action:
    > User select company from drop-down, enter Employee Category Name in text field, select checkbox as active, Select checkbox as Handled by Intl. SOS and click on Submit button
    > 
    > ![](index.php?/attachments/get/82efe92b-85fb-42d6-a2ef-f69be637bc70)
    - Step expected result:
      > User can see a success message 'The Employee Category qwer has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/c2515373-f708-40dd-b860-845c8e5a8c0b)
  - Step 4 action:
    > User select company from drop-down, enter Employee Category Name in text field, select checkbox as active, Select checkbox as Handled by Intl. SOS and click on Cancel button
    - Step expected result:
      > User navigated to Employee Category Master page
      > 
      > ![](index.php?/attachments/get/630aa8ef-842f-45ac-a12c-c00e287bd03d)
- Case-level expected result:
  > User successfully able to add Employee Category Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934405 - User unable to add Employee Category Master

- Section: System Configuration / Company / Employee Category
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Employee Category
    - Step expected result:
      > User navigated to Employee Category Master page
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Company Name - Dropdown field
      > 2. Employee Category Name - Text Field
      > 3. Active? - Checkbox
      > 4. Employee Category Name - Checkbox
      > 5. Submit and Cancel - button
      > 
      > ![](index.php?/attachments/get/9f1a06de-d810-4598-ad41-bec03b63381e)
  - Step 3 action:
    > User select company name, enter Employee Category Name with invalid data and click on submit button
    > 
    > ![](index.php?/attachments/get/a0e3c093-9696-466b-8ada-ef13a39c65b9)
    - Step expected result:
      > User can see a message 'Please enter a valid Employee Category Name.'
      > 
      > ![](index.php?/attachments/get/c2f81dbe-28d9-4bb6-84a0-f4f5af9bc19f)
- Case-level expected result:
  > User is unable to add Employee Category Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934406 - Validation check on Employee Category Master page

- Section: System Configuration / Company / Employee Category
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Employee Category
    - Step expected result:
      > User navigated to Employee Category Master page
      > 
      > ![](index.php?/attachments/get/89e1e830-da5e-4497-a21a-d5368aa648d1)
  - Step 2 action:
    > User select checkbox ' Show only Handled by Intl. SOS'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/590f2c77-6548-46d3-bcc3-c9045f5c3a2c)
  - Step 3 action:
    > User enter data in Employee Category text field and click on search button
    - Step expected result:
      > Search result should display based on Employee Category, if present
      > 
      > ![](index.php?/attachments/get/2a1f0a62-de0d-4cb9-a81a-ae892136e516)
      > 
      > Otherwise will get message 'There are no employee categories available for the search performed.'
      > 
      > ![](index.php?/attachments/get/29981fc7-5256-4677-ab53-bf0c724da2e1)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934407 - Edit Employee Category Master details

- Section: System Configuration / Company / Employee Category
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Employee Category
    - Step expected result:
      > User navigated to Employee Category Master page
      > 
      > ![](index.php?/attachments/get/e14409b4-8d28-4184-b013-c523710ff9f1)
  - Step 2 action:
    > User select data from Owner Company drop-down, Enter Employee Category Name and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/0c6598ae-8b07-4fb2-9982-9799ebaaeb9e)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Employee Category Name
      > 
      > ![](index.php?/attachments/get/bb70ebe5-9452-41f9-8f2f-f900d9d8a715)
  - Step 4 action:
    > User edit Employee Category Name and click on Submit button
    - Step expected result:
      > User successfully able to edit Employee Category Name and can see a message '
      > The Employee Category qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/2ba8268d-36cf-49d6-a20f-88938f19bc90)
- Case-level expected result:
  > User successfully able to edit Employee Category Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Additional Information (section ID 434963; 5 case(s))

### C8934413 - Verify Additional Information Master page

- Section: System Configuration / Company / Additional Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Additional Information
    - Step expected result:
      > User navigated to Additional Information Master page. Where user can see:
      > 
      > 1. 'Additional Information Master' logo and 'Add' button
      > 2. 'Owner Company' as a drop-down field
      > 3. 'Field Name' as a text field
      > 4. 'Show only Active' as a Checkbox
      > 5. 'Search' and 'Reset' buttons
      > 
      > ![](index.php?/attachments/get/83bfd9c7-32e1-42de-b8c2-74fcd5225bd5)
- Case-level expected result:
  > User navigated to Additional Information Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934414 - User successfully able to add Additional Information Master

- Section: System Configuration / Company / Additional Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Additional Information
    - Step expected result:
      > User navigated to Additional Information Master page
      > 
      > ![](index.php?/attachments/get/1f0239bb-5043-4ae1-a4fd-de656d2e1282)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a section 'Add/Modify Additional Fields with details:
      > 
      > 1. Company Name - Dropdown field
      > 2. Additional Field Name - Text Field
      > 3. Active- Checkbox
      > 4. Column Name In HR Import - Checkbox
      > 5. Additional Field Type - Drop-down
      > 5. Submit and Cancel - button
      > 
      > ![](index.php?/attachments/get/0fc217fa-b235-485e-b304-9abb6e39879b)
  - Step 3 action:
    > User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button
    > 
    > ![](index.php?/attachments/get/b1f581a3-3a4c-40c7-a66a-48d36e2f5402)
    - Step expected result:
      > User can see a success message 'The Additional Field qwer has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/a6edd4c9-898e-4855-9f70-3a6b377dfbab)
  - Step 4 action:
    > User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Cancel button
    - Step expected result:
      > User navigated to Employee Category Master page
      > 
      > ![](index.php?/attachments/get/8fcfdd61-c9f0-4ba8-8712-2aab7b88b8d7)
- Case-level expected result:
  > User successfully able to add Additional Information Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934415 - User unable to add Additional Information Master

- Section: System Configuration / Company / Additional Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Additional Information
    - Step expected result:
      > User navigated to Additional Information Master page
      > 
      > ![](index.php?/attachments/get/b1774a0b-aaa2-49c7-9679-3b682c0017a7)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a section 'Add/Modify Additional Fields with details:
      > 
      > 1. Company Name - Dropdown field
      > 2. Additional Field Name - Text Field
      > 3. Active- Checkbox
      > 4. Column Name In HR Import - Checkbox
      > 5. Additional Field Type - Drop-down
      > 6. Submit and Cancel - button
      > 
      > ![](index.php?/attachments/get/c373710c-d7aa-4b68-864a-57b45be51ca9)
  - Step 3 action:
    > User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button
    > 
    > ![](index.php?/attachments/get/14b3c7d1-986d-4f79-9609-a83d28391f37)
    - Step expected result:
      > User can see a message 'Please enter a valid additional field name.'
      > 
      > ![](index.php?/attachments/get/8244dd1c-e587-4c7c-99ee-5a4da41ad48a) ![](index.php?/attachments/get/3e75c1e6-7192-44c7-a65e-6262a36f198f)
  - Step 4 action:
    > User select company from drop-down, enter Additional Field Name in text field, enter Column Name In HR Import in text field, select checkbox as active, Select data from Additional Field Type and click on Submit button (Already present)
    - Step expected result:
      > User can see a message 'The additional field already exists in the system.'
      > 
      > ![](index.php?/attachments/get/6bfcd2d0-b186-46ea-8338-d906fff42bf1)
- Case-level expected result:
  > User is unable to add Additional Information Master due to invalid entry
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934416 - Validation check on Additional Information Master page

- Section: System Configuration / Company / Additional Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Additional Information
    - Step expected result:
      > User navigated to Additional Information Master page
      > 
      > ![](index.php?/attachments/get/283c4245-2699-4f18-a6fa-6c0a3098bd7f)
  - Step 2 action:
    > User select checkbox 'Show only Active'
    - Step expected result:
      > Active records will get displayed
      > 
      > ![](index.php?/attachments/get/59b979d0-cd69-4ab3-9f2b-c22a1d4db742)
  - Step 3 action:
    > User enter data in Owner Company text field and click on search button
    - Step expected result:
      > Search result should display based on Owner Company, if present
      > 
      > ![](index.php?/attachments/get/7cd13df8-1dca-4aa2-bc59-216c8f0003a3)
      > 
      > Otherwise will get message 'There are no additional fields available for the search performed.'
      > 
      > ![](index.php?/attachments/get/f6a7be91-99a7-45d5-8416-884a31b7fe68)  ![](index.php?/attachments/get/0851e2e8-7d23-4df0-8ec4-a8fa51295abe)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934417 - Edit Additional Information Master details

- Section: System Configuration / Company / Additional Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on Search Employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> company --> Additional Information
    - Step expected result:
      > User navigated to Additional Information Master page
      > 
      > ![](index.php?/attachments/get/cdadad6b-b7ba-4e81-8ecf-e9c885844cec)
  - Step 2 action:
    > User enter data in Owner Company drop-down field, enter data in Field Name text field and click on search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/e3552607-6ce4-439c-98de-10a6a60beb25)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > User able to edit Additional Information
      > 
      > ![](index.php?/attachments/get/44251bdd-473f-4a04-963b-9baf65d2a40e)
  - Step 4 action:
    > User edit Employee Category Name and click on Submit button
    - Step expected result:
      > User successfully able to edit Employee Category Name and can see a message '
      > The Additional Field qwer has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/3df98771-bccc-42a8-ba64-ef9e1cfd3033)
- Case-level expected result:
  > User successfully able to edit Additional Information Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Criteria (section ID 434964; 3 case(s))

### C8934420 - Verify Criteria page

- Section: System Configuration / Company / Criteria
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Criteria
    - Step expected result:
      > User navigated to Company Criteria Master page and user can see details:
      > 
      > 1. Owner Company - drop-down field
      > 2. Get Details - button
      > 
      > ![](index.php?/attachments/get/884a57a3-7a4e-40ae-8ac3-7c3142188b0e)
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934421 - User is able to choose Company Criteria

- Section: System Configuration / Company / Criteria
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Criteria
    - Step expected result:
      > User navigated to Company Criteria Master page and user can see details:
      > 
      > ![](index.php?/attachments/get/285b5894-6ea5-4207-a804-55cd6daf820d)
  - Step 2 action:
    > User select fata from Owner Company drop-down and click on Get Details button
    - Step expected result:
      > User can see a table with
      > 
      > 1. Criteria Field - column
      > 2. Optional Criteria? - Column
      > 3. Submit button
      > 
      > ![](index.php?/attachments/get/86147c47-d7fc-4f16-9cc2-7e53c6b8e0a8)
  - Step 3 action:
    > User select checkbox as per requirement and click on submit button
    > 
    > ![](index.php?/attachments/get/71390cf8-4c8b-4cfe-9f10-47fac7b4e795)
    - Step expected result:
      > User can see a success message 'The criteria fields for Air Liquide have been successfully saved in the system.'
      > 
      > ![](index.php?/attachments/get/9cc231ac-ba90-4577-a943-6e0559dc6864)
  - Step 4 action:
    > User select checkbox as per requirement and click on Reset button
    > 
    > ![](index.php?/attachments/get/c956e073-f660-4c6a-bed6-08bf7b0b19fe)
    - Step expected result:
      > User navigated to Company Criteria Master page
      > 
      > ![](index.php?/attachments/get/d11663e9-f69c-4a68-a4b9-0dc515509711)
- Case-level expected result:
  > User is able to choose Company Criteria
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934422 - Validation check on Criteria page

- Section: System Configuration / Company / Criteria
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Criteria
    - Step expected result:
      > User navigated to Company Criteria Master page and user can see details:
      > 
      > ![](index.php?/attachments/get/6fe7c281-b68d-4c62-9e82-6f15b7b71180)
  - Step 2 action:
    > User click on Get Details button without select Owner Company drop-down
    - Step expected result:
      > User can see a message 'The Company is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/57c718c0-290a-4966-a238-022dcf4bb5f9)
- Case-level expected result:
  > User can see validation message on Company Criteria Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / MET (section ID 434965; 5 case(s))

### C8934425 - Verify MET page

- Section: System Configuration / Company / MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> MET
    - Step expected result:
      > User navigated to Search MET page
      > 
      > ![](index.php?/attachments/get/c9f95a84-f04e-454e-87df-28f681bf36bf)
      > 
      > And user can see details:
      > 1. Company - drop-down
      > 2. Global MET - drop-down
      > 3. MET name - text field
      > 4. Show only Active - Checkbox
      > 5. Add, Search and Reset - button
- Case-level expected result:
  > User navigated to Search MET page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934426 - Validation check on MET page

- Section: System Configuration / Company / MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> MET
    - Step expected result:
      > User navigated to Search MET page
      > 
      > ![](index.php?/attachments/get/0ff7acde-6fa6-4926-9d12-388129f21abb)
  - Step 2 action:
    > User click on search button without selecting any search criteria
    - Step expected result:
      > User can see search results
      > 
      > ![](index.php?/attachments/get/9863eb61-f07c-48e6-b8f6-187d9366b9eb)
  - Step 3 action:
    > User select data from company and Global MET drop-down and click on search button (If there is no MET)
    - Step expected result:
      > User can see a message 'There are no METs available for the search performed.'
      > 
      > ![](index.php?/attachments/get/f175d98f-b0ce-4715-9a7e-b08fbd8ae71b)
  - Step 4 action:
    > User enter special characters in MET name text field
    - Step expected result:
      > User can see a message 'Please enter a valid MET Name.'
      > 
      > ![](index.php?/attachments/get/dcb5a707-a442-40d6-a40f-a71f586dc48c)
  - Step 5 action:
    > User select data from company and Global MET drop-down and click on Reset button
    > 
    > ![](index.php?/attachments/get/e4bd8733-2300-47a7-9c27-e64cb4ddce2b)
    - Step expected result:
      > Entered data on text fields and checkbox value will be erased
      > 
      > ![](index.php?/attachments/get/93c25d9c-eb70-4545-9f1b-aa1d30c1a137)
  - Step 6 action:
    > User enter details in each fields on search MET and click on Reset button
    > 
    > ![](index.php?/attachments/get/78c791d4-bea4-4928-895d-64b30feca10e)
    - Step expected result:
      > All fields data get erased
      > 
      > ![](index.php?/attachments/get/77e13701-e2a0-4300-868d-5ccf56496d17)
- Case-level expected result:
  > User can see validation message based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934428 - User successfully able to add MET

- Section: System Configuration / Company / MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> MET
    - Step expected result:
      > User navigated to Search MET page
      > 
      > ![](index.php?/attachments/get/a0653bd7-34ea-45eb-b02d-d7d630dc7a7c)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a section 'MET Criteria List' and Add button
      > 
      > ![](index.php?/attachments/get/c869a380-32d6-46a7-bf17-5613b8d6556e)
  - Step 3 action:
    > User enter details in mandatory fields and click on Add button
    > 
    > ![](index.php?/attachments/get/9e3fd6a3-65ad-4d69-8f3c-5201ebbb6084)
    - Step expected result:
      > User can see section 'Add/Modify MET Criteria' with details:
      > 1. Criteria Name - Text field
      > 2. Frequency in Years - Text field
      > 3. Checkbox - Active
      > 4. A table with columns: Criteria Name, Drop-down, (Minimum Value), (Maximum Value)
      > 5. A note - Note : Minimum value and Maximum value specified are included in the range.
      > 
      > ![](index.php?/attachments/get/09be2dde-28ff-45f2-a2b9-6e3cdbe48b90)
  - Step 4 action:
    > User enter details in mandatory fields and click on submit button
    > 
    > ![](index.php?/attachments/get/f428a57d-c20e-4db4-919c-2141fc66d63d)
    - Step expected result:
      > User can see a success message
- Case-level expected result:
  > User successfully able to add MET
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934430 - Validation check on MET page

- Section: System Configuration / Company / MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> MET
    - Step expected result:
      > User navigated to Search MET page
      > 
      > ![](index.php?/attachments/get/63000992-2bc3-48f8-a9a1-ff29ccee2555)
  - Step 2 action:
    > User click on Add button without select any fields or enter any data
    - Step expected result:
      > User can see alert messages:
      > 
      > The Company is mandatory and cannot be blank.
      > The Global MET is mandatory and cannot be blank.
      > The MET is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/25135436-0c5b-4612-bac7-722c7a7116c5)
  - Step 3 action:
    > User click on submit button without select any fields or enter any data
    - Step expected result:
      > User can see alert messages:
      > 
      > The Criteria Name is mandatory and cannot be blank.
      > The frequency for an MET Criteria is mandatory and cannot be blank.
      > The value for AGE is mandatory and cannot be blank. Please enter at least the minimum value.
      > The value for GENDER is mandatory and cannot be blank.
      > The value for EMPLOYEE STATUS is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/56562efa-1d6d-4c53-8717-9ae140a0b9cd)
  - Step 4 action:
    > User enter special characters in text fields
    - Step expected result:
      > User can see message:
      > 
      > Please enter a valid Criteria Name.
      > Please enter 0 or greater than 0 for the Frequency.
      > Please enter only whole numbers between 0 - 99999999 for Minimum Value of AGE.
      > 
      > ![](index.php?/attachments/get/2e38d3c5-b8b7-49ed-a336-6e087a20befe)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934436 - Unable to search MET

- Section: System Configuration / Company / MET
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> MET
    - Step expected result:
      > User navigated to Search MET page
      > 
      > ![](index.php?/attachments/get/516b7dee-d373-471a-83e8-625a01e11b7a)
  - Step 2 action:
    > User select MET details from drop-down and enter MET name (not exist)
    - Step expected result:
      > User can see message 'There are no METs available for the search performed.'
      > 
      > ![](index.php?/attachments/get/76203fab-380a-40d8-8b03-9e3658e17f73)
  - Step 3 action:
    > User select Global MET from drop-down (not exist)
    - Step expected result:
      > User can see message 'There are no METs available for the search performed.'
      > 
      > ![](index.php?/attachments/get/7f3ca42d-d2ac-4a2e-a8c1-1fde6d710a39)
- Case-level expected result:
  > Unable to search MET
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Fitness Conclusion (section ID 434966; 5 case(s))

### C8934459 - Verify Fitness Conclusion page

- Section: System Configuration / Company / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Fitness Conclusion
    - Step expected result:
      > User navigated to Company Fitness Conclusion Master page
      > 
      > ![](index.php?/attachments/get/3ffe94bd-5f54-4552-9a46-853532f09f28)
      > 
      > And user can see details:
      > 
      > 1. Owner Company - drop-down
      > 2. User Role - drop-down
      > 3.Fitness Conclusion Name - drop-down
      > 4. Show only Active - checkbox
      > 5. Add, Search and Reset button
- Case-level expected result:
  > User navigated to Company Fitness Conclusion Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934460 - Validation check on Fitness Conclusion

- Section: System Configuration / Company / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Fitness Conclusion
    - Step expected result:
      > User navigated to Company Fitness Conclusion Master page
      > 
      > ![](index.php?/attachments/get/94d16943-bfc4-4949-9946-0a818538f40b)
  - Step 2 action:
    > User enter user role (not available in the system)
    - Step expected result:
      > User can see a message 'There are no fitness conclusions available for the search performed.'
      > 
      > ![](index.php?/attachments/get/91d6b69c-763f-4822-b058-68019cf873d4)
  - Step 3 action:
    > User enter Fitness Conclusion Name (not available in the system)
    - Step expected result:
      > User can see a message 'There are no fitness conclusions available for the search performed.'
      > 
      > ![](index.php?/attachments/get/4182a265-f4ba-49ce-a4c9-4b288c912465)
  - Step 4 action:
    > User click on Add button and without select any data from drop-down, user click on submit button
    - Step expected result:
      > User can see a message:
      > 
      > The Company name is mandatory and cannot be blank.
      > The User role is mandatory and cannot be blank.
      > The fitness conclusion is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/ebf08f37-80fd-4c9a-91dd-3fc8530b696b)
  - Step 5 action:
    > User enter data in each fields and click on reset button
    > 
    > ![](index.php?/attachments/get/a1212830-3dd8-45ff-a65c-74db09808531)
    - Step expected result:
      > All fields and selected checkbox gets cleared
      > 
      > ![](index.php?/attachments/get/8a4b4a2a-25f7-4aaa-9cec-ed33822789c4)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934461 - User successfully able to add Fitness Conclusion

- Section: System Configuration / Company / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Fitness Conclusion
    - Step expected result:
      > User navigated to Company Fitness Conclusion Master page
      > 
      > ![](index.php?/attachments/get/01a328be-14b4-4320-8df8-f6163e3d5b37)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with columns:
      > 
      > 1. Owner Company
      > 2. User Role
      > 3. Active?
      > 4. Fitness Conclusion Name
      > 5. Submit and Cancel button
      > 
      > ![](index.php?/attachments/get/16ec27c5-a859-4a71-989b-b1eaf16b8882)
  - Step 3 action:
    > User select data from drop-down - Owner Company, User Role, Active? and Fitness Conclusion Name and click on Submit button
    - Step expected result:
      > User can see a success message 'The fitness conclusion Fit has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/d0d7051d-d9a3-437e-8540-2719a2b0f604)
- Case-level expected result:
  > User is able to add Fitness Conclusion
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934462 - User successfully able to edit Fitness Conclusion

- Section: System Configuration / Company / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Fitness Conclusion
    - Step expected result:
      > User navigated to Company Fitness Conclusion Master page
      > 
      > ![](index.php?/attachments/get/a86ebc8d-e1b9-42e0-b466-c991c1ec26b3)
  - Step 2 action:
    > User select data from drop-down - Owner Company or User Role or Active? or Fitness Conclusion Name and click on Search button
    - Step expected result:
      > User can see search results
      > 
      > ![](index.php?/attachments/get/d2f800e4-e349-4ae7-8340-540ff7c208ed)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see fields as editable
      > 
      > ![](index.php?/attachments/get/8764fb3e-1e03-4d70-b140-5d45634c1926)
  - Step 4 action:
    > User modify details and click on submit button
    > 
    > ![](index.php?/attachments/get/09d32bfa-df8f-44a5-983b-38424e707e32)
    - Step expected result:
      > User can see a success message 'The fitness conclusion R09 has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/657c787c-6965-45ef-b67c-1d7bab845756)
- Case-level expected result:
  > User is able to able to edit Fitness Conclusion Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934463 - Unable to search Fitness Conclusion

- Section: System Configuration / Company / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Fitness Conclusion
    - Step expected result:
      > User navigated to Company Fitness Conclusion Master page
      > 
      > ![](index.php?/attachments/get/7f1cf094-63c2-4279-8af2-023539b40afc)
  - Step 2 action:
    > User select User Role and Fitness Conclusion Name (not exist in the system) from drop-down and click on search button
    - Step expected result:
      > User can see a message 'There are no fitness conclusions available for the search performed.'
      > 
      > ![](index.php?/attachments/get/e1c42f8f-0c0b-4485-84c5-a81d5867ce16)
- Case-level expected result:
  > User cannot search Fitness Conclusion
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Static Content (section ID 434967; 5 case(s))

### C8934490 - Verify Static Content Master

- Section: System Configuration / Company / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Static Content
    - Step expected result:
      > User navigated to Static Content Master page
      > 
      > ![](index.php?/attachments/get/416b0726-fb22-423e-a342-dcb78f4f7e17)
      > 
      > And user can see content:
      > 1. Owner Company - drop-down
      > 2. Search and Reset button
- Case-level expected result:
  > User navigated to Static Content Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934491 - Validation check on Static Content Master

- Section: System Configuration / Company / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Static Content
    - Step expected result:
      > User navigated to Static Content Master page
      > 
      > ![](index.php?/attachments/get/6ca3f261-4e97-4e16-a13a-b82d48fa8fcb)
  - Step 2 action:
    > User select data from drop-down and click on reset button
    > 
    > ![](index.php?/attachments/get/0b5df37d-ae69-4dcc-860f-6d8adfb38804)
    - Step expected result:
      > Selected fields gets cleared
      > 
      > ![](index.php?/attachments/get/82d7db2c-49b3-4bea-87d4-71497d1790db)
  - Step 3 action:
    > User select data from drop-down, click on Search button. Again click on Add button
    > 
    > ![](index.php?/attachments/get/66ce09d4-a49d-4edc-8dfc-666ed016099f)
    > 
    > Again user click on Submit button without select any data from drop-down
    > 
    > ![](index.php?/attachments/get/900be22e-7b65-45c5-becf-8e444d3128ef)
    - Step expected result:
      > Then user can see a validation message:
      > 
      > The menu name is mandatory and cannot be blank.
      > The URL location or path is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/3d475d29-840d-4eea-9232-ca9cd28e797d)
  - Step 4 action:
    > User select data from drop-down, click on Search button. Again click on Edit button
    > 
    > ![](index.php?/attachments/get/6a2711f3-30f1-4a13-9a50-2abfc8fceed0)
    > 
    > Again click on Submit button without select any data from drop-down
    > 
    > ![](index.php?/attachments/get/441a1b86-603e-4bf0-9c61-83e2556f5b73)
    - Step expected result:
      > user can see a validation message:
      > 
      > Please enter a valid location. For example: http://172.22.32.178:8081/Employee/SearchEmployee.aspx Or https://www.abcd.com/login.asp
      > 
      > ![](index.php?/attachments/get/c7c38325-26b2-4d83-a9ac-3e4baed8a24f)
- Case-level expected result:
  > user can see a validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934492 - User successfully able to add Static Content Master

- Section: System Configuration / Company / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Static Content
    - Step expected result:
      > User navigated to Static Content Master page
      > 
      > ![](index.php?/attachments/get/7cd46380-ea73-432f-a84b-ee6162c15f7f)
  - Step 2 action:
    > User select data from drop-down, click on Search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/20c029b9-3cbf-4a99-8b7d-d178ade94d57)
  - Step 3 action:
    > User click on Add button
    - Step expected result:
      > User can see a table and contents
      > 
      > ![](index.php?/attachments/get/a110fd28-a82d-443a-9aab-dcc8c71eb171)
      > 
      > Columns: Company, Menu Name, URL location or path
      > Button: Submit, Cancel
  - Step 4 action:
    > User enter details in text boxes 'Menu Name' and 'URL location or path' and click on submit button
    > 
    > ![](index.php?/attachments/get/cf39ac8c-7972-4d32-a498-1c0a334ecf86)
    - Step expected result:
      > User can see a success message 'The menu Test has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/294ed6ce-e49d-44ff-a9f0-f05f6b5417f9)
- Case-level expected result:
  > User successfully able to add Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934493 - User successfully able to edit Static Content Master

- Section: System Configuration / Company / Static Content
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Static Content
    - Step expected result:
      > User navigated to Static Content Master page
      > 
      > ![](index.php?/attachments/get/1a2a6859-bff0-42c8-a2f2-9c490271bac7)
  - Step 2 action:
    > User select data from drop-down, click on Search button
    - Step expected result:
      > Search result gets displayed
      > 
      > ![](index.php?/attachments/get/8d54fded-fd3e-4ec7-bb1a-9b304087f87d)
  - Step 3 action:
    > User click on edit button for company
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/491d6846-38a1-4282-897d-f739973bba8b)
  - Step 4 action:
    > User modify details and click on submit button
    > 
    > ![](index.php?/attachments/get/e27ea49e-8dbd-45cc-ae6d-c05e963fea4d)
    - Step expected result:
      > User can see a success message 'The menu Test1 has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/230f97af-75ee-4ce0-ba05-1a70280019d0)
- Case-level expected result:
  > User successfully able to edit Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934494 - Unable to search Static Content Master

- Section: System Configuration / Company / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Static Content
    - Step expected result:
      > User navigated to Static Content Master page
      > 
      > ![](index.php?/attachments/get/749271db-3044-43ee-9056-39d4f733607d)
  - Step 2 action:
    > User select data from drop-down, click on Search button
    - Step expected result:
      > User can see Subsidiary Company drop down
      > 
      > ![](index.php?/attachments/get/ced0e44d-5239-4ff7-a76a-17729a7a379e)
  - Step 3 action:
    > User select data from 'Subsidiary Company' drop down and click on search button
    > 
    > ![](index.php?/attachments/get/cd682469-7f68-4a57-82d9-331b7feefedd)
    - Step expected result:
      > User can see a message 'There are no static content menus for the search performed.'
      > 
      > ![](index.php?/attachments/get/b3320605-4ae2-4ac4-b6b1-933f288342ec)
- Case-level expected result:
  > Unable to search Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Medical History (section ID 434968; 3 case(s))

### C8934501 - Verify Medical History Page

- Section: System Configuration / Company / Medical History
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Medical History
    - Step expected result:
      > User navigated to Company Medical History Master
      > 
      > ![](index.php?/attachments/get/a4bbdf84-ed59-478a-b610-4c40d6135c3e)
      > 
      > And user can see content:
      > 1. Owner Company - drop-down
      > 2. Get Details button
- Case-level expected result:
  > Verify Medical History Page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934502 - Validation check on Medical History

- Section: System Configuration / Company / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Medical History
    - Step expected result:
      > User navigated to Company Medical History Master
      > 
      > ![](index.php?/attachments/get/6d6a9ee4-af3e-4d71-a3b5-869670b3194f)
  - Step 2 action:
    > User click on Get Details button without select data from drop-down
    - Step expected result:
      > User can see a validation message 'Please select a Company to get the details.'
      > 
      > ![](index.php?/attachments/get/0a3b6287-89b3-4d8f-8e30-57c49b082ba8)
  - Step 3 action:
    > User select data from Owner Company drop-down, click on Get Details button. Again click on submit button without enter any details on the screen
    - Step expected result:
      > User can see a message 'There are no changes to save for medical history health check item.'
      > 
      > ![](index.php?/attachments/get/045d72dc-8d08-4332-8df5-c0e816f07735)
- Case-level expected result:
  > User can see validation messages
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934503 - User is able to do changes on Medical History page

- Section: System Configuration / Company / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Medical History
    - Step expected result:
      > User navigated to Company Medical History Master
      > 
      > ![](index.php?/attachments/get/37260298-4897-4e77-baa2-77c27d3ec3ba)
  - Step 2 action:
    > User select data from drop-down and click on Get Details button
    - Step expected result:
      > User can see a section 'Additional Information' and a table 'Medical History Health Check Item'
      > 
      > ![](index.php?/attachments/get/9569a410-35ad-42de-967f-75d851f908e7)
  - Step 3 action:
    > User enter data in text field 'Medical History Note', select check box from 'Medical History Name', enter text in 'Sequence' text field and click on submit button
    > 
    > ![](index.php?/attachments/get/6fa6f0bb-806c-43a8-9ce9-92478d1d9761)
    - Step expected result:
      > User can see a message 'Modification have been changed successfully'
      > 
      > ![](index.php?/attachments/get/38453e4e-bff9-4ddb-b181-873b3e21f705)
- Case-level expected result:
  > User is able to do changes on Medical History page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Dashboard / Widget Configuration (section ID 434971; 5 case(s))

### C8934504 - Verify Widget Configuration page

- Section: System Configuration / Company / Dashboard / Widget Configuration
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Widget Configuration
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > 
      > ![](index.php?/attachments/get/b2013b4b-ca1a-41de-b5bc-b97006ce075c)
      > 
      > And user can see contents:
      > 1. Owner Company - drop-down
      > 2. User Preference - drop-down
      > 3. Widget Type - drop-down
      > 4. Health Check Item Name - drop-down
      > 5. Widget Category - drop-down
      > 6. Widget Name - text field
      > 7. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Widget Configuration page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934505 - Validation check on Widget Configuration page

- Section: System Configuration / Company / Dashboard / Widget Configuration
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Widget Configuration
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > 
      > ![](index.php?/attachments/get/a2b107de-9767-4acc-a6f3-7d804788c316)
  - Step 2 action:
    > User enter incorrect data in Widget Name text field and click on search button
    - Step expected result:
      > User can see a message 'There is no widget configuration available for the selected criteria.'
      > 
      > ![](index.php?/attachments/get/ec863c6c-1ff9-47b7-bf16-07fd9b01dc64)
  - Step 3 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Widget Configuration page
      > 
      > ![](index.php?/attachments/get/3093566b-e922-40fb-8194-e683d242ca8f)
      > 
      > User skipped some mandatory drop-down fields and click on add button for smiley, then user can see validation message
      > 
      > ![](index.php?/attachments/get/291b429a-7b4e-4fb5-ad5e-34b6cf3184f3)
  - Step 4 action:
    > User enter special character in Widget Name text field and click on Submit button
    > 
    > ![](index.php?/attachments/get/b53b283e-e1fb-47d8-b179-955d461e52b1)
    - Step expected result:
      > User can see a message 'Please enter a valid sequence number'
      > 
      > ![](index.php?/attachments/get/66bcec69-e1ac-4f0b-b1ac-42fa38813718)
  - Step 5 action:
    > User click on Preview button
    - Step expected result:
      > User can see a alert message
      > 
      > ![](index.php?/attachments/get/0680398e-b5fd-45b6-8345-6122887d9123)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934506 - User is successfully able to add Widget Configuration

- Section: System Configuration / Company / Dashboard / Widget Configuration
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Widget Configuration
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > 
      > ![](index.php?/attachments/get/3c83b90b-bd0e-408e-9e17-744f6fad99e5)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Widget Configuration page
      > ![](index.php?/attachments/get/81524021-66f6-4d5e-850a-bc7d7865d35e)
  - Step 3 action:
    > User enter mandatory details and add smiley
    - Step expected result:
      > User successfully able to add smiley
      > 
      > ![](index.php?/attachments/get/56329024-2125-4674-8453-9aea92d6b8f9)
  - Step 4 action:
    > User click on submit button
    - Step expected result:
      > User can see a success message 'The widget configuration has been successfully added.'
      > 
      > ![](index.php?/attachments/get/fc83695a-fc21-48f0-8a33-f9a419b6cceb)
  - Step 5 action:
    > User click on cancel button
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > 
      > ![](index.php?/attachments/get/178b0d2e-39fb-484e-9112-116297331bac)
- Case-level expected result:
  > User is successfully able to add Widget Configuration
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934507 - User is failed to add Widget Configuration

- Section: System Configuration / Company / Dashboard / Widget Configuration
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Widget Configuration
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > 
      > ![](index.php?/attachments/get/3087e198-d6f5-49a3-bb7a-db00dec7c2f3)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Widget Configuration page
      > ![](index.php?/attachments/get/fd53f2ed-11f7-4ae1-8fb3-9e0b88d2ec61)
  - Step 3 action:
    > User enter special character in Widget Name text field and click on Submit button
    > ![](index.php?/attachments/get/a1983cdb-bf32-4f31-a001-01c136f553b6)
    - Step expected result:
      > User can see a message 'Please enter a valid sequence number'
      > ![](index.php?/attachments/get/67624c50-2f53-40a1-b2fa-fba5d00dcab4)
- Case-level expected result:
  > User is failed to add Widget Configuration
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934508 - Unable to search Widget Configuration

- Section: System Configuration / Company / Dashboard / Widget Configuration
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Widget Configuration
    - Step expected result:
      > User navigated to Search Widget Configuration page
      > ![](index.php?/attachments/get/21bbd34b-dacf-4fae-9afa-04abc973dc88)
  - Step 2 action:
    > User enter incorrect data in Widget Name text field and click on search button
    - Step expected result:
      > User can see a message 'There is no widget configuration available for the selected criteria.'
      > 
      > ![](index.php?/attachments/get/74379ce9-2dff-48c7-81be-d0dede2c1231)
- Case-level expected result:
  > Unable to search Widget Configuration
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Dashboard / Notification (section ID 434972; 3 case(s))

### C8934509 - Verify Notifications page

- Section: System Configuration / Company / Dashboard / Notification
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Notification
    - Step expected result:
      > User navigated to Company Notification Master page
      > 
      > And user can see contents:
      > 1. Owner Company - drop-down
      > 2. Get Details, Reset - Button
- Case-level expected result:
  > Verify Company Notification Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934510 - Validation check on Notifications page

- Section: System Configuration / Company / Dashboard / Notification
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Notification
    - Step expected result:
      > User navigated to Company Notification Master page
      > 
      > ![](index.php?/attachments/get/20a0a26e-7457-4fad-af3d-325f11148b0b)
  - Step 2 action:
    > User click on Get Details button without select drop-down
    - Step expected result:
      > User can see a message 'The Company field is mandatory and cannot be left blank.'
      > 
      > ![](index.php?/attachments/get/0efef2c1-6b2f-4d29-b5a4-bcd108d5482f)
  - Step 3 action:
    > User select data from drop-down and click on Get Details button
    > 
    > ![](index.php?/attachments/get/9978ff86-fcfe-4252-acce-52ab852746c2)
    > 
    > And user click on Reset button
    - Step expected result:
      > All fields get cleared and user navigated to 'Company Notification Master'
      > 
      > ![](index.php?/attachments/get/fdd9cd07-d871-4af4-8ad9-2652895f460d)
  - Step 4 action:
    > User select data from drop-down and click on Get Details button
    > 
    > ![](index.php?/attachments/get/a54bfbca-c2e9-4208-b602-fda2357b1027)
    > 
    > And user click on submit button (All checkbox is unchecked)
    - Step expected result:
      > User can see a message 'Not configuring the notification(s) will affect the mobile application.'
      > 
      > ![](index.php?/attachments/get/82999bd2-1151-4138-aefd-e56b379280ff)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934511 - User is able to do the changes on Notifications page

- Section: System Configuration / Company / Dashboard / Notification
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Notification
    - Step expected result:
      > User navigated to Company Notification Master page
      > 
      > ![](index.php?/attachments/get/2551b548-b0c7-493d-9009-c8bf53563485)
  - Step 2 action:
    > User select data from drop-down and click on Get Details button
    - Step expected result:
      > User can see details with checkboxes and Submit button
      > 
      > ![](index.php?/attachments/get/5ca41f90-8e9e-4775-abed-8ff8b632a0fc)
  - Step 3 action:
    > User select checkbox and click on submit button
    > 
    > ![](index.php?/attachments/get/22713b27-ae59-413d-b9a1-14de0900377c)
    - Step expected result:
      > User can see a message 'The notification center has been successfully configured.'
      > 
      > ![](index.php?/attachments/get/702dcb56-4e60-463f-89ae-d3d4cdd8a0ce)
- Case-level expected result:
  > User is able to do the changes on Notifications page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Dashboard / Landing Page (section ID 434973; 3 case(s))

### C8934512 - Verify Landing Page Master

- Section: System Configuration / Company / Dashboard / Landing Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Landing Page
    - Step expected result:
      > User navigated to Landing Page Master
      > 
      > ![](index.php?/attachments/get/4573a2a6-34df-4e51-8174-62fe322014d4)
      > 
      > And user can see contents:
      > 1. Owner Company - drop-down
      > 2. Profile - drop-down
      > 3. Show only Enabled - Checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Landing Page Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934513 - Validation check on Landing Page Master

- Section: System Configuration / Company / Dashboard / Landing Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Landing Page
    - Step expected result:
      > User navigated to Landing Page Master
      > 
      > ![](index.php?/attachments/get/1928506f-c913-42b4-9f2d-19b51fce5648)
  - Step 2 action:
    > User select data from Owner Company drop down and click on Search button (No configuration available for company)
    - Step expected result:
      > User can see a message 'There are no Landing Page configuration available for the search performed.'
      > 
      > ![](index.php?/attachments/get/08871f7d-40e8-48a9-988a-e942caa34572)
  - Step 3 action:
    > User select checkbox 'Show only Enabled' and click on search button
    - Step expected result:
      > User can see results based on selected criteria
      > 
      > ![](index.php?/attachments/get/eae4db80-70e7-4e2c-ba99-6c715714b114)
  - Step 4 action:
    > User select data from drop-down Owner Company and Profile, select checkbox 'Show only Enabled' and click on reset button
    > 
    > ![](index.php?/attachments/get/dad14a12-f1f0-4664-b0a1-4032e8819290)
    - Step expected result:
      > All fields gets cleared
  - Step 5 action:
    > User select data from drop-down Owner Company and Profile and click on Submit button (landing page configuration already exists)
    > 
    > ![](index.php?/attachments/get/003da305-10ec-4f91-8d18-25fa0c48bbfd)
    - Step expected result:
      > User can see a message 'The landing page configuration already exists in the system'
      > 
      > ![](index.php?/attachments/get/9a8a0f01-c5cc-45a5-a89c-9af6317cfce5)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934514 - User is successfully able to add Landing Page Master

- Section: System Configuration / Company / Dashboard / Landing Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Dashboard --> Landing Page
    - Step expected result:
      > User navigated to Landing Page Master
      > ![](index.php?/attachments/get/ac[REDACTED_PHONE]-4f0b-8a1e-4aae0ff7b31e)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table
      > 
      > ![](index.php?/attachments/get/0540efc1-bd38-4570-8ce4-7ae30e874fd3)
      > 
      > Columns: Owner Company, Profile, Enabled?
      > Buttons: Submit and Cancel
  - Step 3 action:
    > User select data from drop-down Owner Company and Profile and click on Submit button
    > 
    > ![](index.php?/attachments/get/b6481233-43d2-48ba-a16c-c65a3a7616ff)
    - Step expected result:
      > User can see a success message
  - Step 4 action:
    > User click on cancel button
    - Step expected result:
      > User navigated to Landing Page Master
      > 
      > ![](index.php?/attachments/get/dfd40b69-d6a2-42ad-8bee-e1be9a123bab)
- Case-level expected result:
  > User is successfully able to add Landing Page Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Mobile / Static Content (section ID 434974; 4 case(s))

### C8934515 - Verify Static Content

- Section: System Configuration / Company / Mobile / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Static Content
    - Step expected result:
      > User navigated to Mobile Static Content Master
      > 
      > And user can see contents:
      > 1. Owner Company - drop-down
      > 2. Search, Reset - Button
- Case-level expected result:
  > Verify Mobile Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934516 - Validation check on Mobile Static Content Master

- Section: System Configuration / Company / Mobile / Static Content
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Static Content
    - Step expected result:
      > User navigated to Mobile Static Content Master
      > ![](index.php?/attachments/get/6e71db08-ca56-4fcf-9c09-62363ea6bb3c)
  - Step 2 action:
    > User click on Search button without select Owner Company drop-down
    - Step expected result:
      > User can see a message 'The Company is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/f8fb5da5-af1e-4c1e-a236-f648312e6f30)
  - Step 3 action:
    > 1. User select data from Owner Company drop down and click on search button
    > 2. User click on Add button
    > 3. User click on Submit button
    - Step expected result:
      > User can see validation message
      > 
      > The menu name is mandatory and cannot be blank.
      > The URL is mandatory and cannot be left blank.
      > 
      > ![](index.php?/attachments/get/732124ab-d65a-43e7-b573-c755f3edb846)
  - Step 4 action:
    > 1. User select data from Owner Company drop down and click on search button
    > 2. User click on Edit button
    > 3. Click on Submit button (Empty field will be empty)
    - Step expected result:
      > User can see validation message 'The menu name is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/62a718c4-1bf3-4585-981b-c65808062339)
  - Step 5 action:
    > 1. User select data from Owner Company drop down and click on search button
    > 2. User click on Edit button
    > 3. Click on Cancel button (Empty field will be empty)
    - Step expected result:
      > User navigated to Mobile Static Content Master
      > 
      > ![](index.php?/attachments/get/420eb202-ba54-4fda-a8fa-e0334a4ff605)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934517 - User is successfully able to create Mobile Static Content

- Section: System Configuration / Company / Mobile / Static Content
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Static Content
    - Step expected result:
      > User navigated to Mobile Static Content Master
      > 
      > ![](index.php?/attachments/get/7042d3bb-7af6-4808-8abf-73f8260076ad)
  - Step 2 action:
    > User select data from drop-down Owner Company and click on search button
    - Step expected result:
      > User can see Add button
      > 
      > ![](index.php?/attachments/get/67b10c20-a238-44b9-83af-48818ee78371)
  - Step 3 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with editable fields
      > 
      > ![](index.php?/attachments/get/017a66ed-3cd3-41d8-b9fc-2d833e314f80)
  - Step 4 action:
    > User enter data in Menu Name and URL location or path text fields and click on Submit button
    > 
    > ![](index.php?/attachments/get/ad4800c6-5511-4666-9e6f-4b58bd0df1eb)
    - Step expected result:
      > User can see a success message 'The menu test has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/08ef0cb7-fabf-46f3-b305-4df7f1ee4b6c)
- Case-level expected result:
  > User is successfully able to create Mobile Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934518 - User is able to edit Mobile Static Content Master

- Section: System Configuration / Company / Mobile / Static Content
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Static Content
    - Step expected result:
      > User navigated to Mobile Static Content Master
      > 
      > ![](index.php?/attachments/get/158403e1-ac95-48b1-8f9a-4acd3a16aa56)
  - Step 2 action:
    > User select data from drop-down Owner Company and click on search button
    - Step expected result:
      > User can see Edit button
      > 
      > ![](index.php?/attachments/get/192b65f3-4412-427c-97d9-9f4dfb9d61af)
  - Step 3 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with editable fields
      > 
      > ![](index.php?/attachments/get/884fafa9-a0f9-46c1-8159-3429d59eb69b)
  - Step 4 action:
    > User modify details and click on Submit button
    > 
    > ![](index.php?/attachments/get/5752c34f-3b2f-40f3-a5d6-fef2d98cbfa3)
    - Step expected result:
      > User can see a success message 'The menu test12 has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/dd544732-31fd-4d33-84d5-5070d80d3fe8)
      > 
      > And user can see changed details
- Case-level expected result:
  > User is able to edit Mobile Static Content Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Company / Mobile / Menu Item (section ID 434975; 5 case(s))

### C8934519 - Verify Menu Item

- Section: System Configuration / Company / Mobile / Menu Item
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Menu Item
    - Step expected result:
      > User navigated to Menu Item Master
      > 
      > ![](index.php?/attachments/get/131ab57d-590b-48d1-b8c2-df6f059cca95)
      > 
      > And user can see contents:
      > 1. Owner Company - drop-down
      > 2. Default Menu Name - drop-down
      > 3. Alternate Menu Name - Text field
      > 2. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Menu Item Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934520 - Validation check on Menu Item Master

- Section: System Configuration / Company / Mobile / Menu Item
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Menu Item
    - Step expected result:
      > User navigated to Menu Item Master
      > 
      > ![](index.php?/attachments/get/2cf9909a-27f4-4316-b6c2-0eea81669d67)
  - Step 2 action:
    > User enter data in Alternate Menu Name text field (No menus exist) and click on Search button
    - Step expected result:
      > User can see a message 'There are no menus for the search performed.'
      > 
      > ![](index.php?/attachments/get/7b4f4138-8a03-4570-8853-c9fab736af71)
  - Step 3 action:
    > User enter special character in Alternate Menu Name text field (No menus exist) and click on Search button
    - Step expected result:
      > User can see a message 'Please enter a valid alternate menu item name'
      > 
      > ![](index.php?/attachments/get/c6125224-f511-4c9e-89e3-33feb8ee1f8d)
  - Step 4 action:
    > 1. User click on Add button
    > 2. User click on Submit button without select drop-down
    - Step expected result:
      > User can see message
      > 
      > The Company field is mandatory and cannot be left blank.
      > The default menu name is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/8e74a6f9-dc14-40ee-8745-08ea4d4528ea)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934521 - User is successfully able to add Menu Item

- Section: System Configuration / Company / Mobile / Menu Item
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Menu Item
    - Step expected result:
      > User navigated to Menu Item Master
      > 
      > ![](index.php?/attachments/get/a6ef2fbf-3669-48e4-a111-49b32f4b4e91)
  - Step 2 action:
    > User click on Add button
    > 
    > ![](index.php?/attachments/get/8b4fada9-3f33-44f7-9606-c97a3c21a187)
    - Step expected result:
      > User can see a table and contents in table
      > 
      > ![](index.php?/attachments/get/2c505144-18e3-4810-a574-ce3bf333fdcb)
      > 
      > Columns : Owner Company, Default Menu Name, Alternate Menu Name
      > Button: Submit and Cancel
  - Step 3 action:
    > User enter details in drop down Owner Company, Default Menu Name and text box Alternate Menu Name
    > 
    > ![](index.php?/attachments/get/a01f7997-d00a-4b68-bf19-e247f4a20516)
    > 
    > And click on Submit button
    - Step expected result:
      > User can see a success message 'The menu has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/aae3f606-0703-43c6-bb84-282589ebad87)
- Case-level expected result:
  > User is successfully able to add Menu Item
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934522 - User is successfully able to edit Menu Item

- Section: System Configuration / Company / Mobile / Menu Item
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Menu Item
    - Step expected result:
      > User navigated to Menu Item Master
      > 
      > ![](index.php?/attachments/get/4e051394-48cf-449d-af85-606599e0bd76)
  - Step 2 action:
    > User select data from drop-down Owner Company and click on search button
    - Step expected result:
      > User can see search results with Edit button
      > 
      > ![](index.php?/attachments/get/9db1243d-42ed-48d1-addf-5fa3796108ac)
  - Step 3 action:
    > User click on Edit button
    - Step expected result:
      > Alternate Menu Name text filed gets editable
      > 
      > ![](index.php?/attachments/get/60e09740-2707-4743-bc3b-2d700eb87f44)
  - Step 4 action:
    > User modify details and click on submit button
    - Step expected result:
      > User can see a success message 'The menu COVID-19 Vaccination has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/a90ddd87-610a-4845-bd38-1aeee7e67734)
- Case-level expected result:
  > User is successfully able to edit Menu Item
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934523 - User is successfully able to Delete Menu Item

- Section: System Configuration / Company / Mobile / Menu Item
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Company --> Mobile --> Menu Item
    - Step expected result:
      > User navigated to Menu Item Master
      > 
      > ![](index.php?/attachments/get/98aada26-f0d2-40b1-974e-e532adccb69d)
  - Step 2 action:
    > User select data from drop-down Owner Company and click on search button
    - Step expected result:
      > User can see search results with Delete button
      > 
      > ![](index.php?/attachments/get/00e2da8c-e385-417b-97cb-b8f28e0ecd7e)
  - Step 3 action:
    > User click on delete button
    - Step expected result:
      > User can see a message in popup window
      > 
      > ![](index.php?/attachments/get/8fea4ec9-41ed-4d8d-8bed-3a89b7a6bc9c)
  - Step 4 action:
    > User click on OK button in popup window
    - Step expected result:
      > User can see a message 'The menu has been successfully deleted from the system.'
      > 
      > ![](index.php?/attachments/get/05556d4f-6b57-432a-86cb-0b7f9f685e22)
- Case-level expected result:
  > User is successfully able to Delete Menu Item
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Exam / Medical Center (section ID 434976; 5 case(s))

### C8934526 - Verify Medical Center Master

- Section: System Configuration / Exam / Medical Center
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Medical Center
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/44cadda7-cfb8-48c0-b8fa-b2e84188cdfe)
      > 
      > And user can see contents:
      > 1. Medical Center name - Text field
      > 2. Type - drop-down
      > 3. Show only Active - Checkbox
      > 4. Country - drop-down
      > 5. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Medical Center Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934527 - Validation check on Medical Center Master

- Section: System Configuration / Exam / Medical Center
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Medical Center
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/008d9549-5011-47a2-bdd2-eb6604aa940f)
  - Step 2 action:
    > User enter special characters on Medical Center name text field
    - Step expected result:
      > User can see message 'Please enter a valid Medical Center Name.'
      > 
      > ![](index.php?/attachments/get/0ebd73ab-51d7-44b8-b89f-4be96ba279f8)
  - Step 3 action:
    > User enter details on Medical Center name, select Type, Check the checkbox, select country and click on reset button
    > 
    > ![](index.php?/attachments/get/eda6a1ba-27d9-4397-a18f-d3948d40201a)
    - Step expected result:
      > All fields value gets cleared
      > 
      > ![](index.php?/attachments/get/5b18b43e-8bcd-46a1-9813-73e3a3918b28)
  - Step 4 action:
    > User select Country drop down and click on search button (No medical centers available for this selected country)
    - Step expected result:
      > User can see a message 'There are no medical centers available for the search performed.'
      > 
      > ![](index.php?/attachments/get/912082e0-57b5-4899-a8cc-b3546e248f1c)
  - Step 5 action:
    > User click on Add button and click on submit button without select mandatory details
    - Step expected result:
      > User can see message:
      > 
      > The Medical Center Name is mandatory and cannot be blank.
      > The Last Name is [REDACTED_NAME] be blank.
      > The First Name is [REDACTED_NAME] be blank.
      > The complete postal address is mandatory and cannot be blank.
      > The city is mandatory and cannot be blank.
      > The Country is mandatory and cannot be blank.
      > The Postal Code is mandatory and cannot be blank.
      > The Phone Number is mandatory and cannot be blank.
      > Please enter a valid E-mail Address.
      > 
      > ![](index.php?/attachments/get/c63f398b-daf5-4b0b-b5a1-4bd6ddfa264c)
  - Step 6 action:
    > User click on Add button and enter specials characters in text fields
    - Step expected result:
      > User can see message:
      > 
      > Please enter a valid Medical Center Name.
      > The complete postal address is mandatory and cannot be blank.
      > Please enter a valid E-mail Address.
      > 
      > ![](index.php?/attachments/get/deecd8c8-d7d5-4a71-9599-f3fb9a814123)
  - Step 7 action:
    > User click on cancel button on Medical Center Master page
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/525f5864-ecc8-4020-adc6-1f8d06839ea6)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934535 - User is successfully able to add Medical Center

- Section: System Configuration / Exam / Medical Center
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Medical Center
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/3671a0ea-4616-43c7-9ba8-bb1314dcf00b)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Medical Center Master page
      > 
      > ![](index.php?/attachments/get/2e1924cd-8ab0-4bdd-8ebb-5d8839b59709)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/5a23e0e4-0659-40f3-b716-7f440686938c)
    - Step expected result:
      > User can see a success message
  - Step 4 action:
    > User click on cancel button on Medical Center Master page
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/b574f053-c2ef-482a-a684-8407cae15178)
- Case-level expected result:
  > User is successfully able to add Medical Center
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934552 - User is successfully able to edit Medical Center

- Section: System Configuration / Exam / Medical Center
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Medical Center
    - Step expected result:
      > User navigated to Medical Center Master
      > 
      > ![](index.php?/attachments/get/b028ff93-06d9-43f6-a7bd-51efa6f92f8a)
  - Step 2 action:
    > Type Medical Center name and user click on search button
    - Step expected result:
      > Search result gets displayed and user can see edit button
      > 
      > ![](index.php?/attachments/get/f6c52b0a-f5bc-446f-b5db-e8bb75a8217c)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User navigated to Medical Center Master page
      > 
      > ![](index.php?/attachments/get/90c90897-36ee-49c2-aafe-c235deb58125)
  - Step 4 action:
    > User modify details and click on submit button
    - Step expected result:
      > User can see a message 'The Medical center Test has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/60c0c378-c6bd-454c-8c62-d0bde829c2da)
- Case-level expected result:
  > User is successfully able to edit Medical Center
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934580 - Verify filters

- Section: System Configuration / Exam / Medical Center
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Medical Center
    - Step expected result:
      > User navigated to Medical Center Master
  - Step 2 action:
    > User enter data in Medical Center name text field and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/4f6a3b24-75f1-47b1-9049-12b8ea02a715)
  - Step 3 action:
    > User select data in type drop-down and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/ec93e05e-f7e3-44c1-9684-160c5462a132)
  - Step 4 action:
    > User select data in Country drop-down and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/e9c5bde5-49ae-4077-8349-ad68b55ce62a)
  - Step 5 action:
    > User select checkbox 'show only active'
    - Step expected result:
      > Active records will be displayed
      > 
      > ![](index.php?/attachments/get/8420f03e-c8f1-4217-979c-05238aa7df1e)
- Case-level expected result:
  > Search result gets displayed based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Exam / Global MET (section ID 434977; 4 case(s))

### C8934582 - Verify Global MET

- Section: System Configuration / Exam / Global MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Global MET
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/020a1731-6062-4747-b441-31de04e50296)
      > 
      > And user can see contents:
      > 1. Global MET Name - Text field
      > 2. Show only Active - Checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Global MET (Medical Exam Type) Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934583 - Validation check on Global MET

- Section: System Configuration / Exam / Global MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Global MET
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/dee9b6fa-36f8-4c04-bdda-2984d7c83b11)
  - Step 2 action:
    > User enter special characters on Global MET Name text field and click on search button
    - Step expected result:
      > User can see message 'Please enter a valid Global MET Name.'
      > 
      > ![](index.php?/attachments/get/70f0ac0d-8152-49ad-b620-457591a9ad7f)
  - Step 3 action:
    > User click on search button without enter data in Global MET Name text filed
    - Step expected result:
      > User can see message 'There are no Global METs available for the search performed.'
      > 
      > ![](index.php?/attachments/get/0bb6fe24-d7a6-4778-81ad-12acacc76422)
  - Step 4 action:
    > User enter data in Global MET Name text field, select checkbox and click on reset button
    > 
    > ![](index.php?/attachments/get/9ca9185f-94cd-494c-b903-526660688487)
    - Step expected result:
      > All fields gets cleared
  - Step 5 action:
    > 1. User click on Add button and navigated to Global MET (Medical Exam Type) Master
    > 2. User click on submit button (Skip mandatory data)
    - Step expected result:
      > User can see message 'The Global MET Name is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/31f2661a-e5ea-49c4-b6be-2ff79721aa18)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934584 - User is successfully able to add Global MET

- Section: System Configuration / Exam / Global MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Global MET
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/6bafc5f2-7a56-43e2-9f7e-2265a5c910ed)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/c05c7d45-b7f5-460e-9a54-f8731c4d5b13)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/2c77a8b0-61e4-41a0-a4de-bcedecad88bc)
    - Step expected result:
      > User can see a success message 'The Global MET test12 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/bd0fef18-3041-4ce5-9ce1-fa4ac103a407)
  - Step 4 action:
    > User click on cancel button on Medical Center Master page
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/7746f1b3-e4eb-4c6f-a2be-c4d90e7e1f99)
- Case-level expected result:
  > User is successfully able to add Global MET (Medical Exam Type) Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934585 - Verify filters

- Section: System Configuration / Exam / Global MET
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Global MET
    - Step expected result:
      > User navigated to Global MET (Medical Exam Type) Master
      > 
      > ![](index.php?/attachments/get/e256d229-58c2-4a87-a923-bb44862d4601)
  - Step 2 action:
    > User enter data in Global MET Name text field and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/f9caf559-9c90-43d8-ba97-f5d919ce440f)
- Case-level expected result:
  > Search result gets displayed based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Exam / Fitness Conclusion (section ID 434978; 4 case(s))

### C8934586 - Verify Fitness Conclusion

- Section: System Configuration / Exam / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Fitness Conclusion
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/8d0eb0e7-a776-477d-aed2-cf9152d0d24c)
      > 
      > And user can see contents:
      > 1. Fitness Conclusion Name - Text field
      > 2. Show only Active - Checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Fitness Conclusion Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934587 - Validation check on Fitness Conclusion

- Section: System Configuration / Exam / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Fitness Conclusion
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/aabc5882-bb04-4133-891a-e300d512b2d3)
  - Step 2 action:
    > User enter special characters on Fitness Conclusion Name text field and click on search button
    - Step expected result:
      > User can see message 'Please enter a valid Fitness Conclusion Name.'
      > 
      > ![](index.php?/attachments/get/54ca2240-6224-4b10-8c6f-d711755058a1)
  - Step 3 action:
    > User enter data in Fitness Conclusion Name text field, select checkbox and click on reset button
    > 
    > ![](index.php?/attachments/get/2a99dbb5-5acd-436c-98b8-ab0794fdd47d)
    - Step expected result:
      > All fields gets cleared
      > 
      > ![](index.php?/attachments/get/0c19d026-5d64-4128-96aa-4e4343dca86f)
  - Step 4 action:
    > 1. User click on Add button and navigated to Global MET (Medical Exam Type) Master
    > 2. User click on submit button (Skip mandatory data)
    > 
    > ![](index.php?/attachments/get/46960cd6-646c-40d3-810e-961920b6acf7)
    - Step expected result:
      > User can see message 'The Fitness Conclusion Name is mandatory and cannot be blank.'
      > 
      > ![](index.php?/attachments/get/dcb4fc08-41cc-450c-b204-8ef8f5f88545)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934588 - User is successfully able to add Fitness Conclusion

- Section: System Configuration / Exam / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Fitness Conclusion
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/2a0ec0cb-a29b-4a17-aec0-35c9855e387a)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/ef3180a7-8b46-442f-8929-ac5127e81094)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/7c770460-9dd5-4fba-aff5-b139e5199615)
    - Step expected result:
      > User can see a success message 'The fitness conclusion test12 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/c5556422-3552-4904-9c55-10d48ee6d60a)
  - Step 4 action:
    > User click on cancel button on Fitness Conclusion Master
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/fa9064a6-e79e-473f-a83c-06a5fd09779b)
- Case-level expected result:
  > User is successfully able to add Global MET (Medical Exam Type) Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934589 - Verify filters on Fitness Conclusion

- Section: System Configuration / Exam / Fitness Conclusion
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Exam --> Fitness Conclusion
    - Step expected result:
      > User navigated to Fitness Conclusion Master
      > 
      > ![](index.php?/attachments/get/62693afb-2d19-40e3-8243-f541c0e327d7)
  - Step 2 action:
    > User enter data in Fitness Conclusion Name text field and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/e4864d18-9110-4dea-ae39-31d53f49c288)
  - Step 3 action:
    > User select checkbox 'show only active' and click on search button
    - Step expected result:
      > Search result gets displayed based on user input
      > 
      > ![](index.php?/attachments/get/a1f0bb62-f6e6-4d9e-80b4-80d20f145964)
- Case-level expected result:
  > Search result gets displayed based on user input
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Medical Data / BP/BM/Cholestrol (section ID 434979; 4 case(s))

### C8934592 - Verify Blood Pressure/Cholestrol/BMI Master

- Section: System Configuration / Medical Data / BP/BM/Cholestrol
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> BP/BMI/Cholestrol
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/4c95d545-6fe0-4412-91b0-86721960ae32)
      > 
      > And user can see contents:
      > 1. Master Type - drop-down
      > 2. Category Name - text field
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Blood Pressure/Cholestrol/BMI Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934593 - Validation check on Blood Pressure/Cholestrol/BMI Master

- Section: System Configuration / Medical Data / BP/BM/Cholestrol
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> BP/BMI/Cholestrol
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/d412f086-47fb-426a-b34b-24eb2d9e5e79)
  - Step 2 action:
    > Enter data in Category Name text field and click on search button
    - Step expected result:
      > User can see a message 'There is no information available for the search performed.'
      > 
      > ![](index.php?/attachments/get/eaa00bd6-0626-4a1b-87a1-3cbad00d2c9e)
  - Step 3 action:
    > 1. User click on Add button and user can see a submit button
    > 2. User click on submit button (Skip mandatory data)
    - Step expected result:
      > User can see a message:
      > 
      > The master type is mandatory and cannot be blank.
      > The category name is mandatory and cannot be blank.
      > The minimum value is mandatory and cannot be blank.
      > The maximum value is mandatory and cannot be blank
      > 
      > ![](index.php?/attachments/get/6af13aa8-5e68-4983-9864-a3ce1c801031)
  - Step 4 action:
    > User enter incorrect data in text fields - Category Name, Minimum Value and Maximum Value
    > 
    > ![](index.php?/attachments/get/e0758095-23bc-494e-8560-a75d39de836f)
    - Step expected result:
      > User can see alert message
      > 
      > ![](index.php?/attachments/get/3b3c57a6-fcff-43d3-bc77-dd9848bbe4b1)
- Case-level expected result:
  > Validation check on Blood Pressure/Cholestrol/BMI Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934594 - User is successfully able to add Blood Pressure/Cholestrol/BMI

- Section: System Configuration / Medical Data / BP/BM/Cholestrol
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> BP/BMI/Cholestrol
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/3ca25732-db66-4c5e-9938-686b1dc82d46)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/ef3180a7-8b46-442f-8929-ac5127e81094)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/4b4ae8be-eb31-4f71-9d23-e74b39cf0565)
    - Step expected result:
      > User can see a success message 'The master item test1 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/c24f7794-e708-48c4-9bb3-9731e9338f8d)
  - Step 4 action:
    > User click on cancel button on Fitness Conclusion Master
    > 
    > ![](index.php?/attachments/get/aae261bc-dc5d-47cd-95b0-e54f892d6105)
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/2aa7ace9-dafb-4c0c-9ef3-8a99e52943f9)
- Case-level expected result:
  > User is successfully able to add Blood Pressure/Cholestrol/BMI
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934595 - User is failed to add Blood Pressure/Cholesterol/BMI

- Section: System Configuration / Medical Data / BP/BM/Cholestrol
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> BP/BMI/Cholestrol
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/fa10f6f5-d13a-49be-a4df-baa9d7023815)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Blood Pressure/Cholestrol/BMI Master
      > 
      > ![](index.php?/attachments/get/97a40bd7-183a-42d8-8524-f46106e9f339)
  - Step 3 action:
    > User enter mandatory details (item already exists in the system) and click on submit button
    - Step expected result:
      > User can see a message 'The BP/BMI/Cholesterol item already exists in the system.'
      > 
      > ![](index.php?/attachments/get/15f1d91f-5498-4931-a2c5-3551f4e22e03)
- Case-level expected result:
  > User is failed to add Blood Pressure/Cholesterol/BMI
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Medical Data / Health Check Item (section ID 434980; 4 case(s))

### C8934596 - Verify Health Check Item page

- Section: System Configuration / Medical Data / Health Check Item
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Health Check Item
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/70207472-646d-4ac7-aa92-7944cb526512)
      > 
      > And user can see contents:
      > 1. Health Check Item Name - text field
      > 2. Show only Active - checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Health Check Item Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934597 - Validation check on Health Check Item Master

- Section: System Configuration / Medical Data / Health Check Item
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Health Check Item
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/19ae76e2-2258-4493-b6cb-dc1cebe73fbd)
  - Step 2 action:
    > Enter data in Health Check Item Name text field and click on search button (Item name not exist in the system)
    - Step expected result:
      > User can see a message 'There are no health check items available for the search performed.'
      > 
      > ![](index.php?/attachments/get/75876302-a119-4a94-b146-2b9e0765627c)
  - Step 3 action:
    > 1. User click on Add button and user can see a submit button
    > 2. User click on submit button (Skip mandatory data)
    > 
    > ![](index.php?/attachments/get/4db70eab-54d5-45ce-864e-e0d7c984243c)
    - Step expected result:
      > User can see a message:
      > 
      > The Health Check item name is mandatory and cannot be blank.
      > The Group for a health check item is mandatory and cannot be blank.
      > The Sub group for a health check item is mandatory and cannot be blank.
      > The Item Type for a health check item is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/038058ab-538a-40ed-97a8-5cd28d7478c0)
  - Step 4 action:
    > User enter special character in text fields - Health Check Item Name and enter details in mandatory fields and click on submit button
    > 
    > ![](index.php?/attachments/get/0ef1c89b-d896-4c13-ba34-d3e0a55127e3)
    - Step expected result:
      > User can see alert message:
      > 
      > Please enter a valid Health Check Item Name.
      > The International unit is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/9259f6d9-ef2d-4cec-9f5c-05e356a27b38)
- Case-level expected result:
  > Validation check on Health Check Item Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934621 - User is successfully able to add Health Check Item Master

- Section: System Configuration / Medical Data / Health Check Item
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Health Check Item
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/a54ef934-8bbf-4019-b8bb-6a9636efd52e)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/338e64ed-0940-4ac2-95ec-45b8626d1d15)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/69dc93fe-14e7-4544-8ba1-829a75051c8b)
    - Step expected result:
      > User can see a success message 'The Health Check item test12 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/a7c2d691-a106-48b8-85f9-9aa8cac03c0d)
  - Step 4 action:
    > User click on cancel button on Health Check Item Master
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/e4a4b872-0ac4-4469-837a-0028f53a0ae4)
- Case-level expected result:
  > User is successfully able to add Health Check Item Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934622 - User is successfully able to edit Health Check Item Master

- Section: System Configuration / Medical Data / Health Check Item
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Health Check Item
    - Step expected result:
      > User navigated to Health Check Item Master
      > 
      > ![](index.php?/attachments/get/a54ef934-8bbf-4019-b8bb-6a9636efd52e)
  - Step 2 action:
    > User enter data in text field and click on search button
    > 
    > ![](index.php?/attachments/get/05f20408-1145-4e4c-bef8-4edd4e6d7675)
    - Step expected result:
      > Search results gets displayed and user can see edit button and a table with columns:
      > 
      > Health Check Item Master, International Unit, Min Value, Max Value, Active?
      > 
      > ![](index.php?/attachments/get/fd75298b-3fe3-4220-a854-7c4b51d4cdf4)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User navigated to Add/Modify Health Check Item section
      > 
      > ![](index.php?/attachments/get/74d20167-3d2b-4fd5-9bec-62bf1d2d7ecd)
  - Step 4 action:
    > User modify details and click on submit button
    - Step expected result:
      > user can see a message 'The Health Check item test12 has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/7c2f2562-571d-478f-8e05-e30f1c6a7e34)
- Case-level expected result:
  > User is successfully able to edit Health Check Item Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Medical Data / Medical History (section ID 434981; 5 case(s))

### C8935136 - Verify Medical History page

- Section: System Configuration / Medical Data / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Medical History
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/20d5f1d4-a4b6-488c-9bde-b74373d388d7)
      > 
      > And user can see contents:
      > 1. Medical History Item Name - text field
      > 2. Show only Active - checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Medical History Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935137 - Validation check on Medical History Master

- Section: System Configuration / Medical Data / Medical History
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Medical History
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/2672e994-e4a5-4aac-a9ca-0f192f984645)
  - Step 2 action:
    > Enter data in Medical history Item Name text field and click on search button (Item name not exist in the system)
    - Step expected result:
      > User can see a message 'There is no information available for the search performed.'
      > 
      > ![](index.php?/attachments/get/119dfc69-f13e-4095-b8f9-c932fc2e3aee)
  - Step 3 action:
    > 1. User click on Add button and user can see a submit button
    > 2. User click on submit button (Skip mandatory data)
    - Step expected result:
      > User can see a message:
      > 
      > The Medical History Name is mandatory and cannot be blank.
      > The type for the Medical History Item is mandatory and cannot be blank.
      > Please select a Medical History Item Group.
      > 
      > ![](index.php?/attachments/get/461b334a-df75-44d0-be2c-583dca53d69a)
  - Step 4 action:
    > User enter special character in text fields - Medical History Item Name and enter details in mandatory fields and click on submit button
    - Step expected result:
      > User can see alert message:
      > 
      > Please enter a valid Medical History Item Name.
      > 
      > ![](index.php?/attachments/get/2d7b9ec1-418d-4cfd-b141-c8d71284410c)
- Case-level expected result:
  > Validation check on Medical History Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935138 - User is successfully able to add Medical History Master

- Section: System Configuration / Medical Data / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Medical History
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/9221c214-2674-4231-a255-565bd0da8a9c)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/06cf5b2d-ad0e-4cd1-be69-bc78c97a81e4)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    > 
    > ![](index.php?/attachments/get/28a0c9d3-d502-469a-801a-43e39c976bec)
    - Step expected result:
      > User can see a success message 'The Medical History Item test has been successfully created in the system.'
  - Step 4 action:
    > User click on cancel button on Health Check Item Master
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/61e20fc0-f566-4d66-a159-b937317dd061)
- Case-level expected result:
  > User is successfully able to add Medical History Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935140 - User is successfully able to edit Medical History Master

- Section: System Configuration / Medical Data / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Medical History
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/9221c214-2674-4231-a255-565bd0da8a9c)
  - Step 2 action:
    > User enter data in Medical History Item Name text field and click on search button
    - Step expected result:
      > User can see search result with edit button
      > 
      > ![](index.php?/attachments/get/50d57345-61eb-4445-9aba-bd413f9ede44)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User navigated to Medical History Master page
      > 
      > ![](index.php?/attachments/get/2a4ed48d-4959-4fc4-9ca9-042d47b0e9e9)
  - Step 4 action:
    > User edit details and click on submit button
    - Step expected result:
      > User can see a success message 'The Medical History Item test has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/d6db4405-1948-4794-9d8a-80f0944579a7)
- Case-level expected result:
  > User is successfully able to edit Medical History Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935150 - User is failed to edit Medical History Master

- Section: System Configuration / Medical Data / Medical History
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Medical History
    - Step expected result:
      > User navigated to Medical History Master
      > 
      > ![](index.php?/attachments/get/9221c214-2674-4231-a255-565bd0da8a9c)
  - Step 2 action:
    > User enter data in Medical History Item Name text field and click on search button
    - Step expected result:
      > User can see search result with edit button
      > 
      > ![](index.php?/attachments/get/50d57345-61eb-4445-9aba-bd413f9ede44)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/45566730-209e-43c1-ae93-1d96f60641ad)
  - Step 4 action:
    > User edit details and click on submit button
    - Step expected result:
      > User can see a success message 'The Medical History Item test has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/608dd712-196d-4312-a456-4e8fd1c99210)
- Case-level expected result:
  > User is failed to edit Medical History Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Medical Data / Vaccination (section ID 434982; 5 case(s))

### C8935141 - Verify Medical History page

- Section: System Configuration / Medical Data / Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/9e434d6d-99d0-4367-919f-2e3f12eae506)
      > 
      > And user can see contents:
      > 1. Vaccination Name - text field
      > 2. Show only Active - checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Vaccination Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935142 - Validation check on Medical History Master

- Section: System Configuration / Medical Data / Vaccination
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination
    - Step expected result:
      > User navigated to Vaccination Master page
      > 
      > ![](index.php?/attachments/get/b9cb54b9-454c-45f8-8a00-6732528f79e4)
  - Step 2 action:
    > Enter data in Vaccination Name text field and click on search button (Item name not exist in the system)
    - Step expected result:
      > User can see a message 'There are no vaccinations available for the search performed.'
      > 
      > ![](index.php?/attachments/get/ab41c3d1-f1c7-462f-b838-d3092c94d74f)
  - Step 3 action:
    > 1. User click on Add button and user can see a submit button
    > 2. User click on submit button (Skip mandatory data)
    - Step expected result:
      > User can see a message:
      > 
      > The Vaccine name is mandatory and cannot be blank.
      > The Frequency is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/c24e6661-4da5-4376-acbf-9d7499cd6d75)
  - Step 4 action:
    > User enter special character in text fields - Medical History Item Name and enter details in mandatory fields and click on submit button
    - Step expected result:
      > User can see alert message:
      > 
      > Please enter a valid Vaccination Name.
      > Please enter a valid Frequency.
      > 
      > ![](index.php?/attachments/get/06d6cb3e-dc92-4d3d-be8e-73f70b1b0a97)
- Case-level expected result:
  > Validation check on Vaccination Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935143 - User is successfully able to add Medical History Master

- Section: System Configuration / Medical Data / Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/d16e21f1-cf6d-4738-9b37-20ca2dd84cc7)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/a3bf76c7-8891-4f85-83ce-a2ce4a4dfbc2)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    - Step expected result:
      > User can see a success message 'The Vaccine test has been successfully created in the system.
      > '
      > ![](index.php?/attachments/get/d8694c3e-384e-4d31-826f-a73a462b8444)
  - Step 4 action:
    > User click on cancel button on Vaccination Master
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/9898a9d4-dc73-489f-9a14-9ee66edfcbf5)
- Case-level expected result:
  > User is successfully able to add Vaccination Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935144 - User is successfully able to edit Medical History Master

- Section: System Configuration / Medical Data / Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/cf5edca9-5223-4001-acdb-6aa3c6598e8c)
  - Step 2 action:
    > User enter data in Vaccination Name text field and click on search button
    - Step expected result:
      > User can see search result with edit button
      > 
      > ![](index.php?/attachments/get/d4784b19-41d5-4b5e-beb9-ff269dc185fd)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/aabd0028-71ab-4225-8e40-eeb8d5c7f328)
  - Step 4 action:
    > User edit details and click on submit button
    - Step expected result:
      > User can see a success message 'The Vaccine testone has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/0ada0b7b-51db-41e7-9aff-b20ab5e40e82)
- Case-level expected result:
  > User is successfully able to edit Vaccination Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935148 - User is failed to edit Vaccination

- Section: System Configuration / Medical Data / Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/cf5edca9-5223-4001-acdb-6aa3c6598e8c)
  - Step 2 action:
    > User enter data in Vaccination Name text field and click on search button
    - Step expected result:
      > User can see search result with edit button
      > 
      > ![](index.php?/attachments/get/6aca6d75-2581-4ed7-b2cd-c470d3883d7f)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see fields
      > 
      > ![](index.php?/attachments/get/f42fe3fa-051f-44a0-957a-dda295b7f372)
  - Step 4 action:
    > User edit details and click on submit button
    - Step expected result:
      > User can see validation message
      > 
      > Please enter a valid Vaccination Name.
      > Please enter a valid Frequency.
      > ![](index.php?/attachments/get/610c0e4b-deff-4aa5-b1db-5647afa4e31d)
- Case-level expected result:
  > User is failed to edit Vaccination Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Medical Data / Vaccination Reminder (section ID 434983; 5 case(s))

### C8935205 - Verify Vaccination Reminder page

- Section: System Configuration / Medical Data / Vaccination Reminder
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination Reminder
    - Step expected result:
      > User navigated to Vaccination Reminder Master
      > 
      > ![](index.php?/attachments/get/af13f063-a014-43d1-ae82-c940fc16e0fe)
      > 
      > And user can see contents:
      > 1. Reminder Type - drop down field
      > 2. Show only Active - checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Vaccination Reminder Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935206 - Validation check on vaccination reminder page

- Section: System Configuration / Medical Data / Vaccination Reminder
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination Reminder
    - Step expected result:
      > User navigated to Vaccination Reminder page
      > 
      > ![](index.php?/attachments/get/6270dca9-1fef-4428-9a67-b707459e740b)
  - Step 2 action:
    > Select Reminder type from drop-down and click on search button (If no reminder exist) Or show only active
    - Step expected result:
      > User can see a message 'There are no vaccination reminders available for the search performed.
      > '
      > 
      > ![](index.php?/attachments/get/81e24e5e-4b98-4bba-9d03-50615f38e4d0) ![](index.php?/attachments/get/a35a11a4-a159-470d-bff0-2889481a5dc8)
  - Step 3 action:
    > 1. User click on Add button and user can see a submit button
    > 2. User click on submit button (Skip mandatory data)
    - Step expected result:
      > User can see a message:
      > 
      > The Reminder Type is mandatory and cannot be blank.
      > Please enter the frequency in days.
      > 
      > ![](index.php?/attachments/get/76a754a3-7ecd-46a5-a826-324e6d3d1d90)
  - Step 4 action:
    > User enter special character in text fields - E-mail Frequency and click on submit button
    - Step expected result:
      > User can see alert message:
      > 
      > Please enter the E-mail Frequency in days between -999 and 999.
      > 
      > ![](index.php?/attachments/get/d4ba8575-d550-4c4e-9334-8158bc94ff74)
- Case-level expected result:
  > Validation check on Vaccination Reminder page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935207 - User is successfully able to add Vaccination Reminder Master

- Section: System Configuration / Medical Data / Vaccination Reminder
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination Reminder
    - Step expected result:
      > User navigated to Vaccination Reminder Master
      > 
      > ![](index.php?/attachments/get/ddc4f4da-8aa5-46ed-ae51-725c76ec67ff)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/ee39d139-4128-4f3c-b677-1accd95d693c)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    - Step expected result:
      > User can see a success message 'The Reminder Type Reminder Type1 has been successfully created in the system.'
      > 
      > ![](index.php?/attachments/get/81ff403f-2a46-48d7-9d7f-c571b93a3d22)
  - Step 4 action:
    > User click on cancel button on Vaccination Reminder Master
    - Step expected result:
      > User navigated to Vaccination Master
      > 
      > ![](index.php?/attachments/get/1aad840a-d419-4fd5-9d3a-6db12d311dc0)
- Case-level expected result:
  > User is successfully able to add Vaccination Reminder Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935208 - User is successfully able to edit Vaccination Reminder Master

- Section: System Configuration / Medical Data / Vaccination Reminder
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination Reminder
    - Step expected result:
      > User navigated to Vaccination Reminder Master
      > 
      > ![](index.php?/attachments/get/ddc4f4da-8aa5-46ed-ae51-725c76ec67ff)
  - Step 2 action:
    > User select Reminder Type from drop-down and click on search button
    - Step expected result:
      > User can see table with edit button
      > 
      > ![](index.php?/attachments/get/210b7224-d172-4ec1-9a07-9ac8f916242c)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see editable fields
      > 
      > ![](index.php?/attachments/get/f94b1ea3-5fbc-4614-8bcc-bcdd0cd88fd9)
  - Step 4 action:
    > User modify details and click on submit button
    - Step expected result:
      > User can see a success message 'The Reminder Type Reminder Type1 has been successfully updated in the system.'
      > 
      > ![](index.php?/attachments/get/563616b8-2e6a-4be1-8dc9-b006be7c265a)
  - Step 5 action:
    > User click on cancel button on Vaccination Reminder Master
    - Step expected result:
      > User navigated to Vaccination Reminder Master page
      > 
      > ![](index.php?/attachments/get/1aad840a-d419-4fd5-9d3a-6db12d311dc0)
- Case-level expected result:
  > User is successfully able to edit Vaccination Reminder Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935209 - User is failed to edit Vaccination Reminder Master

- Section: System Configuration / Medical Data / Vaccination Reminder
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Medical Data --> Vaccination Reminder
    - Step expected result:
      > User navigated to Vaccination Reminder Master
      > 
      > ![](index.php?/attachments/get/cf5edca9-5223-4001-acdb-6aa3c6598e8c)
  - Step 2 action:
    > User select Reminder Type from drop-down and click on search button
    - Step expected result:
      > User can see search result with edit button
      > 
      > ![](index.php?/attachments/get/6aca6d75-2581-4ed7-b2cd-c470d3883d7f)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see fields for modification
      > 
      > ![](index.php?/attachments/get/f42fe3fa-051f-44a0-957a-dda295b7f372)
  - Step 4 action:
    > User edit special characters on text fields and click on submit button
    - Step expected result:
      > User can see validation message
      > 
      > Please enter the E-mail Frequency in days between -999 and 999.
      > 
      > ![](index.php?/attachments/get/3c19b82c-e98a-43e1-9b50-282690c52381)
- Case-level expected result:
  > User is failed to edit Vaccination Reminder Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Code Description (section ID 434917; 5 case(s))

### C8935210 - Verify Code Master page

- Section: System Configuration / Code Description
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Code Description
    - Step expected result:
      > User navigated to Code Master page
      > 
      > ![](index.php?/attachments/get/0d92ff44-b5ff-4479-8162-7e59bd27b3ac)
      > 
      > And user can see contents:
      > 1. Code Type - drop down field
      > 2. Description - Text field
      > 3. Show only Active - checkbox
      > 4. Search, Reset, Add - Button
- Case-level expected result:
  > Verify Code Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935211 - Validation check on Code Master page

- Section: System Configuration / Code Description
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Code Description
    - Step expected result:
      > User navigated to Code Master page
      > 
      > ![](index.php?/attachments/get/ed7d74c5-7216-4f68-9ac1-2049b0102699)
  - Step 2 action:
    > User enter special character in Description text field and click on search button (If no reminder exist) Or show only active
    - Step expected result:
      > user can see a message 'There are no codes available for the search performed.'
      > 
      > ![](index.php?/attachments/get/ebc63368-9e83-409b-adcb-d111ec942cd7)
  - Step 3 action:
    > User select checkbox as show only active and click on search button
    - Step expected result:
      > User can see active records
      > 
      > ![](index.php?/attachments/get/ad47e6e6-19cd-4eb2-8696-f9c4e9255952)
  - Step 4 action:
    > 1. User click on Add button and user can see a submit button (Skip mandatory data)
    - Step expected result:
      > User can see a message:
      > 
      > The code type is mandatory and cannot be blank.
      > The description is mandatory and cannot be blank.
      > The abbreviation is mandatory and cannot be blank.
      > 
      > ![](index.php?/attachments/get/50ac0e47-f191-475e-806f-3d9501c13ee0)
  - Step 5 action:
    > User enter special character in text fields - Abbreviation and click on submit button
    - Step expected result:
      > User can see alert message:
      > 
      > Please enter only alphabets in the 'Abbreviation' of the code.
      > 
      > ![](index.php?/attachments/get/ae0d7294-6460-4c47-9901-11079ecce8c0)
- Case-level expected result:
  > Validation check on Code Master page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935212 - User is successfully able to add Code Master page

- Section: System Configuration / Code Description
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Code Description
    - Step expected result:
      > User navigated to Code Master page
      > 
      > ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
  - Step 2 action:
    > User click on Add button
    - Step expected result:
      > User can see a table with submit and cancel button
      > 
      > ![](index.php?/attachments/get/f87d16d1-9d1d-4a27-a69c-b96e66f1e6cb)
  - Step 3 action:
    > User enter mandatory details and click on submit button
    - Step expected result:
      > User can see a success message 'The master item @ has been successfully created in the system.
      > '
      > 
      > ![](index.php?/attachments/get/f43fa8a8-6754-4e58-b264-8ab82a675692)
  - Step 4 action:
    > User click on cancel button on Vaccination Reminder Master
    - Step expected result:
      > User navigated to Code Master
      > 
      > ![](index.php?/attachments/get/2673bbae-05df-4695-8312-a1b032f70a31)
- Case-level expected result:
  > User is successfully able to add Code Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935213 - User is successfully able to edit Code Master page

- Section: System Configuration / Code Description
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Code Description
    - Step expected result:
      > User navigated to Code Master page
      > 
      > ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
  - Step 2 action:
    > User enter data in description and click on search button
    - Step expected result:
      > Search results gets displayed with edit button
      > 
      > ![](index.php?/attachments/get/28d9e852-a9f0-4a08-8841-f5386935bcbc)
  - Step 3 action:
    > User click on edit button
    - Step expected result:
      > User can see editable fields with submit and cancel button
      > 
      > ![](index.php?/attachments/get/ed116763-272e-4e2b-8ba0-8045b2f673c6)
  - Step 4 action:
    > User edit details details and click on submit button
    - Step expected result:
      > User can see a success message 'The master item 12 has been successfully modified in the system.'
      > 
      > ![](index.php?/attachments/get/99557938-d271-4e4f-ac19-e15a2ad2ef02)
  - Step 5 action:
    > User click on cancel button on Vaccination Reminder Master
    - Step expected result:
      > User navigated to Code Master
      > 
      > ![](index.php?/attachments/get/35d6c043-e4d0-498c-9a31-3e8a51256785)
- Case-level expected result:
  > User is successfully able to add Code Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935214 - User is failed to add or edit Code Master page

- Section: System Configuration / Code Description
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Code Description
    - Step expected result:
      > User navigated to Code Master page
      > 
      > ![](index.php?/attachments/get/8d438511-1ec2-44cf-a0b3-4a8e8c6601c7)
  - Step 2 action:
    > User click on Add button and enter special characters in text field and click on submit button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/7a7d7fe1-8274-49da-8244-88b735de8c0e)
  - Step 3 action:
    > User search record, click on edit button, enter special characters in text field and click on submit button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/87946247-8b08-46dd-9077-f62d4e1a8494)
- Case-level expected result:
  > User is failed to edit or add Code Master
- Explicit TestRail test data:
  > Not supplied in TestRail.

## System Configuration / Encryption Utility (section ID 434918; 3 case(s))

### C8935215 - Verify Encryption / Decryption Utility page

- Section: System Configuration / Encryption Utility
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Encryption Utility
    - Step expected result:
      > User navigated to Encryption / Decryption Utility page
      > 
      > ![](index.php?/attachments/get/f13f5478-df89-463b-87ab-32a3207dfa2e)
      > 
      > And user can see contents:
      > 1. Decryption - Heading
      > 2. Encrypted String - Text field
      > 3. String to be encrypted - Label
      > 4. Encryption - Heading
      > 5. String to be encrypted - Text field
      > 6. Encrypted String - Label
      > 7. Decrypt and Encrypt - Button
- Case-level expected result:
  > Verify Encryption / Decryption Utility page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935228 - Validation check on Encryption / Decryption Utility page

- Section: System Configuration / Encryption Utility
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Encryption Utility
    - Step expected result:
      > User navigated to Encryption / Decryption Utility page
  - Step 2 action:
    > User enter special characters in Encrypted String text field
    - Step expected result:
      > User can see message 'The input is not a valid Base-64 string as it contains a non-base 64 character, more than two padding characters, or an illegal character among the padding characters.'
      > 
      > ![](index.php?/attachments/get/3bc8b888-6cfe-4550-a292-3faab81cb11a)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935237 - User is successfully able to encrypt data

- Section: System Configuration / Encryption Utility
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on System Configuration --> Encryption Utility
    - Step expected result:
      > User navigated to Encryption / Decryption Utility page
      > 
      > ![](index.php?/attachments/get/8ab9da4c-f9a0-4155-8530-3af504412df8)
  - Step 2 action:
    > Enter data in 'Encrypted String' text field and click on Decrypt button
    - Step expected result:
      > User can see decrypted string
  - Step 3 action:
    > Enter data in 'String to be encrypted' text field and click on Encrypt button
    - Step expected result:
      > User can see Encrypted string
- Case-level expected result:
  > User is successfully able to encrypt data
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Send Welcome Email (section ID 434925; 4 case(s))

### C8935245 - Verify Send Welcome E-mail page

- Section: Send Welcome Email
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Send Welcome E-mail
    - Step expected result:
      > User navigated to Send Welcome E-mail Address page
      > 
      > ![](index.php?/attachments/get/f2ae6153-b8ca-48c7-8ee7-be5e610c00db)
      > 
      > And user can see two sections:
      > 1. Send Welcome E-mail Address
      > a. drop-down - Company
      > b. Checkbox - Include all employees that have already received Welcome E-mail but don't
      > have created MedFit account yet
      > c. Buttons: Get Details, Send-Email and Reset
      > 
      > 2. Send Marketing E-mail
      > a. drop-down - Company
      > b. Checkbox - Include all companies
      > c. Buttons: Get Details, Send-Email and Reset
- Case-level expected result:
  > Verify Send Welcome E-mail Address page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935246 - Validation check in Send Welcome E-mail page

- Section: Send Welcome Email
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Send Welcome E-mail
    - Step expected result:
      > User navigated to Send Welcome E-mail Address page
      > 
      > ![](index.php?/attachments/get/a4007e32-199a-4ca5-ae85-ee06c2b8faeb)
  - Step 2 action:
    > User select company from drop-down and click on get details button (section - Send Welcome E-mail Address)
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/ebbb0e87-1136-47f9-8380-ef4bc5f8e2bf)
  - Step 3 action:
    > User select company from drop-down and click on get details button (section - Send Welcome E-mail Address)
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/21373123-a910-441a-af96-0eac000bc47b)
  - Step 4 action:
    > User skip mandatory detail and click on 'Get Details' button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/93c6821f-b928-45e6-8ae5-b86284472581) ![](index.php?/attachments/get/d86caeca-97a2-4b05-b1e3-59968c5d4f78)
  - Step 5 action:
    > User skip mandatory detail and click on 'Send E-mail' button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/5e3ea477-9563-4c79-ae5e-2aa4cfce42ad) ![](index.php?/attachments/get/94c96f5a-6cfb-49bf-b56e-8c3e03171ced)
  - Step 6 action:
    > User select data from drop down, select checkbox and click on Reset button
    - Step expected result:
      > All fields gets cleared
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935270 - User is successfully able to send E-mail

- Section: Send Welcome Email
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Send Welcome E-mail
    - Step expected result:
      > User navigated to Send Welcome E-mail Address page
      > 
      > ![](index.php?/attachments/get/fc2611c0-e686-47b9-8b66-6cb6a833ba2d)
  - Step 2 action:
    > User select company from drop-down and click on 'Send E-mail' button
    - Step expected result:
      > User can see a success message 'The E-mail requests for the employees of Air Liquide have been added to the queue. It will be sent in a few minutes.'
      > 
      > ![](index.php?/attachments/get/ed9de4cb-8ecf-4e4e-8fb3-dee3ebf36f14) ![](index.php?/attachments/get/1dc2ec21-dd96-4a31-a388-4a663681ddf2)
- Case-level expected result:
  > User is successfully able to send E-mail
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935491 - User is successfully able to get the details for the company

- Section: Send Welcome Email
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Send Welcome E-mail
    - Step expected result:
      > User navigated to Send Welcome E-mail Address page
      > 
      > ![](index.php?/attachments/get/fc2611c0-e686-47b9-8b66-6cb6a833ba2d)
  - Step 2 action:
    > User select company from drop-down and click on 'Get Details' button
    - Step expected result:
      > User can see Total numbers of employees label with details:
      > 
      > ![](index.php?/attachments/get/c0fac679-c3ec-4a3a-a86b-05a15df308fb)
  - Step 3 action:
    > User click on View Details link
    - Step expected result:
      > User navigated to new window and user can see Employee Details table
      > 
      > ![](index.php?/attachments/get/b8f8f23e-0a71-45fc-b2ff-21fa683d2324)
- Case-level expected result:
  > User is successfully able to get the details for the company
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Drop Box / Upload (section ID 434936; 4 case(s))

### C8935271 - Verify Drop Box – Upload a Medical Report

- Section: Drop Box / Upload
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Drop Box --> Upload
    - Step expected result:
      > User navigated to Drop Box – Upload a Medical Report
      > 
      > And user can see two sections:
      > 
      > section - Please provide the Employee/Pre-Employee&rsquo;s Gin Number/Applicant ID
      > 
      > Drop-down -Owner company Name
      > 
      > Text field - GIN Number
      > 
      > Button: Get Details and Cancel
- Case-level expected result:
  > Verify Drop Box – Upload a Medical Report page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935272 - Validation check on Upload a Medical Report

- Section: Drop Box / Upload
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Drop Box --> Upload
    - Step expected result:
      > User navigated to Drop Box – Upload a Medical Report
      > 
      > ![](index.php?/attachments/get/2751aa57-110a-4043-8f23-b4f6178b5bc7)
  - Step 2 action:
    > User select company from Owner company Name drop-down and click on Get Details button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/e75e7c72-72bd-4ed9-89cc-8fc49b8de9eb)
  - Step 3 action:
    > User enter GIN Number and click on Get Details button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/22c5e45c-715f-440c-b9aa-0dabe0c18d43)
  - Step 4 action:
    > User select company from Owner company Name drop-down, enter GIN Number and click on Get Details button (Incorrect match)
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/b6efbbd1-7d13-45de-befd-9f39510734fe)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935273 - User is successfully able to upload file

- Section: Drop Box / Upload
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Drop Box --> Upload
    - Step expected result:
      > User navigated to Drop Box – Upload a Medical Report
      > 
      > ![](index.php?/attachments/get/4637039c-49d3-42bf-a328-6e223d4cac97)
  - Step 2 action:
    > User select company and GIN and click on get details button
    - Step expected result:
      > User can see some fields disabled and attach button for upload file
      > 
      > ![](index.php?/attachments/get/e6524180-9da1-4bfb-a120-9ff6252d65c2)
  - Step 3 action:
    > User upload file and click on attach button
    - Step expected result:
      > User can see a success message
- Case-level expected result:
  > User uploaded file successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935274 - User is failed to upload file

- Section: Drop Box / Upload
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Drop Box --> Upload
    - Step expected result:
      > User navigated to Drop Box – Upload a Medical Report
      > 
      > ![](index.php?/attachments/get/4637039c-49d3-42bf-a328-6e223d4cac97)
  - Step 2 action:
    > User select company and GIN and click on get details button
    - Step expected result:
      > User can see some fields disabled and attach button for upload file
      > 
      > ![](index.php?/attachments/get/e6524180-9da1-4bfb-a120-9ff6252d65c2)
  - Step 3 action:
    > User upload file (with incorrect format) and click on attach button
    - Step expected result:
      > User can see alert message
- Case-level expected result:
  > User uploaded file successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Maintenance / Maintenance (section ID 434931; 3 case(s))

### C8934305 - Verify maintenance page

- Section: Maintenance / Maintenance
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Exam of the employee should exist in the system
- Test steps:
  - Step 1 action:
    > User click on maintenance sub-section under maintenance section
    - Step expected result:
      > User navigated to Maintenance page where user can see Select an operation drop-down list
      > 
      > ![](index.php?/attachments/get/d6dd51dd-b984-45e1-baef-e675b1ab0d48)
  - Step 2 action:
    > Options in Select an operation drop-down
    - Step expected result:
      > And user can see four options under drop-down
      > 
      > 1. Message
      > 2. Page
      > 3. Start/Stop Email Service
      > 4. Delete Email Queue
      > 
      > ![](index.php?/attachments/get/a033e929-c4c7-4edc-b394-bf95f454e145)
- Case-level expected result:
  > Verify maintenance page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935282 - Verify user can perform maintenance activity

- Section: Maintenance / Maintenance
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Exam of the employee should exist in the system
- Test steps:
  - Step 1 action:
    > 1. User select 'Message' from drop-down
    > 
    > 2. User select date from calendar fields and click on submit button
    - Step expected result:
      > User can see fields
      > 
      > ![](index.php?/attachments/get/98eb0c89-4aad-4b2e-8db7-9464f8a045a8)
      > 
      > a. Section - Add Maintenance Message
      > b. Text field - Message
      > c. Calendar field - Start Date
      > d. Calendar field - End Date
      > e. Button - Submit and Cancel
      > 
      > 2. User navigated to validate credential
      > 
      > ![](index.php?/attachments/get/4c758780-4c50-4e1e-9325-8f4cb4e9b0e3)
      > 
      > User enter credential, click on submit button and user can see a success message
  - Step 2 action:
    > 1. User select 'Page' from drop-down
    > 
    > 2. User select checkbox and click on submit button
    - Step expected result:
      > User can see fields
      > 
      > ![](index.php?/attachments/get/99a101b3-3a50-44cb-8639-ba32a4f10c57)
      > 
      > a. Checkbox - Confirm Apply of Maintenance Page
      > b. Button - Submit and Cancel
      > 
      > 2. User navigated to validate credential
      > 
      > ![](index.php?/attachments/get/aad88a64-36fa-4ad2-bca5-0bd46c3e4356)
      > 
      > User enter credential, click on submit button and user can see a success message
  - Step 3 action:
    > 1. User select 'Start/Stop Email Service' from drop-down
    > 
    > 2. User select checkbox and click on submit button
    - Step expected result:
      > User can see fields
      > 
      > ![](index.php?/attachments/get/4155b7ba-ac6d-4c3d-9b53-97b278197cdc)
      > 
      > a. Radio button- Start Email Service
      > b. Radio button- Stop Email Service
      > c. Button - Submit and Cancel
      > 
      > 2. User navigated to validate credential
      > 
      > ![](index.php?/attachments/get/0cc6cd9a-5973-4b42-8c0e-59fd50e5f530)
      > 
      > User enter credential, click on submit button and user can see a success message
  - Step 4 action:
    > 1. User select 'Delete Email Queue' from drop-down
    > 
    > 2. User select Radio button for 'Delete errored emails'
    > 
    > 3. User select Radio button for 'Delete emails to be sent'
    - Step expected result:
      > User can see fields
      > 
      > ![](index.php?/attachments/get/52efd754-da0f-4a09-8568-f851f651c691)
      > 
      > a. Section - Delete Email Queue
      > b. Radio button - Delete errored emails
      > c. Radio button - Delete emails to be sent
      > 
      > 2. User can see Error Description lists with checkbox
      > ![](index.php?/attachments/get/3a4e646c-39aa-4627-b353-9d8d16d52ab8)
      > 
      > 3. User can see details:
      > a. Drop-down - Email Type
      > b. Drop-down - Company
      > c. Button - Search and Reset
      > 
      > ![](index.php?/attachments/get/9e04c36c-e854-4ab3-a24e-6f21506b25f3)
- Case-level expected result:
  > User can perform actions in maintenance page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935283 - Validation check in maintenance page

- Section: Maintenance / Maintenance
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Exam of the employee should exist in the system
- Test steps:
  - Step 1 action:
    > 1. User select 'Message' from drop-down and click on cancel button
    - Step expected result:
      > User navigated to Maintenance page
      > 
      > ![](index.php?/attachments/get/8fdef19a-4231-445a-884d-f725b321b35f)
  - Step 2 action:
    > 1. User select 'Page' from drop-down and click on submit button
    - Step expected result:
      > User can see validation message
      > 
      > ![](index.php?/attachments/get/8eab1707-f541-4865-a6ae-99469e980402)
- Case-level expected result:
  > User can see validation message in maintenance page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Maintenance / Error Logs (section ID 434932; 5 case(s))

### C8935284 - Verify Error Logs page

- Section: Maintenance / Error Logs
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on maintenance --> Error Logs
    - Step expected result:
      > User navigated to Error Logs page
      > 
      > ![](index.php?/attachments/get/01b55f58-56e6-4806-a3c4-87c73cd9dccb)
      > 
      > User can see details:
      > 1. Log - drop-down
      > 2. From - Calendar field
      > 3. To - Calendar field
      > 4. Filter, Configuration ,Download, Download All, Delete, Delete All - Button
      > 5. Line Wrap - Checkbox
- Case-level expected result:
  > Verify Error Logs page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935287 - Validation check on error logs page

- Section: Maintenance / Error Logs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on maintenance --> Error Logs
    - Step expected result:
      > User navigated to Error Logs page
  - Step 2 action:
    > User select data from 'Log' drop-down
    - Step expected result:
      > User can see a alert message
      > 
      > ![](index.php?/attachments/get/226ab5d1-3bc8-401d-8452-645d82cef479)
  - Step 3 action:
    > User enter incorrect date
    - Step expected result:
      > User can see a alert message
      > 
      > ![](index.php?/attachments/get/504ec2d5-0c7c-465f-8e4c-7be8e13037ec)
  - Step 4 action:
    > User click on download button (If logs are not available)
    - Step expected result:
      > User can see a alert message
      > 
      > ![](index.php?/attachments/get/7cd2097c-b1d1-43b4-abd2-4316e3adca59)
  - Step 5 action:
    > User select log from drop-down (System is out of service)
    - Step expected result:
      > user can see a message
      > 
      > ![](index.php?/attachments/get/193c8c92-108d-464e-9e0b-5b31d05558e6)
- Case-level expected result:
  > User can see validation message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935288 - User is successfully able to download logs

- Section: Maintenance / Error Logs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935289 - User is successfully able to delete logs

- Section: Maintenance / Error Logs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935290 - User is successfully able to filter logs

- Section: Maintenance / Error Logs
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on maintenance --> Error Logs
    - Step expected result:
      > User navigated to Error Logs page
  - Step 2 action:
    > User select log from drop-down, select date field (From, To) and click on filter button
    - Step expected result:
      > User can see logs record
      > 
      > ![](index.php?/attachments/get/2dea74a4-698e-43a8-a527-9f4ce98319b8)
- Case-level expected result:
  > User is successfully able to generate logs
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Maintenance / Unlock User (section ID 434934; 3 case(s))

### C8935291 - Verify unlock user page

- Section: Maintenance / Unlock User
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on search employee page
- Test steps:
  - Step 1 action:
    > User click on Maintenance --> Unlock User
    - Step expected result:
      > User navigated to Application Maintenance page
      > 
      > ![](index.php?/attachments/get/f0a41dae-b715-4a59-ba39-0c1cbf2ed1e8)
      > 
      > And user can see:
      > 1. User - Text field
      > 2. Unlock - Button
- Case-level expected result:
  > Verify unlock user page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934306 - Successfully unlock user

- Section: Maintenance / Unlock User
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User should exist in the system
- Test steps:
  - Step 1 action:
    > User click on sub-section 'Unlock User' under Maintenance section
    - Step expected result:
      > User navigated to Application Maintenance page where user can see 'User' text field and 'Unlock' button
      > 
      > ![](index.php?/attachments/get/06be3f3f-5944-4d9a-afcb-37d2b097b5fb)
  - Step 2 action:
    > User enter user details in text field and click on unlock button
    - Step expected result:
      > User can see a message 'User TempAdmin unlocked successfully!'
      > 
      > ![](index.php?/attachments/get/092f5a90-08bc-448a-9671-10b86cb2e0eb)
- Case-level expected result:
  > User unlock successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8934307 - Failed to unlock user

- Section: Maintenance / Unlock User
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User should not exist in the system or incorrect user details
- Test steps:
  - Step 1 action:
    > User click on sub-section 'Unlock User' under Maintenance section
    - Step expected result:
      > User navigated to Application Maintenance page where user can see 'User' text field and 'Unlock' button
      > 
      > ![](index.php?/attachments/get/3a6791c0-8e22-43f8-8e3d-0e830d9193e4)
  - Step 2 action:
    > User enter user details in text field and click on unlock button
    - Step expected result:
      > User can see a message 'The username or password entered is invalid.'
      > 
      > ![](index.php?/attachments/get/b71c241d-9e16-48e9-8238-9e50b8791699)
- Case-level expected result:
  > User failed to unlock user
- Explicit TestRail test data:
  > Not supplied in TestRail.

## COVID-19 Vaccination / Search COVID-19 Vaccination (section ID 435498; 3 case(s))

### C8935292 - Verify user can search vaccination status using valid search criteria

- Section: COVID-19 Vaccination / Search COVID-19 Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User has access to the COVID-19 Vaccination module.
  > Employee vaccination records exist in the system.
- Test steps:
  - Step 1 action:
    > 1. Navigate to COVID-19 Vaccination > Search Vaccination Status.
    > 2. Enter a valid First Name as [REDACTED].
    > 3. Enter a valid GIN number as [REDACTED_ID]
    > 4. Click Search
    > 5. Verify the returned record details.
    - Step expected result:
      > 1. Search Vaccination Status page is displayed.
      > 2. First Name is [REDACTED_NAME].
      > 3. GIN number accepted
      > 4. Matching employee vaccination records are displayed.
      > 5. Results match the search criteria entered and user can see table details:
      > Last Name - Text field
      > First Name- Text field
      > Date Of Birth - Calendar
      > GIN Number / Applicant ID - [REDACTED_ID] field
      > Company Name - drop-down
      > Vaccination Status
      > Vaccination Date
      > Vaccine First Shot
      > Second Shot Date
      > Vaccine Second Shot
- Case-level expected result:
  > Verify Search COVID-19 Vaccination page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8935293 - Validate Search COVID-19 Vaccination page with Special Characters

- Section: COVID-19 Vaccination / Search COVID-19 Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged in.
  > Search COVID-19 Vaccination page is accessible.
- Test steps:
  - Step 1 action:
    > Navigate to Search COVID-19 Vaccination page.
    - Step expected result:
      > Page loads successfully.
  - Step 2 action:
    > Enter special characters such as @ in First Name.
    - Step expected result:
      > System validates the input according to business rules.
  - Step 3 action:
    > Click Search.
    - Step expected result:
      > System should display a popup window. Saying Please enter valid first name
- Case-level expected result:
  > User should see message 'Please select at least one search criteria before searching.'
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C15237380 - Verify Search with No Matching Records on Search Vaccination Status Page

- Section: COVID-19 Vaccination / Search COVID-19 Vaccination
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged into the application.
  > User is on the Search Vaccination Status page.
- Test steps:
  - Step 1 action:
    > Enter a non-existing First Name as [REDACTED_NAME]
    > Enter a non-existing Last Name as [REDACTED_NAME]
    > Click Search.
    > Verify the search result section.
    > Observe system message.
    - Step expected result:
      > Value is accepted.
      > Value is accepted.
      > System executes the search successfully.
      > No records are displayed.
      > Appropriate message such as "There are no employees available for the search performed. is displayed. No application error occurs.
- Case-level expected result:
  > There are no employees available for the search performed. message displayed.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page (section ID 434952; 6 case(s))

### C8928019 - Verify if a user will be able to login with a valid username and valid password.

- Section: Login Page
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User enter valid username, password, verification code and click on submit button
    - Step expected result:
      > User navigated to search employee page
- Case-level expected result:
  > User successfully login into application
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928020 - Verify if a user cannot login with a valid username and an invalid password.

- Section: Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > user enter valid username, invalid password, verification code and click on submit button
    - Step expected result:
      > User can see an error message 'Your user name or password is incorrect. Please try again.'
- Case-level expected result:
  > User cannot login into application
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928021 - Verify the login page for both, when the field is blank and Submit button is clicked.

- Section: Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > user skipped username and password, enter verification code and click on submit button
    - Step expected result:
      > user able to click on submit button without entering username and password field
- Case-level expected result:
  > User will see alert message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928022 - Verify the ‘Forgot Password’ functionality.

- Section: Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > User click on forgot / unlock password
    - Step expected result:
      > User is able to click on forgot / unlock password link and navigated to 'Forgot Password / Unlock Account' page
- Case-level expected result:
  > user navigated to 'Forgot Password / Unlock Account' page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928023 - Verify the messages for invalid login.

- Section: Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > user enter invalid credential and verification code
    - Step expected result:
      > user is able to enter invalid credential and verification code
  - Step 2 action:
    > User click on submit button
    - Step expected result:
      > User can see a message 'Your user name or password is incorrect. Please try again.'
      > 
      > ![](index.php?/attachments/get/c229c424-42f4-494a-8c27-bd96ce4ecedc)
- Case-level expected result:
  > user will get an alert message for invalid credential
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9031928 - Verify submit button disabled if skipped verification code

- Section: Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > user enter username and password, skip verification code
    - Step expected result:
      > user should see submit button as disabled ![](index.php?/attachments/get/578d52d5-071e-44c2-9a4a-7a39fe2b6804)
- Case-level expected result:
  > Submit button disabled for user
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page / Forgot Password / Unlock Account (section ID 434953; 2 case(s))

### C8928025 - Verify forgot password link navigated to different page

- Section: Login Page / Forgot Password / Unlock Account
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > User click on forgot / unlock password link
    - Step expected result:
      > user is navigated to Forgot Password / Unlock Account page
  - Step 2 action:
    > user enter username in text field and click on Go button
    - Step expected result:
      > user asked to enter some security related questions
  - Step 3 action:
    > user entered required details and click on submit button
    - Step expected result:
      > user will see an alert message
- Case-level expected result:
  > A Reset Password link has just been sent by email. Please check your inbox and follow the instructions.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928026 - Verify user able to change or reset password

- Section: Login Page / Forgot Password / Unlock Account
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Forgot Password / Unlock Account page
- Test steps:
  - Step 1 action:
    > user enter username in text field and click on Go button
    - Step expected result:
      > user asked to enter some security related questions
  - Step 2 action:
    > user entered required details and click on submit button
    - Step expected result:
      > user will see an alert message
- Case-level expected result:
  > A Reset Password link has just been sent by email. Please check your inbox and follow the instructions.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page / Register Employee (section ID 434954; 2 case(s))

### C8928027 - Employee or Pre-employee

- Section: Login Page / Register Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user should be on Employee Registration page
- Test steps:
  - Step 1 action:
    > user enter GIN No. or Applicant ID for Pre-employee, Date of Birth and International SOS ID
    - Step expected result:
      > user is able to enter mandatory details
      > 
      > ![](index.php?/attachments/get/a83cf1fc-0544-49d3-9140-6c9075922e94)
  - Step 2 action:
    > user click on get details button (With correct details)
    - Step expected result:
      > user navigated to Employee Registration page where user enter required details
      > 
      > ![](index.php?/attachments/get/1780c076-fb0b-470d-9da5-e77b2aeb9a65)
  - Step 3 action:
    > user click on get details button (With incorrect details)
    - Step expected result:
      > User can see error message 'There is no employee present in the system with the given criteria.'
      > 
      > ![](index.php?/attachments/get/b1c99ead-78bd-41ae-a34e-b860501690b3)
  - Step 4 action:
    > User click on Cancel button
    - Step expected result:
      > User navigated to login page
      > 
      > ![](index.php?/attachments/get/7ff7f247-d939-4140-bed0-072b4b8227f2)
  - Step 5 action:
    > User click on Reset button
    - Step expected result:
      > Entered details will be cleared
      > 
      > ![](index.php?/attachments/get/6951b176-a4af-4847-ad8b-715cf7f62b44)
  - Step 6 action:
    > User click on Register button (Validation check unsuccessful)
    - Step expected result:
      > User will get validation message if:
      > 1. User id not matched with requirement
      > ![](index.php?/attachments/get/8f66c28a-2259-4a64-a3fb-e0bfb73127aa)
      > 
      > 2. Password not matched with requirement
      > ![](index.php?/attachments/get/07f379dc-7e1c-423f-bc1b-127802e5ccb8)
      > 
      > 3. If left mandatory questions
      > ![](index.php?/attachments/get/30794ae5-91fa-46ad-94c3-fe929b6a507e)
  - Step 7 action:
    > User click on Register button (Validation check successful)
    - Step expected result:
      > User can see a success message and automatically navigated to login page
      > ![](index.php?/attachments/get/acea75ab-e0d4-43a4-a03f-ee9caa369c6d) ![](index.php?/attachments/get/28826157-eae9-459d-9ee4-f803412ca904)
- Case-level expected result:
  > User registered successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C8928028 - Doctor/Medical Center

- Section: Login Page / Register Employee
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User click on Doctor/Medical Center link on the login page
    > 
    > ![](index.php?/attachments/get/6e0eda05-42c0-4479-88b1-4edf9683ec6b)
    - Step expected result:
      > User navigated to Doctor/Medical Center Registration page
      > 
      > ![](index.php?/attachments/get/65609be7-efc5-4032-80b2-7432b1328668)
  - Step 2 action:
    > User click on Cancel button
    - Step expected result:
      > User navigated to login page
      > 
      > ![](index.php?/attachments/get/07d7693b-2206-40f5-9a62-5f8a6aa3294c)
  - Step 3 action:
    > User click on Reset button
    - Step expected result:
      > Entered details will be cleared
      > 
      > ![](index.php?/attachments/get/392571cd-e18d-4fa6-a024-5243fd183665)
  - Step 4 action:
    > User click on Register button (Validation check unsuccessful)
    - Step expected result:
      > User will get validation message if:
      > 
      > 1. Mandatory fields skipped
      > 
      > ![](index.php?/attachments/get/9084c1d6-2675-4840-a12e-39ff3cd5e2fd)
      > 
      > 2. Entered incorrect data
      > 
      > ![](index.php?/attachments/get/9f9b3b40-42de-4929-9eac-eae1a7f33671)
      > 
      > 3. Password mismatch
      > 
      > ![](index.php?/attachments/get/e5bb58a3-3fad-4ad4-adff-4a539465c576)
      > 
      > 4. Password validation
      > ![](index.php?/attachments/get/e7efe0fb-44cc-4213-8467-f52e54c53d04) ![](index.php?/attachments/get/71092f8b-f07c-405f-acd3-ff0687e10376)
  - Step 5 action:
    > User click on Register button (Validation check successful)
    - Step expected result:
      > User can see a success message and automatically navigated to login page
      > 
      > ![](index.php?/attachments/get/f6d0ee90-f415-4f45-a04b-3daba82b8d30) ![](index.php?/attachments/get/03db7b59-c182-45db-887b-eef6b1a7d3eb)
- Case-level expected result:
  > User registered successfully
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page / Your Dashboard! (section ID 435235; 1 case(s))

### C8934315 - User able to see dashboard page

- Section: Login Page / Your Dashboard!
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User click on 'Your Dashboard!' link
    > 
    > ![](index.php?/attachments/get/fd478a5d-b211-4984-a2e0-31e267ea8e6b)
    - Step expected result:
      > User navigated to 'Quick_Guide_Dashboard.pdf' page
      > 
      > ![](index.php?/attachments/get/3853beda-4cc0-4a9e-8cf4-eaff201875db)
- Case-level expected result:
  > User can see a pdf file
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page / Your Mobile Application! (section ID 435236; 1 case(s))

### C8934314 - User able to see mobile application page

- Section: Login Page / Your Mobile Application!
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User click on 'MobileIconYour Mobile Application!' link
    > 
    > ![](index.php?/attachments/get/798522a4-20e1-4aad-951d-b1d2eef28303)
    - Step expected result:
      > User navigated to 'Quick_Guide_Mobile_App.pdf' page
      > 
      > ![](index.php?/attachments/get/cbaa2043-b588-4713-a366-1171d54b4aab)
- Case-level expected result:
  > User can see a pdf file
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Login Page / Intl. SOS DROP BOX - Click here to send your report (section ID 435237; 1 case(s))

### C8934316 - User navigated to drop box page

- Section: Login Page / Intl. SOS DROP BOX - Click here to send your report
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User click on 'Intl. SOS DROP BOX - Click here to send your report' link
    > 
    > ![](index.php?/attachments/get/5a7a0097-1550-4740-8bad-fee2c02fb0b2)
    - Step expected result:
      > User navigated to DropboxLogin.aspx
      > 
      > ![](index.php?/attachments/get/a89d26c8-4f1c-49ff-96f9-bc893cab6f6c)
      > 
      > Where user can see
      > 1. fields - User Name, Password text fields
      > 2. Buttons - Submit and Cancel
      > 3. Checkbox for 'Login with Corporate Account'
      > 4. A logo 'Welcome to the International SOS Drop Box!'
      > 5. A link 'Forgot Password?' and 'About SSL Certificates'
  - Step 2 action:
    > User entered details in DropboxLogin.aspx (With invalid details)
    - Step expected result:
      > User can see a error message 'Your user name or password is incorrect. Please try again.'
      > 
      > ![](index.php?/attachments/get/b199618e-74e9-4d8f-b3bf-e25d53ff1ac3)
  - Step 3 action:
    > User entered details in DropboxLogin.aspx (With valid details)
    - Step expected result:
      > User navigated to 'Drop Box - Download Medical Reports' page
      > 
      > ![](index.php?/attachments/get/226b6afb-78f7-4ce2-9289-38bcfff67947)
- Case-level expected result:
  > User successfully login into DropboxLogin.aspx page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / ISOS Admin (section ID 435515; 1 case(s))

### C8935483 - Verify page details and access menu for ISOS Admin

- Section: Application User / ISOS Admin
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to search employee page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/d28bb5e0-6733-4326-96b7-63e5d0de3001)
      > 
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
      > 
      > 2. Right side page label name
      > 1. ISOS Admin (Intl. SOS Admin) | Last login date: 06-Jul-2022 12:46:22
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7. Advance Search link
- Case-level expected result:
  > User verify access details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / ISOS User (section ID 435516; 1 case(s))

### C8935484 - Verify page details and access menu for ISOS USer

- Section: Application User / ISOS User
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to search employee page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/6d2f0cbb-03c8-4ab5-95d1-5d3af8d3b1ff)
      > 
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
      > 
      > 2. Right side page label name
      > 1. ISOS User (Intl. SOS User) | Last login date: 07-Jul-2022 09:01:47
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7. Advance Search link
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / Chief Recruiter (section ID 435517; 1 case(s))

### C8935485 - Verify page details and access menu for Chief Recruiter

- Section: Application User / Chief Recruiter
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to search employee page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/3027d770-355a-405c-9add-fdb9c050ab41)
      > 
      > 1. Left Panel links
      > a. General Information
      > b. Search Employees
      > c. Create New Employee
      > d. Search Team Members
      > d. Create Team Members
      > g. Medical Exam Expirations
      > h. Help
      > 
      > 2. Right side page label name
      > 1. ChefRec SLB (Chief Recruiter) | Last login date: 07-Jul-2022 09:16:54
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7. Advanced Search - link
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / Recruiter (section ID 435518; 1 case(s))

### C8935486 - Verify page details and access menu for Recruiter

- Section: Application User / Recruiter
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to search employee page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/0066aa2f-e7ca-4c30-8eae-427e6d29bccd)
      > 
      > 1. Left Panel links
      > a. General Information
      > b. Search Employees
      > c. Create New Employee
      > d. Medical Exam
      > 
      > 2. Right side page label name
      > 1. Recruiter SLB (Recruiter) | Last login date: 07-Jul-2022 09:11:28
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7 . Advance Search - link
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / ISOS Reviewer (section ID 435519; 1 case(s))

### C8935487 - Verify page details and access menu for ISOS Reviewer

- Section: Application User / ISOS Reviewer
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to Exams to Review page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/e3f24f8a-e6d2-48c5-8f07-d4936d1a5ed2)
      > 
      > 1. Left Panel links
      > a. Search Employees
      > b. Exams to review
      > c. Search Reviewed Exams
      > 
      > 2. Right side page label name
      > 1. ISOS Rviewer (Intl. SOS Reviewer) | Last login date: 07-Jul-2022 09:31:56
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7 . Advance Search - link
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / Client Reviewer (section ID 435520; 1 case(s))

### C8935488 - Verify page details and access menu for Client Reviewer

- Section: Application User / Client Reviewer
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to Awaiting Employee Response page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/a7f0e434-652f-4320-b921-0a830a0a4a26)
      > 
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
      > 
      > 2. Right side page label name
      > 1. ClntRev SLB (Client Reviewer) | Last login date: 07-Jul-2022 09:35:15
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7 . Advance Search - link
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Application User / Partner (section ID 435522; 1 case(s))

### C8935490 - Verify page details and access menu for Partner

- Section: Application User / Partner
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User have valid credential
- Test steps:
  - Step 1 action:
    > User login and navigating to Awaiting your review page
    - Step expected result:
      > User can see sections:
      > 
      > ![](index.php?/attachments/get/911e87d6-c249-431e-a6af-6ecb50a1e8b4)
      > 
      > 1. Drop Box
      > 2. Right side page label name
      > 1. PartnerUser (Partner) | Last login date: 07-Jul-2022 09:50:23
      > 3. Need Help? - link
      > 4. My Details - link
      > 5. Change Password - link
      > 6. Log out - button
      > 7. Cancel - Button
- Case-level expected result:
  > User verify access details and menu details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## My Profile (section ID 458015; 1 case(s))

### C9217325 - Verify my profile page

- Section: My Profile
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User is on My Profile page
    - Step expected result:
      > User can see details below:
      > 1.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Login Page (section ID 457979; 5 case(s))

### C9216981 - Verify if a user will be able to login with a valid username and valid password.

- Section: iOS Mobile App Test Cases / Login Page
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > User enter valid username, password and click on submit button
    - Step expected result:
      > User navigated to search employee page
- Case-level expected result:
  > User successfully login into application
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9216982 - Verify if a user cannot login with a valid username and an invalid password.

- Section: iOS Mobile App Test Cases / Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is on login page
- Test steps:
  - Step 1 action:
    > user enter valid username, invalid password and click on submit button
    - Step expected result:
      > User can see an error message 'Your user name or password is incorrect. Please try again.'
- Case-level expected result:
  > User cannot login into application
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9216983 - Verify the login page for both, when the field is blank and Submit button is clicked.

- Section: iOS Mobile App Test Cases / Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > user skipped username and password and click on submit button
    - Step expected result:
      > user able to click on submit button without entering username and password field
- Case-level expected result:
  > User will see alert message
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9216984 - Verify the ‘Forgot Password’ functionality.

- Section: iOS Mobile App Test Cases / Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > User click on forgot / unlock password
    - Step expected result:
      > User is able to click on forgot password link and navigated to 'Forgot Password page
- Case-level expected result:
  > user navigated to 'Forgot Password page
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9216985 - Verify the messages for invalid login.

- Section: iOS Mobile App Test Cases / Login Page
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user is on login page
- Test steps:
  - Step 1 action:
    > user enter invalid credential
    - Step expected result:
      > user is able to enter invalid credential
  - Step 2 action:
    > User click on submit button
    - Step expected result:
      > User can see a message 'Your user name or password is incorrect. Please try again.'
- Case-level expected result:
  > user will get an alert message for invalid credential
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Login Page / Register Employee (section ID 457980; 1 case(s))

### C9278156 - User can register record

- Section: iOS Mobile App Test Cases / Login Page / Register Employee
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User should be on login page
- Test steps:
  - Step 1 action:
    > User click on For register users only link
    - Step expected result:
      > User will be advised to go for register link at their MedFit website
      > 
      > ![](index.php?/attachments/get/e4f28224-aed9-4b9a-933d-98273498ae57)
- Case-level expected result:
  > User advised to go for registration link on website
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Login Page / Forgot Password? (section ID 460763; 1 case(s))

### C9278155 - Verify forgot password functionality

- Section: iOS Mobile App Test Cases / Login Page / Forgot Password?
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > User click on Forgot Password in login page
    - Step expected result:
      > User will get a popup window with text area to enter username
      > 
      > ![](index.php?/attachments/get/ad6c5fe3-9830-4d63-80da-fc38a0030e7f)
  - Step 2 action:
    > 1. User enter username in textarea and click on ok button
    > 
    > 2. User click on cancel button
    - Step expected result:
      > 1. User navigated to a new page to enter security answer
      > 
      > ![](index.php?/attachments/get/e809cb05-a4e4-4b90-9207-0c1cc24093aa)
      > 2. User navigated to login page
  - Step 3 action:
    > 1. User enter security answer and click on submit button
    > 
    > 2. User click on cancel button
    - Step expected result:
      > 1. User successfully able to reset password
      > 
      > 2. User navigated to login page
- Case-level expected result:
  > User successfully able to reset password
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Information (section ID 458020; 1 case(s))

### C9217330 - Verify my information page

- Section: iOS Mobile App Test Cases / My Information
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User click on my information link
    - Step expected result:
      > User navigated to my information page and can see details about medfit app.
      > 
      > ![](index.php?/attachments/get/5aaf26b3-0ca9-4e76-9be1-6bb86adb9a44)
- Case-level expected result:
  > User can see information about medfit app
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Vaccinations (section ID 458018; 1 case(s))

### C9217328 - Verify my vaccination page

- Section: iOS Mobile App Test Cases / My Vaccinations
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User click on my vaccination link
    - Step expected result:
      > User navigated to my vaccinations page and can see details below:
      > 
      > 1. details based on Grid view with back and forward icon
      > 
      > ![](index.php?/attachments/get/5808deb6-93a4-4abd-a226-d4658c505e88)
      > 
      > 2. details based on Table view and columns in tables are:
      > a. Vaccination name
      > b. Last shot
      > c. Next shot
      > d. Status
      > 
      > ![](index.php?/attachments/get/4722a2d9-6e4a-40aa-8a64-d40b784c3937)
- Case-level expected result:
  > User can see vaccination related details for the employee
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Dashboard (section ID 457992; 1 case(s))

### C9216991 - Verify my dashboard page

- Section: iOS Mobile App Test Cases / My Dashboard
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User click on my dashboard link
    - Step expected result:
      > User navigated to my dashboard page and can see details below:
      > 
      > 1. Overall health status
      > 2. Standard health indicators
      > 
      > ![](index.php?/attachments/get/56057023-c054-4701-a6c1-4ef652296c04)
- Case-level expected result:
  > User can see data based on health
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Profile (section ID 458014; 1 case(s))

### C9217324 - Verify my profile page

- Section: iOS Mobile App Test Cases / My Profile
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User is on My Profile page
    - Step expected result:
      > User can see details below:
      > 1. GIN
      > 2. Date of birth
      > 3. Company
      > 4. Assignment Country
      > 5. Employee Category
      > 
      > ![](index.php?/attachments/get/9c588ebd-3779-4e49-8445-e22a183e079e)
- Case-level expected result:
  > User is able to see all data in My profile page
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Exam Tracker (section ID 458016; 1 case(s))

### C9217326 - Verify my exam tracker page

- Section: iOS Mobile App Test Cases / My Exam Tracker
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > 1. User click on My Exam Tracker
    > User is on My Profile page
    - Step expected result:
      > 1. User navigated to my exam tracker page and can see details below:
      > a. Last completed exam
      > b. Next exam
      > c. Blood group
      > d. Fitness conclusion
      > 
      > ![](index.php?/attachments/get/223352cf-2d87-4146-b3a4-33a2e10effb6)
- Case-level expected result:
  > User can see exam related details
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / My Documetns (section ID 458017; 1 case(s))

### C9217327 - Verify my documents page

- Section: iOS Mobile App Test Cases / My Documetns
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User click on my documents link
    - Step expected result:
      > User navigated to my documents page and can see ddocuments attached if any
      > 
      > ![](index.php?/attachments/get/0dbe9e5f-0f8e-4a6e-91c6-bd2dbc62987c)
- Case-level expected result:
  > User can see attached documents list
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Create My Exam (section ID 458019; 1 case(s))

### C9217329 - Verify create my exam page

- Section: iOS Mobile App Test Cases / Create My Exam
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User click on create my exam link
    - Step expected result:
      > User navigated to my exam page and can see details below:
      > 
      > 1. Your consent
      > 2. Radio button - I do authorize
      > 3. Radio button - I do not authorize
      > 4. Drop down - Reason for medical exam
      > 5. Date field - Approximate date of exam
      > 6. Submit button
      > 
      > ![](index.php?/attachments/get/9d4cc8d2-f7c2-443b-af01-6f9c47801f3f)
  - Step 2 action:
    > User create an exam
    - Step expected result:
      > 1. User select radio button as I do authorize
      > 2. User select value from drop down
      > 3. User select date
      > 4. User click on submit button
      > 5. Exam created successfully.
- Case-level expected result:
  > User can create new exam
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Definitions (section ID 458062; 1 case(s))

### C9217998 - Verify information page

- Section: iOS Mobile App Test Cases / Definitions
- Priority: Medium
- Test type: Functional
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > User is logged-in
- Test steps:
  - Step 1 action:
    > User is on My Profile page
    - Step expected result:
      > User can see details below:
      > 1.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## iOS Mobile App Test Cases / Logout (section ID 460762; 1 case(s))

### C9278154 - User able to logout from application

- Section: iOS Mobile App Test Cases / Logout
- Priority: Medium
- Test type: Sanity Test
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > user should be logged-in
- Test steps:
  - Step 1 action:
    > 1. User click on logout button
    - Step expected result:
      > 1. User can see a alert message 'Are you sure that you want to logout?' with buttons Ok or Cancel
      > 
      > ![](index.php?/attachments/get/735f2569-b31a-40fd-a694-018652734b63)
  - Step 2 action:
    > User click on cancel button
    - Step expected result:
      > User will remain on the application
      > 
      > ![](index.php?/attachments/get/9290904d-9cb1-49e9-82e9-02d95d05ae3f)
  - Step 3 action:
    > User click on Ok button
    - Step expected result:
      > User will be logged out and navigated to login page
      > 
      > ![](index.php?/attachments/get/f796a758-10c4-4db0-878f-855ee7c99453)
- Case-level expected result:
  > User navigated to login page after successful logout
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Password length (section ID 467385; 8 case(s))

### C9404079 - Update Minimum Password Length to 12 Characters

- Section: Password length
- Priority: Medium
- Test type: Sanity Test
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > ISOS Admin user account exists in the system.
  > 
  > Admin user has access to System Configuration → Company.
  > 
  > “My Company” record exists in the system.
- Test steps:
  - Step 1 action:
    > Log in with ISOS Admin profile.
    > 
    > Navigate to System Configuration → Company.
    > 
    > Search for “My Company”.
    > 
    > Click Edit on the search result.
    > 
    > Set minimum password length to 12 characters.
    > 
    > Click Save.
    - Step expected result:
      > Changes are saved successfully.
      > 
      > Confirmation message is displayed (e.g., “Company settings updated successfully”).
      > 
      > Minimum password length now shows as 12 in company settings.
- Case-level expected result:
  > Changes are saved successfully.
  > 
  > Confirmation message is displayed (e.g., “Company settings updated successfully”).
  > 
  > Minimum password length now shows as 12 in company settings.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9404080 - Verify Existing Password Field Does Not Validate Length

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record for “My Company” exists.
  > 
  > Employee has an existing password (may be less than 12 characters if created before policy change).
  > 
  > Minimum password length is set to 12.
  > 
  > Employee is logged in successfully.
- Test steps:
  - Step 1 action:
    > Log in as “My Company” employee.
    > 
    > Click Change Password (top-right corner).
    > 
    > Enter the current password in the Existing Password field (even if it is less than 12 characters).
    > 
    > Move to the next field.
    - Step expected result:
      > Existing Password field accepts the current password regardless of length.
      > 
      > No validation error related to password length appears for the Existing Password field.
      > 
      > Only authentication validation occurs (correct/incorrect password).
- Case-level expected result:
  > Existing Password field accepts the current password regardless of length.
  > 
  > No validation error related to password length appears for the Existing Password field.
  > 
  > Only authentication validation occurs (correct/incorrect password).
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9404081 - Verify New Password Field Enforces Minimum 12 Characters

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee is logged in.
  > 
  > Minimum password length is set to 12 for “My Company”.
- Test steps:
  - Step 1 action:
    > Navigate to Change Password.
    > 
    > Enter correct Existing Password.
    > 
    > In New Password, enter a password with fewer than 12 characters (e.g., 8–11 characters).
    > 
    > Enter same value in Confirm New Password.
    > 
    > Click Save/Submit.
    - Step expected result:
      > System displays validation error indicating minimum 12 characters required.
      > 
      > Password change is not allowed.
      > 
      > Error message is clear and user-friendly.
- Case-level expected result:
  > System displays validation error indicating minimum 12 characters required.
  > 
  > Password change is not allowed.
  > 
  > Error message is clear and user-friendly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430419 - Verify Confirm New Password Field Enforces Minimum 12 Characters

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee is logged in.
  > 
  > Password policy is set to 12 characters.
- Test steps:
  - Step 1 action:
    > Enter correct Existing Password.
    > 
    > Enter valid 12+ character password in New Password.
    > 
    > Enter fewer than 12 characters in Confirm New Password.
    > 
    > Click Submit.
    - Step expected result:
      > System displays validation error.
      > 
      > Password update is not successful.
      > 
      > Confirm field enforces same minimum length rule.
- Case-level expected result:
  > System displays validation error.
  > 
  > Password update is not successful.
  > 
  > Confirm field enforces same minimum length rule.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430421 - Verify Password Mismatch Validation

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee logged in.
  > 
  > Password policy is set to 12 characters.
- Test steps:
  - Step 1 action:
    > Enter correct Existing Password.
    > 
    > Enter valid 12+ character password in New Password.
    > 
    > Enter a different 12+ character password in Confirm New Password.
    > 
    > Click Submit.
    - Step expected result:
      > System displays “Passwords do not match” error.
      > 
      > Password change is not completed.
- Case-level expected result:
  > System displays “Passwords do not match” error.
  > 
  > Password change is not completed.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430422 - Verify Successful Password Update with Valid 12+ Character Password

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee logged in.
  > 
  > Password policy is set to 12 characters.
- Test steps:
  - Step 1 action:
    > Enter correct Existing Password.
    > 
    > Enter a valid password with 12 or more characters in New Password.
    > 
    > Enter the same password in Confirm New Password.
    > 
    > Click Submit.
    - Step expected result:
      > Password is successfully updated.
      > 
      > Confirmation message is displayed.
      > 
      > User remains logged in (if system behavior allows) or is prompted to log in again.
- Case-level expected result:
  > Password is successfully updated.
  > 
  > Confirmation message is displayed.
  > 
  > User remains logged in (if system behavior allows) or is prompted to log in again.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430423 - Verify Login with New Password

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Password has been successfully changed to a 12+ character password.
- Test steps:
  - Step 1 action:
    > Log out of the employee account.
    > 
    > Navigate to login page.
    > 
    > Enter username/email.
    > 
    > Enter newly created password.
    > 
    > Click Login.
    - Step expected result:
      > Login is successful.
      > 
      > No errors occur.
      > 
      > User is redirected to the dashboard/home page.
      > 
      > Login process is smooth without unexpected validation errors.
- Case-level expected result:
  > Login is successful.
  > 
  > No errors occur.
  > 
  > User is redirected to the dashboard/home page.
  > 
  > Login process is smooth without unexpected validation errors.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430424 - Verify Old Password No Longer Works

- Section: Password length
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Password has been successfully changed.
- Test steps:
  - Step 1 action:
    > Log out.
    > 
    > Attempt to log in using the old password.
    - Step expected result:
      > Login fails.
      > 
      > System displays “Invalid credentials” message.
      > 
      > Access is denied.
- Case-level expected result:
  > Login fails.
  > 
  > System displays “Invalid credentials” message.
  > 
  > Access is denied.
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Archival Activity / Data is moved to the Archives DB when an employee's status has been inactive for 2 years (section ID 467529; 2 case(s))

### C9405408 - Search employee with active status

- Section: Archival Activity / Data is moved to the Archives DB when an employee's status has been inactive for 2 years
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > 1. User login into application
    > 2. User will enter inactive employee details in search screen page
    > 3. User click on search button
    - Step expected result:
      > 1. User successfully able to login into application
      > 2. User is able to enter employee details in search screen page
      > 3. Search result will display
- Case-level expected result:
  > Active user is not visible in the search result table
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9405409 - Search employee with inactive status

- Section: Archival Activity / Data is moved to the Archives DB when an employee's status has been inactive for 2 years
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > 1. User login into application
    > 2. User will enter inactive employee details in search screen page
    > 3. User click on search button
    - Step expected result:
      > 1. User successfully able to login into application
      > 2. User is able to enter employee details in search screen page
      > 3. Search result will display
- Case-level expected result:
  > Inactive user is not visible in the search result table
- Explicit TestRail test data:
  > Not supplied in TestRail.

## Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years (section ID 467530; 2 case(s))

### C9405412 - Search employee with active status

- Section: Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Not supplied in TestRail.
- Case-level expected result:
  > Not supplied in TestRail.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9405413 - Search employee with inactive status

- Section: Archival Activity / Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Not supplied in TestRail.
- Test steps:
  - Step 1 action:
    > 1. User login into application
    > 2. User will enter inactive employee details in search screen page
    > 3. User click on search button
    - Step expected result:
      > 1. User successfully able to login into application
      > 2. User is able to enter employee details in search screen page
      > 3. Search result will display
- Case-level expected result:
  > Inactive user is not visible in the search result table
- Explicit TestRail test data:
  > Not supplied in TestRail.

## ERAMET - Setup new METs and switch between fuller and lighter METs (section ID 470048; 9 case(s))

### C9428818 - Verify N1 and N2 MET Linking to Global METs

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Global METs are already configured.
  > 
  > User has access to MET configuration details.
- Test steps:
  - Step 1 action:
    > Open any MET ending with “N1”.
    > 
    > Check the linked Global MET exam type.
    > 
    > Open any MET ending with “N2”.
    > 
    > Check the linked Global MET exam type.
    - Step expected result:
      > METs ending with “N1” are linked to Global METs with full exam.
      > 
      > METs ending with “N2” are linked to Global METs with light exam.
- Case-level expected result:
  > METs ending with “N1” are linked to Global METs with full exam.
  > 
  > METs ending with “N2” are linked to Global METs with light exam.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428819 - Assign MET for Haute Altitude – No Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Haute Altitude”.
  > 
  > Employee has no active exam.
- Test steps:
  - Step 1 action:
    > Assign MET to the employee.
    > 
    > Check assigned MET.
    - Step expected result:
      > Employee is assigned “A Haute Altitude N1”.
- Case-level expected result:
  > Employee is assigned “A Haute Altitude N1”.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428821 - Assign MET for Haute Altitude – Active Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Haute Altitude”.
  > 
  > Employee has an active exam.
- Test steps:
  - Step 1 action:
    > Assign MET to the employee.
    > 
    > Verify the assigned MET.
    - Step expected result:
      > Employee is assigned “A Haute Altitude N2”.
- Case-level expected result:
  > Employee is assigned “A Haute Altitude N2”.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428822 - Assign MET for Zone Impaludée – Age < 45 – No Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Zone Impaludée”.
  > 
  > Age < 45 years.
  > 
  > No active exam.
- Test steps:
  - Step 1 action:
    > Assign MET to the employee.
    > 
    > Review assigned MET.
    - Step expected result:
      > Employee is assigned “A Zone Impaludée N1”.
- Case-level expected result:
  > Employee is assigned “A Zone Impaludée N1”.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428823 - Assign MET for Zone Impaludée – Age < 45 – Active Exam

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Zone Impaludée”.
  > 
  > Age < 45 years.
  > 
  > Active exam exists.
- Test steps:
  - Step 1 action:
    > Assign MET to the employee.
    > 
    > Check MET assignment.
    - Step expected result:
      > Employee is assigned “A Zone Impaludée N2”.
- Case-level expected result:
  > Employee is assigned “A Zone Impaludée N2”.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428824 - Assign MET for Zone Impaludée – Male – Age > 45

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Zone Impaludée”.
  > 
  > Gender = Male.
  > 
  > Age > 45 years.
- Test steps:
  - Step 1 action:
    > Assign MET when no active exam exists.
    > 
    > Note assigned MET.
    > 
    > Assign MET when an active exam exists.
    > 
    > Note assigned MET.
    - Step expected result:
      > Without exam → “B Male Zone Impaludée N1” is assigned.
      > 
      > With active exam → “B Male Zone Impaludée N2” is assigned.
- Case-level expected result:
  > Without exam → “B Male Zone Impaludée N1” is assigned.
  > 
  > With active exam → “B Male Zone Impaludée N2” is assigned.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428825 - Assign MET for Zone Impaludée – Female – Age > 45

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee belongs to ERAMET.
  > 
  > Geo Market = “Zone Impaludée”.
  > 
  > Gender = Female.
  > 
  > Age > 45 years.
- Test steps:
  - Step 1 action:
    > Assign MET with no active exam.
    > 
    > Verify MET.
    > 
    > Assign MET with an active exam.
    > 
    > Verify MET.
    - Step expected result:
      > Without exam → “B Fem Zone Impaludée N1” is assigned.
      > 
      > With active exam → “B Fem Zone Impaludée N2” is assigned.
- Case-level expected result:
  > Without exam → “B Fem Zone Impaludée N1” is assigned.
  > 
  > With active exam → “B Fem Zone Impaludée N2” is assigned.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428826 - N1 to N2 Exam Switching – 4 Year Validity

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > ERAMET employee.
  > 
  > Assigned N1 MET with 4-year validity.
- Test steps:
  - Step 1 action:
    > Check MET status at Year 0.
    > 
    > Advance system year to Year 1, 2, and 3.
    > 
    > Check MET each year.
    > 
    > Advance to Year 4.
    - Step expected result:
      > Year 0 → N1 MET (4 years validity)
      > 
      > Year 1 → N2 MET (1 year validity)
      > 
      > Year 2 → N2 MET (1 year validity)
      > 
      > Year 3 → N2 MET (1 year validity)
      > 
      > Year 4 → N1 MET reassigned (4 years validity)
- Case-level expected result:
  > Year 0 → N1 MET (4 years validity)
  > 
  > Year 1 → N2 MET (1 year validity)
  > 
  > Year 2 → N2 MET (1 year validity)
  > 
  > Year 3 → N2 MET (1 year validity)
  > 
  > Year 4 → N1 MET reassigned (4 years validity)
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9428827 - N1 to N2 Exam Switching – 2 Year Validity

- Section: ERAMET - Setup new METs and switch between fuller and lighter METs
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > ERAMET employee.
  > 
  > Assigned N1 MET with 2-year validity.
- Test steps:
  - Step 1 action:
    > Check MET at Year 0.
    > 
    > Move to Year 1.
    > 
    > Move to Year 2.
    - Step expected result:
      > Year 0 → N1 MET (2 years validity)
      > 
      > Year 1 → N2 MET (1 year validity)
      > 
      > Year 2 → N1 MET reassigned (2 years validity)
- Case-level expected result:
  > Year 0 → N1 MET (2 years validity)
  > 
  > Year 1 → N2 MET (1 year validity)
  > 
  > Year 2 → N1 MET reassigned (2 years validity)
- Explicit TestRail test data:
  > Not supplied in TestRail.

## MD-804 / COVID-19 Content Removal (section ID 470157; 9 case(s))

### C9430379 - Verify Welcome Email – No COVID Content

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB (not HCC/HCR).
  > 
  > Valid official email address is configured.
  > 
  > Welcome email trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger Welcome email for the SLB employee.
    > 
    > Log in to the employee’s mailbox.
    > 
    > Open the received Welcome email.
    > 
    > Review subject line and full email body content.
    - Step expected result:
      > Welcome email is successfully received.
      > 
      > Email does NOT contain any reference to:
      > COVID-19
      > 
      > Vaccination
      > 
      > Immunization requirements
      > 
      > Email formatting and dynamic fields display correctly.
- Case-level expected result:
  > Welcome email is successfully received.
  > 
  > Email does NOT contain any reference to:
  > COVID-19
  > 
  > Vaccination
  > 
  > Immunization requirements
  > 
  > Email formatting and dynamic fields display correctly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430380 - Verify LTA Email – No COVID Content

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB (not HCC/HCR).
  > 
  > LTA notification condition is met.
- Test steps:
  - Step 1 action:
    > Trigger LTA notification.
    > 
    > Access employee mailbox.
    > 
    > Open received LTA email.
    > 
    > Review complete content including links.
    - Step expected result:
      > LTA email is received successfully.
      > 
      > No COVID-19 vaccination references are present.
      > 
      > All dynamic data fields populate correctly.
      > 
      > Links are functional.
- Case-level expected result:
  > LTA email is received successfully.
  > 
  > No COVID-19 vaccination references are present.
  > 
  > All dynamic data fields populate correctly.
  > 
  > Links are functional.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430381 - Verify Reminder 1 Email – No COVID Content

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB.
  > 
  > Reminder 1 trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger Reminder 1 notification.
    > 
    > Open employee mailbox.
    > 
    > Review received email.
    - Step expected result:
      > Reminder 1 email is received.
      > 
      > No COVID-related terminology exists.
      > 
      > Email content appears complete and properly formatted.
- Case-level expected result:
  > Reminder 1 email is received.
  > 
  > No COVID-related terminology exists.
  > 
  > Email content appears complete and properly formatted.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430382 - Verify Account Enabled Email – No COVID Content

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB.
  > 
  > Account is successfully enabled.
- Test steps:
  - Step 1 action:
    > Enable employee account.
    > 
    > Open employee mailbox.
    > 
    > Review Account Enabled email.
    - Step expected result:
      > Account Enabled email is received.
      > 
      > Email contains only account activation/login information.
      > 
      > No COVID-related instructions present.
- Case-level expected result:
  > Account Enabled email is received.
  > 
  > Email contains only account activation/login information.
  > 
  > No COVID-related instructions present.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430383 - Verify HVP Notification – No COVID Content

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB.
  > 
  > HVP notification trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger HVP notification.
    > 
    > Access employee mailbox.
    > 
    > Review email content.
    - Step expected result:
      > HVP email is received.
      > 
      > No COVID-19 vaccination messaging included.
      > 
      > Email displays correctly.
- Case-level expected result:
  > HVP email is received.
  > 
  > No COVID-19 vaccination messaging included.
  > 
  > Email displays correctly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430384 - Verify No Email Sent to HCC Employee

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is HCC.
  > 
  > Valid email address is configured.
  > 
  > Email trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger Welcome/LTA/Reminder event.
    > 
    > Wait for email processing.
    > 
    > Check employee mailbox.
    > 
    > Verify email logs in system.
    - Step expected result:
      > No email is received in inbox or spam.
      > 
      > System logs show email suppression for HCC category.
      > 
      > No delivery attempt is recorded.
- Case-level expected result:
  > No email is received in inbox or spam.
  > 
  > System logs show email suppression for HCC category.
  > 
  > No delivery attempt is recorded.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430385 - Verify No Email Sent to HCR Employee

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is HCR.
  > 
  > Valid email address configured.
  > 
  > Email trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger notification event.
    > 
    > Wait for processing cycle.
    > 
    > Check employee mailbox.
    > 
    > Verify system logs.
    - Step expected result:
      > No email is received.
      > 
      > System logs confirm suppression due to HCR category.
- Case-level expected result:
  > No email is received.
  > 
  > System logs confirm suppression due to HCR category.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430386 - Verify Welcome Email – No MedTrack Registration Instruction

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB.
  > 
  > Welcome email trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger Welcome email.
    > 
    > Open received email.
    > 
    > Carefully review login and registration instructions.
    - Step expected result:
      > Email does NOT contain instructions to:
      > Register in MedTrack
      > 
      > Create a MedTrack account
      > 
      > Email clearly instructs employee to log in using official SLB email address only.
      > 
      > Login link redirects correctly.
- Case-level expected result:
  > Email does NOT contain instructions to:
  > Register in MedTrack
  > 
  > Create a MedTrack account
  > 
  > Email clearly instructs employee to log in using official SLB email address only.
  > 
  > Login link redirects correctly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

### C9430387 - Verify Dynamic Fields in Received Email

- Section: MD-804 / COVID-19 Content Removal
- Priority: Medium
- Test type: System Testing
- TestRail Automation status: is_ai_automated=false; is_ai_generated=false (AI-specific flags)
- Preconditions:
  > Employee record is present in the system.
  > 
  > Employee category is SLB.
  > 
  > Any email trigger condition is met.
- Test steps:
  - Step 1 action:
    > Trigger any notification email.
    > 
    > Open received email.
    > 
    > Validate employee-specific data fields.
    - Step expected result:
      > Employee Name displays correctly.
      > 
      > Employee ID (if applicable) displays correctly.
      > 
      > No placeholder text (e.g., {{Name}}).
      > 
      > Links function properly.
- Case-level expected result:
  > Employee Name displays correctly.
  > 
  > Employee ID (if applicable) displays correctly.
  > 
  > No placeholder text (e.g., {{Name}}).
  > 
  > Links function properly.
- Explicit TestRail test data:
  > Not supplied in TestRail.

