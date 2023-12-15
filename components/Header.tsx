import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <nav className="border-b px-5 py-4 items-center mx-auto flex justify-between w-full max-w-[1200px]">
      <div className="font-bold rounded-full p-4 bg-[#FE6902] border-neutral-300">
      </div>
      <ModeToggle />
    </nav>
  );
}
