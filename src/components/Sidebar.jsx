import { Stack } from "@mui/system";
import { useState } from "react";

import { categories } from "../utils/constant";

// const SelectedCategory = "New";

function Sidebar({ current,setCurrent }) {
  //  const [clicked, SetClicked] = useState("");

  //   const buttonClicked = (id) => {
  //     console.log(id);
  //     SetClicked(id);

  //   };
  //   console.log(clicked);

  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          key={category.name}
          onClick={
            () => setCurrent(category?.name)

            // () => buttonClicked(category?.name)
          }
          className="category-btn"
          style={{
            background: category.name === current && "#FC1503",
            color: "white",
            // background:category.name===SelectedCategory   && '#FC1503'
          }}
        >
          <span
            style={{
              color: category.name === current ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity: category.name === current ? "1" : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
