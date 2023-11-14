import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Presentaciones relámpago",
  youTubeurl: "3hVzLivr-UY",
  ocurrenceDay: "Martes 24 de octubre de 2023"
};

const bios = [
  {
    name: "Mtro. Federico Turnbull",
    dependence: "DGBSIE",
    photo: "federico-turnbull.jpg",
    researchGate: "Federico-Turnbull-2",
    profile: "https://dgb.unam.mx/index.php/138-servicios/catalogo-de-instructores/349-federico-russell-turnbull-munoz",
  },
  {
    name: "Mtro. Ricardo Tavira",
    dependence: "DGBSIE",
    photo: "ricardo-tavira.jpg",
    researchGate: "Ricardo-Tavira",
  },
];

function PresentacionesRelampagoMartes() {
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

export default PresentacionesRelampagoMartes;
