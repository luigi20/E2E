import jestConfig from './jest.config';

export default {
  ...jestConfig,
  testEnvironment: './prisma/prisma-test-enviroment.ts',
  testRegex: '.e2e-spec.ts$',
};
