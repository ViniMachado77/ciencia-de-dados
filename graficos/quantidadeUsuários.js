const url = 'https://api.thedogapi.com/v1/breeds';

async function visualizarGraficos() {
    try {
        const res = await fetch(url);
        const dados = await res.json();

        console.log(dados); 

        const racas = dados.slice(0, 5).map(raca => raca.name);
       
        const anosDeVida = dados.slice(0, 5).map(raca => {
            const lifeSpan = raca.life_span;
            const anos = lifeSpan.split(' ')[0];
            return parseInt(anos);
        });

        const data = [
            {
                x: racas,
                y: anosDeVida,
                type: 'bar',
                marker: {
                    color: 'rgba(122, 239, 122, 0.7)',
                }
            }
        ];

        const layout = {
            title: 'Expectativa de Vida das Raças de Cães',
            xaxis: { title: 'Raças' },
            yaxis: { title: 'Anos de Vida' }
        };

        Plotly.newPlot('grafico', data, layout);

    } catch (error) {
        console.error('Erro ao buscar ou processar dados da API:', error);
    }
}

visualizarGraficos();

