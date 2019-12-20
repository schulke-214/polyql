import { GraphQLClient } from '..';

describe('client', () => {
	describe('options', () => {
		it('throws an error when the url is missing', () => {
			const create = () => new GraphQLClient();
			expect(create).toThrow();
		});

		it('accepts only a url', () => {
			const create = () => new GraphQLClient({ url: 'https://localhost:8000' });

			expect(create).not.toThrow();
			expect(create()).toBeInstanceOf(GraphQLClient);
		});

		it('accepts a url and fetch options', () => {
			const create = () =>
				new GraphQLClient({
					url: 'https://localhost:8000',
					fetch: { headers: { Authorization: 'Bearer XYZ' } }
				});

			expect(create).not.toThrow();
			expect(create()).toBeInstanceOf(GraphQLClient);
		});

		xit('validates the url', () => {});

		xit('accepts a custom transporter', () => {});
	});
});
