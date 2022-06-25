import React, { Fragment, useState } from "react";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { Chip, Grid, Link, Skeleton, Typography } from "@mui/material";
import { QueryType, queryData } from "../../../query";
import {
  CellType,
  LaunchesPastData,
  ListType,
  PastData,
} from "../../../definition";
import { CustomLink } from "components/Link";

const Past = () => {
  const defaultColumns = [
    {
      flex: 0.25,
      field: "id",
      headerName: "ID",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap variant="body2">
            {row.id}
          </Typography>
        );
      },
    },
    {
      flex: 0.25,
      field: "mission_name",
      headerName: "mission_name",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap variant="body2">
            {row.mission_name}
          </Typography>
        );
      },
    },
    {
      flex: 0.25,
      field: "launch_date_local",
      headerName: "launch_date_local",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap variant="body2" title={row.launch_date_local}>
            {row.launch_date_local}
          </Typography>
        );
      },
    },
    {
      flex: 0.25,
      field: "launch_site",
      headerName: "launch_site",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography
            noWrap
            variant="body2"
            title={row.launch_site.site_name_long}
          >
            {row.launch_site.site_name_long}
          </Typography>
        );
      },
    },
    {
      flex: 0.25,
      field: "link",
      headerName: "Link",
      renderCell: ({ row }: CellType) => {
        return <CustomLink type={ListType.Past} data={row} />;
      },
    },
    {
      flex: 0.25,
      field: "rocket",
      headerName: "Rocket",
      renderCell: ({ row }: CellType) => {
        return (
          <Fragment>
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-start",
                flexDirection: "column",
              }}
            >
              <Typography noWrap variant="body2">
                RocketType:{" "}
                <span style={{ color: "#007eff" }}>
                  {row.rocket.rocket_type}
                </span>
              </Typography>
              <Typography noWrap variant="body2">
                RocketName:{" "}
                <span style={{ color: "#007eff" }}>
                  {row.rocket.rocket_name}
                </span>
              </Typography>
            </Box>
          </Fragment>
        );
      },
    },
    {
      flex: 0.25,
      field: "details",
      headerName: "Details",
      renderCell: ({ row }: CellType) => {
        return (
          <Typography noWrap variant="body2" title={row.details}>
            {row.details}
          </Typography>
        );
      },
    },
    {
      flex: 0.25,
      field: "launch_success",
      headerName: "LaunchSuccess",
      renderCell: ({ row }: CellType) => {
        const tip = row.launch_success ? "success" : "error";
        return <Chip label={tip} color={tip} />;
      },
    },
  ];

  const [pageSize, setPageSize] = useState<number>(3);
  const [data, setData] = useState<PastData[] | undefined>([]);
  const [loading, setLoading] = useState<boolean>(true);
  queryData(QueryType.PAST)
    .then((res: Response) => res.json())
    .then((res: LaunchesPastData) => {
      let result: PastData[] | undefined = res.data.launchesPast;
      setLoading(false);
      if (result && result.length > 0) {
        setData(result);
      }
    });

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={{ xs: "flex-start", sm: "center" }}
        flexDirection={{ xs: "column", sm: "row" }}
        marginBottom={4}
      ></Box>
      {loading && (
        <Box sx={{ width: "100%" }}>
          <Skeleton />
          <Skeleton animation="wave" />
          <Skeleton animation={false} />
        </Box>
      )}
      {!loading && (
        <DataGrid
          autoHeight
          rowHeight={200}
          disableColumnMenu
          //@ts-ignore
          rows={data}
          pageSize={pageSize}
          disableSelectionOnClick
          columns={defaultColumns}
          rowsPerPageOptions={[3, 25, 50]}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        />
      )}
    </Box>
  );
};

export default Past;
