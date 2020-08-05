document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-items').cloneNode(true); //seleciona a classe "schedule-items" e copia toda a ramificação... copiará também todos os filhos inclusos nesta ramificação pois o valor booleano "true" foi passado.
    
    const fields = newFieldContainer.querySelectorAll('input'); //pega todos os campos "input" do "newFieldContainer" e joga na constante "field"
    
    fields.forEach(function(time) {time.value=""}); //passa por cada valor do vetor, retorna para a variável "time" e atribui o valor vazio para cada variável... resultado: limpa os campos

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
};