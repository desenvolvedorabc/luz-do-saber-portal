import Item from '@/components/ui/items/Item'

const ColorizeTypes = [
    'letra',
    'caractere_especial',
    'silaba',
    'numero'
]

export const ListMixin = {
    components: {
        Item
    },
    props: {
        valueColSize: Number,
        keyColSize: Number,
        horizontal: {
            type: Boolean,
            default: true
        },
        reverse: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        hasKeys() {
            let { item_template } = this.activity
            return item_template.key.total_per_line ? true : false
        },
        hasValues() {
            let { item_template } = this.activity
            return item_template.value.total_per_line ? true : false
        },
        getKeys() {
            return this.activity.items.keys
        },
        getValues() {
            return this.activity.items.values
        },
        getColorsArray() {
            let c = ['ffb151', 'f766ae', 'ae67e0', '757bfa', '75c0ff', '64cbc2']
            let r = []
            let aux = 0

            for (let i = 0; i < 100; i++) {
                r.push(`#${c[aux]}`)

                aux = (aux < c.length - 1) ? aux + 1 : 0
            }

            return r
        }
    },
    created(){
        this.addColors()
    },
    methods: {
        addColors(){
            this.getValues.forEach((value, key) => {
                if (this.getValues.hasOwnProperty(key)) {
                    if (ColorizeTypes.includes(this.getValues[key].type)){
                        this.getValues[key].color = this.getColorsArray[key]
                    }
                    else {
                        this.getValues[key].color = null
                    }
                }
            })
            this.getKeys.forEach((value, key) => {
                if (ColorizeTypes.includes(this.getKeys[key].type)) {
                    this.getKeys[key].color = this.getColorsArray[key]
                }
                else {
                    this.getKeys[key].color = null
                }
            })
        },
        addColorsToType(type){
            for (var key in this.activity.items.values) {
                if (this.activity.items.values.hasOwnProperty(key)) {
                    if (this.activity.items.values[key].type === type) {
                        this.activity.items.values[key].color = this.getColorsArray[key]
                    }
                    else {
                        this.activity.items.values[key].color = null
                    }
                }
            }
            for (var value in this.activity.items.keys) {
                if (this.activity.items.keys[value].type === type) {
                    this.activity.items.keys[value].color = this.getColorsArray[value]
                }
                else {
                    this.activity.items.keys[value].color = null
                }
            }
        },
        normalizeWord (word) {
            return word.split('').map(function (letter) {
                let i = this.accents.indexOf(letter)
                return (i !== -1) ? this.out[i] : letter
            }.bind({
                accents: 'ÀÁÂÃÄÅĄàáâãäåąßÒÓÔÕÕÖØÓòóôõöøóÈÉÊËĘèéêëęðÇĆçćÐÌÍÎÏìíîïÙÚÛÜùúûüÑŃñńŠŚšśŸÿýŽŻŹžżź',
                out: 'AAAAAAAaaaaaaaBOOOOOOOOoooooooEEEEEeeeeeeCCccDIIIIiiiiUUUUuuuuNNnnSSssYyyZZZzzz'
            })
            ).join('')
        }
    }
}

export { CreateAnswersMixins, MapMixins, createAnswer } from './answers'