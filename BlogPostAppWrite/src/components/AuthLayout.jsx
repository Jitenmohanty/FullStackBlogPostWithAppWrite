import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthLayout = ({ children, authentication = true }) => {
  const [loader, setLoader] = useState(true);
  const authStaus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  useEffect(() => {

      //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

        if(authentication && authStaus !== authentication){
            navigate("/login");
        }
        else if(!authentication && authStaus !== authentication){
            navigate('/')
        }
        setLoader(false)
  }, [authentication, authStaus, navigate]);

  return loader ? <h1>Loading ...</h1> : <>{children}</>;
};

export default AuthLayout;
