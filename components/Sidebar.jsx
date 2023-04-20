import Link from "next/link";
import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu, useProSidebar } from 'react-pro-sidebar';
import { HiHome } from "react-icons/hi2";
import { AiFillSetting, AiFillSafetyCertificate, AiFillUnlock } from "react-icons/ai";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { RiPagesFill } from "react-icons/ri";
import { CgMenuBoxed } from "react-icons/cg";
import { MdSystemUpdateAlt } from "react-icons/md";

const Item = ({ title, to, selected, setSelected, icon }) => {
    return (
        <Link href={to}>
            <MenuItem
                active={selected === title}
                className="text-gray-300"
                onClick={() => setSelected(title)}
                icon={icon}
            >
                <div className="text-lg font-medium">{title}</div>
            </MenuItem>
        </Link>
    )
}

const SidebarMenu = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    const { collapseSidebar } = useProSidebar();
    return (
        <div className="flex h-full overflow-auto scrollbar-hide sticky top-0 left-0">
            <Sidebar collapsed={isCollapsed}
                // backgroundColor="grey"
                transitionDuration={300}
            >
                <Menu iconShape="square"
                    menuItemStyles={{
                        button: ({ level, active, disabled }) => {
                            // only apply styles on first level elements of the tree
                            if (level === 0)
                                return {
                                    color: disabled ? '#fcc4' : '#005',
                                    backgroundColor: active ? '#cfcf' : undefined,

                                };
                        },
                    }}

                >
                    <SubMenu label="Charts" icon={<IoStatsChartSharp />}>
                        <MenuItem> Pie charts </MenuItem>
                        <MenuItem> Line charts </MenuItem>
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


                        <div className="">Setting</div>
                    </div>

                </Menu>
            </Sidebar>
            <main>
                <button onClick={() => collapseSidebar()}>Collapse</button>
            </main>
        </div>

    );
};

export default SidebarMenu;
