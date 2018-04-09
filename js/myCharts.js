//WEB DEV

var ctxB = document.getElementById("skillChart").getContext('2d');
var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Angular", "Vue.js", "Node.js", "Bootstrap", "JavaScript"],
        datasets: [{
            data: [8, 7, 7, 5, 10],
            backgroundColor: [
                'rgba(111, 139, 183, 0.35)',
                'rgba(158, 158, 158, 0.35)',
                'rgba(137, 178, 166, 0.35)',
                'rgba(145, 119, 168, 0.35)',
                'rgba(168, 154, 118, 0.35)'
            ],
            borderColor: [
                'rgba(111, 139, 183, 1)',
                'rgba(158, 158, 158, 1)',
                'rgba(137, 178, 166, 1)',
                'rgba(145, 119, 168, 1)',
                'rgba(168, 154, 118, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Web Development',
          fontSize: 16
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    display:false
                }
            }]
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
              }
          }
        }
    }
});



//Virtual Reality

var ctxB = document.getElementById("skillChart2").getContext('2d');
var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Oculus Rift", "HTC Vive", "Unity", "Unreal", "JS Frameworks"],
        datasets: [{
            data: [10, 7, 9, 6, 7],
            backgroundColor: [
                'rgba(111, 139, 183, 0.35)',
                'rgba(158, 158, 158, 0.35)',
                'rgba(137, 178, 166, 0.35)',
                'rgba(145, 119, 168, 0.35)',
                'rgba(168, 154, 118, 0.35)'
            ],
            borderColor: [
                'rgba(111, 139, 183, 1)',
                'rgba(158, 158, 158, 1)',
                'rgba(137, 178, 166, 1)',
                'rgba(145, 119, 168, 1)',
                'rgba(168, 154, 118, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Virtual Reality',
          fontSize: 16
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    display:false
                }
            }]
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
              }
          }
        }
    }
});



//Random

var ctxB = document.getElementById("skillChart3").getContext('2d');
var myBarChart = new Chart(ctxB, {
    type: 'bar',
    data: {
        labels: ["Python", "C/C++", "Java", "Docker", "Agile"],
        datasets: [{
            data: [10, 7, 6, 7, 8],
            backgroundColor: [
                'rgba(111, 139, 183, 0.35)',
                'rgba(158, 158, 158, 0.35)',
                'rgba(137, 178, 166, 0.35)',
                'rgba(145, 119, 168, 0.35)',
                'rgba(168, 154, 118, 0.35)'
            ],
            borderColor: [
                'rgba(111, 139, 183, 1)',
                'rgba(158, 158, 158, 1)',
                'rgba(137, 178, 166, 1)',
                'rgba(145, 119, 168, 1)',
                'rgba(168, 154, 118, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Miscellaneous',
          fontSize: 16
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true,
                    display:false
                }
            }]
        },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
              }
          }
        }
    }
});


//radar
var ctxR = document.getElementById("hobbyChart").getContext('2d');
var myRadarChart = new Chart(ctxR, {
    type: 'radar',
    data: {
        labels: ["Boxing", "Golf", "Movies", "Video Games", "Coding Games", "Reading"],
        datasets: [
            {
                label: "Hobby Data",
                fillColor: "rgba(137, 178, 166,0.2)",
                strokeColor: "rgba(137, 178, 166,1)",
                pointColor: "rgba(137, 178, 166,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(137, 178, 166,1)",
                data: [85, 65, 80, 95, 50, 75]
            }
        ]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        title: {
          display: true,
          text: 'Hobbies',
          fontSize: 16
        },
        scale: {
            ticks: {
               display: false,
               min: 0,
               max: 100
            }
         },
        tooltips: {
          callbacks: {
              label: function(tooltipItem, data) {
                  var label = data.datasets[tooltipItem.datasetIndex].label || '';
              }
          }
        }
    }    
});