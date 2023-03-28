// App-wide config (routes, env vars) goes here.

export function isProduction() {
  return process.env.NODE_ENV === 'production'
}
