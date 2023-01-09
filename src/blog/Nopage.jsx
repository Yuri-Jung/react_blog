//Nopage.jsx

import React from "react";

const styles = {
    no : {
        width : "100%",
    }
}

function Nopage(){
    return(
        <div>
            <img src = "/image/Nopage.png" alt={'Nopage'} style={styles.no} />
        </div>
    )
}

export default Nopage;