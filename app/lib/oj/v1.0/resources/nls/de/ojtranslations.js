define({
      'oj-message' : 
      {
        'fatal' : 'Abbruchfehler',
        'error': 'Fehler',
        'warning': 'Warnung',
        'info' : 'Info',
        'confirmation' : 'Bestätigung',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': 'Der Wert besitzt nicht das erwartete Format.',
        'detail': 'Geben Sie einen Wert im erwarteten Format ein.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Beispiel: {exampleValue}",
          'detail': "Geben Sie einen Wert im gleichen Format ein wie in diesem Beispiel: \"{exampleValue}\"",
          'detail-plural': "Geben Sie einen Wert im gleichen Format ein wie in diesen Beispielen: \"{exampleValue}\""
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "Ein akzeptierter Wert für Option \"{propertyName}\" lautet \"{propertyValueValid}\".",
          'detail-plural': "Akzeptierte Werte für Option \"{propertyName}\" lauten \"{propertyValueValid}\"."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "Für die Option \"{requiredPropertyName}\" muss ein Wert angegeben werden, wenn für die Option \"{propertyName}\" der Wert \"{propertyValue}\" festgelegt wurde."
        },
        'optionTypeInvalid': {
          'summary': "Für Option \"{propertyName}\" wurde kein Wert des erwarteten Typs angegeben."
        },
        'optionOutOfRange': {
          'summary': "Wert {propertyValue} für die Option \"{propertyName}\" befindet sich außerhalb des zulässigen Bereichs."
        },
        'optionValueInvalid': {
          'summary': "Für die Option \"{propertyName}\" wurde der ungültige Wert \"{propertyValue}\" angegeben."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "Der Dezimalwert \"{value}\" besitzt nicht das erwartete Format."
          },
          'currencyFormatMismatch': {
            'summary': "Der Währungswert \"{value}\" besitzt nicht das erwartete Format."
          },
          'percentFormatMismatch' : {
            'summary': "Der Prozentwert \"{value}\" besitzt nicht das erwartete Format."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "Wert \"{value}\" für \"{propertyName}\" befindet sich außerhalb des zulässigen Bereichs.",
            'detail': "Geben Sie einen Wert zwischen \"{minValue}\" und \"{maxValue}\" ein."
          },
          'dateFormatMismatch': {
            'summary': "Der Datumswert \"{value}\" besitzt nicht das erwartete Format."
          },
          'timeFormatMismatch': {
            'summary': "Der Uhrzeitwert \"{value}\" besitzt nicht das erwartete Format."
          },
          'datetimeFormatMismatch': {
            'summary': "Der Datums- und Uhrzeitwert \"{value}\" besitzt nicht das erwartete Format."
          },
          'dateToWeekdayMismatch' : {
            'summary': "Der Tag \"{date}\" ist kein \"{weekday}\".",
            'detail' : "Geben Sie den Wochentag ein, der dem Datum entspricht."
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
            'summary' : 'Die Anzahl der Zeichen liegt außerhalb des gültigen Bereichs.',
            'detail' : 'Die Zeichenanzahl muss zwischen {min} und {max} liegen.',
            'hint' : 'Geben Sie {min} oder mehr, bis maximal {max} Zeichen ein.'
          },
          'min':
          {
            'summary' : 'Zu wenige Zeichen.',
            'detail' : 'Geben Sie {min} oder mehr Zeichen ein, nicht weniger.',
            'hint' : 'Geben Sie {min} oder mehr Zeichen ein.'
          },
          'max':
          {
            'summary' : 'Zu viele Zeichen.',
            'detail' : 'Geben Sie {max} oder weniger Zeichen ein, nicht mehr.',
            'hint' : 'Geben Sie {max} oder weniger Zeichen ein'
          },
          'exact': 
          {
            'summary': 'Die Anzahl der Zeichen ist falsch.',
            'detail': 'Geben Sie genau {length} Zeichen ein.',
            'hint': 'Geben Sie {length} Zeichen ein.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : 'Die Zahl liegt außerhalb des zulässigen Bereichs.',
              'detail' : 'Die Zahl {value} muss zwischen {min} und {max} liegen.',
              'hint' : 'Geben Sie eine Zahl zwischen {min} und {max} ein.'
            },
            'min':
            {
              'summary' : 'Die Zahl ist zu niedrig.',
              'detail' : 'Die Zahl {value} muss größer/gleich {min} sein.',
              'hint' : 'Geben Sie eine Zahl ein, die größer oder gleich {min} ist.'
            },
            'max':
            {
              'summary' : 'Die Zahl ist zu hoch.',
              'detail' : 'Die Zahl {value} muss kleiner/gleich {max} sein.',
              'hint' : 'Geben Sie eine Zahl ein, die kleiner oder gleich {max} ist.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : 'Datum und Uhrzeit liegen außerhalb des zulässigen Bereichs.',
              'detail' : 'Datum und Uhrzeit müssen zwischen {min} und {max} liegen.',
              'hint' : 'Geben Sie Datum und Uhrzeit zwischen {min} und {max} ein.'
            },
            'min':
            {
              'summary': 'Datum und Uhrzeit liegen vor dem frühesten Datum.',
              'detail' : 'Datum und Uhrzeit müssen {min} oder später sein.',
              'hint' : 'Geben Sie Datum und Uhrzeit ein, die {min} oder später entsprechen.'
            },
            'max':
            {
              'summary' : 'Datum und Uhrzeit liegen nach dem spätesten Datum.',
              'detail' : 'Datum und Uhrzeit müssen {max} oder früher sein.',
              'hint' : 'Geben Sie Datum und Uhrzeit ein, die {max} oder früher entsprechen.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': 'Das Datum bezieht sich auf einen deaktivierten Eintrag.',
              'detail': 'Das Datum {value} darf sich nicht auf einen deaktivierten Eintrag beziehen.'
            }
          }
        },
        'regExp': 
        {
          'summary': "Format ist falsch.",
          'detail': "Wert \"{value}\" muss mit diesem Muster übereinstimmen: \"{pattern}\""
        },
        'required':
        {
          'summary': 'Wert ist erforderlich.',
          'detail': 'Sie müssen einen Wert eingeben.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': 'Fertig',
        'prevText': 'Voriger',
        'nextText': 'Nächster',
        'currentText': 'Heute',
        'weekHeader': 'KW',
        'weekText': "Woche",
        'datePicker': 'Datumsauswahl',
        'inputHelp': 'Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf den Kalender zuzugreifen',
        'inputHelpBoth': 'Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf den Kalender zuzugreifen, und UMSCHALT+NACH-UNTEN bzw. UMSCHALT+NACH-OBEN, um auf das Dropdown-Menü für die Uhrzeit zuzugreifen'
      },

      'oj-ojInputTime':
      {
        'inputHelp': 'Drücken Sie die NACH-UNTEN- bzw. NACH-OBEN-TASTE, um auf das Dropdown-Menü für die Uhrzeit zuzugreifen'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id} aufsteigend sortiert',
        'accessibleSortDescending': '{id} absteigend sortiert',
        'accessibleActionableMode': 'Aktionsmodus aufrufen',
        'accessibleNavigationMode': 'Navigationsmodus aufrufen',
        'accessibleSummaryExact': 'Dies ist ein Datenraster mit {rownum} Zeilen und {colnum} Spalten',
        'accessibleSummaryEstimate': 'Dies ist ein Datenraster mit einer unbekannten Anzahl Zeilen und Spalten',
        'accessibleSummaryExpanded' : 'Es sind derzeit {num} Zeilen eingeblendet',
        'accessibleRowExpanded': 'Zeile eingeblendet',
        'accessibleRowCollapsed': 'Zeile ausgeblendet',
        'accessibleStateSelected': 'gewählt',
        'accessibleMultiCellSelected': '{num} Zellen gewählt',
        'msgFetchingData': 'Daten werden abgerufen...',
        'msgNoData': 'Keine anzuzeigenden Daten.',
        'labelResize': 'Skalieren',
        'labelResizeWidth': 'Breite ändern',
        'labelResizeHeight': 'Höhe ändern',
        'labelSortRow': 'Zeile sortieren',
        'labelSortRowAsc': 'Zeile aufsteigend sortieren',
        'labelSortRowDsc': 'Zeile absteigend sortieren',
        'labelSortCol': 'Spalte sortieren',
        'labelSortColAsc': 'Spalte aufsteigend sortieren',
        'labelSortColDsc': 'Spalte absteigend sortieren',
        'labelCut': 'Ausschneiden',
        'labelPaste': 'Einfügen'
      },
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': 'Ebene {level}, {num} von {total}',
        'accessibleRowExpanded': 'Zeile eingeblendet',
        'accessibleRowCollapsed': 'Zeile ausgeblendet'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Hilfe',
        'tooltipRequired':'Erforderlich'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'Verringern',
        'tooltipIncrement':'Erhöhen'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Zeile auswählen',
        'labelSelectColumn':'Spalte auswählen',
        'labelSort': 'Sortieren',
		    'labelSortAsc': 'Aufsteigend sortieren',
		    'labelSortDsc': 'Absteigend sortieren',
        'msgFetchingData':'Daten werden abgerufen...',
        'msgNoData':'Keine anzuzeigenden Daten.',
      },

      'oj-ojTabs':
      {
        'removeCueText': 'Kann entfernt werden'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': 'Keine Übereinstimmungen gefunden'
      },

      'oj-ojTree':
      {
		'm_loading': 'Wird geladen...',
		'm_newnode': 'Neuer Knoten',
		'm_multisel': 'Mehrfachauswahl',
		'm_edit': 'Bearbeiten',
		'm_create': 'Erstellen',
		'm_cut': 'Ausschneiden',
		'm_copy': 'Kopieren',
		'm_paste': 'Einfügen',
		'm_remove': 'Entfernen',
		'm_rename': 'Umbenennen',
		'm_emptyText': 'Keine Daten'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Seitenumbruch',
        'labelAccNavFirstPage': 'Erste Seite',
        'labelAccNavLastPage': 'Letzte Seite',
        'labelAccNavNextPage': 'Nächste Seite',
        'labelAccNavPreviousPage': 'Vorherige Seite',
        'labelAccNavPage': 'Seite',
        'labelLoadMore':'Weitere anzeigen...',
        'labelNavInputPage':'Seite',
        'labelNavInputPageMax':'von {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo} von {pageTotal} Elementen',
        'msgItemRangeUnknown':'{pageFrom}-{pageTo} Elemente',
        'tipNavInputPage':'Gehe zu Seite',
        'tipNavPageLink':'Gehe zu Seite {pageNum}',
        'tipNavNextPage':'Weiter',
        'tipNavPreviousPage':'Zurück',
        'tipNavFirstPage':'Erste',
        'tipNavLastPage':'Letzte',
        
        'pageInvalid':
        {
          'summary': 'Der eingegebene Seitenwert ist ungültig.',
          'detail': 'Geben Sie einen Wert größer als 0 ein.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'Wert für maxPageLinks ist ungültig.',
          'detail': 'Geben Sie einen Wert größer als 4 ein.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Gruppe {groupName}',
        'labelSeries': 'Reihe: {seriesName}',
        'labelGroup': 'Gruppe: {groupName}',
        'labelValue': 'Wert: {value}',
        'labelTargetValue': 'Ziel: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Niedrigst: {low}',
        'labelHigh': 'Höchst: {high}',
        'labelOther': 'Weitere',
        
        'tooltipPan': 'Schwenken',
        'tooltipSelect': 'Auswahl in Laufschrift',
        'tooltipZoom': 'Laufschriftzoom'
      },
      'oj-ojSunburst': {
        'labelColor': 'Farbe',
        'labelSize': 'Größe'
      },
      'oj-ojTreemap': {
        'labelColor': 'Farbe',
        'labelSize': 'Größe'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Auswahl löschen',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'Keine anzuzeigenden Daten',
        
        'notReadyToRender': {
          'summary': "Diese Komponente muss vor dem Rendering mit einem sichtbaren Unterbaum von DOM verknüpft werden."
        },
        
        'stateSelected': 'Gewählt',
        'stateUnselected': 'Auswahl aufgehoben',
        'stateMaximized': 'Maximiert',
        'stateMinimized': 'Minimiert',
        'stateExpanded': 'Eingeblendet',
        'stateCollapsed': 'Ausgeblendet',
        'stateIsolated': 'Isoliert',
        'stateHidden': 'Ausgeblendet',
        'stateVisible': 'Sichtbar'
      },
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': 'Popup wird aufgerufen. Drücken Sie F6, um zwischen dem Popup und dem zugehörigen Steuerelement zu navigieren.',
        'ariaLiveRegionInitialFocusNone': 'Popup geöffnet. Drücken Sie F6, um zwischen dem Popup und dem zugehörigen Steuerelement zu navigieren.'
      }
});
