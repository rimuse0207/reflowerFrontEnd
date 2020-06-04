import React, { useEffect } from "react";
import { getData } from "../models/flowerDatas";
import { connect } from "react-redux";
import FlowerDatas from "../components/FlowerDatas";

const FlowerDatasContainer = ({ getData, flowerdata }) => {
  useEffect(() => {
    getData();
  }, [getData]);

  return <FlowerDatas data={flowerdata} getData={getData}></FlowerDatas>;
};

export default connect(
  (state) => ({
    flowerdata: state.flowerDatas.flowerdata,
  }),
  { getData }
)(FlowerDatasContainer);
