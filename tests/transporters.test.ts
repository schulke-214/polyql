// import { GraphQLClient } from '..';
import { HTTPBodyTransporter, HTTPQueryStringTransporter } from '..';

describe('transporters', () => {
	describe('HTTPQueryStringTransporter', () => {
		it('throws an error when the url is missing', () => {
			// @ts-ignore
			const createQS = () => new HTTPQueryStringTransporter();
			// @ts-ignore
			const createQSWithNonString = () => new HTTPQueryStringTransporter({});

			expect(createQS).toThrow();
			expect(createQSWithNonString).toThrow();
		});
		xit('works', () => {});
	});

	describe('HTTPBodyTransporter', () => {
		it('throws an error when the url is missing', () => {
			// @ts-ignore
			const createBody = () => new HTTPBodyTransporter();
			// @ts-ignore
			const createBodyWithNonString = () => new HTTPBodyTransporter({});

			expect(createBody).toThrow();
			expect(createBodyWithNonString).toThrow();
		});
		xit('works', () => {});
	});
});
