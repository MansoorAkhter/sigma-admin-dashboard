
const NoticeBox = ({ title, message }) => {
    return (
        <div className="bg-lightOrange rounded-md w-full py-3 px-4 mt-8 md:mt-0">
            <p className="text-brightOrange font-semibold mb-1">{title}</p>
            <p className="text-brightOrange">{message}</p>
        </div>
    );
};

export default NoticeBox;
