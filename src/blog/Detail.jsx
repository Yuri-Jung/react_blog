//Detail.jsx

import React from "react";

const styles = {
    font: {
        fontFamily: "this_is_font_name",
        fontSize: "30px",
        color: "black"
    },
    img: {
        textAlign:"center",
        height : "500px",
        margin: "auto",
        display: "block",
        paddingTop : "50px",
    }
}


function Detail(){
    return(
        <div className={"container mt-5"}>
            <div style = {styles.font}>💖디테일페이지💖</div>
            <text className={"form-control mt-5"}>제목1</text>
            <text className={"form-control mt-3"}>글쓴이1</text>
            <img src={"/image/a.jpg"} style={styles.img}/>
            <img src = {"/image/g.jpg"} style={styles.img}/>
            <textarea className={'form-control mt-5 '} rows="20">우하하아아아아아아아아아아아움</textarea>
        </div>
    )
}

export default Detail;