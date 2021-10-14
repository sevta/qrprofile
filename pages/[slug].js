/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";

export default function HomepageSlug() {
  const router = useRouter();
  const { slug } = router.query;
  const IMG =
    "https://images.pexels.com/photos/9671345/pexels-photo-9671345.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500";

  const user = {
    username() {
      if (slug === "sevta") {
        return "Sevta Saputra";
      }
      if (slug === "rianda") {
        return "Agressa Rianda";
      }
    },

    work() {
      if (slug === "sevta") {
        return "Kuli it di salah satu agency jakarta!";
      }
      if (slug === "rianda") {
        return "Kuli designer di salah satu agency jakarta!";
      }
    },

    bio() {
      if (slug === "sevta") {
        return ` I'm baby succulents PBR&B fingerstache pickled austin tacos. Aesthetic
        artisan viral, polaroid venmo vape tacos schlitz +1 pop-up selfies
        bicycle rights seitan. Try-hard distillery affogato direct trade,`;
      }
    },
  };

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="w-full h-full overflow-hidden fixed top-0 left-0">
        <img
          className="w-full h-full object-cover object-center"
          src={IMG}
          alt=""
        />
      </div>
      <div className="rounded-tr-2xl rounded-tl-2xl absolute bottom-[-220px] left-0 w-full bg-gray-100 p-5 min-h-[200px]">
        <div className="font-semibold text-2xl">{user.username()}</div>
        <div className="text-gray-500 mt-[2px]">{user.work()}</div>
        <div className="text-sm text-gray-500 mt-5">{user.bio()}</div>
        <button className="w-full p-5 mt-10 rounded-full bg-yellow-500">
          Connect Now
        </button>
      </div>
    </div>
  );
}
