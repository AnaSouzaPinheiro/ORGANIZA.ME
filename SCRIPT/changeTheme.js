const fechar = document.querySelector(".fechar");
const personalizar = document.querySelector("#personalizar");
const back = document.querySelector(".back");
const laranja = document.querySelector(".laranja");
const rosa = document.querySelector(".rosa");
const roxo = document.querySelector(".roxo");
const neutro = document.querySelector(".neutro");
const verde = document.querySelector(".verde");
const escuro = document.querySelector(".escuro");
const escuro2 = document.querySelector(".escuro2");
const normal = document.querySelector(".normal");

// Verifica se há uma preferência de tema armazenada
const storedTheme = localStorage.getItem("themePreference");

// Se houver uma preferência de tema armazenada, aplica o tema
if (storedTheme) {
  applyTheme(storedTheme);
}

// Função para aplicar o tema
function applyTheme(theme) {
  let r = document.querySelector(":root");

  if (theme === "laranja") {
    r.style.setProperty("--background-color", "#f8c630a6");
    r.style.setProperty("--title-color", "#F15025");
    r.style.setProperty("--bg-margin-bot-color", "#F15025");
    r.style.setProperty("--botao-bg-color", "#F15025");
    r.style.setProperty("--botao-bg-hover-color", "#ab3d20");
    r.style.setProperty("--primary-clr", "#f1ad5b");
    r.style.setProperty("--color-gradient", "#a76b22");
    r.style.setProperty("--font-calendar", "#fff");
  } else if (theme === "rosa") {
    r.style.setProperty("--background-color", "#f7bfca9e");
    r.style.setProperty("--title-color", " #e94473eb");
    r.style.setProperty("--color-text-table", "#fff");
    r.style.setProperty("--bg-margin-bot-color", " #e94473eb");
    r.style.setProperty("--botao-bg-color", " #e94473eb");
    r.style.setProperty("--botao-bg-hover-color", "#ab3456eb");
    r.style.setProperty("--primary-clr", "#f991ae");
    r.style.setProperty("--font-calendar", "#fff");
    r.style.setProperty("--color-gradient", "#ff648f");
  } else if (theme === "verde") {
    r.style.setProperty("--background-color", "#00a7a891");
    r.style.setProperty("--container-bg-color", "#e0eddcbd");
    r.style.setProperty("--color-text-table", "#fff");
    r.style.setProperty("--title-color", "#05668dff");
    r.style.setProperty("--bg-margin-bot-color", "#058c8d");
    r.style.setProperty("--botao-bg-color", "#05668dff");
    r.style.setProperty("--botao-bg-hover-color", "#044d6b");
    r.style.setProperty("--primary-clr", "#64babb");
    r.style.setProperty("--color-gradient", "#4a7e7f");
    r.style.setProperty("--font-calendar", "#fff");
  } else if (theme === "roxo") {
    r.style.setProperty("--background-color", "#ac84ed");
    r.style.setProperty("--container-bg-color", "#d8d5ffd6");
    r.style.setProperty("--color-text-table", "#fff");
    r.style.setProperty("--title-color", "#5c25c7");
    r.style.setProperty("--bg-margin-bot-color", "#5c25c7");
    r.style.setProperty("--botao-bg-color", "#5c25c7");
    r.style.setProperty("--botao-bg-hover-color", "#361575");
    r.style.setProperty("--primary-clr", "#bb93fb");
    r.style.setProperty("--font-calendar", "#fff");
  } else if (theme === "neutro") {
    r.style.setProperty("--background-color", "#936f64a6");
    r.style.setProperty("--container-bg-color", "#efdac09e");
    r.style.setProperty("--title-color", "#6d554c");
    r.style.setProperty("--bg-margin-bot-color", "#6d554c");
    r.style.setProperty("--botao-bg-color", "#6d554c");
    r.style.setProperty("--botao-bg-hover-color", "#41332e");
    r.style.setProperty("--primary-clr", "#a9938c");
    r.style.setProperty("--font-calendar", "#fff");
    r.style.setProperty("--color-gradient", "#7b6a64");
  } else if (theme === "escuro") {
    r.style.setProperty("--button-content-bg-color", "#436873");
    r.style.setProperty("--background-color", "#0c202b");
    r.style.setProperty("--container-bg-color", "#34697596");
    r.style.setProperty("--title-color", "#c4ced5");
    r.style.setProperty("--bg-margin-bot-color", "#c4ced5");
    r.style.setProperty("--botao-bg-color", "#69b0c5");
    r.style.setProperty("--botao-bg-hover-color", "#4b7e8d");
    r.style.setProperty("--font-topis", "#fff");
    r.style.setProperty("--primary-clr", "#0c202b");
    r.style.setProperty("--font-color", "#c4ced5");

  } else if (theme === "escuro2") {
    r.style.setProperty("--button-content-bg-color", "#312847b0");
    r.style.setProperty("--background-color", "#09001e");
    r.style.setProperty("--container-bg-color", "#120531b0");
    r.style.setProperty("--title-color", "#fff");
    r.style.setProperty("--bg-margin-bot-color", "#dccdffb0");
    r.style.setProperty("--botao-bg-color", "#6b6b8f");
    r.style.setProperty("--botao-bg-hover-color", "#4c4c65");
    r.style.setProperty("--font-color", "#fff");
    r.style.setProperty("--other-font-color", "#fff");
    r.style.setProperty("--font-topis", "#fff");
    r.style.setProperty("--primary-clr", "#373c4f");
    r.style.setProperty("--color-gradient", "#232631");
    r.style.setProperty("--font-calendar", "#fff");
  } else if (theme === "normal") {
    r.style.setProperty("--button-content-bg-color", "#e7e7e7");
    r.style.setProperty("--container-bg-color", "#efefef");
    r.style.setProperty("--background-color", "#91c8e4");
    r.style.setProperty("--title-color", "#4682a9");
    r.style.setProperty("--bg-margin-bot-color", "#dddddd");
    r.style.setProperty("--botao-bg-color", "#008000c7");
    r.style.setProperty("--botao-bg-hover-color", "#005e00e5");
    r.style.setProperty("--botao-menu-color", "#363636");
    r.style.setProperty("--menu-hover-color", "#80808086");
    r.style.setProperty("--primary-clr", "#7dbedf");
    r.style.setProperty("--color-gradient", "#417b99");
    r.style.setProperty("--font-calendar", "#fff");
  } else {
    r.style.setProperty("--button-content-bg-color", "#e7e7e7");
    r.style.setProperty("--container-bg-color", "#efefef");
    r.style.setProperty("--background-color", "#91c8e4");
    r.style.setProperty("--title-color", "#4682a9");
    r.style.setProperty("--bg-margin-bot-color", "#dddddd");
    r.style.setProperty("--botao-bg-color", "#008000c7");
    r.style.setProperty("--botao-bg-hover-color", "#005e00e5");
    r.style.setProperty("--botao-menu-color", "#363636");
    r.style.setProperty("--menu-hover-color", "#80808086");
    r.style.setProperty("--primary-clr", "#7dbedf");
    r.style.setProperty("--color-gradient", "#417b99");
    r.style.setProperty("--font-calendar", "#fff");
  }
}

