import Head from "next/head";
import { ReactNode, useState } from "react";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.css";
import Image from "next/image";

export default function Layout({ children }: { children: ReactNode }) {
  const [uiMode, setUiMode] = useState("dark");

  const switchMode = () => {
    uiMode === "dark" ? setUiMode("light") : setUiMode("dark");
  };

  return (
    <div className={uiMode}>
      <div className="dark:bg-gray-900 dark:text-gray-200">
        <Head>
          <title>Pokedex</title>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          ></link>
        </Head>
        <NavBar callback={switchMode} activeType={uiMode}></NavBar>

        {children}

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div>
    </div>
  );
}
