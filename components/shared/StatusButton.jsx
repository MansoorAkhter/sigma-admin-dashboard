
const StatusButton = ({ title, bgColor, textColor }) => {
    return <div className="px-2.5 h-6 rounded-[4px] uppercase" style={{ backgroundColor: bgColor }}>
        <span className="font-semibold text-[13px]" style={{ color: textColor }}>{title}</span>
    </div>;
};

export default StatusButton;
