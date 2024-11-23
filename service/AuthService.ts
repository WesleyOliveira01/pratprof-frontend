import axios from "axios";

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export class AuthService {
    login(data: any){
        return api.post("/auth", data)
    }
}
