import Input from './Input';
import SelectInput from './SelectInput';
import DatePicker from './DatePicker';

function FormikControl(props) {
  const { control, ...rest } = props;
  switch (control) {
    case 'input':
      return <Input {...rest} />;
    case 'select':
      return <SelectInput {...rest} />;
    case 'date':
      return <DatePicker {...rest} />;
    default:
      return null;
  }
}

export default FormikControl;
