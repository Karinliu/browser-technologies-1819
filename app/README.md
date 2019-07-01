## Case
<img width="1280" alt="Screenshot 2019-05-15 21 37 30" src="https://user-images.githubusercontent.com/32538678/57807503-93665100-7761-11e9-83bc-43219e07d3bc.png">

The case that I have chosen is the Tosti application. Where the user can make their own shopping list to buy ingrediënts.

## Wireflow
Before I started with coding, I made a wireflow. See here under.

![wireflow-01](https://user-images.githubusercontent.com/32538678/55219052-2116cd00-5204-11e9-8643-9a2823926af8.png)

![wireflow-02](https://user-images.githubusercontent.com/32538678/55219053-2116cd00-5204-11e9-9878-9fbb12dc4489.png)


## Functional/reliable, usable en pleasurable 

#### Pleasurable
The pleasurable layer for the user is that he/she does not have to go to the next page when they choose an ingrediënt for their shopping list. Also with Javascript it is possible to copy the chosen ingrediënt into the clipboard.


#### usable
The usable layer for the user is that he/she can still select items for their shopping list. And  by clicking on a link the person can send the shopping list to themselves via e-mail.

#### Functional/reliable
The functional/reliable part is that the user can create choose ingrediënts and display it on their screen.


## Features browser
The accessibility that I  have been searching for is to see if there are Javascript functions who not support some browser versions. For example copy to clipboard does not support every browser like IE 6-8. See below the code: 

```js
    function copy() {
        if (false == document.execCommand('copy')) {
            var btn = document.getElementById("node-btn");
            btn.className += " hidden"
            var btnJs = document.getElementById("js-btn");
            btnJs.className = "form-btn js-btn "
        } else {
            var copyText = document.getElementById("alltext");
            console.log(copyText)
            copyText.select();
            document.execCommand("copy");
            console.log("copy copy")
        }
    }
```

For inserting the elements in the copy textarea, I used:

```js
element.innerText || element.textContent.

```

The reason why I used innertext or textcontext, is because `textContent` is not supported in IE. And by using `innerText`, innertext is not supported in Firefox.

<img width="400" alt="Screenshot 2019-07-01 20 25 09" src="https://user-images.githubusercontent.com/32538678/60458328-9d271380-9c3e-11e9-889e-e28c6fa2060c.png">
<img width="400" alt="Screenshot 2019-07-01 20 25 22" src="https://user-images.githubusercontent.com/32538678/60458329-9d271380-9c3e-11e9-8d25-62e96d3e5211.png">


So when the browser does not support the copy function, the browser will not show the copy button. Instead it wil show you a mail button. 

In my HTML I used an `<a> </a>` so the chosen ingredients will be sended to your own email. By using `subject=` I gave my email a subject and by using `body=`, the ingredients will be placed into the body element of your email.

For CSS I made a support for grid templating. I made a fallback for supports with @supports, see below the code:

```css
.container {
    display: block;
}

.item {
    display: inline-block;
    width: 280px;
    width: 22.3vw;
    float: left;
    margin: 8px;
}

@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1em;
    }

    .item {
        width: auto;
        margin: 0;
    }
}

```
CSS has a feature that can test if the browser supports a particular property or property:value before applying on the web for the user, namely: `@supports`.

The code above says: If the browser supports grid use grid, but if the browser does not support grid then use inline-block. 


## Accessibility
I made a few accessibilities: <br>
• For screenreaders I used an Alt-tag for images. <br>
• Every label has a name. <br>
• When a label is checked, the screen shows a check. <br>
• when a label is checked, text will be displayed shown and image becomes a bit transparent. <br>
• Hover I have added a transparancy and the text will be shown for the user. <br>
• Tried to use as little color as possible for the contrast. <br>

## Changes
During the feedback session there were a number of points that needed to be improved: <br>
• Tabben with keyboard keys. <br>
• Copy to clipboard does not work from bottom to top (selecting ingredients). <br>
• Copy to clipboard did not work like it should be. <br>

##### Keyboard functions
Now when the user is going to tab into the application, the user can use his/her keyboard to select an ingredient to their list. After the ingredients is selected, the user can use the button to copy the ingredients to his/her clipboard.

<img width="1280" alt="Screenshot 2019-05-15 22 33 30" src="https://user-images.githubusercontent.com/32538678/57807469-88132580-7761-11e9-9fae-ff9da291ce9b.png">


## Feature detection 

##### Javascript
for my JavaScript I wrote some codes that are not supported in every browser. For example I used querySelectorAll.
<img width="1162" alt="Screenshot 2019-05-22 21 56 12" src="https://user-images.githubusercontent.com/32538678/58206488-0aab6000-7ce1-11e9-9133-38043922970e.png">

First I wanted to write the old school way of coding, but when I wanted to use getElementsByClassName, I saw that this way of selecting a class, is not supported for older browsers (IE6 to IE8).
<img width="1162" alt="Screenshot 2019-05-22 21 55 43" src="https://user-images.githubusercontent.com/32538678/58208958-44cb3080-7ce6-11e9-99cc-439849b4885a.png">

So instead of trying to write all the javascript code in the old school way, I wrote a function to see if the browser supports this features.

First I searched what type of selectors works in EVERY browser, for example getElementById and getElementsByTagName:
<img width="1162" alt="Screenshot 2019-05-22 21 55 58" src="https://user-images.githubusercontent.com/32538678/58207059-3bd86000-7ce2-11e9-82a5-06406c451eb3.png">

So I wrote a querySelectorAll check to see if the browser supports querySelectorAll then use this. If the browser does not support querySelectorAll, then use getElementsByTagname. See below the code:

```js
    function checkQuerySelectorAll(element) {
        if ('querySelectorAll' in document) {
            return document.querySelectorAll(element);
        } else {
            return document.getElementsByTagName(element);
        }
    }
```

##### CSS
CSS has a feature that can test if the browser supports a particular property or property:value before applying on the web for the user, namely: `@supports`.

So for my CSS I used @supports. If the browser does support grid, a grid will be used. But sometimes browsers does not support @supports. 

<img width="1155" alt="Screenshot 2019-05-22 23 16 21" src="https://user-images.githubusercontent.com/32538678/58209601-9fb15780-7ce7-11e9-9986-30823fcec7e5.png">

So to prevent the app will be broken, i wrote a fallback with floats. So when the browser does not use @supports or grid, then float will be used.

```css
.container {
    display: block;
}

.item {
    display: inline-block;
    width: 280px;
    width: 22.3vw;
    float: left;
    margin: 8px;
    /*background: blue;*/
}

@supports (display: grid) {
    .container {
        /*background: pink;*/
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1em;
    }

    .item {
        width: auto;
        margin: 0;
         /*background: pink;*/
    }
}
```
To read more about @supports you can visit my article when I tested @supports, for example: <br>
* @supports is supported but grid not? <br>
* @supports is not supported but grid is? <br>
* @supports is supported and grid is supported? <br>

You can visit the following link: [@supports](https://github.com/Karinliu/weekly-nerd-1819/blob/master/%40supports/%40supports.md).

Also in the code above you see that I wrote a fallback voor de viewwidth. Because vw also is not supported for older browsers.

The other thing what is not supported in every browser is :hover, so to fallback that I used the [historical](https://css-tricks.com/snippets/css/cross-browser-opacity/) version off adding transparancy with the following CSS line: `filter: alpha(opacity=50);`.

##### Live version
For the live version you can see the following link: [Demo](https://karin-tosti.herokuapp.com)
