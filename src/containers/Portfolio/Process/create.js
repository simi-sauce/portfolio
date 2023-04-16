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
