let suppliers = [
    { id: '1', companyName: 'companyName1', location: 'location1'},
    { id: '2', companyName: 'companyName2', location: 'location2'},
    { id: '3', companyName: 'companyName3', location: 'location3'},
    { id: '4', companyName: 'companyName4', location: 'location4'},
    { id: '5', companyName: 'companyName5', location: 'location5'}
]

let products = [
    { id: '1', productName: 'productName1', supplier_id: '1', price: 100},
    { id: '2', productName: 'productName2', supplier_id: '1', price: 100},
    { id: '3', productName: 'productName3', supplier_id: '2', price: 100},
    { id: '4', productName: 'productName4', supplier_id: '2', price: 100},
    { id: '5', productName: 'productName5', supplier_id: '3', price: 100}
]

let orderitems = [
    { id: '1', order_id: '6', product_id: '1', unitPrice: 100, quantity: 10 },
    { id: '2', order_id: '5', product_id: '1', unitPrice: 100, quantity: 10 },
    { id: '3', order_id: '4', product_id: '1', unitPrice: 100, quantity: 10 },
    { id: '4', order_id: '3', product_id: '3', unitPrice: 100, quantity: 10 },
    { id: '5', order_id: '2', product_id: '3', unitPrice: 100, quantity: 10 },
    { id: '6', order_id: '1', product_id: '3', unitPrice: 100, quantity: 10 }
]

let orders = [
    { id: '1', orderDate: '2024-10-12', customer_id: '1', totalAmount: 100 },
    { id: '2', orderDate: '2024-10-12', customer_id: '1', totalAmount: 100 },
    { id: '3', orderDate: '2024-10-12', customer_id: '1', totalAmount: 100 },
    { id: '4', orderDate: '2024-10-12', customer_id: '3', totalAmount: 100 },
    { id: '5', orderDate: '2024-10-12', customer_id: '3', totalAmount: 100 },
    { id: '6', orderDate: '2024-10-12', customer_id: '3', totalAmount: 100 }
]

let customers = [
    { id: '1', firstName: 'Maria Leonora', lastName: 'Sam Smitch', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 },
    { id: '2', firstName: 'Bob', lastName: 'Golosinda', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 },
    { id: '3', firstName: 'Sam', lastName: 'Ybanez', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 },
    { id: '4', firstName: 'Aillen', lastName: 'Smith', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 },
    { id: '5', firstName: 'Ivan', lastName: 'Ladera', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 },
    { id: '6', firstName: 'Maria', lastName: 'Rochelle', city: 'Cagayan de Oro City', country: 'Philippines', phone: 999999 }
]

export default { suppliers, products, orderitems, orders, customers}