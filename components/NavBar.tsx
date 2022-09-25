import Image from "next/image";
import Link from "next/link";

export default function NavBar({
  callback,
  activeType,
}: {
  callback: Function;
  activeType: string;
}) {
  return (
    <div className="pl-12 pr-12 flex items-center justify-between gap-2 w-full mb-3 sticky bg-transparent z-40 top-0 backdrop-blur p-5 dark:border-slate-50/5 border-slate-900/5 border-b">
      <div className="flex items-center gap-3">
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
      {activeType === "dark" ? (
        <span
          className="material-icons cursor-pointer"
          onClick={() => callback()}
        >
          light_mode
        </span>
      ) : (
        <span
          className="material-icons cursor-pointer"
          onClick={() => callback()}
        >
          dark_mode
        </span>
      )}
    </div>
  );
}
