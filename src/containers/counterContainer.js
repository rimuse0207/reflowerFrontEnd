import React from "react";
import Counter from "../components/counter";
import { increase } from "../models/counter";
import { connect } from "react-redux";

const CounterContainer = ({ number, increase }) => {
  console.log(increase);
  return <Counter number={number} increase={increase}></Counter>;
};

export default connect((state) => ({ number: state.counter.number }), {
  increase,
})(CounterContainer);
