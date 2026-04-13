export default {
    name:'locations',
    title:'Location Section',
    type:'document',
    fields:[
        //_____BADGE____
        {
            name:'badgeText',
            title:'Badge Text',
            type:'string',
            description:'e.g. Hand-Picked Locations',
        },
        //_______HEADING____
        {
            name:'headingPrefix',
            title:'Heading Prefix',
            type:'string',
            description:'e.g. Featured',
        },
        {
            name:'headingHighlight',
            title:'Heading Highlight (Gradient Text)',
            type:'string',
            description:'e.g. locations',
        },
        //________SUBHEADING_____
        {
            name:'ctaLabel',
            title:'Bottom CTA button Label',
            type:'string',
            description:'e.g. View All Locations',
        },
        {
         name:'ctaHref',
         title:'Bottom CTA Button Link',
         type:'string',
         description:'e.g. #contact',
        },
        //_______LOcations Array___
        {
         name:'locations',
         title:'locations',
         type:'array',
         of:[
            {
                type:'object',
                name:'locationItem',
                title:'location',
                fields:[
                   {
                     name:'location',
                     title:'Location Name',
                     type:'string',
                     description:'e.g. Ruiru Kiambu Count',

                   },
                   {
                    name:'count',
                    title:'Property Count',
                    type:'string',
                    description:'e.g. 10 properties',
                   },
                   {
                    name:'image',
                    title:'Location Image',
                    type:'image',
                    options:{hotspot:true},

                   },
                   {
                    name:'enquireHref',
                    title:'Enquire Button Link',
                    type:'string',
                    description:'e.g. contact',
                   },
                ],
                preview:{
                    select:{
                        title:'location',
                        subtitle:'count',
                        media:'image',
                    }
                }
            }
         ]
        }
    ]

}