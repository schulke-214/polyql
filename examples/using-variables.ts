import { GraphQLClient } from '../lib';

(async () => {
	const endpoint = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';
	const client = new GraphQLClient(endpoint);
})().catch(console.error);

// (async function() {

// 	const query = /* GraphQL */ `
// 		query getMovie($title: String!) {
// 			Movie(title: $title) {
// 				releaseDate
// 				actors {
// 					name
// 				}
// 			}
// 		}
// 	`;

// 	const variables = {
// 		title: 'Inception'
// 	};

// 	interface TData {
// 		Movie: { releaseDate: string; actors: Array<{ name: string }> };
// 	}

// 	const data = await request<TData>(endpoint, query, variables);
// 	console.log(JSON.stringify(data, undefined, 2));
// })().catch(error => console.error(error));
