import  UncheckedBox from '../../../assets/images/CheckBox.svg';
import MarkedCheckBox from '../../../assets/images/MarkedCheckBox.svg';
type CheckBoxProps ={
    value : Boolean,
    onClick: any,
    style?: React.CSSProperties
}

const CheckBox = ({value, style ,onClick}:CheckBoxProps)=>{
    
    
    return(
        <div style={style}
        
        onClick={onClick}>
            {
                value === true ?
                <img src={MarkedCheckBox} alt=""/>
                :
            <img src={UncheckedBox} alt=""/>
            }

        </div>
    )
}

export default CheckBox;