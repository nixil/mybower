define({
      'oj-message' : 
      {
        'fatal' : 'Fatal',
        'error': 'Erreur',
        'warning': 'Avertissement',
        'info' : 'Informations',
        'confirmation' : 'Confirmation',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': 'La valeur n\'est pas au format attendu.',
        'detail': 'Entrez une valeur au format attendu.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Exemple : {exampleValue}",
          'detail': "Entrez une valeur avec le même format que l'exemple suivant : '{exampleValue}'",
          'detail-plural': "Entrez une valeur avec le même format que les exemples suivants : '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "La valeur acceptée pour l'option '{propertyName}' est '{propertyValueValid}'.",
          'detail-plural': "Les valeurs acceptées pour l'option '{propertyName}' sont '{propertyValueValid}'."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "Une valeur est obligatoire pour l'option '{requiredPropertyName}' lorsque l'option '{propertyName}' est définie sur '{propertyValue}'."
        },
        'optionTypeInvalid': {
          'summary': "Aucune valeur du type attendu n'a été fournie pour l'option '{propertyName}'."
        },
        'optionOutOfRange': {
          'summary': "La valeur {propertyValue} est hors limites pour l'option '{propertyName}'."
        },
        'optionValueInvalid': {
          'summary': "La valeur non valide '{propertyValue}' a été indiquée pour l'option '{propertyName}'."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "La valeur décimale '{value}' n'est pas au format attendu."
          },
          'currencyFormatMismatch': {
            'summary': "La devise '{value}' n'est pas au format attendu."
          },
          'percentFormatMismatch' : {
            'summary': "Le pourcentage '{value}' n'est pas au format attendu."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "La valeur '{value}' est hors limites pour '{propertyName}'.",
            'detail': "Entrez une valeur comprise entre '{minValue}' et '{maxValue}'."
          },
          'dateFormatMismatch': {
            'summary': "La date '{value}' n'est pas au format attendu."
          },
          'timeFormatMismatch': {
            'summary': "L'heure '{value}' n'est pas au format attendu."
          },
          'datetimeFormatMismatch': {
            'summary': "La date/heure '{value}' n'est pas au format attendu."
          },
          'dateToWeekdayMismatch' : {
            'summary': "'{date}' ne tombe pas un '{weekday}'.",
            'detail' : "Entrez un jour de la semaine qui correspond à la date."
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
            'summary' : 'Le nombre de caractères est hors limites.',
            'detail' : 'Le nombre de caractères doit être compris entre {min} et {max}.',
            'hint' : 'Entrez au moins {min} caractères, jusqu\'à un maximum de {max}.'
          },
          'min':
          {
            'summary' : 'Il y a trop peu de caractères.',
            'detail' : 'Entrez {min} caractères ou plus, mais pas moins.',
            'hint' : 'Entrez au moins {min} caractères.'
          },
          'max':
          {
            'summary' : 'Il y a trop de caractères.',
            'detail' : 'Entrez {max} caractères ou moins, mais pas plus.',
            'hint' : 'Entrez {max} caractères ou moins.'
          },
          'exact': 
          {
            'summary': 'Le nombre de caractères est incorrect.',
            'detail': 'Entrez exactement {length} caractères.',
            'hint': 'Entrez {length} caractères.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : 'Le nombre est hors limites.',
              'detail' : 'Le nombre {value} doit être compris entre {min} et {max}.',
              'hint' : 'Entrez un nombre compris entre {min} et {max}.'
            },
            'min':
            {
              'summary' : 'Le nombre est trop faible.',
              'detail' : 'Le nombre {value} doit être supérieur à ou égal à {min}.',
              'hint' : 'Entrez un nombre supérieur à ou égal à {min}.'
            },
            'max':
            {
              'summary' : 'Le nombre est trop élevé.',
              'detail' : 'Le nombre {value} doit être inférieur ou égal à {max}.',
              'hint' : 'Entrez un nombre inférieur à ou égal à {max}.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : 'La date et l\'heure sont hors limites.',
              'detail' : 'La date et l\'heure doivent être comprises entre {min} et {max}.',
              'hint' : 'Entrez une date et une heure comprises entre {min} et {max}.'
            },
            'min':
            {
              'summary': 'La date et l\'heure sont antérieures à la date minimale.',
              'detail' : 'La date et l\'heure doivent être postérieures ou égales à {min}.',
              'hint' : 'Entrez une date et une heure postérieures ou égales à {min}.'
            },
            'max':
            {
              'summary' : 'La date et l\'heure sont postérieures à la date maximale.',
              'detail' : 'La date et l\'heure doivent être antérieures ou égales à {max}.',
              'hint' : 'Entrez une date et une heure antérieures ou égales à {max}.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': 'La date est celle d\'une entrée désactivée.',
              'detail': 'La date {value} ne doit pas être celle d\'une entrée désactivée.'
            }
          }
        },
        'regExp': 
        {
          'summary': "Le format est incorrect. ",
          'detail': "La valeur '{value}' doit correspondre au modèle suivant : '{pattern}'"
        },
        'required':
        {
          'summary': 'La valeur est obligatoire.',
          'detail': 'Vous devez entrer une valeur.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': 'Terminé',
        'prevText': 'Préc.',
        'nextText': 'Suiv.',
        'currentText': 'Aujourd\'hui',
        'weekHeader': 'Sem.',
        'weekText': "Semaine",
        'datePicker': 'Sélecteur de date',
        'inputHelp': 'Appuyez sur la touche de défilement vers le bas ou le haut pour accéder au calendrier',
        'inputHelpBoth': 'Appuyez sur la touche de défilement vers le bas ou le haut pour accéder au calendrier et sur Maj+touche de défilement vers le bas ou le haut pour accéder à la liste déroulante d\'heure'
      },

      'oj-ojInputTime':
      {
        'inputHelp': 'Appuyez sur la touche de défilement vers le bas ou le haut pour accéder à la liste déroulante d\'heure'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id} trié par ordre croissant',
        'accessibleSortDescending': '{id} trié par ordre décroissant',
        'accessibleActionableMode': 'Passer au mode d\'intervention',
        'accessibleNavigationMode': 'Passer au mode de navigation',
        'accessibleSummaryExact': 'Il s\'agit d\'une grille de données avec {rownum} lignes et {colnum} colonnes',
        'accessibleSummaryEstimate': 'Il s\'agit d\'une grille de données avec un nombre inconnu de lignes et de colonnes',
        'accessibleSummaryExpanded' : '{num} lignes sont actuellement développées',
        'accessibleRowExpanded': 'Ligne développée',
        'accessibleRowCollapsed': 'Ligne réduite',
        'accessibleStateSelected': 'sélectionné',
        'accessibleMultiCellSelected': '{num} cellules sélectionnées',
        'msgFetchingData': 'Extraction des données...',
        'msgNoData': 'Aucune donnée à afficher.',
        'labelResize': 'Redimensionner',
        'labelResizeWidth': 'Redimensionner la largeur',
        'labelResizeHeight': 'Redimensionner la hauteur',
        'labelSortRow': 'Trier la ligne',
        'labelSortRowAsc': 'Trier la ligne par ordre croissant',
        'labelSortRowDsc': 'Trier la ligne par ordre décroissant',
        'labelSortCol': 'Trier la colonne',
        'labelSortColAsc': 'Trier la colonne par ordre croissant',
        'labelSortColDsc': 'Trier la colonne par ordre décroissant',
        'labelCut': 'Couper',
        'labelPaste': 'Coller'
      },
      'oj-ojRowExpander':
      {
        'accessibleRowDescription': 'Niveau {level}, {num} sur {total}',
        'accessibleRowExpanded': 'Ligne développée',
        'accessibleRowCollapsed': 'Ligne réduite'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Aide',
        'tooltipRequired':'Obligatoire'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'Décrémenter',
        'tooltipIncrement':'Incrémenter'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Sélectionner une ligne',
        'labelSelectColumn':'Sélectionner une colonne',
        'labelSort': 'Trier',
		    'labelSortAsc': 'Trier par ordre croissant',
		    'labelSortDsc': 'Trier par ordre décroissant',
        'msgFetchingData':'Extraction des données...',
        'msgNoData':'Aucune donnée à afficher.',
      },

      'oj-ojTabs':
      {
        'removeCueText': 'Peut être enlevé'
      },

      'oj-ojSelect':
      {
        'noMatchesFound': 'Aucune correspondance trouvée'
      },

      'oj-ojTree':
      {
		'm_loading': 'Chargement...',
		'm_newnode': 'Nouveau noeud',
		'm_multisel': 'Sélection multiple',
		'm_edit': 'Modifier',
		'm_create': 'Créer',
		'm_cut': 'Couper',
		'm_copy': 'Copier',
		'm_paste': 'Coller',
		'm_remove': 'Enlever',
		'm_rename': 'Renommer',
		'm_emptyText': 'Aucune donnée'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Pagination',
        'labelAccNavFirstPage': 'Première page',
        'labelAccNavLastPage': 'Dernière page',
        'labelAccNavNextPage': 'Page suivante',
        'labelAccNavPreviousPage': 'Page précédente',
        'labelAccNavPage': 'Page ',
        'labelLoadMore':'Afficher plus...',
        'labelNavInputPage':'Page ',
        'labelNavInputPageMax':'sur {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'Eléments {pageFrom}-{pageTo} sur {pageTotal}',
        'msgItemRangeUnknown':'Eléments {pageFrom}-{pageTo}',
        'tipNavInputPage':'Aller à la page',
        'tipNavPageLink':'Aller à la page {pageNum}',
        'tipNavNextPage':'Suivant',
        'tipNavPreviousPage':'Précédent',
        'tipNavFirstPage':'Premier',
        'tipNavLastPage':'Dernier',
        
        'pageInvalid':
        {
          'summary': 'La valeur de page saisie n\'est pas valide.',
          'detail': 'Entrez une valeur supérieure à 0.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'La valeur de maxPageLinks n\'est pas valide.',
          'detail': 'Entrez une valeur supérieure à 4.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Groupe {groupName}',
        'labelSeries': 'Série : {seriesName}',
        'labelGroup': 'Groupe : {groupName}',
        'labelValue': 'Valeur : {value}',
        'labelTargetValue': 'Cible : {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Min. : {low}',
        'labelHigh': 'Max. : {high}',
        'labelOther': 'Autre',
        
        'tooltipPan': 'Panoramique',
        'tooltipSelect': 'Sélection par rectangle de sélection',
        'tooltipZoom': 'Zoom par rectangle de sélection'
      },
      'oj-ojSunburst': {
        'labelColor': 'Couleur',
        'labelSize': 'Taille'
      },
      'oj-ojTreemap': {
        'labelColor': 'Couleur',
        'labelSize': 'Taille'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Effacer la sélection',
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'Aucune donnée à afficher',
        
        'notReadyToRender': {
          'summary': "Ce composant doit être attaché à une sous-arborescence visible du DOM avant l'affichage."
        },
        
        'stateSelected': 'Sélectionné',
        'stateUnselected': 'Non sélectionné',
        'stateMaximized': 'Agrandi',
        'stateMinimized': 'Réduit',
        'stateExpanded': 'Développé',
        'stateCollapsed': 'Réduit',
        'stateIsolated': 'Isolé',
        'stateHidden': 'Masqué',
        'stateVisible': 'Visible'
      },
      'oj-ojPopup': {
        'ariaLiveRegionInitialFocusFirstFocusable': 'Accès à la fenêtre instantanée. Appuyez sur F6 pour naviguer entre la fenêtre instantanée et le contrôle associé.',
        'ariaLiveRegionInitialFocusNone': 'Fenêtre instantanée ouverte. Appuyez sur F6 pour naviguer entre la fenêtre instantanée et le contrôle associé.'
      }
});
