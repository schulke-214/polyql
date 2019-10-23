import { GraphQLClient } from './client';
import { GraphQLResponse, Variables } from './types';
export default GraphQLClient;
export { GraphQLClient };
export * from './types';
export * from './transporter';
export declare const fetch: (url: string, query: string, variables?: Variables | undefined) => Promise<GraphQLResponse>;
