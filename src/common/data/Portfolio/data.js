import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialDribbbleOutline } from "react-icons-kit/ionicons/socialDribbbleOutline";
import { socialGithub } from "react-icons-kit/ionicons/socialGithub";
import { socialGoogleplusOutline } from "react-icons-kit/ionicons/socialGoogleplusOutline";
import { socialWhatsappOutline } from "react-icons-kit/ionicons/socialWhatsappOutline";
import { linkedin } from "react-icons-kit/ikons/linkedin";

import Awardee1 from "../../assets/image/portfolio/awardee-1.png";
import Awardee2 from "../../assets/image/portfolio/awardee-2.png";
import Awardee3 from "../../assets/image/portfolio/awardee-3.png";
import Awardee4 from "../../assets/image/portfolio/awardee-4.png";
import AwardImage1 from "../../assets/image/portfolio/award-1.png";
import AwardImage2 from "../../assets/image/portfolio/award-2.png";
import AwardImage3 from "../../assets/image/portfolio/award-3.png";
import AwardImage4 from "../../assets/image/portfolio/award-4.png";
import AwardImage5 from "../../assets/image/portfolio/award-5.png";
import AwardImage6 from "../../assets/image/portfolio/award-6.png";

import PortfolioImage1 from "../../assets/image/portfolio/portfolio-1.jpg";
import PortfolioImage2 from "../../assets/image/portfolio/portfolio-2.jpg";
import PortfolioImage3 from "../../assets/image/portfolio/portfolioo-1.jpg";
import PortfolioImage4 from "../../assets/image/portfolio/portfoliooo-1.jpg";
import PortfolioImage5 from "../../assets/image/portfolio/portfolioooo-1.jpg";
import PortfolioImage6 from "../../assets/image/portfolio/portfoliooooo-1.jpg";

import Step1 from "../../assets/image/portfolio/step-1.png";
import Step2 from "../../assets/image/portfolio/step-2.png";
import Step3 from "../../assets/image/portfolio/step-3.png";

import SkillIcon1 from "../../assets/image/portfolio/skill-1.svg";
import SkillIcon2 from "../../assets/image/portfolio/skill-2.svg";
import SkillIcon3 from "../../assets/image/portfolio/skill-3.svg";
import SkillIcon4 from "../../assets/image/portfolio/skill-4.svg";

import Client1 from "../../assets/image/portfolio/client-1.png";
import Client2 from "../../assets/image/portfolio/client-2.png";
import Client3 from "../../assets/image/portfolio/client-3.png";
import Client4 from "../../assets/image/portfolio/client-4.png";
import Client5 from "../../assets/image/portfolio/client-5.png";
import Client6 from "../../assets/image/portfolio/client-6.png";

import Reviewer1 from "../../assets/image/portfolio/client-avatar-1.jpg";
import Reviewer2 from "../../assets/image/portfolio/client-avatar-2.jpg";
import Reviewer3 from "../../assets/image/portfolio/client-avatar-3.jpg";

export const SOCIAL_PROFILES = [
  {
    icon: socialTwitter,
    url: "#",
  },
  {
    icon: socialFacebook,
    url: "#",
  },
  {
    icon: socialWhatsappOutline,
    url: "#",
  },
  {
    icon: socialGithub,
    url: "#",
  },
  {
    icon: linkedin,
    url: "#",
  },
];

export const MENU_ITEMS = [
  {
    label: "ME",
    path: "#banner_section",
    offset: "0",
  },
  {
    label: "PROJECT",
    path: "#portfolio_section",
    offset: "0",
  },
  {
    label: "CERT",
    path: "#awards_section",
    offset: "0",
  },
  {
    label: "WHY ME?",
    path: "#process_section",
    offset: "0",
  },
];

export const awar = {
  ink: "./MIT.pdf",
};

export const AWARDS = [
  {
    awardLogo: AwardImage1,
    awardName: "AWS Certified Practitioner",
    awardDetails: "Cloud concepts and services",
    awardeeLogo: Awardee1,
    awardeeName: "Cloud",
    date: "Dec 2022",
    link: "./AWS Certified Cloud Practitioner certificate.pdf",
  },
  {
    awardLogo: AwardImage2,
    awardName: "Tableau Desktop Specialist",
    awardDetails: "Data Analyst",
    awardeeLogo: Awardee2,
    awardeeName: "Data analytics",
    date: "Nov 2022",
  },
  {
    awardLogo: AwardImage3,
    awardName: "Certified Data Analyst Profesional",
    awardDetails: "Data Camp",
    awardeeLogo: Awardee3,
    awardeeName: "Profesional Analyst",
    date: "August 2022",
    link: "./datacamp cert.pdf",
  },
  {
    awardLogo: AwardImage4,
    awardName: "Applied Data Science Program",
    awardDetails: "MIT",
    awardeeLogo: Awardee4,
    awardeeName: "(MIT) Professional ",
    date: "July 2022",
    link: "./MIT.pdf",
  },
  {
    awardLogo: AwardImage5,
    awardName: "Master of Applied Geophysics",
    awardDetails: "MSC",
    awardeeLogo: Awardee4,
    awardeeName: "UNIVERSITY OF LAGOS",
    date: "July 2021",
  },
  {
    awardLogo: AwardImage6,
    awardName: "Ultimate MySQL Bootcamp",
    awardDetails: "MYSQL",
    awardeeLogo: Awardee4,
    awardeeName: "UDEMY",
    date: "OCT 2020",
    link: "./mysql.pdf",
  },
];

