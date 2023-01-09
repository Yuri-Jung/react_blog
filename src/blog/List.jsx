//List.jsx

import React from "react";
import {Link} from "react-router-dom";
function List(){
    return(
        <div className={"container mt-5"}>
            <div className = {"row"}>
                <div className={"col-sm"}>
                    <table className = {"table table-hover" }>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>글쓴이</th>
                                <th>날짜</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><Link to={"/detail"} className = {"nav-link active " }>1</Link></td>
                                <td><Link to={"/detail"} className = {"nav-link active " }>제목1</Link></td>
                                <td>글쓴이1</td>
                                <td>2023-01-09</td>
                            </tr>
                            <tr>
                                <td><Link to={"/detail"} className = {"nav-link active " }>2</Link></td>
                                <td><Link to={"/detail"} className = {"nav-link active " }>제목2</Link></td>
                                <td>글쓴이2</td>
                                <td>2023-01-09</td>
                            </tr>
                            <tr>
                                <td><Link to={"/detail"} className = {"nav-link active " }>3</Link></td>
                                <td><Link to={"/detail"} className = {"nav-link active " }>제목3</Link></td>
                                <td>글쓴이3</td>
                                <td>2023-01-09</td>
                            </tr>
                        </tbody>
                    </table>
                    <img src={"/image/사냥.gif"} className={"float-left "}/>
                    <img src = {"/image/boxingcat.gif" } className={"m-3"}/>
                    <img src = {"/image/하품짤1.gif" } className={"float-right"}/>
            </div>
            </div>
        </div>
    )
}

export default List;