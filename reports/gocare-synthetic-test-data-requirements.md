# GoCare synthetic test data requirements

**Final documentation checkpoint · 26 November 2026**

All 307 TestRail cases now have dedicated inputs or deterministic fixture retrieval. The repository also contains eleven reusable case datasets, including two parameterized catalog groups. Exact person-linked keys, role grants and output sinks still require approved provisioning. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

All 193 partial and blocked cases received case-specific fixture design. The three colliding-GIN references were replaced with safe, owner-approved fixture references. 101 previously empty native Test Data fields now have scoped inputs. Ten unresolved requirement cases retain blank native fields while their oracle or access is open. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

The five cases use deterministic local text and dates, explicit observed dropdown values and the approved read-only MY COMPANY context where applicable. Exact inputs or fixture-free paths are identified for 71 cases. Existing synthetic-record and UAT permission dependencies remain. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

C15290403 requires an authorized UAT role and local draft selections only. Exact input or a fixture-free path is mapped for 66 cases. Create Employee and protected search fixtures remain deferred. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

The centralized data contract and per-case mapping identify 65 exact-data or fixture-free cases, 17 verified branches requiring input review, and 205 with remaining data or permission dependencies. The new Reset case needs only two generated dates. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Web scope covers **286 cases across 110 TestRail sections**. Reports / Reporting, native mobile including iOS, and Archival Activity with its four descendants are excluded. GoCare web Mobile Configuration remains in scope.

Each of the 95 currently blocked cases is assigned to one primary fixture family. Counts show the number of cases the family supports once all named prerequisites and operation authorizations are in place. Related families can share synthetic records. For example, reviewer and notification workflows reuse the synthetic employee, exam and company.

## Provision the reusable core first

Start with one approved existing company with scoped access to seeded synthetic records. Reuse one Active employee for profile, exam and vaccination workflows. Request state-specific records, disposable accounts, an isolated mail sink or maintenance access only as their cases require them. A standalone company remains a separate dependency for Company creation coverage.

| Primary fixture family | Related modules | Blocked cases covered | TestRail IDs |
| --- | --- | --- | --- |
| Disposable web accounts | Login, recovery, Change Password, My Details and Unlock User | 28 | C15239053, C15239321, C15239322, C15239580, C15239581, C15239312, C15239313, C15239314, C15239315, C15239316, C8935291, C8934306, C8934307, C8928019, C8928020, C8928023, C8928026, C8928027, C8928028, C8934316, C9404079, C9404080, C9404081, C9430419, C9430421, C9430422, C9430423, C9430424 |
| Synthetic employee profiles | Employee, employee search and profile | 12 | C8927857, C9404218, C15239582, C8927852, C8928138, C8928137, C8932676, C8927385, C8932729, C8928136, C8934323, C8934326 |
| Employee-linked clinical records | Employee exams and Administration | 17 | C8927855, C8927856, C8934317, C8927386, C8932730, C8927533, C8932732, C8927534, C8932734, C8932739, C8932744, C8934318, C8934319, C8934320, C8934321, C8927485, C8932731 |
| Isolated message and notification sink | MD-804 and Employee notification workflows | 12 | C8934322, C8934324, C8934325, C9430379, C9430380, C9430381, C9430382, C9430383, C9430384, C9430385, C9430386, C9430387 |
| ERAMET synthetic configuration | ERAMET MET configuration | 9 | C9428818, C9428819, C9428821, C9428822, C9428823, C9428824, C9428825, C9428826, C9428827 |
| Role entitlement accounts | Application User and restricted exam access | 8 | C9404214, C8935483, C8935484, C8935485, C8935486, C8935487, C8935488, C8935490 |
| Sanitized logs and disposable services | Maintenance and Error Logs | 5 | C8935282, C8935283, C8935284, C8935287, C8935290 |
| Isolated company configuration | System Configuration / Company | 3 | C8934359, C8934361, C8934362 |
| Synthetic document and output scope | Reminders and Documents / Download | 1 | C8933427 |

## Synthetic employee profiles

| Requirement | Fixture specification |
| --- | --- |
| Module | Employee, employee search and profile |
| Mandatory data and record dependencies | Synthetic first and last names, unique GIN or Applicant ID, date of birth, Employee Status and an approved Owner Company. Supply a known certificate expiry, synthetic dependents and a synthetic dashboard summary where the case needs them. |
| Required state | One Active employee, one Inactive employee, one Pre-employee and one guaranteed absent identifier. A separate disposable clone is required for Delete. |
| Configuration, role and prerequisites | Saved-role access to synthetic-only employee scope, approved company and optional dependent/category/location values. For creation, use observed required Title, Gender, Primary Email and Relation in addition to identity/status fields. |
| Operations | Search, view Details/Dashboard/Dependents and open Edit or Quit. Create and Delete only in the separately authorized test scope. |
| Data changes and cleanup | Read-only paths preserve records. The fixture owner provisions and removes disposable create/delete variants under approved cleanup. |
| Primary blocked cases covered | 12 |

## Employee-linked clinical records

