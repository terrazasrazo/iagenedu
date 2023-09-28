import './Register.css'

const displayRegisterMessage = (message) => {
  let registerMessage = document.getElementById('registerMessage')
  registerMessage.getElementsByTagName('p')[0].textContent = ""
  registerMessage.getElementsByTagName('p')[0].textContent = message
  registerMessage.classList.remove('hidden')
  setTimeout(() => {
    registerMessage.classList.add('hidden')
  }, 5000)
}

const sendRegister = (event) => {
  event.preventDefault();
  const emailTag = document.getElementById("email");
  const confirmEmailTag = document.getElementById("confirm_email");
  const passwordTag = document.getElementById("password");
  const confirmPasswordTag = document.getElementById("confirm_password");
  const nameTag = document.getElementById("name");
  const lastnameTag = document.getElementById("lastname");
  const entityTag = document.getElementById("entity");
  const accountTag = document.getElementById("account");
  const curpTag = document.getElementById("curp");
  const studyLevelTag = document.getElementById("studyLevel");

  if(emailTag.value !== confirmEmailTag.value) {
    displayRegisterMessage('Los correos no coinciden')
    return
  }
  if(passwordTag.value !== confirmPasswordTag.value) {
    displayRegisterMessage('Las contraseñas no coinciden')
    return
  }
  
  let formData = {
    email: emailTag.value,
    password: passwordTag.value,
    name: nameTag.value,
    lastname: lastnameTag.value,
    entity: entityTag.value,
    account: accountTag.value,
    curp: curpTag.value,
    studyLevel: studyLevelTag.value
  };

  let dataJSON = JSON.stringify(formData);

  let options = {
    method: "POST",
    body: dataJSON,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch("https://ada.bunam.unam.mx/iagen-api/users/", options)
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        displayRegisterMessage(data.error)
        return
      }
      window.scroll(0, 0);
      let successMessage = document.getElementById('successMessage')
      successMessage.classList.remove('hidden')
      setTimeout(() => {
        successMessage.classList.add('hidden')
        window.location.href = '/'
      }, 5000)
    })
    .catch((error) => {
      console.log(error);
      displayRegisterMessage('Ocurrió un error inesperado. Intente más tarde.')
    });
}

function Register() {
  document.getElementById("loginform-container").classList.add("hidden");
  return (
    <>
      <section id='register'>
        <div id="registerMessage" className='hidden'>
          <div>
            <span>X</span>
            <p>Message</p>
          </div>
        </div>
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
          <div className="bg-green-500 text-white hidden" id='successMessage'>
            <p className="p-4 text-center">Registro exitoso. Revisa tu correo electrónico para activar tu cuenta.</p>
          </div>
          <form action="" method="POST" onSubmit={sendRegister}>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Correo electrónico</label>
                <input type="email" className="w-full" name="email" id="email" required />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Confirmar correo electrónico</label>
                <input type="email" className="w-full" name="confirm_email" id="confirm_email" required />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Contraseña</label>
                <input type="password" className="w-full" name="password" id="password" required />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Confirmar contraseña</label>
                <input type="password" className="w-full" name="confirm_password" id="confirm_password" required />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Nombre (como desea que aparezca en su constancia)</label>
                <input type="text" className="w-full" name="name" id="name" required />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Apellido (como desea que aparezca en su constancia)</label>
                <input type="text" className="w-full" name="lastname" id="lastname" required />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">Entidad dentro de la UNAM</label>
                <input type="text" className="w-full" name="entity" id="entity" required />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Número de trabajador o número de cuenta UNAM</label>
                <input type="number" className="w-full" name="account" id="account" required />
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-4">
                <label htmlFor="">CURP</label>
                <input type="text" className="w-full" name="curp" id="curp" required minLength="18" maxLength="18" />
              </div>
              <div className="w-1/2 p-4">
                <label htmlFor="">Grado máximo de estudios</label>
                <select name="studyLevel" className="w-full" id="studyLevel" required>
                  <option value="">Seleccione una opción</option>
                  <option value="Secundaria">Secundaria</option>
                  <option value="Bachillerato">Bachillerato</option>
                  <option value="Licenciatura">Licenciatura</option>
                  <option value="Maestría">Maestría</option>
                  <option value="Doctorado">Doctorado</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-full p-4">
                <label htmlFor=""><a href="https://lib.cuaieed.unam.mx/portales/aviso-privacidad-simplificado.html" target="_blank" rel="noreferrer" className='text-gray-700 underline'>Aviso de privacidad simplificado de la Coordinación de Universidad Abierta, Innovación Educativa y Educación a Distancia de la UNAM</a></label>
                <label htmlFor="" className='mt-2'><input type="checkbox" name='privacyAccept' value="privacy" id="privacy" required /> He leído el Aviso de Privacidad</label>
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
