<template>
  <div class="main">
    <!-- 表头 -->
    <HeaderView />
    <!-- 图片 -->
    <div class="container">
      <img src="../static/indexView/logo.png" alt="" />
    </div>
    <!-- 公司简介 -->
    <div class="companyProfile">
      <div class="companyProfileLeft">
        <div class="top">
          <h1>走进疆通</h1>
          <h2>Walk into Jiangtong</h2>
        </div>
        <div style="margin-top: 50px">
          <!-- muted是否静音 -->
          <video autoplay loop :muted="true" width="100%" id="video" ref="video">
            <source
              src="https://jt-video-1312712349.cos.ap-shanghai.myqcloud.com/3d800667944a60e52a85768559fe4ca8_raw.mp4" />
          </video>
        </div>
      </div>
      <div class="companyProfileRight">
        <div>
          <h1>上海疆通</h1>
          <h1>科技有限公司</h1>
          <h4 style="margin-top: 42px">
            上海疆通科技有限公司是高新技术企业、科技型中小企业、上海市华东师范大学毕业生实习基地、上海市人工智能行业协会会员单位，拥有电子与智能化工程专业承包二级资质和ISO9001质量体系认证，公司拥有软硬件自主研发能力，一直致力于智能应急处置系统和数据中心的智能化建设。
          </h4>
          <h4>
            主营业务是以物联传感为依托、以算法模型赋能、以MR图文呈现，实现IT/OT/MR互通的低代码系统集成方案，赋能企业顺利开展数字化转型。
          </h4>
          <div class="bottom">
            <div>
              <span>200</span>
              <div>城市覆盖</div>
            </div>
            <a-divider type="vertical" />
            <div>
              <span>15</span>
              <div>自研产品</div>
            </div>
            <a-divider type="vertical" />
            <div>
              <span>30</span>
              <div>合作企业</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 核心优势 -->
    <div class="coreAdvantage">
      <h1>核心优势</h1>
      <h4>Core advantages</h4>
      <div class="cardAll">
        <a-row :gutter="100">
          <a-col :span="12" v-for="(cardItem, cardIndex) in cardList" :key="cardIndex">
            <div style="display: flex; background-color: #ffffff">
              <img :src="cardItem.img" class="coreAdvantageImg" />
              <div>
                <div class="topTitle">{{ cardItem.title }}</div>
                <div class="bottomTitle">{{ cardItem.data }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
      <div style="position: relative; margin: 50px 0">
        <div style="width: 100%; height: 2px; border-top: 2px dashed #4363d4"></div>
      </div>
      <div class="cardAllTwo">
        <a-row :gutter="100">
          <a-col :span="10" v-for="(cardItem, cardIndex) in cardList2" :key="cardIndex">
            <div style="display: flex; background-color: #ffffff">
              <img :src="cardItem.img" class="coreAdvantageImg" />
              <div>
                <div class="topTitle">{{ cardItem.title }}</div>
                <div class="bottomTitle">{{ cardItem.data }}</div>
              </div>
            </div>
          </a-col>
        </a-row>
      </div>
    </div>
    <!-- 技术能力 -->
    <div class="solution">
      <h1>技术能力</h1>
      <h4>Solution</h4>
      <div class="cardAll">
        <div class="card" v-for="(solutionItem, solutionIndex) in solutionList" :key="solutionIndex">
          <div style="display: flex">
            <img :src="require(`../static/indexView/${solutionItem.img}.png`)" class="SolutionImg" />
            <div>
              <div style="font-weight: 900; font-size: 24px; margin-top: 10px">
                {{ solutionItem.title2 }}
              </div>
              <div class="topTitle">{{ solutionItem.title }}</div>
              <div class="bottomTitle">{{ solutionItem.data }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 我们的服务 -->
    <div class="ourServices">
      <h1>我们的服务</h1>
      <h4>Our services</h4>
      <div>
        <a-tabs v-model:activeKey="activeKey" style="position: relative" @change="handleChange(activeKey)">
          <a-tab-pane :key="ourServicesItem.key" v-for="(ourServicesItem, ourServicesIndex) in ourServicesList"
            :tab="ourServicesItem.tabs">
            <a-row :gutter="[10, 10]" style="margin-top: 2px">
              <a-col :span="8" style="padding: 0">
                <NuxtLink :to="ourServicesItem.activeKeys">
                  <div class="colLeft" @click="handleClick(activeKey)">
                    <img :src="ourServicesItem.img" style="position: absolute; top: 2px; left: 4px" />
                    <div class="colLeftTitle">
                      {{ ourServicesItem.title }}
                    </div>
                    <div class="colLeftLine"></div>
                    <div class="colLeftData">
                      {{ ourServicesItem.data }}
                    </div>
                  </div>
                  <div class="masking" @click="handleClick(activeKey)"></div>
                </NuxtLink>
              </a-col>
              <a-col :span="16">
                <a-row :gutter="[10, 10]">
                  <a-col :span="ourServicesItemSon.span" v-for="(
                      ourServicesItemSon, ourServicesItemSonIndex
                    ) in ourServicesItem.cardData" :key="ourServicesItemSonIndex">
                    <NuxtLink :to="ourServicesItem.activeKeys">
                      <div class="imgDivFirst" @click="handleClick(activeKey)">
                        <img :src="ourServicesItemSon.img" style="position: absolute; top: 2px; left: 4px" />
                        <div class="colLeftTitle">
                          {{ ourServicesItemSon.title }}
                        </div>
                        <div class="colLeftLine"></div>
                        <div class="colLeftData">
                          {{ ourServicesItemSon.data }}
                        </div>
                      </div>
                      <div class="maskingTwo" @click="handleClick(activeKey)"></div>
                    </NuxtLink>
                  </a-col>
                </a-row>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </div>
    </div>
    <!-- 项目案例 -->
    <div class="projectCases">
      <h1>项目案例</h1>
      <h4>Project Cases</h4>
      <a-tabs v-model:activeKey="activeKeyList" tab-position="left">
        <a-tab-pane :key="projectItem.key" :tab="projectItem.tabs" v-for="(projectItem, projectIndex) in projectList">
          <h2 style="color: #ffffff">{{ projectItem.title }}</h2>
          <h3 style="color: #ffffff">{{ projectItem.tabs }}</h3>
          <a-row :gutter="[30, 30]" style="margin-top: 47px; color: #ffffff">
            <a-col v-for="(projectItemSon, projectItemSonIndex) in projectItem.card" :key="projectItemSonIndex"
              :span="12">
              <div class="projectTitle">
                <div>
                  {{ projectItemSon.title }}
                </div>
                <div class="projectValue">
                  {{ projectItemSon.value }}
                </div>
              </div>
            </a-col>
          </a-row>
        </a-tab-pane>
      </a-tabs>
      <a-button class="viewBtn">
        <NuxtLink to="case">查看更多 →</NuxtLink>
      </a-button>
    </div>
    <!-- 新闻资讯 -->
    <div class="news">
      <h1>新闻资讯</h1>
      <h4>News</h4>
      <a-row class="newsMain" style="display: flex">
        <a-col :span="8" class="card" v-for="(NewsItem, NewsIndex) in NewsList" :key="NewsIndex">
          <img src="../static/indexView/timing.png" alt="" /><span class="cardDate">{{
            NewsItem.date
          }}</span>
          <div class="cardTitle">
            {{ NewsItem.title }}
          </div>
          <a :href="NewsItem.href"><a-button>了解更多</a-button></a>
          <img style="margin-top: 40px; width: 100%" :src="NewsItem.img" alt="" />
        </a-col>
      </a-row>
    </div>
    <FooterView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "IndexPage",
});
</script>