export const PORTFOLIO_SHOWCASE = [
  {
    title: "MARKET CAMPAIGN",
    portfolioItem: [
      {
        title: "MARKET CAMPAIGN ANALYSIS",
        description:
          "Analyzing the marketing campaigns to help Chief Marketing officer devise the next strategy to address some important business problems/questions related to  customer demographics, product preferences, channel performances using Data  analysis/visualizations.",
        image: PortfolioImage1,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "Data",
          },
          {
            content: "ML",
          },
          {
            content: "Cloud",
          },
        ],
      },
      // {
      //   title: "RedQ, Inc. mobile app",
      //   description:
      //     "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
      //   image: PortfolioImage2,
      //   link: "#",
      //   featuredIn: "AppStore",
      //   featuredLink: "#",
      //   view: "8.5K",
      //   love: "5.5K",
      //   feedback: "3.2K",
      //   buildWith: [
      //     {
      //       content: "Data",
      //     },
      //     {
      //       content: "ML",
      //     },
      //     {
      //       content: "Cloud",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "PREDICTION",
    portfolioItem: [
      {
        title: "HOUSE PRICE PREDICTION & HOTEL BOOKING CANCELATION",
        description:
          "Predicting house prices and predicting the cancellation of hotel bookings which will  help in formulating profitable policies for cancellations and refunds using Linear Regression, Logistic Regression, KNN models",
        image: PortfolioImage3,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "Data",
          },
          {
            content: "ML",
          },
          {
            content: "Cloud",
          },
        ],
      },
      // {
      //   title: "RedQ, Inc. mobile app",
      //   description:
      //     "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
      //   image: PortfolioImage2,
      //   link: "#",
      //   featuredIn: "AppStore",
      //   featuredLink: "#",
      //   view: "8.5K",
      //   love: "5.5K",
      //   feedback: "3.2K",
      //   buildWith: [
      //     {
      //       content: "Data",
      //     },
      //     {
      //       content: "ML",
      //     },
      //     {
      //       content: "Cloud",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "CUSTOMER SEGMENTATION",
    portfolioItem: [
      {
        title: "CUSTOMER SEGMENTATION",
        description:
          "Bank customer segmentation to help the bank in upgrading the service delivery model to ensure that customers queries are resolved faster using dimensionality   reduction and Clustering techniques such as PCA, t-SNE, K means, K-medoids,  DBSCAN, GMM, Hierarchical clustering to find patterns",
        image: PortfolioImage4,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "Data",
          },
          {
            content: "ML",
          },
          {
            content: "Cloud",
          },
        ],
      },
      // {
      //   title: "RedQ, Inc. mobile app",
      //   description:
      //     "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
      //   image: PortfolioImage2,
      //   link: "#",
      //   featuredIn: "AppStore",
      //   featuredLink: "#",
      //   view: "8.5K",
      //   love: "5.5K",
      //   feedback: "3.2K",
      //   buildWith: [
      //     {
      //       content: "Data",
      //     },
      //     {
      //       content: "ML",
      //     },
      //     {
      //       content: "Cloud",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "FORECASTING",
    portfolioItem: [
      {
        title: "CUSTOMER LOAN ELIGIBILITY & AMAZON STOCK PRICE FORECASTING",
        description:
          "Predicting the eligibility of bank customers for loan using Decision Trees, Random  Forest to enable banks maximize profits and forecasting the stock prices using Time  Series analysis",
        image: PortfolioImage5,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "Data",
          },
          {
            content: "ML",
          },
          {
            content: "Cloud",
          },
        ],
      },
      // {
      //   title: "RedQ, Inc. mobile app",
      //   description:
      //     "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
      //   image: PortfolioImage2,
      //   link: "#",
      //   featuredIn: "AppStore",
      //   featuredLink: "#",
      //   view: "8.5K",
      //   love: "5.5K",
      //   feedback: "3.2K",
      //   buildWith: [
      //     {
      //       content: "Data",
      //     },
      //     {
      //       content: "ML",
      //     },
      //     {
      //       content: "Cloud",
      //     },
      //   ],
      // },
    ],
  },
  {
    title: "RECOMMENDATION SYSTEM",
    portfolioItem: [
      {
        title: "AMAZON PRODUCT RECOMMENDATION SYSTEM",
        description:
          "A recommendation system to recommend the best products to the users on an ecommerce website using Rank Based Recommendation Systems, Similarity Based  Recommendation Systems, Matrix Factorization Based Recommendation Systems",
        image: PortfolioImage6,
        link: "#",
        featuredIn: "AWWWARDS",
        featuredLink: "#",
        view: "4.5K",
        love: "1.5K",
        feedback: "1.2K",
        buildWith: [
          {
            content: "Data",
          },
          {
            content: "ML",
          },
          {
            content: "Cloud",
          },
        ],
      },
      // {
      //   title: "RedQ, Inc. mobile app",
      //   description:
      //     "An effective and immersive user experience is what catches the attention and spreads a clear message. That's why we attach great importance to the fact that ergonomics serves the design, and that this design is innovative and neat.",
      //   image: PortfolioImage2,
      //   link: "#",
      //   featuredIn: "AppStore",
      //   featuredLink: "#",
      //   view: "8.5K",
      //   love: "5.5K",
      //   feedback: "3.2K",
      //   buildWith: [
      //     {
      //       content: "React Native",
      //     },
      //     {
      //       content: "Firebase",
      //     },
      //     {
      //       content: "Styled Component",
      //     },
      //   ],
      // },
    ],
  },
];

