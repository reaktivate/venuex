import getConfig from 'next/config';
import merge from 'lodash/merge';

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig();
const config = merge({}, publicRuntimeConfig, serverRuntimeConfig);

export const { venueId, firebase } = config;
export default config;
