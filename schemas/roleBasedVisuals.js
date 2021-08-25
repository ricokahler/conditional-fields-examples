export default {
  type: 'document',
  name: 'roleBasedVisuals',
  title: 'Role-based Visuals',
  fields: [
    {
      name: 'commonField',
      type: 'string',
      description: 'Everyone can see this field',
    },
    {
      name: 'adminField',
      type: 'string',
      description: 'Only admins can see this field',
      hidden: ({user}) => !user.roles.some((role) => role.name === 'admin'),
    },
  ],
}
