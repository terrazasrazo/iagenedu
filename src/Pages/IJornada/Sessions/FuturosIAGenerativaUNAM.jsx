import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Mesa: \"Futuros de la IA generativa en la UNAM: ¿viaje sin retorno?\"",
  youTubeurl: "2t1QrSYgtuQ",
  ocurrenceDay: "Martes 24 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Boris Escalante",
    dependence: "CECAv",
    photo: "escalante-ramirez.jpg",
    googleScholar: "DeMoeYgAAAAJ",
    researchGate: "Boris-Escalante-Ramirez",
    profile: "https://cecav.unam.mx/quienes_somos/",
    
  },
  {
    name: "Dr. Héctor Benítez",
    dependence: "DGTIC",
    photo: "benitez-hector.jpg",
    googleScholar: "pHoGKUQAAAAJ",
    researchGate: "Hector-Benitez-Perez",
    profile: "https://www.tic.unam.mx/hectorbenitez/",    
  },
  {
    name: "Dra. María Leticia De Anda Munguía",
    dependence: "ENES León",
    photo: "leticia-deanda.jpg",
    googleScholar: "7A1-ftoAAAAJ",
    profile: "https://lidie.enes.unam.mx/contacto"
  },
  {
    name: "Dr. Marco Negrete",
    dependence: "FI",
    photo: "marco-negrete.jpg",
    googleScholar: "fS-wIi0AAAAJ",
  },
  {
    name: "Dra. Guadalupe Vadillo",
    dependence: "CUAIEED",
    photo: "guadalupe-vadillo.jpg",
    googleScholar: "VXpipVYAAAAJ",
    researchGate: "Guadalupe-Vadillo-3",
    profile: "https://cuaieed.unam.mx/organigrama.php#Direccion_Bachillerato_a_Distancia_y_MOOC",
  },
];

function FuturosIAGenerativaUNAM() {
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

export default FuturosIAGenerativaUNAM;

