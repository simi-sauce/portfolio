import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Tabs, { TabPane } from 'rc-tabs';
// import TabContent from 'rc-tabs/lib/TabContent';
// import ScrollableInkTabBar from 'rc-tabs/lib/ScrollableInkTabBar';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import {
  PortfolioShowcaseWrapper,
  PortfolioShowcaseItem,
  PortfolioLink,
  BuiltWith,
  PortfolioMeta,
  MetaItem,
} from './portfolioShowcase.style';
import { PrevButton, NextButton } from '../portfolio.style';
import { PORTFOLIO_SHOWCASE } from 'common/data/Portfolio/data';

const PortfolioShowcase = ({
  sectionWrapper,
  secTitleWrapper,
  secTitle,
  secDescription,
  portfolioImage,
  portfolioDetails,
  titleStyle,
  detailsStyle,
}) => {
  //Carousel Options
  const carouselOptions = {
    type: 'carousel',
    perView: 1,
    gap: 0,
    animationDuration: 900,
  };

  return (
    <Box  className="contain" {...sectionWrapper} as="section" id="portfolio_section">
      <Container  noGutter mobileGutter width="1200px">
        <Box {...secTitleWrapper}>
          <Heading {...secTitle} content="My Projects" />
          <Text
            {...secDescription}
            content="Here, I've included some of my most notable work, showcasing my skills and expertise in cloud computing, data analysis, and software development. Each project highlights my role, scope of work, and achievements, demonstrating my creativity and problem-solving abilities. I'm excited to share my work with you and can't wait to collaborate on future projects.



            "
          />
        </Box>

        <PortfolioShowcaseWrapper>
          <Tabs
          // renderTabBar={() => <ScrollableInkTabBar />}
          // renderTabContent={() => <TabContent animated={false} />}
          >
            {PORTFOLIO_SHOWCASE.map((tabItem, index) => (
              <TabPane
                tab={
                  <Text
                    content={tabItem.title}
                    data-text={tabItem.title}
                    as="span"
                  />
                }
                key={index + 1}
              >
                <GlideCarousel 
                  carouselSelector={`portfolio-showcase-carousel-${index + 1}`}
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
                    {tabItem.portfolioItem.map((portfolioItem, index) => (
                      <GlideSlide key={`PortfolioShowcaseItem-${index}`}>
                        <PortfolioShowcaseItem>
                          <Box {...portfolioImage}>
                            <NextImage
                              src={portfolioItem.image}
                              alt={`PortfolioImage-${index + 1}`}
                            />
                          </Box>
                          <Box {...portfolioDetails}>
                            {/* <PortfolioLink>
                              <Link href={portfolioItem.link || '#'}>
                                <a>VISIT LIVE SITE</a>
                              </Link>
                            </PortfolioLink> */}
                            <Heading
                              content={portfolioItem.title}
                              {...titleStyle}
                            />
                            <Text
                              content={portfolioItem.description}
                              {...detailsStyle}
                            />
                            {portfolioItem.buildWith ? (
                              <BuiltWith>
                                {portfolioItem.buildWith.map((item, index) => (
                                  <span key={`buildWith-item-${index}`}>
                                    {item.content}
                                  </span>
                                ))}
                              </BuiltWith>
                            ) : (
                              ''
                            )}
                          </Box>

                          {portfolioItem.featuredIn ||
                          portfolioItem.view ||
                          portfolioItem.love ||
                          portfolioItem.feedback ? (
                            <PortfolioMeta>
                              {/* {portfolioItem.featuredIn ? (
                                <MetaItem className="meta_featured">
                                  FEATURED IN
                                  <Link
                                    href={portfolioItem.featuredLink || '#'}
                                  >
                                    <a>{portfolioItem.featuredIn}</a>
                                  </Link>
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.view ? (
                                <MetaItem>
                                  <b>{portfolioItem.view}</b> View
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.love ? (
                                <MetaItem>
                                  <b>{portfolioItem.love}</b> Love
                                </MetaItem>
                              ) : (
                                ''
                              )}
                              {portfolioItem.feedback ? (
                                <MetaItem>
                                  <b>{portfolioItem.feedback}</b> Feedback
                                </MetaItem>
                              ) : (
                                ''
                              )} */}
                            </PortfolioMeta>
                          ) : (
                            ''
                          )}
                        </PortfolioShowcaseItem>
                      </GlideSlide>
                    ))}
                  </>
                </GlideCarousel>
              </TabPane>
            ))}
          </Tabs>
        </PortfolioShowcaseWrapper>
      </Container>
    </Box>
  );
};

PortfolioShowcase.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secTitle: PropTypes.object,
  secDescription: PropTypes.object,
  portfolioImage: PropTypes.object,
  portfolioDetails: PropTypes.object,
  titleStyle: PropTypes.object,
  detailsStyle: PropTypes.object,
};

PortfolioShowcase.defaultProps = {
  sectionWrapper: {
    pt: ['60px', '80px', '100px', '110px', '150px'],
    pb: ['60px', '80px', '100px', '110px', '150px'],
  },
  secTitleWrapper: {
    width: ['100%', '100%', '60%', '50%', '50%'],
    mb: ['50px', '65px'],
  },
  secTitle: {
    fontSize: ['22px', '26px', '26px', '30px', '30px'],
    fontWeight: '600',
    color: '#302b4e',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '20px'],
  },
  secDescription: {
    fontSize: ['15px', '16px'],
    fontWeight: '400',
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
  portfolioImage: {
    width: [1, 1, 1 / 2],
  },
  portfolioDetails: {
    width: [1, 1, 1 / 2],
    p: ['30px 0 0 0', '40px 0 0 0', '0 0 0 30px', '0 50px', '0 50px'],
  },
  titleStyle: {
    fontSize: ['22px', '22px', '26px', '40px', '40px'],
    fontWeight: '600',
    color: '#302b4e',
    mb: '17px',
  },
  detailsStyle: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#43414e',
    lineHeight: '1.5',
    mb: '0',
  },
};

export default PortfolioShowcase;
