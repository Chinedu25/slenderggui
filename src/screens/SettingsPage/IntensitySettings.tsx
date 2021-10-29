import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import "./SettingsPage.css"
import IntensityIconMedium from "../../assets/images/IntensityIconMedium.png"
import IntensityIconLow from "../../assets/images/IntensityIconLow.png"
import IntensityIconHigh from "../../assets/images/IntensityIconHigh.png"
import IntensityIconUltra from "../../assets/images/IntensityIconUltra.png"

import {useState, useRef,useEffect} from "react"

   //@ts-ignore
   const ipc = window.api;


//let getSliderValuePref = 0;

const IntensitySettings = () => {

    const [sliderValue, setSliderValue] = useState(0)


    useEffect(()=>{
        
        
    ipc.invoke("getStoreValue", "IntensityPref").then((response:any)=>{
        // console.log(response)
         setSliderValue(response);
        
     });

    },[])
   

    

    

    let updatedIntensityImage = IntensityIconLow; 
    let titleText = "Intensity: Low"
    let description = "Less system resources are used"

     if (sliderValue <= 30){
         updatedIntensityImage = IntensityIconLow;
         titleText = "Intensity: Low"
         description = "Less system resources are used"
     }
     else if (sliderValue > 30 && sliderValue <= 60){
         updatedIntensityImage = IntensityIconMedium;
         titleText = "Intensity: Balanced"
         description = "Recommended settings"
     }
     else if (sliderValue > 60 && sliderValue <= 80){
         updatedIntensityImage = IntensityIconHigh;
         titleText = "Intensity: High"
         description = "Uses more system resources to earn more robux"
     }
     else if (sliderValue > 80){
         updatedIntensityImage = IntensityIconUltra;
         titleText = "Intensity: Extreme"
         description = "Not recommended unless experienced"
     }

    return (
        <div className="intensityContainer">

            <div style={{marginTop:12}}>
                <img style={{

                    marginLeft: 24.6,
                }} src={updatedIntensityImage} alt="" />

                <span className="defaultText">
                    {titleText}
                </span>

            </div>

            <div style={{flexDirection: "row", display: "flex"}}>
            <span style={{
                fontSize:14,
                marginTop: 4,
                fontWeight: 300,
                width: 310,
                textAlign: "left",
                marginLeft: 70
            }} className="defaultText">
            {description}
            </span>
            <img style={{
                width: 25,
                height: 15,
                marginTop: 8
            }} src={IntensityIconLow} alt=""/>
            <div style={{ marginLeft: 25 ,marginTop: 8,width: 275, justifyContent:"center", display: "flex" }}>
                <Slider
                value={sliderValue}
                handleStyle={{backgroundColor: '#4CC2FF', marginTop: -7.5, height: 20, width: 20,  border: "solid 6px #454545",
            }}
            railStyle={{ backgroundColor: '#9C9FA7' }}
                trackStyle={{ backgroundColor: '#4CC2FF'}}
                dotStyle={{backgroundColor: '#f04823', borderColor: '#f04823'}}
                onChange={(value)=>{
                    setSliderValue(value);
                    ipc.send("setIntensityPref", sliderValue); 
                }}
                onAfterChange={(value)=>{
                    setSliderValue(value);
                    ipc.send("setIntensityPref", sliderValue); 
                  
                }}
                />
            </div>
            <img  style={{
                width: 25,
                height: 15,
                marginTop: 8,
                marginLeft: 25
            }} src={IntensityIconUltra} alt=""/>
            </div>



        </div>
    )
}

export default IntensitySettings;