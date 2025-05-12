export interface Metric {
  value: string; // "8%", "10%", …
  labelKey: string; // cases.leroyMerlinSearch.score1Feature4
  extraLabelKey?: string; // cases.leroyMerlinSearch.score1Feature4_2 (если есть)
}

export interface BaseFeature {
  image: string;
}

export interface TextFeature extends BaseFeature {
  type: "text";
  content: {
    titleKey: string; // cases.leroyMerlinSearch.titleFeature1
    descriptionKey: string; // cases.leroyMerlinSearch.descFeature1
  };
}

export interface MetricsFeature extends BaseFeature {
  type: "metrics";
  content: {
    titleKey: string; // cases.leroyMerlinSearch.titleFeature4
    descriptionKey: string; // cases.leroyMerlinSearch.descFeature4
    metrics: Metric[];
  };
}

export type Feature = TextFeature | MetricsFeature;

export interface Section {
  titleKey: string;
  descriptionKey: string;
}

export interface ProjectMeta {
  src: string;
  title: [string, string][];
  titleMobile?: string;
  meta: Section[];
  features: Feature[];
}

export interface Project {
  id: number;
  name: string;
  category: string;
  image: string;
  imageRu: string;
  isStub?: boolean;
  meta?: ProjectMeta;
}
