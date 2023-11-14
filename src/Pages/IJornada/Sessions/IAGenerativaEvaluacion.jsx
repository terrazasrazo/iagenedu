import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Mesa: \"IA generativa y evaluación: ¿se acabaron los exámenes?\"",
  youTubeurl: "1abnGfo0du4",
  ocurrenceDay: "Martes 24 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Melchor Sánchez",
    dependence: "CUAIEED",
    photo: "sanchez-mendiola.jpg",
    googleScholar: "2l-cMhYAAAAJ&hl",
    researchGate: "Melchor-Sanchez-Mendiola",
    profile: "https://cuaieed.unam.mx/organigrama.php",
    twitter: "melchorsm",
  },
  {
    name: "Dra. Gabriela de la Cruz",
    dependence: "IISUE",
    photo: "gabriela-delacruz.jpg",
    googleScholar: "TFgOUL0AAAAJ",
    researchGate: "Gabriela-De-La-Cruz",
    profile: "https://www.iisue.unam.mx/investigacion/investigadores/gabriela-de-la-cruz-flores",
    twitter: "Gabriel27963401"
  },
  {
    name: "Mtra. Elibidú Ortega Sánchez",
    dependence: "CUAIEED",
    photo: "elibidu-ortega.jpg",
  },
  {
    name: "MI Alejandro Velázquez Mena",
    dependence: "FI",
    photo: "vazquez-mena.jpg",
    researchGate: "Alejandro-Velazquez-Mena",
    profile: "https://www.ingenieria.unam.mx/nuestra_facultad/semblanzas/mc_alejandro_velazquez_mena.php",
  },
];

function IAGenerativaEvaluacion() {
  return (
    <div className="p-2">
      <SessionItem session={session} />
      <section className="sm:grid sm:grid-cols-2 lg:grid-cols-4 border-t border-gray-300">
        {
        bios?.map((bio, index) => {
          return <BioItem bio={bio} key={index} />
        })
        }
      </section>
    </div>
  );
}

export default IAGenerativaEvaluacion;
