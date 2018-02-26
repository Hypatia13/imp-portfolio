---
title: "Lab 2"
weight: 2
date: 2018-02-25T22:42:32+02:00
draft: false
---

## 1. Definitions:
1. What is the purpose of the RWD? Why it is used? How things are done before RWD? What is the difference?  
Responsive Web Design technology helps to make web pages look good across all devices, such as desktops, tablets and mobile phones. It give a possibility to control the layout and reposition content according to device's orientation and scale or hide necessary elements, such as images or menus. Before RWD technology was introduced, there was only one design specification for everything and users had to rely on scrolling or zooming. 
2. How css media queries can help you building responsive web sites?  
Using CSS media queries the developer can define specific styles for different devices browser sizes, like creating an alternate layout for smaller displays by decreasing the amount of columns, scaling the images and collapsing a navigation bar.
3. Why to use em (font) based sizing for example margins?  
Em sizing is preferred nowadays because it's automatically scalable. By using it the developer does not specify the exact font size, but it is changed by the user by decreasing/increasing the font, where 1 em is equal to the current font size.
Using it for margins and paddings allows for them to chamge automatically based on the viewport size.
4. Article is already 7 years old, do we have any new technology which can be used to achieve same type of UI responsiveness as described in the article. Buzz words: (CSS Grid, Flexbox).  
Nowadays 2 of the commonly used technologies are CSS Grid and Flexbox. 
CSS Grid uses rows and columns and places each element of the page into a specific part of a grid. 
Flexbox refers to a new CSS3 layout called Flexible Box Layout. It's implemented by setting a value of "display: flex" to a parent element and its child elements will be laid out as flexible boxes. Both of these technologies allow to design web pages without float or positioning, while Flexbox is intended for simpler one-dimensional layouts and CSS Grid for more complex two-dimensional ones.


## 2. RWD examples

![screen1](/~t6loer00/imp_portfolio/2nd_lab/img/1.PNG "screen1")

![screen2](/~t6loer00/imp_portfolio/2nd_lab/img/2.PNG "screen2")

![screen3](/~t6loer00/imp_portfolio/2nd_lab/img/3.PNG "screen3")

![screen4](/~t6loer00/imp_portfolio/2nd_lab/img/4.PNG "screen4")

![screen5](/~t6loer00/imp_portfolio/2nd_lab/img/5.PNG "screen5")



## 3. RWD in practice

A simple responsive web page with CSS-reset.

[Link](/~t6loer00/imp_portfolio/2nd_lab/index.html)

> User zooming can be prevented by adding inside the head element:
	`<meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'>`
	
## 4. Adding stuff

A simple web page from a previous task with a menu and a image added

[Link](/~t6loer00/imp_portfolio/2nd_lab/index2.html)

> Figure tag is for self-contained elements like images, diagrams; it's related to the main flow of the document, but does not affect it if removed
	
## 5. Responsive person list

A person list app with responsive features, no px used in sizing.

[Link](/~t6loer00/imp_portfolio/2nd_lab/dynamicHTML2.html)