import { FaFacebook } from "react-icons/fa";
import style from "./Shortcut.module.css";
import { FaPlus } from "react-icons/fa6";
import IconWrapper from "./IconWrapper";
function Shortcut() {
  
  return (
    <div className={style.appContainer}>
      <IconWrapper icon={<FaFacebook />} type={"app"} />
      <IconWrapper icon={<FaPlus />} type={"app2"}  />
    </div>
  );
}
export default Shortcut;
