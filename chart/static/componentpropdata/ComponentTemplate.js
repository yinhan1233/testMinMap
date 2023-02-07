(function (arg) {

  let self = arg

  self.ComponentTemplate = {
    canvas: {
      style: {
        backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,1))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        height: "1080px",
        width: "1920px",
        position: "relative",
      },
      heartbeat: 60,
      restAPI: ""
    },
    layouts: [],

    /**
     * 图层
     */
    layout: {
      id: "",
      name: "图层",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isComponentOpen: false,
      isMoving: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "500px",
        backgroundImage: "linear-gradient(to bottom, rgba(88, 183, 255, 0.5), rgba(88, 183, 255, 0.5))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: []
    },

    /**
     * 单行文本
     */
    uSingleText: {
      id: "",
      name: "单行文本",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "208px",
        height: "80px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uSingleText",
          name: "单行文本",
          type: "uSingleText",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "文本内容",
              mapKey: "value",
              formatter: "",
              itemStyle: ""
            }
            ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: {value: "单行文本"},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              textAlign: "center",
              fontStyle: {
                fontSize: "20px",
                fontAlign: "center",
                fontFamily: "common"
              },
              fontSize: "20px",
              color: "rgba(113,252,244,1)"
            }
          },
        }
      ]
    },

    /**
     * 新数字翻牌器
     */
    uCountDown: {
      id: "",
      name: "数字翻牌器",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "660px",
        height: "80px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uCountDown",
          name: "数字翻牌器",
          type: "uCountDown",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "开始值",
              mapKey: "value",
              formatter: "",
              itemStyle: ""
            },
            {
              name: "结束值",
              mapKey: "maxValue",
              formatter: "",
              itemStyle: ""
            }
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: {value: "12189857",maxValue: "13130200"},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              splitUnit: true,
              width: "50px",
              height: "70px",
              borderRadius: "8px",
              topColor: "linear-gradient(to bottom, rgba(51, 51, 51, 1), rgba(51, 51, 51, 1))",
              bottomColor: "linear-gradient(to bottom, rgba(51, 51, 51, 1), rgba(51, 51, 51, 1))",
              numberStyle: {
                fontSize: "50px",
                fontAlign: "center",
                fontFamily: "common"
              },
              numberFontWeight: {
                value: 'bold',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              numberFontColor: "rgba(255, 255, 255, 1)",

              characterStyle: {
                fontSize: "30px",
                fontAlign: "center",
                fontFamily: "common"
              },
              characterFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              characterFontColor: "rgba(255, 255, 255, 1)",
              marginLeft: "10px",
              suffixCharacter: "元"
            }
          },
        }
      ]
    },

    /**
     * 组件控制器
     */
    uComponentControl: {
      id: "uComponentControl",
      name: "组件控制器",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100px",
        height: "100px",
        backgroundImage: "linear-gradient(to bottom, rgba(88, 183, 255, 0.5), rgba(88, 183, 255, 0.5))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uComponentControl",
          name: "组件控制器",
          type: "uComponentControl",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {status:0},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              uEventConfig:{
                clickEventList:[],
                alternateEventList:[],
                onTimeEventList:[],
                dataDriverEventList: []
              }
            }
          },
        }
      ]
    },

    /**
     * 文本列表
     */
    uTextList: {
      id: "",
      name: "文本列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "800px",
        height: "400px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uTextList",
          name: "文本列表",
          type: "uTextList",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              title: ["任务","耗时","状态"],
              value: [
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","失败"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","失败"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","成功"],
                ["XXX任务","500ms","成功"]
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              titleAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "50px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              titleBorderColor: "rgba(255, 255, 255, 0)",
              itemAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              itemHeight: "40px",
              itemOddFontSize: "16px",
              itemEvenFontSize: "16px",
              itemOddFontColor: "rgba(255, 255, 255, 1)",
              itemEvenFontColor: "rgba(255, 255, 255, 1)",
              itemOddFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemEvenFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemOddFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemEvenFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemOddBackgroundColor: "rgba(45, 135, 232, 0.37)",
              itemEvenBackgroundColor: "rgba(45, 135, 232, 0.22)",
              itemBorderColor: "rgba(193, 193, 193, 0.83)",
              itemBorderStyle: {
                value: 'dashed',
                options: [
                  {
                    value: 'solid',
                    label: '实线'
                  },
                  {
                    value: 'dashed',
                    label: '虚线'
                  },
                  {
                    value: 'dotted',
                    label: '点线'
                  }
                ]
              },
              itemColumnWidth: "60%,20%,20%"
            }
          },
        }
      ]
    },

    /**
     * 文本列表
     */
    uTextListStatus: {
      id: "",
      name: "状态文本列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "800px",
        height: "400px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uTextListStatus",
          name: "状态文本列表",
          type: "uTextListStatus",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              title: ["任务","耗时","耗时状态"],
              value: [
                {
                  value:["XXX任务","500ms","10ms"],
                  status: "1"
                },
                {
                  value:["XXX任务","500ms","20ms"],
                  status: "2"
                },
                {
                  value:["XXX任务","500ms","30ms"],
                  status: "2"
                },
                {
                  value:["XXX任务","500ms","40ms"],
                  status: "1"
                },
                {
                  value:["XXX任务","500ms","10ms"],
                  status: "1"
                },
                {
                  value:["XXX任务","500ms","20ms"],
                  status: "2"
                },
                {
                  value:["XXX任务","500ms","30ms"],
                  status: "2"
                },
                {
                  value:["XXX任务","500ms","40ms"],
                  status: "1"
                }
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              titleAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "50px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              titleBorderColor: "rgba(255, 255, 255, 0)",
              itemAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              itemHeight: "50px",
              itemOddFontSize: "16px",
              itemEvenFontSize: "16px",
              itemOddFontColor: "rgba(255, 255, 255, 1)",
              itemEvenFontColor: "rgba(255, 255, 255, 1)",
              itemOddFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemEvenFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemOddFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemEvenFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemOddBackgroundColor: "rgba(45, 135, 232, 0.37)",
              itemEvenBackgroundColor: "rgba(45, 135, 232, 0.22)",
              itemBorderColor: "rgba(193, 193, 193, 0.83)",
              itemBorderStyle: {
                value: 'dashed',
                options: [
                  {
                    value: 'solid',
                    label: '实线'
                  },
                  {
                    value: 'dashed',
                    label: '虚线'
                  },
                  {
                    value: 'dotted',
                    label: '点线'
                  }
                ]
              },
              itemColumnWidth: "60%,20%,20%",
              statusPosition: {
                value: 'lastcolumnsfront',
                options: [
                  {
                    value: 'front',
                    label: '行首'
                  },
                  {
                    value: 'end',
                    label: '行尾'
                  },
                  {
                    value: 'lastcolumnsfront',
                    label: '最后一列前'
                  },
                  {
                    value: 'lastcolumnsend',
                    label: '最后一列后'
                  }
                ]
              },
              statusPadding: "10px",
              status1Icon: "↑",
              status1Color: "rgba(66, 248, 66, 1)",
              status2Icon: "↓",
              status2Color: "rgba(34, 139, 255, 1)",
              status3Icon: "•",
              status3Color: "rgba(248, 212, 66, 1)",
              status4Icon: "•",
              status4Color: "rgba(243, 101, 35, 1)",
              status5Icon: "•",
              status5Color: "rgba(248, 66, 66, 1)",
            }
          },
        }
      ]
    },

    /**
     * 高级文本列表
     */
    uTextListAdvance: {
      id: "",
      name: "高级文本列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "800px",
        height: "400px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uTextListAdvance",
          name: "高级文本列表",
          type: "uTextListAdvance",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              title: ["","机构","单位存款余额","新增","个人存款余额","新增"],
              value: [
                [{
                  value: "1",
                  status: "0",
                  },
                  {
                    value: "南京分行",
                    status: "1",
                  },
                  {
                    value: "100.2",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "50.2",
                    unit: "万",
                    preicon: true,
                    status: "1",
                  },
                  {
                    value: "2.2",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "50.2",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                ],
                [{
                  value: "2",
                  status: "0",
                },
                  {
                    value: "北京分行",
                    status: "0",
                  },
                  {
                    value: "102.5",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "55.5",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                  {
                    value: "4.2",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "20.2",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                ],
                [{
                  value: "3",
                  status: "0",
                },
                  {
                    value: "上海分行",
                    status: "0",
                  },
                  {
                    value: "240.5",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "135.7",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                  {
                    value: "4.2",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "20.2",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                ],
                [{
                  value: "4",
                  status: "0",
                },
                  {
                    value: "杭州分行",
                    status: "0",
                  },
                  {
                    value: "140.5",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "35.7",
                    unit: "万",
                    preicon: true,
                    status: "1",
                  },
                  {
                    value: "1.4",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "0.2",
                    unit: "万",
                    preicon: true,
                    status: "1",
                  },
                ],
                [{
                  value: "5",
                  status: "0",
                },
                  {
                    value: "合肥分行",
                    status: "0",
                  },
                  {
                    value: "130.8",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "45.8",
                    unit: "万",
                    preicon: true,
                    status: "1",
                  },
                  {
                    value: "5.4",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "1.4",
                    unit: "万",
                    preicon: true,
                    status: "1",
                  },
                ],
                [{
                  value: "6",
                  status: "0",
                },
                  {
                    value: "银川分行",
                    status: "0",
                  },
                  {
                    value: "77.6",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "21.8",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                  {
                    value: "15.2",
                    unit: "万",
                    status: "0",
                  },
                  {
                    value: "8.4",
                    unit: "万",
                    preicon: true,
                    status: "2",
                  },
                ]
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              alternatePlay: false,
              lifeTime: "10S",
              pageSize: 5,
              titleAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "50px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              titleBorderColor: "rgba(255, 255, 255, 0)",
              itemAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              itemHeight: "50px",
              itemOddFontSize: "16px",
              itemEvenFontSize: "16px",
              itemOddFontColor: "rgba(255, 255, 255, 1)",
              itemEvenFontColor: "rgba(255, 255, 255, 1)",
              itemOddFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemEvenFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemOddFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemEvenFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemOddBackgroundColor: "rgba(45, 135, 232, 0.37)",
              itemEvenBackgroundColor: "rgba(45, 135, 232, 0.22)",
              itemBorderColor: "rgba(193, 193, 193, 0.83)",
              itemBorderStyle: {
                value: 'dashed',
                options: [
                  {
                    value: 'solid',
                    label: '实线'
                  },
                  {
                    value: 'dashed',
                    label: '虚线'
                  },
                  {
                    value: 'dotted',
                    label: '点线'
                  }
                ]
              },
              itemColumnWidth: "5%,20%,20%,20%,20%,15%",
              statusPadding: "10px",
              status1Icon: "▲",
              status1Color: "rgba(66, 248, 66, 1)",
              status1UnitColor: "rgba(255, 255, 255, 1)",
              status2Icon: "▼",
              status2Color: "rgba(34, 139, 255, 1)",
              status2UnitColor: "rgba(255, 255, 255, 1)",
              status3Icon: "•",
              status3Color: "rgba(248, 212, 66, 1)",
              status3UnitColor: "rgba(255, 255, 255, 1)",
              status4Icon: "•",
              status4Color: "rgba(243, 101, 35, 1)",
              status4UnitColor: "rgba(255, 255, 255, 1)",
              status5Icon: "•",
              status5Color: "rgba(248, 66, 66, 1)",
              status5UnitColor: "rgba(255, 255, 255, 1)",
            }
          },
        }
      ]
    },

    /**
     * 高级列表
     */
    uListAdvance: {
      id: "",
      name: "高级列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "800px",
        height: "400px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uListAdvance",
          name: "高级列表",
          type: "uListAdvance",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          isCellEnable: true,
          datasourceMap:[
            {
              name: "",
              mapKey: "",
              formatter: "function(){return this.rowNumber}",
              itemStyle: ""
            },
            {
              name: "机构",
              mapKey: "orgnization",
              formatter: "function(){return this.Obj.orgnization}",
              itemStyle: ""
            },
            {
              name: "单位存款余额",
              mapKey: "corpbalance",
              formatter: "function(){\n" +
              "    if(parseInt(this.Obj.corpbalance) > 0){\n" +
              "        let value=0;\n" +
              "        let rawValue = parseFloat(this.Obj.corpbalance).toFixed(2)\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return value\n" +
              "    }else{\n" +
              "        let value=0;\n" +
              "        let rawValue = Math.abs(parseFloat(this.Obj.corpbalance).toFixed(2))\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return value\n" +
              "    }\n" +
              "}",
              itemStyle: ""
            },
            {
              name: "新增",
              mapKey: "corpbalanceup",
              formatter: "function(){\n" +
              "    if(parseInt(this.Obj.corpbalanceup) > 0){\n" +
              "        let tag='▲';\n" +
              "        let value=0;\n" +
              "        let rawValue = parseFloat(this.Obj.corpbalanceup).toFixed(2)\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return tag+value\n" +
              "    }else{\n" +
              "        let tag='▼';\n" +
              "        let value=0;\n" +
              "        let rawValue = Math.abs(parseFloat(this.Obj.corpbalanceup).toFixed(2))\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return tag+value\n" +
              "    }\n" +
              "}",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        color:'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(parseInt(this.Obj.corpbalanceup) > 0){\n" +
              "        styleObj.color = 'rgba(255, 0, 0, 1)'\n" +
              "    }else{\n" +
              "        styleObj.color = 'rgba(0, 255, 0, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "个人存款余额",
              mapKey: "personalbalance",
              formatter: "function(){\n" +
              "    if(parseInt(this.Obj.personalbalance) > 0){\n" +
              "        let value=0;\n" +
              "        let rawValue = parseFloat(this.Obj.personalbalance).toFixed(2)\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return value\n" +
              "    }else{\n" +
              "        let value=0;\n" +
              "        let rawValue = Math.abs(parseFloat(this.Obj.personalbalance).toFixed(2))\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return value\n" +
              "    }\n" +
              "}",
              itemStyle: ""
            },
            {
              name: "新增",
              mapKey: "personalbalanceup",
              formatter: "function(){\n" +
              "    if(parseInt(this.Obj.personalbalanceup) > 0){\n" +
              "        let tag='▲';\n" +
              "        let value=0;\n" +
              "        let rawValue = parseFloat(this.Obj.personalbalanceup).toFixed(2)\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return tag+value\n" +
              "    }else{\n" +
              "        let tag='▼';\n" +
              "        let value=0;\n" +
              "        let rawValue = Math.abs(parseFloat(this.Obj.personalbalanceup).toFixed(2))\n" +
              "        if(rawValue > 10000){\n" +
              "            value=parseFloat(rawValue/10000).toFixed(2)+\"万\"\n" +
              "        }else{\n" +
              "            value=rawValue\n" +
              "        }\n" +
              "        return tag+value\n" +
              "    }\n" +
              "}",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        color:'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(parseInt(this.Obj.personalbalanceup) > 0){\n" +
              "        styleObj.color = 'rgba(255, 0, 0, 1)'\n" +
              "    }else{\n" +
              "        styleObj.color = 'rgba(0, 255, 0, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            }
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: [
              {orgnization:"南京分行",corpbalance:1000002,corpbalanceup:500002,personalbalance:22002,personalbalanceup:-502000},
              {orgnization:"北京分行",corpbalance:1000025,corpbalanceup:-550050,personalbalance:42000,personalbalanceup:-202000},
              {orgnization:"上海分行",corpbalance:2400000,corpbalanceup:-1003000,personalbalance:42000,personalbalanceup:-202000},
              {orgnization:"杭州分行",corpbalance:1405000,corpbalanceup:3507000,personalbalance:14000,personalbalanceup:2000},
              {orgnization:"合肥分行",corpbalance:1308000,corpbalanceup:4508000,personalbalance:54000,personalbalanceup:14000},
              {orgnization:"银川分行",corpbalance:7706000,corpbalanceup:-2108000,personalbalance:1502000,personalbalanceup:84000}
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              alternatePlay: false,
              lifeTime: "10S",
              pageSize: 5,
              titleAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "50px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              titleBorderColor: "rgba(255, 255, 255, 0)",
              itemAlign: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              itemHeight: "50px",
              itemOddFontSize: "16px",
              itemEvenFontSize: "16px",
              itemOddFontColor: "rgba(255, 255, 255, 1)",
              itemEvenFontColor: "rgba(255, 255, 255, 1)",
              itemOddFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemEvenFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              itemOddFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemEvenFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              itemOddBackgroundColor: "rgba(45, 135, 232, 0.37)",
              itemEvenBackgroundColor: "rgba(45, 135, 232, 0.22)",
              itemBorderColor: "rgba(193, 193, 193, 0.83)",
              itemBorderStyle: {
                value: 'dashed',
                options: [
                  {
                    value: 'solid',
                    label: '实线'
                  },
                  {
                    value: 'dashed',
                    label: '虚线'
                  },
                  {
                    value: 'dotted',
                    label: '点线'
                  }
                ]
              },
              itemColumnWidth: "5%,20%,20%,20%,20%,15%",
              statusPadding: "10px",
            }
          },
        }
      ]
    },

    /**
     * 数值占比图
     */
    uValueProportion: {
      id: "",
      name: "数值占比图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "150px",
        height: "100px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uValueProportion",
          name: "数值占比图",
          type: "uValueProportion",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              title: "这是标题一",
              value: "70",
              progress: 0.7
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              listStyle: {
                value: '样式一',
                options: [
                  {
                    value: '样式一',
                    label: '样式一'
                  },
                  {
                    value: '样式二',
                    label: '样式二'
                  }
                ]
              },
              boxPadding: "10px",
              titleText: "这是标题",
              titleAlign: {
                value: 'right',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "40px",
              titlePadding: "0px",
              titleFontSize: "18px",
              titleFontColor: "rgba(169, 169, 169, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              valueAlign: {
                value: 'right',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              valueHeight: "50px",
              valueWidth: "",
              valueFontSize: "48px",
              valueFontColor: "rgba(213, 213, 213, 1)",
              valueFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              valueFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              valueBackgroundColor: "rgba(255, 255, 255, 0)",
              unitValue: "%",
              unitHeight: "40px",
              unitWidth: "",
              unitFontSize: "20px",
              unitFontColor: "rgba(213, 213, 213, 1)",
              unitFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              unitFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              unitBackgroundColor: "rgba(255, 255, 255, 0)",
              progressHeight: "3px",
              progressBarBackgroundColor: "rgba(144, 144, 144, 1)",
              progressColor: "rgba(0, 0, 255, 1)",
              isProgress: true,
              colorLinePosition: {
                value: 'left',
                options: [
                  {
                    value: 'left',
                    label: '左侧'
                  },
                  {
                    value: 'right',
                    label: '右侧'
                  }
                ]
              },
              colorLineWidth: "3px",
              colorLineColor: "rgba(32, 137, 222, 0.92)"
            }
          },
        }
      ]
    },

    /**
     * 进度列表
     */
    uProgressList: {
      id: "",
      name: "进度列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uProgressList",
          name: "进度列表",
          type: "uProgressList",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "标题",
              mapKey: "title",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        color:'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "进度条",
              mapKey: "progress",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundImage:'linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))'\n" +
              "    }\n" +
              "    let progress = this.Obj.progress\n" +
              "    if(progress>0&&progress<=0.2){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(66, 248, 66, 1), rgba(66, 248, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.2&&progress<=0.4){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(34, 139, 255, 1), rgba(34, 139, 255, 1))'\n" +
              "    }\n" +
              "    if(progress>0.4&&progress<=0.6){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 212, 66, 1), rgba(248, 212, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.6&&progress<=0.8){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(243, 101, 35, 1), rgba(243, 101, 35, 1))'\n" +
              "    }\n" +
              "    if(progress>0.8&&progress<=1){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 66, 66, 1), rgba(248, 66, 66, 1))'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "百分比文字",
              mapKey: "",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.progress\n" +
              "    return rawValue * 100 + \"%\"\n" +
              "}",
              itemStyle: ""
            }
          ],
          datasource: {
            type: "json",
            value: [
              {
                title: "这是标题一",
                value: "70",
                progress: 0.7,
                status: "1"
              },
              {
                title: "这是标题二",
                value: "50",
                progress: 0.5,
                status: "2"
              },
              {
                title: "这是标题三",
                value: "10",
                progress: 0.1,
                status: "3"
              },
              {
                title: "这是标题四",
                value: "25",
                progress: 0.25,
                status: "4"
              },
              {
                title: "这是标题五",
                value: "30",
                progress: 0.3,
                status: "5"
              },
              {
                title: "这是标题六",
                value: "90",
                progress: 0.9,
                status: "3"
              },
              {
                title: "这是标题七",
                value: "82",
                progress: 0.82,
                status: "1"
              },
              {
                title: "这是标题八",
                value: "34",
                progress: 0.34,
                status: "2"
              },
              {
                title: "这是标题九",
                value: "15",
                progress: 0.15,
                status: "3"
              },
              {
                title: "这是标题十",
                value: "35",
                progress: 0.35,
                status: "4"
              },
              {
                title: "这是标题X",
                value: "32",
                progress: 0.32,
                status: "5"
              },
              {
                title: "这是标题XX",
                value: "77",
                progress: 0.77,
                status: "3"
              }
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              titleText: "这是标题",
              alternatePlay: true,
              lifeTime: "10S",
              pageSize: 7,
              titleAlign: {
                value: 'right',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "40px",
              titleWidth: "120px",
              titlePadding: "10px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              progressHeight: "20px",
              progressWidth: "200px",
              progressRadius: "10px",
              progressBackgroundColor: "linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))",
              progressColor: "linear-gradient(to bottom, rgba(32, 137, 222, 0.92), rgba(32, 137, 222, 0.92))",
              progressPaddingTop: "10px",
              unitValue: "%",
              unitHeight: "40px",
              unitPadding: "15px",
              unitFontSize: "18px",
              unitFontColor: "rgba(255, 255, 255, 1)",
              unitFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              unitFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              unitBackgroundColor: "rgba(255, 255, 255, 0)",
            }
          },
        }
      ]
    },

    /**
     * 新进度列表
     */
    uProgressListNew: {
      id: "",
      name: "进度列表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uProgressListNew",
          name: "进度列表",
          type: "uProgressListNew",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "标题",
              mapKey: "title",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        color:'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "进度条",
              mapKey: "progress",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundImage:'linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))'\n" +
              "    }\n" +
              "    let progress = this.Obj.progress\n" +
              "    if(progress>0&&progress<=0.2){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(66, 248, 66, 1), rgba(66, 248, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.2&&progress<=0.4){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(34, 139, 255, 1), rgba(34, 139, 255, 1))'\n" +
              "    }\n" +
              "    if(progress>0.4&&progress<=0.6){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 212, 66, 1), rgba(248, 212, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.6&&progress<=0.8){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(243, 101, 35, 1), rgba(243, 101, 35, 1))'\n" +
              "    }\n" +
              "    if(progress>0.8&&progress<=1){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 66, 66, 1), rgba(248, 66, 66, 1))'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "百分比文字",
              mapKey: "",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.progress\n" +
              "    return rawValue * 100 + \"%\"\n" +
              "}",
              itemStyle: ""
            }
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: [
              {
                title: "这是标题一",
                value: "70",
                progress: 0.7,
                status: "1"
              },
              {
                title: "这是标题二",
                value: "50",
                progress: 0.5,
                status: "2"
              },
              {
                title: "这是标题三",
                value: "10",
                progress: 0.1,
                status: "3"
              },
              {
                title: "这是标题四",
                value: "25",
                progress: 0.25,
                status: "4"
              },
              {
                title: "这是标题五",
                value: "30",
                progress: 0.3,
                status: "5"
              },
              {
                title: "这是标题六",
                value: "90",
                progress: 0.9,
                status: "3"
              },
              {
                title: "这是标题七",
                value: "82",
                progress: 0.82,
                status: "1"
              },
              {
                title: "这是标题八",
                value: "34",
                progress: 0.34,
                status: "2"
              },
              {
                title: "这是标题九",
                value: "15",
                progress: 0.15,
                status: "3"
              },
              {
                title: "这是标题十",
                value: "35",
                progress: 0.35,
                status: "4"
              },
              {
                title: "这是标题X",
                value: "32",
                progress: 0.32,
                status: "5"
              },
              {
                title: "这是标题XX",
                value: "77",
                progress: 0.77,
                status: "3"
              }
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              titleText: "这是标题",
              alternatePlay: true,
              lifeTime: "10S",
              pageSize: 7,
              titleAlign: {
                value: 'right',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "40px",
              titleWidth: "120px",
              titlePadding: "10px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              progressHeight: "20px",
              progressWidth: "200px",
              progressRadius: "10px",
              progressBackgroundColor: "linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))",
              progressColor: "linear-gradient(to bottom, rgba(32, 137, 222, 0.92), rgba(32, 137, 222, 0.92))",
              progressPaddingTop: "10px",
              unitValue: "%",
              unitHeight: "40px",
              unitPadding: "15px",
              unitFontSize: "18px",
              unitFontColor: "rgba(255, 255, 255, 1)",
              unitFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              unitFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              unitBackgroundColor: "rgba(255, 255, 255, 0)",
            }
          },
        }
      ]
    },

    /**
     * 进度条
     */
    uProgressBar: {
      id: "",
      name: "进度条",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "420px",
        height: "50px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uProgressListNew",
          name: "进度列表",
          type: "uProgressListNew",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "标题",
              mapKey: "title",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        color:'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "进度条",
              mapKey: "progress",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundImage:'linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))'\n" +
              "    }\n" +
              "    let progress = this.Obj.progress\n" +
              "    if(progress>0&&progress<=0.2){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(66, 248, 66, 1), rgba(66, 248, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.2&&progress<=0.4){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(34, 139, 255, 1), rgba(34, 139, 255, 1))'\n" +
              "    }\n" +
              "    if(progress>0.4&&progress<=0.6){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 212, 66, 1), rgba(248, 212, 66, 1))'\n" +
              "    }\n" +
              "    if(progress>0.6&&progress<=0.8){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(243, 101, 35, 1), rgba(243, 101, 35, 1))'\n" +
              "    }\n" +
              "    if(progress>0.8&&progress<=1){\n" +
              "        styleObj.backgroundImage = 'linear-gradient(to bottom, rgba(248, 66, 66, 1), rgba(248, 66, 66, 1))'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "百分比文字",
              mapKey: "",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.progress\n" +
              "    return rawValue * 100 + \"%\"\n" +
              "}",
              itemStyle: ""
            }
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: [
              {
                title: "执行进度",
                value: "70",
                progress: 0.7,
              }
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          componentStyle: {
            uComponentConfig: {
              titleText: "这是标题",
              alternatePlay: false,
              lifeTime: "10S",
              pageSize: 5,
              titleAlign: {
                value: 'right',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              titleHeight: "40px",
              titleWidth: "120px",
              titlePadding: "10px",
              titleFontSize: "18px",
              titleFontColor: "rgba(255, 255, 255, 1)",
              titleFontStyle: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              titleFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              titleBackgroundColor: "rgba(255, 255, 255, 0)",
              progressHeight: "20px",
              progressWidth: "200px",
              progressRadius: "0px",
              progressBackgroundColor: "linear-gradient(to bottom, rgba(203, 203, 203, 0.93), rgba(203, 203, 203, 0.93))",
              progressColor: "linear-gradient(to bottom, rgba(32, 137, 222, 0.92), rgba(32, 137, 222, 0.92))",
              progressPaddingTop: "10px",
              unitValue: "%",
              unitHeight: "40px",
              unitPadding: "15px",
              unitFontSize: "18px",
              unitFontColor: "rgba(255, 255, 255, 1)",
              unitFontStyle: {
                value: 'italic',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'italic',
                    label: '斜体'
                  },
                  {
                    value: 'oblique',
                    label: '倾斜'
                  }
                ]
              },
              unitFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '普通'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  },
                  {
                    value: 'lighter',
                    label: '细体'
                  }
                ]
              },
              unitBackgroundColor: "rgba(255, 255, 255, 0)",
            }
          },
        }
      ]
    },

    /**
     * 数字翻牌器
     */
    uNumberCard: {
      id: "",
      name: "数字翻牌器",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "400px",
        height: "100px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uNumberCard",
          name: "数字翻牌器",
          type: "uNumberCard",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ["当日交易量"],
              value: [123456, 123756]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            height: "100%",
            width: "100%",
            margin: "0 auto"
          },
          componentStyle: {
            uComponentConfig: {
              width: "50px",
              height: "80px",
              numberLength: 6,
              borderColor: "rgba(34, 126, 200, 1)",
              cornerWidth: "10px",
              cornerHeight: "10px",
              cornerSize: "2px",
              itemMargin: "20px",
              backgroundImage: "linear-gradient(to bottom, rgba(32, 137, 222, 0.18), rgba(32, 137, 222, 0.18))",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "100%",
              fontFamily: {
                value: 'ds-digitalbold_italic',
                options: [
                  {
                    value: 'ds-digitalbold_italic',
                    label: '液晶字体'
                  },
                  {
                    value: 'common',
                    label: '普通字体'
                  }
                ]
              },
              fontSize: "50px",
              fontColor: "rgba(255,255,255, 1)",
              floatRange: 600,
              floatTimes: "20秒"
            }
          }
        }
      ]
    },

    /**
     * 时间器
     */
    uTimeCard: {
      id: "",
      name: "时间器",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "400px",
        height: "100px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uTimeCard",
          name: "时间器",
          type: "uTimeCard",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "none",
            value: {
              name: "当日交易量",
              value: 123456
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            height: "100%",
            width: "100%",
            position: "relative"
          },
          componentStyle: {
            uComponentConfig: {
              fontSize: "30px",
              fontColor: "rgba(251,161,108, 1)",
              timeFormat: {
                value: "年月日",
                options: [
                  {
                    value: '年月日',
                    label: '年月日'
                  },
                  {
                    value: '-',
                    label: '-'
                  },
                  {
                    value: '/',
                    label: '/'
                  }
                ]
              },
              timeMargin: '20px'
            }
          }
        }
      ]
    },

    /**
     * 饼图
     */
    uPie: {
      id: "",
      name: "饼图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "300px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uPie",
          name: "饼图",
          type: "uPie",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              'name': ['1月', '2月', '3月', '4月', '5月'],
              'value': [335, 310, 234, 234, 234],
              'total': [400, 400, 400, 400, 400]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              pieName: "饼图",
              isLabel: false,
              labelColor: "auto",
              fontSize: 12,
              labelPosition: {
                value: 'outside',
                options: [
                  {
                    value: 'outside',
                    label: 'outside'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              labelFormatter: "{c}",
              lineWidth: 1,
              lineLength: 30,
              lineLength2: 10,
              lineSmoth: false,
              diagramSize: 0,
              pieRadius: "75%",
              pieOutRadius: "75%",
              pieInnerRadius: "50%",
              roseColor: 'rgba(40, 200, 189, 1)',
              multiColorValue: [],
            }
          }
        }
      ]
    },

    /**
     * 3D饼图
     */
    u3DPie: {
      id: "",
      name: "3D饼图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "300px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "u3DPie",
          name: "3D饼图",
          type: "u3DPie",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              'name': ['1月', '2月', '3月', '4月', '5月'],
              'value': [335, 310, 234, 234, 234],
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              hName:'3D饼图',
              hEnable3d: true,
              hAlpha: 45,
              hBeta: 0,
              hDepth: 35,
              hLabelEnable: false,
              multiColorValue: [],
              hInnerSize: '0%',
              hDLConnectorPadding: 5,
              hDLDistance: 30,
              hDLSoftConnector: true,
              hDLFontColor: 'rgba(255, 255, 255, 1)',
              hDLFontSize: '11px',
              hDLFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '正常'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  }
                ]
              }
            }
          }
        }
      ]
    },

    /**
     * 3D柱图
     */
    u3DBar: {
      id: "",
      name: "3D柱图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "600px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "u3DBar",
          name: "3D柱图",
          type: "u3DBar",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['1月', '2月', '3月', '4月', '5月'],
              '电话': [335, 310, 234, 234, 234],
              '微信': [500, 420, 80, 60, 99],
              '邮件': [10, 50, 40, 76, 32]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              hEnable3d: true,
              hAlpha: 15,
              hBeta: 15,
              hDepth: 30,
              hViewDistance: 30,
              hStacking: {
                value: 'none',
                options: [
                  {
                    value: 'none',
                    label: '不堆叠'
                  },
                  {
                    value: 'normal',
                    label: '普通堆叠'
                  },
                  {
                    value: 'percent',
                    label: '百分比堆叠'
                  }
                ]
              },
              hPlotOptionsDept: 30,
              multiColorValue: [],
              hDLEnable: true,
              hDLInside: false,
              hDLFontColor: 'rgba(255, 255, 255, 1)',
              hDLFontSize: '11px',
              hDLFontWeight: {
                value: 'normal',
                options: [
                  {
                    value: 'normal',
                    label: '正常'
                  },
                  {
                    value: 'bold',
                    label: '粗体'
                  },
                  {
                    value: 'bolder',
                    label: '更粗'
                  }
                ]
              },
              hAllowDecimals: false,
              hXGridLineColor: 'rgba(230, 230, 230, 1)',
              hXGridLineDashStyle: {
                value: 'Solid',
                options: [
                  {
                    value: 'Solid',
                    label: '实线'
                  },
                  {
                    value: 'Dash',
                    label: '虚线'
                  },
                  {
                    value: 'Dot',
                    label: '点线'
                  },
                  {
                    value: 'ShortDash',
                    label: '短虚线'
                  },
                  {
                    value: 'ShortDot',
                    label: '短点线'
                  }
                ]
              },
              hXgridLineWidth: 1,
              hXLabelColor: "rgba(102, 102, 102, 1)",
              hXLabelFontSize: '11px',
              hYGridLineColor: 'rgba(230, 230, 230, 1)',
              hYGridLineDashStyle: {
                value: 'Solid',
                options: [
                  {
                    value: 'Solid',
                    label: '实线'
                  },
                  {
                    value: 'Dash',
                    label: '虚线'
                  },
                  {
                    value: 'Dot',
                    label: '点线'
                  },
                  {
                    value: 'ShortDash',
                    label: '短虚线'
                  },
                  {
                    value: 'ShortDot',
                    label: '短点线'
                  }
                ]
              },
              hYgridLineWidth: 1,
              hYLabelColor: "rgba(102, 102, 102, 1)",
              hYLabelFontSize: '11px'
            }
          }
        }
      ]
    },

    /**
     * 多环图
     */
    uPieMultiCicle: {
      id: "",
      name: "多环图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "300px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uPieMultiCicle",
          name: "多环图",
          type: "uPieMultiCicle",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              'name': ['1月', '2月', '3月', '4月'],
              'value': [335, 310, 211, 234],
              'total': [400, 400, 400, 400]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              pieName: "多环图",
              cicleWidth: "20px",
              diagramSize: 0,
              multiColorValue: []
            }
          }
        }
      ]
    },


    /**
     * 矩形框
     */
    uRectLayout: {
      id: "",
      name: "矩形框",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "640px",
        height: "360px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uRectLayout",
          name: "矩形框",
          type: "uRectLayout",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "none",
            value: {},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            }
          },
          style: {
            position: "relative",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              borderColor: "rgba(0,137,250, 1)",
              leftCicleColor: "rgba(0,127,255, 1)",
              specBorderColor: "rgba(102,254,255, 1)",
              alertRectColor: "rgba(47,112,143, 1)",
              alertIconColor: "rgba(204,204,204, 1)",
              bgColor: "linear-gradient(to bottom, rgba(0,137,251, 0.2), rgba(0,137,251, 0.2))",
              rectTypeProp: {
                value: "矩形框-横向",
                options: [{
                  value: '普通矩形框',
                  label: '普通矩形框'
                }, {
                  value: '矩形框-横向',
                  label: '矩形框-横向'
                }, {
                  value: '矩形框-竖向',
                  label: '矩形框-竖向'
                }, {
                  value: '科幻矩形框',
                  label: '科幻矩形框'
                }, {
                  key: "告警矩形框",
                  value: "告警矩形框"
                }]
              }
            },
            uRectType: "矩形框-横向"
          }
        }
      ]
    },

    /**
     * 2D中国地图
     */
    u2DMapChina: {
      id: "",
      name: "2D中国地图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1000px",
        height: "800px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "u2DMapChina",
          name: "2D中国地图",
          type: "u2DMapChina",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: [
              [{name: '北京'}, {name: '上海', value: 95}],
              [{name: '北京'}, {name: '广州', value: 90}],
              [{name: '北京'}, {name: '大连', value: 80}],
              [{name: '北京'}, {name: '南宁', value: 70}],
              [{name: '北京'}, {name: '南昌', value: 60}],
              [{name: '北京'}, {name: '拉萨', value: 50}],
              [{name: '北京'}, {name: '长春', value: 40}],
              [{name: '北京'}, {name: '包头', value: 30}],
              [{name: '北京'}, {name: '重庆', value: 20}],
              [{name: '北京'}, {name: '常州', value: 10}]
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              areaColor: 'rgba(66, 132, 255, 0.74)',
              borderColor: 'rgba(141, 189, 255, 1)',
              isEffectScatter: true,
              isEffectLine: true,
              isAnimationLine: true,
              scatterColor: 'rgba(113,252,244,1)',
              alColor: 'rgba(255,255,255,1)'
            }
          }
        }
      ]
    },

    /**
     * 2D世界地图
     */
    u2DMapWorld: {
      id: "",
      name: "2D世界地图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1000px",
        height: "800px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "u2DMapWorld",
          name: "2D世界地图",
          type: "u2DMapWorld",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: [
              [{name: '北京'}, {name: '上海', value: 95}],
              [{name: '北京'}, {name: '广州', value: 90}],
              [{name: '北京'}, {name: '大连', value: 80}],
              [{name: '北京'}, {name: '南宁', value: 70}],
              [{name: '北京'}, {name: '南昌', value: 60}],
              [{name: '北京'}, {name: '拉萨', value: 50}],
              [{name: '北京'}, {name: '长春', value: 40}],
              [{name: '北京'}, {name: '包头', value: 30}],
              [{name: '北京'}, {name: '重庆', value: 20}],
              [{name: '北京'}, {name: '常州', value: 10}],
              [{name: '北京'}, {name: '纽约', value: 95}],
              [{name: '北京'}, {name: '拉斯维加斯', value: 70}]
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              areaColor: 'rgba(66, 132, 255, 0.74)',
              borderColor: 'rgba(141, 189, 255, 1)',
              isEffectScatter: true,
              isEffectLine: true,
              isAnimationLine: true,
              scatterColor: 'rgba(113,252,244,1)',
              alColor: 'rgba(255,255,255,1)'
            }
          }
        }
      ]
    },

    /**
     * 3D地球
     */
    uGlobe: {
      id: "",
      name: "3D地球",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1000px",
        height: "800px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uGlobe",
          name: "3D地球",
          type: "uGlobe",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: [
              [{name: '北京'}, {name: '上海', value: 95}],
              [{name: '北京'}, {name: '广州', value: 90}],
              [{name: '北京'}, {name: '大连', value: 80}],
              [{name: '北京'}, {name: '南宁', value: 70}],
              [{name: '北京'}, {name: '南昌', value: 60}],
              [{name: '北京'}, {name: '拉萨', value: 50}],
              [{name: '北京'}, {name: '长春', value: 40}],
              [{name: '北京'}, {name: '包头', value: 30}],
              [{name: '北京'}, {name: '重庆', value: 20}],
              [{name: '北京'}, {name: '常州', value: 10}],
              [{name: '北京'}, {name: '纽约', value: 95}],
              [{name: '北京'}, {name: '拉斯维加斯', value: 70}]
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              globeType: {
                value: "材质地球",
                options: [{
                  value: '材质地球',
                  label: '材质地球'
                }, {
                  value: '地图地球',
                  label: '地图地球'
                }]
              },
              globeBgColor: 'rgba(0,55,120,0.5)',
              mapColor: 'rgba(66, 132, 255, 0.74)',
              mapBorderColor: 'rgba(141, 189, 255, 1)',
              emphasisMapColor: 'rgba(66, 132, 255, 0.34)',
              skyColor: 'rgba(0,0,0,1)',
              scaller3DColor: 'rgba(89, 131, 255, 1)',
              line3DColor: 'rgba(56, 110, 113, 0.76)',
              isEffectLine: true,
              isEffectScatter: true,
            }
          }
        }
      ]
    },

    /**
     * 水位图
     */
    uLiquidFill: {
      id: "",
      name: "水位图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "300px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uLiquidFill",
          name: "水位图",
          type: "uLiquidFill",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['完成率'],
              value: ['0.9']
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              radius: '90%',
              outlineBorderWidth: 4,
              outlineBorderDistance: 4,
              labelFontSize: 50,
              labelColor: "rgba(255, 255, 255, 1)",
              range: '0-0.2;0.2-0.4;0.4-0.6;0.6-0.8;0.8-1',
              liquidColor1: 'linear-gradient(to bottom, rgba(66, 248, 66, 1), rgba(66, 248, 66, 1))',
              liquidBGColor1: 'linear-gradient(to bottom, rgba(66, 248, 66, 0.3), rgba(66, 248, 66, 0.3))',
              liquidBorderColor1: 'linear-gradient(to bottom, rgba(66, 248, 66, 1), rgba(66, 248, 66, 1))',
              liquidColor2: 'linear-gradient(to bottom, rgba(34, 139, 255, 1), rgba(34, 139, 255, 1))',
              liquidBGColor2: 'linear-gradient(to bottom, rgba(34, 139, 255, 0.3), rgba(34, 139, 255, 0.3))',
              liquidBorderColor2: 'linear-gradient(to bottom, rgba(34, 139, 255, 1), rgba(34, 139, 255, 1))',
              liquidColor3: 'linear-gradient(to bottom, rgba(248, 212, 66, 1), rgba(248, 212, 66, 1))',
              liquidBGColor3: 'linear-gradient(to bottom, rgba(248, 212, 66, 0.3), rgba(248, 212, 66, 0.3))',
              liquidBorderColor3: 'linear-gradient(to bottom, rgba(248, 212, 66, 1), rgba(248, 212, 66, 1))',
              liquidColor4: 'linear-gradient(to bottom, rgba(243, 101, 35, 1), rgba(243, 101, 35, 1))',
              liquidBGColor4: 'linear-gradient(to bottom, rgba(243, 101, 35, 0.3), rgba(243, 101, 35, 0.3))',
              liquidBorderColor4: 'linear-gradient(to bottom, rgba(243, 101, 35, 1), rgba(243, 101, 35, 1))',
              liquidColor5: 'linear-gradient(to bottom, rgba(248, 66, 66, 0.3), rgba(248, 66, 66, 0.3))',
              liquidBGColor5: 'linear-gradient(to bottom, rgba(248, 66, 66, 1), rgba(248, 66, 66, 1))',
              liquidBorderColor5: 'linear-gradient(to bottom, rgba(248, 66, 66, 1), rgba(248, 66, 66, 1))',
              diagramSize: 0
            }
          }
        }
      ]
    },

    /**
     * iframe
     */
    uIframe: {
      id: "",
      name: "iframe",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uIframe",
          name: "iframe",
          type: "uIframe",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "none",
            value: {},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            }
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              iframeUrl: "http://www.uinnova.com"
            }
          }
        }
      ]
    },

    cIframe: {
      id: "",
      name: "Iframe",
      version: 2,
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      fromThingJS: true,
      isEditLyoutName: false,
      isPubData: false,
      isBGColor: true,
      style: {
          position: "absolute",
          top: "0",
          left: "0",
          width: "300px",
          height: "300px",
          backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          isShow: true,
          isLock: false
      },
      components: [
          {
              id: "",
              name: "Iframe",
              type: "ciframe",
              code: "ciframe",
              heartbeat: 5,
              isSelected: false,
              isResizing: false,
              isMoving: false,
              datasourceMap: [],
              JSCode: "",
              useOption: true,
              datasource: {
                  type: "json",
                  dbapitype: "3",
                  value: [],
                  url: {
                      reqtype: "POST",
                      value: "",
                      responseLevel: ""
                  },
                  legend: [
                      "x轴",
                      "系列1",
                      "系列2"
                  ],
                  database: {
                      id: -1,
                      dbtype: "",
                      dbinstance: "",
                      host: "",
                      port: "",
                      username: "",
                      passwd: ""
                  },
                  sql: "SELECT * FROM TABLENAME"
              },
              style: {
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "100%",
                  height: "100%"
              },
              options: {
                  iframeURL: "",
                  isOpenIframe: false
              },
              eventConfig: []
          }
      ]
  },

    /**
     * 大屏frame
     */
    uDPDFrame: {
      id: "",
      name: "uDPDFrame",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uDPDFrame",
          name: "调用大屏",
          type: "uDPDFrame",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "none",
            value: {},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            }
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              uDPDSceneId: "",
              uDPDSceneName: ""
            }
          }
        }
      ]
    },

    /**
     * video
     */
    uVideo: {
      id: "",
      name: "video",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "281px",
        backgroundImage: "linear-gradient(to bottom, rgba(16, 90, 181, 0.5), rgba(16, 90, 181, 0.5))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uVideo",
          name: "video",
          type: "uVideo",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "none",
            value: {},
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            }
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              videoUrl: "",
              autoplay: true,
              controls: true,
              loop: true,
              muted: true,
              poster: "",
            }
          }
        }
      ]
    },

    /**
     * 柱状图
     */
    uBar: {
      id: "",
      name: "柱状图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBar",
          name: "柱状图",
          type: "uBar",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['1月', '2月', '3月', '4月', '5月'],
              '电话': [335, 310, 234, 234, 234],
              '微信': [335, 310, 234, 234, 234]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "服务请求种类数量统计",
              barColor: "rgba(0,255,255,0.5)",
              xAxisColor: "rgba(197, 197, 197, 1)",
              xAxisWidth: 1,
              xAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isxAxisLabel: true,
              xAxisLableColor: "rgba(197, 197, 197, 1)",
              xAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              xAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              xAxisLabelFontSize: 12,
              xAxisLabelFontAlign: {
                value: "center",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              xAxisLabelBaseline: {
                value: "top",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yAxisColor: "rgba(197, 197, 197, 1)",
              yAxisWidth: 1,
              yAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isyAxisLabel: true,
              yAxisLableColor: "rgba(197, 197, 197, 1)",
              yAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              yAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              yAxisLabelFontSize: 12,
              yAxisLabelFontAlign: {
                value: "right",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              yAxisLabelBaseline: {
                value: "middle",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yaxisRotate: 0,
              gridBottom: "3%",
              gridLeft: "3%",
              gridRight: "4%",
              axisRotate: 0,
              barDirection: {
                value: "竖向",
                options: [
                  {
                    value: '竖向',
                    label: '竖向'
                  },
                  {
                    value: '横向',
                    label: '横向'
                  }
                ]
              },
              barPlace: {
                value: "展开",
                options: [
                  {
                    value: '展开',
                    label: '展开'
                  },
                  {
                    value: '堆叠',
                    label: '堆叠'
                  }
                ]
              },
              isLabel: true,
              labelPosition: {
                value: 'insideTop',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              barWidth: "30%",
              isXaxis: true,
              isX: true,
              isYaxis: true,
              isY: true,
              isYsplit: false,
              isXsplit: false,
              xSplitColor: "rgba(255,255,255, 1)",
              xSplitWidth: 1,
              xSplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              ySplitColor: "rgba(255,255,255, 1)",
              ySplitWidth: 1,
              ySplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              symbolSizeX: '90%',
              symbolSizeY: '60%',
              symbol: {
                value: "roundRect",
                options: [
                  {
                    value: 'circle',
                    label: 'circle'
                  },
                  {
                    value: 'rect',
                    label: 'rect'
                  },
                  {
                    value: 'roundRect',
                    label: 'roundRect'
                  },
                  {
                    value: 'triangle',
                    label: 'triangle'
                  },
                  {
                    value: 'diamond',
                    label: 'diamond'
                  },
                  {
                    value: 'pin',
                    label: 'pin'
                  },
                  {
                    value: 'arrow',
                    label: 'arrow'
                  }
                ]
              },
              labelColor: "rgba(255,255,255, 1)",
              labelFontSize: 12,
              labelOffsetX: 0,
              labelOffsetY: 0,
              labelFormatter: "{c}",
              multiColor: false,
              multiColorValue: []
            }
          }
        }
      ]
    },

    /**
     * 连线多柱图
     */
    uBarMultiLine: {
      id: "",
      name: "连线多柱图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBarMultiLine",
          name: "连线多柱图",
          type: "uBar",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['1月', '2月', '3月', '4月', '5月'],
              '电话': [135, 390, 534, 234, 734],
              '微信': [335, 210, 234, 434, 234]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "服务请求种类数量统计",
              barColor: "rgba(0,255,255,0.5)",
              xAxisColor: "rgba(197, 197, 197, 1)",
              isLegend: true,
              xAxisWidth: 1,
              xAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isxAxisLabel: true,
              isLine: true,
              xAxisLableColor: "rgba(197, 197, 197, 1)",
              xAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              xAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              xAxisLabelFontSize: 12,
              xAxisLabelFontAlign: {
                value: "center",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              xAxisLabelBaseline: {
                value: "top",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yAxisColor: "rgba(197, 197, 197, 1)",
              yAxisWidth: 1,
              yAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isyAxisLabel: true,
              yAxisLableColor: "rgba(197, 197, 197, 1)",
              yAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              yAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              yAxisLabelFontSize: 12,
              yAxisLabelFontAlign: {
                value: "right",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              yAxisLabelBaseline: {
                value: "middle",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yaxisRotate: 0,
              gridBottom: "3%",
              gridLeft: "3%",
              gridRight: "4%",
              axisRotate: 0,
              barDirection: {
                value: "竖向",
                options: [
                  {
                    value: '竖向',
                    label: '竖向'
                  },
                  {
                    value: '横向',
                    label: '横向'
                  }
                ]
              },
              barPlace: {
                value: "展开",
                options: [
                  {
                    value: '展开',
                    label: '展开'
                  },
                  {
                    value: '堆叠',
                    label: '堆叠'
                  }
                ]
              },
              isLabel: true,
              labelPosition: {
                value: 'insideTop',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              barWidth: "30%",
              isXaxis: true,
              isX: true,
              isYaxis: true,
              isY: true,
              isYsplit: false,
              isXsplit: false,
              xSplitColor: "rgba(255,255,255, 1)",
              xSplitWidth: 1,
              xSplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              ySplitColor: "rgba(255,255,255, 1)",
              ySplitWidth: 1,
              ySplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              symbolSizeX: '90%',
              symbolSizeY: '60%',
              symbol: {
                value: "roundRect",
                options: [
                  {
                    value: 'circle',
                    label: 'circle'
                  },
                  {
                    value: 'rect',
                    label: 'rect'
                  },
                  {
                    value: 'roundRect',
                    label: 'roundRect'
                  },
                  {
                    value: 'triangle',
                    label: 'triangle'
                  },
                  {
                    value: 'diamond',
                    label: 'diamond'
                  },
                  {
                    value: 'pin',
                    label: 'pin'
                  },
                  {
                    value: 'arrow',
                    label: 'arrow'
                  }
                ]
              },
              labelColor: "rgba(255,255,255, 1)",
              labelFontSize: 12,
              labelOffsetX: 0,
              labelOffsetY: 0,
              labelFormatter: "{c}",
              multiColor: false,
              multiColorValue: []
            }
          }
        }
      ]
    },

    /**
     * 柱状进度条
     */
    uBarProcess: {
      id: "",
      name: "对比横柱图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBarProcess",
          name: "对比横柱图",
          type: "uBarProcess",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['巡检进度'],
              'total': [10000],
              '计划完成次数': [10000],
              '实际完成次数': [6000],
              '发现故障次数': [2000],
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "对比横柱图",
              isLabel: true,
              labelPosition: {
                value: 'insideRight',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              labelColor: "rgba(255,255,255, 1)",
              labelFontSize: 12,
              barWidth: "50",
              multiColor: false,
              labelOffset: -50,
              labelFormatter: "{c}次\n{b}",
              multiColorValue: []
            }
          }
        }
      ]
    },

    /**
     * 响应进度条
     * todo:
     */
    uBarProgress: {
      id: "",
      name: "进度条",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBarProgress",
          name: "进度条",
          type: "uBarProgress",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['进度'],
              value: [0.4]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "进度条",
              isLabel: true,
              labelPosition: {
                value: 'insideRight',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              labelColor: "rgba(255,255,255, 1)",
              labelFontSize: 12,
              barWidth: "50",
              multiColor: false,
              labelOffset: -50,
              labelFormatter: "{c}次\n{b}",
              range: '0-0.2;0.2-0.4;0.4-0.6;0.6-0.8;0.8-1',
              liquidColor1: 'rgba(66,248,66,1)',
              liquidColor2: 'rgba(34,139,255,1)',
              liquidColor3: 'rgba(248,212,66,1)',
              liquidColor4: 'rgba(243,101,35,1)',
              liquidColor5: 'rgba(248,66,66,1)',
            }
          }
        }
      ]
    },

    /**
     * 底色柱状图
     */
    uBarBG: {
      id: "",
      name: "带底柱状图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBarBG",
          name: "带底柱状图",
          type: "uBarBG",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['企业网银', '手机银行', 'ATM/CDM', '综合柜面系统', '个人网银'],
              '电话': [335, 310, 234, 234, 234]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: ""
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "服务请求种类数量统计",
              barColorbg: "rgba(30, 133, 244, 0.16)",
              barColorinner: "linear-gradient(to bottom, rgba(188,133,107, 1), rgba(9,40,77, 1))",
              barWidthbg: 18,
              barWidthinner: 6,
              barBorderRadius: "4,4,0,0",
              barBorderRadiusinner: "0,0,0,0",
              barGap: "-65%",
              gridBottom: "3%",
              gridLeft: "3%",
              gridRight: "4%",
              axisRotate: 0,
              xAxisColor: "rgba(89,89,89,1)",
              isXaxis: true,
              isX: true,
              isXsplit: false,
              yAxisColor: "rgba(89,89,89,1)",
              isYaxis: true,
              isY: true,
              isYsplit: false,
              barDirection: {
                value: "竖向",
                options: [
                  {
                    value: '竖向',
                    label: '竖向'
                  },
                  {
                    value: '横向',
                    label: '横向'
                  }
                ]
              },
              barPlace: {
                value: "展开",
                options: [
                  {
                    value: '展开',
                    label: '展开'
                  },
                  {
                    value: '堆叠',
                    label: '堆叠'
                  }
                ]
              },
              isLabel: true,
              labelPosition: {
                value: 'top',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              labelColor: "rgba(19, 236, 244, 1)",
              barfontSize: 12,
              xSplitColor: "rgba(255,255,255, 1)",
              xSplitWidth: 1,
              xSplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              ySplitColor: "rgba(255,255,255, 1)",
              ySplitWidth: 1,
              ySplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              multiColor: false,
              multiColorValue: [],
              xAxisWidth: 1,
              xAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isxAxisLabel: true,
              xAxisLableColor: "rgba(197, 197, 197, 1)",
              xAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              xAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              xAxisLabelFontSize: 12,
              xAxisLabelFontAlign: {
                value: "center",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              xAxisLabelBaseline: {
                value: "top",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yAxisWidth: 1,
              yAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isyAxisLabel: true,
              yAxisLableColor: "rgba(197, 197, 197, 1)",
              yAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              yAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              yAxisLabelFontSize: 12,
              yAxisLabelFontAlign: {
                value: "right",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              yAxisLabelBaseline: {
                value: "middle",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yaxisRotate: 0,
            }
          }
        }
      ]
    },

    /**
     * 横向左右柱状图
     */
    uBarLRHoriz: {
      id: "",
      name: "水平双向柱",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uBarLRHoriz",
          name: "水平双向柱",
          type: "uBarLRHoriz",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['1月', '2月', '3月', '4月', '5月'],
              '电话-left': [335, 310, 234, 234, 234],
              '微信-left': [335, 310, 234, 234, 234],
              '邮件-right': [335, 310, 234, 234, 234],
              'QQ-right': [335, 310, 234, 234, 234]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT COLUMN FROM TABLE"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "服务请求统计",
              axisColor: "rgba(89,89,89,1)",
              barPlace: {
                value: "展开",
                options: [
                  {
                    value: '展开',
                    label: '展开'
                  },
                  {
                    value: '堆叠',
                    label: '堆叠'
                  },
                  {
                    value: '左边展开',
                    label: '左边展开'
                  },
                  {
                    value: '左边堆叠',
                    label: '左边堆叠'
                  },
                  {
                    value: '右边展开',
                    label: '右边展开'
                  },
                  {
                    value: '右边堆叠',
                    label: '右边堆叠'
                  }
                ]
              },
              isLabel: true,
              isXaxis: true,
              isX: true,
              isXsplit: false,
              xSplitColor: "rgba(255,255,255, 1)",
              xSplitWidth: 1,
              xSplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              axisfontSize: 12,
              axisPosition: {
                value: "bottom",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              barfontSize: 12,
              barWidth: "20%",
              multiColorValue: [],
              axisWidth: 1,
              axisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
            }
          }
        }
      ]
    },

    /**
     * 折线图
     */
    uLine: {
      id: "",
      name: "折线图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uLine",
          name: "折线图",
          type: "uLine",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['1月', '2月', '3月', '4月', '5月'],
              '电话': [335, 310, 234, 234, 234],
              '微信': [315, 280, 214, 134, 54]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT COLUMN FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              barName: "服务请求种类数量统计",
              lineColor: "rgba(0, 255, 255, 0.75)",
              lineWidth: 1,
              areaColor: "rgba(0, 255, 255, 0.75)",
              gridBottom: "3%",
              gridLeft: "3%",
              gridRight: "4%",
              axisRotate: 0,
              xAxisColor: "rgba(89,89,89,1)",
              isX: true,
              isXaxis: true,
              isXsplit: false,
              isY: true,
              yAxisColor: "rgba(89,89,89,1)",
              isYaxis: true,
              isYsplit: false,
              xAxisLableInterval: "auto",
              yAxisLableInterval: "auto",
              xAxisLableFormatter: 'function(value,index) {return value}',
              yAxisLableFormatter: 'function(value,index) {return value}',
              xSplitColor: "rgba(255,255,255, 1)",
              xSplitWidth: 1,
              xSplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              ySplitColor: "rgba(255,255,255, 1)",
              ySplitWidth: 1,
              ySplitType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isPoint: true,
              pointWidth: 1,
              isSmoth: false,
              isLabel: true,
              labelPosition: {
                value: 'insideTop',
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  },
                  {
                    value: 'inside',
                    label: 'inside'
                  },
                  {
                    value: 'insideLeft',
                    label: 'insideLeft'
                  },
                  {
                    value: 'insideRight',
                    label: 'insideRight'
                  },
                  {
                    value: 'insideTop',
                    label: 'insideTop'
                  },
                  {
                    value: 'insideBottom',
                    label: 'insideBottom'
                  },
                  {
                    value: 'insideTopLeft',
                    label: 'insideTopLeft'
                  },
                  {
                    value: 'insideBottomLeft',
                    label: 'insideBottomLeft'
                  },
                  {
                    value: 'insideTopRight',
                    label: 'insideTopRight'
                  },
                  {
                    value: 'insideBottomRight',
                    label: 'insideBottomRight'
                  }
                ]
              },
              labelFontSize: 12,
              labelFormatter: "{c}",
              multiColorValue: [],
              multiAreaColorValue: [],
              xAxisWidth: 1,
              xAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isxAxisLabel: true,
              xAxisLableColor: "rgba(197, 197, 197, 1)",
              xAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              xAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              xAxisLabelFontSize: 12,
              xAxisLabelFontAlign: {
                value: "center",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              xAxisLabelBaseline: {
                value: "top",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yAxisWidth: 1,
              yAxisType: {
                value: "solid",
                options: [
                  {
                    value: 'solid',
                    label: 'solid'
                  },
                  {
                    value: 'dashed',
                    label: 'dashed'
                  },
                  {
                    value: 'dotted',
                    label: 'dotted'
                  }
                ]
              },
              isyAxisLabel: true,
              yAxisLableColor: "rgba(197, 197, 197, 1)",
              yAxisLabelFontStyle: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'italic',
                    label: 'italic'
                  },
                  {
                    value: 'oblique',
                    label: 'oblique'
                  }
                ]
              },
              yAxisLabelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              yAxisLabelFontSize: 12,
              yAxisLabelFontAlign: {
                value: "right",
                options: [
                  {
                    value: 'left',
                    label: 'left'
                  },
                  {
                    value: 'right',
                    label: 'right'
                  },
                  {
                    value: 'center',
                    label: 'center'
                  }
                ]
              },
              yAxisLabelBaseline: {
                value: "middle",
                options: [
                  {
                    value: 'top',
                    label: 'top'
                  },
                  {
                    value: 'middle',
                    label: 'middle'
                  },
                  {
                    value: 'bottom',
                    label: 'bottom'
                  }
                ]
              },
              yaxisRotate: 0,
            },
          }
        }
      ]
    },

    /**
     * 折线图
     */
    uRadar: {
      id: "",
      name: "雷达图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "500px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uRadar",
          name: "雷达图",
          type: "uRadar",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: ['电话', '微信', '邮件', 'QQ', '运维工具'],
              max: [35, 51, 27, 58, 17],
              '1月': [35, 51, 27, 38, 10],
              '2月': [10, 11, 23, 21, 17],
              '3月': [5, 13, 11, 58, 16],
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT COLUMN FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              radarName: "一季度服务请求数量",
              nameColor: "rgba(220, 112, 11, 1)",
              radarShap: {
                value: 'polygon',
                options: [
                  {
                    value: 'polygon',
                    label: 'polygon'
                  },
                  {
                    value: 'circle',
                    label: 'circle'
                  },
                ]
              },
              isSplitline: true,
              splitNumber: 4,
              splitlineColor: "rgba(238,197,102, 1)",
              splitArea: false,
              isAxisline: true,
              axislineColor: "rgba(238,197,102, 0.5)",
              radarSymbol: {
                value: 'none',
                options: [
                  {
                    value: 'none',
                    label: 'none'
                  },
                  {
                    value: 'circle',
                    label: 'circle'
                  },
                  {
                    value: 'rect',
                    label: 'rect'
                  },
                  {
                    value: 'roundRect',
                    label: 'roundRect'
                  },
                  {
                    value: 'triangle',
                    label: 'triangle'
                  },
                  {
                    value: 'diamond',
                    label: 'diamond'
                  },
                  {
                    value: 'pin',
                    label: 'pin'
                  },
                  {
                    value: 'arrow',
                    label: 'arrow'
                  },
                ]
              },
              radaColor: "rgba(249,113,60, 1)"
            }
          }
        }
      ]
    },

    /**
     * 仪表盘
     */
    uDashboard: {
      id: "",
      name: "仪表盘",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "300px",
        height: "300px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uDashboard",
          name: "仪表盘",
          type: "uDashboard",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              'name': ['响应时长'],
              'value': [50],
              'max': [200],
              'min': [0]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%"
          },
          componentStyle: {
            uComponentConfig: {
              dashboardName: "仪表盘",
              radius: "90%",
              startAngle: 180,
              endAngle: 0,
              axisRange: "0.25,0.5,0.75,1",
              rangeColor1: "linear-gradient(to top, rgba(196,28,44, 1), rgba(236,68,14, 1))",
              rangeColor2: "linear-gradient(to right, rgba(236,68,14, 1), rgba(244,142,5, 1))",
              rangeColor3: "linear-gradient(to right, rgba(244,142,5, 1), rgba(85,186,165, 1))",
              rangeColor4: "linear-gradient(to bottom, rgba(85,186,165, 1), rgba(0,182,238, 1))",
              axisWidth: 3,
              isAxisLable: true,
              labelFontSize: 14,
              labelFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              labelColor: "rgba(255,255,255, 1)",
              axisTickLength: 10,
              axisTickColor: 'auto',
              splitNumber: 8,
              splitLineLength: 15,
              splitLineColor: 'auto',
              isPoints: true,
              pointsLength: "80%",
              pointsWidth: 8,
              isDetail: true,
              detailWidth: 100,
              detailHeight: 40,
              detailBgColor: "rgba(0,182,238, 0.8)",
              detailBorderWidth: 0,
              detailBorderColor: "rgba(0,0,0, 1)",
              detailOffsetLeft: 0,
              detailOffsetTop: "30%",
              detailFontSize: 30,
              detailFontWeight: {
                value: "normal",
                options: [
                  {
                    value: 'normal',
                    label: 'normal'
                  },
                  {
                    value: 'bold',
                    label: 'bold'
                  },
                  {
                    value: 'bolder',
                    label: 'bolder'
                  },
                  {
                    value: 'lighter',
                    label: 'lighter'
                  }
                ]
              },
              detailFontColor: "rgba(255,255,255, 1)",
              multiColorValue: []
            }
          }
        }
      ]
    },
    /**
     * 告警分布图(模板) - 楼层
     */
    uAlarmMap: {
      id: "",
      name: "告警分布图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1607px",
        height: "595px",
        boxShadow: "rgba(61,61,61,1) 0px 0px 11px 2px inset",
        border: '2px solid #404040',
        backgroundImage: 'linear-gradient(to bottom, rgba(66,66,67,1), rgba(0,0,0,1))',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uAlarmMap",
          name: "告警分布图",
          type: "uAlarmMap",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            title: '楼层',
            value: {
              'UPS': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              'EPS': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '温湿度传感器': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '配电列头柜·交流': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '配电列头柜·直流': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '柴油发电机': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '精密空间': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
              '加湿器': [
                {level: "1F", room: "101", value: '正常'},
                {level: "2F", room: "201", value: '严重'},
                {level: "2F", room: "202", value: '重要'},
                {level: "3F", room: "301", value: '一般'},
                {level: "3F", room: "302", value: '轻微'},
                {level: "3F", room: "303", value: '正常'},
                {level: "4F", room: "401", value: '重要'},
                {level: "4F", room: "402", value: '一般'},
                {level: "4F", room: "403", value: '严重'},
                {level: "4F", room: "404", value: '重要'},
              ],
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "1535px",
            height: "590px",

          },
          componentStyle: {
            uComponentConfig: {
              alarmW1: '229px',
              alarmW2: '100px',
              alarmW2Min: '100px',
              alarmH: '59px',
              alarmBC1: 'rgba(0,0,0,0)',
              alarmBC2: 'rgba(0,0,0,0)',
              alarmC1: 'rgba(255,255,255,1)',
              alarmC2: 'rgba(255,255,255,1)',
              alarmFZ1: '15px',
              alarmFZ2: '15px',
              alarmTC1: 'rgba(66,248,66,1)',
              alarmTC2: 'rgba(248,66,66,1)',
              alarmTC3: 'rgba(243,101,35,1)',
              alarmTC4: 'rgba(248,212,66,1)',
              alarmTC5: 'rgba(34,139,255,1)',
            }
          },
        },
      ]
    },

    /**
     * 告警分布图 - 区域
     */
    uAlarmMapArea: {
      id: "",
      name: "告警分布图",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1570px",
        height: "744px",
        boxShadow: "rgba(61,61,61,1) 0px 0px 11px 2px inset",
        border: '2px solid #404040',
        backgroundImage: 'linear-gradient(to bottom, rgba(66,66,67,1), rgba(0,0,0,1))',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uAlarmMap",
          name: "告警分布图",
          type: "uAlarmMapArea",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            title: '大区',
            value: {
              'UPS': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              'EPS': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '温湿度传感器': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '配电列头柜·交流': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '配电列头柜·直流': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '柴油发电机': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '精密空间': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '加湿器': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '空调箱': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
              '行间空调': [
                {level: "华南", room: "深圳三号", value: '一般'},
                {level: "华南", room: "广州一号", value: '轻微'},
                {level: "华南", room: "广州二号", value: '正常'},
                {level: "华东", room: "上海一号", value: '重要'},
                {level: "华东", room: "上海二号", value: '一般'},
                {level: "华东", room: "上海三号", value: '严重'},
                {level: "华东", room: "昆山一号", value: '重要'},
                {level: "华北", room: "北京一号", value: '重要'},
                {level: "华北", room: "亦庄", value: '重要'},
                {level: "华北", room: "马连道", value: '重要'},
                {level: "西南", room: "成都一号", value: '重要'},
              ],
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            legend: ['x轴', '系列1', '系列2'],
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "1535px",
            height: "590px",

          },
          componentStyle: {
            uComponentConfig: {
              alarmW1: '229px',
              alarmW2: '100px',
              alarmW2Min: '100px',
              alarmH: '59px',
              alarmBC1: 'rgba(0,0,0,0)',
              alarmBC2: 'rgba(0,0,0,0)',
              alarmC1: 'rgba(255,255,255,1)',
              alarmC2: 'rgba(255,255,255,1)',
              alarmFZ1: '15px',
              alarmFZ2: '15px',
              alarmTC1: 'rgba(66,248,66,1)',
              alarmTC2: 'rgba(248,66,66,1)',
              alarmTC3: 'rgba(243,101,35,1)',
              alarmTC4: 'rgba(248,212,66,1)',
              alarmTC5: 'rgba(34,139,255,1)',
            }
          },
        }
      ]
    },

    /**
     * 值班数据中心
     */
    uManage: {
      id: "",
      name: "值班管理",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1820px",
        height: "954px",
        boxShadow: "rgba(61,61,61,1) 0px 0px 11px 2px inset",
        border: '2px solid #404040',
        backgroundImage: 'linear-gradient(to bottom, rgba(66,66,67,1), rgba(0,0,0,1))',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uAlarmMap",
          name: "值班管理",
          type: "uManage",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: '值班管理',
              title: [
                {name: '数据中心', class: 'dc'},
                {name: '班组名', class: 'dutyname'},
                {name: '值班长', class: 'dutystuff-name'},
                {name: '', class: 'dutystuff-star'},
                {name: '班组人数', class: 'dutystuffnumber'},
                {name: '值班电话', class: 'dutyhotline'},
                {name: '签到状态', class: 'loginrecord'}
              ],
              value: [
                {
                  dc: "上海一号",
                  dutyname: "一号班组",
                  dutystuff: {
                    name: "王涛",
                    star: 4
                  },
                  dutystuffnumber: 7,
                  dutyhotline: "021-55690033",
                  loginrecord: {
                    normal: 4,
                    delay: 2,
                    other: 0
                  }
                },
                {
                  dc: "上海一号",
                  dutyname: "二号班组",
                  dutystuff: {
                    name: "程度",
                    star: 3
                  },
                  dutystuffnumber: 6,
                  dutyhotline: "021-55690031",
                  loginrecord: {
                    normal: 4,
                    delay: 2,
                    other: 1
                  }
                },
                {
                  dc: "上海二号",
                  dutyname: "一号班组",
                  dutystuff: {
                    name: "高育良",
                    star: 4
                  },
                  dutystuffnumber: 8,
                  dutyhotline: "021-55690029",
                  loginrecord: {
                    normal: 4,
                    delay: 2,
                    other: 2
                  }
                },
                {
                  dc: "上海三号",
                  dutyname: "一号班组",
                  dutystuff: {
                    name: "祁同伟",
                    star: 2
                  },
                  dutystuffnumber: 6,
                  dutyhotline: "021-55690028",
                  loginrecord: {
                    normal: 1,
                    delay: 1,
                    other: 4
                  }
                },
                {
                  dc: "上海四号",
                  dutyname: "一号班组",
                  dutystuff: {
                    name: "李岩石",
                    star: 3
                  },
                  dutystuffnumber: 8,
                  dutyhotline: "021-55690027",
                  loginrecord: {
                    normal: 3,
                    delay: 3,
                    other: 2
                  }
                },
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "",
            height: "",
          },
          componentStyle: {
            uComponentConfig: {
              mgTitleFontSize: '30px',
              mgTitleCol: 'rgba(255,255,255,1)',
              mgInfoFontSize: '30px',
              mgDcCol: 'rgba(255,255,255,1)',
              mgDutynameCol: 'rgba(255,255,255,1)',
              mgIconCol: 'rgba(66,237,248,1)',
              mgDutystuffNameCol: 'rgba(66,237,248,1)',
              mgDutystuffStarCol: 'rgba(66,248,66,1)',
              mgDutystuffnumberCol: 'rgba(66,237,248,1)',
              mgDutyhotlineCol: 'rgba(66,237,248,1)',

              mgDelayBgc: 'rbga(62,98,61,1)',
              mgDelayBc: 'rgba(66,225,66,1)',
              mgNormalBgc: 'rgba(98,62,62,1)',
              mgNormalBc: 'rgba(213,65,65,1)',
              mgOtherBgc: 'rgba(66,67,67,1)',
              mgOtherBc: 'rgba(85,85,85,1)'
            }
          },
        }
      ]
    },



    /**
     * 当班信息
     */
    uOnDuty: {
      id: "",
      name: "当班信息",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1840px",
        height: "960px",
        boxShadow: "rgba(61,61,61,1) 0px 0px 11px 2px inset",
        border: '2px solid #404040',
        backgroundImage: 'linear-gradient(to bottom, rgba(66,66,67,1), rgba(0,0,0,1))',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uOnDuty",
          name: "当班信息",
          type: "uOnDuty",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              name: '值班管理',
              title: '当班信息',
              value: {
                dutyinfo: {
                  dutygroup: '上海一号1班组',
                  dutytime: '08:00~18:00',
                  grouptel: 18604363257,
                  groupmail: 'dc15@gds-services.com'
                },
                dutystuff: {
                  dutyname: '王涛',
                  star: 4,
                  tel: 18604363257,
                  duty: ['上海一号数据研发中心', '上海二号数据研发中心'],
                  Date: '2017/4/12 07:38',
                },
                signinstate: [
                  {
                    name: '李达康',
                    tel: 13641839465,
                    loginrecordtime: '2017/6/7 07:58',
                    state: 1,
                  },
                  {
                    name: '胡静',
                    tel: 13641839465,
                    loginrecordtime: '2017/6/7 07:58',
                    state: 1,
                  },
                  {
                    name: '赵立春',
                    tel: 13641839465,
                    loginrecordtime: '2017/6/7 07:58',
                    state: 1,
                  },
                  {
                    name: '候亮平',
                    tel: 13641839465,
                    loginrecordtime: '2017/6/7 07:58',
                    state: 1,
                  },
                  {
                    name: '赵东来',
                    tel: 13641839465,
                    loginrecordtime: '2017/6/7 09:58',
                    state: 2,
                  },
                  {
                    name: '高育良',
                    tel: 13641839465,
                    loginrecordtime: '未签到',
                    state: 3,
                  },
                ]
              }
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "1824px",
            minWidth: '1824px',
            height: "954px",
          },
          componentStyle: {
            uComponentConfig: {
              ODfontSize: '28px',
              ODtitleColor: 'rgba(255,255,255,1)',
              ODinfoColor: 'rgba(66,237,248,1)',
              ODstate1Col: 'rgba(66,248,66,1)',
              ODstate2Col: 'rgba(248,66,66,1)',
              ODstate3Col: 'rgba(132,132,132,1)',
              ODstarCol: 'rgba(66,248,66,1)',
              ODtelCol: 'rgba(255,255,255,1)',
              ODiconCol: 'rgba(66,237,248,1)',
            }
          },
        }
      ]
    },

    /**
     * 值班人员表
     */
    uOnDutyMember: {
      id: "",
      name: "值班人员表",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "680px",
        height: "350px",
        backgroundImage: 'linear-gradient(to bottom,  rgba(13,26,45,1), rgba(13,26,45,1))',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        border: '2px solid #404040',
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uOnDutyMember",
          name: "值班人员",
          type: "uOnDutyMember",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              "dutyTitle":"十处信息中心2017年9月昼夜运行值班表",
              "dutyList":[
                {
                  "day":"9.1",
                  "week":"五",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.2",
                  "week":"六",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.3",
                  "week":"日",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.4",
                  "week":"一",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.5",
                  "week":"二",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.6",
                  "week":"五",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.7",
                  "week":"三",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.8",
                  "week":"四",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.9",
                  "week":"五",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                },
                {
                  "day":"9.10",
                  "week":"六",
                  "dayDuty":"党松峰 焦磊 梁婧",
                  "nightDuty":"潘才东",
                  "teamLead":"刘延峰"
                }
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            minWidth:'570px',
            minHeight:'245px',
            width: "570px",
            height: "245px",
          },
          componentStyle: {
            uComponentConfig: {
              titleCol:'rgba(0,225,255,1)',
              titleFontSize:'18px',
              titleHeight:'',
              typeCol:'rgba(255,255,255,1)',
              typeFontSize:'13px',
              typeHeight:'',
              infoCol:'rgba(255,255,255,1)',
              infoFontSize:'12px',
              infoHeight:'',
            }
          },
        }
      ]
    },

    /**
     * 全国数据中心概括
     */
    uCountryData:{
      id: "",
      name: "全国数据中心概括",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1840px",
        height: "960px",
        backgroundImage: 'linear-gradient(to bottom,  rgba(13,26,45,1), rgba(13,26,45,1))',
        border: '2px solid #404040',
        backgroundColor: 'rgba(0,0,0,1)',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uCountryData",
          name: "全国数据中心概括",
          type: "uCountryData",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: {
              city:[
                {dc: "内蒙古",status:'建设中'},
                {dc: "上海",status:'运行中'}
              ],
              list:[
                {
                  region:"华东数据中心",
                  dc:"上海一号,上海二号,……"
                },{
                  region:"华南数据中心",
                  dc:"……"
                },{
                  region:"西南数据中心",
                  dc:"……"
                },{
                  region:"华北数据中心",
                  dc:"……"
                }
              ]
            },
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "1824px",
            height: "954px",
          },
          componentStyle: {
            uComponentConfig: {
              mapFColor:'rgba(255,255,255,1)',
              mapFontSize:'14px',
              mapFill:'rgba(29,29,29,1)',
              mapFillOpacity:'1',
              mapStroke:'rgba(255,255,255,1)',
              mapStrokeWidth:'1px',
              mapStrokeOpacity:'.5',
              mapLempFillOpacity:'0.5',
              mapLempStrok:'rgba(16,129,191,1)',
              mapLempStrokWidth:'1px',
              mapLempR1:10,
              mapLempR2:5,
              mapLempFill:'rgba(27,78,124,1)',
              mapLempStroke:'rgba(16,129,191,1)',
              mapLempStrokeWidth:'1px',
              mapLempRunFill:'rgba(102,255,255,1)',
              mapLempRunFill2:'rgba(102,0,0,1)',
              mapLempRunStroke:'rgba(102,255,255,1)',
              mapLempSetFill:'rgba(0,0,0,1)',
              mapLempSetStroke:'rgba(102,255,255,1)',
            }
          },
        }
      ]
    },

    /**
     * 状态面板
     */
    uStatusPanel:{
      id: "",
      name: "状态面板",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "660px",
        height: "440px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uStatusPanel",
          name: "状态面板",
          type: "uStatusPanel",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasourceMap:[
            {
              name: "标题",
              mapKey: "title",
              formatter: "",
              itemStyle: ""
            },
            {
              name: "面板样式",
              mapKey: "",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundImage:'radial-gradient(50% 50% at 50% 50%, rgba(43, 121, 217, 0.4),rgba(43, 121, 217, 0.4)',\n" +
              "        borderColor: 'rgba(200, 85, 109, 0)'\n" +
              "    }\n" +
              "    let status = this.Obj.status\n" +
              "    if(status === \"1\"){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(66, 248, 66, 0.1),rgba(66, 248, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(200, 85, 109, 0)'\n" +
              "    }\n" +
              "    if(status === \"2\"){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(34, 139, 255, 0.1),rgba(34, 139, 255, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(255, 124, 0, 0)'\n" +
              "    }\n" +
              "    if(status === \"3\"){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(248, 212, 66, 0.1),rgba(248, 212, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(0, 255, 125, 0)'\n" +
              "    }\n" +
              "    if(status === \"4\"){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(243, 101, 35, 0.1),rgba(243, 101, 35, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(254,0,124,0)'\n" +
              "    }\n" +
              "    if(status === \"5\"){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(248, 66, 66, 0.1),rgba(248, 66, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(255, 255, 1, 0)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "主体数据",
              mapKey: "value",
              formatter: "",
              itemStyle: ""
            },
            {
              name: "单位数据",
              mapKey: "",
              formatter: "function(){\n" +
              "    return \"℃\"\n" +
              "}",
              itemStyle: ""
            },
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: [
              {
                title:'MA机房',
                value:'29',
                unit:'℃',
                status:"5"
              },{
                title:'MB机房',
                value:'17',
                unit:'℃',
                status:"1"
              },{
                title:'MC机房',
                value:'19',
                unit:'℃',
                status:"3"
              },{
                title:'MD机房',
                value:'22',
                unit:'℃',
                status:"0"
              },{
                title:'ME机房',
                value:'12',
                unit:'℃',
                status:"4"
              },{
                title:'MF机房',
                value:'26',
                unit:'℃',
                status:"0"
              },{
                title:'MG机房',
                value:'25',
                unit:'℃',
                status:"4"
              },{
                title:'MH机房',
                value:'21',
                unit:'℃',
                status:"0"
              },{
                title:'MI机房',
                value:'29',
                unit:'℃',
                status:"1"
              },
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "",
            height: "",
          },
          componentStyle: {
            uComponentConfig: {
              alternatePlay: true,
              lifeTime: "10S",
              pageSize: 5,
              statusPanelContainerWidth:'190px',
              statusPanelContainerHeight:'190px',
              statusPanelContainerBorderWidth:'5px',
              statusPanelContainerBorderColor0:'rgba(200, 85, 109, 0)',
              statusPanelContainerBackgroundImage0:'radial-gradient(50% 50% at 50% 50%, rgba(43, 121, 217, 0.4),rgba(43, 121, 217, 0.4)',
              statusPanelContainerBorderColor1:'rgba(200, 85, 109, 0)',
              statusPanelContainerBackgroundImage1:'radial-gradient(50% 50% at 50% 50%, rgba(66, 248, 66, 0.1),rgba(66, 248, 66, 0.4)',
              statusPanelContainerBorderColor2:'rgba(255, 124, 0, 0)',
              statusPanelContainerBackgroundImage2:'radial-gradient(50% 50% at 50% 50%, rgba(34, 139, 255, 0.1),rgba(34, 139, 255, 0.4)',
              statusPanelContainerBorderColor3:'rgba(0, 255, 125, 0)',
              statusPanelContainerBackgroundImage3:'radial-gradient(50% 50% at 50% 50%, rgba(248, 212, 66, 0.1),rgba(248, 212, 66, 0.4)',
              statusPanelContainerBorderColor4:'rgba(254,0,124,0)',
              statusPanelContainerBackgroundImage4:'radial-gradient(50% 50% at 50% 50%, rgba(243, 101, 35, 0.1),rgba(243, 101, 35, 0.4)',
              statusPanelContainerBorderColor5:'rgba(255, 255, 1, 0)',
              statusPanelContainerBackgroundImage5:'radial-gradient(50% 50% at 50% 50%, rgba(248, 66, 66, 0.1),rgba(248, 66, 66, 0.4)',
              statusPanelTitleColor:'rgba(255, 255, 255, 1)',
              statusPanelValueColor:'rgba(255, 255, 255, 1)',
              statusPanelUnitColor:'rgba(255, 255, 255, 1)',
              statusPanelTitleFontSize:'20px',
              statusPanelValueFontSize:'49px',
              statusPanelUnitFontSize:'29px',
            }
          },
        }
      ]
    },


    /**
     * 高级状态面板
     */
    uStatusPanelAdvanced:{
      id: "",
      name: "高级状态面板",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1158px",
        height: "370px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uStatusPanelAdvanced",
          name: "高级状态面板",
          type: "uStatusPanelAdvanced",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          datasource: {
            type: "json",
            value: [
              {
                title:'应用名称',
                status:'0',
                tips:'20',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'1',
                tips:'0',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'2',
                tips:'33',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'3',
                tips:'1',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'4',
                tips:'0',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'5',
                tips:'12',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'0',
                tips:'71',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              },{
                title:'应用名称',
                status:'1',
                tips:'21',
                item:[
                  {
                    value:'95',
                    unit:'%',
                    subtitle:'响应率',
                  },{
                    value:'87',
                    unit:'%',
                    subtitle:'成功率',
                  },{
                    value:'0.03',
                    unit:'s',
                    subtitle:'相应时间',
                  },{
                    value:'5',
                    unit:'笔/秒',
                    subtitle:'TPS',
                  }
                ],
              }],
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "",
            height: "",
          },
          componentStyle: {
            uComponentConfig: {
              alternatePlay: true,
              lifeTime: "10S",
              pageSize: 5,
              spawidth:'190px',
              spaheight:'130px',
              spamr:'20px',
              spamb:'20px',
              spatipsfz:'15px',
              spatipscol:'rgba(255, 255, 255, 1)',
              spatipswidth:'30px',
              spatipsheight:'30px',
              spatipsborderradius:'15px',
              spatipsmt:'-15px',
              spatipsml:'168px',
              spatitlefz:'15px',
              spatitlecol:'rgba(255, 255, 255, 1)',
              spatitlemt:'8px',
              spatitleml:'0px',
              spatitlemr:'0px',
              spavaluefz:'10px',
              spavaluecol:'rgba(255, 255, 255, 1)',
              spaunitfz:'10px',
              spaunitcol:'rgba(255, 255, 255, 1)',
              spasubtitlefz:'12px',
              spasubtitlecol:'rgba(255, 255, 255, 1)',
              spacontainermt:'2px',
              spaitemwidth:'70px',
              spaitemml:'25px',
              spaitemmb:'7px',
              status0Color: 'rgba(0, 0, 0, 0.5)',
              status1Color: 'rgba(66, 248, 66, 0.5)',
              status2Color: 'rgba(34, 139, 255, 0.5)',
              status3Color: 'rgba(248, 212, 66, 0.5)',
              status4Color: 'rgba(243, 101, 35, 0.5)',
              status5Color: 'rgba(248, 66, 66, 0.5)',
              titleAlign: {
                value: 'center',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              status0bgi:'radial-gradient(50% 50% at 50% 50%, rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)',
              status1bgi:'radial-gradient(50% 50% at 50% 50%, rgba(66, 248, 66, 0),rgba(66, 248, 66, 0.3)',
              status2bgi:'radial-gradient(50% 50% at 50% 50%, rgba(34, 139, 255, 0),rgba(34, 139, 255, 0.3)',
              status3bgi:'radial-gradient(50% 50% at 50% 50%, rgba(248, 212, 66, 0),rgba(248, 212, 66, 0.3)',
              status4bgi:'radial-gradient(50% 50% at 50% 50%, rgba(243, 101, 35, 0),rgba(243, 101, 35, 0.3)',
              status5bgi:'radial-gradient(50% 50% at 50% 50%, rgba(248, 66, 66, 0),rgba(248, 66, 66, 0.3)',
            }
          },
        }
      ]
    },

    /**
     * 高级状态面板NEW
     */
    uPanelAdvance:{
      id: "",
      name: "高级状态面板",
      layoutType: "normal",
      isSelected: false,
      isResizing: false,
      isMoving: false,
      isComponentOpen: false,
      isChange: false,
      isEditLyoutName: false,
      style: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "1158px",
        height: "370px",
        backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "100%",
        isShow: true,
        isLock: false
      },
      components: [
        {
          id: "uPanelAdvance",
          name: "高级状态面板",
          type: "uPanelAdvance",
          heartbeat: 5,
          isSelected: false,
          isResizing: false,
          isMoving: false,
          isCellEnable: true,
          datasourceMap:[
            {
              name: "标题",
              mapKey: "title",
              formatter: "",
              itemStyle: ""
            },
            {
              name: "面板样式",
              mapKey: "",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundImage:'radial-gradient(50% 50% at 50% 50%, rgba(43, 121, 217, 0.4),rgba(43, 121, 217, 0.4)',\n" +
              "        borderColor: 'rgba(200, 85, 109, 0)'\n" +
              "    }\n" +
              "    let tips = parseFloat(this.Obj.tips)\n" +
              "    if(tips > 0 && tips <= 1){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(66, 248, 66, 0.1),rgba(66, 248, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(200, 85, 109, 0)'\n" +
              "    }\n" +
              "    if(tips > 1 && tips <= 2){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(34, 139, 255, 0.1),rgba(34, 139, 255, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(255, 124, 0, 0)'\n" +
              "    }\n" +
              "    if(tips > 2 && tips <= 3){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(248, 212, 66, 0.1),rgba(248, 212, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(0, 255, 125, 0)'\n" +
              "    }\n" +
              "    if(tips > 3 && tips <= 4){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(243, 101, 35, 0.1),rgba(243, 101, 35, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(254,0,124,0)'\n" +
              "    }\n" +
              "    if(tips > 4){\n" +
              "        styleObj.backgroundImage = 'radial-gradient(50% 50% at 50% 50%, rgba(248, 66, 66, 0.1),rgba(248, 66, 66, 0.4)'\n" +
              "        styleObj.borderColor = 'rgba(255, 255, 1, 0)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "数字灯泡",
              mapKey: "tips",
              formatter: "",
              itemStyle: "function(){\n" +
              "    let styleObj={\n" +
              "        backgroundColor:'rgba(0, 0, 0, 0)',\n" +
              "        color: 'rgba(0, 0, 0, 0)'\n" +
              "    }\n" +
              "    let tips = parseFloat(this.Obj.tips)\n" +
              "    if(tips > 0 && tips <= 1){\n" +
              "        styleObj.backgroundColor = 'rgba(66, 248, 66, 0.4)'\n" +
              "        styleObj.color = 'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(tips > 1 && tips <= 2){\n" +
              "        styleObj.backgroundColor = 'rgba(34, 139, 255, 0.4)'\n" +
              "        styleObj.color = 'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(tips > 2 && tips <= 3){\n" +
              "        styleObj.backgroundColor = 'rgba(248, 212, 66, 0.4)'\n" +
              "        styleObj.color = 'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(tips > 3 && tips <= 4){\n" +
              "        styleObj.backgroundColor = 'rgba(243, 101, 35, 0.4)'\n" +
              "        styleObj.color = 'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    if(tips > 4){\n" +
              "        styleObj.backgroundColor = 'rgba(248, 66, 66, 0.4)'\n" +
              "        styleObj.color = 'rgba(255, 255, 255, 1)'\n" +
              "    }\n" +
              "    return styleObj\n" +
              "}"
            },
            {
              name: "响应率",
              mapKey: "resppercent",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.resppercent\n" +
              "    return rawValue * 100 + \" %\"\n" +
              "}",
              itemStyle: ""
            },
            {
              name: "成功率",
              mapKey: "sucpercent",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.sucpercent\n" +
              "    return rawValue * 100 + \" %\"\n" +
              "}",
              itemStyle: ""
            },
            {
              name: "响应时间",
              mapKey: "resptimes",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.resptimes\n" +
              "    return rawValue + \" s\"\n" +
              "}",
              itemStyle: ""
            },
            {
              name: "TPS",
              mapKey: "tps",
              formatter: "function(){\n" +
              "    let rawValue = this.Obj.tps\n" +
              "    return rawValue + \" 笔/秒\"\n" +
              "}",
              itemStyle: ""
            },
          ],
          datasource: {
            type: "json",
            dbapitype: "3",
            value: [
              {
                "title": "应用名称1",
                "tips": "1",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称2",
                "tips": "2",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称3",
                "tips": "3",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称4",
                "tips": "4",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称5",
                "tips": "5",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称6",
                "tips": "0",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称7",
                "tips": "1",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称8",
                "tips": "2",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称9",
                "tips": "3",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称10",
                "tips": "4",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              },
              {
                "title": "应用名称11",
                "tips": "5",
                "resppercent": 0.95,
                "sucpercent": 0.87,
                "resptimes": 0.03,
                "tps": 5
              }
            ],
            url: {
              reqtype: "POST",
              value: ""
            },
            database: {
              id: -1,
              dbtype: "",
              dbinstance: "",
              host: "",
              port: "",
              username: "",
              passwd: ""
            },
            sql: "SELECT * FROM TABLENAME"
          },
          style: {
            position: "absolute",
            top: "0",
            left: "0",
            width: "",
            height: "",
          },
          componentStyle: {
            uComponentConfig: {
              alternatePlay: false,
              lifeTime: "10S",
              pageSize: 5,
              spawidth:'190px',
              spaheight:'130px',
              spamr:'20px',
              spamb:'20px',
              spatipsfz:'15px',
              spatipscol:'rgba(255, 255, 255, 1)',
              spatipswidth:'30px',
              spatipsheight:'30px',
              spatipsborderradius:'15px',
              spatipsmt:'-15px',
              spatipsml:'168px',
              spatitlefz:'15px',
              spatitlecol:'rgba(255, 255, 255, 1)',
              spatitlemt:'8px',
              spatitleml:'0px',
              spatitlemr:'0px',
              spavaluefz:'10px',
              spavaluecol:'rgba(255, 255, 255, 1)',
              spasubtitlefz:'12px',
              spasubtitlecol:'rgba(255, 255, 255, 1)',
              spacontainermt:'2px',
              spaitemwidth:'70px',
              spaitemml:'25px',
              spaitemmb:'7px',
              status0Color: 'rgba(43, 121, 217, 0.4)',
              titleAlign: {
                value: 'center',
                options: [
                  {
                    value: 'left',
                    label: '居左'
                  },
                  {
                    value: 'center',
                    label: '居中'
                  },
                  {
                    value: 'right',
                    label: '居右'
                  }
                ]
              },
              status0bgi:'radial-gradient(50% 50% at 50% 50%, rgba(43, 121, 217, 0.4),rgba(43, 121, 217, 0.4)',
            }
          },
        }
      ]
    },

  }

})(window)
