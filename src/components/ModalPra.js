import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import NaverMapDis from "./NaverMapDis";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#rootModal");

function ModalPra({ checked, close, x, y, position }) {
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(checked);

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    close();
  }

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <button onClick={closeModal}>close</button>
        <NaverMapDis x={x} y={y} positionsd={position}></NaverMapDis>
      </Modal>
    </div>
  );
}
export default ModalPra;

ReactDOM.render(<ModalPra></ModalPra>, document.getElementById("rootModal"));
