export const ActivityTypes = {
    activity: {
        default: {
            text: 'atividade-texto',
            image: 'atividade-imagem',
            audio: 'atividade-audio'

        },
        questionnaire: {
            default: 'atividade-questionario'
        },
        join: {
            text: 'atividade-texto-texto',
        }
    },
    game: 'jogo',
}

export const ActivitySubtypes = {
    row: 'padrao-linha',
    column: 'padrao-coluna',
    rowReverse: 'padrao-linha-reverso',
    columnReverse: 'padrao-coluna-reverso'
}

export const GameSubtypes = {
    bingo: 'bingo',
    hideHalf: 'esconder-itens-metade',
    unscramble: 'desembaralhar-nome',
    rearrangeName: 'monte-seu-nome',
    jigsaw: 'quebra-cabecas',
    matchFriendsInitial: 'encaixe-letras',
    draggingSyllables: 'formacao-de-palavras',
    memoryGame: 'jogo-da-memoria',
    wordSearch: 'caca-nomes',
    wordBingo: 'bingo-de-palavras',
    boxWords: 'caixa-de-palavras',
    friendsName: 'meus-amigos-fotos',
    dominoName: 'domino-de-nomes',
    grouping: 'agrupamento',
    secretWord: 'palavra-secreta',
    matchFriendsInitial: 'encaixe-letras',
}

export const ItemTypes = {
    primitive: {
        text: 'texto',
        image: 'imagem',
        audio: 'audio'
    },
    custom: {
        crachaBox: 'game-cracha-box',
        cardDisplayValidacao: 'game-card-display-com-validacao',
        display18Items: 'game-display-18-items',
        textoEmBlocos: 'game-texto-em-blocos',
        memoryCardText: 'game-jogo-da-memoria-texto',
        caixaPalavras: 'game-caixa-de-palavras',
        checkmark: 'game-checkmark',
        descricaoImagem: 'game-display-descricao-imagem'
    },
    tags: {
        input: 'input',
    }
}


export const viewerOpts = {
    'inline': false,
    'button': false,
    'navbar': false,
    'title': false,
    'toolbar': false,
    'tooltip': false,
    'movable': false,
    'zoomable': false,
    'rotatable': false,
    'scalable': false,
    'transition': true,
    'fullscreen': false,
    'keyboard': false,
    'url': 'data-source'
}