<script lang="ts" setup>
import { ref, onMounted } from "vue";
import useRouter from "vue-router";

onMounted(() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    window.location.href =
      "https://jt-phone-1312712349.cos.ap-shanghai.myqcloud.com/index.html"; //手机
  }
});

const activeKey = ref("1");
const activeKeyList = ref("1");
// const viewMoreClick = () => {
//   router.push({ path: "/about" });
// };
const router = new useRouter();
const handleChange = (activeKey) => {
  console.log(typeof activeKey);
  console.log(activeKey);
};
const handleClick = (activeKey) => {
  console.log(activeKey);
  sessionStorage.setItem("activeIndex", JSON.stringify(activeKey));
};
// const handleClick = () => {
//   router.push(
//     {
//       path: "/solution",
//       query: {
//         index: activeKey.value,
//       },
//     },
//     (success) => {
//       activeIndex = success;
//       return activeIndex;
//     },
//     (error) => {
//       console.log(error);
//     }
//   );

//   console.log(activeIndex);

//   sessionStorage.setItem("activeIndex", JSON.stringify(activeIndex));
// };

const cardList = [
  {
    img: require("../static/indexView/coreAdvantage-first.png"),
    title: "专业：全流程最优数字化解决方案",
    data: "我们与西门子中国研究院、中大咨询等国内外顶尖咨询公司合作，为企业提供从数字化咨询到项目实施的一站式方案",
  },
  {
    img: require("../static/indexView/coreAdvantage-fourth.png"),
    title: "降本：利旧纳新",
    data: "物联网设备自主定制研发，支持接入旧设备、旧系统，降本的同时避免受制于供应商",
  },
];

