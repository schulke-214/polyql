import 'cross-fetch/polyfill';

import { GraphQLClient } from './client';
import { GraphQLResponse, Variables } from './types';

export { GraphQLClient };
export * from './types';

export const fetch = async (url: string, query: string, variables?: Variables): Promise<GraphQLResponse> => {
	const client: GraphQLClient = new GraphQLClient({ url });

	return await client.fetch(query, variables);
};
