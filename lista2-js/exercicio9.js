//trabalha 6 dias e folga 2 dias
//12 de outubro, trabalhando ou folga?
// 3 meses a apartir de agosto

let ultimaFolga = 11,
    dataFunction = new Date();

const DIASTRABALHO = 6,
      MESES = ['janeiro', 'fevereiro', 'março', 'abril', 'maio',
              'junho', 'julho', 'agosto', 'setembro', 'outubro', 
              'novembro', 'dezembro'];

//setando data com entrada:
dataFunction.setDate((ultimaFolga+DIASTRABALHO)+1)

//pegando dia, mes e ano da próxima folga:
let mesFolga = dataFunction.getMonth()
 
//loop:
while (mesFolga < 11 ){
    //obtendo valores novamente
    diaFolga = dataFunction.getDate()
    mesFolga = dataFunction.getMonth()
    anoFolga = dataFunction.getFullYear()
    //output
    console.log(`Dia ${diaFolga} de ${MESES[mesFolga]} de ${anoFolga} será folga.`)
    //settar outra folga
    newData = dataFunction.setDate((diaFolga)+7)
}