| Requirement | Fixture specification |
| --- | --- |
| Module | Employee exams and Administration |
| Mandatory data and record dependencies | Link synthetic exam ID, employee GIN or Applicant ID, approved Medical Center and exam type/MET. Supply an in-window expiry or review date and an intentionally empty date range. |
| Required state | One employee with no exam, one Processing exam, and one completed or reviewed exam. Include a company/employee variant without an eligible MET for the dummy-exam rejection case. Add a synthetic document or reminder and a second fixture without that related record. |
| Configuration, role and prerequisites | Reuse the synthetic employee company and identity. Require approved reviewer access where the case depends on reviewed results and an approved company/exam-type/center mapping. |
| Operations | View exam, inspect Administration and absence checks. Create dummy exams, Submit, change exam state and delete only in authorized isolated scope. |
| Data changes and cleanup | View and absence checks can be read-only. Use separate clone records for destructive operations, then dispose of or restore them under fixture-owner control. |
| Primary blocked cases covered | 17 |

## Disposable web accounts

| Requirement | Fixture specification |
| --- | --- |
| Module | Login, recovery, Change Password, My Details and Unlock User |
| Mandatory data and record dependencies | Disposable synthetic username, secret-channel credential, associated synthetic profile/company, approved email sink, and approved policy/verification flow. Registration also needs the requested synthetic applicant or doctor/center identity. |
| Required state | Enabled and locked/inactive variants, a guaranteed absent username, plus a dedicated password-change account. Isolate password policy configuration from routine users. |
| Configuration, role and prerequisites | Assign only permissions needed for the target case. Use scoped authorization for self-profile edits, lock/unlock, registration, recovery delivery and password change. |
| Operations | Safe navigation and field inspection first. Login validation, recovery email, profile update, unlock and password changes require their stated permissions. |
| Data changes and cleanup | Restore the approved pre-test account or policy state under the owner. Remove disposable registration accounts and sink messages through the fixture lifecycle. |
| Primary blocked cases covered | 28 |

## Role entitlement accounts

| Requirement | Fixture specification |
| --- | --- |
| Module | Application User and restricted exam access |
| Mandatory data and record dependencies | Disposable synthetic account for each permission case, role name and approved entitlement matrix. Include linked synthetic employee or exam when the permission case needs it. |
| Required state | Enabled accounts for ISOS Admin, ISOS User, Chief Recruiter, Recruiter, ISOS Reviewer, Client Reviewer and Partner as applicable. Confirm the restricted SLB role named by C9404214. |
| Configuration, role and prerequisites | Use securely provisioned role-specific sessions and a shared synthetic-only company scope. Reuse the same synthetic records where entitlements permit. |
| Operations | Observe authorized/restricted menu and page visibility and any expected read-only denial. |
| Data changes and cleanup | Sign out of the disposable sessions and revoke access through the fixture owner. Role checks require no business-record change. |
| Primary blocked cases covered | 8 |

## Isolated company configuration

| Requirement | Fixture specification |
| --- | --- |
| Module | System Configuration / Company |
| Mandatory data and record dependencies | Provide approved isolated Owner Company and unique synthetic company/master entries, a known duplicate, an archived/inactive variant and an approved search miss. Provide mandatory configuration fields from the approved template. |
| Required state | Active and inactive entries plus a disposable editable clone. |
| Configuration, role and prerequisites | Use a role with the documented configuration menu and explicit write permission for changes. Shared lookup configuration must use the fixture tenant. |
| Operations | Search, filter and inspect fields. Create, edit and validate potentially persistent Submit actions only with explicit approval. |
| Data changes and cleanup | Restore the company configuration snapshot or remove disposable entries through the fixture owner. |
| Primary blocked cases covered | 3 |

## Sanitized logs and disposable services

| Requirement | Fixture specification |
| --- | --- |
| Module | Maintenance and Error Logs |
| Mandatory data and record dependencies | Sanitized synthetic logs with known type/date and empty-range scenarios. Provide one disposable service with approved expected state and a permitted test host. |
| Required state | Configured service with known status. Seed visible logs and a range that returns none. |
| Configuration, role and prerequisites | Role with Maintenance / Error Logs access. For service operations, request the role whose controls and service are explicitly approved. |
| Operations | Read filters and status where exposed. Log download and service changes need explicit scope. |
| Data changes and cleanup | Maintain a known service baseline and restore it under the owner. Dispose of sanitized artifacts through the agreed retention process. |
| Primary blocked cases covered | 5 |

## Isolated message and notification sink

| Requirement | Fixture specification |
| --- | --- |
| Module | MD-804 and Employee notification workflows |
| Mandatory data and record dependencies | A sink inbox, synthetic recipient profile and event fixtures for Welcome Email, LTA, reminders, account enablement and HVP. Include documented role/status variants and expected template reference. |
| Required state | Eligible recipients and the HCC/HCR variants with the expected exclusion. Use known prior-notification and no-prior-notification states. |
| Configuration, role and prerequisites | Reuse synthetic employee and exam fixtures. Configure all sends to the approved sink and authorize triggering from the saved role or a permitted notification role. |
| Operations | Generate or resend only when authorized in the sink. Check dynamic fields and content against existing expectations. |
| Data changes and cleanup | Clear sink messages and restore event states. No workflow may route to a real address. |
| Primary blocked cases covered | 12 |

