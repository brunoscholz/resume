export const AboutData = `
Developer with 15+ years of experience in diverse fields and an entrepreneurial view, my goal is <em>always</em>
to create value by generating intelligent solutions that fulfill client's needs. I like <emchallenging</em> situations
that require the use of multiple skills and critical thinking.
As a skilled life-long student, I'm now diving into the <em>blockchain</em> rabbit-hole while deepening my knowledge
in <em>fullstack</em> tools.
`

export const ExperienceData = [
  {
    company: 'POSSIBLE / WUNDERMAN THOMPSON TECH',
    local: 'Pelotas',
    title: 'Frontend Engineer',
    date: 'January 2021 - Current',
    description:
      'Becoming fullstack <em>Drupal</em>. Held a few client technical meetings and some solo projects. Several projects for clients like <em>Siemens</em>, <em>DWS</em> and <em>SporTV</em>.',
    skills: ['Angular', 'React', 'Drupal'],
    image: ''
  },
  {
    company: 'OCTION',
    local: 'Curitiba',
    title: 'Co-Founder & Game Developer',
    date: 'February 2014 - August 2016',
    description:
      'Creating products directed to corporate <em>training</em>, advergames for business fairs and educational <em>games</em>.',
    skills: ['Unity3D(C#)', 'Angular', 'Python', 'PHP', 'Mysql'],
    image: ''
  },
  {
    company: 'Banco do Brasil',
    local: 'Curitiba / Manaus',
    title: '',
    date: 'May 2006 - February 2014',
    description:
      'Worked together with <em>engineering</em> and <em>logistics</em> management in Manaus (AM) in the development of a dashboard for cost control in building and renovation projects.',
    skills: ['PHP', 'MySql', 'VBA'],
    image: ''
  },
  {
    company: 'ABBRA',
    local: 'Curitiba',
    title: 'Developer',
    date: 'April 2004 - May 2006',
    description:
      'Development of <em>dynamic processes</em>, from contract to complete legal process with customer leads, batch research and verification in court <em>databases</em> for more than one million potential clients.',
    skills: ['PHP', 'MySql'],
    image: ''
  }
]

export const EducationData = [
  {
    id: 1,
    university: 'UDEMY.COM',
    skills: ['Javascript', 'Solidity', 'Truffle', 'Web3'],
    date: '2017, 2021',
    major: 'Solidity Ethereum Developer: Build Blockchain DApps',
    description: '',
    image: ''
  },
  {
    id: 2,
    university: 'UNIVERSIDADE POSITIVO, Curitiba',
    skills: ['Unity3D', '3DSMax', 'C#', 'Javascript'],
    date: '2013 - 2015 (incomplete)',
    major: 'Digital Games',
    description: '',
    image: ''
  },
  {
    id: 3,
    university: 'UNIVERSIDADE FEDERAL DO AMAZONAS, Manaus',
    skills: ['Haskell', 'Python'],
    date: '2011 - 2013 (incomplete)',
    major: 'Computer Science',
    description: '',
    image: ''
  },
  {
    id: 4,
    university: 'UNIVERSIDADE TECNOLÓGICA FEDERAL DO PARANÁ, Curitiba',
    skills: ['C', 'C++'],
    date: '2003 - 2006 (incomplete)',
    major: 'Electrical Engineering - Electronics and Telecommunication',
    description: '',
    image: ''
  }
]

export const SkillData = [
  {
    trait_type: '',
    trait: 'English (native Portuguese)',
    value: 90,
    current: false
  },
  {
    trait_type: '',
    trait: 'PHP',
    value: 70,
    current: false
  },
  {
    trait_type: '',
    trait: 'react',
    value: 70,
    current: true,
    label: ''
  },
  {
    trait_type: '',
    trait: 'drupal',
    value: 50,
    current: true
  },
  {
    trait_type: '',
    trait: 'solidity',
    value: 60,
    current: true
  },
  {
    trait_type: '',
    trait: 'angular',
    value: 90,
    current: false,
    label: ''
  }
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
