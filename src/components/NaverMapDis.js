import React from "react";
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from "react-naver-maps"; // 패키지 불러오기

const NaverMapAPI = ({ x, y, positionsd }) => {
  const navermaps = window.naver.maps;

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "70rem", // 네이버지도 가로 길이
        height: "85vh", // 네이버지도 세로 길이
      }}
      defaultCenter={new navermaps.LatLng(Number(y), Number(x))}
      defaultZoom={16} // 지도 초기 확대 배율
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(Number(y), Number(x))}
        animation={2}
        onClick={() => {
          alert(positionsd);
        }}
      />
    </NaverMap>
  );
};

const NaverMapDis = ({ x, y }) => {
  return (
    <>
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVERPASSWORD} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI x={x} y={y} />
      </RenderAfterNavermapsLoaded>
    </>
  );
};

export default NaverMapDis;
