# TestRail Suite 26097 Traceability Matrix

Project 73; suite 26097; 294 cases. Updated 2026-11-12. This matrix records local automation and execution only; no TestRail records were changed. Case titles are omitted here to avoid duplicating test-data text; use the linked case IDs for current source details.

## Execution summary

- Full Chromium suite: 17 passed, 4 skipped; 21 tests discovered including the auth setup project. No WebKit run was performed.
- TestRail cases fully passed: 14; partial form-only: 1; guarded/not run: 3; excluded by prior user choice: 1; remaining not implemented/executed: 275.
- C8927852 was only verified through synthetic form preparation; the submit action remains gated.
- C8927853 and authentication-failure cases C8928020/C8928023 remain gated. The C8928070 team-member test remains deleted per the earlier explicit choice.
- The existing API smoke test is a read-only GET / check and has no corresponding TestRail case ID.

| TestRail case | Section | Provisional classification | Local spec | Local status |
| --- | --- | --- | --- | --- |
| [C8927385](https://internationalsos.testrail.net/index.php?/cases/view/8927385) | Delete Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927386](https://internationalsos.testrail.net/index.php?/cases/view/8927386) | Change status of an Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927485](https://internationalsos.testrail.net/index.php?/cases/view/8927485) | Create dummy exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927533](https://internationalsos.testrail.net/index.php?/cases/view/8927533) | Delete an Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927534](https://internationalsos.testrail.net/index.php?/cases/view/8927534) | Delete recommendation letter | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927852](https://internationalsos.testrail.net/index.php?/cases/view/8927852) | Create New Employee | UI candidate - state-changing; isolate data and clean up | tests/CreateEmployee.spec.ts | Partial - form preparation passed; record creation not run |
| [C8927853](https://internationalsos.testrail.net/index.php?/cases/view/8927853) | Create New Employee | UI candidate - state-changing; isolate data and clean up | tests/CreateEmployee.spec.ts | Not run - guarded pending explicit approval |
| [C8927855](https://internationalsos.testrail.net/index.php?/cases/view/8927855) | Create Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927856](https://internationalsos.testrail.net/index.php?/cases/view/8927856) | Create Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8927857](https://internationalsos.testrail.net/index.php?/cases/view/8927857) | Search employee | UI candidate | tests/searchEmployee.spec.ts | Passed - Chromium |
| [C8927858](https://internationalsos.testrail.net/index.php?/cases/view/8927858) | Search employee | UI candidate | tests/searchEmployee.spec.ts | Passed - Chromium |
| [C8928019](https://internationalsos.testrail.net/index.php?/cases/view/8928019) | Login Page | UI candidate | tests/login.spec.ts | Passed - Chromium |
| [C8928020](https://internationalsos.testrail.net/index.php?/cases/view/8928020) | Login Page | UI candidate | tests/LoginDataDriven.spec.ts | Not run - guarded pending explicit approval |
| [C8928021](https://internationalsos.testrail.net/index.php?/cases/view/8928021) | Login Page | UI candidate | tests/LoginDataDriven.spec.ts | Passed - Chromium |
| [C8928022](https://internationalsos.testrail.net/index.php?/cases/view/8928022) | Login Page | UI candidate - state-changing; isolate data and clean up | tests/LoginDataDriven.spec.ts | Passed - Chromium |
| [C8928023](https://internationalsos.testrail.net/index.php?/cases/view/8928023) | Login Page | UI candidate | tests/LoginDataDriven.spec.ts | Not run - guarded pending explicit approval |
| [C8928025](https://internationalsos.testrail.net/index.php?/cases/view/8928025) | Forgot Password / Unlock Account | UI candidate - state-changing; isolate data and clean up | tests/LoginDataDriven.spec.ts | Passed - Chromium |
| [C8928026](https://internationalsos.testrail.net/index.php?/cases/view/8928026) | Forgot Password / Unlock Account | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928027](https://internationalsos.testrail.net/index.php?/cases/view/8928027) | Register Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928028](https://internationalsos.testrail.net/index.php?/cases/view/8928028) | Register Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928068](https://internationalsos.testrail.net/index.php?/cases/view/8928068) | Create Team Member | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928069](https://internationalsos.testrail.net/index.php?/cases/view/8928069) | Create Team Member | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928070](https://internationalsos.testrail.net/index.php?/cases/view/8928070) | Search Team Members | UI candidate | - | Excluded - prior user choice to keep the spec deleted |
| [C8928071](https://internationalsos.testrail.net/index.php?/cases/view/8928071) | Search Team Members | UI candidate | - | Not implemented / not executed |
| [C8928112](https://internationalsos.testrail.net/index.php?/cases/view/8928112) | Delete Reminders | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928136](https://internationalsos.testrail.net/index.php?/cases/view/8928136) | View Employee | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8928137](https://internationalsos.testrail.net/index.php?/cases/view/8928137) | Dependents | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8928138](https://internationalsos.testrail.net/index.php?/cases/view/8928138) | Dashboard | UI candidate | - | Not implemented / not executed |
| [C8932676](https://internationalsos.testrail.net/index.php?/cases/view/8932676) | Administration Tab | UI candidate | - | Not implemented / not executed |
| [C8932729](https://internationalsos.testrail.net/index.php?/cases/view/8932729) | Delete Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932730](https://internationalsos.testrail.net/index.php?/cases/view/8932730) | Change status of an Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932731](https://internationalsos.testrail.net/index.php?/cases/view/8932731) | Create dummy exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932732](https://internationalsos.testrail.net/index.php?/cases/view/8932732) | Delete an Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932733](https://internationalsos.testrail.net/index.php?/cases/view/8932733) | Delete recommendation letter | Needs clarification | - | Not implemented / not executed |
| [C8932734](https://internationalsos.testrail.net/index.php?/cases/view/8932734) | Delete recommendation letter | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932739](https://internationalsos.testrail.net/index.php?/cases/view/8932739) | Delete Reminders | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8932744](https://internationalsos.testrail.net/index.php?/cases/view/8932744) | Delete Reminders | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8933401](https://internationalsos.testrail.net/index.php?/cases/view/8933401) | Import File | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8933402](https://internationalsos.testrail.net/index.php?/cases/view/8933402) | Import File | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8933403](https://internationalsos.testrail.net/index.php?/cases/view/8933403) | Export Quest | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8933408](https://internationalsos.testrail.net/index.php?/cases/view/8933408) | Generate | UI candidate | - | Not implemented / not executed |
| [C8933409](https://internationalsos.testrail.net/index.php?/cases/view/8933409) | Generate | Needs clarification | - | Not implemented / not executed |
| [C8933427](https://internationalsos.testrail.net/index.php?/cases/view/8933427) | Download | UI candidate | - | Not implemented / not executed |
| [C8934300](https://internationalsos.testrail.net/index.php?/cases/view/8934300) | Search Reviewed Exams | UI candidate | - | Not implemented / not executed |
| [C8934301](https://internationalsos.testrail.net/index.php?/cases/view/8934301) | Search Reviewed Exams | UI candidate | - | Not implemented / not executed |
| [C8934302](https://internationalsos.testrail.net/index.php?/cases/view/8934302) | Search Reviewed Exams | UI candidate | - | Not implemented / not executed |
| [C8934303](https://internationalsos.testrail.net/index.php?/cases/view/8934303) | Generate Master Report | UI candidate | - | Not implemented / not executed |
| [C8934304](https://internationalsos.testrail.net/index.php?/cases/view/8934304) | Header Links | UI candidate | - | Not implemented / not executed |
| [C8934305](https://internationalsos.testrail.net/index.php?/cases/view/8934305) | Maintenance | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934306](https://internationalsos.testrail.net/index.php?/cases/view/8934306) | Unlock User | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934307](https://internationalsos.testrail.net/index.php?/cases/view/8934307) | Unlock User | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934314](https://internationalsos.testrail.net/index.php?/cases/view/8934314) | Your Mobile Application! | UI candidate | - | Not implemented / not executed |
| [C8934315](https://internationalsos.testrail.net/index.php?/cases/view/8934315) | Your Dashboard! | UI candidate | - | Not implemented / not executed |
| [C8934316](https://internationalsos.testrail.net/index.php?/cases/view/8934316) | Intl. SOS DROP BOX - Click here to send your report | UI candidate | - | Not implemented / not executed |
| [C8934317](https://internationalsos.testrail.net/index.php?/cases/view/8934317) | View Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934318](https://internationalsos.testrail.net/index.php?/cases/view/8934318) | Create Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934319](https://internationalsos.testrail.net/index.php?/cases/view/8934319) | Create Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934320](https://internationalsos.testrail.net/index.php?/cases/view/8934320) | View Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934321](https://internationalsos.testrail.net/index.php?/cases/view/8934321) | View Exam | UI candidate | - | Not implemented / not executed |
| [C8934322](https://internationalsos.testrail.net/index.php?/cases/view/8934322) | Send LTA | UI candidate | - | Not implemented / not executed |
| [C8934323](https://internationalsos.testrail.net/index.php?/cases/view/8934323) | Quit | UI candidate | - | Not implemented / not executed |
| [C8934324](https://internationalsos.testrail.net/index.php?/cases/view/8934324) | Resend Notification | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8934325](https://internationalsos.testrail.net/index.php?/cases/view/8934325) | Resend Notification | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8934326](https://internationalsos.testrail.net/index.php?/cases/view/8934326) | Edit Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934355](https://internationalsos.testrail.net/index.php?/cases/view/8934355) | Medical Exam Expirations | UI candidate | - | Not implemented / not executed |
| [C8934356](https://internationalsos.testrail.net/index.php?/cases/view/8934356) | Medical Exam Expirations | UI candidate | - | Not implemented / not executed |
| [C8934357](https://internationalsos.testrail.net/index.php?/cases/view/8934357) | Generate Master Report | UI candidate | - | Not implemented / not executed |
| [C8934358](https://internationalsos.testrail.net/index.php?/cases/view/8934358) | Compnay | UI candidate | - | Not implemented / not executed |
| [C8934359](https://internationalsos.testrail.net/index.php?/cases/view/8934359) | Compnay | UI candidate | - | Not implemented / not executed |
| [C8934360](https://internationalsos.testrail.net/index.php?/cases/view/8934360) | Compnay | UI candidate | - | Not implemented / not executed |
| [C8934361](https://internationalsos.testrail.net/index.php?/cases/view/8934361) | Compnay | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934362](https://internationalsos.testrail.net/index.php?/cases/view/8934362) | Compnay | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934363](https://internationalsos.testrail.net/index.php?/cases/view/8934363) | Logo Information | UI candidate | - | Not implemented / not executed |
| [C8934364](https://internationalsos.testrail.net/index.php?/cases/view/8934364) | Logo Information | UI candidate | - | Not implemented / not executed |
| [C8934365](https://internationalsos.testrail.net/index.php?/cases/view/8934365) | Logo Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934366](https://internationalsos.testrail.net/index.php?/cases/view/8934366) | Logo Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934372](https://internationalsos.testrail.net/index.php?/cases/view/8934372) | Area | UI candidate | - | Not implemented / not executed |
| [C8934373](https://internationalsos.testrail.net/index.php?/cases/view/8934373) | Area | UI candidate | - | Not implemented / not executed |
| [C8934374](https://internationalsos.testrail.net/index.php?/cases/view/8934374) | Area | UI candidate | - | Not implemented / not executed |
| [C8934375](https://internationalsos.testrail.net/index.php?/cases/view/8934375) | Area | UI candidate | - | Not implemented / not executed |
| [C8934376](https://internationalsos.testrail.net/index.php?/cases/view/8934376) | Area | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C8934377](https://internationalsos.testrail.net/index.php?/cases/view/8934377) | Business Area | UI candidate | - | Not implemented / not executed |
| [C8934378](https://internationalsos.testrail.net/index.php?/cases/view/8934378) | Business Area | UI candidate | - | Not implemented / not executed |
| [C8934379](https://internationalsos.testrail.net/index.php?/cases/view/8934379) | Business Area | UI candidate | - | Not implemented / not executed |
| [C8934380](https://internationalsos.testrail.net/index.php?/cases/view/8934380) | Business Area | UI candidate | - | Not implemented / not executed |
| [C8934381](https://internationalsos.testrail.net/index.php?/cases/view/8934381) | Business Area | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934383](https://internationalsos.testrail.net/index.php?/cases/view/8934383) | Geo Market | UI candidate | - | Not implemented / not executed |
| [C8934384](https://internationalsos.testrail.net/index.php?/cases/view/8934384) | Geo Market | UI candidate | - | Not implemented / not executed |
| [C8934385](https://internationalsos.testrail.net/index.php?/cases/view/8934385) | Geo Market | UI candidate | - | Not implemented / not executed |
| [C8934386](https://internationalsos.testrail.net/index.php?/cases/view/8934386) | Geo Market | UI candidate | - | Not implemented / not executed |
| [C8934387](https://internationalsos.testrail.net/index.php?/cases/view/8934387) | Geo Market | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934393](https://internationalsos.testrail.net/index.php?/cases/view/8934393) | Job Site | UI candidate | - | Not implemented / not executed |
| [C8934394](https://internationalsos.testrail.net/index.php?/cases/view/8934394) | Job Site | UI candidate | - | Not implemented / not executed |
| [C8934395](https://internationalsos.testrail.net/index.php?/cases/view/8934395) | Job Site | UI candidate | - | Not implemented / not executed |
| [C8934396](https://internationalsos.testrail.net/index.php?/cases/view/8934396) | Job Site | UI candidate | - | Not implemented / not executed |
| [C8934397](https://internationalsos.testrail.net/index.php?/cases/view/8934397) | Job Site | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934398](https://internationalsos.testrail.net/index.php?/cases/view/8934398) | Job Title | UI candidate | - | Not implemented / not executed |
| [C8934399](https://internationalsos.testrail.net/index.php?/cases/view/8934399) | Job Title | UI candidate | - | Not implemented / not executed |
| [C8934400](https://internationalsos.testrail.net/index.php?/cases/view/8934400) | Job Title | UI candidate | - | Not implemented / not executed |
| [C8934401](https://internationalsos.testrail.net/index.php?/cases/view/8934401) | Job Title | UI candidate | - | Not implemented / not executed |
| [C8934402](https://internationalsos.testrail.net/index.php?/cases/view/8934402) | Job Title | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934403](https://internationalsos.testrail.net/index.php?/cases/view/8934403) | Employee Category | UI candidate | - | Not implemented / not executed |
| [C8934404](https://internationalsos.testrail.net/index.php?/cases/view/8934404) | Employee Category | UI candidate | - | Not implemented / not executed |
| [C8934405](https://internationalsos.testrail.net/index.php?/cases/view/8934405) | Employee Category | UI candidate | - | Not implemented / not executed |
| [C8934406](https://internationalsos.testrail.net/index.php?/cases/view/8934406) | Employee Category | UI candidate | - | Not implemented / not executed |
| [C8934407](https://internationalsos.testrail.net/index.php?/cases/view/8934407) | Employee Category | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934413](https://internationalsos.testrail.net/index.php?/cases/view/8934413) | Additional Information | UI candidate | - | Not implemented / not executed |
| [C8934414](https://internationalsos.testrail.net/index.php?/cases/view/8934414) | Additional Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934415](https://internationalsos.testrail.net/index.php?/cases/view/8934415) | Additional Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934416](https://internationalsos.testrail.net/index.php?/cases/view/8934416) | Additional Information | UI candidate | - | Not implemented / not executed |
| [C8934417](https://internationalsos.testrail.net/index.php?/cases/view/8934417) | Additional Information | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934420](https://internationalsos.testrail.net/index.php?/cases/view/8934420) | Criteria | UI candidate | - | Not implemented / not executed |
| [C8934421](https://internationalsos.testrail.net/index.php?/cases/view/8934421) | Criteria | UI candidate | - | Not implemented / not executed |
| [C8934422](https://internationalsos.testrail.net/index.php?/cases/view/8934422) | Criteria | UI candidate | - | Not implemented / not executed |
| [C8934425](https://internationalsos.testrail.net/index.php?/cases/view/8934425) | MET | UI candidate | - | Not implemented / not executed |
| [C8934426](https://internationalsos.testrail.net/index.php?/cases/view/8934426) | MET | UI candidate | - | Not implemented / not executed |
| [C8934428](https://internationalsos.testrail.net/index.php?/cases/view/8934428) | MET | UI candidate | - | Not implemented / not executed |
| [C8934430](https://internationalsos.testrail.net/index.php?/cases/view/8934430) | MET | UI candidate | - | Not implemented / not executed |
| [C8934436](https://internationalsos.testrail.net/index.php?/cases/view/8934436) | MET | UI candidate | - | Not implemented / not executed |
| [C8934459](https://internationalsos.testrail.net/index.php?/cases/view/8934459) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934460](https://internationalsos.testrail.net/index.php?/cases/view/8934460) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934461](https://internationalsos.testrail.net/index.php?/cases/view/8934461) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934462](https://internationalsos.testrail.net/index.php?/cases/view/8934462) | Fitness Conclusion | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934463](https://internationalsos.testrail.net/index.php?/cases/view/8934463) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934490](https://internationalsos.testrail.net/index.php?/cases/view/8934490) | Static Content | UI candidate | - | Not implemented / not executed |
| [C8934491](https://internationalsos.testrail.net/index.php?/cases/view/8934491) | Static Content | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934492](https://internationalsos.testrail.net/index.php?/cases/view/8934492) | Static Content | UI candidate | - | Not implemented / not executed |
| [C8934493](https://internationalsos.testrail.net/index.php?/cases/view/8934493) | Static Content | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934494](https://internationalsos.testrail.net/index.php?/cases/view/8934494) | Static Content | UI candidate | - | Not implemented / not executed |
| [C8934501](https://internationalsos.testrail.net/index.php?/cases/view/8934501) | Medical History | UI candidate | - | Not implemented / not executed |
| [C8934502](https://internationalsos.testrail.net/index.php?/cases/view/8934502) | Medical History | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934503](https://internationalsos.testrail.net/index.php?/cases/view/8934503) | Medical History | UI candidate | - | Not implemented / not executed |
| [C8934504](https://internationalsos.testrail.net/index.php?/cases/view/8934504) | Widget Configuration | UI candidate | - | Not implemented / not executed |
| [C8934505](https://internationalsos.testrail.net/index.php?/cases/view/8934505) | Widget Configuration | UI candidate | - | Not implemented / not executed |
| [C8934506](https://internationalsos.testrail.net/index.php?/cases/view/8934506) | Widget Configuration | UI candidate | - | Not implemented / not executed |
| [C8934507](https://internationalsos.testrail.net/index.php?/cases/view/8934507) | Widget Configuration | UI candidate | - | Not implemented / not executed |
| [C8934508](https://internationalsos.testrail.net/index.php?/cases/view/8934508) | Widget Configuration | UI candidate | - | Not implemented / not executed |
| [C8934509](https://internationalsos.testrail.net/index.php?/cases/view/8934509) | Notification | UI candidate | - | Not implemented / not executed |
| [C8934510](https://internationalsos.testrail.net/index.php?/cases/view/8934510) | Notification | UI candidate | - | Not implemented / not executed |
| [C8934511](https://internationalsos.testrail.net/index.php?/cases/view/8934511) | Notification | UI candidate | - | Not implemented / not executed |
| [C8934512](https://internationalsos.testrail.net/index.php?/cases/view/8934512) | Landing Page | UI candidate | - | Not implemented / not executed |
| [C8934513](https://internationalsos.testrail.net/index.php?/cases/view/8934513) | Landing Page | UI candidate | - | Not implemented / not executed |
| [C8934514](https://internationalsos.testrail.net/index.php?/cases/view/8934514) | Landing Page | UI candidate | - | Not implemented / not executed |
| [C8934515](https://internationalsos.testrail.net/index.php?/cases/view/8934515) | Static Content | UI candidate | - | Not implemented / not executed |
| [C8934516](https://internationalsos.testrail.net/index.php?/cases/view/8934516) | Static Content | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934517](https://internationalsos.testrail.net/index.php?/cases/view/8934517) | Static Content | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934518](https://internationalsos.testrail.net/index.php?/cases/view/8934518) | Static Content | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934519](https://internationalsos.testrail.net/index.php?/cases/view/8934519) | Menu Item | UI candidate | - | Not implemented / not executed |
| [C8934520](https://internationalsos.testrail.net/index.php?/cases/view/8934520) | Menu Item | UI candidate | - | Not implemented / not executed |
| [C8934521](https://internationalsos.testrail.net/index.php?/cases/view/8934521) | Menu Item | UI candidate | - | Not implemented / not executed |
| [C8934522](https://internationalsos.testrail.net/index.php?/cases/view/8934522) | Menu Item | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934523](https://internationalsos.testrail.net/index.php?/cases/view/8934523) | Menu Item | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934526](https://internationalsos.testrail.net/index.php?/cases/view/8934526) | Medical Center | UI candidate | - | Not implemented / not executed |
| [C8934527](https://internationalsos.testrail.net/index.php?/cases/view/8934527) | Medical Center | UI candidate | - | Not implemented / not executed |
| [C8934535](https://internationalsos.testrail.net/index.php?/cases/view/8934535) | Medical Center | UI candidate | - | Not implemented / not executed |
| [C8934552](https://internationalsos.testrail.net/index.php?/cases/view/8934552) | Medical Center | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8934580](https://internationalsos.testrail.net/index.php?/cases/view/8934580) | Medical Center | UI candidate | - | Not implemented / not executed |
| [C8934582](https://internationalsos.testrail.net/index.php?/cases/view/8934582) | Global MET | UI candidate | - | Not implemented / not executed |
| [C8934583](https://internationalsos.testrail.net/index.php?/cases/view/8934583) | Global MET | UI candidate | - | Not implemented / not executed |
| [C8934584](https://internationalsos.testrail.net/index.php?/cases/view/8934584) | Global MET | UI candidate | - | Not implemented / not executed |
| [C8934585](https://internationalsos.testrail.net/index.php?/cases/view/8934585) | Global MET | UI candidate | - | Not implemented / not executed |
| [C8934586](https://internationalsos.testrail.net/index.php?/cases/view/8934586) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934587](https://internationalsos.testrail.net/index.php?/cases/view/8934587) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934588](https://internationalsos.testrail.net/index.php?/cases/view/8934588) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934589](https://internationalsos.testrail.net/index.php?/cases/view/8934589) | Fitness Conclusion | UI candidate | - | Not implemented / not executed |
| [C8934592](https://internationalsos.testrail.net/index.php?/cases/view/8934592) | BP/BM/Cholestrol | UI candidate | - | Not implemented / not executed |
| [C8934593](https://internationalsos.testrail.net/index.php?/cases/view/8934593) | BP/BM/Cholestrol | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C8934594](https://internationalsos.testrail.net/index.php?/cases/view/8934594) | BP/BM/Cholestrol | UI candidate | - | Not implemented / not executed |
| [C8934595](https://internationalsos.testrail.net/index.php?/cases/view/8934595) | BP/BM/Cholestrol | UI candidate | - | Not implemented / not executed |
| [C8934596](https://internationalsos.testrail.net/index.php?/cases/view/8934596) | Health Check Item | UI candidate | - | Not implemented / not executed |
| [C8934597](https://internationalsos.testrail.net/index.php?/cases/view/8934597) | Health Check Item | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C8934621](https://internationalsos.testrail.net/index.php?/cases/view/8934621) | Health Check Item | UI candidate | - | Not implemented / not executed |
| [C8934622](https://internationalsos.testrail.net/index.php?/cases/view/8934622) | Health Check Item | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935136](https://internationalsos.testrail.net/index.php?/cases/view/8935136) | Medical History | UI candidate | - | Not implemented / not executed |
| [C8935137](https://internationalsos.testrail.net/index.php?/cases/view/8935137) | Medical History | UI candidate | - | Not implemented / not executed |
| [C8935138](https://internationalsos.testrail.net/index.php?/cases/view/8935138) | Medical History | UI candidate | - | Not implemented / not executed |
| [C8935140](https://internationalsos.testrail.net/index.php?/cases/view/8935140) | Medical History | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935141](https://internationalsos.testrail.net/index.php?/cases/view/8935141) | Vaccination | UI candidate | - | Not implemented / not executed |
| [C8935142](https://internationalsos.testrail.net/index.php?/cases/view/8935142) | Vaccination | UI candidate | - | Not implemented / not executed |
| [C8935143](https://internationalsos.testrail.net/index.php?/cases/view/8935143) | Vaccination | UI candidate | - | Not implemented / not executed |
| [C8935144](https://internationalsos.testrail.net/index.php?/cases/view/8935144) | Vaccination | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935148](https://internationalsos.testrail.net/index.php?/cases/view/8935148) | Vaccination | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935150](https://internationalsos.testrail.net/index.php?/cases/view/8935150) | Medical History | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935205](https://internationalsos.testrail.net/index.php?/cases/view/8935205) | Vaccination Reminder | UI candidate | - | Not implemented / not executed |
| [C8935206](https://internationalsos.testrail.net/index.php?/cases/view/8935206) | Vaccination Reminder | UI candidate | - | Not implemented / not executed |
| [C8935207](https://internationalsos.testrail.net/index.php?/cases/view/8935207) | Vaccination Reminder | UI candidate | - | Not implemented / not executed |
| [C8935208](https://internationalsos.testrail.net/index.php?/cases/view/8935208) | Vaccination Reminder | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935209](https://internationalsos.testrail.net/index.php?/cases/view/8935209) | Vaccination Reminder | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935210](https://internationalsos.testrail.net/index.php?/cases/view/8935210) | Code Description | UI candidate | - | Not implemented / not executed |
| [C8935211](https://internationalsos.testrail.net/index.php?/cases/view/8935211) | Code Description | UI candidate | - | Not implemented / not executed |
| [C8935212](https://internationalsos.testrail.net/index.php?/cases/view/8935212) | Code Description | UI candidate | - | Not implemented / not executed |
| [C8935213](https://internationalsos.testrail.net/index.php?/cases/view/8935213) | Code Description | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935214](https://internationalsos.testrail.net/index.php?/cases/view/8935214) | Code Description | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935215](https://internationalsos.testrail.net/index.php?/cases/view/8935215) | Encryption Utility | UI candidate | - | Not implemented / not executed |
| [C8935228](https://internationalsos.testrail.net/index.php?/cases/view/8935228) | Encryption Utility | UI candidate | - | Not implemented / not executed |
| [C8935237](https://internationalsos.testrail.net/index.php?/cases/view/8935237) | Encryption Utility | UI candidate | - | Not implemented / not executed |
| [C8935245](https://internationalsos.testrail.net/index.php?/cases/view/8935245) | Send Welcome Email | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8935246](https://internationalsos.testrail.net/index.php?/cases/view/8935246) | Send Welcome Email | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8935270](https://internationalsos.testrail.net/index.php?/cases/view/8935270) | Send Welcome Email | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8935271](https://internationalsos.testrail.net/index.php?/cases/view/8935271) | Upload | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935272](https://internationalsos.testrail.net/index.php?/cases/view/8935272) | Upload | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935273](https://internationalsos.testrail.net/index.php?/cases/view/8935273) | Upload | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935274](https://internationalsos.testrail.net/index.php?/cases/view/8935274) | Upload | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935282](https://internationalsos.testrail.net/index.php?/cases/view/8935282) | Maintenance | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935283](https://internationalsos.testrail.net/index.php?/cases/view/8935283) | Maintenance | UI candidate | - | Not implemented / not executed |
| [C8935284](https://internationalsos.testrail.net/index.php?/cases/view/8935284) | Error Logs | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935287](https://internationalsos.testrail.net/index.php?/cases/view/8935287) | Error Logs | UI candidate | - | Not implemented / not executed |
| [C8935288](https://internationalsos.testrail.net/index.php?/cases/view/8935288) | Error Logs | Needs clarification | - | Not implemented / not executed |
| [C8935289](https://internationalsos.testrail.net/index.php?/cases/view/8935289) | Error Logs | Needs clarification | - | Not implemented / not executed |
| [C8935290](https://internationalsos.testrail.net/index.php?/cases/view/8935290) | Error Logs | UI candidate | - | Not implemented / not executed |
| [C8935291](https://internationalsos.testrail.net/index.php?/cases/view/8935291) | Unlock User | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935292](https://internationalsos.testrail.net/index.php?/cases/view/8935292) | Search COVID-19 Vaccination | UI candidate | tests/searchVaccination.spec.ts | Passed - Chromium |
| [C8935293](https://internationalsos.testrail.net/index.php?/cases/view/8935293) | Search COVID-19 Vaccination | UI candidate | tests/searchVaccination.spec.ts | Passed - Chromium |
| [C8935483](https://internationalsos.testrail.net/index.php?/cases/view/8935483) | ISOS Admin | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8935484](https://internationalsos.testrail.net/index.php?/cases/view/8935484) | ISOS User | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C8935485](https://internationalsos.testrail.net/index.php?/cases/view/8935485) | Chief Recruiter | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935486](https://internationalsos.testrail.net/index.php?/cases/view/8935486) | Recruiter | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935487](https://internationalsos.testrail.net/index.php?/cases/view/8935487) | ISOS Reviewer | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935488](https://internationalsos.testrail.net/index.php?/cases/view/8935488) | Client Reviewer | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935490](https://internationalsos.testrail.net/index.php?/cases/view/8935490) | Partner | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C8935491](https://internationalsos.testrail.net/index.php?/cases/view/8935491) | Send Welcome Email | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9031928](https://internationalsos.testrail.net/index.php?/cases/view/9031928) | Login Page | UI candidate | - | Not implemented / not executed |
| [C9216981](https://internationalsos.testrail.net/index.php?/cases/view/9216981) | Login Page | UI candidate | - | Not implemented / not executed |
| [C9216982](https://internationalsos.testrail.net/index.php?/cases/view/9216982) | Login Page | UI candidate | - | Not implemented / not executed |
| [C9216983](https://internationalsos.testrail.net/index.php?/cases/view/9216983) | Login Page | UI candidate | - | Not implemented / not executed |
| [C9216984](https://internationalsos.testrail.net/index.php?/cases/view/9216984) | Login Page | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9216985](https://internationalsos.testrail.net/index.php?/cases/view/9216985) | Login Page | UI candidate | - | Not implemented / not executed |
| [C9216991](https://internationalsos.testrail.net/index.php?/cases/view/9216991) | My Dashboard | UI candidate | - | Not implemented / not executed |
| [C9217324](https://internationalsos.testrail.net/index.php?/cases/view/9217324) | My Profile | UI candidate | - | Not implemented / not executed |
| [C9217325](https://internationalsos.testrail.net/index.php?/cases/view/9217325) | My Profile | UI candidate | - | Not implemented / not executed |
| [C9217326](https://internationalsos.testrail.net/index.php?/cases/view/9217326) | My Exam Tracker | UI candidate | - | Not implemented / not executed |
| [C9217327](https://internationalsos.testrail.net/index.php?/cases/view/9217327) | My Documetns | UI candidate | - | Not implemented / not executed |
| [C9217328](https://internationalsos.testrail.net/index.php?/cases/view/9217328) | My Vaccinations | UI candidate | - | Not implemented / not executed |
| [C9217329](https://internationalsos.testrail.net/index.php?/cases/view/9217329) | Create My Exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9217330](https://internationalsos.testrail.net/index.php?/cases/view/9217330) | My Information | UI candidate | - | Not implemented / not executed |
| [C9217998](https://internationalsos.testrail.net/index.php?/cases/view/9217998) | Definitions | UI candidate | - | Not implemented / not executed |
| [C9278154](https://internationalsos.testrail.net/index.php?/cases/view/9278154) | Logout | UI candidate | - | Not implemented / not executed |
| [C9278155](https://internationalsos.testrail.net/index.php?/cases/view/9278155) | Forgot Password? | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C9278156](https://internationalsos.testrail.net/index.php?/cases/view/9278156) | Register Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9404079](https://internationalsos.testrail.net/index.php?/cases/view/9404079) | Password length | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9404080](https://internationalsos.testrail.net/index.php?/cases/view/9404080) | Password length | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9404081](https://internationalsos.testrail.net/index.php?/cases/view/9404081) | Password length | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9404214](https://internationalsos.testrail.net/index.php?/cases/view/9404214) | SLB employee cannot create exam | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9404218](https://internationalsos.testrail.net/index.php?/cases/view/9404218) | New column added in search screen result page for all the employees | UI candidate | tests/searchEmployee.spec.ts | Passed - Chromium |
| [C9405408](https://internationalsos.testrail.net/index.php?/cases/view/9405408) | Data is moved to the Archives DB when an employee's status has been inactive for 2 years | Backend/data candidate - clarify access and expected evidence | - | Not implemented / not executed |
| [C9405409](https://internationalsos.testrail.net/index.php?/cases/view/9405409) | Data is moved to the Archives DB when an employee's status has been inactive for 2 years | Backend/data candidate - clarify access and expected evidence | - | Not implemented / not executed |
| [C9405412](https://internationalsos.testrail.net/index.php?/cases/view/9405412) | Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years | Backend/data candidate - clarify access and expected evidence | - | Not implemented / not executed |
| [C9405413](https://internationalsos.testrail.net/index.php?/cases/view/9405413) | Data is moved to the Anonymized DB when an employee's status has been inactive for 28 years | Backend/data candidate - clarify access and expected evidence | - | Not implemented / not executed |
| [C9428818](https://internationalsos.testrail.net/index.php?/cases/view/9428818) | ERAMET - Setup new METs and switch between fuller and lighter METs | UI candidate | - | Not implemented / not executed |
| [C9428819](https://internationalsos.testrail.net/index.php?/cases/view/9428819) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9428821](https://internationalsos.testrail.net/index.php?/cases/view/9428821) | ERAMET - Setup new METs and switch between fuller and lighter METs | UI candidate | - | Not implemented / not executed |
| [C9428822](https://internationalsos.testrail.net/index.php?/cases/view/9428822) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9428823](https://internationalsos.testrail.net/index.php?/cases/view/9428823) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9428824](https://internationalsos.testrail.net/index.php?/cases/view/9428824) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9428825](https://internationalsos.testrail.net/index.php?/cases/view/9428825) | ERAMET - Setup new METs and switch between fuller and lighter METs | UI candidate | - | Not implemented / not executed |
| [C9428826](https://internationalsos.testrail.net/index.php?/cases/view/9428826) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9428827](https://internationalsos.testrail.net/index.php?/cases/view/9428827) | ERAMET - Setup new METs and switch between fuller and lighter METs | Manual review - interface or expected result unclear | - | Not implemented / not executed |
| [C9430379](https://internationalsos.testrail.net/index.php?/cases/view/9430379) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430380](https://internationalsos.testrail.net/index.php?/cases/view/9430380) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430381](https://internationalsos.testrail.net/index.php?/cases/view/9430381) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430382](https://internationalsos.testrail.net/index.php?/cases/view/9430382) | COVID-19 Content Removal | UI candidate | - | Not implemented / not executed |
| [C9430383](https://internationalsos.testrail.net/index.php?/cases/view/9430383) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430384](https://internationalsos.testrail.net/index.php?/cases/view/9430384) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430385](https://internationalsos.testrail.net/index.php?/cases/view/9430385) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430386](https://internationalsos.testrail.net/index.php?/cases/view/9430386) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430387](https://internationalsos.testrail.net/index.php?/cases/view/9430387) | COVID-19 Content Removal | UI candidate - external notification side effect | - | Not implemented / not executed |
| [C9430419](https://internationalsos.testrail.net/index.php?/cases/view/9430419) | Password length | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9430421](https://internationalsos.testrail.net/index.php?/cases/view/9430421) | Password length | UI candidate | - | Not implemented / not executed |
| [C9430422](https://internationalsos.testrail.net/index.php?/cases/view/9430422) | Password length | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C9430423](https://internationalsos.testrail.net/index.php?/cases/view/9430423) | Password length | UI candidate | - | Not implemented / not executed |
| [C9430424](https://internationalsos.testrail.net/index.php?/cases/view/9430424) | Password length | UI candidate | - | Not implemented / not executed |
| [C15237380](https://internationalsos.testrail.net/index.php?/cases/view/15237380) | Search COVID-19 Vaccination | UI candidate | tests/searchVaccination.spec.ts | Passed - Chromium |
| [C15239052](https://internationalsos.testrail.net/index.php?/cases/view/15239052) | Search employee | UI candidate | tests/searchEmployee.spec.ts | Passed - Chromium |
| [C15239053](https://internationalsos.testrail.net/index.php?/cases/view/15239053) | Header Links | UI candidate - clarify missing case details | tests/navigation.spec.ts | Passed - Chromium |
| [C15239309](https://internationalsos.testrail.net/index.php?/cases/view/15239309) | Search employee | UI candidate - clarify missing case details | tests/searchEmployee.spec.ts | Passed - Chromium |
| [C15239310](https://internationalsos.testrail.net/index.php?/cases/view/15239310) | Header Links | UI candidate - clarify missing case details | tests/navigation.spec.ts | Passed - Chromium |
| [C15239311](https://internationalsos.testrail.net/index.php?/cases/view/15239311) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239312](https://internationalsos.testrail.net/index.php?/cases/view/15239312) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239313](https://internationalsos.testrail.net/index.php?/cases/view/15239313) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239314](https://internationalsos.testrail.net/index.php?/cases/view/15239314) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239315](https://internationalsos.testrail.net/index.php?/cases/view/15239315) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239316](https://internationalsos.testrail.net/index.php?/cases/view/15239316) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239317](https://internationalsos.testrail.net/index.php?/cases/view/15239317) | Change Password | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239318](https://internationalsos.testrail.net/index.php?/cases/view/15239318) | Footer Links | UI candidate | - | Not implemented / not executed |
| [C15239319](https://internationalsos.testrail.net/index.php?/cases/view/15239319) | Footer Links | UI candidate | - | Not implemented / not executed |
| [C15239320](https://internationalsos.testrail.net/index.php?/cases/view/15239320) | Footer Links | UI candidate | - | Not implemented / not executed |
| [C15239321](https://internationalsos.testrail.net/index.php?/cases/view/15239321) | My Details | UI candidate | - | Not implemented / not executed |
| [C15239322](https://internationalsos.testrail.net/index.php?/cases/view/15239322) | My Details | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239323](https://internationalsos.testrail.net/index.php?/cases/view/15239323) | My Details | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C15239324](https://internationalsos.testrail.net/index.php?/cases/view/15239324) | My Details | UI candidate - clarify missing case details | - | Not implemented / not executed |
| [C15239580](https://internationalsos.testrail.net/index.php?/cases/view/15239580) | My Details | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239581](https://internationalsos.testrail.net/index.php?/cases/view/15239581) | My Details | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
| [C15239582](https://internationalsos.testrail.net/index.php?/cases/view/15239582) | My Details | UI candidate | - | Not implemented / not executed |
| [C15239583](https://internationalsos.testrail.net/index.php?/cases/view/15239583) | Create New Employee | UI candidate - state-changing; isolate data and clean up | - | Not implemented / not executed |
