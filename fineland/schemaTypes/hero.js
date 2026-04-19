export default {
    name: 'hero',
    title: 'Hero Section',
    type: 'document',
    fields: [

        // ── BADGE ──────────────────────────────────────
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g. ISO 9001 Certified Developer',
        },

        // ── HEADING ────────────────────────────────────
        {
            name: 'headingLine1',
            title: 'Heading Line 1',
            type: 'string',
            description: 'e.g. Buy Verified Land',
        },
        {
            name: 'headingLine2',
            title: 'Heading Line 2',
            type: 'string',
            description: 'e.g. with Ready Title Deeds',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (gradient text)',
            type: 'string',
            description: 'The word(s) shown in green gradient, e.g. Ready Title Deeds',
        },

        // ── DESCRIPTION ─────────────────────────────────
        {
            name: 'description',
            title: 'Description Paragraph',
            type: 'text',
            rows: 3,
            description: 'Short paragraph shown below the heading',
        },

        // ── FOOTNOTE ───────────────────────────────────
        {
            name: 'footnote',
            title: 'Footnote',
            type: 'string',
            description: 'Small italic text at the bottom, e.g. *Site visits arranged within 48 hours',
        },

        // ── CTA BUTTONS ────────────────────────────────
        {
            name: 'ctaPrimaryLabel',
            title: 'Primary Button — Label',
            type: 'string',
            description: 'e.g. View Available Plots',
        },
        {
            name: 'ctaPrimaryHref',
            title: 'Primary Button — Link',
            type: 'string',
            description: 'e.g. #properties',
        },
        {
            name: 'ctaSecondaryLabel',
            title: 'Secondary Button — Label',
            type: 'string',
            description: 'e.g. Book a Site Visit',
        },
        {
            name: 'ctaSecondaryHref',
            title: 'Secondary Button — Link',
            type: 'string',
            description: 'e.g. #contact',
        },

        // ── BACKGROUND IMAGE ───────────────────────────
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Full-screen background. Will be blurred slightly.',
        },

        // ── PROMO POSTER ───────────────────────────────
        {
            name: 'promoPoster',
            title: 'Promo Poster Image',
            type: 'image',
            options: { hotspot: true },
            description: 'Advertisement poster on the right side. Leave empty to hide the poster column.',
        },
        {
            name: 'promoPosterAlt',
            title: 'Promo Poster — Alt Text',
            type: 'string',
            description: 'e.g. Happy Easter — Plot at 660K',
        },
        {
            name: 'promoPosterLabel',
            title: 'Promo Poster — Floating Pill Label',
            type: 'string',
            description: 'Text in the small pill above the poster, e.g. Current Offer or Easter Special',
        },
        {
            name: 'promoPosterCtaLabel',
            title: 'Promo Poster — Button Label',
            type: 'string',
            description: 'e.g. Enquire About This Offer',
        },
        {
            name: 'promoPosterCtaHref',
            title: 'Promo Poster — Button Link',
            type: 'string',
            description: 'e.g. #contact',
        },

        // ── TRUST BADGES ───────────────────────────────
        {
            name: 'trustBadges',
            title: 'Trust Badges',
            type: 'array',
            description: 'Small pill badges shown below the buttons. Pick an icon from the dropdown and type a short label.',
            of: [
                {
                    type: 'object',
                    name: 'trustBadge',
                    title: 'Badge',
                    fields: [
                        {
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            description: 'Choose the icon that best fits this badge',
                            options: {
                                list: [
                                    { title: '🛡  Shield — Verified / Protected',        value: '🛡' },
                                    { title: '✅  Tick — Registered / Approved',         value: '✅' },
                                    { title: '💳  Card — Secure Payments',               value: '💳' },
                                    { title: '🔄  Arrows — Money-Back / Flexible',       value: '🔄' },
                                    { title: '🏆  Trophy — Award / Top Rated',           value: '🏆' },
                                    { title: '⭐  Star — Quality / Rated',               value: '⭐' },
                                    { title: '🔒  Lock — Secure / Private',              value: '🔒' },
                                    { title: '📜  Scroll — Certified / Licensed',        value: '📜' },
                                    { title: '🤝  Handshake — Trusted Partner',          value: '🤝' },
                                    { title: '📍  Pin — Location / On-site',             value: '📍' },
                                    { title: '📞  Phone — Support / Contact',            value: '📞' },
                                    { title: '🏡  House — Property / Home',              value: '🏡' },
                                    { title: '⚡  Lightning — Fast / Quick',             value: '⚡' },
                                    { title: '💰  Money — Value / Investment',           value: '💰' },
                                    { title: '📋  Clipboard — Documents / Title Deeds',  value: '📋' },
                                ],
                                layout: 'radio',
                            },
                            validation: Rule => Rule.required().error('Please choose an icon'),
                        },
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            description: 'Short text next to the icon, e.g. Verified Titles',
                            validation: Rule => Rule.required().max(30).error('Keep labels short — 30 chars max'),
                        },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'icon' },
                        prepare({ title, subtitle }) {
                            return { title: `${subtitle}  ${title}` }
                        },
                    },
                },
            ],
        },

        // ── STATS ──────────────────────────────────────
        {
            name: 'stats',
            title: 'Stats',
            type: 'array',
            description: 'Numbers shown in the banner below the hero, e.g. 250+ Plots Sold',
            of: [
                {
                    type: 'object',
                    name: 'stat',
                    title: 'Stat',
                    fields: [
                        {
                            name: 'value',
                            title: 'Value',
                            type: 'string',
                            description: 'e.g. 250+  or  1800+  or  100%',
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            description: 'e.g. Plots Sold',
                            validation: Rule => Rule.required(),
                        },
                    ],
                    preview: {
                        select: { title: 'value', subtitle: 'label' },
                        prepare({ title, subtitle }) {
                            return { title: `${title} — ${subtitle}` }
                        },
                    },
                },
            ],
        },

    ],
}