const mode = ["local", "development", "prodution"][0];

const apiBase = {
  local: "http://localhost:8005/api",
  development: "https://menuz.eachbase.com/api",
  production: "https://aurorabanquethall.com/api",
}[mode];

export const API_BASE = apiBase;
