import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { structure } from './structure'
import { defaultDocumentNode } from './structure/defaultDocumentsNodes'

export default defineConfig({
  name: 'default',
  title: 'Day one with Sanity',

  projectId: 'kq8u4eya',
  dataset: 'production',

  plugins: [structureTool({
    structure,
    defaultDocumentNode,
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
