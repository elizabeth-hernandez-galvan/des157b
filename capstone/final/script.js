Parse.initialize("WzL6UT8DVihwgdRaOL0LKYiJwEtbEUd56QBadkWz", "nBpPaH0H0G6hz40SjVuKLP3vzsXaPmUNqSIMZ0TQ");
Parse.serverURL = 'https://parseapi.back4app.com/';

async function saveData(category, buttonClicked) {
  const DataClass = Parse.Object.extend("DataClass");
  const dataObject = new DataClass();

  dataObject.set("category", category);
  dataObject.set("buttonClicked", buttonClicked);

  try {
      await dataObject.save();
      console.log('Data saved successfully');
      await getCount(category, buttonClicked);
  } catch (error) {
      console.error('Error while saving data: ', error);
  }
}

async function getCount(category, buttonClicked) {
  const DataClass = Parse.Object.extend("DataClass");
  const query = new Parse.Query(DataClass);

  query.equalTo("category", category);
  query.equalTo("buttonClicked", buttonClicked);

  try {
      const count = await query.count();
      console.log(`Count for ${category} - ${buttonClicked}: ${count -1}`);
      document.getElementById(`countDisplay${buttonClicked.charAt(buttonClicked.length - 1)}`).innerHTML = `${count-1} people agree with you <span class="closeDisplay" onClick="lightbox_closeDisplay()">&times;</span>`;
  } catch (error) {
      console.error('Error while retrieving count: ', error);
  }
}

function handleButtonClick(category, buttonClicked) {
  saveData(category, buttonClicked);
  
  for (let i = 1; i <= 12; i++) {
    const countDisplay = document.getElementById(`countDisplay${i}`);
    if (buttonClicked === `Button${i}`) {
      const computedStyle = window.getComputedStyle(countDisplay);
      countDisplay.style.display = computedStyle.display === "none" ? "block" : "none";
    }
  }
}

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

function lightbox_closeDisplay() {
  var els = document.querySelectorAll('.light,.fade');
  for (var i = 0; i < els.length; i++) {
      els[i].style.display = 'none';
  }
}



$( function() {
	$( ".draggable" ).draggable();
	$( ".droppable" ).droppable({
	  drop: function( event, ui ) {
		$( this )
		  .addClass( "ui-state-highlight" )
		  .find( "p" )
			.html( "Dropped!" );
	  }
	});
  } );