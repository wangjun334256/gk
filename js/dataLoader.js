// 定义 datamap 数据
let dataMap = {
        //学生成绩
        dataList1:[],
        dataList2:[],
        //nd:年度 schoolName:学校名称 schoolNO:学校编号  value1:批次  value2:科类  value3:专业  bz:备注 number:人数 minScore:最低分 minLevel:最低分位次
        dataList3: [
            {nd:2024,
                scoreList: [{value1:'699-750', value2:'51', value3:'51'},
                    {value1:'698', value2:'12', value3:'63'},
                    {value1:'697', value2:'14', value3:'77'},
                ]},
            {nd:2023,
                scoreList: [{value1:'699-750', value2:'41', value3:'41'},
                    {value1:'698', value2:'12', value3:'63'},
                    {value1:'697', value2:'14', value3:'77'},
                ]},
            {nd:2022,
                scoreList: [{value1:'699-750', value2:'31', value3:'31'},
                    {value1:'698', value2:'12', value3:'63'},
                    {value1:'697', value2:'14', value3:'77'},
                ]},
        ],
    }
;

// 导出 dataMap 数据
window.dataMap = dataMap;