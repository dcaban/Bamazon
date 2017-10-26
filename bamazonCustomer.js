var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");

var connection = mysql.createConnection ({
    host: "localhost",
    port: 3306 ,
    user: "root",

    // No password is assigned to this database

    password: "",
    database: "bamazon"
});

connection.connect(function(err){
    if (err) throw err;
    ogTable();
});


function ogTable(){
    console.log("\n What would you like to buy?")



    var table = new Table({
        head: ['id', 'product_name',"department_name", 'price', 'quantity'],
        colWidths: [6, 41, 18, 8, 12]
    });

   connection.query('SELECT * FROM products',
        function (err, rows) {
            if (err) {
                console.log(err);
                return
            }
            rows.forEach(function (result) {
                table.push(
                    [result.item_id, result.product_name, result.department_name, result.price, result.stock_quantity]
                );
            })
            console.log("\n" + table.toString()) ,"\n";
            purchase();
        });

}

function purchase() {
    inquirer.prompt([
        {
            name: "purchase_id",
            type: "input",
            message: "What is the id of the product you would care to purchase?"
        },
        {
            name: "amount",
            type: "input",
            message: "How many would you like?"
        }
        ]).then(function (updateTable) {
            var pID = parseInt(updateTable.purchase_id);
            var amount = parseInt(updateTable.amount);


            connection.query("SELECT * FROM products WHERE ?\n", {item_id: pID}, function(err, res) {
                var squanity = res[0].stock_quantity;
                var price = res[0].price;
                var product = res[0].product_name;
                var totalCost= amount*price;

                if ((squanity-amount) > -1) {
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (squanity - amount)
                            },
                            {
                                item_id: pID
                            }
                        ]
                    );
                  console.log("you bought " + amount + " " + product + "s for $" + totalCost );
                }

                if ((squanity-amount) <= -1){
                    console.log("Insufficient quantity!");
                }
    })
    });

}



