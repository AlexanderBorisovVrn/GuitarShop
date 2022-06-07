import style from "./MyLoader.module.scss";

type Props = {
  size?: "md" | "lg" | "sm";
  color?: "primary" | "white";
};

export default function Loader({ size = "sm", color = "primary" }: Props) {
  const divStyles = {
    sm: () => ({ width: "16px", height: "16px",borderWidth:'1px' }),
    md: () => ({ width: "32px", height: "32px",borderWidth:'4px'  }),
    lg: () => ({ width: "64px", height: "64px" }),
  }[size]();

  const divClasses = {
    primary: () => style.Border_Primary,
    white: () => style.Border_White,
  }[color]();

  return (
    <div className={style.Wrap}>
      <div className={style.Lds}>
        <div style={divStyles} className={divClasses}></div>
        <div style={divStyles} className={divClasses}></div>
        <div style={divStyles} className={divClasses}></div>
        <div style={divStyles} className={divClasses}></div>
      </div>
    </div>
  );
}
