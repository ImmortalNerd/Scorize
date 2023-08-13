import React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import AirplanemodeActiveIcon from "@mui/icons-material/AirplanemodeActive";
import SearchForm from "./SearchForm";

export default function Search() {
  return (
    <>
      <div className="flex justify-center lg:justify-between min-w-min">
        <div className="flex flex-col my-16 p-16 gap-8 basis-2/3">
          <div>
            <Button
              className="gap-3"
              variant="contained"
              sx={{ borderRadius: "1rem" }}
            >
              <span
                style={{
                  backgroundColor: "white",
                  borderRadius: "1rem",
                  padding: "0.3rem",
                }}
              >
                <AirplanemodeActiveIcon color="primary" />
              </span>
              مهاجرت تضمینی
            </Button>
          </div>
          <h2>
            مهاجرت تضمینی به خارج از کشور
            <br />
            با اسکورایز
          </h2>
          <div>
            <SearchForm />
          </div>
        </div>
        <div className="hidden lg:block">
          <Image src="/flight.png" alt="..." width={622} height={533} />
        </div>
      </div>
    </>
  );
}
