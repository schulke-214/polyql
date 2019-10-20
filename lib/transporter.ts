import { GraphQLRequest, GraphQLResponse, Options, ClientError } from './types';

export interface GraphQLTransporter {
	url: string;
	options?: Options;
	fetch(request: GraphQLRequest): Promise<GraphQLResponse>;
}

export class HTTPQueryStringTransporter implements GraphQLTransporter {
	url: string;
	options: Options;

	constructor(url: string, options: Options) {
		this.url = url;
		this.options = options;
	}

	public async fetch(request: GraphQLRequest): Promise<GraphQLResponse> {
		console.log('fetch with this.options = ', this.options);

		return {
			data: {},
			status: 200
		};
	}
}

export class HTTPBodyTransporter implements GraphQLTransporter {
	url: string;
	options: Options;

	constructor(url: string, options: Options = {}) {
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
		console.log('fetch with this.options = ', this.options);
		const body = JSON.stringify(request);
		const response = await fetch(this.url, {
			method: 'POST',
			body,
			...this.options
		});

		if (!isJSON(response)) {
			throw new ClientError({ error: await response.text(), status: response.status }, request);
		}

		const result: any = response.json();

		if (response.ok && !result.errors && result.data) {
			return response.json();
		}

		throw new ClientError(response, request);
	}
}

function isJSON(response: Response): any {
	const contentType = response.headers.get('Content-Type');

	if (contentType && contentType.startsWith('application/json')) {
		return response.json();
	}

	return response.text();
}
