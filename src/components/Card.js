import React from "react";
// import image from "../images/profile.jpg";

// let imgSrc = "../images/";
export default function Card({
    item,
    // img,
    // alt,
    // status,
    // rating,
    // reviewCount,
    // country,
    // title,
    // price,
}) {
    let itemStatusP;
    if (item.status === 0) {
        itemStatusP = "Sold Out";
    } else if (item.location === "Online") {
        itemStatusP = "Online";
    }
    return (
        <div className="itemContainer">
            <div className="oneItem">
                <div className="itemImg">
                    <img
                        className="itemPhoto"
                        src={`./images/${item.coverImg}`}
                        alt={item.coverImg}
                    ></img>
                    <div className="itemStatus">
                        {itemStatusP && <p>{itemStatusP}</p>}
                    </div>
                </div>
            </div>
            <div className="itemInfo">
                <div>
                    ♥️ {item.stats.rating}
                    <span>
                        ({item.stats.reviewCount}) • {item.location}{" "}
                    </span>
                </div>
                <div>{item.title}</div>
                <div>
                    <b>{item.price}</b> / person
                </div>
            </div>
        </div>
    );
}
