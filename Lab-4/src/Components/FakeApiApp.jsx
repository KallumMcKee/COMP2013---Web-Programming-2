import { useState } from "react";
import { useEffect } from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newPost, setNewPost] = useState({ title: "", body: "" });

  // to fetch the data from the API
  useEffect(() => {
    fetchPosts();
  }, []);

  // this waits for the response from the API and turns them into a state
  const fetchPosts = async () => {
    const response = await fetch(URL);
    const posts = await response.json();
    setData(posts);
    setIsLoading(false);
  };
  // for when the user types something into the tittle or body and updates or new post the state so it all matches
  const handleOnChange = (e) => {
    setNewPost((prevPost) => {
      return {
        ...prevPost,
        [e.target.name]: e.target.value,
      };
    });
  };

  // this function will handle adding a new post to the list
  const handleAddToList = (e) => {
    e.preventDefault();

    // checks if title and/or body text area is empty
    if (newPost.title === "") {
      alert("Please add a title before submitting");
    } else if (newPost.body === "") {
      alert("Please add a body before submitting");
    } else {
      // add new post to the data list
      setData((prevList) => {
        return [newPost, ...prevList]; // adds new post to the top of the list
      });

      // reset the input fields this like its safe state
      setNewPost({
        title: "",
        body: "",
      });
    }
  };

  return (
    <div>
      <h1>Fake API Posts</h1>
      {isLoading && <h1>Loading...</h1>}
      <PostForm
        newPost={newPost}
        handleOnChange={handleOnChange}
        handleAddToList={handleAddToList}
      />
      <PostsContainer data={data} />
    </div>
  );
}
