import 'cross-fetch/polyfill';

import { GraphQLResponse, FetchOptions, Variables } from './types';
import { GraphQLTransporter, HTTPBodyTransporter } from './transporter';

export interface ClientOptions {
	transporter?: GraphQLTransporter;
	url?: string;
	fetch?: FetchOptions;
}

export class GraphQLClient {
	private transporter: GraphQLTransporter;

	constructor(options: ClientOptions = {}) {
		if (options.transporter) {
			this.transporter = options.transporter;
			return;
		}

		if (!options.url) {
			throw new Error(
				'GraphQLClient: options.url and options.transporter is null - provide one of them to remove this error!'
			);
		}

		this.transporter = new HTTPBodyTransporter(options.url, options.fetch);
	}

	public async fetch(query: string, variables: Variables = {}): Promise<GraphQLResponse> {
		return await this.transporter.fetch({
			query,
			variables
		});
	}
}
