define({
'root': {
      'oj-message' : 
      {
        'fatal' : 'Fatal',
        'error': 'Error',
        'warning': 'Warning',
        'info' : 'Info',
        'confirmation' : 'Confirmation',
        'compact-type-summary': '{0}: {1}'
      },
      
      'oj-converter': 
      {
        'summary': 'Value is not in the expected format.',
        'detail': 'Enter a value in the expected format.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Example: {exampleValue}",
          'detail': "Enter a value in the same format as this example: '{exampleValue}'",
          'detail-plural': "Enter a value in the same format as these examples: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "An accepted value for option '{propertyName}' is '{propertyValueValid}'.",
          'detail-plural': "Accepted values for option '{propertyName}' are '{propertyValueValid}'."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "A value for the option '{requiredPropertyName}' is required when the option '{propertyName}' is set to '{propertyValue}'."
        },
        'optionTypeInvalid': {
          'summary': "A value of the expected type was not provided for option '{propertyName}'."
        },
        'optionOutOfRange': {
          'summary': "Value {propertyValue} is out of range for the option '{propertyName}'."
        },
        'optionValueInvalid': {
          'summary': "An invalid value '{propertyValue}' was specified for the option '{propertyName}'."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "Decimal '{value}' is not in the expected format."
          },
          'currencyFormatMismatch': {
            'summary': "Currency '{value}' is not in the expected format."
          },
          'percentFormatMismatch' : {
            'summary': "Percent '{value}' is not in the expected format."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "Value '{value}' is out of range for the '{propertyName}'.",
            'detail': "Enter a value between '{minValue}' and '{maxValue}'."
          },
          'dateFormatMismatch': {
            'summary': "Date '{value}' is not in the expected format."
          },
          'timeFormatMismatch': {
            'summary': "Time '{value}' is not in the expected format."
          },
          'datetimeFormatMismatch': {
            'summary': "Date and time '{value}' is not in the expected format."
          },
          'dateToWeekdayMismatch' : {
            'summary': "Day '{date}' does not fall on a '{weekday}'.",
            'detail' : "Enter a weekday that corresponds with the date."
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
            'summary' : 'Number of characters is out of range.',
            'detail' : 'Number of characters must be between {min} and {max}.',
            'hint' : 'Enter {min} or more characters, up to a maximum of {max}.'
          },
          'min':
          {
            'summary' : 'There are too few characters.',
            'detail' : 'Enter {min} or more characters, not fewer.',
            'hint' : 'Enter {min} or more characters.'
          },
          'max':
          {
            'summary' : 'There are too many characters.',
            'detail' : 'Enter {max} or fewer characters, not more.',
            'hint' : 'Enter {max} or fewer characters'
          },
          'exact': 
          {
            'summary': 'Number of characters is incorrect.',
            'detail': 'Enter exactly {length} characters.',
            'hint': 'Enter {length} characters.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : 'Number is out of range.',
              'detail' : 'Number {value} must be between {min} and {max}.',
              'hint' : 'Enter a number between {min} and {max}.'
            },
            'min':
            {
              'summary' : 'Number is too low.',
              'detail' : 'Number {value} must be greater than or equal to {min}.',
              'hint' : 'Enter a number greater than or equal to {min}.'
            },
            'max':
            {
              'summary' : 'Number is too high.',
              'detail' : 'Number {value} must be less than or equal to {max}.',
              'hint' : 'Enter a number less than or equal to {max}.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : 'Date and time is out of range.',
              'detail' : 'Date and time must be between {min} and {max}.',
              'hint' : 'Enter a date and time between {min} and {max}.'
            },
            'min':
            {
              'summary': 'Date and time is earlier than the minimum date.',
              'detail' : 'Date and time must be on or later than {min}.',
              'hint' : 'Enter a date and time on or after {min}.'
            },
            'max':
            {
              'summary' : 'Date and time is later than the maximum date.',
              'detail' : 'Date and time must be on or sooner than {max}.',
              'hint' : 'Enter a date and time on or before {max}.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': 'Date is of a disabled entry.',
              'detail': 'Date {value} should not be of a disabled entry.'
            }
          }
        },
        'regExp': 
        {
          'summary': "Format is incorrect.",
          'detail': "Value '{value}' must match this pattern: '{pattern}'"
        },
        'required':
        {
          'summary': 'Value is required.',
          'detail': 'You must enter a value.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': 'Done',
        'prevText': 'Prev',
        'nextText': 'Next',
        'currentText': 'Today',
        'weekHeader': 'Wk',
        'weekText': "Week",
        'datePicker': 'Date Picker',
        'inputHelp': 'Press Key down or Key up for access to Calendar',
        'inputHelpBoth': 'Press Key down or Key up for access to Calendar and Shift + Key down or Shift Key up for access to time drop down'
      },

      'oj-ojInputTime':
      {
        'inputHelp': 'Press Key down or Key up for access to time drop down'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id} sorted in ascending order',
        'accessibleSortDescending': '{id} sorted in decending order',
        'accessibleActionableMode': 'Enter actionable mode',
        'accessibleNavigationMode': 'Enter navigation mode',
        'accessibleSummaryExact': 'This is a data grid with {rownum} rows and {colnum} columns',
        'accessibleSummaryEstimate': 'This is a data grid with unknown number of rows and columns',
        'accessibleSummaryExpanded' : 'There are currently {num} rows expanded',
        'accessibleRowExpanded': 'Row expanded',
        'accessibleRowCollapsed': 'Row collapsed',
        'accessibleRowSelected': 'Row {row} selected',
        'accessibleColumnSelected': 'Column {column} selected',
        'accessibleStateSelected': 'selected',
        'accessibleMultiCellSelected': '{num} cells selected',
        'accessibleRowContext': 'Row {index}',
        'accessibleColumnContext': 'Column {index}',
        'accessibleRangeSelectModeOn': 'Add selected range of cells mode on',
        'accessibleRangeSelectModeOff': 'Add selected range of cells mode off',
        'msgFetchingData': 'Fetching Data...',
        'msgNoData': 'No data to display.',
        'labelResize': 'Resize',
        'labelResizeWidth': 'Resize Width',
        'labelResizeHeight': 'Resize Height',
        'labelSortRow': 'Sort Row',
        'labelSortRowAsc': 'Sort Row Ascending',
        'labelSortRowDsc': 'Sort Row Descending',
        'labelSortCol': 'Sort Column',
        'labelSortColAsc': 'Sort Column Ascending',
        'labelSortColDsc': 'Sort Column Descending',
        'labelCut': 'Cut',
        'labelPaste': 'Paste'
      },
      
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': 'Level {level}, {num} of {total}',
        'accessibleRowExpanded': 'Row expanded',
        'accessibleRowCollapsed': 'Row collapsed'
      },
      
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Help',
        'tooltipRequired':'Required'
      },
      
      'oj-ojInputNumber' :
      {
        /**
         * <p>Tooltip text for the inputNumber's Down arrow.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.tooltipDecrement
         * @memberof! oj.ojInputNumber
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Decrement"</code>
         */
        'tooltipDecrement':'Decrement',
        
        /**
         * <p>Tooltip text for the inputNumber's Up arrow.
         * 
         * <p>See the <a href="#translations">translations</a> option for usage examples.
         * 
         * @alias translations.tooltipIncrement
         * @memberof! oj.ojInputNumber
         * @instance
         * @type {?string}
         * @default <code class="prettyprint">"Increment"</code>
         */
        'tooltipIncrement':'Increment'
      },
      
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Select Row',
        'labelSelectColumn':'Select Column',
        'labelSort': 'Sort',
		    'labelSortAsc': 'Sort Ascending',
		    'labelSortDsc': 'Sort Descending',
        'msgFetchingData':'Fetching Data...',
        'msgNoData':'No data to display.',
      },

      'oj-ojTabs':
      {
        'removeCueText': 'Removable'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': 'No matches found'
      },

      'oj-ojTree':
      {
		'm_loading': 'Loading...',
		'm_newnode': 'New Node',
		'm_multisel': 'Multiple Selection',
		'm_edit': 'Edit',
		'm_create': 'Create',
		'm_cut': 'Cut',
		'm_copy': 'Copy',
		'm_paste': 'Paste',
		'm_remove': 'Remove',
		'm_rename': 'Rename',
		'm_emptyText': 'No data'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Pagination',
        'labelAccNavFirstPage': 'First Page',
        'labelAccNavLastPage': 'Last Page',
        'labelAccNavNextPage': 'Next Page',
        'labelAccNavPreviousPage': 'Previous Page',
        'labelAccNavPage': 'Page',
        'labelLoadMore':'Show More...',
        'labelNavInputPage':'Page',
        'labelNavInputPageMax':'of {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo} of {pageTotal} items',
        'msgItemRangeUnknown':'{pageFrom}-{pageTo} items',
        'tipNavInputPage':'Go To Page',
        'tipNavPageLink':'Go To Page {pageNum}',
        'tipNavNextPage':'Next',
        'tipNavPreviousPage':'Previous',
        'tipNavFirstPage':'First',
        'tipNavLastPage':'Last',
        
        'pageInvalid':
        {
          'summary': 'The page value entered is invalid.',
          'detail': 'Please enter a value greater than 0.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'Value for maxPageLinks is invalid.',
          'detail': 'Please enter a value greater than 4.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Group {groupName}',
        'labelSeries': 'Series: {seriesName}',
        'labelGroup': 'Group: {groupName}',
        'labelValue': 'Value: {value}',
        'labelTargetValue': 'Target: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Low: {low}',
        'labelHigh': 'High: {high}',
        'labelOther': 'Other',
        
        'tooltipPan': 'Pan',
        'tooltipSelect': 'Marquee select',
        'tooltipZoom': 'Marquee zoom'
      },
      
      'oj-ojSunburst': {
        'labelColor': 'Color',
        'labelSize': 'Size'
      },
      
      'oj-ojTreemap': {
        'labelColor': 'Color',
        'labelSize': 'Size'
      },
      
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Clear Selection',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'No data to display',
        
        'notReadyToRender': {
          'summary': "This component must be attached to a visible subtree of the DOM prior to rendering."
        },
        
        'stateSelected': 'Selected',
        'stateUnselected': 'Unselected',
        'stateMaximized': 'Maximized',
        'stateMinimized': 'Minimized',
        'stateExpanded': 'Expanded',
        'stateCollapsed': 'Collapsed',
        'stateIsolated': 'Isolated',
        'stateHidden': 'Hidden',
        'stateVisible': 'Visible'
      },
      
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': 'Entering popup. Press F6 to navigate between the popup and associated control.',
        'ariaLiveRegionInitialFocusNone': 'Popup opened. Press F6 to navigate between the popup and associated control.'
      }
},
'zh-Hant': 1,
'it': 1,
'fr': 1,
'zh-Hans': 1,
'pt': 1,
'ja': 1,
'de': 1,
'pt-BR': 1,
'ko': 1,
'es': 1
});