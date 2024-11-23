import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
});

export class AuthService {
    login(data: any){
        return api.post("/auth", data)
    }
}
