export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "上海疆通科技有限公司",
    htmlAttrs: {
      lang: "zh",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      // 百度
      { name: "baidu-site-verification", content: "codeva-PT3yV321fk" },
      // 360
      {
        name: "360-site-verification",
        content: "0220b95b13c51f1a7660a15d6c94f3e0",
      },
      // 必应
      { name: "msvalidate.01", content: "BC3A30D71F43189937E2DB091806B5EF" },
      // 谷歌
      {
        name: "google-site-verification",
        content: "uJUqcqU50MLClkz-RLAd0tdNR3pqCNw46ZyjsO8UlB0",
      },
      // 搜狗
      { name: "sogou_site_verification", content: "NkJCTHtbGR" },
      // 神马
      {
        name: "shenma-site-verification",
        content: "98db2ba1debf9a2cf8f63cb4c78638cd_1690170773",
      },
      { "http-equiv": "Content-Type", content: "text/html;charset=gb2312" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
      {
        name: "seo",
        content:
          "上海疆通、疆通科技、数字孪生、仿真、元宇宙、AR眼镜、低代码、无代码、智能巡检、视觉巡检、视觉制造、远程指挥、工作流、工易魔方、Workflow、Workflow Canvas、数字化转型、精益制造、应急指挥、应急决策、中台、大数据、知识图谱、人脸识别、人工智能、智能家居、非接触、智能接待、智能迎宾、智慧养老、养老院、客流分析、管理平台、智慧安监、智慧监护、智慧看护、智能门锁、不活动感应、门磁、智能化、场景模式、监控、门禁、报警、广播、巡更、LED屏、大屏幕、可视对讲、无线覆盖、安防、互动多媒体、智能建筑、建筑智能化、安防、综合布线、无线通讯、通讯协议、IT/OT、VR、MR、5g、KNX、ZigBee、CAN、BUS、Lora、NB-Iot、蓝牙、WiFi、FOX433、红外、语音音箱、技防、无线。",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["ant-design-vue/dist/antd.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["@/plugins/antd-ui"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
  target: "static",
  ssr: false,
  generate: {
    dir: "docs",
    fallback: false,
  },
};
