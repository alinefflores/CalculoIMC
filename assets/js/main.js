const form = document.querySelector('.form');

form.addEventListener('submit' , function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Inválido', false);
        return;
    }

    const imc = getImc (peso, altura);
    const calculoImc = getCalculoImc(imc);   

    const msg = `Seu IMC é ${imc} --- ${calculoImc}`;

    setResultado(msg, true);
  
});

function setResultado (msg, validacao){
    const resultado = document.querySelector ('.resultado');
    resultado.innerHTML = '';

    const p = document.createElement ('p');
    p.classList.add ('paragrafoResultado');
       
    if (validacao) {
        p.classList.add('paragrafoResultado');
    }else{
       p.classList.add ('bad'); 
    }

    p.innerHTML = msg;
    resultado.appendChild (p);
}


function getImc (peso, altura){
    const imc = peso / altura**2;
    return imc.toFixed(1);
}


function getCalculoImc (imc){
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5];    
    if (imc >= 34.9) return nivel[4];    
    if (imc >= 29.9) return nivel[3];
    if (imc >= 24.9) return nivel[2];        
    if (imc >= 18.5) return nivel[1];
    if (imc < 18.5) return nivel[0];    
}


function limpar (){
    const limparResultado = document.querySelector ('.resultado');
    limparResultado.innerHTML = 'Resultado';
    return limparResultado;
}