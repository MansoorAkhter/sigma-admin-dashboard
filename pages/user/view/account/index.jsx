import NavigationCarousel from "@/components/NavigationCarousel";
import OutlinedButton from "@/components/shared/OutlinedButton";
import SolidButton from "@/components/shared/SolidButton";
import SquareIcon from "@/components/shared/SquareIcon";
import StatusButton from "@/components/shared/StatusButton";
import { PlusOne } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import Image from "next/image";
import { Icon } from '@mui/material';

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
        <div className="flex gap-4 px-4 pt-7 mb-7">
            {/* Left */}
            <div className="flex flex-col w-[33%]">
                <div className="border-gray-300 border-[1px] rounded-md">

                    {/* image & name section */}
                    <div className="p-4 flex flex-col justify-center items-center pt-11">
                        <Image src="/images/profileImage.png" alt="profile image" width={100} height={100} className="rounded-md w-[110px] h-[110px]" />

                        <h5 className="text-darkGray font-semibold text-[22px] mt-4">Mansoor Akhter</h5>

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
                        <OutlinedButton title="suspend" />
                    </div>
                </div>
            </div>

            {/* Right */}
            <div className="flex flex-col w-[67%]">
                {/* Top Nav Carousel */}
                <div className="flex justify-center h-[55px] py-2 gap-x-4 overflow-auto">
                    <SolidButton onClick={() => console.log("account")} title="account" />
                    <SolidButton onClick={() => console.log("security")} title="security" />
                    <SolidButton onClick={() => console.log("bills & plans")} title="billing & plans" />
                    <SolidButton onClick={() => console.log("notifications")} title="notifications" />
                    <SolidButton onClick={() => console.log("connections")} title="connections" />
                </div>

                {/* Current Plan */}
                <div className="border-gray-300 border-[1px] rounded-md p-6">
                    <div className="">
                        <h5 className="text-darkGray font-semibold text-xl">Current plan</h5>
                    </div>
                    <div className="flex pt-5">
                        {/* Left */}
                        <div className="w-full">
                            <div className="">
                                <p className="text-darkGray font-semibold">Your Current Plan is Basic</p>
                                <p className="text-semiGray font-extralight text-[16px] mt-1">A simple start for everyone</p>
                            </div>
                            <div className="my-5">
                                <p className="text-darkGray font-semibold">Active until Dec 09, 2023</p>
                                <p className="text-semiGray font-extralight text-[16px] mt-1">We will send you a notification upon Subscription expiration</p>
                            </div>
                            <div className="">
                                <p className="text-darkGray font-semibold">$99 Per Month</p>
                                <p className="text-semiGray font-extralight text-[16px] mt-1">Standard plan for small to medium businesses</p>
                            </div>

                        </div>

                        {/* Right */}
                        <div className="w-full">
                            <div className="bg-lightOrange rounded-md w-full py-3 px-4 ">
                                <p className="text-brightOrange font-semibold mb-1">We need your attention!</p>
                                <p className="text-brightOrange">Your plan requires updates</p>
                            </div>
                            <div className="flex justify-between mt-5">
                                <span className="text-darkGray font-semibold">Days</span>
                                <span className="text-darkGray font-semibold">24 of 30 Days</span>
                            </div>
                            <div className="mt-2">
                                <LinearProgress
                                    value={72}
                                    variant="buffer"
                                    class=".MuiLinearProgress-bar2Buffer .MuiLinearProgress-bar1Buffer"
                                    sx={{ borderRadius: "10px", height: "10px" }}
                                />
                            </div>
                            <p className="text-semiGray font-extralight text-[16px] mt-1">
                                6 days remaining until your plan requires update
                            </p>
                        </div>
                    </div>

                    {/* upgrade plan & cancel subscription*/}
                    <div className="mt-7 flex justify-start gap-4">
                        <SolidButton onClick={() => console.log("open modal")} title="upgrade plan" />
                        <OutlinedButton title="cancel subscription" />
                    </div>
                </div>

                {/* Payment Methods */}
                <div className="border-gray-300 border-[1px] rounded-md p-6 mt-6">
                    {/*Add Card Section*/}
                    <div className="flex justify-between items-center">
                        <h5 className="text-darkGray font-semibold text-xl">Payment Methods</h5>
                        <SolidButton onClick={() => console.log("open modal")} title={`${'\u002B'} add card`} />
                    </div>

                    {/*Payment Card */}
                    <div className="flex justify-between items-center border-gray-300 border-[1px] rounded-md p-6 mt-6">

                        <div className="flex flex-col">
                            <img src="/icons/visaLogo.png" width={80} />

                            <div className="flex items-center justify-center gap-2 mt-4">
                                <p className="text-darkGray font-medium text-lg">
                                    Mansoor Akhter
                                </p>
                                <StatusButton title="primary" bgColor="#E7E7FF" textColor="#696CFF" />
                            </div>
                            <p className="text-semiGray font-extralight text-[16px] mt-2">**** **** **** 6542</p>
                        </div>

                        <div className="flex flex-col justify-between ">
                            <span className="flex gap-3">
                                <OutlinedButton title="edit" />
                                <OutlinedButton title="delete" />
                            </span>
                            <p className="text-semiGray font-extralight text-[14px] self-end mt-7">Card expires at 10/27</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-gray-300 border-[1px] rounded-md p-6 mt-6">

                        <div className="flex flex-col">
                            <img src="/icons/mastercardLogo.png" width={50} />

                            <div className="flex items-center justify-center gap-2 mt-4">
                                <p className="text-darkGray font-medium text-lg">
                                    Mansoor Akhter
                                </p>
                                <StatusButton title="primary" bgColor="#E7E7FF" textColor="#696CFF" />
                            </div>
                            <p className="text-semiGray font-extralight text-[16px] mt-2">**** **** **** 6542</p>
                        </div>

                        <div className="flex flex-col justify-between ">
                            <span className="flex gap-3">
                                <OutlinedButton title="edit" />
                                <OutlinedButton title="delete" />
                            </span>
                            <p className="text-semiGray font-extralight text-[14px] self-end mt-7">Card expires at 10/27</p>
                        </div>
                    </div>

                    <div className="flex justify-between items-center border-gray-300 border-[1px] rounded-md p-6 mt-6">

                        <div className="flex flex-col">
                            <img src="/icons/visaLogo.png" width={80} />

                            <div className="flex items-center justify-center gap-2 mt-4">
                                <p className="text-darkGray font-medium text-lg">
                                    Mansoor Akhter
                                </p>
                                <StatusButton title="primary" bgColor="#E7E7FF" textColor="#696CFF" />
                            </div>
                            <p className="text-semiGray font-extralight text-[16px] mt-2">**** **** **** 6542</p>
                        </div>

                        <div className="flex flex-col justify-between ">
                            <span className="flex gap-3">
                                <OutlinedButton title="edit" />
                                <OutlinedButton title="delete" />
                            </span>
                            <p className="text-semiGray font-extralight text-[14px] self-end mt-7">Card expires at 10/27</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
