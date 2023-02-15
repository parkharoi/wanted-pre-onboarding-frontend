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
  updateTodo: (payload) =>
    instance.put(`/todos/${payload.id}`, {
      todo: payload.todo,
      isCompleted: payload.isCompleted,
    }),
  deleteTodo: (payload) => instance.delete(`/todos/${payload}`),
};
