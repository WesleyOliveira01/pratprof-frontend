import axios from "axios";

const api = axios.create({
  baseURL: "https://pratprof-backend-3.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

export class AuthService {
    login(data: any){
        return api.post("/auth", data)
    }
}
