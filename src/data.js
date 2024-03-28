export async function getData() {
  try {
    const response = await fetch('https://raw.githubusercontent.com/brunoscholz/resume/master/public/data.json')
    return await response.json()
  } catch(e) {
    return e
  }
}

export const AboutData = `
Fullstack Drupal developer at VML. 15+ years of diverse software engineering experience with specialties in
frontend development, infrastructure operation, and problem solving.
<br/><br/>
Skilled life-long student with an entrepreneurial view, my goal is <em>always</em> to create value
by generating intelligent solutions that fulfill customer's needs. I like <em>challenging</em> situations that
require the use of multiple skills and critical thinking. Usually spending time learning new technologies and tools.
`

export const ExperienceData = [
  {
    company: 'WUNDERMAN THOMPSON TECH / VML',
    local: 'Pelotas',
    title: 'Backend Engineer',
    path: ['Working'],
    begin: 'January 2023',
    end: 'Current',
    separator: '-',
    description: [
      'Fullstack <em>Drupal</em> / Backend Engineer.',
      'Worked in big drupal projects like <em>FitnessFirst</em> and <em>AB-INBEV</em>.',
      'Built <em>Acquia DAM</em> image cropper, a drupal module to help the customer\'s experience curating images and \'translates\' their ideas into DAM\'s queries.',
      'Lead the development of a multipage webform that functions as the primary source of new subscriptions for the company. It has lots of custom components, custom theme, and integrated external API.',
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
      'Several projects for clients like <em>Siemens</em> and <em>DWS</em>.',
      'Implemented a game using CreateJS for <em>SporTV</em>.',
      'Worked on standalone projects for corporate training using scorm.',
      'SSO configuration with AzureAD in Symfony 3.',
      'Built some mobile apps with <em>cordova</em>.',
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
      'Created products aimed at corporate <em>training</em>, advergames for business fairs and educational games.',
      'Helped in developing the core teaching paradigm of the company using ideas from Piaget and Popper.',
      'Worked in a project of niche social media with blockchain. The project, unfortunately was shut down because in 2016 crypto was a very controversial topic.',
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
      'Worked together with <em>engineering</em> and <em>logistics</em> management in Manaus (AM) in the development of a dashboard for cost control in building and renovation projects.',
      'Built several VBA mainframe scrappers for data collecting and filtering for reports and issue identification.'
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
      'Developed a system that took care of the entire process, from lead and first contact to signed legal contract. Batch research and verification in court <em>databases</em> for more than one million potential clients.',
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
    trait: 'English (native Portuguese)',
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
