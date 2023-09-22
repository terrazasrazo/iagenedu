import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Workshops() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("http://localhost:6600/workshopassistants")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="workshop-levels bg-white p-4 shadow-sm rounded">
        <p>
          Nivel de conocimiento de IAGen que se requiere para el taller:{" "}
          <span className="bg-blue-400">Elemental</span>{" "}
          <span className="bg-blue-600">Intermedio</span>{" "}
          <span className="bg-blue-900">Avanzado</span>
        </p>
      </div>
      <section className="container grid grid-cols-4 mx-auto">
        {items?.map((item) => {
          return <Card key={item.id} data={item} />;
        })}
      </section>
    </>
  );
}

export default Workshops;
