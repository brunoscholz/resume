export async function getData() {
  try {
    // const response = await fetch('https://raw.githubusercontent.com/brunoscholz/resume/master/public/data.json')
    const response = await fetch('/data.json')
    return await response.json()
  } catch(e) {
    return e
  }
}

export const AboutData = `
Seasoned Fullstack Drupal Developer at VML with over 15 years of extensive experience in <em>software engineering</em>, particularly excelling in frontend development and infrastructure operation.
Renowned for adept <em>problem-solving</em> abilities and a lifelong commitment to learning, I bring an entrepreneurial mindset to every project.
<br/><br/>
My passion lies in crafting intelligent <em>solutions</em> that not only meet but exceed customer expectations, thriving in challenging environments that demand a diverse skill set and
sharp critical thinking. Continuously dedicated to staying ahead of the curve, I invest time in <em>mastering</em> new technologies and tools to ensure optimal performance and innovation.
`

export const ExperienceData = [
  {
    company: 'WUNDERMAN THOMPSON TECH / VML',
    local: 'Pelotas',
    title: 'Backend Engineer',
    path: ['Working'],
    begin: 'January 2022',
    end: 'Current',
    separator: '-',
    description: [
      'Spearheaded full-stack development efforts on high-profile <em>Drupal</em> projects for clients such as <em>FitnessFirst</em> and <em>AB-INBEV</em>.',
      'Engineered a custom <em>Acquia DAM</em> image cropper module, enhancing customer experience by streamlining image curation workflows.',
      'Led the development of a sophisticated multi-page <em>webform</em>, serving as the primary subscription source, with custom components, themes, and integrated external API.',
    ],
    skills: ['Drupal', 'PHP', 'Vue'],
    image: ''
  },
  {
    company: 'POSSIBLE / WUNDERMAN THOMPSON TECH',
    local: 'Pelotas',
    title: 'Frontend Engineer',
    path: ['Hired', 'Work'],
    begin: 'January 2021',
    end: 'Current',
    separator: '-',
    description: [
      'Contributed to diverse client projects including <em>Siemens</em> and <em>DWS Bank</em>, delivering robust frontend solutions.',
      'Developed an interactive game using CreateJS for <em>SporTV</em>, showcasing creativity and innovation in gaming.',
      'Implemented single sign-on (SSO) integration with AzureAD in Symfony 3, enhancing security and user experience.',
      'Crafted <em>mobile</em> applications with Cordova, extending client reach to mobile platforms.',
    ],
    skills: ['Angular', 'React', 'Drupal'],
    image: ''
  },
  {
    company: 'OCTION',
    local: 'Curitiba',
    title: 'Co-Founder & Game Developer',
    path: ['Founded', 'Work', 'Left'],
    begin: 'February 2014',
    end: 'August 2016',
    separator: '-',
    description: [
      'Conceptualized and developed corporate training products, advergames for business expos, and educational games, demonstrating versatility and creativity in <em>game development</em>.',
      'Contributed to the design of the company\'s core teaching methodology, incorporating principles from Piaget and Popper, fostering engaging and effective <em>learning</em> experiences.',
      'Engaged in a niche social media project involving <em>blockchain</em> technology, exploring innovative solutions despite the challenging landscape of cryptocurrency in 2016.',
    ],
    skills: ['Unity3D(C#)', 'Angular', 'Python', 'PHP', 'Mysql'],
    image: ''
  },
  {
    company: 'Banco do Brasil',
    local: 'Curitiba / Manaus',
    title: '',
    path: ['Hired', 'Work', 'Left'],
    begin: 'May 2006',
    end: 'February 2014',
    separator: '-',
    description: [
      'Collaborated with <em>engineering</em> and <em>logistics</em> management in Manaus (AM) to develop a dashboard for cost control in building and renovation projects, optimizing project management processes.',
      'Designed and implemented VBA <em>mainframe</em> scrapers for data collection and analysis, enabling streamlined reporting and issue identification.',
    ],
    skills: ['PHP', 'MySql', 'VBA'],
    image: ''
  },
  {
    company: 'ABBRA',
    local: 'Curitiba',
    title: 'Developer',
    path: ['Hired', 'Work', 'Left'],
    begin: 'April 2004',
    end: 'May 2006',
    separator: '-',
    description: [
      'Engineered a comprehensive system managing the entire legal process lifecycle, from lead generation to contract signing, enhancing operational efficiency and client management.',
      'Developed batch research and verification processes utilizing court databases, enabling efficient analysis of over one million potential clients.',
    ],
    skills: ['PHP', 'MySql', 'Javascript'],
    image: ''
  }
]

