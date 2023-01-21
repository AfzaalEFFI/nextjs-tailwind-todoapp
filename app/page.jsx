import { Inter } from "@next/font/google";
import TodoApp from "./header/Header";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <TodoApp />
    </main>
  );
}
