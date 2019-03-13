import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    titleCity: '',
    chooseStatus: true, // 定位成功与否标识
    chooseStatus2: true, // 重新定位标识
    isloadingCity: true, // 
    cityCode: '',
    mobile: '',
    consumerHotline: '',
    isIphone: false,
    cityList: [
      {
        cityList: [
          { codeId: 110100, codeName: "北京" },
          { codeId: 310100, codeName: "上海" },
          { codeId: 440100, codeName: "广州" },
          { codeId: 440300, codeName: "深圳" },
          { codeId: 510100, codeName: "成都" },
          { codeId: 420100, codeName: "武汉" },
        ],
        codeId: 1,
        codeName: "已开通城市"
      },
      {
        "cityList": [
          { "codeId": 340800, "codeName": "安庆" }, { "codeId": 610900, "codeName": "安康" }, { "codeId": 410500, "codeName": "安阳" }, { "codeId": 520400, "codeName": "安顺" }, { "codeId": 820101, "codeName": "澳门半岛" }, { "codeId": 652900, "codeName": "阿克苏" }, { "codeId": 654300, "codeName": "阿勒泰" }, { "codeId": 513200, "codeName": "阿坝" }, { "codeId": 152900, "codeName": "阿拉善" }, { "codeId": 659002, "codeName": "阿拉尔" }, { "codeId": 542500, "codeName": "阿里" }, { "codeId": 210300, "codeName": "鞍山" }], "codeId": 1, "codeName": "A"
      }, { "cityList": [{ "codeId": 341600, "codeName": "亳州" }, { "codeId": 469029, "codeName": "保亭" }, { "codeId": 130600, "codeName": "保定" }, { "codeId": 530500, "codeName": "保山" }, { "codeId": 150200, "codeName": "包头" }, { "codeId": 110100, "codeName": "北京" }, { "codeId": 810112, "codeName": "北区" }, { "codeId": 659005, "codeName": "北屯" }, { "codeId": 450500, "codeName": "北海" }, { "codeId": 652700, "codeName": "博州" }, { "codeId": 610300, "codeName": "宝鸡" }, { "codeId": 511900, "codeName": "巴中" }, { "codeId": 652800, "codeName": "巴州" }, { "codeId": 150800, "codeName": "巴彦淖尔" }, { "codeId": 210500, "codeName": "本溪" }, { "codeId": 520500, "codeName": "毕节" }, { "codeId": 371600, "codeName": "滨州" }, { "codeId": 220800, "codeName": "白城" }, { "codeId": 220600, "codeName": "白山" }, { "codeId": 469025, "codeName": "白沙" }, { "codeId": 620400, "codeName": "白银" }, { "codeId": 451000, "codeName": "百色" }, { "codeId": 340300, "codeName": "蚌埠" }], "codeId": 2, "codeName": "B" }, { "cityList": [{ "codeId": 451400, "codeName": "崇左" }, { "codeId": 320400, "codeName": "常州" }, { "codeId": 430700, "codeName": "常德" }, { "codeId": 510100, "codeName": "成都" }, { "codeId": 130800, "codeName": "承德" }, { "codeId": 652300, "codeName": "昌吉" }, { "codeId": 469026, "codeName": "昌江" }, { "codeId": 540300, "codeName": "昌都" }, { "codeId": 211300, "codeName": "朝阳" }, { "codeId": 532300, "codeName": "楚雄" }, { "codeId": 341700, "codeName": "池州" }, { "codeId": 130900, "codeName": "沧州" }, { "codeId": 341100, "codeName": "滁州" }, { "codeId": 445100, "codeName": "潮州" }, { "codeId": 469023, "codeName": "澄迈" }, { "codeId": 150400, "codeName": "赤峰" }, { "codeId": 431000, "codeName": "郴州" }, { "codeId": 500100, "codeName": "重庆" }, { "codeId": 220100, "codeName": "长春" }, { "codeId": 430100, "codeName": "长沙" }, { "codeId": 140400, "codeName": "长治" }], "codeId": 3, "codeName": "C" }, { "cityList": [{ "codeId": 810102, "codeName": "东区" }, { "codeId": 469007, "codeName": "东方" }, { "codeId": 441900, "codeName": "东莞" }, { "codeId": 370500, "codeName": "东营" }, { "codeId": 210600, "codeName": "丹东" }, { "codeId": 460400, "codeName": "儋州" }, { "codeId": 820102, "codeName": "凼仔" }, { "codeId": 232700, "codeName": "大兴安岭" }, { "codeId": 140200, "codeName": "大同" }, { "codeId": 810116, "codeName": "大埔区" }, { "codeId": 230600, "codeName": "大庆" }, { "codeId": 532900, "codeName": "大理" }, { "codeId": 210200, "codeName": "大连" }, { "codeId": 469021, "codeName": "定安" }, { "codeId": 621100, "codeName": "定西" }, { "codeId": 533100, "codeName": "德宏" }, { "codeId": 371400, "codeName": "德州" }, { "codeId": 510600, "codeName": "德阳" }, { "codeId": 511700, "codeName": "达州" }, { "codeId": 533400, "codeName": "迪庆" }], "codeId": 4, "codeName": "D" }, { "cityList": [{ "codeId": 422800, "codeName": "恩施" }, { "codeId": 150600, "codeName": "鄂尔多斯" }, { "codeId": 420700, "codeName": "鄂州" }], "codeId": 5, "codeName": "E" }, { "cityList": [{ "codeId": 440600, "codeName": "佛山" }, { "codeId": 361000, "codeName": "抚州" }, { "codeId": 210400, "codeName": "抚顺" }, { "codeId": 350100, "codeName": "福州" }, { "codeId": 210900, "codeName": "阜新" }, { "codeId": 341200, "codeName": "阜阳" }, { "codeId": 450600, "codeName": "防城港" }], "codeId": 6, "codeName": "F" }, { "cityList": [{ "codeId": 640400, "codeName": "固原" }, { "codeId": 510800, "codeName": "广元" }, { "codeId": 511600, "codeName": "广安" }, { "codeId": 440100, "codeName": "广州" }, { "codeId": 632600, "codeName": "果洛" }, { "codeId": 450300, "codeName": "桂林" }, { "codeId": 623000, "codeName": "甘南" }, { "codeId": 513300, "codeName": "甘孜" }, { "codeId": 810104, "codeName": "观塘区" }, { "codeId": 450800, "codeName": "贵港" }, { "codeId": 520100, "codeName": "贵阳" }, { "codeId": 360700, "codeName": "赣州" }, { "codeId": 710200, "codeName": "高雄" }], "codeId": 7, "codeName": "G" }, { "cityList": [{ "codeId": 340100, "codeName": "合肥" }, { "codeId": 150700, "codeName": "呼伦贝尔" }, { "codeId": 150100, "codeName": "呼和浩特" }, { "codeId": 653200, "codeName": "和田" }, { "codeId": 650500, "codeName": "哈密" }, { "codeId": 230100, "codeName": "哈尔滨" }, { "codeId": 431200, "codeName": "怀化" }, { "codeId": 441300, "codeName": "惠州" }, { "codeId": 330100, "codeName": "杭州" }, { "codeId": 610700, "codeName": "汉中" }, { "codeId": 451200, "codeName": "河池" }, { "codeId": 441600, "codeName": "河源" }, { "codeId": 630200, "codeName": "海东" }, { "codeId": 632200, "codeName": "海北" }, { "codeId": 632500, "codeName": "海南" }, { "codeId": 460100, "codeName": "海口" }, { "codeId": 632800, "codeName": "海西" }, { "codeId": 340600, "codeName": "淮北" }, { "codeId": 340400, "codeName": "淮南" }, { "codeId": 320800, "codeName": "淮安" }, { "codeId": 330500, "codeName": "湖州" }, { "codeId": 532500, "codeName": "红河" }, { "codeId": 712600, "codeName": "花莲" }, { "codeId": 371700, "codeName": "菏泽" }, { "codeId": 211400, "codeName": "葫芦岛" }, { "codeId": 131100, "codeName": "衡水" }, { "codeId": 430400, "codeName": "衡阳" }, { "codeId": 451100, "codeName": "贺州" }, { "codeId": 130400, "codeName": "邯郸" }, { "codeId": 410600, "codeName": "鹤壁" }, { "codeId": 230400, "codeName": "鹤岗" }, { "codeId": 421100, "codeName": "黄冈" }, { "codeId": 632300, "codeName": "黄南" }, { "codeId": 810108, "codeName": "黄大仙区" }, { "codeId": 341000, "codeName": "黄山" }, { "codeId": 420200, "codeName": "黄石" }, { "codeId": 231100, "codeName": "黑河" }], "codeId": 8, "codeName": "H" }, { "cityList": [], "codeId": 9, "codeName": "I" }, { "cityList": [{ "codeId": 360400, "codeName": "九江" }, { "codeId": 810103, "codeName": "九龙" }, { "codeId": 230800, "codeName": "佳木斯" }, { "codeId": 360800, "codeName": "吉安" }, { "codeId": 220200, "codeName": "吉林" }, { "codeId": 711900, "codeName": "嘉义" }, { "codeId": 710900, "codeName": "嘉义" }, { "codeId": 330400, "codeName": "嘉兴" }, { "codeId": 620200, "codeName": "嘉峪关" }, { "codeId": 710700, "codeName": "基隆" }, { "codeId": 445200, "codeName": "揭阳" }, { "codeId": 140700, "codeName": "晋中" }, { "codeId": 140500, "codeName": "晋城" }, { "codeId": 360200, "codeName": "景德镇" }, { "codeId": 440700, "codeName": "江门" }, { "codeId": 370100, "codeName": "济南" }, { "codeId": 370800, "codeName": "济宁" }, { "codeId": 419001, "codeName": "济源" }, { "codeId": 410800, "codeName": "焦作" }, { "codeId": 421000, "codeName": "荆州" }, { "codeId": 420800, "codeName": "荆门" }, { "codeId": 620900, "codeName": "酒泉" }, { "codeId": 330700, "codeName": "金华" }, { "codeId": 620300, "codeName": "金昌" }, { "codeId": 210700, "codeName": "锦州" }, { "codeId": 230300, "codeName": "鸡西" }], "codeId": 10, "codeName": "J" }, { "cityList": [{ "codeId": 653000, "codeName": "克州" }, { "codeId": 650200, "codeName": "克拉玛依" }, { "codeId": 659008, "codeName": "可克达拉" }, { "codeId": 653100, "codeName": "喀什" }, { "codeId": 410200, "codeName": "开封" }, { "codeId": 530100, "codeName": "昆明" }, { "codeId": 659009, "codeName": "昆玉" }, { "codeId": 810111, "codeName": "葵青区" }], "codeId": 11, "codeName": "K" }, { "cityList": [{ "codeId": 622900, "codeName": "临夏" }, { "codeId": 141000, "codeName": "临汾" }, { "codeId": 371300, "codeName": "临沂" }, { "codeId": 530900, "codeName": "临沧" }, { "codeId": 469024, "codeName": "临高" }, { "codeId": 331100, "codeName": "丽水" }, { "codeId": 530700, "codeName": "丽江" }, { "codeId": 469027, "codeName": "乐东" }, { "codeId": 511100, "codeName": "乐山" }, { "codeId": 341500, "codeName": "六安" }, { "codeId": 520200, "codeName": "六盘水" }, { "codeId": 620100, "codeName": "兰州" }, { "codeId": 513400, "codeName": "凉山" }, { "codeId": 141100, "codeName": "吕梁" }, { "codeId": 431300, "codeName": "娄底" }, { "codeId": 131000, "codeName": "廊坊" }, { "codeId": 540100, "codeName": "拉萨" }, { "codeId": 451300, "codeName": "来宾" }, { "codeId": 540400, "codeName": "林芝" }, { "codeId": 450200, "codeName": "柳州" }, { "codeId": 510500, "codeName": "泸州" }, { "codeId": 410300, "codeName": "洛阳" }, { "codeId": 411100, "codeName": "漯河" }, { "codeId": 810110, "codeName": "离岛区" }, { "codeId": 371500, "codeName": "聊城" }, { "codeId": 371200, "codeName": "莱芜" }, { "codeId": 820103, "codeName": "路凼城" }, { "codeId": 820104, "codeName": "路环" }, { "codeId": 220400, "codeName": "辽源" }, { "codeId": 211000, "codeName": "辽阳" }, { "codeId": 320700, "codeName": "连云港" }, { "codeId": 621200, "codeName": "陇南" }, { "codeId": 469028, "codeName": "陵水" }, { "codeId": 350800, "codeName": "龙岩" }], "codeId": 12, "codeName": "L" }, { "cityList": [{ "codeId": 441400, "codeName": "梅州" }, { "codeId": 231000, "codeName": "牡丹江" }, { "codeId": 511400, "codeName": "眉山" }, { "codeId": 510700, "codeName": "绵阳" }, { "codeId": 711500, "codeName": "苗栗" }, { "codeId": 440900, "codeName": "茂名" }, { "codeId": 340500, "codeName": "马鞍山" }], "codeId": 13, "codeName": "M" }, { "cityList": [{ "codeId": 511000, "codeName": "内江" }, { "codeId": 320100, "codeName": "南京" }, { "codeId": 511300, "codeName": "南充" }, { "codeId": 810105, "codeName": "南区" }, { "codeId": 450100, "codeName": "南宁" }, { "codeId": 350700, "codeName": "南平" }, { "codeId": 710600, "codeName": "南投" }, { "codeId": 360100, "codeName": "南昌" }, { "codeId": 320600, "codeName": "南通" }, { "codeId": 411300, "codeName": "南阳" }, { "codeId": 350900, "codeName": "宁德" }, { "codeId": 330200, "codeName": "宁波" }, { "codeId": 533300, "codeName": "怒江" }, { "codeId": 540600, "codeName": "那曲" }], "codeId": 14, "codeName": "N" }, { "cityList": [], "codeId": 15, "codeName": "O" }, { "cityList": [{ "codeId": 712400, "codeName": "屏东" }, { "codeId": 620800, "codeName": "平凉" }, { "codeId": 410400, "codeName": "平顶山" }, { "codeId": 510400, "codeName": "攀枝花" }, { "codeId": 530800, "codeName": "普洱" }, { "codeId": 712700, "codeName": "澎湖" }, { "codeId": 410900, "codeName": "濮阳" }, { "codeId": 211100, "codeName": "盘锦" }, { "codeId": 350300, "codeName": "莆田" }, { "codeId": 360300, "codeName": "萍乡" }], "codeId": 16, "codeName": "P" }, { "cityList": [{ "codeId": 230900, "codeName": "七台河" }, { "codeId": 621000, "codeName": "庆阳" }, { "codeId": 530300, "codeName": "曲靖" }, { "codeId": 350500, "codeName": "泉州" }, { "codeId": 441800, "codeName": "清远" }, { "codeId": 429005, "codeName": "潜江" }, { "codeId": 469030, "codeName": "琼中" }, { "codeId": 469002, "codeName": "琼海" }, { "codeId": 130300, "codeName": "秦皇岛" }, { "codeId": 810117, "codeName": "荃湾区" }, { "codeId": 330800, "codeName": "衢州" }, { "codeId": 450700, "codeName": "钦州" }, { "codeId": 370200, "codeName": "青岛" }, { "codeId": 522600, "codeName": "黔东南" }, { "codeId": 522700, "codeName": "黔南" }, { "codeId": 522300, "codeName": "黔西南" }, { "codeId": 230200, "codeName": "齐齐哈尔" }], "codeId": 17, "codeName": "Q" }, { "cityList": [{ "codeId": 540200, "codeName": "日喀则" }, { "codeId": 371100, "codeName": "日照" }], "codeId": 18, "codeName": "R" }, { "cityList": [{ "codeId": 460200, "codeName": "三亚" }, { "codeId": 350400, "codeName": "三明" }, { "codeId": 460300, "codeName": "三沙" }, { "codeId": 411200, "codeName": "三门峡" }, { "codeId": 310100, "codeName": "上海" }, { "codeId": 361100, "codeName": "上饶" }, { "codeId": 420300, "codeName": "十堰" }, { "codeId": 659007, "codeName": "双河" }, { "codeId": 230500, "codeName": "双鸭山" }, { "codeId": 411400, "codeName": "商丘" }, { "codeId": 611000, "codeName": "商洛" }, { "codeId": 220300, "codeName": "四平" }, { "codeId": 341300, "codeName": "宿州" }, { "codeId": 321300, "codeName": "宿迁" }, { "codeId": 540500, "codeName": "山南" }, { "codeId": 140600, "codeName": "朔州" }, { "codeId": 220700, "codeName": "松原" }, { "codeId": 440500, "codeName": "汕头" }, { "codeId": 441500, "codeName": "汕尾" }, { "codeId": 210100, "codeName": "沈阳" }, { "codeId": 810114, "codeName": "沙田区" }, { "codeId": 440300, "codeName": "深圳" }, { "codeId": 810106, "codeName": "深水埗区" }, { "codeId": 640200, "codeName": "石嘴山" }, { "codeId": 130100, "codeName": "石家庄" }, { "codeId": 659001, "codeName": "石河子" }, { "codeId": 429021, "codeName": "神农架" }, { "codeId": 330600, "codeName": "绍兴" }, { "codeId": 231200, "codeName": "绥化" }, { "codeId": 320500, "codeName": "苏州" }, { "codeId": 510900, "codeName": "遂宁" }, { "codeId": 430500, "codeName": "邵阳" }, { "codeId": 421300, "codeName": "随州" }, { "codeId": 440200, "codeName": "韶关" }], "codeId": 19, "codeName": "S" }, { "cityList": [{ "codeId": 712500, "codeName": "台东" }, { "codeId": 710400, "codeName": "台中" }, { "codeId": 710100, "codeName": "台北" }, { "codeId": 710300, "codeName": "台南" }, { "codeId": 331000, "codeName": "台州" }, { "codeId": 650400, "codeName": "吐鲁番" }, { "codeId": 130200, "codeName": "唐山" }, { "codeId": 659003, "codeName": "图木舒克" }, { "codeId": 654200, "codeName": "塔城" }, { "codeId": 620500, "codeName": "天水" }, { "codeId": 120100, "codeName": "天津" }, { "codeId": 429006, "codeName": "天门" }, { "codeId": 140100, "codeName": "太原" }, { "codeId": 469022, "codeName": "屯昌" }, { "codeId": 810115, "codeName": "屯门区" }, { "codeId": 711400, "codeName": "桃园" }, { "codeId": 370900, "codeName": "泰安" }, { "codeId": 321200, "codeName": "泰州" }, { "codeId": 220500, "codeName": "通化" }, { "codeId": 150500, "codeName": "通辽" }, { "codeId": 211200, "codeName": "铁岭" }, { "codeId": 659006, "codeName": "铁门关" }, { "codeId": 520600, "codeName": "铜仁" }, { "codeId": 610200, "codeName": "铜川" }, { "codeId": 340700, "codeName": "铜陵" }], "codeId": 20, "codeName": "T" }, { "cityList": [], "codeId": 21, "codeName": "U" }, { "cityList": [], "codeId": 22, "codeName": "V" }, { "cityList": [{ "codeId": 469006, "codeName": "万宁" }, { "codeId": 150900, "codeName": "乌兰察布" }, { "codeId": 150300, "codeName": "乌海" }, { "codeId": 650100, "codeName": "乌鲁木齐" }, { "codeId": 659004, "codeName": "五家渠" }, { "codeId": 469001, "codeName": "五指山" }, { "codeId": 640300, "codeName": "吴忠" }, { "codeId": 371000, "codeName": "威海" }, { "codeId": 532600, "codeName": "文山" }, { "codeId": 469005, "codeName": "文昌" }, { "codeId": 320200, "codeName": "无锡" }, { "codeId": 450400, "codeName": "梧州" }, { "codeId": 620600, "codeName": "武威" }, { "codeId": 420100, "codeName": "武汉" }, { "codeId": 330300, "codeName": "温州" }, { "codeId": 610500, "codeName": "渭南" }, { "codeId": 810107, "codeName": "湾仔区" }, { "codeId": 370700, "codeName": "潍坊" }, { "codeId": 340200, "codeName": "芜湖" }], "codeId": 23, "codeName": "W" }, { "cityList": [{ "codeId": 429004, "codeName": "仙桃" }, { "codeId": 411500, "codeName": "信阳" }, { "codeId": 152200, "codeName": "兴安" }, { "codeId": 350200, "codeName": "厦门" }, { "codeId": 421200, "codeName": "咸宁" }, { "codeId": 610400, "codeName": "咸阳" }, { "codeId": 420900, "codeName": "孝感" }, { "codeId": 341800, "codeName": "宣城" }, { "codeId": 320300, "codeName": "徐州" }, { "codeId": 140900, "codeName": "忻州" }, { "codeId": 410700, "codeName": "新乡" }, { "codeId": 360500, "codeName": "新余" }, { "codeId": 711100, "codeName": "新北" }, { "codeId": 710800, "codeName": "新竹" }, { "codeId": 711300, "codeName": "新竹" }, { "codeId": 430300, "codeName": "湘潭" }, { "codeId": 433100, "codeName": "湘西" }, { "codeId": 420600, "codeName": "襄阳" }, { "codeId": 532800, "codeName": "西双版纳" }, { "codeId": 630100, "codeName": "西宁" }, { "codeId": 610100, "codeName": "西安" }, { "codeId": 810113, "codeName": "西贡区" }, { "codeId": 411000, "codeName": "许昌" }, { "codeId": 130500, "codeName": "邢台" }, { "codeId": 152500, "codeName": "锡林郭勒" }], "codeId": 24, "codeName": "X" }, { "cityList": [{ "codeId": 712100, "codeName": "云林" }, { "codeId": 445300, "codeName": "云浮" }, { "codeId": 230700, "codeName": "伊春" }, { "codeId": 654000, "codeName": "伊犁" }, { "codeId": 810118, "codeName": "元朗区" }, { "codeId": 711200, "codeName": "宜兰" }, { "codeId": 511500, "codeName": "宜宾" }, { "codeId": 420500, "codeName": "宜昌" }, { "codeId": 360900, "codeName": "宜春" }, { "codeId": 430600, "codeName": "岳阳" }, { "codeId": 610600, "codeName": "延安" }, { "codeId": 222400, "codeName": "延边" }, { "codeId": 321000, "codeName": "扬州" }, { "codeId": 610800, "codeName": "榆林" }, { "codeId": 431100, "codeName": "永州" }, { "codeId": 810109, "codeName": "油尖旺区" }, { "codeId": 370600, "codeName": "烟台" }, { "codeId": 450900, "codeName": "玉林" }, { "codeId": 632700, "codeName": "玉树" }, { "codeId": 530400, "codeName": "玉溪" }, { "codeId": 430900, "codeName": "益阳" }, { "codeId": 320900, "codeName": "盐城" }, { "codeId": 210800, "codeName": "营口" }, { "codeId": 140800, "codeName": "运城" }, { "codeId": 640100, "codeName": "银川" }, { "codeId": 441700, "codeName": "阳江" }, { "codeId": 140300, "codeName": "阳泉" }, { "codeId": 511800, "codeName": "雅安" }, { "codeId": 360600, "codeName": "鹰潭" }], "codeId": 25, "codeName": "Y" }, { "cityList": [{ "codeId": 640500, "codeName": "中卫" }, { "codeId": 442000, "codeName": "中山" }, { "codeId": 810101, "codeName": "中西区" }, { "codeId": 411600, "codeName": "周口" }, { "codeId": 130700, "codeName": "张家口" }, { "codeId": 430800, "codeName": "张家界" }, { "codeId": 620700, "codeName": "张掖" }, { "codeId": 711700, "codeName": "彰化" }, { "codeId": 530600, "codeName": "昭通" }, { "codeId": 370400, "codeName": "枣庄" }, { "codeId": 430200, "codeName": "株洲" }, { "codeId": 370300, "codeName": "淄博" }, { "codeId": 440800, "codeName": "湛江" }, { "codeId": 350600, "codeName": "漳州" }, { "codeId": 440400, "codeName": "珠海" }, { "codeId": 441200, "codeName": "肇庆" }, { "codeId": 510300, "codeName": "自贡" }, { "codeId": 330900, "codeName": "舟山" }, { "codeId": 512000, "codeName": "资阳" }, { "codeId": 520300, "codeName": "遵义" }, { "codeId": 410100, "codeName": "郑州" }, { "codeId": 321100, "codeName": "镇江" }, { "codeId": 411700, "codeName": "驻马店" }], "codeId": 26, "codeName": "Z" }],
    wxCityList: [
      {
        "pid": 110000,
        "pname": "北京市",
        "citys": [
          {
            "districts": [
              {
                "dname": "东城区",
                "did": 110101
              },
              {
                "dname": "西城区",
                "did": 110102
              },
              {
                "dname": "朝阳区",
                "did": 110105
              },
              {
                "dname": "丰台区",
                "did": 110106
              },
              {
                "dname": "石景山区",
                "did": 110107
              },
              {
                "dname": "海淀区",
                "did": 110108
              },
              {
                "dname": "门头沟区",
                "did": 110109
              },
              {
                "dname": "房山区",
                "did": 110111
              },
              {
                "dname": "通州区",
                "did": 110112
              },
              {
                "dname": "顺义区",
                "did": 110113
              },
              {
                "dname": "昌平区",
                "did": 110114
              },
              {
                "dname": "大兴区",
                "did": 110115
              },
              {
                "dname": "怀柔区",
                "did": 110116
              },
              {
                "dname": "平谷区",
                "did": 110117
              },
              {
                "dname": "密云县",
                "did": 110228
              },
              {
                "dname": "延庆县",
                "did": 110229
              }
            ],
            "cname": "北京市",
            "cid": 110100
          }
        ]
      },
      {
        "pid": 120000,
        "pname": "天津市",
        "citys": [
          {
            "districts": [
              {
                "dname": "和平区",
                "did": 120101
              },
              {
                "dname": "河东区",
                "did": 120102
              },
              {
                "dname": "河西区",
                "did": 120103
              },
              {
                "dname": "南开区",
                "did": 120104
              },
              {
                "dname": "河北区",
                "did": 120105
              },
              {
                "dname": "红桥区",
                "did": 120106
              },
              {
                "dname": "东丽区",
                "did": 120110
              },
              {
                "dname": "西青区",
                "did": 120111
              },
              {
                "dname": "津南区",
                "did": 120112
              },
              {
                "dname": "北辰区",
                "did": 120113
              },
              {
                "dname": "武清区",
                "did": 120114
              },
              {
                "dname": "宝坻区",
                "did": 120115
              },
              {
                "dname": "滨海新区",
                "did": 120116
              },
              {
                "dname": "宁河县",
                "did": 120221
              },
              {
                "dname": "静海县",
                "did": 120223
              },
              {
                "dname": "蓟县",
                "did": 120225
              }
            ],
            "cname": "天津市",
            "cid": 120100
          }
        ]
      },
      {
        "pid": 130000,
        "pname": "河北省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130101
              },
              {
                "dname": "长安区",
                "did": 130102
              },
              {
                "dname": "桥东区",
                "did": 130103
              },
              {
                "dname": "桥西区",
                "did": 130104
              },
              {
                "dname": "新华区",
                "did": 130105
              },
              {
                "dname": "井陉矿区",
                "did": 130107
              },
              {
                "dname": "裕华区",
                "did": 130108
              },
              {
                "dname": "井陉县",
                "did": 130121
              },
              {
                "dname": "正定县",
                "did": 130123
              },
              {
                "dname": "栾城县",
                "did": 130124
              },
              {
                "dname": "行唐县",
                "did": 130125
              },
              {
                "dname": "灵寿县",
                "did": 130126
              },
              {
                "dname": "高邑县",
                "did": 130127
              },
              {
                "dname": "深泽县",
                "did": 130128
              },
              {
                "dname": "赞皇县",
                "did": 130129
              },
              {
                "dname": "无极县",
                "did": 130130
              },
              {
                "dname": "平山县",
                "did": 130131
              },
              {
                "dname": "元氏县",
                "did": 130132
              },
              {
                "dname": "赵县",
                "did": 130133
              },
              {
                "dname": "辛集市",
                "did": 130181
              },
              {
                "dname": "藁城市",
                "did": 130182
              },
              {
                "dname": "晋州市",
                "did": 130183
              },
              {
                "dname": "新乐市",
                "did": 130184
              },
              {
                "dname": "鹿泉市",
                "did": 130185
              }
            ],
            "cname": "石家庄市",
            "cid": 130100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130201
              },
              {
                "dname": "路南区",
                "did": 130202
              },
              {
                "dname": "路北区",
                "did": 130203
              },
              {
                "dname": "古冶区",
                "did": 130204
              },
              {
                "dname": "开平区",
                "did": 130205
              },
              {
                "dname": "丰南区",
                "did": 130207
              },
              {
                "dname": "丰润区",
                "did": 130208
              },
              {
                "dname": "曹妃甸区",
                "did": 130209
              },
              {
                "dname": "滦县",
                "did": 130223
              },
              {
                "dname": "滦南县",
                "did": 130224
              },
              {
                "dname": "乐亭县",
                "did": 130225
              },
              {
                "dname": "迁西县",
                "did": 130227
              },
              {
                "dname": "玉田县",
                "did": 130229
              },
              {
                "dname": "遵化市",
                "did": 130281
              },
              {
                "dname": "迁安市",
                "did": 130283
              }
            ],
            "cname": "唐山市",
            "cid": 130200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130301
              },
              {
                "dname": "海港区",
                "did": 130302
              },
              {
                "dname": "山海关区",
                "did": 130303
              },
              {
                "dname": "北戴河区",
                "did": 130304
              },
              {
                "dname": "青龙满族自治县",
                "did": 130321
              },
              {
                "dname": "昌黎县",
                "did": 130322
              },
              {
                "dname": "抚宁县",
                "did": 130323
              },
              {
                "dname": "卢龙县",
                "did": 130324
              }
            ],
            "cname": "秦皇岛市",
            "cid": 130300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130401
              },
              {
                "dname": "邯山区",
                "did": 130402
              },
              {
                "dname": "丛台区",
                "did": 130403
              },
              {
                "dname": "复兴区",
                "did": 130404
              },
              {
                "dname": "峰峰矿区",
                "did": 130406
              },
              {
                "dname": "邯郸县",
                "did": 130421
              },
              {
                "dname": "临漳县",
                "did": 130423
              },
              {
                "dname": "成安县",
                "did": 130424
              },
              {
                "dname": "大名县",
                "did": 130425
              },
              {
                "dname": "涉县",
                "did": 130426
              },
              {
                "dname": "磁县",
                "did": 130427
              },
              {
                "dname": "肥乡县",
                "did": 130428
              },
              {
                "dname": "永年县",
                "did": 130429
              },
              {
                "dname": "邱县",
                "did": 130430
              },
              {
                "dname": "鸡泽县",
                "did": 130431
              },
              {
                "dname": "广平县",
                "did": 130432
              },
              {
                "dname": "馆陶县",
                "did": 130433
              },
              {
                "dname": "魏县",
                "did": 130434
              },
              {
                "dname": "曲周县",
                "did": 130435
              },
              {
                "dname": "武安市",
                "did": 130481
              }
            ],
            "cname": "邯郸市",
            "cid": 130400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130501
              },
              {
                "dname": "桥东区",
                "did": 130502
              },
              {
                "dname": "桥西区",
                "did": 130503
              },
              {
                "dname": "邢台县",
                "did": 130521
              },
              {
                "dname": "临城县",
                "did": 130522
              },
              {
                "dname": "内丘县",
                "did": 130523
              },
              {
                "dname": "柏乡县",
                "did": 130524
              },
              {
                "dname": "隆尧县",
                "did": 130525
              },
              {
                "dname": "任县",
                "did": 130526
              },
              {
                "dname": "南和县",
                "did": 130527
              },
              {
                "dname": "宁晋县",
                "did": 130528
              },
              {
                "dname": "巨鹿县",
                "did": 130529
              },
              {
                "dname": "新河县",
                "did": 130530
              },
              {
                "dname": "广宗县",
                "did": 130531
              },
              {
                "dname": "平乡县",
                "did": 130532
              },
              {
                "dname": "威县",
                "did": 130533
              },
              {
                "dname": "清河县",
                "did": 130534
              },
              {
                "dname": "临西县",
                "did": 130535
              },
              {
                "dname": "南宫市",
                "did": 130581
              },
              {
                "dname": "沙河市",
                "did": 130582
              }
            ],
            "cname": "邢台市",
            "cid": 130500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130601
              },
              {
                "dname": "新市区",
                "did": 130602
              },
              {
                "dname": "北市区",
                "did": 130603
              },
              {
                "dname": "南市区",
                "did": 130604
              },
              {
                "dname": "满城县",
                "did": 130621
              },
              {
                "dname": "清苑县",
                "did": 130622
              },
              {
                "dname": "涞水县",
                "did": 130623
              },
              {
                "dname": "阜平县",
                "did": 130624
              },
              {
                "dname": "徐水县",
                "did": 130625
              },
              {
                "dname": "定兴县",
                "did": 130626
              },
              {
                "dname": "唐县",
                "did": 130627
              },
              {
                "dname": "高阳县",
                "did": 130628
              },
              {
                "dname": "容城县",
                "did": 130629
              },
              {
                "dname": "涞源县",
                "did": 130630
              },
              {
                "dname": "望都县",
                "did": 130631
              },
              {
                "dname": "安新县",
                "did": 130632
              },
              {
                "dname": "易县",
                "did": 130633
              },
              {
                "dname": "曲阳县",
                "did": 130634
              },
              {
                "dname": "蠡县",
                "did": 130635
              },
              {
                "dname": "顺平县",
                "did": 130636
              },
              {
                "dname": "博野县",
                "did": 130637
              },
              {
                "dname": "雄县",
                "did": 130638
              },
              {
                "dname": "涿州市",
                "did": 130681
              },
              {
                "dname": "定州市",
                "did": 130682
              },
              {
                "dname": "安国市",
                "did": 130683
              },
              {
                "dname": "高碑店市",
                "did": 130684
              }
            ],
            "cname": "保定市",
            "cid": 130600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130701
              },
              {
                "dname": "桥东区",
                "did": 130702
              },
              {
                "dname": "桥西区",
                "did": 130703
              },
              {
                "dname": "宣化区",
                "did": 130705
              },
              {
                "dname": "下花园区",
                "did": 130706
              },
              {
                "dname": "宣化县",
                "did": 130721
              },
              {
                "dname": "张北县",
                "did": 130722
              },
              {
                "dname": "康保县",
                "did": 130723
              },
              {
                "dname": "沽源县",
                "did": 130724
              },
              {
                "dname": "尚义县",
                "did": 130725
              },
              {
                "dname": "蔚县",
                "did": 130726
              },
              {
                "dname": "阳原县",
                "did": 130727
              },
              {
                "dname": "怀安县",
                "did": 130728
              },
              {
                "dname": "万全县",
                "did": 130729
              },
              {
                "dname": "怀来县",
                "did": 130730
              },
              {
                "dname": "涿鹿县",
                "did": 130731
              },
              {
                "dname": "赤城县",
                "did": 130732
              },
              {
                "dname": "崇礼县",
                "did": 130733
              }
            ],
            "cname": "张家口市",
            "cid": 130700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130801
              },
              {
                "dname": "双桥区",
                "did": 130802
              },
              {
                "dname": "双滦区",
                "did": 130803
              },
              {
                "dname": "鹰手营子矿区",
                "did": 130804
              },
              {
                "dname": "承德县",
                "did": 130821
              },
              {
                "dname": "兴隆县",
                "did": 130822
              },
              {
                "dname": "平泉县",
                "did": 130823
              },
              {
                "dname": "滦平县",
                "did": 130824
              },
              {
                "dname": "隆化县",
                "did": 130825
              },
              {
                "dname": "丰宁满族自治县",
                "did": 130826
              },
              {
                "dname": "宽城满族自治县",
                "did": 130827
              },
              {
                "dname": "围场满族蒙古族自治县",
                "did": 130828
              }
            ],
            "cname": "承德市",
            "cid": 130800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 130901
              },
              {
                "dname": "新华区",
                "did": 130902
              },
              {
                "dname": "运河区",
                "did": 130903
              },
              {
                "dname": "沧县",
                "did": 130921
              },
              {
                "dname": "青县",
                "did": 130922
              },
              {
                "dname": "东光县",
                "did": 130923
              },
              {
                "dname": "海兴县",
                "did": 130924
              },
              {
                "dname": "盐山县",
                "did": 130925
              },
              {
                "dname": "肃宁县",
                "did": 130926
              },
              {
                "dname": "南皮县",
                "did": 130927
              },
              {
                "dname": "吴桥县",
                "did": 130928
              },
              {
                "dname": "献县",
                "did": 130929
              },
              {
                "dname": "孟村回族自治县",
                "did": 130930
              },
              {
                "dname": "泊头市",
                "did": 130981
              },
              {
                "dname": "任丘市",
                "did": 130982
              },
              {
                "dname": "黄骅市",
                "did": 130983
              },
              {
                "dname": "河间市",
                "did": 130984
              }
            ],
            "cname": "沧州市",
            "cid": 130900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 131001
              },
              {
                "dname": "安次区",
                "did": 131002
              },
              {
                "dname": "广阳区",
                "did": 131003
              },
              {
                "dname": "固安县",
                "did": 131022
              },
              {
                "dname": "永清县",
                "did": 131023
              },
              {
                "dname": "香河县",
                "did": 131024
              },
              {
                "dname": "大城县",
                "did": 131025
              },
              {
                "dname": "文安县",
                "did": 131026
              },
              {
                "dname": "大厂回族自治县",
                "did": 131028
              },
              {
                "dname": "霸州市",
                "did": 131081
              },
              {
                "dname": "三河市",
                "did": 131082
              }
            ],
            "cname": "廊坊市",
            "cid": 131000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 131101
              },
              {
                "dname": "桃城区",
                "did": 131102
              },
              {
                "dname": "枣强县",
                "did": 131121
              },
              {
                "dname": "武邑县",
                "did": 131122
              },
              {
                "dname": "武强县",
                "did": 131123
              },
              {
                "dname": "饶阳县",
                "did": 131124
              },
              {
                "dname": "安平县",
                "did": 131125
              },
              {
                "dname": "故城县",
                "did": 131126
              },
              {
                "dname": "景县",
                "did": 131127
              },
              {
                "dname": "阜城县",
                "did": 131128
              },
              {
                "dname": "冀州市",
                "did": 131181
              },
              {
                "dname": "深州市",
                "did": 131182
              }
            ],
            "cname": "衡水市",
            "cid": 131100
          }
        ]
      },
      {
        "pid": 140000,
        "pname": "山西省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140101
              },
              {
                "dname": "小店区",
                "did": 140105
              },
              {
                "dname": "迎泽区",
                "did": 140106
              },
              {
                "dname": "杏花岭区",
                "did": 140107
              },
              {
                "dname": "尖草坪区",
                "did": 140108
              },
              {
                "dname": "万柏林区",
                "did": 140109
              },
              {
                "dname": "晋源区",
                "did": 140110
              },
              {
                "dname": "清徐县",
                "did": 140121
              },
              {
                "dname": "阳曲县",
                "did": 140122
              },
              {
                "dname": "娄烦县",
                "did": 140123
              },
              {
                "dname": "古交市",
                "did": 140181
              }
            ],
            "cname": "太原市",
            "cid": 140100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140201
              },
              {
                "dname": "城区",
                "did": 140202
              },
              {
                "dname": "矿区",
                "did": 140203
              },
              {
                "dname": "南郊区",
                "did": 140211
              },
              {
                "dname": "新荣区",
                "did": 140212
              },
              {
                "dname": "阳高县",
                "did": 140221
              },
              {
                "dname": "天镇县",
                "did": 140222
              },
              {
                "dname": "广灵县",
                "did": 140223
              },
              {
                "dname": "灵丘县",
                "did": 140224
              },
              {
                "dname": "浑源县",
                "did": 140225
              },
              {
                "dname": "左云县",
                "did": 140226
              },
              {
                "dname": "大同县",
                "did": 140227
              }
            ],
            "cname": "大同市",
            "cid": 140200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140301
              },
              {
                "dname": "城区",
                "did": 140302
              },
              {
                "dname": "矿区",
                "did": 140303
              },
              {
                "dname": "郊区",
                "did": 140311
              },
              {
                "dname": "平定县",
                "did": 140321
              },
              {
                "dname": "盂县",
                "did": 140322
              }
            ],
            "cname": "阳泉市",
            "cid": 140300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140401
              },
              {
                "dname": "城区",
                "did": 140402
              },
              {
                "dname": "郊区",
                "did": 140411
              },
              {
                "dname": "长治县",
                "did": 140421
              },
              {
                "dname": "襄垣县",
                "did": 140423
              },
              {
                "dname": "屯留县",
                "did": 140424
              },
              {
                "dname": "平顺县",
                "did": 140425
              },
              {
                "dname": "黎城县",
                "did": 140426
              },
              {
                "dname": "壶关县",
                "did": 140427
              },
              {
                "dname": "长子县",
                "did": 140428
              },
              {
                "dname": "武乡县",
                "did": 140429
              },
              {
                "dname": "沁县",
                "did": 140430
              },
              {
                "dname": "沁源县",
                "did": 140431
              },
              {
                "dname": "潞城市",
                "did": 140481
              }
            ],
            "cname": "长治市",
            "cid": 140400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140501
              },
              {
                "dname": "城区",
                "did": 140502
              },
              {
                "dname": "沁水县",
                "did": 140521
              },
              {
                "dname": "阳城县",
                "did": 140522
              },
              {
                "dname": "陵川县",
                "did": 140524
              },
              {
                "dname": "泽州县",
                "did": 140525
              },
              {
                "dname": "高平市",
                "did": 140581
              }
            ],
            "cname": "晋城市",
            "cid": 140500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140601
              },
              {
                "dname": "朔城区",
                "did": 140602
              },
              {
                "dname": "平鲁区",
                "did": 140603
              },
              {
                "dname": "山阴县",
                "did": 140621
              },
              {
                "dname": "应县",
                "did": 140622
              },
              {
                "dname": "右玉县",
                "did": 140623
              },
              {
                "dname": "怀仁县",
                "did": 140624
              }
            ],
            "cname": "朔州市",
            "cid": 140600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140701
              },
              {
                "dname": "榆次区",
                "did": 140702
              },
              {
                "dname": "榆社县",
                "did": 140721
              },
              {
                "dname": "左权县",
                "did": 140722
              },
              {
                "dname": "和顺县",
                "did": 140723
              },
              {
                "dname": "昔阳县",
                "did": 140724
              },
              {
                "dname": "寿阳县",
                "did": 140725
              },
              {
                "dname": "太谷县",
                "did": 140726
              },
              {
                "dname": "祁县",
                "did": 140727
              },
              {
                "dname": "平遥县",
                "did": 140728
              },
              {
                "dname": "灵石县",
                "did": 140729
              },
              {
                "dname": "介休市",
                "did": 140781
              }
            ],
            "cname": "晋中市",
            "cid": 140700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140801
              },
              {
                "dname": "盐湖区",
                "did": 140802
              },
              {
                "dname": "临猗县",
                "did": 140821
              },
              {
                "dname": "万荣县",
                "did": 140822
              },
              {
                "dname": "闻喜县",
                "did": 140823
              },
              {
                "dname": "稷山县",
                "did": 140824
              },
              {
                "dname": "新绛县",
                "did": 140825
              },
              {
                "dname": "绛县",
                "did": 140826
              },
              {
                "dname": "垣曲县",
                "did": 140827
              },
              {
                "dname": "夏县",
                "did": 140828
              },
              {
                "dname": "平陆县",
                "did": 140829
              },
              {
                "dname": "芮城县",
                "did": 140830
              },
              {
                "dname": "永济市",
                "did": 140881
              },
              {
                "dname": "河津市",
                "did": 140882
              }
            ],
            "cname": "运城市",
            "cid": 140800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 140901
              },
              {
                "dname": "忻府区",
                "did": 140902
              },
              {
                "dname": "定襄县",
                "did": 140921
              },
              {
                "dname": "五台县",
                "did": 140922
              },
              {
                "dname": "代县",
                "did": 140923
              },
              {
                "dname": "繁峙县",
                "did": 140924
              },
              {
                "dname": "宁武县",
                "did": 140925
              },
              {
                "dname": "静乐县",
                "did": 140926
              },
              {
                "dname": "神池县",
                "did": 140927
              },
              {
                "dname": "五寨县",
                "did": 140928
              },
              {
                "dname": "岢岚县",
                "did": 140929
              },
              {
                "dname": "河曲县",
                "did": 140930
              },
              {
                "dname": "保德县",
                "did": 140931
              },
              {
                "dname": "偏关县",
                "did": 140932
              },
              {
                "dname": "原平市",
                "did": 140981
              }
            ],
            "cname": "忻州市",
            "cid": 140900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 141001
              },
              {
                "dname": "尧都区",
                "did": 141002
              },
              {
                "dname": "曲沃县",
                "did": 141021
              },
              {
                "dname": "翼城县",
                "did": 141022
              },
              {
                "dname": "襄汾县",
                "did": 141023
              },
              {
                "dname": "洪洞县",
                "did": 141024
              },
              {
                "dname": "古县",
                "did": 141025
              },
              {
                "dname": "安泽县",
                "did": 141026
              },
              {
                "dname": "浮山县",
                "did": 141027
              },
              {
                "dname": "吉县",
                "did": 141028
              },
              {
                "dname": "乡宁县",
                "did": 141029
              },
              {
                "dname": "大宁县",
                "did": 141030
              },
              {
                "dname": "隰县",
                "did": 141031
              },
              {
                "dname": "永和县",
                "did": 141032
              },
              {
                "dname": "蒲县",
                "did": 141033
              },
              {
                "dname": "汾西县",
                "did": 141034
              },
              {
                "dname": "侯马市",
                "did": 141081
              },
              {
                "dname": "霍州市",
                "did": 141082
              }
            ],
            "cname": "临汾市",
            "cid": 141000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 141101
              },
              {
                "dname": "离石区",
                "did": 141102
              },
              {
                "dname": "文水县",
                "did": 141121
              },
              {
                "dname": "交城县",
                "did": 141122
              },
              {
                "dname": "兴县",
                "did": 141123
              },
              {
                "dname": "临县",
                "did": 141124
              },
              {
                "dname": "柳林县",
                "did": 141125
              },
              {
                "dname": "石楼县",
                "did": 141126
              },
              {
                "dname": "岚县",
                "did": 141127
              },
              {
                "dname": "方山县",
                "did": 141128
              },
              {
                "dname": "中阳县",
                "did": 141129
              },
              {
                "dname": "交口县",
                "did": 141130
              },
              {
                "dname": "孝义市",
                "did": 141181
              },
              {
                "dname": "汾阳市",
                "did": 141182
              }
            ],
            "cname": "吕梁市",
            "cid": 141100
          }
        ]
      },
      {
        "pid": 150000,
        "pname": "内蒙古自治区",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150101
              },
              {
                "dname": "新城区",
                "did": 150102
              },
              {
                "dname": "回民区",
                "did": 150103
              },
              {
                "dname": "玉泉区",
                "did": 150104
              },
              {
                "dname": "赛罕区",
                "did": 150105
              },
              {
                "dname": "土默特左旗",
                "did": 150121
              },
              {
                "dname": "托克托县",
                "did": 150122
              },
              {
                "dname": "和林格尔县",
                "did": 150123
              },
              {
                "dname": "清水河县",
                "did": 150124
              },
              {
                "dname": "武川县",
                "did": 150125
              }
            ],
            "cname": "呼和浩特市",
            "cid": 150100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150201
              },
              {
                "dname": "东河区",
                "did": 150202
              },
              {
                "dname": "昆都仑区",
                "did": 150203
              },
              {
                "dname": "青山区",
                "did": 150204
              },
              {
                "dname": "石拐区",
                "did": 150205
              },
              {
                "dname": "白云鄂博矿区",
                "did": 150206
              },
              {
                "dname": "九原区",
                "did": 150207
              },
              {
                "dname": "土默特右旗",
                "did": 150221
              },
              {
                "dname": "固阳县",
                "did": 150222
              },
              {
                "dname": "达尔罕茂明安联合旗",
                "did": 150223
              }
            ],
            "cname": "包头市",
            "cid": 150200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150301
              },
              {
                "dname": "海勃湾区",
                "did": 150302
              },
              {
                "dname": "海南区",
                "did": 150303
              },
              {
                "dname": "乌达区",
                "did": 150304
              }
            ],
            "cname": "乌海市",
            "cid": 150300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150401
              },
              {
                "dname": "红山区",
                "did": 150402
              },
              {
                "dname": "元宝山区",
                "did": 150403
              },
              {
                "dname": "松山区",
                "did": 150404
              },
              {
                "dname": "阿鲁科尔沁旗",
                "did": 150421
              },
              {
                "dname": "巴林左旗",
                "did": 150422
              },
              {
                "dname": "巴林右旗",
                "did": 150423
              },
              {
                "dname": "林西县",
                "did": 150424
              },
              {
                "dname": "克什克腾旗",
                "did": 150425
              },
              {
                "dname": "翁牛特旗",
                "did": 150426
              },
              {
                "dname": "喀喇沁旗",
                "did": 150428
              },
              {
                "dname": "宁城县",
                "did": 150429
              },
              {
                "dname": "敖汉旗",
                "did": 150430
              }
            ],
            "cname": "赤峰市",
            "cid": 150400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150501
              },
              {
                "dname": "科尔沁区",
                "did": 150502
              },
              {
                "dname": "科尔沁左翼中旗",
                "did": 150521
              },
              {
                "dname": "科尔沁左翼后旗",
                "did": 150522
              },
              {
                "dname": "开鲁县",
                "did": 150523
              },
              {
                "dname": "库伦旗",
                "did": 150524
              },
              {
                "dname": "奈曼旗",
                "did": 150525
              },
              {
                "dname": "扎鲁特旗",
                "did": 150526
              },
              {
                "dname": "霍林郭勒市",
                "did": 150581
              }
            ],
            "cname": "通辽市",
            "cid": 150500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150601
              },
              {
                "dname": "东胜区",
                "did": 150602
              },
              {
                "dname": "达拉特旗",
                "did": 150621
              },
              {
                "dname": "准格尔旗",
                "did": 150622
              },
              {
                "dname": "鄂托克前旗",
                "did": 150623
              },
              {
                "dname": "鄂托克旗",
                "did": 150624
              },
              {
                "dname": "杭锦旗",
                "did": 150625
              },
              {
                "dname": "乌审旗",
                "did": 150626
              },
              {
                "dname": "伊金霍洛旗",
                "did": 150627
              }
            ],
            "cname": "鄂尔多斯市",
            "cid": 150600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150701
              },
              {
                "dname": "海拉尔区",
                "did": 150702
              },
              {
                "dname": "扎赉诺尔区",
                "did": 150703
              },
              {
                "dname": "阿荣旗",
                "did": 150721
              },
              {
                "dname": "莫力达瓦达斡尔族自治旗",
                "did": 150722
              },
              {
                "dname": "鄂伦春自治旗",
                "did": 150723
              },
              {
                "dname": "鄂温克族自治旗",
                "did": 150724
              },
              {
                "dname": "陈巴尔虎旗",
                "did": 150725
              },
              {
                "dname": "新巴尔虎左旗",
                "did": 150726
              },
              {
                "dname": "新巴尔虎右旗",
                "did": 150727
              },
              {
                "dname": "满洲里市",
                "did": 150781
              },
              {
                "dname": "牙克石市",
                "did": 150782
              },
              {
                "dname": "扎兰屯市",
                "did": 150783
              },
              {
                "dname": "额尔古纳市",
                "did": 150784
              },
              {
                "dname": "根河市",
                "did": 150785
              }
            ],
            "cname": "呼伦贝尔市",
            "cid": 150700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150801
              },
              {
                "dname": "临河区",
                "did": 150802
              },
              {
                "dname": "五原县",
                "did": 150821
              },
              {
                "dname": "磴口县",
                "did": 150822
              },
              {
                "dname": "乌拉特前旗",
                "did": 150823
              },
              {
                "dname": "乌拉特中旗",
                "did": 150824
              },
              {
                "dname": "乌拉特后旗",
                "did": 150825
              },
              {
                "dname": "杭锦后旗",
                "did": 150826
              }
            ],
            "cname": "巴彦淖尔市",
            "cid": 150800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 150901
              },
              {
                "dname": "集宁区",
                "did": 150902
              },
              {
                "dname": "卓资县",
                "did": 150921
              },
              {
                "dname": "化德县",
                "did": 150922
              },
              {
                "dname": "商都县",
                "did": 150923
              },
              {
                "dname": "兴和县",
                "did": 150924
              },
              {
                "dname": "凉城县",
                "did": 150925
              },
              {
                "dname": "察哈尔右翼前旗",
                "did": 150926
              },
              {
                "dname": "察哈尔右翼中旗",
                "did": 150927
              },
              {
                "dname": "察哈尔右翼后旗",
                "did": 150928
              },
              {
                "dname": "四子王旗",
                "did": 150929
              },
              {
                "dname": "丰镇市",
                "did": 150981
              }
            ],
            "cname": "乌兰察布市",
            "cid": 150900
          },
          {
            "districts": [
              {
                "dname": "乌兰浩特市",
                "did": 152201
              },
              {
                "dname": "阿尔山市",
                "did": 152202
              },
              {
                "dname": "科尔沁右翼前旗",
                "did": 152221
              },
              {
                "dname": "科尔沁右翼中旗",
                "did": 152222
              },
              {
                "dname": "扎赉特旗",
                "did": 152223
              },
              {
                "dname": "突泉县",
                "did": 152224
              }
            ],
            "cname": "兴安盟",
            "cid": 152200
          },
          {
            "districts": [
              {
                "dname": "二连浩特市",
                "did": 152501
              },
              {
                "dname": "锡林浩特市",
                "did": 152502
              },
              {
                "dname": "阿巴嘎旗",
                "did": 152522
              },
              {
                "dname": "苏尼特左旗",
                "did": 152523
              },
              {
                "dname": "苏尼特右旗",
                "did": 152524
              },
              {
                "dname": "东乌珠穆沁旗",
                "did": 152525
              },
              {
                "dname": "西乌珠穆沁旗",
                "did": 152526
              },
              {
                "dname": "太仆寺旗",
                "did": 152527
              },
              {
                "dname": "镶黄旗",
                "did": 152528
              },
              {
                "dname": "正镶白旗",
                "did": 152529
              },
              {
                "dname": "正蓝旗",
                "did": 152530
              },
              {
                "dname": "多伦县",
                "did": 152531
              }
            ],
            "cname": "锡林郭勒盟",
            "cid": 152500
          },
          {
            "districts": [
              {
                "dname": "阿拉善左旗",
                "did": 152921
              },
              {
                "dname": "阿拉善右旗",
                "did": 152922
              },
              {
                "dname": "额济纳旗",
                "did": 152923
              }
            ],
            "cname": "阿拉善盟",
            "cid": 152900
          }
        ]
      },
      {
        "pid": 210000,
        "pname": "辽宁省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210101
              },
              {
                "dname": "和平区",
                "did": 210102
              },
              {
                "dname": "沈河区",
                "did": 210103
              },
              {
                "dname": "大东区",
                "did": 210104
              },
              {
                "dname": "皇姑区",
                "did": 210105
              },
              {
                "dname": "铁西区",
                "did": 210106
              },
              {
                "dname": "苏家屯区",
                "did": 210111
              },
              {
                "dname": "东陵区",
                "did": 210112
              },
              {
                "dname": "沈北新区",
                "did": 210113
              },
              {
                "dname": "于洪区",
                "did": 210114
              },
              {
                "dname": "辽中县",
                "did": 210122
              },
              {
                "dname": "康平县",
                "did": 210123
              },
              {
                "dname": "法库县",
                "did": 210124
              },
              {
                "dname": "新民市",
                "did": 210181
              }
            ],
            "cname": "沈阳市",
            "cid": 210100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210201
              },
              {
                "dname": "中山区",
                "did": 210202
              },
              {
                "dname": "西岗区",
                "did": 210203
              },
              {
                "dname": "沙河口区",
                "did": 210204
              },
              {
                "dname": "甘井子区",
                "did": 210211
              },
              {
                "dname": "旅顺口区",
                "did": 210212
              },
              {
                "dname": "金州区",
                "did": 210213
              },
              {
                "dname": "长海县",
                "did": 210224
              },
              {
                "dname": "瓦房店市",
                "did": 210281
              },
              {
                "dname": "普兰店市",
                "did": 210282
              },
              {
                "dname": "庄河市",
                "did": 210283
              }
            ],
            "cname": "大连市",
            "cid": 210200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210301
              },
              {
                "dname": "铁东区",
                "did": 210302
              },
              {
                "dname": "铁西区",
                "did": 210303
              },
              {
                "dname": "立山区",
                "did": 210304
              },
              {
                "dname": "千山区",
                "did": 210311
              },
              {
                "dname": "台安县",
                "did": 210321
              },
              {
                "dname": "岫岩满族自治县",
                "did": 210323
              },
              {
                "dname": "海城市",
                "did": 210381
              }
            ],
            "cname": "鞍山市",
            "cid": 210300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210401
              },
              {
                "dname": "新抚区",
                "did": 210402
              },
              {
                "dname": "东洲区",
                "did": 210403
              },
              {
                "dname": "望花区",
                "did": 210404
              },
              {
                "dname": "顺城区",
                "did": 210411
              },
              {
                "dname": "抚顺县",
                "did": 210421
              },
              {
                "dname": "新宾满族自治县",
                "did": 210422
              },
              {
                "dname": "清原满族自治县",
                "did": 210423
              }
            ],
            "cname": "抚顺市",
            "cid": 210400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210501
              },
              {
                "dname": "平山区",
                "did": 210502
              },
              {
                "dname": "溪湖区",
                "did": 210503
              },
              {
                "dname": "明山区",
                "did": 210504
              },
              {
                "dname": "南芬区",
                "did": 210505
              },
              {
                "dname": "本溪满族自治县",
                "did": 210521
              },
              {
                "dname": "桓仁满族自治县",
                "did": 210522
              }
            ],
            "cname": "本溪市",
            "cid": 210500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210601
              },
              {
                "dname": "元宝区",
                "did": 210602
              },
              {
                "dname": "振兴区",
                "did": 210603
              },
              {
                "dname": "振安区",
                "did": 210604
              },
              {
                "dname": "宽甸满族自治县",
                "did": 210624
              },
              {
                "dname": "东港市",
                "did": 210681
              },
              {
                "dname": "凤城市",
                "did": 210682
              }
            ],
            "cname": "丹东市",
            "cid": 210600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210701
              },
              {
                "dname": "古塔区",
                "did": 210702
              },
              {
                "dname": "凌河区",
                "did": 210703
              },
              {
                "dname": "太和区",
                "did": 210711
              },
              {
                "dname": "黑山县",
                "did": 210726
              },
              {
                "dname": "义县",
                "did": 210727
              },
              {
                "dname": "凌海市",
                "did": 210781
              },
              {
                "dname": "北镇市",
                "did": 210782
              }
            ],
            "cname": "锦州市",
            "cid": 210700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210801
              },
              {
                "dname": "站前区",
                "did": 210802
              },
              {
                "dname": "西市区",
                "did": 210803
              },
              {
                "dname": "鲅鱼圈区",
                "did": 210804
              },
              {
                "dname": "老边区",
                "did": 210811
              },
              {
                "dname": "盖州市",
                "did": 210881
              },
              {
                "dname": "大石桥市",
                "did": 210882
              }
            ],
            "cname": "营口市",
            "cid": 210800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 210901
              },
              {
                "dname": "海州区",
                "did": 210902
              },
              {
                "dname": "新邱区",
                "did": 210903
              },
              {
                "dname": "太平区",
                "did": 210904
              },
              {
                "dname": "清河门区",
                "did": 210905
              },
              {
                "dname": "细河区",
                "did": 210911
              },
              {
                "dname": "阜新蒙古族自治县",
                "did": 210921
              },
              {
                "dname": "彰武县",
                "did": 210922
              }
            ],
            "cname": "阜新市",
            "cid": 210900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 211001
              },
              {
                "dname": "白塔区",
                "did": 211002
              },
              {
                "dname": "文圣区",
                "did": 211003
              },
              {
                "dname": "宏伟区",
                "did": 211004
              },
              {
                "dname": "弓长岭区",
                "did": 211005
              },
              {
                "dname": "太子河区",
                "did": 211011
              },
              {
                "dname": "辽阳县",
                "did": 211021
              },
              {
                "dname": "灯塔市",
                "did": 211081
              }
            ],
            "cname": "辽阳市",
            "cid": 211000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 211101
              },
              {
                "dname": "双台子区",
                "did": 211102
              },
              {
                "dname": "兴隆台区",
                "did": 211103
              },
              {
                "dname": "大洼县",
                "did": 211121
              },
              {
                "dname": "盘山县",
                "did": 211122
              }
            ],
            "cname": "盘锦市",
            "cid": 211100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 211201
              },
              {
                "dname": "银州区",
                "did": 211202
              },
              {
                "dname": "清河区",
                "did": 211204
              },
              {
                "dname": "铁岭县",
                "did": 211221
              },
              {
                "dname": "西丰县",
                "did": 211223
              },
              {
                "dname": "昌图县",
                "did": 211224
              },
              {
                "dname": "调兵山市",
                "did": 211281
              },
              {
                "dname": "开原市",
                "did": 211282
              }
            ],
            "cname": "铁岭市",
            "cid": 211200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 211301
              },
              {
                "dname": "双塔区",
                "did": 211302
              },
              {
                "dname": "龙城区",
                "did": 211303
              },
              {
                "dname": "朝阳县",
                "did": 211321
              },
              {
                "dname": "建平县",
                "did": 211322
              },
              {
                "dname": "喀喇沁左翼蒙古族自治县",
                "did": 211324
              },
              {
                "dname": "北票市",
                "did": 211381
              },
              {
                "dname": "凌源市",
                "did": 211382
              }
            ],
            "cname": "朝阳市",
            "cid": 211300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 211401
              },
              {
                "dname": "连山区",
                "did": 211402
              },
              {
                "dname": "龙港区",
                "did": 211403
              },
              {
                "dname": "南票区",
                "did": 211404
              },
              {
                "dname": "绥中县",
                "did": 211421
              },
              {
                "dname": "建昌县",
                "did": 211422
              },
              {
                "dname": "兴城市",
                "did": 211481
              }
            ],
            "cname": "葫芦岛市",
            "cid": 211400
          }
        ]
      },
      {
        "pid": 220000,
        "pname": "吉林省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220101
              },
              {
                "dname": "南关区",
                "did": 220102
              },
              {
                "dname": "宽城区",
                "did": 220103
              },
              {
                "dname": "朝阳区",
                "did": 220104
              },
              {
                "dname": "二道区",
                "did": 220105
              },
              {
                "dname": "绿园区",
                "did": 220106
              },
              {
                "dname": "双阳区",
                "did": 220112
              },
              {
                "dname": "农安县",
                "did": 220122
              },
              {
                "dname": "九台市",
                "did": 220181
              },
              {
                "dname": "榆树市",
                "did": 220182
              },
              {
                "dname": "德惠市",
                "did": 220183
              }
            ],
            "cname": "长春市",
            "cid": 220100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220201
              },
              {
                "dname": "昌邑区",
                "did": 220202
              },
              {
                "dname": "龙潭区",
                "did": 220203
              },
              {
                "dname": "船营区",
                "did": 220204
              },
              {
                "dname": "丰满区",
                "did": 220211
              },
              {
                "dname": "永吉县",
                "did": 220221
              },
              {
                "dname": "蛟河市",
                "did": 220281
              },
              {
                "dname": "桦甸市",
                "did": 220282
              },
              {
                "dname": "舒兰市",
                "did": 220283
              },
              {
                "dname": "磐石市",
                "did": 220284
              }
            ],
            "cname": "吉林市",
            "cid": 220200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220301
              },
              {
                "dname": "铁西区",
                "did": 220302
              },
              {
                "dname": "铁东区",
                "did": 220303
              },
              {
                "dname": "梨树县",
                "did": 220322
              },
              {
                "dname": "伊通满族自治县",
                "did": 220323
              },
              {
                "dname": "公主岭市",
                "did": 220381
              },
              {
                "dname": "双辽市",
                "did": 220382
              }
            ],
            "cname": "四平市",
            "cid": 220300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220401
              },
              {
                "dname": "龙山区",
                "did": 220402
              },
              {
                "dname": "西安区",
                "did": 220403
              },
              {
                "dname": "东丰县",
                "did": 220421
              },
              {
                "dname": "东辽县",
                "did": 220422
              }
            ],
            "cname": "辽源市",
            "cid": 220400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220501
              },
              {
                "dname": "东昌区",
                "did": 220502
              },
              {
                "dname": "二道江区",
                "did": 220503
              },
              {
                "dname": "通化县",
                "did": 220521
              },
              {
                "dname": "辉南县",
                "did": 220523
              },
              {
                "dname": "柳河县",
                "did": 220524
              },
              {
                "dname": "梅河口市",
                "did": 220581
              },
              {
                "dname": "集安市",
                "did": 220582
              }
            ],
            "cname": "通化市",
            "cid": 220500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220601
              },
              {
                "dname": "浑江区",
                "did": 220602
              },
              {
                "dname": "江源区",
                "did": 220605
              },
              {
                "dname": "抚松县",
                "did": 220621
              },
              {
                "dname": "靖宇县",
                "did": 220622
              },
              {
                "dname": "长白朝鲜族自治县",
                "did": 220623
              },
              {
                "dname": "临江市",
                "did": 220681
              }
            ],
            "cname": "白山市",
            "cid": 220600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220701
              },
              {
                "dname": "宁江区",
                "did": 220702
              },
              {
                "dname": "前郭尔罗斯蒙古族自治县",
                "did": 220721
              },
              {
                "dname": "长岭县",
                "did": 220722
              },
              {
                "dname": "乾安县",
                "did": 220723
              },
              {
                "dname": "扶余市",
                "did": 220781
              }
            ],
            "cname": "松原市",
            "cid": 220700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 220801
              },
              {
                "dname": "洮北区",
                "did": 220802
              },
              {
                "dname": "镇赉县",
                "did": 220821
              },
              {
                "dname": "通榆县",
                "did": 220822
              },
              {
                "dname": "洮南市",
                "did": 220881
              },
              {
                "dname": "大安市",
                "did": 220882
              }
            ],
            "cname": "白城市",
            "cid": 220800
          },
          {
            "districts": [
              {
                "dname": "延吉市",
                "did": 222401
              },
              {
                "dname": "图们市",
                "did": 222402
              },
              {
                "dname": "敦化市",
                "did": 222403
              },
              {
                "dname": "珲春市",
                "did": 222404
              },
              {
                "dname": "龙井市",
                "did": 222405
              },
              {
                "dname": "和龙市",
                "did": 222406
              },
              {
                "dname": "汪清县",
                "did": 222424
              },
              {
                "dname": "安图县",
                "did": 222426
              }
            ],
            "cname": "延边朝鲜族自治州",
            "cid": 222400
          }
        ]
      },
      {
        "pid": 230000,
        "pname": "黑龙江省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230101
              },
              {
                "dname": "道里区",
                "did": 230102
              },
              {
                "dname": "南岗区",
                "did": 230103
              },
              {
                "dname": "道外区",
                "did": 230104
              },
              {
                "dname": "平房区",
                "did": 230108
              },
              {
                "dname": "松北区",
                "did": 230109
              },
              {
                "dname": "香坊区",
                "did": 230110
              },
              {
                "dname": "呼兰区",
                "did": 230111
              },
              {
                "dname": "阿城区",
                "did": 230112
              },
              {
                "dname": "依兰县",
                "did": 230123
              },
              {
                "dname": "方正县",
                "did": 230124
              },
              {
                "dname": "宾县",
                "did": 230125
              },
              {
                "dname": "巴彦县",
                "did": 230126
              },
              {
                "dname": "木兰县",
                "did": 230127
              },
              {
                "dname": "通河县",
                "did": 230128
              },
              {
                "dname": "延寿县",
                "did": 230129
              },
              {
                "dname": "双城市",
                "did": 230182
              },
              {
                "dname": "尚志市",
                "did": 230183
              },
              {
                "dname": "五常市",
                "did": 230184
              }
            ],
            "cname": "哈尔滨市",
            "cid": 230100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230201
              },
              {
                "dname": "龙沙区",
                "did": 230202
              },
              {
                "dname": "建华区",
                "did": 230203
              },
              {
                "dname": "铁锋区",
                "did": 230204
              },
              {
                "dname": "昂昂溪区",
                "did": 230205
              },
              {
                "dname": "富拉尔基区",
                "did": 230206
              },
              {
                "dname": "碾子山区",
                "did": 230207
              },
              {
                "dname": "梅里斯达斡尔族区",
                "did": 230208
              },
              {
                "dname": "龙江县",
                "did": 230221
              },
              {
                "dname": "依安县",
                "did": 230223
              },
              {
                "dname": "泰来县",
                "did": 230224
              },
              {
                "dname": "甘南县",
                "did": 230225
              },
              {
                "dname": "富裕县",
                "did": 230227
              },
              {
                "dname": "克山县",
                "did": 230229
              },
              {
                "dname": "克东县",
                "did": 230230
              },
              {
                "dname": "拜泉县",
                "did": 230231
              },
              {
                "dname": "讷河市",
                "did": 230281
              }
            ],
            "cname": "齐齐哈尔市",
            "cid": 230200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230301
              },
              {
                "dname": "鸡冠区",
                "did": 230302
              },
              {
                "dname": "恒山区",
                "did": 230303
              },
              {
                "dname": "滴道区",
                "did": 230304
              },
              {
                "dname": "梨树区",
                "did": 230305
              },
              {
                "dname": "城子河区",
                "did": 230306
              },
              {
                "dname": "麻山区",
                "did": 230307
              },
              {
                "dname": "鸡东县",
                "did": 230321
              },
              {
                "dname": "虎林市",
                "did": 230381
              },
              {
                "dname": "密山市",
                "did": 230382
              }
            ],
            "cname": "鸡西市",
            "cid": 230300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230401
              },
              {
                "dname": "向阳区",
                "did": 230402
              },
              {
                "dname": "工农区",
                "did": 230403
              },
              {
                "dname": "南山区",
                "did": 230404
              },
              {
                "dname": "兴安区",
                "did": 230405
              },
              {
                "dname": "东山区",
                "did": 230406
              },
              {
                "dname": "兴山区",
                "did": 230407
              },
              {
                "dname": "萝北县",
                "did": 230421
              },
              {
                "dname": "绥滨县",
                "did": 230422
              }
            ],
            "cname": "鹤岗市",
            "cid": 230400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230501
              },
              {
                "dname": "尖山区",
                "did": 230502
              },
              {
                "dname": "岭东区",
                "did": 230503
              },
              {
                "dname": "四方台区",
                "did": 230505
              },
              {
                "dname": "宝山区",
                "did": 230506
              },
              {
                "dname": "集贤县",
                "did": 230521
              },
              {
                "dname": "友谊县",
                "did": 230522
              },
              {
                "dname": "宝清县",
                "did": 230523
              },
              {
                "dname": "饶河县",
                "did": 230524
              }
            ],
            "cname": "双鸭山市",
            "cid": 230500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230601
              },
              {
                "dname": "萨尔图区",
                "did": 230602
              },
              {
                "dname": "龙凤区",
                "did": 230603
              },
              {
                "dname": "让胡路区",
                "did": 230604
              },
              {
                "dname": "红岗区",
                "did": 230605
              },
              {
                "dname": "大同区",
                "did": 230606
              },
              {
                "dname": "肇州县",
                "did": 230621
              },
              {
                "dname": "肇源县",
                "did": 230622
              },
              {
                "dname": "林甸县",
                "did": 230623
              },
              {
                "dname": "杜尔伯特蒙古族自治县",
                "did": 230624
              }
            ],
            "cname": "大庆市",
            "cid": 230600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230701
              },
              {
                "dname": "伊春区",
                "did": 230702
              },
              {
                "dname": "南岔区",
                "did": 230703
              },
              {
                "dname": "友好区",
                "did": 230704
              },
              {
                "dname": "西林区",
                "did": 230705
              },
              {
                "dname": "翠峦区",
                "did": 230706
              },
              {
                "dname": "新青区",
                "did": 230707
              },
              {
                "dname": "美溪区",
                "did": 230708
              },
              {
                "dname": "金山屯区",
                "did": 230709
              },
              {
                "dname": "五营区",
                "did": 230710
              },
              {
                "dname": "乌马河区",
                "did": 230711
              },
              {
                "dname": "汤旺河区",
                "did": 230712
              },
              {
                "dname": "带岭区",
                "did": 230713
              },
              {
                "dname": "乌伊岭区",
                "did": 230714
              },
              {
                "dname": "红星区",
                "did": 230715
              },
              {
                "dname": "上甘岭区",
                "did": 230716
              },
              {
                "dname": "嘉荫县",
                "did": 230722
              },
              {
                "dname": "铁力市",
                "did": 230781
              }
            ],
            "cname": "伊春市",
            "cid": 230700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230801
              },
              {
                "dname": "向阳区",
                "did": 230803
              },
              {
                "dname": "前进区",
                "did": 230804
              },
              {
                "dname": "东风区",
                "did": 230805
              },
              {
                "dname": "郊区",
                "did": 230811
              },
              {
                "dname": "桦南县",
                "did": 230822
              },
              {
                "dname": "桦川县",
                "did": 230826
              },
              {
                "dname": "汤原县",
                "did": 230828
              },
              {
                "dname": "抚远县",
                "did": 230833
              },
              {
                "dname": "同江市",
                "did": 230881
              },
              {
                "dname": "富锦市",
                "did": 230882
              }
            ],
            "cname": "佳木斯市",
            "cid": 230800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 230901
              },
              {
                "dname": "新兴区",
                "did": 230902
              },
              {
                "dname": "桃山区",
                "did": 230903
              },
              {
                "dname": "茄子河区",
                "did": 230904
              },
              {
                "dname": "勃利县",
                "did": 230921
              }
            ],
            "cname": "七台河市",
            "cid": 230900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 231001
              },
              {
                "dname": "东安区",
                "did": 231002
              },
              {
                "dname": "阳明区",
                "did": 231003
              },
              {
                "dname": "爱民区",
                "did": 231004
              },
              {
                "dname": "西安区",
                "did": 231005
              },
              {
                "dname": "东宁县",
                "did": 231024
              },
              {
                "dname": "林口县",
                "did": 231025
              },
              {
                "dname": "绥芬河市",
                "did": 231081
              },
              {
                "dname": "海林市",
                "did": 231083
              },
              {
                "dname": "宁安市",
                "did": 231084
              },
              {
                "dname": "穆棱市",
                "did": 231085
              }
            ],
            "cname": "牡丹江市",
            "cid": 231000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 231101
              },
              {
                "dname": "爱辉区",
                "did": 231102
              },
              {
                "dname": "嫩江县",
                "did": 231121
              },
              {
                "dname": "逊克县",
                "did": 231123
              },
              {
                "dname": "孙吴县",
                "did": 231124
              },
              {
                "dname": "北安市",
                "did": 231181
              },
              {
                "dname": "五大连池市",
                "did": 231182
              }
            ],
            "cname": "黑河市",
            "cid": 231100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 231201
              },
              {
                "dname": "北林区",
                "did": 231202
              },
              {
                "dname": "望奎县",
                "did": 231221
              },
              {
                "dname": "兰西县",
                "did": 231222
              },
              {
                "dname": "青冈县",
                "did": 231223
              },
              {
                "dname": "庆安县",
                "did": 231224
              },
              {
                "dname": "明水县",
                "did": 231225
              },
              {
                "dname": "绥棱县",
                "did": 231226
              },
              {
                "dname": "安达市",
                "did": 231281
              },
              {
                "dname": "肇东市",
                "did": 231282
              },
              {
                "dname": "海伦市",
                "did": 231283
              }
            ],
            "cname": "绥化市",
            "cid": 231200
          },
          {
            "districts": [
              {
                "dname": "呼玛县",
                "did": 232721
              },
              {
                "dname": "塔河县",
                "did": 232722
              },
              {
                "dname": "漠河县",
                "did": 232723
              }
            ],
            "cname": "大兴安岭地区",
            "cid": 232700
          }
        ]
      },
      {
        "pid": 310000,
        "pname": "上海市",
        "citys": [
          {
            "districts": [
              {
                "dname": "黄浦区",
                "did": 310101
              },
              {
                "dname": "徐汇区",
                "did": 310104
              },
              {
                "dname": "长宁区",
                "did": 310105
              },
              {
                "dname": "静安区",
                "did": 310106
              },
              {
                "dname": "普陀区",
                "did": 310107
              },
              {
                "dname": "闸北区",
                "did": 310108
              },
              {
                "dname": "虹口区",
                "did": 310109
              },
              {
                "dname": "杨浦区",
                "did": 310110
              },
              {
                "dname": "闵行区",
                "did": 310112
              },
              {
                "dname": "宝山区",
                "did": 310113
              },
              {
                "dname": "嘉定区",
                "did": 310114
              },
              {
                "dname": "浦东新区",
                "did": 310115
              },
              {
                "dname": "金山区",
                "did": 310116
              },
              {
                "dname": "松江区",
                "did": 310117
              },
              {
                "dname": "青浦区",
                "did": 310118
              },
              {
                "dname": "奉贤区",
                "did": 310120
              },
              {
                "dname": "崇明县",
                "did": 310230
              }
            ],
            "cname": "上海市",
            "cid": 310100
          }
        ]
      },
      {
        "pid": 320000,
        "pname": "江苏省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320101
              },
              {
                "dname": "玄武区",
                "did": 320102
              },
              {
                "dname": "秦淮区",
                "did": 320104
              },
              {
                "dname": "建邺区",
                "did": 320105
              },
              {
                "dname": "鼓楼区",
                "did": 320106
              },
              {
                "dname": "浦口区",
                "did": 320111
              },
              {
                "dname": "栖霞区",
                "did": 320113
              },
              {
                "dname": "雨花台区",
                "did": 320114
              },
              {
                "dname": "江宁区",
                "did": 320115
              },
              {
                "dname": "六合区",
                "did": 320116
              },
              {
                "dname": "溧水区",
                "did": 320117
              },
              {
                "dname": "高淳区",
                "did": 320118
              }
            ],
            "cname": "南京市",
            "cid": 320100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320201
              },
              {
                "dname": "崇安区",
                "did": 320202
              },
              {
                "dname": "南长区",
                "did": 320203
              },
              {
                "dname": "北塘区",
                "did": 320204
              },
              {
                "dname": "锡山区",
                "did": 320205
              },
              {
                "dname": "惠山区",
                "did": 320206
              },
              {
                "dname": "滨湖区",
                "did": 320211
              },
              {
                "dname": "江阴市",
                "did": 320281
              },
              {
                "dname": "宜兴市",
                "did": 320282
              }
            ],
            "cname": "无锡市",
            "cid": 320200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320301
              },
              {
                "dname": "鼓楼区",
                "did": 320302
              },
              {
                "dname": "云龙区",
                "did": 320303
              },
              {
                "dname": "贾汪区",
                "did": 320305
              },
              {
                "dname": "泉山区",
                "did": 320311
              },
              {
                "dname": "铜山区",
                "did": 320312
              },
              {
                "dname": "丰县",
                "did": 320321
              },
              {
                "dname": "沛县",
                "did": 320322
              },
              {
                "dname": "睢宁县",
                "did": 320324
              },
              {
                "dname": "新沂市",
                "did": 320381
              },
              {
                "dname": "邳州市",
                "did": 320382
              }
            ],
            "cname": "徐州市",
            "cid": 320300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320401
              },
              {
                "dname": "天宁区",
                "did": 320402
              },
              {
                "dname": "钟楼区",
                "did": 320404
              },
              {
                "dname": "戚墅堰区",
                "did": 320405
              },
              {
                "dname": "新北区",
                "did": 320411
              },
              {
                "dname": "武进区",
                "did": 320412
              },
              {
                "dname": "溧阳市",
                "did": 320481
              },
              {
                "dname": "金坛市",
                "did": 320482
              }
            ],
            "cname": "常州市",
            "cid": 320400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320501
              },
              {
                "dname": "虎丘区",
                "did": 320505
              },
              {
                "dname": "吴中区",
                "did": 320506
              },
              {
                "dname": "相城区",
                "did": 320507
              },
              {
                "dname": "姑苏区",
                "did": 320508
              },
              {
                "dname": "吴江区",
                "did": 320509
              },
              {
                "dname": "常熟市",
                "did": 320581
              },
              {
                "dname": "张家港市",
                "did": 320582
              },
              {
                "dname": "昆山市",
                "did": 320583
              },
              {
                "dname": "太仓市",
                "did": 320585
              }
            ],
            "cname": "苏州市",
            "cid": 320500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320601
              },
              {
                "dname": "崇川区",
                "did": 320602
              },
              {
                "dname": "港闸区",
                "did": 320611
              },
              {
                "dname": "通州区",
                "did": 320612
              },
              {
                "dname": "海安县",
                "did": 320621
              },
              {
                "dname": "如东县",
                "did": 320623
              },
              {
                "dname": "启东市",
                "did": 320681
              },
              {
                "dname": "如皋市",
                "did": 320682
              },
              {
                "dname": "海门市",
                "did": 320684
              }
            ],
            "cname": "南通市",
            "cid": 320600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320701
              },
              {
                "dname": "连云区",
                "did": 320703
              },
              {
                "dname": "新浦区",
                "did": 320705
              },
              {
                "dname": "海州区",
                "did": 320706
              },
              {
                "dname": "赣榆县",
                "did": 320721
              },
              {
                "dname": "东海县",
                "did": 320722
              },
              {
                "dname": "灌云县",
                "did": 320723
              },
              {
                "dname": "灌南县",
                "did": 320724
              }
            ],
            "cname": "连云港市",
            "cid": 320700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320801
              },
              {
                "dname": "清河区",
                "did": 320802
              },
              {
                "dname": "淮安区",
                "did": 320803
              },
              {
                "dname": "淮阴区",
                "did": 320804
              },
              {
                "dname": "清浦区",
                "did": 320811
              },
              {
                "dname": "涟水县",
                "did": 320826
              },
              {
                "dname": "洪泽县",
                "did": 320829
              },
              {
                "dname": "盱眙县",
                "did": 320830
              },
              {
                "dname": "金湖县",
                "did": 320831
              }
            ],
            "cname": "淮安市",
            "cid": 320800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 320901
              },
              {
                "dname": "亭湖区",
                "did": 320902
              },
              {
                "dname": "盐都区",
                "did": 320903
              },
              {
                "dname": "响水县",
                "did": 320921
              },
              {
                "dname": "滨海县",
                "did": 320922
              },
              {
                "dname": "阜宁县",
                "did": 320923
              },
              {
                "dname": "射阳县",
                "did": 320924
              },
              {
                "dname": "建湖县",
                "did": 320925
              },
              {
                "dname": "东台市",
                "did": 320981
              },
              {
                "dname": "大丰市",
                "did": 320982
              }
            ],
            "cname": "盐城市",
            "cid": 320900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 321001
              },
              {
                "dname": "广陵区",
                "did": 321002
              },
              {
                "dname": "邗江区",
                "did": 321003
              },
              {
                "dname": "江都区",
                "did": 321012
              },
              {
                "dname": "宝应县",
                "did": 321023
              },
              {
                "dname": "仪征市",
                "did": 321081
              },
              {
                "dname": "高邮市",
                "did": 321084
              }
            ],
            "cname": "扬州市",
            "cid": 321000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 321101
              },
              {
                "dname": "京口区",
                "did": 321102
              },
              {
                "dname": "润州区",
                "did": 321111
              },
              {
                "dname": "丹徒区",
                "did": 321112
              },
              {
                "dname": "丹阳市",
                "did": 321181
              },
              {
                "dname": "扬中市",
                "did": 321182
              },
              {
                "dname": "句容市",
                "did": 321183
              }
            ],
            "cname": "镇江市",
            "cid": 321100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 321201
              },
              {
                "dname": "海陵区",
                "did": 321202
              },
              {
                "dname": "高港区",
                "did": 321203
              },
              {
                "dname": "姜堰区",
                "did": 321204
              },
              {
                "dname": "兴化市",
                "did": 321281
              },
              {
                "dname": "靖江市",
                "did": 321282
              },
              {
                "dname": "泰兴市",
                "did": 321283
              }
            ],
            "cname": "泰州市",
            "cid": 321200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 321301
              },
              {
                "dname": "宿城区",
                "did": 321302
              },
              {
                "dname": "宿豫区",
                "did": 321311
              },
              {
                "dname": "沭阳县",
                "did": 321322
              },
              {
                "dname": "泗阳县",
                "did": 321323
              },
              {
                "dname": "泗洪县",
                "did": 321324
              }
            ],
            "cname": "宿迁市",
            "cid": 321300
          }
        ]
      },
      {
        "pid": 330000,
        "pname": "浙江省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330101
              },
              {
                "dname": "上城区",
                "did": 330102
              },
              {
                "dname": "下城区",
                "did": 330103
              },
              {
                "dname": "江干区",
                "did": 330104
              },
              {
                "dname": "拱墅区",
                "did": 330105
              },
              {
                "dname": "西湖区",
                "did": 330106
              },
              {
                "dname": "滨江区",
                "did": 330108
              },
              {
                "dname": "萧山区",
                "did": 330109
              },
              {
                "dname": "余杭区",
                "did": 330110
              },
              {
                "dname": "桐庐县",
                "did": 330122
              },
              {
                "dname": "淳安县",
                "did": 330127
              },
              {
                "dname": "建德市",
                "did": 330182
              },
              {
                "dname": "富阳市",
                "did": 330183
              },
              {
                "dname": "临安市",
                "did": 330185
              }
            ],
            "cname": "杭州市",
            "cid": 330100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330201
              },
              {
                "dname": "海曙区",
                "did": 330203
              },
              {
                "dname": "江东区",
                "did": 330204
              },
              {
                "dname": "江北区",
                "did": 330205
              },
              {
                "dname": "北仑区",
                "did": 330206
              },
              {
                "dname": "镇海区",
                "did": 330211
              },
              {
                "dname": "鄞州区",
                "did": 330212
              },
              {
                "dname": "象山县",
                "did": 330225
              },
              {
                "dname": "宁海县",
                "did": 330226
              },
              {
                "dname": "余姚市",
                "did": 330281
              },
              {
                "dname": "慈溪市",
                "did": 330282
              },
              {
                "dname": "奉化市",
                "did": 330283
              }
            ],
            "cname": "宁波市",
            "cid": 330200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330301
              },
              {
                "dname": "鹿城区",
                "did": 330302
              },
              {
                "dname": "龙湾区",
                "did": 330303
              },
              {
                "dname": "瓯海区",
                "did": 330304
              },
              {
                "dname": "洞头县",
                "did": 330322
              },
              {
                "dname": "永嘉县",
                "did": 330324
              },
              {
                "dname": "平阳县",
                "did": 330326
              },
              {
                "dname": "苍南县",
                "did": 330327
              },
              {
                "dname": "文成县",
                "did": 330328
              },
              {
                "dname": "泰顺县",
                "did": 330329
              },
              {
                "dname": "瑞安市",
                "did": 330381
              },
              {
                "dname": "乐清市",
                "did": 330382
              }
            ],
            "cname": "温州市",
            "cid": 330300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330401
              },
              {
                "dname": "南湖区",
                "did": 330402
              },
              {
                "dname": "秀洲区",
                "did": 330411
              },
              {
                "dname": "嘉善县",
                "did": 330421
              },
              {
                "dname": "海盐县",
                "did": 330424
              },
              {
                "dname": "海宁市",
                "did": 330481
              },
              {
                "dname": "平湖市",
                "did": 330482
              },
              {
                "dname": "桐乡市",
                "did": 330483
              }
            ],
            "cname": "嘉兴市",
            "cid": 330400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330501
              },
              {
                "dname": "吴兴区",
                "did": 330502
              },
              {
                "dname": "南浔区",
                "did": 330503
              },
              {
                "dname": "德清县",
                "did": 330521
              },
              {
                "dname": "长兴县",
                "did": 330522
              },
              {
                "dname": "安吉县",
                "did": 330523
              }
            ],
            "cname": "湖州市",
            "cid": 330500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330601
              },
              {
                "dname": "越城区",
                "did": 330602
              },
              {
                "dname": "绍兴县",
                "did": 330621
              },
              {
                "dname": "新昌县",
                "did": 330624
              },
              {
                "dname": "诸暨市",
                "did": 330681
              },
              {
                "dname": "上虞市",
                "did": 330682
              },
              {
                "dname": "嵊州市",
                "did": 330683
              }
            ],
            "cname": "绍兴市",
            "cid": 330600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330701
              },
              {
                "dname": "婺城区",
                "did": 330702
              },
              {
                "dname": "金东区",
                "did": 330703
              },
              {
                "dname": "武义县",
                "did": 330723
              },
              {
                "dname": "浦江县",
                "did": 330726
              },
              {
                "dname": "磐安县",
                "did": 330727
              },
              {
                "dname": "兰溪市",
                "did": 330781
              },
              {
                "dname": "义乌市",
                "did": 330782
              },
              {
                "dname": "东阳市",
                "did": 330783
              },
              {
                "dname": "永康市",
                "did": 330784
              }
            ],
            "cname": "金华市",
            "cid": 330700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330801
              },
              {
                "dname": "柯城区",
                "did": 330802
              },
              {
                "dname": "衢江区",
                "did": 330803
              },
              {
                "dname": "常山县",
                "did": 330822
              },
              {
                "dname": "开化县",
                "did": 330824
              },
              {
                "dname": "龙游县",
                "did": 330825
              },
              {
                "dname": "江山市",
                "did": 330881
              }
            ],
            "cname": "衢州市",
            "cid": 330800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 330901
              },
              {
                "dname": "定海区",
                "did": 330902
              },
              {
                "dname": "普陀区",
                "did": 330903
              },
              {
                "dname": "岱山县",
                "did": 330921
              },
              {
                "dname": "嵊泗县",
                "did": 330922
              }
            ],
            "cname": "舟山市",
            "cid": 330900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 331001
              },
              {
                "dname": "椒江区",
                "did": 331002
              },
              {
                "dname": "黄岩区",
                "did": 331003
              },
              {
                "dname": "路桥区",
                "did": 331004
              },
              {
                "dname": "玉环县",
                "did": 331021
              },
              {
                "dname": "三门县",
                "did": 331022
              },
              {
                "dname": "天台县",
                "did": 331023
              },
              {
                "dname": "仙居县",
                "did": 331024
              },
              {
                "dname": "温岭市",
                "did": 331081
              },
              {
                "dname": "临海市",
                "did": 331082
              }
            ],
            "cname": "台州市",
            "cid": 331000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 331101
              },
              {
                "dname": "莲都区",
                "did": 331102
              },
              {
                "dname": "青田县",
                "did": 331121
              },
              {
                "dname": "缙云县",
                "did": 331122
              },
              {
                "dname": "遂昌县",
                "did": 331123
              },
              {
                "dname": "松阳县",
                "did": 331124
              },
              {
                "dname": "云和县",
                "did": 331125
              },
              {
                "dname": "庆元县",
                "did": 331126
              },
              {
                "dname": "景宁畲族自治县",
                "did": 331127
              },
              {
                "dname": "龙泉市",
                "did": 331181
              }
            ],
            "cname": "丽水市",
            "cid": 331100
          }
        ]
      },
      {
        "pid": 340000,
        "pname": "安徽省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340101
              },
              {
                "dname": "瑶海区",
                "did": 340102
              },
              {
                "dname": "庐阳区",
                "did": 340103
              },
              {
                "dname": "蜀山区",
                "did": 340104
              },
              {
                "dname": "包河区",
                "did": 340111
              },
              {
                "dname": "长丰县",
                "did": 340121
              },
              {
                "dname": "肥东县",
                "did": 340122
              },
              {
                "dname": "肥西县",
                "did": 340123
              },
              {
                "dname": "庐江县",
                "did": 340124
              },
              {
                "dname": "巢湖市",
                "did": 340181
              }
            ],
            "cname": "合肥市",
            "cid": 340100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340201
              },
              {
                "dname": "镜湖区",
                "did": 340202
              },
              {
                "dname": "弋江区",
                "did": 340203
              },
              {
                "dname": "鸠江区",
                "did": 340207
              },
              {
                "dname": "三山区",
                "did": 340208
              },
              {
                "dname": "芜湖县",
                "did": 340221
              },
              {
                "dname": "繁昌县",
                "did": 340222
              },
              {
                "dname": "南陵县",
                "did": 340223
              },
              {
                "dname": "无为县",
                "did": 340225
              }
            ],
            "cname": "芜湖市",
            "cid": 340200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340301
              },
              {
                "dname": "龙子湖区",
                "did": 340302
              },
              {
                "dname": "蚌山区",
                "did": 340303
              },
              {
                "dname": "禹会区",
                "did": 340304
              },
              {
                "dname": "淮上区",
                "did": 340311
              },
              {
                "dname": "怀远县",
                "did": 340321
              },
              {
                "dname": "五河县",
                "did": 340322
              },
              {
                "dname": "固镇县",
                "did": 340323
              }
            ],
            "cname": "蚌埠市",
            "cid": 340300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340401
              },
              {
                "dname": "大通区",
                "did": 340402
              },
              {
                "dname": "田家庵区",
                "did": 340403
              },
              {
                "dname": "谢家集区",
                "did": 340404
              },
              {
                "dname": "八公山区",
                "did": 340405
              },
              {
                "dname": "潘集区",
                "did": 340406
              },
              {
                "dname": "凤台县",
                "did": 340421
              }
            ],
            "cname": "淮南市",
            "cid": 340400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340501
              },
              {
                "dname": "花山区",
                "did": 340503
              },
              {
                "dname": "雨山区",
                "did": 340504
              },
              {
                "dname": "博望区",
                "did": 340506
              },
              {
                "dname": "当涂县",
                "did": 340521
              },
              {
                "dname": "含山县",
                "did": 340522
              },
              {
                "dname": "和县",
                "did": 340523
              }
            ],
            "cname": "马鞍山市",
            "cid": 340500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340601
              },
              {
                "dname": "杜集区",
                "did": 340602
              },
              {
                "dname": "相山区",
                "did": 340603
              },
              {
                "dname": "烈山区",
                "did": 340604
              },
              {
                "dname": "濉溪县",
                "did": 340621
              }
            ],
            "cname": "淮北市",
            "cid": 340600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340701
              },
              {
                "dname": "铜官山区",
                "did": 340702
              },
              {
                "dname": "狮子山区",
                "did": 340703
              },
              {
                "dname": "郊区",
                "did": 340711
              },
              {
                "dname": "铜陵县",
                "did": 340721
              }
            ],
            "cname": "铜陵市",
            "cid": 340700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 340801
              },
              {
                "dname": "迎江区",
                "did": 340802
              },
              {
                "dname": "大观区",
                "did": 340803
              },
              {
                "dname": "宜秀区",
                "did": 340811
              },
              {
                "dname": "怀宁县",
                "did": 340822
              },
              {
                "dname": "枞阳县",
                "did": 340823
              },
              {
                "dname": "潜山县",
                "did": 340824
              },
              {
                "dname": "太湖县",
                "did": 340825
              },
              {
                "dname": "宿松县",
                "did": 340826
              },
              {
                "dname": "望江县",
                "did": 340827
              },
              {
                "dname": "岳西县",
                "did": 340828
              },
              {
                "dname": "桐城市",
                "did": 340881
              }
            ],
            "cname": "安庆市",
            "cid": 340800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341001
              },
              {
                "dname": "屯溪区",
                "did": 341002
              },
              {
                "dname": "黄山区",
                "did": 341003
              },
              {
                "dname": "徽州区",
                "did": 341004
              },
              {
                "dname": "歙县",
                "did": 341021
              },
              {
                "dname": "休宁县",
                "did": 341022
              },
              {
                "dname": "黟县",
                "did": 341023
              },
              {
                "dname": "祁门县",
                "did": 341024
              }
            ],
            "cname": "黄山市",
            "cid": 341000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341101
              },
              {
                "dname": "琅琊区",
                "did": 341102
              },
              {
                "dname": "南谯区",
                "did": 341103
              },
              {
                "dname": "来安县",
                "did": 341122
              },
              {
                "dname": "全椒县",
                "did": 341124
              },
              {
                "dname": "定远县",
                "did": 341125
              },
              {
                "dname": "凤阳县",
                "did": 341126
              },
              {
                "dname": "天长市",
                "did": 341181
              },
              {
                "dname": "明光市",
                "did": 341182
              }
            ],
            "cname": "滁州市",
            "cid": 341100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341201
              },
              {
                "dname": "颍州区",
                "did": 341202
              },
              {
                "dname": "颍东区",
                "did": 341203
              },
              {
                "dname": "颍泉区",
                "did": 341204
              },
              {
                "dname": "临泉县",
                "did": 341221
              },
              {
                "dname": "太和县",
                "did": 341222
              },
              {
                "dname": "阜南县",
                "did": 341225
              },
              {
                "dname": "颍上县",
                "did": 341226
              },
              {
                "dname": "界首市",
                "did": 341282
              }
            ],
            "cname": "阜阳市",
            "cid": 341200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341301
              },
              {
                "dname": "埇桥区",
                "did": 341302
              },
              {
                "dname": "砀山县",
                "did": 341321
              },
              {
                "dname": "萧县",
                "did": 341322
              },
              {
                "dname": "灵璧县",
                "did": 341323
              },
              {
                "dname": "泗县",
                "did": 341324
              }
            ],
            "cname": "宿州市",
            "cid": 341300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341501
              },
              {
                "dname": "金安区",
                "did": 341502
              },
              {
                "dname": "裕安区",
                "did": 341503
              },
              {
                "dname": "寿县",
                "did": 341521
              },
              {
                "dname": "霍邱县",
                "did": 341522
              },
              {
                "dname": "舒城县",
                "did": 341523
              },
              {
                "dname": "金寨县",
                "did": 341524
              },
              {
                "dname": "霍山县",
                "did": 341525
              }
            ],
            "cname": "六安市",
            "cid": 341500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341601
              },
              {
                "dname": "谯城区",
                "did": 341602
              },
              {
                "dname": "涡阳县",
                "did": 341621
              },
              {
                "dname": "蒙城县",
                "did": 341622
              },
              {
                "dname": "利辛县",
                "did": 341623
              }
            ],
            "cname": "亳州市",
            "cid": 341600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341701
              },
              {
                "dname": "贵池区",
                "did": 341702
              },
              {
                "dname": "东至县",
                "did": 341721
              },
              {
                "dname": "石台县",
                "did": 341722
              },
              {
                "dname": "青阳县",
                "did": 341723
              }
            ],
            "cname": "池州市",
            "cid": 341700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 341801
              },
              {
                "dname": "宣州区",
                "did": 341802
              },
              {
                "dname": "郎溪县",
                "did": 341821
              },
              {
                "dname": "广德县",
                "did": 341822
              },
              {
                "dname": "泾县",
                "did": 341823
              },
              {
                "dname": "绩溪县",
                "did": 341824
              },
              {
                "dname": "旌德县",
                "did": 341825
              },
              {
                "dname": "宁国市",
                "did": 341881
              }
            ],
            "cname": "宣城市",
            "cid": 341800
          }
        ]
      },
      {
        "pid": 350000,
        "pname": "福建省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350101
              },
              {
                "dname": "鼓楼区",
                "did": 350102
              },
              {
                "dname": "台江区",
                "did": 350103
              },
              {
                "dname": "仓山区",
                "did": 350104
              },
              {
                "dname": "马尾区",
                "did": 350105
              },
              {
                "dname": "晋安区",
                "did": 350111
              },
              {
                "dname": "闽侯县",
                "did": 350121
              },
              {
                "dname": "连江县",
                "did": 350122
              },
              {
                "dname": "罗源县",
                "did": 350123
              },
              {
                "dname": "闽清县",
                "did": 350124
              },
              {
                "dname": "永泰县",
                "did": 350125
              },
              {
                "dname": "平潭县",
                "did": 350128
              },
              {
                "dname": "福清市",
                "did": 350181
              },
              {
                "dname": "长乐市",
                "did": 350182
              }
            ],
            "cname": "福州市",
            "cid": 350100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350201
              },
              {
                "dname": "思明区",
                "did": 350203
              },
              {
                "dname": "海沧区",
                "did": 350205
              },
              {
                "dname": "湖里区",
                "did": 350206
              },
              {
                "dname": "集美区",
                "did": 350211
              },
              {
                "dname": "同安区",
                "did": 350212
              },
              {
                "dname": "翔安区",
                "did": 350213
              }
            ],
            "cname": "厦门市",
            "cid": 350200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350301
              },
              {
                "dname": "城厢区",
                "did": 350302
              },
              {
                "dname": "涵江区",
                "did": 350303
              },
              {
                "dname": "荔城区",
                "did": 350304
              },
              {
                "dname": "秀屿区",
                "did": 350305
              },
              {
                "dname": "仙游县",
                "did": 350322
              }
            ],
            "cname": "莆田市",
            "cid": 350300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350401
              },
              {
                "dname": "梅列区",
                "did": 350402
              },
              {
                "dname": "三元区",
                "did": 350403
              },
              {
                "dname": "明溪县",
                "did": 350421
              },
              {
                "dname": "清流县",
                "did": 350423
              },
              {
                "dname": "宁化县",
                "did": 350424
              },
              {
                "dname": "大田县",
                "did": 350425
              },
              {
                "dname": "尤溪县",
                "did": 350426
              },
              {
                "dname": "沙县",
                "did": 350427
              },
              {
                "dname": "将乐县",
                "did": 350428
              },
              {
                "dname": "泰宁县",
                "did": 350429
              },
              {
                "dname": "建宁县",
                "did": 350430
              },
              {
                "dname": "永安市",
                "did": 350481
              }
            ],
            "cname": "三明市",
            "cid": 350400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350501
              },
              {
                "dname": "鲤城区",
                "did": 350502
              },
              {
                "dname": "丰泽区",
                "did": 350503
              },
              {
                "dname": "洛江区",
                "did": 350504
              },
              {
                "dname": "泉港区",
                "did": 350505
              },
              {
                "dname": "惠安县",
                "did": 350521
              },
              {
                "dname": "安溪县",
                "did": 350524
              },
              {
                "dname": "永春县",
                "did": 350525
              },
              {
                "dname": "德化县",
                "did": 350526
              },
              {
                "dname": "金门县",
                "did": 350527
              },
              {
                "dname": "石狮市",
                "did": 350581
              },
              {
                "dname": "晋江市",
                "did": 350582
              },
              {
                "dname": "南安市",
                "did": 350583
              }
            ],
            "cname": "泉州市",
            "cid": 350500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350601
              },
              {
                "dname": "芗城区",
                "did": 350602
              },
              {
                "dname": "龙文区",
                "did": 350603
              },
              {
                "dname": "云霄县",
                "did": 350622
              },
              {
                "dname": "漳浦县",
                "did": 350623
              },
              {
                "dname": "诏安县",
                "did": 350624
              },
              {
                "dname": "长泰县",
                "did": 350625
              },
              {
                "dname": "东山县",
                "did": 350626
              },
              {
                "dname": "南靖县",
                "did": 350627
              },
              {
                "dname": "平和县",
                "did": 350628
              },
              {
                "dname": "华安县",
                "did": 350629
              },
              {
                "dname": "龙海市",
                "did": 350681
              }
            ],
            "cname": "漳州市",
            "cid": 350600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350701
              },
              {
                "dname": "延平区",
                "did": 350702
              },
              {
                "dname": "顺昌县",
                "did": 350721
              },
              {
                "dname": "浦城县",
                "did": 350722
              },
              {
                "dname": "光泽县",
                "did": 350723
              },
              {
                "dname": "松溪县",
                "did": 350724
              },
              {
                "dname": "政和县",
                "did": 350725
              },
              {
                "dname": "邵武市",
                "did": 350781
              },
              {
                "dname": "武夷山市",
                "did": 350782
              },
              {
                "dname": "建瓯市",
                "did": 350783
              },
              {
                "dname": "建阳市",
                "did": 350784
              }
            ],
            "cname": "南平市",
            "cid": 350700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350801
              },
              {
                "dname": "新罗区",
                "did": 350802
              },
              {
                "dname": "长汀县",
                "did": 350821
              },
              {
                "dname": "永定县",
                "did": 350822
              },
              {
                "dname": "上杭县",
                "did": 350823
              },
              {
                "dname": "武平县",
                "did": 350824
              },
              {
                "dname": "连城县",
                "did": 350825
              },
              {
                "dname": "漳平市",
                "did": 350881
              }
            ],
            "cname": "龙岩市",
            "cid": 350800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 350901
              },
              {
                "dname": "蕉城区",
                "did": 350902
              },
              {
                "dname": "霞浦县",
                "did": 350921
              },
              {
                "dname": "古田县",
                "did": 350922
              },
              {
                "dname": "屏南县",
                "did": 350923
              },
              {
                "dname": "寿宁县",
                "did": 350924
              },
              {
                "dname": "周宁县",
                "did": 350925
              },
              {
                "dname": "柘荣县",
                "did": 350926
              },
              {
                "dname": "福安市",
                "did": 350981
              },
              {
                "dname": "福鼎市",
                "did": 350982
              }
            ],
            "cname": "宁德市",
            "cid": 350900
          }
        ]
      },
      {
        "pid": 360000,
        "pname": "江西省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360101
              },
              {
                "dname": "东湖区",
                "did": 360102
              },
              {
                "dname": "西湖区",
                "did": 360103
              },
              {
                "dname": "青云谱区",
                "did": 360104
              },
              {
                "dname": "湾里区",
                "did": 360105
              },
              {
                "dname": "青山湖区",
                "did": 360111
              },
              {
                "dname": "南昌县",
                "did": 360121
              },
              {
                "dname": "新建县",
                "did": 360122
              },
              {
                "dname": "安义县",
                "did": 360123
              },
              {
                "dname": "进贤县",
                "did": 360124
              }
            ],
            "cname": "南昌市",
            "cid": 360100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360201
              },
              {
                "dname": "昌江区",
                "did": 360202
              },
              {
                "dname": "珠山区",
                "did": 360203
              },
              {
                "dname": "浮梁县",
                "did": 360222
              },
              {
                "dname": "乐平市",
                "did": 360281
              }
            ],
            "cname": "景德镇市",
            "cid": 360200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360301
              },
              {
                "dname": "安源区",
                "did": 360302
              },
              {
                "dname": "湘东区",
                "did": 360313
              },
              {
                "dname": "莲花县",
                "did": 360321
              },
              {
                "dname": "上栗县",
                "did": 360322
              },
              {
                "dname": "芦溪县",
                "did": 360323
              }
            ],
            "cname": "萍乡市",
            "cid": 360300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360401
              },
              {
                "dname": "庐山区",
                "did": 360402
              },
              {
                "dname": "浔阳区",
                "did": 360403
              },
              {
                "dname": "九江县",
                "did": 360421
              },
              {
                "dname": "武宁县",
                "did": 360423
              },
              {
                "dname": "修水县",
                "did": 360424
              },
              {
                "dname": "永修县",
                "did": 360425
              },
              {
                "dname": "德安县",
                "did": 360426
              },
              {
                "dname": "星子县",
                "did": 360427
              },
              {
                "dname": "都昌县",
                "did": 360428
              },
              {
                "dname": "湖口县",
                "did": 360429
              },
              {
                "dname": "彭泽县",
                "did": 360430
              },
              {
                "dname": "瑞昌市",
                "did": 360481
              },
              {
                "dname": "共青城市",
                "did": 360482
              }
            ],
            "cname": "九江市",
            "cid": 360400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360501
              },
              {
                "dname": "渝水区",
                "did": 360502
              },
              {
                "dname": "分宜县",
                "did": 360521
              }
            ],
            "cname": "新余市",
            "cid": 360500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360601
              },
              {
                "dname": "月湖区",
                "did": 360602
              },
              {
                "dname": "余江县",
                "did": 360622
              },
              {
                "dname": "贵溪市",
                "did": 360681
              }
            ],
            "cname": "鹰潭市",
            "cid": 360600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360701
              },
              {
                "dname": "章贡区",
                "did": 360702
              },
              {
                "dname": "赣县",
                "did": 360721
              },
              {
                "dname": "信丰县",
                "did": 360722
              },
              {
                "dname": "大余县",
                "did": 360723
              },
              {
                "dname": "上犹县",
                "did": 360724
              },
              {
                "dname": "崇义县",
                "did": 360725
              },
              {
                "dname": "安远县",
                "did": 360726
              },
              {
                "dname": "龙南县",
                "did": 360727
              },
              {
                "dname": "定南县",
                "did": 360728
              },
              {
                "dname": "全南县",
                "did": 360729
              },
              {
                "dname": "宁都县",
                "did": 360730
              },
              {
                "dname": "于都县",
                "did": 360731
              },
              {
                "dname": "兴国县",
                "did": 360732
              },
              {
                "dname": "会昌县",
                "did": 360733
              },
              {
                "dname": "寻乌县",
                "did": 360734
              },
              {
                "dname": "石城县",
                "did": 360735
              },
              {
                "dname": "瑞金市",
                "did": 360781
              },
              {
                "dname": "南康市",
                "did": 360782
              }
            ],
            "cname": "赣州市",
            "cid": 360700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360801
              },
              {
                "dname": "吉州区",
                "did": 360802
              },
              {
                "dname": "青原区",
                "did": 360803
              },
              {
                "dname": "吉安县",
                "did": 360821
              },
              {
                "dname": "吉水县",
                "did": 360822
              },
              {
                "dname": "峡江县",
                "did": 360823
              },
              {
                "dname": "新干县",
                "did": 360824
              },
              {
                "dname": "永丰县",
                "did": 360825
              },
              {
                "dname": "泰和县",
                "did": 360826
              },
              {
                "dname": "遂川县",
                "did": 360827
              },
              {
                "dname": "万安县",
                "did": 360828
              },
              {
                "dname": "安福县",
                "did": 360829
              },
              {
                "dname": "永新县",
                "did": 360830
              },
              {
                "dname": "井冈山市",
                "did": 360881
              }
            ],
            "cname": "吉安市",
            "cid": 360800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 360901
              },
              {
                "dname": "袁州区",
                "did": 360902
              },
              {
                "dname": "奉新县",
                "did": 360921
              },
              {
                "dname": "万载县",
                "did": 360922
              },
              {
                "dname": "上高县",
                "did": 360923
              },
              {
                "dname": "宜丰县",
                "did": 360924
              },
              {
                "dname": "靖安县",
                "did": 360925
              },
              {
                "dname": "铜鼓县",
                "did": 360926
              },
              {
                "dname": "丰城市",
                "did": 360981
              },
              {
                "dname": "樟树市",
                "did": 360982
              },
              {
                "dname": "高安市",
                "did": 360983
              }
            ],
            "cname": "宜春市",
            "cid": 360900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 361001
              },
              {
                "dname": "临川区",
                "did": 361002
              },
              {
                "dname": "南城县",
                "did": 361021
              },
              {
                "dname": "黎川县",
                "did": 361022
              },
              {
                "dname": "南丰县",
                "did": 361023
              },
              {
                "dname": "崇仁县",
                "did": 361024
              },
              {
                "dname": "乐安县",
                "did": 361025
              },
              {
                "dname": "宜黄县",
                "did": 361026
              },
              {
                "dname": "金溪县",
                "did": 361027
              },
              {
                "dname": "资溪县",
                "did": 361028
              },
              {
                "dname": "东乡县",
                "did": 361029
              },
              {
                "dname": "广昌县",
                "did": 361030
              }
            ],
            "cname": "抚州市",
            "cid": 361000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 361101
              },
              {
                "dname": "信州区",
                "did": 361102
              },
              {
                "dname": "上饶县",
                "did": 361121
              },
              {
                "dname": "广丰县",
                "did": 361122
              },
              {
                "dname": "玉山县",
                "did": 361123
              },
              {
                "dname": "铅山县",
                "did": 361124
              },
              {
                "dname": "横峰县",
                "did": 361125
              },
              {
                "dname": "弋阳县",
                "did": 361126
              },
              {
                "dname": "余干县",
                "did": 361127
              },
              {
                "dname": "鄱阳县",
                "did": 361128
              },
              {
                "dname": "万年县",
                "did": 361129
              },
              {
                "dname": "婺源县",
                "did": 361130
              },
              {
                "dname": "德兴市",
                "did": 361181
              }
            ],
            "cname": "上饶市",
            "cid": 361100
          }
        ]
      },
      {
        "pid": 370000,
        "pname": "山东省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370101
              },
              {
                "dname": "历下区",
                "did": 370102
              },
              {
                "dname": "市中区",
                "did": 370103
              },
              {
                "dname": "槐荫区",
                "did": 370104
              },
              {
                "dname": "天桥区",
                "did": 370105
              },
              {
                "dname": "历城区",
                "did": 370112
              },
              {
                "dname": "长清区",
                "did": 370113
              },
              {
                "dname": "平阴县",
                "did": 370124
              },
              {
                "dname": "济阳县",
                "did": 370125
              },
              {
                "dname": "商河县",
                "did": 370126
              },
              {
                "dname": "章丘市",
                "did": 370181
              }
            ],
            "cname": "济南市",
            "cid": 370100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370201
              },
              {
                "dname": "市南区",
                "did": 370202
              },
              {
                "dname": "市北区",
                "did": 370203
              },
              {
                "dname": "黄岛区",
                "did": 370211
              },
              {
                "dname": "崂山区",
                "did": 370212
              },
              {
                "dname": "李沧区",
                "did": 370213
              },
              {
                "dname": "城阳区",
                "did": 370214
              },
              {
                "dname": "胶州市",
                "did": 370281
              },
              {
                "dname": "即墨市",
                "did": 370282
              },
              {
                "dname": "平度市",
                "did": 370283
              },
              {
                "dname": "莱西市",
                "did": 370285
              }
            ],
            "cname": "青岛市",
            "cid": 370200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370301
              },
              {
                "dname": "淄川区",
                "did": 370302
              },
              {
                "dname": "张店区",
                "did": 370303
              },
              {
                "dname": "博山区",
                "did": 370304
              },
              {
                "dname": "临淄区",
                "did": 370305
              },
              {
                "dname": "周村区",
                "did": 370306
              },
              {
                "dname": "桓台县",
                "did": 370321
              },
              {
                "dname": "高青县",
                "did": 370322
              },
              {
                "dname": "沂源县",
                "did": 370323
              }
            ],
            "cname": "淄博市",
            "cid": 370300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370401
              },
              {
                "dname": "市中区",
                "did": 370402
              },
              {
                "dname": "薛城区",
                "did": 370403
              },
              {
                "dname": "峄城区",
                "did": 370404
              },
              {
                "dname": "台儿庄区",
                "did": 370405
              },
              {
                "dname": "山亭区",
                "did": 370406
              },
              {
                "dname": "滕州市",
                "did": 370481
              }
            ],
            "cname": "枣庄市",
            "cid": 370400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370501
              },
              {
                "dname": "东营区",
                "did": 370502
              },
              {
                "dname": "河口区",
                "did": 370503
              },
              {
                "dname": "垦利县",
                "did": 370521
              },
              {
                "dname": "利津县",
                "did": 370522
              },
              {
                "dname": "广饶县",
                "did": 370523
              }
            ],
            "cname": "东营市",
            "cid": 370500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370601
              },
              {
                "dname": "芝罘区",
                "did": 370602
              },
              {
                "dname": "福山区",
                "did": 370611
              },
              {
                "dname": "牟平区",
                "did": 370612
              },
              {
                "dname": "莱山区",
                "did": 370613
              },
              {
                "dname": "长岛县",
                "did": 370634
              },
              {
                "dname": "龙口市",
                "did": 370681
              },
              {
                "dname": "莱阳市",
                "did": 370682
              },
              {
                "dname": "莱州市",
                "did": 370683
              },
              {
                "dname": "蓬莱市",
                "did": 370684
              },
              {
                "dname": "招远市",
                "did": 370685
              },
              {
                "dname": "栖霞市",
                "did": 370686
              },
              {
                "dname": "海阳市",
                "did": 370687
              }
            ],
            "cname": "烟台市",
            "cid": 370600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370701
              },
              {
                "dname": "潍城区",
                "did": 370702
              },
              {
                "dname": "寒亭区",
                "did": 370703
              },
              {
                "dname": "坊子区",
                "did": 370704
              },
              {
                "dname": "奎文区",
                "did": 370705
              },
              {
                "dname": "临朐县",
                "did": 370724
              },
              {
                "dname": "昌乐县",
                "did": 370725
              },
              {
                "dname": "青州市",
                "did": 370781
              },
              {
                "dname": "诸城市",
                "did": 370782
              },
              {
                "dname": "寿光市",
                "did": 370783
              },
              {
                "dname": "安丘市",
                "did": 370784
              },
              {
                "dname": "高密市",
                "did": 370785
              },
              {
                "dname": "昌邑市",
                "did": 370786
              }
            ],
            "cname": "潍坊市",
            "cid": 370700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370801
              },
              {
                "dname": "市中区",
                "did": 370802
              },
              {
                "dname": "任城区",
                "did": 370811
              },
              {
                "dname": "微山县",
                "did": 370826
              },
              {
                "dname": "鱼台县",
                "did": 370827
              },
              {
                "dname": "金乡县",
                "did": 370828
              },
              {
                "dname": "嘉祥县",
                "did": 370829
              },
              {
                "dname": "汶上县",
                "did": 370830
              },
              {
                "dname": "泗水县",
                "did": 370831
              },
              {
                "dname": "梁山县",
                "did": 370832
              },
              {
                "dname": "曲阜市",
                "did": 370881
              },
              {
                "dname": "兖州市",
                "did": 370882
              },
              {
                "dname": "邹城市",
                "did": 370883
              }
            ],
            "cname": "济宁市",
            "cid": 370800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 370901
              },
              {
                "dname": "泰山区",
                "did": 370902
              },
              {
                "dname": "岱岳区",
                "did": 370911
              },
              {
                "dname": "宁阳县",
                "did": 370921
              },
              {
                "dname": "东平县",
                "did": 370923
              },
              {
                "dname": "新泰市",
                "did": 370982
              },
              {
                "dname": "肥城市",
                "did": 370983
              }
            ],
            "cname": "泰安市",
            "cid": 370900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371001
              },
              {
                "dname": "环翠区",
                "did": 371002
              },
              {
                "dname": "文登市",
                "did": 371081
              },
              {
                "dname": "荣成市",
                "did": 371082
              },
              {
                "dname": "乳山市",
                "did": 371083
              }
            ],
            "cname": "威海市",
            "cid": 371000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371101
              },
              {
                "dname": "东港区",
                "did": 371102
              },
              {
                "dname": "岚山区",
                "did": 371103
              },
              {
                "dname": "五莲县",
                "did": 371121
              },
              {
                "dname": "莒县",
                "did": 371122
              }
            ],
            "cname": "日照市",
            "cid": 371100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371201
              },
              {
                "dname": "莱城区",
                "did": 371202
              },
              {
                "dname": "钢城区",
                "did": 371203
              }
            ],
            "cname": "莱芜市",
            "cid": 371200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371301
              },
              {
                "dname": "兰山区",
                "did": 371302
              },
              {
                "dname": "罗庄区",
                "did": 371311
              },
              {
                "dname": "河东区",
                "did": 371312
              },
              {
                "dname": "沂南县",
                "did": 371321
              },
              {
                "dname": "郯城县",
                "did": 371322
              },
              {
                "dname": "沂水县",
                "did": 371323
              },
              {
                "dname": "苍山县",
                "did": 371324
              },
              {
                "dname": "费县",
                "did": 371325
              },
              {
                "dname": "平邑县",
                "did": 371326
              },
              {
                "dname": "莒南县",
                "did": 371327
              },
              {
                "dname": "蒙阴县",
                "did": 371328
              },
              {
                "dname": "临沭县",
                "did": 371329
              }
            ],
            "cname": "临沂市",
            "cid": 371300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371401
              },
              {
                "dname": "德城区",
                "did": 371402
              },
              {
                "dname": "陵县",
                "did": 371421
              },
              {
                "dname": "宁津县",
                "did": 371422
              },
              {
                "dname": "庆云县",
                "did": 371423
              },
              {
                "dname": "临邑县",
                "did": 371424
              },
              {
                "dname": "齐河县",
                "did": 371425
              },
              {
                "dname": "平原县",
                "did": 371426
              },
              {
                "dname": "夏津县",
                "did": 371427
              },
              {
                "dname": "武城县",
                "did": 371428
              },
              {
                "dname": "乐陵市",
                "did": 371481
              },
              {
                "dname": "禹城市",
                "did": 371482
              }
            ],
            "cname": "德州市",
            "cid": 371400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371501
              },
              {
                "dname": "东昌府区",
                "did": 371502
              },
              {
                "dname": "阳谷县",
                "did": 371521
              },
              {
                "dname": "莘县",
                "did": 371522
              },
              {
                "dname": "茌平县",
                "did": 371523
              },
              {
                "dname": "东阿县",
                "did": 371524
              },
              {
                "dname": "冠县",
                "did": 371525
              },
              {
                "dname": "高唐县",
                "did": 371526
              },
              {
                "dname": "临清市",
                "did": 371581
              }
            ],
            "cname": "聊城市",
            "cid": 371500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371601
              },
              {
                "dname": "滨城区",
                "did": 371602
              },
              {
                "dname": "惠民县",
                "did": 371621
              },
              {
                "dname": "阳信县",
                "did": 371622
              },
              {
                "dname": "无棣县",
                "did": 371623
              },
              {
                "dname": "沾化县",
                "did": 371624
              },
              {
                "dname": "博兴县",
                "did": 371625
              },
              {
                "dname": "邹平县",
                "did": 371626
              }
            ],
            "cname": "滨州市",
            "cid": 371600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 371701
              },
              {
                "dname": "牡丹区",
                "did": 371702
              },
              {
                "dname": "曹县",
                "did": 371721
              },
              {
                "dname": "单县",
                "did": 371722
              },
              {
                "dname": "成武县",
                "did": 371723
              },
              {
                "dname": "巨野县",
                "did": 371724
              },
              {
                "dname": "郓城县",
                "did": 371725
              },
              {
                "dname": "鄄城县",
                "did": 371726
              },
              {
                "dname": "定陶县",
                "did": 371727
              },
              {
                "dname": "东明县",
                "did": 371728
              }
            ],
            "cname": "菏泽市",
            "cid": 371700
          }
        ]
      },
      {
        "pid": 410000,
        "pname": "河南省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410101
              },
              {
                "dname": "中原区",
                "did": 410102
              },
              {
                "dname": "二七区",
                "did": 410103
              },
              {
                "dname": "管城回族区",
                "did": 410104
              },
              {
                "dname": "金水区",
                "did": 410105
              },
              {
                "dname": "上街区",
                "did": 410106
              },
              {
                "dname": "惠济区",
                "did": 410108
              },
              {
                "dname": "中牟县",
                "did": 410122
              },
              {
                "dname": "巩义市",
                "did": 410181
              },
              {
                "dname": "荥阳市",
                "did": 410182
              },
              {
                "dname": "新密市",
                "did": 410183
              },
              {
                "dname": "新郑市",
                "did": 410184
              },
              {
                "dname": "登封市",
                "did": 410185
              }
            ],
            "cname": "郑州市",
            "cid": 410100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410201
              },
              {
                "dname": "龙亭区",
                "did": 410202
              },
              {
                "dname": "顺河回族区",
                "did": 410203
              },
              {
                "dname": "鼓楼区",
                "did": 410204
              },
              {
                "dname": "禹王台区",
                "did": 410205
              },
              {
                "dname": "金明区",
                "did": 410211
              },
              {
                "dname": "杞县",
                "did": 410221
              },
              {
                "dname": "通许县",
                "did": 410222
              },
              {
                "dname": "尉氏县",
                "did": 410223
              },
              {
                "dname": "开封县",
                "did": 410224
              },
              {
                "dname": "兰考县",
                "did": 410225
              }
            ],
            "cname": "开封市",
            "cid": 410200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410301
              },
              {
                "dname": "老城区",
                "did": 410302
              },
              {
                "dname": "西工区",
                "did": 410303
              },
              {
                "dname": "瀍河回族区",
                "did": 410304
              },
              {
                "dname": "涧西区",
                "did": 410305
              },
              {
                "dname": "吉利区",
                "did": 410306
              },
              {
                "dname": "洛龙区",
                "did": 410311
              },
              {
                "dname": "孟津县",
                "did": 410322
              },
              {
                "dname": "新安县",
                "did": 410323
              },
              {
                "dname": "栾川县",
                "did": 410324
              },
              {
                "dname": "嵩县",
                "did": 410325
              },
              {
                "dname": "汝阳县",
                "did": 410326
              },
              {
                "dname": "宜阳县",
                "did": 410327
              },
              {
                "dname": "洛宁县",
                "did": 410328
              },
              {
                "dname": "伊川县",
                "did": 410329
              },
              {
                "dname": "偃师市",
                "did": 410381
              }
            ],
            "cname": "洛阳市",
            "cid": 410300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410401
              },
              {
                "dname": "新华区",
                "did": 410402
              },
              {
                "dname": "卫东区",
                "did": 410403
              },
              {
                "dname": "石龙区",
                "did": 410404
              },
              {
                "dname": "湛河区",
                "did": 410411
              },
              {
                "dname": "宝丰县",
                "did": 410421
              },
              {
                "dname": "叶县",
                "did": 410422
              },
              {
                "dname": "鲁山县",
                "did": 410423
              },
              {
                "dname": "郏县",
                "did": 410425
              },
              {
                "dname": "舞钢市",
                "did": 410481
              },
              {
                "dname": "汝州市",
                "did": 410482
              }
            ],
            "cname": "平顶山市",
            "cid": 410400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410501
              },
              {
                "dname": "文峰区",
                "did": 410502
              },
              {
                "dname": "北关区",
                "did": 410503
              },
              {
                "dname": "殷都区",
                "did": 410505
              },
              {
                "dname": "龙安区",
                "did": 410506
              },
              {
                "dname": "安阳县",
                "did": 410522
              },
              {
                "dname": "汤阴县",
                "did": 410523
              },
              {
                "dname": "滑县",
                "did": 410526
              },
              {
                "dname": "内黄县",
                "did": 410527
              },
              {
                "dname": "林州市",
                "did": 410581
              }
            ],
            "cname": "安阳市",
            "cid": 410500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410601
              },
              {
                "dname": "鹤山区",
                "did": 410602
              },
              {
                "dname": "山城区",
                "did": 410603
              },
              {
                "dname": "淇滨区",
                "did": 410611
              },
              {
                "dname": "浚县",
                "did": 410621
              },
              {
                "dname": "淇县",
                "did": 410622
              }
            ],
            "cname": "鹤壁市",
            "cid": 410600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410701
              },
              {
                "dname": "红旗区",
                "did": 410702
              },
              {
                "dname": "卫滨区",
                "did": 410703
              },
              {
                "dname": "凤泉区",
                "did": 410704
              },
              {
                "dname": "牧野区",
                "did": 410711
              },
              {
                "dname": "新乡县",
                "did": 410721
              },
              {
                "dname": "获嘉县",
                "did": 410724
              },
              {
                "dname": "原阳县",
                "did": 410725
              },
              {
                "dname": "延津县",
                "did": 410726
              },
              {
                "dname": "封丘县",
                "did": 410727
              },
              {
                "dname": "长垣县",
                "did": 410728
              },
              {
                "dname": "卫辉市",
                "did": 410781
              },
              {
                "dname": "辉县市",
                "did": 410782
              }
            ],
            "cname": "新乡市",
            "cid": 410700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410801
              },
              {
                "dname": "解放区",
                "did": 410802
              },
              {
                "dname": "中站区",
                "did": 410803
              },
              {
                "dname": "马村区",
                "did": 410804
              },
              {
                "dname": "山阳区",
                "did": 410811
              },
              {
                "dname": "修武县",
                "did": 410821
              },
              {
                "dname": "博爱县",
                "did": 410822
              },
              {
                "dname": "武陟县",
                "did": 410823
              },
              {
                "dname": "温县",
                "did": 410825
              },
              {
                "dname": "沁阳市",
                "did": 410882
              },
              {
                "dname": "孟州市",
                "did": 410883
              }
            ],
            "cname": "焦作市",
            "cid": 410800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 410901
              },
              {
                "dname": "华龙区",
                "did": 410902
              },
              {
                "dname": "清丰县",
                "did": 410922
              },
              {
                "dname": "南乐县",
                "did": 410923
              },
              {
                "dname": "范县",
                "did": 410926
              },
              {
                "dname": "台前县",
                "did": 410927
              },
              {
                "dname": "濮阳县",
                "did": 410928
              }
            ],
            "cname": "濮阳市",
            "cid": 410900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411001
              },
              {
                "dname": "魏都区",
                "did": 411002
              },
              {
                "dname": "许昌县",
                "did": 411023
              },
              {
                "dname": "鄢陵县",
                "did": 411024
              },
              {
                "dname": "襄城县",
                "did": 411025
              },
              {
                "dname": "禹州市",
                "did": 411081
              },
              {
                "dname": "长葛市",
                "did": 411082
              }
            ],
            "cname": "许昌市",
            "cid": 411000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411101
              },
              {
                "dname": "源汇区",
                "did": 411102
              },
              {
                "dname": "郾城区",
                "did": 411103
              },
              {
                "dname": "召陵区",
                "did": 411104
              },
              {
                "dname": "舞阳县",
                "did": 411121
              },
              {
                "dname": "临颍县",
                "did": 411122
              }
            ],
            "cname": "漯河市",
            "cid": 411100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411201
              },
              {
                "dname": "湖滨区",
                "did": 411202
              },
              {
                "dname": "渑池县",
                "did": 411221
              },
              {
                "dname": "陕县",
                "did": 411222
              },
              {
                "dname": "卢氏县",
                "did": 411224
              },
              {
                "dname": "义马市",
                "did": 411281
              },
              {
                "dname": "灵宝市",
                "did": 411282
              }
            ],
            "cname": "三门峡市",
            "cid": 411200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411301
              },
              {
                "dname": "宛城区",
                "did": 411302
              },
              {
                "dname": "卧龙区",
                "did": 411303
              },
              {
                "dname": "南召县",
                "did": 411321
              },
              {
                "dname": "方城县",
                "did": 411322
              },
              {
                "dname": "西峡县",
                "did": 411323
              },
              {
                "dname": "镇平县",
                "did": 411324
              },
              {
                "dname": "内乡县",
                "did": 411325
              },
              {
                "dname": "淅川县",
                "did": 411326
              },
              {
                "dname": "社旗县",
                "did": 411327
              },
              {
                "dname": "唐河县",
                "did": 411328
              },
              {
                "dname": "新野县",
                "did": 411329
              },
              {
                "dname": "桐柏县",
                "did": 411330
              },
              {
                "dname": "邓州市",
                "did": 411381
              }
            ],
            "cname": "南阳市",
            "cid": 411300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411401
              },
              {
                "dname": "梁园区",
                "did": 411402
              },
              {
                "dname": "睢阳区",
                "did": 411403
              },
              {
                "dname": "民权县",
                "did": 411421
              },
              {
                "dname": "睢县",
                "did": 411422
              },
              {
                "dname": "宁陵县",
                "did": 411423
              },
              {
                "dname": "柘城县",
                "did": 411424
              },
              {
                "dname": "虞城县",
                "did": 411425
              },
              {
                "dname": "夏邑县",
                "did": 411426
              },
              {
                "dname": "永城市",
                "did": 411481
              }
            ],
            "cname": "商丘市",
            "cid": 411400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411501
              },
              {
                "dname": "浉河区",
                "did": 411502
              },
              {
                "dname": "平桥区",
                "did": 411503
              },
              {
                "dname": "罗山县",
                "did": 411521
              },
              {
                "dname": "光山县",
                "did": 411522
              },
              {
                "dname": "新县",
                "did": 411523
              },
              {
                "dname": "商城县",
                "did": 411524
              },
              {
                "dname": "固始县",
                "did": 411525
              },
              {
                "dname": "潢川县",
                "did": 411526
              },
              {
                "dname": "淮滨县",
                "did": 411527
              },
              {
                "dname": "息县",
                "did": 411528
              }
            ],
            "cname": "信阳市",
            "cid": 411500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411601
              },
              {
                "dname": "川汇区",
                "did": 411602
              },
              {
                "dname": "扶沟县",
                "did": 411621
              },
              {
                "dname": "西华县",
                "did": 411622
              },
              {
                "dname": "商水县",
                "did": 411623
              },
              {
                "dname": "沈丘县",
                "did": 411624
              },
              {
                "dname": "郸城县",
                "did": 411625
              },
              {
                "dname": "淮阳县",
                "did": 411626
              },
              {
                "dname": "太康县",
                "did": 411627
              },
              {
                "dname": "鹿邑县",
                "did": 411628
              },
              {
                "dname": "项城市",
                "did": 411681
              }
            ],
            "cname": "周口市",
            "cid": 411600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 411701
              },
              {
                "dname": "驿城区",
                "did": 411702
              },
              {
                "dname": "西平县",
                "did": 411721
              },
              {
                "dname": "上蔡县",
                "did": 411722
              },
              {
                "dname": "平舆县",
                "did": 411723
              },
              {
                "dname": "正阳县",
                "did": 411724
              },
              {
                "dname": "确山县",
                "did": 411725
              },
              {
                "dname": "泌阳县",
                "did": 411726
              },
              {
                "dname": "汝南县",
                "did": 411727
              },
              {
                "dname": "遂平县",
                "did": 411728
              },
              {
                "dname": "新蔡县",
                "did": 411729
              }
            ],
            "cname": "驻马店市",
            "cid": 411700
          },
          {
            "districts": [
              {
                "dname": "济源市",
                "did": 419001
              }
            ],
            "cname": "省直辖县级行政区划",
            "cid": 419000
          }
        ]
      },
      {
        "pid": 420000,
        "pname": "湖北省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420101
              },
              {
                "dname": "江岸区",
                "did": 420102
              },
              {
                "dname": "江汉区",
                "did": 420103
              },
              {
                "dname": "硚口区",
                "did": 420104
              },
              {
                "dname": "汉阳区",
                "did": 420105
              },
              {
                "dname": "武昌区",
                "did": 420106
              },
              {
                "dname": "青山区",
                "did": 420107
              },
              {
                "dname": "洪山区",
                "did": 420111
              },
              {
                "dname": "东西湖区",
                "did": 420112
              },
              {
                "dname": "汉南区",
                "did": 420113
              },
              {
                "dname": "蔡甸区",
                "did": 420114
              },
              {
                "dname": "江夏区",
                "did": 420115
              },
              {
                "dname": "黄陂区",
                "did": 420116
              },
              {
                "dname": "新洲区",
                "did": 420117
              }
            ],
            "cname": "武汉市",
            "cid": 420100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420201
              },
              {
                "dname": "黄石港区",
                "did": 420202
              },
              {
                "dname": "西塞山区",
                "did": 420203
              },
              {
                "dname": "下陆区",
                "did": 420204
              },
              {
                "dname": "铁山区",
                "did": 420205
              },
              {
                "dname": "阳新县",
                "did": 420222
              },
              {
                "dname": "大冶市",
                "did": 420281
              }
            ],
            "cname": "黄石市",
            "cid": 420200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420301
              },
              {
                "dname": "茅箭区",
                "did": 420302
              },
              {
                "dname": "张湾区",
                "did": 420303
              },
              {
                "dname": "郧县",
                "did": 420321
              },
              {
                "dname": "郧西县",
                "did": 420322
              },
              {
                "dname": "竹山县",
                "did": 420323
              },
              {
                "dname": "竹溪县",
                "did": 420324
              },
              {
                "dname": "房县",
                "did": 420325
              },
              {
                "dname": "丹江口市",
                "did": 420381
              }
            ],
            "cname": "十堰市",
            "cid": 420300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420501
              },
              {
                "dname": "西陵区",
                "did": 420502
              },
              {
                "dname": "伍家岗区",
                "did": 420503
              },
              {
                "dname": "点军区",
                "did": 420504
              },
              {
                "dname": "猇亭区",
                "did": 420505
              },
              {
                "dname": "夷陵区",
                "did": 420506
              },
              {
                "dname": "远安县",
                "did": 420525
              },
              {
                "dname": "兴山县",
                "did": 420526
              },
              {
                "dname": "秭归县",
                "did": 420527
              },
              {
                "dname": "长阳土家族自治县",
                "did": 420528
              },
              {
                "dname": "五峰土家族自治县",
                "did": 420529
              },
              {
                "dname": "宜都市",
                "did": 420581
              },
              {
                "dname": "当阳市",
                "did": 420582
              },
              {
                "dname": "枝江市",
                "did": 420583
              }
            ],
            "cname": "宜昌市",
            "cid": 420500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420601
              },
              {
                "dname": "襄城区",
                "did": 420602
              },
              {
                "dname": "樊城区",
                "did": 420606
              },
              {
                "dname": "襄州区",
                "did": 420607
              },
              {
                "dname": "南漳县",
                "did": 420624
              },
              {
                "dname": "谷城县",
                "did": 420625
              },
              {
                "dname": "保康县",
                "did": 420626
              },
              {
                "dname": "老河口市",
                "did": 420682
              },
              {
                "dname": "枣阳市",
                "did": 420683
              },
              {
                "dname": "宜城市",
                "did": 420684
              }
            ],
            "cname": "襄阳市",
            "cid": 420600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420701
              },
              {
                "dname": "梁子湖区",
                "did": 420702
              },
              {
                "dname": "华容区",
                "did": 420703
              },
              {
                "dname": "鄂城区",
                "did": 420704
              }
            ],
            "cname": "鄂州市",
            "cid": 420700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420801
              },
              {
                "dname": "东宝区",
                "did": 420802
              },
              {
                "dname": "掇刀区",
                "did": 420804
              },
              {
                "dname": "京山县",
                "did": 420821
              },
              {
                "dname": "沙洋县",
                "did": 420822
              },
              {
                "dname": "钟祥市",
                "did": 420881
              }
            ],
            "cname": "荆门市",
            "cid": 420800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 420901
              },
              {
                "dname": "孝南区",
                "did": 420902
              },
              {
                "dname": "孝昌县",
                "did": 420921
              },
              {
                "dname": "大悟县",
                "did": 420922
              },
              {
                "dname": "云梦县",
                "did": 420923
              },
              {
                "dname": "应城市",
                "did": 420981
              },
              {
                "dname": "安陆市",
                "did": 420982
              },
              {
                "dname": "汉川市",
                "did": 420984
              }
            ],
            "cname": "孝感市",
            "cid": 420900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 421001
              },
              {
                "dname": "沙市区",
                "did": 421002
              },
              {
                "dname": "荆州区",
                "did": 421003
              },
              {
                "dname": "公安县",
                "did": 421022
              },
              {
                "dname": "监利县",
                "did": 421023
              },
              {
                "dname": "江陵县",
                "did": 421024
              },
              {
                "dname": "石首市",
                "did": 421081
              },
              {
                "dname": "洪湖市",
                "did": 421083
              },
              {
                "dname": "松滋市",
                "did": 421087
              }
            ],
            "cname": "荆州市",
            "cid": 421000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 421101
              },
              {
                "dname": "黄州区",
                "did": 421102
              },
              {
                "dname": "团风县",
                "did": 421121
              },
              {
                "dname": "红安县",
                "did": 421122
              },
              {
                "dname": "罗田县",
                "did": 421123
              },
              {
                "dname": "英山县",
                "did": 421124
              },
              {
                "dname": "浠水县",
                "did": 421125
              },
              {
                "dname": "蕲春县",
                "did": 421126
              },
              {
                "dname": "黄梅县",
                "did": 421127
              },
              {
                "dname": "麻城市",
                "did": 421181
              },
              {
                "dname": "武穴市",
                "did": 421182
              }
            ],
            "cname": "黄冈市",
            "cid": 421100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 421201
              },
              {
                "dname": "咸安区",
                "did": 421202
              },
              {
                "dname": "嘉鱼县",
                "did": 421221
              },
              {
                "dname": "通城县",
                "did": 421222
              },
              {
                "dname": "崇阳县",
                "did": 421223
              },
              {
                "dname": "通山县",
                "did": 421224
              },
              {
                "dname": "赤壁市",
                "did": 421281
              }
            ],
            "cname": "咸宁市",
            "cid": 421200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 421301
              },
              {
                "dname": "曾都区",
                "did": 421303
              },
              {
                "dname": "随县",
                "did": 421321
              },
              {
                "dname": "广水市",
                "did": 421381
              }
            ],
            "cname": "随州市",
            "cid": 421300
          },
          {
            "districts": [
              {
                "dname": "恩施市",
                "did": 422801
              },
              {
                "dname": "利川市",
                "did": 422802
              },
              {
                "dname": "建始县",
                "did": 422822
              },
              {
                "dname": "巴东县",
                "did": 422823
              },
              {
                "dname": "宣恩县",
                "did": 422825
              },
              {
                "dname": "咸丰县",
                "did": 422826
              },
              {
                "dname": "来凤县",
                "did": 422827
              },
              {
                "dname": "鹤峰县",
                "did": 422828
              }
            ],
            "cname": "恩施土家族苗族自治州",
            "cid": 422800
          },
          {
            "districts": [
              {
                "dname": "仙桃市",
                "did": 429004
              },
              {
                "dname": "潜江市",
                "did": 429005
              },
              {
                "dname": "天门市",
                "did": 429006
              },
              {
                "dname": "神农架林区",
                "did": 429021
              }
            ],
            "cname": "省直辖县级行政区划",
            "cid": 429000
          }
        ]
      },
      {
        "pid": 430000,
        "pname": "湖南省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430101
              },
              {
                "dname": "芙蓉区",
                "did": 430102
              },
              {
                "dname": "天心区",
                "did": 430103
              },
              {
                "dname": "岳麓区",
                "did": 430104
              },
              {
                "dname": "开福区",
                "did": 430105
              },
              {
                "dname": "雨花区",
                "did": 430111
              },
              {
                "dname": "望城区",
                "did": 430112
              },
              {
                "dname": "长沙县",
                "did": 430121
              },
              {
                "dname": "宁乡县",
                "did": 430124
              },
              {
                "dname": "浏阳市",
                "did": 430181
              }
            ],
            "cname": "长沙市",
            "cid": 430100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430201
              },
              {
                "dname": "荷塘区",
                "did": 430202
              },
              {
                "dname": "芦淞区",
                "did": 430203
              },
              {
                "dname": "石峰区",
                "did": 430204
              },
              {
                "dname": "天元区",
                "did": 430211
              },
              {
                "dname": "株洲县",
                "did": 430221
              },
              {
                "dname": "攸县",
                "did": 430223
              },
              {
                "dname": "茶陵县",
                "did": 430224
              },
              {
                "dname": "炎陵县",
                "did": 430225
              },
              {
                "dname": "醴陵市",
                "did": 430281
              }
            ],
            "cname": "株洲市",
            "cid": 430200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430301
              },
              {
                "dname": "雨湖区",
                "did": 430302
              },
              {
                "dname": "岳塘区",
                "did": 430304
              },
              {
                "dname": "湘潭县",
                "did": 430321
              },
              {
                "dname": "湘乡市",
                "did": 430381
              },
              {
                "dname": "韶山市",
                "did": 430382
              }
            ],
            "cname": "湘潭市",
            "cid": 430300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430401
              },
              {
                "dname": "珠晖区",
                "did": 430405
              },
              {
                "dname": "雁峰区",
                "did": 430406
              },
              {
                "dname": "石鼓区",
                "did": 430407
              },
              {
                "dname": "蒸湘区",
                "did": 430408
              },
              {
                "dname": "南岳区",
                "did": 430412
              },
              {
                "dname": "衡阳县",
                "did": 430421
              },
              {
                "dname": "衡南县",
                "did": 430422
              },
              {
                "dname": "衡山县",
                "did": 430423
              },
              {
                "dname": "衡东县",
                "did": 430424
              },
              {
                "dname": "祁东县",
                "did": 430426
              },
              {
                "dname": "耒阳市",
                "did": 430481
              },
              {
                "dname": "常宁市",
                "did": 430482
              }
            ],
            "cname": "衡阳市",
            "cid": 430400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430501
              },
              {
                "dname": "双清区",
                "did": 430502
              },
              {
                "dname": "大祥区",
                "did": 430503
              },
              {
                "dname": "北塔区",
                "did": 430511
              },
              {
                "dname": "邵东县",
                "did": 430521
              },
              {
                "dname": "新邵县",
                "did": 430522
              },
              {
                "dname": "邵阳县",
                "did": 430523
              },
              {
                "dname": "隆回县",
                "did": 430524
              },
              {
                "dname": "洞口县",
                "did": 430525
              },
              {
                "dname": "绥宁县",
                "did": 430527
              },
              {
                "dname": "新宁县",
                "did": 430528
              },
              {
                "dname": "城步苗族自治县",
                "did": 430529
              },
              {
                "dname": "武冈市",
                "did": 430581
              }
            ],
            "cname": "邵阳市",
            "cid": 430500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430601
              },
              {
                "dname": "岳阳楼区",
                "did": 430602
              },
              {
                "dname": "云溪区",
                "did": 430603
              },
              {
                "dname": "君山区",
                "did": 430611
              },
              {
                "dname": "岳阳县",
                "did": 430621
              },
              {
                "dname": "华容县",
                "did": 430623
              },
              {
                "dname": "湘阴县",
                "did": 430624
              },
              {
                "dname": "平江县",
                "did": 430626
              },
              {
                "dname": "汨罗市",
                "did": 430681
              },
              {
                "dname": "临湘市",
                "did": 430682
              }
            ],
            "cname": "岳阳市",
            "cid": 430600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430701
              },
              {
                "dname": "武陵区",
                "did": 430702
              },
              {
                "dname": "鼎城区",
                "did": 430703
              },
              {
                "dname": "安乡县",
                "did": 430721
              },
              {
                "dname": "汉寿县",
                "did": 430722
              },
              {
                "dname": "澧县",
                "did": 430723
              },
              {
                "dname": "临澧县",
                "did": 430724
              },
              {
                "dname": "桃源县",
                "did": 430725
              },
              {
                "dname": "石门县",
                "did": 430726
              },
              {
                "dname": "津市市",
                "did": 430781
              }
            ],
            "cname": "常德市",
            "cid": 430700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430801
              },
              {
                "dname": "永定区",
                "did": 430802
              },
              {
                "dname": "武陵源区",
                "did": 430811
              },
              {
                "dname": "慈利县",
                "did": 430821
              },
              {
                "dname": "桑植县",
                "did": 430822
              }
            ],
            "cname": "张家界市",
            "cid": 430800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 430901
              },
              {
                "dname": "资阳区",
                "did": 430902
              },
              {
                "dname": "赫山区",
                "did": 430903
              },
              {
                "dname": "南县",
                "did": 430921
              },
              {
                "dname": "桃江县",
                "did": 430922
              },
              {
                "dname": "安化县",
                "did": 430923
              },
              {
                "dname": "沅江市",
                "did": 430981
              }
            ],
            "cname": "益阳市",
            "cid": 430900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 431001
              },
              {
                "dname": "北湖区",
                "did": 431002
              },
              {
                "dname": "苏仙区",
                "did": 431003
              },
              {
                "dname": "桂阳县",
                "did": 431021
              },
              {
                "dname": "宜章县",
                "did": 431022
              },
              {
                "dname": "永兴县",
                "did": 431023
              },
              {
                "dname": "嘉禾县",
                "did": 431024
              },
              {
                "dname": "临武县",
                "did": 431025
              },
              {
                "dname": "汝城县",
                "did": 431026
              },
              {
                "dname": "桂东县",
                "did": 431027
              },
              {
                "dname": "安仁县",
                "did": 431028
              },
              {
                "dname": "资兴市",
                "did": 431081
              }
            ],
            "cname": "郴州市",
            "cid": 431000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 431101
              },
              {
                "dname": "零陵区",
                "did": 431102
              },
              {
                "dname": "冷水滩区",
                "did": 431103
              },
              {
                "dname": "祁阳县",
                "did": 431121
              },
              {
                "dname": "东安县",
                "did": 431122
              },
              {
                "dname": "双牌县",
                "did": 431123
              },
              {
                "dname": "道县",
                "did": 431124
              },
              {
                "dname": "江永县",
                "did": 431125
              },
              {
                "dname": "宁远县",
                "did": 431126
              },
              {
                "dname": "蓝山县",
                "did": 431127
              },
              {
                "dname": "新田县",
                "did": 431128
              },
              {
                "dname": "江华瑶族自治县",
                "did": 431129
              }
            ],
            "cname": "永州市",
            "cid": 431100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 431201
              },
              {
                "dname": "鹤城区",
                "did": 431202
              },
              {
                "dname": "中方县",
                "did": 431221
              },
              {
                "dname": "沅陵县",
                "did": 431222
              },
              {
                "dname": "辰溪县",
                "did": 431223
              },
              {
                "dname": "溆浦县",
                "did": 431224
              },
              {
                "dname": "会同县",
                "did": 431225
              },
              {
                "dname": "麻阳苗族自治县",
                "did": 431226
              },
              {
                "dname": "新晃侗族自治县",
                "did": 431227
              },
              {
                "dname": "芷江侗族自治县",
                "did": 431228
              },
              {
                "dname": "靖州苗族侗族自治县",
                "did": 431229
              },
              {
                "dname": "通道侗族自治县",
                "did": 431230
              },
              {
                "dname": "洪江市",
                "did": 431281
              }
            ],
            "cname": "怀化市",
            "cid": 431200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 431301
              },
              {
                "dname": "娄星区",
                "did": 431302
              },
              {
                "dname": "双峰县",
                "did": 431321
              },
              {
                "dname": "新化县",
                "did": 431322
              },
              {
                "dname": "冷水江市",
                "did": 431381
              },
              {
                "dname": "涟源市",
                "did": 431382
              }
            ],
            "cname": "娄底市",
            "cid": 431300
          },
          {
            "districts": [
              {
                "dname": "吉首市",
                "did": 433101
              },
              {
                "dname": "泸溪县",
                "did": 433122
              },
              {
                "dname": "凤凰县",
                "did": 433123
              },
              {
                "dname": "花垣县",
                "did": 433124
              },
              {
                "dname": "保靖县",
                "did": 433125
              },
              {
                "dname": "古丈县",
                "did": 433126
              },
              {
                "dname": "永顺县",
                "did": 433127
              },
              {
                "dname": "龙山县",
                "did": 433130
              }
            ],
            "cname": "湘西土家族苗族自治州",
            "cid": 433100
          }
        ]
      },
      {
        "pid": 440000,
        "pname": "广东省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440101
              },
              {
                "dname": "荔湾区",
                "did": 440103
              },
              {
                "dname": "越秀区",
                "did": 440104
              },
              {
                "dname": "海珠区",
                "did": 440105
              },
              {
                "dname": "天河区",
                "did": 440106
              },
              {
                "dname": "白云区",
                "did": 440111
              },
              {
                "dname": "黄埔区",
                "did": 440112
              },
              {
                "dname": "番禺区",
                "did": 440113
              },
              {
                "dname": "花都区",
                "did": 440114
              },
              {
                "dname": "南沙区",
                "did": 440115
              },
              {
                "dname": "萝岗区",
                "did": 440116
              },
              {
                "dname": "增城市",
                "did": 440183
              },
              {
                "dname": "从化市",
                "did": 440184
              }
            ],
            "cname": "广州市",
            "cid": 440100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440201
              },
              {
                "dname": "武江区",
                "did": 440203
              },
              {
                "dname": "浈江区",
                "did": 440204
              },
              {
                "dname": "曲江区",
                "did": 440205
              },
              {
                "dname": "始兴县",
                "did": 440222
              },
              {
                "dname": "仁化县",
                "did": 440224
              },
              {
                "dname": "翁源县",
                "did": 440229
              },
              {
                "dname": "乳源瑶族自治县",
                "did": 440232
              },
              {
                "dname": "新丰县",
                "did": 440233
              },
              {
                "dname": "乐昌市",
                "did": 440281
              },
              {
                "dname": "南雄市",
                "did": 440282
              }
            ],
            "cname": "韶关市",
            "cid": 440200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440301
              },
              {
                "dname": "罗湖区",
                "did": 440303
              },
              {
                "dname": "福田区",
                "did": 440304
              },
              {
                "dname": "南山区",
                "did": 440305
              },
              {
                "dname": "宝安区",
                "did": 440306
              },
              {
                "dname": "龙岗区",
                "did": 440307
              },
              {
                "dname": "盐田区",
                "did": 440308
              }
            ],
            "cname": "深圳市",
            "cid": 440300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440401
              },
              {
                "dname": "香洲区",
                "did": 440402
              },
              {
                "dname": "斗门区",
                "did": 440403
              },
              {
                "dname": "金湾区",
                "did": 440404
              }
            ],
            "cname": "珠海市",
            "cid": 440400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440501
              },
              {
                "dname": "龙湖区",
                "did": 440507
              },
              {
                "dname": "金平区",
                "did": 440511
              },
              {
                "dname": "濠江区",
                "did": 440512
              },
              {
                "dname": "潮阳区",
                "did": 440513
              },
              {
                "dname": "潮南区",
                "did": 440514
              },
              {
                "dname": "澄海区",
                "did": 440515
              },
              {
                "dname": "南澳县",
                "did": 440523
              }
            ],
            "cname": "汕头市",
            "cid": 440500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440601
              },
              {
                "dname": "禅城区",
                "did": 440604
              },
              {
                "dname": "南海区",
                "did": 440605
              },
              {
                "dname": "顺德区",
                "did": 440606
              },
              {
                "dname": "三水区",
                "did": 440607
              },
              {
                "dname": "高明区",
                "did": 440608
              }
            ],
            "cname": "佛山市",
            "cid": 440600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440701
              },
              {
                "dname": "蓬江区",
                "did": 440703
              },
              {
                "dname": "江海区",
                "did": 440704
              },
              {
                "dname": "新会区",
                "did": 440705
              },
              {
                "dname": "台山市",
                "did": 440781
              },
              {
                "dname": "开平市",
                "did": 440783
              },
              {
                "dname": "鹤山市",
                "did": 440784
              },
              {
                "dname": "恩平市",
                "did": 440785
              }
            ],
            "cname": "江门市",
            "cid": 440700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440801
              },
              {
                "dname": "赤坎区",
                "did": 440802
              },
              {
                "dname": "霞山区",
                "did": 440803
              },
              {
                "dname": "坡头区",
                "did": 440804
              },
              {
                "dname": "麻章区",
                "did": 440811
              },
              {
                "dname": "遂溪县",
                "did": 440823
              },
              {
                "dname": "徐闻县",
                "did": 440825
              },
              {
                "dname": "廉江市",
                "did": 440881
              },
              {
                "dname": "雷州市",
                "did": 440882
              },
              {
                "dname": "吴川市",
                "did": 440883
              }
            ],
            "cname": "湛江市",
            "cid": 440800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 440901
              },
              {
                "dname": "茂南区",
                "did": 440902
              },
              {
                "dname": "茂港区",
                "did": 440903
              },
              {
                "dname": "电白县",
                "did": 440923
              },
              {
                "dname": "高州市",
                "did": 440981
              },
              {
                "dname": "化州市",
                "did": 440982
              },
              {
                "dname": "信宜市",
                "did": 440983
              }
            ],
            "cname": "茂名市",
            "cid": 440900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441201
              },
              {
                "dname": "端州区",
                "did": 441202
              },
              {
                "dname": "鼎湖区",
                "did": 441203
              },
              {
                "dname": "广宁县",
                "did": 441223
              },
              {
                "dname": "怀集县",
                "did": 441224
              },
              {
                "dname": "封开县",
                "did": 441225
              },
              {
                "dname": "德庆县",
                "did": 441226
              },
              {
                "dname": "高要市",
                "did": 441283
              },
              {
                "dname": "四会市",
                "did": 441284
              }
            ],
            "cname": "肇庆市",
            "cid": 441200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441301
              },
              {
                "dname": "惠城区",
                "did": 441302
              },
              {
                "dname": "惠阳区",
                "did": 441303
              },
              {
                "dname": "博罗县",
                "did": 441322
              },
              {
                "dname": "惠东县",
                "did": 441323
              },
              {
                "dname": "龙门县",
                "did": 441324
              }
            ],
            "cname": "惠州市",
            "cid": 441300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441401
              },
              {
                "dname": "梅江区",
                "did": 441402
              },
              {
                "dname": "梅县",
                "did": 441421
              },
              {
                "dname": "大埔县",
                "did": 441422
              },
              {
                "dname": "丰顺县",
                "did": 441423
              },
              {
                "dname": "五华县",
                "did": 441424
              },
              {
                "dname": "平远县",
                "did": 441426
              },
              {
                "dname": "蕉岭县",
                "did": 441427
              },
              {
                "dname": "兴宁市",
                "did": 441481
              }
            ],
            "cname": "梅州市",
            "cid": 441400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441501
              },
              {
                "dname": "城区",
                "did": 441502
              },
              {
                "dname": "海丰县",
                "did": 441521
              },
              {
                "dname": "陆河县",
                "did": 441523
              },
              {
                "dname": "陆丰市",
                "did": 441581
              }
            ],
            "cname": "汕尾市",
            "cid": 441500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441601
              },
              {
                "dname": "源城区",
                "did": 441602
              },
              {
                "dname": "紫金县",
                "did": 441621
              },
              {
                "dname": "龙川县",
                "did": 441622
              },
              {
                "dname": "连平县",
                "did": 441623
              },
              {
                "dname": "和平县",
                "did": 441624
              },
              {
                "dname": "东源县",
                "did": 441625
              }
            ],
            "cname": "河源市",
            "cid": 441600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441701
              },
              {
                "dname": "江城区",
                "did": 441702
              },
              {
                "dname": "阳西县",
                "did": 441721
              },
              {
                "dname": "阳东县",
                "did": 441723
              },
              {
                "dname": "阳春市",
                "did": 441781
              }
            ],
            "cname": "阳江市",
            "cid": 441700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 441801
              },
              {
                "dname": "清城区",
                "did": 441802
              },
              {
                "dname": "清新区",
                "did": 441803
              },
              {
                "dname": "佛冈县",
                "did": 441821
              },
              {
                "dname": "阳山县",
                "did": 441823
              },
              {
                "dname": "连山壮族瑶族自治县",
                "did": 441825
              },
              {
                "dname": "连南瑶族自治县",
                "did": 441826
              },
              {
                "dname": "英德市",
                "did": 441881
              },
              {
                "dname": "连州市",
                "did": 441882
              }
            ],
            "cname": "清远市",
            "cid": 441800
          },
          {
            "districts": [
              {
                "dname": "东莞市",
                "did": 441900
              }
            ],
            "cname": "东莞市",
            "cid": 441900
          },
          {
            "districts": [
              {
                "dname": "中山市",
                "did": 442000
              }
            ],
            "cname": "中山市",
            "cid": 442000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 445101
              },
              {
                "dname": "湘桥区",
                "did": 445102
              },
              {
                "dname": "潮安区",
                "did": 445103
              },
              {
                "dname": "饶平县",
                "did": 445122
              }
            ],
            "cname": "潮州市",
            "cid": 445100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 445201
              },
              {
                "dname": "榕城区",
                "did": 445202
              },
              {
                "dname": "揭东区",
                "did": 445203
              },
              {
                "dname": "揭西县",
                "did": 445222
              },
              {
                "dname": "惠来县",
                "did": 445224
              },
              {
                "dname": "普宁市",
                "did": 445281
              }
            ],
            "cname": "揭阳市",
            "cid": 445200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 445301
              },
              {
                "dname": "云城区",
                "did": 445302
              },
              {
                "dname": "新兴县",
                "did": 445321
              },
              {
                "dname": "郁南县",
                "did": 445322
              },
              {
                "dname": "云安县",
                "did": 445323
              },
              {
                "dname": "罗定市",
                "did": 445381
              }
            ],
            "cname": "云浮市",
            "cid": 445300
          }
        ]
      },
      {
        "pid": 450000,
        "pname": "广西壮族自治区",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450101
              },
              {
                "dname": "兴宁区",
                "did": 450102
              },
              {
                "dname": "青秀区",
                "did": 450103
              },
              {
                "dname": "江南区",
                "did": 450105
              },
              {
                "dname": "西乡塘区",
                "did": 450107
              },
              {
                "dname": "良庆区",
                "did": 450108
              },
              {
                "dname": "邕宁区",
                "did": 450109
              },
              {
                "dname": "武鸣县",
                "did": 450122
              },
              {
                "dname": "隆安县",
                "did": 450123
              },
              {
                "dname": "马山县",
                "did": 450124
              },
              {
                "dname": "上林县",
                "did": 450125
              },
              {
                "dname": "宾阳县",
                "did": 450126
              },
              {
                "dname": "横县",
                "did": 450127
              }
            ],
            "cname": "南宁市",
            "cid": 450100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450201
              },
              {
                "dname": "城中区",
                "did": 450202
              },
              {
                "dname": "鱼峰区",
                "did": 450203
              },
              {
                "dname": "柳南区",
                "did": 450204
              },
              {
                "dname": "柳北区",
                "did": 450205
              },
              {
                "dname": "柳江县",
                "did": 450221
              },
              {
                "dname": "柳城县",
                "did": 450222
              },
              {
                "dname": "鹿寨县",
                "did": 450223
              },
              {
                "dname": "融安县",
                "did": 450224
              },
              {
                "dname": "融水苗族自治县",
                "did": 450225
              },
              {
                "dname": "三江侗族自治县",
                "did": 450226
              }
            ],
            "cname": "柳州市",
            "cid": 450200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450301
              },
              {
                "dname": "秀峰区",
                "did": 450302
              },
              {
                "dname": "叠彩区",
                "did": 450303
              },
              {
                "dname": "象山区",
                "did": 450304
              },
              {
                "dname": "七星区",
                "did": 450305
              },
              {
                "dname": "雁山区",
                "did": 450311
              },
              {
                "dname": "临桂区",
                "did": 450312
              },
              {
                "dname": "阳朔县",
                "did": 450321
              },
              {
                "dname": "灵川县",
                "did": 450323
              },
              {
                "dname": "全州县",
                "did": 450324
              },
              {
                "dname": "兴安县",
                "did": 450325
              },
              {
                "dname": "永福县",
                "did": 450326
              },
              {
                "dname": "灌阳县",
                "did": 450327
              },
              {
                "dname": "龙胜各族自治县",
                "did": 450328
              },
              {
                "dname": "资源县",
                "did": 450329
              },
              {
                "dname": "平乐县",
                "did": 450330
              },
              {
                "dname": "荔浦县",
                "did": 450331
              },
              {
                "dname": "恭城瑶族自治县",
                "did": 450332
              }
            ],
            "cname": "桂林市",
            "cid": 450300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450401
              },
              {
                "dname": "万秀区",
                "did": 450403
              },
              {
                "dname": "长洲区",
                "did": 450405
              },
              {
                "dname": "龙圩区",
                "did": 450406
              },
              {
                "dname": "苍梧县",
                "did": 450421
              },
              {
                "dname": "藤县",
                "did": 450422
              },
              {
                "dname": "蒙山县",
                "did": 450423
              },
              {
                "dname": "岑溪市",
                "did": 450481
              }
            ],
            "cname": "梧州市",
            "cid": 450400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450501
              },
              {
                "dname": "海城区",
                "did": 450502
              },
              {
                "dname": "银海区",
                "did": 450503
              },
              {
                "dname": "铁山港区",
                "did": 450512
              },
              {
                "dname": "合浦县",
                "did": 450521
              }
            ],
            "cname": "北海市",
            "cid": 450500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450601
              },
              {
                "dname": "港口区",
                "did": 450602
              },
              {
                "dname": "防城区",
                "did": 450603
              },
              {
                "dname": "上思县",
                "did": 450621
              },
              {
                "dname": "东兴市",
                "did": 450681
              }
            ],
            "cname": "防城港市",
            "cid": 450600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450701
              },
              {
                "dname": "钦南区",
                "did": 450702
              },
              {
                "dname": "钦北区",
                "did": 450703
              },
              {
                "dname": "灵山县",
                "did": 450721
              },
              {
                "dname": "浦北县",
                "did": 450722
              }
            ],
            "cname": "钦州市",
            "cid": 450700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450801
              },
              {
                "dname": "港北区",
                "did": 450802
              },
              {
                "dname": "港南区",
                "did": 450803
              },
              {
                "dname": "覃塘区",
                "did": 450804
              },
              {
                "dname": "平南县",
                "did": 450821
              },
              {
                "dname": "桂平市",
                "did": 450881
              }
            ],
            "cname": "贵港市",
            "cid": 450800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 450901
              },
              {
                "dname": "玉州区",
                "did": 450902
              },
              {
                "dname": "福绵区",
                "did": 450903
              },
              {
                "dname": "容县",
                "did": 450921
              },
              {
                "dname": "陆川县",
                "did": 450922
              },
              {
                "dname": "博白县",
                "did": 450923
              },
              {
                "dname": "兴业县",
                "did": 450924
              },
              {
                "dname": "北流市",
                "did": 450981
              }
            ],
            "cname": "玉林市",
            "cid": 450900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 451001
              },
              {
                "dname": "右江区",
                "did": 451002
              },
              {
                "dname": "田阳县",
                "did": 451021
              },
              {
                "dname": "田东县",
                "did": 451022
              },
              {
                "dname": "平果县",
                "did": 451023
              },
              {
                "dname": "德保县",
                "did": 451024
              },
              {
                "dname": "靖西县",
                "did": 451025
              },
              {
                "dname": "那坡县",
                "did": 451026
              },
              {
                "dname": "凌云县",
                "did": 451027
              },
              {
                "dname": "乐业县",
                "did": 451028
              },
              {
                "dname": "田林县",
                "did": 451029
              },
              {
                "dname": "西林县",
                "did": 451030
              },
              {
                "dname": "隆林各族自治县",
                "did": 451031
              }
            ],
            "cname": "百色市",
            "cid": 451000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 451101
              },
              {
                "dname": "八步区",
                "did": 451102
              },
              {
                "dname": "昭平县",
                "did": 451121
              },
              {
                "dname": "钟山县",
                "did": 451122
              },
              {
                "dname": "富川瑶族自治县",
                "did": 451123
              }
            ],
            "cname": "贺州市",
            "cid": 451100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 451201
              },
              {
                "dname": "金城江区",
                "did": 451202
              },
              {
                "dname": "南丹县",
                "did": 451221
              },
              {
                "dname": "天峨县",
                "did": 451222
              },
              {
                "dname": "凤山县",
                "did": 451223
              },
              {
                "dname": "东兰县",
                "did": 451224
              },
              {
                "dname": "罗城仫佬族自治县",
                "did": 451225
              },
              {
                "dname": "环江毛南族自治县",
                "did": 451226
              },
              {
                "dname": "巴马瑶族自治县",
                "did": 451227
              },
              {
                "dname": "都安瑶族自治县",
                "did": 451228
              },
              {
                "dname": "大化瑶族自治县",
                "did": 451229
              },
              {
                "dname": "宜州市",
                "did": 451281
              }
            ],
            "cname": "河池市",
            "cid": 451200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 451301
              },
              {
                "dname": "兴宾区",
                "did": 451302
              },
              {
                "dname": "忻城县",
                "did": 451321
              },
              {
                "dname": "象州县",
                "did": 451322
              },
              {
                "dname": "武宣县",
                "did": 451323
              },
              {
                "dname": "金秀瑶族自治县",
                "did": 451324
              },
              {
                "dname": "合山市",
                "did": 451381
              }
            ],
            "cname": "来宾市",
            "cid": 451300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 451401
              },
              {
                "dname": "江州区",
                "did": 451402
              },
              {
                "dname": "扶绥县",
                "did": 451421
              },
              {
                "dname": "宁明县",
                "did": 451422
              },
              {
                "dname": "龙州县",
                "did": 451423
              },
              {
                "dname": "大新县",
                "did": 451424
              },
              {
                "dname": "天等县",
                "did": 451425
              },
              {
                "dname": "凭祥市",
                "did": 451481
              }
            ],
            "cname": "崇左市",
            "cid": 451400
          }
        ]
      },
      {
        "pid": 460000,
        "pname": "海南省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 460101
              },
              {
                "dname": "秀英区",
                "did": 460105
              },
              {
                "dname": "龙华区",
                "did": 460106
              },
              {
                "dname": "琼山区",
                "did": 460107
              },
              {
                "dname": "美兰区",
                "did": 460108
              }
            ],
            "cname": "海口市",
            "cid": 460100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 460201
              }
            ],
            "cname": "三亚市",
            "cid": 460200
          },
          {
            "districts": [
              {
                "dname": "西沙群岛",
                "did": 460321
              },
              {
                "dname": "南沙群岛",
                "did": 460322
              },
              {
                "dname": "中沙群岛的岛礁及其海域",
                "did": 460323
              }
            ],
            "cname": "三沙市",
            "cid": 460300
          },
          {
            "districts": [
              {
                "dname": "五指山市",
                "did": 469001
              },
              {
                "dname": "琼海市",
                "did": 469002
              },
              {
                "dname": "儋州市",
                "did": 469003
              },
              {
                "dname": "文昌市",
                "did": 469005
              },
              {
                "dname": "万宁市",
                "did": 469006
              },
              {
                "dname": "东方市",
                "did": 469007
              },
              {
                "dname": "定安县",
                "did": 469021
              },
              {
                "dname": "屯昌县",
                "did": 469022
              },
              {
                "dname": "澄迈县",
                "did": 469023
              },
              {
                "dname": "临高县",
                "did": 469024
              },
              {
                "dname": "白沙黎族自治县",
                "did": 469025
              },
              {
                "dname": "昌江黎族自治县",
                "did": 469026
              },
              {
                "dname": "乐东黎族自治县",
                "did": 469027
              },
              {
                "dname": "陵水黎族自治县",
                "did": 469028
              },
              {
                "dname": "保亭黎族苗族自治县",
                "did": 469029
              },
              {
                "dname": "琼中黎族苗族自治县",
                "did": 469030
              }
            ],
            "cname": "省直辖县级行政区划",
            "cid": 469000
          }
        ]
      },
      {
        "pid": 500000,
        "pname": "重庆市",
        "citys": [
          {
            "districts": [
              {
                "dname": "万州区",
                "did": 500101
              },
              {
                "dname": "涪陵区",
                "did": 500102
              },
              {
                "dname": "渝中区",
                "did": 500103
              },
              {
                "dname": "大渡口区",
                "did": 500104
              },
              {
                "dname": "江北区",
                "did": 500105
              },
              {
                "dname": "沙坪坝区",
                "did": 500106
              },
              {
                "dname": "九龙坡区",
                "did": 500107
              },
              {
                "dname": "南岸区",
                "did": 500108
              },
              {
                "dname": "北碚区",
                "did": 500109
              },
              {
                "dname": "綦江区",
                "did": 500110
              },
              {
                "dname": "大足区",
                "did": 500111
              },
              {
                "dname": "渝北区",
                "did": 500112
              },
              {
                "dname": "巴南区",
                "did": 500113
              },
              {
                "dname": "黔江区",
                "did": 500114
              },
              {
                "dname": "长寿区",
                "did": 500115
              },
              {
                "dname": "江津区",
                "did": 500116
              },
              {
                "dname": "合川区",
                "did": 500117
              },
              {
                "dname": "永川区",
                "did": 500118
              },
              {
                "dname": "南川区",
                "did": 500119
              },
              {
                "dname": "潼南县",
                "did": 500223
              },
              {
                "dname": "铜梁县",
                "did": 500224
              },
              {
                "dname": "荣昌县",
                "did": 500226
              },
              {
                "dname": "璧山县",
                "did": 500227
              },
              {
                "dname": "梁平县",
                "did": 500228
              },
              {
                "dname": "城口县",
                "did": 500229
              },
              {
                "dname": "丰都县",
                "did": 500230
              },
              {
                "dname": "垫江县",
                "did": 500231
              },
              {
                "dname": "武隆县",
                "did": 500232
              },
              {
                "dname": "忠县",
                "did": 500233
              },
              {
                "dname": "开县",
                "did": 500234
              },
              {
                "dname": "云阳县",
                "did": 500235
              },
              {
                "dname": "奉节县",
                "did": 500236
              },
              {
                "dname": "巫山县",
                "did": 500237
              },
              {
                "dname": "巫溪县",
                "did": 500238
              },
              {
                "dname": "石柱土家族自治县",
                "did": 500240
              },
              {
                "dname": "秀山土家族苗族自治县",
                "did": 500241
              },
              {
                "dname": "酉阳土家族苗族自治县",
                "did": 500242
              },
              {
                "dname": "彭水苗族土家族自治县",
                "did": 500243
              }
            ],
            "cname": "重庆市",
            "cid": 500100
          }
        ]
      },
      {
        "pid": 510000,
        "pname": "四川省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510101
              },
              {
                "dname": "锦江区",
                "did": 510104
              },
              {
                "dname": "青羊区",
                "did": 510105
              },
              {
                "dname": "金牛区",
                "did": 510106
              },
              {
                "dname": "武侯区",
                "did": 510107
              },
              {
                "dname": "成华区",
                "did": 510108
              },
              {
                "dname": "龙泉驿区",
                "did": 510112
              },
              {
                "dname": "青白江区",
                "did": 510113
              },
              {
                "dname": "新都区",
                "did": 510114
              },
              {
                "dname": "温江区",
                "did": 510115
              },
              {
                "dname": "金堂县",
                "did": 510121
              },
              {
                "dname": "双流县",
                "did": 510122
              },
              {
                "dname": "郫县",
                "did": 510124
              },
              {
                "dname": "大邑县",
                "did": 510129
              },
              {
                "dname": "蒲江县",
                "did": 510131
              },
              {
                "dname": "新津县",
                "did": 510132
              },
              {
                "dname": "都江堰市",
                "did": 510181
              },
              {
                "dname": "彭州市",
                "did": 510182
              },
              {
                "dname": "邛崃市",
                "did": 510183
              },
              {
                "dname": "崇州市",
                "did": 510184
              }
            ],
            "cname": "成都市",
            "cid": 510100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510301
              },
              {
                "dname": "自流井区",
                "did": 510302
              },
              {
                "dname": "贡井区",
                "did": 510303
              },
              {
                "dname": "大安区",
                "did": 510304
              },
              {
                "dname": "沿滩区",
                "did": 510311
              },
              {
                "dname": "荣县",
                "did": 510321
              },
              {
                "dname": "富顺县",
                "did": 510322
              }
            ],
            "cname": "自贡市",
            "cid": 510300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510401
              },
              {
                "dname": "东区",
                "did": 510402
              },
              {
                "dname": "西区",
                "did": 510403
              },
              {
                "dname": "仁和区",
                "did": 510411
              },
              {
                "dname": "米易县",
                "did": 510421
              },
              {
                "dname": "盐边县",
                "did": 510422
              }
            ],
            "cname": "攀枝花市",
            "cid": 510400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510501
              },
              {
                "dname": "江阳区",
                "did": 510502
              },
              {
                "dname": "纳溪区",
                "did": 510503
              },
              {
                "dname": "龙马潭区",
                "did": 510504
              },
              {
                "dname": "泸县",
                "did": 510521
              },
              {
                "dname": "合江县",
                "did": 510522
              },
              {
                "dname": "叙永县",
                "did": 510524
              },
              {
                "dname": "古蔺县",
                "did": 510525
              }
            ],
            "cname": "泸州市",
            "cid": 510500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510601
              },
              {
                "dname": "旌阳区",
                "did": 510603
              },
              {
                "dname": "中江县",
                "did": 510623
              },
              {
                "dname": "罗江县",
                "did": 510626
              },
              {
                "dname": "广汉市",
                "did": 510681
              },
              {
                "dname": "什邡市",
                "did": 510682
              },
              {
                "dname": "绵竹市",
                "did": 510683
              }
            ],
            "cname": "德阳市",
            "cid": 510600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510701
              },
              {
                "dname": "涪城区",
                "did": 510703
              },
              {
                "dname": "游仙区",
                "did": 510704
              },
              {
                "dname": "三台县",
                "did": 510722
              },
              {
                "dname": "盐亭县",
                "did": 510723
              },
              {
                "dname": "安县",
                "did": 510724
              },
              {
                "dname": "梓潼县",
                "did": 510725
              },
              {
                "dname": "北川羌族自治县",
                "did": 510726
              },
              {
                "dname": "平武县",
                "did": 510727
              },
              {
                "dname": "江油市",
                "did": 510781
              }
            ],
            "cname": "绵阳市",
            "cid": 510700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510801
              },
              {
                "dname": "利州区",
                "did": 510802
              },
              {
                "dname": "元坝区",
                "did": 510811
              },
              {
                "dname": "朝天区",
                "did": 510812
              },
              {
                "dname": "旺苍县",
                "did": 510821
              },
              {
                "dname": "青川县",
                "did": 510822
              },
              {
                "dname": "剑阁县",
                "did": 510823
              },
              {
                "dname": "苍溪县",
                "did": 510824
              }
            ],
            "cname": "广元市",
            "cid": 510800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 510901
              },
              {
                "dname": "船山区",
                "did": 510903
              },
              {
                "dname": "安居区",
                "did": 510904
              },
              {
                "dname": "蓬溪县",
                "did": 510921
              },
              {
                "dname": "射洪县",
                "did": 510922
              },
              {
                "dname": "大英县",
                "did": 510923
              }
            ],
            "cname": "遂宁市",
            "cid": 510900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511001
              },
              {
                "dname": "市中区",
                "did": 511002
              },
              {
                "dname": "东兴区",
                "did": 511011
              },
              {
                "dname": "威远县",
                "did": 511024
              },
              {
                "dname": "资中县",
                "did": 511025
              },
              {
                "dname": "隆昌县",
                "did": 511028
              }
            ],
            "cname": "内江市",
            "cid": 511000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511101
              },
              {
                "dname": "市中区",
                "did": 511102
              },
              {
                "dname": "沙湾区",
                "did": 511111
              },
              {
                "dname": "五通桥区",
                "did": 511112
              },
              {
                "dname": "金口河区",
                "did": 511113
              },
              {
                "dname": "犍为县",
                "did": 511123
              },
              {
                "dname": "井研县",
                "did": 511124
              },
              {
                "dname": "夹江县",
                "did": 511126
              },
              {
                "dname": "沐川县",
                "did": 511129
              },
              {
                "dname": "峨边彝族自治县",
                "did": 511132
              },
              {
                "dname": "马边彝族自治县",
                "did": 511133
              },
              {
                "dname": "峨眉山市",
                "did": 511181
              }
            ],
            "cname": "乐山市",
            "cid": 511100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511301
              },
              {
                "dname": "顺庆区",
                "did": 511302
              },
              {
                "dname": "高坪区",
                "did": 511303
              },
              {
                "dname": "嘉陵区",
                "did": 511304
              },
              {
                "dname": "南部县",
                "did": 511321
              },
              {
                "dname": "营山县",
                "did": 511322
              },
              {
                "dname": "蓬安县",
                "did": 511323
              },
              {
                "dname": "仪陇县",
                "did": 511324
              },
              {
                "dname": "西充县",
                "did": 511325
              },
              {
                "dname": "阆中市",
                "did": 511381
              }
            ],
            "cname": "南充市",
            "cid": 511300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511401
              },
              {
                "dname": "东坡区",
                "did": 511402
              },
              {
                "dname": "仁寿县",
                "did": 511421
              },
              {
                "dname": "彭山县",
                "did": 511422
              },
              {
                "dname": "洪雅县",
                "did": 511423
              },
              {
                "dname": "丹棱县",
                "did": 511424
              },
              {
                "dname": "青神县",
                "did": 511425
              }
            ],
            "cname": "眉山市",
            "cid": 511400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511501
              },
              {
                "dname": "翠屏区",
                "did": 511502
              },
              {
                "dname": "南溪区",
                "did": 511503
              },
              {
                "dname": "宜宾县",
                "did": 511521
              },
              {
                "dname": "江安县",
                "did": 511523
              },
              {
                "dname": "长宁县",
                "did": 511524
              },
              {
                "dname": "高县",
                "did": 511525
              },
              {
                "dname": "珙县",
                "did": 511526
              },
              {
                "dname": "筠连县",
                "did": 511527
              },
              {
                "dname": "兴文县",
                "did": 511528
              },
              {
                "dname": "屏山县",
                "did": 511529
              }
            ],
            "cname": "宜宾市",
            "cid": 511500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511601
              },
              {
                "dname": "广安区",
                "did": 511602
              },
              {
                "dname": "前锋区",
                "did": 511603
              },
              {
                "dname": "岳池县",
                "did": 511621
              },
              {
                "dname": "武胜县",
                "did": 511622
              },
              {
                "dname": "邻水县",
                "did": 511623
              },
              {
                "dname": "华蓥市",
                "did": 511681
              }
            ],
            "cname": "广安市",
            "cid": 511600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511701
              },
              {
                "dname": "通川区",
                "did": 511702
              },
              {
                "dname": "达川区",
                "did": 511703
              },
              {
                "dname": "宣汉县",
                "did": 511722
              },
              {
                "dname": "开江县",
                "did": 511723
              },
              {
                "dname": "大竹县",
                "did": 511724
              },
              {
                "dname": "渠县",
                "did": 511725
              },
              {
                "dname": "万源市",
                "did": 511781
              }
            ],
            "cname": "达州市",
            "cid": 511700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511801
              },
              {
                "dname": "雨城区",
                "did": 511802
              },
              {
                "dname": "名山区",
                "did": 511803
              },
              {
                "dname": "荥经县",
                "did": 511822
              },
              {
                "dname": "汉源县",
                "did": 511823
              },
              {
                "dname": "石棉县",
                "did": 511824
              },
              {
                "dname": "天全县",
                "did": 511825
              },
              {
                "dname": "芦山县",
                "did": 511826
              },
              {
                "dname": "宝兴县",
                "did": 511827
              }
            ],
            "cname": "雅安市",
            "cid": 511800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 511901
              },
              {
                "dname": "巴州区",
                "did": 511902
              },
              {
                "dname": "恩阳区",
                "did": 511903
              },
              {
                "dname": "通江县",
                "did": 511921
              },
              {
                "dname": "南江县",
                "did": 511922
              },
              {
                "dname": "平昌县",
                "did": 511923
              }
            ],
            "cname": "巴中市",
            "cid": 511900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 512001
              },
              {
                "dname": "雁江区",
                "did": 512002
              },
              {
                "dname": "安岳县",
                "did": 512021
              },
              {
                "dname": "乐至县",
                "did": 512022
              },
              {
                "dname": "简阳市",
                "did": 512081
              }
            ],
            "cname": "资阳市",
            "cid": 512000
          },
          {
            "districts": [
              {
                "dname": "汶川县",
                "did": 513221
              },
              {
                "dname": "理县",
                "did": 513222
              },
              {
                "dname": "茂县",
                "did": 513223
              },
              {
                "dname": "松潘县",
                "did": 513224
              },
              {
                "dname": "九寨沟县",
                "did": 513225
              },
              {
                "dname": "金川县",
                "did": 513226
              },
              {
                "dname": "小金县",
                "did": 513227
              },
              {
                "dname": "黑水县",
                "did": 513228
              },
              {
                "dname": "马尔康县",
                "did": 513229
              },
              {
                "dname": "壤塘县",
                "did": 513230
              },
              {
                "dname": "阿坝县",
                "did": 513231
              },
              {
                "dname": "若尔盖县",
                "did": 513232
              },
              {
                "dname": "红原县",
                "did": 513233
              }
            ],
            "cname": "阿坝藏族羌族自治州",
            "cid": 513200
          },
          {
            "districts": [
              {
                "dname": "康定县",
                "did": 513321
              },
              {
                "dname": "泸定县",
                "did": 513322
              },
              {
                "dname": "丹巴县",
                "did": 513323
              },
              {
                "dname": "九龙县",
                "did": 513324
              },
              {
                "dname": "雅江县",
                "did": 513325
              },
              {
                "dname": "道孚县",
                "did": 513326
              },
              {
                "dname": "炉霍县",
                "did": 513327
              },
              {
                "dname": "甘孜县",
                "did": 513328
              },
              {
                "dname": "新龙县",
                "did": 513329
              },
              {
                "dname": "德格县",
                "did": 513330
              },
              {
                "dname": "白玉县",
                "did": 513331
              },
              {
                "dname": "石渠县",
                "did": 513332
              },
              {
                "dname": "色达县",
                "did": 513333
              },
              {
                "dname": "理塘县",
                "did": 513334
              },
              {
                "dname": "巴塘县",
                "did": 513335
              },
              {
                "dname": "乡城县",
                "did": 513336
              },
              {
                "dname": "稻城县",
                "did": 513337
              },
              {
                "dname": "得荣县",
                "did": 513338
              }
            ],
            "cname": "甘孜藏族自治州",
            "cid": 513300
          },
          {
            "districts": [
              {
                "dname": "西昌市",
                "did": 513401
              },
              {
                "dname": "木里藏族自治县",
                "did": 513422
              },
              {
                "dname": "盐源县",
                "did": 513423
              },
              {
                "dname": "德昌县",
                "did": 513424
              },
              {
                "dname": "会理县",
                "did": 513425
              },
              {
                "dname": "会东县",
                "did": 513426
              },
              {
                "dname": "宁南县",
                "did": 513427
              },
              {
                "dname": "普格县",
                "did": 513428
              },
              {
                "dname": "布拖县",
                "did": 513429
              },
              {
                "dname": "金阳县",
                "did": 513430
              },
              {
                "dname": "昭觉县",
                "did": 513431
              },
              {
                "dname": "喜德县",
                "did": 513432
              },
              {
                "dname": "冕宁县",
                "did": 513433
              },
              {
                "dname": "越西县",
                "did": 513434
              },
              {
                "dname": "甘洛县",
                "did": 513435
              },
              {
                "dname": "美姑县",
                "did": 513436
              },
              {
                "dname": "雷波县",
                "did": 513437
              }
            ],
            "cname": "凉山彝族自治州",
            "cid": 513400
          }
        ]
      },
      {
        "pid": 520000,
        "pname": "贵州省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 520101
              },
              {
                "dname": "南明区",
                "did": 520102
              },
              {
                "dname": "云岩区",
                "did": 520103
              },
              {
                "dname": "花溪区",
                "did": 520111
              },
              {
                "dname": "乌当区",
                "did": 520112
              },
              {
                "dname": "白云区",
                "did": 520113
              },
              {
                "dname": "观山湖区",
                "did": 520115
              },
              {
                "dname": "开阳县",
                "did": 520121
              },
              {
                "dname": "息烽县",
                "did": 520122
              },
              {
                "dname": "修文县",
                "did": 520123
              },
              {
                "dname": "清镇市",
                "did": 520181
              }
            ],
            "cname": "贵阳市",
            "cid": 520100
          },
          {
            "districts": [
              {
                "dname": "钟山区",
                "did": 520201
              },
              {
                "dname": "六枝特区",
                "did": 520203
              },
              {
                "dname": "水城县",
                "did": 520221
              },
              {
                "dname": "盘县",
                "did": 520222
              }
            ],
            "cname": "六盘水市",
            "cid": 520200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 520301
              },
              {
                "dname": "红花岗区",
                "did": 520302
              },
              {
                "dname": "汇川区",
                "did": 520303
              },
              {
                "dname": "遵义县",
                "did": 520321
              },
              {
                "dname": "桐梓县",
                "did": 520322
              },
              {
                "dname": "绥阳县",
                "did": 520323
              },
              {
                "dname": "正安县",
                "did": 520324
              },
              {
                "dname": "道真仡佬族苗族自治县",
                "did": 520325
              },
              {
                "dname": "务川仡佬族苗族自治县",
                "did": 520326
              },
              {
                "dname": "凤冈县",
                "did": 520327
              },
              {
                "dname": "湄潭县",
                "did": 520328
              },
              {
                "dname": "余庆县",
                "did": 520329
              },
              {
                "dname": "习水县",
                "did": 520330
              },
              {
                "dname": "赤水市",
                "did": 520381
              },
              {
                "dname": "仁怀市",
                "did": 520382
              }
            ],
            "cname": "遵义市",
            "cid": 520300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 520401
              },
              {
                "dname": "西秀区",
                "did": 520402
              },
              {
                "dname": "平坝县",
                "did": 520421
              },
              {
                "dname": "普定县",
                "did": 520422
              },
              {
                "dname": "镇宁布依族苗族自治县",
                "did": 520423
              },
              {
                "dname": "关岭布依族苗族自治县",
                "did": 520424
              },
              {
                "dname": "紫云苗族布依族自治县",
                "did": 520425
              }
            ],
            "cname": "安顺市",
            "cid": 520400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 520501
              },
              {
                "dname": "七星关区",
                "did": 520502
              },
              {
                "dname": "大方县",
                "did": 520521
              },
              {
                "dname": "黔西县",
                "did": 520522
              },
              {
                "dname": "金沙县",
                "did": 520523
              },
              {
                "dname": "织金县",
                "did": 520524
              },
              {
                "dname": "纳雍县",
                "did": 520525
              },
              {
                "dname": "威宁彝族回族苗族自治县",
                "did": 520526
              },
              {
                "dname": "赫章县",
                "did": 520527
              }
            ],
            "cname": "毕节市",
            "cid": 520500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 520601
              },
              {
                "dname": "碧江区",
                "did": 520602
              },
              {
                "dname": "万山区",
                "did": 520603
              },
              {
                "dname": "江口县",
                "did": 520621
              },
              {
                "dname": "玉屏侗族自治县",
                "did": 520622
              },
              {
                "dname": "石阡县",
                "did": 520623
              },
              {
                "dname": "思南县",
                "did": 520624
              },
              {
                "dname": "印江土家族苗族自治县",
                "did": 520625
              },
              {
                "dname": "德江县",
                "did": 520626
              },
              {
                "dname": "沿河土家族自治县",
                "did": 520627
              },
              {
                "dname": "松桃苗族自治县",
                "did": 520628
              }
            ],
            "cname": "铜仁市",
            "cid": 520600
          },
          {
            "districts": [
              {
                "dname": "兴义市",
                "did": 522301
              },
              {
                "dname": "兴仁县",
                "did": 522322
              },
              {
                "dname": "普安县",
                "did": 522323
              },
              {
                "dname": "晴隆县",
                "did": 522324
              },
              {
                "dname": "贞丰县",
                "did": 522325
              },
              {
                "dname": "望谟县",
                "did": 522326
              },
              {
                "dname": "册亨县",
                "did": 522327
              },
              {
                "dname": "安龙县",
                "did": 522328
              }
            ],
            "cname": "黔西南布依族苗族自治州",
            "cid": 522300
          },
          {
            "districts": [
              {
                "dname": "凯里市",
                "did": 522601
              },
              {
                "dname": "黄平县",
                "did": 522622
              },
              {
                "dname": "施秉县",
                "did": 522623
              },
              {
                "dname": "三穗县",
                "did": 522624
              },
              {
                "dname": "镇远县",
                "did": 522625
              },
              {
                "dname": "岑巩县",
                "did": 522626
              },
              {
                "dname": "天柱县",
                "did": 522627
              },
              {
                "dname": "锦屏县",
                "did": 522628
              },
              {
                "dname": "剑河县",
                "did": 522629
              },
              {
                "dname": "台江县",
                "did": 522630
              },
              {
                "dname": "黎平县",
                "did": 522631
              },
              {
                "dname": "榕江县",
                "did": 522632
              },
              {
                "dname": "从江县",
                "did": 522633
              },
              {
                "dname": "雷山县",
                "did": 522634
              },
              {
                "dname": "麻江县",
                "did": 522635
              },
              {
                "dname": "丹寨县",
                "did": 522636
              }
            ],
            "cname": "黔东南苗族侗族自治州",
            "cid": 522600
          },
          {
            "districts": [
              {
                "dname": "都匀市",
                "did": 522701
              },
              {
                "dname": "福泉市",
                "did": 522702
              },
              {
                "dname": "荔波县",
                "did": 522722
              },
              {
                "dname": "贵定县",
                "did": 522723
              },
              {
                "dname": "瓮安县",
                "did": 522725
              },
              {
                "dname": "独山县",
                "did": 522726
              },
              {
                "dname": "平塘县",
                "did": 522727
              },
              {
                "dname": "罗甸县",
                "did": 522728
              },
              {
                "dname": "长顺县",
                "did": 522729
              },
              {
                "dname": "龙里县",
                "did": 522730
              },
              {
                "dname": "惠水县",
                "did": 522731
              },
              {
                "dname": "三都水族自治县",
                "did": 522732
              }
            ],
            "cname": "黔南布依族苗族自治州",
            "cid": 522700
          }
        ]
      },
      {
        "pid": 530000,
        "pname": "云南省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530101
              },
              {
                "dname": "五华区",
                "did": 530102
              },
              {
                "dname": "盘龙区",
                "did": 530103
              },
              {
                "dname": "官渡区",
                "did": 530111
              },
              {
                "dname": "西山区",
                "did": 530112
              },
              {
                "dname": "东川区",
                "did": 530113
              },
              {
                "dname": "呈贡区",
                "did": 530114
              },
              {
                "dname": "晋宁县",
                "did": 530122
              },
              {
                "dname": "富民县",
                "did": 530124
              },
              {
                "dname": "宜良县",
                "did": 530125
              },
              {
                "dname": "石林彝族自治县",
                "did": 530126
              },
              {
                "dname": "嵩明县",
                "did": 530127
              },
              {
                "dname": "禄劝彝族苗族自治县",
                "did": 530128
              },
              {
                "dname": "寻甸回族彝族自治县",
                "did": 530129
              },
              {
                "dname": "安宁市",
                "did": 530181
              }
            ],
            "cname": "昆明市",
            "cid": 530100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530301
              },
              {
                "dname": "麒麟区",
                "did": 530302
              },
              {
                "dname": "马龙县",
                "did": 530321
              },
              {
                "dname": "陆良县",
                "did": 530322
              },
              {
                "dname": "师宗县",
                "did": 530323
              },
              {
                "dname": "罗平县",
                "did": 530324
              },
              {
                "dname": "富源县",
                "did": 530325
              },
              {
                "dname": "会泽县",
                "did": 530326
              },
              {
                "dname": "沾益县",
                "did": 530328
              },
              {
                "dname": "宣威市",
                "did": 530381
              }
            ],
            "cname": "曲靖市",
            "cid": 530300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530401
              },
              {
                "dname": "红塔区",
                "did": 530402
              },
              {
                "dname": "江川县",
                "did": 530421
              },
              {
                "dname": "澄江县",
                "did": 530422
              },
              {
                "dname": "通海县",
                "did": 530423
              },
              {
                "dname": "华宁县",
                "did": 530424
              },
              {
                "dname": "易门县",
                "did": 530425
              },
              {
                "dname": "峨山彝族自治县",
                "did": 530426
              },
              {
                "dname": "新平彝族傣族自治县",
                "did": 530427
              },
              {
                "dname": "元江哈尼族彝族傣族自治县",
                "did": 530428
              }
            ],
            "cname": "玉溪市",
            "cid": 530400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530501
              },
              {
                "dname": "隆阳区",
                "did": 530502
              },
              {
                "dname": "施甸县",
                "did": 530521
              },
              {
                "dname": "腾冲县",
                "did": 530522
              },
              {
                "dname": "龙陵县",
                "did": 530523
              },
              {
                "dname": "昌宁县",
                "did": 530524
              }
            ],
            "cname": "保山市",
            "cid": 530500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530601
              },
              {
                "dname": "昭阳区",
                "did": 530602
              },
              {
                "dname": "鲁甸县",
                "did": 530621
              },
              {
                "dname": "巧家县",
                "did": 530622
              },
              {
                "dname": "盐津县",
                "did": 530623
              },
              {
                "dname": "大关县",
                "did": 530624
              },
              {
                "dname": "永善县",
                "did": 530625
              },
              {
                "dname": "绥江县",
                "did": 530626
              },
              {
                "dname": "镇雄县",
                "did": 530627
              },
              {
                "dname": "彝良县",
                "did": 530628
              },
              {
                "dname": "威信县",
                "did": 530629
              },
              {
                "dname": "水富县",
                "did": 530630
              }
            ],
            "cname": "昭通市",
            "cid": 530600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530701
              },
              {
                "dname": "古城区",
                "did": 530702
              },
              {
                "dname": "玉龙纳西族自治县",
                "did": 530721
              },
              {
                "dname": "永胜县",
                "did": 530722
              },
              {
                "dname": "华坪县",
                "did": 530723
              },
              {
                "dname": "宁蒗彝族自治县",
                "did": 530724
              }
            ],
            "cname": "丽江市",
            "cid": 530700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530801
              },
              {
                "dname": "思茅区",
                "did": 530802
              },
              {
                "dname": "宁洱哈尼族彝族自治县",
                "did": 530821
              },
              {
                "dname": "墨江哈尼族自治县",
                "did": 530822
              },
              {
                "dname": "景东彝族自治县",
                "did": 530823
              },
              {
                "dname": "景谷傣族彝族自治县",
                "did": 530824
              },
              {
                "dname": "镇沅彝族哈尼族拉祜族自治县",
                "did": 530825
              },
              {
                "dname": "江城哈尼族彝族自治县",
                "did": 530826
              },
              {
                "dname": "孟连傣族拉祜族佤族自治县",
                "did": 530827
              },
              {
                "dname": "澜沧拉祜族自治县",
                "did": 530828
              },
              {
                "dname": "西盟佤族自治县",
                "did": 530829
              }
            ],
            "cname": "普洱市",
            "cid": 530800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 530901
              },
              {
                "dname": "临翔区",
                "did": 530902
              },
              {
                "dname": "凤庆县",
                "did": 530921
              },
              {
                "dname": "云县",
                "did": 530922
              },
              {
                "dname": "永德县",
                "did": 530923
              },
              {
                "dname": "镇康县",
                "did": 530924
              },
              {
                "dname": "双江拉祜族佤族布朗族傣族自治县",
                "did": 530925
              },
              {
                "dname": "耿马傣族佤族自治县",
                "did": 530926
              },
              {
                "dname": "沧源佤族自治县",
                "did": 530927
              }
            ],
            "cname": "临沧市",
            "cid": 530900
          },
          {
            "districts": [
              {
                "dname": "楚雄市",
                "did": 532301
              },
              {
                "dname": "双柏县",
                "did": 532322
              },
              {
                "dname": "牟定县",
                "did": 532323
              },
              {
                "dname": "南华县",
                "did": 532324
              },
              {
                "dname": "姚安县",
                "did": 532325
              },
              {
                "dname": "大姚县",
                "did": 532326
              },
              {
                "dname": "永仁县",
                "did": 532327
              },
              {
                "dname": "元谋县",
                "did": 532328
              },
              {
                "dname": "武定县",
                "did": 532329
              },
              {
                "dname": "禄丰县",
                "did": 532331
              }
            ],
            "cname": "楚雄彝族自治州",
            "cid": 532300
          },
          {
            "districts": [
              {
                "dname": "个旧市",
                "did": 532501
              },
              {
                "dname": "开远市",
                "did": 532502
              },
              {
                "dname": "蒙自市",
                "did": 532503
              },
              {
                "dname": "弥勒市",
                "did": 532504
              },
              {
                "dname": "屏边苗族自治县",
                "did": 532523
              },
              {
                "dname": "建水县",
                "did": 532524
              },
              {
                "dname": "石屏县",
                "did": 532525
              },
              {
                "dname": "泸西县",
                "did": 532527
              },
              {
                "dname": "元阳县",
                "did": 532528
              },
              {
                "dname": "红河县",
                "did": 532529
              },
              {
                "dname": "金平苗族瑶族傣族自治县",
                "did": 532530
              },
              {
                "dname": "绿春县",
                "did": 532531
              },
              {
                "dname": "河口瑶族自治县",
                "did": 532532
              }
            ],
            "cname": "红河哈尼族彝族自治州",
            "cid": 532500
          },
          {
            "districts": [
              {
                "dname": "文山市",
                "did": 532601
              },
              {
                "dname": "砚山县",
                "did": 532622
              },
              {
                "dname": "西畴县",
                "did": 532623
              },
              {
                "dname": "麻栗坡县",
                "did": 532624
              },
              {
                "dname": "马关县",
                "did": 532625
              },
              {
                "dname": "丘北县",
                "did": 532626
              },
              {
                "dname": "广南县",
                "did": 532627
              },
              {
                "dname": "富宁县",
                "did": 532628
              }
            ],
            "cname": "文山壮族苗族自治州",
            "cid": 532600
          },
          {
            "districts": [
              {
                "dname": "景洪市",
                "did": 532801
              },
              {
                "dname": "勐海县",
                "did": 532822
              },
              {
                "dname": "勐腊县",
                "did": 532823
              }
            ],
            "cname": "西双版纳傣族自治州",
            "cid": 532800
          },
          {
            "districts": [
              {
                "dname": "大理市",
                "did": 532901
              },
              {
                "dname": "漾濞彝族自治县",
                "did": 532922
              },
              {
                "dname": "祥云县",
                "did": 532923
              },
              {
                "dname": "宾川县",
                "did": 532924
              },
              {
                "dname": "弥渡县",
                "did": 532925
              },
              {
                "dname": "南涧彝族自治县",
                "did": 532926
              },
              {
                "dname": "巍山彝族回族自治县",
                "did": 532927
              },
              {
                "dname": "永平县",
                "did": 532928
              },
              {
                "dname": "云龙县",
                "did": 532929
              },
              {
                "dname": "洱源县",
                "did": 532930
              },
              {
                "dname": "剑川县",
                "did": 532931
              },
              {
                "dname": "鹤庆县",
                "did": 532932
              }
            ],
            "cname": "大理白族自治州",
            "cid": 532900
          },
          {
            "districts": [
              {
                "dname": "瑞丽市",
                "did": 533102
              },
              {
                "dname": "芒市",
                "did": 533103
              },
              {
                "dname": "梁河县",
                "did": 533122
              },
              {
                "dname": "盈江县",
                "did": 533123
              },
              {
                "dname": "陇川县",
                "did": 533124
              }
            ],
            "cname": "德宏傣族景颇族自治州",
            "cid": 533100
          },
          {
            "districts": [
              {
                "dname": "泸水县",
                "did": 533321
              },
              {
                "dname": "福贡县",
                "did": 533323
              },
              {
                "dname": "贡山独龙族怒族自治县",
                "did": 533324
              },
              {
                "dname": "兰坪白族普米族自治县",
                "did": 533325
              }
            ],
            "cname": "怒江傈僳族自治州",
            "cid": 533300
          },
          {
            "districts": [
              {
                "dname": "香格里拉县",
                "did": 533421
              },
              {
                "dname": "德钦县",
                "did": 533422
              },
              {
                "dname": "维西傈僳族自治县",
                "did": 533423
              }
            ],
            "cname": "迪庆藏族自治州",
            "cid": 533400
          }
        ]
      },
      {
        "pid": 540000,
        "pname": "西藏自治区",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 540101
              },
              {
                "dname": "城关区",
                "did": 540102
              },
              {
                "dname": "林周县",
                "did": 540121
              },
              {
                "dname": "当雄县",
                "did": 540122
              },
              {
                "dname": "尼木县",
                "did": 540123
              },
              {
                "dname": "曲水县",
                "did": 540124
              },
              {
                "dname": "堆龙德庆县",
                "did": 540125
              },
              {
                "dname": "达孜县",
                "did": 540126
              },
              {
                "dname": "墨竹工卡县",
                "did": 540127
              }
            ],
            "cname": "拉萨市",
            "cid": 540100
          },
          {
            "districts": [
              {
                "dname": "昌都县",
                "did": 542121
              },
              {
                "dname": "江达县",
                "did": 542122
              },
              {
                "dname": "贡觉县",
                "did": 542123
              },
              {
                "dname": "类乌齐县",
                "did": 542124
              },
              {
                "dname": "丁青县",
                "did": 542125
              },
              {
                "dname": "察雅县",
                "did": 542126
              },
              {
                "dname": "八宿县",
                "did": 542127
              },
              {
                "dname": "左贡县",
                "did": 542128
              },
              {
                "dname": "芒康县",
                "did": 542129
              },
              {
                "dname": "洛隆县",
                "did": 542132
              },
              {
                "dname": "边坝县",
                "did": 542133
              }
            ],
            "cname": "昌都地区",
            "cid": 542100
          },
          {
            "districts": [
              {
                "dname": "乃东县",
                "did": 542221
              },
              {
                "dname": "扎囊县",
                "did": 542222
              },
              {
                "dname": "贡嘎县",
                "did": 542223
              },
              {
                "dname": "桑日县",
                "did": 542224
              },
              {
                "dname": "琼结县",
                "did": 542225
              },
              {
                "dname": "曲松县",
                "did": 542226
              },
              {
                "dname": "措美县",
                "did": 542227
              },
              {
                "dname": "洛扎县",
                "did": 542228
              },
              {
                "dname": "加查县",
                "did": 542229
              },
              {
                "dname": "隆子县",
                "did": 542231
              },
              {
                "dname": "错那县",
                "did": 542232
              },
              {
                "dname": "浪卡子县",
                "did": 542233
              }
            ],
            "cname": "山南地区",
            "cid": 542200
          },
          {
            "districts": [
              {
                "dname": "日喀则市",
                "did": 542301
              },
              {
                "dname": "南木林县",
                "did": 542322
              },
              {
                "dname": "江孜县",
                "did": 542323
              },
              {
                "dname": "定日县",
                "did": 542324
              },
              {
                "dname": "萨迦县",
                "did": 542325
              },
              {
                "dname": "拉孜县",
                "did": 542326
              },
              {
                "dname": "昂仁县",
                "did": 542327
              },
              {
                "dname": "谢通门县",
                "did": 542328
              },
              {
                "dname": "白朗县",
                "did": 542329
              },
              {
                "dname": "仁布县",
                "did": 542330
              },
              {
                "dname": "康马县",
                "did": 542331
              },
              {
                "dname": "定结县",
                "did": 542332
              },
              {
                "dname": "仲巴县",
                "did": 542333
              },
              {
                "dname": "亚东县",
                "did": 542334
              },
              {
                "dname": "吉隆县",
                "did": 542335
              },
              {
                "dname": "聂拉木县",
                "did": 542336
              },
              {
                "dname": "萨嘎县",
                "did": 542337
              },
              {
                "dname": "岗巴县",
                "did": 542338
              }
            ],
            "cname": "日喀则地区",
            "cid": 542300
          },
          {
            "districts": [
              {
                "dname": "那曲县",
                "did": 542421
              },
              {
                "dname": "嘉黎县",
                "did": 542422
              },
              {
                "dname": "比如县",
                "did": 542423
              },
              {
                "dname": "聂荣县",
                "did": 542424
              },
              {
                "dname": "安多县",
                "did": 542425
              },
              {
                "dname": "申扎县",
                "did": 542426
              },
              {
                "dname": "索县",
                "did": 542427
              },
              {
                "dname": "班戈县",
                "did": 542428
              },
              {
                "dname": "巴青县",
                "did": 542429
              },
              {
                "dname": "尼玛县",
                "did": 542430
              },
              {
                "dname": "双湖县",
                "did": 542431
              }
            ],
            "cname": "那曲地区",
            "cid": 542400
          },
          {
            "districts": [
              {
                "dname": "普兰县",
                "did": 542521
              },
              {
                "dname": "札达县",
                "did": 542522
              },
              {
                "dname": "噶尔县",
                "did": 542523
              },
              {
                "dname": "日土县",
                "did": 542524
              },
              {
                "dname": "革吉县",
                "did": 542525
              },
              {
                "dname": "改则县",
                "did": 542526
              },
              {
                "dname": "措勤县",
                "did": 542527
              }
            ],
            "cname": "阿里地区",
            "cid": 542500
          },
          {
            "districts": [
              {
                "dname": "林芝县",
                "did": 542621
              },
              {
                "dname": "工布江达县",
                "did": 542622
              },
              {
                "dname": "米林县",
                "did": 542623
              },
              {
                "dname": "墨脱县",
                "did": 542624
              },
              {
                "dname": "波密县",
                "did": 542625
              },
              {
                "dname": "察隅县",
                "did": 542626
              },
              {
                "dname": "朗县",
                "did": 542627
              }
            ],
            "cname": "林芝地区",
            "cid": 542600
          }
        ]
      },
      {
        "pid": 610000,
        "pname": "陕西省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610101
              },
              {
                "dname": "新城区",
                "did": 610102
              },
              {
                "dname": "碑林区",
                "did": 610103
              },
              {
                "dname": "莲湖区",
                "did": 610104
              },
              {
                "dname": "灞桥区",
                "did": 610111
              },
              {
                "dname": "未央区",
                "did": 610112
              },
              {
                "dname": "雁塔区",
                "did": 610113
              },
              {
                "dname": "阎良区",
                "did": 610114
              },
              {
                "dname": "临潼区",
                "did": 610115
              },
              {
                "dname": "长安区",
                "did": 610116
              },
              {
                "dname": "蓝田县",
                "did": 610122
              },
              {
                "dname": "周至县",
                "did": 610124
              },
              {
                "dname": "户县",
                "did": 610125
              },
              {
                "dname": "高陵县",
                "did": 610126
              }
            ],
            "cname": "西安市",
            "cid": 610100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610201
              },
              {
                "dname": "王益区",
                "did": 610202
              },
              {
                "dname": "印台区",
                "did": 610203
              },
              {
                "dname": "耀州区",
                "did": 610204
              },
              {
                "dname": "宜君县",
                "did": 610222
              }
            ],
            "cname": "铜川市",
            "cid": 610200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610301
              },
              {
                "dname": "渭滨区",
                "did": 610302
              },
              {
                "dname": "金台区",
                "did": 610303
              },
              {
                "dname": "陈仓区",
                "did": 610304
              },
              {
                "dname": "凤翔县",
                "did": 610322
              },
              {
                "dname": "岐山县",
                "did": 610323
              },
              {
                "dname": "扶风县",
                "did": 610324
              },
              {
                "dname": "眉县",
                "did": 610326
              },
              {
                "dname": "陇县",
                "did": 610327
              },
              {
                "dname": "千阳县",
                "did": 610328
              },
              {
                "dname": "麟游县",
                "did": 610329
              },
              {
                "dname": "凤县",
                "did": 610330
              },
              {
                "dname": "太白县",
                "did": 610331
              }
            ],
            "cname": "宝鸡市",
            "cid": 610300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610401
              },
              {
                "dname": "秦都区",
                "did": 610402
              },
              {
                "dname": "杨陵区",
                "did": 610403
              },
              {
                "dname": "渭城区",
                "did": 610404
              },
              {
                "dname": "三原县",
                "did": 610422
              },
              {
                "dname": "泾阳县",
                "did": 610423
              },
              {
                "dname": "乾县",
                "did": 610424
              },
              {
                "dname": "礼泉县",
                "did": 610425
              },
              {
                "dname": "永寿县",
                "did": 610426
              },
              {
                "dname": "彬县",
                "did": 610427
              },
              {
                "dname": "长武县",
                "did": 610428
              },
              {
                "dname": "旬邑县",
                "did": 610429
              },
              {
                "dname": "淳化县",
                "did": 610430
              },
              {
                "dname": "武功县",
                "did": 610431
              },
              {
                "dname": "兴平市",
                "did": 610481
              }
            ],
            "cname": "咸阳市",
            "cid": 610400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610501
              },
              {
                "dname": "临渭区",
                "did": 610502
              },
              {
                "dname": "华县",
                "did": 610521
              },
              {
                "dname": "潼关县",
                "did": 610522
              },
              {
                "dname": "大荔县",
                "did": 610523
              },
              {
                "dname": "合阳县",
                "did": 610524
              },
              {
                "dname": "澄城县",
                "did": 610525
              },
              {
                "dname": "蒲城县",
                "did": 610526
              },
              {
                "dname": "白水县",
                "did": 610527
              },
              {
                "dname": "富平县",
                "did": 610528
              },
              {
                "dname": "韩城市",
                "did": 610581
              },
              {
                "dname": "华阴市",
                "did": 610582
              }
            ],
            "cname": "渭南市",
            "cid": 610500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610601
              },
              {
                "dname": "宝塔区",
                "did": 610602
              },
              {
                "dname": "延长县",
                "did": 610621
              },
              {
                "dname": "延川县",
                "did": 610622
              },
              {
                "dname": "子长县",
                "did": 610623
              },
              {
                "dname": "安塞县",
                "did": 610624
              },
              {
                "dname": "志丹县",
                "did": 610625
              },
              {
                "dname": "吴起县",
                "did": 610626
              },
              {
                "dname": "甘泉县",
                "did": 610627
              },
              {
                "dname": "富县",
                "did": 610628
              },
              {
                "dname": "洛川县",
                "did": 610629
              },
              {
                "dname": "宜川县",
                "did": 610630
              },
              {
                "dname": "黄龙县",
                "did": 610631
              },
              {
                "dname": "黄陵县",
                "did": 610632
              }
            ],
            "cname": "延安市",
            "cid": 610600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610701
              },
              {
                "dname": "汉台区",
                "did": 610702
              },
              {
                "dname": "南郑县",
                "did": 610721
              },
              {
                "dname": "城固县",
                "did": 610722
              },
              {
                "dname": "洋县",
                "did": 610723
              },
              {
                "dname": "西乡县",
                "did": 610724
              },
              {
                "dname": "勉县",
                "did": 610725
              },
              {
                "dname": "宁强县",
                "did": 610726
              },
              {
                "dname": "略阳县",
                "did": 610727
              },
              {
                "dname": "镇巴县",
                "did": 610728
              },
              {
                "dname": "留坝县",
                "did": 610729
              },
              {
                "dname": "佛坪县",
                "did": 610730
              }
            ],
            "cname": "汉中市",
            "cid": 610700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610801
              },
              {
                "dname": "榆阳区",
                "did": 610802
              },
              {
                "dname": "神木县",
                "did": 610821
              },
              {
                "dname": "府谷县",
                "did": 610822
              },
              {
                "dname": "横山县",
                "did": 610823
              },
              {
                "dname": "靖边县",
                "did": 610824
              },
              {
                "dname": "定边县",
                "did": 610825
              },
              {
                "dname": "绥德县",
                "did": 610826
              },
              {
                "dname": "米脂县",
                "did": 610827
              },
              {
                "dname": "佳县",
                "did": 610828
              },
              {
                "dname": "吴堡县",
                "did": 610829
              },
              {
                "dname": "清涧县",
                "did": 610830
              },
              {
                "dname": "子洲县",
                "did": 610831
              }
            ],
            "cname": "榆林市",
            "cid": 610800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 610901
              },
              {
                "dname": "汉滨区",
                "did": 610902
              },
              {
                "dname": "汉阴县",
                "did": 610921
              },
              {
                "dname": "石泉县",
                "did": 610922
              },
              {
                "dname": "宁陕县",
                "did": 610923
              },
              {
                "dname": "紫阳县",
                "did": 610924
              },
              {
                "dname": "岚皋县",
                "did": 610925
              },
              {
                "dname": "平利县",
                "did": 610926
              },
              {
                "dname": "镇坪县",
                "did": 610927
              },
              {
                "dname": "旬阳县",
                "did": 610928
              },
              {
                "dname": "白河县",
                "did": 610929
              }
            ],
            "cname": "安康市",
            "cid": 610900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 611001
              },
              {
                "dname": "商州区",
                "did": 611002
              },
              {
                "dname": "洛南县",
                "did": 611021
              },
              {
                "dname": "丹凤县",
                "did": 611022
              },
              {
                "dname": "商南县",
                "did": 611023
              },
              {
                "dname": "山阳县",
                "did": 611024
              },
              {
                "dname": "镇安县",
                "did": 611025
              },
              {
                "dname": "柞水县",
                "did": 611026
              }
            ],
            "cname": "商洛市",
            "cid": 611000
          }
        ]
      },
      {
        "pid": 620000,
        "pname": "甘肃省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620101
              },
              {
                "dname": "城关区",
                "did": 620102
              },
              {
                "dname": "七里河区",
                "did": 620103
              },
              {
                "dname": "西固区",
                "did": 620104
              },
              {
                "dname": "安宁区",
                "did": 620105
              },
              {
                "dname": "红古区",
                "did": 620111
              },
              {
                "dname": "永登县",
                "did": 620121
              },
              {
                "dname": "皋兰县",
                "did": 620122
              },
              {
                "dname": "榆中县",
                "did": 620123
              }
            ],
            "cname": "兰州市",
            "cid": 620100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620201
              }
            ],
            "cname": "嘉峪关市",
            "cid": 620200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620301
              },
              {
                "dname": "金川区",
                "did": 620302
              },
              {
                "dname": "永昌县",
                "did": 620321
              }
            ],
            "cname": "金昌市",
            "cid": 620300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620401
              },
              {
                "dname": "白银区",
                "did": 620402
              },
              {
                "dname": "平川区",
                "did": 620403
              },
              {
                "dname": "靖远县",
                "did": 620421
              },
              {
                "dname": "会宁县",
                "did": 620422
              },
              {
                "dname": "景泰县",
                "did": 620423
              }
            ],
            "cname": "白银市",
            "cid": 620400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620501
              },
              {
                "dname": "秦州区",
                "did": 620502
              },
              {
                "dname": "麦积区",
                "did": 620503
              },
              {
                "dname": "清水县",
                "did": 620521
              },
              {
                "dname": "秦安县",
                "did": 620522
              },
              {
                "dname": "甘谷县",
                "did": 620523
              },
              {
                "dname": "武山县",
                "did": 620524
              },
              {
                "dname": "张家川回族自治县",
                "did": 620525
              }
            ],
            "cname": "天水市",
            "cid": 620500
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620601
              },
              {
                "dname": "凉州区",
                "did": 620602
              },
              {
                "dname": "民勤县",
                "did": 620621
              },
              {
                "dname": "古浪县",
                "did": 620622
              },
              {
                "dname": "天祝藏族自治县",
                "did": 620623
              }
            ],
            "cname": "武威市",
            "cid": 620600
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620701
              },
              {
                "dname": "甘州区",
                "did": 620702
              },
              {
                "dname": "肃南裕固族自治县",
                "did": 620721
              },
              {
                "dname": "民乐县",
                "did": 620722
              },
              {
                "dname": "临泽县",
                "did": 620723
              },
              {
                "dname": "高台县",
                "did": 620724
              },
              {
                "dname": "山丹县",
                "did": 620725
              }
            ],
            "cname": "张掖市",
            "cid": 620700
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620801
              },
              {
                "dname": "崆峒区",
                "did": 620802
              },
              {
                "dname": "泾川县",
                "did": 620821
              },
              {
                "dname": "灵台县",
                "did": 620822
              },
              {
                "dname": "崇信县",
                "did": 620823
              },
              {
                "dname": "华亭县",
                "did": 620824
              },
              {
                "dname": "庄浪县",
                "did": 620825
              },
              {
                "dname": "静宁县",
                "did": 620826
              }
            ],
            "cname": "平凉市",
            "cid": 620800
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 620901
              },
              {
                "dname": "肃州区",
                "did": 620902
              },
              {
                "dname": "金塔县",
                "did": 620921
              },
              {
                "dname": "瓜州县",
                "did": 620922
              },
              {
                "dname": "肃北蒙古族自治县",
                "did": 620923
              },
              {
                "dname": "阿克塞哈萨克族自治县",
                "did": 620924
              },
              {
                "dname": "玉门市",
                "did": 620981
              },
              {
                "dname": "敦煌市",
                "did": 620982
              }
            ],
            "cname": "酒泉市",
            "cid": 620900
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 621001
              },
              {
                "dname": "西峰区",
                "did": 621002
              },
              {
                "dname": "庆城县",
                "did": 621021
              },
              {
                "dname": "环县",
                "did": 621022
              },
              {
                "dname": "华池县",
                "did": 621023
              },
              {
                "dname": "合水县",
                "did": 621024
              },
              {
                "dname": "正宁县",
                "did": 621025
              },
              {
                "dname": "宁县",
                "did": 621026
              },
              {
                "dname": "镇原县",
                "did": 621027
              }
            ],
            "cname": "庆阳市",
            "cid": 621000
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 621101
              },
              {
                "dname": "安定区",
                "did": 621102
              },
              {
                "dname": "通渭县",
                "did": 621121
              },
              {
                "dname": "陇西县",
                "did": 621122
              },
              {
                "dname": "渭源县",
                "did": 621123
              },
              {
                "dname": "临洮县",
                "did": 621124
              },
              {
                "dname": "漳县",
                "did": 621125
              },
              {
                "dname": "岷县",
                "did": 621126
              }
            ],
            "cname": "定西市",
            "cid": 621100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 621201
              },
              {
                "dname": "武都区",
                "did": 621202
              },
              {
                "dname": "成县",
                "did": 621221
              },
              {
                "dname": "文县",
                "did": 621222
              },
              {
                "dname": "宕昌县",
                "did": 621223
              },
              {
                "dname": "康县",
                "did": 621224
              },
              {
                "dname": "西和县",
                "did": 621225
              },
              {
                "dname": "礼县",
                "did": 621226
              },
              {
                "dname": "徽县",
                "did": 621227
              },
              {
                "dname": "两当县",
                "did": 621228
              }
            ],
            "cname": "陇南市",
            "cid": 621200
          },
          {
            "districts": [
              {
                "dname": "临夏市",
                "did": 622901
              },
              {
                "dname": "临夏县",
                "did": 622921
              },
              {
                "dname": "康乐县",
                "did": 622922
              },
              {
                "dname": "永靖县",
                "did": 622923
              },
              {
                "dname": "广河县",
                "did": 622924
              },
              {
                "dname": "和政县",
                "did": 622925
              },
              {
                "dname": "东乡族自治县",
                "did": 622926
              },
              {
                "dname": "积石山保安族东乡族撒拉族自治县",
                "did": 622927
              }
            ],
            "cname": "临夏回族自治州",
            "cid": 622900
          },
          {
            "districts": [
              {
                "dname": "合作市",
                "did": 623001
              },
              {
                "dname": "临潭县",
                "did": 623021
              },
              {
                "dname": "卓尼县",
                "did": 623022
              },
              {
                "dname": "舟曲县",
                "did": 623023
              },
              {
                "dname": "迭部县",
                "did": 623024
              },
              {
                "dname": "玛曲县",
                "did": 623025
              },
              {
                "dname": "碌曲县",
                "did": 623026
              },
              {
                "dname": "夏河县",
                "did": 623027
              }
            ],
            "cname": "甘南藏族自治州",
            "cid": 623000
          }
        ]
      },
      {
        "pid": 630000,
        "pname": "青海省",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 630101
              },
              {
                "dname": "城东区",
                "did": 630102
              },
              {
                "dname": "城中区",
                "did": 630103
              },
              {
                "dname": "城西区",
                "did": 630104
              },
              {
                "dname": "城北区",
                "did": 630105
              },
              {
                "dname": "大通回族土族自治县",
                "did": 630121
              },
              {
                "dname": "湟中县",
                "did": 630122
              },
              {
                "dname": "湟源县",
                "did": 630123
              }
            ],
            "cname": "西宁市",
            "cid": 630100
          },
          {
            "districts": [
              {
                "dname": "乐都区",
                "did": 630202
              },
              {
                "dname": "平安县",
                "did": 630221
              },
              {
                "dname": "民和回族土族自治县",
                "did": 630222
              },
              {
                "dname": "互助土族自治县",
                "did": 630223
              },
              {
                "dname": "化隆回族自治县",
                "did": 630224
              },
              {
                "dname": "循化撒拉族自治县",
                "did": 630225
              }
            ],
            "cname": "海东市",
            "cid": 630200
          },
          {
            "districts": [
              {
                "dname": "门源回族自治县",
                "did": 632221
              },
              {
                "dname": "祁连县",
                "did": 632222
              },
              {
                "dname": "海晏县",
                "did": 632223
              },
              {
                "dname": "刚察县",
                "did": 632224
              }
            ],
            "cname": "海北藏族自治州",
            "cid": 632200
          },
          {
            "districts": [
              {
                "dname": "同仁县",
                "did": 632321
              },
              {
                "dname": "尖扎县",
                "did": 632322
              },
              {
                "dname": "泽库县",
                "did": 632323
              },
              {
                "dname": "河南蒙古族自治县",
                "did": 632324
              }
            ],
            "cname": "黄南藏族自治州",
            "cid": 632300
          },
          {
            "districts": [
              {
                "dname": "共和县",
                "did": 632521
              },
              {
                "dname": "同德县",
                "did": 632522
              },
              {
                "dname": "贵德县",
                "did": 632523
              },
              {
                "dname": "兴海县",
                "did": 632524
              },
              {
                "dname": "贵南县",
                "did": 632525
              }
            ],
            "cname": "海南藏族自治州",
            "cid": 632500
          },
          {
            "districts": [
              {
                "dname": "玛沁县",
                "did": 632621
              },
              {
                "dname": "班玛县",
                "did": 632622
              },
              {
                "dname": "甘德县",
                "did": 632623
              },
              {
                "dname": "达日县",
                "did": 632624
              },
              {
                "dname": "久治县",
                "did": 632625
              },
              {
                "dname": "玛多县",
                "did": 632626
              }
            ],
            "cname": "果洛藏族自治州",
            "cid": 632600
          },
          {
            "districts": [
              {
                "dname": "玉树市",
                "did": 632701
              },
              {
                "dname": "杂多县",
                "did": 632722
              },
              {
                "dname": "称多县",
                "did": 632723
              },
              {
                "dname": "治多县",
                "did": 632724
              },
              {
                "dname": "囊谦县",
                "did": 632725
              },
              {
                "dname": "曲麻莱县",
                "did": 632726
              }
            ],
            "cname": "玉树藏族自治州",
            "cid": 632700
          },
          {
            "districts": [
              {
                "dname": "格尔木市",
                "did": 632801
              },
              {
                "dname": "德令哈市",
                "did": 632802
              },
              {
                "dname": "乌兰县",
                "did": 632821
              },
              {
                "dname": "都兰县",
                "did": 632822
              },
              {
                "dname": "天峻县",
                "did": 632823
              }
            ],
            "cname": "海西蒙古族藏族自治州",
            "cid": 632800
          }
        ]
      },
      {
        "pid": 640000,
        "pname": "宁夏回族自治区",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 640101
              },
              {
                "dname": "兴庆区",
                "did": 640104
              },
              {
                "dname": "西夏区",
                "did": 640105
              },
              {
                "dname": "金凤区",
                "did": 640106
              },
              {
                "dname": "永宁县",
                "did": 640121
              },
              {
                "dname": "贺兰县",
                "did": 640122
              },
              {
                "dname": "灵武市",
                "did": 640181
              }
            ],
            "cname": "银川市",
            "cid": 640100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 640201
              },
              {
                "dname": "大武口区",
                "did": 640202
              },
              {
                "dname": "惠农区",
                "did": 640205
              },
              {
                "dname": "平罗县",
                "did": 640221
              }
            ],
            "cname": "石嘴山市",
            "cid": 640200
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 640301
              },
              {
                "dname": "利通区",
                "did": 640302
              },
              {
                "dname": "红寺堡区",
                "did": 640303
              },
              {
                "dname": "盐池县",
                "did": 640323
              },
              {
                "dname": "同心县",
                "did": 640324
              },
              {
                "dname": "青铜峡市",
                "did": 640381
              }
            ],
            "cname": "吴忠市",
            "cid": 640300
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 640401
              },
              {
                "dname": "原州区",
                "did": 640402
              },
              {
                "dname": "西吉县",
                "did": 640422
              },
              {
                "dname": "隆德县",
                "did": 640423
              },
              {
                "dname": "泾源县",
                "did": 640424
              },
              {
                "dname": "彭阳县",
                "did": 640425
              }
            ],
            "cname": "固原市",
            "cid": 640400
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 640501
              },
              {
                "dname": "沙坡头区",
                "did": 640502
              },
              {
                "dname": "中宁县",
                "did": 640521
              },
              {
                "dname": "海原县",
                "did": 640522
              }
            ],
            "cname": "中卫市",
            "cid": 640500
          }
        ]
      },
      {
        "pid": 650000,
        "pname": "新疆维吾尔自治区",
        "citys": [
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 650101
              },
              {
                "dname": "天山区",
                "did": 650102
              },
              {
                "dname": "沙依巴克区",
                "did": 650103
              },
              {
                "dname": "新市区",
                "did": 650104
              },
              {
                "dname": "水磨沟区",
                "did": 650105
              },
              {
                "dname": "头屯河区",
                "did": 650106
              },
              {
                "dname": "达坂城区",
                "did": 650107
              },
              {
                "dname": "米东区",
                "did": 650109
              },
              {
                "dname": "乌鲁木齐县",
                "did": 650121
              }
            ],
            "cname": "乌鲁木齐市",
            "cid": 650100
          },
          {
            "districts": [
              {
                "dname": "市辖区",
                "did": 650201
              },
              {
                "dname": "独山子区",
                "did": 650202
              },
              {
                "dname": "克拉玛依区",
                "did": 650203
              },
              {
                "dname": "白碱滩区",
                "did": 650204
              },
              {
                "dname": "乌尔禾区",
                "did": 650205
              }
            ],
            "cname": "克拉玛依市",
            "cid": 650200
          },
          {
            "districts": [
              {
                "dname": "吐鲁番市",
                "did": 652101
              },
              {
                "dname": "鄯善县",
                "did": 652122
              },
              {
                "dname": "托克逊县",
                "did": 652123
              }
            ],
            "cname": "吐鲁番地区",
            "cid": 652100
          },
          {
            "districts": [
              {
                "dname": "哈密市",
                "did": 652201
              },
              {
                "dname": "巴里坤哈萨克自治县",
                "did": 652222
              },
              {
                "dname": "伊吾县",
                "did": 652223
              }
            ],
            "cname": "哈密地区",
            "cid": 652200
          },
          {
            "districts": [
              {
                "dname": "昌吉市",
                "did": 652301
              },
              {
                "dname": "阜康市",
                "did": 652302
              },
              {
                "dname": "呼图壁县",
                "did": 652323
              },
              {
                "dname": "玛纳斯县",
                "did": 652324
              },
              {
                "dname": "奇台县",
                "did": 652325
              },
              {
                "dname": "吉木萨尔县",
                "did": 652327
              },
              {
                "dname": "木垒哈萨克自治县",
                "did": 652328
              }
            ],
            "cname": "昌吉回族自治州",
            "cid": 652300
          },
          {
            "districts": [
              {
                "dname": "博乐市",
                "did": 652701
              },
              {
                "dname": "阿拉山口市",
                "did": 652702
              },
              {
                "dname": "精河县",
                "did": 652722
              },
              {
                "dname": "温泉县",
                "did": 652723
              }
            ],
            "cname": "博尔塔拉蒙古自治州",
            "cid": 652700
          },
          {
            "districts": [
              {
                "dname": "库尔勒市",
                "did": 652801
              },
              {
                "dname": "轮台县",
                "did": 652822
              },
              {
                "dname": "尉犁县",
                "did": 652823
              },
              {
                "dname": "若羌县",
                "did": 652824
              },
              {
                "dname": "且末县",
                "did": 652825
              },
              {
                "dname": "焉耆回族自治县",
                "did": 652826
              },
              {
                "dname": "和静县",
                "did": 652827
              },
              {
                "dname": "和硕县",
                "did": 652828
              },
              {
                "dname": "博湖县",
                "did": 652829
              }
            ],
            "cname": "巴音郭楞蒙古自治州",
            "cid": 652800
          },
          {
            "districts": [
              {
                "dname": "阿克苏市",
                "did": 652901
              },
              {
                "dname": "温宿县",
                "did": 652922
              },
              {
                "dname": "库车县",
                "did": 652923
              },
              {
                "dname": "沙雅县",
                "did": 652924
              },
              {
                "dname": "新和县",
                "did": 652925
              },
              {
                "dname": "拜城县",
                "did": 652926
              },
              {
                "dname": "乌什县",
                "did": 652927
              },
              {
                "dname": "阿瓦提县",
                "did": 652928
              },
              {
                "dname": "柯坪县",
                "did": 652929
              }
            ],
            "cname": "阿克苏地区",
            "cid": 652900
          },
          {
            "districts": [
              {
                "dname": "阿图什市",
                "did": 653001
              },
              {
                "dname": "阿克陶县",
                "did": 653022
              },
              {
                "dname": "阿合奇县",
                "did": 653023
              },
              {
                "dname": "乌恰县",
                "did": 653024
              }
            ],
            "cname": "克孜勒苏柯尔克孜自治州",
            "cid": 653000
          },
          {
            "districts": [
              {
                "dname": "喀什市",
                "did": 653101
              },
              {
                "dname": "疏附县",
                "did": 653121
              },
              {
                "dname": "疏勒县",
                "did": 653122
              },
              {
                "dname": "英吉沙县",
                "did": 653123
              },
              {
                "dname": "泽普县",
                "did": 653124
              },
              {
                "dname": "莎车县",
                "did": 653125
              },
              {
                "dname": "叶城县",
                "did": 653126
              },
              {
                "dname": "麦盖提县",
                "did": 653127
              },
              {
                "dname": "岳普湖县",
                "did": 653128
              },
              {
                "dname": "伽师县",
                "did": 653129
              },
              {
                "dname": "巴楚县",
                "did": 653130
              },
              {
                "dname": "塔什库尔干塔吉克自治县",
                "did": 653131
              }
            ],
            "cname": "喀什地区",
            "cid": 653100
          },
          {
            "districts": [
              {
                "dname": "和田市",
                "did": 653201
              },
              {
                "dname": "和田县",
                "did": 653221
              },
              {
                "dname": "墨玉县",
                "did": 653222
              },
              {
                "dname": "皮山县",
                "did": 653223
              },
              {
                "dname": "洛浦县",
                "did": 653224
              },
              {
                "dname": "策勒县",
                "did": 653225
              },
              {
                "dname": "于田县",
                "did": 653226
              },
              {
                "dname": "民丰县",
                "did": 653227
              }
            ],
            "cname": "和田地区",
            "cid": 653200
          },
          {
            "districts": [
              {
                "dname": "伊宁市",
                "did": 654002
              },
              {
                "dname": "奎屯市",
                "did": 654003
              },
              {
                "dname": "伊宁县",
                "did": 654021
              },
              {
                "dname": "察布查尔锡伯自治县",
                "did": 654022
              },
              {
                "dname": "霍城县",
                "did": 654023
              },
              {
                "dname": "巩留县",
                "did": 654024
              },
              {
                "dname": "新源县",
                "did": 654025
              },
              {
                "dname": "昭苏县",
                "did": 654026
              },
              {
                "dname": "特克斯县",
                "did": 654027
              },
              {
                "dname": "尼勒克县",
                "did": 654028
              }
            ],
            "cname": "伊犁哈萨克自治州",
            "cid": 654000
          },
          {
            "districts": [
              {
                "dname": "塔城市",
                "did": 654201
              },
              {
                "dname": "乌苏市",
                "did": 654202
              },
              {
                "dname": "额敏县",
                "did": 654221
              },
              {
                "dname": "沙湾县",
                "did": 654223
              },
              {
                "dname": "托里县",
                "did": 654224
              },
              {
                "dname": "裕民县",
                "did": 654225
              },
              {
                "dname": "和布克赛尔蒙古自治县",
                "did": 654226
              }
            ],
            "cname": "塔城地区",
            "cid": 654200
          },
          {
            "districts": [
              {
                "dname": "阿勒泰市",
                "did": 654301
              },
              {
                "dname": "布尔津县",
                "did": 654321
              },
              {
                "dname": "富蕴县",
                "did": 654322
              },
              {
                "dname": "福海县",
                "did": 654323
              },
              {
                "dname": "哈巴河县",
                "did": 654324
              },
              {
                "dname": "青河县",
                "did": 654325
              },
              {
                "dname": "吉木乃县",
                "did": 654326
              }
            ],
            "cname": "阿勒泰地区",
            "cid": 654300
          },
          {
            "districts": [
              {
                "dname": "石河子市",
                "did": 659001
              },
              {
                "dname": "阿拉尔市",
                "did": 659002
              },
              {
                "dname": "图木舒克市",
                "did": 659003
              },
              {
                "dname": "五家渠市",
                "did": 659004
              }
            ],
            "cname": "自治区直辖县级行政区划",
            "cid": 659000
          }
        ]
      },
      {
        "pid": 810000,
        "pname": "香港特别行政区",
        "citys": [
          {
            "districts": [
              {
                "dname": "香港特别行政区",
                "did": 810000
              }
            ],
            "cname": "香港特别行政区",
            "cid": 810000
          }
        ]
      },
      {
        "pid": 820000,
        "pname": "澳门特别行政区",
        "citys": [
          {
            "districts": [
              {
                "dname": "澳门特别行政区",
                "did": 820000
              }
            ],
            "cname": "澳门特别行政区",
            "cid": 820000
          }
        ]
      }
    ]
  },
  mutations: {
    clearHouseAddressInEdit(state) {
      state.addressInEdit = ''
    }
  }
})
export default store
