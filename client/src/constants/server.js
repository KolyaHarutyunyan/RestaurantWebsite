const mode = ["local", "development", "production"][1];

const apiBase = {
  local: "http://localhost:8005/api",
  development: "https://menuz.eachbase.com/api",
  production: "https://menumango.com/api",
}[mode];

export const API_BASE = apiBase;
