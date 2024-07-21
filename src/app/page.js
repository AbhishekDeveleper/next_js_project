import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  console.log(process.env.DB_PASSWORD);
  return (
    <main className="main_page">
      <div className="Links">
        <a href="/addSchool">Goto AddSchool Page</a>
        <a href="/showSchools">Goto ShowSchools Page</a>
      </div>
    </main>
  );
}
