import { createContext, useReducer, useEffect,useState } from "react";

export const PostListStore = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  getPosts: () => {},
  fetching:false,
});

let reducerPost = (postList, action) => {
  let newPostList = postList;
  if (action.type === "DELETE_ME") {
    newPostList = postList.filter(
      (post) => action.payload.cardName !== post.title
    );
  } else if (action.type === "ADD_ME") {
    newPostList = [...postList, action.payload.data];
  }
  else if (action.type === "GET_POST") {
    newPostList = action.payload.post;
  }

  return newPostList;
};

let PostListProvider = ({ children }) => {
  let defaultPostList = [
    // {
    //     id:"1",
    //     title:"Going to Mumbai",
    //     body:"Hi friends,I am going to Mumbai for my vacation",
    //     reactions:2,
    //     userId:"user-0",
    //     tags:["vacation","mumbai","travel"],
    // },
    // {
    //     id:"2",
    //     title:"Going to Delhi",
    //     body:"Hi friends,I am going to Delhi for my collage IV",
    //     reactions:6,
    //     userId:"user-1",
    //     tags:["vacation","delhi","travel","IndustryVisit"],
    // }
  ];

  let [postList, dispatchPosts] = useReducer(reducerPost, defaultPostList);

  let addPost = (data) => {
    let addAction = {
      type: "ADD_ME",
      payload: {
        // id: Date.now(),
        // title: title,
        // body: postBody,
        // reactions: reactions,
        // userId: userId,
        // tags: tags,
        data,
      },
    };

    dispatchPosts(addAction);
  };

  let deletePost = (cardName) => {
    let deleteAction = {
      type: "DELETE_ME",
      payload: {
        cardName,
      },
    };

    dispatchPosts(deleteAction);
  };

  let getPosts = (post) => {
    
    let getPostsAction={
        type:"GET_POST",
        payload:{
            post,
        }
    }

    dispatchPosts(getPostsAction);
  };

  let [fetching,setFetching]=useState(false);

  useEffect(()=>{

    const controller=new AbortController;
    const signal=controller.signal;

    setFetching(true);
    fetch("https://dummyjson.com/posts",{signal})
      .then((res) => res.json())
      .then((data)=>{
      getPosts(data.posts)
      setFetching(false);
       });

       return ()=>{
        controller.abort();
       }
  },[]);


  return (
    <PostListStore.Provider value={{ postList, addPost, deletePost, getPosts,fetching }}>
      {children}
    </PostListStore.Provider>
  );
};

export default PostListProvider;
