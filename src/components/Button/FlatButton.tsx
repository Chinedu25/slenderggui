type flatbuttonProps = {
  text: string;
  imgUrl: string;
  onClick: any;
  width?: number;
  height?: number;
  imgWidth?: number;
  imgHeight?: number;
};

const FlatButton = ({
  text,
  width,
  height,
  imgWidth,
  imgHeight,
  imgUrl,
  onClick,
}: flatbuttonProps) => {
  return (
    <div
      style={{
        background: 'rgba(26, 33, 46, 0.7)',
        boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '4px',
        width: width != null ? width : 386,
        height: height != null ? height : 45,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
      }}
      onClick={onClick}
    >
      <img
        style={{
          width: imgWidth,
          height: imgHeight,
          marginLeft: 14,
        }}
        src={imgUrl}
        alt=""
      />
      <span
        style={{
          fontFamily: 'Exo2Medium',
          fontWeight: 300,
          fontSize: 18,
          marginLeft: 21,
          color: '#fff',
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default FlatButton;
