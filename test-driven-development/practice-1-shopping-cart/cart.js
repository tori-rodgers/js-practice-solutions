function addItem(cart, item, quantity) {
	if (!item || quantity <= 0) return;
	cart[item] = (cart[item] || 0) + quantity;
}

function removeItem(cart, item) {
	if (!cart[item]) return;
	delete cart[item];
}

function getTotalItems(cart) {
	return Object.values(cart).reduce((total, qty) => total + qty, 0);
}

module.exports = { addItem, removeItem, getTotalItems };
