import React from "react";

const IconButton = ({ icon, name }) => {
    return (
        <div className="w-[42px] h-[42px] mr-[6px] hover:bg-gray-100 flex items-center justify-center rounded-full transition duration-300 cursor-pointer">
            {/* <BiBell size={24} color="#627282" /> */}
            <img src={icon} alt={name} width={24} height={24} />
        </div>
    )
}

export default IconButton;
