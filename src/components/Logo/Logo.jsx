import Style from "./Logo.module.css";
import { imagePath } from "../../utils/imagePath";

function Logo() {
  return (
    <div className={Style.logoComponent}>

      <div className={Style.logoComponentSymbol}>
        <img
          src={imagePath("/images/Amamentacao-logo.svg")}
          alt="Consultoria de amamentação"
        />
      </div>

      <div className={Style.logoComponentText}>
        <strong>Cuidado que</strong>
        <strong>acolhe, ciência</strong>
        <strong>que transforma.</strong>
      </div>

    </div>
  );
}

export default Logo;