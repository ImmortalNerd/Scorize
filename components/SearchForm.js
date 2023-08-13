import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { Button, MenuItem, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ maxWidth: "fit-content", typography: "body1" }}>
      <TabContext value={value}>
        <div className="mr-8">
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              border: "2px solid #93215f",
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              maxWidth: "max-content",
            }}
          >
            <Tab
              label={<span style={{ color: "white" }}>پذیرش تحصیلی</span>}
              value="1"
              sx={{ backgroundColor: "#93215f", border: "1px solid #93215f" }}
            />
            <Tab
              label={<span>سرمایه گذاری </span>}
              value="2"
              sx={{ border: "1px solid #93215f" }}
            />
            <Tab
              label={<span>مهاجرت کاری </span>}
              value="3"
              sx={{ border: "1px solid #93215f" }}
            />
            <Tab
              label={<span>وقت سفارت </span>}
              value="4"
              sx={{ border: "1px solid #93215f" }}
            />
          </TabList>
        </div>
        <div
          style={{
            border: "2px solid #93215f",
            borderRadius: "1rem",
          }}
        >
          <TabPanel value="1">
            <div className="flex justify-between items-center gap-4">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div className="flex-col md:flex-row">
                  <TextField
                    variant="standard"
                    sx={{ maxWidth: "max-content" }}
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option>کشور موردنظر</option>
                    <option>کانادا </option>
                    <option>آلمان </option>
                  </TextField>
                  <TextField
                    variant="standard"
                    sx={{ maxWidth: "max-content" }}
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option>مقطع موردنظر</option>
                    <option>کارشناسی </option>
                    <option>کارشناسی ارشد </option>
                    <option>دکترا </option>
                  </TextField>
                  <TextField
                    variant="standard"
                    sx={{ maxWidth: "max-content" }}
                    select
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option>رشته موردنظر</option>
                    <option>فنی و مهندسی</option>
                    <option>پزشکی</option>
                  </TextField>
                </div>
              </Box>
              <div>
                <Button variant="contained" sx={{ borderRadius: "0.5rem" }}>
                  <SearchIcon />
                </Button>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="2">سرمایه گذاری</TabPanel>
          <TabPanel value="3">مهاجرت کاری</TabPanel>
          <TabPanel value="4">وقت سفارت</TabPanel>
        </div>
      </TabContext>
    </Box>
  );
}
