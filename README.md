# ‘AMA’AMA

## Overview and goals

This is Code Institute Stream One Project as part of the Full Stack Development course. The project is focused on Front End Development skills. It is designed using HTML, CSS, Bootstrap, jQuery and AngularJS.

‘AMA‘AMA is Aulani Disney Resort & Spa open-air restaurant overlooking Ko Olina Beach in Hawai‘i. Aulani Resort is the ultimate family getaway—celebrating the beauty, history and welcoming spirit of the Hawai‘i island. ‘AMA‘AMA is designed to resemble a beachside house and is located just steps from the beach. ‘AMA‘AMA serves classic Hawaiian cuisine with a modern twist.

Aulani Disney Resort & Spa has an official website describing all the services they provide. ‘AMA‘AMA restaurant website is created to promote the restaurant additionally and to attract more visitors.


## Target audience

Target audience is Aulani Disney Resort & Spa guests as also other potential visitors coming to Ko Olina Beach who enjoy Hawaiian cuisine and open-air dining. 


## Usability

The website is a responsive single scroll page, simple to use and navigate on different devices. The website visitors can find information about the restaurant, read their menus, view picture gallery and make a reservation on the website. 


## Design and Content

The following sections are included on the website: Home page, About, Menus, Gallery and Reservation section. The website has modern design. It has full background video on the main section, large logo, fixed navigation, interactive icons and buttons, a lot of white space, large heading in Menus section with faded background image and full width images in gallery section.

The website has Hawaii theme through it with Hawaiian style icons and sand background in About section, with matching font family and colours.


## Technical information

The website was created using Bootstrap template Creative (https://startbootstrap.com/template-overviews/creative/). Most of the HTML and CSS code was changed as required. The following design elements were kept:

 - Fixed navigation
Additionally the menu options moved to the centre. Font size, font family, text colour, background colour, links styles changed. Border removed. 

 - Heading and horizontal line in About section and heading, horizontal line and paragraph in Reservation section

 - Buttons with updated link styles.

 The rest of the design was implemented to suit the needs of the client. All the third party code is included in the directory “vendor”.

The ‘AMA‘AMA restaurant is created as an AngularJS app. It has several directives for each section of the website. Each directive loads the relevant template for the website section and performs jQuery functions to fix navigation, animate buttons, hide and fade in message on form submission. The app also has one controller to control scrolling effects on the website. Some jQuery functions were included in the Bootstrap template and there are comments in the code which point out which functions were taken from the template.

All images have higher resolution to look good on retina devices. An arrow image on the main section and each of the slide images in the Gallery section has two sizes – one for mobile and tablet screens and one for desktop size screens to improve website load speed on small devices.

All the fields in the reservation form on the website are required to fill in except Additional information field. Date and Phone input fields have pattern attribute to specify the necessary format. If any of the fields are not filled in (in case if, they are required) or if they are filled in incorrectly, the message will show up informing what is wrong. On clicking Submit button, the message will appear informing a user that the reservation has been accepted.

All the HTML, CSS and JS files were validated using The W3C Markup Validation Service, The W3C CSS Validation Service, JSLint.

The website was tested in different browsers – Opera, Google Chrome, Mozilla, Microsoft Edge and Internet Explorer. Few issues were found:
 - The arrow on the main page is not aligned in the centre in Internet Explorer;
 - White space is visible between gallery section and previous element in the DOM. White space is visible only on screens wider than 768px and in Internet Explorer, Microsoft Edge and Mozilla. It does not happen in Chrome and Opera.

After several unsuccessful tries to fix the issues, it was decided to keep the style as it is. Internet Explorer is the least popular browser and visible white space is not a critical issue.

The website was also tested on different screen sizes using Responsive Web Design Tester in Google Chrome. jQuery code functionality was tested using console in browser. 
The website was deployed to GitHub pages.