const cardList2 = [
  {
    img: require("../static/indexView/coreAdvantage-third.png"),
    title: "省时：高效部署",
    data: "标准接口、快速开发，部署周期短，开放式云平台无缝整合第三方产品",
  },
  {
    img: require("../static/indexView/coreAdvantage-second.png"),
    title: "放心：服务全国",
    data: "覆盖全国的专业团队，多个全球500强企业案例",
  },
];

const solutionList = [
  {
    img: "solution-first",
    title: "发现问题",
    title2: "感知：",
    data: "超前预警",
  },
  {
    img: "solution-second",
    title: "分析问题",
    title2: "建模：",
    data: "算法推演",
  },
  {
    img: "solution-third",
    title: "解决问题",
    title2: "行为：",
    data: "协同处置",
  },
  {
    img: "solution-fourth",
    title: "复盘问题",
    title2: "重构：",
    data: "IT/OT低代码互联",
  },
];

const ourServicesList = [
  {
    key: "1",
    tabs: "咨询.培训",
    title: "概述：",
    activeKeys: "/solution",
    data:
      "疆通与西门子中国研究院、中大咨询等国内外顶尖咨询公司深度合作，开展相应的咨询和共创课程，大幅节省用户寻找最佳数字方案时间成本，顶级专家齐聚一堂为用户打造可落地的数字化方案",
    img: require("../static/indexView/index-ourServices-first.jpg"),
    cardData: [
      {
        span: "24",
        title: "数字化转型咨询",
        data: "挖掘场景、模型构建、数据打通、价值创造",
        img: require("../static/indexView/index-ourServices-1.jpg"),
      },
      {
        span: "24",
        title: "数字化共创课程",
        data:
          "梳理需求、制定策略（明确创新目标和价值）、原型开发（量身定做可操作应用）、验证推广（现场部署与推广方案）",
        img: require("../static/indexView/index-ourServices-2.jpg"),
      },
    ],
  },
  {
    key: "2",
    tabs: "AR/VR/MR眼镜方案",
    title: "概述：",
    activeKeys: "/solution",
    data:
      "疆通拥有丰富的AR/VR/MR眼镜服务经验，我们可通过软件平台的远程协助、SOP作业流、互动多媒体展示等功能，实现信息可视化、虚实互动，解决信息的时空错位，丰富展示内容",
    img: require("../static/indexView/index-ourServices-second.jpg"),
    cardData: [
      {
        span: "10",
        title: "远程协作类",
        data:
          "人与人分离，后台专家远程支持，可与现场互动并获取第三方数据",
        img: require("../static/indexView/index-ourServices-4.jpg"),
      },
      {
        span: "14",
        title: "作业流SOP类",
        data:
          "人和技术分离，知识固化在设备上，使用者按照眼镜中的图文要求，完成作业，如有违规，自动纠错",
        img: require("../static/indexView/index-ourServices-5.jpg"),
      },
      {
        span: "24",
        title: "数字孪生仿真类",
        data:
          "现实与虚拟镜像同步，AR是人与物理世界实时沟通的桥梁，是数字孪生的最佳运行环境",
        img: require("../static/indexView/index-ourServices-3.jpg"),
      },
    ],
  },
  {
    key: "3",
    tabs: "IT/OT/MR集成",
    title: "概述",
    activeKeys: "/solution",
    data:
      "疆通结合用户的需求，会将多个不同学科的专家组成项目组，合作梳理需求，通过集成融合信息技术（IT）、运营技术（OT）、增强现实技术(AR)，将经验知识、规则规范与数字化服务相结合，为用户定制低代码平台，使智能化场景采用图形拖拽的方式即可实现智能场景落地，助力数字场景规模化应用",
    img: require("../static/indexView/index-ourServices-third.jpg"),
    cardData: [
      {
        span: "24",
        title: "电气火灾超前预警处置平台",
        data:
          "电气火灾占比最高，提前预警至关重要。紧急情况发生后，需要迅速分派资源、做出最优决策，并监督处置行动，以及优化事后流程。通过极早期电气火灾预警，形成了闭环管理，包括预警、决策分析、指导监督",
        img: require("../static/indexView/index-ourServices-6.jpg"),
      },
      {
        span: "24",
        title: "合规作业预警处置平台",
        data:
          "合规监理在工业过程中是八大作业最重要的一个环节。我们采用合规预警处置平台联合机器人的方式协同进行监理，杜绝人为疏漏出现的隐患。应急平台集成事前预警，事中监督以及事后回溯的一套标准闭环管理流程",
        img: require("../static/indexView/index-ourServices-7.jpg"),
      },
    ],
  },
  {
    key: "4",
    tabs: "数据中心智能化建设服务",
    title: "概述",
    activeKeys: "/solution",
    data:
      "所有的数字化建设都是建⽴在数据处理的基础之上，数据中⼼的建造专业性要求极⾼，出于成本考虑，有时还会出现新旧系统搭建的需求，这种需求更是难上加难，疆通拥有多年数据中⼼成功建设经验，可以为企业的数字化建设保驾护航",
    img: require("../static/indexView/index-ourServices-fourth.jpg"),
    cardData: [
      {
        span: "10",
        title: "配电系统",
        data: `UPS、发电机、电气柜……`,
        img: require("../static/indexView/index-ourServices-8.jpg"),
      },
      {
        span: "14",
        title: "环境控制系统",
        data: "精密空调、采暖及通⻛空调、循环⽔系统...",
        img: require("../static/indexView/index-ourServices-9.jpg"),
      },
      {
        span: "24",
        title: "弱电系统",
        data: "智能化系统、综合布线、管线桥架...",
        img: require("../static/indexView/index-ourServices-10.jpg"),
      },
    ],
  },
];
// if (ourServicesList.cardData.length <= 1) {
// }
const projectList = [
  {
    key: "1",
    tabs: "知识图谱",
    title: "某工厂合规方案咨询优化",
    card: [
      {
        title: "背景：",
        value: `工厂大部分检修维流程项目使用外包的方式，对工作人员的安全保障手段目前采用人工安全审核与安全作业指导的方式`,
      },
      {
        title: "痛点：",
        value: `经过咨询发现，目前工厂对有限空间下的作业以及其他特种作业基本没有智能化的监察手段，在发生危险的第一时间没有及时的解决办法`,
      },
      {
        title: "方案：",
        value: `采用监理机器人伴随的方案，将合规与智能化结合，使用深度学习与知识图谱等手段，智能化作业过程，随时溯源`,
      },
      {
        title: "益处：",
        value: `智能化系统，提高工作人员安全性，避免造成人生安全损失，提高了检维修效率`,
      },
    ],
  },
  {
    key: "2",
    tabs: "远程医疗",
    title: "上海120院前救治",
    card: [
      {
        title: "背景：",
        value: `急救中心院前救治需要数字化手段提高救治率`,
      },
      {
        title: "痛点：",
        value: `随车医生遇到部分紧急病情的外援手段单一不直观；无法同时监控多个诊疗器械导致效率低；车载摄像头辅助远程监控视角死角多，效果不佳`,
      },
      {
        title: "方案：",
        value: `采用AR眼镜和无线传输`,
      },
      {
        title: "益处：",
        value: `即插即用，建设周期短，实现第一视角外设接入和的互动会诊`,
      },
    ],
  },
  {
    key: "3",
    tabs: "数据中心建设",
    title: "银行数据中心",
    card: [
      {
        title: "背景：",
        value: `某世界知名的银行数据中心需进行改造，新旧智能化系统并存，部分系统已超10年，部分旧系统已停产需更新，部分旧系统仍需接入新系统`,
      },
      {
        title: "痛点：",
        value: `必须确保不断电不断网，涉及各类新旧子系统和不同品牌，施工和调试难度极大`,
      },
      {
        title: "方案：",
        value: `整体规划，连续几天24小时轮班作业，项目实施精细到分钟，对改造涉及供配电系统、UPS、综合布线、精密空调、环境控制系统、自动化控制系统等每个子系统都设计了多种实施和应急预案`,
      },
      {
        title: "益处：",
        value: `我司在规定时间内零误差超前完成项目`,
      },
    ],
  },
  {
    key: "4",
    tabs: "电气火灾超前预警处置平台",
    title: "某国企电气柜智能诊断及应急处置项目",
    card: [
      {
        title: "背景：",
        value: `电气柜火灾造成停电停产，领导担责，灾后投入大量人力巡检，工作强度大，人力成本高`,
      },
      {
        title: "痛点：",
        value: `烟感报警只能提前几分钟预警电气火灾，救援时间紧；巡检人员技术参差不齐，无法确保及时准确处置电气火灾；人工巡检记录不够准确完整`,
      },
      {
        title: "方案：",
        value: `采用多种传感器，通过AI算法模型，提前几天发现火灾隐患并预警，并将应急预案通知到相关处置人员，接收人按照方案快速执行即可`,
      },
      {
        title: "益处：",
        value: `AI智能提前避险火灾，应急指挥辅助决策，变被动受损为主动巡检`,
      },
    ],
  },
];

