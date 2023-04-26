import Link from "next/link";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { HiHome } from "react-icons/hi2";
import { AiFillSetting, AiFillSafetyCertificate, AiFillUnlock } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { HiOutlineMinus, HiMenuAlt3 } from "react-icons/hi";
import { FaUser } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { MdSystemUpdateAlt, MdKeyboardArrowRight } from "react-icons/md";

const Item = ({ title, to, selected, setSelected, icon }) => {
    return (
        // <Link href={to}>
        <MenuItem
            active={selected === title}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <h5 className="text-base font-medium">{title}</h5>
            <link href={to} />
        </MenuItem>
        // </Link>
    )
}

const SidebarMenu = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar } = useProSidebar();

    return (
        <div className="flex h-screen top-0 left-0">

            <Sidebar collapsed={isCollapsed}
                backgroundColor="#2B2C40"
                transitionDuration={300}
            >
                {/* <button onClick={() => { collapseSidebar(); setIsCollapsed(!isCollapsed) }}
                    className="p-[7px] rounded-full bg-white absolute -right-4 z-50">
                    <MdKeyboardArrowRight size={20} className="bg-[#696CFF] rounded-full" color="white" />
                </button> */}
                <button onClick={() => { collapseSidebar(); setIsCollapsed(!isCollapsed) }}
                    className="absolute right-0 z-50"
                >
                    <HiMenuAlt3 size={22} color="grey" />
                </button>

                <div className="flex items-center p-7 sticky top-0 z-10 bg-[#2B2C40]">
                    <img src="/logo.svg" alt="sigma logo" />
                    {!isCollapsed ? <h3 className="text-gray-300 font-extrabold text-2xl ml-2">SIGMA</h3> : undefined}

                </div>




                <Menu iconShape="square"
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            if (level === 0)
                                return {
                                    color: active ? '#fff' : '#9494A6',
                                    backgroundColor: active && '#696CFF',
                                    borderRadius: "11px",
                                    ":hover": { backgroundColor: "rgba(236, 236, 236, 0.05)" }
                                };
                        },
                    }}

                >

                    <div>
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HiHome size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <div className={`flex items-center my-4 text-gray-500 text-xs font-bold ${isCollapsed && "justify-center"}`}>
                            <HiOutlineMinus size={20} className="mr-2" />
                            {!isCollapsed && <div className="">APPS & PAGES</div>}
                        </div>

                        <Item
                            title="Settings"
                            to="/"
                            icon={<AiFillSetting size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                        <SubMenu label="User" icon={<FaUser size={18} />}>
                            <Item
                                title="List"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <SubMenu label="View" >
                                <Item
                                    title="Account"
                                    to="/"
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                                <Item
                                    title="Security"
                                    to="/"
                                    selected={selected}
                                    setSelected={setSelected}
                                />
                            </SubMenu>
                        </SubMenu>

                        <SubMenu label="Roles & Permissions" icon={<AiFillSafetyCertificate size={20} />} >
                            <Item
                                title="Roles"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Permissions"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                        </SubMenu>


                        <SubMenu label="Pages" icon={<RiPagesFill size={20} />} >
                            <SubMenu label="User Profile" ></SubMenu>
                            <SubMenu label="Account Settings" ></SubMenu>
                            <Item
                                title="FAQ"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Help Center"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <Item
                                title="Pricing"
                                to="/"
                                selected={selected}
                                setSelected={setSelected}
                            />
                            <MenuItem>123</MenuItem>
                            <SubMenu label="Miscellaneous" ></SubMenu>
                        </SubMenu>


                        <SubMenu label="Auth Pages" icon={<AiFillUnlock size={20} />} >
                            <SubMenu label="Login" ></SubMenu>
                            <SubMenu label="Register" ></SubMenu>
                            <SubMenu label="Verify Email" ></SubMenu>
                            <SubMenu label="Forgot Password" ></SubMenu>
                            <SubMenu label="Reset Password" ></SubMenu>
                            <SubMenu label="Two Steps" ></SubMenu>
                        </SubMenu>


                        <Item
                            title="Wizard Examples"
                            to="/"
                            icon={<CgMenuBoxed size={22} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Dialog"
                            to="/"
                            icon={<MdSystemUpdateAlt size={22} className="rotate-180" />}
                            selected={selected}
                            setSelected={setSelected}
                        />

                    </div>

                </Menu>
            </Sidebar>
        </div >

    );
};

export default SidebarMenu;
