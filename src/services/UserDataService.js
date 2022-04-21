import http from "../http-common";

const getAll = () => {
  return http.get("/users");
};

const get = (id) => {
  return http.get(`/users/${id}`);
};

const create = (data) => {
  return http.post("/users", data);
};

const createMore = (data) => {
  return http.post("/users/more", data);
};

const update = (id, data) => {
  return http.put(`/users/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/users/${id}`);
};

const removeAll = () => {
  return http.delete(`/users`);
};

const findByName = (name) => {
  return http.get(`/users?name=${name}`);
};

const UserService = {
  getAll,
  get,
  create,
  createMore,
  update,
  remove,
  removeAll,
  findByName,
};

export default UserService;
