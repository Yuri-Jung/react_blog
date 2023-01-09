// Header.jsx

import React from "react";


const styles={
    header : {

            margin: "auto", /* header의 양쪽 여백(margin)을 동등하게 맞춤 -> 수평가운데정렬 */
            width: "100%",
            height: "120px",
            fontSize : "70px",
            textAlign : "center",
            marginTop : "50px",
            fontFamily:"this_is_font_name",

    }
}



function Header(){
    return(
        <div>
            <header style = {styles.header}>
                <div>😍💖✨동물 하품 사진 모음 게시판✨💖😍</div>
            </header>
        </div>
    )
}

export default Header;