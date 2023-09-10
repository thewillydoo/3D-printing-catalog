import React, { useState } from 'react'
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";

export default function Navbar() {

    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
            text: "Home",
            icon: <HomeIcon />,
          },
          {
            text: "Upload",
            icon: <InfoIcon />,
          },
          {
            text: "Login",
            icon: <CommentRoundedIcon />,
          },
          {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
          },
          {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
          },
    ];

  return (
    <nav>
      <div className="navbar-links-container2">
        <div className="navbar-links-container">
        
            <a href="/" target="_self">Home</a>   
            <a href="/Upload" target="_self">Upload</a>    
            <a href="/Login" target="_self">Login</a>
            <a href="/Contact" target="_self">Contact</a>
            <a href="/Cart" target="_self">
                <BsCart2 className="navbar-cart-icon" />
            </a>
            <button className="primary-button">Download Now</button>
        </div>
        </div>
        <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  )
}
