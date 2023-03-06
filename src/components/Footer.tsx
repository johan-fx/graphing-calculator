import React from "react";
import Icon from "@material-ui/icons/ShowChartRounded";
import "../style/footer.scss";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className="footer">
      <a className="icon" href="/">
        <img
          src="https://s3.eu-west-1.amazonaws.com/global-assets.leemons.io/logo_leemons_bb2ece3956.svg"
          alt="Leemons"
          height={20}
        />
      </a>
      <div className="links">
        <div className="item title">Graphing Calculator </div>
      </div>
    </footer>
  );
};
