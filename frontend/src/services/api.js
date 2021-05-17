import axios from "axios";

class api {
  constructor() {
    const api = axios.create({
      baseURL: `http://localhost:3333`,
    });
    this.api = api;
  }

  async getAllUsers() {
    const response = await this.api.get("/users");
    return response;
  }

  async setUser(params) {
    const response = await this.api.post("/users", params);
    return response;
  }

}

export default new api();