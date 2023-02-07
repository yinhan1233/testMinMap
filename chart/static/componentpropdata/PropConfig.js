(function (arg) {

  let self = arg
  self.PropConfig = {
    props: {
      type: 'canvas',
      title: '画布设置',
      props: {}
    },
    propsConfigList: {
      canvas: {
        style: [
          {
            propName: 'width',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'height',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'backgroundImage',
            propType: 'lgcolor'
          },
        ],
        common: [
          {
            propName: 'heartbeat',
            propType: 'number'
          }
        ]
      },
      layout: [
        {
          propName: 'width',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'height',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'top',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'left',
          propType: 'numbersuffix',
          suffix: 'px'
        },
        {
          propName: 'backgroundImage',
          propType: 'lgcolor',
        },
        {
          propName: 'isShow',
          propType: 'switch'
        },
      ],
      uSingleText: {
        style: [
          {
            propName: 'fontStyle',
            propType: 'font',
            condition: 'withAlign'
          },
          {
            propName: 'color',
            propType: 'color'
          },

        ]
      },
      uCountDown: {
        style:[
          {
            propName: 'splitUnit',
            propType: 'switch'
          },
          {
            propName: 'suffixCharacter',
            propType: 'text'
          },
          {
            propName: 'width',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'height',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'borderRadius',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'topColor',
            propType: 'lgcolor'
          },
          {
            propName: 'bottomColor',
            propType: 'lgcolor'
          },
          {
            propName: 'numberFontColor',
            propType: 'color'
          },
          {
            propName: 'numberStyle',
            propType: 'font',
            condition: 'withAlign'
          },
          {
            propName: 'numberFontWeight',
            propType: 'select'
          },
          {
            propName: 'characterFontColor',
            propType: 'color'
          },
          {
            propName: 'characterStyle',
            propType: 'font',
            condition: 'withAlign'
          },
          {
            propName: 'characterFontWeight',
            propType: 'select'
          },
          {
            propName: 'marginLeft',
            propType: 'numbersuffix',
            suffix: 'px'
          },
        ]
      },
      uTextList: {
        style: [
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'titleBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemAlign',
            propType: 'select'
          },
          {
            propName: 'itemHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemEvenFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenFontColor',
            propType: 'color'
          },
          {
            propName: 'itemOddFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemOddFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemOddBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderStyle',
            propType: 'select'
          },
          {
            propName: 'itemColumnWidth',
            propType: 'text'
          },
        ]
      },
      uTextListStatus: {
        style: [
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'titleBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemAlign',
            propType: 'select'
          },
          {
            propName: 'itemHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemEvenFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenFontColor',
            propType: 'color'
          },
          {
            propName: 'itemOddFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemOddFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemOddBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderStyle',
            propType: 'select'
          },
          {
            propName: 'itemColumnWidth',
            propType: 'text'
          },
          {
            propName: 'statusPosition',
            propType: 'select'
          },
          {
            propName: 'statusPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'status1Icon',
            propType: 'text'
          },
          {
            propName: 'status1Color',
            propType: 'color'
          },
          {
            propName: 'status2Icon',
            propType: 'text'
          },
          {
            propName: 'status2Color',
            propType: 'color'
          },
          {
            propName: 'status3Icon',
            propType: 'text'
          },
          {
            propName: 'status3Color',
            propType: 'color'
          },
          {
            propName: 'status4Icon',
            propType: 'text'
          },
          {
            propName: 'status4Color',
            propType: 'color'
          },
          {
            propName: 'status5Icon',
            propType: 'text'
          },
          {
            propName: 'status5Color',
            propType: 'color'
          },
        ]
      },
      uTextListAdvance: {
        style: [
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'titleBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemAlign',
            propType: 'select'
          },
          {
            propName: 'itemHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemEvenFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenFontColor',
            propType: 'color'
          },
          {
            propName: 'itemOddFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemOddFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemOddBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderStyle',
            propType: 'select'
          },
          {
            propName: 'itemColumnWidth',
            propType: 'text'
          },
          {
            propName: 'statusPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'status1Icon',
            propType: 'text'
          },
          {
            propName: 'status1Color',
            propType: 'color'
          },
          {
            propName: 'status1UnitColor',
            propType: 'color'
          },
          {
            propName: 'status2Icon',
            propType: 'text'
          },
          {
            propName: 'status2Color',
            propType: 'color'
          },
          {
            propName: 'status2UnitColor',
            propType: 'color'
          },
          {
            propName: 'status3Icon',
            propType: 'text'
          },
          {
            propName: 'status3Color',
            propType: 'color'
          },
          {
            propName: 'status3UnitColor',
            propType: 'color'
          },
          {
            propName: 'status4Icon',
            propType: 'text'
          },
          {
            propName: 'status4Color',
            propType: 'color'
          },
          {
            propName: 'status4UnitColor',
            propType: 'color'
          },
          {
            propName: 'status5Icon',
            propType: 'text'
          },
          {
            propName: 'status5Color',
            propType: 'color'
          },
          {
            propName: 'status5UnitColor',
            propType: 'color'
          },
        ]
      },

      uListAdvance: {
        style: [
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'titleBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemAlign',
            propType: 'select'
          },
          {
            propName: 'itemHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemEvenFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemOddFontColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenFontColor',
            propType: 'color'
          },
          {
            propName: 'itemOddFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontStyle',
            propType: 'select'
          },
          {
            propName: 'itemOddFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemEvenFontWeight',
            propType: 'select'
          },
          {
            propName: 'itemOddBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemEvenBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderColor',
            propType: 'color'
          },
          {
            propName: 'itemBorderStyle',
            propType: 'select'
          },
          {
            propName: 'itemColumnWidth',
            propType: 'text'
          },
          {
            propName: 'statusPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
        ]
      },
      uValueProportion: {
        style:[
          {
            propName: 'listStyle',
            propType: 'select'
          },
          {
            propName: 'boxPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleText',
            propType: 'text'
          },
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titlePadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'valueAlign',
            propType: 'select'
          },
          {
            propName: 'valueHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'valueWidth',
            propType: 'text'
          },
          {
            propName: 'valueFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'valueFontColor',
            propType: 'color'
          },
          {
            propName: 'valueFontStyle',
            propType: 'select'
          },
          {
            propName: 'valueFontWeight',
            propType: 'select'
          },
          {
            propName: 'valueBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'unitValue',
            propType: 'text'
          },
          {
            propName: 'unitHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitWidth',
            propType: 'text'
          },
          {
            propName: 'unitFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitFontColor',
            propType: 'color'
          },
          {
            propName: 'unitFontStyle',
            propType: 'select'
          },
          {
            propName: 'unitFontWeight',
            propType: 'select'
          },
          {
            propName: 'unitBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'colorLinePosition',
            propType: 'select'
          },
          {
            propName: 'colorLineWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'colorLineColor',
            propType: 'color'
          },
        ]
      },
      uProgressList: {
        style:[
          {
            propName: 'titleText',
            propType: 'text'
          },
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titlePadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'progressHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressRadius',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressBackgroundColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'progressColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'progressPaddingTop',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitValue',
            propType: 'text'
          },
          {
            propName: 'unitHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitFontColor',
            propType: 'color'
          },
          {
            propName: 'unitFontStyle',
            propType: 'select'
          },
          {
            propName: 'unitFontWeight',
            propType: 'select'
          },
          {
            propName: 'unitBackgroundColor',
            propType: 'color'
          },
        ]
      },
      uProgressListNew: {
        style:[
          {
            propName: 'titleText',
            propType: 'text'
          },
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'titleAlign',
            propType: 'select'
          },
          {
            propName: 'titleHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titlePadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleFontColor',
            propType: 'color'
          },
          {
            propName: 'titleFontStyle',
            propType: 'select'
          },
          {
            propName: 'titleFontWeight',
            propType: 'select'
          },
          {
            propName: 'titleBackgroundColor',
            propType: 'color'
          },
          {
            propName: 'progressHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressRadius',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'progressBackgroundColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'progressColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'progressPaddingTop',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitValue',
            propType: 'text'
          },
          {
            propName: 'unitHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitPadding',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'unitFontColor',
            propType: 'color'
          },
          {
            propName: 'unitFontStyle',
            propType: 'select'
          },
          {
            propName: 'unitFontWeight',
            propType: 'select'
          },
          {
            propName: 'unitBackgroundColor',
            propType: 'color'
          },
        ]
      },
      uNumberCard: {
        style:[
          {
            propName: 'width',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'height',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'numberLength',
            propType: 'number'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          },
          {
            propName: 'cornerWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'cornerHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'cornerSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'itemMargin',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'backgroundImage',
            propType: 'lgcolor'
          },
          {
            propName: 'fontFamily',
            propType: 'select',
          },
          {
            propName: 'fontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'fontColor',
            propType: 'color'
          },
          {
            propName: 'floatTimes',
            propType: 'numbersuffix',
            suffix: '秒'
          },
        ]
      },
      uTimeCard: {
        style:[
          {
            propName: 'fontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'fontColor',
            propType: 'color'
          },
          {
            propName: 'timeFormat',
            propType: 'select'
          },
          {
            propName: 'timeMargin',
            propType: 'numbersuffix',
            suffix: 'px'
          }
        ]
      },
      uPie: {
        style:[
          {
            propName: 'pieName',
            propType: 'text',
          },
          {
            propName: 'pieRadius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'diagramSize',
            propType: 'label',
          },
          {
            propName: 'isLabel',
            propType: 'switch',
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
          {
            propName: 'lineWidth',
            propType: 'number',
          },
          {
            propName: 'lineLength',
            propType: 'number',
          },
          {
            propName: 'lineLength2',
            propType: 'number',
          },
          {
            propName: 'lineSmoth',
            propType: 'switch',
          },
          {
            propName: 'fontSize',
            propType: 'number',
          },
          {
            propName: 'diagramSize',
            propType: 'label',
          }
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          },
        ]
      },
      u3DPie: {
        style: [
          {
            propName: 'hName',
            propType: 'text',
          },
          {
            propName: 'hEnable3d',
            propType: 'switch'
          },
          {
            propName: 'hAlpha',
            propType: 'number'
          },
          {
            propName: 'hBeta',
            propType: 'number'
          },
          {
            propName: 'hDepth',
            propType: 'number'
          },
          {
            propName: 'hInnerSize',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'hLabelEnable',
            propType: 'switch'
          },
          {
            propName: 'hDLConnectorPadding',
            propType: 'number'
          },
          {
            propName: 'hDLDistance',
            propType: 'number'
          },
          {
            propName: 'hDLSoftConnector',
            propType: 'switch'
          },
          {
            propName: 'hDLFontColor',
            propType: 'color'
          },
          {
            propName: 'hDLFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'hDLFontWeight',
            propType: 'select'
          },
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'color',
          },
        ]
      },

      u3DBar: {
        style: [
          {
            propName: 'hEnable3d',
            propType: 'switch'
          },
          {
            propName: 'hAlpha',
            propType: 'number'
          },
          {
            propName: 'hBeta',
            propType: 'number'
          },
          {
            propName: 'hDepth',
            propType: 'number'
          },
          {
            propName: 'hViewDistance',
            propType: 'number'
          },
          {
            propName: 'hStacking',
            propType: 'select'
          },
          {
            propName: 'hPlotOptionsDept',
            propType: 'number'
          },
          {
            propName: 'hDLEnable',
            propType: 'switch'
          },
          {
            propName: 'hDLInside',
            propType: 'switch'
          },
          {
            propName: 'hDLFontColor',
            propType: 'color'
          },
          {
            propName: 'hDLFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'hDLFontWeight',
            propType: 'select'
          },
          {
            propName: 'hAllowDecimals',
            propType: 'switch'
          },
          {
            propName: 'hXGridLineColor',
            propType: 'color'
          },
          {
            propName: 'hXGridLineDashStyle',
            propType: 'select'
          },
          {
            propName: 'hXgridLineWidth',
            propType: 'number'
          },
          {
            propName: 'hXLabelColor',
            propType: 'color'
          },
          {
            propName: 'hXLabelFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'hYGridLineColor',
            propType: 'color'
          },
          {
            propName: 'hYGridLineDashStyle',
            propType: 'select'
          },
          {
            propName: 'hYgridLineWidth',
            propType: 'number'
          },
          {
            propName: 'hYLabelColor',
            propType: 'color'
          },
          {
            propName: 'hYLabelFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'color',
          },
        ]
      },

      uPieCicle: {
        style:[
          {
            propName: 'pieName',
            propType: 'text',
          },
          {
            propName: 'pieOutRadius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'pieInnerRadius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'diagramSize',
            propType: 'label',
          },
          {
            propName: 'isLabel',
            propType: 'switch',
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'fontSize',
            propType: 'number',
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
          {
            propName: 'lineWidth',
            propType: 'number',
          },
          {
            propName: 'lineLength',
            propType: 'number',
          },
          {
            propName: 'lineLength2',
            propType: 'number',
          },
          {
            propName: 'lineSmoth',
            propType: 'switch',
          },
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          },
        ]
      },
      uPieMultiCicle: {
        style:[
          {
            propName: 'pieName',
            propType: 'text',
          },
          {
            propName: 'cicleWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'diagramSize',
            propType: 'label'
          },
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          },
        ]
      },
      uPieRose: {
        style:[
          {
            propName: 'pieName',
            propType: 'text',
          },
          {
            propName: 'roseColor',
            propType: 'color'
          },
          {
            propName: 'pieRadius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'diagramSize',
            propType: 'label',
          },
          {
            propName: 'isLabel',
            propType: 'switch',
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'fontSize',
            propType: 'number',
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
          {
            propName: 'lineWidth',
            propType: 'number',
          },
          {
            propName: 'lineLength',
            propType: 'number',
          },
          {
            propName: 'lineLength2',
            propType: 'number',
          },
          {
            propName: 'lineSmoth',
            propType: 'switch',
          },
        ]
      },
      uRectLayout: {
        style:[
          {
            propName: 'rectTypeProp',
            propType: 'select'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          },
          {
            propName: 'leftCicleColor',
            propType: 'color'
          },
          {
            propName: 'specBorderColor',
            propType: 'color'
          },
          {
            propName: 'alertRectColor',
            propType: 'color'
          },
          {
            propName: 'alertIconColor',
            propType: 'color'
          },
          {
            propName: 'bgColor',
            propType: 'lgcolor'
          }
        ]
      },
      u2DMapChina: {
        style: [
          {
            propName: 'areaColor',
            propType: 'color'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          },
          {
            propName: 'scatterColor',
            propType: 'color'
          },
          {
            propName: 'alColor',
            propType: 'color'
          },
          {
            propName: 'isEffectLine',
            propType: 'switch'
          },
          {
            propName: 'isAnimationLine',
            propType: 'switch'
          }
        ]
      },
      u2DMapWorld: {
        style: [
          {
            propName: 'areaColor',
            propType: 'color'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          },
          {
            propName: 'scatterColor',
            propType: 'color'
          },
          {
            propName: 'alColor',
            propType: 'color'
          },
          {
            propName: 'isEffectLine',
            propType: 'switch'
          },
          {
            propName: 'isAnimationLine',
            propType: 'switch'
          }
        ]
      },
      uGlobe: {
        mapconfig: [
          {
            propName: 'globeType',
            propType: 'select'
          },
          {
            propName: 'globeBgColor',
            propType: 'color'
          },
          {
            propName: 'mapColor',
            propType: 'color'
          },
          {
            propName: 'mapBorderColor',
            propType: 'color'
          },
          {
            propName: 'emphasisMapColor',
            propType: 'color'
          },
          {
            propName: 'skyColor',
            propType: 'color'
          },
          {
            propName: 'scaller3DColor',
            propType: 'color'
          },
          {
            propName: 'line3DColor',
            propType: 'color'
          },
          {
            propName: 'isEffectLine',
            propType: 'switch'
          },
          {
            propName: 'isEffectScatter',
            propType: 'switch'
          }
        ]
      },
      uLiquidFill: {
        style: [
          {
            propName: 'radius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'outlineBorderWidth',
            propType: 'number',
          },
          {
            propName: 'outlineBorderDistance',
            propType: 'number',
          },
          {
            propName: 'labelFontSize',
            propType: 'number',
          },
          {
            propName: 'labelColor',
            propType: 'color',
          },
          {
            propName: 'range',
            propType: 'text'
          },
          {
            propName: 'liquidColor1',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBGColor1',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBorderColor1',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidColor2',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBGColor2',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBorderColor2',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidColor3',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBGColor3',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBorderColor3',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidColor4',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBGColor4',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBorderColor4',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidColor5',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBGColor5',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'liquidBorderColor5',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'diagramSize',
            propType: 'label',
          },
        ]
      },
      uIframe: {
        style: [
          {
            propName: 'iframeUrl',
            propType: 'text'
          }
        ]
      },
      uDPDFrame: {
        style: [
          {
            propName: 'uDPDSceneId',
            propType: 'text'
          }
        ]
      },
      uVideo: {
        style: [
          {
            propName: 'videoUrl',
            propType: 'lgcolor',
            condition: 'video'
          },
          {
            propName: 'autoplay',
            propType: 'switch'
          },
          {
            propName: 'controls',
            propType: 'switch'
          },
          {
            propName: 'loop',
            propType: 'switch'
          },
          {
            propName: 'muted',
            propType: 'switch'
          },
        ]
      },
      uBar: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barDirection',
            propType: 'select'
          },
          {
            propName: 'barColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'multiColor',
            propType: 'switch'
          },
          {
            propName: 'barWidth',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffsetX',
            propType: 'number'
          },
          {
            propName: 'labelOffsetY',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uBarIcon: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'symbol',
            propType: 'select'
          },
          {
            propName: 'symbolSizeX',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'symbolSizeY',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'barDirection',
            propType: 'select'
          },
          {
            propName: 'barColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'multiColor',
            propType: 'switch'
          },
          {
            propName: 'barWidth',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffsetX',
            propType: 'number'
          },
          {
            propName: 'labelOffsetY',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uBarMulti: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barDirection',
            propType: 'select'
          },
          {
            propName: 'barPlace',
            propType: 'select'
          },
          {
            propName: 'barWidth',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffsetX',
            propType: 'number'
          },
          {
            propName: 'labelOffsetY',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uBarMultiLine: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barDirection',
            propType: 'select'
          },
          {
            propName: 'barPlace',
            propType: 'select'
          },
          {
            propName: 'barWidth',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLegend',
            propType: 'switch'
          },
          {
            propName: 'isLine',
            propType: 'switch'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },

          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffsetX',
            propType: 'number'
          },
          {
            propName: 'labelOffsetY',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uBarProcess: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barWidth',
            propType: 'number',
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffset',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          },
          {
            propName: 'borderWidth',
            propType: 'number'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          }
        ]
      },
      //告警分布图
      uAlarmMap:{
        style: [

          {
            propName: 'alarmW1',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmFZ1',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmFZ2',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmH',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmW2Min',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmBC1',
            propType: 'color',
          },
          {
            propName: 'alarmC1',
            propType: 'color',
          },
          {
            propName: 'alarmBC2',
            propType: 'color',
          },
          {
            propName: 'alarmC2',
            propType: 'color',
          },
          {
            propName: 'alarmTC1',
            propType: 'color'
          },
          {
            propName: 'alarmTC2',
            propType: 'color'
          },
          {
            propName: 'alarmTC3',
            propType: 'color'
          },
          {
            propName: 'alarmTC4',
            propType: 'color'
          },
          {
            propName: 'alarmTC5',
            propType: 'color'
          }
        ]
      },
      //告警分布图-区域
      uAlarmMapArea:{
        style: [
          {
            propName: 'alarmW1',
            propType: 'numbersuffix',
            suffix: 'px'
          },


          {
            propName: 'alarmFZ1',
            propType: 'numbersuffix',
            suffix: 'px'
          },

          {
            propName: 'alarmFZ2',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmH',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmW2Min',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'alarmBC1',
            propType: 'color',
          },
          {
            propName: 'alarmC1',
            propType: 'color',
          },
          {
            propName: 'alarmBC2',
            propType: 'color',
          },
          {
            propName: 'alarmC2',
            propType: 'color',
          },
          {
            propName: 'alarmTC1',
            propType: 'color'
          },
          {
            propName: 'alarmTC2',
            propType: 'color'
          },
          {
            propName: 'alarmTC3',
            propType: 'color'
          },
          {
            propName: 'alarmTC4',
            propType: 'color'
          },
          {
            propName: 'alarmTC5',
            propType: 'color'
          }
        ]
      },
      //值班管理
      uManage:{
        style: [
          {
            propName: 'mgTitleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mgInfoFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mgTitleCol',
            propType: 'color',
          },
          {
            propName: 'mgDcCol',
            propType: 'color',
          },
          {
            propName: 'mgDutynameCol',
            propType: 'color',
          },
          {
            propName: 'mgIconCol',
            propType: 'color',
          },
          {
            propName: 'mgDutystuffNameCol',
            propType: 'color',
          },
          {
            propName: 'mgDutystuffStarCol',
            propType: 'color',
          },
          {
            propName: 'mgDutystuffnumberCol',
            propType: 'color',
          },
          {
            propName: 'mgDutyhotlineCol',
            propType: 'color',
          },
          {
            propName: 'mgDelayBgc',
            propType: 'color',
          },
          {
            propName: 'mgDelayBc',
            propType: 'color',
          },
          {
            propName: 'mgNormalBgc',
            propType: 'color',
          },
          {
            propName: 'mgNormalBc',
            propType: 'color',
          },
          {
            propName: 'mgOtherBgc',
            propType: 'color',
          },
          {
            propName: 'mgOtherBc',
            propType: 'color',
          }
        ]
      },

      //当班信息
      uOnDuty:{
        style: [

          {
            propName: 'ODfontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'ODiconCol',
            propType: 'color',
          },
          {
            propName: 'ODtitleColor',
            propType: 'color',
          },
          {
            propName: 'ODinfoColor',
            propType: 'color',
          },
          {
            propName: 'ODstate1Col',
            propType: 'color',
          },
          {
            propName: 'ODstate2Col',
            propType: 'color',
          },
          {
            propName: 'ODstate3Col',
            propType: 'color',
          },
          {
            propName: 'ODstarCol',
            propType: 'color',
          },
          {
            propName: 'ODtelCol',
            propType: 'color',
          }
        ]
      },

      //值班人员
      uOnDutyMember:{
        style: [
          {
            propName: 'titleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'typeFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'infoFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'titleCol',
            propType: 'color',
          },
          {
            propName: 'typeCol',
            propType: 'color',
          },
          {
            propName: 'infoCol',
            propType: 'color',
          },
        ],
      },

      //全国数据中心概括
      uCountryData:{
        style: [
          {
            propName: 'mapStrokeWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mapFill',
            propType: 'color'
          },
          {
            propName: 'mapStroke',
            propType: 'color'
          },
          {
            propName: 'mapFColor',
            propType: 'color'
          },
          {
            propName: 'mapFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mapLempR1',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mapLempR2',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mapLempStrokeWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'mapLempFill',
            propType: 'color'
          },
          {
            propName: 'mapLempStroke',
            propType: 'color'
          },
          {
            propName: 'mapLempRunFill',
            propType: 'color'
          },
          {
            propName: 'mapLempRunFill2',
            propType: 'color'
          },
          {
            propName: 'mapLempRunStroke',
            propType: 'color'
          },
          {
            propName: 'mapLempSetFill',
            propType: 'color'
          },
          {
            propName: 'mapLempSetStroke',
            propType: 'color'
          }
        ]
      },

      //状态面板
      uStatusPanel:{
        style: [
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'statusPanelContainerWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelContainerHeight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelContainerBorderWidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelTitleFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelValueFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelUnitFontSize',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'statusPanelContainerBorderColor0',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage0',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelContainerBorderColor1',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage1',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelContainerBorderColor2',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage2',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelContainerBorderColor3',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage3',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelContainerBorderColor4',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage4',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelContainerBorderColor5',
            propType: 'color',
          },
          {
            propName: 'statusPanelContainerBackgroundImage5',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'statusPanelTitleColor',
            propType: 'color',
          },
          {
            propName: 'statusPanelValueColor',
            propType: 'color',
          },
          {
            propName: 'statusPanelUnitColor',
            propType: 'color',
          },


        ]
      },


      //高级状态面板
      uStatusPanelAdvanced:{
        style: [
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'spawidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaheight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spamr',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spamb',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsfz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipscol',
            propType: 'color',
          },
          {
            propName: 'spatipswidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsheight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsborderradius',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsmt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlecol',
            propType: 'color',
          },
          {
            propName: 'titleAlign',
            propType: 'select',
          },
          {
            propName: 'spatitlemt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitleml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlemr',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spavaluefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spavaluecol',
            propType: 'color',
          },
          {
            propName: 'spaunitfz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaunitcol',
            propType: 'color',
          },
          {
            propName: 'spasubtitlefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spasubtitlecol',
            propType: 'color',
          },
          {
            propName: 'spacontainermt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemwidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemmb',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'status0Color',
            propType: 'color',
          },
          {
            propName: 'status1Color',
            propType: 'color',
          },
          {
            propName: 'status2Color',
            propType: 'color',
          },
          {
            propName: 'status3Color',
            propType: 'color',
          },
          {
            propName: 'status4Color',
            propType: 'color',
          },
          {
            propName: 'status5Color',
            propType: 'color',
          },
          {
            propName: 'status0bgi',
            propType: 'lgcolor',
          },
          {
            propName: 'status1bgi',
            propType: 'lgcolor',
          },
          {
            propName: 'status2bgi',
            propType: 'lgcolor',
          },
          {
            propName: 'status3bgi',
            propType: 'lgcolor',
          },
          {
            propName: 'status4bgi',
            propType: 'lgcolor',
          },
          {
            propName: 'status5bgi',
            propType: 'lgcolor',
          },
        ]
      },

      //高级状态面板
      uPanelAdvance:{
        style: [
          {
            propName: 'alternatePlay',
            propType: 'switch'
          },
          {
            propName: 'lifeTime',
            propType: 'numbersuffix',
            suffix: 'S'
          },
          {
            propName: 'pageSize',
            propType: 'number'
          },
          {
            propName: 'spawidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaheight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spamr',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spamb',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsfz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipscol',
            propType: 'color',
          },
          {
            propName: 'spatipswidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsheight',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsborderradius',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsmt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatipsml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlecol',
            propType: 'color',
          },
          {
            propName: 'titleAlign',
            propType: 'select',
          },
          {
            propName: 'spatitlemt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitleml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spatitlemr',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spavaluefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spavaluecol',
            propType: 'color',
          },
          {
            propName: 'spasubtitlefz',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spasubtitlecol',
            propType: 'color',
          },
          {
            propName: 'spacontainermt',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemwidth',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemml',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'spaitemmb',
            propType: 'numbersuffix',
            suffix: 'px'
          }
        ]
      },

      //todo:响应式进度条
      uBarProgress: {
        style: [
          {
            propName: 'width',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'height',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'top',
            propType: 'numbersuffix',
            suffix: 'px'
          },
          {
            propName: 'left',
            propType: 'numbersuffix',
            suffix: 'px'
          }
        ],
        barstyle: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barWidth',
            propType: 'number',
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelOffset',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        barcolor:[
          {
            propName: 'color',
            propType: 'color'
          },
          {
            propName: 'borderWidth',
            propType: 'number'
          },
          {
            propName: 'borderColor',
            propType: 'color'
          }
        ]
      },
      uBarBG: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barDirection',
            propType: 'select'
          },
          {
            propName: 'barfontSize',
            propType: 'number'
          },
          {
            propName: 'barColorbg',
            propType: 'color'
          },
          {
            propName: 'barColorinner',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'barWidthbg',
            propType: 'number',
          },
          {
            propName: 'barWidthinner',
            propType: 'number',
          },
          {
            propName: 'barBorderRadius',
            propType: 'text',
          },
          {
            propName: 'barBorderRadiusinner',
            propType: 'text',
          },
          {
            propName: 'barGap',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelColor',
            propType: 'color'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ]
      },
      uBarLRHoriz: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'barPlace',
            propType: 'select'
          },
          {
            propName: 'barWidth',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'barfontSize',
            propType: 'number'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'axisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'axisWidth',
            propType: 'number'
          },
          {
            propName: 'axisType',
            propType: 'select'
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'axisfontSize',
            propType: 'number'
          },
          {
            propName: 'axisPosition',
            propType: 'select'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uLine: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'lineColor',
            propType: 'color'
          },
          {
            propName: 'lineWidth',
            propType: 'number'
          },
          {
            propName: 'isSmoth',
            propType: 'switch'
          },
          {
            propName: 'isPoint',
            propType: 'switch'
          },
          {
            propName: 'pointWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'xAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'xAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ]
      },
      uLineMulti: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'lineColor',
            propType: 'color'
          },
          {
            propName: 'lineWidth',
            propType: 'number'
          },
          {
            propName: 'isSmoth',
            propType: 'switch'
          },
          {
            propName: 'isPoint',
            propType: 'switch'
          },
          {
            propName: 'pointWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'xAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'yAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ]
      },
      uLineArea: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'lineColor',
            propType: 'color'
          },
          {
            propName: 'lineWidth',
            propType: 'number'
          },
          {
            propName: 'isSmoth',
            propType: 'switch'
          },
          {
            propName: 'isPoint',
            propType: 'switch'
          },
          {
            propName: 'pointWidth',
            propType: 'number'
          },
          {
            propName: 'areaColor',
            propType: 'lgcolor',
            condition: 'noimage'
          },
          {
            propName: 'xAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'xAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'yAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },
          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ],
        areaColor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uLineAreaMulti: {
        style: [
          {
            propName: 'barName',
            propType: 'text'
          },
          {
            propName: 'lineWidth',
            propType: 'number'
          },
          {
            propName: 'isSmoth',
            propType: 'switch'
          },
          {
            propName: 'isPoint',
            propType: 'switch'
          },
          {
            propName: 'pointWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'xAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'xAxisColor',
            propType: 'color'
          },
          {
            propName: 'isX',
            propType: 'switch'
          },
          {
            propName: 'isXaxis',
            propType: 'switch'
          },
          {
            propName: 'xAxisWidth',
            propType: 'number'
          },
          {
            propName: 'xAxisType',
            propType: 'select'
          },
          {
            propName: 'isxAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'xAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'xAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'xAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'xAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'axisRotate',
            propType: 'number',
          },
          {
            propName: 'isXsplit',
            propType: 'switch'
          },
          {
            propName: 'xSplitColor',
            propType: 'color'
          },
          {
            propName: 'xSplitWidth',
            propType: 'number'
          },
          {
            propName: 'xSplitType',
            propType: 'select'
          },
          {
            propName: 'isY',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableInterval',
            propType: 'text'
          },
          {
            propName: 'yAxisLableFormatter',
            propType: 'textarea'
          },
          {
            propName: 'yAxisColor',
            propType: 'color'
          },
          {
            propName: 'isYaxis',
            propType: 'switch'
          },

          {
            propName: 'yAxisWidth',
            propType: 'number'
          },
          {
            propName: 'yAxisType',
            propType: 'select'
          },
          {
            propName: 'isyAxisLabel',
            propType: 'switch'
          },
          {
            propName: 'yAxisLableColor',
            propType: 'color'
          },
          {
            propName: 'yAxisLabelFontStyle',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontWeight',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelFontSize',
            propType: 'number'
          },
          {
            propName: 'yAxisLabelFontAlign',
            propType: 'select'
          },
          {
            propName: 'yAxisLabelBaseline',
            propType: 'select'
          },
          {
            propName: 'yaxisRotate',
            propType: 'number'
          },
          {
            propName: 'isYsplit',
            propType: 'switch'
          },
          {
            propName: 'ySplitColor',
            propType: 'color'
          },
          {
            propName: 'ySplitWidth',
            propType: 'number'
          },
          {
            propName: 'ySplitType',
            propType: 'select'
          },
          {
            propName: 'gridBottom',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridLeft',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'gridRight',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'isLabel',
            propType: 'switch'
          },
          {
            propName: 'labelPosition',
            propType: 'select'
          },
          {
            propName: 'labelFontSize',
            propType: 'number'
          },
          {
            propName: 'labelFormatter',
            propType: 'textarea'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ],
        areaColor:[
          {
            propName: 'color',
            propType: 'lgcolor',
            condition: 'noimage'
          }
        ]
      },
      uRadar: {
        style: [
          {
            propName: 'radaColor',
            propType: 'color'
          },
          {
            propName: 'radarName',
            propType: 'text'
          },
          {
            propName: 'nameColor',
            propType: 'color'
          },
          {
            propName: 'radarShap',
            propType: 'select'
          },
          {
            propName: 'isSplitline',
            propType: 'switch'
          },
          {
            propName: 'splitlineColor',
            propType: 'color'
          },
          {
            propName: 'splitArea',
            propType: 'switch'
          },
          {
            propName: 'isAxisline',
            propType: 'switch'
          },
          {
            propName: 'axislineColor',
            propType: 'color'
          },
          {
            propName: 'radarSymbol',
            propType: 'select'
          },
        ],
        itemcolor:[
          {
            propName: 'color',
            propType: 'color'
          }
        ]
      },
      uDashboard: {
        style:[
          {
            propName: 'radius',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'startAngle',
            propType: 'number',
          },
          {
            propName: 'endAngle',
            propType: 'number',
          },
          {
            propName: 'axisWidth',
            propType: 'number',
          },
          {
            propName: 'isAxisLable',
            propType: 'switch',
          },
          {
            propName: 'labelFontSize',
            propType: 'number',
          },
          {
            propName: 'labelFontWeight',
            propType: 'select',
          },
          {
            propName: 'labelColor',
            propType: 'color',
          },
          {
            propName: 'axisTickLength',
            propType: 'number',
          },
          {
            propName: 'axisTickColor',
            propType: 'color',
          },
          {
            propName: 'splitNumber',
            propType: 'number',
          },
          {
            propName: 'splitLineLength',
            propType: 'number',
          },
          {
            propName: 'splitLineColor',
            propType: 'color',
          },
          {
            propName: 'isPoints',
            propType: 'switch',
          },
          {
            propName: 'pointsLength',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'pointsWidth',
            propType: 'number',
          },
          {
            propName: 'isDetail',
            propType: 'switch',
          },
          {
            propName: 'detailWidth',
            propType: 'number',
          },
          {
            propName: 'detailHeight',
            propType: 'number',
          },
          {
            propName: 'detailBgColor',
            propType: 'color',
          },
          {
            propName: 'detailBorderWidth',
            propType: 'number',
          },
          {
            propName: 'detailBorderColor',
            propType: 'color',
          },
          {
            propName: 'detailOffsetLeft',
            propType: 'number',
          },
          {
            propName: 'detailOffsetTop',
            propType: 'numbersuffix',
            suffix: '%'
          },
          {
            propName: 'detailFontSize',
            propType: 'number',
          },
          {
            propName: 'detailFontWeight',
            propType: 'select',
          },
          {
            propName: 'detailFontColor',
            propType: 'color',
          },
          {
            propName: 'axisRange',
            propType: 'text',
          },
          {
            propName: 'rangeColor1',
            propType: 'lgcolor',
          },
          {
            propName: 'rangeColor2',
            propType: 'lgcolor',
          },
          {
            propName: 'rangeColor3',
            propType: 'lgcolor',
          },
          {
            propName: 'rangeColor4',
            propType: 'lgcolor',
          },
        ],
        itemcolor: [
          {
            propName: 'color',
            propType: 'color'
          },
        ]
      },
      uComponentControl: {
        style:[]
      }
    },
    propertyLabel: {
      width: '宽度',
      height: '高度',
      top: '距上',
      left: '距左',
      backgroundImage: '背景',
      background: '背景色',
      textAlign: '对齐方式',
      fontSize: '字体大小',
      color: '颜色',
      heartbeat: '刷新间隔',
      borderColor: '边框颜色',
      leftCicleColor: '科幻圈颜色',
      specBorderColor: '科幻条颜色',
      bgColor: '背景色',
      rectTypeProp: '框样式',
      areaColor: '填充颜色',
      isEffectScatter: '位置',
      isEffectLine: '连接线',
      isAnimationLine: '飞线',
      scatterColor: '位置颜色',
      alColor: '动线颜色',
      globeBgColor: '地球颜色',
      mapColor: '地图颜色',
      mapBorderColor: '边界色',
      emphasisMapColor: '交互色',
      skyColor: '天空色',
      globeType: '地球材质',
      scaller3DColor: '圆点颜色',
      line3DColor: '飞线颜色',
      range: '值域范围',
      liquidColor1: '值域色一',
      liquidColor2: '值域色二',
      liquidColor3: '值域色三',
      liquidColor4: '值域色四',
      liquidColor5: '值域色五',
      iframeUrl: '链接地址',
      barName: '名称',
      barColor: '柱颜色',
      lineColor: '线颜色',
      isYsplit: 'Y辅助线',
      isXsplit: 'X辅助线',
      multiColor: '多色柱',
      xAxisColor: 'X轴颜色',
      yAxisColor: 'Y轴颜色',
      isXaxis: '显示X轴',
      isYaxis: '显示Y轴',
      isLegend: '显示标签',
      isLine:'显示线条',
      isX: 'X及文字',
      isY: 'Y及文字',
      alertRectColor: '上三角色',
      alertIconColor: '图标颜色',
      pieName: '饼图名称',
      isLabelline: '标注线',
      isLabel: '标注',
      labelPosition: '标注位置',
      labelColor: '标注色',
      lineWidth: '标线宽',
      diagramSize: '饼图尺寸',
      roseColor: '玫瑰颜色',
      cicleWidth: '环宽',
      barWidth: '柱宽',
      barDirection: '柱方向',
      barPlace: '柱排列',
      axisfontSize: '轴字大小',
      barfontSize: '柱字大小',
      isPoint: '显示顶点',
      pointWidth: '顶点线宽',
      isSmoth: '是否平滑',
      labelFontSize: '标注字大小',
      barColorbg: '背景柱色',
      barColorinner: '内柱色',
      barGap: '柱偏移量',
      barWidthbg: '背景柱宽',
      barWidthinner: '内柱宽',
      barBorderRadius: '外柱圆角',
      axisRotate: 'X坐标旋转',
      yaxisRotate: 'Y坐标旋转',
      gridBottom: '偏移量↑',
      gridLeft: '偏移量→',
      gridRight: '偏移量←',
      axisPosition: 'X轴位置',
      pieRadius: '饼宽占比',
      pieOutRadius: '环外径',
      pieInnerRadius: '环内径',
      axisColor: '坐标系颜色',
      barBorderRadiusinner: '内柱圆角',
      radius: '图宽占比',
      radarName: '雷达图',
      nameColor: '坐标名颜色',
      radarShap: '坐标形状',
      isSplitline: '显示分割线',
      splitNumber: '分割线数量',
      splitlineColor: '分割线颜色',
      splitArea: '分割区域',
      isAxisline: '显示放射轴',
      axislineColor: '放射轴颜色',
      radarSymbol: '顶点形状',
      borderWidth: '边框宽度',
      itemMargin: '每项距离',
      fontColor: '字体颜色',
      cornerWidth: '边角宽',
      cornerHeight: '边角高',
      cornerSize: '边角线粗细',
      axisWidth: '坐标轴粗细',
      isAxisLable: '显示标注',
      labelFontWeight: '标注字粗细',
      axisTickLength: '刻度线长',
      axisTickColor: '刻度线色',
      splitLineLength: '分割线长',
      splitLineColor: '分割线色',
      isPoints: '显示指针',
      pointsLength: '指针长',
      pointsWidth: '指针宽',
      isDetail: '显示详情',
      detailWidth: '详情宽',
      detailHeight: '详情高',
      detailBorderWidth: '详情边宽',
      detailBorderColor: '详情边色',
      detailOffsetLeft: '详情距左',
      detailOffsetTop: '详情距上',
      detailFontSize: '详情字大小',
      detailFontWeight: '详情字粗细',
      detailFontColor: '详情字色',
      axisRange: '颜色值域',
      rangeColor1: '值域色一',
      rangeColor2: '值域色二',
      rangeColor3: '值域色三',
      rangeColor4: '值域色四',
      startAngle: '开始角度',
      endAngle: '结束角度',
      xSplitColor: 'X辅线色',
      xSplitWidth: 'X辅线宽',
      xSplitType: 'X辅线类型',
      ySplitColor: 'Y辅线色',
      ySplitWidth: 'Y辅线宽',
      ySplitType: 'Y辅线类型',
      numberLength: '数字长度',
      isShow: '是否显示',
      timeFormat: '日期格式',
      timeMargin: '段间距',
      radaColor: '雷达颜色',
      labelOffset: '标注偏移',
      labelFormatter: '标注格式',
      symbol: '图标形状',
      symbolSizeX: '图标宽',
      symbolSizeY: '图标高',
      labelOffsetX: '标注偏移X',
      labelOffsetY: '标注偏移Y',
      lineLength: '标注线长内',
      lineLength2: '标注线长外',
      lineSmoth: '是否平滑',
      xAxisWidth: 'X轴宽度',
      yAxisWidth: 'Y轴宽度',
      xAxisType: 'X轴类型',
      yAxisType: 'Y轴类型',
      isxAxisLabel: '显示X刻度',
      isyAxisLabel: '显示Y刻度',
      xAxisLableColor: 'X刻度色',
      yAxisLableColor: 'Y刻度色',
      xAxisLabelFontStyle: 'X刻度类型',
      yAxisLabelFontStyle: 'Y刻度类型',
      xAxisLabelFontWeight: 'X刻度粗细',
      yAxisLabelFontWeight: 'Y刻度粗细',
      xAxisLabelFontSize: 'X刻度大小',
      yAxisLabelFontSize: 'Y刻度大小',
      xAxisLabelFontAlign: 'X刻度水平',
      yAxisLabelFontAlign: 'Y刻度水平',
      xAxisLabelBaseline: 'X刻度垂直',
      yAxisLabelBaseline: 'Y刻度垂直',
      axisType: '坐标轴类型',
      fontFamily: '字体',
      floatRange: '波动范围',
      floatTimes: '波动间隔',
      xAxisLableInterval: 'X刻度间距',
      yAxisLableInterval: 'Y刻度间距',
      xAxisLableFormatter: 'X数据格式',
      yAxisLableFormatter: 'Y数据格式',
      fontStyle: '字体样式',
      outlineBorderWidth: '边框大小',
      outlineBorderDistance: '边框距离',
      liquidBGColor1: '背景色一',
      liquidBorderColor1: '水球边框色一',
      liquidBGColor2: '背景色二',
      liquidBorderColor2: '水球边框色二',
      liquidBGColor3: '背景色三',
      liquidBorderColor3: '水球边框色三',
      liquidBGColor4: '背景色四',
      liquidBorderColor4: '水球边框色四',
      liquidBGColor5: '背景色五',
      liquidBorderColor5: '水球边框色五',

      alarmW1:'标题宽度',
      alarmW2:'内容宽度',
      alarmH:'整体高度',
      alarmBC1:'标题线色',
      alarmBC2:'内容线色',
      alarmC1:'标题字体颜色',
      alarmC2:'内容字体颜色',
      alarmFZ1:'标题字体大小',
      alarmFZ2:'内容字体大小',
      alarmTC1:'正常',
      alarmTC2:'严重',
      alarmTC3:'重要',
      alarmTC4:'一般',
      alarmTC5:'轻微',
      alarmW2Min:'最小宽度',

      ODfontSize: '字号',
      ODtitleColor: '标题字色',
      ODinfoColor: '内容字色',
      ODstate1Col: '签到颜色',
      ODstate2Col: '迟到颜色',
      ODstate3Col: '未签到颜色',
      ODstarCol: '级别星色',
      ODtelCol: '号码颜色',
      ODiconCol: '图标颜色',

      mgTitleFontSize:'标题字号',
      mgTitleCol:'标题颜色',
      mgInfoFontSize:'内容字号',
      mgDcCol: '区域字色',
      mgDutynameCol: '班组字色',
      mgIconCol: '图标颜色',
      mgDutystuffNameCol: '值班字色',
      mgDutystuffStarCol: '级别星色',
      mgDutystuffnumberCol: '人数字色',
      mgDutyhotlineCol: '号码字色',
      mgDelayBgc: '签到背景色',
      mgDelayBc: '签到边框色',
      mgNormalBgc: '迟到背景色',
      mgNormalBc: '迟到边框色',
      mgOtherBgc: '缺席背景色',
      mgOtherBc: '缺席边框色',

      mapFill:'地图填充色',
      mapFillOpacity:'填充透明度',
      mapStroke:'地图描边色',
      mapStrokeWidth:'边框线宽',
      mapStrokeOpacity:'边框透明度',
      mapFColor:'字体颜色',
      mapFontSize:'字体大小',
      mapLempR1:'外圆半径',
      mapLempR2:'内圆半径',
      mapLempFill:'外圆填充色',
      mapLempStroke:'外圆描边色',
      mapLempStrokeWidth:'外圆线宽',
      mapLempRunFill:'运行填充色',
      mapLempRunFill2:'运行闪动色',
      mapLempRunStroke:'运行边线色',
      mapLempSetFill:'建设填充色',
      mapLempSetStroke:'建设边线色',

      titleCol:'标题颜色',
      titleFontSize:'标题大小',
      typeCol:'抬头颜色',
      typeFontSize:'抬头大小',
      infoCol:'内容颜色',
      infoFontSize:'内容大小',
      titleHeight:'标题行高',
      typeHeight:'抬头高度',
      infoHeight:'内容高度',

      titleAlign: '标题对齐',
      titleFontColor: '标题颜色',
      titleFontStyle: '标题样式',
      titleFontWeight: '标题字体',
      titleBackgroundColor: '标题背景',
      titleBorderColor: '标题行边框',
      itemAlign: '行对齐',
      itemHeight: '行高',
      itemOddFontSize: '奇数行大小',
      itemEvenFontSize: '偶数行大小',
      itemOddFontColor: '奇数行颜色',
      itemEvenFontColor: '偶数行颜色',
      itemOddFontStyle: '奇数行样式',
      itemEvenFontStyle: '偶数行样式',
      itemOddFontWeight: '奇数行字体',
      itemEvenFontWeight: '偶数行字体',
      itemOddBackgroundColor: '奇数行背景',
      itemEvenBackgroundColor: '偶数行背景',
      itemBorderColor: '行边框',
      itemColumnWidth: '行宽',

      listStyle: '样式',
      boxPadding: '边距',
      titleText: '标题内容',
      titleWidth: '标题宽',
      valueAlign: '值对齐',
      valueHeight: '值行高',
      valueWidth: '值占宽',
      valueFontSize: '值大小',
      valueFontColor: '值颜色',
      valueFontStyle: '值样式',
      valueFontWeight: '值字体',
      valueBackgroundColor: '值底色',
      unitValue: '单位',
      unitHeight: '单位高',
      unitWidth: '单位宽',
      unitFontSize: '单位大小',
      unitFontColor: '单位颜色',
      unitFontStyle: '单位样式',
      unitFontWeight: '单位字体',
      unitBackgroundColor: '单位底色',
      colorLinePosition: '色条位置',
      colorLineWidth: '色条宽',
      colorLineColor: '色条颜色',
      titlePadding: '标题两边距',
      progressHeight: '进度条高度',
      progressWidth: '进度条宽度',
      progressRadius: '条圆角',
      progressBackgroundColor: '进度条背景',
      progressColor: '进度颜色',
      unitPadding: '单位边距',
      progressPaddingTop: '距顶距离',
      itemBorderStyle: '分割线类型',
      statusPosition: '状态位置',
      statusPadding: '状态前后距',
      status1Icon: '状态一文本',
      status1Color: '状态一颜色',
      status1UnitColor: '状态一单位色',
      status2Icon: '状态二文本',
      status2Color: '状态二颜色',
      status2UnitColor: '状态二单位色',
      status3Icon: '状态三文本',
      status3Color: '状态三颜色',
      status4Icon: '状态四文本',
      status4Color: '状态四颜色',
      status5Icon: '状态五文本',
      status5Color: '状态五颜色',
      videoUrl: '选择视频',
      autoplay: '自动播放',
      controls: '显示播放条',
      loop: '循环播放',
      muted: '静音播放',

      //amcharts
      hEnable3d: '启动3D',
      hAlpha: '角度',
      hBeta: '倾斜度',
      hDepth: '3D深度',
      hLabelEnable: '显示标注',
      hInnerSize: '饼内径',
      hDLConnectorPadding: '标注标线距',
      hDLDistance: '标线长',
      hDLSoftConnector: '标线平滑',
      hDLFontColor: '标注色',
      hDLFontSize: '标注大小',
      hDLFontWeight: '标注字重',
      hViewDistance: '视角深度',
      hStacking: '堆叠类型',
      hPlotOptionsDept: '柱子深度',
      hDLEnable:'显示标注',
      hDLInside: '标注置于柱内',
      hAllowDecimals: 'Y允许小数',
      hXGridLineColor: 'X辅助线色',
      hXGridLineDashStyle: 'X辅助线类型',
      hXgridLineWidth: 'X辅助线宽',
      hXLabelColor: 'X字色',
      hXLabelFontSize: 'X字大小',
      hYGridLineColor: 'Y辅助线色',
      hYGridLineDashStyle: 'Y辅助线类型',
      hYgridLineWidth: 'Y辅助线宽',
      hYLabelColor: 'Y字色',
      hYLabelFontSize: 'Y字大小',
      statusPanelTitleColor:'标题颜色',
      statusPanelValueColor:'数值颜色',
      statusPanelUnitColor:'单位颜色',
      statusPanelTitleFontSize:'标题大小',
      statusPanelValueFontSize:'数值大小',
      statusPanelUnitFontSize:'单位大小',
      statusPanelContainerWidth:'面板宽',
      statusPanelContainerHeight:'面板高',
      statusPanelContainerBorderWidth:'边缘尺寸',
      statusPanelContainerBorderColor0:'无状态边缘',
      statusPanelContainerBackgroundImage0:'无状态背景',
      statusPanelContainerBorderColor1:'状态1边缘',
      statusPanelContainerBackgroundImage1:'状态1背景',
      statusPanelContainerBorderColor2:'状态2边缘',
      statusPanelContainerBackgroundImage2:'状态2背景',
      statusPanelContainerBorderColor3:'状态3边缘',
      statusPanelContainerBackgroundImage3:'状态3背景',
      statusPanelContainerBorderColor4:'状态4边缘',
      statusPanelContainerBackgroundImage4:'状态4背景',
      statusPanelContainerBorderColor5:'状态5边缘',
      statusPanelContainerBackgroundImage5:'状态5背景',

      alternatePlay: '是否轮播',
      lifeTime: '轮播周期',
      pageSize: '每页数量',

      spawidth:'面板宽',
      spaheight:'面板高',
      spamr:'面板居右',
      spamb:'面板居下',
      spatipsfz:'提示灯字号',
      spatipscol:'提示灯颜色',
      spatipswidth:'提示灯宽',
      spatipsheight:'提示灯高',
      spatipsborderradius:'提示灯边角',
      spatipsmt:'提示灯居上',
      spatipsml:'提示灯居左',
      spatitlefz:'标题字号',
      spatitlecol:'标题颜色',
      spatitlemt:'标题居上',
      spatitleml:'标题居左',
      spatitlemr:'标题居右',
      spavaluefz:'数值字号',
      spavaluecol:'标题颜色',
      spaunitfz:'单位字号',
      spaunitcol:'单位颜色',
      spasubtitlefz:'副标题字号',
      spasubtitlecol:'副标题颜色',
      spacontainermt:'内容框居上',
      spaitemwidth:'内容框宽',
      spaitemml:'内容居左',
      spaitemmb:'内容居下',
      status0bgi: '无状体背景',
      status1bgi: '状体一背景',
      status2bgi: '状体二背景',
      status3bgi: '状体三背景',
      status4bgi: '状体四背景',
      status5bgi: '状体五背景',
      uDPDSceneId: '场景ID',
      status0Color: '无状态颜色',

      borderRadius: '圆角',
      topColor: '上半部颜色',
      bottomColor: '下半部颜色',
      numberStyle: '数字样式',
      numberFontWeight: '数字粗细',
      numberFontColor: '数字颜色',
      characterStyle: '文字样式',
      characterFontWeight: '文字粗细',
      characterFontColor: '文字颜色',
      splitUnit: '以万分割',
      marginLeft: '间隔',
    }
  }

})(window)
