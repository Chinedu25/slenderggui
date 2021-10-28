import "../HomePage/HomePage.css"
import "./LogOutPage.css"
import Logo from '../../assets/images/Logo.svg'
import ProfileImage from '../../assets/images/ProfileImage.png'
import SideButton from "../../components/Button/SideButton"
import HomeIcon from "../../assets/images/HomeIcon.png"
import SignOutIcon from "../../assets/images/SignOutIcon.png"
import WithDrawIcon from "../../assets/images/WithdrawIcon.png"
import SettingsIcon from "../../assets/images/SettingsIcon.png"
import DiscordIcon from "../../assets/images/DiscordIcon.png"
import InstagramIcon from "../../assets/images/InstagramIcon.png"
import TikTokIcon from "../../assets/images/TikTokIcon.png"
import YouTubeIcon from "../../assets/images/YouTubeIcon.png"
import DailyRobloxIcon from "../../assets/images/DailyRobloxIcon.png"
import SystemRobloxIcon from "../../assets/images/SystemRobloxIcon.png"
import BalanceIcon from "../../assets/images/BalanceIcon.png"
import PendingIcon from "../../assets/images/PendingIcon.png"
import ExclamationFailedIcon from "../../assets/images/ExclamationFailedIcon.png"


import CloseIcon from "../../assets/images/CloseIcon.svg"
import MinimizeIcon from "../../assets/images/MinimizeIcon.svg"

import {
    RouteComponentProps
} from "react-router-dom";
import Button from "../../components/Button/Button"

type TParams = { id: string };

const LogOutPage = ({ history }: RouteComponentProps<TParams>) => {

    //@ts-ignore
    const ipc = window.api;

    const LogOutFunction = () => {

        ipc.send('shrink-window');
        history.replace("./")

    }

    return (
        <div className="backgroundContainer">
            <div style={{ flexDirection: "row", display: "flex" }}>
                <img className="logo" src={Logo} alt="" />
                <div className="minimizeWinBox"
                 onClick={() => {
                        ipc.send("minimize")
                    }}
 >
                    <img 
                    style={{
                        width: 12,
                        height: 12,
                        cursor: "pointer"
                    }}

                        src={MinimizeIcon} alt="" />
                </div>
                <div className="closeWinBox" onClick={() => {
                        ipc.send('closeApp')
                    }}
                    >
                    <img 

                    style={{
                        width: 12,
                        height: 12,
                        cursor: "pointer"
                    }}

                        src={CloseIcon} alt="" />
                </div>
            </div>

            <div className="View">
                <div className="sideBar">
                    <div className="profileContainer">
                        <img className="profileImage" src={ProfileImage} alt="" />
                        <div style={{ marginLeft: 15, flexDirection: "column", justifyContent: "center", alignItems: "start", display: "flex" }}>
                            <span className="username">Username 01</span>
                            <span className="userLevel">Level: 01</span>
                        </div>
                    </div>
                    <div className="sideBarButtonList">
                        <SideButton imgSrc={HomeIcon} text={"Home"} isActive={false} onClick={() => {
                            history.push("/homepage");
                        }} />
                        <SideButton imgSrc={WithDrawIcon} text={"Withdraw"} isActive={false} onClick={() => {
                            history.push("/withdrawpage");
                        }} />

                        <SideButton imgSrc={SettingsIcon} text={"Settings"} isActive={false} onClick={() => {
                            history.push("/settingspage");
                        }} />

                        <SideButton imgSrc={SignOutIcon} text={"Log Out"} isActive={true} onClick={() => {

                        }} />
                    </div>
                    <div className="getFreeRob">
                        <span style={{ fontSize: 18, fontWeight: 600 }}>Get Free Robux!</span>
                        <span style={{ fontSize: 14, fontWeight: 300, marginTop: 4 }}>Follow us on Social Media</span>
                    </div>
                    <div className="socialLinks">
                        <div className="socialLinksRow">
                            <div className="socialLinkButton">
                                <span style={{ marginTop: 6 }}>Join our Discord</span>
                                <img className="socialLinkImg" src={DiscordIcon} alt="" />
                                <span style={{ marginTop: 11 }}>0.25 R$</span>
                            </div>
                            <div className="socialLinkButton" style={{ marginLeft: 20 }}>
                                <span style={{ marginTop: 6 }}>Subscribe on Youtube</span>
                                <img className="socialLinkImg" src={YouTubeIcon} alt="" />
                                <span style={{ marginTop: 11 }}>0.25 R$</span>
                            </div>
                        </div>
                        <div className="socialLinksRow">
                            <div className="socialLinkButton">
                                <span style={{ marginTop: 6 }}>Follow on Instagram</span>
                                <img style={{ height: 40, width: 40, marginTop: 11 }} className="socialLinkImg" src={InstagramIcon} alt="" />
                                <span style={{ marginTop: 11 }}>Claimed</span>
                            </div>
                            <div className="socialLinkButton" style={{ marginLeft: 20 }}>
                                <span style={{ marginTop: 6 }}>Follow on TikTok</span>
                                <img style={{ height: 40, width: 35, marginTop: 11 }} className="socialLinkImg" src={TikTokIcon} alt="" />
                                <span style={{ marginTop: 11 }}>0.25 R$</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mainInterface">
                    <h2 className="pageTitle">Log Out</h2>
                    <div className='logOutContainer'>

                        <span style={{ lineHeight: 1, marginTop: 18 }} className="pcInfoTitle">Log Out</span>

                        <div style={{ marginTop: 12, justifyContent: "center", display: "flex" }}>
                            <div className='logOutInnerContainer'>
                                <img style={{
                                    height: 25,
                                    width: 25,
                                    marginLeft: 14,
                                }} src={ExclamationFailedIcon} alt="" />

                                <span className="defaultText">Are you sure you want to log out?</span>
                                <div style={{
                                    marginLeft: 258
                                }}>
                                    <Button color={"#fff"} backgroundColor={"#E22C2C"} text={"Log Out"} cursor="pointer" width={165} height={36} onClick={() => {

                                        LogOutFunction();
                                    }} />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div style={{ marginLeft: 0, marginTop: 309 }}>
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

                </div>
            </div>


        </div>
    )
}

export default LogOutPage;