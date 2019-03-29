(function() {
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
        var fieldinputs = fieldset[i].querySelectorAll("input[type='radio'] + label");
        for (var b = 0; b < fieldinputs.length; b++) {
            // console.log(fieldinputs[b]);
            fieldinputs[b].addEventListener("click", handleClick)
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

        listElements();
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

    function listElements() {
        var list = document.querySelector(".list");
        var clickedElement = document.querySelector(".clicked p");
        list.classList.remove("hidden");

        document.getElementById("alltext").value += clickedElement.textContent.replace(/[\n\r]+|[\s]{2,}/g, ' ')

        // var listItem = document.createElement('p');
        //     listItem.innerHTML = clickedElement.textContent || clickedElement.innerText;
        //     list.appendChild(listItem);
    }

    // function copy(){
    //     var copyText = document.getElementById("alltext");
    //     console.log(copyText)
    //     copyText.select();
    //     document.execCommand("copy");
    //  console.log("copy copy")
    // }
})();