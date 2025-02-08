import {defineField, defineType} from 'sanity'

export const studType = defineType({
  name: 'stud',
  title: 'Stud Information',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      description: 'Registered name of the stud',
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
      name: 'hips',
      type: 'string',
      description: 'OFA Hip score',
      options: {
        list: ['Excelent', 'Good', 'Fair'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'elbows',
      type: 'string',
      description: 'OFA Elbow score',
      options: {
        list: ['Normal', 'Dysplastic'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'eyes',
      type: 'string',
      description: 'OFA Eye score',
      options: {
        list: ['Normal', 'Dysplastic'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'pennhip',
      type: 'string',
      description: 'PennHip score',
      options: {
        list: ['Excelent', 'Good', 'Fair'],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'color',
      type: 'string',
      description: 'Coat color of the stud',
    }),
    defineField({
      name: 'age',
      type: 'number',
    }),
    defineField({
      name: 'image',
      type: 'image',
      description: 'Photo of the stud',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
  ],
})
