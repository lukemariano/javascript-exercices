//trabalha 6 dias e folga 2 dias
//12 de outubro, trabalhando ou folga?
// 3 meses a apartir de agosto

let ultimaFolga = 11,
    dataFunction = new Date(),
    contador = 0

const DIASTRABALHO = 1,
      MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio',
              'junho', 'julho', 'agosto', 'setembro', 'outubro', 
              'novembro', 'dezembro'];

//setando data com entrada:
dataFunction.setDate((ultimaFolga+DIASTRABALHO)+1)

//pegando dia, mes e ano da próxima folga:
let diaFolga = dataFunction.getDate()
    mesFolga = dataFunction.getMonth()
    anoFolga = dataFunction.getFullYear();

//testando:
// console.log(`A próxima folga será dia ${diaFolga} de ${MESES[mesFolga]} de ${anoFolga}`)
 
//loop:
while (mesFolga < 11 ){
    diaFolga = dataFunction.getDate()
    mesFolga = dataFunction.getMonth()
    anoFolga = dataFunction.getFullYear()
    console.log(`A próxima folga será dia ${diaFolga} de ${MESES[mesFolga]} de ${anoFolga}`)
    // contador += 6 
    newData = dataFunction.setDate((diaFolga)+7)
}