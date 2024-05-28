(function() {
    'use strict';
    
    const popupOverlay = document.getElementById('popupOverlay');
    const popup = document.getElementById('info');
    const closePopup = document.getElementById('closePopup');
    
    // Function to open the popup
    function openPopup() {
        popupOverlay.style.display = 'block';
    }
    
    // Function to close the popup
    function closePopupFunc() {
        popupOverlay.style.display = 'none';
    }

    popup.addEventListener("click", openPopup);
    openPopup();
    closePopup.addEventListener('click', closePopupFunc);


    // enable draggables to be dropped into this
    interact('.dropzone').dropzone({
        // only accept elements matching this CSS selector
        accept: '#yes-drop',
        // Require a 75% element overlap for a drop to be possible
        overlap: 0.75,

        ondropactivate: function (event) {
            // add active dropzone feedback
            event.target.classList.add('drop-active')
        },
        
        ondragenter: function (event) {
            var draggableElement = event.relatedTarget
            var dropzoneElement = event.target
        
            // feedback the possibility of a drop
            dropzoneElement.classList.add('drop-target')
            draggableElement.classList.add('can-drop')
            draggableElement.textContent = 'Dragged in'
        },
    
        ondragleave: function (event) {
            // remove the drop feedback style
            event.target.classList.remove('drop-target')
            event.relatedTarget.classList.remove('can-drop')
            event.relatedTarget.textContent = 'Dragged out'
        },
        
        ondrop: function (event) {
            event.relatedTarget.textContent = 'Dropped'
        },
        
        ondropdeactivate: function (event) {
            // remove active dropzone feedback
            event.target.classList.remove('drop-active')
            event.target.classList.remove('drop-target')
        }

    })

    // target elements with the "draggable" class
    interact('.draggable')
        .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
            interact.modifiers.restrictRect({
            restriction: 'parent',
            endOnly: true
            })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
            // call this function on every dragmove event
            move: dragMoveListener
        }
    })

    function dragMoveListener (event) {
        var target = event.target
        // keep the dragged position in the data-x/data-y attributes
        var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
        var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

        // translate the element
        target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

        // update the posiion attributes
        target.setAttribute('data-x', x)
        target.setAttribute('data-y', y)
    }
  
})()