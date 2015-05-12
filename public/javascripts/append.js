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
        dataype: "json",
        url:'/assignments',
        success: function(response){
            console.log(response);
            data = response;
            console.log("hi ajax is running");
            for (var i = 1; i < data.length; i ++){
                $('.data').append("<div><p>"+data[i].name+"</p><p>"+data[i].score+"</p><p>"+data[i].rank+"</p><button class='remove' data-id="+data[i]._id+">Remove</button></div>");
            }
            $('.data').on("click", ".remove", function(){
                console.log($(this).data("id"))
                $.ajax({
                    type: "DELETE",
                    dataype: "json",
                    url:'/assignments/'+$(this).data("id"),
                    success: function(response){
                        console.log(response);
                    }
                });
                $(this).parent().empty();

            });
        }
    });
}


$(document).ready(function (){

    loadAssignment(event, data);

    $('.submit').on("click", function() {
        $('.data').empty();
        loadAssignment(event, data);
    });




});