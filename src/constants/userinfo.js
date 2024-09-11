import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"
import bankingImage from '../assets/banking.png'

export const userinfo = {
    logoText: "Chin Pyon",
    contact: {
        email: 'cpyon23@gmail.com',
        phone: '404-921-8651',
        countrycode: '+1'
    },
    socials: [
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faLinkedinIn }
    ],
    greeting: {
        title: 'Hi, I am ',
        welcomeContent: "Welcome to my Portfolio!"
    },
    about: {
        heading: 'Passionate Engineer and Lifelong Learner',
        content1: 'Hi! I’m Chin, an AWS Platform Engineer with over 8 years of experience specializing in AWS cloud solutions. My passion for technology began early, and I’ve been dedicated to mastering cloud architecture, platform development, and software engineering ever since. I love to write code, troubleshoot complex issues, and find elegant solutions to challenging problems.',
        content2: 'In my free time, I enjoy exploring new technologies, working on personal coding projects. I’m motivated by the ever-evolving landscape of technology, and I’m constantly striving to improve my skills and knowledge.',
        content3: 'Outside of tech, I have a deep passion for sports, especially basketball. Whether it’s building the next big thing in the cloud or keeping up with player states, I approach everything with the same level of enthusiasm and commitment.',
        resume: "/"
    },
    expertise: {
        expertiseList: [
            {
                title: 'Cloud Architecture',
                description: 'Extensive experience in designing and deploying scalable AWS cloud solutions.'
            },
            {
                title: 'Software Development',
                description: 'Proficient in various programming languages with a strong focus on web applications and API integration.'
            },
            {
                title: 'DevOps Practices',
                description: 'Skilled in CI/CD pipelines, infrastructure as code, and automation to enhance development efficiency.'
            },
        ]
    },
    education: {
        visible: true,
        educationList: 
        {
            time: 'May 2010 - Dec 2016',
            title: 'BS - Computer Science',
            organization: 'Georgia State University'
        }
    },
    experience: {
        visible: true,
        experienceList: [
            {
                company: 'DirecTV',
                position: 'Platform Engineer II',
                time: '08/2021 - 05/2024',
                description: 'In my AWS role, I optimized costs by $10,000/month while maintaining peak performance. Utilized Lambda, Cost Explorer, and CloudWatch for analysis and scalability. Managed security for 150+ systems, emphasized data confidentiality. Improved efficiency by 35% with Postman for API testing and Pandas for data analysis. Proficient in Git for version control, ensured compliance through daily Scrum meetings.'
            },
            {
                company: 'AT&T',
                position: 'Senior Specialist - Software Engineer',
                time: '09/2020 - 08/2021',
                description: 'Refactored AngularJS code to meet Angular 10 standards, boosting performance and maintainability. Proficient in utilizing Oracle Database for mission-critical data in enterprise settings. Integrated React components to enhance existing web app interfaces and user experience. Active participation in daily Scrum calls enhanced Agile processes and team collaboration. Leveraged GitHub for version control, code reviews, and issue tracking, streamlining project management. Generated and reviewed software documentation for accurate technical records.'
            },
            {
                company: 'AT&T',
                position: 'Tech Development Program Engineer II',
                time: '10/2019 - 09/2020',
                description: 'Developed Python unit tests with unittest framework, ensuring code functionality and handling edge cases effectively. Defined resource endpoints and crafted API schemas adhering to RESTful principles, optimizing system integration. Employed HTML and JavaScript to build dynamic web pages, elevating user engagement. Contributed actively to daily Scrum meetings, fostering Agile development and timely project delivery. Managed code repositories and collaborated efficiently using GitHub, organizing branches and facilitating collaborative development.'
            },
            {
                company: 'AT&T',
                position: 'Sr. Specialist - Tech Development Program',
                time: '07/2017 - 10/2019',
                description: 'Efficiently managed 100+ VM and VNF Ids at AT&T Labs, optimizing the Engineering Rules Database. Actively engaged in 25+ mentorship sessions, enriching personal and professional growth. Improved code collaboration efficiency by 20% through strategic GitHub management.'
            }
        ]
    },
    projects: {
        projectList: [
            {
                title: 'Banking',
                description: 'A online banking platform.',
                img: bankingImage,
                link: 'https://github.com/cpyon23/banking', 
            }
        ]
    }
}

export const headings = {
    workHomePage: 'Work',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    resume: 'Resume',
    education: 'Education',
    contact: 'Contact Me',
    home: 'Home'
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}