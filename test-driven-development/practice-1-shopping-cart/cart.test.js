const { addItem, removeItem, getTotalItems } = require("./cart");

describe("Shopping Cart Module", () => {
	let cart;
	beforeEach(() => {
		cart = {};
	});
	test("addItem adds a new item to the cart", () => {
		addItem(cart, "apple", 3);
		expect(cart.apple).toBe(3);
	});
	test("addItem handles negative quantity gracefully", () => {
		addItem(cart, "banana", -2);
		expect(cart.banana).toBeUndefined();
	});
	test("removeItem removes an item from the cart", () => {
		cart.apple = 3;
		removeItem(cart, "apple");
		expect(cart.apple).toBeUndefined();
	});
	test("removeItem does nothing for non-existent items", () => {
		removeItem(cart, "pear");
		expect(cart).toEqual({});
	});
	test("getTotalItems calculates total items in cart", () => {
		addItem(cart, "apple", 3);
		addItem(cart, "banana", 2);
		expect(getTotalItems(cart)).toBe(5);
	});
	test("getTotalItems handles an empty cart", () => {
		expect(getTotalItems(cart)).toBe(0);
	});
});
