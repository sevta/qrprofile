export default function HomepagePrimary() {
  return (
    <div>
      <Badge />
      <Navbar />
      <div className="flex items-center justify-center flex-col py-20 max-w-xl mx-auto">
        <div className="text-center  text-7xl font-black tracking-tighter">
          Teras rumah
        </div>
        <div className="mt-4 text-gray-400 text-center text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          molestias corporis soluta asperiores
        </div>
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full p-8">
      <div className="font-bold">Socmed</div>
      <div className="font-bold">Mittravel</div>
      <div className="font-bold">Menu</div>
    </div>
  );
}

function Badge() {
  return (
    <div className="w-full bg-[#FEE440] font-semibold p-3 text-xs">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe deserunt
      voluptas atque reiciendis repudiandae labore similique mollitia quaerat
      corrupti accusamus sit quas incidunt itaque est beatae expedita ipsa, vel
      inventore.
    </div>
  );
}
