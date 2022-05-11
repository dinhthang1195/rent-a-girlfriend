function Input({ inputRef, type, title, id, labelSize, frmField, err, errMessage, ...others }) {
  const labelClass = `col-sm-${labelSize ? labelSize : 3}  col-form-label  text-nowrap`;
  const inputClass = `form-control ${err ? 'is-invalid' : ''}`;

  return (
    <>
      <div className='row mb-3'>
        <label htmlFor={id} className={labelClass}>
          {title}
        </label>
        <div className='col-sm'>
          {/* <input type='text' className='form-control' id={id} {...others} /> */}
          {others['rows'] > 1 ? (
            <textarea ref={inputRef} className={inputClass} type={type} id={id} {...others} {...frmField}></textarea>
          ) : (
            <input ref={inputRef} className={inputClass} id={id} type={type} {...others} {...frmField} />
          )}
          {err ? <div className='invalid-feedback'>{errMessage}</div> : ''}
        </div>
      </div>
    </>
  );
}

export default Input;
