import Image from "next/image";
const Header = () => {
  return (
    <header className="flex flex-col items-center gap-4">
      <Image
        className="size-48 rounded-full border-[1px] border-sky-800"
        src="https://avatars.githubusercontent.com/u/49008491?v=4"
        alt="Photo of Rasmus Eklund"
        height={256}
        width={256}
        priority
      />
      <h1 className="text-xl text-sky-950">Welcome to my portfolio!</h1>
    </header>
  );
};

export default Header;
