<template>
 <div class="rank" ref="rank">
    <scroll class="toplist" ref="scroll">
      <ul>
        <li class="item"  v-for="item in yunTopList" :key="item.id" @click="selectItem(item)">
          <div class="icon">
            <img v-lazy="item.coverImgUrl" width="100" height="100">
          </div>
          <ul class="songlist">
            <li class="song" v-for="(song, index) in item.top" :key="index">
              <span>{{index + 1}}.</span>
              <span>{{song.name}} - {{song.ar[0].name}}</span>
            </li>
          </ul>
        </li>
      </ul>
      <!-- <div class="loading-container" v-show="!yunTopList.length">
        <loading></loading>
      </div> -->
      <div v-show="showLoading" class="loading-content">
        <loading></loading>
      </div>
    </scroll>
    <router-view></router-view>
  </div>
</template>

<script>
import Scroll from '@/components/scroll/scroll'
import Loading from '@/components/loading/loading'
import {getRank} from '@/api/rank'

// "0": 云音乐新歌榜, "1": 云音乐热歌榜, "2": 网易原创歌曲榜, "3": 云音乐飙升榜, "4": 云音乐电音榜,
const rankTypeList = [0, 1, 2, 3, 4, 22, 23]


export default {
  name: 'rank',
  components: {
    Scroll,
    Loading
  },
  data() {
    return {
      // yunTopList: [{id:1}],
      showLoading: false,
      yunTopList: []
    }
  },
  methods: {
    selectItem(item) {
      console.log(item)
    },
    rankListInit () {
      rankTypeList.forEach((item, index) =>{
        getRank(item).then((res) => {
          let list = res.data.playlist
          list.top = res.data.playlist.tracks.slice(0, 3)
          this.yunTopList.push(list)
        })
        if (index === rankTypeList.length - 1) {
          this.showLoading = false
        }
      })
    }
  },
  mounted () {
    this.rankListInit()
  }
};
</script>

<style>
.rank .toplist{
    height: 100%;
    overflow: hidden;
    padding-top: 5px
}
.rank .toplist .item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: 0 10px;
    padding: 3px 0;
    height: 100px;
    border-bottom: 1px solid #e4e4e4;
}
.rank .toplist .item .songlist{
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0 20px;
    height: 100px;
    overflow: hidden;
    color: #2E3030;
    font-size: 12Px;
}
.rank .toplist .item .songlist .song {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    line-height: 30px;
}
.rank .toplist .item .icon{
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100px;
    flex: 0 0 100px;
    width: 100px;
    height: 100px;
}
.rank .toplist .item .icon img{
    border-radius: 3Px;
}
</style>
