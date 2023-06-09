import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'grey-marten',

  projectId: '1y4kby3t',
  dataset: 'myblogdataset',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
