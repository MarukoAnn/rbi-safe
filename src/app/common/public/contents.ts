import {OrgTree, TreeOption} from './Api';

// p-calendar语言本地化
export const Es = {
  firstDayOfWeek: 1,
  dayNames: ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'],
  dayNamesShort: ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'],
  dayNamesMin: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
  monthNamesShort: ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'],
  dateFormat: 'yy-mm-dd',
  today: '当前时间',
  clear: '清除'
};

// p-tree树形结构初始化函数
export function orgInitializeTree(data): any {
  const oneChild = [];
  for (const item of data) {
    const childnode: OrgTree = {};
    for (const refs in item) {
      if (refs === 'chiled') {
        continue;
      }
      if (refs === 'organizationName') {
        childnode.label = item.organizationName;
      }
      else {
        if (item.hasOwnProperty(refs)) {
          childnode[refs] = item[refs];
        }
      }
    }
    if (item.chiled != null && item.chiled.length !== 0) {
      childnode.children = orgInitializeTree(item.chiled);
    }
    else {
      childnode.children = [];
      childnode.icon = 'fa fa-address-card-o';
    }
    oneChild.push(childnode);
  }
  return oneChild;
}

/**
 * 树形结构初始化工具函数
 * @param data 需要初始化的数据
 * @param option 初始化配置信息
 */
export function initializeTree(data, option: TreeOption): any {
  const oneChild = [];
  for (const item of data) {
    const childnode: any = {};
    for (const refs in item) {
      if (item.hasOwnProperty(refs)) {
        if (refs === option.labelName) {
          childnode.label = item[option.labelName];
          continue;
        }
        if (refs === option.childrenName) {
          continue;
        }
        childnode[refs] = item[refs];
      }
    }
    if (item[option.childrenName] != null && item[option.childrenName].length !== 0) {
      childnode.children = initializeTree(item[option.childrenName], option);
    }
    else {
      childnode.children = [];
      childnode.icon = option.icon;
    }
    oneChild.push(childnode);
  }
  return oneChild;
}

// 数据结构模拟数据
export const dataTrees = [
  {
    'label': 'Documents',
    'data': 'Documents Folder',
    'icon': 'pi pi-folder-open',
    'expandedIcon': 'pi pi-folder-open',
    'collapsedIcon': 'pi pi-folder',
    'children': [{
      'label': 'Work',
      'data': 'Work Folder',
      'expandedIcon': 'pi pi-folder-open',
      'collapsedIcon': 'pi pi-folder',
      'children': [{'label': 'Expenses.doc', 'icon': 'pi pi-file', 'data': 'Expenses Document'}, {'label': 'Resume.doc', 'icon': 'pi pi-file', 'data': 'Resume Document'}]
    },
      {
        'label': 'Home',
        'data': 'Home Folder',
        'expandedIcon': 'pi pi-folder-open',
        'collapsedIcon': 'pi pi-folder',
        'children': [{'label': 'Invoices.txt', 'icon': 'pi pi-file', 'data': 'Invoices for this month'}]
      }]
  },
  {
    'label': 'Pictures',
    'data': 'Pictures Folder',
    'expandedIcon': 'pi pi-folder-open',
    'collapsedIcon': 'pi pi-folder',
    'children': [
      {'label': 'barcelona.jpg', 'icon': 'pi pi-image', 'data': 'Barcelona Photo'},
      {'label': 'logo.jpg', 'icon': 'pi pi-file', 'data': 'PrimeFaces Logo'},
      {'label': 'primeui.png', 'icon': 'pi pi-image', 'data': 'PrimeUI Logo'}]
  },
  {
    'label': 'Movies',
    'data': 'Movies Folder',
    'expandedIcon': 'pi pi-folder-open',
    'collapsedIcon': 'pi pi-folder',
    'children': [{
      'label': 'Al Pacino',
      'data': 'Pacino Movies',
      'children': [{'label': 'Scarface', 'icon': 'pi pi-video', 'data': 'Scarface Movie'}, {'label': 'Serpico', 'icon': 'pi pi-file-video', 'data': 'Serpico Movie'}]
    },
      {
        'label': 'Robert De Niro',
        'data': 'De Niro Movies',
        'children': [{'label': 'Goodfellas', 'icon': 'pi pi-video', 'data': 'Goodfellas Movie'}, {'label': 'Untouchables', 'icon': 'pi pi-video', 'data': 'Untouchables Movie'}]
      }]
  }
];