export const PROCESS_STEPS = [
  {
    image: Step1,
    title: "1. Research",
    description:
      "Let us research your data and validate your hypotheses with statistical analysis, data visualization, and real-world insights.",
  },
  {
    image: Step2,
    title: "2. Design",
    description:
      "Let us help you understand user stories and validate your design ideas with real users using data-driven design sprints.",
  },
  {
    image: Step3,
    title: "3. Build",
    description:
      "Build data-driven solutions with machine learning and agile methodologies, guided by our data analysis expertise.",
  },
];

export const SERVICE_LIST = [
  {
    title: "  Data Analyst",
    listItems: [
      {
        content: "Phyton",
      },
      {
        content: "Mongo DB",
      },
      
      {
        content: "Tableau",
      },
      {
        content: "Excel",
      },
      {
        content: "Excel, A/B test",
      },
      {
        content: "Numpy",
      },
      {
        content: "Pandas",
      },
      {
        content: "Seaborn",
      },
    ],
  },
  {
    title: "Machine Learning",
    listItems: [
      {
        content: "Tensorflow",
      },
      {
        content: "Suprise",
      },
      {
        content: "OOP",
      },
    ],
  },
  {
    title: "Cloud Computing",
    listItems: [
      {
        content: "Cloud Architecture",
      },
      {
        content: "Cloud Security",
      },
      {
        content: "Cloud Infrastructure Management",
      },
    ],
  },
  {
    title: "Hobbies",
    listItems: [
      {
        content: "Football",
      },
      {
        content: "Swimming",
      },
      {
        content: "Chess",
      },
    ],
  },
];

export const SKILLS = [
  {
    title: "Machine Learning Algorithms",
    description:
      "As an algorithm expert, I deliver impactful solutions, making me a valuable asset to any team.",
    icon: SkillIcon1,
    successRate: "90",
  },
  {
    title: "Analyze Data",
    description:
      "I turn complex data into actionable insights, making me a valuable asset to any team's decision-making.",
    icon: SkillIcon2,
    successRate: "85",
  },
  {
    title: "Finding Pattern",
    description:
      "My keen eye for detail uncovers hidden patterns, delivering valuable insights to data-driven teams.",
    icon: SkillIcon3,
    successRate: "80",
  },
  {
    title: "Providing Insights",
    description:
      "With my talent for transforming complex data into valuable insights, I add immense value to any data-driven team.",
    icon: SkillIcon4,
    successRate: "70",
  },
];

export const CLIENTS = [
  {
    image: Client1,
    title: "Microsoft",
  },
  {
    image: Client2,
    title: "Airbnb",
  },
  {
    image: Client3,
    title: "Adidas",
  },
  {
    image: Client4,
    title: "IBM",
  },
  {
    image: Client5,
    title: "Amazon",
  },
  {
    image: Client6,
    title: "Google",
  },
];

export const TESTIMONIAL = [
  {
    image: Reviewer1,
    review: "Data Science (machine learning & AI) intern",
    name: "Reesby IT Australia",
    // designation: "Founder & CEO",
    twitterProfile: "https://twitter.com/redqinc",
    // organization: "@Tonquin",
    organizationURL: "https://redq.io/",
  },
  {
    image: Reviewer2,
    review: "Data Analyst",
    name: "Docsword Oil and Gas Limited",
    // designation: "Co-Founder & CTO",
    twitterProfile: "https://twitter.com/redqinc",
    // organization: "@Tonquin",
    organizationURL: "https://redq.io/",
  },
  {
    image: Reviewer3,
    review: "Petroleum Geophysicist",
    name: "Dharmattan Nigeria Limited",
    // designation: "Co-Founder & COO",
    twitterProfile: "https://twitter.com/redqinc",
    // organization: "@Tonquin",
    organizationURL: "https://redq.io/",
  },
];

export const FOOTER_MENU = [
  {
    label: "Contact",
    path: "#",
  },
  {
    label: "Privacy",
    path: "#",
  },
  {
    label: "Cookie Policy",
    path: "#",
  },
];
