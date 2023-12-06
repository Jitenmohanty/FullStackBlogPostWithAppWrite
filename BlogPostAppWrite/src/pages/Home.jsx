import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/service";
import { Container, PostCard } from "../components";
import "../App.css";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full h-[60vh] py-8 mt-4 text-center gredient ">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold ">Posts are Loading....</h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div className=" w-full  py-8 ">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 ">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
