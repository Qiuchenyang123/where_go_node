const router = require("express").Router();

router.get('/', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const data = {
        a: {
            "result": [
                {"key": "安阳东", "display": "安阳东(anyangdong)", "type": 3}, {
                    "key": "安康",
                    "display": "安康(ankang)",
                    "type": 3
                }, {"key": "安庆", "display": "安庆(anqing)", "type": 3}, {
                    "key": "鞍山西",
                    "display": "鞍山西(anshanxi)",
                    "type": 3
                }, {"key": "鞍山", "display": "鞍山(anshan)", "type": 3}, {
                    "key": "安顺西",
                    "display": "安顺西(anshunxi)",
                    "type": 3
                }, {"key": "安达", "display": "安达(anda)", "type": 3}
            ],
            "userInput": "a"
        },
        b: {"result":[{"key":"北滘","display":"北滘(beijiao)","type":3},{"key":"北京","display":"北京(beijing)","type":3},{"key":"蚌埠南","display":"蚌埠南(bengbunan)","type":3},{"key":"保定东","display":"保定东(baodingdong)","type":3},{"key":"蚌埠","display":"蚌埠(bengbu)","type":3},{"key":"包头","display":"包头(baotou)","type":3},{"key":"保定","display":"保定(baoding)","type":3}],"userInput":"b"},
        c: {"result":[{"key":"长沙","display":"长沙(changsha)","type":3},{"key":"长春","display":"长春(changchun)","type":3},{"key":"潮汕","display":"潮汕(chaoshan)","type":3},{"key":"常平","display":"常平(changping)","type":3},{"key":"长流","display":"长流(changliu)","type":3},{"key":"城西","display":"城西(chengxi)","type":3},{"key":"常德","display":"常德(changde)","type":3}],"userInput":"c"},
        d: {"result":[{"key":"东莞","display":"东莞(dongguan)","type":3},{"key":"道滘","display":"道滘(daojiao)","type":3},{"key":"大连","display":"大连(dalian)","type":3},{"key":"丹东","display":"丹东(dandong)","type":3},{"key":"德清","display":"德清(deqing)","type":3},{"key":"大理","display":"大理(dali)","type":3},{"key":"洞井","display":"洞井(dongjing)","type":3}],"userInput":"d"},
        e: {"result":[{"key":"恩施","display":"恩施(enshi)","type":3},{"key":"鄂州","display":"鄂州(ezhou)","type":3},{"key":"恩平","display":"恩平(enping)","type":3},{"key":"阿房宫","display":"阿房宫(epanggong)","type":3},{"key":"峨眉山","display":"峨眉山(emeishan)","type":3},{"key":"鄂尔多斯","display":"鄂尔多斯(eerduosi)","type":3},{"key":"峨眉","display":"峨眉(emei)","type":3}],"userInput":"e"},
        f: {"result":[{"key":"福州","display":"福州(fuzhou)","type":3},{"key":"佛山西","display":"佛山西(foshanxi)","type":3},{"key":"阜阳","display":"阜阳(fuyang)","type":3},{"key":"福田","display":"福田(futian)","type":3},{"key":"抚州","display":"抚州(fuzhou)","type":3},{"key":"福清","display":"福清(fuqing)","type":3},{"key":"芙蓉南","display":"芙蓉南(furongnan)","type":3}],"userInput":"f"},
        g: {"result":[{"key":"广州","display":"广州(guangzhou)","type":3},{"key":"广元","display":"广元(guangyuan)","type":3},{"key":"贵港","display":"贵港(guigang)","type":3},{"key":"赣州","display":"赣州(ganzhou)","type":3},{"key":"贵阳","display":"贵阳(guiyang)","type":3},{"key":"桂平","display":"桂平(guiping)","type":3},{"key":"高密","display":"高密(gaomi)","type":3}],"userInput":"g"},
        h: {"result":[{"key":"汉口","display":"汉口(hankou)","type":3},{"key":"虎门","display":"虎门(humen)","type":3},{"key":"合肥","display":"合肥(hefei)","type":3},{"key":"海口","display":"海口(haikou)","type":3},{"key":"惠环","display":"惠环(huihuan)","type":3},{"key":"怀化","display":"怀化(huaihua)","type":3},{"key":"邯郸","display":"邯郸(handan)","type":3}],"userInput":"h"},
        i: {"result":[],"userInput":"i"},
        j: {"result":[{"key":"金华","display":"金华(jinhua)","type":3},{"key":"济南","display":"济南(jinan)","type":3},{"key":"九江","display":"九江(jiujiang)","type":3},{"key":"吉林","display":"吉林(jilin)","type":3},{"key":"吉安","display":"吉安(jian)","type":3},{"key":"金昌","display":"金昌(jinchang)","type":3},{"key":"晋江","display":"晋江(jinjiang)","type":3}],"userInput":"j"},
        k: {"result":[{"key":"昆明南","display":"昆明南(kunmingnan)","type":3},{"key":"昆山南","display":"昆山南(kunshannan)","type":3},{"key":"昆明","display":"昆明(kunming)","type":3},{"key":"凯里南","display":"凯里南(kailinan)","type":3},{"key":"开封","display":"开封(kaifeng)","type":3},{"key":"开福寺","display":"开福寺(kaifusi)","type":3},{"key":"奎屯","display":"奎屯(kuitun)","type":3}],"userInput":"k"},
        l: {"result":[{"key":"六安","display":"六安(luan)","type":3},{"key":"寮步","display":"寮步(liaobu)","type":3},{"key":"龙丰","display":"龙丰(longfeng)","type":3},{"key":"陆丰","display":"陆丰(lufeng)","type":3},{"key":"聊城","display":"聊城(liaocheng)","type":3},{"key":"龙川","display":"龙川(longchuan)","type":3},{"key":"娄底","display":"娄底(loudi)","type":3}],"userInput":"l"},
        m: {"result":[{"key":"绵阳","display":"绵阳(mianyang)","type":3},{"key":"茂名","display":"茂名(maoming)","type":3},{"key":"美兰","display":"美兰(meilan)","type":3},{"key":"眉山东","display":"眉山东(meishandong)","type":3},{"key":"麻城","display":"麻城(macheng)","type":3},{"key":"暮云","display":"暮云(muyun)","type":3},{"key":"弥勒","display":"弥勒(mile)","type":3}],"userInput":"m"},
        n: {"result":[{"key":"南京","display":"南京(nanjing)","type":3},{"key":"南宁东","display":"南宁东(nanningdong)","type":3},{"key":"宁波","display":"宁波(ningbo)","type":3},{"key":"南昌","display":"南昌(nanchang)","type":3},{"key":"南宁","display":"南宁(nanning)","type":3},{"key":"南平市","display":"南平市(nanpingshi)","type":3},{"key":"宁德","display":"宁德(ningde)","type":3}],"userInput":"n"},
        o: {"result":[],"userInput":"o"},
        p: {"result":[{"key":"莆田","display":"莆田(putian)","type":3},{"key":"萍乡北","display":"萍乡北(pingxiangbei)","type":3},{"key":"平湖","display":"平湖(pinghu)","type":3},{"key":"普宁","display":"普宁(puning)","type":3},{"key":"平南南","display":"平南南(pingnannan)","type":3},{"key":"萍乡","display":"萍乡(pingxiang)","type":3},{"key":"平阳","display":"平阳(pingyang)","type":3}],"userInput":"p"},
        q: {"result":[{"key":"泉州","display":"泉州(quanzhou)","type":3},{"key":"衢州","display":"衢州(quzhou)","type":3},{"key":"青岛","display":"青岛(qingdao)","type":3},{"key":"全椒","display":"全椒(quanjiao)","type":3},{"key":"潜江","display":"潜江(qianjiang)","type":3},{"key":"清河","display":"清河(qinghe)","type":3},{"key":"曲靖","display":"曲靖(qujing)","type":3}],"userInput":"q"},
        r: {"result":[{"key":"日照西","display":"日照西(rizhaoxi)","type":3},{"key":"容桂","display":"容桂(ronggui)","type":3},{"key":"瑞安","display":"瑞安(ruian)","type":3},{"key":"饶平","display":"饶平(raoping)","type":3},{"key":"荣成","display":"荣成(rongcheng)","type":3},{"key":"任丘","display":"任丘(renqiu)","type":3},{"key":"瑞金","display":"瑞金(ruijin)","type":3}],"userInput":"r"},
        s: {"result":[{"key":"宋","display":"宋(song)","type":3},{"key":"上饶","display":"上饶(shangrao)","type":3},{"key":"上海","display":"上海(shanghai)","type":3},{"key":"商丘","display":"商丘(shangqiu)","type":3},{"key":"韶关","display":"韶关(shaoguan)","type":3},{"key":"四平","display":"四平(siping)","type":3},{"key":"遂宁","display":"遂宁(suining)","type":3}],"userInput":"s"},
        t: {"result":[{"key":"天津","display":"天津(tianjin)","type":3},{"key":"唐山","display":"唐山(tangshan)","type":3},{"key":"台州","display":"台州(taizhou)","type":3},{"key":"太原","display":"太原(taiyuan)","type":3},{"key":"铜陵","display":"铜陵(tongling)","type":3},{"key":"泰安","display":"泰安(taian)","type":3},{"key":"泰山","display":"泰山(taishan)","type":3}],"userInput":"t"},
        u: {"result":[],"userInput":"u"},
        v: {"result":[],"userInput":"v"},
        w: {"result":[{"key":"无锡","display":"无锡(wuxi)","type":3},{"key":"武汉","display":"武汉(wuhan)","type":3},{"key":"武昌","display":"武昌(wuchang)","type":3},{"key":"潍坊","display":"潍坊(weifang)","type":3},{"key":"芜湖","display":"芜湖(wuhu)","type":3},{"key":"武威","display":"武威(wuwei)","type":3},{"key":"威海","display":"威海(weihai)","type":3}],"userInput":"w"},
        x: {"result":[{"key":"西安","display":"西安(xian)","type":3},{"key":"厦门","display":"厦门(xiamen)","type":3},{"key":"小榄","display":"小榄(xiaolan)","type":3},{"key":"先锋","display":"先锋(xianfeng)","type":3},{"key":"新会","display":"新会(xinhui)","type":3},{"key":"犀浦","display":"犀浦(xipu)","type":3},{"key":"西宁","display":"西宁(xining)","type":3}],"userInput":"x"},
        y: {"result":[{"key":"宜春","display":"宜春(yichun)","type":3},{"key":"阳江","display":"阳江(yangjiang)","type":3},{"key":"银川","display":"银川(yinchuan)","type":3},{"key":"玉林","display":"玉林(yulin)","type":3},{"key":"盐城","display":"盐城(yancheng)","type":3},{"key":"延安","display":"延安(yanan)","type":3},{"key":"余杭","display":"余杭(yuhang)","type":3}],"userInput":"y"},
        z: {"result":[{"key":"郑州","display":"郑州(zhengzhou)","type":3},{"key":"镇江","display":"镇江(zhenjiang)","type":3},{"key":"淄博","display":"淄博(zibo)","type":3},{"key":"漳州","display":"漳州(zhangzhou)","type":3},{"key":"珠海","display":"珠海(zhuhai)","type":3},{"key":"诸暨","display":"诸暨(zhuji)","type":3},{"key":"仲恺","display":"仲恺(zhongkai)","type":3}],"userInput":"z"},
    };
    const {pinyin, city} = req.query;
    let responseData = [];
    if (!pinyin && !city) {
        Object.keys(data).forEach((key) => {
            data[key].result.forEach((item) => {
                responseData.push(item)
            })
        });
        res.send({
            success: true,
            data
        })
    } else {
        Object.keys(data).forEach((key) => {
            data[key].result.forEach((item) => {
                if (item.display.indexOf(pinyin) > -1 || item.key.indexOf(key) > -1) {
                    responseData.push(item)
                }
            })
        });
        res.send({
            success: true,
            data: responseData
        })
    }
});
router.get('/search', (req, res) => {
    const {initial} = req.query;
    res.header("Access-Control-Allow-Origin", "*");
    const data = {
        a: {
            "result": [
                {"key": "安阳东", "display": "安阳东(anyangdong)", "type": 3}, {
                    "key": "安康",
                    "display": "安康(ankang)",
                    "type": 3
                }, {"key": "安庆", "display": "安庆(anqing)", "type": 3}, {
                    "key": "鞍山西",
                    "display": "鞍山西(anshanxi)",
                    "type": 3
                }, {"key": "鞍山", "display": "鞍山(anshan)", "type": 3}, {
                    "key": "安顺西",
                    "display": "安顺西(anshunxi)",
                    "type": 3
                }, {"key": "安达", "display": "安达(anda)", "type": 3}
            ],
            "userInput": "a"
        },
        b: {"result":[{"key":"北滘","display":"北滘(beijiao)","type":3},{"key":"北京","display":"北京(beijing)","type":3},{"key":"蚌埠南","display":"蚌埠南(bengbunan)","type":3},{"key":"保定东","display":"保定东(baodingdong)","type":3},{"key":"蚌埠","display":"蚌埠(bengbu)","type":3},{"key":"包头","display":"包头(baotou)","type":3},{"key":"保定","display":"保定(baoding)","type":3}],"userInput":"b"},
        c: {"result":[{"key":"长沙","display":"长沙(changsha)","type":3},{"key":"长春","display":"长春(changchun)","type":3},{"key":"潮汕","display":"潮汕(chaoshan)","type":3},{"key":"常平","display":"常平(changping)","type":3},{"key":"长流","display":"长流(changliu)","type":3},{"key":"城西","display":"城西(chengxi)","type":3},{"key":"常德","display":"常德(changde)","type":3}],"userInput":"c"},
        d: {"result":[{"key":"东莞","display":"东莞(dongguan)","type":3},{"key":"道滘","display":"道滘(daojiao)","type":3},{"key":"大连","display":"大连(dalian)","type":3},{"key":"丹东","display":"丹东(dandong)","type":3},{"key":"德清","display":"德清(deqing)","type":3},{"key":"大理","display":"大理(dali)","type":3},{"key":"洞井","display":"洞井(dongjing)","type":3}],"userInput":"d"},
        e: {"result":[{"key":"恩施","display":"恩施(enshi)","type":3},{"key":"鄂州","display":"鄂州(ezhou)","type":3},{"key":"恩平","display":"恩平(enping)","type":3},{"key":"阿房宫","display":"阿房宫(epanggong)","type":3},{"key":"峨眉山","display":"峨眉山(emeishan)","type":3},{"key":"鄂尔多斯","display":"鄂尔多斯(eerduosi)","type":3},{"key":"峨眉","display":"峨眉(emei)","type":3}],"userInput":"e"},
        f: {"result":[{"key":"福州","display":"福州(fuzhou)","type":3},{"key":"佛山西","display":"佛山西(foshanxi)","type":3},{"key":"阜阳","display":"阜阳(fuyang)","type":3},{"key":"福田","display":"福田(futian)","type":3},{"key":"抚州","display":"抚州(fuzhou)","type":3},{"key":"福清","display":"福清(fuqing)","type":3},{"key":"芙蓉南","display":"芙蓉南(furongnan)","type":3}],"userInput":"f"},
        g: {"result":[{"key":"广州","display":"广州(guangzhou)","type":3},{"key":"广元","display":"广元(guangyuan)","type":3},{"key":"贵港","display":"贵港(guigang)","type":3},{"key":"赣州","display":"赣州(ganzhou)","type":3},{"key":"贵阳","display":"贵阳(guiyang)","type":3},{"key":"桂平","display":"桂平(guiping)","type":3},{"key":"高密","display":"高密(gaomi)","type":3}],"userInput":"g"},
        h: {"result":[{"key":"汉口","display":"汉口(hankou)","type":3},{"key":"虎门","display":"虎门(humen)","type":3},{"key":"合肥","display":"合肥(hefei)","type":3},{"key":"海口","display":"海口(haikou)","type":3},{"key":"惠环","display":"惠环(huihuan)","type":3},{"key":"怀化","display":"怀化(huaihua)","type":3},{"key":"邯郸","display":"邯郸(handan)","type":3}],"userInput":"h"},
        i: {"result":[],"userInput":"i"},
        j: {"result":[{"key":"金华","display":"金华(jinhua)","type":3},{"key":"济南","display":"济南(jinan)","type":3},{"key":"九江","display":"九江(jiujiang)","type":3},{"key":"吉林","display":"吉林(jilin)","type":3},{"key":"吉安","display":"吉安(jian)","type":3},{"key":"金昌","display":"金昌(jinchang)","type":3},{"key":"晋江","display":"晋江(jinjiang)","type":3}],"userInput":"j"},
        k: {"result":[{"key":"昆明南","display":"昆明南(kunmingnan)","type":3},{"key":"昆山南","display":"昆山南(kunshannan)","type":3},{"key":"昆明","display":"昆明(kunming)","type":3},{"key":"凯里南","display":"凯里南(kailinan)","type":3},{"key":"开封","display":"开封(kaifeng)","type":3},{"key":"开福寺","display":"开福寺(kaifusi)","type":3},{"key":"奎屯","display":"奎屯(kuitun)","type":3}],"userInput":"k"},
        l: {"result":[{"key":"六安","display":"六安(luan)","type":3},{"key":"寮步","display":"寮步(liaobu)","type":3},{"key":"龙丰","display":"龙丰(longfeng)","type":3},{"key":"陆丰","display":"陆丰(lufeng)","type":3},{"key":"聊城","display":"聊城(liaocheng)","type":3},{"key":"龙川","display":"龙川(longchuan)","type":3},{"key":"娄底","display":"娄底(loudi)","type":3}],"userInput":"l"},
        m: {"result":[{"key":"绵阳","display":"绵阳(mianyang)","type":3},{"key":"茂名","display":"茂名(maoming)","type":3},{"key":"美兰","display":"美兰(meilan)","type":3},{"key":"眉山东","display":"眉山东(meishandong)","type":3},{"key":"麻城","display":"麻城(macheng)","type":3},{"key":"暮云","display":"暮云(muyun)","type":3},{"key":"弥勒","display":"弥勒(mile)","type":3}],"userInput":"m"},
        n: {"result":[{"key":"南京","display":"南京(nanjing)","type":3},{"key":"南宁东","display":"南宁东(nanningdong)","type":3},{"key":"宁波","display":"宁波(ningbo)","type":3},{"key":"南昌","display":"南昌(nanchang)","type":3},{"key":"南宁","display":"南宁(nanning)","type":3},{"key":"南平市","display":"南平市(nanpingshi)","type":3},{"key":"宁德","display":"宁德(ningde)","type":3}],"userInput":"n"},
        o: {"result":[],"userInput":"o"},
        p: {"result":[{"key":"莆田","display":"莆田(putian)","type":3},{"key":"萍乡北","display":"萍乡北(pingxiangbei)","type":3},{"key":"平湖","display":"平湖(pinghu)","type":3},{"key":"普宁","display":"普宁(puning)","type":3},{"key":"平南南","display":"平南南(pingnannan)","type":3},{"key":"萍乡","display":"萍乡(pingxiang)","type":3},{"key":"平阳","display":"平阳(pingyang)","type":3}],"userInput":"p"},
        q: {"result":[{"key":"泉州","display":"泉州(quanzhou)","type":3},{"key":"衢州","display":"衢州(quzhou)","type":3},{"key":"青岛","display":"青岛(qingdao)","type":3},{"key":"全椒","display":"全椒(quanjiao)","type":3},{"key":"潜江","display":"潜江(qianjiang)","type":3},{"key":"清河","display":"清河(qinghe)","type":3},{"key":"曲靖","display":"曲靖(qujing)","type":3}],"userInput":"q"},
        r: {"result":[{"key":"日照西","display":"日照西(rizhaoxi)","type":3},{"key":"容桂","display":"容桂(ronggui)","type":3},{"key":"瑞安","display":"瑞安(ruian)","type":3},{"key":"饶平","display":"饶平(raoping)","type":3},{"key":"荣成","display":"荣成(rongcheng)","type":3},{"key":"任丘","display":"任丘(renqiu)","type":3},{"key":"瑞金","display":"瑞金(ruijin)","type":3}],"userInput":"r"},
        s: {"result":[{"key":"宋","display":"宋(song)","type":3},{"key":"上饶","display":"上饶(shangrao)","type":3},{"key":"上海","display":"上海(shanghai)","type":3},{"key":"商丘","display":"商丘(shangqiu)","type":3},{"key":"韶关","display":"韶关(shaoguan)","type":3},{"key":"四平","display":"四平(siping)","type":3},{"key":"遂宁","display":"遂宁(suining)","type":3}],"userInput":"s"},
        t: {"result":[{"key":"天津","display":"天津(tianjin)","type":3},{"key":"唐山","display":"唐山(tangshan)","type":3},{"key":"台州","display":"台州(taizhou)","type":3},{"key":"太原","display":"太原(taiyuan)","type":3},{"key":"铜陵","display":"铜陵(tongling)","type":3},{"key":"泰安","display":"泰安(taian)","type":3},{"key":"泰山","display":"泰山(taishan)","type":3}],"userInput":"t"},
        u: {"result":[],"userInput":"u"},
        v: {"result":[],"userInput":"v"},
        w: {"result":[{"key":"无锡","display":"无锡(wuxi)","type":3},{"key":"武汉","display":"武汉(wuhan)","type":3},{"key":"武昌","display":"武昌(wuchang)","type":3},{"key":"潍坊","display":"潍坊(weifang)","type":3},{"key":"芜湖","display":"芜湖(wuhu)","type":3},{"key":"武威","display":"武威(wuwei)","type":3},{"key":"威海","display":"威海(weihai)","type":3}],"userInput":"w"},
        x: {"result":[{"key":"西安","display":"西安(xian)","type":3},{"key":"厦门","display":"厦门(xiamen)","type":3},{"key":"小榄","display":"小榄(xiaolan)","type":3},{"key":"先锋","display":"先锋(xianfeng)","type":3},{"key":"新会","display":"新会(xinhui)","type":3},{"key":"犀浦","display":"犀浦(xipu)","type":3},{"key":"西宁","display":"西宁(xining)","type":3}],"userInput":"x"},
        y: {"result":[{"key":"宜春","display":"宜春(yichun)","type":3},{"key":"阳江","display":"阳江(yangjiang)","type":3},{"key":"银川","display":"银川(yinchuan)","type":3},{"key":"玉林","display":"玉林(yulin)","type":3},{"key":"盐城","display":"盐城(yancheng)","type":3},{"key":"延安","display":"延安(yanan)","type":3},{"key":"余杭","display":"余杭(yuhang)","type":3}],"userInput":"y"},
        z: {"result":[{"key":"郑州","display":"郑州(zhengzhou)","type":3},{"key":"镇江","display":"镇江(zhenjiang)","type":3},{"key":"淄博","display":"淄博(zibo)","type":3},{"key":"漳州","display":"漳州(zhangzhou)","type":3},{"key":"珠海","display":"珠海(zhuhai)","type":3},{"key":"诸暨","display":"诸暨(zhuji)","type":3},{"key":"仲恺","display":"仲恺(zhongkai)","type":3}],"userInput":"z"},
    };
    const reg = /[\u4e00-\u9fa5]/g;
    const isChinese = reg.test(initial);
    if (!isChinese) {
        const firstChart = initial.substring(0, 1).toLowerCase();
        const dataObj = data[firstChart];
        const result = dataObj.result.filter((item) => item.display.indexOf(initial) >= 0);
        res.send({
            success: true,
            data: result
        })
    } else {
        const result = [];
        Object.keys(data).forEach(key => {
            data[key].result.forEach(item => {
                if (item.key.indexOf(initial) >= 0) {
                    result.push(item)
                }
            })
        });
        res.send({
            success: true,
            data: result
        })
    }
});
module.exports = router;