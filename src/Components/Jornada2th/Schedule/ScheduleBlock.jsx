import { NavLink } from "react-router-dom";
import Cookies from "universal-cookie";
import scheduleArray from "./Schedule";
import "./Schedule.css";

const Schedule = () => {
  const cookies = new Cookies();
  return (
    <>
      {cookies.get("id") === undefined ? (
      <div className="bg-iagen_magenta p-8 my-6">
        <h3 className="text-4xl">Para ver los enlaces a las sesiones <NavLink to="/user/signin" className="border px-2 rounded bg-iagen_magentahover hover:bg-iagen_purplehover">inicie sesión</NavLink></h3>
      </div>
      ) : null}
    <section className="schedule">
      <div className="schedule__14nov">
        <h3>14 de noviembre de 2024</h3>
        {scheduleArray[0].items.map((item, index) => {
          return (
            <div key={index} className="schedule__item">
              <span>{item.time}</span>
              <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
            </div>
          );
        })}
      </div>
      <div className="schedule__15nov">
        <h3>15 de noviembre de 2024</h3>
        {scheduleArray[1].items.map((item, index) => {
          return (
            <div key={index} className="schedule__item">
              <span>{item.time}</span>
              <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
            </div>
          );
        })}
      </div>
    </section>
    </>
  );
};

export default Schedule;
