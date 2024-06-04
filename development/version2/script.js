$(document).ready(function(){
	$('#reset').on('click', function(){
		$('ul').attr('id', 'draggable');
		$('.p_lang').removeAttr('disabled', 'disabled');
		$('.p_lang').val('');
		$('#result_text').text('');
	});
	  
		$('#submit').on('click', function(){
			var text = $('#word').val();
		if(text != ""){
			$('#result_text').text(text);
		}
		else{
			alert("Please select your choice first");
		}
	});
	  
		$('li').mouseover(function(){
			$(this).css('cursor', 'pointer');
		});
		$( "#draggable li" ).draggable({helper: 'clone'});
		$(".p_lang").droppable({
			accept: "#draggable li",
			drop: function(ev, ui) {
			$(this).insertAtCaret(ui.draggable.text());
			$(this).attr('disabled', 'disabled');
			$("#draggable").removeAttr('id');
			}
		});
});
  
	$.fn.insertAtCaret = function (myValue) {
	return this.each(function(){
	if (document.selection) {
		this.focus();
		sel = document.selection.createRange();
		sel.text = myValue;
		this.focus();
	}
  
	else if (this.selectionStart || this.selectionStart == '0') {
		var startPos = this.selectionStart;
		var endPos = this.selectionEnd;
		var scrollTop = this.scrollTop;
		this.value = this.value.substring(0, startPos)+ myValue+ this.value.substring(endPos,this.value.length);
		this.focus();
		this.selectionStart = startPos + myValue.length;
		this.selectionEnd = startPos + myValue.length;
		this.scrollTop = scrollTop;
	} else {
		this.value += myValue;
		this.focus();
	}
	});
	};