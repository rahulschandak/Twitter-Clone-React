import React from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpFromBracket,
  faClose,
  faCommenting,
  faHeart,
  faRetweet,
} from "@fortawesome/free-solid-svg-icons";
import "./styles.css";
import { deleteTuit } from "../reducers/tuits-reducer";

const TuitItem = ({
  tuit = {
    _id: 345,
    topic: "Space",
    userName: "SpaceX",
    title:
      "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
    time: "2h",
    image: "spacex.png",
    liked: true,
    replies: 321,
    retuits: 543,
    likes: 22345,
    handle: "@spacex",
    tuit: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
  },
}) => {
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };
  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col-2">
          <img
            width={70}
            className="float-end rounded-3"
            src={`/images/${tuit.image}`}
          />
        </div>
        <div className="col-10">
          <div>
          <FontAwesomeIcon className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)} icon={faClose} />
            {/* <i
              className="bi bi-x-lg float-end"
              onClick={() => deleteTuitHandler(tuit._id)}
            ></i> */}
            <span className="fw-bolder">{tuit.userName}</span> {tuit.handle} .{" "}
            {tuit.time}
          </div>
          {/* <div className="fw-bolder">{tuit.topic}</div> */}
          <div class="wd-padding-bottom-10">{tuit.tuit}</div>
          <div>
            <span class="d-flex justify-content-around">
              <span>
                <FontAwesomeIcon icon={faCommenting} /> &nbsp; {tuit.replies}
              </span>
              <span>
                <FontAwesomeIcon icon={faRetweet} /> &nbsp; {tuit.retuits}
              </span>
              <span>
                {tuit.liked ? (
                  <FontAwesomeIcon icon={faHeart} style={{ color: "red" }} />
                ) : (
                  <FontAwesomeIcon icon={faHeart} />
                )}
                &nbsp; {tuit.likes}
              </span>
              <span>
                <FontAwesomeIcon icon={faArrowUpFromBracket} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};
export default TuitItem;
