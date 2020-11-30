



function calculo() {
    
    var nome = (document.getElementById("nome1").value)

    var alt = (document.getElementById("altura1").value)

    var pes = (document.getElementById("peso1").value)

    var imc =  ((parseFloat(pes))/((parseFloat(alt))*(parseFloat(alt))))
    
    var final = document.querySelector(".caixadetexto")

    var finalArr = Number((imc).toFixed(1))

    var texto = ""

    if (finalArr <= 18.5 ) {
        
            texto = "Está abaixo do peso."
    } else if (finalArr > 18.6 && finalArr <= 24.9) {
        texto = "Você tem o peso ideal."
    } else {

        texto = "Está acima do peso"
    }

    final.innerText = ` Olá ${nome}. O valor do seu IMC é: ${finalArr}. 
                        ${texto}`
        
        
}