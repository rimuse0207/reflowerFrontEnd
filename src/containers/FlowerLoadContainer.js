import React, { useEffect } from "react";
import FlowerLoad from "../components/FlowerLoad";
import { connect } from "react-redux";
import { getFlowerloads } from "../models/flowerLoad";

const FlowerLoadContainer = ({ getFlowerloads, flowerload }) => {
  useEffect(() => {
    getFlowerloads();
  }, [getFlowerloads]);
  return (
    <FlowerLoad data={flowerload} getFlowerload={getFlowerloads}></FlowerLoad>
  );
};

export default connect(
  (state) => ({
    flowerload: state.flowerLoad.flowerload,
  }),
  { getFlowerloads }
)(FlowerLoadContainer);
