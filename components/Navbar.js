import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Container from "@mui/material/Container";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Menu, MenuItem } from "@mui/material";

const StyledAppBar = styled(AppBar)({
  margin: "2rem",
  width: "auto",
  background:
    "linear-gradient(white, white) padding-box,linear-gradient(to top, #93215f, white) border-box",
  borderRadius: "2rem",
  border: "3px solid transparent",
});

function ResponsiveAppBar() {
  const [activeButton, setActiveButton] = useState("first");
  const handleClick = (e) => {
    const name = e.target.name;
    setActiveButton(name);
    console.log(name);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledAppBar position="relative">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex justify-center">
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              display: { xs: "none", md: "flex" },
              fontWeight: 400,
              color: "black",
              textDecoration: "none",
              paddingLeft: "1rem",
              borderLeft: "2px solid #93215f",
            }}
          >
            اسکورایز | SCORIZE
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Button
              name="first"
              sx={{
                margin: "1rem",
                display: "block",
                fontWeight: "bold",
                color: activeButton === "first" ? "#93215f" : "#ccc",
              }}
              onClick={handleClick}
            >
              رزرو مشاوره
            </Button>
            <Button
              name="second"
              sx={{
                margin: "1rem",
                display: "block",
                fontWeight: "bold",
                display: "flex",
                color: activeButton === "second" ? "#93215f" : "#ccc",
              }}
              onClick={handleClick}
            >
              خدمات ما
              <ExpandMoreIcon />
            </Button>
            <Button
              name="third"
              sx={{
                margin: "1rem",
                display: "block",
                fontWeight: "bold",
                color: activeButton === "third" ? "#93215f" : "#ccc",
              }}
              onClick={handleClick}
            >
              موفقیت‌ها
            </Button>
            <Button
              name="forth"
              sx={{
                margin: "1rem",
                display: "block",
                fontWeight: "bold",
                color: activeButton === "forth" ? "#93215f" : "#ccc",
              }}
              onClick={handleClick}
            >
              بلاگ
            </Button>
            <Button
              name="fifth"
              sx={{
                margin: "1rem",
                display: "block",
                fontWeight: "bold",
                color: activeButton === "fifth" ? "#93215f" : "#ccc",
              }}
              onClick={handleClick}
            >
              درباره ما
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Button
              id="demo-positioned-button"
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleMenuClick}
              variant="text"
              sx={{ borderRadius: "1rem" }}
              className="md:hidden"
            >
              <MenuIcon />
            </Button>
            <Button variant="outlined" sx={{ borderRadius: "1rem" }}>
              <ShoppingBasketOutlinedIcon />
            </Button>
            <Button variant="contained" sx={{ borderRadius: "1rem" }}>
              <Person2OutlinedIcon />
              ثبت نام / ورود
            </Button>
            <div>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                sx={{ top: "10px" }}
              >
                <MenuItem onClick={handleClose}>رزرو مشاوره</MenuItem>
                <MenuItem onClick={handleClose}>خدمات ما </MenuItem>
                <MenuItem onClick={handleClose}>موفقیت‌ها </MenuItem>
                <MenuItem onClick={handleClose}>بلاگ </MenuItem>
              </Menu>
            </div>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
}
export default ResponsiveAppBar;
