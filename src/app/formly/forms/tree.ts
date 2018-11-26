export const tree = {
  pages: [
    {
      label: 'Personal data',
      fields: [
        {
          key: 'text',
          type: 'input',
          templateOptions: {
            label: 'Text',
            required: true,
            placeholder: 'Type here to see the other field become enabled...'
          }
        },
        {
          key: 'country',
          type: 'input',
          templateOptions: {
            label: 'Country',
            required: true
          },
          hideExpression: '!model.text'
        }
      ]
    },
    {
      label: 'Destination',
      fields: [
        {
          key: 'Radio',
          type: 'radio',
          templateOptions: {
            label: 'Radio',
            placeholder: 'Placeholder',
            required: true,
            options: [
              { value: 1, label: 'Option 1' },
              { value: 2, label: 'Option 2' },
              { value: 3, label: 'Option 3' },
              { value: 4, label: 'Option 4' }
            ]
          }
        }
      ]
    },
    {
      label: 'Day of the trip',
      fields: [
        {
          key: 'checkbox',
          type: 'checkbox',
          templateOptions: {
            label: 'Checkbox',
            required: true
          }
        },
        {
          key: 'checkbox2',
          type: 'checkbox',
          templateOptions: {
            label: 'Checkbox2'
          }
        }
      ]
    }
  ]
};
