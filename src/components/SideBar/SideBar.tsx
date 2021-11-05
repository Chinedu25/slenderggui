import "../../screens/HomePage/HomePage.css"
import ProfileImage from '../../../assets/images/ProfileImage.png'
import SideButton from "../../components/Button/SideButton"
import HomeIcon from "../../../assets/images/HomeIcon.png"
import SignOutIcon from "../../../assets/images/SignOutIcon.png"
import WithDrawIcon from "../../../assets/images/WithdrawIcon.png"
import SettingsIcon from "../../../assets/images/SettingsIcon.png"
import DiscordIcon from "../../../assets/images/DiscordIcon.png"
import InstagramIcon from "../../../assets/images/InstagramIcon.png"
import TikTokIcon from "../../../assets/images/TikTokIcon.png"
import YouTubeIcon from "../../../assets/images/YouTubeIcon.png"

import {

    RouteComponentProps
} from "react-router-dom";


type SideBarProps = {
    screen: string,
    history: RouteComponentProps["history"]
}

const SideBar = ({ screen, history }: SideBarProps) => {


    return (
        <div className="sideBar">
            <div className="profileContainer">
                <img className="profileImage" src={ProfileImage} alt="" />
                <div style={{ marginLeft: 15, flexDirection: "column", justifyContent: "center", alignItems: "start", display: "flex" }}>
                    <span className="username">Username 01</span>
                    <span className="userLevel">Level: 01</span>
                </div>
            </div>
            <div className="sideBarButtonList">
                <SideButton imgSrc={HomeIcon} text={"Home"} isActive={screen === "homepage" ? true : false} onClick={() => {
                    if (screen !== "homepage")
                        history.push("/homepage");
                }} />
                <SideButton imgSrc={WithDrawIcon} text={"Withdraw"} isActive={screen === "withdrawpage" ? true : false} onClick={() => {
                    if (screen !== "withdrawpage")
                        history.push("/withdrawpage");
                }} />

                <SideButton imgSrc={SettingsIcon} text={"Settings"} isActive={screen === "settingspage" ? true : false} onClick={() => {
                    if (screen !== "settingspage")
                    history.push("/settingspage");
                }} />

                <SideButton imgSrc={SignOutIcon} text={"Log Out"} isActive={screen === "logoutpage" ? true : false} onClick={() => {
                    if (screen !== "logoutpage")
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

    )
}

export default SideBar;