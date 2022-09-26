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

        <footer className="flex items-center justify-center flex-grow border-t dark:border-slate-50/5 border-slate-900/5 py-7">
          <a
            href="https://github.com/gustavomm"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extralight text-lg"
          >
            Made by Gustavo Moreira
          </a>
        </footer>
      </div>
    </div>
  );
}
