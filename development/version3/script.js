window.document.onkeydown = function (e) {
  if (!e) {
      e = event;
  }
  if (e.keyCode == 27) {
      lightbox_close();
  }
}

function lightbox_open(el) {        
  window.scrollTo(0,0);

  var anchors = document.querySelectorAll('a.lightbox');
  var lights = document.querySelectorAll('.light');
  var fades = document.querySelectorAll('.fade');

  for (var i = 0; i < anchors.length; i++) {
      if (anchors[i] == el) {
          lights[i].style.display = 'block';
          fades[i].style.display = 'block';
      }
  }
}

function lightbox_close() {
  var els = document.querySelectorAll('.light,.fade');
  for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
  }
}



$( function() {
	$( ".draggable" ).draggable();
	$( "#droppable" ).droppable({
	  drop: function( event, ui ) {
		$( this )
		  .addClass( "ui-state-highlight" )
		  .find( "p" )
			.html( "Dropped!" );
	  }
	});
  } );