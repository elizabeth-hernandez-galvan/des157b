document.addEventListener('DOMContentLoaded', function () {
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('popup');
    const closePopup = document.getElementById('closePopup');

    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block';
    }

    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

	// Event listeners
    openPopup();

    // Close the popup when the close button is clicked
    closePopup.addEventListener('click', closePopupFunc);

    // Close the popup when clicking outside the popup content
    popupOverlay.addEventListener('click', function (event) {
        if (event.target === popupOverlay) {
            closePopupFunc();
        }
    });
});


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