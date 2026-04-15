
export default {
    name: 'choose',
    title: 'Why Choose Us Section',
    type: 'document',
    fields: [
        //__________BADGE_____
        {
            name: 'badgeText',
            ttle: 'Badge Text',
            type: 'string',
            description: 'e.g. Why Choose Us',
        },
        //____HEADING____
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g. why choose',

        },
        {
            name: 'headigHighlight',
            title: 'Heading HIghlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Finland properties',

        },
        //__________SUBHEADING_____
        {
            name: 'subheading',
            title: 'Subheading paragraph',
            type: 'text',
            roews: 2,
        },
        {
            //________CARD ARRAY
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    title: 'Card Heading',
                    type: 'string',
                    description: 'e.g. Verified Land Ownership',
                },
                {
                    name: 'description',
                    title: 'Card Description',
                    type: 'text',
                    rows: 3,
                },
                //___control whether card has dark green background__
                {
                    name: 'isDark',
                    title: 'Dark Card Style?',
                    type: 'boolean',
                    description: 'Turn on for green gradient Background card',
                    initialValue: false,
                },
                //icon value
                {
                    name: 'icon',
                    title: 'Icon',
                    type: 'string',
                    description: 'Choose which icon to display',
                    options: {
                        list: [
                            { title: 'Shield', value: 'shield' },
                            { title: 'FIle Text', value: 'fileText' },
                            { title: 'Dollar Sign', value: 'dollarSign' },
                            { title: 'Users', value: 'users' }
                        ],
                        Layout: 'radio',
                    },
                },
                //Icon background gredient
                {
                    name: 'iconBg',
                    title: 'Icon Background Gradient',
                    type: 'string',
                    options: {
                        list: [
                            { title: 'Green → Emerald', value: 'from-green-500 to-emerald-700' },
                            { title: 'Emerald → Teal', value: 'from-emerald-500 to-teal-700' },
                            { title: 'Teal → Green', value: 'from-teal-500 to-green-700' },
                            { title: 'Dark Green → Emerald', value: 'from-green-600 to-emerald-800' },
                        ],
                        layout:'radio',
                    },

                },
            ],
            preview:{
                select:{
                    title:'heading',
                    subtitle:'isDark',
                },
                prepare({title, subtitle}){
                    return{
                        title,
                        subtitle:subtitle ?'🟢 Dark Card' : '⬜ Light Card',
                    }
                }
            }
        },
    ],
}