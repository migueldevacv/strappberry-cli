import { MainLogo } from "@assets/index";
import { useContext, useReducer } from "react";
import { } from "@assets/index";
import { ButtonComp, IconComp } from "@components/index";
import { Box, Button, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Colors } from "@core/Colors";

const drawerWidth = 240;
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_USER_MENUS':
            return { ...state, userMenus: action.payload }
        default:
            return state
    }
}

const initialState = {
    userMenus: [],
}

export default function LeftMenuComp() {
    const [menuState, dispatch] = useReducer(reducer, initialState)


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor: Colors.blue,
                        display: 'flex',
                        justifyContent: 'space-between'
                    },
                }}
                variant="permanent"
                anchor="left"
                color={Colors.blue}
            >
                <div>
                    <div className="p-2">
                        <Toolbar>
                            <img src={MainLogo} style={{ backgroundColor: Colors.blue }} />
                        </Toolbar>
                    </div>
                    <div className="px-5 py-3"><Divider color="white" /></div>
                    <List>
                        {menuState.userMenus.map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton className="!text-white">
                                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                                    <IconComp icon="list" />
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </div>
                <div className="p-2">
                    <div><Divider color="white" /></div>
                    <div className="p-5 !text-white">
                        <button onClick={() => { }} className="flex w-full">
                            <IconComp icon="logout" /> Cerrar sesión
                        </button>
                    </div>
                </div>
            </Drawer>
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Outlet />
            </Box>
        </Box>
    )
} 