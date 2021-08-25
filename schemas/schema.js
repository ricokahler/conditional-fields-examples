import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import toggle from './toggle'
import dropdown from './dropdown'
import roleBasedVisuals from './roleBasedVisuals'
import oneTimeField from './oneTimeField'

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([toggle, dropdown, oneTimeField, roleBasedVisuals]),
})
