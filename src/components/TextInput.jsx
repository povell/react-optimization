export function TextInput(props) {
  const { 
    name,
    type,
    placeholder,
    label,
    description,
    error,
    variant,
    radius,
    size,
    disabled,
    withAsterisk,
    icon,
    value,
  } = props;

  let inpotWrapperDefaultClasses = 'text-input_wrapper';
  let inputWrapperClasses = inpotWrapperDefaultClasses;

  let inputDefaultClasses = 'text-input_input'
  let inputClasses = inputDefaultClasses;
  let inputStyles = {};
  if(radius && type !=='radio') {
    inputStyles.borderRadius = radius ? radius : 0;
  }

  if(error && type !=='radio') {
    inputClasses += ` ${inputDefaultClasses}--error`;
  }

  if(size && type !=='radio') {
    switch (size) {
      case 'xs':
        inputClasses += ` ${inputDefaultClasses}--xs`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--xs`;
        break;
      case 'sm':
        inputClasses += ` ${inputDefaultClasses}--sm`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--sm`;
        break;
      case 'md':
        inputClasses += ` ${inputDefaultClasses}--md`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--md`;
        break;
      case 'lg':
        inputClasses += ` ${inputDefaultClasses}--lg`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--lg`;
        break;
      case 'xl':
        inputClasses += ` ${inputDefaultClasses}--xl`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--xl`;
        break;
      default:
        inputClasses += ` ${inputDefaultClasses}--sm`;
        inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--sm`;
    }
  }

  if (variant) {
    switch (variant) {
      case 'default':
        break;
      case 'filled':
        inputClasses += ` ${inputDefaultClasses}--filled`;
        break;
      case 'unstyled':
        inputClasses += ` ${inputDefaultClasses}--unstyled`;
        break;
    }
  }

  if (icon) {
    inputClasses += ` ${inputDefaultClasses}--with-icon`;
  }

  if (type === 'radio') {
    inputWrapperClasses += ` ${inpotWrapperDefaultClasses}--radio`;
    inputClasses += ` ${inputDefaultClasses}--radio`;
  }

  return (
    <div className={inputWrapperClasses}>
      <div className='text-input_label-wrapper'>
        <label className='text-input_label'>{label}</label>
        {withAsterisk && <div className='text-input_label-asterisk'>*</div>}
      </div>
      {(description && type !== 'radio') && <div>description</div>}
      <div className='text-input_container'>
        {(icon && type !== 'radio') && <div className='text-input_icon'>{icon}</div>}
        <input
          name={name}
          value={value}
          type={type ? type : 'text'}
          className={inputClasses}
          placeholder={placeholder}
          disabled={disabled}
          style={inputStyles}
        />
      </div>
      {(error && type !== 'radio') && <div className='text-input_input--error'>{error}</div>}
    </div>
  )
}