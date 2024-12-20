export function fetchRegions() {
  const script = document.createElement("script");
  script.src =
    "https://apis.digital.gob.cl/dpa/regiones?callback=handleRegionsResponse";
  document.body.appendChild(script);
}

export function handleRegionsResponse(data) {
  try {
    console.log("Regions received via JSONP:", data);

    const regions = data.map((region) => ({
      value: region.codigo,
      label: region.nombre,
    }));

    document.dispatchEvent(
      new CustomEvent("regionsLoaded", { detail: regions })
    );
  } catch (error) {
    console.error("Error procesando la respuesta JSONP:", error);
  }
}

window.handleRegionsResponse = handleRegionsResponse;
