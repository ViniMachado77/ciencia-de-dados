const url = 'https://api.thedogapi.com/v1/breeds';

async function visualizarGraficos() {
    try {
        const res = await fetch(url);
        const dados = await res.json();

        console.log(dados); 
        
        const racas = dados.slice(0, 5).map(raca => raca.name);
        const popularidade = racas.map(() => Math.floor(Math.random() * 100) + 1);

        const data = [
            {
                x: racas,
                y: popularidade,
                type: 'bar',
                marker: {
                    color: 'rgba(122, 239, 122, 0.7)',
                }
            }
        ];

        const layout = {
            title: 'Popularidade de Adoção das Raças de Cães',
            xaxis: { title: 'Raças' },
            yaxis: { title: 'Índice de Adoção' }
        };

        Plotly.newPlot('grafico', data, layout);

    } catch (error) {
        console.error('Erro ao buscar ou processar dados da API:', error);
    }
}

visualizarGraficos();
