import "./WithdrawPage.css"
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import ProcessingIcon from "../../assets/images/ProcessingIcon.png"
import WithdrawalCompleteIcon from "../../assets/images/WithdrawalCompleteIcon.png"
import OfflineIcon from  '../../assets/images/OfflineIcon.png' 

type WithdrawHistoryProps ={
    title: string,
    amount: string,
    date: string,
    type: string,
    message?: string
}

const WithdrawHistory = ({title, amount, date, message,type}:WithdrawHistoryProps)=>{

    let iconType = type === "complete" ? WithdrawalCompleteIcon : type === "failed" ? OfflineIcon: ProcessingIcon;

    return(
        <div className="withdrawHistoryItem">
            <div style={{marginTop: 12, marginLeft: 14,display: "flex", flexDirection: "row"}}>
            <span className="withdrawHisTitle">{title}</span>

            {
                message != null ?
                <Tippy content={message}>

                <img style={{
                    height: 15,
                    width: 15,
                    marginLeft: 20
                }} src={iconType} alt=""/>
                </Tippy>
                
                :
                <img style={{
                    height: 15,
                    width: 15,
                    marginLeft: 20
                }} src={iconType} alt=""/>
            }

   
            </div>
            <div style={{marginTop: 4, marginLeft: 14,display: "flex", flexDirection: "row"}}>
            <span style= {{
                width: 250,
                fontSize: 14

            }} className="withdrawHisTitle">{date}</span>
            <span  style= {{
                width: 100,
                fontSize: 14,
                color:"#4CC2FF",
                textAlign: "right",
                marginRight: 16
            }} className="withdrawHisTitle">{amount}</span>
            </div>
        </div>
    );
}

export default WithdrawHistory;