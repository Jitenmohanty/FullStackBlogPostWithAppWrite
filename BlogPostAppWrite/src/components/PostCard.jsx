import React from "react";
import appwriteService from "../appwrite/service";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="group ">
        <div className="w-[18rem] h-[18rem] bg-gray-100 rounded-xl p-4 group transition-transform transform scale-100 group-hover:scale-105 group-hover:bg-amber-400  ClassFlex ">
          <div className="w-44  justify-center mb-4">
            <img
              src={appwriteService.getFilePreview(featuredImage)}
              alt={title}
              className="rounded-xl"
            />
          </div>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
