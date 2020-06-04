import React from "react";
import Write from "../../components/diary/Write";
import { connect } from "react-redux";
import { postDiary } from "../../models/diary/diary";

const WriteContainer = ({ diaryForm, postDiary, login }) => {
  const handleSend = (form, file2, name, date, flowername, title, desc) => {
    console.log(form);
    postDiary(form, file2, name, date, flowername, title, desc);
  };

  return (
    <Write diaryForm={diaryForm} login={login} handleSend={handleSend}></Write>
  );
};

export default connect(
  (state) => ({
    diaryForm: state.diary.diaryForm,
    login: state.login.login,
  }),
  {
    postDiary,
  }
)(WriteContainer);
