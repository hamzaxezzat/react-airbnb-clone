import React from "react";
import itemPhoto from "../images/profile.jpg";

export default function Navbar() {
    return (
        <div className="offersSection">
            <div className="itemContainer">
                <div className="oneItem">
                    <div className="itemImg">
                        <img
                            className="itemPhoto"
                            src={itemPhoto}
                            alt="dsadsa"
                        />
                        <div className="itemStatus">
                            <p>SOLD OUT</p>
                        </div>
                    </div>
                </div>
                <div className="itemInfo">
                    <div>
                        ♥️ 5.0 <span> (6) • USA </span>
                    </div>
                    <div>Life lessons with Katie Zaferes</div>
                    <div>
                        <b>From $136</b> / person
                    </div>
                </div>
            </div>
            <div className="itemContainer">
                <div className="oneItem">
                    <div className="itemImg">
                        <img
                            className="itemPhoto"
                            src={itemPhoto}
                            alt="dsadsa"
                        />
                        <div className="itemStatus">
                            <p>SOLD OUT</p>
                        </div>
                    </div>
                </div>
                <div className="itemInfo">
                    <div>
                        ♥️ 5.0 <span> (6) • USA </span>
                    </div>
                    <div>Life lessons with Katie Zaferes</div>
                    <div>
                        <b>From $136</b> / person
                    </div>
                </div>
            </div>
        </div>
    );
}
