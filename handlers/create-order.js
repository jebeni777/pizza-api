const pizzas = require('../data/pizzas.json')

function createOrder(order) {
    if (!order || !order.pizza.id || !order.address)
        throw new Error('To order pizza please provide pizza type and address where pizza should be delivered')

    return {}
}

module.exports = createOrder