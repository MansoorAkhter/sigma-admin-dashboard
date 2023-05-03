
const OutlinedButton = ({ title }) => {
    return <button
        className='hover:bg-lightRed/30 border-[1px] h-9 border-brightRed text-brightRed px-4 rounded-md uppercase font-medium text-sm transition duration-300'>
        {title}
    </button>;
};

export default OutlinedButton;
