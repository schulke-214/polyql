import { GraphQLTransporter } from './transporter';
export interface ClientOptions {
    transporter?: GraphQLTransporter;
    url?: string;
    fetch?: FetchOptions;
}
export interface FetchOptions {
    headers?: Headers;
    mode?: RequestInit['mode'];
    credentials?: RequestInit['credentials'];
    cache?: RequestInit['cache'];
    redirect?: RequestInit['redirect'];
    referrer?: RequestInit['referrer'];
    referrerPolicy?: RequestInit['referrerPolicy'];
    integrity?: RequestInit['integrity'];
}
export interface GraphQLError {
    message: string;
    locations: {
        line: number;
        column: number;
    }[];
    path: string[];
}
export declare type Variables = {
    [key: string]: any;
};
export interface Headers {
    [key: string]: string;
}
export interface GraphQLResponse {
    data?: any;
    errors?: GraphQLError[];
    extensions?: any;
    status: number;
    [key: string]: any;
}
export interface GraphQLRequest {
    query: string;
    variables: Variables;
}
export declare class ClientError extends Error {
    response: GraphQLResponse;
    request: GraphQLRequest;
    constructor(response: GraphQLResponse, request: GraphQLRequest);
    private static extractMessage;
}
