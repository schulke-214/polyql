import { GraphQLRequest, GraphQLResponse, FetchOptions } from './types';
// import qs from 'qs';

export interface GraphQLTransporter {
	url: string;
	options: FetchOptions;
	fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}

export class HTTPQueryStringTransporter implements GraphQLTransporter {
	url: string;
	options: FetchOptions;

	constructor(url: string, options: FetchOptions = {}) {
		if (!url || typeof url !== 'string') {
			throw new Error('HTTPQueryStringTransporter: url either not provided or is not a string!');
		}

		this.url = url;
		this.options = options;
	}

	public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
		const params = JSON.stringify(request);
		const url = `${this.url}?${params}`;

		const response = await fetch(url, {
			method: 'GET',
			...this.options
		});

		try {
			return await response.json();
		} catch (e) {
			throw e;
		}
	}
}

export class HTTPBodyTransporter implements GraphQLTransporter {
	url: string;
	options: FetchOptions;

	constructor(url: string, options: FetchOptions = {}) {
		if (!url || typeof url !== 'string') {
			throw new Error('HTTPBodyTransporter: url either not provided or is not a string!');
		}

		this.url = url;

		const { headers, ...others } = options;

		this.options = {
			headers: {
				'Content-Type': 'application/json',
				...headers
			},
			...others
		};
	}

	public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
		const body = JSON.stringify(request);
		const response = await fetch(this.url, {
			method: 'POST',
			body,
			...this.options
		});

		try {
			return await response.json();
		} catch (e) {
			throw e;
		}
	}
}
