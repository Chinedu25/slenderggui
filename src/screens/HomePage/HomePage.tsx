import './HomePage.css';
import HelpIcon from '../../../assets/images/HelpIcon.png';
import StaticRings from '../../../assets/images/StaticRings.png';
import RotatingRingsActive from '../../../assets/images/RotatingRingsActive.png';
import HomeActionBar from '../../components/Header/HomeActionBar';
import SideBar from '../../components/SideBar/SideBar';
import PCInfoListBar from './PCInfoListBar';
import { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import ChartMap from './ChartMap';
import StatusBar from '../../components/StatusBar/StatusBar';
import BGImage from '../../../assets/images/HomeBackground.png';

type TParams = { id: string };

const HomePage = ({ history }: RouteComponentProps<TParams>) => {
  const [begin, setBegin] = useState<Boolean>(false);

  //This just to make check box work
  const [useGPU1State, setUseGPU1State] = useState<Boolean>(true);
  const [useGPU2State, setUseGPU2State] = useState<Boolean>(true);
  const [useGPU3State, setUseGPU3State] = useState<Boolean>(false);

  return (
    <div
      className="backgroundContainer"
      style={{ backgroundImage: `url(${BGImage})` }}
    >
      <HomeActionBar />

      <div className="View">
        <SideBar history={history} screen="homepage" />

        <div className="mainInterface">
          <h2 className="pageTitle">Home</h2>
          <div className="estimatedDaily">
            <img
              style={{ marginLeft: 797, marginTop: 10, width: 15, height: 15 }}
              src={HelpIcon}
              alt=""
            />
            <span style={{ lineHeight: 1 }} className="pcInfoTitle">
              Estimated Daily Robux from Current PC
            </span>
            <div style={{ flexDirection: 'row', display: 'flex' }}>
              <div className="graphSpace">
                <ChartMap />
              </div>

              {begin === true ? (
                <div
                  onClick={() => {
                    setBegin(false);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    style={{
                      height: 128,
                      width: 128,
                      marginLeft: 35,
                    }}
                    src={RotatingRingsActive}
                    alt=""
                  />
                  <span
                    className="defaultText"
                    style={{
                      fontSize: 18,
                      color: '#4CC2FF',
                      textAlign: 'center',
                      position: 'absolute',
                      left: 1040,
                      top: 221,
                    }}
                  >
                    32.12
                  </span>
                  <span
                    className="defaultText"
                    style={{
                      fontSize: 14,
                      color: '#aafcc0',
                      textAlign: 'center',
                      position: 'absolute',
                      left: 1040,
                      top: 241,
                    }}
                  >
                    R$/HR
                  </span>
                  <span
                    className="defaultText"
                    style={{
                      fontSize: 14,
                      textAlign: 'center',
                      position: 'absolute',
                      left: 1044,
                      top: 261,
                    }}
                  >
                    STOP
                  </span>
                </div>
              ) : (
                <div
                  onClick={() => {
                    setBegin(true);
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    style={{
                      height: 128,
                      width: 128,
                      marginLeft: 35,
                    }}
                    src={StaticRings}
                    alt=""
                  />
                  <span
                    className="defaultText"
                    style={{
                      color: '#4CC2FF',
                      textAlign: 'center',
                      position: 'absolute',
                      left: 1037,
                      top: 238,
                    }}
                  >
                    Begin
                  </span>
                </div>
              )}
            </div>
          </div>
          <div style={{ marginTop: 8, flexDirection: 'row', display: 'flex' }}>
            <div className="pcListBackground">
              <img
                style={{
                  marginLeft: 381,
                  marginTop: 10,
                  width: 15,
                  height: 15,
                }}
                src={HelpIcon}
                alt=""
              />
              <span className="pcInfoTitle">Your Hardware</span>
              <div style={{ marginTop: 12 }}>
                <PCInfoListBar
                  type={'gpu'}
                  text={'Nvidia GeForce RTX 3090'}
                  isCheckBox={true}
                  isActive={useGPU1State}
                  onClick={() => {
                    setUseGPU1State(!useGPU1State);
                  }}
                />
                <PCInfoListBar
                  type={'gpu'}
                  text={'Nvidia GeForce RTX 3090'}
                  isCheckBox={true}
                  isActive={useGPU2State}
                  onClick={() => {
                    setUseGPU2State(!useGPU2State);
                  }}
                />
                <PCInfoListBar
                  type={'cpu'}
                  text={'AMD Ryzen 9 5950X'}
                  isCheckBox={true}
                  isActive={useGPU3State}
                  onClick={() => {
                    setUseGPU3State(!useGPU3State);
                  }}
                />
              </div>
            </div>

            <div className="pcListBackground" style={{ marginLeft: 8 }}>
              <img
                style={{
                  marginLeft: 381,
                  marginTop: 10,
                  width: 15,
                  height: 15,
                }}
                src={HelpIcon}
                alt=""
              />
              <span className="pcInfoTitle">Connected PCs</span>
              <div style={{ marginTop: 12 }}>
                <PCInfoListBar
                  type={'pc'}
                  text={'DESKTOP-N7SAGKN'}
                  isCheckBox={false}
                  isActive={true}
                />
                <PCInfoListBar
                  type={'pc'}
                  text={'DESKTOP-7UKQRGD'}
                  isCheckBox={false}
                  isActive={true}
                />
                <PCInfoListBar
                  type={'pc'}
                  text={'DESKTOP-D64SG9U'}
                  isCheckBox={false}
                  isActive={false}
                />
              </div>
            </div>
          </div>

          <StatusBar marginTop={13} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
