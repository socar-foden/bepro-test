import React from "react";
import { map } from "lodash-es";

import S from "./VideoList.style";
import Video from "../Video/Video";
import { VideoModel } from "../../types/types";

interface VideoListProps {
  videoList: VideoModel[];
  playingIndex: number;
}

const VideoList: React.FC<VideoListProps> = ({ videoList = [] }) => {
  return (
    <S.Ul aria-label="video-list">
      {map(videoList, (video) => (
        <Video video={video} key={video.id} />
      ))}
    </S.Ul>
  );
};

export default VideoList;
