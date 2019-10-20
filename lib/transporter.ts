import { GraphQLRequest, GraphQLResponse, FetchOptions } from './types';
import qs from 'qs';

export interface GraphQLTransporter {
	url: string;
	options?: FetchOptions;
	fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}

export class HTTPQueryStringTransporter implements GraphQLTransporter {
	url: string;
	options: FetchOptions;

	constructor(url: string, options: FetchOptions) {
		this.url = url;
		this.options = options;
	}

	public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
		console.log('> http-query-string-transporter', this.options);

		const params = qs.stringify(request);

		console.log(params);

		const url = `${this.url}`;

		// const url = new URL(this.url);
		// url.searchParams.append('query', JSON.stringify(query));
		// if (variables) {
		// 	url.searchParams.append('variables', JSON.stringify(variables));
		// }

		// response = await fetch(url.toString(), { headers });

		return {
			data: {},
			status: 200
		};
	}
}

export class HTTPBodyTransporter implements GraphQLTransporter {
	url: string;
	options: FetchOptions;

	constructor(url: string, options: FetchOptions = {}) {
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
		console.log('> http-body-transporter', this.options);

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

		// if (!isJSON(response)) {
		// 	throw new ClientError({ error: await response.text(), status: response.status }, request);
		// }

		// const result: any = response.json();

		// if (response.ok && !result.errors && result.data) {
		// 	return response.json();
		// }

		// throw new ClientError(response, request);
	}
}

// function isJSON(response: Response): any {
// 	const contentType = response.headers.get('Content-Type');

// 	if (contentType && contentType.startsWith('application/json')) {
// 		return response.json();
// 	}

// 	return response.text();
// }
