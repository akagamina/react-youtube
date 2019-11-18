import React, { Component } from "react";
import "../assets/css/List.css";
import VideoModal from "../components/modals/VideoModal.js";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      iframeVideo: null,
      isModalOpen: false,
      activeModal: null
    };

    this.passVideoId = this.passVideoId.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  passVideoId(id, index) {
    this.setState({ iframeVideo: id });
    this.setState({ activeModal: index });
  }
  hideModal() {
    this.setState({ activeModal: null });
  }
  render() {
    return this.props.videos.map((video, index) => (
      <div key={video.id.videoId} className="list-item container">
        <div
          className="img-block"
          onClick={() => this.passVideoId(video.id.videoId, index)}
        >
          <img src={video.snippet.thumbnails.high.url} alt="video" />
        </div>
        <div className="modal-block">
          <VideoModal
            isOpen={this.state.activeModal === index}
            isHide={this.hideModal}
            iframeVideo={this.state.iframeVideo}
          ></VideoModal>
        </div>
        <div className="body-block">
          <div className="title">
            <h3> {video.snippet.title} </h3>
          </div>
          <div className="publish-date">
            {video.snippet.publishedAt.substring(0, 10)}
          </div>
          <div className="description">{video.snippet.description}</div>
          <div className="button">
            <a
              href={"https://www.youtube.com/watch?v=" + video.id.videoId}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go and watch
            </a>
          </div>
        </div>
      </div>
    ));
  }
}
