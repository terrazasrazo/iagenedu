import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Clausura",
  youTubeurl: "W_VMT7Dxj3I",
  ocurrenceDay: "Martes 24 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Melchor Sánchez",
    dependence: "CUAIEED",
    photo: "sanchez-mendiola.jpg",
    googleScholar: "2l-cMhYAAAAJ",
    researchGate: "Melchor-Sanchez-Mendiola",
    profile: "https://cuaieed.unam.mx/organigrama.php",
    twitter: "melchorsm",
  },
  {
    name: "Dr. Boris Escalante",
    dependence: "CECAv",
    photo: "escalante-ramirez.jpg",
    googleScholar: "DeMoeYgAAAAJ",
    researchGate: "Boris-Escalante-Ramirez",
    profile: "https://cecav.unam.mx/quienes_somos/",
    
  },
];

function Clausura() {
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

export default Clausura;
