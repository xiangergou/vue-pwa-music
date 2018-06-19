<template>
<div class="wrapper">
    <div id="bg" class="bg">
        <div class="bg-cover"></div>
    </div>
    <div class="title">
        <div class="music-info">
            <div class="song" id="songName"></div>
            <div class="artist" id="artist"></div>
        </div>
    </div>
    <div class="play-board">
        <img id="needle" class="play-needle pause-needle" src="../../assets/img/play_needle.png"/>

        <div class="disk-bg"></div>
        <div class="disk-cover disk-cover-animation" style="display: none">
            <img class="album" src="../../assets/img/placeholder_disk_play_song.png"/>
            <img class="disk-border" src="../../assets/img/play_disc.png"/>
        </div>
        <div class="disk-cover disk-cover-animation">
            <img class="album" src="../../assets/img/placeholder_disk_play_song.png"/>
            <img class="disk-border" src="../../assets/img/play_disc.png"/>
        </div>
        <div class="disk-cover disk-cover-animation" style="display: none">
            <img class="album" src="../../assets/img/placeholder_disk_play_song.png"/>
            <img class="disk-border" src="../../assets/img/play_disc.png"/>
        </div>
        <audio id="player" :src="song.src" ref="myPlayer"></audio>
        <div class="footer">
            <div class="process" id="process">
                <span id="currentTime">00:00</span>

                <div class="process-bar">
                    <div class="rdy"></div>
                    <div class="cur">
                        <span id="processBtn" class="process-btn c-btn"></span>
                    </div>
                </div>
                <span id="totalTime">00:00</span>
            </div>
            <div class="control" id="controls">
                <span class="c-btn loop-btn" @click="ctx.loop()"></span>
                <span class="pre c-btn" @click="ctx.prev()"></span>
                <span class="play c-btn" @click="play()"></span>
                <span class="pause c-btn" @click="ctx.pause()" style="display: none"></span>
                <span class="next c-btn" @click="ctx.next()"></span>
                <span class="c-btn list-btn" @click="ctx.showPlayList()"></span>
            </div>
        </div>
    </div>
    <div class="play-list" id="playList">
        <div class="list-title">播放列表（<span id="playListCount">0</span>）</div>
        <ul class="list-content" id="listContent">
        </ul>
    </div>
</div>
  <!-- <div class="container">
    <header>
      <span>返回</span>
      <div class="title">
        <p>herat link</p>
        <span>Junck</span>
      </div>
      <div>
        分享
      </div>
    </header>
    <div class=""></div>
    <footer>
      <span>单曲</span>
      <span>上</span>
      <span>播放</span>
      <span>下</span>
      <span>列表</span>
    </footer>
  </div> -->
</template>

<script>
  export default {
    data(){
      return {
        statusFlag: 1,
        audio: '',
        song: {
          src: 'http://m10.music.126.net/20180616225256/a0741d1613e602adc443c030b83b64de/ymusic/bfc0/fd9d/7497/b08016e5cdc1860334ddb24579cebf74.mp3'
        }
      }
    },
    methods: {
      play () {
        console.log(this.statusFlag)
        this.statusFlag == true ? this.$refs.myPlayer.play() : this.$refs.myPlayer.pause()
        this.statusFlag *= -1
      }
    },
    mounted () {
      this.audio = document.querySelector('#player')
    }
  }
</script>

<style scoped>
@keyframes rotate-disk {
    100% {
        transform: rotateZ(360deg);
    }
}

@-webkit-keyframes rotate-disk {
    100% {
        -webkit-transform: rotateZ(360deg);
    }
}

html,body{
    margin: 0px;
    height: 100%;
    width: 100%;
}

.wrapper{
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
}

.bg {
    background: #a0a0a0 center;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 110%;
    width: 110%;
    margin: -5%;
    background-size: cover;
    filter: url(../../assets/img/blur.svg#blur);
    -webkit-filter: blur(20px);
    -moz-filter: blur(20px);
    filter: progid:DXImageTransform.Microsoft.Blur(PixelRadius=20, MakeShadow=false); /* IE6~IE9 */
    z-index: -1;
}

.bg-cover {
    background: rgba(0, 0, 0, .4);
    height: 100%;
    width: 100%;
}

.title {
    color: #fff;
    position: absolute;
    top: 0px;
    left: 0px;
    height: 10%;
    width: 100%;
    z-index: 11;
    background-color: rgba(253, 253, 253, 0.05);
}

.title .music-info {
    padding: 0 20px;
    margin: 0px auto;
    box-sizing: border-box;
    width: 100%;
    overflow: hidden;
}

.music-info .song, .artist {
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 18px;
    font-weight: lighter;
    margin: 8px;
}

.music-info .artist {
    font-size: 14px;
    color: #C8C0CC;
    margin-top: 4px;
}

.play-board {
    position: absolute;
    overflow: hidden;
    top: 10%;
    width: 100%;
    height: 90%;
    color: white;
}

.disk-bg {
    width: 282px;
    height: 282px;
    position: absolute;
    left: 50%;
    top: 64px;
    margin: 0px -141px;
    background-color: rgba(251, 251, 251, 0.08);
    border-radius: 141px;
}

.disk-cover {
    width: 280px;
    height: 280px;
    position: absolute;
    left: 50%;
    top: 65px;
    margin: 0% -140px;
}

.disk-cover-animation {
    animation: rotate-disk 20s infinite normal linear;
    animation-play-state: paused;
    -webkit-animation: rotate-disk 20s infinite normal linear;
    -webkit-animation-play-state: paused;
}

.disk-transition {
    transition: left 0.8s ease-in-out;
    -webkit-transition: left 0.8s ease-in-out;
}

.disk-cover img {
    display: block;
    width: 100%;
}

.disk-cover .album {
    width: 68%;
    margin: 16%;
}

.disk-cover .disk-border {
    position: absolute;
    top: 0px;
}

.play-needle {
    position: absolute;
    top: -23px;
    left: 50%;
    margin: 0px -12px;
    z-index: 10;
    width: 100px;
    transform-origin: 20px 20px;
    transition: transform 0.4s;
    -webkit-transform-origin: 20px 20px;
    -webkit-transition: -webkit-transform 0.4s;
}

.pause-needle {
    transform: rotateZ(-25deg);
    -webkit-transform: rotateZ(-25deg);
}

.resume-needle {
    transform: rotateZ(0deg);
    -webkit-transform: rotateZ(0deg);
}

#player {
    display: none;
}

