export const useImage = (title: number) => {
  const imageName = title;

  let source;
  switch (imageName) {
    case 0:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 1:
      source = require("../../assets/meteo/Nuage.jpg");
      break;
    case 2:
      source = require("../../assets/meteo/Nuage.jpg");
      break;
    case 3:
      source = require("../../assets/meteo/Nuage.jpg");
      break;
    case 4:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 45:
      source = require("../../assets/meteo/fog.webp");
      break;
    case 48:
      source = require("../../assets/meteo/fog.webp");
      break;
    case 61:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 63:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 65:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 71:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 73:
      source = require("../../assets/meteo/sun.jpg");
      break;
    case 75:
      source = require("../../assets/meteo/sun.jpg");
      break;
    default:
      source = require("../../assets/meteo/default.jpg");
      break;
  }
  return source;
};
