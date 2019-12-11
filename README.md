# Group-Repo

## Introduction to our Project

* The purpose of our project/application was to allow users to experience some of the hidden gems of Portland's culinary scene. 

* We wanted to make an application that would allow the user to select different parameters and then, from those preferences, a generated list would be provided including: 

* A photo of the establishment, 
* location,
* menu,
* price range, 
* rating, 
* and hours of operation.

## How it works

* 'The Best of Portland's Cuisine" application applies user selected parameters to display resteraunt results.

* On the left side of the page there are 3 dropdowns/selectors:
 1. Cuisine - Select establishment type (cafe, brewery, foodtruck, etc)
 2. Sort - Choose from three different 
 3. Order 



## Technologies

* The project requiered the use of 2 server side APIs and another third-party API. Our APIs are as follows:

1. Zomato API
2. Google static map API
3. Yelp API (Third-party)

Using jQuery, each element of the DOM that was responsible for dynamic change (ie, dropdowns) was selected, and then an Ajax call was made to the APIs (one to Zomato to pull the restaraunt information and one to Google maps which displayed the map).