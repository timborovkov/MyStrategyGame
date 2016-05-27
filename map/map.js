$(document).ready(function () {
    var tiles = JSON.parse(fs.readFileSync('map/tiles.json', 'utf8'));
    var countries = JSON.parse(fs.readFileSync('map/countries.json', 'utf8'));
    var cities = JSON.parse(fs.readFileSync('map/cities.json', 'utf8'));

    var row_count = 100;
    var col_count = 200;

    initTiles();

    
    $('.zoomOut').click(function(){
        console.log('zoom out');
        $('.map').width(
            $('.map').width() * 0.7
        );
        $('.map').height(
            $('.map').height() * 0.7
        );

        $('.gridTable').width(
            $('.gridTable').width() * 0.7
        );
        $('.gridTable').height(

            $('.gridTable').height() * 0.7
        );
    });
    $('.zoomIn').click(function(){
        console.log('zoom in');
        $('.map').width(
            $('.map').width() * 1.3
        );
        $('.map').height(
            $('.map').height() * 1.3
        );

       $('.gridTable').width(
            $('.gridTable').width() * 1.3
        );
        $('.gridTable').height(
            $('.gridTable').height() * 1.3
        );
    });

    //Show details on hover
    $(".col").hover(function(){
        //Mouse in
        //Get col/x
        var x = $(this).attr('col');
        //Get row/y
        var y = $(this).attr('row');
        //Show details
        $('.details').html("X: " + x + " Y: " + y);
    }, function(){
        //Mouse out
    });

    //Open tile window on click
    $(".tile").click(function(){
       //Click
       var x = $(this).attr('col');
       var y = $(this).attr('row');

    });

    function initTiles(){
        for (var i = 1; i <= row_count; i++) {
            $('.gridTable > tbody:last-child').append('<tr class="' + i + ' row"></tr>');
            var thisRow = $('tr.row.' + i);
            for (var a = 1; a <= col_count; a++) {
                thisRow.append('<td row="'+i+'" col="'+a+'" class="col tile"></td>');
            }
        }
    }

    function updateTile(x, y, tile){
        //tile is {type, resource, owner}
    }
});
