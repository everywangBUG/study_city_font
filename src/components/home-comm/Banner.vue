<template>
  <div class="banner p-50px">
    <el-carousel indicator-position="outside" height="1000px">
      <el-carousel-item v-for="item in bannerList.data" :key="item.img_url">
        <a :href="bannerList.link"><img :src="item.img_url" alt="" class="w-100% h-100%"></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script setup lang="ts">
import { getBanner }  from '../../http/banner/banner'
const bannerList = await getBanner()
console.log(bannerList.data)
</script>

<style lang="less" scoped>
.banner{
}
</style>