function convertirLongitud() {
    const cmInput = document.getElementById("cm-input");
    const unitSelect = document.getElementById("unit-select");
    const result = document.getElementById("result");
  
    const cm = parseFloat(cmInput.value);
    const unit = unitSelect.value;
  
    let conversionFactor, unitName;
  
    switch (unit) {
      case "m":
        conversionFactor = 0.01;
        unitName = "metros";
        break;
      case "mm":
        conversionFactor = 10;
        unitName = "milímetros";
        break;
      case "ft":
        conversionFactor = 0.0328084;
        unitName = "pies";
        break;
      case "in":
        conversionFactor = 0.393701;
        unitName = "pulgadas";
        break;
      case "yd":
        conversionFactor = 0.0109361;
        unitName = "yardas";
        break;
      case "lea":
        conversionFactor = 0.00000207124;
        unitName = "leguas";
        break;
    }
}    