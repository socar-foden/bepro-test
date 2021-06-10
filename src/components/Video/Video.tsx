import React from "react";

import { VideoModel } from "../../types/types";
import S from "./Video.style";

interface VideoProps {
  video: VideoModel;
}

const Video: React.FC<VideoProps> = ({ video }) => {
  return <S.Li aria-label="video">{video.url}</S.Li>;
};

export default Video;