## Synthetic document and output scope

| Requirement | Fixture specification |
| --- | --- |
| Module | Reminders and Documents / Download |
| Mandatory data and record dependencies | Synthetic generated document, safe test log, linked synthetic employee/exam and expected artifact name or schema. |
| Required state | Processed downloadable item and fixture for the expected error path. |
| Configuration, role and prerequisites | Approved scoped generation queue or seeded job, download role and approved artifact handling. Reuse employee and exam fixtures. |
| Operations | Observe queue controls. Download an approved synthetic artifact only with scoped authorization. |
| Data changes and cleanup | Remove local artifacts according to approved handling. Source data remains intact unless separately authorized. |
| Primary blocked cases covered | 1 |

## ERAMET synthetic configuration

| Requirement | Fixture specification |
| --- | --- |
| Module | ERAMET MET configuration |
| Mandatory data and record dependencies | Approved synthetic ERAMET company, linked N1/N2 and Global METs, eligible synthetic employees, exam status and documented assignment rule. |
| Required state | No-exam and Active exam variants. Prepare synthetic age below and above 45 and approved gender variants for the named scenarios. Confirm treatment of exactly 45. Provide 2-year and 4-year validity fixtures. |
| Configuration, role and prerequisites | Use a configured ERAMET-only synthetic company with explicit access to Company MET and Global MET. Confirm role and named Haute Altitude/Zone Impaludée rules. |
| Operations | Inspect shared MET controls, then verify assignments and N1/N2 switching only in the approved fixture scope. |
| Data changes and cleanup | Snapshot and restore synthetic MET mapping and exam states. Use explicit approval for configuration writes. |
| Primary blocked cases covered | 9 |

## Reuse for partially verified cases

The same synthetic company and employee can support Vaccination Search with a synthetic vaccination and known matching or absent filters, Reviewed Exams with approved synthetic reviewer dates, and authorized output checks outside the Reporting module. Import File requires an approved supported synthetic workbook, a deliberately invalid filename variant under the documented naming rule, and explicit authorization before Import. These cases are already assigned independent partial dispositions and do not increase the 97-case fixture total.

Provisioning needs include the tenant, fixture owner, synthetic-only access and authorization by operation. Supply fixture identifiers through the agreed secure channel. [TestRail case register and update audit](gocare-testrail-review-report.md)

## Consolidated fixture setup proposal for approval

**Proposed dedicated company:** GoCare QA Atlas. **Disposable company:** GoCare QA Atlas Scratch. **ERAMET-specific company or approved equivalent isolated mapping:** GoCare QA Atlas ERAMET. The fixture plan is a proposal. The saved web session establishes access for observed workflows. The user confirmed the GoCare host as UAT. The owner still needs to confirm the synthetic company boundary and notification isolation.

The repository employee-search fixture has a synthetic label but lacks seed approval. The employee-create defaults and the random generator supply candidate values rather than tenant-backed fixtures. The repository creation workflow uses a deliverable mailbox and can persist records. This plan uses deterministic synthetic identifiers and non-deliverable email placeholders. Replace them with authorized sink addresses only during approved provisioning. [Existing test data audit](test-data-audit.md)

### Proposed records and required values

| Provisioning stage | Proposed records | Mandatory inputs, states and dependencies |
| --- | --- | --- |
| 1. Isolation and configuration | GoCare QA Atlas, GoCare QA Atlas Scratch, QA Atlas Area, Site, Market, Category, Clinic and Exam | Confirm non-production owner and company boundary, active and inactive states, permitted company fields and lookup IDs, and synthetic-only search scope. Verify the accepted mandatory company form values before any write. Keep GoCare QA Atlas Candidate absent for C8934359. |
| 2. Account isolation | Atlas QA reader, locked, password, recovery and team accounts | Confirm allowed username format, synthetic First Name and Last Name, Title, Gender, Primary Email, approved company and role. Start with enabled, locked and dedicated password-change variants. Provide credentials through secure provisioning. Keep the Team Candidate and guaranteed absent username absent for their scenarios. Configure the isolated sink and prevent ordinary outbound delivery before connecting accounts. |
| 3. Role variants | Atlas QA ISOS Admin, ISOS User, Chief Recruiter, Recruiter, ISOS Reviewer, Client Reviewer and Partner | Provide only the roles authorized for the target cases. Confirm saved-role privileges, the exact restricted SLB role for C9404214 and service-owner privileges separately. Reuse the same synthetic company and records across roles where entitlements permit. |
| 4. Employees and team membership | Atlas QA Aster, Birch, Cedar, Dune, Elm, Fir, Grove, Hazel and Linden | Known employee form inputs are Employee Status, Title, First Name, Last Name, Gender, DOB, Company and GIN. The form also exposes required validators for Primary Email and Relation. Use proposed Mr, Single and Employee selections where supported. Reserve approved IDs before use and confirm Applicant ID behavior for Hazel. Use Aster without an exam, Birch for Processing, Cedar for Reviewed/vaccination, Dune for Inactive, Elm for Delete, Fir without an eligible MET, Grove for destructive exam checks and Linden for a separate Active exam. Keep Atlas QA Larch absent for C8927852. |
| 5. Clinical and vaccination | Atlas QA Processing Exam, Active Exam, Reviewed Exam, Disposable Exam and Vaccination | Seed the exam records only after the parent employee, company, MET and clinic exist. Confirm status labels, medical center requirement, mandatory exam inputs and reviewer role. Seed the synthetic vaccination against Cedar with tenant-approved vaccine and brand values. Confirm any required dose/status fields, linked GIN or Applicant ID and date windows before execution. Keep guaranteed absent criteria outside the provisioned data. |
| 6. Conditional extensions | Atlas QA ERAMET N1 and N2, Atlas QA Notification Events, Reminder Document and Disposable Service | Confirm Full exam vs Light exam mapping, 2/4-year variants and the age-45 rule. Seed only the authorized event recipients and sink. Use sanitized artifacts and an isolated service with a known baseline. These extensions can follow core read-only verification. |

