export default {
    name: 'hero',
    title: 'hero section',
    type: 'document',
    fields: [        // ← Fixed typo here

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
            description: 'e.g:buy verified land',
        },
        {
            name: 'headingLine2',   // ← You were missing this field
            title: 'Heading Line 2',
            type: 'string',
            description: 'eg:with ready title deeds',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g Verified plots with clear title deeds — transparent buying, quick ownership transfer, and secure future investment.',
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
            name: 'ctaPrimaryLabel',      // ← Fixed: lowercase 'p' (consistency)
            title: 'Primary Button Label',
            type: 'string',
            description: 'e.g. View Available Plots',
        },
        {
            name: 'ctaPrimaryHref',       // ← Fixed: lowercase 'p'
            title: 'Primary Button Link',
            type: 'string',
            description: 'e.g. #properties',
        },
        {
            name: 'ctaSecondaryLabel',
            title: 'Secondary Button Label',
            type: 'string',
            description: 'e.g. book a site visit',
        },
        {
            name: 'ctaSecondaryHref',
            title: 'Secondary Button Link',
            type: 'string',
            description: 'e.g #contact',
        },

        // ── BACKGROUND IMAGE ───────────────────────────
        {
            name: 'backgroundImage',      // ← Fixed: use camelCase (no hyphens)
            title: 'Background Image',
            type: 'image',
            options: { hotspot: true },
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