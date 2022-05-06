import React, { useEffect } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./form.scss";
import {
    API_VACCINATION_OPTIONS,
    API_GENDER_OPTIONS,
    API_ETHNIC_OPTIONS,
    API_NATIONALITY_OPTIONS,
    API_PRIORITY_GROUP_OPTIONS,
    API_RELATION_OPTIONS,
} from "../../const";

import Selects from "./selects";
import Input from "./input";

const Example = () => {
    const [apiProvince, setApiProvince] = React.useState([]);
    useEffect(() => {
        fetch("https://provinces.open-api.vn/api/?depth=3")
            .then((e) => e.json())
            .then((e) => setApiProvince(e));
    }, []);

    const initialValues = {
        vaccination: "",
        fullname: "",
        date_of_birth: new Date(),
        gender: "",
        phone_number: "",
        email: "",
        identification_code: "",
        health_insurance_number: "",
        occupation: "",
        workplace: "",
        address: "",
        province: "",
        district: "",
        ward: "",
        ethnic: "",
        nationality: "",
        priority_group: "",
        guardian_full_name: "",
        relation: "",
        guardian_phone_number: "",
        preferred_vaccination_date: "",
        session: "",
        isSubmiting: false,
    };
    const [userData, setUserData] = React.useState(initialValues);
    const [userError, setUserError] = React.useState({});

    const handleChange = (e) => {
        const _userData = { ...userData };
        let _name = e.name,
            _value = e.value;
        _userData[_name] = _value;

        const error = {};
        if (_name === "fullname") {
            if (_value.length < 2 || _value.length > 50) {
                error.fullname = {
                    msg: "Fullname has min 2 and max 50 letter",
                };
            } else {
                error.fullname = {
                    msg: "",
                };
            }
        }

        if (_name === "gender") {
            if (_value !== "") {
                error.gender = {
                    msg: "",
                };
            }
        }

        if (_name === "phone_number") {
            if (_value.length !== 10) {
                error.phone_number = {
                    msg: "Phone number has only 10 letter",
                };
            } else {
                error.phone_number = {
                    msg: "",
                };
            }
        }

        if (_name === "email") {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(_value)) {
                error.email = {
                    msg: "Invalid email address",
                };
            } else {
                error.email = {
                    msg: "",
                };
            }
        }

        if (_name === "identification_code") {
            if (_value.length < 10 || _value.length > 12) {
                error.identification_code = {
                    msg: "ID has only 10 - 12 letter",
                };
            } else {
                error.identification_code = {
                    msg: "",
                };
            }
        }
        if (_name === "health_insurance_number") {
            if (_value.length !== 8) {
                error.health_insurance_number = {
                    msg: "Health insurance number has only 8 letter",
                };
            } else {
                error.health_insurance_number = {
                    msg: "",
                };
            }
        }
        if (_name === "province") {
            if (_value !== "") {
                error.province = {
                    msg: "",
                };
            }
        }
        if (_name === "district") {
            if (_value !== "") {
                error.district = {
                    msg: "",
                };
            }
        }
        if (_name === "ward") {
            if (_value !== "") {
                error.ward = {
                    msg: "",
                };
            }
        }

        if (_name === "priority_group") {
            if (_value !== "") {
                error.priority_group = {
                    msg: "",
                };
            }
        }

        if (_name === "guardian_full_name") {
            if (_value.length < 2 || _value.length > 50) {
                error.guardian_full_name = {
                    msg: "Fullname has min 2 and max 50 letter",
                };
            } else {
                error.guardian_full_name = {
                    msg: "",
                };
            }
        }
        if (_name === "relation") {
            if (_value !== "") {
                error.relation = {
                    msg: "",
                };
            }
        }
        if (_name === "guardian_phone_number") {
            if (_value.length !== 10) {
                error.guardian_phone_number = {
                    msg: "Phone number has only 10 letter",
                };
            } else {
                error.guardian_phone_number = {
                    msg: "",
                };
            }
        }

        console.log(error);
        setUserError({ ...userError, ...error });
        setUserData(_userData);
    };

    const hanldeBlur = (e) => {
        const error = {};
        switch (e.name) {
            case "vaccination": {
                error.vaccination = {
                    msg: "The injection registration cannot be blank",
                };
                break;
            }
            case "fullname": {
                error.fullname = {
                    msg: "Name cannot be blank",
                };
                break;
            }
            case "gender": {
                error.gender = {
                    msg: "Please select your gender",
                };
                break;
            }
            case "phone_number": {
                error.phone_number = {
                    msg: "Phone number cannot be blank",
                };
                break;
            }
            case "email": {
                error.email = {
                    msg: "Email cannot be blank",
                };
                break;
            }
            case "identification_code": {
                error.identification_code = {
                    msg: "ID number cannot be blank",
                };
                break;
            }
            case "health_insurance_number": {
                error.health_insurance_number = {
                    msg: "Health insurance number cannot be blank",
                };
                break;
            }
            case "province": {
                error.province = {
                    msg: "Please select Province/City",
                };
                break;
            }
            case "district": {
                error.district = {
                    msg: "Please select District",
                };
                break;
            }
            case "ward": {
                error.ward = {
                    msg: "Please select Commune/Ward",
                };
                break;
            }

            case "priority_group": {
                error.priority_group = {
                    msg: "Please select priority group",
                };
                break;
            }
            case "guardian_full_name": {
                error.guardian_full_name = {
                    msg: "Guardian's full name cannot be blank",
                };
                break;
            }
            case "relation": {
                error.relation = {
                    msg: "Relation full name cannot be blank",
                };
                break;
            }
            case "guardian_phone_number": {
                error.guardian_phone_number = {
                    msg: "Phone number cannot be blank",
                };
                break;
            }

            default:
                break;
        }

        setUserError({ ...userError, ...error });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userError === null) {
            alert("submit success");
            return true;
        } else {
            alert("cant submit");
        }
    };

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="d-flex justify-between">
                    <div className="group-inline col-3">
                        <Selects
                            value={userData.vaccination}
                            name="vaccination"
                            options={API_VACCINATION_OPTIONS}
                            label="Vaccination"
                            required={true}
                            setOption={handleChange}
                            setBlur={hanldeBlur}
                            error={userError}
                        />
                    </div>
                </div>

                <div className="mt-20">
                    <h5>1. Vaccinated person information</h5>

                    <div className="col-12 d-flex justify-between mt-20">
                        <div className="group-inline col-3">
                            <Input
                                type="text"
                                name="fullname"
                                value={userData.fullname}
                                required={true}
                                label="Fullname"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <label>
                                Date of birth{" "}
                                <span className="txt-red">(*)</span>
                            </label>
                            <DatePicker
                                selected={userData.date_of_birth}
                                onChange={(date) =>
                                    setUserData({
                                        ...userData,
                                        date_of_birth: date,
                                    })
                                }
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Selects
                                value={userData.gender}
                                name="gender"
                                options={API_GENDER_OPTIONS}
                                label="Gender"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Input
                                type="number"
                                name="phone_number"
                                value={userData.phone_number}
                                required={true}
                                label="Phone number"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-between mt-20">
                        <div className="group-inline col-3">
                            <Input
                                type="email"
                                name="email"
                                value={userData.email}
                                required={true}
                                label="Email"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-6">
                            <Input
                                type="text"
                                name="identification_code"
                                value={userData.identification_code}
                                required={true}
                                label="Identification/Citizen identification code"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Input
                                type="text"
                                name="health_insurance_number"
                                value={userData.health_insurance_number}
                                required={true}
                                label="Health insurance number"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-between mt-20">
                        <div className="group-inline col-3">
                            <Selects
                                value={userData.province}
                                name="province"
                                options={apiProvince}
                                label="Province"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Selects
                                value={userData.district}
                                name="district"
                                options={
                                    userData.province !== ""
                                        ? apiProvince.filter(
                                              (e) =>
                                                  e.code === +userData.province
                                          )[0].districts
                                        : null
                                }
                                label="District"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-6">
                            <Selects
                                value={userData.ward}
                                name="ward"
                                options={
                                    userData.district !== ""
                                        ? apiProvince
                                              .filter(
                                                  (e) =>
                                                      e.code ===
                                                      +userData.province
                                              )[0]
                                              .districts.filter(
                                                  (e) =>
                                                      e.code ===
                                                      +userData.district
                                              )[0].wards
                                        : null
                                }
                                label="Ward"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-between mt-20">
                        <div className="group-inline col-3">
                            <Selects
                                value={userData.ethnic}
                                name="ethnic"
                                options={API_ETHNIC_OPTIONS}
                                label="Ethnic"
                                required={false}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Selects
                                value={userData.nationality}
                                name="nationality"
                                options={API_NATIONALITY_OPTIONS}
                                label="Nationality"
                                required={false}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-6">
                            <Selects
                                value={userData.priority_group}
                                name="priority_group"
                                options={API_PRIORITY_GROUP_OPTIONS}
                                label="Priority group"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>
                    </div>

                    <div className="col-12 d-flex justify-between mt-20">
                        <div className="group-inline col-3">
                            <Input
                                type="text"
                                name="guardian_full_name"
                                value={userData.guardian_full_name}
                                required={true}
                                label="Guardian's full name"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-6">
                            <Selects
                                value={userData.relation}
                                name="relation"
                                options={API_RELATION_OPTIONS}
                                label="Relation"
                                required={true}
                                setOption={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>

                        <div className="group-inline col-3">
                            <Input
                                type="number"
                                name="guardian_phone_number"
                                value={userData.guardian_phone_number}
                                required={true}
                                label="Guardian phone number"
                                setInput={handleChange}
                                setBlur={hanldeBlur}
                                error={userError}
                            />
                        </div>
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-submit"
                    disabled={!userData.isSubmiting}
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Example;
