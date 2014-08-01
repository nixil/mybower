define(
{
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
      'summary': 'The value is not in the expected format.',
      'detail': 'Enter a value in the expected format.',
      'plural-separator' : ", ",

      
      // when we want to show a hint. 
      'hint': 
      {
        'summary': "Example: {exampleValue}",
        'detail': "Enter a value in the same format as this example: '{exampleValue}'",
        'detail-plural': "Enter a value in the same format as these examples: '{exampleValue}'"
      },
      
      // when the option values are not what we expected and we tell users what values we accept
      'optionHint' : 
      {
        'detail': "An accepted value for '{propertyName}' is '{propertyValueValid}'.",
        'detail-plural': "Accepted values for '{propertyName}' are '{propertyValueValid}'.",
      },

      // when converter options are incorrect
      'optionTypesMismatch': 
      {
        'summary': "A value for the property '{requiredPropertyName}' is required when the property '{propertyName}' is set to '{propertyValue}'."
      },
      'optionTypeInvalid': 
      {
        'summary': "A value of the expected type was not provided for '{propertyName}'."
      },
      'optionOutOfRange': 
      {
        'summary': "The value {propertyValue} is out of range for the option '{propertyName}'."
      },
      'optionValueInvalid': 
      {
        'summary': "An invalid value '{propertyValue}' was specified for the option '{propertyName}'."
      },

      'number': 
      {
        // when the the value fails number conversion
        'decimalFormatMismatch': 
        {
          'summary': "The decimal '{value}' is not in the expected format."
        },
        'currencyFormatMismatch': 
        {
          'summary': "The currency '{value}' is not in the expected format."
        },
        'percentFormatMismatch' : 
        {
          'summary': "The percent '{value}' is not in the expected format."
        }
      },
      'datetime': 
      {
        // when the the value fails date time conversion
        'datetimeOutOfRange': 
        {
          'summary': "The value '{value}' is out of range for the '{propertyName}'.",
          'detail': "Enter a value between '{minValue}' and '{maxValue}'."
        },
        'dateFormatMismatch': 
        {
          'summary': "The date '{value}' is not in the expected format."
        },
        'timeFormatMismatch':
        {
          'summary': "The time '{value}' is not in the expected format."
        },
        'datetimeFormatMismatch': 
        {
          'summary': "The datetime '{value}' is not in the expected format."
        },
        'dateToWeekdayMismatch' : 
        {
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
          'summary' : 'The number of characters is out of range.',
          'detail' : 'The number must be between {min} and {max}.',
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
          'summary': 'The number of characters is incorrect.',
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
            'summary' : 'The number is out of range.',
            'detail' : 'The number {value} must be between {min} and {max}.',
            'hint' : 'Enter a number between {min} and {max}.'
          },
          'min':
          {
            'summary' : 'The number is too low.',
            'detail' : 'The number {value} must be greater than or equal to {min}.',
            'hint' : 'Enter a number greater than or equal to {min}.'
          },
          'max':
          {
            'summary' : 'The number is too high.',
            'detail' : 'The number {value} must be less than or equal to {max}.',
            'hint' : 'Enter a number less than or equal to {max}.'
          }
        },
        'datetime': 
        {
          'range':
          {
            'summary' : 'The datetime is out of range.',
            'detail' : 'The datetime must be between {min} and {max}.',
            'hint' : 'Enter a datetime between {min} and {max}.'
          },
          'min':
          {
            'summary': 'The datetime is earlier than the minimum date.',
            'detail' : 'The datetime must be greater than or equal to {min}.',
            'hint' : 'Enter a datetime on or after {min}.'
          },
          'max':
          {
            'summary' : 'The datetime is later than the maximum date.',
            'detail' : 'The datetime must be less than or equal to {max}.',
            'hint' : 'Enter a datetime on or before {max}.'
          }
        }
      },
      'restriction':
      {
        'date': 
        {
          'dayMetaData':
          {
            'summary': 'The date is a disabled entry.',
            'detail': 'The date {value} should not be a disabled entry.'
          }
        }
      },
      'regExp': 
      {
        'summary': "The format is incorrect.",
        'detail': "The value '{value}' must match this pattern: '{pattern}'"
      },
      'required':
      {
        'summary': 'A value is required.',
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
      'datePicker': 'Date Picker',
              'inputDetail': 'Keydown for access to Calendar'
    },
        
        'oj-ojInputTime':
        {
          'inputDetail': 'Keydown for access to time drop down'
        },

    'oj-ojDataGrid':
    {
              'fetching': 'Fetching Data...',
              'empty': 'There are no data.',
              'resize': 'Resize',
              'resizeWidth': 'Resize Width',
              'resizeHeight': 'Resize Height',
              'sortRow': 'Sort Row',
              'sortRowAsc': 'Sort Row Ascending',
              'sortRowDsc': 'Sort Row Descending',
              'sortCol': 'Sort Column',
              'sortColAsc': 'Sort Column Ascending',
              'sortColDsc': 'Sort Column Descending',
              'summary-exact': 'There are {0} rows and {1} coulmns',
              'summary-estimate': 'There are approximately {0} rows and approximately {1} coulmns',
              'expand': 'Row expanded',
              'collapse': 'Row collapsed',
              'cut': 'Cut',
              'paste': 'Paste'
    },
    'oj-_ojLabel' :
    {
      'tooltipHelp':'Help',
      'tooltipRequired':'Required'
    },
    'oj-ojInputNumber' :
    {
      'tooltipDecrement':'Decrement',
      'tooltipIncrement':'Increment'
    },
    // translations used by the table component 
    'oj-ojTable': 
    {
      'labelRequired':'Required',
      'labelSelectRow':'Select Row',
      'labelSelectColumn':'Select Column',
      'labelSort': 'Sort',
                  'labelSortAsc': 'Sort Ascending',
                  'labelSortDsc': 'Sort Descending',
      'msgFetchingData':'Fetching Data...',
      'msgNoData':'No data to display.',

      'activeRowUnavailableIndex':
      {
        'summary': 'Did not change active row due to unavailable row index.',
        'detail': 'Unavailable row index: {0}.'
      },
      'columnRendererColumnNotFound':
      {
        'summary': 'Cannot find column with id {0} for column renderer.',
        'detail': 'Please make sure a column with the matching column Id exists for the column renderer.'
      },
      'columnRendererOptionRequired':
      {
        'summary': 'Option {0} is required for column renderer.',
        'detail': 'Please specify option {0} for column renderer.'
      },
      'dataInvalidType':
      {
        'summary': 'Invalid data type.',
        'detail': 'Please specify oj.Collection or oj.TableDataSource or ko.observableArray.'
      },
      'dataUnitialized':
      {
        'summary': 'Data is empty or uninitialized.',
        'detail': 'Please specify data.'
      },
      'preActiveRowError':
      {
        'summary': 'Did not change active row due to error.',
        'detail': 'Error detail: {0}.'
      },
      'refreshRowInvalidRowIndex':
      {
        'summary': 'Invalid row index value.',
        'detail': 'Row index: {0}.'
      }
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
              'm_rename': 'Rename'
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
      'labelNavInputPageMax':'of {0}',
      'labelNavInputPageSummary':'({0})',
      'msgItemRange':'{0}-{1} of {2} items',
      'msgItemRangeUnknown':'{0}-{1} items',
      'tipNavInputPage':'Go To Page',
      'tipNavPageLink':'Go To Page {0}',
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
      'labelDefaultGroupName': 'Group {0}',
      'labelSeries': 'Series: {0}',
      'labelGroup': 'Group: {0}',
      'labelValue': 'Value: {0}',
      'labelTargetValue': 'Target: {0}',
      'labelX': 'X: {0}',
      'labelY': 'Y: {0}',
      'labelZ': 'Z: {0}',
      'labelLow': 'Low: {0}',
      'labelHigh': 'High: {0}',
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
    'oj-ojDvtCommon': {
      'labelClearSelection': 'Clear Selection',
      
      'labelMonthShortJanuary': 'Jan',
      'labelMonthShortFebruary': 'Feb',
      'labelMonthShortMarch': 'Mar',
      'labelMonthShortApril': 'Apr',
      'labelMonthShortMay': 'May',
      'labelMonthShortJune': 'Jun',
      'labelMonthShortJuly': 'Jul',
      'labelMonthShortAugust': 'Aug',
      'labelMonthShortSeptember': 'Sep',
      'labelMonthShortOctober': 'Oct',
      'labelMonthShortNovember': 'Nov',
      'labelMonthShortDecember': 'Dec',
    
      'labelScalingSuffixThousand': 'K',
      'labelScalingSuffixMillion': 'M',
      'labelScalingSuffixBillion': 'B',
      'labelScalingSuffixTrillion': 'T',
      'labelScalingSuffixQuadrillion': 'Q',
      
      'msgNoData': 'No data to display'
    }
}
);
