import "../HomePage/HomePage.css"
import "./SettingsPage.css"
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
import HelpIcon from "../../assets/images/HelpIcon.png"
import DailyRobloxIcon from "../../assets/images/DailyRobloxIcon.png"
import SystemRobloxIcon from "../../assets/images/SystemRobloxIcon.png"
import BalanceIcon from "../../assets/images/BalanceIcon.png"
import PendingIcon from "../../assets/images/PendingIcon.png"
import SlenderGGLogoSmall from "../../assets/images/SlenderGGLogoSmall.svg"

import {
    RouteComponentProps
} from "react-router-dom";
import IntensitySettings from "./IntensitySettings"
import RenamePC from "./RenamePC"
import FlatButton from "../../components/Button/FlatButton"

type TParams = { id: string };

const SettingsPage = ({ history }: RouteComponentProps<TParams>) => {
    return (
        <div className="backgroundContainer">
            <div>
                <img className="logo" src={Logo} alt="" />
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

                        <SideButton imgSrc={SettingsIcon} text={"Settings"} isActive={true} onClick={() => {

                        }} />

                        <SideButton imgSrc={SignOutIcon} text={"Log Out"} isActive={false} onClick={() => {
                            history.push("/logoutpage");
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
                    <h2 className="pageTitle">Settings</h2>

                    <div className="settingsContentBox">
                        <img style={{ marginLeft: 795, marginTop: 10, width: 15, height: 15 }} src={HelpIcon} alt="" />
                        <span style={{ lineHeight: 1 }} className="pcInfoTitle">Intensity</span>

                        <div style={{ justifyContent: "center", display: "flex", marginTop: 12 }}>
                            <div className="settingsInnerBox">
                                <IntensitySettings />
                            </div>
                        </div>

                    </div>

                    <div className="settingsContentBox">
                        <img style={{ marginLeft: 795, marginTop: 10, width: 15, height: 15 }} src={HelpIcon} alt="" />
                        <span style={{ lineHeight: 1 }} className="pcInfoTitle">Rename this PC</span>

                        <div style={{ justifyContent: "center", display: "flex", marginTop: 12 }}>
                            <div className="settingsInnerBox">
                                <RenamePC />
                            </div>
                        </div>
                    </div>

                    <div style={{
                        height: 115
                    }} className="settingsContentBox">
                        <span style={{ lineHeight: 1, marginTop: 18 }} className="pcInfoTitle">Help</span>



                        <div style={{ flexDirection: "row", display: "flex" }}>
                            <div style={{ marginTop: 12, marginLeft: 20 }}><FlatButton text={"Discord"} imgWidth={25} imgHeight={19} imgUrl={DiscordIcon} onClick={() => {

                            }} /></div>

                            <div style={{ marginTop: 12, marginLeft: 20 }}><FlatButton text={"Website"} imgWidth={25} imgHeight={19} imgUrl={SlenderGGLogoSmall} onClick={() => {

                            }} /></div>
                        </div>

                    </div>

                    <div style={{ marginLeft: 0, marginTop: 21 }}>
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

export default SettingsPage;