export default {
    name: 'hero',
    title: 'hero section',
    type: 'document',
    fields: [

        // ── BADGE ──────────────────────────────────────
        {
            name: 'badgeText',
            title: 'badgeText',
            type: 'string',
            description: 'e.g. ISO 9001 Certified Developer',
        },

        // ── HEADING ────────────────────────────────────
        {
            name: 'headingLine1',
            title: 'Heading Line 1',
            type: 'string',
            description: 'e.g: Buy Verified Land',
        },
        {
            name: 'headingLine2',
            title: 'Heading Line 2',
            type: 'string',
            description: 'e.g: with Ready Title Deeds',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Ready Title Deeds',
        },

        // ── DESCRIPTION ─────────────────────────────────
        {
            name: 'description',
            title: 'description paragraph',
            type: 'text',
            rows: 3,
        },

        // ── FOOTNOTE ───────────────────────────────────
        {
            name: 'footnote',
            title: 'footnote',
            type: 'string',
            description: 'e.g. * site visit arranged within 48 hours',
        },

        // ── CTA BUTTONS ────────────────────────────────
        {
            name: 'ctaPrimaryLabel',
            title: 'Primary Button Label',
            type: 'string',
            description: 'e.g. View Available Plots',
        },
        {
            name: 'ctaPrimaryHref',
            title: 'Primary Button Link',
            type: 'string',
            description: 'e.g. #properties',
        },
        {
            name: 'ctaSecondaryLabel',
            title: 'Secondary Button Label',
            type: 'string',
            description: 'e.g. Book a Site Visit',
        },
        {
            name: 'ctaSecondaryHref',
            title: 'Secondary Button Link',
            type: 'string',
            description: 'e.g. #contact',
        },

        // ── BACKGROUND IMAGE ───────────────────────────
        {
            name: 'backgroundImage',
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
        },

        // ── PROMO POSTER ───────────────────────────────
        // Upload a new poster for each promotion (Easter, Christmas, New Year…).
        // The hero component reads these two fields to render the right-hand
        // poster panel — no code changes needed after the first deploy.
        {
            name: 'promoPoster',
            title: 'Promo Poster Image',
            type: 'image',
            options: { hotspot: true },
            description: 'The advertisement/promotion poster shown on the right side of the hero. Replace this whenever a new promo starts.',
        },
        {
            name: 'promoPosterAlt',
            title: 'Promo Poster Alt Text',
            type: 'string',
            description: 'Screen-reader description of the poster, e.g. "Happy Easter — Plot at 660K"',
        },
        {
            name: 'promoPosterLabel',
            title: 'Promo Poster Floating Label',
            type: 'string',
            description: 'Text shown in the "Current Offer" pill above the poster, e.g. "Current Offer" or "Easter Special"',
        },
        {
            name: 'promoPosterCtaLabel',
            title: 'Poster CTA Button Label',
            type: 'string',
            description: 'Label on the enquire button below the poster, e.g. "Enquire About This Offer"',
        },
        {
            name: 'promoPosterCtaHref',
            title: 'Poster CTA Button Link',
            type: 'string',
            description: 'Where the poster CTA links to, e.g. #contact',
        },

        // ── TRUST BADGES ───────────────────────────────
        {
            name: 'trustBadges',
            title: 'Trust Badges',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'trustBadge',
                    title: 'Trust Badge',
                    fields: [
                        { name: 'icon', title: 'Icon (emoji)', type: 'string' },
                        { name: 'label', title: 'Label', type: 'string' },
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'icon' }
                    }
                },
            ],
        },

        // ── STATS ──────────────────────────────────────
        {
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    name: 'stat',
                    title: 'Stat',
                    fields: [
                        { name: 'value', title: 'Value', type: 'string', description: 'e.g. 250+' },
                        { name: 'label', title: 'Label', type: 'string', description: 'e.g. Plots Sold' },
                    ],
                    preview: {
                        select: { title: 'value', subtitle: 'label' }
                    }
                },
            ],
        },

    ]
}