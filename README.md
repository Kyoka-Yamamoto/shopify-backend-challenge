# Shopify Backend Challenge
##### Prepared By: Kyoka Yamamoto

## Description

This is an inventory tracking web application for a logistics company. It was made according to the [Shopify Backend Challenge Summer 2022.](https://docs.google.com/document/d/1z9LZ_kZBUbg-O2MhZVVSqTmvDko5IJWHtuFmIu_Xg1A/edit#) It includes following things.

- Basic [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) Functionality
    - Create inventory items
    - Edit Them
    - Delete Them
    - View a list of them
- When deleting, allow deletion comments and undeletion. This is achieved through “archiving” inventory items.

Before I started to make it, I made [the mid-fidelity wireframes](https://www.figma.com/file/5fU3AXClfKGxZHtnjDg6kD/Shopify-Backend-Challenge?node-id=0%3A1) on figma to help understand product context.

## Built With

This app was built with these following frameworks/libraries.

### Backend

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

### Frontend

- [React](https://reactjs.org/)

## Getting Started

Here is an instruction of how to set up this app locally. 

### Prerequisites

Followings are things you need to use the software and how to install them.

- Install node.js and npm from the [official website](https://nodejs.org/en/download/) or through a node version manager like [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
- Install docker and docker-compose from the [official website](https://docs.docker.com/desktop/mac/install/)

### Installation

Below is an instruction of installing and setting up the app. 

- In a directory of your choice, clone the git repository, and navigate to the challenge directory
(example uses HTTPS)
```
git clone https://github.com/Kyoka-Yamamoto/shopify-backend-challenge.git
cd shopify-backend-challenge
```

- In terminal, run the following to start mongodb server in docker

```
docker-compose up
```

#### API

- To start API, from the root directory (/shopify-backend-challenge), run the following to navigate to the /api directory, install dependencies, and start the api

```jsx
cd api
npm install
npm run start
```

#### Frontend

- To start the Frontend, from the root directory (/shopify-backend-challenge), run the following to navigate to the /frontend directory, install dependencies, and start the api

```jsx
cd frontend
npm install
npm run start
```

## Usage

### Backend

- It uses RESTful API.
- The server is running on localhost:8000.
- “/inventory” endpoint
    - If GET request comes from a client, API gets all inventory items from a database.
    - However, if there is a query parameter, API checks whether parameters include “archived” key. If the parameter includes “archived” key, API gets “archived=true” or “archived=false” items.
    - If POST request comes, API inserts items to the database.
- “/inventory/<itemId>” endpoint
    - If PATCH request comes, API finds the item by id and update the item of the database.
    - If DELETE request comes, API finds the item by id and delete the item of the database.

### Frontend

- The server is running on localhost:3000.
- There are 3 tabs, which is “All”, “Active”, and “Archived”.
    - “All” shows all items.
    - “Active” shows “archived=false” items.
    - “Archived” shows “archived=true” items.
- To create new inventory item, click “CREATE” button. If you want to create multiple items, check the box of “Create Another”, and then submit.
- To archive items, click “ARCHIVE” button, and then type archive comments.
- To change archived to active, click “RESTORE” button.
- To delete items, click “DELETE” button. However, you can delete only archived items.

## Contact

Kyoka Yamamoto - kyokayamamoto@icloud.com
Project Link: https://github.com/Kyoka-Yamamoto/shopify-backend-challenge