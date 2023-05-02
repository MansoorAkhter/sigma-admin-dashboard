import Image from "next/image";
import React from "react";

const ProfileImage = () => {
    return (
        <div>
            <Image src="/images/profileImage.png" alt="profileImage" width={50} height={50}
                className="rounded-full w-[42px] h-[42px]"
            />
            {/*Active User Green Dot */}
            <div className="w-[11px] h-[11px] bg-green rounded-full absolute ml-8 -mt-[13px] border-solid border-2 border-white" />
        </div>
    );
};

export default ProfileImage;
