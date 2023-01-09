//Write.jsx

import React from "react";
import { CKEditor } from 'ckeditor4-react';
import {Link} from "react-router-dom";
import styled from "styled-components";
// import paintTiger from "/image/paintTiger.png";
// import tigercat from "/image/tigercat.png";

const styles = {
    font : {
        fontFamily : "this_is_font_name",
        fontSize : "30px",
        color : "black"
    },

    // ck : {
    //     height : "700px"
    // },

    // background : {
    //     backgroundImage : `url:("/image/tigercat.png)`,
    //     backgroundPosition: 'center',
    //     backgroundRepeat: 'no-repeat',
    //     backgroundSize: 'cover',
    // }

}

function Write(){
    return(
        <div className={"container mt-5"}>

            <p style = {styles.font}>😘글쓰기페이지😘</p>
            <input type = "text" placeholder={"제목"} className={"form-control mt-5"}></input>
            <input type = "text" placeholder={"글쓴이"} className={"form-control mt-3"}></input>
            {/*<div style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/image/paintTiger.png'})`}}></div>*/}
            <div className={"mt-5 vh-100"} >


                <CKEditor>

                    data="<p>Hello from CKEditor 4!</p>"
                    onReady={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor is ready to use!', editor);
                }}
                    onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                    onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                    onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
                    />
                </CKEditor>
                <button className={"btn btn-outline-primary float-right mt-5"}>
                    <Link to={"/list"}>작성하기</Link>
                </button>
            </div>
            <Container/>
        </div>
    )
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 30%;
  height: 30%;
  background: url("/image/tigercat.png");
  background-size: cover;
`;

export default Write;