import React from "react";
import styled from "styled-components";

import ANN from "./ANN";
import ModalPDF from "./Time";
import PCA from "./PCA";
import Unsupervised from "./Unsupervised";
import Marketing from "./Marketing";
import Trees from "./Trees";
import Classification from "./Classification";
import Cop from "./cop";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  margin-left: 5%;
  padding: 4rem;

  > * {
    height: 200px;
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;

    > * {
      width: calc(100% - 20px);
      margin: 0 10px;
    }
  }

  @media only screen and (min-width: 601px) and (max-width: 768px) {
    grid-template-columns: repeat(2, calc(33.33% - 33.33px + 50px));
    margin-left: 0;

    > * {
      margin: 0 16px 16px 0;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }
`;

const NineBoxes = () => {
  return (
    <Container>
      <Cop />
      <Trees />
      <Classification />
      <Marketing />
      <Unsupervised />
      <PCA />
      <ANN />
      <ModalPDF />
    </Container>
  );
};

export default NineBoxes;
