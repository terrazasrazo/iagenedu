import './Register.css'

function Register() {
  document.getElementById("loginform-container").classList.add("hidden");
  return (
    <>
      <section id='register'>
        <header>
          <h1 className="text-3xl">Registro</h1>
          <p className="mt-2 text-gray-600">
            Para conocer el manejo de los datos que se solicitan en este registro se puede consultar el{" "}
            <a href="https://lib.cuaieed.unam.mx/portales/aviso-privacidad-simplificado.html" target="_blank" className="underline" rel="noreferrer">
              Aviso de privacidad simplificado de la Coordinación de Universidad
              Abierta, Innovación Educativa y Educación a Distancia de la UNAM
            </a>
            .
          </p>
        </header>
        <main className='w-3/4 mx-auto bg-slate-50 rounded shadow-sm'>
          <form action="">
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Correo electrónico</label>
                <input type="text" className="w-full" name="email" />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Confirmar correo electrónico</label>
                <input type="text" className="w-full" name="confirm_email" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Nombre (como desea que aparezca en su constancia)</label>
                <input type="text" className="w-full" name="name" />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Apellido (como desea que aparezca en su constancia)</label>
                <input type="text" className="w-full" name="lastname" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Entidad dentro de la UNAM</label>
                <input type="text" className="w-full" name="entity" />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Número de trabajador o número de cuenta UNAM</label>
                <input type="number" className="w-full" name="account" />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">CURP</label>
                <input type="text" className="w-full" name="curp" />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Grado máximo de estudios</label>
                <select name="degree" className="w-full">
                  <option value="0">Seleccione una opción</option>
                  <option value="1">Secundaria</option>
                  <option value="2">Bachillerato</option>
                  <option value="3">Licenciatura</option>
                  <option value="4">Maestría</option>
                  <option value="5">Doctorado</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-full p-4">
                <label htmlFor=""><a href="https://lib.cuaieed.unam.mx/portales/aviso-privacidad-simplificado.html" target="_blank" rel="noreferrer" className='text-gray-700 underline'>Aviso de privacidad simplificado de la Coordinación de Universidad Abierta, Innovación Educativa y Educación a Distancia de la UNAM</a></label>
                <label htmlFor="" className='mt-2'><input type="checkbox" name='privacyAccept' value="privacy" /> He leído el Aviso de Privacidad</label>
              </div>
            </div>
            <div className="text-right">
              <input type="submit" value="completar registro" />
            </div>
          </form>
        </main>
      </section>
    </>
  );
}

export default Register;
