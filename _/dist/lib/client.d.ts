import 'cross-fetch/polyfill';
import { GraphQLResponse, ClientOptions, Variables } from './types';
export declare class GraphQLClient {
    private transporter;
    constructor(options?: ClientOptions);
    fetch(query: string, variables?: Variables): Promise<GraphQLResponse>;
}
