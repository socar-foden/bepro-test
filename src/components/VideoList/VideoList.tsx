import React from "react";
import { map } from "lodash-es";

import S from "./Video.style";

interface VideoListProps {
  videoList: string[];
  playingIndex: number;
}

const VideoList: React.FC<VideoListProps> = ({ videoList = [] }) => {
  return (
    <S.Ul aria-label="video-list">
      {map(videoList, (item, i) => (
        <S.Li aria-label="video" key={i}>
          {item}
        </S.Li>
      ))}
    </S.Ul>
  );
};

export default VideoList;
