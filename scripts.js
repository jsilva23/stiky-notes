function addNotas() {
    const bloco = document.createElement('div');
    bloco.classList.add('bloco-notas');

    bloco.innerHTML = `
        <div class="ferramentas">
            <div>
                <button class="opcoes"><i class="fas fa-ellipsis-h"></i></button>
                <button class="adicionar"><i class="fas fa-plus"></i></button>
                <button class="editar"><i class="fas fa-pen"></i></button>
            </div>

            <button class="apagar"><i class="fas fa-times"></i></button>
        </div>

        <div class="caixa-texto"></div>
        <textarea class="hidden"></textarea>    
    `;

    document.body.appendChild(bloco);

    // Adicionar papel de anotações
    const btnAdicionar = document.querySelectorAll('.adicionar');
    
    btnAdicionar[btnAdicionar.length - 1].addEventListener('click', () => {
        addNotas();
    });


    // Editar anotações
    const btnEditar = document.querySelectorAll('.editar');
    const textArea = document.querySelectorAll('textarea');
    const caixaTexto = document.querySelectorAll('.caixa-texto');

    btnEditar[btnEditar.length - 1].addEventListener('click', () => {
        caixaTexto[btnEditar.length - 1].classList.toggle('hidden');
        textArea[textArea.length - 1].classList.toggle('hidden');
    });

    textArea[textArea.length - 1].addEventListener('input', (event) => {
        const { value } = event.target;
        
        caixaTexto[btnEditar.length - 1].innerHTML = marked(value);
    });

    // Apagar uma anotação
    const btnApagar = document.querySelectorAll('.apagar');
    btnApagar[btnApagar.length - 1].addEventListener('click', () => {
        bloco.remove();

        if(document.body.children.length === 0) {
            addNotas();
        }
    });

}

addNotas();
