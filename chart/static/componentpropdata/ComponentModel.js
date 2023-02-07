(function (arg) {

  let self = arg

  self.ComponentModel = {
    shared:[
      {
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
      {
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
      {
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
    ],
    owner:[
      {
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
      {
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
                '电话': [200, 100, 50, 20, 10],
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
      {
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
      }
    ]
  }
})(window)
