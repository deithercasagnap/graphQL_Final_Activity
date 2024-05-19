import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

//import database
import db from "./_db.js";

//import typeDefs
import { typeDefs } from "./schema.js";


const resolvers = {
    Query: {
        suppliers() {
            return db.suppliers
        },
        products() {
            return db.products
        },
        orderitems() {
            return db.orderitems
        },
        orders() {
            return db.orders
        },
        customers() {
            return db.customers
        },

        
        supplier(_, args) {
            return db.suppliers.find((supplier) => supplier.id === args.id)
        },
        product(_, args) {
            return db.products.find((product) => product.id === args.id)
        },
        orderitem(_, args) {
            return db.orderitems.find((orderitem) => orderitem.id === args.id)
        },
        order(_, args) {
            return db.orders.find((order) => order.id === args.id)
        },
        customer(_, args) {
            return db.customers.find((customer) => customer.id === args.id)
        }

    },




    Supplier: {
        products(parent) {
            return db.products.filter((p) => p.supplier_id === parent.id)
        }
    },
    Product: {
        orderitems(parent) {
            return db.orderitems.filter((o) => o.product_id === parent.id)
        },
    },
    Product: {
        supplier(parent) {
            return db.suppliers.find((s) => s.id === parent.supplier_id)
        }
    },
    OrderItem: {
        product(parent) {
            return db.products.find((p) => p.id === parent.product_id)
        },
        order(parent) {
            return db.orders.find((o) => o.id === parent.order_id)
        }
    },

    Customer: {
        orders(parent) {
            return db.orders.filter((p) => p.customer_id === parent.id)
        }
    },
    Order: {
        customer(parent) {
            return db.customers.find((s) => s.id === parent.customer_id)
        }
    },



    Mutation: {

        deleteOrder(_, args) {
            db.orders = db.orders.filter((g) => g.id !== args.id)
            return  db.orders
        },
        addOrder(_, args) {
            let order = {
                ...args.order,
                id: Math.floor(Math.random() * 10000).toString()
            }
            db.orders.push(order)
            return order
        },
        updateOrder(_,args) {
            db.orders = db.orders.map((g) => {
                if (g.id === args.id) {
                    return {...g, ...args.edits}
                }
                return g
            })
            return db.orders.find((g) => g.id === args.id)
        }

    }









    
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4001}
})

console.log('Server is ready. Listening to port', 4001)