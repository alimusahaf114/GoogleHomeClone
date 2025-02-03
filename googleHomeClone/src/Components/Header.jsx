import { FaGoogleDrive } from "react-icons/fa";
import { TbGridDots } from "react-icons/tb";
import style from "./Header.module.css";
import myImage from "../assets/Images/picture.jpg";
import Tooltip from "./Tooltip";

function Header() {
  return (
    <>
      <div className={style.header}>
        <p>
          <a href="#">Gmail</a>
        </p>
        <p>
          <a href="#">Images</a>
        </p>
        <a href="#">
          <Tooltip text="Google Drive">
            <FaGoogleDrive className={style.icon} />
          </Tooltip>
        </a>
        <a href="#">
          <Tooltip text="Google Apps">
            <TbGridDots className={style.icon} />
          </Tooltip>
        </a>
        <Tooltip text="Musahaf Ali">
          <img src={myImage} alt="Musahaf Ali" />
        </Tooltip>
      </div>
    </>
  );
}

export default Header;
