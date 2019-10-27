import { GraphQLClient } from '../lib/polyql.es';

describe('client', () => {
	describe('options', () => {
		it('throws an error when the url is missing', () => {
			const create = () => new GraphQLClient();

			expect(create).toThrow();
		});
	});
});
