// import { GraphQLClient, HTTPQueryStringTransporter } from '..';

// const transporter = new HTTPQueryStringTransporter('https://zwanzig-grad.cdn.prismic.io/graphql', {
// 	headers: {
// 		'Authorization':
// 			'Token MC5YWTNaa1JBQUFCOEFwbHJp.77-9GO-_ve-_vSE8ejpu77-9fGJz77-977-9Je-_vS5C77-9X0Tvv70NbDDvv71C77-9QSQT',
// 		'Prismic-ref': 'XZexjxIAACQAqRnS'
// 	}
// });
// const client = new GraphQLClient({
// 	transporter
// });

// // client
// // 	.fetch(
// // 		`query Project($uid: String!) {
// //     project(uid: $uid, lang: "de-de") {
// //         name
// //         description
// //         projectImage
// //     }
// // }`,
// // 		{ uid: 'wertherstr-310' }
// // 	)
// // 	.then(console.log);

// client
// 	.fetch(
// 		`query Project($id: String!) {
// 			project(uid: $id, lang: "de-de") {
// 				name
// 				description
// 				projectImage
// 			}
// 		}`,
// 		{
// 			id: 'wertherstr-310'
// 		}
// 	)
// 	.then(r => console.log('\n RES \n', JSON.stringify(r, null, 4)))
// 	.catch(e => console.error('\n ERR \n', JSON.stringify(e, null, 4)));
