
const SolidButton = ({ title, onClick }) => {
    return (
        <button className='bg-primary text-light h-9 px-5 rounded-md font-medium text-sm uppercase flex justify-center items-center'
            onClick={onClick}
        >{title}</button>
    );
};

export default SolidButton;
