import CardFA from "../ui/Cards/Card";
import { colors, Grid } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import WarehouseIcon from '@mui/icons-material/Warehouse'; import React from "react";
import SCard from "../ui/Cards/SCard";
import MemoryIcon from '@mui/icons-material/Memory';
import ScienceIcon from '@mui/icons-material/Science';
import WatchIcon from '@mui/icons-material/Watch';
import { User } from "../services/CookieData";
import PublicIcon from '@mui/icons-material/Public';

const icostyle = {
    default: {
        width: '6vh',
        height: '6vh',
        borderRadius: '7px',
    }
};

const serviceico = [
    {
        label: "Users",
        description: "Manage your users settings.",
        styles: { background: "linear-gradient(135deg, #00C9FF 0%, #92FE9D 100%)", padding: '2px' },
        icon: <AccountCircleIcon fontSize="small" style={{ ...icostyle.default }} />, // Correct the usage here
    },
    {
        label: "Resources",
        description: "Manage your current account's billing method.",
        styles: { background: "linear-gradient(135deg, #FF5F6D 0%, #FFC371 100%)", padding: '2px' },
        icon: <WarehouseIcon fontSize="small" style={{ ...icostyle.default }} />,
    },
    {
        label: "Computes",
        description: "Manage Computer Servers",
        styles: { color: 'aqua' },
        icon: <MemoryIcon />
    },
    {
        label: "Labs",
        description: "Labs for everyone",
        styles: { color: 'lightpink' },
        icon: <ScienceIcon />
    },
    {
        label: "Scheduler",
        description: "Manage Session Time of labs and resources.",
        styles: { background: "linear-gradient(135deg, rgb(63 45 60) 0%, rgb(200 83 229) 100%)", color: "" },
        icon: <WatchIcon style={{ ...icostyle.default }} />
    },
    {
        label: "Manage Website",
        description: "Manage component of all websites.",
        styles: {color: 'blue'},
        icon: <PublicIcon />
    }
];

console.log(User.username)

const Dashboard = () => {
    return (
        <div className="m-4">
            <div className="grid-rows-2">
                <div className="row-span-1">
                    <div className="text-lg p-2">Welcome, {User.username}</div>
                </div>
                <div className="columns-12 grid grid-flow-col space-x-3 p-1">
                    <div className="col-span-6 block border-[0.1px] rounded-sm border-opacity-[0.1]">
                        <div className="text-lg p-3">Manage Cloud Services </div>
                        <div className="m-2 p-2" style={{ borderRadius: '14px' }}>
                            <Grid container spacing={2}>
                                {serviceico.map((item, index) => (
                                    <SCard
                                        key={index}
                                        icon={React.cloneElement(item.icon, {
                                            style: { ...icostyle.default, ...item.styles }
                                        })}
                                        title={item.label}
                                        description={item.description ? item.description : ""}
                                    />
                                ))}
                            </Grid>
                        </div>
                    </div>
                    <div className="col-span-6 block border-[0.1px] rounded-sm border-opacity-[0.1] p-1 w-60">
                        <div className="text-lg p-2 border-b-[0.1px]">Notifications:</div>
                        <div className="p-2 block bg-slate-800 text text truncate">This is demo notification for user1</div>
                    </div>
                </div>
                <div className="row-span-1"></div>
            </div>
        </div>
    )
}

export default Dashboard;