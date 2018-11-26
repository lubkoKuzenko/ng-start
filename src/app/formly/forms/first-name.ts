export const fisrtName = {
  key: 'firstName',
  type: 'input',
  // defaultValue: 'This is a default value',
  templateOptions: {
    required: true,
    label: 'First Name',
    placeholder: 'First Name'
  },
  validators: {
    validation: ['first_name']
  }
};
