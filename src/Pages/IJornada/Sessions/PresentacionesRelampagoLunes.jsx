import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Presentaciones relámpago",
  youTubeurl: "--pA-EXh7yc",
  ocurrenceDay: "Lunes 23 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Tomás Bautista",
    dependence: "CUAIEED",
    photo: "bautista-godinez.jpg",
    googleScholar: "T89Dw0UAAAAJ",
    researchGate: "Tomas-Bautista-3",
    profile: "https://cuaieed.unam.mx/organigrama.php",
  },
  {
    name: "Dra. Ana Yuri Ramírez",
    dependence: "DGTIC",
    photo: "anayuri-ramirez.jpg",
    googleScholar: "yRyKhP0AAAAJ",
    profile: "https://www.tic.unam.mx/directorio/",
  },
];

function PresentacionesRelampagoLunes() {
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

export default PresentacionesRelampagoLunes;
