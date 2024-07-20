import getData from "../lib/getData";
import ShowSchool from "./../Component/ShowScholl";
export default async function showUser() {
    const users = await getData();

    return <ShowSchool users = { users }
    />;
}