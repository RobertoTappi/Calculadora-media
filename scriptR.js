function ValorMed(){
    const no1 = parseFloat(document.getElementById("no1").value)
    const no2 = parseFloat(document.getElementById("no2").value)
    const resultado = document.querySelector('#resultado')
    const media = ((no1 + no2)/2).toFixed(2)

   switch (true) {
        case (media < 6.0): classification = 'Insuficiente'; break;
        case (media >= 9.5): classification = 'Excelente';break;
        case (media >= 8.5): classification = 'Ótimo'; break;
        case (media > 7.5): classification = 'Bom'; break;
        case (media >= 6.0): classification = 'Regular'; break;
       
       
   } 

   resultado.innerHTML = ` Média: ${media}. <br>Então, sua nota será: ${classification} .`

}
