import { useState } from "react";
import UserBio from "@/components/UserBio";
import NoticeBox from "@/components/shared/NoticeBox";

import IconButton from '@mui/material/IconButton';
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
                <div className="boxStyle">
                    <h5 className="heading mb-7">Change Password</h5>
                    <NoticeBox
                        title="Ensure that these requirements are met"
                        message="Minimum 8 characters long, uppercase & symbol"
                    />

                    <div className="flex flex-col justify-between md:gap-x-6 md:flex-row">
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
                                            // aria-label="toggle password visibility"
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
                                            aria-label="toggle password visibility"
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
                </div>

            </div>
        </div>);
};

export default Security;
