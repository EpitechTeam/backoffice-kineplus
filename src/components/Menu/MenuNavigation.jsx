import React from "react";
import {Divider, Drawer, List} from "@material-ui/core";
import {Inbox, Mail, Close, AccountCircle} from "@material-ui/icons";
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

export function MenuNavigation({user, open, toggleMenu}) {
    return (
        <Drawer
            open={open}
            oonClose={() => toggleMenu(false)}
        >
            <div>
                <ListItem button key={'Close'} onClick={() => toggleMenu(false)}>
                    <ListItemIcon><AccountCircle /></ListItemIcon>
                    <ListItemText primary={user.email} />
                </ListItem>
            </div>
            <Divider />
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <Inbox /> : <Mail />}</ListItemIcon>
                        <ListItemText primary={text} />
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
