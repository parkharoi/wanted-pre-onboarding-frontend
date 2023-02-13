import axios from "axios";

const baseAPI = (url, options) => {
  return axios.create({
    baseURL: `https://pre-onboarding-selection-task.shop/`,
    ...options,
  });
};

export const baseInstance = baseAPI();
