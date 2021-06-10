import { VideoModel } from "./types/types";
import { v4 as uuidv4 } from "uuid";

export const mockVideoList: VideoModel[] = [
  {
    id: uuidv4(),
    url: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/master.m3u8",
  },
  {
    id: uuidv4(),
    url: "https://multiplatform-f.akamaihd.net/i/multi/will/bunny/big_buck_bunny_,640x360_400,640x360_700,640x360_1000,950x540_1500,.f4v.csmil/index_0_av.m3u8",
  },
  {
    id: uuidv4(),
    url: "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4",
  },
];
