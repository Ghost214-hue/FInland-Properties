export default {
    name: 'about',
    title: 'About Section',
    type: 'document',
    fields: [

        // ── BADGE ──────────────────────────────────────
        {
            name: 'badgeText',
            title: 'Badge Text',
            type: 'string',
            description: 'e.g. Established in 2018',
        },

        // ── HEADING ────────────────────────────────────
        {
            name: 'headingPrefix',
            title: 'Heading Prefix',
            type: 'string',
            description: 'e.g. About',
        },
        {
            name: 'headingHighlight',
            title: 'Heading Highlight (Gradient Text)',
            type: 'string',
            description: 'e.g. Finland Properties',
        },

        // ── PARAGRAPHS ─────────────────────────────────
        {
            name: 'paragraph1',
            title: 'First Paragraph',
            type: 'text',
            rows: 4,
        },
        {
            name: 'paragraph2',
            title: 'Second Paragraph',
            type: 'text',
            rows: 4,
        },

        // ── BRAND VIDEO ────────────────────────────────
        // Upload an mp4 here. The About component will render it
        // with autoPlay / loop / muted and a mute-toggle button.
        // To swap the video just upload a new file — no code changes needed.
        {
            name: 'brandVideo',
            title: 'Brand Video',
            type: 'file',
            options: { accept: 'video/*' },
            description: 'MP4 brand / story video shown on the right side of the About section.',
        },
        {
            name: 'brandVideoAriaLabel',
            title: 'Brand Video Aria Label',
            type: 'string',
            description: 'Screen-reader description of the video, e.g. "Fine Land Properties — brand video"',
        },

        // ── VIDEO UI LABELS ────────────────────────────
        // These let the editor customise the floating pills without touching code.
        {
            name: 'videoPillLabel',
            title: 'Video "Watch" Pill Label',
            type: 'string',
            description: 'Text in the pill above the video, e.g. "Watch Our Story"',
        },
        {
            name: 'videoBottomLabel',
            title: 'Video Bottom Label',
            type: 'string',
            description: 'Text in the label below the video, e.g. "Fine Land Properties Ltd"',
        },

        // ── TEAM IMAGE (fallback) ──────────────────────
        // Shown only when no brandVideo is uploaded.
        // Keeping this field means existing content keeps working.
        {
            name: 'teamImage',
            title: 'Team Image (fallback when no video)',
            type: 'image',
            options: { hotspot: true },
            description: 'Shown on the right side only if Brand Video is not uploaded.',
        },

    ],
}