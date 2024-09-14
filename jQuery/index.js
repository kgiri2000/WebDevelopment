
$(document).ready(function(){
    $("h1").css("color", "red")
    $("h1").addClass("big-title");
    $("h1").text("Bye");
    $("a").attr("href", "https://www.yahoo.com")
    //event Listiner
    $("h1").click(function(){
        $("h1").css("color", "purple")
    })
    //For button
    $("button").click(function(){
        $("button").css("color", "purple")
    })

    //For input
    $("input").keypress(function(event){
        console.log(event.key)
        $("h1").text(event.key)

    });

});


