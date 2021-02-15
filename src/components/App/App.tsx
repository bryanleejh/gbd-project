import * as React from "react";
import "./App.scss";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Main from "../../components/Main/Main";
import FooterBar from "../../components/FooterBar/FooterBar";

export default function App() {
  const [menuVisible, setMenuVisible] = React.useState(false);

  return (
    <div className="appContainer">
      {menuVisible ? (<MobileMenu onClickCross={() => setMenuVisible(false)} />) : (
        <>
          <HeaderBar onClickBurger={() => setMenuVisible(true)} />
          <Main />
          <FooterBar />
        </>
      )}
    </div>
  );
}