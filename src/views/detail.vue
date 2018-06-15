<template>
  <div id="app">
    dsads
    <van-cell-group class="item-list">
      <van-tabs v-model="active">
        <van-tab v-for="index in 4" :title="'选项 ' + index" :key="index">
          内容 {{ index }}
        </van-tab>
      </van-tabs>
      ds
      <van-cell is-link icon="gift" title="我收到的礼物" />
    </van-cell-group>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';
import { Tab, Tabs } from 'vant';

export default {
  name: 'detail',
  components: {
    [Tab.name]: Tab,
    Tab, Tabs,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
body {
  background-color: #f8f8f8;

}
h2{
  width: 90px;
  font-size: 14Px;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
