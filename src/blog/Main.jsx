//Main.jsx

import styled from 'styled-components';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
import Write from "./Write";
import {Link} from "react-router-dom";
import React from "react";



const Main = () => {

    const responsive = {
        0: {
            items: 2,
        },
        512: {
            items: 5,
        },
    };

    const handleDragStart = (e) => e.preventDefault();

    const images = [
        "/image/a.jpg",
        "/image/b.jpg",
        "/image/c.jpg",
        "/image/d.png",
        "/image/e.jpg",
        "/image/f.jpg",
        "/image/g.jpg",
    ];

    const items = images.map((image) => {
        return (
            <ItemsContain>
                <ItemsWrap>
                    <img src={image} alt="" />
                </ItemsWrap>
            </ItemsContain>
        )
    })

    return (
        <div>
            <Contain className = {"mt-5 p-3"}>
                <AliceCarousel
                    mouseTracking
                    infinite={1000}
                    animationDuration={1000}
                    disableDotsControls
                    disableButtonsControls
                    responsive={responsive}
                    autoPlay
                    items={items}
                    paddingRight={60}
                />
            </Contain>
            <div className={"container"}>
                <div style={styles.font}>
                    <p>✨동물 하품 사진을 공유해주세요!✨</p>
                    <button className={"btn btn-outline-primary btn-lg"}>
                        <Link to={"/write"}>글쓰러 가기</Link>
                    </button>
                </div>

            </div>
        </div>
    )
}
export default Main;

const Contain = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    margin:0 auto;
`

const ItemsContain = styled.div`
    width:100%;
    height:100%;
    padding: 0 10px;
`

const ItemsWrap = styled.div`
    width:100%;
    height:300px;
    border-radius:20px;
    overflow:hidden;
    margin:0 50px;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    
    }
    
`

const styles = {
    font : {
        fontSize : '55px',
        textAlign : "center",
        paddingTop : "40px",
        fontFamily : "this_is_font_name",

    }
}

