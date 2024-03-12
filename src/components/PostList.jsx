import Post from "./Post";
import styles from "./PostList.module.css";
import { useContext, useEffect, useState } from "react";
import { PostListStore } from "../store/PostListStore";
import WelcomePost from "./WelcomePost";
import LoadSpinner from "./LoadSpinner";

let PostList = () => {
   
  let cardObj=useContext(PostListStore);
  let cards=cardObj.postList;
  let getPosts=cardObj.getPosts;
  let fetching=cardObj.fetching;

  return (
    <>
      <div className={styles.postBox}>
        { fetching && <LoadSpinner></LoadSpinner>}
        { !fetching && cards.length === 0 && <WelcomePost></WelcomePost>}
        { !fetching && cards.map((card)=>(
          <Post card={card} key={card.title}></Post>
        ))}
      </div>
    </>
  );
};

export default PostList;
