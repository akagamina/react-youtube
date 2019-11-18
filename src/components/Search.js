import React from "react";
import "../assets/css/SearchBar.css";
import { TextField } from "@material-ui/core";
import axios from "axios";

class ImgComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.getSearch = this.getSearch.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  getSearch(e) {
    const params = {
      part: "snippet",
      q: this.state.value,
      type: "video",
      key: "AIzaSyDer_xlI4-O4qjoZqdPMM0bici3m-R8zOg"
    };
    if (e.keyCode === 13) {
      axios
        .get("https://www.googleapis.com/youtube/v3/search", { params })
        .then(response => {
          this.props.callback(response.data.items);
        });
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div className="Search-Bar">
        <div id="wrapper">
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <TextField
              className="Input-field"
              id="outlined-basic"
              placeholder="Search..."
              margin="normal"
              variant="outlined"
              type="text"
              value={this.state.value}
              onKeyDown={this.getSearch}
              onChange={this.handleChange}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default ImgComp;
