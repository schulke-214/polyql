import { fetch } from '../..';

(async () => {
	const url = 'https://api.graph.cool/simple/v1/cixos23120m0n0173veiiwrjr';

	const actor = `
		on Actor {
			name
		}
	`;

	const query = `
		query {
			allActors {
				...${actor}
			}
		}
	`;

	const { data } = await fetch(url, query);

	console.log(data.allActors);
})().catch(console.error);