const NewsList = [
  {
    date: "2023-07-10",
    title: "疆通科技数字孪生展陈成果亮相2023世界人工智能大会",
    img: require("../static/indexView/news-second.png"),
    href:
      "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486101&idx=1&sn=8454250002409a838eeaaf7bc47c4cd1&chksm=96f732dea180bbc8cfc792d0b0e53e52aa3869dbe6f886b815e403b485b04754ca58964d4ead#rd",
  },
  {
    date: "2023-06-11",
    title: "疆通与行业高端咨询公司深度合作",
    img: require("../static/indexView/news-first.png"),
    href:
      "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247486127&idx=1&sn=561f8b6ac6ae5dcdf461dd158f7c6808&chksm=96f732e4a180bbf2cd5355ec26ccd3997d1165e2e4d8e7da7a067cbd7e54a60570afe767b53a#rd",
  },
  {
    date: "2023-04-17",
    title: "疆通助力上海120急救中心，AR技术让急救加速",
    img: require("../static/indexView/news-third.png"),
    href:
      "https://mp.weixin.qq.com/s?__biz=MzIwMDg4MDQyMA==&mid=2247485912&idx=1&sn=e5bc6ca4479a1b2945caee5224276868&chksm=96f73193a180b8855731f8980921c4987705957f7c9ef0662bca0a71189c69a6965f0cd2558c#rd",
  },
];
</script>

