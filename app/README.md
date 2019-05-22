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

```
    function copy() {
        if (false == document.execCommand('copy')) {
            var btn = document.querySelector(".node-btn").classList.add("hidden");
            var btnJs = document.querySelector(".js-btn");
                btnJs.classList.remove("hidden");
        } else {

            var copyText = document.getElementById("alltext");
            console.log(copyText)
            copyText.select();
            document.execCommand("copy");
            console.log("copy copy")
        }
    }

```

For CSS I made a support for grid templating. I made a fallback for supports with @supports, see below the code:

```
@supports (display: grid) {
    .container {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 1em;
    }

    .item {
        width: auto!important;
        margin: 0!important;
    }
}

@supports not (display: grid) {
    .container {
        display: block;
    }

    .item {
        display: inline-block;
        width: 22.3vw;
        float: left;
        margin: 0.5em;
    }
}
```

Also I wrote a fallback for browsers where @support does not excist. For example IE. 

```
.item {
    display: inline-block;
    width: 22.3vw;
    width: 23%;
    float: left;
    margin: 0.5em;
}
```

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
for my JavaScript I wrote some codes that are not supported in every browser. For example I used querySelector.
<img width="1162" alt="Screenshot 2019-05-22 21 56 12" src="https://user-images.githubusercontent.com/32538678/58206488-0aab6000-7ce1-11e9-9133-38043922970e.png">

Sometimes the code that I wrote, works for every browsers, for example getElementById:
<img width="1162" alt="Screenshot 2019-05-22 21 55 58" src="https://user-images.githubusercontent.com/32538678/58207059-3bd86000-7ce2-11e9-82a5-06406c451eb3.png">


First I wanted to write the old school way of coding, but when I wanted to use getElementsByClassName, I saw that this way of selecting a class, is not supported for older browsers (IE6 to IE8).
<img width="1162" alt="Screenshot 2019-05-22 21 55 43" src="https://user-images.githubusercontent.com/32538678/58208958-44cb3080-7ce6-11e9-99cc-439849b4885a.png">

So instead of trying to write all the javascript code in the old school way, I wrote a function to see if the browser supports this features.

```
    function featureDetectionCheck(feature, where, type) {
        return feature in where &&
            type ?
            typeof where[feature] === type :
            true
    }


    function enableJavaScript() {
        return featureDetectionCheck('classList', document.body) &&
            featureDetectionCheck('Array', Array.prototype, 'function') &&
            featureDetectionCheck('querySelectorAll', document.body, 'function') &&
            featureDetectionCheck('querySelector', document.body) &&
            featureDetectionCheck('getElementById', document.body)
    }
```

Because when JavaScript is not supported, it will continue to function as how it should be. The only thing javascript does is make some functionalities "more beautiful" for the user but not better.

So when the features is not supported, Javascript will not be used in the browser.

##### CSS
For CSS I used @supports. If the browser does support grid, a grid will be used. If the browser does not support grid, then flexbox will be used.

Because [@supports](https://developer.mozilla.org/en-US/docs/Web/CSS/@supports) specify declarations that depend on a browser's support for one or more specific CSS features. This is called a feature query. The rule may be placed at the top level of your code or nested inside any other conditional group at-rule.


Some browsers does not support @supports. 

<img width="1155" alt="Screenshot 2019-05-22 23 16 21" src="https://user-images.githubusercontent.com/32538678/58209601-9fb15780-7ce7-11e9-9986-30823fcec7e5.png">

So when the browser does not support this function, @supports will not be read. So to prevent this, I wrote the same CSS code when grid is not supported:

```
.item {
    display: inline-block;
    width: 280px;
    width: 22.3vw;
    float: left;
    margin: 8px;
}
```

Also in the code above you see that I wrote a fallback voor de viewwidth. Because vw also is not supported for older browsers.

##### Live version
For the live version you can see the following link: [Demo](https://karin-tosti.herokuapp.com)


--------------------------

• Thanks [Tim](https://github.com/Timilof/browser-technologies-1819) for helping me with writing this feature detection! :)
