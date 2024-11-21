Repo for project in Wdd231

 
Project name 

Amiibo Figure Lookup 

Description of the project 

A website that allows users to lookup different Amiibo characters and figures, view information on them, and "save" them in the browser for easy future access. 

Target audience 

The target audience are fans of Amiibo characters that want an easy way to lookup if an Amiibo exists or not. Also, for users that might want to keep track of their favorite Amiibo, or Amiibo that maybe they own. 

Features and functionalities 

Some of the features and functionality include: the ability to lookup an Amiibo based on name, game series, or release year (via a form, and data fetched from an API); The ability to mark an Amiibo as "saved," (this will be stored in local storage), for easy future retrieval; URL parameters will be used; and the design will be responsive.   

-A link to send the user to eBay  

How the project requirements listed below will be met. 

What will the detailed form be used for? What other forms might you need? 

The detailed form will be used to look up Amiibo based on the name of the Amiibo, the game series the Amiibo comes from, and the release year of the Amiibo. These are the 3 main fields available, although not all of them need to be used to search for an Amiibo. 

What data would you need to store in Local storage for persistence? 

We would need to save the Amiibo ID in local storage, so that the user can easily retrieve the Amiibo that are marked as "favorite," easily.   

What data will your app need? Is there an API or will you need to build your own dataset in a Json file? 

The API we are using is the free Amiibo API from here: https://www.amiiboapi.com 

Where would it make sense to use a drop-down menu or modal? 

A drop-down menu might be useful if the user simply wants to look at a different Amiibo. For example, a drop-down menu that shows things like "Character Name," "Game Series," "Release Year," and it would show all the Amiibo with that name, or are from that game series, or was released in a certain year.   

Where are opportunities to use CSS Animations? 

The drop-down menu might benefit from having a CSS animation, as well as the page that loads when Amiibo data is loaded. 