.c-btn {
    background-position: center;
    display: inline-block;
    -webkit-filter: brightness(0.9);
}

.c-btn:hover {
    -webkit-filter: brightness(1);
}

.process {
    width: 350px;
    height: 50px;
    position: absolute;
    bottom: 100px;
    margin: 0px -175px;
    left: 50%;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;

}

.process .process-bar {
    position: absolute;
    left: 36px;
    width: 280px;
    margin-top: 5px;
    background-color: #615D5C;
}

.process-bar .rdy {
    background-color: #B1ADAC;
    height: 2px;

}

.process-bar .cur {
    background-color: #FB0D0D;
    height: 2px;
    position: absolute;
    top: 0;
    left: 0;
}

.cur .process-btn {
    cursor: pointer;
    background-image: url(../../assets/img/process_btn.png);
    background-size: cover;
    position: absolute;
    top: -9px;
    right: -13px;
    width: 22px;
    height: 22px;
    margin-left: -11px;
}

.process > span:first-child {
    position: absolute;
    left: 0px;
}

.process > span:last-child {
    position: absolute;
    right: 0px;
}

.control {
    position: absolute;
    text-align: center;
    width: 350px;
    bottom: 10px;
    left: 50%;
    margin: 0px -175px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 10px;
}

.control .c-btn {
    cursor: pointer;
    background-position:center;
    background-size: contain;
    width: 50px;
    height: 50px;
}

.control .c-btn.pre {
    background-image: url(../../assets/img/play_btn_prev.png);
}

.control .c-btn.play, .c-btn.pause {
    width: 70px;
    height: 70px;
}

.control .c-btn.play {
    background-image: url(../../assets/img/play_rdi_btn_play.png);
}

.control .c-btn.pause {
    background-image: url(../../assets/img/play_rdi_btn_pause.png);
}

.control .c-btn.next {
    background-image: url(../../assets/img/play_btn_next.png);
}

.control .c-btn.list-btn,.control .c-btn.loop-btn {
    width: 32px;
    height: 32px;
}

.control .c-btn.list-btn{
    background-image: url(../../assets/img/play_icn_src.png);
}

.control .c-btn.loop-btn {
    position: relative;
    background-image: url(../../assets/img/play_icn_loop.png);
}

.control .c-btn.loop-btn.active:after {
    content: '1';
    position: absolute;
    top: 14px;
    font-size: 12px;
    left: 14px;
}

.play-list {
    background: #fff;
    position: fixed;
    width: 100%;
    height: 60%;
    max-height: 390px;
    margin: 0 auto;
    bottom: -60%;
    overflow: hidden;
}

.play-list .list-title {
    position: relative;
    background: inherit;
    text-align: center;
    border-bottom: #ccc solid 1px;
    height: 20px;
    margin: 0px auto;
    font-size: 20px;
    padding: 15px;
}

.play-list ul.list-content {
    margin: -20px 0 0 0;
    height: 100%;
    width: 102%;
    padding: 20px 4% 0 0;
    overflow-x: hidden;
    overflow-y: scroll;
}

ul.list-content > li {
    height: 16px;
    border-bottom: #E2DFDF solid 1px;
    font-size: 16px;
    padding: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

ul.list-content > li > span {
    font-size: 14px;
    color: #A0A0A0;
    overflow: hidden;
}

li.active, li.active > span {
    color: #CF3D3A !important;
}

.song-play {
    display: inline-block;
    width: 17px;
    height: 15px;
    margin-right: 5px;
    background-size: cover;
    background-image: url("../../assets/img/song_play_icon.png");
}

@media screen and (max-height: 650px) {
    .process {
        width: 320px;
        height: 20px;
        position: absolute;
        margin: 0px -160px;
    }

    .process .process-bar {
        left: 40px;
        width: 240px;
    }

    .disk-bg {
        width: 252px;
        height: 252px;
        position: absolute;
        left: 50%;
        top: 50px;
        margin: 0px -126px;
        background-color: rgba(251, 251, 251, 0.08);
        border-radius: 126px;
    }

    .disk-cover {
        width: 250px;
        height: 250px;
        left: 50%;
        top: 52px;
        margin: 0px -125px;
    }

    .play-needle {
        top: -20px;
        margin: 0px -12px;
        width: 85px;
        transform-origin: 16px 16px;
    }

    .control .c-btn {
        width: 45px;
        height: 45px;
    }

    .control .c-btn.play, .c-btn.pause {
        width: 62px;
        height: 62px;
    }

    .control .c-btn.list-btn,.control .c-btn.loop-btn {
        width: 36px;
        height: 36px;
    }

    .cur .process-btn {
        width: 20px;
        height: 20px;
    }
}
</style>