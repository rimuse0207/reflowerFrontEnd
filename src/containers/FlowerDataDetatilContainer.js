import React, { useEffect } from "react";
import {
  postDataDetail,
  getDataDetail,
  getDeleteDetail,
} from "../models/flowerDataDetail";
import { connect } from "react-redux";
import FLowerDataDetail from "../components/FLowerDataDetail";

const FlowerDataDetailContiner = ({
  number,
  postDataDetail,
  datadetail,
  name,
}) => {
  useEffect(() => {
    postDataDetail(number);
  }, [postDataDetail]);

  const sendSuccess = datadetail ? (
    <div>
      <FLowerDataDetail
        name={name}
        postDataDetail={postDataDetail}
        datadetail={datadetail}
        clCodeNm={datadetail.data.clCodeNm}
        distbNm={datadetail.data.distbNm}
        postngplaceCodeNm={datadetail.data.postngplaceCodeNm}
        prpgtEraInfo={datadetail.data.prpgtEraInfo}
        soilInfo={datadetail.data.soilInfo}
        orgplceInfo={datadetail.data.orgplceInfo}
        lighttdemanddoCodeNm={datadetail.data.lighttdemanddoCodeNm}
        lefmrkCodeNm={datadetail.data.lefmrkCodeNm}
        fncltyInfo={datadetail.data.fncltyInfo}
        frtlzrInfo={datadetail.data.frtlzrInfo}
        grwhTpCodeNm={datadetail.data.grwhTpCodeNm}
        watercycleAutumnCodeNm={datadetail.data.watercycleAutumnCodeNm}
        watercycleSprngCodeNm={datadetail.data.watercycleSprngCodeNm}
        watercycleSummerCodeNm={datadetail.data.watercycleSummerCodeNm}
        watercycleWinterCodeNm={datadetail.data.watercycleWinterCodeNm}
        winterLwetTpCodeNm={datadetail.data.winterLwetTpCodeNm}
      ></FLowerDataDetail>
    </div>
  ) : (
    <div>...loading</div>
  );

  return <div>{sendSuccess}</div>;
};

export default connect(
  (state) => ({
    sendOn: state.flowerDataDetail.sendOn,
    datadetail: state.flowerDataDetail.datadetail,
  }),
  {
    postDataDetail,
    getDataDetail,
    getDeleteDetail,
  }
)(FlowerDataDetailContiner);
