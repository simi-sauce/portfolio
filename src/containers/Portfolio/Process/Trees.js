import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Box from "common/components/Box";
import Text from "common/components/Text";

export default function Cop() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [mobileScreenHeight, setMobileScreenHeight] = useState(null);
  const [mobileScreenWidth, setMobileScreenWidth] = useState(null);

  const handleBoxClick = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleBoxHover = () => {
    setIsHovered(true);
  };

  const handleBoxLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const handleWindowSizeChange = () => {
      setIsMobileView(window.innerWidth < 768);
      setMobileScreenHeight(window.innerHeight);
      setMobileScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWindowSizeChange);
    handleWindowSizeChange();
    return () => window.removeEventListener("resize", handleWindowSizeChange);
  }, []);

  const customStyles = {
    overlay: {
      zIndex: 100,
      backgroundColor: "#002147 !important",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: isMobileView ? `${mobileScreenWidth}px` : "70%",
      height: isMobileView ? `${mobileScreenHeight}px` : "90%",
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
    fontSize: isMobileView ? "14px" : "16px",
    marginBottom: "5px",
    fontFamily: "'Roboto', sans-serif !important",
  };

  const proposalNameStyle = {
    fontFamily: "'Roboto', sans-serif !important",
    fontSize: isMobileView ? "12px" : "12px",
  };

  return (
    <>
      <Box
        className="class"
        onClick={handleBoxClick}
        onMouseEnter={handleBoxHover}
        onMouseLeave={handleBoxLeave}
        style={{ position: "relative" }}
      >
        <div style={overlayStyle}>
          <div style={projectNameStyle}>
            Decision Trees and Random Forest Project
          </div>
          <div style={proposalNameStyle}>Predicting Potential Customers</div>
        </div>
      </Box>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleBoxClick}
        style={customStyles}
      >
        <iframe
          title="Classification-project"
          src="/Classification-project.pdf#toolbar=0"
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
