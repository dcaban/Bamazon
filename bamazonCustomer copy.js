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
            message: "\n\n*** What is the id of the product you would care to purchase?"
        },
        {
            name: "amount",
            type: "input",
            message: "---------------------------------------\n*** How many would you like?"
        }
        ]).then(function (updateTable) {
            var pID = parseInt(updateTable.purchase_id);
            var amount = parseInt(updateTable.amount);

        if (isNaN(pID) === true || isNaN(amount) === true){
            console.log("-----------------------------------------\n*** Item id or amount not inputted.")
            done();
        }
        else {
            connection.query("SELECT * FROM products WHERE ?\n", {item_id: pID}, function (err, res) {
                var sQuanity = res[0].stock_quantity;
                var price = res[0].price;
                var product = res[0].product_name;
                var totalCost = amount * price;

                if ((sQuanity - amount) > -1) {
                    connection.query("UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: (sQuanity - amount)
                            },
                            {
                                item_id: pID
                            }
                        ]
                    );
                    console.log("------------------------------------------\n*** Great! :) You bought " + amount + " " + product + "s for a total of $" + totalCost + " ***");
                    done()
                }

                if ((sQuanity - amount) <= -1) {
                    console.log("Insufficient quantity!");
                    done();
                }


            })
        }
    });

}

function done() {
    inquirer.prompt([
        {
            name: "done",
            type: "list",
            message: "---------------------------------------\nWould you like to continue shopping?\n",
            choices: ["yes", "no"]
        }
    ]).then(function (done) {
        if (done.done == "yes") {
            console.log("-------------------------------------------\nGreat lets buy more awesome stuff! \n");
            ogTable();
        }
        ;
        if (done.done == "no") {
            console.log("-------------------------------------------\n Thank You See You Soon! \n");
            connection.end();
        }
    })
}


