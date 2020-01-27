import { GraphQLRequest, GraphQLResponse, FetchOptions } from 'types';

export interface GraphQLTransporter {
	url: string;
	options: FetchOptions;
	fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}

export { HTTPBodyTransporter } from './http-body-transporter';
export { HTTPQueryStringTransporter } from './http-query-string-transporter';
