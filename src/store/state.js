import {playMode} from 'common/js/config'

const state = {
  singer: {}, // 歌手页面点击某歌手传入下个页面的歌手数据
  playing: false, // 播放器播放状态
  fullScreen: false, // 播放器全屏还是缩小
  playlist: [], // 播放列表
  sequenceList: [], // 顺序播放列表
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放索引
}

export default state