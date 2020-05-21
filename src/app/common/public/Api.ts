//  日常培训类别接口
export interface EveryCategory {
  name: string;
  value: string;
  flag: number;
}
// 组织前台树形结构接口
export interface OrgTree {
  children?: OrgTree[];
  companyPersonnelBoxList?: any;
  id?: any;
  label?: string;
  level?: any;
  parentId?: any;
  expandedIcon?: string;
  collapsedIcon?: string;
  icon?: string;
}
// 组织后台台树形结构接口
export interface OraWebTree {
  chiled?: OraWebTree[];
  companyPersonnelBoxList?: any;
  id?: any;
  organizationName?: string;
  level?: any;
  parentId?: any;
}
