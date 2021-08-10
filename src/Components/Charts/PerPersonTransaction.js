import React from 'react'
import { Doughnut, Line, Pie } from 'react-chartjs-2'
import './perDayTransaction.css'

function PerPersonTransaction() {
    return (
        <div className="perPersonTransactionContainer">
              <Pie
            data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "day",
                    data: [12, 19, 3, 5, 2, 3],
                    pointRadius: 3,
                    backgroundColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    borderColor: [
                      "rgba(255, 99, 132, 1)",
                      "rgba(54, 162, 235, 1)",
                      "rgba(255, 206, 86, 1)",
                      "rgba(75, 192, 192, 1)",
                      "rgba(153, 102, 255, 1)",
                      "rgba(255, 159, 64, 1)",
                    ],
                    tension:0.3,
                    backgroundColor:'rgb(255,0,87,0.3)',
                    fill:true,
                    borderWidth: 1,
                  },
                ],
              }}
    
              height={150}
              width={300}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  },
                  
                },
                maintainAspectRatio: false,
                scales: {
                  xAxes :[
                      {
                          gridLines :{
                              display: false,
                              drawBorder: false
                          }
                      }
                  ],
                  yAxes: [
                    {
                      ticks: {
                        beginAtZero: true,
                      },
                      gridLines :{
                          display: false,
                          drawBorder: false
                      }
                    },
                  ],
                },
               
              }}
           />
        </div>
    )
}

export default PerPersonTransaction
