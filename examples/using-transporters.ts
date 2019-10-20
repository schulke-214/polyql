import { GraphQLClient, HTTPQueryStringTransporter } from '../lib';

(async () => {
	const url = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

	const client = new GraphQLClient({
		transporter: new HTTPQueryStringTransporter(url)
	});

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

	const { data } = await client.fetch(query, variables);

	console.log(data);
})().catch(console.error);
