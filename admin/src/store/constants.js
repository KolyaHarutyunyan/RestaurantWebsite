const mode = ["local", "development", "prodution"][0];
let apiBase;

/* [implement] */
switch (mode) {
  case "local":
    apiBase = "";
    break;
  case "development":
    apiBase = "";
    break;
  case "production":
    apiBase = "";
    break;
  default:
    break;
}

export const API_BASE = apiBase;
