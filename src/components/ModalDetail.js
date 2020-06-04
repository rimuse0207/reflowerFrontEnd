import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import styled from "styled-components";
import FlowerDataDetailContainer from "../containers/FlowerDataDetatilContainer";

const BackGroud = styled.div``;

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#rootModal");

function ModalPra({ number, cancel, detailon, backUrl, name }) {
  const [modalIsOpen] = React.useState(detailon);
  console.log(backUrl);
  function closeModal() {
    cancel();
  }
  const asdads = {
    width: "100%",

    backgroundImage: `url(${backUrl})`,
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "auto",
  };
  const Asad = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    width: 100%;
    height: 100%;
  `;

  const H2 = styled.h1`
    margin-top: 0px;
    padding-top: 40px;
    padding-left: 20px;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const customStyles = {
    content: {
      width: "70%",
      padding: "0",
      height: "90%",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",

      filter: "alpha(opacity=30)",
    },
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <BackGroud style={asdads}>
          <Asad>
            <H2>🌴식물 정보</H2>
            <FlowerDataDetailContainer
              number={number}
              name={name}
              close={closeModal}
            ></FlowerDataDetailContainer>
          </Asad>
        </BackGroud>
      </Modal>
    </>
  );
}
export default ModalPra;

ReactDOM.render(<ModalPra></ModalPra>, document.getElementById("rootModal"));
