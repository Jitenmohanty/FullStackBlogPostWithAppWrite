import React, { useEffect, useState } from 'react';
import appwriteService from '../appwrite/service';
import {useNavigate , useParams} from 'react-router-dom';
import {Container , PostForm} from '../components/index'

const EditPost = () => {

const [posts , setPosts] = useState([]);
const {slug} = useParams();
const navigate = useNavigate();

useEffect(()=>{
    if(slug){
        appwriteService.getPost(slug).then((post)=>{
            if(post){
                setPosts(post)
            }
        })
    }
},[])

  return (
    <div>
      
    </div>
  )
}

export default EditPost
