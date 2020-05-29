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

// 角色数据接口
export interface Role {
  id?: number;
  roleName?: string;
  whetherSee?: nums;
  enabled?: nums;
  sysRolePermissionList?: Array<any>;
}

export enum nums {
  zero = 0,
  one = 1
} // 0，1的枚举
// 分页组件参数接口
export interface PageOption {
  pageSize?: any;
  totalRecord?: any;
}

// 组织结构树
export interface OragizationTree {
  code?: any;
  name?: any;
  id?: any;
  label?: any;
  level?: any;
  value?: any;
  parent?: any;
}

// 树节点
export interface TreeNode {
  id?: any;
  value?: any;
  label?: any;
  level?: any;
  router?: any;
  parentCode?: any;
  check?: any;
  color?: any;
  idt?: any;
  udt?: any;
  selectable?: any;
  children?: TreeNode[];
}

// 权限结构
export interface Permission {
  id?: number;
  roleId?: number;
  permissionId?: number;
  permissionName?: string;
  systemId?: number;
  systemName?: string;
  rolePermissionInfos: Permission[];
}

// 属性结构初始化配置项
export interface TreeOption {
  labelName: string; // 需要转换为label的字段
  childrenName: string; // 需要转换为children的字段
  icon?: string; // 如果当前结构的孩子为空，内容旁边的图标，不设置就不显示
  // expandedIcon?: string; // 内容在展开状态下旁边的图标，没有就显示，如何配置了icon则expandedIcon无效
  // collapsedIcon?: string; // 内容在关闭状态下旁边的图标，没有就显示，如何配置了icon则expandedIcon无效
}

/**
 * 特种培训信息接口以及字段映射
 */
export interface SpecialField {
  id?: any;
  idCardNo: string; // 身份证
  typeOfWork: string; // 工种
  operationItems: string; // 操作项目
  workingYears: string; // 本工种工龄
  theoreticalAchievements: string; // 理论成绩
  actualResults: string; // 实际成绩
  operationCertificateNo: string; // 操作证号
  dateOfIssue: string; // 发证日期
  oneReviewResults?: string; // 第一次复审成绩
  oneReviewTime?: string; // 第一次复审时间
  towReviewResults?: string; // 第二次复审成绩
  towReviewTime?: string; // 第二次复审时间
  threeReviewResults?: string; // 第三次复审成绩
  threeReviewTime?: string; // 第三次复审时间
  fourReviewResults?: string; // 第四次复审成绩
  fourReviewTime?: string; // 第四次复审时间
  fiveReviewResults?: string; // 第五次复审成绩
  fiveReviewTime?: string; // 第五次复审时间
  sixReviewResults?: string; // 第六次复审成绩
  sixReviewTime?: string; // 第六次复审时间
  remarks?: string; // 备注
  validityPeriod: number; // 复审年限，默认为3
}
export class SpecialFieldClass implements SpecialField {
  typeOfWork: string = '';
  actualResults: string = '';
  dateOfIssue: string = '';
  fiveReviewResults: string = null;
  fiveReviewTime: string = null;
  fourReviewResults: string = null;
  fourReviewTime: string = null;
  id: any = null;
  idCardNo: string = '';
  oneReviewResults: string = null;
  oneReviewTime: string = null;
  operationCertificateNo: string = '';
  operationItems: string = '';
  remarks: string = null;
  sixReviewResults: string = null;
  sixReviewTime: string = null;
  theoreticalAchievements: string = '';
  threeReviewResults: string = null;
  threeReviewTime: string = null;
  towReviewResults: string = null;
  towReviewTime: string = null;
  validityPeriod: number = 3;
  workingYears: string = '';

  constructor() {
  }
}
export const SpecialFieldText = {
  idCardNo: ['身份证', 'text'],
  dCardNo: ['工种', 'text'],
  operationItems: ['操作项目', 'text'],
  workingYears: ['本工种工龄', 'text'],
  theoreticalAchievements: ['理论成绩', 'text'],
  actualResults: ['实际成绩', 'text'],
  operationCertificateNo: ['操作证号', 'text'],
  dateOfIssue: ['发证日期', 'text'],
  oneReviewResults: ['第一次复审成绩', 'text'],
  oneReviewTime: ['第一次复审时间', 'text'],
  towReviewResults: ['第二次复审成绩', 'text'],
  towReviewTime: ['第二次复审时间', 'text'],
  threeReviewResults: ['第三次复审成绩', 'text'],
  threeReviewTime: ['第三次复审时间', 'text'],
  fourReviewResults: ['第四次复审成绩', 'text'],
  fourReviewTime: ['第四次复审时间', 'text'],
  fiveReviewResults: ['第五次复审成绩', 'text'],
  fiveReviewTime: ['第五次复审时间', 'text'],
  sixReviewResults: ['第六次复审成绩', 'text'],
  sixReviewTime: ['第六次复审时间', 'text'],
  remarks: ['备注', 'textarea'],
  validityPeriod: ['复审年限', 'number'],
};

// 表头部数据接口
export interface TableHeader {
  field: string;
  header: string;
}

// 操作行为约束
interface OperateFlag {
  add: string;
  update: string;
  save: string;
  del: string;
}
export class OperateFlagClass implements OperateFlag {
  public add: string;
  public del: string;
  public save: string;
  public update: string;
  constructor() {
    this.add = 'add';
    this.del = 'del';
    this.save = 'save';
    this.update = 'update';
  }
}

/**
 * 培训内容字段接口及实现
 */
export interface ScsContentField {
  file: any;
  contentCategoryId: string;
}
export class ScsContentFieldClass implements ScsContentField{
  file: any;
  contentCategoryId: string;
  constructor() {
    this.file = null;
    this.contentCategoryId = '';
  }
}

/**
 * 单选条目增加
 */
export interface RadioTemplate {
  rightKey: any;  // 正确答案
  subject: any;  // 试题题目
  order: any;  // 选项顺序
  option: any; // 选项数据
}
