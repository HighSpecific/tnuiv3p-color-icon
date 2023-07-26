import { computed, toRef } from 'vue'
import { useComponentColor, useNamespace } from '@tuniao/tnui-vue3-uniapp/hooks'
import { formatDomSizeValue } from '@tuniao/tnui-vue3-uniapp/utils'

import type { CSSProperties } from 'vue'
import type { CoolIconProps } from '../types'

export const useCoolIconCustomStyle = (props: CoolIconProps) => {
  const ns = useNamespace('cool-icon')

  // 判断是否显示渐变色图标
  const gradientIcon = computed<boolean>(() => {
    if (props.type === 'dark-goldborder') return false
    return props.color?.startsWith('gradient') || false
  })

  // 解析背景颜色
  const [bgColorClass, bgColorStyle] = useComponentColor(
    toRef(props, 'bgColor'),
    'bg'
  )

  // 酷炫图标对应的样式
  const coolIconStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (props.size) {
      const size = formatDomSizeValue(props.size)
      style.height = style.width = size
      style.fontSize = `calc(${size} * 0.6)`

      if (props.type === 'capsule') {
        style.height = `calc(${size} * 0.75)`
        style.fontSize = `calc(${size} * 0.5)`
        style.borderRadius = `calc(${size} * 2)`
      }
      if (props.type === 'flower') {
        style.width = `calc(${size} * 1.2)`
        style.height = `calc(${size} * 0.75)`
        style.borderRadius = `calc(${size} * 2)`
      }
    }

    return style
  })

  // 炫酷图标背景对应的类
  const coolIconBgClass = computed<string>(() => {
    const cls: string[] = [ns.e('bg')]

    if (
      props.type !== 'mimic' &&
      props.type !== 'dark-goldborder' &&
      bgColorClass.value
    )
      cls.push(bgColorClass.value)

    return cls.join(' ')
  })

  // 酷炫图标背景对应的样式
  const coolIconBgStyle = computed<CSSProperties>(() => {
    const style: CSSProperties = {}

    if (bgColorStyle.value) style.backgroundColor = bgColorStyle.value
    if (props.type === 'mimic') style.backgroundColor = 'transparent'
    if (props.type === 'circle' || props.type === 'oval') {
      if (!bgColorClass.value) style.backgroundColor = '#fff'
    }
    if (props.type === 'dark-goldborder') {
      style.backgroundColor = 'var(--tn-color-black)'
      style.border = '3px solid var(--tn-color-orangeyellow)'
      style.boxShadow = '6px 6px 8px var(--tn-color-orangeyellow-light)'
    }

    return style
  })

  return {
    ns,
    gradientIcon,
    coolIconStyle,
    coolIconBgClass,
    coolIconBgStyle,
  }
}
