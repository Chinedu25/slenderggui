import {ReactComponent as UncheckedBox} from '../../assets/images/CheckBox.svg';
import {ReactComponent as MarkedCheckBox} from '../../assets/images/MarkedCheckBox.svg';
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
                <MarkedCheckBox/>
                :
            <UncheckedBox />
            }

        </div>
    )
}

export default CheckBox;