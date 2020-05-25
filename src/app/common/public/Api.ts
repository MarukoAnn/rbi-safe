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
  sysRolePermissionList?: Array<number>;
}
// 0，1的枚举
export enum nums {
  zero = 0,
  one = 1
}
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
