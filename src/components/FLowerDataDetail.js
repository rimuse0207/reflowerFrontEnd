import React from "react";
import styled from "styled-components";

const BoxDiv = styled.div`
  padding: 10px;
  padding-left: 30px;
`;

const FlowerName = styled.h1`
  font-weight: bold;
`;

const FlowerDetailText = styled.div`
  margin-left: 50px;
  font-size: 1.1rem;
  font-style: oblique;
  font-family: fantasy;
`;

const FlowerDataDetail = ({
  name,
  datadetail,
  clCodeNm,
  distbNm,
  postngplaceCodeNm,
  prpgtEraInfo,
  soilInfo,
  orgplceInfo,
  lighttdemanddoCodeNm,
  lefmrkCodeNm,
  fncltyInfo,
  frtlzrInfo,
  grwhTpCodeNm,
  watercycleAutumnCodeNm,
  watercycleSprngCodeNm,
  watercycleSummerCodeNm,
  watercycleWinterCodeNm,
  winterLwetTpCodeNm,
}) => {
  console.log(datadetail);

  return (
    <BoxDiv>
      <FlowerName>{name}</FlowerName>
      <FlowerDetailText>{JSON.stringify(clCodeNm)}</FlowerDetailText>
      <FlowerDetailText>{JSON.stringify(fncltyInfo)}</FlowerDetailText>
      <FlowerDetailText>{JSON.stringify(lefmrkCodeNm)}</FlowerDetailText>
      <div>
        <FlowerName>물주기</FlowerName>
        <FlowerDetailText>
          🌸봄: {JSON.stringify(watercycleSprngCodeNm)}
        </FlowerDetailText>
        <FlowerDetailText>
          ☀️여름: {JSON.stringify(watercycleSummerCodeNm)}
        </FlowerDetailText>
        <FlowerDetailText>
          🍂가을: {JSON.stringify(watercycleAutumnCodeNm)}
        </FlowerDetailText>
        <FlowerDetailText>
          ⛄️겨울: {JSON.stringify(watercycleWinterCodeNm)}
        </FlowerDetailText>
      </div>
      <div>
        <FlowerName>온도</FlowerName>
        <FlowerDetailText>🌡{JSON.stringify(grwhTpCodeNm)}</FlowerDetailText>
        <FlowerDetailText>
          겨울 온도: {JSON.stringify(winterLwetTpCodeNm)}
        </FlowerDetailText>
      </div>
      <div>
        <FlowerName>광도 및 배치</FlowerName>
        <FlowerDetailText>
          🌞{JSON.stringify(lighttdemanddoCodeNm)}
        </FlowerDetailText>
        <FlowerDetailText>{JSON.stringify(postngplaceCodeNm)}</FlowerDetailText>
      </div>
      <div>
        <FlowerName>서식지 및 파종</FlowerName>
        <FlowerDetailText>🇰🇷{JSON.stringify(orgplceInfo)}</FlowerDetailText>
        <FlowerDetailText>{JSON.stringify(prpgtEraInfo)}</FlowerDetailText>
      </div>
      <div>
        <FlowerName>비료 및 토양</FlowerName>
        <FlowerDetailText>{JSON.stringify(frtlzrInfo)}</FlowerDetailText>
        <FlowerDetailText>{JSON.stringify(soilInfo)}</FlowerDetailText>
      </div>
    </BoxDiv>
  );
};

export default FlowerDataDetail;
