/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

import { BsBagDash } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const styleSheet = {
  height: `calc(100vh - 115px)`,
};

export default function ProfilePage() {
  const router = useRouter();
  const { slug } = router.query;
  const USERNAME = normalizeSlug(slug);
  const [notFound, setNotFound] = useState(false);

  function normalizeSlug(val) {
    return val?.split("-").join(" ");
  }

  useEffect(() => {
    console.log(slug);
    if (slug !== "agresa-rianda" || slug !== "sevta") {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [slug]);

  const BIO = {
    sevta: {
      badge: ["175cm", "code"],
      description: "",
      age: 28,
      albums: [
        "https://pbs.twimg.com/profile_images/534624422917718016/GsM81CYZ_400x400.jpeg",
        "https://images.pexels.com/photos/9656809/pexels-photo-9656809.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/8185942/pexels-photo-8185942.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      ],
    },
    "agresa rianda": {
      badge: ["155cm", "Penyayang", "demen ama aibon"],
      description: "",
      age: 28,
      albums: [
        "https://images.pexels.com/photos/9671345/pexels-photo-9671345.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260",
        "https://images.pexels.com/photos/1456642/pexels-photo-1456642.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      ],
    },
  };

  return (
    <div className="px-3 mx-auto max-w-xl h-screen">
      <div className="py-4 text-center font-semibold capitalize">
        {USERNAME}
      </div>
      <div
        className="profile-container h-[700px] overflow-y-scroll w-full  bg-yellow-100 rounded-xl"
        style={styleSheet}
      >
        <div
          className="w-full h-[700px] relative shadow-inner"
          style={styleSheet}
        >
          {BIO[USERNAME]?.albums.length > 0 && (
            <img
              className="object-center object-cover w-full h-full"
              src={BIO[USERNAME]?.albums[0]}
              alt=""
            />
          )}

          <div className="absolute bottom-4 left-4">
            <div className="font-bold text-white text-xl mb-2 capitalize">
              {USERNAME}, {BIO[USERNAME]?.age}
            </div>
            <div className="text-white flex items-center space-x-1">
              <BsBagDash className="mb-[1px] mr-1" />
              <div>Salah satu kuli di digital agency</div>
            </div>
            <div className="text-white flex items-center space-x-1">
              <BiHeart className="mb-[1px] mr-1" />
              <div>
                Taken!{" "}
                {USERNAME === "sevta" && (
                  <a className="text-yellow-200">
                    <Link href="/profile/agresa-rianda">@rianda</Link>
                  </a>
                )}
                {USERNAME === "agresa rianda" && (
                  <a className="text-yellow-200">
                    <Link href="/profile/sevta">@sevta</Link>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 mt-5">
          <div className="font-medium text-gray-700">My basic info</div>
          <div className="flex items-center  flex-wrap mt-4">
            {BIO[USERNAME]?.badge.map((_badge, index) => (
              <Badge key={index}>{_badge}</Badge>
            ))}
          </div>
        </div>

        <div className="p-3 text-sm leading-relaxed -mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          sapiente placeat sunt ea fuga fugit voluptate aut a libero eaque odio,
          nesciunt assumenda voluptatem dicta aspernatur labore praesentium
          inventore non. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Reiciendis sapiente placeat sunt ea fuga fugit voluptate aut a
          libero eaque odio, nesciunt assumenda voluptatem dicta aspernatur
          labore praesentium inventore non. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Reiciendis sapiente placeat sunt ea fuga
          fugit voluptate aut a libero eaque odio, nesciunt assumenda voluptatem
          dicta aspernatur labore praesentium inventore non. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Reiciendis sapiente placeat
          sunt ea fuga fugit voluptate aut a libero eaque odio, nesciunt
          assumenda voluptatem dicta aspernatur labore praesentium inventore
          non. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Reiciendis sapiente placeat sunt ea fuga fugit voluptate aut a libero
          eaque odio, nesciunt assumenda voluptatem dicta aspernatur labore
          praesentium inventore non. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Reiciendis sapiente placeat sunt ea fuga fugit
          voluptate aut a libero eaque odio, nesciunt assumenda voluptatem dicta
          aspernatur labore praesentium inventore non.
        </div>

        {BIO[USERNAME]?.albums.length > 0 && (
          <div className="w-full h-[500px] overflow-hidden mt-5">
            <img
              className="w-full h-full object-cover object-center"
              src={BIO[USERNAME]?.albums[1]}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="py-4 text-center font-semibold">Profile</div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <div className=" bg-yellow-200 font-medium rounded px-2 py-1 mr-3 mb-3">
      {children}
    </div>
  );
}
