import { defineBackend } from '@aws-amplify/backend';
import { secretVariable } from './functions/variable/resource';

defineBackend({
  secretVariable
});
