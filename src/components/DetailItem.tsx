import React from "react";
import { Box, Skeleton } from "@mui/material";

interface Props {
  title: string;
  loading: boolean;
  dataValue?: any;
}

export const DetailItem = (props: Props) => {
  const { title, loading, dataValue } = props;

  return (
    <Box style={{ display: "flex", flexDirection: "row" }}>
      <span>{title}:&nbsp;</span>
      <span>{!loading ? dataValue : <Skeleton width={100} />}</span>
    </Box>
  );
};
