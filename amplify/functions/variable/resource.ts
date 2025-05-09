import { defineFunction, secret } from '@aws-amplify/backend';

export const secretVariable = defineFunction({
  environment: {
    API_KEY: secret('MY_API_KEY') // this assumes you created a secret named "MY_API_KEY"
  }
});