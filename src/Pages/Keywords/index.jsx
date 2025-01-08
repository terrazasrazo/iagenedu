import { useContext, useState, useEffect } from "react";
import { KeywordContext } from "../../Context";
import { NavLink } from "react-router-dom";
import "./Keywords.css";

import ResourceItem from "../../Components/Keywords/resource";

function Keywords() {
  const context = useContext(KeywordContext);
  const [items, setItems] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

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
        fetch(`${API_URL}/keywords/`, options)
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
        });
    } else {
      setItems(null);
    }
  }, []);

  return (
    <section id="keyword-results">
      <h2>
        <NavLink to="/resources/">Recursos</NavLink>
      </h2>
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
