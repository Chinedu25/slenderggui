
type ButtonProps ={
    text: string,
    cursor: string,
    width: number,
    height: number,
    backgroundColor?: string,
    color?:string,
    onClick: any,
}

const Button = ({width,text,cursor,height,backgroundColor,color, onClick}:ButtonProps)=>{



    return(
        <button
        onClick={onClick}
        className="loginBtn"
        type="submit"
        style={{
          width: width,
          height: height,
          backgroundColor: backgroundColor == null ? "#48B2EB" : backgroundColor,
          color: color == null ? "#000000" : color,
        //   border: border,
          cursor: cursor,
          padding: "0px",
          fontFamily: "Exo2Medium",
          border: "1px solid #272D3C",
          fontSize:18,
          borderRadius:"4px"
        }}
      >
        {text}
      </button>
    );

}

export default Button;