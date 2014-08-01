define({
      'oj-message' : 
      {
        'fatal' : '致命',
        'error': '错误',
        'warning': '警告',
        'info' : '信息',
        'confirmation' : '确认',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': '值不是预期的格式。',
        'detail': '请按预期格式输入值。',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "示例: {exampleValue}",
          'detail': "请按与此示例相同的格式输入值: '{exampleValue}'",
          'detail-plural': "请按与这些示例相同的格式输入值: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。",
          'detail-plural': "选项 '{propertyName}' 可接受的值为 '{propertyValueValid}'。"
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "当选项 '{propertyName}' 设置为 '{propertyValue}' 时, 选项 '{requiredPropertyName}' 必须具有值。"
        },
        'optionTypeInvalid': {
          'summary': "没有为选项 '{propertyName}' 提供预期类型的值。"
        },
        'optionOutOfRange': {
          'summary': "选项 '{propertyName}' 的值 {propertyValue} 超出范围。"
        },
        'optionValueInvalid': {
          'summary': "为选项 '{propertyName}' 指定的值 '{propertyValue}' 无效。"
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "小数 '{value}' 不是预期的格式。"
          },
          'currencyFormatMismatch': {
            'summary': "货币 '{value}' 不是预期的格式。"
          },
          'percentFormatMismatch' : {
            'summary': "百分比 '{value}' 不是预期的格式。"
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "对于 '{propertyName}', 值 '{value}' 超出了范围。",
            'detail': "请输入介于 '{minValue}' 与 '{maxValue}' 之间的值。"
          },
          'dateFormatMismatch': {
            'summary': "日期 '{value}' 不是预期的格式。"
          },
          'timeFormatMismatch': {
            'summary': "时间 '{value}' 不是预期的格式。"
          },
          'datetimeFormatMismatch': {
            'summary': "日期时间 '{value}' 不是预期的格式。"
          },
          'dateToWeekdayMismatch' : {
            'summary': "日期 '{date}' 不在 '{weekday}' 的范围内。",
            'detail' : "请输入与日期对应的工作日。"
          }
        }
      },
      // translations used by the validators 
      'oj-validator': 
      {
        'length' :
        {
          'range':
          {
            'summary' : '字符数超出了范围。',
            'detail' : '字符数必须介于 {min} 与 {max} 之间。',
            'hint' : '请输入 {min} 个或更多的字符, 最多 {max} 个。'
          },
          'min':
          {
            'summary' : '字符太少。',
            'detail' : '请输入 {min} 个或更多的字符, 不能更少。',
            'hint' : '请输入 {min} 个或更多的字符。'
          },
          'max':
          {
            'summary' : '字符太多。',
            'detail' : '请输入 {max} 个或更少的字符, 不能更多。',
            'hint' : '请输入 {max} 个或更少的字符'
          },
          'exact': 
          {
            'summary': '字符数不正确。',
            'detail': '请输入正好 {length} 个字符。',
            'hint': '请输入 {length} 个字符。'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : '数字超出范围。',
              'detail' : '数字 {value} 必须介于 {min} 与 {max} 之间。',
              'hint' : '请输入介于 {min} 与 {max} 之间的数字。'
            },
            'min':
            {
              'summary' : '数字太小。',
              'detail' : '数字 {value} 必须大于等于 {min}。',
              'hint' : '请输入大于等于 {min} 的数字。'
            },
            'max':
            {
              'summary' : '数字太大。',
              'detail' : '数字 {value} 必须小于等于 {max}。',
              'hint' : '请输入小于等于 {max} 的数字。'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : '日期时间超出范围。',
              'detail' : '日期时间必须介于 {min} 与 {max} 之间。',
              'hint' : '请输入介于 {min} 与 {max} 之间的日期时间。'
            },
            'min':
            {
              'summary': '日期时间早于最早日期。',
              'detail' : '日期时间必须等于或晚于 {min}。',
              'hint' : '请输入等于或晚于 {min} 的日期时间。'
            },
            'max':
            {
              'summary' : '日期时间晚于最晚日期。',
              'detail' : '日期时间必须等于或早于 {max}。',
              'hint' : '请输入等于或早于 {max} 的日期时间。'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': '日期属于已禁用条目。',
              'detail': '日期 {value} 不应属于已禁用条目。'
            }
          }
        },
        'regExp': 
        {
          'summary': "格式不正确。 ",
          'detail': "值 '{value}' 必须匹配此模式: '{pattern}'"
        },
        'required':
        {
          'summary': '需要提供值。',
          'detail': '必须输入一个值。'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': '完成',
        'prevText': '上一个',
        'nextText': '下一个',
        'currentText': '今天',
        'weekHeader': '周',
        'weekText': "周",
        'datePicker': '日期选择器',
        'inputHelp': '按下箭头或上箭头来访问日历',
        'inputHelpBoth': '按下箭头或上箭头来访问日历, 按 Shift + 下箭头或 Shift + 上箭头来访问时间下拉列表'
      },

      'oj-ojInputTime':
      {
        'inputHelp': '按下箭头或上箭头来访问时间下拉列表'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '以升序排序的 {id}',
        'accessibleSortDescending': '以降序排序的 {id}',
        'accessibleActionableMode': '进入可操作模式',
        'accessibleNavigationMode': '进入导航模式',
        'accessibleSummaryExact': '这是一个数据网格, 包含 {rownum} 行和 {colnum} 列',
        'accessibleSummaryEstimate': '这是一个数据网格, 行数和列数未知',
        'accessibleSummaryExpanded' : '当前展开了 {num} 行',
        'accessibleRowExpanded': '已展开行',
        'accessibleRowCollapsed': '已折叠行',
        'accessibleStateSelected': '选定',
        'accessibleMultiCellSelected': '选定了 {num} 个单元',
        'msgFetchingData': '正在提取数据...',
        'msgNoData': '没有可显示的数据。',
        'labelResize': '调整大小',
        'labelResizeWidth': '调整宽度',
        'labelResizeHeight': '调整高度',
        'labelSortRow': '排序行',
        'labelSortRowAsc': '升序排序行',
        'labelSortRowDsc': '降序排序行',
        'labelSortCol': '排序列',
        'labelSortColAsc': '升序排序列',
        'labelSortColDsc': '降序排序列',
        'labelCut': '剪切',
        'labelPaste': '粘贴'
      },
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': '级别 {level}, {num}/{total}',
        'accessibleRowExpanded': '已展开行',
        'accessibleRowCollapsed': '已折叠行'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'帮助',
        'tooltipRequired':'必需'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'减少',
        'tooltipIncrement':'增加'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'选择行',
        'labelSelectColumn':'选择列',
        'labelSort': '排序',
		    'labelSortAsc': '升序排序',
		    'labelSortDsc': '降序排序',
        'msgFetchingData':'正在提取数据...',
        'msgNoData':'没有可显示的数据。',
      },

      'oj-ojTabs':
      {
        'removeCueText': '可删除'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': '找不到匹配项'
      },

      'oj-ojTree':
      {
		'm_loading': '正在加载...',
		'm_newnode': '新建节点',
		'm_multisel': '多选',
		'm_edit': '编辑',
		'm_create': '创建',
		'm_cut': '剪切',
		'm_copy': '复制',
		'm_paste': '粘贴',
		'm_remove': '删除',
		'm_rename': '重命名',
		'm_emptyText': '无数据'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': '页码',
        'labelAccNavFirstPage': '第一页',
        'labelAccNavLastPage': '最后一页',
        'labelAccNavNextPage': '下一页',
        'labelAccNavPreviousPage': '上一页',
        'labelAccNavPage': '页码',
        'labelLoadMore':'显示更多...',
        'labelNavInputPage':'第',
        'labelNavInputPageMax':'页, 共 {pageMax} 页',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'第 {pageFrom}-{pageTo} 项, 共 {pageTotal} 项',
        'msgItemRangeUnknown':'第 {pageFrom}-{pageTo} 项',
        'tipNavInputPage':'转至页',
        'tipNavPageLink':'转至页 {pageNum}',
        'tipNavNextPage':'下一页',
        'tipNavPreviousPage':'上一页',
        'tipNavFirstPage':'第一页',
        'tipNavLastPage':'最后一页',
        
        'pageInvalid':
        {
          'summary': '输入的页值无效。',
          'detail': '请输入一个大于 0 的值。'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'maxPageLinks 的值无效。',
          'detail': '请输入一个大于 4 的值。'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': '组 {groupName}',
        'labelSeries': '系列: {seriesName}',
        'labelGroup': '组: {groupName}',
        'labelValue': '值: {value}',
        'labelTargetValue': '目标: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': '下限: {low}',
        'labelHigh': '上限: {high}',
        'labelOther': '其他',
        
        'tooltipPan': '平移',
        'tooltipSelect': '选取框选择',
        'tooltipZoom': '选取框缩放'
      },
      'oj-ojSunburst': {
        'labelColor': '颜色',
        'labelSize': '大小'
      },
      'oj-ojTreemap': {
        'labelColor': '颜色',
        'labelSize': '大小'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': '清除选择',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': '没有可显示的数据',
        
        'notReadyToRender': {
          'summary': "此组件必须先连接到 DOM 的可见子树, 然后才能呈现。"
        },
        
        'stateSelected': '选定',
        'stateUnselected': '未选定',
        'stateMaximized': '最大化',
        'stateMinimized': '最小化',
        'stateExpanded': '展开',
        'stateCollapsed': '折叠',
        'stateIsolated': '隔离',
        'stateHidden': '隐藏',
        'stateVisible': '可见'
      },
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': '正在进入弹出式窗口。按 F6 可在弹出式窗口和相关控件之间导航。',
        'ariaLiveRegionInitialFocusNone': '弹出式窗口已打开。按 F6 可在弹出式窗口和相关控件之间导航。'
      }
});
