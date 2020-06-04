import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import styled from "styled-components";
import Comment from "./Commnet";
import "../../App.css";
import { connect } from "react-redux";
import {
  postComment,
  getComment,
  initialForm,
} from "../../models/diary/comment";
import Slider from "react-slick";

Modal.setAppElement("#rootModal");

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
    display: "flex",
  },
};
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const BoxDiv = styled.div`
  width: 50%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    height: 100%;
  }
  button {
    background: black;
    right: 10px;
  }
  .slick-arrow slick-next {
    background: black;
    right: 10px;
  }
  li {
    bottom: 30px;
  }
`;
const BoxDiv2 = styled.div`
  width: 50%;
  margin-left: 2rem;
`;

const FlowerNameh1 = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CommentBox = styled.div`
  width: 100%;
  height: 60%;
  border-top: 0.5px solid gray;
  border-bottom: 0.5px solid gray;
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: scroll;
`;
const CommentMessage = styled.div`
  margin-left: 3rem;
  font-weight: bold;
  padding-bottom: 3rem;
`;
const CommentForm = styled.form`
  padding: 20px;
`;

const ReadModal = ({
  show,
  cancel,
  data,
  login,
  postComment,
  getComment,
  commentData,
  initialForm,
}) => {
  function closeModal() {
    initialForm();
    cancel();
  }

  const [comment, setComment] = useState("");
  const handleChange = (e) => {
    setComment(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    postComment(login.useredName, comment, data._id);
    setComment("");
    initialForm();
    getComment(data._id);
  };

  const images = data.imageFile.map((list) => {
    return (
      <img
        key={list}
        height="100%"
        src={`http://localhost:3001/img/${list}`}
      ></img>
    );
  });

  const comment123 = commentData ? (
    <Comment data={commentData.data}></Comment>
  ) : (
    <></>
  );

  useEffect(() => {
    initialForm();
    console.log("asdasd");
    getComment(data._id);
    return () => {
      console.log("2222222222");
      getComment(data._id);
    };
  }, [postComment]);

  const LoginCheck = login.useredName ? (
    <CommentForm onSubmit={handleSubmit}>
      <input
        name="comment"
        value={comment}
        placeholder="Enter comment..."
        onChange={handleChange}
      ></input>
      <button type="submit">입력</button>
    </CommentForm>
  ) : (
    <></>
  );

  return (
    <>
      <Modal isOpen={show} onRequestClose={closeModal} style={customStyles}>
        <BoxDiv>
          <Slider {...settings}>{images}</Slider>
        </BoxDiv>
        <BoxDiv2>
          <FlowerNameh1>{data.flowerName}</FlowerNameh1>
          <h2>{data.title}</h2>

          <CommentBox>
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{data.useredName}</span>

                <span style={{ fontSize: "0.5rem", color: "gray" }}>
                  {data.date.substr(0, 10)}
                  {"  "}
                  {data.date.substr(11, 6)}
                </span>
              </div>
              <CommentMessage>{data.descreption}</CommentMessage>
              {comment123}
            </div>
          </CommentBox>
          {LoginCheck}
        </BoxDiv2>
      </Modal>
    </>
  );
};
export default connect(
  (state) => ({
    login: state.login.login,
    commentData: state.comment.commentData,
  }),
  {
    postComment,
    getComment,
    initialForm,
  }
)(ReadModal);
