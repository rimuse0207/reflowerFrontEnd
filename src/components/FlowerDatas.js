import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import FlowerDataDetatilContainer from "../containers/FlowerDataDetatilContainer";
import ModalDetail from "./ModalDetail";
const PhotoBox = styled.div`
  width: 350px;
  height: 400px;
  display: contents;
  flex-flow: column;
`;
const DataUl = styled.ul`
  display: flex;
  flex-flow: wrap;
  padding-top: 10px;
`;

const DataTitle = styled.div`
  position: absolute;
  font-weight: bold;
  left: 110px;
  bottom: 0px;
  font-size: 0.7rem;
`;
const boxFade = keyframes`
  0% {
    -webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }


  0% {
    -webkit-transform: translateX(800px) rotate(540deg);
            transform: translateX(800px) rotate(540deg);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0) rotate(0deg);
            transform: translateX(0) rotate(0deg);
    opacity: 1;
  }

`;

const ShowCss = styled.div`
  -webkit-animation: ${boxFade} 1s ease-out both;
  animation: ${boxFade} 1s ease-out both;
`;

const DataLi = styled.li`
  display: flex;
  padding: 20px;
  border: none;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 2px 0 #cfd2d1;
  transform: scale(1);
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  -ms-transform: scale(1);
  -o-transform: scale(1);
  transition: all 0.3s ease-in-out;

  img:hover {
    transform: scale(2);
    -webkit-transform: scale(1.3);
    -moz-transform: scale(1.3);
    -ms-transform: scale(1.3);
    -o-transform: scale(1.3);
  }
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

const FlowerDatas = ({ data }) => {
  const [search, setSearch] = useState("");
  const [detailon, setDetailon] = useState(false);
  const [number, setNumber] = useState("");
  const [backUrl, setBackUrl] = useState("");
  const [name, setName] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const handleDetail = (number, backUrl, name) => {
    setNumber(number);
    setBackUrl(backUrl);
    setName(name);
    setDetailon(true);
  };
  const handleCancel = () => {
    setNumber("");
    setDetailon(false);
  };
  const showDetail = detailon ? (
    <ModalDetail
      detailon={detailon}
      number={number}
      backUrl={backUrl}
      name={name}
      cancel={handleCancel}
    ></ModalDetail>
  ) : (
    <div>asdasd</div>
  );
  console.log(data);
  const searchData = data ? (
    data.data
      .filter((info) => {
        if (search == null) return data;
        else if (info.cntntsSj.toLowerCase().includes(search.toLowerCase())) {
          return data;
        }
      })
      .map((list) => {
        const cut = list.rtnStreFileNm.split("|");
        const imgUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[0]}`;
        const backUrl = `http://www.nongsaro.go.kr/cms_contents/301/${cut[1]}`;
        return (
          <ShowCss key={list.cntntsNo}>
            <DataLi
              key={list.cntntsNo}
              onClick={() =>
                handleDetail(list.cntntsNo, backUrl, list.cntntsSj)
              }
            >
              <img src={imgUrl} width="230" height="230" alt={list.cntntsSj} />
              <DataTitle key={list.cntntsNo}>{list.cntntsSj}</DataTitle>
            </DataLi>
          </ShowCss>
        );
      })
  ) : (
    <div>....Loading</div>
  );

  return (
    <PhotoBox>
      <SearchInput
        value={search}
        name="search"
        onChange={handleChange}
        placeholder="🔍Search ..."
      ></SearchInput>
      <DataUl>{searchData}</DataUl>
      {showDetail}
    </PhotoBox>
  );
};
export default FlowerDatas;
