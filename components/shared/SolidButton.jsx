import React from "react";

const SolidButton = ({ title, onClick }) => {
    return (
        <button className='bg-primary text-light py-1.5 px-5 rounded-md font-medium text-sm uppercase'
            onClick={onClick}
        >{title}</button>
    );
};

export default SolidButton;
