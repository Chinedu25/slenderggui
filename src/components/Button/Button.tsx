import './ButtonStyles.css';

type ButtonProps = {
  text: string;
  cursor: string;
  width: number;
  height: number;
  backgroundColor?: string;
  color?: string;
  onClick: any;
};

const Button = ({
  width,
  text,
  cursor,
  height,
  backgroundColor,
  color,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="Button"
      type="submit"
      style={{
        width,
        height,
        backgroundColor: backgroundColor == null ? '#48B2EB' : backgroundColor,
        color: color == null ? '#000000' : color,
        cursor,
        padding: '0px',
        fontFamily: 'Exo2Medium',
        border: '1px solid #272D3C',
        fontSize: 18,
        borderRadius: '4px',
      }}
    >
      {text}
    </button>
  );
};

export default Button;
