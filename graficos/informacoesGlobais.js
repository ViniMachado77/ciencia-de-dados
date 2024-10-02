const url = 'https://api.thedogapi.com/v1/breeds';

async function visualizarInformacoesGlobais() {
    const res = await fetch(url);
    const dados = await res.json();

    const totalRacas = dados.length;
    const paragrafo = document.createElement('p');
    paragrafo.classList.add('graficos-container__texto');
    paragrafo.innerHTML = `No mundo há <span>${totalRacas} raças de cães</span> disponíveis para adoção. Abaixo estão algumas das raças mais adotadas!`;

    const container = document.getElementById('graficos-container');
    container.appendChild(paragrafo);
}

visualizarInformacoesGlobais();
