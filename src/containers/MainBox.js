import React from "react";
import MenuBar from "../components/MenuBar.js";
import { Profile, Photos, Cocktails, Pokemon } from "../components/Pages.js";

class MainBox extends React.Component {
  state = {
    pageSelected: "profile"
  };

  renderPage = page => {
    console.log(page);
    this.setState({
      pageSelected: page
    });
  };

  renderSelectedPage = () => {
    switch (this.state.pageSelected) {
      case "profile":
        return <Profile />;
      case "cocktail":
        return <Cocktails />;
      case "photo":
        return <Photos />;
      case "pokemon":
        return <Pokemon />;
    }
  };

  render() {
    /*

    Replace the code below! Depending on what menu item is selected in the menu, 
    I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>;

    return (
      <div>
        <MenuBar
          pageSelected={this.state.pageSelected}
          renderPage={this.renderPage}
        />
        {this.renderSelectedPage()}
      </div>
    );
  }
}

export default MainBox;
