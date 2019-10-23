import { GraphQLRequest, GraphQLResponse, FetchOptions } from './types';
export interface GraphQLTransporter {
    url: string;
    options?: FetchOptions;
    fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}
export declare class HTTPQueryStringTransporter implements GraphQLTransporter {
    url: string;
    options: FetchOptions;
    constructor(url: string, options?: FetchOptions);
    fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}
export declare class HTTPBodyTransporter implements GraphQLTransporter {
    url: string;
    options: FetchOptions;
    constructor(url: string, options?: FetchOptions);
    fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}
