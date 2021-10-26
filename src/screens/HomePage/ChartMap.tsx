import { Line, defaults  } from "react-chartjs-2";
import "./HomePage.css"

const ChartMap = ()=>{

    defaults.color ="#fff";
    
   

    const options = {
        showLines: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
              display: false,
              labels: {
                color: "rgb(255, 99, 132)",
                font: {
                  family: "Exo2Medium" // Add your font here to change the font of your legend label
                },
              },
              tooltip: {
                
                bodyFont: {
                  family: "Exo2Medium" // Add your font here to change the font of your tooltip body
                },
                titleFont: {
                  family: "Exo2Medium" // Add your font here to change the font of your tooltip title
                }
              }
            }
          },
        legend: {
          display: false
        },
        title: {
            display: false
        },
        tooltips: {
            enabled: false
         },
        scales: {
          y: {
            beginAtZero: true,
            display: false,
            
          }
        }
      };
   const data = {
       labels: [0, 0, 0, 0, 0, 0 ,0 ,0 ,0],
       legend:
{
    display: false
},
       datasets: [
           {
                label:'',
               data: [0,0,0,0,0,0,0,0,0],
               borderColor: "#4CC2FF",
    
           }
       ]

   }

    return(
        <div>
            <Line className="lineChart" data={data} options={options} height={130} width={150}/>
        </div>
    )
}

export default ChartMap;