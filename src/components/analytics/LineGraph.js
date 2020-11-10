


export const LineGraph = (happinessArray, happinessDateArray) => {

    return ({
    type: 'line',
     data: {
         labels: happinessDateArray,
         datasets: [{
             data: happinessArray,
             label: "Happiness Scale",
             borderColor: "#76cdc7ff",
             fill: true,
             backgroundColor: "rgba(195, 232, 229, 0.5)",
         }
         ]
     },
     scales: {
         xAxes: [{
             display: true,
         }],
         yAxes: [{
             display: true,
             min: 0,
             max: 30
         }]
     },
     options: {
         scales: {
             xAxes: [{
                 scaleLabel: {
                     display: true,
                     labelString: 'Date Test was Taken'
                 },
                 display: true,
                 gridLines: {
                     display: true,
                 }
             }],
             yAxes: [{
                 scaleLabel: {
                     display: true,
                     labelString: 'Happiness Scale'
                 },
                 gridLines: {
                     display: true,
                     color: "#ACACAC"
                 },
                 ticks: {
                     beginAtZero: true,
                     stepSize: 1
                 }
             }]
         },        
         legend: {
             display: true
         },
         tooltip: {
             position: "nearest"
         },
         title: {
         display: true
         },
         responsive: false,
         maintainAspectRatio: false,
     }
    })
}