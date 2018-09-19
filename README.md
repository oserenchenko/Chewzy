## CHEWZY

Chewzy is a website that simplifies a complicated question of "where should we eat tonight?"
We are hoping to help our users narrow down an answer in less than 5 minutes by taking a simple quiz.

Users can use the app without signing up/logging in, or sign in and get access to favorites feature. After the welcome screen users are redirected to a 5 question quiz. After filling out the answers users recieve five results. They can click on a result to see more details about a restaurant, such as an image, price level and website. From that screen they can add a restuarant to their favorites. They can access a complete list of their favorites from any page on the website by clicking a button.

______________
______________
______________
## Visit the deployed version of Chewzy
[Chewzy](https://sleepy-sierra-59381.herokuapp.com/)
Checkout the full version of the app with these credentials:
```
email: test@test.com
```
```
password: ChewzyTest1!
```
##  
______________
______________
______________

![homepage](chewzy.png)

______________
______________
______________

## Getting Started
to install locally run this command in your terminal
```
git clone https://github.com/oserenchenko/Chewzy.git
```
once inside the Chewzy folder run 
```
npm install
```

Now we need to make a .env file inside of the main folder and fill in these keys.
These keys can be obtained at [auth0](https://auth0.com) when you register an application.

``` javascript
NODE_ENV="development"
```
``` javascript
AUTH0_CLIENT_SECRET=YOUR_KEY
```
``` javascript
AUTH0_ID=YOUR_ID
```
``` javascript
AUTH0_DOMAIN=YOUR_DOMAIN
```


You will also need to set up a MySql database called chewzy

The last step is to make sure your express sever is running and and type this command in your termial
```
node server.js
```

### Prerequisites

* [Nodejs](https://nodejs.org/)
* [MySql](https://www.mysql.com)


______________
______________
______________
## Built With

* [Expressjs](https://expressjs.com/) - nodejs server side framework
* [MySql](https://www.mysql.com) -open-source relational database management system.
* [Auth0](https://auth0.com) - universal authentication & authorization platform for web, mobile, and legacy applications.
* [Sequelize](http://docs.sequelizejs.com) - romise-based ORM for Node.js v4 and up.

______________
______________
______________
## Authors

* [Olga Serenchenko](https://github.com/oserenchenko)
* [Inna Leikina](https://github.com/innaleikina)

______________
______________
______________
## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
