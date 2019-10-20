import 'cross-fetch/polyfill';

import { ClientError, GraphQLError, Headers as HttpHeaders, Options, Variables } from './types';
export { ClientError } from './types';

export class GraphQLClient {
	private url: string;
	private options: Options;

	constructor(url: string, options?: Options) {
		this.url = url;
		this.options = options || {};
	}
}
