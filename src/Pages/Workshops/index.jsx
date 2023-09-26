import { useState, useEffect } from "react";
import Card from "../../Components/Card";

function Workshops() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    fetch("https://ada.bunam.unam.mx/iagen-api/workshopassistants")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <>
      <div className="workshop-levels bg-white p-4 shadow-sm rounded">
        <p>
          Nivel de conocimiento de IAGen que se requiere para el taller:{" "}
          <span className="bg-blue-400 ml-2">Elemental</span>{" "}
          <span className="bg-blue-600 ml-2">Intermedio</span>{" "}
          <span className="bg-blue-900 ml-2">Avanzado</span>
        </p>
        <p className="mt-6 text-orange-800">Los talleres ocurrirán de manera simultánea de 12:00 a 14:00 horas.</p>
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
