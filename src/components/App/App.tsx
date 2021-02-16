import * as React from "react";
import MobileMenu from "../../components/MobileMenu/MobileMenu";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import Main from "../../components/Main/Main";
import FooterBar from "../../components/FooterBar/FooterBar";
import { connect } from "react-redux";
import {
  openMenu,
  closeMenu,
} from "../../redux/Menu/Menu.actions"
import { Dispatch } from "redux";
import "./App.scss";

interface State {
  menu: {
    open: boolean
  }
}

function App(props: any) {
  return (
    <div className="appContainer">
      {props.open ? (<MobileMenu onClickCross={props.closeMenu} />) : (
        <>
          <HeaderBar onClickBurger={props.openMenu} />
          <Main />
          <FooterBar />
        </>
      )}
    </div>
  );
}

const mapStateToProps = (state: State) => {
  console.log('mapStateToProps', state);
  return {
    open: state.menu.open,
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    openMenu: () => dispatch(openMenu()),
    closeMenu: () => dispatch(closeMenu()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)