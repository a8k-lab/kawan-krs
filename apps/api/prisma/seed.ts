import { PrismaClient, RoleCode } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Memulai proses seeding database KawanKRS (Revisi Schema: Int ID, UUID, Epoch)...');

  // 1. Bersihkan data lama
  await prisma.authUserSession.deleteMany();
  await prisma.authUserDetail.deleteMany();
  await prisma.authUser.deleteMany();
  await prisma.authRole.deleteMany();

  // 2. Seed Master Roles
  const rolesData = [
    { code: RoleCode.MAHASISWA, name: 'Mahasiswa', description: 'Peran untuk mahasiswa aktif dalam pengisian dan perencanaan KRS' },
    { code: RoleCode.DOSEN, name: 'Dosen Pembimbing Akademik', description: 'Peran dosen wali untuk review dan persetujuan KRS mahasiswa' },
    { code: RoleCode.ADMIN, name: 'Admin Akademik', description: 'Peran staf BAA untuk manajemen matakuliah, biaya, dan pengguna' },
    { code: RoleCode.SUPERADMIN, name: 'Super Administrator', description: 'Peran tertinggi untuk kontrol infrastruktur dan audit logs sistem' },
  ];

  const rolesMap = new Map<RoleCode, number>();
  for (const r of rolesData) {
    const role = await prisma.authRole.create({ data: r });
    rolesMap.set(role.code, role.id);
  }
  console.log('✅ 4 Master Role berhasil dibuat (ID 1, 2, 3, 4)');

  // 3. Hash password default: "SecretPassword123"
  const defaultPasswordHash = await bcrypt.hash('SecretPassword123', 10);

  // 4. Seed Dosen PA (Prof. Wisnu Jatmiko)
  const dosenUser = await prisma.authUser.create({
    data: {
      email: 'wisnu.jatmiko@kawankrs.ac.id',
      passwordHash: defaultPasswordHash,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.DOSEN)!,
          identifier: '197405101999031001',
          fullName: 'Prof. Dr. Ir. Wisnu Jatmiko',
          title: 'Prof. Dr. Ir.',
          faculty: 'Fakultas Ilmu Komputer',
          studyProgram: 'Teknik Komputer & AI',
          phoneNumber: '081234567891',
        },
      },
    },
  });
  console.log(`✅ User Dosen PA (Prof. Wisnu Jatmiko, ID: ${dosenUser.id}, UUID: ${dosenUser.uuid}) berhasil dibuat`);

  // 5. Seed Mahasiswa (Nadya Salsabila, dibimbing oleh Prof. Wisnu)
  const mhsUser = await prisma.authUser.create({
    data: {
      email: 'nadya.salsabila@kawankrs.ac.id',
      passwordHash: defaultPasswordHash,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.MAHASISWA)!,
          identifier: '2106721094',
          fullName: 'Nadya Salsabila',
          faculty: 'Fakultas Ilmu Komputer',
          studyProgram: 'Teknik Informatika',
          cohort: '2024',
          gpa: 3.82,
          totalCredits: 114,
          advisorId: dosenUser.id,
          phoneNumber: '081234567890',
        },
      },
    },
  });
  console.log(`✅ User Mahasiswa (Nadya Salsabila, ID: ${mhsUser.id}, UUID: ${mhsUser.uuid}) berhasil dibuat`);

  // 6. Seed Admin Akademik (Rina Marlina)
  const adminUser = await prisma.authUser.create({
    data: {
      email: 'rina.marlina@kawankrs.ac.id',
      passwordHash: defaultPasswordHash,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.ADMIN)!,
          identifier: 'ADM-BAA-001',
          fullName: 'Rina Marlina',
          faculty: 'Biro Administrasi Akademik (BAA)',
          studyProgram: 'Layanan Kurikulum & Registrasi',
          phoneNumber: '081234567892',
        },
      },
    },
  });
  console.log(`✅ User Admin Akademik (Rina Marlina, ID: ${adminUser.id}, UUID: ${adminUser.uuid}) berhasil dibuat`);

  // 7. Seed Super Admin (Dr. Sarah Jenkins)
  const superUser = await prisma.authUser.create({
    data: {
      email: 'sarah.jenkins@kawankrs.ac.id',
      passwordHash: defaultPasswordHash,
      isActive: true,
      detail: {
        create: {
          roleId: rolesMap.get(RoleCode.SUPERADMIN)!,
          identifier: 'ROOT-SYS-001',
          fullName: 'Dr. Sarah Jenkins',
          title: 'Dr.',
          faculty: 'Pusat Infrastruktur TI & Keamanan Sistem',
          phoneNumber: '081234567893',
        },
      },
    },
  });
  console.log(`✅ User Super Admin (Dr. Sarah Jenkins, ID: ${superUser.id}, UUID: ${superUser.uuid}) berhasil dibuat`);

  console.log('\n🎉 SEEDING SELESAI DENGAN SUKSES! Seluruh akun memiliki ID 1, 2, 3.. dan kolom UUID unik.');
}

main()
  .catch((e) => {
    console.error('❌ Terjadi kesalahan saat seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
