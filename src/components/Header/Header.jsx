import LeftHeaderMenu from "./LeftHeaderMenu";
import RightHeaderMenu from "./RightHeaderMenu";
import '../css/Header.css'

function Header() {

    return (
        <header className="header"> 
            <LeftHeaderMenu />
            <RightHeaderMenu />
        </header>
    )

}

export default Header