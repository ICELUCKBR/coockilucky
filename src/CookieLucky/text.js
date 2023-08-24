export function text(){

    let num = parseInt(Math.random() * 10);

    let luckStrings = [
      "Você pode naquilo que sonha.",
      "Olha você e siga seus sonhos.",
      "Já começe a pensar em um seguro de vida.",
      "A vida pode lhe trazer surpresas.",
      "O estudo leva a consistencia.",
      "O erro é mais uma chance de aprender.",
      "Não se esqueça do seu futuro, não importa o quão longe ele esteja.",
      "Não deixe que seus sonhos sejam apenas desejos, torne os real.",
      "O processo é constante.",
      "Você ganhou um novo biscoito"
    ];

    
    let convert = (luckStrings[num].toString())
    return convert
}

