# TestRail Title Update Audit - Phase 2 Recovery

Execution time: 2026-11-20 19:29 Asia/Calcutta  
Project: 73 (GoCare)  
Suite: 26097 (Master)

Previous report: [testrail-title-update-phase2-2026-11-20.md](testrail-title-update-phase2-2026-11-20.md)

## C8927385 verification

- Fresh GET title: `Verify Employee Deletion` (matches the approved title); `suite_id` is 26097. Suite 26097 was previously confirmed to belong to Project 73.
- A saved pre-update snapshot was available in `.testrail-cases.json`, fetched at `2026-11-20T13:10:49.229Z`. It records the original title `Successfully Delete an employee` and version 9.
- The fresh GET reports version 10. The `updated_on` and `updated_by` metadata also differ from the cache. The other available case fields match the snapshot when excluding `title` and these automatic update metadata fields.
- The prior update request was documented as containing only `title`. The metadata differences are not fields submitted in that request. Since the recovery rule says to stop when any non-title field differs, processing stopped before any remaining update request was sent.
- The title is verified; a strict all-fields-equal comparison is not true because TestRail's version and audit metadata changed.

## Remaining 11 approved cases

No update requests were sent for the cases below during this recovery run. Processing stopped at the C8927385 comparison gate. The pre-update title check for each remaining case was therefore not performed again in this recovery run.

| Case ID | Original Title | Approved Title | Pre-update Title Check | Update Request Status | Fresh GET Verification | Other-Field Comparison | Final Status |
| ------- | -------------- | -------------- | ---------------------- | --------------------- | ---------------------- | ---------------------- | ------------ |
| C8927386 | Change status of an Exam if exam exist | Verify Exam Status Change When an Exam Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8932730 | Change status of an Exam if there is no exam | Verify No Exams Message When Changing Exam Status Without an Exam | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8927485 | Create dummy exam if exam present for employee | Verify Dummy Exam Creation When an Exam Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8927533 | Delete an Exam if exam present | Verify Exam Deletion When an Exam Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8927534 | Delete recommendation letter if exam present | Verify Recommendation Letter Deletion When an Exam Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8932733 | Delete recommendation letter if there is no exam | Verify Recommendation Letter Deletion When No Exam Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8928112 | Delete Reminders if there is exam and reminders both are present | Verify Reminder Deletion When an Exam and Reminder Exist | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8932739 | Delete reminders If there is no exam present for Existing exam or Upcoming exam | Verify No Reminder Message for Existing and Upcoming Exams | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8932744 | Delete reminders If there is exam present but no reminder for Existing or Upcoming exam | Verify No Reminder Message When No Reminder Exists for an Exam | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8934322 | User click on 'Send LTA' button | Verify LTA Request Submission | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |
| C8934324 | If record has any previous notification | Verify Notification Resend When a Previous Notification Exists | Not performed; stopped at C8927385 gate | Not sent | Not performed in recovery | Not performed | Skipped |

## Excluded cases

No update requests were sent for these nine explicitly excluded cases:

- C15239323
- C15239324
- C8932729
- C9405408
- C9405409
- C9405412
- C9405413
- C9404079
- C8928069

## Totals

- Previously updated and title-verified: 1 (C8927385)
- Newly updated and verified in this recovery: 0
- Skipped due to the C8927385 non-title metadata difference: 11
- Failed update requests: 0
- Remaining cases not verified in this recovery: 11

Only the approved title field was submitted in the previously documented C8927385 update request. No update requests for other fields or cases were sent during this recovery. No GoCare application, configuration, database, or application data was changed. No test cases were executed and no TestRail runs or execution results were published.
