import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BackBox = styled.div`
  margin-left: 4rem;
  background-color: white;
  box-shadow: 3px 3px 0 #cfd2d1;
  width: 60rem;
  height: 40rem;
  padding: 10px;
  display: flex;
  flex-flow: column;
`;

const FlowerNameInput = styled.input`
  background-color: none;
  height: 3rem;
  width: 97%;
  border: none;
  border-bottom: 1px solid gray;
  margin: 0.3rem;
  margin-left: 1rem;
  font-size: 1rem;
  :focus {
    outline: none;
    border-bottom: 3px solid skyblue;
  }
  :focus::placeholder {
    color: blue;
    font-size: 0.2rem;
    position: fixed;
  }

  :placeholder-shown + label {
    cursor: text;
    max-width: 66.66%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transform-origin: left bottom;
    transform: translate(0, 2.125rem) scale(1.5);
  }

  :focus::-webkit-input-placeholder {
    opacity: 1;
  }

  :not(:placeholder-shown) + label,
  :focus + label {
    transform: translate(0, 0) scale(1);
    cursor: pointer;
  }
`;

const LavelPlace = styled.span`
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const DesTextArea = styled.textarea`
  background-color: none;
  height: 10rem;
  width: 97%;
  margin: 10px;
  border: none;
  border-bottom: 1px solid gray;
  margin: 1rem;
  :focus {
    outline: none;
    border-bottom: 3px solid skyblue;
  }
`;

const Write = ({ handleSend, login, history }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const [fileObj, setFileObj] = useState([]);
  const [fileArray, setFileArray] = useState([]);

  const [form, setForm] = useState({
    useredName: login.useredName,
    imageFile: {},
    date: new Date(),
    flowerName: "",
    title: "",
    descreption: "",
  });
  const handleChangeDiary = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };
  const handleChange = (date) => {
    setStartDate(date);
    setForm({
      ...form,
      date: date,
    });
  };

  const uploadMultipleFiles = (e) => {
    fileObj.push(e.target.files);
    console.log(fileObj);
    console.log(e.target.files[0]);
    setFile2(e.target.files);

    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
    setFile({ file: fileArray });
    setForm({
      ...form,
      imageFile: fileArray,
    });
    setFileObj([]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (
      form.flowerName === "" ||
      form.title === "" ||
      form.descreption === ""
    ) {
      console.log("error");
      alert("전부 써주세요.");
      return;
    } else {
      const nextForm = {
        ...form,
        imageFile: file,
        date: startDate,
      };
      setForm(nextForm);

      console.log(file2);
      handleSend(
        form,
        file2,
        form.useredName,
        form.date,
        form.flowerName,
        form.title,
        form.descreption
      );

      setForm({
        useredName: login.useredName,
        imageFile: {},
        date: new Date(),
        flowerName: "",
        title: "",
        descreption: "",
      });
      setFileArray([]);
      setFileObj([]);
      history.push("/read");
      window.location.reload();
    }
  };

  return (
    <BackBox>
      <div>
        {(fileArray || []).map((url) => (
          <img key={url} src={url} alt="..." width="150" height="150" />
        ))}
      </div>
      <form onSubmit={handleClick} encType="multipart/form-data">
        <input
          type="file"
          name="img"
          accept="image/jpg,impge/png,image/jpeg,image/gif"
          onChange={uploadMultipleFiles}
          multiple
        ></input>
        <DatePicker
          selected={startDate}
          onChange={handleChange}
          placeholder="날짜"
        ></DatePicker>

        <FlowerNameInput
          name="flowerName"
          placeholder="꽃 이름"
          value={form.flowerName}
          onChange={handleChangeDiary}
        ></FlowerNameInput>

        <FlowerNameInput
          name="title"
          placeholder="제목"
          value={form.title}
          onChange={handleChangeDiary}
        ></FlowerNameInput>
        <DesTextArea
          name="descreption"
          value={form.descreption}
          onChange={handleChangeDiary}
          placeholder="내용"
        ></DesTextArea>
        <button type="submit">일기 저장</button>
      </form>
    </BackBox>
  );
};
export default withRouter(Write);
