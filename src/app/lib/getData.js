import axios from "axios";

export default async function getData() {
    const res = await axios.get("/api/get-data");
    if (res) return res.data;
    return [];
}