import commingSoon from "./images/Comming_soon.png";
import leroyMerlin from "./images/Leroy_Merlin.png";
import inDevelop from "./images/In_develop.png";
import p1_main_pic from "./images/p1_main_pic.png";
import p1_feature1 from "./images/p1_feature1.png";
import p1_feature2 from "./images/p1_feature2.png";
import p1_feature3 from "./images/p1_feature3.png";
import p1_feature4 from "./images/p1_feature4.png";
import p1_feature5 from "./images/p1_feature5.png";
import p1_feature6 from "./images/p1_feature6.png";
import p1_feature7 from "./images/p1_feature7.png";

const metaProject1 = {
  src: p1_main_pic,
  title: [["cases.case1.metaTitle", "cases.case1.metaDescription"]],
  titleMobile: "cases.case1.titleMobile",
  meta: [
    ["cases.case1.metaSectionTitle", "cases.case1.metaSectionDescription"],
  ],
  features: [
    [
      p1_feature1,
      [["cases.case1.titleFeature1", "cases.case1.descFeature1"]],
    ],
    [
      p1_feature2,
      [["cases.case1.titleFeature2", "cases.case1.descFeature2"]],
    ],
    [
      p1_feature3,
      [["cases.case1.titleFeature3", "cases.case1.descFeature3"]],
    ],
    [
      p1_feature4,
      [
        ["cases.case1.titleFeature4", "cases.case1.descFeature4"],
        [
          "",
          [
            ["8%", "cases.case1.score1Feature4"],
            ["5%", "cases.case1.score2Feature4", "cases.case1.score2Feature4_2"],
            ["10%", "cases.case1.score3Feature4"],
            ["6.5%", "cases.case1.score4Feature4"],
          ],
        ],
      ],
    ],
    [
      p1_feature5,
      [["cases.case1.titleFeature5", "cases.case1.descFeature5"]],
    ],
    [
      p1_feature6,
      [["cases.case1.titleFeature6", "cases.case1.descFeature6"]],
    ],
    [
      p1_feature7,
      [
        ["cases.case1.titleFeature7", "cases.case1.descFeature7"],
        [
          "",
          [
            ["11%", "cases.case1.score1Feature7", 'cases.case1.score1Feature7_2'],
            ["15%", "cases.case1.score2Feature7", 'cases.case1.score2Feature7_2'],
            ["12%", "cases.case1.score3Feature7"],
            ["7%", "cases.case1.score4Feature7"],
          ],
        ],
      ],
    ],
  ],
}

export const projects = [
  {
    id: 1,
    slug: "leroy-merlin",
    name: "cases.case1.title",
    category: "E-commerce • B2C • App • Desktop",
    image: leroyMerlin,
    imageRu: leroyMerlin,
    meta: metaProject1,
  },
  {
    id: 2,
    name: "commingSoon",
    category: "App • Desktop",
    image: commingSoon,
    imageRu: inDevelop,
    isStub: true,
  },
  {
    id: 3,
    name: "commingSoon",
    category: "App • Desktop",
    image: commingSoon,
    imageRu: inDevelop,
    isStub: true,
  },
  {
    id: 4,
    name: "commingSoon",
    category: "App • Desktop",
    image: commingSoon,
    imageRu: inDevelop,
    isStub: true,
  },
  {
    id: 5,
    name: "commingSoon",
    category: "App • Desktop",
    image: commingSoon,
    imageRu: inDevelop,
    isStub: true,
  },
  {
    id: 6,
    name: "commingSoon",
    category: "App • Desktop",
    image: commingSoon,
    imageRu: inDevelop,
    isStub: true,
  },
];
