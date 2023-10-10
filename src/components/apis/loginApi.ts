import axios from "axios";
axios.defaults.withCredentials = true;

const index = axios.create({
  // baseURL: 'http://ddamddamclub.shop',
  baseURL: 'http://localhost:80',
  headers: { 'Content-Type': 'application/json' },
});

export const findLogin = async () => {
  try {
    const response = await index.get('/api/login');
    console.log("Login Api 요청 : ",response.data); // response.data에 응답 데이터가 들어 있음
  } catch (error) {
    console.error(error);
  }
}

export const findList = async () => {
  try {
    const response = await index.get('/api/list');
    console.log("feedList Api 요청 : ",response.data); // response.data에 응답 데이터가 들어 있음
  } catch (error) {
    console.error(error);
  }
}
