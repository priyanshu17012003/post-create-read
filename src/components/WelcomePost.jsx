import { useContext } from "react";
import { TbMoodCry } from "react-icons/tb";
import { PostListStore } from "../store/PostListStore";

let WelcomePost = () => {
  let { getPosts } = useContext(PostListStore);

  // let handleGetPosts = () => {
  //   fetch("https://dummyjson.com/posts")
  //     .then((res) => res.json())
  //     .then((data)=>(getPosts(data.posts)));
  // };

  return (
    <div className="text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-blue">
          No posts <TbMoodCry></TbMoodCry>
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
        </div>
        {/* <button type="button" onClick={handleGetPosts}>
          Get Posts
        </button> */}
      </div>
    </div>
  );
};

export default WelcomePost;
