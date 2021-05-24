// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // APIURL : 'http://localhost:8000/users/',
  // APIAUTH: 'http://localhost:8000/api/auth/',
  // APIURL : 'http://localhost/public/users/',
  // APIAUTH: 'http://localhost/public/api/auth/',
  // APIURL : 'http://localhost/LARAAPI/public/users',
  // APIAUTH: 'http://localhost/LARAAPI/public/api/auth'
  APIURL : 'http://20.71.42.205/LARAAPI/public/users',
  APIAUTH : 'http://20.71.42.205/LARAAPI/public/api/auth',
};
