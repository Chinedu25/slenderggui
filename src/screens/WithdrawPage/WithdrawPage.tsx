import "./WithdrawPage.css"
import "../HomePage/HomePage.css"

import HelpIcon from "../../../assets/images/HelpIcon.png"
import TextInput from "../../components/TextInput/TextInput"
import ProcessingIcon from "../../../assets/images/ProcessingIcon.png"
import WithdrawalCompleteIcon from "../../../assets/images/WithdrawalCompleteIcon.png"
import HomeActionBar from "../../components/Header/HomeActionBar"

import { useState } from "react"
import Button from "../../components/Button/Button"
import WithdrawStatus from "./WithdrawStatus"

//this is used to populate the history
import fakeWithdrawHistory from "./fakeWithdrawHistory"

import SideBar from "../../components/SideBar/SideBar"
import WithdrawHistory from "./WithdrawHistory"
import BGImage from '../../../assets/images/HomeBackground.png'

import {

    RouteComponentProps
} from "react-router-dom";
import StatusBar from "../../components/StatusBar/StatusBar"

type TParams = { id: string };

const WithdrawPage = ({ history }: RouteComponentProps<TParams>) => {

    const [gamePassID, setGamePassID] = useState("")

    //@ts-ignore
   // const ipc = window.api;

    return (
        <div className="backgroundContainer" style={{backgroundImage:`url(${BGImage})`}}>
            <HomeActionBar />
            <div className="View">
                <SideBar screen={"withdrawpage"} history={history} />

                <div className="mainInterface">
                    <h2 className="pageTitle">Withdraw</h2>
                    <div style={{ flexDirection: "row", display: "flex" }}>
                        <div className="withdrawContentBox">
                            <img style={{ marginLeft: 381, marginTop: 10, width: 15, height: 15 }} src={HelpIcon} alt="" />

                            <span className="withdrawSubtitle">Withdraw Robux</span>

                            <div style={{ justifyContent: "center" }}>
                                <TextInput width={"366px"} value={gamePassID} type={"text"} placeholder={"Gamepass ID"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setGamePassID(e.target.value);
                                }} />
                            </div>
                            <div style={{ justifyContent: "center", marginTop: 5 }}>
                                <Button width={165} height={36} cursor="pointer" text={"Withdraw"} onClick={() => {

                                }} />
                            </div>

                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <WithdrawStatus type={""} />
                            </div>

                            <div style={{ justifyContent: "center", display: "flex" }}>
                                <div className="withdrawGuide">
                                    <div style={{ marginTop: 12, display: "flex" }}>
                                        <img className="withdrawalStatusImg" src={HelpIcon} alt="" />
                                        <span style={{ alignSelf: "center" }} className="withdrawSubtitle">How to Withdraw</span>
                                    </div>
                                    <span style={{ width: 286 }} className="withdrawMessage">To withdraw your earned robux,
                                        a Gamepass costing the exact amount of robux you wish to withdraw is required.
                                        Detailed instructions are available on our website and on our our YouTube channel.
                                        Please contact us if you require additional help. </span>
                                </div>
                            </div>

                        </div>
                        <div style={{ marginLeft: 8 }} className="withdrawContentBox">
                            <img style={{ marginLeft: 381, marginTop: 10, width: 15, height: 15 }} src={HelpIcon} alt="" />

                            <span className="withdrawSubtitle">Withdraw History</span>

                            <div style={{ marginTop: 12, alignItems: "center", justifyContent: "center", display: "flex", flexDirection: "column" }}>
                                {
                                    fakeWithdrawHistory.length > 0 ?

                                        fakeWithdrawHistory.slice(fakeWithdrawHistory.length - 4, fakeWithdrawHistory.length).map((data, key) => {

                                            return (
                                                //@ts-ignore
                                                <WithdrawHistory key={key} message={data.message} title={data.title} amount={data.amount} date={data.date} type={data.type}
                                                />
                                            )
                                        }).reverse()
                                        :
                                        <div className="noWithdrawFound">
                                            <span style={{ marginLeft: 14 }}>  No withdrawals found.</span>
                                        </div>
                                }
                            </div>

                            <div style={{ marginTop: 24, flexDirection: "row", display: "flex" }}>
                                <div >
                                    <img style={{
                                        marginLeft: 39,
                                        marginRight: 26
                                    }} src={ProcessingIcon} alt="" />
                                    <span style={{
                                        fontSize: 14
                                    }} className="withdrawHisTitle">Processing</span>
                                </div>
                                <div>
                                    <img style={{
                                        marginLeft: 39,
                                        marginRight: 26
                                    }} src={WithdrawalCompleteIcon} alt="" />
                                    <span style={{
                                        fontSize: 14
                                    }} className="withdrawHisTitle">Withdrawal Complete</span>
                                </div>

                            </div>


                        </div>
                    </div>
                    <StatusBar marginTop={13} />
                </div>
            </div>


        </div>
    )
}

export default WithdrawPage;