export const EducationData = [
  // {
  //   id: 1,
  //   university: 'ACQUIA CERTIFICATION',
  //   skills: ['Drupal', 'PHP', 'Javascript'],
  //   date: 'april 2024',
  //   major: 'DRUPAL 10 Backend Specialist Certification',
  //   description: '',
  //   status: 'certificate'
  // },
  {
    id: 2,
    university: 'ACQUIA CERTIFICATION',
    skills: ['Drupal', 'PHP', 'Javascript'],
    date: 'march 2024',
    major: 'DRUPAL 10 Frontend Specialist Certification',
    description: '',
    status: 'certificate'
  },
  {
    id: 3,
    university: 'ACQUIA CERTIFICATION',
    skills: ['Drupal', 'PHP', 'Javascript'],
    date: 'march 2024',
    major: 'DRUPAL 10 Developer Certification',
    description: '',
    status: 'certificate'
  },
  {
    id: 4,
    university: 'UNIVERSIDADE POSITIVO, Curitiba',
    skills: ['Unity3D', '3DSMax', 'C#', 'Javascript'],
    date: '2013 - 2015',
    major: 'Digital Games',
    description: '',
    status: '(incomplete)'
  },
  {
    id: 5,
    university: 'UNIVERSIDADE FEDERAL DO AMAZONAS, Manaus',
    skills: ['Haskell', 'Python'],
    date: '2011 - 2013',
    major: 'Computer Science',
    description: '',
    status: '(incomplete)'
  },
  {
    id: 6,
    university: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, Curitiba',
    skills: ['C', 'C++'],
    date: '2003 - 2006',
    major: 'Electrical Engineering - Electronics and Telecommunication',
    description: '',
    status: '(incomplete)'
  }
]

