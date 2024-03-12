import { useContext } from "react";
import styles from "./Post.module.css";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { PostListStore } from "../store/PostListStore";

let Post = ({ card }) => {

  let {deletePost}=useContext(PostListStore);

  return (
    <>
      <div className={`"card width" ${styles.postBox}`} style={{ width: "25rem" }}>
        <div className="card-body">
          <h5 className="card-title position-relative">
            {card.title}
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={()=>(deletePost(card.title))}>
              <RiDeleteBin5Fill />
            </span>
          </h5>
          <p className="card-text">{card.body}</p>
          {card.tags.map((tag) => (
            <span className="badge text-bg-primary">{tag}</span>
          ))}
          <div className="alert alert-success" role="alert">
            The post has been reacted by {card.reactions} peoples.
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
