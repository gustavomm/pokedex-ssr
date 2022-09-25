import { useAtom } from "jotai";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { nameFilterAtom } from "../atoms/nameFilter";
import debounce from "lodash/debounce";

export default function NavBar({
  callback,
  activeType,
}: {
  callback: Function;
  activeType: string;
}) {
  const [nameFilter, setNameFilter] = useAtom(nameFilterAtom);
  const [unDebouncedFilter, setUnDebouncedFilter] = useState("");

  const handleChange = (val: string) => {
    setUnDebouncedFilter(val);
    debouncedSave(val);
  };

  const debouncedSave = useCallback(
    debounce((val) => setNameFilter(val), 300),
    []
  );

  return (
    <div className="md:px-12 flex justify-between md:justify-center items-center gap-2 mb-3 sticky bg-transparent z-40 top-0 backdrop-blur p-5 dark:border-slate-50/5 border-slate-900/5 border-b">
      <div className="flex items-center gap-3 md:mr-auto md:flex-1">
        <Image
          src="/pokeball.png"
          alt="pokeball"
          width={30}
          height={30}
        ></Image>
        <Link href="/">
          <a className="font-extralight">Pokedex</a>
        </Link>
      </div>
      <div className="flex md:flex-1 justify-center">
        <input
          type="text"
          className="bg-transparent/20 backdrop:blur w-32 md:w-48 justify-self-center rounded border focus:outline-emerald-500 border-slate-300/70 dark:border-slate-600/70 h-8 p-1 font-extralight"
          onChange={(e) => handleChange(e.target.value)}
          placeholder="Filter by name..."
        />
      </div>
      <div className="flex md:flex-1 justify-center">
        {activeType === "dark" ? (
          <span
            className="material-icons cursor-pointer md:ml-auto"
            onClick={() => callback()}
          >
            light_mode
          </span>
        ) : (
          <span
            className="material-icons cursor-pointer md:ml-auto"
            onClick={() => callback()}
          >
            dark_mode
          </span>
        )}
      </div>
    </div>
  );
}
