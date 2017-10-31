# Bamazon

Bamazon is an Amazon-like storefront with MySQL database integration. This app takes in customer orders and deplete stock from the store's inventory.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system. 
Bash / terminal commands are noted by these symbols < >. To use this app type what is in the < > symbols but ignore the symbols themselves.

### Prerequisites

What things you need to install

* [nodejs](http://www.nodejs.org/) - An asynchronous JavaScript runtime environment
* [MySQL Workbench]( https://dev.mysql.com/downloads/workbench/ ) - A MySQL graphical user interface
* [Git Bash or Teminal](https://git-for-windows.github.io/) - Windows users will have to have git bash installed to run commands. Mac and Linux users can use their terminal

### Installing

A step by step series of examples that tell you have to get a development env running

#### Open folder in terminal or git bash

```
Drag the folder directly onto the terminal or git bash icon
```

#### Check to see if node is installed

```
* Type in < node -v >

* If a responce is given that starts with the letter v then a series of numbers. Then node is installed.

* < v8.2.1 > - Is an example of a sucessful responce. 
```


#### Install node package dependencies

```
type < npm install >
```

## Starting Bamazon

#### Intitalizing the App
```
* Start by typing the command < node bamazonCustomer.js > 
```

####The response should look like this below 
* You may need to resize the window to get the chart to display correctly


```
What would you like to buy?

┌──────┬─────────────────────────────────────────┬──────────────────┬────────┬────────────┐
│ id   │ product_name                            │ department_name  │ price  │ quantity   │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 1    │ MacBook Pro                             │ Electronics      │ 1200   │ 999        │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 2    │ Harry Potter and the Philosophers Stone │ Books            │ 13     │ 1492       │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 3    │ Awesome Poster                          │ Posters          │ 6000   │ 4960       │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 4    │ Fire Pit                                │ Yard and Garden  │ 87     │ 990        │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 5    │ Pancake Mix                             │ Food             │ 3      │ 1492       │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 6    │ Mouse                                   │ Electronics      │ 29.99  │ 100        │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 7    │ Outdoor Christmas Lights                │ Yard and Garden  │ 15     │ 49         │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 8    │ Plate Set                               │ Home             │ 18     │ 380        │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 9    │ iPhone X                                │ Electronics      │ 999    │ 0          │
├──────┼─────────────────────────────────────────┼──────────────────┼────────┼────────────┤
│ 10   │ Kombucha Starter                        │ Bacteria         │ 10     │ 10         │
└──────┴─────────────────────────────────────────┴──────────────────┴────────┴────────────┘
? What is the id of the product you would care to purchase? 
```


#### Buying an item

```
* Enter the id of an item when prompted then press enter on the keyboard.
* Enter the quanity of an item when prompted then press enter on the keyboard.
* Congrats you bought an item!
```
#### To continue shopping

```
* A list will show up which will give the options to continue shopping or stop shopping.
* Use the arrow keys to select if you wish to stop shopping or continue shopping.
* To confirm selection press enter key.
```



## Video Deminstration

* [Video Deminstration](https://goo.gl/DirGzc) - Click on the link to view a video summary and overview of the application

## Authors

* **David Caban** - *Developer* - [github.com/dcaban](https://github.com/dcaban)



## License

This project is licensed under the MIT License

