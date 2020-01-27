export interface Headers {
	[key: string]: string;
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
	locations: { line: number; column: number }[];
	path: string[];
}

export type GraphQLQueryVariables = { [key: string]: any };

export interface GraphQLResponse {
	data?: any;
	errors?: GraphQLError[];
	extensions?: any;
	status: number;
	[key: string]: any;
}

export interface GraphQLRequest {
	query: string;
	variables: GraphQLQueryVariables;
}