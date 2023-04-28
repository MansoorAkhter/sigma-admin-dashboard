import { useState } from "react";
import ProfileImage from "./ProfileImage";
import { Public_Sans } from 'next/font/google'

const font = Public_Sans({ subsets: ['latin'] })

const IconButton = ({ icon, name }) => {
    return (
        <div className="w-[42px] h-[42px] mr-[6px] hover:bg-gray-100 flex items-center justify-center rounded-full transition duration-300 cursor-pointer">
            {/* <BiBell size={24} color="#627282" /> */}
            <img src={icon} alt={name} width={24} height={24} />
        </div>
    )
}

const Header = () => {
    const [mode, setMode] = useState(true);

    return (
        <main className={font.className}>
            <div className="w-full h-[84px] pt-3 px-4">
                <div className="w-full h-full border-[1px] border-gray-300 rounded-md flex items-center justify-between px-2">

                    {/*Search Button */}
                    <div className="flex items-center cursor-pointer">
                        <IconButton icon="/icons/search.svg" name="search" />
                        <span className="text-gray-400 font-light hidden sm:block">Search (Ctrl+/)</span>
                        {/* <input placeholder="Search (Ctrl+/)" className="placeholder-gray-300 font-light" /> */}
                    </div>

                    <div className="flex items-center">
                        <IconButton icon="/icons/translate.svg" name="translate" />
                        {!mode ? (
                            <button className="" onClick={() => setMode(true)}>
                                <IconButton icon="/icons/sun.svg" name="light mode" />
                            </button>
                        ) : (
                            <button className="" onClick={() => setMode(false)}>
                                <IconButton icon="/icons/moon.svg" name="dark mode" />
                            </button>
                        )}
                        <IconButton icon="/icons/menu.svg" name="menu" />

                        <div>
                            <IconButton icon="/icons/bell.svg" name="notification" />

                            {/* Notification Red Dot */}
                            <div className="w-[11px] h-[11px] bg-rose-500 rounded-full absolute ml-[22px] -mt-[34px] border-solid border-2 border-white" />
                        </div>


                        <ProfileImage />
                    </div>


                </div>
            </div>
        </main>

    );
};

export default Header;
