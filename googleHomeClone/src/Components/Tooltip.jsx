import { useState } from "react";
import style from "./Tooltip.module.css";
const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={style.tooltipWrapper}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      {show && <div className={style.tooltip}>{text}</div>}
    </div>
  );
};

export default Tooltip;
