import style from "./Shortcut.module.css";
function IconWrapper({ icon, type }) {
  const name = ["Facebook", "Add Shortcut"];
  const na = type == "app" ? name[0] : name[1];

  return (
    <div className={style.box}>
      <div className={`${style[type]}`}>{icon}</div>
      <p className={style.name}>{na}</p>
    </div>
  );
}

export default IconWrapper;
