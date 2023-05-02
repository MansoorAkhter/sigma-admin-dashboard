import React from "react";

const SquareIcon = ({ icon, name, color }) => {
    return (
        <div className="w-[42px] h-[42px] rounded-md flex items-center justify-center" style={{ backgroundColor: color }}>
            <img src={icon} alt={name} />
        </div>
    );
};

export default SquareIcon;
