import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import ModalPra from "./ModalPra";

import { Icon } from "react-icons-kit";
import { mapMarker } from "react-icons-kit/fa/mapMarker";

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

const BorderBox = styled.div`
  display: flex;
  flex-flow: wrap;
`;

const FlowerBox = styled.div`
  background-color: ${(props) => props.back};
  color: white;
  box-shadow: 2px 2px 0 #cfd2d1;
  width: 15rem;

  margin: 2rem;

  cursor: pointer;

  div {
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    transition: all 1.5s;
    -webkit-transition: all 1.5s;
    -moz-transition: all 1.5s;
    -o-transition: all 1.5s;
    text-align: center;
  }

  div:last-child {
    transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
  }

  :hover div:first-child {
    transform: rotateY(-180deg);
    -webkit-transform: rotateY(-180deg);
    -ms-transform: rotateY(-180deg);
    -moz-transform: rotateY(-180deg);
    -o-transform: rotateY(-180deg);
  }
  :hover div:last-child {
    transform: rotateY(0deg);
    -webkit-transform: rotateY(0deg);
    -ms-transform: rotateY(0deg);
    -moz-transform: rotateY(0deg);
    -o-transform: rotateY(0deg);
  }
`;

const BackBox = styled.div``;

const MapBox = styled.div`
  margin: 10px;
  width: 71%;
  margin-left: 60px;
  height: 6rem;
`;

const Animation = styled.div`
  width: 55rem;
  margin-left: 3.5rem;
  margin-top: 2rem;
  display: contents;
  overflow: hidden;
  flex-flow: wrap;
`;

const InfoBox = styled.div`
  color: white;
`;

const FlowerLoad = ({ data }) => {
  const [search, setSearch] = useState("");
  const [mapCheck, setMapCheck] = useState(false);
  const [mapX, setMapX] = useState(0);
  const [mapY, setMapY] = useState(0);
  const [position, setPosition] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleMapCheck = (x, y, position) => {
    setMapX(x);
    setMapY(y);
    setPosition(position);
    setMapCheck(true);
  };
  const handleMapClose = () => {
    setMapX(0);
    setMapY(0);
    setPosition("");
    setMapCheck(false);
  };

  const MapChecked = mapCheck ? (
    <MapBox>
      <ModalPra
        checked={mapCheck}
        close={handleMapClose}
        x={mapX}
        y={mapY}
        position={position}
      ></ModalPra>
    </MapBox>
  ) : (
    <div></div>
  );

  const dataCheck = data ? (
    data.data.MgisSpringStreet.row
      .filter((info) => {
        if (search == null) return info;
        else if (
          info.COT_ADDR_FULL_OLD.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_VALUE_03.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_VALUE_02.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_ADDR_FULL_NEW.toLowerCase().includes(search.toLowerCase()) ||
          info.COT_CONTS_NAME.toLowerCase().includes(search.toLowerCase())
        ) {
          return info;
        }
      })
      .map((list) => {
        const max = Math.ceil(3);
        const min = Math.floor(0);
        const randoms = Math.floor(Math.random() * (max - min) + min);
        let back = "";
        if (randoms == 1) {
          back = "#E14245";
        } else if (randoms == 2) {
          back = "skyblue";
        } else {
          back = "#4ADA56";
        }

        return (
          <Animation>
            <FlowerBox
              id="rootModal"
              key={list.COT_CONTS_ID}
              back={back}
              onClick={() =>
                handleMapCheck(
                  list.COT_COORD_X,
                  list.COT_COORD_Y,
                  list.COT_ADDR_FULL_OLD
                )
              }
            >
              <InfoBox key={list.COT_CONTS_ID}>
                <Icon icon={mapMarker} size={64} />
                <h3>{list.COT_ADDR_FULL_OLD}</h3>
                개화시기: {list.COT_VALUE_03}( {list.COT_VALUE_04} )
              </InfoBox>
              <BackBox>
                {list.COT_VALUE_01}
                {list.COT_VALUE_02}
              </BackBox>
            </FlowerBox>
          </Animation>
        );
      })
  ) : (
    <div>...Loading</div>
  );

  return (
    <div style={{ marginLeft: "5%" }}>
      <SearchInput
        value={search}
        name="search"
        onChange={handleChange}
        placeholder="🔍Search ..."
      ></SearchInput>
      <BorderBox>{dataCheck}</BorderBox>
      {MapChecked}
    </div>
  );
};

export default FlowerLoad;