<style scoped>
.main {
  background-color: #f0f2f5;
  text-overflow: ellipsis;
  overflow: hidden;
}

@media only screen and (max-width: 1500px) {
  .companyProfile {
    padding: 60px 15% !important;
  }
}

/* ----------------------logo图片------------------- */
.container img {
  width: 100%;
  height: 100%;
  background: linear-gradient(192deg, #ffffff 0%, #f7f8fe 0%, #6491f6 100%);
}

/* ----------------------公司简介---------------- */

.companyProfile {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  display: flex;
  padding: 60px 20%;
}

/* 公司简介左侧边 */
.companyProfileLeft {
  width: 50%;
  background: #f7f7f7;
}

/* 左侧边标题 */
.companyProfileLeft .top {
  background-color: #f7f7f7;
}

.companyProfileLeft h1 {
  font-size: 40px;
  color: #333333;
  line-height: 56px;
  margin: 0;
  font-weight: bold;
}

.companyProfileLeft h2 {
  font-size: 26px;
  color: #cccccc;
  line-height: 36px;
  margin: 0;
}

/* 公司简介右侧边 */
.companyProfileRight {
  width: 50%;
  background: #f7f7f7;
  border-top: 5px solid #294dce;
  padding: 40px 0 40px 50px;
}

/* 右侧边标题 */
.companyProfileRight h1 {
  letter-spacing: 10px;
  color: #333333;
  font-size: 50px;
  margin: 0;
  font-weight: bold;
}

/* 文字内容 */
.companyProfileRight h4 {
  text-indent: 2em;
  font-weight: 400;
  color: #333333;
  line-height: 35px;
  font-weight: 400;
}

/* 底部内容 */
.companyProfileRight .bottom {
  height: 100px;
  display: flex;
}

.companyProfileRight .bottom span {
  font-size: 46px;
  color: #294dce;
  font-weight: bold;
}

.companyProfileRight .bottom div {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}

.companyProfileRight>.ant-divider,
.ant-divider-vertical {
  height: 60px !important;
  background-color: #e9e9e9;
  margin: 20px 40px 0;
}

/* --------------------------- 核心优势 ------------------------------ */
.coreAdvantage {
  width: 100%;
  height: 100%;
}

.coreAdvantage h1 {
  padding: 0 20%;
  font-size: 40px;
  color: #333333;
  line-height: 56px;
  margin: 60px 0 0 0;
  font-weight: bold;
}

.coreAdvantage h4 {
  margin: 0;
  font-size: 26px;
  color: #cccccc;
  line-height: 36px;
  padding: 0 20%;
  margin-bottom: 60px;
  font-weight: 700;
}

.coreAdvantage .cardAll {
  margin-top: 100px;
  padding: 0 20%;
}

.coreAdvantage .card,
.cardTwo {
  width: 28%;
  height: 90px;
  display: inline-block;
  background-color: #ffffff;
}

.coreAdvantage .card {
  margin-left: 30px;
}

.coreAdvantage .cardAllTwo {
  padding: 0 0 0 25%;
}

.coreAdvantage .card:nth-child(2) {
  margin-left: 8%;
}

.coreAdvantage .cardTwo {
  margin-left: 160px;
}

.coreAdvantage .topTitle {
  margin-top: 15px;
  font-size: 16px;
  padding-right: 10px;
  color: #333333;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
}

.coreAdvantageImg {
  width: 60px;
  height: 100%;
  margin: 25px 20px 25px 10px;
}

.coreAdvantage .bottomTitle {
  font-size: 14px;
  font-weight: 400;
  height: 40px;
  padding-right: 10px;
  color: #999999;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
}

/* --------------------解决方案-------------------- */

.solution {
  padding: 60px 20%;
  margin-top: 60px;
  background-color: #ffffff;
}

.solution h1 {
  margin: 0;
  font-size: 40px;
  color: #333333;
  font-weight: bold;
}

.solution h4 {
  font-size: 26px;
  color: #cccccc;
  margin-bottom: 60px;
  margin: 0;
}

.SolutionImg {
  width: 60px;
  height: 100%;
  margin: 45px 20px 45px;
}

.solution .cardAll {
  display: flex;
  margin-top: 70px;
}

.solution .card {
  width: 280px;
  height: 150px;
  background: #ffffff;
  border: 1px solid #ededed;
  margin-left: 27px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-break: break-all;
  display: inline-block;
}

.solution .card:nth-child(1) {
  margin: 0;
}

.solution .topTitle {
  font-size: 18px;
  color: #333333;
  margin-top: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box;
  word-break: break-all;
}

/* @media only screen and (max-width: 500px) {
} */
@media only screen and (max-width: 1450px) {
  .SolutionImg {
    width: 60px !important;
    height: 100% !important;
    margin: 45px 20px 0 0 !important;
  }

  .solution .topTitle {
    font-size: 14px;
    color: #333333;
    margin-top: 20px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-break: break-all;
    display: inline-block;
  }

  .solution .bottomTitle {
    margin: 0 !important;
    font-size: 12px;
    font-weight: 400;
    color: #999999;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    display: -webkit-box;
    word-break: break-all;
    display: inline-block;
  }

  /*  */
  .imgDivFirst{
    padding: 5px 12px !important; 
  }
  .colLeftData {
    font-size: 14px !important;
    width: 100%;
    white-space: pre-line;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 10 !important; 
    display: -webkit-box !important;
    word-break: break-all;
  }

  .projectTitle {
    height: 140px !important;
    padding: 6px !important;
  }

  .projectValue {
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5 !important;
    display: -webkit-box;
    word-break: break-all;
  }
}

.solution .bottomTitle {
  margin: 12px 25px 33px 0;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
  display: inline-block;
}

/* -------------------我们的服务------------------------ */
.ourServices {
  padding: 60px 20%;
}

.ourServices h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
  font-weight: bold;
}

