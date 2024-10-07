import jlLogo from "../assets/logo.png";
const Mobile = () => {
  return (
    <>
      <div className="h-screen">
        <div className="flex items-center justify-center h-full w-full">
          <div className="border border-1 border-black bg-gray-100 rounded-lg h-[25%] w-[80%] flex flex-col gap-5 items-center justify-center">
            <img
              src={jlLogo}
              className="h-6 mr-3 object object-cover"
              alt="Flowbite Logo"
            />
            <p className="text-gray-900 text-center px-4">
              To get to the admin-side, please access it using desktop devices
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile;
