export default {
    name: 'features',
    title: 'Features section',
    type: 'document',
    fields: [  
        //_________BADGE_______
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g. Hand-Picked Selection',
        },
        //_______HEADING______
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g. Featured'
        },
        {
            name: 'headingHighlight', 
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. properties',
        },
        //________SUBHEADING
        {
            name: 'subheading', 
            title: 'Subheading Paragraph',
            type: 'text',  
            rows: 2,  
            description: 'The paragraph below the heading',
        },
        //_______CTA BUTTON(View All)________
        {
            name: 'ctaLabel',
            title: 'Bottom CTA Button Label',
            type: 'string',
            description: 'e.g. View All Properties'
        },
        {
            name: 'ctaHref',
            title: 'Bottom CTA Button Link',
            type: 'string',
            description: 'e.g. #contact',
        },
        //______Properties Array_____
        {
            name: 'properties',
            title: 'Properties',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'property',
                    title: 'Property',
                    fields: [
                        {
                            name: 'title',
                            title: 'Property Title',
                            type: 'string',
                            description: 'e.g. Ocean View Plot',
                        },
                        {
                            name: 'tag',
                            title: 'Category Tag',
                            type: 'string',
                            description: 'e.g. Ocean Front, Highland, Commercial',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                        },
                        {
                            name: 'size',
                            title: 'Plot Size',
                            type: 'string',
                            description: 'e.g. 0.5 Acres',
                        },
                        {
                            name: 'status',
                            title: 'Status',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Available', value: 'Available' },
                                    { title: 'Hot Deal', value: 'Hot Deal' },
                                    { title: 'Sold', value: 'Sold' },
                                ],
                                layout: 'radio',
                            },
                        },
                        {
                            name: 'image',
                            title: 'Property Image',
                            type: 'image',
                            options: { hotspot: true },
                        },
                        {
                            name: 'enquireHref',
                            title: 'Enquire Button Link',
                            type: 'string',
                            description: 'e.g. #contact',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            subtitle: 'status',
                            media: 'image',
                        },
                    },
                },
            ],
        },
    ],
}