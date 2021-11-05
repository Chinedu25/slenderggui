import React, { useState } from "react";
import {
    RouteComponentProps
} from "react-router-dom";

import "./login.css";
import Logo from '../../../assets/images/Logo.svg'
import LargeLogo from '../../../assets/images/slenderggLogoHair.svg'
import TextInput from "../../components/TextInput/TextInput";
import Button from "../../components/Button/Button";
import ClipLoader from "react-spinners/ClipLoader";
import CloseIcon from "../../../assets/images/CloseIcon.svg"
import MinimizeIcon from "../../../assets/images/MinimizeIcon.svg"
import BGLoginImage from '../../../assets/images/loginBGImage.png';

type TParams = { id: string };

const Login = ({ history }: RouteComponentProps<TParams>) => {

    const [robUsername, setRobUsername] = useState("");

    const [initalLoad, setInititalLoad] = useState(true);

    const [logging, setLogging] = useState(false);

    const [isErrorUI, setIsErrorUI] = useState(false);

    //@ts-ignore
    const ipc = window.api;


    //Just to prove it works and moves to next part of UI
    setTimeout(() => {
        setInititalLoad(false);
    }, 3000);

    //fake function to pretend logging
    const TestLogging = () => {
        setLogging(true);
        setTimeout(() => {
            ipc.send('resize-window');
            history.push("/HomePage");
        }, 3000)

    }

    return (
        <div className="container" style={{backgroundImage: `url(${BGLoginImage})`}}>

            <div className="view">

                <div style={{ flexDirection: "row", display: "flex" }}>
                <div className="minimizeBox"   
                 onClick={() => {
                            ipc.send('minimize')
                        }}>
                        <img 
                        style={{
                            width: 12,
                            height: 12,
                            cursor: "pointer"
                        }}

                            src={MinimizeIcon} alt="" />
                    </div>
                    <div className="closeBox" onClick={() => {
                            ipc.send('closeApp')
                        }} >
                        <img         
                        style={{
                            width: 12,
                            height: 12,
                            cursor: "pointer"
                        }}

                            src={CloseIcon} alt="" />
                    </div>

                    <img className="logo" src={Logo} alt="" />
                </div>
                <div style={{ marginTop: 0, display: "flex", justifyContent: "center" }}>
                    <img className="largeLogo" src={LargeLogo} alt="" />
                </div>

            </div>

            {

                isErrorUI ?
                    <div className="loginSection">
                        <h4 className="loginFailed">
                            Login failed. Please ensure that you have entered the username correctly and that you have a stable internet connection.
                        </h4>

                        <div style={{ marginTop: 53 }}>
                            <Button width={165} height={36} cursor={"pointer"}
                                text={"Back to Log In"}
                                onClick={() => {
                                    setIsErrorUI(false);
                                }} />
                        </div>
                    </div>


                    :
                    initalLoad ?
                        <div className="loginSection">
                            <h4 className="slendergg">slender.gg</h4>
                            <div className="initialLoad">
                                <div><ClipLoader color={"#fff"} loading={initalLoad} size={25} /></div>
                                <span className="initialLoadText">Loading</span>
                            </div>
                            <div>
                                <h3 className="disclaimerText" style={{ marginTop: 81 }}>
                                    Please ensure your entered username is correct. We will not refund robux if withdrawn into an incorrect account.
                                </h3>
                            </div>

                        </div>
                        :
                        logging ?
                            <div className="loginSection">
                                <div style={{ marginTop: 66.97 }}>
                                    <span className="pleaseWait">Please wait...</span>
                                </div>
                                <div className="initialLoad" style={{ marginTop: 51 }}>
                                    <div><ClipLoader color={"#fff"} loading={logging} size={25} /></div>
                                    <span className="initialLoadText">Logging in...</span>
                                </div>
                            </div>
                            :
                            <div className="loginSection">
                                <h4 className="slendergg">slender.gg</h4>
                                <h3 className="loginMessage">Please enter your roblox username to start earning robux.</h3>
                                <TextInput value={robUsername} placeholder={'Roblox Username'} width={"335px"} height={"40px"} type={"text"} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    setRobUsername(e.target.value);
                                }} />
                                <div style={{ marginTop: 3 }}>
                                    <Button width={165} height={36} cursor={"pointer"}
                                        text={"Log In"}
                                        onClick={() => {

                                            //Testing the screen push
                                            TestLogging();
                                        }} />
                                </div>
                                <div>
                                    <h3 className="disclaimerText">
                                        Please ensure your entered username is correct. We will not refund robux if withdrawn into an incorrect account.
                                    </h3>
                                </div>
                            </div>
            }

        </div>
    );
}

export default Login;