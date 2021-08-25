export default {
  type: 'document',
  name: 'toggle',
  title: 'Toggle Example',
  fields: [
    {
      name: 'toggle',
      description: 'Toggle this to reveal fields!',
      type: 'boolean',
    },
    {
      name: 'extraString',
      description: 'Boom! now you see me.',
      type: 'string',
      hidden: ({parent}) => !parent?.toggle,
    },
    {
      name: 'extraNumber',
      description: 'Boom! now you see me.',
      type: 'number',
      hidden: ({parent}) => !parent?.toggle,
    },
  ],
}
