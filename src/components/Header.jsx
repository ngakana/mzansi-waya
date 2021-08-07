import { ReactComponent as Logo } from "../assets/icons/logo.svg";

import ThemeButton from "./ThemeButton";

function Header() {
    return(
        <header>
            <Logo />
            <ThemeButton />
        </header>
    );
}

export default Header;