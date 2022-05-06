import React from "react";

const Selects = (props) => {
    const { value, name, options, label, required, setOption, setBlur, error } =
        props;
    const handleChange = (e) => {
        setOption(e.target);
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
            <select
                defaultValue={value}
                name={name}
                onChange={(e) => handleChange(e)}
                onBlur={(e) => handleBlur(e)}
                required={required}
            >
                <option value="" disabled>
                    {label}
                </option>
                {options &&
                    options.map((option) => (
                        <option key={option.code} value={option.code}>
                            {option.name}
                        </option>
                    ))}
            </select>
            {error[name] && (
                <p className="fz-12 txt-danger">{error[name].msg}</p>
            )}
        </>
    );
};

export default Selects;
