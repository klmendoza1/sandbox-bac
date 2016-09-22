// needs jQuery to work

var block = '<div class="row row-film"><div class="form-horizontal col-lg-6 col-md-6 col-sm-6 col-xs-12"><div class="form-group"><label class="control-label col-lg-3 col-md-4 col-sm-4 col-xs-12" for="formFilmy">Film:</label><div class="col-lg-9 col-md-8 col-sm-8 col-xs-12"><input class="form-control" id="formFilmy"></div></div></div><div class="form-horizontal col-lg-6 col-md-6 col-sm-6 col-xs-12"><div class="form-group"><label class="control-label col-lg-3 col-md-4 col-sm-4 col-xs-12" for="formTicketsy"># of Tickets:</label><div class="col-lg-4 col-md-4 col-sm-4 col-xs-6"><input class="form-control" id="formTicketsy"></div></div></div></div>'
var countFilm = 1;
$( "#btn-addfilm" ).click(function(event) {
  //alert( "Handler for .click() called." );
  countFilm = countFilm + 1;
  event.preventDefault();
  $( "#div-films" ).append(block.replace(/y/g, countFilm.toString()));
});
