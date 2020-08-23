# E-commerce site Using Laravel

Ecommerce site is built using Laravel as backend and Bootstrap is used in front end, application has home, product page, shopping cart and checkout with stripe.

##### List of technologies
 - Laravel
 - Custom Bootstrap
 - jquery
 - shoppingcart laravel package
 - stripe payment
 - admin laravel voyager

![website](https://github.com/hemanshuEng/E-commerce-Laravel/blob/master/img/webpicture.JPG)

![gif](https://github.com/hemanshuEng/E-commerce-Laravel/blob/master/img/ezgif-2-d1e0aebebd2f.gif)

![gif](https://github.com/hemanshuEng/E-commerce-Laravel/blob/master/img/ezgif-2-a83445717ccd.gif)
## Setup

#### Requirement
   - Docker
#### clone repo
````makefile
    git clone https://github.com/hemanshuEng/E-commerce-Laravel.git
````
 - install [gnuwin32](http://gnuwin32.sourceforge.net/packages/make.htm) for run make command in windows

#### setup for first time 
 - start your docker && stop the other containers && run below command
````makefile
    make setup
````
  - For stripe to work add your stripe key to .env file 
  ````.dotenv
    
STRIPE_KEY=
STRIPE_SECRET=

````
#### Useful make command 
 1. start container 
 ````makefile
    make start
````
 2. stop app container
 ````makefile
    make stop
````
 3. container bash (for run command in container php-fpm)
````makefile
    make bash
````
 4. npm run watch in container
 ````makefile
    make watch
````
 5. npm run dev in container
 ````makefile
    make dev
````
 6. npm run prod 
 ````makefile
    make prod
````
 7. composer install
 ````makefile
    make composer-install
````
 8. npm install
````
    make npm-install
````
 9. copy env.example to .env
 ````
    make env
````
 10. php artisan migrate
 ````
    make migrate
````
 11. sql bump database homestead
 ````
    make database-bump
````
 12. Stop all container
 ````
    make stop-container
````
 13. if you using admin voyager-install (needed first time setup)
 ````
    make voyager-install
````
