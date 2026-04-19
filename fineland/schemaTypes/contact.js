export default {
    name: 'contact',
    title: 'Contact Us Section',
    type: 'document',
    fields: [

        // ── BADGE ──
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g. Get In Touch',
            initialValue: 'Get In Touch',
        },

        // ── HEADING ──
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g. Contact',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Us',
        },

        // ── SUBHEADING ──
        {
            name: 'subheading',
            title: 'Subheading Paragraph',
            type: 'text',
            rows: 2,
        },

        // ── CONTACT DETAIL CARDS ──
        {
            name: 'contactDetails',
            title: 'Contact Detail Cards',
            type: 'array',
            validation: (Rule) => Rule.min(1).max(6),
            of: [
                {
                    type: 'object',
                    name: 'contactDetail',
                    title: 'Contact Detail',
                    fields: [
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            description: 'e.g. Phone, Email, Office, Working Hours',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'value',
                            title: 'Main Value',
                            type: 'string',
                            description: 'e.g. 123-456-7890 or Nairobi, Kenya',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'sub',
                            title: 'Sub Text',
                            type: 'string',
                            description: 'e.g. Mon – Sat, 8am – 6pm',
                        },
                        {
                            name: 'href',
                            title: 'Link (optional)',
                            type: 'string',
                            description: 'e.g. tel:1234567890 or mailto:info@... — leave blank if not clickable',
                        },
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Phone',   value: 'phone' },
                                    { title: 'Mail',    value: 'mail' },
                                    { title: 'Map Pin', value: 'mapPin' },
                                    { title: 'Clock',   value: 'clock' },
                                    { title: 'Globe',   value: 'globe' },
                                    { title: 'Users',   value: 'users' },
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
                                    { title: 'Green → Emerald',      value: 'from-green-500 to-emerald-700' },
                                    { title: 'Emerald → Teal',       value: 'from-emerald-500 to-teal-700' },
                                    { title: 'Teal → Green',         value: 'from-teal-500 to-green-700' },
                                    { title: 'Dark Green → Emerald', value: 'from-green-600 to-emerald-800' },
                                ],
                                layout: 'radio',
                            },
                        },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'value' },
                        prepare: ({ title, subtitle }) => ({
                            title: title || 'Contact Detail',
                            subtitle: subtitle || '',
                        }),
                    },
                },
            ],
        },

        // ── QUICK NOTE BANNER ──
        {
            name: 'quickNote',
            title: 'Quick Note Banner',
            type: 'text',
            rows: 2,
            description: 'The green gradient banner below the contact cards. e.g. Site visits are arranged within 48 hours…',
        },

        // ── FORM SECTION ──
        {
            name: 'formTitle',
            title: 'Form Title',
            type: 'string',
            description: 'e.g. Send Us a Message',
            initialValue: 'Send Us a Message',
        },
        {
            name: 'formSubtitle',
            title: 'Form Subtitle',
            type: 'string',
            description: "e.g. Fill in the form and we'll get back to you shortly.",
        },
        {
            name: 'formSubmitLabel',
            title: 'Submit Button Label',
            type: 'string',
            description: 'e.g. Send Message',
            initialValue: 'Send Message',
        },

        // ── SUCCESS STATE ──
        {
            name: 'successTitle',
            title: 'Success Title',
            type: 'string',
            description: 'Shown after form is submitted. e.g. Message Sent!',
            initialValue: 'Message Sent!',
        },
        {
            name: 'successMessage',
            title: 'Success Message',
            type: 'text',
            rows: 2,
            description: 'e.g. Thank you for reaching out. One of our agents will get back to you within 24 hours.',
        },
    ],

    preview: {
        select: {
            title: 'headingPrefix',
            subtitle: 'badgeText',
        },
        prepare({ title, subtitle }) {
            return {
                title: title || 'Contact Us',
                subtitle: subtitle || 'Section',
            };
        },
    },
};