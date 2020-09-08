import axios from "axios";

export const getData = () =>
  axios.get(`http://${process.env.REACT_APP_SERVER_ADDRESS}/users`);
//axios.get(`http://18.224.37.144:3001/users`);

export const getFlowerload = () =>
  axios.get(
    "http://openapi.seoul.go.kr:8088/6a674b6673786b713130376f52704348/json/MgisSpringStreet/1/5/"
  );

export const sendFlowerDataDetail = (number) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/qwe`, {
    number,
  });

export const getFlowerDataDetail = () =>
  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/users/qwe/`);

export const postLogin = (email, password) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/login`, {
    email,
    password,
  });

export const postSignUp = (email, password) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/users/signUp`, {
    email,
    password,
  });

export const postDiary = (form, file, name, date, flowername, title, desc) => {
  const diaryForm = new FormData();
  for (const key of Object.keys(file)) {
    diaryForm.append("img", file[key]);
  }

  diaryForm.append("useredName", name);
  diaryForm.append("date", date);
  diaryForm.append("flowerName", flowername);
  diaryForm.append("title", title);
  diaryForm.append("desc", desc);

  axios.post(
    `${process.env.REACT_APP_SERVER_ADDRESS}/diary/newDiary`,
    diaryForm
  );
};

export const getDiary = () =>
  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/diary/readDiary`);
//axios.get(`http://18.224.37.144:3001/diary/readDiary`);

export const postDelete = (id) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/diary/delete`, {
    id,
  });

export const postComment = (name, desc, id) =>
  axios.post(`${process.env.REACT_APP_SERVER_ADDRESS}/diary/comment`, {
    name,
    desc,
    id,
  });

export const getComment = (id) =>
  axios.get(`${process.env.REACT_APP_SERVER_ADDRESS}/diary/comment/${id}`);
