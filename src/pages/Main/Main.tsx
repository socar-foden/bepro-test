import React from "react";

import Player from "../../components/Player/Player";
import VideoList from "../../components/VideoList/VideoList";
import { mockVideoList } from "../../constants";
import { VideoModel } from "../../types/types";
import S from "./Main.style";

interface MainProps {}

interface MainState {
  videoList: VideoModel[];
  playingIndex: number;
}

class Main extends React.Component<MainProps, MainState> {
  state: MainState = {
    videoList: mockVideoList,
    playingIndex: 0,
  };

  // handleOnClickVideo = (video) => {};

  render() {
    const { playingIndex } = this.state;

    return (
      <S.Main>
        <Player />
        <VideoList videoList={mockVideoList} playingIndex={playingIndex} />
      </S.Main>
    );
  }
}

export default Main;
