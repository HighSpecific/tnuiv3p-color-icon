<script setup lang="ts">
import TnCoolIcon from '../../packages/src/index.vue'
</script>

<template>
  <view class="content">
    <view class="item-container">
      <view class="item">
        <TnCoolIcon name="logo-tuniao" />
      </view>
      <view class="item">
        <TnCoolIcon name="logo-tuniao" color="tn-red" size="120" />
      </view>
      <view class="item">
        <TnCoolIcon name="logo-tuniao" color="gradient__cool-5" size="80px" />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="circle"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="circle"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="circle"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="oval"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="oval"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="oval"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="square"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="square"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="square"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="triangle"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="triangle"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="triangle"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="capsule"
          bg-color="tn-indigo"
          color="tn-white"
          size="80"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="capsule"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="capsule"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="capsule"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="flower"
          bg-color="tn-indigo"
          color="tn-white"
          size="80"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="flower"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="flower"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="flower"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>

    <view class="item-container">
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="dark-goldborder"
          bg-color="tn-indigo"
          color="tn-white"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="dark-goldborder"
          bg-color="gradient__cool-1"
          color="tn-white"
          size="120"
        />
      </view>
      <view class="item">
        <TnCoolIcon
          name="logo-tuniao"
          type="dark-goldborder"
          bg-color="gradient__green"
          color="gradient__cool-5"
          size="80px"
        />
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.content {
  position: relative;
  width: 100%;
  padding: 30rpx;

  .item-container {
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .item {
      flex-grow: 0;
      flex-shrink: 0;
      margin: 15rpx;
    }
  }
}
</style>
