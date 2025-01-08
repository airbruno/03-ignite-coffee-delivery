### Coffee Delivery

[x] It should be able to list all coffee available for purchase
[x] It should be able to add a given amount of coffee to the shopping cart
[x] It should be able to increase and decrease the quantity of items on the shopping cart
[x] It should be able to fill a form with address info and save it to local storage
[x] It should be able to show the number of items in the shopping cart on the header
[x] It should be able to calculate the total value of the items on the shoping cart


Create a shopping cart - array of objects. each object is a diferent kind of coffee and can have a amount added.
Components and pages that will use this info:
 - Home can add items to cart - SENDER
 - Header must have access to the sum of items - READER
 - Checkout page can increase or decrease item quantity or remove it. - SENDER/READER