import '../HomePage/HomePage.css';
import './LogOutPage.css';
import ExclamationFailedIcon from '../../../assets/images/ExclamationFailedIcon.png';
import HomeActionBar from '../../components/Header/HomeActionBar';
import SideBar from '../../components/SideBar/SideBar';
import BGImage from '../../../assets/images/HomeBackground.png';
import { RouteComponentProps } from 'react-router-dom';
import Button from '../../components/Button/Button';
import StatusBar from '../../components/StatusBar/StatusBar';

type TParams = { id: string };

const LogOutPage = ({ history }: RouteComponentProps<TParams>) => {
  const ipc = window.api;

  const LogOutFunction = () => {
    ipc.send('shrink-window');
    history.replace('./');
  };

  return (
    <div
      className="backgroundContainer"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <HomeActionBar />
      <div className="View">
        <SideBar screen={'logoutpage'} history={history} />

        <div className="mainInterface">
          <h2 className="pageTitle">Log Out</h2>
          <div className="logOutContainer">
            <span
              style={{ lineHeight: 1, marginTop: 18 }}
              className="pcInfoTitle"
            >
              Log Out
            </span>

            <div
              style={{
                marginTop: 12,
                justifyContent: 'center',
                display: 'flex',
              }}
            >
              <div className="logOutInnerContainer">
                <img
                  style={{
                    height: 25,
                    width: 25,
                    marginLeft: 14,
                  }}
                  src={ExclamationFailedIcon}
                  alt=""
                />

                <span className="defaultText">
                  Are you sure you want to log out?
                </span>
                <div
                  style={{
                    marginLeft: 258,
                  }}
                >
                  <Button
                    color={'#fff'}
                    backgroundColor={'#E22C2C'}
                    text={'Log Out'}
                    cursor="pointer"
                    width={165}
                    height={36}
                    onClick={() => {
                      LogOutFunction();
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
          <StatusBar marginTop={309} />
        </div>
      </div>
    </div>
  );
};

export default LogOutPage;
