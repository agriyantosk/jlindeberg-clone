import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center">
        <div className="h-max w-full flex flex-col gap-10">
          <Logo />
          <LoginForm />
        </div>
      </div>
    </>
  );
}
