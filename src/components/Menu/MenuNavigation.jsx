import React from "react";
import {Divider, Drawer, List} from "@material-ui/core";
import {Close, AccountCircle, Star, Home} from "@material-ui/icons";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

const menuItems = [
    {text: 'Home', icon: Home, path: "/home"},
    {text: 'Profile', icon: AccountCircle, path: "/profile"}
];

export function MenuNavigation({user, open, toggleMenu, history}) {
    return (
        <Drawer
            open={open}
            onClose={() => toggleMenu(false)}
        >
            <div>
                <ListItem button key={'Close'} onClick={() => toggleMenu(false)}>
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText primary={user.email} />
                </ListItem>
            </div>
            <Divider />
            <List>
                {menuItems.map((item) => (
                    <ListItem button key={item.text} onClick={() => history.push(item.path)}>
                        <ListItemIcon>{item.icon ? <item.icon /> : <Star />}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <ListItem button key={'Close'} onClick={() => toggleMenu(false)} alignItems="center">
                <ListItemIcon><Close /></ListItemIcon>
                <ListItemText primary={'CLOSE'} />
            </ListItem>
        </Drawer>
    );
}
