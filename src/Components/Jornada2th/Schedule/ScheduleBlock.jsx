import { NavLink } from "react-router-dom";
import scheduleArray from "./Schedule";
import "./Schedule.css";

const Schedule = () => {
  return (
    <>
      <section className="schedule">
        <div className="schedule__14nov">
          <h3>14 de noviembre de 2024</h3>
          {scheduleArray[0].items.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`/2a-jornada/conference/${item.link}`}
                className="schedule__item"
              >
                <div>
                  <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div className="schedule__15nov">
          <h3>15 de noviembre de 2024</h3>
          {scheduleArray[1].items.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={`/2a-jornada/conference/${item.link}`}
                className="schedule__item"
              >
                <div>
                  <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Schedule;
