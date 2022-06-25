import React, { useState } from "react";
import {
  Box,
  CardContent,
  Chip,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import { QueryType, queryData } from "../../../query";
import { LaunchesNextData, ListType, NextData } from "../../../definition";
import { CustomLink } from "components/Link";
import { DetailItem } from "components/DetailItem";

const Next = () => {
  const [data, setData] = useState<NextData | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  queryData(QueryType.NEXT)
    .then((res: Response) => res.json())
    .then((res: LaunchesNextData) => {
      let result: NextData | undefined = res.data.launchNext;
      setLoading(false);
      if (result) {
        setData(result);
      }
    });

  return (
    <CardContent>
      <Grid container>
        <Grid item xs={12} sm={6} lg={8} sx={{ mb: { lg: 0, xs: 4 } }}>
          <Typography variant="body2" sx={{ mb: 3.5, fontWeight: 600 }}>
            Detail Info:
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem title="ID" loading={loading} dataValue={data?.id} />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Launch data"
              loading={loading}
              dataValue={data?.launch_date_local}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Launch site"
              loading={loading}
              dataValue={data?.launch_site.site_name_long}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Links"
              loading={loading}
              dataValue={<CustomLink type={ListType.NEXT} data={data} />}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Rocket type"
              loading={loading}
              dataValue={data?.rocket.rocket_type}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Rocket name"
              loading={loading}
              dataValue={data?.rocket.rocket_name}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Mission name"
              loading={loading}
              dataValue={data?.mission_name}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Details"
              loading={loading}
              dataValue={data?.details}
            />
          </Typography>
          <Typography variant="body2" sx={{ mb: 2 }}>
            <DetailItem
              title="Launch success"
              loading={loading}
              dataValue={
                <Chip
                  label={data?.launch_success ? "success" : "error"}
                  color={data?.launch_success ? "success" : "error"}
                />
              }
            />
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  );
};

export default Next;
