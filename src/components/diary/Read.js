import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReadModal from "./ReadModal";

const BoxDiv = styled.div`
  display: contents;
`;

const ImageImg = styled.img`
  margin: 1rem;
  cursor: pointer;
`;
const SearchInput = styled.input`
  background-color: none;
  height: 3rem;
  width: 70%;
  margin-left: 60px;
  border: none;
  border-bottom: 1px solid gray;
  font-size: 1.5rem;
  padding-left: 10px;
`;

const Read = ({ Data, login, postDelete }) => {
  const [show, setShow] = useState(false);
  const [datas, setDatas] = useState("");
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = (list) => {
    console.log(list);
    setShow(true);
    setDatas(list);
  };
  const cancel = () => {
    setShow(false);
  };

  const ShowInfo = show ? (
    <ReadModal
      show={show}
      cancel={cancel}
      data={datas}
      login={login}
    ></ReadModal>
  ) : (
    <div></div>
  );

  const handleDelete = (id) => {
    const confirmflag = window.confirm("really?");
    if (confirmflag) {
      console.log("delelte");
      postDelete(id);
      window.location.reload();
    }
  };

  const dataForm2 = Data ? (
    Data.filter((info) => {
      if (search === "") return info;
      else if (
        Data.flowerName.toLowerCase().includes(search.flowerName.toLowerCase())
      ) {
        console.log(typeof info.flowerName);
        console.log(typeof search);
        return info;
      }
    }).map((list) => {
      const defaulturl =
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.huffingtonpost.kr%2F2017%2F04%2F19%2Fstory_n_16094274.html&psig=AOvVaw3Szv5L7uLiPYjr6cZCRXCB&ust=1591375134371000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLDqxsLM6OkCFQAAAAAdAAAAABAJ";
      const url = `${process.env.REACT_APP_SERVER_ADDRESS}/img/${list.imageFile[0]}`;
      return (
        <>
          <BoxDiv key={list._id}>
            <ImageImg
              src={url ? url : defaulturl}
              alt="test"
              width="300"
              height="300"
              onClick={() => handleClick(list)}
              key={list._id}
            ></ImageImg>
          </BoxDiv>
        </>
      );
    })
  ) : (
    <></>
  );

  const dataForm = Data ? (
    Data.map((list) => {
      const url = `${process.env.REACT_APP_SERVER_ADDRESS}/${list.imageFile[0]}`;
      return (
        <>
          <BoxDiv key={list._id}>
            <ImageImg
              src={url}
              alt="test"
              width="300"
              height="300"
              onClick={() => handleClick(list)}
              key={list._id}
            ></ImageImg>
          </BoxDiv>
        </>
      );
    })
  ) : (
    <div>...loading.....</div>
  );
  return (
    <div style={{ width: "100%", marginLeft: "4%" }}>
      <SearchInput
        value={search}
        name="search"
        onChange={handleChange}
        placeholder="🔍Search ..."
      ></SearchInput>
      {dataForm2}
      {ShowInfo}
    </div>
  );
};

export default Read;
