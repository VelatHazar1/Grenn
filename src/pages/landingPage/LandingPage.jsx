import { Link } from "react-router-dom";
import LandingManImg from "../../assets/images/landingPageImages/image 2.png";
import LandingWomanImg from "../../assets/images/landingPageImages/image 3.png";
import LandingStyle from "./LandingPage.module.css";

function LandingPage() {
  return (
    <>
      <div className={LandingStyle.container}>
        <div className={LandingStyle.brand}>
          <Link to="/man">
            {" "}
            <h1>GRENN</h1>
          </Link>
        </div>
        <div className={LandingStyle.section}>
          <Link to="/man">
            {" "}
            <h1>MAN</h1>
          </Link>
          <div className={LandingStyle.image}>
            <Link to="/man">
              {" "}
              <img src={LandingManImg} alt="" />{" "}
            </Link>
          </div>
        </div>
        <div className={LandingStyle.section}>
          <Link to="/woman">
            {" "}
            <h1>WOMAN</h1>
          </Link>
          <div className={LandingStyle.image}>
            <Link to="/woman">
              {" "}
              <img src={LandingWomanImg} alt="" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default LandingPage;
