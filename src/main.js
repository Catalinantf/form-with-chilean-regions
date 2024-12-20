import "./style.css";
import { setupForm } from "./components/form.js";
import { fetchRegions } from "./api/regions.js";

const app = document.querySelector("#app");
const { regionSelect } = setupForm(app);

// Escucha el evento personalizado y llena el select
document.addEventListener("regionsLoaded", (event) => {
  const regions = event.detail;
  regions.forEach((region) => {
    const option = document.createElement("option");
    option.value = region.value;
    option.textContent = region.label;
    regionSelect.appendChild(option);
  });
});

// Llama a la función para cargar las regiones vía JSONP
fetchRegions();
