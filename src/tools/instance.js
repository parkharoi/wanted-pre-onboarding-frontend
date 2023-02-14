import axios from "axios";

const token = localStorage.getItem("token");

const baseAPI = (url, options) => {
  return axios.create({
    baseURL: `https://pre-onboarding-selection-task.shop/`,
    ...options,
  });
};

const instance = axios.create({
  baseURL: `https://pre-onboarding-selection-task.shop/`,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const baseInstance = baseAPI();

export const TodoApi = {
  createTodo: (payload) => instance.post(`/todos`, payload),
  getTodos: () => instance.get(`/todos`),
  updateTodo: (payload) => instance.put(`/todos`),
  deleteTodo: (payload) => instance.post(`/todos`),
};

// MyPageApi.putUsers(newInfo)
// .then((res) => {
//   console.log(res);
// })
// .catch((error) => console.log("수정실패라우...", error));