Exact candidate values, proposed identifiers, dates, dependency order and the 97 primary TestRail IDs are in [the local fixture definitions](../testdata/gocare-synthetic-fixtures.json). Generate the local proposal with [the fixture preparation script](../scripts/prepare-gocare-fixtures.cjs).

~~~powershell
node scripts/prepare-gocare-fixtures.cjs
~~~

The generator validates the nine-family case mapping, unique fixture identifiers, dependency order and reserved-absent candidates. It emits JSON locally. Its 36 ordered entries include prerequisites and grouped fixture definitions. Three create candidates are held absent until their own case. Date examples use the 25 November 2026 anchor. Confirm dates and age variants against the planned execution date before provisioning.

The UAT and qualifying synthetic-create authorization are current. The open decisions below identify the exact missing values and evidence.

## Revised UAT provisioning gate

The user approved qualifying synthetic creates. Use QA_ATLAS_ where field validation accepts it. Confirm the approved synthetic Owner Company or standalone company path, Access Rights, Association, required duration and reminder values, and the isolated sink or verified no-delivery settings. UAT Add Company and its blank client validation are verified. The Atlas name lookup returned no matching company with active-only off. Candidate company creation remains pending the approved values. Leave new and existing records intact unless separate authorization permits cleanup. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Create Company provisioning decisions

The Owner Company selector defaults to Select Company and offers eight existing-company entries. No standalone option is visible. Its required validator accepts the blank placeholder on the client because the selected sentinel 0 differs from its empty initial-value setting. The server-side owner rule and effects of a successful Submit remain unverified. The Access Rights and Local Doctor Association selects have no usable default. Three exam/data-capture durations and two reminder-day fields are required and start empty. The integer client validators allow -10000 through 100000. The observed bounds do not establish business-safe values. HR notification, client reviewer email, latest reminder loop, vaccination reminder and due-date reminder controls are unchecked on the blank form. Active Company is checked. A completed Submit was not exercised, so delivery, queueing and inheritance remain unknown. The approved candidate GoCare QA Atlas passes the local name validator. QA_ATLAS_Company fails with “Please enter a valid Company Name.”

| Exact screen and field | Selectable options or input limits | Mandatory | Application default | Recommended value and justification | Specific approval or evidence needed | Cases supported |
| --- | --- | --- | --- | --- | --- | --- |
| Create Company / Owner Company | Select Company, bp International Limited, Eramet, International SOS, Kinross, MY COMPANY, Richemont, SBM International Personnel Services SA, Schlumberger | Required validator present. The blank placeholder passes that validator. Server rule unverified. | Select Company | Keep blank for an explicitly verified standalone path. Otherwise use an approved synthetic owner. | Existing company association needs explicit approval. Standalone creation and its effects are unresolved. | C8934359, C8934361 and dependent Atlas cases |
| Create Company / Access Rights | Select, Online, Offline, Read only | Yes | Select | Read only is a candidate for a read-only fixture if the owner confirms it meets the intended role and scope. Use the approved least-privilege mode for provisioning. | The option labels alone do not establish permissions or which mode supports safe synthetic creation. | C8934359, C8934361, C8927852, C8928068 |
| Create Company / Local Doctor Association | Select Association, Area, Assignment Country, Gender, GeoMarket, JobSite, Status | Yes | Select Association | Use the approved Atlas-specific association dimension and mapping. | The choice can affect doctor matching and exam routing. | C8934359, C8927855, C8927856 |
| Create Company / Pre Employee (Days), Employee (Days), Doctor/Medical Center Data Capture Duration (Days) | Integer fields. Client limits -10000 to 100000. | Yes, all three | Blank | Use approved business-valid UAT values for the three durations. | No usable defaults or verified business values. | C8934359, C8927855, C8934319 |
| Create Company / Data Capture Reminder (Days), Appointment Reminder (Days) | Integer fields. Client limits -10000 to 100000. | Yes, both | Blank | Use the approved no-delivery values with independently verified isolation. | A numeric day value does not establish disabled scheduling. | C8934359 and dependent exam/reminder cases |
| Create Company / employee and pre-employee reminder rows | Employee LTA, Reminder 1, Reminder 2, Reminder 3. Pre-employee LTA. Both have a day field. | Required only in separate reminder-row validation groups | Select Arrangement Type and blank days | Leave both rows untouched for the initial company create. | No row addition is needed for the candidate. Later reminder behavior requires isolated routing. | C8934359 and MD-804 notification cases when separately scoped |
| Create Company / Complete Postal Address 1, City, Country, Postal Code, Phone | Free text for address, city, postal code and phone. Country shows Select Country plus 250 displayed entries, including duplicate labels. | Yes | Blank. Country starts at Select Country. | Use the approved synthetic location and contact values for the test locale. | Confirm the locale and any accepted phone format so placeholder values remain valid and isolated. | C8934359 and dependent company/account fixtures |
| Create Company / notification controls and E-mail Address | HR notification, reviewer email, reminder loop, vaccination and due-date reminder checkboxes. Optional E-mail Address. | No required validators observed for these controls | All five switches off. E-mail blank. | Keep switches off. Confirm a no-delivery tenant setting or approved sink for the completed form. | A successful create may still inherit or queue messages. The blank form cannot establish server delivery behavior. | C8934359, C8928068, C8927852, C8927855 and dependent Atlas cases |

