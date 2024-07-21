import axios from "axios";

export default async function getData() {
    const res = await axios.get("http://localhost:3000/api/get-data");
    if (res) return res.data;
    return [];
}