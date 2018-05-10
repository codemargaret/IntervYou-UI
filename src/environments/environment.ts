// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000',
  token_auth_config: {
    apiBase: 'http://localhost:3000'
  },
  newrelic_license_key: '75430d414fabc082aaac03d375c5757350013d0f'
};
