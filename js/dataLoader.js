// 定义 datamap 数据
let dataMap = {
        //学生成绩
        // dataList1: [
        //     {name:'高一上学期10月月考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:590,rankValue:6,rankName:'班排',rankValue2:131,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:590,rankValue:6,rankName:'班排',rankValue2:131,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:104,rankValue:5,rankName:'班排',rankValue2:57,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:119,rankValue:17,rankName:'班排',rankValue2:262,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:112.5,rankValue:10,rankName:'班排',rankValue2:130,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:91,rankValue:7,rankName:'班排',rankValue2:104,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:89,rankValue:7,rankName:'班排',rankValue2:120,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:89,rankValue:7,rankName:'班排',rankValue2:120,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:74,rankValue:28,rankName:'班排',rankValue2:399,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:74,rankValue:28,rankName:'班排',rankValue2:399,rankName2:'年排'},
        //         ]
        //     },
        //     {name:'高一上学期半期考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:573,rankValue:4,rankName:'班排',rankValue2:86,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:573,rankValue:4,rankName:'班排',rankValue2:86,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:104,rankValue:10,rankName:'班排',rankValue2:116,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:108,rankValue:19,rankName:'班排',rankValue2:299,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:116.5,rankValue:20,rankName:'班排',rankValue2:135,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:80,rankValue:7,rankName:'班排',rankValue2:113,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:73,rankValue:13,rankName:'班排',rankValue2:159,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:73,rankValue:13,rankName:'班排',rankValue2:159,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:91,rankValue:1,rankName:'班排',rankValue2:12,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:91,rankValue:1,rankName:'班排',rankValue2:12,rankName2:'年排'},
        //         ]
        //     },
        //
        //     {name:'高一上学期期末考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:630,rankValue:1,rankName:'班排',rankValue2:23,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:630,rankValue:1,rankName:'班排',rankValue2:23,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:115,rankValue:5,rankName:'班排',rankValue2:41,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:118,rankValue:7,rankName:'班排',rankValue2:101,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:138,rankValue:6,rankName:'班排',rankValue2:19,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:83,rankValue:10,rankName:'班排',rankValue2:105,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:90,rankValue:7,rankName:'班排',rankValue2:114,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:90,rankValue:7,rankName:'班排',rankValue2:114,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:86,rankValue:12,rankName:'班排',rankValue2:225,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:86,rankValue:12,rankName:'班排',rankValue2:225,rankName2:'年排'},
        //         ]
        //     },
        //     {name:'高一下学期3月月考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:611,rankValue:2,rankName:'班排',rankValue2:17,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:589,rankValue:2,rankName:'班排',rankValue2:18,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:92,rankValue:32,rankName:'班排',rankValue2:435,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:137,rankValue:3,rankName:'班排',rankValue2:30,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:120,rankValue:4,rankName:'班排',rankValue2:34,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:93,rankValue:1,rankName:'班排',rankValue2:5,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:76,rankValue:9,rankName:'班排',rankValue2:148,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:83,rankValue:9,rankName:'班排',rankValue2:148,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:71,rankValue:2,rankName:'班排',rankValue2:75,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:86,rankValue:2,rankName:'班排',rankValue2:75,rankName2:'年排'},
        //         ]
        //     },
        //     {name:'高一下学期半期考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:586,rankValue:4,rankName:'班排',rankValue2:77,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:550,rankValue:4,rankName:'班排',rankValue2:128,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:105,rankValue:3,rankName:'班排',rankValue2:95,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:125,rankValue:4,rankName:'班排',rankValue2:61,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:126,rankValue:2,rankName:'班排',rankValue2:4,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:68,rankValue:21,rankName:'班排',rankValue2:258,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:62,rankValue:18,rankName:'班排',rankValue2:280,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:80,rankValue:18,rankName:'班排',rankValue2:280,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:64,rankValue:7,rankName:'班排',rankValue2:192,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:82,rankValue:7,rankName:'班排',rankValue2:192,rankName2:'年排'},
        //         ]
        //     },
        //     {name:'高一下学习6月月考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:591,rankValue:1,rankName:'班排',rankValue2:31,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:555,rankValue:1,rankName:'班排',rankValue2:40,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:106,rankValue:4,rankName:'班排',rankValue2:121,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:103,rankValue:9,rankName:'班排',rankValue2:139,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:117,rankValue:9,rankName:'班排',rankValue2:69,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:89,rankValue:1,rankName:'班排',rankValue2:2,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:71,rankValue:3,rankName:'班排',rankValue2:59,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:91,rankValue:3,rankName:'班排',rankValue2:59,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:69,rankValue:5,rankName:'班排',rankValue2:159,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:85,rankValue:5,rankName:'班排',rankValue2:159,rankName2:'年排'},
        //         ]
        //     },
        //     {name:'高一下学期期末考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:601,rankValue:4,rankName:'班排',rankValue2:67,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:575,rankValue:5,rankName:'班排',rankValue2:88,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:114,rankValue:3,rankName:'班排',rankValue2:42,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:126,rankValue:7,rankName:'班排',rankValue2:89,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:122,rankValue:3,rankName:'班排',rankValue2:34,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:78,rankValue:9,rankName:'班排',rankValue2:152,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:68,rankValue:13,rankName:'班排',rankValue2:187,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:86,rankValue:13,rankName:'班排',rankValue2:187,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:67,rankValue:20,rankName:'班排',rankValue2:283,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:75,rankValue:20,rankName:'班排',rankValue2:283,rankName2:'年排'},
        //         ]
        //     },
        //
        //     {name:'高二上学习10月月考',
        //         scoreList:[
        //             {scoreName:'总赋分',scoreValue:596,rankValue:6,rankName:'班排',rankValue2:83,rankName2:'年排'},
        //             {scoreName:'总分',scoreValue:564.5,rankValue:6,rankName:'班排',rankValue2:83,rankName2:'年排'},
        //             {scoreName:'语文',scoreValue:103,rankValue:17,rankName:'班排',rankValue2:250,rankName2:'年排'},
        //             {scoreName:'数学',scoreValue:133,rankValue:7,rankName:'班排',rankValue2:108,rankName2:'年排'},
        //             {scoreName:'英语',scoreValue:118.5,rankValue:3,rankName:'班排',rankValue2:35,rankName2:'年排'},
        //             {scoreName:'物理',scoreValue:75,rankValue:9,rankName:'班排',rankValue2:170,rankName2:'年排'},
        //             {scoreName:'化学',scoreValue:71,rankValue:1,rankName:'班排',rankValue2:55,rankName2:'年排'},
        //             {scoreName:'化学赋分',scoreValue:92,rankValue:1,rankName:'班排',rankValue2:55,rankName2:'年排'},
        //             {scoreName:'生物',scoreValue:64,rankValue:21,rankName:'班排',rankValue2:274,rankName2:'年排'},
        //             {scoreName:'生物赋分',scoreValue:74,rankValue:21,rankName:'班排',rankValue2:274,rankName2:'年排'},
        //         ]
        //     },
        // ],
        //value1:分数  value2:人数   value3:累计人数
        dataList1:[],
        dataList2:[
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
        //nd:年度 schoolName:学校名称 schoolNO:学校编号  value1:批次  value2:科类  value3:专业  bz:备注 number:人数 minScore:最低分 minLevel:最低分位次
        dataList3:[
            {nd:2024,
                schoolList:[{schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'理科试验班类', bz:'原本科一批新选科物理,化学(元培)(包含专业:数学类)', number:1, minScore:699, minLevel:63},
                    {schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'化学类', bz:'原本科一批新选科物理,化学(包含专业:化学、应用化学、应用化学(材料方向)、化学生物学)', number:1, minScore:709, minLevel:63},
                    {schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'生物科学类', bz:'原本科一批新选科不提科目要求', number:1, minScore:705, minLevel:63},
                ],},
            {nd:2023,
                schoolList:[{schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'心理学类', bz:'原本科一批新选科物理,化学(元培)(包含专业:数学类)', number:1, minScore:699, minLevel:63},
                    {schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'经济学类', bz:'原本科一批新选科物理,化学(包含专业:化学、应用化学、应用化学(材料方向)、化学生物学)', number:1, minScore:709, minLevel:63},
                    {schoolName:'北京大学',schoolNO:'0001', value1:'本科批B段', value2:'理科', value3:'工商管理类', bz:'原本科一批新选科不提科目要求', number:1, minScore:705, minLevel:63},
                ],},


        ],
    }
;

// 导出 dataMap 数据
window.dataMap = dataMap;