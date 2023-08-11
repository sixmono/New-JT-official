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
        class="tabPane"
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
                <img :src="changeItem.img" class="changeCardImg" />
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
          class="change"
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
              :key="solutionIndexTwo + 4"
            >
              <div class="solutionCardTwo">
                <img
                  :src="solutionItemTwo.img"
                  style="width: 60px; margin: 25px 0 15px"
                />
                <h2 class="solutionCardTitleTwo">{{ solutionItemTwo.title }}</h2>
                <h5 class="solutionCardDataTwo">
                  {{ solutionItemTwo.data }}
                </h5>
              </div>
            </a-col>
          </a-row>
        </div>
        <!-- 解决方法 -->
        <div
          class="change"
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
              <div class="solutionCard">
                <img :src="solutionItem.img" style="width: 60px; margin: 25px 0 15px" />
                <h2 class="solutionCardTitle">{{ solutionItem.title }}</h2>
                <h5 class="solutionCardData">
                  {{ solutionItem.data }}
                </h5>
              </div>
            </a-col>
          </a-row>
        </div>
        <!-- 展陈 -->
        <div
          class="change"
          v-for="(solutionThree, solutionThreeIdx) in tabsItem.solutionListThree"
          :key="solutionThreeIdx + 7"
        >
          <h1>{{ solutionThree.h1 }}</h1>
          <h4>{{ solutionThree.h4 }}</h4>
          <a-row :gutter="[30, 30]">
            <a-col
              :span="solutionItemThree.span"
              v-for="(
                solutionItemThree, solutionIndex
              ) in solutionThree.solutionListSonThree"
              :key="solutionIndex + 8"
            >
              <div class="solutionCardThree">
                <img
                  :src="solutionItemThree.img"
                  style="width: 60px; margin: 25px 0 15px"
                />
                <h2 class="solutionCardTitleThree">{{ solutionItemThree.title }}</h2>
                <h5 class="solutionCardDataThree">
                  {{ solutionItemThree.data }}
                </h5>
              </div>
            </a-col>
          </a-row>
        </div>

        <!-- 效果和收益 -->
        <div
          class="change"
          v-for="(effects, effectsIdx) in tabsItem.effectsList"
          :key="effectsIdx + 9"
        >
          <h1>{{ effects.h1 }}</h1>
          <h4>{{ effects.h4 }}</h4>
          <a-row :gutter="30">
            <a-col
              :span="effectsItem.span"
              v-for="(effectsItem, effectsIndex) in effects.effectsListSon"
              :key="effectsIndex + 10"
            >
              <div class="effectsCard">
                <div class="effectsData">
                  <div class="value">{{ effectsItem.value }}</div>
                  <div class="data">{{ effectsItem.data }}</div>
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
import { ref, onMounted, onUnmounted } from "vue";

const activeKey = ref("1");

onMounted(() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    window.location.href =
      "https://jt-phone-1312712349.cos.ap-shanghai.myqcloud.com/index.html#/pages/solution/Consulting-Training"; //手机
  }
  const activeIndex = sessionStorage.getItem("activeIndex");
  const active = JSON.parse(activeIndex);
  if (activeIndex === null) {
    activeKey.value = "1";
  } else {
    activeKey.value = active;
  }
});

const title = ref(
  "外部市场需求瞬息万变，内部企业协同日益复杂，企业数字化转型迫在眉睫，数字化方案需要不同学科的专业⼈员以整体系统视⻆审视企业全价值链各个环节的问题，将先进管理经验与流程固化在企业之中，全⾯提⾼企业综合竞争⼒，⼀般咨询公司并不具备数字化落地实施的能力和经验，这也导致企业寻找适合自己解决方案的沟通成本高、选择成本高、试错成本高。"
);

const handleChange = () => {
  if (activeKey.value === "1") {
    title.value =
      "外部市场需求瞬息万变，内部企业协同日益复杂，企业数字化转型迫在眉睫，数字化方案需要不同学科的专业⼈员以整体系统视⻆审视企业全价值链各个环节的问题，将先进管理经验与流程固化在企业之中，全⾯提⾼企业综合竞争⼒，⼀般咨询公司并不具备数字化落地实施的能力和经验，这也导致企业寻找适合自己解决方案的沟通成本高、选择成本高、试错成本高。";
  } else if (activeKey.value === "2") {
    title.value =
      "数字化时代，跨时空多维度解决问题将成为常态，MR虚实融合技术成为人与物理世界沟通的最佳环境";
  } else if (activeKey.value === "3") {
    title.value =
      "系统集成需求从单一系统趋向多个跨学科系统的融合、从相对确定的流程需求趋向综合场景需求，集成方案需融通IT/OT/MR等多个系统，利用数字化工具， 快速协同，做出更科学的决策判断， 以更高、更快、 更强的状态采取行动，更早地获取更多的收益。";
  } else {
    title.value =
      "计算力需求驱动数据中心规模快速扩张，安全性和稳定性始终是企业业务正常运行的最基础保障，而海量增长的数据容量，给数据的存储和保护带来新的挑战。";
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
            title: "多维决策",
            data:
              "⽤户对服务的及时性、准确性要求⾼，缺少融合多维度数据的解决⽅案，指挥决策效率低，专家分配难，作业协调难。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "流程教验",
            data:
              "新⼿流程不熟，熟手成本高，⼈⼯巡检易漏检、错检，点位巡检难以确保查验巡检点异常状况，人到确检难，管理覆盖难。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "虚实展示",
            data:
              "受时空限制，⽆法互动展示更多内容，展览、教学、研发的实景搭建要求⾼、成本⾼、耗时⻓，新品导入难。",
            span: 8,
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
            data: "信息无缝衔接、畅通数据通路",
            span: 6,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "价值创造",
            data: "创意升华、焕发出更高层次价值",
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
            title: "主题演讲",
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
            value: "实景解构数字化趋势",
            data:
              "实景共创，场景化共创数字化趋势方案，特邀嘉宾可赴世界级数字工厂游学，探寻企业数字化转型成功之道",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "走出数字化转型误区",
            data:
              "实战研讨，企业管理层学会数字化转型模型，解读数字化背后的核心逻辑，和专家研讨自身实际问题",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "明晰数字化转型路径",
            data:
              "专家会诊，结合企业自身条件，解读经过实践论证的行业案例，给出企业数字化转型反馈意见",
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
            title: "多维决策",
            data:
              "用户对服务的及时性、准确性要求高，缺少融合多维度数据的解决方案，指挥决策效率低",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "流程教验",
            data:
              "新手流程不熟，上手慢;人工巡检易漏检、错检，点位巡检只能确定到达巡检点，难以确保查验巡检点异常状况",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "虚实展示",
            data:
              "展览、教学、研发的实景搭建成本高、耗时长，受时空限制，无法互动展示更多内容",
            span: 8,
          },
        ],
      },
    ],
    solutionList: [
      {
        h1: "作业流SOP类场景",
        h4: "Job flow",
        solutionListSon: [
          {
            img: require("../static/SolutionView/coreAdvantage-third.png"),
            title: "视觉巡检，杜绝漏检",
            data: "案例：国家电网",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-first.png"),
            title: "视觉制造，按图施工 ",
            data: "案例：海尔",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "视觉拣选，智慧物流",
            data: "案例：福斯润滑油",
            span: 8,
          },
        ],
      },
    ],
    solutionListTwo: [
      {
        h1: "远程协作类场景",
        h4: "Remote collaboration",
        solutionListSonTwo: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "远程指挥，多维联动",
            data: "案例：大连商品交易所",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "远程检修，专家指导",
            data: "案例：米其林",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "远程诊断，专家会诊",
            data: "案例：120急救中心",
            span: 8,
          },
        ],
      },
    ],
    solutionListThree: [
      {
        h1: "数字孪生展陈类",
        h4: "Digital twin",
        solutionListSonThree: [
          {
            img: require("../static/SolutionView/solution-third.png"),
            title: "数字展陈，时空互动",
            data: "案例：汉诺威",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "案例汉诺威 ",
            data: "案例：福州地铁",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "数字孪生",
            data: "案例：西门子工业元宇宙",
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
            value: "人和人分离",
            data: "提高效率，跨越时空，随时连线专家辅助决策，降低沟通成本",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "人和技术分离",
            data: "确保工作执行到位，知识固化在系统上，跟随教学、巡检，节省了用工成本",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "虚实同步互动",
            data:
              "虚拟环境中实现研发、仿真、教学、展示，不受时空限制，降低环境搭建和运行成本",
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
            title: "需求场景复杂",
            data:
              "仅靠个别专家已经很难满⾜⽤户的多维度场景化需求，对解决⽅案的专业要求⾼、时间成本⾼，⽤户往往不具备这样的多维度综合能⼒。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "数字化成本高",
            data:
              "各部门职能、业务需求、技术要求不同，产品结构类型繁多，软硬件接入种类多，运行环境复杂，各部⻔各专业需⼤量专业性的沟通协调，数字化综合场景落地难。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-five.png"),
            title: "数据洞察难",
            data:
              "设备运行场景、人员知识经验、管理层关键决策等大量信息，在系统流程中传递，海量数据下，科学适用的的数字模型少，效率低，很难形成创新洞察力。",
            span: 8,
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
            title: "实时监测",
            data: "利用先进的算法和感知技术，能够准确预测危险发生的可能性",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "处置方案",
            data: "快速定位源头、自动启动装置、远程操控设备等",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "高效运行",
            data: "有效避免潜在在的风险",
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
            title: "实时监测",
            data: "通过实时监测作业环境、作业人员的行为和设备状态",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "处置方案",
            data: "风险隔离、紧急停工、设备修复等，以确保作业安全和人员健康",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "高效运行",
            data: "凭借着灵敏的预警机制和高效的处置能力，有效降低作业风险",
            span: 8,
          },
        ],
      },
    ],
    solutionListThree: [
      {
        h1: "智能诊断与应急处置平台",
        h4: "Intelligent Diagnosis",
        solutionListSonThree: [
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "电气火灾超前预警处置平台",
            data: "案例：上海城投",
            span: 12,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "规范作业预警处置平台",
            data: "案例：为⺠服务中⼼",
            span: 12,
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
            value: "管理难度降低",
            data:
              "⽆需编程专业要求，管理⼈员可通过拖拉拽⽅式，实现管理流程和要素重新组合，场景联动优化体验，为数字化管理措施落地节约沟通时间，让管理措施执⾏到位",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "管理成本降低",
            data:
              "低代码平台内置大量的IT/OT/MR等模块，无需对接大量软件接口，避免信息孤岛，大幅节省数字化互联互通的搭建成本、沟通成本，多源异构高效管理，边缘智能利旧降本",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "管理洞察创新",
            data:
              "多部⻔协作流程透明，隐患和卡点⼀⽬了然，数据模型敏捷开发，短时间做出更科学的决策判断，便于实现多部⻔之间的协作创新、流程再造。",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
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
            title: "技术要求高",
            data:
              "数据中⼼的建造专业性要求⾼，建设过程中需要引入多种跨学科技术和工具，如环控系统、供配电系统、人工智能、大数据、云计算等，⼀旦发⽣问题，影响巨⼤，新旧系统的更新接⼊更是对施⼯服务提出⾮常⾼的要求。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-fourth.png"),
            title: "管理要求高",
            data:
              "数据中心是重要的信息资产库，定制化需求日益明显，而定制同步会带来管理难度，简便有效的安全防护和管理措施是非常必要的。",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-five.png"),
            title: "能耗要求高",
            data: "海量数据运算导致数据中心能耗大。",
            span: 8,
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
            img: require("../static/SolutionView/solution-fourth.png"),
            title: "智能安全监测",
            data: "引入安全监测工具和技术，对数据中心的安全性进行实时监测和预警",
            span: 8,
          },
          {
            img: require("../static/SolutionView/coreAdvantage-second.png"),
            title: "自动化运维",
            data: "引入自动化工具和技术，对数据中心的运维流程进行智能化升级",
            span: 8,
          },

          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "云计算平台建设",
            data: "引入云计算技术和工具，建设数据中心的云计算平台",
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
            title: "基础设施管理",
            data: "包括对数据中心的服务器、网络、存储等基础设施进行管理和监控",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-second.png"),
            title: "数据中心能耗管理",
            data: "通过引入智能化能源管理系统，对数据中心的能耗进行实时监测和控制",
            span: 8,
          },
          {
            img: require("../static/SolutionView/solution-first.png"),
            title: "数据分析与挖掘",
            data: "通过引入人工智能和大数据分析技术，对数据中心的海量数据进行挖掘和分析",
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
            value: "可靠",
            data:
              "依托多年的数据中⼼咨询、设计、实施经验，实现数据中⼼的定制化建设，完善的施⼯⽅案和应急处置措施，确保数据中心运维智能化。",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "定制",
            data:
              "按需定制，微模块和新旧系统搭配后成本最优，智能监管系统让系统管理更简单。",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
          {
            value: "绿色",
            data: "从设计咨询到维修整改，成熟多样的节能措施让绿色节能变得更简单。",
            img: require("../static/SolutionView/位图@2x(4).png"),
            span: 8,
          },
        ],
      },
    ],
  },
];

onUnmounted(() => {
  sessionStorage.removeItem("activeIndex");
});
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
  padding: 2% 0 0 20%;
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
.change:nth-child(2n + 1) {
  background: #f6f6f6;
}
.change:nth-child(2n) {
  background: #ffffff;
}
.changeCard {
  display: flex;
  width: 100%;
  height: 180px;
  background: #ffffff;
  border: 1px solid #ededed;
  margin: 60px 0 0 0;
}

.changeCardTitle {
  margin-top: 14px;
  font-size: 18px;
  color: #333333;
  padding: 0 10px 0 0;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  display: -webkit-box !important;
  word-break: break-all;
}
.changeCardData {
  font-size: 16px;
  font-weight: 400;
  color: #999999;
  padding: 0 20px 0 0;
  line-height: 22px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  display: -webkit-box !important;
  word-break: break-all;
}
.changeCardImg {
  padding: 40px 20px 50px;
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
  overflow: hidden;
}
.solutionCardTitle {
  font-size: 18px;
  color: #333333;
}
.solutionCardData {
  padding: 20px 30px 35px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}
/* -------------------------------- */
.solutionTwo {
  padding: 60px 20%;
  background: #ffffff;
  overflow: hidden;
}
.solutionCardTwo {
  text-align: center;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ededed;
  overflow: hidden;
}
.solutionCardTitleTwo {
  font-size: 18px;
  color: #333333;
}
.solutionCardDataTwo {
  padding: 20px 30px 35px;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}
/* 3 */
.solutionThree {
  padding: 60px 20%;
  background: #ffffff;
  overflow: hidden;
}
.solutionCardThree {
  text-align: center;
  height: 240px;
  background: #ffffff;
  border: 1px solid #ededed;
  overflow: hidden;
}
.solutionCardTitleThree {
  font-size: 18px;
  color: #333333;
}
.solutionCardDataThree {
  padding: 20px 30px 35px;
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
  /* display: flex; */
}

.condition {
  font-size: 16px;
  color: #333333;
  line-height: 100px !important;
  width: 40px;
}
.value {
  font-size: 26px;
  font-weight: bold;
  color: #4486f3;
  /* margin-left: 20px; */
  font-family: DINAlternate-Bold, DINAlternate;
}
.data {
  margin: 0 10px 0 0;
  font-size: 16px;
  font-weight: 400;
  color: #999999;
}

.effectsImg {
  position: absolute;
  bottom: 0;
  right: 0;
}
/* 深度修改的样式 */
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
/* ------------------------------------响应式布局------------------- */
@media only screen and (max-width: 1150px) {
  .effectsCard {
    width: 100%;
    height: 180px !important;
    background: #ffffff;
    border: 1px solid #ededed;
    margin: 60px 0 0 0;
    position: relative;
    overflow: hidden;
  }
}
@media only screen and (max-width: 1300px) {
  .solutionCardData {
    padding: 20px 0 35px !important;
    font-size: 16px;
    font-weight: 400;
    color: #999999;
  }
  .solutionCardDataTwo {
    padding: 20px 0 35px !important;
    font-size: 16px;
    font-weight: 400;
    color: #999999;
  }
  .changeCard img {
    padding: 40px 0;
  }
}
@media only screen and (max-width: 1440px) {
  /* 问题与挑战 */
  .headerBody {
    padding: 1% 0 0 20%;
  }
  .headerBodyTitle {
    font-size: 40px;
    color: #ffffff;
    margin: 0 0 20px 0;
  }
  .headerBodyData {
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 23px;
    width: 850px;
  }
  /* 问题与挑战 */
  .changeCardTitle {
    margin-top: 0;
    font-size: 18px;
    color: #333333;
    padding: 0 10px 0 0;
  }
  .changeCardData {
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    padding: 0 20px 0 0;
    line-height: 22px;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 7;
    display: -webkit-box !important;
    word-break: break-all;
  }
  .changeCardImg {
    padding: 40px 10px 50px;
  }
  /* ----------------------1--------------------- */
  .solutionCardData {
    padding: 20px 40px 35px;
    font-size: 14px;
    font-weight: 400;
    color: #999999;
  }
  /* -----------------------------2--------------------- */
  .solutionCardDataTwo {
    padding: 20px 30px 35px;
    font-size: 14px;
    font-weight: 400;
    color: #999999;
  }
  /* ------------------------3------------------------ */
  .solutionCardDataThree {
    font-size: 14px;
  }
  /* 效果和收益 */
  .effectsCard {
    width: 100%;
    height: 160px;
    background: #ffffff;
    border: 1px solid #ededed;
    margin: 60px 0 0 0;
    position: relative;
    overflow: hidden;
  }
  .effectsTitle {
    padding: 0;
    font-size: 18px;
    color: #333333;
    width: 250px;
  }
  .effectsData {
    padding-left: 10px;
    /* display: flex; */
  }
  .value {
    font-size: 22px;
    font-weight: bold;
    color: #4486f3;
    /* margin-left: 20px; */
    font-family: DINAlternate-Bold, DINAlternate;
  }
  .data {
    margin: 10px 10px 0 0;
    font-size: 12px !important;
  }
}
</style>
