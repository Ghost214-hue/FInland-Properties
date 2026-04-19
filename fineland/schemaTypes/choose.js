export default {
    name: 'choose',
    title: 'Why Choose Us Section',
    type: 'document',
    fields: [
        //__________BADGE_____
        {
            name: 'badgeText',
            title: 'Badge Text', 
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
            name: 'headingHighlight',  
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Finland properties',
        },
        //__________SUBHEADING_____
        {
            name: 'subheading',
            title: 'Subheading paragraph',
            type: 'text',
            rows: 2,  
        },
        //________CARDS ARRAY________
        {
            name: 'cards',
            title: 'Cards',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'card',  
                    title: 'Card',
                    fields: [  
                        {
                            name: 'heading',  
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
                        {
                            name: 'isDark',
                            title: 'Dark Card Style?',
                            type: 'boolean',
                            description: 'Turn on for green gradient background card',
                            initialValue: false,
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            description: 'Choose which icon to display',
                            options: {
                                list: [
                                    { title: 'Shield', value: 'shield' },
                                    { title: 'File Text', value: 'fileText' }, 
                                    { title: 'Dollar Sign', value: 'dollarSign' },
                                    { title: 'Users', value: 'users' }
                                ],
                                layout: 'radio', 
                            },
                        },
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
                                layout: 'radio',
                            },
                        },
                    ],
                },
            ],
        },
    ],
    preview: {
        select: {
            title: 'headingPrefix',
            subtitle: 'badgeText',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Why Choose Us',
                subtitle: subtitle || 'Section',
            };
        },
    },
};