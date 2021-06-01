import React from 'react'
import Img from '../Images/quienes.png'

const QuienesSomos = () => {

    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <img src={Img} style={{ width: "100%" }}></img>
                    <div className="col-12">
                        <h1 style={{ position: "absolute", top: "20%", color: "white", padding: "20px", textShadow: "-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda explicabo id odio quis dicta vero harum nemo optio quaerat dignissimos! Maxime harum delectus cum dolore minima corrupti ab, impedit quod?. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda explicabo id odio quis dicta vero harum nemo optio quaerat dignissimos! Maxime harum delectus cum dolore minima corrupti ab, impedit quod?</h1>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default QuienesSomos;