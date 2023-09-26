function CallFor() {
    return (
      <section id="call-for" className="w-2/3 mx-auto">
        <header className="flex flex-row items-center mb-8">
            <div>
                <img src="/images/iagen-logo.svg" width="480" alt="I JORNADA DE IA GENERATIVA EN EDUCACIÓN, UNAM 2023" />
            </div>
            <div>
                <p>El Grupo de trabajo sobre inteligencia artificial generativa (IAGen) de la UNAM, convoca a estudiantes y docentes de bachillerato, licenciatura y posgrado de nuestra Universidad a participar en la</p>
                <h2 className="text-center my-8 text-2xl text-blue_unam font-semibold bg-orange-300/30 p-8 rounded-md">I JORNADA DE IA GENERATIVA EN EDUCACIÓN, UNAM 2023</h2>
            </div>
        </header>
        <main>
            <p className="text-center my-4"><strong>que tendrá veriticativo el 23 y 24 de octubre de 2023, en un formato totalmente en línea, y que abordará las siguientes temáticas:</strong></p>
            <div className="ml-4 my-4">
                <ol className="list-disc">
                    <li className="mb-2">Prácticas docentes que incorporan la IA generativa (diseño de experiencias de aprendizaje, evaluación, enriquecimiento curricular, etc.) y</li>
                    <li className="mb-2">Experiencia de estudiantes al aprovechar la IA generativa en sus procesos de aprendizaje.</li>
                </ol>
            </div>
            <p>Los trabajos deberán plantear de forma sintética la práctica o experiencia que involucre este tipo de herramientas. El formato será en vídeo de 3 a 5 minutos (los detalles del formato están en la <a href="https://forms.gle/Ve7uYsVTkN3DtB8H8" target="_blank" className="text-orange-600 underline" rel="noreferrer">forma de registro</a>). El periodo para envío de trabajos para su dictaminación va del 26 de septiembre al 16 de octubre de 2023.</p>
            <p>Académicos e investigadores de las entidades universitarias que organizan esta jornada integrarán el equipo dictaminador y los resultados se comunicarán vía correo electrónico a más tardar el 18 de octubre. Se solicitará a la persona responsable de cada trabajo aceptado que participe, a través de una videoconferencia, en la mesa correspondiente el 23 o 24 de octubre, entre 16 y 18 horas.</p>
            <p className="text-right my-4 text-gray-700">Las constancias de participación se enviarán vía correo electrónico.</p>
            <p className="text-center my-4"><strong>Cualquier aspecto no considerado en la presente convocatoria será resuelto por el Grupo de trabajo que organiza la Jornada.</strong></p>
            <p className="text-center"><a href="https://forms.gle/Ve7uYsVTkN3DtB8H8" target="_blank" className="bg-orange-600 hover:bg-blue_unam text-white p-2 rounded my-4 inline-block" rel="noreferrer">Registro de trabajos</a></p>
        </main>
      </section>
    );
  }
  
  export default CallFor;
  