import React from 'react'
import { Doughnut, Line } from 'react-chartjs-2'
import './perDayTransaction.css'

function PerDayTransaction() {
    return (
        <div className="perDayTransactionContainer">
              <Line
            data={{
                labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                datasets: [
                  {
                    label: "day",
                    data: [12, 19, 3, 5, 2, 3],
                    pointRadius: 3,
                    backgroundColor: [
                      '#ffffff'
                    ],
                    borderColor: [
                      '#ffffff'
                    ],
                    tension:0.3,
                    backgroundColor:'rgba(123, 15, 155, 0.2)',
                    fill:true,
                    borderWidth: 1,
                  },
                ],
              }}
    
              height={150}
              width={400}
              options={{
                plugins:{
                  legend:{
                    display:false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x :[
                      {
                          gridLines :{
                              display: false,
                              drawBorder: false
                          }, 
                          ticks: {
                            color: "white", 
                          },
                      },
                     
                  ],
                  y: [
                    {
                      ticks: {
                        color:"green",
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

export default PerDayTransaction
