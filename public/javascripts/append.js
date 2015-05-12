var data = [];
//function display(data) {
//    for(var i=0; i< data.length; i++){
//        $('.data').append("<p>"+data[i].name+"</p>");
//    }
//}


function loadAssignment(event){
    event.preventDefault();
    $.ajax({
        type: "GET",
        datatype: "json",
        url:'/assignments',
        success: function(response){
            console.log(response);
            data = response;
            console.log("hi ajax is running");
            for (var i = 0; i < data.length; i ++){
                $('.data').append("<div><p>"+data[i].name+"</p><p>"+data[i].score+"</p><p>"+data[i].rank+"</p><button class='remove' data-id="+data[i]._id+">Remove</button></div>");
            }
        }
    });
}


$(document).ready(function (){

    loadAssignment(event);

    $('.submit').on("click", function() {
        //$('.data').empty();
        loadAssignment(event);
    });

    $('.data').on("click", ".remove", function(){
        $.ajax({
            type: "DELETE",
            dataype: "json",
            url:'/assignments/'+$(this).data("id"),
            success: function(response){
                console.log(response);
            },
            error: function(err){
                console.log("error"+err);
            }
        });
        $(this).parent().empty();
    });



});