/* eslint-disable @next/next/no-img-element */
import { BsBagDash } from "react-icons/bs";

const styleSheet = {
  height: `calc(100vh - 115px)`,
};

export default function ProfilePage() {
  return (
    <div className="px-3 mx-auto max-w-3xl h-screen">
      <div className="py-4 text-center font-semibold">Profile</div>
      <div
        className="h-[700px] overflow-y-scroll w-full  bg-yellow-100 rounded-xl"
        style={styleSheet}
      >
        <div
          className="w-full h-[700px] relative shadow-inner"
          style={styleSheet}
        >
          <img
            className="object-center object-cover w-full h-full"
            src="https://images.pexels.com/photos/9671345/pexels-photo-9671345.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            alt=""
          />
          <div className="absolute bottom-4 left-4">
            <div className="font-bold text-white text-xl">
              Agressa Rianda, 27
            </div>
            <div className="font-medium text-white flex items-center space-x-1">
              <BsBagDash className="mb-[1px]" />
              <div>Salah satu kuli di digital agency</div>
            </div>
          </div>
        </div>
        <div className="p-2 mt-5">
          <div className="font-medium text-gray-700">My basic info</div>
          <div className="flex items-center  flex-wrap space-x-2 space-y-2 mt-2">
            <div className=" bg-yellow-200 font-medium rounded px-2 py-1">
              155 cm
            </div>
            <div className=" bg-yellow-200 font-medium rounded px-2 py-1">
              Suka kucing
            </div>
            <div className=" bg-yellow-200 font-medium rounded px-2 py-1">
              Suka kucing
            </div>
            <div className=" bg-yellow-200 font-medium rounded px-2 py-1">
              Suka kucing
            </div>
          </div>
        </div>

        <div className="p-3 text-sm leading-relaxed">
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

        <div className="w-full h-[500px] overflow-hidden mt-5">
          <img
            className="w-full h-full object-cover object-center"
            src="https://images.pexels.com/photos/9671300/pexels-photo-9671300.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </div>
      </div>
      <div className="py-4 text-center font-semibold">Profile</div>
    </div>
  );
}
