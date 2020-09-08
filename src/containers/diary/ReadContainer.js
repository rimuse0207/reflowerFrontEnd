import React, { useEffect } from "react";
import { getDiary, postDelete } from "../../models/diary/diary";
import { connect } from "react-redux";
import Read from "../../components/diary/Read";

const ReadContainer = ({ diaryData, getDiary, login, postDelete }) => {
  useEffect(() => {
    getDiary();
  }, [getDiary]);

  return (
    <Read diaryData={diaryData} login={login} postDelete={postDelete}></Read>
  );
};
export default connect(
  (state) => ({
    diaryData: state.diary.diaryData,
    login: state.login.login,
  }),
  {
    getDiary,
    postDelete,
  }
)(ReadContainer);
