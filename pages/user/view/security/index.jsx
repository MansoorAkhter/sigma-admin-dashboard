import { useState } from "react";
import UserBio from "@/components/UserBio";
import NoticeBox from "@/components/shared/NoticeBox";
import SolidButton from "@/components/shared/SolidButton";

import IconButton from '@/components/shared/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

const Security = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    return (
        <div className="flex flex-col md:flex-row gap-4 px-4 pt-7 mb-7">
            {/* Left */}
            <div className="w-full md:w-[33%]">
                <UserBio />
            </div>

            {/* Right */}
            <div className="flex flex-col w-full md:w-[67%]">
                {/* Change Password */}
                <div className="boxStyle">
                    <h5 className="heading mb-7">Change Password</h5>
                    <NoticeBox
                        title="Ensure that these requirements are met"
                        message="Minimum 8 characters long, uppercase & symbol"
                    />

                    {/* Inputs */}
                    <div className="flex flex-col justify-between mb-6 md:gap-x-6 md:flex-row">
                        {/* New Password */}
                        <FormControl sx={{ mt: 3, width: '100%' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"
                                sx={{ zIndex: 1, backgroundColor: 'white', pr: 0.6 }}>
                                New Password
                            </InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>

                        {/*Confirm New Password */}
                        <FormControl sx={{ mt: 3, width: '100%' }} color="primary" variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password"
                                sx={{ zIndex: 1, backgroundColor: 'white', pr: 0.6 }}>
                                Confirm New Password
                            </InputLabel>

                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                    </div>

                    <SolidButton title="change password" />
                </div>

                {/* Two-step verification */}
                <div className="boxStyle">
                    <h5 className="heading mb-2">Two-step verification</h5>
                    <p className="text-medGray text-sm font-extralight">
                        Keep your account secure with authentication step.
                    </p>
                    <h5 className="text-darkGray font-semibold mt-6">SMS</h5>

                    <div className="flex items-center justify-between border-b-[1px] mt-2 pb-1.5">
                        <p className="text-semiGray font-light text-[17px]">+1(968) 819-2547</p>
                        <span className="flex gap-x-1">
                            <IconButton
                                name="edit"
                                icon="/icons/edit.svg"
                                onClick={() => console.log("Edit")}
                                size={18}
                            />
                            <IconButton
                                name="delete"
                                icon="/icons/trash.svg"
                                onClick={() => console.log("Delete")}
                                size={18}
                            />
                        </span>
                    </div>

                    <p className="text-medGray text-[16px] font-extralight mt-6">
                        Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in. <span className="hover:text-primary cursor-pointer" onClick={() => console.log("Learn more....")}>Learn more.</span>
                    </p>

                </div>
            </div>
        </div>);
};

export default Security;
