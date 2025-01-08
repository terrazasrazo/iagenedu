import "./FooterBlock.css";

function FooterBlock() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__content">
        <div>
          <p>Sitio desarrollado por</p>
          <p className="mt-3">
            <a href="https://cuaed.unam.mx/" target="_blank" rel="noreferrer">
              <img
                src="/images/logo-cuaed.png"
                width="150"
                alt="Coordinación de Universidad Abierta y Educación Digital"
              />
            </a>
          </p>
        </div>
        <div className="order-3 lg:order-2 col-span-2 lg:col-span-3 mt-8">
          <h5 className="text-lg font-semibold">Aviso</h5>
          <p>
            Coordinación de Universidad Abierta y Educación Digital de la UNAM.
            ©Todos los derechos reservados {currentYear}. Hecho en México. Este sitio
            puede ser reproducido con fines no lucrativos, siempre y cuando no
            se mutile, se cite la fuente completa y su dirección electrónica, de
            otra forma, se requiere permiso previo por escrito de la
            Institución.
          </p>
          <p>
            Al navegar en este sitio, encontrará contenidos diseñados por
            académicos de la UNAM, denominados Recursos Educativos Abiertos
            (REA), disponibles para todo el público en forma gratuita. Los
            contenidos de cada REA son responsabilidad exclusiva de sus autores
            y no tienen impedimento en materia de propiedad intelectual;
            asimismo, no contienen información que por su naturaleza pueda
            considerarse confidencial y reservada.
          </p>
          <p>
            Los REA podrán ser utilizarlos sin fines de lucro, citando
            invariablemente la fuente y sin alterar la obra, respetando los
            términos institucionales de uso y los derechos de propiedad
            intelectual de terceros.
          </p>
        </div>
        <div className="order-2 lg:order-3 text-right">
          <p>
            Contacto:
            <br />
            <a href="mailto:iagenedu@cuaed.unam.mx" className="underline">
              iagenedu@cuaed.unam.mx
            </a>
          </p>
          <p className="mt-2">
            <a
              href="https://lib.cuaed.unam.mx/portales/aviso-privacidad-simplificado.html"
              className="underline"
            >
              Aviso de privacidad
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default FooterBlock;
