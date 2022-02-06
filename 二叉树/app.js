/**
 * this is all about context.
 * this说白了就是找大佬，找拥有当前上下文（context）的对象（context object）
    大佬可以分为六层，层数越高权力越大，this只会认最大的
 *  第一层：世界尽头：权利最小的大佬就是作为备胎的存在，在普通情况下就是全局，浏览器就是window。在use strict的情况下就是undefined。
    第二层：点石成金：this就是函数前面的. -点(context obj)（这个就是对应详细章节的隐式this，显式this,函数调用模式）
    第三层：指腹为婚，使用call和apply，通过参数指定this（第三层和第四层对应章节的改变this，就是call,apply和bind）

    第四层：海誓山盟，bind通过一个新的函数提供永久绑定，在后面再使用call或者apply会被覆盖掉就不起作用了。（同上）
    第五层：内有乾坤，new一个函数的时候，就会把this绑定在新对象上，在调用函数的时候，会覆盖bind的绑定（对应new对象，构造器调用模式）
    第六层：军令如山，箭头函数，this被永远封印在词法作用域当中，在代码运行前就可以确定（只要看它在哪里创建的就可以了），没有其他可以覆盖
 */

//默认绑定，隐式，显式，new绑定，这四条规则的优先级由上到下以此递减

// var boss1 = {
//     name: 'boss1',
//     returnThis () {
//         console.log('boss1:');
//         console.log(this);
//       return this
//     }
//   }

//   var boss2 = {
//     name: 'boss2',
//     returnThis () {
//         console.log('boss2:');
//         console.log(this);
//       return boss1.returnThis()
//     }
//   }

//   var boss3 = {
//     name: 'boss3',
//     returnThis () {
//       var returnThis = boss1.returnThis
//       console.log('boss3:');
//       console.log(this);
//       return returnThis()
//     }
//   }

//   boss1.returnThis() // boss1
//   boss2.returnThis() // ? boss2
//   boss3.returnThis() // ? window

