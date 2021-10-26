import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between mb-10">
      <Link passHref href="/">
        <div className="text-2xl underline cursor-pointer font-bold ">
          Journey with Agress
        </div>
      </Link>
      <div className="btn btn-ghost">login</div>
    </div>
  );
}
