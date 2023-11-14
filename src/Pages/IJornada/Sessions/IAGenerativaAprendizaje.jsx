import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Mesa: \"IA generativa para el aprendizaje\"",
  youTubeurl: "lDQRPjXWeiI",
  ocurrenceDay: "Lunes 23 de octubre de 2023"
};

const bios = [
  {
    name: "Dra. Marina Kriscautzky",
    dependence: "DGTIC",
    photo: "kriscautzky-marina.jpg",
    googleScholar: "4tjpQKAAAAAJ&hl",
    researchGate: "Marina-Kriscautzky-Laxague",
    profile: "https://www.tic.unam.mx/directorio/",
  },
  {
    name: "Dra. Janneth Trejo",
    dependence: "IISUE",
    photo: "trejo-quintana.jpg",
    googleScholar: "gJFatGgAAAAJ&hl",
    researchGate: "Janneth-Trejo-Quintana",
    profile: "https://www.iisue.unam.mx/investigacion/investigadores/janneth-trejo-quintana",
  },
  {
    name: "Dra. Jimena Olveres",
    dependence: "CECAv",
    photo: "olveres-montiel.jpg",
    researchGate: "Jimena-Olveres",
    profile: "http://lapi.fi-p.unam.mx/?page_id=247",
  },
  {
    name: "Dra. Guadalupe Vadillo",
    dependence: "CUAIEED",
    photo: "guadalupe-vadillo.jpg",
    googleScholar: "VXpipVYAAAAJ",
    researchGate: "Guadalupe-Vadillo-3",
    profile: "https://cuaieed.unam.mx/organigrama.php#Direccion_Bachillerato_a_Distancia_y_MOOC",
  },
  {
    name: "Dra. Jackeline Bucio",
    dependence: "CUAIEED",
    photo: "jackeline-bucio.jpg",
    googleScholar: "QOBHtIsAAAAJ&hl",
    researchGate: "Jackeline-Bucio",
    profile: "https://cuaieed.unam.mx/organigrama.php#Direccion_Bachillerato_a_Distancia_y_MOOC",
    twitter: "txtdgtl",
  }
];

function IAGenerativaAprendizaje() {
  return (
    <div className="p-2">
      <SessionItem session={session} />
      <section className="sm:grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 border-t border-gray-300">
        {
        bios?.map((bio, index) => {
          return <BioItem bio={bio} key={index} />
        })
        }
      </section>
    </div>
  );
}

export default IAGenerativaAprendizaje;
