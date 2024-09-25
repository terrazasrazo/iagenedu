import "./Schedule.css";

const Schedule = () => {
  return (
    <section className="schedule">
      <article className="schedule__14nov">
        <h3>14 de noviembre de 2024</h3>
        <div className="schedule__item">
          <span>09:00</span>
          <span>Bienvenida e inauguración</span>
        </div>
        <div className="schedule__item">
          <span>09:30</span><span>Conferencia magistral</span>
        </div>
        <div className="schedule__item">
          <span>10:30</span>
          <span>Conversatorio nuevos roles docentes</span>
        </div>
        <div className="schedule__item">
          <span>11:30</span><span><em>Receso</em></span>
        </div>
        <div className="schedule__item">
          <span>11:40</span><span>Promptatón y Talleres</span>
        </div>
        <div className="schedule__item">
          <span>13:40</span><span><em>Receso</em></span>
        </div>
        <div className="schedule__item">
          <span>15:10</span><span>Presentaciones relámpago</span>
        </div>
        <div className="schedule__item">
          <span>17:00</span><span>Mesa: Evaluación con IA Gen</span>
        </div>
        <div className="schedule__item">
          <span>18:00</span><span>Cierre día 1</span>
        </div>
      </article>
      <article className="schedule__15nov">
        <h3>15 de noviembre de 2024</h3>
        <div className="schedule__item">
          <span>09:00</span><span>Mesa: Ética en las aplicaciones educativas de la IAGen</span>
        </div>
        <div className="schedule__item">
          <span>10:00</span><span>Conferencia magistral</span>
        </div>
        <div className="schedule__item">
          <span>11:00</span><span><em>Receso</em></span>
        </div>
        <div className="schedule__item">
          <span>11:10</span><span>Nanohakatón y Talleres</span>
        </div>
        <div className="schedule__item">
          <span>13:10</span><span><em>Receso</em></span>
        </div>
        <div className="schedule__item">
          <span>15:00</span><span>Presentaciones relámpago</span>
        </div>
        <div className="schedule__item">
          <span>16:00</span><span>Mejores propuestas del certamen</span>
        </div>
        <div className="schedule__item">
          <span>16:30</span><span>Premiación y clausura</span>
        </div>
        <div className="schedule__item">
          <span>16:45</span><span>Cierre del evento</span>
        </div>
      </article>
    </section>
  );
}

export default Schedule;
