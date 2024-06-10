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
      getCount(category, buttonClicked);
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
      console.log(`Count for ${category} - ${buttonClicked}: ${count}`);
      document.getElementById('countDisplay').innerText = `Count for ${category} - ${buttonClicked}: ${count}`;
  } catch (error) {
      console.error('Error while retrieving count: ', error);
  }
}

function handleButtonClick(category, buttonClicked) {
  saveData(category, buttonClicked);
  document.getElementById('countDisplay').classList.remove('hidden');
  
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