import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className="main_page">
      <div className="Links">
        <a href="/addSchool">Goto AddSchool Page</a>
        <a href="/showSchools">Goto ShowSchools Page</a>
      </div>
    </main>
  );
}