// Funções para alterar o tema
const changeThemeOrange = () => {
  applyTheme("laranja");
  localStorage.setItem("themePreference", "laranja");
  document.location.reload(true);
};

const changeThemePurple = () => {
  applyTheme("roxo");
  localStorage.setItem("themePreference", "roxo");
  document.location.reload(true);
};

const changeThemePink = () => {
  applyTheme("rosa");
  localStorage.setItem("themePreference", "rosa");
  document.location.reload(true);
};

const changeThemeGreen = () => {
  applyTheme("verde");
  localStorage.setItem("themePreference", "verde");
  document.location.reload(true);
};

const changeThemeDark = () => {
  applyTheme("escuro");
  localStorage.setItem("themePreference", "escuro");
  document.location.reload(true);
};

const changeThemeDark2 = () => {
  applyTheme("escuro2");
  localStorage.setItem("themePreference", "escuro2");
  document.location.reload(true);
};

const changeThemeNeutral = () => {
  applyTheme("neutro");
  localStorage.setItem("themePreference", "neutro");
  document.location.reload(true);
};

const changeThemeNormal = () => {
  applyTheme("normal");
  localStorage.setItem("themePreference", "normal");
  document.location.reload(true);
};

const changeDisplay = () => {
  back.style.display = "flex";
};

const changeDisplayFechar = () => {
  back.style.display = "none";
};

fechar.addEventListener("click", changeDisplayFechar);
personalizar.addEventListener("click", changeDisplay);
laranja.addEventListener("click", changeThemeOrange);
rosa.addEventListener("click", changeThemePink);
roxo.addEventListener("click", changeThemePurple);
escuro.addEventListener("click", changeThemeDark);
escuro2.addEventListener("click", changeThemeDark2);
neutro.addEventListener("click", changeThemeNeutral);
verde.addEventListener("click", changeThemeGreen);
normal.addEventListener("click", changeThemeNormal);
