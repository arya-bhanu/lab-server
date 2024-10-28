import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const initDataHomePortal = await prisma.cms.createMany({
    data: [
      {
        id: 1,
        section: 'hero',
        body: {
          heading: 'Elevate Your IT Career with Industry Pioneers',
          subtitle: 'Bagaimana Skripsidev membantu meraih Karir Impianmu',
          hero_image:
            'https://ik.imagekit.io/vtsz4v31m/cms/hero/hero-landing.png?updatedAt=1729692326247',
          subheading:
            'Excellence in animation begins at our doorstep. Be part of #1 IT Bootcamp in Indonesia, where industry mentors shape your future',
        },
      },
      {
        id: 2,
        section: 'benefits',
        body: [
          {
            title: 'Berizin Resmi dari Pemerintah',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/certificate-svgrepo-com%202.svg?updatedAt=1729692502007',
          },
          {
            title: 'Kurikulum Terbaru dan Standar Industri',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/book-svgrepo-com%201.svg?updatedAt=1729692502055',
          },
          {
            title: 'Instruktur Praktisi dengan Lisensi Resmi',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/learn-svgrepo-com%201.svg?updatedAt=1729692502251',
          },
          {
            title: 'Dukungan Ekosistem Industri',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/ecology-svgrepo-com%201.svg?updatedAt=1729692502325',
          },
        ],
      },
      {
        id: 3,
        section: 'program-dimension/program',
        body: [
          {
            title: 'Academic High School',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/animasi.svg?updatedAt=1729692932450',
          },
          {
            title: 'Alat dan Teknologi',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/illustration.svg?updatedAt=1729692932603',
          },
          {
            title: 'Bahasa Pemrograman',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/illustration-b.svg?updatedAt=1729692932521',
          },
          {
            title: 'Manajemen Proyek IT',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3-b.svg?updatedAt=1729692763266',
          },
          {
            title: 'Administrasi Database',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3.svg?updatedAt=1729692707114',
          },
          {
            title: 'UI/UX dan Kreatif',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-2.svg?updatedAt=1729692707118',
          },
          {
            title: 'Komputasi Jaringan',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3-d.svg?updatedAt=1729692707068',
          },
          {
            title: 'Kecerdasan Analitik Data',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3-c.svg?updatedAt=1729692707128',
          },
        ],
      },
      {
        id: 4,
        section: 'program-dimension/card-carrier',
        body: {
          heading: 'Mulai Karir Impianmu dari Sini',
          subheading:
            'Jelajahi seluruh course yang ada di Talentnesia dan temukan course terbaik sesuai minatmu, mulai dari sini!',
        },
      },
      {
        id: 5,
        section: 'super-class',
        body: {
          class: [
            {
              img: 'https://ik.imagekit.io/vtsz4v31m/cms/superclass/card-sample-2.svg?updatedAt=1729693031853',
              title: 'The complete frontend developer',
              description:
                'Pembelajaran Menyeluruh terkait Pengembangan Aplikasi Antarmuka',
              rating_star: 4.5,
              original_price: 10000,
              discounted_price: 1000,
            },
            {
              img: 'https://ik.imagekit.io/vtsz4v31m/cms/superclass/card-sample-1.svg?updatedAt=1729693031684',
              title: 'Full-Stack Web Development Bootcamp and Learning',
              description:
                'Pembelajaran menjadi seorang pengembang yang menguasai frontend dan backend',
              rating_star: 3,
              original_price: 25000,
              discounted_price: 10000,
            },
            {
              img: 'https://ik.imagekit.io/vtsz4v31m/cms/superclass/card-sample-3.svg?updatedAt=1729693031727',
              title:
                'Modern JavaScript Frameworks: Mastering Javascript for Web Development',
              description:
                'Kiat menjadi seorang ahli pengembang dalam menggunakan Javascript dalam aplikasi Web modern',
              rating_star: 2.5,
              original_price: 10000,
              discounted_price: 1000,
            },
          ],
          heading: 'Kelas Unggulan Kami',
          subheading:
            'Program pilihan yang memberikan Kamu pelatihan interaktif dan peluang pekerjaan yang menarik',
        },
      },
      {
        id: 7,
        section: 'user-story',
        body: {
          heading: 'Cerita Inspiratif Peserta Program Kami',
          stories: [
            {
              story: 'Deskripsi review contoh oleh henry',
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/user-story/Henry.png?updatedAt=1729693109707',
              student_name: 'Henry',
              student_status: 'Undergraduate S1',
            },
            {
              story: 'Deskripsi review contoh oleh reja',
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/user-story/reja.png?updatedAt=1729693107601',
              student_name: 'Reja',
              student_status: 'Undergraduate S2',
            },
            {
              story: 'Deskripsi review contoh oleh reja sebagai student',
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/user-story/huya.png?updatedAt=1729693104964',
              student_name: 'Huya',
              student_status: 'College Student',
            },
            {
              story:
                'Deskripsi review contoh oleh woman sebagai highschool student',
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/user-story/woman.png?updatedAt=1729693089093',
              student_name: 'Woman',
              student_status: 'HighSchool Student',
            },
          ],
        },
      },
      {
        id: 9,
        section: 'partners',
        body: {
          heading: 'Partner Kolaborasi Bantu Mewujudkan Karir Impianmu',
          partners: [
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-2.svg?updatedAt=1729693153990',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-3.svg?updatedAt=1729693154292',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-6.svg?updatedAt=1729693153917',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-4.svg?updatedAt=1729693154145',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-5.svg?updatedAt=1729693154284',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-7.svg?updatedAt=1729693153906',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-1.svg?updatedAt=1729693154143',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
            {
              img_url:
                'https://ik.imagekit.io/vtsz4v31m/cms/partners/logo-2.svg?updatedAt=1729693153990',
              url_link:
                'https://stackoverflow.com/questions/55863152/how-to-clear-all-values-in-mysql-db-in-all-tables',
            },
          ],
        },
      },
      {
        id: 10,
        section: 'news-letter-subscription',
        body: {
          heading:
            'Dapatkan Wawasan Eksklusif Sesuai Minatmu Langsung melalui Emailmu',
          subheading:
            'Mulai berlangganan newsletter kami untuk mendapatkan update artikel terbaru dari Talentnesia',
        },
      },
      {
        id: 11,
        section: 'footer/social-media',
        body: [
          {
            url_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/footer/linkedin.svg?updatedAt=1729693210278',
            url_link: 'https://www.linkedin.com',
          },
          {
            url_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/footer/instagram.svg?updatedAt=1729693210331',
            url_link: 'https://www.instagram.com/',
          },
          {
            url_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/footer/twitter.svg?updatedAt=1729693210197',
            url_link: 'https://x.com',
          },
          {
            url_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/footer/facebook.svg?updatedAt=1729693209901',
            url_link: 'https://id-id.facebook.com/',
          },
        ],
      },
    ],
  });
  const initDataModul = await prisma.modulBackoffice.createMany({
    data: [
      {
        code: '59779-623',
        name: 'VP Marketing',
        active: 'ACTIVE',
      },
      {
        code: '59672-0732',
        name: 'VP Product Management',
        active: 'ACTIVE',
      },
      {
        code: '16781-384',
        name: 'Operator',
        active: 'NON_ACTIVE',
      },
      {
        code: '64117-195',
        name: 'Safety Technician II',
        active: 'ACTIVE',
      },
      {
        code: '31722-538',
        name: 'Account Executive',
        active: 'ACTIVE',
      },
      {
        code: '10742-8667',
        name: 'Teacher',
        active: 'NON_ACTIVE',
      },
      {
        code: '61077-047',
        name: 'Librarian',
        active: 'ACTIVE',
      },
      {
        code: '49288-0656',
        name: 'Systems Administrator III',
        active: 'ACTIVE',
      },
      {
        code: '70253-527',
        name: 'Software Test Engineer I',
        active: 'ACTIVE',
      },
      {
        code: '55648-701',
        name: 'Actuary',
        active: 'ACTIVE',
      },
      {
        code: '16590-586',
        name: 'Geological Engineer',
        active: 'ACTIVE',
      },
      {
        code: '49349-577',
        name: 'Food Chemist',
        active: 'ACTIVE',
      },
      {
        code: '35356-961',
        name: 'Financial Analyst',
        active: 'NON_ACTIVE',
      },
      {
        code: '10191-1765',
        name: 'Staff Scientist',
        active: 'NON_ACTIVE',
      },
      {
        code: '0591-2157',
        name: 'Social Worker',
        active: 'NON_ACTIVE',
      },
      {
        code: '68703-027',
        name: 'Actuary',
        active: 'ACTIVE',
      },
      {
        code: '0023-3616',
        name: 'Research Nurse',
        active: 'ACTIVE',
      },
      {
        code: '0009-0825',
        name: 'Environmental Specialist',
        active: 'NON_ACTIVE',
      },
      {
        code: '37205-674',
        name: 'Chemical Engineer',
        active: 'ACTIVE',
      },
      {
        code: '64725-0924',
        name: 'Programmer Analyst I',
        active: 'NON_ACTIVE',
      },
      {
        code: '55316-029',
        name: 'Human Resources Manager',
        active: 'ACTIVE',
      },
      {
        code: '49035-431',
        name: 'Administrative Officer',
        active: 'ACTIVE',
      },
      {
        code: '0131-2480',
        name: 'Project Manager',
        active: 'ACTIVE',
      },
      {
        code: '50950-001',
        name: 'Mechanical Systems Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '54365-400',
        name: 'Web Developer II',
        active: 'NON_ACTIVE',
      },
      {
        code: '54868-2211',
        name: 'Research Nurse',
        active: 'ACTIVE',
      },
      {
        code: '68703-140',
        name: 'Technical Writer',
        active: 'ACTIVE',
      },
      {
        code: '49955-100',
        name: 'Research Assistant I',
        active: 'NON_ACTIVE',
      },
      {
        code: '35000-835',
        name: 'Speech Pathologist',
        active: 'ACTIVE',
      },
      {
        code: '36987-2048',
        name: 'Developer I',
        active: 'ACTIVE',
      },
      {
        code: '0409-7811',
        name: 'GIS Technical Architect',
        active: 'NON_ACTIVE',
      },
      {
        code: '0264-7865',
        name: 'Analyst Programmer',
        active: 'NON_ACTIVE',
      },
      {
        code: '49288-0192',
        name: 'VP Product Management',
        active: 'NON_ACTIVE',
      },
      {
        code: '0904-5888',
        name: 'General Manager',
        active: 'ACTIVE',
      },
      {
        code: '0378-6089',
        name: 'Marketing Assistant',
        active: 'ACTIVE',
      },
      {
        code: '68105-004',
        name: 'Tax Accountant',
        active: 'NON_ACTIVE',
      },
      {
        code: '49738-721',
        name: 'Recruiter',
        active: 'NON_ACTIVE',
      },
      {
        code: '63739-653',
        name: 'Social Worker',
        active: 'ACTIVE',
      },
      {
        code: '0615-7718',
        name: 'Analyst Programmer',
        active: 'NON_ACTIVE',
      },
      {
        code: '58118-0506',
        name: 'Operator',
        active: 'NON_ACTIVE',
      },
      {
        code: '68971-002',
        name: 'Administrative Officer',
        active: 'ACTIVE',
      },
      {
        code: '36987-2859',
        name: 'Internal Auditor',
        active: 'NON_ACTIVE',
      },
      {
        code: '49738-456',
        name: 'Business Systems Development Analyst',
        active: 'NON_ACTIVE',
      },
      {
        code: '66689-036',
        name: 'Nurse',
        active: 'ACTIVE',
      },
      {
        code: '63629-1266',
        name: 'Safety Technician I',
        active: 'ACTIVE',
      },
      {
        code: '0268-6514',
        name: 'Desktop Support Technician',
        active: 'ACTIVE',
      },
      {
        code: '62932-142',
        name: 'Project Manager',
        active: 'ACTIVE',
      },
      {
        code: '51655-085',
        name: 'GIS Technical Architect',
        active: 'ACTIVE',
      },
      {
        code: '30142-007',
        name: 'Marketing Manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '0268-1009',
        name: 'Professor',
        active: 'ACTIVE',
      },
      {
        code: '56062-010',
        name: 'Information Systems Manager',
        active: 'ACTIVE',
      },
      {
        code: '13537-307',
        name: 'Social Worker',
        active: 'NON_ACTIVE',
      },
      {
        code: '0378-0137',
        name: 'Executive Secretary',
        active: 'NON_ACTIVE',
      },
      {
        code: '35356-760',
        name: 'Staff Accountant IV',
        active: 'ACTIVE',
      },
      {
        code: '65923-009',
        name: 'Occupational Therapist',
        active: 'ACTIVE',
      },
      {
        code: '52125-007',
        name: 'Quality Engineer',
        active: 'ACTIVE',
      },
      {
        code: '52768-300',
        name: 'Programmer IV',
        active: 'NON_ACTIVE',
      },
      {
        code: '66116-428',
        name: 'Chief Design Engineer',
        active: 'ACTIVE',
      },
      {
        code: '65044-5231',
        name: 'Developer I',
        active: 'NON_ACTIVE',
      },
      {
        code: '51523-028',
        name: 'Associate Professor',
        active: 'NON_ACTIVE',
      },
      {
        code: '49288-0271',
        name: 'Human Resources Assistant I',
        active: 'ACTIVE',
      },
      {
        code: '35356-324',
        name: 'Physical Therapy Assistant',
        active: 'NON_ACTIVE',
      },
      {
        code: '0409-8183',
        name: 'Senior Sales Associate',
        active: 'ACTIVE',
      },
      {
        code: '56136-004',
        name: 'Director of Sales',
        active: 'NON_ACTIVE',
      },
      {
        code: '13734-013',
        name: 'Business Systems Development Analyst',
        active: 'ACTIVE',
      },
      {
        code: '54868-6162',
        name: 'Senior Sales Associate',
        active: 'ACTIVE',
      },
      {
        code: '44781-160',
        name: 'Safety Technician III',
        active: 'ACTIVE',
      },
      {
        code: '64092-315',
        name: 'Project Manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '0603-1147',
        name: 'Executive Secretary',
        active: 'NON_ACTIVE',
      },
      {
        code: '41268-458',
        name: 'Programmer Analyst II',
        active: 'NON_ACTIVE',
      },
      {
        code: '55154-6922',
        name: 'Recruiting Manager',
        active: 'ACTIVE',
      },
      {
        code: '62802-206',
        name: 'Systems Administrator I',
        active: 'NON_ACTIVE',
      },
      {
        code: '49349-849',
        name: 'Clinical Specialist',
        active: 'NON_ACTIVE',
      },
      {
        code: '52686-266',
        name: 'Business Systems Development Analyst',
        active: 'NON_ACTIVE',
      },
      {
        code: '47593-507',
        name: 'Community Outreach Specialist',
        active: 'ACTIVE',
      },
      {
        code: '35418-232',
        name: 'Nurse',
        active: 'NON_ACTIVE',
      },
      {
        code: '63323-623',
        name: 'Information Systems Manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '55910-439',
        name: 'Marketing Manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '55154-2075',
        name: 'Chemical Engineer',
        active: 'ACTIVE',
      },
      {
        code: '49817-1999',
        name: 'Human Resources Assistant III',
        active: 'ACTIVE',
      },
      {
        code: '50051-0010',
        name: 'Account Coordinator',
        active: 'NON_ACTIVE',
      },
      {
        code: '50988-453',
        name: 'Assistant Manager',
        active: 'ACTIVE',
      },
      {
        code: '37000-060',
        name: 'Operator',
        active: 'ACTIVE',
      },
      {
        code: '10578-017',
        name: 'Analog Circuit Design manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '50227-2116',
        name: 'Database Administrator II',
        active: 'ACTIVE',
      },
      {
        code: '62713-802',
        name: 'Internal Auditor',
        active: 'ACTIVE',
      },
      {
        code: '55312-530',
        name: 'Account Executive',
        active: 'ACTIVE',
      },
      {
        code: '76237-226',
        name: 'Junior Executive',
        active: 'NON_ACTIVE',
      },
      {
        code: '16590-151',
        name: 'Analog Circuit Design manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '0006-0717',
        name: 'Compensation Analyst',
        active: 'NON_ACTIVE',
      },
      {
        code: '52343-044',
        name: 'Registered Nurse',
        active: 'NON_ACTIVE',
      },
      {
        code: '64117-984',
        name: 'Senior Quality Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '30698-449',
        name: 'GIS Technical Architect',
        active: 'NON_ACTIVE',
      },
      {
        code: '54622-389',
        name: 'Account Executive',
        active: 'NON_ACTIVE',
      },
      {
        code: '0268-1605',
        name: 'Database Administrator III',
        active: 'ACTIVE',
      },
      {
        code: '13537-353',
        name: 'Desktop Support Technician',
        active: 'ACTIVE',
      },
      {
        code: '0069-0086',
        name: 'Automation Specialist IV',
        active: 'NON_ACTIVE',
      },
      {
        code: '49967-595',
        name: 'Senior Cost Accountant',
        active: 'ACTIVE',
      },
      {
        code: '63824-172',
        name: 'VP Accounting',
        active: 'ACTIVE',
      },
      {
        code: '0007-4407',
        name: 'Electrical Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '49781-064',
        name: 'Editor',
        active: 'ACTIVE',
      },
      {
        code: '0185-0102',
        name: 'Mechanical Systems Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '36987-1135',
        name: 'Associate Professor',
        active: 'ACTIVE',
      },
      {
        code: '0944-8402',
        name: 'Compensation Analyst',
        active: 'NON_ACTIVE',
      },
      {
        code: '43419-324',
        name: 'Media Manager IV',
        active: 'ACTIVE',
      },
      {
        code: '43857-0209',
        name: 'VP Product Management',
        active: 'ACTIVE',
      },
      {
        code: '62209-9266',
        name: 'Nuclear Power Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '49288-0603',
        name: 'Programmer Analyst IV',
        active: 'ACTIVE',
      },
      {
        code: '50523-739',
        name: 'Executive Secretary',
        active: 'NON_ACTIVE',
      },
      {
        code: '67767-201',
        name: 'Recruiter',
        active: 'ACTIVE',
      },
      {
        code: '59260-035',
        name: 'Executive Secretary',
        active: 'NON_ACTIVE',
      },
      {
        code: '59115-143',
        name: 'Occupational Therapist',
        active: 'NON_ACTIVE',
      },
      {
        code: '57691-569',
        name: 'Professor',
        active: 'NON_ACTIVE',
      },
      {
        code: '49884-666',
        name: 'Civil Engineer',
        active: 'ACTIVE',
      },
      {
        code: '64092-010',
        name: 'Environmental Tech',
        active: 'NON_ACTIVE',
      },
      {
        code: '37000-675',
        name: 'Statistician II',
        active: 'ACTIVE',
      },
      {
        code: '52410-4110',
        name: 'Programmer III',
        active: 'NON_ACTIVE',
      },
      {
        code: '24470-902',
        name: 'Paralegal',
        active: 'NON_ACTIVE',
      },
      {
        code: '64861-303',
        name: 'Internal Auditor',
        active: 'NON_ACTIVE',
      },
      {
        code: '43269-646',
        name: 'Dental Hygienist',
        active: 'ACTIVE',
      },
      {
        code: '42806-263',
        name: 'Clinical Specialist',
        active: 'ACTIVE',
      },
      {
        code: '42411-051',
        name: 'Programmer II',
        active: 'ACTIVE',
      },
      {
        code: '68828-144',
        name: 'Safety Technician III',
        active: 'ACTIVE',
      },
      {
        code: '0093-7392',
        name: 'Administrative Assistant II',
        active: 'NON_ACTIVE',
      },
      {
        code: '54973-0620',
        name: 'Payment Adjustment Coordinator',
        active: 'NON_ACTIVE',
      },
      {
        code: '59762-0333',
        name: 'Recruiter',
        active: 'NON_ACTIVE',
      },
      {
        code: '55154-3025',
        name: 'Executive Secretary',
        active: 'ACTIVE',
      },
      {
        code: '0054-0223',
        name: 'Director of Sales',
        active: 'NON_ACTIVE',
      },
      {
        code: '64616-055',
        name: 'Staff Scientist',
        active: 'NON_ACTIVE',
      },
      {
        code: '68647-178',
        name: 'Quality Control Specialist',
        active: 'NON_ACTIVE',
      },
      {
        code: '49288-0160',
        name: 'Payment Adjustment Coordinator',
        active: 'ACTIVE',
      },
      {
        code: '0378-0501',
        name: 'Biostatistician III',
        active: 'NON_ACTIVE',
      },
      {
        code: '63323-288',
        name: 'Marketing Assistant',
        active: 'ACTIVE',
      },
      {
        code: '65923-702',
        name: 'Quality Engineer',
        active: 'ACTIVE',
      },
      {
        code: '45802-101',
        name: 'Compensation Analyst',
        active: 'ACTIVE',
      },
      {
        code: '0280-7190',
        name: 'Account Representative III',
        active: 'ACTIVE',
      },
      {
        code: '43063-362',
        name: 'Web Developer IV',
        active: 'NON_ACTIVE',
      },
      {
        code: '63629-1830',
        name: 'Compensation Analyst',
        active: 'ACTIVE',
      },
      {
        code: '41250-201',
        name: 'Chief Design Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '0065-0271',
        name: 'Geologist II',
        active: 'ACTIVE',
      },
      {
        code: '0781-2194',
        name: 'Paralegal',
        active: 'ACTIVE',
      },
      {
        code: '0126-0022',
        name: 'Physical Therapy Assistant',
        active: 'NON_ACTIVE',
      },
      {
        code: '24236-231',
        name: 'Account Executive',
        active: 'NON_ACTIVE',
      },
      {
        code: '49631-182',
        name: 'GIS Technical Architect',
        active: 'ACTIVE',
      },
      {
        code: '64764-335',
        name: 'Cost Accountant',
        active: 'NON_ACTIVE',
      },
      {
        code: '58443-0042',
        name: 'Computer Systems Analyst III',
        active: 'NON_ACTIVE',
      },
      {
        code: '67457-216',
        name: 'VP Marketing',
        active: 'ACTIVE',
      },
      {
        code: '67938-0990',
        name: 'Statistician I',
        active: 'NON_ACTIVE',
      },
      {
        code: '50080-001',
        name: 'Software Test Engineer IV',
        active: 'NON_ACTIVE',
      },
      {
        code: '0363-1352',
        name: 'Systems Administrator I',
        active: 'ACTIVE',
      },
      {
        code: '50845-0102',
        name: 'Analog Circuit Design manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '25010-215',
        name: 'Graphic Designer',
        active: 'NON_ACTIVE',
      },
      {
        code: '0270-5164',
        name: 'Sales Associate',
        active: 'ACTIVE',
      },
      {
        code: '50268-629',
        name: 'Dental Hygienist',
        active: 'NON_ACTIVE',
      },
      {
        code: '17478-533',
        name: 'Associate Professor',
        active: 'ACTIVE',
      },
      {
        code: '50458-301',
        name: 'Account Executive',
        active: 'NON_ACTIVE',
      },
      {
        code: '64525-0543',
        name: 'Accounting Assistant II',
        active: 'ACTIVE',
      },
      {
        code: '11523-7204',
        name: 'Desktop Support Technician',
        active: 'ACTIVE',
      },
      {
        code: '36987-3231',
        name: 'VP Sales',
        active: 'ACTIVE',
      },
      {
        code: '62211-010',
        name: 'Operator',
        active: 'ACTIVE',
      },
      {
        code: '59779-830',
        name: 'Office Assistant IV',
        active: 'ACTIVE',
      },
      {
        code: '49288-0635',
        name: 'Payment Adjustment Coordinator',
        active: 'NON_ACTIVE',
      },
      {
        code: '63629-4805',
        name: 'Recruiter',
        active: 'ACTIVE',
      },
      {
        code: '63739-544',
        name: 'Research Assistant II',
        active: 'NON_ACTIVE',
      },
      {
        code: '36987-1094',
        name: 'Actuary',
        active: 'NON_ACTIVE',
      },
      {
        code: '0268-0886',
        name: 'Staff Scientist',
        active: 'ACTIVE',
      },
      {
        code: '36987-1112',
        name: 'Recruiter',
        active: 'ACTIVE',
      },
      {
        code: '15127-895',
        name: 'Research Assistant I',
        active: 'ACTIVE',
      },
      {
        code: '52584-240',
        name: 'Senior Quality Engineer',
        active: 'ACTIVE',
      },
      {
        code: '53329-975',
        name: 'Safety Technician IV',
        active: 'ACTIVE',
      },
      {
        code: '11673-987',
        name: 'Professor',
        active: 'ACTIVE',
      },
      {
        code: '0409-7990',
        name: 'Human Resources Assistant I',
        active: 'ACTIVE',
      },
      {
        code: '63323-376',
        name: 'Sales Representative',
        active: 'ACTIVE',
      },
      {
        code: '47781-263',
        name: 'Administrative Assistant III',
        active: 'NON_ACTIVE',
      },
      {
        code: '0143-1280',
        name: 'VP Product Management',
        active: 'NON_ACTIVE',
      },
      {
        code: '48951-3154',
        name: 'Nurse Practicioner',
        active: 'ACTIVE',
      },
      {
        code: '37000-715',
        name: 'VP Product Management',
        active: 'ACTIVE',
      },
      {
        code: '54868-4414',
        name: 'VP Quality Control',
        active: 'ACTIVE',
      },
      {
        code: '57520-0931',
        name: 'Tax Accountant',
        active: 'ACTIVE',
      },
      {
        code: '76224-101',
        name: 'Geological Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '12258-242',
        name: 'Environmental Specialist',
        active: 'NON_ACTIVE',
      },
      {
        code: '55648-987',
        name: 'Structural Analysis Engineer',
        active: 'ACTIVE',
      },
      {
        code: '13537-450',
        name: 'Data Coordinator',
        active: 'NON_ACTIVE',
      },
      {
        code: '52959-557',
        name: 'Occupational Therapist',
        active: 'NON_ACTIVE',
      },
      {
        code: '36987-1700',
        name: 'Account Representative IV',
        active: 'ACTIVE',
      },
      {
        code: '54575-953',
        name: 'Accountant II',
        active: 'ACTIVE',
      },
      {
        code: '51079-700',
        name: 'Data Coordinator',
        active: 'NON_ACTIVE',
      },
      {
        code: '63739-920',
        name: 'Director of Sales',
        active: 'ACTIVE',
      },
      {
        code: '0126-0138',
        name: 'Software Consultant',
        active: 'NON_ACTIVE',
      },
      {
        code: '55312-153',
        name: 'Cost Accountant',
        active: 'ACTIVE',
      },
      {
        code: '43353-798',
        name: 'Structural Analysis Engineer',
        active: 'NON_ACTIVE',
      },
      {
        code: '33992-8805',
        name: 'Social Worker',
        active: 'ACTIVE',
      },
      {
        code: '29500-2437',
        name: 'Information Systems Manager',
        active: 'ACTIVE',
      },
      {
        code: '75921-025',
        name: 'Teacher',
        active: 'ACTIVE',
      },
      {
        code: '34690-6001',
        name: 'Staff Accountant III',
        active: 'ACTIVE',
      },
      {
        code: '65162-347',
        name: 'Analog Circuit Design manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '65585-494',
        name: 'Analog Circuit Design manager',
        active: 'NON_ACTIVE',
      },
      {
        code: '44577-704',
        name: 'Staff Scientist',
        active: 'ACTIVE',
      },
      {
        code: '0024-0335',
        name: 'Geologist IV',
        active: 'ACTIVE',
      },
      {
        code: '48951-8145',
        name: 'Web Developer II',
        active: 'NON_ACTIVE',
      },
    ],
    skipDuplicates: true,
  });

  console.log(initDataModul);
  console.log(initDataHomePortal);
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
