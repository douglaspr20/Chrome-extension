import * as Yup from 'yup';

export const validationSchemaToObject = (validationSchema, fieldName) => {
  return Yup.reach(validationSchema, fieldName).describe();
};

export const isRequired = (validationSchema, fieldName) => {
  let schemaObject;

  try {
    schemaObject = validationSchemaToObject(validationSchema, fieldName);
  } catch (error) {
    return false; // If the field is not there in the schema, it means it's not required.
  }

  return schemaObject.tests.some((test) => {
    return test.name === 'required';
  });
};
