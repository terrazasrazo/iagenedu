import { NavLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import SignIn from "../../Components/User/SignIn/SignIn";
import SignUp from "../../Components/User/SignUp/SignUp";
import Activate from "../../Components/User/Activate/Activate";
import GetActivate from "../../Components/User/GetActivate/GetActivate";
import Recovery from "../../Components/User/Recovery/Recovery";
import SetPassword from "../../Components/User/SetPassword/SetPassword";
import Profile from "../../Components/User/Profile/Profile";
import "./User.css";

function User() {
  const { userState } = useParams();
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const userStateForm = (userState) => {
    if (userState === "signin") {
      return <SignIn />;
    } else if (userState === "signup") {
      return <SignUp />;
    } else if (userState === "activate") {
      return <Activate />;
    } else if (userState === "getactivate") {
      return <GetActivate />;
    } else if (userState === "recovery") {
      return <Recovery />;
    } else if (userState === "setpassword") {
      return <SetPassword />;
    } else if (userState === "signout") {
      const cookies = new Cookies();
      cookies.remove("id", { path: "/" });
      cookies.remove("name", { path: "/" });
      cookies.remove("lastname", { path: "/" });
      cookies.remove("email", { path: "/" });
      cookies.remove("worshopsCount", { path: "/" });
      navigate("/");
    }
  };

  const [userCount, setData] = useState(null);
  useEffect(() => {
    const getUsersCount = async () => {
      try {
        const response = await fetch(`${API_URL}/users/count`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getUsersCount();
  }, []);

  if (userState === "profile") {
    const cookies = new Cookies();
    if(cookies.get("id") === undefined) {
      navigate("/user/signin");
    } else {
      return <Profile />;
    }
  } else {
    return (
      <section className="welcome">
        <div className="welcome__announcement">
          <h1 className="py-16">
            <NavLink to="/">
              <img src="/images/iagen-unam.png" alt="" />
            </NavLink>
          </h1>
          <h3 className="text-3xl font-semibold mb-6">
            No se pierda la 2a Jornada de IAGen en Educación UNAM 2024
          </h3>
          <p className="text-xl mb-6">
            Si nos acompañó en la primera emisión tan solo tiene que iniciar
            sesión.
          </p>
          <p className="">
            Forme parte de los más de <strong>{userCount}</strong>{" "}
            usuarios registrados.
          </p>
          <p className="welcome__announcement--button-schedule">
            <NavLink to="/2a-jornada">Regresar al programa</NavLink>
          </p>
        </div>
        <div className="welcome__form">{userStateForm(userState)}</div>
      </section>
    );
  }
}

export default User;
