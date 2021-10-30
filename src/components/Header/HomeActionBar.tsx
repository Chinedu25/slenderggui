import CloseIcon from "../../assets/images/CloseIcon.svg"
import MinimizeIcon from "../../assets/images/MinimizeIcon.svg"
import Logo from '../../assets/images/Logo.svg'
import '../../screens/HomePage/HomePage.css'

//@ts-ignore
const ipc = window.api

const HomeActionBar = () => {

    return (
        <div style={{ flexDirection: "row", display: "flex" }}>
            <img className="logo" src={Logo} alt="" />
            <div className="minimizeWinBox" onClick={() => {
                ipc.send("minimize")
            }}>
                <img

                    style={{
                        width: 12,
                        height: 12,
                        cursor: "pointer"
                    }}

                    src={MinimizeIcon} alt="" />
            </div>
            <div className="closeWinBox"
                onClick={() => {
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
        </div>
    )
}

export default HomeActionBar;