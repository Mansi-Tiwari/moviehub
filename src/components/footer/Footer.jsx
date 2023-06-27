import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiMeta } from "react-icons/si";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import { Link } from "react-router-dom";
import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <h1>MovieHub</h1>
        <div className="Items">
          <ul className="menuItems">
            <li className="menuItem ">
              <Link to={"/"} className="menuItem ">
                Home
              </Link>
            </li>
            <li className="menuItem">
              <Link to={"/"} className="menuItem ">
                Term and services
              </Link>
            </li>
            <li className="menuItem">
              <Link to={"/"} className="menuItem ">
                Contact us
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Blog
              </Link>
            </li>
          </ul>
          <ul className="menuItems">
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Terms Of Use
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Privacy-Policy
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                About
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="menuItems">
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Live
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Premium
              </Link>
            </li>

            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                FAQ
              </Link>
            </li>
          </ul>
          <ul className="menuItems">
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                You must watch
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Recent release
              </Link>
            </li>
            <li className="menuItem">
              {" "}
              <Link to={"/"} className="menuItem ">
                Top IMDB
              </Link>
            </li>
          </ul>
        </div>
        <div className="socialIcons">
          <span className="icon">
            <SiMeta />
          </span>
          <span className="icon">
            <FaInstagram />
          </span>
          <span className="icon">
            <FaTwitter />
          </span>
          <span className="icon">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
