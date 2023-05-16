import React from "react";

const IconButton = ({ icon, name, onClick, size }) => {
    return (
        <div
            className="hover:bg-gray-100 flex items-center justify-center rounded-full transition duration-300 cursor-pointer"
            onClick={onClick}
        >
            <img src={icon} alt={name} width={size} height={size} style={{ margin: size / 3 }} />
        </div>
    )
}

export default IconButton;
