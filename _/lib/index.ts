import { GraphQLClient } from './client';
import { GraphQLResponse, Variables } from './types';

export default GraphQLClient;
export { GraphQLClient };

export * from './types';
export * from './transporter';

export const fetch = async (url: string, query: string, variables?: Variables): Promise<GraphQLResponse> => {
	const client: GraphQLClient = new GraphQLClient({ url });

	return await client.fetch(query, variables);
};
