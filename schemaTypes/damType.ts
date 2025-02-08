import {defineField, defineType} from 'sanity'

export const damType = defineType({
  name: 'dam',
  title: 'Dam Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: { source: 'name' },
      validation: (rule) => rule  
        .required()
        .error(`Required to generate on the website`),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'breed',
      type: 'string',
    }),
    defineField({
      name: 'color',
      type: 'string',
    }),
    defineField({
      name: 'age',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
