function getAssignments (){
    $.ajax({
        url:'/assignments',
        success: function(response){
            var data = "<p>response.name</br>response.score</br>response.rank</br>response.dateCompleted</p>"
            $('.data').append(data);
        }
    });
}

$(document).ready(function (){


    $('.submit').on("click", function() {
        getAssignments();

    });



});