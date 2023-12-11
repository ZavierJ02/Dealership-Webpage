var toolbar = document.getElementById("horizontal-menu");

var buttons = toolbar.getElementbyClassName("btn");
for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(){
        var current =
        document.getElementsByClassName("active");
        current[0].className = 
        current[0].className.replace("active", "");
        this.className += "active;"

    });
}
