import OutlinedButton from "@/components/shared/OutlinedButton";
import SolidButton from "@/components/shared/SolidButton";
import SquareIcon from "@/components/shared/SquareIcon";
import StatusButton from "@/components/shared/StatusButton";
import Image from "next/image";


const InfoIcon = ({ title, quantity, icon, name, color, }) => {
    return (
        <div className="flex items-center justify-between w-2/4 mx-4">
            <div className="flex mr-4">
                <SquareIcon icon={icon} name={title} color={color} />
            </div>

            <div className="flex flex-col justify-center w-full ml-3 transition duration-300">
                <span className="font-medium text-xl text-darkGray">{quantity}</span>
                <span className="font-medium text-[16px] text-semiGray">{title}</span>
            </div>
        </div>
    )
}

const Account = () => {
    return (
        <div className="flex justify-between px-4 pt-7 mb-7">
            {/* Left */}
            <div className="flex flex-col w-[33%]">
                <div className="border-gray-300 border-[1px] rounded-md">

                    {/* image & name section */}
                    <div className="p-4 flex flex-col justify-center items-center pt-11">
                        <Image src="/images/profileImage.png" alt="profile image" width={100} height={100} className="rounded-md w-[110px] h-[110px]" />

                        <h5 className="text-darkGray font-semibold text-[22px] mt-4">John Doe</h5>

                        <StatusButton title="admin" textColor="#FF5D41" bgColor="#FFE0DA" />
                    </div>

                    {/* task & project section */}
                    <div className="flex justify-between my-4">
                        <InfoIcon
                            title="Task Done"
                            quantity="1.2k"
                            icon="/icons/check.svg"
                            color="#E7E7FF"
                        />
                        <InfoIcon
                            title="Project Done"
                            quantity="563"
                            icon="/icons/addProjects.svg"
                            color="#E7E7FF"
                        />
                    </div>

                    {/* Details */}
                    <div className="p-4 ">
                        <div className="">
                            <h5 className="font-semibold text-darkGray text-xl">Details</h5>
                        </div>
                        <div className="flex flex-col">
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Username:</span>
                                <span className="text-lightGray">@johnd7</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Billing Email:</span>
                                <span className="text-lightGray">gslixby0@abc.net.au</span>
                            </div>
                            <div className="mt-4 flex">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Status:</span>
                                <span>
                                    <StatusButton title="active" textColor="#71DD37" bgColor="#E8FADF" />
                                </span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Role:</span>
                                <span className="text-lightGray">Admin</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Tax ID:</span>
                                <span className="text-lightGray">Tax-8894</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Contact:</span>
                                <span className="text-lightGray">+1 (479) 232-9151</span>
                            </div>
                            <div className="mt-4">
                                <span className="text-lightmodeSubHeading font-bold mr-2">Country:</span>
                                <span className="text-lightGray">Pakistan</span>
                            </div>

                        </div>
                    </div>

                    {/* Edit & cancel */}
                    <div className="p-4 mb-2.5 flex justify-center gap-4">
                        <SolidButton onClick={() => console.log("open modal")} title="Edit" />
                        <OutlinedButton />
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex w-[67%]">
                <div className="gap-4">
                    <SolidButton onClick={() => console.log("open modal")} title="account" />
                    <SolidButton onClick={() => console.log("open modal")} title="security" />
                    <SolidButton onClick={() => console.log("open modal")} title="billings & plans" />
                    <SolidButton onClick={() => console.log("open modal")} title="notifications" />
                    <SolidButton onClick={() => console.log("open modal")} title="connections" />
                </div>
            </div>
        </div>
    );
};

export default Account;
