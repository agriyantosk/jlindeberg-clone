export default function NavbarTop() {
  return (
    <>
      <div className="h-6 bg-black text-white">
        <marquee
          className="h-full"
          behavior="scroll"
          direction="left"
          style={{ scrollBehavior: "scroll", scrollAmount: "10000" }}
        >
          <span className="mr-96 text-xs">MANHATTAN GOLF CAPSULE</span>
          <span className="mr-96 text-xs">NEW IN</span>
          <span className="mr-96 text-xs">SUMMER HOLIDAY GOLF</span>
          <span className="mr-96 text-xs">PGA CHAMPIONSHIP SCRIPTING</span>
        </marquee>
      </div>
      <div className="flex flex-wrap justify-center font-bold items-center mx-auto max-w-screen-xl p-4">
        <a href="#" className="flex items-center text-4xl md:text-8xl lg:text-9xl">
          J. LINDEBERG
        </a>
      </div>
    </>
  );
}
