<template>
  <div class="w-screen flex justify-between p-40px">
    <div class="flex pl-150px">
      <div class="flex">
        <div class="w-40px h40px">
          <img :src="city" alt="" class="w-full">
        </div>
        <div class="flex flex-col pl-5px font-100 text-12px">
          <span>路飞学城</span>
          <span class="text-10px text-center pt-2px">LuffyCity</span>
        </div>
      </div>
      <div class="flex items">
        <div>免费课</div>
        <div>轻课</div>
        <div>学位课</div>
        <div>题库</div>
        <div>study</div>
      </div>
    </div>
    <div class="flex pr-100px items">
      <div class="flex justify-center align-center">
        <div class="w-15px h-15px">
          <img :src="cart" alt="" class="w-full">
        </div>
        <span class="pl-5px">购物车</span>
      </div>
      <div class="flex">
        <div>登录</div>
        <div class="item">注册</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import cart from '@/assets/svg/cart.svg'
import city from '../../assets/svg/flight-city.svg'
</script>

<style lang="less" scoped>
.items {
  > div {
    padding-left: 30px;
    cursor: pointer;
  }
}
.item {
  padding-left: 10px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 1px;
    height: 12px;
    background-color: #000;
    margin-right: 10px;
    top: 5px;
    left: 4px;
  }
}
</style>