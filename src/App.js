import React, { Component } from "react";
import Search from "./components/Search";
import "./assets/css/App.css";
import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };

    this.getSearch = this.getSearch.bind(this);
  }

  getSearch = allVideos => {
    this.setState({
      videos: allVideos
    });
  };

  render() {
    return (
      <div className="app-container">
        <div className="header-block">
          <Search callback={this.getSearch} />
        </div>
        <div className="list-block container">
          <List videos={this.state.videos} />
        </div>
      </div>
    );
  }
}

export default App;
