import React from "react";
import './footer.scss';
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={
            "https://avatars.githubusercontent.com/u/105143946?s=400&u=09e5f14cf00fdfc27ddb1a2dc78665b92ceba4f1&v=4"
          }
          alt="Founder"
        />

        <h2>Jiten Mohanty</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/jiten-mohanty/" target={"blank"}>
            <AiFillLinkedin style={{backgroundColor:'blue'}}/>
          </a>
          <a href="https://instagram.com/jitujitenmohanty"  target={"blank"}>
            <AiFillInstagram style={{backgroundColor:'#fa058c',height:'32px',marginLeft:"5px",marginRight:"5px"}}/>
          </a>
          <a href="https://github.com/jitenmohanty" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;