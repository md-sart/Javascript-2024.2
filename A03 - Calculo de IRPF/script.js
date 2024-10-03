//Funções
//1 -Função para cálculo do imposto devido, que recebe como entrada o salário e retorna o valor devido
//2 - Calcular porcentagem da aliquota efetiva (entradas: salário e IR) (saída:a porcentagem efetiva de alíquota)


// Função para calcular o imposto
function calcularImposto(salario) {

    function faixa1(salario){
        return 0;
    }
    
    function faixa2(salario){
        let aliquota = 0.075;
        let deducao = 169.44;
        return (salario * aliquota) - deducao;
    }

    function faixa3(salario){
        let aliquota = 0.15;
        let deducao = 381.44;
        return (salario * aliquota) - deducao;
    }

    function faixa4(salario){
        let aliquota = 0.225;
        let deducao = 662.77;
        return (salario * aliquota) - deducao;
    }

    function faixa5(salario){
        let aliquota = 0.275;
        let deducao = 896.00;
        return (salario * aliquota) - deducao;
    }

    if (salario <= 2259.20){
        return faixa1(salario);
    }
    else if (salario >= 2259.21 && salario <= 2826.65){
        return faixa2(salario);
    }
    else if (salario >= 2826.66 && salario <= 3751.05){
        return faixa3(salario);
    }
    else if (salario >= 3751.06 && salario <= 4664.68){
        return faixa4(salario);
    }
    else{
        return faixa5(salario);
    }
}

// Função para calcular a aliquota efetiva
function calcularAliquota(salario, impostoDevido) {
    let aliquotaEfetiva = ((impostoDevido/salario) * 100);
    return aliquotaEfetiva;
}

// Captura dos botões e input
const calcularBtn = document.getElementById('calcularBtn');
const textInput = document.getElementById('salarioInput');
const clearBtn = document.getElementById('clearBtn');
const sideMessage = document.getElementById('sideMessage');

// Adiciona eventos aos botões
calcularBtn.addEventListener('click', () => {
    const salario = parseFloat(textInput.value);
        if (!isNaN(salario) && salario > 0){
            const impostoDevido = calcularImposto(salario);
            const aliquotaEfetiva = calcularAliquota(salario, impostoDevido);
            sideMessage.textContent = `Imposto Devido: R$ ${impostoDevido.toFixed(2).replace('.', ',')} Alíquota Efetiva: ${aliquotaEfetiva.toFixed(2)}%`;
            clearBtn.disabled = false;
        } else {
            alert('Digite um salário válido');
    }
});


// Função para limpar texto
clearBtn.addEventListener('click', () => {
    textInput.value = '';
    sideMessage.textContent = 'Nenhum valor localizado, insira seu salário para iniciar';
    clearBtn.disabled = true;
});
