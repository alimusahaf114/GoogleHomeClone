import style from "./Search.module.css";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { TbCameraPlus } from "react-icons/tb";
function Search() {
  return (
    <div className={style.iput}>
      <IoIosSearch className={style.icon} />
      <input
        type="text"
        name="Search"
        placeholder="Search Google or type a URL"
      />
      <div className={style.icon2}>
        <MdKeyboardVoice className={style.icon3} />
        <TbCameraPlus className={style.icon3} />
      </div>
    </div>
  );
}
export default Search;
