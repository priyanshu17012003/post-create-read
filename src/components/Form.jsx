import styles from "./Form.module.css";
import "./Form.css";
import { useContext, useRef } from "react";
import { PostListStore } from "../store/PostListStore";
import { useNavigate } from "react-router-dom";

let Form = () => {
  let userIdElement = useRef();
  let titleElement = useRef();
  let postBodyElement = useRef();
  let reactionElement = useRef();
  let tagsElement = useRef();

  let { addPost } = useContext(PostListStore);
  let navigate =useNavigate();

  let handleSumbitPost = (event) => {
    event.preventDefault();
    let userId = userIdElement.current.value;
    let title = titleElement.current.value;
    let postBody = postBodyElement.current.value;
    let reactions = reactionElement.current.value;
    let tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        userId: userId,
        body: postBody,
        reactions: reactions,
        tags: tags,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        addPost(data);

        navigate("/");
      });

    // addPost(userId, title, postBody, reactions, tags);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSumbitPost}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">
            Enter your User Id here
          </label>
          <input
            type="text"
            className="form-control inputs"
            id="userid"
            aria-describedby="emailHelp"
            placeholder="User Id"
            ref={userIdElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title of your post
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="What would be the title of your post?"
            ref={titleElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="postBody" className="form-label">
            Enter your post body here
          </label>
          <textarea
            type="text"
            rows="5"
            className="form-control"
            id="postBody"
            aria-describedby="emailHelp"
            placeholder="What is in your mind for this post?"
            ref={postBodyElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Number of people's reactions
          </label>
          <input
            type="text"
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="How many people reacted?"
            ref={reactionElement}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="text"
            className="form-control"
            id="tags"
            aria-describedby="emailHelp"
            placeholder="Put some tags"
            ref={tagsElement}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
};

export default Form;
