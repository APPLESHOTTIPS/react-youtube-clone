import React, { useEffect, useState } from "react";
import { Button, Divider, Icon, Header, ModalActions } from "semantic-ui-react";
import "./VideoMetadata.scss";
import { Rating } from "../Rating/Rating";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { addWishList } from "../../store/actions/addwishlist";
import { useSelector } from "react-redux";
import { getSearchParam } from "../../services/url";

export function VideoMetadata(props) {
  const videos = useSelector((state) => state.wishlists.wishlists) || [];
  const dispatch = useDispatch();
  const alert = useAlert();
  const [active, setactive] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleCopy = () => {
    const input = document.getElementById("shareLink");
    input.select();
    document.execCommand("copy");
    const copyButton = document.getElementById("copyButton");
    copyButton.innerText = "Copied";
    // setTimeout(() => {
    //   copyButton.innerText = "Copy";
    // }, 3000);
  };

  useEffect(() => {
    for (let i = 0; i < videos.length; i++) {
      if (videos[i].id === props.video.id) {
        setactive(true);
        break;
      }
    }
  }, []);

  if (!props.video || !props.video.statistics) {
    console.log("PROPS", props);
    return (
      <>
        <div>
          {showPopup && (
            <div className="popup">
              <header>
                <p>Share</p>
                <div className="close" onClick={togglePopup}>
                  &times;
                </div>
              </header>
              <div className="content">
                <ul className="icons">
                  <a href="https://www.facebook.com/">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-whatsapp"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-telegram-plane"></i>
                  </a>
                </ul>
                <div className="field">
                  <i className="url-icon uil uil-link"></i>
                  <input type="text" id="shareLink" readOnly value="" />
                  <button id="copyButton" onClick={handleCopy}>
                    Copy
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="video-metadata">
          <div className="video-stats">
            <span></span>
            <div className="video-actions">
              <Rating likeCount={""} dislikeCount={""} />
              <Button
                basic
                icon
                labelPosition="left"
                // disabled={active}
                onClick={togglePopup}
              >
                <Icon name="share" />
                Share
              </Button>
              <Button>
                <Icon name="list" />
              </Button>
              <Button
                disabled={active}
                basic
                icon
                onClick={() => {
                  setactive(true);
                  alert.show("Video is added WatchList");
                  handleadd(props.video);
                }}
              >
                <Icon name="add circle" />
              </Button>
              <Button basic icon>
                <Icon name="ellipsis horizontal" />
              </Button>
            </div>
          </div>
          <Divider />
        </div>
      </>
    );
  }

  function handleadd(video) {
    let videos = JSON.parse(localStorage.getItem("videos")) || [];

    videos.push(video);
    localStorage.setItem("videos", JSON.stringify(videos));
    console.log(video);
    dispatch(addWishList(video));
  }

  const viewCount = Number(props.video.statistics.viewCount).toLocaleString();

  return (
    <>
      <div>
        {showPopup && (
          <div className="popup">
            <header>
              <p>Share</p>
              <div className="close" onClick={togglePopup}>
                &times;
              </div>
            </header>
            <div className="content">
              <ul className="icons">
                <a href="https://www.facebook.com/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.instagram.com/accounts/login/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.whatsapp.com/">
                  <i className="fab fa-whatsapp"></i>
                </a>
                <a href="https://web.telegram.org/">
                  <i className="fab fa-telegram-plane"></i>
                </a>
              </ul>
              <div className="field">
                <i className="url-icon uil uil-link"></i>
                <input
                  type="text"
                  id="shareLink"
                  readOnly
                  value={props.video.id}
                />
                <button id="copyButton" onClick={handleCopy}>
                  Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="video-metadata">
        <div className="video-stats">
          <span>{viewCount} views</span>
          <div className="video-actions">
            <Rating
              likeCount={props.video.statistics.likeCount}
              dislikeCount={props.video.statistics.dislikeCount}
            />
            <Button
              basic
              icon
              name="share"
              labelPosition="left"
              disabled={""}
              onClick={togglePopup}
            >
              {" "}
              <Icon name="share" /> share
            </Button>
            <Button>
              <Icon name="list" />
            </Button>
            <Button
              disabled={active}
              basic
              icon
              // labelPosition="left"
              onClick={() => {
                setactive(true);
                alert.show("Video is added WatchList");
                handleadd(props.video);
              }}
            >
              <Icon name="add circle" />
            </Button>
            <Button basic icon>
              <Icon name="ellipsis horizontal" />
            </Button>
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
}
