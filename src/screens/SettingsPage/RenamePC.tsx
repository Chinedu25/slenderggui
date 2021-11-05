import PCIcon from '../../../assets/images/PCIcon.png';
import EditIcon from '../../../assets/images/EditIcon.png';
import RefreshIcon from '../../../assets/images/RefreshIcon.png';

import { useState, useEffect } from 'react';
import TextInput from '../../components/TextInput/TextInput';
import Button from '../../components/Button/Button';

const ipc = window.api;

const RenamePC = () => {
  const [editPCName, setEditPCName] = useState(false);
  const [userPCName, setUserPCName] = useState('DESKTOP-D64SG9U');

  useEffect(() => {
    ipc.invoke('getStoreValue', 'UserPCName').then((response: any) => {
      if (response) {
        if (response.length !== 0) {
          setUserPCName(response);
        }
      }
    });
  }, []);

  return (
    <div className="refreshContainer">
      <img
        style={{
          width: 25,
          height: 23,
          marginTop: 25,
          marginLeft: 14.45,
        }}
        src={PCIcon}
        alt=""
      />

      {editPCName === true ? (
        <div
          style={{
            width: 676,
            display: 'flex',
            marginTop: 8,
            marginLeft: 23.48,
          }}
        >
          <TextInput
            width={'335px'}
            value={userPCName}
            placeholder={'Username 01’s PC'}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => [
              setUserPCName(e.target.value),
            ]}
          />
          <div style={{ marginTop: 10, marginLeft: 12 }}>
            <Button
              width={165}
              text={'Apply'}
              height={36}
              cursor={'pointer'}
              onClick={() => {
                ipc.send('setUserPCName', userPCName);
                setEditPCName(false);
              }}
            />
          </div>
        </div>
      ) : (
        <div style={{ width: 700, display: 'flex' }}>
          <span
            style={{
              marginTop: 25,
              textAlign: 'left',
              display: 'flex',
              fontWeight: 300,
            }}
            className="defaultText"
          >
            {userPCName}
          </span>
          <img
            style={{
              marginTop: 28,
              marginLeft: 21,
              width: 16.27,
              height: 15,
              cursor: 'pointer',
            }}
            src={EditIcon}
            alt=""
            onClick={() => {
              setEditPCName(true);
            }}
          />
        </div>
      )}

      <img
        style={{
          height: 14,
          width: 15,
          marginTop: 28.5,
        }}
        src={RefreshIcon}
        alt=""
      />
    </div>
  );
};

export default RenamePC;
