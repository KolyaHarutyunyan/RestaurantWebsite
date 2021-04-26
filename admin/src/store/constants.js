const mode = ['local', 'development', 'prodution'][0]

let apiBase = {
  local: 'http://localhost:8005/api',
  development: 'https://armat.eachbase.com/api',
  production: 'https://aurorabanquethall.com/api'
}[mode]

export const API_BASE = apiBase
