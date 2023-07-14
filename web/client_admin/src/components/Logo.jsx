import reactLogo from "../assets/react.svg";
import jlLogo from "../assets/logo.png";

export default function Logo() {
    return (
        <div className="flex justify-center item-center">
            <img src={jlLogo} className="logo" alt="JL Logo" />
        </div>
    );
}
