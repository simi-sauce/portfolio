import React from "react";
import PropTypes from "prop-types";
import Box from "common/components/Box";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";




import { AWARDS } from "common/data/Portfolio/data";

import { PrevButton, NextButton } from "../portfolio.style";
import {
  AwardSectionWrapper,
  AwardItem,
  AwardeeWrapper,
  AwardeeLogo,
  AwardeeDetails,
  AwardImageWrapper,
} from "./awards.style";

const AwardsSection = ({
  secTitleWrapper,
  secTitle,
  secDescription,
  awardLogoStyle,
  awardNameStyle,
  awardDetailsStyle,
  awardeeLogoStyle,
  awardeeNameStyle,
  awardDateStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: "carousel",
    autoplay: 4000,
    perView: 4,
    gap: 30,
    animationDuration: 800,
    breakpoints: {
      990: {
        perView: 3,
      },
      767: {
        perView: 2,
      },
      500: {
        perView: 1,
      },
    },
  };



  const checkItOutLinkStyle = {
    backgroundColor: "#007bff",
    color: "white", // Change to white to make the text more visible
    padding: "8px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "20px",
    marginTop: "20px", // Increase the margin top to make the button more spaced out
    textDecoration: "none", // Remove underline from the link
  };



  return (
    <AwardSectionWrapper className="contai" id="awards_section">
      <Container noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading
            className="conta"
            {...secTitle}
            content="Education &amp; Cert"
          />
          <Text
            className="conta"
            {...secDescription}
            content="I'm passionate about learning and staying up-to-date with industry trends. These accomplishments demonstrate my commitment to continued professional development.It’s nice to feel appreciated!"
          />
        </Box>

        <GlideCarousel
          carouselSelector="awards-carousel"
          options={carouselOptions}
          prevButton={
            <PrevButton>
              <span />
            </PrevButton>
          }
          nextButton={
            <NextButton>
              <span />
            </NextButton>
          }
        >
        
          <>
            {AWARDS.map((award, index) => (
              <GlideSlide key={`award-item-${index}`}>
                <AwardItem>
                  <AwardImageWrapper>
                    <NextImage
                      src={award.awardLogo}
                      alt={`award-logo-${index}`}
                      {...awardLogoStyle}
                    />
                  </AwardImageWrapper>
                  <Heading content={award.awardName} {...awardNameStyle} />
                  <Text content={award.awardDetails} {...awardDetailsStyle} />
                  {award.link && (
                    <AwardeeWrapper>
                      <AwardeeDetails>
                        {/* <Heading
                          content={award.awardeeName}
                          {...awardeeNameStyle}
                        /> */}
                        {/* <a
                          href={award.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          {...checkItOutLinkStyle}
                        >
                          Check it out!
                        </a> */}
                      </AwardeeDetails>
                    </AwardeeWrapper>
                  )}
                </AwardItem>
              </GlideSlide>
            ))}
          </>
         
        </GlideCarousel>
      </Container>
    </AwardSectionWrapper>
  );
};


AwardsSection.propTypes = {
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  awardLogoStyle: PropTypes.object,
  awardNameStyle: PropTypes.object,
  awardDetailsStyle: PropTypes.object,
  awardeeLogoStyle: PropTypes.object,
  awardeeNameStyle: PropTypes.object,
  awardDateStyle: PropTypes.object,
};

AwardsSection.defaultProps = {
  secTitleWrapper: {
    width: ["100%", "100%", "60%", "50%", "50%"],
    mb: "90px",
  },
  secTitle: {
    fontSize: ["22px", "26px", "26px", "30px", "30px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.34",
    mb: ["15px", "18px", "18px", "20px", "20px"],
  },
  secDescription: {
    fontSize: ["15px", "16px"],
    fontWeight: "400",
    color: "#43414e",
    lineHeight: "1.5",
    mb: "0",
  },
  awardLogoStyle: {
    ml: "auto",
    mr: "auto",
    mb: "25px",
  },
  awardNameStyle: {
    fontSize: ["16px", "16px", "18px", "20px"],
    fontWeight: "600",
    color: "#302b4e",
    lineHeight: "1.35",
    textAlign: "center",
    mb: "17px",
  },
  awardDetailsStyle: {
    fontSize: ["15px", "15px", "15px", "16px"],
    color: "#43414e",
    lineHeight: "1.5",
    textAlign: "center",
    mb: "0",
  },
  awardeeNameStyle: {
    fontSize: "16px",
    color: "#9391a5",
    lineHeight: "1.35",
    fontWeight: "600",
    mb: "4px",
  },
  awardDateStyle: {
    fontSize: "12px",
    color: "#9391a5",
    lineHeight: "1.35",
    mb: "0",
  },
};

export default AwardsSection;
