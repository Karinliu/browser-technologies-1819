(function() {
    // Check if addEventListener is supported
    if ('addEventlistener' in document) {
        toggleNodeBtn()

        var btnJs = document.getElementById("js-btn");
        btnJs.addEventListener("click", copy);
    } else {
        toggleJsBtn()

        var btnJs = document.getElementById("js-btn");
        btnJs.addEventListener("click", copy);
    }

    // var fieldset = Array.from(document.querySelectorAll("fieldset"));
    var fieldset = checkQuerySelectorAll("fieldset");

    for (var i = 0; i < fieldset.length; i++) {
        var inputs = fieldset[i].getElementsByTagName("input");

        for (var c = 0; c < inputs.length; c++) {
            // if addEventlistener is supported
            if (document.addEventListener) {
                inputs[c].addEventListener("keydown", inputChecked)
            } else {
                toggleNodeBtn()
            }
        }
        var fieldinputs = fieldset[i].getElementsByTagName("label");
        for (var b = 0; b < fieldinputs.length; b++) {

            // if addEventlistener is supported
            if (document.addEventListener) {
                fieldinputs[b].addEventListener("click", handleClick)
            } else {
                toggleNodeBtn()
            }
        }
    }

    function inputChecked() {
        if (this.checked === true) {
            var element = this;
            // element.parentElement.className = ""
            // element.parentElement.className += ("clickedKey");
            // var parent = element.parentElement.parentElement
            //  var fieldsetFirst = document.getElementsByTagName('fieldset')[0];
            //  while (parent.firstChild) {
            //      parent.removeChild(parent.firstChild);
            //  }
            //  parent.insertAdjacentElement("beforeend", element.parentElement);
            element.removeEventListener("keydown", inputChecked)
            var foo = element.parentElement;
            var list = document.getElementById("list");
            list.className = "list paper paper-list "

            document.getElementById("alltext").value += " " + foo.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ') || " " + foo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')
        } else {
            handleClick()
        }
    }

    function handleClick() {
        var element = this;
        element.removeEventListener("click", handleClick)
        // element.className += "clicked";
        // var parent = element.parentElement.parentElement
        // while (parent.firstChild) {
        //     parent.removeChild(parent.firstChild);
        // }
        // parent.insertAdjacentElement("beforeend", element);
        var foo = element;
        var list = document.getElementById("list");
        list.className = "list paper paper-list "

        document.getElementById("alltext").value += " " + foo.innerText.replace(/[\n\r]+|[\s]{2,}/g, ' ') || " " + foo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')
    }

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

    function checkQuerySelectorAll(element) {
        if ('querySelectorAll' in document) {
            return document.querySelectorAll(element);
        } else {
            return document.getElementsByTagName(element);
        }
    }

    function toggleNodeBtn() {
        var btn = document.getElementById("node-btn");
        var btnJs = document.getElementById("js-btn");
        btnJs.className += " hidden"
        var classes = btn.className.split(" ");
        var i = classes.indexOf("hidden");
        if (i >= 0) {
            btn.className = "form-btn node-btn "
        } else {
            btn.classname = "form-btn node-btn hidden"
        }
    }

    function toggleJsBtn() {
        console.log('addEventlistener is supported')
        var btn = document.getElementById("node-btn");
        btn.className += " hidden"
        var btnJs = document.getElementById("js-btn");
        var classes = btnJs.className.split(" ");
        var i = classes.indexOf("hidden");
        if (i >= 0) {
            btnJs.className = "form-btn js-btn "
        } else {
            btnJs.classname = "form-btn js-btn hidden"
        }
    }

})();