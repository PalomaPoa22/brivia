import api from "../config/config";

export function create(payload) {
  return api.post("/users", payload);
}
export function editUser(payload) {
  return api.put("/users", payload);
}
export function listUser() {
  return api.get("/users");
}

export function deleteUser(id) {
  return api.delete(`/users/${id}`);
}
