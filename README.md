<h1 align="center">
  <br><a href="https://imgbb.com/"><img src="https://i.ibb.co/kXD9vbw/Tech-IT-Not-official.png" alt="Tech-IT-Not-official" border="0"></a></a>
  <br>
  <p align="center"><a href="https://ibb.co/nrNNrwW"><img src="https://i.ibb.co/PxvvxrS/ff2b00.png" alt="ff2b00" border="0"></a></p>
  <br>
</h1>

# Tech IT

## Contents
- [Inroduction](#Introduction )
- [Features](#Key-Feautures)
- [Example](#Example )
- [Installation](#Installation)
- [Tools](#Built-With)
- [Usage](#Usage)
- [Contributing](#Contributing)
- [License](#License)


## Introduction

This is a electronics e-commerce site. The site host various products the deal with technology. The site is built on react for front end purposes.  


## Key Feautures
- [x] Fetch From a JSON File 
- [x] Display Products Dynamically
- [x] Page pagination  
- [x] Filter Products Based on Company or category
- [ ] Add to cart
- [ ] Search Product
- [ ] Store Cart Locally 
- [ ] Connect To back Api
- [ ] Create User Login


## Example 

## Modules
Most modules are imported into react from the index.js file
```js
import React from 'react';
import ReactDOM from 'react-dom';
```
css module used are bootstrap 4 and font-awesome  
```js
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
```

Semantic-ui is a css framework
```
npm install sematic-ui-react sematic-ui-css --save
```

lodash

```
npm i --save lodash
```

```js
import _ from 'lodash';

```
## Events
the handlePageChange() takes in one parameter then setState's it to this.state.currentPage
```js
this.handlePageChange(page)
```

The handleCategoryChange() method takes in one parameter then setState the category to this.state.selectedCategory
```js
this.handleCategoryChange(category)
```



## State

Main state is found in the product.jsx
```js
state = {
		products: [],
		pageSize: 4,
		currentPage: 1,
		categories: [],
		selectedCategory: ''
	};
```

## Installation

```bash
npm start
```
## Built With


## Usage


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
MIT (c) 2018 [Ian Odhiambo](https://github.com/ianodad)

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify


