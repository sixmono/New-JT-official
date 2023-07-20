<template>
  <div class="container">
    <HeaderView />
    <!-- 顶部图片 -->
    <div class="headerTitle">
      <img src="../static/SolutionView/solution-logo.png" alt="" style="width: 100%" />
      <div class="headerBody">
        <h5 class="headerBodyTitle">解决方案</h5>
        <div class="headerBodyLine"></div>
        <h6 class="headerBodyData">
          {{ title }}
        </h6>
      </div>
    </div>
    <!-- 问题与挑战 -->
    <!-- :animated="false" 动画效果 -->
    <a-tabs v-model:activeKey="activeKey" @change="handleChange">
      <a-tab-pane
        v-for="(tabsItem, tabsIndex) in tabsList"
        :key="tabsItem.key"
        :tab="tabsItem.tab"
      >
        <div
          class="change"
          v-for="(change, changeIdx) in tabsItem.changeList"
          :key="changeIdx + 1"
        >
          <h1>{{ change.h1 }}</h1>
          <h4>{{ change.h4 }}</h4>
          <a-row :gutter="30">
            <a-col
              :span="changeItem.span"
              v-for="(changeItem, changeIndex) in change.changeListSon"
              :key="changeIndex + 2"
            >
              <div class="changeCard">
                <img :src="changeItem.img" style="padding: 40px 20px 50px" />
                <div>
                  <h2 class="changeCardTitle">{{ changeItem.title }}</h2>
                  <h5 class="changeCardData">
                    {{ changeItem.data }}
                  </h5>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
        <!-- 额外的 -->
        <div
          class="solution"
          v-for="(solutionTwo, solutionTwoIdx) in tabsItem.solutionListTwo"
          :key="solutionTwoIdx + 3"
        >
          <h1>{{ solutionTwo.h1 }}</h1>
          <h4>{{ solutionTwo.h4 }}</h4>
          <a-row :gutter="[30, 30]">
            <a-col
              :span="solutionItemTwo.span"
              v-for="(
                solutionItemTwo, solutionIndexTwo
              ) in solutionTwo.solutionListSonTwo"
              :key="solutionIndexTwo + 1 + 4"
            >
              <div class="solutionCard">
                <img
                  :src="solutionItemTwo.img"
                  style="width: 60px; margin: 25px 0 15px"
                />
                <h2 class="solutionCardTitle">{{ solutionItemTwo.title }}</h2>
                <h5 class="solutionCardData">
                  {{ solutionItemTwo.data }}
                </h5>
              </div>
            </a-col>
          </a-row>
        </div>
        <!-- 解决方法 -->
        <div
          class="solutionTwo"
          v-for="(solution, solutionIdx) in tabsItem.solutionList"
          :key="solutionIdx + 5"
        >
          <h1>{{ solution.h1 }}</h1>
          <h4>{{ solution.h4 }}</h4>
          <a-row :gutter="[30, 30]">
            <a-col
              :span="solutionItem.span"
              v-for="(solutionItem, solutionIndex) in solution.solutionListSon"
              :key="solutionIndex + 6"
            >
              <div class="solutionCardTwo">
                <img :src="solutionItem.img" style="width: 60px; margin: 25px 0 15px" />
                <h2 class="solutionCardTitleTwo">{{ solutionItem.title }}</h2>
                <h5 class="solutionCardDataTwo">
                  {{ solutionItem.data }}
                </h5>
              </div>
            </a-col>
          </a-row>
        </div>

        <!-- 效果和收益 -->
        <div
          class="effects"
          v-for="(effects, effectsIdx) in tabsItem.effectsList"
          :key="effectsIdx + 7"
        >
          <h1>{{ effects.h1 }}</h1>
          <h4>{{ effects.h4 }}</h4>
          <a-row :gutter="30">
            <a-col
              :span="effectsItem.span"
              v-for="(effectsItem, effectsIndex) in effects.effectsListSon"
              :key="effectsIndex + 8"
            >
              <div class="effectsCard">
                <div class="effectsData">
                  <div class="value">{{ effectsItem.value }}</div>
                  <img class="effectsImg" :src="effectsItem.img" />
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-tab-pane>
    </a-tabs>

    <FooterView />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "solution",
});
</script>
<script setup lang="ts">
import { ref } from "vue";

const activeKey = ref("1");
const title = ref(
  "与西门子中国研究院、中大咨询等国内外顶尖咨询公司深度合作，开展相应的咨询和共创课程，节省用户寻找各类业专家的时间，顶级专家齐聚一堂为用户打造可落地的数字化方案。"
);

const handleChange = () => {
  console.log(activeKey.value);
  console.log("aaa");

  if (activeKey.value === "1") {
    title.value =
      "与西门子中国研究院、中大咨询等国内外顶尖咨询公司深度合作，开展相应的咨询和共创课程，节省用户寻找各类业专家的时间，顶级专家齐聚一堂为用户打造可落地的数字化方案。";
  } else if (activeKey.value === "2") {
    title.value =
      "通过MR眼镜的远程协助、SOP作业流、互动多媒体展示等功能，实现信息可视化、虚实融合、信息互动，解决信息的时空错位，丰富展示内容。";
  } else if (activeKey.value === "3") {
    title.value =
      "通过集成信息技术（IT）、运营技术（OT）、增强现实技术(AR)深度融合，将经验知识、规则规范与数字化服务相结合，使智能化场景更易于快速落地，助力数字场景规模化应用。";
  } else {
    title.value =
      "通过引入各类物联网传感器集成技术，人工智能数据分析技术与数据图谱技术，将系统智能实时化，对数据中心基础设施流程管理和业务应用进行全面的升级和优化，以提高数据中心的可靠性、运行效率与安全性。";
  }
};

const tabsList = [
  {
    tab: "咨询.培训",
    key: "1",
    changeList: [
      {
        h1: "问题与挑战",
        h4: "Issues and challenges",
        changeListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-third.png"),
            title: "数字梳理",
            data:
              "所有行业都值得数字化重做一遍，但是缺少了数字化所打造的“以数据支撑与驱动的数字化企业”。",
            span: 12,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "数字基础",
            data: "无论是智能化，还是产业链生态的大协同，都会缺乏土壤与根基。",
            span: 12,
          },
        ],
      },
    ],
    solutionList: [
      {
        h1: "数字化转型咨询",
        h4: "Digitization Transform",
        solutionListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "挖掘场景",
            data: "发掘细腻场景、洞见真实需求",
            span: 6,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-first.png"),
            title: "模型构建 ",
            data: "建立完善框架、构筑精密结构",
            span: 6,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "数据打通",
            data: "实现信息无缝衔接、畅通数据通路",
            span: 6,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "价值创造",
            data: "创意升华、焕发出更高层次的价值",
            span: 6,
          },
        ],
      },
    ],
    solutionListTwo: [
      {
        h1: "数字化共创课程",
        h4: "Digitization Course",
        solutionListSonTwo: [
          {
            img: require("../static/SolutionView/solution-third.png"),
            title: "主题演讲 ",
            data: "阐述内核、激发思维灵感",
            span: 6,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "制定策略 ",
            data: "设定明确创新目标和价值、规划智慧策略路线",
            span: 6,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "原型开发",
            data: "打造量身定制、可操作应用",
            span: 6,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-third.png"),
            title: "验证推广",
            data: "在现场部署与推广方案",
            span: 6,
          },
        ],
      },
    ],

    effectsList: [
      {
        h1: "效果和收益",
        h4: "Effects",
        effectsListSon: [
          {
            value: "分析自身问题",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "定制化解决方案",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "实现创新落地",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
        ],
      },
    ],
  },
  {
    tab: "AR/VR/MR眼镜方案",
    key: "2",
    changeList: [
      {
        h1: "问题与挑战",
        h4: "Issues and challenges",
        changeListSon: [
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "缺乏有效的解决方案：",
            data: "挥决策的效率低下。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "人工巡检漏检和错检：",
            data: "给企业带来损失。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "教学和展览受到时空限制：",
            data: "限制用户的参与度和体验感。",
            span: 8,
          },
        ],
      },
    ],
    solutionList: [
      {
        h1: "远程协作类",
        h4: "Remote Collaboration",
        solutionListSon: [
          {
            img: require("../static/SolutionView/solution-third.png"),
            title: "远程指挥，多维联动：",
            data: "融合多维数据，实现高效指挥决策。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "远程检修，专家指导： ",
            data: "远程维护，实时解答疑难。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-third.png"),
            title: "远程诊断，专家会诊：",
            data: "智慧共谋，提供精准诊断与全方位解决方案。",
            span: 8,
          },
        ],
      },
    ],
    solutionListTwo: [
      {
        h1: "作业流SOP类",
        h4: "Job Flow",
        solutionListSonTwo: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "视觉巡检，杜绝漏检：",
            data: "巡视全程，确保每一处细微之处都被细心检视。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-third.png"),
            title: "视觉制造，按图施工： ",
            data: "精心演绎每个构思的蓝图，将想象变为现实。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "视觉拣选，智慧物流：",
            data: "用视觉的智慧，打造高效、无缝的物流服务。",
            span: 8,
          },
        ],
      },
    ],

    effectsList: [
      {
        h1: "效果和收益",
        h4: "Effects",
        effectsListSon: [
          {
            value: "人和技术的分离",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "知识固化在设备",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "成本与沟通效率的提升",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
        ],
      },
    ],
  },
  {
    tab: "IT/OT/MR集成",
    key: "3",
    changeList: [
      {
        h1: "问题与挑战",
        h4: "Issues and challenges",
        changeListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-first.png"),
            title: "缺乏有效的解决方案：",
            data: "专业要求高、时间成本高。 ",
            span: 12,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "部门沟通协调困难：",
            data: "综合智能场景难落地。",
            span: 12,
          },
        ],
      },
    ],
    solutionList: [
      {
        h1: "火灾超前预警处置平台",
        h4: "Fire Warning",
        solutionListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "实时监测：",
            data: "利用先进的算法和感知技术，能够准确预测危险发生的可能性。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "处置方案： ",
            data: "快速定位源头、自动启动装置、远程操控设备等。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "高效运行：",
            data: "有效避免潜在在的风险。",
            span: 8,
          },
        ],
      },
    ],
    solutionListTwo: [
      {
        h1: "规范作业预警处置平台",
        h4: "Standardized Operation",
        solutionListSonTwo: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "实时监测：",
            data: "通过实时监测作业环境、作业人员的行为和设备状态。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "处置方案：",
            data: "风险隔离、紧急停工、设备修复等，以确保作业安全和人员健康。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "高效运行：",
            data: "凭借着灵敏的预警机制和高效的处置能力，有效降低作业风险。",
            span: 8,
          },
        ],
      },
    ],

    effectsList: [
      {
        h1: "效果和收益",
        h4: "Effects",
        effectsListSon: [
          {
            value: "无编程基础轻松组合项目流程",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 12,
          },
          {
            value: "促进多部门之间的协作创新",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 12,
          },
        ],
      },
    ],
  },
  {
    tab: "数据中心智能化建设服务",
    key: "4",
    changeList: [
      {
        h1: "问题与挑战",
        h4: "Issues and challenges",
        changeListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-first.png"),
            title: "技术问题：",
            data:
              "数据中心智能化建设需要应用各种先进的技术和工具，如人工智能、大数据、云计算等，这些技术的引入和应用需要大量的技术支持和投入。 ",
            span: 12,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "安全风险：",
            data:
              "数据中心是企业重要的信息资产库，智能化建设可能带来新的安全隐患和风险，需要采取有效的安全防护和管理措施。",
            span: 12,
          },
        ],
      },
    ],
    solutionList: [
      {
        h1: "自动化安全运维",
        h4: "Automated Security Operations",
        solutionListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "自动化运维：",
            data: "引入自动化工具和技术，对数据中心的运维流程进行智能化升级。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "智能安全监测： ",
            data: "引入安全监测工具和技术，对数据中心的安全性进行实时监测和预警。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "云计算平台建设：",
            data: "引入云计算技术和工具，建设数据中心的云计算平台。",
            span: 8,
          },
        ],
      },
    ],
    solutionListTwo: [
      {
        h1: "数据中心智能",
        h4: "Intelligent Data Center",
        solutionListSonTwo: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "基础设施管理：",
            data: "包括对数据中心的服务器、网络、存储等基础设施进行管理和监控。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "数据中心能耗管理：",
            data: "通过引入智能化能源管理系统，对数据中心的能耗进行实时监测和控制。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "数据分析与挖掘：",
            data:
              "通过引入人工智能和大数据分析技术，对数据中心的海量数据进行挖掘和分析。",
            span: 8,
          },
        ],
      },
    ],

    effectsList: [
      {
        h1: "效果和收益",
        h4: "Effects",
        effectsListSon: [
          {
            value: "提高数据中心的效率",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 12,
          },
          {
            value: "数据中心运维智能化",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 12,
          },
        ],
      },
    ],
  },
];
</script>
<style scoped>
.container {
}
/* ----------------------------图片--------------------- */
.headerTitle {
  position: relative;
  top: 0;
}
.headerBody {
  padding: 5% 20% 0;
  position: absolute;
  top: 0;
}
.headerBodyTitle {
  font-size: 50px;
  color: #ffffff;
  margin: 0 0 20px 0;
}
.headerBodyLine {
  width: 34px;
  height: 4px;
  background: #ffffff;
}
.headerBodyData {
  font-size: 18px;
  font-weight: 400;
  color: #ffffff;
  margin-top: 23px;
  width: 850px;
}
/* 公共样式 */
h1 {
  font-size: 40px;
  color: #333333;
  margin: 0;
}
h2,
h5 {
  margin: 0;
}
h4 {
  font-size: 26px;
  color: #cccccc;
}
/* ---------------问题与挑战------------ */
.change {
  padding: 60px 20%;
}

.changeCard {
  display: flex;
  width: 100%;
  height: 150px;
  background: #ffffff;
  border: 1px solid #ededed;
  margin: 60px 0 0 0;
}
.changeCardTitle {
  margin-top: 24px;
  font-size: 18px;
  color: #333333;
  padding: 0 10px 0 0;
}
.changeCardData {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  padding: 0 20px 26px 0;
  line-height: 22px;
}
/* ------------------------解决方案----------------------- */
.solution {
  padding: 60px 20%;
  background: #f6f6f6;
}
.solutionCard {
  text-align: center;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ededed;
}
.solutionCardTitle {
  font-size: 18px;
  color: #333333;
}
.solutionCardData {
  padding: 20px 40px 35px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}
/* -------------------------------- */
.solutionTwo {
  padding: 60px 20%;
  background: #ffffff;
}
.solutionCardTwo {
  text-align: center;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ededed;
}
.solutionCardTitleTwo {
  font-size: 18px;
  color: #333333;
}
.solutionCardDataTwo {
  padding: 20px 40px 35px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}

/*--------------------------- 效果和收益----------------------------- */
.effects {
  padding: 60px 20%;
  background: #f6f6f6;
}
.effectsCard {
  width: 100%;
  height: 160px;
  background: #ffffff;
  border: 1px solid #ededed;
  margin: 60px 0 0 0;
  position: relative;
  padding: 20px 0;
  overflow: hidden;
}
.effectsTitle {
  padding: 24px 80px 0 30px;
  font-size: 18px;
  color: #333333;
  width: 250px;
}
.effectsData {
  padding-left: 30px;
  display: flex;
}
.condition {
  font-size: 16px;
  color: #333333;
  line-height: 100px !important;
  width: 40px;
}
.value {
  font-size: 30px;
  font-weight: bold;
  color: #4486f3;
  /* margin-left: 20px; */
  font-family: DINAlternate-Bold, DINAlternate;
}
.effectsImg {
  position: absolute;
  bottom: 0;
  right: 0;
}

:deep(.ant-tabs-nav-scroll) {
  height: 80px;
  background-color: #ffffff;
  font-size: 20px;
  padding: 0 20%;
}
:deep(.ant-tabs-bar) {
  margin: 0;
  background-color: #ffffff;
}
:deep(.ant-tabs-nav .ant-tabs-tab-active) {
  margin: 0;
  padding-bottom: 25px;
  margin-top: 13px;
}
:deep(.ant-tabs-tab) {
  margin: 0;
}
</style>
