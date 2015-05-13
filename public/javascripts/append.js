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
                $('.data').append("<div><p>"+data[i].name+"</p><p>"+data[i].score+"</p><p>"+data[i].rank+"</p><p>"+data[i].dateCompleted+"</p><button class='remove' data-id="+data[i]._id+">Remove</button></div>");
            }
        }
    });
}
//
function appAssignment(event) {
    event.preventDefault();
    $.ajax({
        type: "GET",
        datatype: "json",
        url:'/assignments',
        success: function(response) {
            console.log(response);
            data = response;
            $('.data').find().last().append("<div><p>"+data[data.length-1].name+"</p><p>"+data[data.length-1].score+"</p><p>"+data[data.length-1].rank+"</p><p>"+data[data.length-1].dateCompleted+"</p><button class='remove' data-id="+data[data.length-1]._id+">Remove</button></div>");
        }
    });

}

$(document).ready(function (){

    loadAssignment(event);

    $('.submit').on("click", function() {
        $('.data').empty();
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