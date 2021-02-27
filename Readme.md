# E-commerce

## Problem Statement

Let's build a fully functional e-commerce site on MERN stack!! You will be building a replica of one of your favourite e-commerce website.

### What's an e-commerce website?

[Wiki](https://en.wikipedia.org/wiki/E-commerce) says

> E-commerce is the activity of buying or selling online. Electronic commerce draws on technologies such as mobile commerce, electronic funds transfer, supply chain management, Internet marketing, online transaction processing, electronic data interchange (EDI), inventory management systems, and automated data collection systems.

# Paths/EndPoints:

### ``/`` (home public)

- ``GET``  ``/product`` - get all product 
- ``GET``  ``/product/:Id`` - get one product with id 

### ``/ ``( google login auth api)

- ``GET`` ``/auth/google`` - google authenticate
- ``GET`` ``/auth/google/callback`` - google authenticate callback

### ``/`` (auth api)

- ``POST`` ``/register `` - user can register
- ``POST`` ``/login`` - user can login 
- ``GET`` ``/product`` - get all product
- ``GET`` ``/product/:Id`` - get single product with id


###  ``/user`` (only logged in user can access)

- ``GET``  ``/`` - after login 
- ``POST`` ``/product`` - new product add
-`` PUT`` ``/product/:Id`` - update product with id
- ``DELETE`` ``/product/:Id``  - delete product  with id
- ``GET`` `` /product`` - get all product 
- ``GET`` `` /product/:Id`` - get one product with id 

###  ``/user`` (user cart)

- ``GET``  ``/cart`` - get all cart data
- ``POST`` ``/cart`` - new new cart data
- ``POST`` ``/cart-delete-item`` - remove from cart 


