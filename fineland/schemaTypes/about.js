export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [
        //____BADGE__________
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g Established in 2018',
        },
        //_____HEADING______
        {
            name: 'headingPrefix',
            title: 'heading Prefix',
            type: 'string',
            description: 'e.g About'
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text',
            type: 'string',
            description: 'e.g finland properties',
        },
        //________PARAGRAPHS
        {
            name: 'paragraph1',
            title: 'First paragraph',
            type: 'text',
            rows: 4,
        },
        {
            name: 'paragraph2',
            title: 'second paragraph',
            type: 'text',
            rows: 4,
        },
        //_______TEAM IMAGE______
        {
            name: 'teamImage',
            title: 'Team Image',
            type: 'image',
            options: { hotspot: true },
            description: 'The photo shown on the right side'
        },
    ],

}