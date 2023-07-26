import { buildProps, definePropType } from '@tuniao/tnui-vue3-uniapp/utils'

import type { ExtractPropTypes } from 'vue'

export const coolIconType = [
  'mimic',
  'circle',
  'square',
  'oval',
  'triangle',
  'flower',
  'capsule',
  'dark-goldborder',
]
export type CoolIconType = (typeof coolIconType)[number]

export const coolIconProps = buildProps({
  /**
   * @description 图标名称
   */
  name: String,
  /**
   * @description 图标颜色，以tn开头使用图鸟内置的颜色，如果是gradient开头则使用图鸟内置的渐变色
   */
  color: String,
  /**
   * @description 背景颜色，以tn开头使用图鸟内置的颜色
   */
  bgColor: String,
  /**
   * @description 图标大小，默认单位为rpx
   */
  size: {
    type: String,
    default: '100',
  },
  /**
   * @description 图标类型
   */
  type: {
    type: definePropType<CoolIconType>(String),
    values: coolIconType,
    default: 'mimic',
  },
})

export const coolIconEmits = {
  /**
   * @description 点击事件
   */
  click: () => true,
}

export type CoolIconProps = ExtractPropTypes<typeof coolIconProps>
export type CoolIconEmits = typeof coolIconEmits
