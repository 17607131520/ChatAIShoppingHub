# React Native 项目插件说明文档

## 核心依赖

### 基础框架
- `react`: React 核心库
- `react-native`: React Native 核心库
- `@react-navigation/native`: React Navigation 核心库
- `@react-navigation/bottom-tabs`: 底部标签导航
- `@react-navigation/native-stack`: 原生堆栈导航

### 工具库
- `axios`: HTTP 请求库
- `lodash`: 实用工具库
- `ahooks`: React Hooks 库

## UI 组件

### 图片相关
- `react-native-fast-image`: 高性能图片加载
- `react-native-image-crop-picker`: 图片裁剪和选择
- `react-native-image-zoom-viewer`: 图片缩放查看
- `react-native-linear-gradient`: 渐变效果
- `react-native-svg`: SVG 支持
- `react-native-video`: 视频播放
- `react-native-video-controls`: 视频控制器

### 交互组件
- `react-native-modal`: 模态框
- `react-native-swiper`: 轮播图
- `react-native-tab-view`: 标签页
- `react-native-table-component`: 表格组件
- `react-native-stickyheader`: 粘性头部
- `react-native-marquee-ab`: 跑马灯效果
- `react-native-signature-canvas`: 签名画板
- `react-native-qrcode-svg`: 二维码生成

### 布局组件
- `react-native-pager-view`: 页面视图
- `react-native-orientation-locker`: 屏幕方向锁定
- `react-native-keep-awake`: 保持屏幕常亮

## 功能模块

### 存储与文件
- `@react-native-community/async-storage`: 本地存储
- `react-native-fs`: 文件系统操作
- `react-native-blob-util`: 文件下载和上传
- `react-native-create-thumbnail`: 缩略图生成
- `react-native-view-shot`: 视图截图

### 网络与通信
- `@react-native-community/netinfo`: 网络状态
- `react-native-udp`: UDP 通信
- `react-native-ping`: 网络 ping
- `react-native-fetch-api`: 网络请求
- `@react-native-cookies/cookies`: Cookie 管理

### 设备功能
- `react-native-device-info`: 设备信息
- `react-native-camera`: 相机功能
- `@react-native-community/cameraroll`: 相册访问
- `react-native-background-timer`: 后台定时器
- `react-native-sound`: 音频播放

### 安全与加密
- `react-native-crypto`: 加密功能
- `react-native-crypto-js`: 加密库
- `react-native-get-random-values`: 随机值生成
- `react-native-randombytes`: 随机字节生成

### 内容展示
- `react-native-markdown-display`: Markdown 渲染
- `react-native-render-html`: HTML 渲染
- `@native-html/table-plugin`: HTML 表格支持
- `react-native-pdf`: PDF 查看
- `react-native-webview`: WebView 组件

### 工具与兼容
- `@react-native/normalize-color`: 颜色标准化
- `react-native-url-polyfill`: URL polyfill
- `react-native-polyfill-globals`: 全局 polyfill
- `@react-native-clipboard/clipboard`: 剪贴板
- `react-native-extra-dimensions-android`: Android 额外尺寸

## 开发工具

### 调试工具
- `react-native-flipper`: Flipper 调试工具
- `redux-flipper`: Redux 调试
- `react-native-logs`: 日志工具

### 开发依赖
- `typescript`: TypeScript 支持
- `@typescript-eslint/eslint-plugin`: TypeScript ESLint 插件
- `@typescript-eslint/parser`: TypeScript 解析器
- `eslint-plugin-react`: React ESLint 插件
- `eslint-plugin-react-hooks`: React Hooks ESLint 插件
- `eslint-plugin-react-native`: React Native ESLint 插件
- `prettier`: 代码格式化

## 注意事项

1. 部分插件可能需要额外的原生配置
2. 某些插件可能需要特定的权限设置
3. 建议定期更新插件版本以获取新特性和安全修复
4. 使用前请查看各插件的官方文档了解详细配置 