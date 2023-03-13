window.addEventListener('DOMContentLoaded', () => {
  /* initiate chart.js */
  Chart.register(ChartDataLabels);


  /* retract menu logic */
  const retractMenuIcon = document.querySelector('#retractMenuIcon');
  const retractMenu = document.querySelector('#sideNav');

  if (retractMenuIcon && retractMenu) {
    retractMenuIcon.addEventListener('click', () => {
      if (retractMenu.classList.contains('active')) {
        retractMenu.classList.remove('active');
      } else {
        retractMenu.classList.add('active');
      }
    });
  }

  /* charts */
  /* chart 1 */
  const chart1 = document.querySelector('#chart1'); // weekly report from geral

  let chart1DataSet1 = {"Dom": 90, "Seg": 70, "Ter": 0, "Qua": 170, "Qui": 0, "Sex": 90, "Sab": 0};
  let chart1DataSet2 = {"Dom": 0, "Seg": 0, "Ter": 10, "Qua": 0, "Qui": 0, "Sex": 0, "Sab": 0};

  new Chart(chart1, {
     type: 'bar',
     data: {
        labels: Object.keys(chart1DataSet1),
        datasets: [{
           label: 'recebido',
           data: Object.values(chart1DataSet1),
           backgroundColor: '#FF3E3E'
        }, {
           label: 'enviado',
           data: Object.values(chart1DataSet2),
           backgroundColor: '#0F85EC'
        }]
     },
      options: {
           maintainAspectRatio: false,
           responsive: true,
           plugins: {
              legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                       usePointStyle: true,
                       pointStyle: 'circle'
                  }
              },
              datalabels: {
                 display: false
              }
           },
           scales: {
              y: {
                 min: 0,
                 max: 180,
                 ticks: {
                    stepSize: 20
                 }
              }
           }
      }
  });


  /* chart2 */
  const chart2 = document.querySelector('#chart2');

  chart2DataSet1 = {Livre: 9.45, Ipsum: 1};

  new Chart(chart2, {
     type: 'doughnut',
     data: {
        labels: Object.keys(chart2DataSet1),
        datasets: [{
           label: 'empresas',
           data: Object.values(chart2DataSet1),
           backgroundColor: [
              '#0F85EC',
              '#FF3E3E'
           ],
           cutout: '80%'
        }]
     },
      options: {
          responsive: true,
           maintainAspectRatio: false,
           plugins: {
              legend: {
                  display: true,
                  position: 'bottom',
                  labels: {
                       usePointStyle: true,
                       pointStyle: 'circle'
                  }
              },
              datalabels: {
                 color: '#323232',
                 font: {
                    size: 10,
                    weight: 'bold'
                 }
              },
              tooltip: {
                 enabled: true
              }
           }
      }
  });
});
