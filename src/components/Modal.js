import React from "react";
import "./Modal.css";
import { RiCloseLine } from "react-icons/ri";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas/index";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const Modal = ({ setIsOpen }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div className="modal">
          <div className="modalHeader">
            <h5 className="heading">Login Form</h5>
          </div>
          <button className="closeBtn" onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className="modalContent">
            <form onSubmit={handleSubmit}>
              {/* <div className="ui divider"></div> */}
              <div className="ui form">
                <div className="field">
                  <label>FullName</label>
                  <input type="text"
                   name="fullname"
                    id="fullname"
                    value={values.fullname}
                      onChange={handleChange}
                      onBlur={handleBlur} />
                  {errors.fullname && touched.fullname ? (
                      <p className="form-error">{errors.fullname}</p>
                    ) : null}
                </div>

                <div className="field">
                  <label>DOB</label>
                  <input type="date" name="dob" id="dob"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  {errors.dob && touched.dob ? (
                      <p className="form-error">{errors.dob}</p>
                    ) : null}
                </div>

                <div className="field">
                  <label>E-mail</label>
                  <input type="email" name="email" id="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />
                  {errors.email && touched.email ? (
                      <p className="form-error">{errors.email}</p>
                    ) : null}
                </div>

                <div className="field">
                  <label>Password</label>
                  <input type="password" name="password" id="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  />
                  {errors.password && touched.pssword ? (
                      <p className="form-error">{errors.password}</p>
                    ) : null}
                </div>
                <div className="modalActions">
                  <div className="actionsContainer">
                    <button
                      className="submitBtn"
                      type="submit"
                    >
                      Submit
                    </button>
                    <button
                      className="cancelBtn"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
