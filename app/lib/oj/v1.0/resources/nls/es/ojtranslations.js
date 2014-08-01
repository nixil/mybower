define({
      'oj-message' : 
      {
        'fatal' : 'Fatal',
        'error': 'Error',
        'warning': 'Advertencia',
        'info' : 'Información',
        'confirmation' : 'Confirmación',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': 'El valor no tiene el formato esperado.',
        'detail': 'Introduzca un valor con el formato esperado.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Ejemplo: {exampleValue}",
          'detail': "Introduzca un valor con el mismo formato que este ejemplo: '{exampleValue}'",
          'detail-plural': "Introduzca un valor con el mismo formato que estos ejemplos: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "El valor aceptado para la opción '{propertyName}' es '{propertyValueValid}'.",
          'detail-plural': "Los valores aceptados para la opción '{propertyName}' son '{propertyValueValid}'."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "Se necesita un valor para la opción '{requiredPropertyName}' cuando la opción '{propertyName}' se define en '{propertyValue}'."
        },
        'optionTypeInvalid': {
          'summary': "No se ha proporcionado un valor del tipo esperado para la opción '{propertyName}'."
        },
        'optionOutOfRange': {
          'summary': "El valor {propertyValue} está fuera del rango para la opción '{propertyName}'."
        },
        'optionValueInvalid': {
          'summary': "Se ha especificado el valor no válido '{propertyValue}' para la opción '{propertyName}'."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "El decimal '{value}' no tiene el formato esperado."
          },
          'currencyFormatMismatch': {
            'summary': "La moneda '{value}' no tiene el formato esperado."
          },
          'percentFormatMismatch' : {
            'summary': "El porcentaje '{value}' no tiene el formato esperado."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "El valor '{value}' está fuera del rango para '{propertyName}'.",
            'detail': "Introduzca un valor entre '{minValue}' y '{maxValue}'."
          },
          'dateFormatMismatch': {
            'summary': "La fecha '{value}' no tiene el formato esperado."
          },
          'timeFormatMismatch': {
            'summary': "La hora '{value}' no tiene el formato esperado."
          },
          'datetimeFormatMismatch': {
            'summary': "El valor de fecha y hora '{value}' no tiene el formato esperado."
          },
          'dateToWeekdayMismatch' : {
            'summary': "El día '{date}' no coincide con un '{weekday}'.",
            'detail' : "Introduzca un día de la semana que coincida con la fecha."
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
            'summary' : 'El número de caracteres está fuera del rango.',
            'detail' : 'El número de caracteres debe estar comprendido entre {min} y {max}.',
            'hint' : 'Introduzca {min} o más caracteres, hasta un máximo de {max}.'
          },
          'min':
          {
            'summary' : 'Hay muy pocos caracteres.',
            'detail' : 'Introduzca {min} o más caracteres, no menos.',
            'hint' : 'Introduzca {min} o más caracteres.'
          },
          'max':
          {
            'summary' : 'Hay demasiados caracteres.',
            'detail' : 'Introduzca {max} o menos caracteres, no más.',
            'hint' : 'Introduzca {max} o menos caracteres'
          },
          'exact': 
          {
            'summary': 'El número de caracteres no es correcto.',
            'detail': 'Introduzca exactamente {length} caracteres.',
            'hint': 'Introduzca {length} caracteres.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : 'El número está fuera de rango.',
              'detail' : 'El número {value} debe estar entre {min} y {max}.',
              'hint' : 'Introduzca un número entre {min} y {max}.'
            },
            'min':
            {
              'summary' : 'El número es demasiado bajo.',
              'detail' : 'El número {value} debe ser mayor o igual que {min}.',
              'hint' : 'Introduzca un número mayor o igual que {min}.'
            },
            'max':
            {
              'summary' : 'El número es demasiado alto.',
              'detail' : 'El número {value} debe ser menor o igual que {max}.',
              'hint' : 'Introduzca un número menor o igual que {max}.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : 'El valor de fecha y hora está fuera del rango.',
              'detail' : 'El valor de fecha y hora debe estar comprendido entre {min} y {max}.',
              'hint' : 'Introduzca una fecha y hora entre {min} y {max}.'
            },
            'min':
            {
              'summary': 'El valor de fecha y hora es anterior a la fecha mínima.',
              'detail' : 'La fecha y hora debe ser igual o posterior a {min}.',
              'hint' : 'Introduzca una fecha y hora igual o posterior a {min}.'
            },
            'max':
            {
              'summary' : 'El valor de fecha y hora es posterior a la fecha máxima.',
              'detail' : 'La fecha y hora debe ser igual o anterior a {max}.',
              'hint' : 'Introduzca un valor de fecha y hora igual o anterior a {max}.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': 'La fecha es de una entrada desactivada.',
              'detail': 'La fecha {value} no debe ser de una entrada desactivada.'
            }
          }
        },
        'regExp': 
        {
          'summary': "El formato no es correcto. ",
          'detail': "El valor '{value}' debe coincidir con este patrón: '{pattern}'"
        },
        'required':
        {
          'summary': 'Se necesita el valor.',
          'detail': 'Debe introducir un valor.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': 'Listo',
        'prevText': 'Anterior',
        'nextText': 'Siguiente',
        'currentText': 'Hoy',
        'weekHeader': 'Semana',
        'weekText': "Semana",
        'datePicker': 'Selector de fecha',
        'inputHelp': 'Pulse la tecla arriba y la tecla abajo para acceder al calendario',
        'inputHelpBoth': 'Pulse la tecla arriba y la tecla abajo para acceder al calendario y Mayús + flecha abajo o Mayús + flecha arriba para acceder a la lista desplegable de horas'
      },

      'oj-ojInputTime':
      {
        'inputHelp': 'Pulse la tecla abajo y la tecla arriba para acceder a la lista desplegable de horas'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': 'Valores {id} ordenados en orden ascendente',
        'accessibleSortDescending': 'Valores {id} ordenados en orden descendente',
        'accessibleActionableMode': 'Entrar en modo accionable',
        'accessibleNavigationMode': 'Entrar en modo de navegación',
        'accessibleSummaryExact': 'Es una cuadrícula de datos con {rownum} filas y {colnum} columnas',
        'accessibleSummaryEstimate': 'Es una cuadrícula de datos con un número desconocido de filas y columnas',
        'accessibleSummaryExpanded' : 'Actualmente hay {num} filas ampliadas',
        'accessibleRowExpanded': 'Fila ampliada',
        'accessibleRowCollapsed': 'Fila reducida',
        'accessibleStateSelected': 'seleccionado',
        'accessibleMultiCellSelected': '{num} celdas seleccionadas',
        'msgFetchingData': 'Recuperando datos...',
        'msgNoData': 'No hay ningún dato que mostrar.',
        'labelResize': 'Cambiar tamaño',
        'labelResizeWidth': 'Cambiar ancho',
        'labelResizeHeight': 'Cambiar alto',
        'labelSortRow': 'Ordenar filas',
        'labelSortRowAsc': 'Ordenar filas en forma ascendente',
        'labelSortRowDsc': 'Ordenar filas en forma descendente',
        'labelSortCol': 'Columna de Ordenación',
        'labelSortColAsc': 'Ordenar columnas en forma ascendente',
        'labelSortColDsc': 'Ordenar columnas en forma descendente',
        'labelCut': 'Cortar',
        'labelPaste': 'Pegar'
      },
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': 'Nivel {level}, {num} de {total}',
        'accessibleRowExpanded': 'Fila ampliada',
        'accessibleRowCollapsed': 'Fila reducida'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Ayuda',
        'tooltipRequired':'Necesario'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'Disminuir',
        'tooltipIncrement':'Incrementar'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Seleccionar Fila',
        'labelSelectColumn':'Seleccionar Columna',
        'labelSort': 'Ordenar',
		    'labelSortAsc': 'Orden ascendente',
		    'labelSortDsc': 'Orden descendente',
        'msgFetchingData':'Recuperando datos...',
        'msgNoData':'No hay ningún dato que mostrar.',
      },

      'oj-ojTabs':
      {
        'removeCueText': 'Eliminable'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': 'No se ha encontrado ninguna coincidencia'
      },

      'oj-ojTree':
      {
		'm_loading': 'Cargando...',
		'm_newnode': 'Nuevo Nodo',
		'm_multisel': 'Selección Múltiple',
		'm_edit': 'Editar',
		'm_create': 'Crear',
		'm_cut': 'Cortar',
		'm_copy': 'Copiar',
		'm_paste': 'Pegar',
		'm_remove': 'Eliminar',
		'm_rename': 'Cambiar nombre',
		'm_emptyText': 'No hay datos'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Paginación',
        'labelAccNavFirstPage': 'Primera página',
        'labelAccNavLastPage': 'Última Página',
        'labelAccNavNextPage': 'Página siguiente',
        'labelAccNavPreviousPage': 'Página Anterior',
        'labelAccNavPage': 'Página',
        'labelLoadMore':'Mostrar Más...',
        'labelNavInputPage':'Página',
        'labelNavInputPageMax':'de {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo} de {pageTotal} elementos',
        'msgItemRangeUnknown':'Elementos {pageFrom}-{pageTo}',
        'tipNavInputPage':'Ir a la página',
        'tipNavPageLink':'Ir a la página {pageNum}',
        'tipNavNextPage':'Siguiente',
        'tipNavPreviousPage':'Anterior',
        'tipNavFirstPage':'Primero',
        'tipNavLastPage':'Último',
        
        'pageInvalid':
        {
          'summary': 'El valor de página introducido no es válido.',
          'detail': 'Introduzca un valor mayor que 0.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'El valor de maxPageLinks no es válido.',
          'detail': 'Introduzca un valor mayor que 4.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Grupo {groupName}',
        'labelSeries': 'Serie: {seriesName}',
        'labelGroup': 'Grupo: {groupName}',
        'labelValue': 'Valor: {value}',
        'labelTargetValue': 'Destino: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Bajo: {low}',
        'labelHigh': 'Alto: {high}',
        'labelOther': 'Otro',
        
        'tooltipPan': 'Panorámica',
        'tooltipSelect': 'Selección de Marquesina',
        'tooltipZoom': 'Zoom con Marquesina'
      },
      'oj-ojSunburst': {
        'labelColor': 'Color',
        'labelSize': 'Tamaño'
      },
      'oj-ojTreemap': {
        'labelColor': 'Color',
        'labelSize': 'Tamaño'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Borrar Selección',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'No hay datos que mostrar',
        
        'notReadyToRender': {
          'summary': "Este componente debe asociarse a un subárbol visible de DOM antes de la presentación."
        },
        
        'stateSelected': 'Seleccionado',
        'stateUnselected': 'No seleccionado',
        'stateMaximized': 'Maximizado',
        'stateMinimized': 'Minimizado',
        'stateExpanded': 'Ampliado',
        'stateCollapsed': 'Reducido',
        'stateIsolated': 'Aislado',
        'stateHidden': 'Oculto',
        'stateVisible': 'Visible'
      },
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': 'Ventana emergente de entrada. Pulse F6 para cambiar entre la ventana emergente y el control asociado.',
        'ariaLiveRegionInitialFocusNone': 'Ventana emergente abierta. Pulse F6 para cambiar entre la ventana emergente y el control asociado.'
      }
});
