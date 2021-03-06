import axios from "axios";
const baseUrl = "/api/blogs";

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const getComments = () => {
  const request = axios.get(`${baseUrl}/comments`);
  return request.then((response) => response.data);
};

const create = async (newBlog) => {
  const config = {
    headers: {Authorization: token}
  };
  const response = await axios.post(baseUrl, newBlog, config);
  return response.data;
};

const createComment = async (comment) => {
  const response = await axios.post(`${baseUrl}/${comment.blogId}/comments`, comment);
  return response.data;
};

const update = async (id, updatedBlog) => {
  const response = await axios.put(`${baseUrl}/${id}`, updatedBlog);
  return response.data;
};

const remove = async (id) => {
  const config = {
    headers: {Authorization: token}
  };
  const response = await axios.delete(`${baseUrl}/${id}`, config);
  return response.data;
};

export default {getAll, getComments, create, createComment, update, remove, setToken};
