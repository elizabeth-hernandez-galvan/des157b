let globalData;
async function getData(){
    const myData = await fetch ('data.json');
    const data = await myData.json();
    globalData = data;
    // console.log(data);
    document.querySelector('nav ul').innerHTML = createButtons(data);

    createEvents();
}

function outputHTML(data){
    let html = '<p>';
    html += `At ${data.point2.date} I walkedg ${[data.point2.miles]}`;
    html += '<p>';
    return html;
}

function createButtons(data){
    let html = ''
    const dataPts = Object.keys(data);
    console.log(dataPts);
    dataPts.forEach(function(eachPoint){
        html +=  `<li><button class="fa-solid fa-shoe-prints fa-8x" id="${eachPoint}"></button></li>`;    
    })
    return html;
}

function createEvents(){
    const btns = document.querySelectorAll('button');
    //console.log(buttons) 

    for (const btn of btns){
        btn.addEventListener('click', function(event){
            const id = event.target.id; 
            // console.log(id)
            updateInterface(id, globalData);
        })
    }
}

function updateInterface(value, jsonData){
    console.log(value);
    let text = '<p>';
    text += `At ${jsonData[value].date} I walked ${jsonData[value].miles} miles`; 
    text += '</p>';
    document.querySelector('#result').innerHTML = text;
}

getData();