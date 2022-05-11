function InputArea({ inputRef, type, title, id, labelSize, frmField, err, errMessage, ...others }) {
  const labelClass = `col-sm-${labelSize ? labelSize : 3}  col-form-label`;
  const inputClass = `form-control ${err ? 'is-invalid' : ''}`;

  return (
    <div className='text-center'>
      <div className='col-sm-10'>
        {others['rows'] > 1 ? (
          <textarea ref={inputRef} className={inputClass} type={type} id={id} {...others} {...frmField}></textarea>
        ) : (
          <input ref={inputRef} className={inputClass} id={id} type={type} {...others} {...frmField} />
        )}
        {err ? <div className='invalid-feedback'>{errMessage}</div> : ''}
      </div>
    </div>
  );
}

export default InputArea;
