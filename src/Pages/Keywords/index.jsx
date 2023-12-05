import { useContext, useState, useEffect } from "react";
import { KeywordContext } from "../../Context";
import { NavLink } from "react-router-dom";
import "./Keywords.css";

import MainSessionItem from "../../Components/Keywords/mainsession";
import WorkshopItem from "../../Components/Keywords/workshop";
import ResourceItem from "../../Components/Keywords/resource";

function Keywords() {
  const context = useContext(KeywordContext);
  const [items, setItems] = useState(null);

  console.log(context.keyword);

  useEffect(() => {
    let formData = {
      keyword: context.keyword,
    };
    let dataJSON = JSON.stringify(formData);

    let options = {
      method: "POST",
      body: dataJSON,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (context.keyword !== "") {
      fetch("http://localhost:6600/keywords/", options)
        // fetch("https://ada.bunam.unam.mx/iagen-api/users/login/", options)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          console.log(data);
        });
    } else {
      setItems(null);
    }
  }, []);

  return (
    <section id="keyword-results">
      <h2>Resultados</h2>
      <p className="text-sm text-gray-700">Se muestran resultados para la palabra clave: <strong className="text-blue_unam underline">{context.keyword}</strong></p>
      <h3>
        <NavLink to="/i-jornada/">
          Mesas I Jornada de Inteligencia Artificial Generativa en Educación
          2023
        </NavLink>
      </h3>
      <section>
        {items?.mainsessions?.length >= 0 ? (
          items?.mainsessions.map((item, index) => {
            return <MainSessionItem key={index} session={item} />;
          })
        ) : (
          <p>No hay resultados</p>
        )}
      </section>
      <h3>
        <NavLink to="/workshops/">Talleres</NavLink>
      </h3>
      <section>
        {items?.workshops?.length > 0 ? (
          items?.workshops.map((item, index) => {
            return <WorkshopItem key={index} workshop={item} />;
          })
        ) : (
          <p>No hay resultados</p>
        )}
      </section>
      <h3>
        <NavLink to="/resources/">Recursos</NavLink>
      </h3>
      <section>
        {items?.resources?.length > 0 ? (
          items?.resources.map((item, index) => {
            return <ResourceItem key={index} resource={item} />;
          })
        ) : (
          <p>No hay resultados</p>
        )}
      </section>
    </section>
  );
}

export default Keywords;
