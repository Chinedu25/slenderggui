import "./WithdrawPage.css"
import ProcessingIcon from "../../assets/images/ProcessingIcon.png"
import WithdrawalCompleteIcon from "../../assets/images/WithdrawalCompleteIcon.png"

type WithdrawHistoryProps ={
    title: string,
    amount: string,
    date: string,
    type: string,
}

const WithdrawHistory = ({title, amount, date, type}:WithdrawHistoryProps)=>{

    let iconType = type === "complete" ? WithdrawalCompleteIcon : ProcessingIcon;

    return(
        <div className="withdrawHistoryItem">
            <div style={{marginTop: 12, marginLeft: 14,display: "flex", flexDirection: "row"}}>
            <span className="withdrawHisTitle">{title}</span>
            <img style={{
                height: 15,
                width: 15,
                marginLeft: 20
            }} src={iconType} alt=""/>
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