import React from "react";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";

import Main from "layouts/Main";
import Container from "components/Container";
import { Past, Next } from "./components";
import { RootState } from "store";
import { ListType } from "definition";

const LaunchesView = () => {
  const store = useSelector((store: RootState) => store.launche);

  return (
    <Main>
      <Box bgcolor={"alternate.main"} position={"relative"}>
        <Box paddingBottom={{ xs: 2, sm: 3, md: 4 }}>
          <Container>
            {store.currentType === ListType.Past ? <Past /> : <Next />}
          </Container>
        </Box>
      </Box>
    </Main>
  );
};

export default LaunchesView;
