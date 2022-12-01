export const addFormErrorToast = ({ addToast, errors }) => {
  addToast(
    <div
      style={{
        marginTop: 10,
      }}
    >
      <ul>
        {Object.keys(errors).map((errorKey) => (
          <li key={errors[errorKey].message}>{errors[errorKey].message}</li>
        ))}
      </ul>
    </div>,
    {
      appearance: 'error',
      autoDismiss: true,
      autoDismissTimeout: Object.keys(errors).length * 1500,
    },
  );
};
