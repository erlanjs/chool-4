import axios from "axios";

export const api = axios.create({
    baseURL: "https://motion-school-six.herokuapp.com/"
})