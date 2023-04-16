import React, { useState } from "react";
import Modal from "react-modal";
import Box from "common/components/Box";
import Text from "common/components/Text";

export default function Unsupervised() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleBoxClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleBoxHover = () => {
    setIsHovered(true);
  };

  const handleBoxLeave = () => {
    setIsHovered(false);
  };

  const customStyles = {
    overlay: {
      zIndex: 100,
      backgroundColor: "rgba(0, 0, 0, 0.6)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "70%",
      height: "90%",
      overflow: "auto",
      animationName: modalIsOpen ? "slideInLeft" : "slideOutLeft",
      animationDuration: "5s",
    },
  };

  const customCloseButtonStyle = {
    borderRadius: "20px",
    backgroundColor: "#0077cc",
    color: "#ffffff",
    padding: "10px",
    fontSize: "16px",
    border: "none",
    cursor: "pointer",
    outline: "none",
    marginTop: "10px",
  };

  const customIframeStyle = {
    marginBottom: "0",
    backgroundColor: "#ffffff",
  };

  const overlayStyle = {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    top: "0",
    left: "0",
    width: "100%",
    height: "50%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "#ffffff",
    fontWeight: "bold",
    zIndex: "1",
    transition: "all 0.5s",
    transform: isHovered ? "translateY(0)" : "translateY(100%)",
    cursor: "pointer",
  };

  const projectNameStyle = {
    fontSize: "16px",
    fontFamily: "'Roboto', sans-serif !important",
    marginBottom: "5px",
  };

  const proposalNameStyle = {
    fontSize: "12px",
    fontFamily: "'Roboto', sans-serif !important",
  };

  return (
    <>
      <Box
        className="classicpp"
        onClick={handleBoxClick}
        onMouseEnter={handleBoxHover}
        onMouseLeave={handleBoxLeave}
        style={{ position: "relative" }}
      >
        <div style={overlayStyle}>
          <div style={projectNameStyle}>Unsupervised Learning Project</div>
          <div style={proposalNameStyle}>
            AllLife Bank Customer Segmentation
          </div>
        </div>
      </Box>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleBoxClick}
        style={customStyles}
      >
        <iframe
          title="Unsupervised_Learning_Project"
          src="/Unsupervised_Learning_Project.pdf#toolbar=0"
          width="100%"
          height="550px"
          style={customIframeStyle}
        ></iframe>
        <button onClick={handleBoxClick} style={customCloseButtonStyle}>
          Close
        </button>
      </Modal>
    </>
  );
}
