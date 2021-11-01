
type ButtonProps ={
    text: string,
    color?:string,
    onClick: any,
    isActive: Boolean,  
    imgSrc:string
}

const SideButton = ({imgSrc,text,isActive,onClick}:ButtonProps)=>{



    return(
        <button
        onClick={onClick}
        className="loginBtn"
        type="submit"
        style={{
          width: 300,
          height: 45,
          marginBottom: 8,
          backgroundColor: isActive === true ? "#252e40" : "#1d2539",
          color: "#fff",
          cursor: "pointer",
          padding: "0px",
          fontFamily: "Exo2Medium",
          border: isActive === true ? "1px solid #252e40" :"1px solid #1d2539",
          alignItems:"center",
          justifyContent:"flex-start",
          display: "flex",
          fontSize:18,
          borderRadius:"6px",
          boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
        }}
      >
          {isActive === true ?
        <div style={{
            backgroundColor: "#4cc2ff",
            borderRadius: "1px",
            height: 25,
            width:3,
        }}></div>  :
        <div></div>
        }
        <img style={{marginLeft: 14}} src={imgSrc} alt=""/>
        <div style={{marginLeft: 14, fontFamily:"Exo2Medium", fontSize: 18}}>{text}</div>

      </button>
    );

}

export default SideButton;