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
            <Heading content="Hello, I’m" {...greetingStyle} />
            <Heading content="Fyneface" {...nameStyle} />
            <Heading content="Ndubuisi" {...nameStyle} />
            <Heading content="Data Analyst" {...designationStyle} />
            <Box {...roleWrapper}>
              {/* <Icon
                icon={cornerDownRight}
                style={{ color: "#3444f1" }}
                size={22}
              /> */}
              {/* <Heading content="Intern at Reesby IT Australia" {...roleStyle} /> */}
            </Box>
            <Text
              className="containa"
              content="Hi my name is Fyneface Ndubuisi, I work as a Data Analyst and Project Manager at Docsword Oil and Gas Ltd.As a data analyst and data scientist   (with great enthusiasm for cloud migration and deployments), I translate data into valuable and comprehensible insights. My goal is to improve results, make the right decisions and save costs for you. I am experienced in machine learning, supervised and unsupervised algorithms, and data visualization techniques to present the results. I use SQL, Excel, Python,  and Tableau for my data projects. I also have personal experience in using AWS cloud services for deploying static websites, cloud storage, security and migration. "
              {...aboutStyle}
            />
            <SocialProfile items={SOCIAL_PROFILES} />
          </Box>
          <Box {...imageArea} className="image_area">
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
