import React from "react";

const SolidButton = ({ title, onClick }) => {
    return <button className='bg-lightPurple text-primary py-1 px-2 rounded-md'
        onClick={onClick}
    >{title}</button>;
};

export default SolidButton;
