const router = require('express').Router();

router.get('/list', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    const {ticketTypes, priorityTypes,} = req.query;
    res.send(
        [{
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }, {
            detail: {
                from: '北京',
                to: '上海',
                departTimeStr: '07:15',
                arriveTimeStr: '11:47',
                arriveDate: 1590041852149,
                durationStr: '4小时32分'
            },
            candidates: [{
                type: '二等座',
                priceMsg: '443.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '一等座',
                priceMsg: '748.5',
                ticketsLeft: '有票',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }, {
                type: '商务座',
                priceMsg: '1403.5',
                ticketsLeft: '5张',
                channels: [{
                    name: '快速预订',
                    desc: '含40元出行保障 快速出票 迅捷无忧'
                }, {
                    name: '普通预订',
                    desc: '出票较慢，高峰期需要排队'
                }]
            }]
        }]
    )
});

module.exports = router;