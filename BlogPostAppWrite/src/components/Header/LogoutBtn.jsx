import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import authService from "../../appwrite/auth";

const LogoutBtn = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
    });
  };

  return (
    <button
      className="inline-bock px-4 py-2  duration-200 hover:bg-red-500 font-bold  rounded-full"
      onClick={logoutHandler}
    >Logout</button>
  );
};

export default LogoutBtn;
