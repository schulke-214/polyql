import 'cross-fetch/polyfill';

import { GraphQLClient } from 'client';
import { GraphQLResponse, GraphQLQueryVariables } from 'types';

export { GraphQLClient };
export * from 'types';
export * from 'transporter';

export const fetch = async (url: string, query: string, variables?: GraphQLQueryVariables): Promise<GraphQLResponse> => {
	const client: GraphQLClient = new GraphQLClient({ url });

	return await client.fetch(query, variables);
};
