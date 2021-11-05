import '../HomePage/HomePage.css';
import './SettingsPage.css';
import DiscordIcon from '../../../assets/images/DiscordIcon.png';
import HelpIcon from '../../../assets/images/HelpIcon.png';
import SlenderGGLogoSmall from '../../../assets/images/SlenderGGLogoSmall.svg';
import HomeActionBar from '../../components/Header/HomeActionBar';
import SideBar from '../../components/SideBar/SideBar';
import { RouteComponentProps } from 'react-router-dom';
import IntensitySettings from './IntensitySettings';
import RenamePC from './RenamePC';
import FlatButton from '../../components/Button/FlatButton';
import StatusBar from '../../components/StatusBar/StatusBar';
import BGImage from '../../../assets/images/HomeBackground.png';

type TParams = { id: string };

const SettingsPage = ({ history }: RouteComponentProps<TParams>) => {
  return (
    <div
      className="backgroundContainer"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <HomeActionBar />
      <div className="View">
        <SideBar screen={'settingspage'} history={history} />

        <div className="mainInterface">
          <h2 className="pageTitle">Settings</h2>

          <div className="settingsContentBox">
            <img
              style={{ marginLeft: 795, marginTop: 10, width: 15, height: 15 }}
              src={HelpIcon}
              alt=""
            />
            <span style={{ lineHeight: 1 }} className="pcInfoTitle">
              Intensity
            </span>

            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                marginTop: 12,
              }}
            >
              <div className="settingsInnerBox">
                <IntensitySettings />
              </div>
            </div>
          </div>

          <div className="settingsContentBox">
            <img
              style={{ marginLeft: 795, marginTop: 10, width: 15, height: 15 }}
              src={HelpIcon}
              alt=""
            />
            <span style={{ lineHeight: 1 }} className="pcInfoTitle">
              Rename this PC
            </span>

            <div
              style={{
                justifyContent: 'center',
                display: 'flex',
                marginTop: 12,
              }}
            >
              <div className="settingsInnerBox">
                <RenamePC />
              </div>
            </div>
          </div>

          <div
            style={{
              height: 115,
            }}
            className="settingsContentBox"
          >
            <span
              style={{ lineHeight: 1, marginTop: 18 }}
              className="pcInfoTitle"
            >
              Help
            </span>

            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div style={{ marginTop: 12, marginLeft: 20 }}>
                <FlatButton
                  text={'Discord'}
                  imgWidth={25}
                  imgHeight={19}
                  imgUrl={DiscordIcon}
                  onClick={() => {}}
                />
              </div>

              <div style={{ marginTop: 12, marginLeft: 20 }}>
                <FlatButton
                  text={'Website'}
                  imgWidth={25}
                  imgHeight={19}
                  imgUrl={SlenderGGLogoSmall}
                  onClick={() => {}}
                />
              </div>
            </div>
          </div>

          <StatusBar marginTop={21} />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
