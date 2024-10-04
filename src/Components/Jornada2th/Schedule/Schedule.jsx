import scheduleArray from "./Schedule";
import "./Schedule.css";

const Schedule = () => {
  return (
    <section className="schedule">
      <article className="schedule__14nov">
        <h3>14 de noviembre de 2024</h3>
        { scheduleArray[0].items.map((item, index) => {
          return (
            <div key={index} className="schedule__item">
              <span>{item.time}</span>
              <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
            </div>
          );
        })
        }
      </article>
      <article className="schedule__15nov">
        <h3>15 de noviembre de 2024</h3>
        { scheduleArray[1].items.map((item, index) => {
          return (
            <div key={index} className="schedule__item">
              <span>{item.time}</span>
              <span dangerouslySetInnerHTML={{ __html: item.event }}></span>
            </div>
          );
        })
      }
      </article>
    </section>
  );
}

export default Schedule;
