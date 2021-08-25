export default {
  type: 'document',
  name: 'dropdown',
  title: 'Dropdown Example',
  fields: [
    {
      name: 'dropdown',
      type: 'string',
      description: 'Select a value to reveal different sets of fields.',
      options: {list: ['foo', 'bar', 'baz']},
    },
    {
      name: 'fooOptions',
      type: 'object',
      fields: [
        {name: 'fooString', type: 'string'},
        {name: 'fooNumber', type: 'number'},
      ],
      hidden: ({parent}) => !(parent?.dropdown === 'foo'),
    },
    {
      name: 'barOptions',
      type: 'object',
      fields: [
        {name: 'barDate', type: 'date'},
        {name: 'barNumber', type: 'number'},
      ],
      hidden: ({parent}) => !(parent?.dropdown === 'bar'),
    },
    {
      name: 'bazOptions',
      type: 'object',
      fields: [
        {name: 'bazString', type: 'string'},
        {name: 'bazBlock', type: 'array', of: [{type: 'block'}]},
      ],
      hidden: ({parent}) => !(parent?.dropdown === 'baz'),
    },
  ],
}
