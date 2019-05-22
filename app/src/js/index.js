(function() {
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


    if (enableJavaScript()) {
        var fieldset = Array.from(document.querySelectorAll("fieldset"));
        var btn = document.querySelector(".node-btn").classList.toggle("hidden");
        var btnJs = document.querySelector(".js-btn");
        btnJs.classList.toggle("hidden");
        btnJs.addEventListener("click", copy);

        // var btnJs = document.getElementsByTagName("button")[1].classList.toggle("hidden");

        // fieldset.forEach(field => {
        //     field.querySelectorAll("input[type='radio'] + label").forEach(checkbox => {
        //         checkbox.addEventListener("click", handleClick)
        //     })
        // })

        for (var i = 0; i < fieldset.length; i++) {
            // console.log(fieldset[i]);
            var inputs = fieldset[i].querySelectorAll("input[type='radio']");

            console.log(inputs)

            for (var c = 0; c < inputs.length; c++) {
                // console.log(fieldinputs[b]);

                inputs[c].addEventListener("keydown", inputChecked)
            }


            // for (a = 0; a < inputs.length; a++) {
            //     if (inputs[i].type == 'radio') {
            //         for (var c = 0; c < inputs.length; c++) {
            //             // console.log(fieldinputs[b]);

            //             inputs[c].addEventListener("keydown", inputChecked)
            //         }
            //     }
            // }

            var fieldinputs = fieldset[i].querySelectorAll("input[type='radio'] + label");
            for (var b = 0; b < fieldinputs.length; b++) {
                // console.log(fieldinputs[b]);

                fieldinputs[b].addEventListener("click", handleClick)
            }
        }

        function inputChecked() {
            if (this.checked === true) {
                console.log("hij is goed")

                var element = this;
                element.parentElement.classList = ""
                element.parentElement.classList.add("clickedKey");

                var parent = element.parentElement.parentElement

                console.log(parent)
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
                parent.insertAdjacentElement("beforeend", element.parentElement);

                element.removeEventListener("keydown", inputChecked)

                var foo = element.parentElement.cloneNode(true);

                console.log(foo)

                var list = document.querySelector(".list");
                list.classList.remove("hidden");

                document.getElementById("alltext").value += foo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')

            } else {
                handleClick()
            }
        }

        function handleClick() {
            var element = this;

            element.removeEventListener("click", handleClick)
            element.classList.add("clicked");

            // console.log(element.removeEventListener("click", handleClick))
            var parent = element.parentElement.parentElement


            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            parent.insertAdjacentElement("beforeend", element);

            console.log(element)

            var foo = element.cloneNode(true);

            console.log(foo)

            var list = document.querySelector(".list");
            list.classList.remove("hidden");

            document.getElementById("alltext").value += foo.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')

            // while (parent.firstChild) {
            //     parent.removeChild(parent.firstChild);
            // }

            // listElements();
        }

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

        // function listElements() {
        //     var list = document.querySelector(".list");
        //     var clickedElement = document.querySelector(".clicked p");
        //     list.classList.remove("hidden");

        //     document.getElementById("alltext").value += clickedElement.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')

        //     // var listItem = document.createElement('p');
        //     //     listItem.innerHTML = clickedElement.textContent || clickedElement.innerText;
        //     //     list.appendChild(listItem);
        // }

        // function copy(){
        //     var copyText = document.getElementById("alltext");
        //     console.log(copyText)
        //     copyText.select();
        //     document.execCommand("copy");
        //  console.log("copy copy")
        // }
    }
})();