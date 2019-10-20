import 'cross-fetch/polyfill';

// import { ClientError, GraphQLError, HeadersasHttpHeaders, Options, Variables, GraphQLResponse } from './types';
// export { ClientError } from './types';

import { GraphQLResponse, Options, Variables } from './types';
import { GraphQLTransporter, HTTPBodyTransporter } from './transporter';

export class GraphQLClient {
	private transporter: GraphQLTransporter;

	constructor(url: string = '', options: Options = {}) {
		this.transporter = new HTTPBodyTransporter(url, options);
	}

	public async fetch(query: string, variables: Variables = {}): Promise<GraphQLResponse> {
		return await this.transporter.fetch({
			query,
			variables
		});
	}
}
