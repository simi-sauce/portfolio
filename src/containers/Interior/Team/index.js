import React, { Fragment, useState, useEffect } from "react";
import Link from "next/link";
import Fade from "react-reveal/Fade";
import Text from "common/components/Text";
import Heading from "common/components/Heading";
import NextImage from "common/components/NextImage";
import Container from "common/components/UI/Container";
import GlideCarousel from "common/components/GlideCarousel";
import GlideSlide from "common/components/GlideCarousel/glideSlide";
import { SectionHeader, CircleLoader } from "../interior.style";
import SectionWrapper, {
  TeamCard,
  ImageWrapper,
  TextWrapper,
  CarouselWrapper,
} from "./team.style";

import { teamData } from "common/data/Interior";

const Team = () => {
  const { title, slogan, members } = teamData;
  const [loading, setLoading] = useState(false);

  const glideOptions = {
    type: "carousel",
    perView: 4,
    gap: 50,
    breakpoints: {
      1200: {
        perView: 3,
        gap: 30,
      },
      767: {
        perView: 2,
        gap: 30,
      },
      480: {
        perView: 1,
      },
    },
  };

  useEffect(() => {
    setLoading(true);
  }, []);

  return (
    <SectionWrapper className="com" id="team">
      <Container className="com" width="1300px">
        <Fade bottom>
          <SectionHeader>
            <Heading as="h5" content={title} />
            <Heading content={slogan} />
          </SectionHeader>
        </Fade>
        <Fade bottom delay={30}>
          <CarouselWrapper>
            {loading ? (
              <GlideCarousel
                carouselSelector="team_carousel"
                options={glideOptions}
                nextButton={<span className="next_arrow" />}
                prevButton={<span className="prev_arrow" />}
              >
                <Fragment>
                  {members.map((member) => (
                    <GlideSlide key={`project_key${member.id}`}>
                      <TeamCard className="team_card">
                        <ImageWrapper className="image_wrapper">
                          <NextImage src={member.avatar} alt={member.name} />
                        </ImageWrapper>
                      </TeamCard>
                    </GlideSlide>
                  ))}
                </Fragment>
              </GlideCarousel>
            ) : (
              <CircleLoader className="alt">
                <div className="circle"></div>
                <div className="circle"></div>
              </CircleLoader>
            )}
          </CarouselWrapper>
        </Fade>
      </Container>
    </SectionWrapper>
  );
};

export default Team;
