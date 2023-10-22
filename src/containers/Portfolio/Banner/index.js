import React from "react";
import PropTypes from "prop-types";
import Icon from "react-icons-kit";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import SocialProfile from "../SocialProfile";
import BannerWrapper from "./banner.style";

import { SOCIAL_PROFILES } from "common/data/Portfolio/data";
import { cornerDownRight } from "react-icons-kit/feather/cornerDownRight";
import PersonImage from "common/assets/image/portfolio/person.png";

const BannerSection = ({
  row,
  contentArea,
  imageArea,
  greetingStyle,
  nameStyle,
  designationStyle,
  aboutStyle,
  roleStyle,
  roleWrapper,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...row}>
          <Box {...contentArea}>
            <Heading  className="hello" content="Hello, I’m" {...greetingStyle} />
            <Heading  content="Fyneface" {...nameStyle} />
            <Heading content="Ndubuisi" {...nameStyle} />
            <Heading content="Cloud/Data Guy" {...designationStyle} />
            <Box {...roleWrapper}>
              {/* <Icon
                icon={cornerDownRight}
                style={{ color: "#3444f1" }}
                size={22}
              /> */}
              {/* <Heading content="Intern at Reesby IT Australia" {...roleStyle} /> */}
            </Box>
            <div>

 <Text className="containap" content="Hi, my name is Fyneface Ndubuisi but you can call me ND." {...aboutStyle} />

 <Text
    className="containa"
    content="I am a Data Scientist with over 4 years of experience using data to find patterns and make predictions and sweet spots that will drive business growth or mitigate risk. My experience has stemmed from ETL, web scraping of data on various websites, exploratory data analysis, A/B test to model deployment and monitoring."
    {...aboutStyle}
  />
   <Text
    className="containav"
    content="I have experience using data visualization tools, machine learning algorithms for supervised and unsupervised, NLP, time series analysis, deep learning, recommender systems and Network analysis while understanding the pros and cons of each approach used."
    {...aboutStyle}
  />
   <Text
    className="containav"
    content="I use tools like SQL, Python, PowerBI, Tableau, and AWS resources for my data projects. I possess the soft skills needed to accomplish tasks/projects alone and as a team, which aids technical and non-technical stakeholders in making informed decisions.I have the tenacity required to find solutions to problems which makes me stand out from my peers.
    Currently, I am working on various projects while continuously developing the hard/soft skills needed to make the world a better place."
    {...aboutStyle}
  />
  {/* <Text
    className="containax"
    content="I have the tenacity required to find solutions to problems which makes me stand out from my peers.
    Currently, I am working on various projects while continuously developing the hard/soft skills needed to make the world a better place."
    {...aboutStyle}
  /> */}
</div>


            {/* <SocialProfile className="social" items={SOCIAL_PROFILES} /> */}
          </Box>
          <Box  {...imageArea} className="boximage image_area">
            <NextImage src={PersonImage} alt="Mat Helme" />
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentArea: PropTypes.object,
  imageArea: PropTypes.object,
  greetingStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  designationStyle: PropTypes.object,
  aboutStyle: PropTypes.object,
  roleStyle: PropTypes.object,
  roleWrapper: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: "wrap",
    alignItems: "stretch",
  },
  contentArea: {
    width: ["100%", "100%", "50%", "40%"],
    p: ["65px 0 80px 0", "65px 0 80px 0", "80px 0 60px 0", "0"],
    flexBox: true,
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: "column",
  },
  imageArea: {
    width: ["100%", "100%", "50%", "60%"],
    flexBox: true,
    alignItems: "flex-end",
  },
  greetingStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "500",
    mb: "8px",
  },
  nameStyle: {
    as: "h2",
    color: "#fff",
    fontSize: ["38px", "38px", "44px", "60px", "80px"],
    fontWeight: "800",
    mb: "6px",
  },
  designationStyle: {
    as: "h3",
    color: "#fff",
    fontSize: ["18px", "18px", "18px", "20px", "30px"],
    fontWeight: "700",
    mb: ["30px", "30px", "25px", "30px", "30px"],
  },
  roleWrapper: {
    flexBox: true,
    mb: "28px",
  },
  roleStyle: {
    as: "h4",
    fontSize: ["18px", "18px", "18px", "18px", "20px"],
    fontWeight: "500",
    color: "#fff",
    mb: "0",
    ml: "10px",
  },
  aboutStyle: {
    fontSize: ["15px", "15px", "15px", "16px", "16px"],
    fontWeight: "400",
    color: "#fff",
    lineHeight: "1.5",
    mb: "50px",
  },
};

export default BannerSection;
