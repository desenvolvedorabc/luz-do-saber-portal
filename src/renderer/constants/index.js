export const ActivityTypes = {
    activity: {
        default: {
            text: 'atividade-texto',
        },
        join: {
            text: 'atividade-texto-texto',
            image: 'atividade-imagem-texto'
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
    memoryGame: 'jogo-da-memoria',
    wordSearch: 'caca-nomes',
    wordBingo: 'bingo-de-palavras',
    boxWords: 'caixa-de-palavras',
    friendsName: 'meus-amigos-fotos',
    dominoName: 'domino-de-nomes',
    grouping: 'agrupamento',
    matchFriendsInitial: 'encaixe-letras',
}

export const ItemTypes = {
    primitive: {
        text: 'texto',
        image: 'imagem',
    },
    custom: {
        crachaBox: 'game-cracha-box',
        cardDisplayValidacao: 'game-card-display-com-validacao',
        display18Items: 'game-display-18-items',
        textoEmBlocos: 'game-texto-em-blocos',
        memoryCardText: 'game-jogo-da-memoria-texto',
        caixaPalavras: 'game-caixa-de-palavras',
        checkmark: 'game-checkmark'
    },
    tags: {
        input: 'input',
    }
}
