import Input from './Input';
import SelectInput from './SelectInput';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <SelectInput {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
