# 图鸟 UI vue3 uniapp Plugins - 酷炫图标

![TuniaoUI vue3 uniapp](https://resource.tuniaokj.com/images/vue3/market/vue3-banner-min.jpg 'TuniaoUI vue3 uniapp')

[Tuniao UI vue3官方仓库](https://github.com/tuniaoTech/tuniaoui-rc-vue3-uniapp)

该组件一般用于展示图标用作丰富内容的场景

## 组件安装

```bash
npm i tnuiv3p-tn-cool-icon
```

## 组件位置

```bash
tnuiv3p-tn-cool-icon/index.vue
```

## 平台差异说明

| App(vue) | H5  | 微信小程序 | 支付宝小程序 |  ...   |
| :------: | :-: | :--------: | :----------: | :----: |
|    √     |  √  |     √      |      √       | 适配中 |

## 基础使用

- 通过`name`传入图标的名称

```vue
<template>
  <TnCoolIcon name="logo-tuniao" />
</template>
```

## 修改显示图标背景样式

- 通过`type`设置图标背景模式
- 通过`color`可以设置图标的颜色，如果是以`gradient`开头的颜色，可以设置渐变色
- 通过`bg-color`可以设置背景颜色

在不同的模式下，`color`和`bg-color`的作用不同

### 新拟态 - mimic (默认)

- 将`type`设置为`mimic`可以将图标设置为新拟态风格，在该模式下只有`color`的设置生效，`bg-color`不生效

```vue
<template>
  <TnCoolIcon name="logo-tuniao" type="mimic" color="tn-red" />
</template>
```

```vue
<template>
  <TnCoolIcon name="logo-tuniao" type="mimic" color="gradient__cool-5" />
</template>
```

### 圆形 - circle

- 将`type`设置为`circle`可以将图标设置为圆形风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="circle"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="circle"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

### 椭圆 - oval

- 将`type`设置为`oval`可以将图标设置为椭圆风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="oval"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="oval"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

### 方形 - square

- 将`type`设置为`square`可以将图标设置为方形风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="square"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="square"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

### 三角形 - triangle

- 将`type`设置为`triangle`可以将图标设置为三角形风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="triangle"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="triangle"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

### 胶囊 - capsule

- 将`type`设置为`capsule`可以将图标设置为胶囊风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="capsule"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="capsule"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

### 暗黑金边 - dark-goldborder

- 将`type`设置为`dark-goldborder`可以将图标设置为暗黑金边风格，在该模式下`color`和`bg-color`都不生效

```vue
<template>
  <TnCoolIcon name="logo-tuniao" type="dark-goldborder" />
</template>
```

```vue
<template>
  <TnCoolIcon name="logo-tuniao" type="dark-goldborder" />
</template>
```

### 花朵 - flower

- 将`type`设置为`flower`可以将图标设置为花朵风格，在该模式下`color`和`bg-color`都生效

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="flower"
    bg-color="tn-indigo"
    color="tn-white"
  />
</template>
```

```vue
<template>
  <TnCoolIcon
    name="logo-tuniao"
    type="flower"
    bg-color="gradient__cool-1"
    color="tn-white"
  />
</template>
```

## API

### Props

| 参数     | 说明                                                         | 类型   | 默认值  | 可选值                                                       |
| -------- | ------------------------------------------------------------ | ------ | ------- | ------------------------------------------------------------ |
| name     | 图标名称                                                     | String | -       | [图标](https://vue3.tuniaokj.com/zh-CN/component/icon.html)  |
| color    | 图标颜色，具体模式允许设置的说明可查看上方说明，以tn开头使用图鸟内置的[text颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/text.html)，如果是gradient开头则使用图鸟内置的[渐变色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | String | -       | -                                                            |
| bg-color | 背景颜色，具体模式允许设置的说明可查看上方说明，以tn开头使用图鸟内置的[颜色](https://vue3.tuniaokj.com/zh-CN/guide/style/background.html#颜色展示) | String | -       | -                                                            |
| size     | 图标尺寸，默认单位为rpx                                      | String | 100     | -                                                            |
| type     | 图标背景类型                                                 | String | `minic` | `circle` \ `square` \ `oval` \ `triangle` \ `flower` \ `capsule` \ `dark-goldborder` |

### Event

| 事件名 | 说明           | 回调参数 |
| ------ | -------------- | -------- |
| click  | 点击图标时触发 | -        |
