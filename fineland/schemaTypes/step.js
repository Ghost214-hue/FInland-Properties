export default {
    name: 'step',
    title: 'How It Works / Steps Section',
    type: 'document',
    fields: [
        // ── BADGE ──
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g. Ownership Process',
            initialValue: 'Ownership Process',
        },

        // ── HEADING ──
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g. Simple 3-Step',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Ownership',
        },

        // ── SUBHEADING ──
        {
            name: 'subheading',
            title: 'Subheading Paragraph',
            type: 'text',
            rows: 2,
        },

        // ── STEPS ARRAY ──
        {
            name: 'steps',
            title: 'Steps',
            type: 'array',
            validation: (Rule) => Rule.min(1).max(6),
            of: [
                {
                    type: 'object',
                    name: 'step',
                    title: 'Step',
                    fields: [
                        {
                            name: 'heading',
                            title: 'Step Heading',
                            type: 'string',
                            description: 'e.g. Select Your Plot',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Step Description',
                            type: 'text',
                            rows: 3,
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            description: 'Choose which icon to display for this step',
                            options: {
                                list: [
                                    { title: 'Map Pin',      value: 'mapPin' },
                                    { title: 'Credit Card',  value: 'creditCard' },
                                    { title: 'File Check',   value: 'fileCheck' },
                                    { title: 'Home',         value: 'home' },
                                    { title: 'Key',          value: 'key' },
                                    { title: 'Star',         value: 'star' },
                                ],
                                layout: 'radio',
                            },
                        },
                    ],
                    preview: {
                        select: {
                            title: 'heading',
                            subtitle: 'description',
                        },
                        prepare({ title, subtitle }) {
                            return {
                                title: title || 'Untitled Step',
                                subtitle: subtitle || '',
                            };
                        },
                    },
                },
            ],
        },

        // ── BOTTOM CTA BAR ──
        {
            name: 'ctaQuestion',
            title: 'CTA Bar Question Text',
            type: 'string',
            description: 'e.g. Still have questions about the process?',
        },
        {
            name: 'ctaButtonText',
            title: 'CTA Button Label',
            type: 'string',
            description: 'e.g. Speak to an Agent',
            initialValue: 'Speak to an Agent',
        },
        {
            name: 'ctaButtonHref',
            title: 'CTA Button Link',
            type: 'string',
            description: 'e.g. #contact',
            initialValue: '#contact',
        },
    ],

    preview: {
        select: {
            title: 'headingPrefix',
            subtitle: 'badgeText',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'How It Works',
                subtitle: subtitle || 'Steps Section',
            };
        },
    },
};