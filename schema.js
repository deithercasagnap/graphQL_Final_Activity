export const typeDefs = `#graphql

 type Supplier {
    id: ID!
    companyName: String!
    location: String!
    products: [Product!]
 }
 type Product {
    id: ID!
    productName: String!
    price: Int!
    supplier: Supplier!
    orderitems: [OrderItem!]
 }
 type OrderItem {
    id: ID!
    unitPrice: Int!
    quantity: Int!
    product: Product!
    order: Order!
 }
 type Order {
    id: ID!
    orderDate: String!
    customer_id: Int!
    totalAmount: Int!
    customer: Customer!

 }
 type Customer {
    id: ID!
    firstName: String!
    lastName: String!
    city: String!
    country: String!
    phone: Int!
    orders: [Order!]
 }
 type Query {
    suppliers: [Supplier]
    products: [Product]
    orderitems: [OrderItem]
    orders: [Order]
    customers: [Customer]

    supplier(id: ID!): Supplier
    product(id: ID!):  Product
    orderitem(id: ID!): OrderItem
    order(id: ID!): Order
    customer(id: ID!): Customer

}

 

type Mutation {

    deleteOrder(id: ID!): [Order]
    addOrder(order: AddOrderInput!): Order
    updateOrder(id: ID!, edits: EditOrderInput!): Order
}


input AddOrderInput {
    orderDate: String!,
    totalAmount: Int!

}

input EditOrderInput {
    orderDate: String,
    totalAmount: Int
}














`