Company creation stays on hold pending those decisions. The final name and identifier uniqueness checks follow once the safe inputs are established. No general approval is needed again. [Synthetic record registry](gocare-synthetic-record-registry.md)

## Approved existing company fixture path

Preferred path is one approved existing company, one Active synthetic employee with a reviewed exam and known certificate expiry plus a linked vaccination, and a seeded team-member account only when needed. Add a no-exam employee for absence checks and a Processing exam only for the state-specific cases. A positive Create case needs its own absent candidate. Request the exact company name and ID, allowed role and scopes, existing clinical lookups and proof of no outbound delivery before any eligible creation. The standalone Atlas setup and nine-family counts above remain reference evidence. See the workflow completion matrix for case-level dependencies.

| Input | Exact information to supply |
| --- | --- |
| Existing company and access | Display name, GoCare company ID, explicit permission to use it for synthetic-only workflows, and the permitted role. Identify which areas and operations are authorized. |
| Seeded Active employee | First Name, Last Name, synthetic DOB and exact GIN. For a new candidate provide Employee Status, Title, Gender, Relation, approved Primary Email address, and a reserved unused GIN. |
| Seeded exam and vaccination | For the same employee provide reviewed exam ID, type/MET, Medical Center and expiry date, plus vaccination date, name and brand and dose or status if available. |
| Team-member search or creation | For reuse provide the synthetic search identifier and existing role and company scope. For a distinct create candidate provide approved role, title, names, gender and Primary Email, and intended username or Owner Company if the selected role requires them. |
| Outbound effects and clinical writes | A verified no-outbound UAT rule or isolated sink for each creation path. Supply enabled clinical lookups and confirm whether adding a new child record writes to the parent employee or exam. |

## MY COMPANY fixture authorization and Employee Create validation

MY COMPANY is authorized for controlled synthetic creation in UAT. The Create New Employee company selector verified its ID as 129. The first candidate is Active, Mr Aster QAfixture, Male, 12-Feb-1982, Relation Employee. GIN and Primary Email remain unset. Obtain a test GIN or approved range and an approved isolated address with verified no-outbound handling for Create Employee. Run an exact uniqueness check before submitting. Do not create dependent records until parent-record and notification behavior is established. The local generator lists one candidate in the current creation sequence and keeps earlier plans as references.

## MY COMPANY employee identifier preflight

Aster QAfixture candidate GIN 97101 follows the repository convention of five digits beginning with 9. It matched the Create Employee client format validator. The input limit is 30 characters and the client rule is broader than the five-digit convention. An exact search in MY COMPANY (129) with employee status unfiltered returned the explicit no-results message. This proves absence in the queried scope at the time of the check. Repeat the check before Submit and confirm wider uniqueness if required. The user approved the specific Primary Email for Aster QAfixture. Keep the address in the original approval. Create Employee remains on hold until no outbound email, notification or queueing is verified. No application record was created or changed.

## MY COMPANY collision and recipient preflight

The supplied GIN returned no match under MY COMPANY (129). With Company and Employee Status unfiltered, Search Employees returned one exact match in the GIN Number column. The checks recorded only the match outcome. No employee record was opened. Alternative 97101 returned no matches in both the earlier company-scoped check and the current role-visible directory check. It is pending approval and recheck. The user permits creation notifications to the supplied Primary Email. Existing UI, repository evidence and notification case descriptions did not establish whether Create Employee can send or queue messages to other recipients. Creation remains on hold pending confirmation of that recipient boundary and approval of an alternative GIN.

## Recipient verification and functional validation batch

GIN 97101 and use of the specified Primary Email are now explicitly approved for the first synthetic employee. Recheck uniqueness before Submit. The MY COMPANY details form (company 129) shows Client Reviewer email and Due Date Reminders enabled. HR notification, latest-reminder loop and Vaccination Reminder were unchecked. The authorized role could see no recipient allowlist or Create Employee recipient preview. The settings do not establish which recipients the server would use on creation. Hold Employee Create until that recipient boundary is verified.