export const SkillData = [
  {
    trait_type: '',
    trait: 'Advanced English (native Portuguese)',
    value: 91,
    current: false,
    active: true,
    profiles: ['corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'C#',
    value: 80,
    current: false,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'python',
    value: 60,
    current: false,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'angular',
    value: 80,
    current: false,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'react',
    value: 70,
    current: true,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'PHP',
    value: 80,
    current: true,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
  {
    trait_type: '',
    trait: 'drupal',
    value: 80,
    current: true,
    active: true,
    profiles: ['gaming', 'corporate', 'blockchain']
  },
]

export const InterestData = [
  {
    trait_type: '',
    trait: 'coffee',
    value: 90
  },
  {
    trait_type: '',
    trait: 'craft beers',
    value: 80
  },
  {
    trait_type: '',
    trait: 'soccer',
    value: -40
  },
  {
    trait_type: '',
    trait: 'bitcoin',
    value: 100
  },
  {
    trait_type: '',
    trait: 'bread making',
    value: 90
  },
  {
    trait_type: '',
    trait: 'boxing',
    value: 65
  }
]

export const ProjectData = [
  {
    name: 'A Gift From Hermes',
    description:
      '7 years after its inception, this beta version was made to update my unity and C# skills. Looking forward for some integration of web3 and unity!',
    tech: ['#unity3d', '#c#', '#game'],
    image: 'hermes.png',
    link: 'https://play.unity.com/mg/other/a-gift-from-hermes-v2-1-0'
  },
  {
    name: '"Epic Game"',
    description:
      'Buildspace weekend project: A NFT Turn based game that allows the user create a character from 3 templates and attack a big boss. But beware! The boss has a lot of hp and also attacks. The idea is you need friends to defeat the boss.',
    tech: ['#react', '#web3', '#hardhat', '#game'],
    image: 'epic.png',
    link: 'https://capitol-defenders.herokuapp.com/',
    github: 'https://github.com/brunoscholz/buildspace-nft-game'
  },
  {
    name: 'Cryptozombies',
    description: 'Work in Progress - Based on cryptosombies.io tutorial. You mint your NFT Zombie with a dna based on the chosen name. To increase your zombie army, you feed them CrytoKitties! haha. It uses interface to other contracts on the blockchain!',
    tech: ['#react', '#web3', '#hardhat'],
    image: 'zombie.png',
    link: '',
    github: 'https://github.com/brunoscholz/cryptozombies'
  },
  {
    name: 'DNS/ENS',
    description: 'Buildspace weekend project that creates a NFT name service on the Polygon (layer 2) network.',
    tech: ['#react', '#web3', '#hardhat', '#polygon'],
    image: 'ens.png',
    link: 'https://ens-clone.vercel.app/',
    github: 'https://github.com/brunoscholz/ens-clone'
  },
  {
    name: 'NFT Marketplace',
    description:
      'A marketplace where any user can mint and sell their own non-fungible tokens. NFTs can be applied to physical products as in suplly chains and car documents, leaving a transparent trail of transfer and ownership',
    tech: ['#react', '#web3', '#ipfs', '#truffle'],
    image: 'nft.png',
    link: 'https://nftsmarket.herokuapp.com/home',
    github: 'https://github.com/brunoscholz/nft-poc'
  },
  {
    name: 'Decentralized Exchange',
    description:
      'A decentralized app (dApp) with smart contracts that functions as broker for Ethereum and the generic token created for it.',
    tech: ['#react', '#web3', '#truffle'],
    image: 'dex.png',
    link: 'https://dapp-bootcamp1.herokuapp.com/',
    github: 'https://github.com/brunoscholz/dapp-ethereum-dex'
  },
  {
    name: 'DAO',
    description:
      'Buildspace weekend project building a DAO - decentralized autonomous organization with voting system and treasury.',
    tech: ['#react', '#web3', '#thrid-web'],
    image: 'dao.png',
    link: 'https://condo-dao.vercel.app/',
    github: 'https://github.com/brunoscholz/buildspace-dao'
  },
  {
    name: 'Portfolio',
    description:
      'This website. Using theme switching and different layouts shows the range of skills in design and frontend development',
    tech: ['#react'],
    image: 'resume.png',
    link: '',
    github: 'https://github.com/brunoscholz/resume'
  },
  {
    name: 'Life Fit',
    description:
      'Long-term project at Wunderman Thompson. Big project with several separated gyms. It includes gym attendance, blog posts and contract leads.',
    tech: ['#drupal'],
    image: 'fit.png',
    link: 'https://www.fitnessfirst.de/'
  },
  {
    name: 'Doe Gols',
    description:
      'Project at Wunderman Thompson for a major sports channel in Brazil (Sportv). Worked in the game which is not yet deployed (pic)',
    tech: ['#react', '#createjs'],
    image: 'game.png',
    link: 'https://doegols.globo.com/'
  },
  {
    name: 'Siemens',
    description:
      'Several internal projects at Wunderman Thompson. Worked with mobile accessibility, themes, dynamic content loaded into a page.',
    tech: ['#canvas', '#php', '#angular'],
    image: 'quiz.png',
    link: 'https://play.google.com/store/apps/details?id=com.siemens.quizapp'
  }
]
