import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/service";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);
  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
      <div className="w-full height1 flex flex-col md:flex-row justify-end mb-4 border rounded-xl p-2 shadow-md bg-amber-400 overflow-x-auto ">
      <div className="will-change-auto md:w-48 sm:mr-8 relative">
        <img
          src={appwriteService.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="rounded-t-xl md:rounded-xl w-48 h-48 md:h-auto object-cover"
        />
        {isAuthor && (
          <div className="absolute top-2 right-2 md:static md:mt-2">
            <Link to={`/edit-post/${post.$id}`}>
              <button className="mr-3 bg-green-500 text-white px-2 py-1 rounded">
                Edit
              </button>
            </Link>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded"
              onClick={deletePost}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <div className="w-full mt-4  md:mt-0 overflow-x-auto">
        <h1 className="text-xl md:text-2xl font-bold mb-2">{post.title}</h1>
        <div
          className="browser-css overflow-x-auto"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
      </Container>
    </div>
  ) : <div className="w-full height2 py-8 mt-4 text-center gredient ">
  <Container>
    <div className="flex flex-wrap">
      <div className="p-2 w-full">
        <h1 className="text-2xl font-bold ">
        Posts are Loading....
        </h1>
      </div>
    </div>
  </Container>
</div>;
}
