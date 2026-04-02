let nomeDoJogo = ('Adivinhe o número'); //Variável para armazenar o nome do jogo

alert(`Bem vindo ao ${nomeDoJogo}`); //Alert para dar as boas vindas ao jogador

let numeroMaximo = 100;

let numeroSecreto = parseInt(Math.random() *  numeroMinimo + 1); //Variável para gerar um número secreto aleatório entre 1 e 1000 usando Math.random() e parseInt() para converter o resultado em um número inteiro

let chute //Variável para armazenar o chute do jogador, que será atualizado a cada tentativa
let tentativas = 1; //Variável para contar o número de tentativas do jogador, iniciada em 1

while (chute != numeroSecreto){ //Loop para continuar pedindo o chute do jogador enquanto ele não acertar o número secreto. 

    chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`); //Prompt para solicitar ao jogador que digite um número entre 1 e o numero máximom que for digitado, o valor digitado será armazenado na variável chute
    if (chute == numeroSecreto){
        break; //Se o chute for igual ao número secreto, o loop é interrompido e o jogador venceu.
    } else{
        if (chute > numeroSecreto){
            alert(`O numero secreto é menor que ${chute}`);
        }else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++; 
    }
}

let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentaivas'; //Variável para escolher a palavra correta (singular ou plural) com base no número de tentativas

alert(`Você acertou o número secreto ${numeroSecreto}, com ${tentativas} ${palavraTentativas}!`); //Alert para informar ao jogador que ele acertou o número secreto e quantas tentativas foram necessárias

// if (tentativas > 1){
//     alert(`Você acertou o numero secreto com ${tentativas} tentativas!`);
// } else {
//     alert(`Você acertou o número secreto com ${tentativas} tentativa!`);
// }

console.log(numeroSecreto); //Console log para exibir o número secreto no console, útil para testes e depuração do código
