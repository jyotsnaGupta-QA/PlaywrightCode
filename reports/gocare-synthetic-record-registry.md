# GoCare synthetic record registry

**Final documentation checkpoint · 26 November 2026**

No synthetic or real records were created or modified in GoCare. Reuse draft datasets independently from persisted fixtures. Aster QAfixture and GIN 97101 remain deferred pending recipient safety. [Final traceability](gocare-automation-first-traceability.csv) · [Procedure completeness](gocare-procedure-completeness.csv).


**Prior business coverage checkpoint · 26 November 2026**

No UAT fixture was provisioned or modified. GIN 97101 remains deferred pending safe recipient routing. GIN 7915 was removed from executable data and steps in three TestRail cases and stays recorded here as a known collision. [Business gap review](gocare-business-coverage-review.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior app-health checkpoint · 26 November 2026**

No record or configuration was created or modified in GoCare. The app-health cases use reusable alphabetic draft values and deterministic date offsets. Employee GIN 97101 remains reserved for the deferred fixture plan pending notification-recipient safety. [Suite map](gocare-automation-first-suite-map.md) · [Traceability](gocare-automation-first-traceability.csv).


**Prior visual-review checkpoint · 26 November 2026**

No fixture was provisioned. The headed probe used local Inactive, Custom period and 37 values. Aster QAfixture and GIN 97101 remain deferred pending notification-recipient evidence. [Coverage and implementation handoff](gocare-automation-first-strategy.md) · [Case traceability](gocare-automation-first-traceability.csv).


**Prior automation-first checkpoint � 26 November 2026**

No synthetic records were created. Aster QAfixture and approved GIN 97101 remain deferred until recipient safety is established. The Reviewed Exams Reset case uses local date inputs and needs no clinical or employee fixture. [Design and implementation handoff](gocare-automation-first-strategy.md) � [Case traceability](gocare-automation-first-traceability.csv).


Environment approved by the user as UAT at https://gocare.msbedrock.com/. Reports / Reporting, native mobile, and Archival Activity with its four descendants are out of scope.

The registry counts records only after creation is verified through the GoCare application. The current count is **0**.

| Status | Proposed record | Application identifier | Evidence and dependency |
| --- | --- | --- | --- |
| Pending | QA Atlas company | — | GoCare QA Atlas returned the exact no-company message with the active-only filter off. This name check is not a reservation. Recheck the final QA_ATLAS_ name if the accepted field rules allow the prefix. GoCare QA Atlas passes client name validation. The underscore name is rejected. Owner Company passes blank client validation, while standalone server behavior, configuration choices and notification isolation remain unresolved. |
| Pending | QA Atlas company lookups and role-scoped accounts | — | Depend on the approved synthetic company and isolated mail routing. |
| Pending | QA Atlas employee and team-member variants | — | Depend on company, role and lookup setup, approved identifier reservation, and notification isolation. |
| Pending | QA Atlas exam and vaccination variants | — | Depend on verified synthetic employee IDs and approved clinical lookups. |
| Pending | Optional ERAMET, document, mail and maintenance fixtures | — | Depend on the approved scoped core records and applicable operational permissions. |

When a creation is verified, record the QA_ATLAS_ reference, displayed synthetic name, GoCare ID, owner company, dependency IDs, and the verification screen. Reserve planned GINs and names before creation. Use the QA_ATLAS_ prefix where the field accepts it and record any format-imposed alternative. Leave all created records in place unless the user separately authorizes cleanup.

[Fixture plan](gocare-synthetic-test-data-requirements.md) · [Progress](gocare-testrail-master-progress.md)

[Create Company decisions](gocare-synthetic-test-data-requirements.md#create-company-provisioning-decisions)

## Approved existing company fixture path

The registry remains at zero verified creations. Reuse of an approved existing company is the preferred path. Record its exact approved identifier and scope and track any supplied synthetic fixture as pre-existing, including its verified state and test references. Standalone Atlas creation and association with an unspecified company remain on hold.

## MY COMPANY fixture authorization and Employee Create validation

| Record type | Synthetic name | Unique identifier | Company | Creation date | Creation verification | TestRail IDs | Dependent workflows | Status |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Employee | Aster QAfixture | Approved GIN 97101 | MY COMPANY (129) | Pending | Pending | C8927852, C8927857, C8928136, C8928137, C8928138 | Employee search, profile, dashboard and applicable no-exam checks | Proposed Active fixture. Registry count remains zero. |

## MY COMPANY employee identifier preflight

Aster QAfixture remains a proposed Active employee for MY COMPANY (129). Candidate GIN 97101 returned no matches in the scoped exact search without a status filter. Primary Email use is authorized separately. The creation date and verification remain pending. The verified creation count is zero.

## MY COMPANY collision and recipient preflight

Aster QAfixture remains a proposed Active employee for MY COMPANY (129). The supplied GIN collided in the role-visible directory. Proposed alternative 97101 returned no match and awaits approval. Creation date and resulting record identifier remain pending. Verified creations: zero.

## Recipient verification and functional validation batch

Aster QAfixture remains the proposed Active employee for MY COMPANY (129), now with approved GIN 97101 and separately approved Primary Email. Verified creations: zero. The MY COMPANY details form (company 129) shows Client Reviewer email and Due Date Reminders enabled. HR notification, latest-reminder loop and Vaccination Reminder were unchecked. The authorized role could see no recipient allowlist or Create Employee recipient preview. The settings do not establish which recipients the server would use on creation. Hold Employee Create until that recipient boundary is verified.

## Configuration and reviewed-exam validation continuation

No fixture was created, updated, or deleted. The registry still records zero creations. Aster QAfixture and GIN 97101 remain deferred.

## Company catalog filter follow-up

The company filter checks reused existing configuration without opening employee records or changing any settings. Verified synthetic creations remain zero.

## Catalog verification and status reconciliation

No synthetic record was created, edited or deleted. Aster QAfixture with GIN 97101 remains deferred. No additional notification-recipient investigation was performed.

## Dependency priority and documentation handoff

No synthetic record was created, edited or deleted. Aster QAfixture and approved GIN 97101 remain deferred. No additional recipient investigation was performed.

## Disposable accounts and configuration planning

The account aliases were examined read-only. Six scoped exact searches returned no matches and two local validations blocked lookup. No account, employee, or configuration record was created or updated. Aster QAfixture remains deferred.

## Provisional decisions and final documentation handoff

No synthetic record was created, updated or deleted. The existing approved GIN 97101 and primary address remain associated with the deferred Aster QAfixture plan. No additional recipient investigation was performed.
