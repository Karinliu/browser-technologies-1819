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
The pleasurable layer for the user is that he/she can still select items for their shopping list. And  by clicking on a link the person can send the shopping list to themselves via e-mail.

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



