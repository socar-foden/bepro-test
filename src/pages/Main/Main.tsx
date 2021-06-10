import React from "react";

import Player from "../../components/Player/Player";
import VideoList from "../../components/VideoList/VideoList";
import { mockVideoList } from "../../constants";
import S from "./Main.style";

interface MainProps {}

interface MainState {
  videoList: string[];
  playingIndex: number;
}

class Main extends React.Component<MainProps, MainState> {
  state: MainState = {
    videoList: mockVideoList,
    playingIndex: 0,
  };

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
