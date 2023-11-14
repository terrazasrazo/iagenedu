import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Mesa: \"Investigación en IAGen en la UNAM: su impacto educativo\"",
  youTubeurl: "gQsmMgoM2As",
  ocurrenceDay: "Martes 24 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Gibrán Fuentes",
    dependence: "IIMAS",
    photo: "gibran-pineda.jpg",
    googleScholar: "yrCHzfIAAAAJ",
    researchGate: "Gibran-Fuentes-Pineda",
    profile: "https://turing.iimas.unam.mx/~gibranfp/"
  },
  {
    name: "Dr. Caleb Rascón",
    dependence: "IIMAS",
    photo: "caleb-rascon.jpg",
    googleScholar: "MUh_nBoAAAAJ",
    researchGate: "Caleb-Rascon",
    profile: "http://calebrascon.info/",
    twitter: "balkce"
  },
  {
    name: "Dra. Atocha Aliseda",
    dependence: "IIF",
    photo: "atocha-aliseda.jpg",
    googleScholar: "BrjkQa8AAAAJ",
    researchGate: "Atocha-Aliseda-Llera",
    profile: "https://www.filosoficas.unam.mx/sitio/atocha-aliseda",
    twitter: "atocha_aliseda"
  },
  {
    name: "Dr. Carlos Minutti",
    dependence: "FI",
    photo: "carlos-minutti.jpg",
    googleScholar: "wPweiiEAAAAJ",
    researchGate: "Carlos-Minutti",
    profile: "http://lapi.fi-p.unam.mx/?page_id=47#Carlos"
  },
  {
    name: "Dra. Jimena Olveres",
    dependence: "CECAv",
    photo: "olveres-montiel.jpg",
    researchGate: "Jimena-Olveres",
    profile: "http://lapi.fi-p.unam.mx/?page_id=247",
  },
];

function InvestigacionIAGenUNAM() {
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

export default InvestigacionIAGenUNAM;

