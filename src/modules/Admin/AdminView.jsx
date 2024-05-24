import { MainLogo } from "@assets/index";
import { ButtonComp, IconComp } from "@components/index";
import LeftMenuComp from "@components/LeftMenuComp";
import { Colors } from "@core/Colors";
import { Box, Button, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
const drawerWidth = 240;

export default function AdminView() {
    return (
        <LeftMenuComp />
    );
}