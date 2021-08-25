export default {
  type: 'document',
  name: 'oneTimeField',
  title: 'One-time Field Example',
  fields: [
    {
      name: 'title',
      type: 'string',
    },
    {
      name: 'content',
      type: 'string',
    },
    {
      // NOTE: this field will be changed by a document action.
      // @see `resolveDocumentActions.js`
      name: 'slugLockedIn',
      type: 'boolean',
      // uses the boolean version of hidden because this is always hidden
      hidden: true,
    },
    {
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      // this field will hide when the slug is locked in (see above)
      hidden: ({document}) => document?.slugLockedIn,
    },
  ],
}
