<script lang="ts" setup>
import TnIcon from '@tuniao/tnui-vue3-uniapp/components/icon/src/icon.vue'
import { coolIconEmits, coolIconProps } from './types'
import { useCoolIconCustomStyle } from './composables'

const props = defineProps(coolIconProps)
const emits = defineEmits(coolIconEmits)

const { ns, gradientIcon, coolIconStyle, coolIconBgClass, coolIconBgStyle } =
  useCoolIconCustomStyle(props)

// 图标点击事件
const iconClickHandle = () => {
  emits('click')
}
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
export default {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true,
  },
}
</script>
// #endif

<template>
  <view
    :class="[ns.b(), ns.m(type)]"
    :style="coolIconStyle"
    @tap.stop="iconClickHandle"
  >
    <view :class="[coolIconBgClass]" :style="coolIconBgStyle" />
    <view :class="[ns.e('icon')]">
      <TnIcon
        :name="name"
        :color="type !== 'dark-goldborder' ? color : 'tn-orangeyellow'"
        :transparent="gradientIcon"
        :transparent-bg="color"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './theme-chalk/index.scss';
</style>
