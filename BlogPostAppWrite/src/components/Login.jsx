import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { Login as authLogin } from "../store/authSlice";
import { Button, Logo, Input } from "./index";

const Login = () => {
  const dispatch  = useDispatch();
  const navigate = useNavigate();
  const [register, handleSubmit] = useForm();
  const [error , setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
        const session = await authService.login( )
    } catch (error) {
        
    }
  };

  return <div></div>;
};

export default Login;
