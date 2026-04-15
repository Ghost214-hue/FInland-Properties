export default {
    name: "team",
    title: "Team Section",
    type: "document", 
    
    fields: [
        // ________BADGE____
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g The people Behind Us',
        },
        // __________HEADING________
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g Meet Our',  
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g Team',
        },
        // ________SUBHEADING_________
        {
            name: 'subheading',  
            title: 'Sub Heading',
            type: 'text',
            rows: 2,
            description: 'The paragraph below the heading',
        },
        // _____TEAM MEMBERS ARRAY_______
        {
            name: 'teamMembers',
            title: 'Team Members',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'teamMember',
                    title: 'Team Member',
                    fields: [
                        {
                            name: 'name',
                            title: 'Full Name',
                            type: 'string',
                            description: 'e.g David Thugu',
                        },
                        {
                            name: 'role',
                            title: 'Role/Title',
                            type: 'string',
                            description: 'e.g. Founder and CEO',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 4,
                        },
                        {
                            name: 'image',
                            title: 'Profile Photo',
                            type: 'image',
                            options: { hotspot: true },
                        },
                        {
                            name: 'dotColor',
                            title: 'Status Dot Color',
                            type: 'string',
                            options: {
                                list: [  // ← Fixed: was "lists" (should be "list")
                                    { title: 'Green', value: 'bg-green-400' },  // ← Fixed: "be-green-400"
                                    { title: 'Emerald', value: 'bg-emerald-500' },
                                    { title: 'Teal', value: 'bg-teal-500' },
                                    { title: 'Dark Green', value: 'bg-green-600' },  // ← Fixed: "Dark Gren"
                                ],
                                layout: 'radio',
                            },
                        },
                        {
                            name: 'iconBg',
                            title: 'Ring Gradient',
                            type: 'string',
                            description: 'Tailwind gradient classes for photo ring',
                            options: {
                                list: [  // ← Fixed: was "lists"
                                    { title: 'Green → Emerald', value: 'from-green-500 to-emerald-700' },  // ← Fixed: "vaue"
                                    { title: 'Emerald → Teal', value: 'from-emerald-500 to-teal-700' },
                                    { title: 'Teal → Green', value: 'from-teal-500 to-green-700' },
                                    { title: 'Green → Emerald Dark', value: 'from-green-600 to-emerald-800' },
                                ],
                                layout: 'radio',
                            },
                        },
                        {
                            name: 'ctaHref',
                            title: 'Get in Touch Button Link',
                            type: 'string',
                            description: 'e.g #contact',
                        },
                    ],
                    preview: {
                        select: {
                            title: 'name',
                            subtitle: 'role',
                            media: 'image',
                        },
                    },
                },
            ],
        },
    ],
}