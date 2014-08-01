define({
      'oj-message' : 
      {
        'fatal' : 'Fatal',
        'error': 'Erro',
        'warning': 'Advertência',
        'info' : 'Informações',
        'confirmation' : 'Confirmação',
        'compact-type-summary': '{0}: {1}'
      },
      'oj-converter': 
      {
        'summary': 'O valor não está no formato esperado.',
        'detail': 'Informe um valor no formato esperado.',
        'plural-separator' : ", ",

        
        // when we want to show a hint. 
        'hint': {
          'summary': "Exemplo: {exampleValue}",
          'detail': "Informe um valor no mesmo formato, conforme este exemplo: '{exampleValue}'",
          'detail-plural': "Informe um valor no mesmo formato, conforme estes exemplos: '{exampleValue}'"
        },
        
        // when the option values are not what we expected and we tell users what values we accept
        'optionHint' : {
          'detail': "Um valor aceito para a opção '{propertyName}' é '{propertyValueValid}'.",
          'detail-plural': "Os valores aceitos para a opção '{propertyName}' são '{propertyValueValid}'."
        },

        // when converter options are incorrect
        'optionTypesMismatch': {
          'summary': "Um valor para a opção '{requiredPropertyName}' é obrigatório quando a opção '{propertyName}' está definida como '{propertyValue}'."
        },
        'optionTypeInvalid': {
          'summary': "Um valor do tipo esperado não foi fornecido para a opção '{propertyName}'."
        },
        'optionOutOfRange': {
          'summary': "O valor {propertyValue} está fora da faixa da opção '{propertyName}'."
        },
        'optionValueInvalid': {
          'summary': "Um valor inválido '{propertyValue}' foi especificado para a opção '{propertyName}'."
        },

        'number': {
          // when the the value fails number conversion
          'decimalFormatMismatch': {
            'summary': "O valor decimal '{value}' não está no formato esperado."
          },
          'currencyFormatMismatch': {
            'summary': "A moeda '{value}' não está no formato esperado."
          },
          'percentFormatMismatch' : {
            'summary': "O percentual '{value}' não está no formato esperado."
          }
        },
        'datetime': {
          // when the the value fails date time conversion
          'datetimeOutOfRange': {
            'summary': "O valor '{value}' está fora da faixa de '{propertyName}'.",
            'detail': "Informe um valor entre '{minValue}' e '{maxValue}'."
          },
          'dateFormatMismatch': {
            'summary': "A data '{value}' não está no formato esperado."
          },
          'timeFormatMismatch': {
            'summary': "O horário '{value}' não está no formato esperado."
          },
          'datetimeFormatMismatch': {
            'summary': "A data e a hora '{value}' não estão no formato esperado."
          },
          'dateToWeekdayMismatch' : {
            'summary': "O dia '{date}' não é um '{weekday}'.",
            'detail' : "Informe um dia útil que corresponda à data."
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
            'summary' : 'O número de caracteres está fora da faixa.',
            'detail' : 'O número de caracteres deve estar entre {min} e {max}.',
            'hint' : 'Informe {min} ou mais caracteres; no máximo {max}.'
          },
          'min':
          {
            'summary' : 'Há poucos caracteres.',
            'detail' : 'Informe {min} ou mais caracteres, não menos.',
            'hint' : 'Informe {min} ou mais caracteres.'
          },
          'max':
          {
            'summary' : 'Há muitos caracteres.',
            'detail' : 'Informe {max} ou menos caracteres, não mais.',
            'hint' : 'Informe {max}caracteres ou menos'
          },
          'exact': 
          {
            'summary': 'O número de caracteres está incorreto.',
            'detail': 'Informe exatamente {length} caracteres.',
            'hint': 'Informe {length} caracteres.'
          }

        },
        'range':
        {
          'number': 
          {
            'range':
            {
              'summary' : 'O número está fora da faixa.',
              'detail' : 'O número {value} deve estar entre {min} e {max}.',
              'hint' : 'Informe um número entre {min} e {max}.'
            },
            'min':
            {
              'summary' : 'O número é muito baixo.',
              'detail' : 'O número {value} deve ser maior ou igual a {min}.',
              'hint' : 'Informe um número maior ou igual a {min}.'
            },
            'max':
            {
              'summary' : 'O número é muito alto.',
              'detail' : 'O número {value} deve ser menor ou igual a {max}.',
              'hint' : 'Informe um número menor ou igual a {max}.'
            }
          },
          'datetime': 
          {
            'range':
            {
              'summary' : 'Data e hora estão fora da faixa.',
              'detail' : 'Data e hora devem estar entre {min} e {max}.',
              'hint' : 'Informe uma data e uma hora entre {min} e {max}.'
            },
            'min':
            {
              'summary': 'Data e hora são anteriores à data mínima.',
              'detail' : 'Data e hora {value} devem ser iguais ou posteriores a {min}.',
              'hint' : 'Informe uma data e uma hora iguais ou posteriores a {min}.'
            },
            'max':
            {
              'summary' : 'Data e hora são posteriores à data máxima.',
              'detail' : 'Data e hora {value} devem ser iguais ou mais próximas a {max}.',
              'hint' : 'Informe uma data e uma hora iguais ou anteriores a {max}.'
            }
          }
        },
        'restriction':
        {
          'date': 
          {
            'dayMetaData':
            {
              'summary': 'A data é de uma entrada desativada.',
              'detail': 'A data {value} não deve ser de uma entrada desativada.'
            }
          }
        },
        'regExp': 
        {
          'summary': "O formato está incorreto.",
          'detail': "O valor '{value}' deve corresponder a este padrão: '{pattern}'"
        },
        'required':
        {
          'summary': 'O valor é obrigatório.',
          'detail': 'Você deverá informar um valor.'
        }
      },
	  
      'oj-ojInputDate':
      {
        'closeText': 'Concluído',
        'prevText': 'Ant.',
        'nextText': 'Próximo',
        'currentText': 'Hoje',
        'weekHeader': 'Sem.',
        'datePicker': 'Seletor de Data',
	'inputDetail': 'Pressione Seta para baixo ou Seta para cima para acessar o Calendário',
        'inputDetailBoth': 'Pressione Seta para baixo ou Seta para cima para acessar o Calendário e Alt + Seta para baixo ou Alt + Seta para cima para acessar a lista drop-down de horários'
      },

      'oj-ojInputTime':
      {
        'inputDetail': 'Pressione Seta para baixo ou Seta para cima para acessar a lista drop-down de horários'
      },

      'oj-ojDataGrid':
      {
        'accessibleSortAscending': '{id} classificado(a) em ordem crescente',
        'accessibleSortDescending': '{id} classificado(a) em ordem decrescente',
        'accessibleActionableMode': 'Informe o modo acionável',
        'accessibleNavigationMode': 'Informe o modo de navegação',
        'accessibleSummaryExact': 'Esta é uma grade de dados com {rownum} linhas e {colnum} colunas',
        'accessibleSummaryEstimate': 'Esta é uma grade de dados com um número desconhecido de linhas e colunas',
        'accessibleSummaryExpanded' : 'Atualmente há {num} linhas expandidas',
        'accessibleRowExpanded': 'Linha expandida',
        'accessibleRowCollapsed': 'Linha contraída',
        'accessibleStateSelected': 'selecionado',
        'accessibleMultiCellSelected': '{num} células selecionadas',
        'msgFetchingData': 'Extraindo Dados...',
        'msgNoData': 'Nenhum dado a ser exibido.',
        'labelResize': 'Redimensionar',
        'labelResizeWidth': 'Redimensionar Largura',
        'labelResizeHeight': 'Redimensionar Altura',
        'labelSortRow': 'Classificar Linha',
        'labelSortRowAsc': 'Classificar Linha em Ordem Crescente',
        'labelSortRowDsc': 'Classificar Linha em Ordem Decrescente',
        'labelSortCol': 'Classificar Coluna',
        'labelSortColAsc': 'Classificar Coluna em Ordem Crescente',
        'labelSortColDsc': 'Classificar Coluna em Ordem Decrescente',
        'labelCut': 'Recortar',
        'labelPaste': 'Colar'
      },
      'oj-_ojLabel' :
      {
        'tooltipHelp':'Ajuda',
        'tooltipRequired':'Obrigatório'
      },
      'oj-ojInputNumber' :
      {
        'tooltipDecrement':'Reduzir',
        'tooltipIncrement':'Incrementar'
      },
      // translations used by the table component 
      'oj-ojTable': 
      {
        'labelSelectRow':'Selecionar Linha',
        'labelSelectColumn':'Selecionar Coluna',
        'labelSort': 'Classificar',
		    'labelSortAsc': 'Classificar por Ordem Crescente',
		    'labelSortDsc': 'Classificar por Ordem Decrescente',
        'msgFetchingData':'Extraindo Dados...',
        'msgNoData':'Nenhum dado a ser exibido.',

        'activeRowUnavailableIndex':
        {
          'summary': 'A linha ativa não foi alterada devido a um índice de linha indisponível.',
          'detail': 'Índice de linha indisponível: {rowIdx}.'
        },
        'columnRendererColumnNotFound':
        {
          'summary': 'Não é possível encontrar uma coluna com id {columnId} para o conversor de coluna.',
          'detail': 'Certifique-se de que exista uma coluna com o Id de coluna correspondente para o conversor de coluna.'
        },
        'columnRendererOptionRequired':
        {
          'summary': 'A opção {option} é obrigatória para o conversor de coluna.',
          'detail': 'Especifique a opção {option} para o conversor de coluna.'
        },
        'dataInvalidType':
        {
          'summary': 'Tipo de dados inválido.',
          'detail': 'Especifique o tipo de dados apropriado.'
        },
        'dataUnitialized':
        {
          'summary': 'Dados vazios ou não inicializados.',
          'detail': 'Especifique os dados.'
        },
        'preActiveRowError':
        {
          'summary': 'A linha ativa não foi alterada devido a um erro.',
          'detail': 'Detalhe do erro: {error}.'
        },
        'refreshRowInvalidRowIndex':
        {
          'summary': 'Valor do índice de linha inválido.',
          'detail': 'Índice de linha: {rowIdx}.'
        },
        'tableDataSourceInstantiated':
        {
          'summary': 'construtor oj.TableDataSource chamado.',
          'detail': 'Não instancie oj.TableDataSource. Use uma das subclasses, em vez de oj.ArrayTableDataSource ou de oj.CollectionTableDataSource.'
        }
      },

      'oj-ojTree':
      {
		'm_loading': 'Carregando...',
		'm_newnode': 'Novo Nó',
		'm_multisel': 'Seleção Múltipla',
		'm_edit': 'Editar',
		'm_create': 'Criar',
		'm_cut': 'Recortar',
		'm_copy': 'Copiar',
		'm_paste': 'Colar',
		'm_remove': 'Remover',
		'm_rename': 'Renomear',
		'm_emptyText': 'Não há dados'
      },

      'oj-ojPagingControl': 
      {
        'labelAccPaging': 'Paginação',
        'labelAccNavFirstPage': 'Primeira Página',
        'labelAccNavLastPage': 'Última Página',
        'labelAccNavNextPage': 'Próxima Página',
        'labelAccNavPreviousPage': 'Página Anterior',
        'labelAccNavPage': 'Página',
        'labelLoadMore':'Mostrar Mais...',
        'labelNavInputPage':'Página',
        'labelNavInputPageMax':'de {pageMax}',
        'labelNavInputPageSummary':'({pageSummary})',
        'msgItemRange':'{pageFrom}-{pageTo} de {pageTotal} itens',
        'msgItemRangeUnknown':'{pageFrom}-{pageTo} itens',
        'tipNavInputPage':'Ir para Página',
        'tipNavPageLink':'Ir para a Página {pageNum}',
        'tipNavNextPage':'Próximo',
        'tipNavPreviousPage':'Anterior',
        'tipNavFirstPage':'Primeiro',
        'tipNavLastPage':'Último',
        
        'pageInvalid':
        {
          'summary': 'O valor informado da página é inválido.',
          'detail': 'Informe um valor maior que 0.'
        },
        
        'maxPageLinksInvalid':
        {
          'summary': 'O valor de maxPageLinks é inválido.',
          'detail': 'Informe um valor maior que 4.'
        }
      },
      
      // DVT Components
      'oj-ojChart': {
        'labelDefaultGroupName': 'Grupo {groupName}',
        'labelSeries': 'Série: {seriesName}',
        'labelGroup': 'Grupo: {groupName}',
        'labelValue': 'Valor: {value}',
        'labelTargetValue': 'Alvo: {targetValue}',
        'labelX': 'X: {x}',
        'labelY': 'Y: {y}',
        'labelZ': 'Z: {z}',
        'labelLow': 'Baixo: {low}',
        'labelHigh': 'Alvo: {high}',
        'labelOther': 'Outros',
        
        'tooltipPan': 'Panorâmico',
        'tooltipSelect': 'Marcação se seleção',
        'tooltipZoom': 'Marcação de zoom'
      },
      'oj-ojSunburst': {
        'labelColor': 'Cor',
        'labelSize': 'Tamanho'
      },
      'oj-ojTreemap': {
        'labelColor': 'Cor',
        'labelSize': 'Tamanho'
      },
      'oj-dvtBaseComponent': {
        'labelClearSelection': 'Limpar Seleção',
        
        'labelMonthShortJanuary': 'Jan',
        'labelMonthShortFebruary': 'Fev',
        'labelMonthShortMarch': 'Mar',
        'labelMonthShortApril': 'Abr',
        'labelMonthShortMay': 'Mai',
        'labelMonthShortJune': 'Jun',
        'labelMonthShortJuly': 'Jul',
        'labelMonthShortAugust': 'Ago',
        'labelMonthShortSeptember': 'Set',
        'labelMonthShortOctober': 'Out',
        'labelMonthShortNovember': 'Nov',
        'labelMonthShortDecember': 'Dez',
      
        'labelScalingSuffixThousand': 'K',
        'labelScalingSuffixMillion': 'M',
        'labelScalingSuffixBillion': 'B',
        'labelScalingSuffixTrillion': 'T',
        'labelScalingSuffixQuadrillion': 'Q',
        
        'msgNoData': 'Nenhum dado a ser exibido',
        
        'notReadyToRender': {
          'summary': "Este componente deve ser anexado a uma subárvore visível do DOM antes da conversão."
        },
        
        'stateSelected': 'Selecionado',
        'stateUnselected': 'Não Selecionado',
        'stateMaximized': 'Maximizado',
        'stateMinimized': 'Minimizado',
        'stateExpanded': 'Expandido',
        'stateCollapsed': 'Contraído',
        'stateIsolated': 'Isolado',
        'stateHidden': 'Oculto'
      }
});
