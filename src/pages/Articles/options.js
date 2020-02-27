export default function(data, articles) {
  return {
    responsive: true,
    legend: { display: false },
    tooltips: {
      callbacks: {
        label(tooltipItem, _data) {
          const valor = data.datasets[0].data[tooltipItem.index];
          return `Difusividade ${
            articles[tooltipItem.index].diffusivityType
          }: ${valor} 10-10m²s-1`; // dataInicial[tooltipItem.index].Tipo
        },
      },
    },
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Difusividade (10-10m²s-1)',
          },
          ticks: { beginAtZero: true },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'Título',
          },
        },
      ],
    },
  };
}
