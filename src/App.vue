<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon } from 'vant';

export default {
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon
  }
};
</script>

<style>
h2{
  width: 90px;
  font-size: 14Px;
}

.van-cell__title .van-icon {
  font-size: 18px;
}
</style>
