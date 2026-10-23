# KawanKRS context

KawanKRS is a study-planning assistant for students in the S1 PJJ Informatika program at Telkom University. It helps students evaluate course eligibility, prepare proposed study plans, and understand academic progress and estimated costs. It is an advisory tool, not the university's official academic registration system.

## Language

**KRS (Kartu Rencana Studi)**:
The university's official course-registration plan. In KawanKRS, students prepare a **Rencana Studi** for reference; saving or finalizing it does not submit an official KRS.
_Avoid_: Describing a KawanKRS draft or final plan as an official university registration.

**Rencana Studi**:
A student's proposed set of courses for a target semester. It is informed by academic history, course eligibility, desired SKS load, and budget.

**Draf Rencana Studi**:
An editable proposed study plan. A student may select and save a recommended course package as a draft.

**Finalisasi Rencana Studi**:
Marking the proposed plan as final within KawanKRS. The documented flow treats a final plan as no longer editable; finalization is not formal approval or registration by the university.
_Avoid_: Equating finalization with official KRS submission.

**Paket Rekomendasi**:
A suggested grouping of courses generated from available course data and applicable academic and budget constraints. It is decision support, not a guarantee that courses will be offered or seats will be available.
_Avoid_: Presenting a recommendation as an official enrollment decision.

**Validasi Prasyarat**:
Checking whether a student meets the academic requirements for a course based on recorded results and the applicable curriculum rules. A course that passes this check is **eligible** under the system's available data, not necessarily registered or guaranteed to be offered.

**Mata Kuliah**:
An academic course in the applicable curriculum catalog, including its code, title, SKS weight, and possible prerequisites.

**Katalog Mata Kuliah**:
The maintained source of course information and prerequisite relationships used by study planning. For the initial version, it is managed manually and must reflect official academic guidance.

**Riwayat Nilai / Transkrip Mandiri**:
Course results entered by the student to support academic calculations and eligibility checks. These records are self-reported in the initial version and are not automatically synchronized with the university's academic system.
_Avoid_: Calling them a verified official transcript.

**SKS (Satuan Kredit Semester)**:
The credit weight of a course and the unit used to represent a planned or completed study load.

**IP Semester**:
The grade-point measure for courses within one semester. Keep it distinct from cumulative academic performance.

**IPK (Indeks Prestasi Kumulatif)**:
Cumulative academic grade-point performance derived from applicable course results. Calculations depend on the accuracy and completeness of the recorded academic history.

**Simulasi IPK**:
A what-if projection based on target grades for proposed courses. Simulation results do not change the student's recorded academic history.
_Avoid_: Treating projected grades or IPK as achieved results.

**Jalur Kelulusan**:
A visualization of completed and remaining academic requirements and the student's potential path toward graduation. Any estimated completion timeline is indicative rather than guaranteed.

**Budget Studi**:
The student's stated spending limit for a proposed semester. It constrains or informs recommended course packages; it is not a payment transaction.

**Estimasi Biaya Studi**:
An estimated cost calculated from the relevant SKS load and applicable tariff. It is not a bill or payment confirmation.

**Tarif SKS**:
The per-credit academic tariff maintained by an authorized administrator, potentially varying by cohort and academic period.

**Mahasiswa**:
The primary user who maintains their academic history, requests recommendations, and prepares study plans.

**Dosen Wali**:
An academic advisor who can review a finalized proposed study plan for an assigned student and provide feedback. This review does not itself complete official KRS registration.

**Admin Akademik**:
A user responsible for maintaining course catalogs, prerequisite rules, SKS tariffs, and relevant user records. Administrative edits should be grounded in official academic guidance.

## Context boundaries

KawanKRS version one is a self-contained **study-planning and advisory** application. It does not integrate directly with Telkom University's SIAKAD and does not perform official KRS submission, tuition payment, or class scheduling. Student academic records and administrative curriculum data are entered or maintained within KawanKRS.

Recommendation quality depends on the completeness of self-reported grades and the accuracy of the maintained curriculum and prerequisite rules. The system must not imply it has independently verified those data against official university records.

## Decisions

Architectural and implementation decisions belong in `docs/adr/`. Technical stack, local setup, engineering procedures, and contribution instructions belong in the relevant developer documentation, not this file.
