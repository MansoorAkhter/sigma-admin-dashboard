import Image from "next/image";
import NavigationCarousel from "@/components/NavigationCarousel";
import OutlinedButton from "@/components/shared/OutlinedButton";
import StatusButton from "@/components/shared/StatusButton";
import SolidButton from "@/components/shared/SolidButton";
import SquareIcon from "@/components/shared/SquareIcon";
import { LinearProgress } from "@mui/material";
import { PlusOne } from "@mui/icons-material";
import { Icon } from '@mui/material';
import UserBio from "@/components/UserBio";
import NoticeBox from "@/components/shared/NoticeBox";

// const InfoIcon = ({ title, quantity, icon, name, color, }) => {
//     return (
//         <div className="flex items-center justify-between w-2/4 mx-4">
//             <div className="flex mr-4">
//                 <SquareIcon icon={icon} name={title} color={color} />
//             </div>

//             <div className="flex flex-col justify-center w-full ml-3 transition duration-300">
//                 <span className="font-medium text-xl text-darkGray">{quantity}</span>
//                 <span className="font-medium text-[16px] text-semiGray">{title}</span>
//             </div>
//         </div>
//     )
// }

const BillingAndPlans = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 px-4 pt-7 mb-7">
            {/* Left */}
            {/* User Bio Section */}
            <div className="md:w-[33%]">
                <UserBio />
            </div>

            {/* Right */}
            <div className="flex flex-col w-full md:w-[67%]">
                {/* Top Nav Carousel */}
                <div className="flex justify-center gap-x-4 overflow-auto">
                    <SolidButton onClick={() => console.log("account")} title="account" />
                    <SolidButton onClick={() => console.log("security")} title="security" />
                    <SolidButton onClick={() => console.log("bills & plans")} title="billing & plans" />
                    <SolidButton onClick={() => console.log("notifications")} title="notifications" />
                    <SolidButton onClick={() => console.log("connections")} title="connections" />
                </div>

                {/* Current Plan */}
                <div className="boxStyle">
                    <div className="">
                        <h5 className="heading">Current plan</h5>
                    </div>
                    <div className="flex flex-col md:flex-row pt-5">
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
                            <NoticeBox
                                title="We need your attention!"
                                message="Your plan requires updates"
                            />

                            <div className="flex justify-between mt-5">
                                <span className="text-darkGray font-semibold">Days</span>
                                <span className="text-darkGray font-semibold">24 of 30 Days</span>
                            </div>
                            <div className="mt-2">
                                <LinearProgress
                                    value={63}
                                    variant="buffer"
                                    sx={{
                                        borderRadius: "10px", height: "12px",
                                        '& .MuiLinearProgress-bar1Buffer': { backgroundColor: "#696CFF", borderRadius: "10px" },
                                        '& .MuiLinearProgress-bar2Buffer': { backgroundColor: "#E7E7FF" }
                                    }}
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
                <div className="boxStyle">

                    {/*Add Card Section*/}
                    <div className="flex justify-between items-center">
                        <h5 className="heading">Payment Methods</h5>
                        <SolidButton onClick={() => console.log("open modal")} title={`${'\u002B'} add card`} />
                    </div>

                    {/*Payment Card */}
                    <div className="boxStyle flex flex-col justify-between items-start md:items-center  md:flex-row">

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

                        <div className="flex flex-col justify-between mt-5 md:mt-0">
                            <span className="flex gap-3">
                                <OutlinedButton title="edit" />
                                <OutlinedButton title="delete" />
                            </span>
                            <p className="text-semiGray font-extralight text-[14px] self-start md:self-end mt-7">Card expires at 10/27</p>
                        </div>
                    </div>

                </div>

                {/*Billing Address*/}
                <div class="boxStyle">
                    <div className="flex justify-between items-center">
                        <h5 className="text-darkGray font-semibold text-xl">Billing Address</h5>
                        <SolidButton onClick={() => console.log("open modal")} title="edit address" />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between pt-5">
                        {/* Left */}
                        <table className="table-fixed border-spacing-x-2  border-spacing-y-2 border-separate">
                            <tbody>
                                <tr>
                                    <td className="text-medGray font-medium">Company Name:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">A2Z Creatorz</td>
                                </tr>
                                <tr className="">
                                    <td className="text-medGray font-medium">Billing Email:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">mansoor21st@gmail.com</td>
                                </tr>
                                <tr className="">
                                    <td className="text-medGray font-medium">Tax ID:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">TAX-875623</td>
                                </tr>
                                <tr className="">
                                    <td className="text-medGray font-medium">VAT Number:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">SDF754K77</td>
                                </tr>
                                <tr className="">
                                    <td className="text-medGray font-medium">Billing Address:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">Mominabad Orangi Town, Karachi</td>
                                </tr>
                                <tr className="">
                                    <td className="text-medGray font-medium">VAT Number:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">SDF754K77</td>
                                </tr>
                            </tbody>
                        </table>


                        {/* Right */}
                        <table className="md:self-start md:mt-0 mt-5 border-spacing-x-2  border-spacing-y-2 border-separate">
                            <tbody>
                                <tr>
                                    <td className="text-medGray font-medium">Contact:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">+92 (312) 0123-25055</td>
                                </tr>
                                <tr>
                                    <td className="text-medGray font-medium">Country:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">Pakistan</td>
                                </tr>
                                <tr>
                                    <td className="text-medGray font-medium">State:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">Sindh</td>
                                </tr>
                                <tr>
                                    <td className="text-medGray font-medium">Zip Code:</td>
                                    <td className="text-semiGray font-extralight text-[16px]">75800</td>
                                </tr>
                            </tbody>

                        </table>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default BillingAndPlans;
