import AmdCPUIcon from '../../assets/images/amdCpu.png'
import GPUIcon from '../../assets/images/GPUIcon.png'
import PCIcon from '../../assets/images/PCIcon.png'
import CheckedBox from '../../assets/images/CheckedBox.png' 
import UncheckedBox from '../../assets/images/UncheckedBox.png' 
import OnlineIcon from  '../../assets/images/OnlineIcon.png' 
import OfflineIcon from  '../../assets/images/OfflineIcon.png' 


type PCInfoProps = {
    text: string,
    isCheckBox: Boolean,
    isActive: Boolean,
    type: string
}

const PCInfoListBar = ({text, type, isCheckBox, isActive}:PCInfoProps)=>{

    let iconType = type === "cpu" ? AmdCPUIcon: type === "gpu" ? GPUIcon : PCIcon

    let statusType = isCheckBox === true ? isActive === true ? CheckedBox : UncheckedBox :
                    isActive === true ? OnlineIcon : OfflineIcon


    return(
        <div style={{
            background: "rgba(26, 33, 46, 0.7)",
            boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)",
            borderRadius: "4px",
            fontWeight: 300,
            fontSize: 17,
            fontFamily: 'Exo2Medium',
            color: "#fff",
            height: 45,
            width: 366,
           textAlign: "left",
           marginLeft: 20,
           marginBottom: 8,
            display: "flex",
            alignItems: "center"
        }}>
            <img style={{
                width:25,
                height:25,
                marginLeft:23.61,
                marginRight:28,
            }} src={iconType} alt=""/>
            
            <div style={{width: 202, }}>{text}</div>
            
            
            <img style={{
                width:15,
                height:15,
                marginLeft:60,
                justifySelf:"flex-end"
            }} src={statusType} alt=""/>
            
            </div>
    );
}

export default PCInfoListBar;