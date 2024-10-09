import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import SideBar from "../components/SideBar";

export default function RegisterPage() {
  return (
    <>
      <div className="h-screen flex flex-row">
        <SideBar />
        <div className="flex flex-col flex-grow h-full justify-center px-[10%]">
          <Logo />
          <RegisterForm />
        </div>
      </div>
    </>
  );
}
