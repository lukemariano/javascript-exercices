document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
    });
    calendar.render();
  });

  const getData = () => {
    data = (document.getElementById("input-data").value).replaceAll("-",",")
    // saida = document.querySelector('input[id="output"]').value = data
    var datasFolgas = getFolga(data)
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
      events: datasFolgas
    });
    calendar.render()
    return datasFolgas
}


const getFolga = (ultimaFolga) => {

// var ultimaFolga = getData()
dataFunction = new Date(ultimaFolga);
ultimaFolga = 3

const DIASTRABALHO = 6

//setando data com entrada:
dataFunction.setDate((dataFunction.getDate()+DIASTRABALHO)+1)

//pegando dia, mes e ano da próxima folga:
let mesFolga = dataFunction.getMonth()
var events = []
var cont = 1
//loop:
while (mesFolga < 11 ){
    //obtendo valores novamente
    
    // diaFolga = dataFunction.getDate()
    mesFolga = dataFunction.getMonth()
    anoFolga = dataFunction.getFullYear()
    
    //settar folga
    events.push({title: 'Folga '+cont ,start: `${dataFunction.toJSON().slice(0,10)}`})
    newData = dataFunction.setDate((dataFunction.getDate())+1)
    cont++
    //setta segunda folga
    events.push({title:'Folga '+cont ,start: `${dataFunction.toJSON().slice(0,10)}`})
    
    //atualiza folgas
    newData = dataFunction.setDate(dataFunction.getDate()+7)

}

return events

}






  









