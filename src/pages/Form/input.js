import React from "react";

const Input = (props) => {
    const { type, name, value, label, required, setInput, setBlur, error } =
        props;
    const handleChange = (e) => {
        setInput(e.target);
    };

    const handleBlur = (e) => {
        if (value === "") {
            setBlur &&
                setBlur({
                    name: e.target.name,
                    sta: false,
                });
        }
    };
    return (
        <>
            <label className="fz-14">
                {label} {required ? <span className="txt-red">*</span> : ""}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                placeholder={label}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                required={required}
            />
            {error[name] && (
                <p className="fz-12 txt-danger">{error[name].msg}</p>
            )}
        </>
    );
};

export default Input;
