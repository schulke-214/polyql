import { GraphQLClient, HTTPQueryStringTransporter } from '../lib';

(async () => {
	const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';
	const client = new GraphQLClient(endpoint);

	const query = `
		query getMovie($title: String!) {
			Movie(title: $title) {
				releaseDate
				actors {
					name
				}
			}
		}
	`;

	const variables = {
		title: 'Inception'
	};

	const result = await client.fetch(query, variables);

	console.log(result);
})().catch(console.error);
