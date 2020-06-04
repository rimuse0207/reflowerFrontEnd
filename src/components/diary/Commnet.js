import React, { useEffect } from "react";
import styled from "styled-components";

const BoxDiv = styled.div``;
const CommentMessage = styled.div`
  margin-left: 3rem;
`;
const Comment = ({ data }) => {
  console.log(data);
  const commentOn = data.map((list) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span key={list.useredName}>{list.useredName}</span>
          <span style={{ fontSize: "0.5rem", color: "gray" }}>
            {list.date.substr(0, 10)}
            {"  "}
            {list.date.substr(11, 6)}
          </span>
        </div>
        <CommentMessage>{list.descreption}</CommentMessage>
      </>
    );
  });
  return <BoxDiv>{commentOn}</BoxDiv>;
};

export default Comment;
