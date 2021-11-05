import "./WithdrawPage.css";
import ExclamationIcon from "../../../assets/images/ExclamationIcon.png"
import ExclamationSuccessIcon from "../../../assets/images/ExclamationSuccessIcon.png"
import ExclamationFailedIcon from "../../../assets/images/ExclamationFailedIcon.png"


type StatusType = {
    type?: string
}

const WithdrawStatus = ({ type }: StatusType) => {

    let iconStatusType = type === "success" ? ExclamationSuccessIcon : type === "failure" ? ExclamationFailedIcon : ExclamationIcon;


    return (
        <div className="withdrawalStatus">
            <div style={{ marginTop: 12, display: "flex" }}>
                <img className="withdrawalStatusImg" src={iconStatusType} alt="" />
                <span style={{ alignSelf: "center" }} className="withdrawSubtitle">Withdrawal Status</span>
            </div>
            {
                type === "success" ?
                    <div> <span style={{ width: 286 }} className="withdrawMessage">Withdrawal Successful. See your robux at </span>
                        <span className="withdrawMessage" style={{marginTop:0 ,color: "#6ebff9" }}>roblox.com/transactions</span></div>
                    :

                    type === "failure" ?


                        <span style={{ width: 286 }} className="withdrawMessage">Withdrawal Failed. Please ensure that the Gamepass ID was entered correctly.</span>

                        :
                        <span style={{ width: 286 }} className="withdrawMessage">Please enter a valid Gamepass ID to withdraw your robux.</span>
            }

        </div>
    );
}

export default WithdrawStatus