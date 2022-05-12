import React from "react";
// import image from "../images/profile.jpg";

// let imgSrc = "../images/";
export default function Card({
    img,
    alt,
    status,
    rating,
    reviewCount,
    country,
    title,
    price,
}) {
    return (
        <div className="itemContainer">
            <div className="oneItem">
                <div className="itemImg">
                    <img className="itemPhoto" src={img} alt={alt}></img>
                    <div className="itemStatus">
                        <p>{status}</p>
                    </div>
                </div>
            </div>
            <div className="itemInfo">
                <div>
                    ♥️ {rating}
                    <span>
                        ({reviewCount}) • {country}{" "}
                    </span>
                </div>
                <div>{title}</div>
                <div>
                    <b>{price}</b> / person
                </div>
            </div>
        </div>
    );
}
