document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os botões com a classe 'btn-proximo'
    const botoesProximo = document.querySelectorAll('.btn-proximo');

    // Adiciona um "ouvinte de evento" de clique para cada botão
    botoesProximo.forEach(botao => {
        botao.addEventListener('click', (evento) => {
            // Pega o valor do atributo 'data-proximo' para saber qual passo mostrar
            const proximoPassoId = evento.target.dataset.proximo;

            // Esconde o passo atual
            const passoAtual = document.querySelector('.passo.ativo');
            if (passoAtual) {
                passoAtual.classList.remove('ativo');
            }

            // Mostra o próximo passo, se existir
            const proximoPasso = document.getElementById(`passo-${proximoPassoId}`);
            if (proximoPasso) {
                proximoPasso.classList.add('ativo');
            }
        });
    });
});