## Configuration and reviewed-exam validation continuation

Reconciled the 120 earlier partial cases and all 95 blocked fixture IDs against the live inventory. No existing automation scripts were changed. No application records or settings were changed. Employee creation stayed deferred without a repeat recipient investigation. The existing Fit catalog definition was reused safely without employee data. Synthetic no-match names and unsaved draft names provided alternatives for validation branches.

| Shared dependency for blocked cases | Cases |
| --- | ---: |
| Disposable web accounts | 28 |
| Reusable synthetic employee and clinical records | 29 |
| Disposable company/ERAMET configuration | 12 |
| Isolated notification delivery and events | 12 |
| Scope-specific role accounts | 8 |
| Sanitized services, logs and document outputs | 6 |

## Company catalog filter follow-up

MY COMPANY lookup rows can serve as read-only setup for active and handled filters. The owner-specific absent and positive branches that lack a compatible approved owner remain pending.

## Catalog verification and status reconciliation

Reused MY COMPANY and existing Global MET, Client Reviewer, Fit with restrictions, Gender code, and Reminder Type1 catalog entries. No synthetic records were needed for these positive and negative checks. See the blocker matrix for the remaining inputs and permissions.

## Dependency priority and documentation handoff

Medical Center validation reused selectable country options and unsaved synthetic form values. No seeded employee, clinical, or center record was needed. The prioritized dependency groups and exact required inputs are in the [approval table](gocare-clarifications-and-defects.md#prioritized-approval-table).

## Minimum disposable account pack

No dedicated QA account was verified. Six exact proposed usernames returned no match in MY COMPANY with role, account status and lock filters at their defaults. The other two proposals, gocare.qa.atlas.isos-user and gocare.qa.atlas.client-reviewer, were rejected by local Username validation. This establishes the checked scope and names only. The repository definitions are proposals.

The recommended minimum pack is three web accounts plus one separate Drop Box credential and two preseeded unregistered identities. Reuse the enabled self-service account for positive login, profile and sequential password and recovery checks when separately authorized. A distinct ISOS Admin is needed only if no suitable isolated policy administrator is already available. Confirm permissions and status with the UAT owner before running any state-changing case. Send credentials and recovery answers only via the secure channel.

| Fixture or dependency | Proposed identifier | Company, role, permission and state | Affected IDs | Cases |
| --- | --- | --- | --- | ---: |
| Enabled self-service and profile account | gocare.qa.garnet.profile | MY COMPANY or approved isolated equivalent. Employee self-service role with sole access to its own synthetic profile and password form. Enabled, unlocked and registered. Known valid password and authorized verification-code flow. Synthetic profile/contact values and recovery answers are provisioned securely. Recovery requires an isolated recipient. Run later password transition scenarios serially only after specific authorization. | C15239053, C15239321, C15239322, C15239580, C15239312, C15239313, C15239314, C15239315, C15239316, C8928019, C8928020, C8928026, C9404080, C9404081, C9430419, C9430421, C9430422, C9430423, C9430424 | 19 |
| Prelocked target and separate operator | gocare.qa.garnet.locked and gocare.qa.garnet.operator | Target is an enabled, deliberately prelocked synthetic MY COMPANY account prepared by the owner. Operator has read access to Team Member Details and unlock permission restricted to this synthetic target, and normal authenticated access for navigation. Provide an unused synthetic username for the invalid target branch. Any unlock requires separate operation authorization. | C15239581, C8935291, C8934306, C8934307 | 4 |
| Guaranteed absent username | gocare.qa.garnet.absent | Reserve an absent, valid-format username and an approved verification-code workflow. This is a non-record fixture and does not require provisioning. Any interactive failed login is a separate test action. | C8928023 | 1 |
| Two unregistered synthetic identities | One employee or pre-employee and one provider or medical-center identity | For employee registration, provide seeded unregistered GIN or Applicant ID, synthetic DOB and International SOS ID. For provider registration, supply the approved public route and mandatory synthetic provider fields including a test-only email. Any account registration or outgoing mail requires explicitly allowed operations. | C8928027, C8928028 | 2 |
| Separate Drop Box credential | One authorized synthetic Drop Box login | Enabled, unlocked and scoped to an empty or fully synthetic Drop Box. Provide the supported login route and permitted synthetic credential. Keep downloads and report submission out of the login check. | C8934316 | 1 |
| Conditional policy administrator | Existing scoped ISOS Admin or a separate disposable account | The original case requires ISOS Admin and a 12-character policy write in MY COMPANY. Do not change that company. For policy setup, prefer a disposable tenant with the policy already at 12. For this exact write case, provide an explicitly approved isolated equivalent plus the product decision authorizing that equivalent, or keep the original case blocked. | C9404079 | 1 |

## Minimum disposable configuration proposal

Use one approved disposable company for company-owned settings and a disposable environment for shared masters. They can be the same isolated UAT clone if ownership, integration and mail isolation are verified. Shared masters affect catalog entries beyond one company, so company scoping alone is insufficient. MY COMPANY is approved for read-only catalog checks in this phase.

| Scope and fixture | Proposed exact draft values and writes | Required approval and guard | Affected cases |
| --- | --- | --- | --- |
| Disposable company lookup namespace | Add QA Garnet Area, QA Garnet Business Area, QA Garnet Geo Market, QA Garnet Job Site, QA Garnet Job Title, and QA Garnet Employee Category. Add QA Garnet Field of type Text with HR Import column QAGarnetField. Reuse these records for scoped edits. Use the exact same Job Site and additional field keys for duplicate rejection. | Authorize Add, edit and duplicate submission separately in the disposable company. Verify the owner selector and absence of external delivery before persistence. | C8934373, C8934376, C8934378, C8934381, C8934384, C8934387, C8934394, C8934395, C8934397, C8934399, C8934402, C8934404, C8934407, C8934414, C8934415, C8934417 |
| Disposable company web content and attachments | Use synthetic qa-garnet-logo.png and a harmless local unsupported file. Add QA Garnet Web, QA Garnet Mobile and a QA Garnet alternate mobile menu label. Use the approved UAT static Contact Us URL as a non-sensitive URL candidate. Use one created menu for edits and a separate disposable menu for the Delete case. | Approve uploads, content targets, creation and edits on disposable records only. A destructive menu case needs separate explicit approval and fixture-owner cleanup. | C8934365, C8934366, C8934492, C8934493, C8934517, C8934518, C8934521, C8934522, C8934523 |
| Disposable company settings and role-linked data | Use one isolated company with exact Company Criteria, one draft company Fitness Conclusion mapping, company history settings, dashboard Landing Page and Notification settings. Stage the permitted selections and perform only the approved save, no-change Submit, edit or duplicate attempt listed in each case. | Supply exact intended values, one approved role/profile/conclusion combination, company or subsidiary scope and a no-outbound configuration. Existing company configuration stays read-only. | C8934421, C8934461, C8934462, C8934502, C8934503, C8934511, C8934513 |
| Shared Exam and Numeric masters in an isolated environment | Add QA Garnet Medical Center with synthetic Aster QAfixture contact details and an approved test-only email. Add QA Garnet Global MET and QA Garnet Fit with eligible synthetic definitions. Add Body Mass Index category QAFixtureGarnet with synthetic ordered bounds 5 and 10, then exercise its exact duplicate rejection if approved. Edit only the disposable Medical Center. | Approve global master scope, center type and locale/contact format, health-check dependencies and duplicate permission. Values are test fixtures and must not be used for real clinical workflows. | C8934535, C8934552, C8934584, C8934588, C8934594, C8934595 |
| Shared Medical Data and Code masters in an isolated environment | Add one QA Garnet Health Check Item, one QA Garnet Medical History item using the approved compatible type/group, one QA Garnet Vaccine, one disposable Reminder Type and one QA Garnet Code with alphabetic abbreviation QAG. Reuse those synthetic records for approved edits and rejected invalid frequency or abbreviation submissions. | Supply compatible Numeric group, subgroup, international unit, permitted vaccine and reminder frequencies, synthetic-only code type, and proof reminder writes will not send or queue emails. Approve only the listed writes in the disposable environment. | C8934621, C8934622, C8935138, C8935140, C8935143, C8935144, C8935148, C8935207, C8935208, C8935209, C8935212, C8935213, C8935214 |

The fixture plan covers 51 primary configuration cases. Setup is not authorized by this proposal. No configuration was written.

## Disposable accounts and configuration planning

The six exact searches did not establish that no QA accounts exist under other allowed names. First request existing dedicated identifiers and permissions through the secure UAT channel. The disposable fixture proposals specify their exact roles, states and case IDs. The proposed setup uses one disposable company for its own mappings and one isolated shared-catalog scope. No configuration writes were performed. The existing role could select MY COMPANY, Health-Check item, Standard, BMI and Male for a Widget draft, but the preference controls were unavailable and Submit remained disabled.

## Exact remaining catalog inputs

C8934460 is complete using current catalog values. The 18 remaining cases are grouped below. Reuse existing authorized records whenever their states are known.

| Dependency | Case IDs | Required input or permission |
| --- | --- | --- |
| Approved owner states and subsidiary choices | C8934375, C8934380, C8934386, C8934416, C8934494 | Supply an approved owner with no Area, Business Area or Geo Market rows for the owner-only branches, at least one existing active Additional Information field, and an owner showing a selectable subsidiary with no static content. Reuse the same owner where the states are compatible. |
| Company MET base and criteria | C8934426, C8934428, C8934430 | Supply a company-scoped catalog view for the unfiltered result, one disposable owner and verified Global MET, exact criteria kind/operator, Frequency in Years and age bounds. Approve criteria staging or Save separately if the selected branch requires them. |
| Static Content and Web Mobile validation | C8934491, C8934516 | Supply an authorized disposable web Static Content row and Web Mobile Static Content row. Confirm the URL validation requirement and permitted invalid input; approve edit-mode validation if it needs changing a draft on the disposable record. |
| Dashboard Widget, Landing Page and Notification | C8934505, C8934506, C8934507, C8934510, C8934514 | Supply role and configured profile with visible preference controls, compatible Widget relation/type/category/item/gender, approved Preview input and expected outcome, exact Landing Page owner/profile, and a seeded disabled Notification state. All settings remain read-only unless separately authorized. |
| Medical Center catalog positive filters | C8934580 | Provide one authorized synthetic center name, its Type and Country and Active status. Use only the named fixture for filter checks. |
| Health Check and Medical History validation | C8934597, C8935137 | Provide a compatible Numeric group/subgroup/unit combination that exposes International Unit, plus an approved reference for where the Medical History validation message should render. Boolean/Allergies rejected the malformed name locally. |

## Consolidated UAT owner provisioning request

**Prepared for the GoCare UAT owner.** Please return one fixture inventory and authorization record for the web-only TestRail review. List the environment or tenant, disposable owner company, scope-specific roles, known fixture state, the exact permitted actions, and the owner responsible for reset or cleanup. Send credentials and security-question answers only through the approved secure channel. Provide record IDs or fixture aliases in the returned inventory.

| Priority | Provision or identify | Exact return information | Scope and authorization gate |
| ---: | --- | --- | --- |
| 1 | Disposable web accounts and separate Drop Box credentials | Existing QA identifiers or approval to provision one enabled, unlocked registered self-service account, one enabled prelocked target, and one operator with target-limited Team Member Details and Unlock User access. Include a dedicated Drop Box credential, approved verification challenge flow, a guaranteed absent username, and two preseeded unregistered identities. The employee/pre-employee identity needs a GIN or Applicant ID, synthetic DOB and International SOS ID. The provider identity needs its supported route, registration fields and a test-only email. | State whether profile changes, one controlled credential failure, password transition, unlock, registration or recovery may be exercised on each disposable target. Include a reset owner and permitted delivery sink. A 12-character policy fixture can support read-only policy checks and later authorized password cases. The policy-write case separately needs an approved isolated equivalent and ISOS Admin authorization. |
| 2 | Read-only synthetic business records | Provide one Active synthetic employee and an eligible team-member fixture. Include approved synthetic employee and exam IDs for reviewed, Processing and exam-free states, known certificate expiry dates, a seeded vaccination with date/type/brand/status, an approved Medical Center, and an existing sent reminder where applicable. Provide role entitlement, stable search keys and a provably absent synthetic key. | Keep reads scoped to those records. Record-dependent writes, reminder status changes and any delete remain separate decisions. Do not use existing real employee or medical data. |
| 3 | Authorized compatible catalog reads | Identify an approved owner with empty Area, Business Area and Geo Market states, a positive active Additional Information row, and a selectable subsidiary with no static content. Provide a named synthetic Medical Center with Type, Country and Active state, compatible MET and Widget criteria, and an authorized Numeric Health Check group/subgroup/unit combination. Provide a role/profile that exposes required Landing Page or Notification controls. | Existing MY COMPANY configuration is read-only. Case-specific compatible combinations are listed in Exact remaining catalog inputs above. |
| 4 | Disposable company and shared-catalog environment | Return one disposable company ID for company-owned mappings and one isolated shared-catalog scope for global masters. Confirm approved owner/association, exact Company Criteria and settings values, valid profile/role/conclusion combinations, safe URLs, and seeded duplicate or disposable edit targets. Use the Garnet draft values and case-to-operation table above. | Specify exact create, edit, duplicate-attempt, upload and delete permissions. Catalog-global operations need isolation beyond a company selector. No permission to modify MY COMPANY is requested. |
| 5 | Reminder, import/export, document and log fixtures | Return one unambiguously zero-eligible search window and a separate eligible synthetic reminder/document window, sanitized logs with approved record IDs/date range/format, a synthetic workbook/report, approved export scope and a safe output destination. Include an approved scoped Maintenance/Error Logs role and any expected retention or audit requirements. | Read-only initial verification precedes any approved server validation or generated output. Error Log deletion, service actions and email queue operations remain deferred or outside this approval. |
| 6 | Creation and message routing evidence | Provide authoritative GoCare UAT recipient routing or an allowlist showing Create Employee for MY COMPANY can deliver or queue only to the already approved address. For separate reminder and recovery tests, provide an isolated sink and exact permitted events. | Preserve Aster QAfixture and approved GIN 97101. The approved primary address remains in the original request. Employee creation stays deferred until recipient safety is evidenced and the GIN is rechecked. |

Please return one approval record with rows for environment, fixture IDs, role/permission, initial state, allowed operation, recipient or output boundary, and the reset owner. Provide business-specific values only. QA will prepare ordinary synthetic names, dates and descriptions locally. This request is prepared for sharing. No external message or provisioning action has been taken.

## Provisional decisions and final documentation handoff

The UAT owner provisioning request above consolidates role, state, synthetic IDs and permissions in one response format. The current future-date zero window is a verified read-only fixture. A separate positive eligible window is required for generation. No request was sent outside the workspace.
