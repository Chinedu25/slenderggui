import DailyRobloxIcon from "../../../assets/images/DailyRobloxIcon.png"
import SystemRobloxIcon from "../../../assets/images/SystemRobloxIcon.png"
import BalanceIcon from "../../../assets/images/BalanceIcon.png"
import PendingIcon from "../../../assets/images/PendingIcon.png"

type StatusBarProp={
    marginTop: number
}



const StatusBar = ({marginTop}:StatusBarProp)=>{
    return (
        <div style={{ marginLeft: 0, marginTop: marginTop}}>
        <div className="statisticsBackground">
            <img style={{
                width: 22.44,
                height: 25,
                marginLeft: 14,
                marginRight: 23.56
            }} src={DailyRobloxIcon} alt="" />
            <span style={{ width: 600 }} className="statisticsText">Estimated Daily Robux from Current PC</span>
            <span style={{ width: 100, marginLeft: 40, fontWeight: 400, textAlign: "right", color: "#4CC2FF" }} className="statisticsText">1024.32 R$</span>
        </div>
        <div className="statisticsBackground">
            <img style={{
                width: 25,
                height: 22,
                marginLeft: 14,
                marginRight: 23.56
            }} src={SystemRobloxIcon} alt="" />
            <span style={{ width: 600 }} className="statisticsText">Estimated Daily Robux from All Connected PCs</span>
            <span style={{ width: 100, marginLeft: 40, fontWeight: 400, textAlign: "right", color: "#4CC2FF" }} className="statisticsText">1536.96 R$</span>
        </div>
        <div style={{ flexDirection: "row", display: "flex" }}>
            <div style={{ width: 406 }} className="statisticsBackground">
                <img style={{
                    width: 14,
                    height: 25,
                    marginLeft: 14,
                    marginRight: 23.56
                }} src={PendingIcon} alt="" />
                <span style={{ width: 220 }} className="statisticsText">Pending Amount</span>
                <span style={{ width: 100, marginLeft: 10, fontWeight: 400, textAlign: "right", color: "#4CC2FF" }} className="statisticsText">128.14 R$</span>
            </div>
            <div style={{ marginLeft: 8, width: 406 }} className="statisticsBackground">
                <img style={{
                    width: 25,
                    height: 20,
                    marginLeft: 14,
                    marginRight: 23.56
                }} src={BalanceIcon} alt="" />
                <span style={{ width: 220 }} className="statisticsText">Balance</span>
                <span style={{ width: 100, marginLeft: 10, fontWeight: 400, textAlign: "right", color: "#4CC2FF" }} className="statisticsText">64.28 R$</span>
            </div>

        </div>


    </div>
    )
}

export default StatusBar;