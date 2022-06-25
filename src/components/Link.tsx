import React from "react";
import { Box, Link } from "@mui/material";
import { ListType, NextData, PastData } from "definition";
import { resoleVideo } from "utils";

interface Props {
  type: ListType;
  data?: PastData | NextData;
}

export const CustomLink = (props: Props) => {
  const { data, type } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
      }}
    >
      {data?.links.article_link ? (
        <Link
          href={data?.links.article_link}
          underline="none"
          rel="noreferrer"
          target="_blank"
        >
          Article Link
        </Link>
      ) : (
        <span>
          {type === ListType.Past ? "no link" : "article_link:no link"}
        </span>
      )}
      {data?.links.video_link ? (
        <Box>
          <iframe
            width="160"
            height="120"
            src={resoleVideo(data?.links.video_link)}
          ></iframe>
        </Box>
      ) : (
        <span>
          {type === ListType.Past ? "no video" : "video_link:no video"}
        </span>
      )}
    </Box>
  );
};
