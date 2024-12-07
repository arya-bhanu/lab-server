import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const initDataHomePortal = await prisma.cms.createMany({
    data: [
      {
        id: 1,
        section: 'hero',
        body: {
          heading: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          subtitle:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
          hero_image:
            'https://ik.imagekit.io/vtsz4v31m/cms/hero/hero-landing.png?updatedAt=1729692326247',
          subheading:
            'Excellence in animatio incipit a nostra ostium. Fias pars #1 IT Bootcamp in Indonesia, ubi industriae magistri futurum tuum formant.',
        },
      },
      {
        id: 2,
        section: 'benefits',
        body: [
          {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/certificate-svgrepo-com%202.svg?updatedAt=1729692502007',
          },
          {
            title: 'Curabitur cursus et libero varius. Aenean dictum leo.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/book-svgrepo-com%201.svg?updatedAt=1729692502055',
          },
          {
            title: 'Praesent auctor cum licentia. Instructores experti.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/benefits/learn-svgrepo-com%201.svg?updatedAt=1729692502251',
          },
          {
            title: 'Supportus ecosystema industri.',
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
            title: 'Academia Alta Schola.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/animasi.svg?updatedAt=1729692932450',
          },
          {
            title: 'Elementa et Innovatio.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/illustration.svg?updatedAt=1729692932603',
          },
          {
            title: 'Lingua Codicis.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/illustration-b.svg?updatedAt=1729692932521',
          },
          {
            title: 'Gestio Proiecti Technologiae.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3-b.svg?updatedAt=1729692763266',
          },
          {
            title: 'Administratio Datae.',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-3.svg?updatedAt=1729692707114',
          },
          {
            title: 'UI/UX and Creative',
            img_icon:
              'https://ik.imagekit.io/vtsz4v31m/cms/program-dimension/dimensi-2.svg?updatedAt=1729692707118',
          },
          {
            title: 'Processus Connexionis.',
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
          heading: 'Cursus Tuus Hic Initium.',
          subheading:
            'Explora universa disciplinae in Skripsidev et reperi optimas optionem quae conveniant cum tua passione et studiis, incipiendo ab hoc loco!',
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
                'Doctrina Universalis de Evolutione Applicatio Interface.',
              rating_star: 4.5,
              original_price: 10000,
              discounted_price: 1000,
            },
            {
              img: 'https://ik.imagekit.io/vtsz4v31m/cms/superclass/card-sample-1.svg?updatedAt=1729693031684',
              title:
                'Programma Completa de Web Structura et Disciplina Integra.',
              description:
                'Doctrina fieri sviluppator qui frontem et tergum dominatur.',
              rating_star: 3,
              original_price: 25000,
              discounted_price: 10000,
            },
            {
              img: 'https://ik.imagekit.io/vtsz4v31m/cms/superclass/card-sample-3.svg?updatedAt=1729693031727',
              title:
                'Nova JavaScript Structura: Peritia JavaScript pro Evolutione Web.',
              description:
                'Consilia fieri peritus in usus JavaScript in applicatio Web moderna.',
              rating_star: 2.5,
              original_price: 10000,
              discounted_price: 1000,
            },
          ],
          heading: 'Kelas Unggulan Kami',
          subheading:
            'Program selectus qui praebet disciplinam interactivam et occasiones operis attractivas.',
        },
      },
      {
        id: 7,
        section: 'user-story',
        body: {
          heading:
            'Narrationes Inspirantes a Participantes Programmatum Nostrorum.',
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
          heading: 'Collaboratio Socii Adiuva Fieri Somnium Curriculo.',
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
            'Accipe Notitias Exclusivas Secundum Tua Studia Directe per Epistulam Tuam.',
          subheading:
            'Incipe subscribere nostro epistulae nuntii ad recipiendas recentissimas articulos ab Talentnesia.',
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
