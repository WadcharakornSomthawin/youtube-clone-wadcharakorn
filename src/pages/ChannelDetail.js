import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { Videos, ChannelCard } from "../components";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const { channelId } = useParams();

  useEffect(() => {
    const data = fetchFromAPI(`channels?part=snippet&id=${channelId}`).then(
      (data) => {
        console.log(data);
        setChannelDetail(data.items[0]);
      }
    );

    fetchFromAPI(`search?ChannelId=${channelId}&part=snippet&order=date`).then(
      (data) => {
        console.log(data);
        setVideos(data.items);
      }
    );
  }, [channelId]);
  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,48,184,1) 100%",
            height: "300px",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
      </Box>
      <Box p={2} display="flex">
        <Box sx={{mr:{sm:"100px"}}}>
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Box>
  );
};

export default ChannelDetail;
