const expect = require("chai").expect;

describe("Utils", () => {
	describe("2 + 2", () => {
		it("return 4", () => {
			let result = 2 + 2;

			let expected = 4;

			expect(expected).to.eql(result);
		});
	});
});