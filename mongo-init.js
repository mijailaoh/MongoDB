db.createUser(
    {
        user: "<your-user>",
        pwd: "<your-pass>",
        roles: [
            {
                role: "readWrite",
                db: "<your-db-name>"
            }
        ]
    }
);
// create Collections
db.createCollection("users");
db.createCollection("products");
// Insert Default Data (users)
db.users.insertOne({
    username: "Mattis",
    email: "mattis@tmk.com",
    age: 30,
    status: "active"
});
// Insert Default Data (products)
db.products.insertMany([
    {
        name: "Laptop",
        brand: "Dell",
        price: 1200,
        stock: 50,
        status: true
    },
    {
        name: "Smartphone",
        brand: "Samsung",
        price: 800,
        stock: 100,
        status: false
    }
]);
