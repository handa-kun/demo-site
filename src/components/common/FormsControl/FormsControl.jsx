import s from './FormsControl.module.css';

export const Element = Element => ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={s.formcontrol + " " + (hasError ? s.error : "")}>
            <div>
                <Element {...input} {...props} />
            </div>
            {hasError && <span> {meta.error} </span>}
        </div>
    );
};