const tree = [
	({
		id: 399,
		name: '课程顾问',
		type: 1,
		status: 0,
		staff_id: '',
		children: [
			{
				id: 400,
				name: '童宇周团队',
				type: 1,
				status: 0,
				staff_id: '',
				children: [
					{
						id: 403,
						name: '吕永辉团队',
						type: 1,
						status: 0,
						staff_id: '',
						children: [
							{
								id: 11,
								name: 'CC04',
								type: 1,
								status: 0,
								staff_id: '',
								children: [
									{
										id: 239,
										name: '祝艳平--KS0032',
										type: 2,
										status: 1,
										staff_id: 'KS0032',
										children: [],
										pid: 11,
									},
									{
										id: 254,
										name: '芦光炎--KS0036',
										type: 2,
										status: 1,
										staff_id: 'KS0036',
										children: [],
										pid: 11,
									},
									{
										id: 288,
										name: '叶鸣敏--KS0052',
										type: 2,
										status: 1,
										staff_id: 'KS0052',
										children: [],
										pid: 11,
									},
									{
										id: 302,
										name: '许正凯--KS0058',
										type: 2,
										status: 1,
										staff_id: 'KS0058',
										children: [],
										pid: 11,
									},
									{
										id: 531,
										name: 'jim2--TEST126',
										type: 2,
										status: 1,
										staff_id: 'TEST126',
										children: [],
										pid: 11,
									},
									{
										id: 1235,
										name: '沈思--KS0410',
										type: 2,
										status: 1,
										staff_id: 'KS0410',
										children: [],
										pid: 11,
									},
									{
										id: 1383,
										name: '单雄',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 1387,
										name: '孙大伟',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 1434,
										name: '路健',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 1821,
										name: '王琪琪--KS0476',
										type: 2,
										status: 1,
										staff_id: 'KS0476',
										children: [],
										pid: 11,
									},
									{
										id: 1839,
										name: '徐志清',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 1858,
										name: '汪希夷--KS0491',
										type: 2,
										status: 1,
										staff_id: 'KS0491',
										children: [],
										pid: 11,
									},
									{
										id: 2239,
										name: '祝刘红--KS0542',
										type: 2,
										status: 1,
										staff_id: 'KS0542',
										children: [],
										pid: 11,
									},
									{
										id: 2255,
										name: '石晓霞',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2325,
										name: '汪艳',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2435,
										name: '秦宇',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2436,
										name: '何万',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2469,
										name: '王晶--KS0602',
										type: 2,
										status: 1,
										staff_id: 'KS0602',
										children: [],
										pid: 11,
									},
									{
										id: 2533,
										name: '李圆圆2',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2562,
										name: '李强10--KS0626',
										type: 2,
										status: 1,
										staff_id: 'KS0626',
										children: [],
										pid: 11,
									},
									{
										id: 2581,
										name: '朱灵艳--KS0627',
										type: 2,
										status: 1,
										staff_id: 'KS0627',
										children: [],
										pid: 11,
									},
									{
										id: 2582,
										name: '毕金梅--KS0628',
										type: 2,
										status: 1,
										staff_id: 'KS0628',
										children: [],
										pid: 11,
									},
									{
										id: 2614,
										name: '李长庭',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2620,
										name: '马景浩--KS0637',
										type: 2,
										status: 1,
										staff_id: 'KS0637',
										children: [],
										pid: 11,
									},
									{
										id: 2622,
										name: '赵慧明--KS0638',
										type: 2,
										status: 1,
										staff_id: 'KS0638',
										children: [],
										pid: 11,
									},
									{
										id: 2658,
										name: '邓凯林--KS0644',
										type: 2,
										status: 1,
										staff_id: 'KS0644',
										children: [],
										pid: 11,
									},
									{
										id: 2973,
										name: '葛严',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 2975,
										name: '孙昊天--KS0731',
										type: 2,
										status: 1,
										staff_id: 'KS0731',
										children: [],
										pid: 11,
									},
									{
										id: 3013,
										name: '何娇娇',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 3021,
										name: '贺海乐--KS0739',
										type: 2,
										status: 1,
										staff_id: 'KS0739',
										children: [],
										pid: 11,
									},
									{
										id: 3022,
										name: '刁旭贺--KS0735',
										type: 2,
										status: 1,
										staff_id: 'KS0735',
										children: [],
										pid: 11,
									},
									{
										id: 3023,
										name: '胡逸凡--KS0734',
										type: 2,
										status: 1,
										staff_id: 'KS0734',
										children: [],
										pid: 11,
									},
									{
										id: 3024,
										name: ' 张倩',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 11,
									},
									{
										id: 4682,
										name: 'TMK测试-吴炀--15143623462',
										type: 2,
										status: 1,
										staff_id: '15143623462',
										children: [],
										pid: 11,
									},
								],
								pid: 403,
							},
						],
						pid: 400,
					},
				],
				pid: 399,
			},
			{
				id: 422,
				name: '史丹妮团队',
				type: 1,
				status: 0,
				staff_id: '',
				children: [
					{
						id: 423,
						name: '总监自带',
						type: 1,
						status: 0,
						staff_id: '',
						children: [
							{
								id: 4,
								name: 'CC02',
								type: 1,
								status: 0,
								staff_id: '',
								children: [
									{
										id: 110,
										name: '史丹妮--KS0002',
										type: 2,
										status: 1,
										staff_id: 'KS0002',
										children: [],
										pid: 4,
									},
									{
										id: 235,
										name: '李芦辉煜--KS0029',
										type: 2,
										status: 1,
										staff_id: 'KS0029',
										children: [],
										pid: 4,
									},
									{
										id: 304,
										name: '陶顺--KS0056',
										type: 2,
										status: 1,
										staff_id: 'KS0056',
										children: [],
										pid: 4,
									},
									{
										id: 305,
										name: '史国栋--KS0057',
										type: 2,
										status: 1,
										staff_id: 'KS0057',
										children: [],
										pid: 4,
									},
									{
										id: 327,
										name: '孙营营--KS0079',
										type: 2,
										status: 1,
										staff_id: 'KS0079',
										children: [],
										pid: 4,
									},
									{
										id: 410,
										name: '葛贤松--KS0104',
										type: 2,
										status: 1,
										staff_id: 'KS0104',
										children: [],
										pid: 4,
									},
									{
										id: 446,
										name: '孟子扬--KS0117',
										type: 2,
										status: 1,
										staff_id: 'KS0117',
										children: [],
										pid: 4,
									},
									{
										id: 618,
										name: '江林11--KS0172',
										type: 2,
										status: 1,
										staff_id: 'KS0172',
										children: [],
										pid: 4,
									},
									{
										id: 1460,
										name: '卞加琪--KS0646',
										type: 2,
										status: 1,
										staff_id: 'KS0646',
										children: [],
										pid: 4,
									},
									{
										id: 1501,
										name: '吴鹏佩--KS0436',
										type: 2,
										status: 1,
										staff_id: 'KS0436',
										children: [],
										pid: 4,
									},
									{
										id: 1624,
										name: '贾林翔--KS0473',
										type: 2,
										status: 1,
										staff_id: 'KS0473',
										children: [],
										pid: 4,
									},
									{
										id: 2339,
										name: '张文宁',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 4,
									},
									{
										id: 2341,
										name: '王韶华--KS0558',
										type: 2,
										status: 1,
										staff_id: 'KS0558',
										children: [],
										pid: 4,
									},
									{
										id: 2342,
										name: '涂铭--KS0556',
										type: 2,
										status: 1,
										staff_id: 'KS0556',
										children: [],
										pid: 4,
									},
									{
										id: 2627,
										name: '贾博浩--KS0633',
										type: 2,
										status: 1,
										staff_id: 'KS0633',
										children: [],
										pid: 4,
									},
								],
								pid: 423,
							},
							{
								id: 82,
								name: 'CC11',
								type: 1,
								status: 0,
								staff_id: '',
								children: [
									{
										id: 197,
										name: 'CC老师--TEST69',
										type: 2,
										status: 1,
										staff_id: 'TEST69',
										children: [],
										pid: 82,
									},
									{
										id: 829,
										name: '龙猫老师--TEST90',
										type: 2,
										status: 1,
										staff_id: 'TEST90',
										children: [],
										pid: 82,
									},
									{
										id: 1054,
										name: '鲨鱼老师--K0679',
										type: 2,
										status: 1,
										staff_id: 'K0679',
										children: [],
										pid: 82,
									},
									{
										id: 1194,
										name: '大牙老师--K0736',
										type: 2,
										status: 1,
										staff_id: 'K0736',
										children: [],
										pid: 82,
									},
									{
										id: 1206,
										name: '小森林老师--K0735',
										type: 2,
										status: 1,
										staff_id: 'K0735',
										children: [],
										pid: 82,
									},
									{
										id: 1381,
										name: 'Lucky老师--K0787',
										type: 2,
										status: 1,
										staff_id: 'K0787',
										children: [],
										pid: 82,
									},
									{
										id: 1519,
										name: 'AA老师--K0864',
										type: 2,
										status: 1,
										staff_id: 'K0864',
										children: [],
										pid: 82,
									},
									{
										id: 1541,
										name: '黄洁--K0835',
										type: 2,
										status: 1,
										staff_id: 'K0835',
										children: [],
										pid: 82,
									},
									{
										id: 2314,
										name: '胖丁老师--K1188',
										type: 2,
										status: 1,
										staff_id: 'K1188',
										children: [],
										pid: 82,
									},
									{
										id: 2398,
										name: '放大镜老师--K1227',
										type: 2,
										status: 1,
										staff_id: 'K1227',
										children: [],
										pid: 82,
									},
									{
										id: 2487,
										name: '卡比老师--K1673',
										type: 2,
										status: 1,
										staff_id: 'K1673',
										children: [],
										pid: 82,
									},
									{
										id: 2493,
										name: '小粥老师--K1264',
										type: 2,
										status: 1,
										staff_id: 'K1264',
										children: [],
										pid: 82,
									},
									{
										id: 2565,
										name: '大大老师--K1294',
										type: 2,
										status: 1,
										staff_id: 'K1294',
										children: [],
										pid: 82,
									},
									{
										id: 2784,
										name: '小气球老师--K1388',
										type: 2,
										status: 1,
										staff_id: 'K1388',
										children: [],
										pid: 82,
									},
								],
								pid: 423,
							},
							{
								id: 424,
								name: 'CC28',
								type: 1,
								status: 0,
								staff_id: '',
								children: [],
								pid: 423,
							},
							{
								id: 425,
								name: 'CC19',
								type: 1,
								status: 0,
								staff_id: '',
								children: [],
								pid: 423,
							},
						],
						pid: 422,
					},
					{
						id: 426,
						name: '陈乐团队',
						type: 1,
						status: 0,
						staff_id: '',
						children: [
							{
								id: 3,
								name: 'CC01',
								type: 1,
								status: 0,
								staff_id: '',
								children: [
									{
										id: 445,
										name: '陈乐--KS0116',
										type: 2,
										status: 1,
										staff_id: 'KS0116',
										children: [],
										pid: 3,
									},
									{
										id: 524,
										name: '郑勇1--KS0132',
										type: 2,
										status: 1,
										staff_id: 'KS0132',
										children: [],
										pid: 3,
									},
									{
										id: 525,
										name: '李慧超--KS0133',
										type: 2,
										status: 1,
										staff_id: 'KS0133',
										children: [],
										pid: 3,
									},
									{
										id: 615,
										name: '薛雅琪--KS0171',
										type: 2,
										status: 1,
										staff_id: 'KS0171',
										children: [],
										pid: 3,
									},
									{
										id: 774,
										name: '王金--KS0220',
										type: 2,
										status: 1,
										staff_id: 'KS0220',
										children: [],
										pid: 3,
									},
									{
										id: 794,
										name: '孙瀚卿--KS0226',
										type: 2,
										status: 1,
										staff_id: 'KS0226',
										children: [],
										pid: 3,
									},
									{
										id: 824,
										name: '巩金照--KS0243',
										type: 2,
										status: 1,
										staff_id: 'KS0243',
										children: [],
										pid: 3,
									},
									{
										id: 1102,
										name: '方银萍--KS0367',
										type: 2,
										status: 1,
										staff_id: 'KS0367',
										children: [],
										pid: 3,
									},
									{
										id: 2155,
										name: '马朋莉--KS0543',
										type: 2,
										status: 1,
										staff_id: 'KS0543',
										children: [],
										pid: 3,
									},
									{
										id: 2925,
										name: '鲍远航--KS0715',
										type: 2,
										status: 1,
										staff_id: 'KS0715',
										children: [],
										pid: 3,
									},
									{
										id: 3273,
										name: '王洪艳',
										type: 2,
										status: 1,
										staff_id: '',
										children: [],
										pid: 3,
									},
									{
										id: 3277,
										name: '卢鹏迁--KS0787',
										type: 2,
										status: 1,
										staff_id: 'KS0787',
										children: [],
										pid: 3,
									},
									{
										id: 3285,
										name: '曹刘华--KS0786',
										type: 2,
										status: 1,
										staff_id: 'KS0786',
										children: [],
										pid: 3,
									},
									{
										id: 645196,
										name: 'SMZ--TEST46',
										type: 2,
										status: 1,
										staff_id: 'TEST46',
										children: [],
										pid: 3,
									},
								],
								pid: 426,
							},
							{
								id: 427,
								name: 'CC32',
								type: 1,
								status: 0,
								staff_id: '',
								children: [],
								pid: 426,
							},
							{
								id: 428,
								name: 'CC33',
								type: 1,
								status: 0,
								staff_id: '',
								children: [
									{
										id: 716,
										name: '龚佳琪--K0512',
										type: 2,
										status: 1,
										staff_id: 'K0512',
										children: [],
										pid: 428,
									},
								],
								pid: 426,
							},
						],
						pid: 422,
					},
				],
				pid: 399,
			},
			{
				id: 429,
				name: '卞加琪团队',
				type: 1,
				status: 0,
				staff_id: '',
				children: [
					{
						id: 3551,
						name: '曹伊--2111',
						type: 2,
						status: 1,
						staff_id: '2111',
						children: [],
						pid: 429,
					},
					{
						id: 430,
						name: 'CC36',
						type: 1,
						status: 0,
						staff_id: '',
						children: [
							{
								id: 303,
								name: '温绍玲--KS0055',
								type: 2,
								status: 1,
								staff_id: 'KS0055',
								children: [],
								pid: 430,
							},
							{
								id: 978,
								name: '倪琦--K9780',
								type: 2,
								status: 1,
								staff_id: 'K9780',
								children: [],
								pid: 430,
							},
							{
								id: 3551,
								name: '曹伊--2111',
								type: 2,
								status: 1,
								staff_id: '2111',
								children: [],
								pid: 430,
							},
							{
								id: 4646,
								name: '魏燕燕--KS1038',
								type: 2,
								status: 1,
								staff_id: 'KS1038',
								children: [],
								pid: 430,
							},
							{
								id: 660658,
								name: '于同富--TEST313',
								type: 2,
								status: 1,
								staff_id: 'TEST313',
								children: [],
								pid: 430,
							},
						],
						pid: 429,
					},
					{
						id: 431,
						name: 'CC25',
						type: 1,
						status: 0,
						staff_id: '',
						children: [],
						pid: 429,
					},
				],
				pid: 399,
			},
		],
		pid: 0,
	},
	{
		id: 47,
		name: '研发中心7【2级部门】',
		type: 1,
		status: 0,
		staff_id: '',
		children: [
			{
				id: 287,
				name: '上海运营平台研发中心',
				type: 1,
				status: 0,
				staff_id: '',
				children: [
					{
						id: 48,
						name: '产品组',
						type: 1,
						status: 0,
						staff_id: '',
						children: [
							{
								id: 394,
								name: '李艳',
								type: 2,
								status: 1,
								staff_id: '',
								children: [],
								pid: 48,
							},
						],
						pid: 287,
					},
				],
				pid: 47,
			},
		],
		pid: 0,
	}),
];
//数据主要用于展示，构造的不全，主要用于帮助理解算法
const checkedNodes = [
	{ label: '祝艳平--KS0032', pid: 11, type: 2, value: 239 },
	{ children: [], label: '吕永辉团队', pid: 400, type: 1 },
];
const selectedKeys = [1,2,3,4]
//如何筛选出选中节点的最外层的节点？过滤掉所有子节点
function keepWrapNode(checkedNodes, selectedKeys){
    const c = {}
    checkedNodes.map(item=>{
        if(item.children){
            if(c[item.value]){
                c[item.value].l = item.children.length;
            }else{
                c[item.value] = {l: item.childre.length, n:[]};//初始化缓存所有选中的节点的孩子长度，和对应的实际有的孩子
            }
        }
        if(c[item.pid]){
            c[item.pid].n.push(item.value);
            if(c[item.pid].n.length === c[item.pid].l){
                selectedKeys = selectedKeys.filter(_i=>{!c[item.pid].n.includes(_i)});//这一步是筛选的关键，当所有的实际的孩子和选中的孩子一致的时候就是目标外层元素，留下，但是他的孩子不要
            }
        }else{
            c[item.pid] = {n:[item.value]};//初始化缓存所有选中节点的父节点里面对应选中的孩子的值，主要也是为了后面帅选做准备
        }
    })
}

keepWrapNode();

//级联下拉组件选中数据回显
export function foundFar(data, val) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] && data[i].value == val) {
        return [val];
      }
      if (data[i] && data[i].children) {
        const far = foundFar(data[i].children, val);
        if (far) {
          return [data[i].value].concat(far);
        }
      }
    }
  }

//树结构的组件一般有两种方式处理，一个是选中的整个链路从叶子到根的全部元素，全部提交全部回显，一种是指提交叶子节点，回显的时候也是只返回叶子节点，这样就需要自己去构造一个完整勾选的链路
//也就是当前的foundFar的这种方法
// 还有一种是不需要给出所有的叶子，而是需要给出的所有父亲，这种情况下，就是用到KeepWrapNode的这种方法

// https://juejin.cn/post/7008340119681761288
// 这篇文章挺有用的学起来
