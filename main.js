document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);

  const body = $("body");
  const wrapper = $("#wrapper-container");
  const card = $(".card");

  const colorPickerBackground = $("#color-picker--background");
  const colorPickerNombre = $("#color-picker--texto-nombre");
  const colorPickerDescripcion = $("#color-picker--texto-descripcio");
  const donwloader = $("#download");

  const bg = $(".bg");

  const { width, height } = body.getBoundingClientRect();
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  wrapper.addEventListener("mousemove", (e) => {
    card.style.transition = `none`;

    const { clientX, clientY } = e;

    const mouseX = clientX - wrapper.offsetLeft;
    const mouseY = clientY - wrapper.offsetTop;

    const rotationX = ((mouseY - halfHeight) / halfHeight) * 20;
    const rotationY = ((mouseX - halfWidth) / halfWidth) * 20;

    card.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
  });

  body.addEventListener("mouseleave", () => {
    card.style.transition = `transform 0.5s ease-in-out`;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  });

  // donwloader.addEventListener("click", () => {
  //   card.style.transition = none;
  //   card.style.transform = `rotateX(0deg) rotateY(0deg)`;
  // });

  // Función para actualizar el color del fondo del card
  const updateBackgroundColor = (color1, color2) => {
    console.log({ "color-normal": color1, "color-claro": color2 });
    bg.style.background = `linear-gradient(135deg, ${color1} 0%, ${color2} 100%)`;
  };

  // Función para obtener un color más claro basado en el color seleccionado
  const getLighterColor = (color) => {
    const lighterColor = color + "90"; // Agrega opacidad al color
    return lighterColor;
  };

  // Función para actualizar el color del texto
  const updateTextColorName = (color) => {
    $("#name h1").style.color = color;
    $("#name p").style.color = color;
  };

  // Función para actualizar el color del texto
  const updateTextColorDescription = (color) => {
    $("#description p").style.color = color;

    // cambiar todos los a dentro de los p dentro de description
    const links = document.querySelectorAll("#description p a");
    links.forEach((link) => (link.style.color = color));
  };

  // Evento para cambiar el color de fondo del card al seleccionar un nuevo color
  colorPickerBackground.addEventListener("input", (e) => {
    const backgroundColor = e.target.value;

    // Obtener un color más claro para el texto
    const lighterColor = getLighterColor(backgroundColor);
    updateBackgroundColor(backgroundColor, lighterColor);
  });

  // Evento para cambiar el color del texto al seleccionar un nuevo color
  colorPickerNombre.addEventListener("input", (e) => {
    const textColor = e.target.value;
    updateTextColorName(textColor);
  });

  // Evento para cambiar el color del texto al seleccionar un nuevo color
  colorPickerDescripcion.addEventListener("input", (e) => {
    const textColor = e.target.value;
    updateTextColorDescription(textColor);
  });

  // Función para recoger el nombre del input con id="input-text--nombre-card" y pasarlo al h1 con id="text-name"

  const inputTextNombreCard = $("#input-text--nombre-card");
  const textName = $("#text-name");

  inputTextNombreCard.addEventListener("input", (e) => {
    textName.textContent = e.target.value;
  });

  // Función para recoger la descripción del textarea con id="input-text--cargo-card" y pasarlo al p con id="text-cargo"

  const inputTextCargo = $("#input-text--cargo-card");
  const textCargo = $("#text-cargo");

  inputTextCargo.addEventListener("input", (e) => {
    textCargo.textContent = e.target.value;
  });

  // Función para recoger el nombre del input con id="input-text--telefono-card" y pasarlo al h1 con id="text-telefono"

  const inputTextTelefono = $("#input-text--telefono-card");
  const textTelefono = $("#text-telefono");

  inputTextTelefono.addEventListener("input", (e) => {
    textTelefono.textContent = e.target.value;
  });

  // Función para recoger el nombre del input con id="input-text--email-card" y pasarlo al h1 con id="text-email"

  const inputTextEmail = $("#input-text--email-card");
  const textEmail = $("#text-email");

  inputTextEmail.addEventListener("input", (e) => {
    textEmail.textContent = e.target.value;
  });

  // Función para recoger el nombre del input con id="input-text--linkedin-card" y pasarlo al h1 con id="text-linkedin"

  const inputTextLinkedin = $("#input-text--linkedin-card");
  const textLinkedin = $("#text-linkedin");

  inputTextLinkedin.addEventListener("input", (e) => {
    textLinkedin.textContent = e.target.value;
  });

  // Función para coger la imagen pasara al input file con id="input-file--imagen" al img con id="photo"

  const inputFile = $("#input-file--imagen");
  const photo = $("#photo");

  inputFile.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    // pasarlo a bases64

    reader.readAsDataURL(file);

    reader.onload = (e) => {
      photo.src = e.target.result;
    };
  });

  // Función para cambiar el color del background del body y de todo los textos segun si es dark o light con el input type checkbox con id="dark-light"

  const darkLight = $("#dark-light");

  const theme = localStorage.getItem("theme");

  if (!theme) {
    localStorage.setItem("theme", "dark");
    body.classList.add("dark");
    body.classList.remove("light");
    darkLight.checked = false;
  } else if (theme === "dark") {
    darkLight.checked = false;
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    darkLight.checked = true;
    body.classList.add("light");
    body.classList.remove("dark");
  }

  darkLight.addEventListener("change", (e) => {
    if (e.target.checked) {
      body.classList.remove("dark");
      body.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      body.classList.add("dark");
      body.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  });

  // Función para coger el div con id="card" que no es canvas y pasarlo a un png y descargarlo con el boton con id="download" usar html2canvas

  // const download = $("#download");

  // download.addEventListener("click", () => {
  //   html2canvas(card).then((canvas) => {
  //     const link = document.createElement("a");
  //     link.download = "card.png";
  //     link.href = canvas.toDataURL("image/png");
  //     link.click();
  //   });
  // });
});
