import Link from "next/link";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { HiHome } from "react-icons/hi2";
import { AiFillSetting, AiFillSafetyCertificate, AiFillUnlock } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
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
        <div className="flex h-screen sticky top-0 left-0">


            <Sidebar collapsed={isCollapsed}
                backgroundColor="#2B2C40"
                transitionDuration={300}
            >

                <button onClick={() => { collapseSidebar(); setIsCollapsed(!isCollapsed) }}
                    className="p-[7px] rounded-full bg-white absolute right-0"
                >
                    <MdKeyboardArrowRight size={20} className="bg-[#696CFF] rounded-full" color="white" />
                </button>
                <div className="flex items-center p-6">

                    <img src="/logo.svg" alt="sigma logo" />
                    {isCollapsed ? <h3 className="text-gray-300 font-extrabold text-2xl ml-2">SIGMA</h3> : undefined}

                </div>


                <Menu iconShape="square"
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            if (level === 0)
                                return {
                                    color: active ? '#fff' : '#9494A6',
                                    backgroundColor: active && '#696CFF',
                                };
                        },
                    }}

                >


                    <SubMenu label="Charts" icon={<IoStatsChartSharp />} >
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> MenuItemne charts </MenuItem>
                    </SubMenu>



                    <div className="">
                        <Item
                            title="Dashboard"
                            to="/"
                            icon={<HiHome size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Auth"
                            to="/"
                            icon={<AiFillSetting size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Users"
                            to="/"
                            icon={<FaUser size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Roles & Permissions"
                            to="/"
                            icon={<AiFillSafetyCertificate size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Pages"
                            to="/"
                            icon={<RiPagesFill size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item
                            title="Auth Pages"
                            to="/"
                            icon={<AiFillUnlock size={20} />}
                            selected={selected}
                            setSelected={setSelected}
                        />
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
        </div>

    );
};

export default SidebarMenu;
