// var granimInstance = new Granim({
//     element: '#granim-canvas',
//     name: 'granim',
//     opacity: [1, 1],
//     states : {
//         "default-state": {
//             gradients: [
//                 ['#834D9B', '#D04ED6'],
//                 ['#1CD8D2', '#93EDC7']
//             ]
//         }
//     }
//  });

 interact('.tap-target')
  .on('tap', function (event) {
    event.currentTarget.classList.toggle('switch-bg')
    event.preventDefault()
  })
  .on('doubletap', function (event) {
    event.currentTarget.classList.toggle('large')
    event.currentTarget.classList.remove('rotate')
    event.preventDefault()
  })
  .on('hold', function (event) {
    event.currentTarget.classList.toggle('rotate')
    event.currentTarget.classList.remove('large')
  })