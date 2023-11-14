import SessionItem from "../../../Components/SessionItem/SessionItem";
import BioItem from "../../../Components/SessionItem/BioItem";

const session = {
  title: "Mesa: \"Experiencias educativas de IA generativa en la UNAM\"",
  youTubeurl: "1abnGfo0du4",
  ocurrenceDay: "Lunes 23 de octubre de 2023"
};

const bios = [
  {
    name: "Dr. Guillermo Barrios",
    dependence: "IER",
    photo: "guillermo-barrios.jpg",
    googleScholar: "KoUmiVwAAAAJ",
    researchGate: "Guillermo-Del-Valle",
    profile: "https://www.ier.unam.mx/academicos/gbv/",
    twitter: "altamar"
  },
  {
    name: "Dr. Gustavo de la Cruz",
    dependence: "ICAT",
    photo: "delacruz-martinez.jpg",
    googleScholar: "drE6l10AAAAJ",
    researchGate: "Gustavo-De-La-Cruz-Martinez",
    profile: "https://www.icat.unam.mx/gustavo-cruz-martinez/",
  },
  {
    name: "Dr. Everardo Bárcenas",
    dependence: "FI",
    photo: "everardo-barcenas.jpg",
    googleScholar: "o-pCBM8AAAAJ",
    researchGate: "Everardo-Barcenas",
    profile: "https://sites.google.com/site/ebarcenas/",
    twitter: "ebarcenasp"
  },
  {
    name: "Dr. Antonio Sánchez Pereyra",
    dependence: "DGBSIE",
    photo: "sanchez-pereyra.jpg",
    googleScholar: "4VxRUosAAAAJ",
    researchGate: "Antonio-Pereyra-2",
    profile: "https://www.dgb.unam.mx/index.php/quienes-somos/directorio-de-funcionarios",

  },
  {
    name: "Dr. Erik Carbajal-Degante",
    dependence: "CUAIEED",
    photo: "carbajal-degante.jpg",
    googleScholar: "7Bf-zB8AAAAJ",
    researchGate: "Erik-Carbajal-Degante",
  },
];

function ExperienciasIAGenerativaUNAM() {
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

export default ExperienciasIAGenerativaUNAM;
