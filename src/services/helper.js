import axios from "axios";

export const BASE_URl='http://localhost:9292';

export const myAxios=axios.create({
    baseURL:BASE_URl,
});