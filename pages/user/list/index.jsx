import CrudTable from "@/components/CrudTable";
import SquareIcon from "@/components/shared/SquareIcon";
import React from "react";

export const UsersInfo = ({ icon, name, color }) => {

    return (
        <div className="h-[130px] border-gray-300 border-[1px] rounded-md p-4">
            <div className="flex items-center h-full w-full">
                {/* Left Box */}
                <div className="w-1/2 h-full">
                    <div className="mb-1 text-lg text-[#84919D]">Session</div>
                    <div className="font-semibold text-2xl text-[#4D5F71]">21,456</div>
                    <div className="text-[#84919D]">Total Users</div>
                </div>

                {/* Right Box */}
                <div className="w-1/2 h-full flex justify-end">
                    <SquareIcon icon={icon} name={name} color={color} />
                </div>
            </div>
        </div>
    )
}


const List = () => {
    return (
        <div className="">
            <div className="grid sm:grid-cols-4 gap-4 pt-7 px-4">
                <UsersInfo icon="/icons/normalUser.svg" name="Session" color="#E7E7FF" />
                <UsersInfo icon="/icons/plusUser.svg" name="Paid Users" color="#FFE0DA" />
                <UsersInfo icon="/icons/multiUsers.svg" name="Active Users" color="#E8FADF" />
                <UsersInfo icon="/icons/voiceUser.svg" name="Pending Users" color="#FFF2D6" />
            </div>

            <div className="py-7 px-4">
                <CrudTable />
            </div>
        </div>
    );
};

export default List;