.ourServices h4 {
  font-size: 26px;
  color: #cccccc;
  margin-bottom: 60px;
}

.ourServices .colDIv {
  width: 98%;
  height: 380px;
}

.ourServices .colLeft {
  width: 100%;
  height: 380px;
  padding: 67px 30px;
  background-repeat: no-repeat;
  cursor: pointer;
}

.ourServices .colLeftLine {
  width: 30px;
  height: 3px;
  background: #ffffff;
  margin: 10px 0 0;
  position: relative;
  z-index: 1000;
}

.imgDivFirst {
  width: 100%;
  height: 185px;
  padding: 36px 30px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  display: -webkit-box !important;
  word-break: break-all;
}

.imgDivFirst img {
  width: 100%;
  height: 185px;
}

.imgDivFirst .colLeftData {
  width: 100%;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box !important;
  word-break: break-all;
}

.colLeftData {
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 1000;
  font-weight: 400;
  white-space: pre-line;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 11;
  display: -webkit-box !important;
  word-break: break-all;
}

.ourServices .masking {
  width: 97% !important;
  height: 380px;
  background: linear-gradient(135deg, #294dce 0%, rgba(144, 183, 255, 0.16) 100%);
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 999;
  opacity: 0.5;
}

.ourServices .maskingTwo {
  width: 100%;
  height: 185px;
  background: linear-gradient(135deg, #294dce 0%, rgba(144, 183, 255, 0.16) 100%);
  position: absolute;
  top: 2px;
  left: 4px;
  z-index: 999;
  opacity: 0.5;
}

.colLeftTitle {
  color: #ffffff;
  font-size: 18px;
  position: relative;
  z-index: 1000;
  font-weight: 700;
}

.colLeftData {
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  position: relative;
  z-index: 1000;
  font-weight: 400;
  /* white-space: pre-line; */
}

.colLeft .colLeftData {
  width: 100%;
}

.colLeft img {
  width: 97%;
  overflow: hidden;
  height: 100%;
}

/* tabs样式 */
:deep(.ourServices .ant-tabs-nav-scroll) {
  text-align: center !important;
  background: #f7f7f7;
  height: 60px;
  font-size: 18px;
  color: #333333;
}

:deep(.ourServices .ant-tabs-bar) {
  margin: 0;
}

/* ----------------------项目案例----------------------- */
.projectCases {
  position: relative;
  width: 100%;
  height: 700px;
  overflow: hidden;
  background-image: url("../static/indexView/projectCases-background.png");
}

.projectCases h1 {
  padding: 60px 20% 0;
  font-size: 40px;
  color: #ffffff;
  font-weight: 900;
  margin: 0;
}

.projectCases h4 {
  padding: 0 20%;
  font-size: 26px;
  color: #cccccc;
  margin: 0;
}

.projectTitle {
  height: 130px;
  padding: 15px 15px 20px 17px;
  border: 1px solid #ffffff;
}

.projectValue {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  display: -webkit-box;
  word-break: break-all;
}

h2 {
  font-weight: 700;
}

h3 {
  font-weight: 300;
}

.viewBtn {
  position: absolute;
  top: 90%;
  left: 24%;
  background-color: #4a515e;
  outline: none;
  border: none;
  border-radius: unset;
  color: #ffffff;
  width: 120px;
  height: 40px;
}

:deep(.projectCases .ant-tabs) {
  margin: 40px 20%;
  height: 100%;
  background: #191f2c;
  opacity: 0.8;
}

:deep(.projectCases .ant-tabs-nav-wrap) {
  width: 280px;
  padding: 28px 30px 0 20px;
  margin-bottom: 10px;
  color: #ffffff;
}

:deep(.projectCases .ant-tabs .ant-tabs-left-bar .ant-tabs-tab) {
  text-align: left;
}

:deep(.projectCases .ant-tabs-nav .ant-tabs-tab-active) {
  background-color: #294dce;
  color: #ffffff;
  height: 50px;
  line-height: 34px;
}

:deep(.projectCases .ant-tabs .ant-tabs-left-content) {
  height: 100%;
  padding: 41px 64px;
  background-image: url("../static/indexView/projectCases-right.png");
}

/* -------------------------------新闻资讯--------------------------- */
.news {
  padding: 60px 20%;
  position: relative;
}

.news h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
  font-weight: 700;
}

.news h4 {
  font-size: 26px;
  color: #cccccc;
  margin: 0 0 60px 0;
}

.news .card {
  border-left: 1px solid #efefef;
  height: 100%;
  background-color: #ffffff;
  padding: 42px 25px;
}

.news .card:nth-child(1) {
  border: none;
}

.news .cardTitle {
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  display: -webkit-box;
  word-break: break-all;
  width: 100%;
  height: 50px;
  margin: 20px 0 30px 0;
}

.news .cardDate {
  font-size: 14px;
  font-weight: 400;
  color: #294dce;
  margin-left: 10px;
  display: inline-block;
}
</style>
