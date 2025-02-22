/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Antonio Diaz Barbancho",
  title: "Hi all, I'm Antonio",
  subTitle: emoji(
    "A passionate Cloud & DevOps Engineer 🚀 specializing in Kubernetes, Azure, and Infrastructure as Code. Experienced in building and maintaining robust cloud architectures with a focus on automation and reliability."
  ),
  resumeLink: "", // Add your resume link if desired
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "", // Add your GitHub URL
  linkedin: "https://www.linkedin.com/in/antonio-diazbarbancho-a64832259",
  gmail: "mesidiez@gmail.com",
  // Remove or comment out unused social media links
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CLOUD & DEVOPS ENGINEER FOCUSED ON BUILDING RELIABLE AND SCALABLE INFRASTRUCTURE",
  skills: [
    emoji("⚡ Design and implement cloud infrastructure solutions in Azure"),
    emoji("⚡ Manage and optimize Kubernetes clusters for high availability"),
    emoji("⚡ Implement Infrastructure as Code using Terraform and GitOps practices"),
    emoji("⚡ Set up comprehensive monitoring and observability solutions")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "terraform",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "linux",
      fontAwesomeClassname: "fab fa-linux"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Universidad de Córdoba",
      logo: require("./assets/images/cordobaLogo.png"), // Add university logo
      subHeader: "Grado en Ingeniería Informática",
      duration: "2019 - June 2024"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Site Reliability Engineer",
      company: "Sogeti",
      companylogo: require("./assets/images/sogetiLogo.png"), // Add company logo
      date: "August 2024 - Present",
      desc: "Managing and optimizing cloud infrastructure with focus on Kubernetes-based architectures",
      descBullets: [
        "Kubernetes administration and implementation in Azure",
        "Continuous Deployment with ArgoCD and GitOps practices",
        "Infrastructure automation using Terraform",
        "Monitoring implementation with Prometheus, Grafana, and Datadog"
      ]
    },
    {
      role: "Cloud Engineer",
      company: "Palco4",
      companylogo: require("./assets/images/palco4Logo.png"), // Add company logo
      date: "June 2023 - August 2024",
      desc: "Managed cloud infrastructure and Kubernetes deployments",
      descBullets: [
        "Cloud server and Kubernetes administration",
        "Application deployment with Helm",
        "Monitoring implementation with Zabbix, Grafana, and Prometheus",
        "CI/CD implementation with Jenkins"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and Professional Achievements",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Fundamentals",
      subtitle: "Microsoft Azure Fundamentals certification validates foundational knowledge of cloud services and Azure.",
      image: require("./assets/images/azureFundamentalsLogo.png"),
      imageAlt: "Azure Fundamentals Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add your certification URL if available
        }
      ]
    },
    {
      title: "CCNA Cisco",
      subtitle: "Cisco Certified Network Associate certification demonstrates networking fundamentals knowledge.",
      image: require("./assets/images/ccnaLogo.png"),
      imageAlt: "CCNA Logo",
      footerLink: [
        {
          name: "Certification",
          url: "" // Add your certification URL if available
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  display: true,
  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true"
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
