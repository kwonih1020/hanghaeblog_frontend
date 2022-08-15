import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { __signup } from "../../redux/modules/authSlice";
import { clearMessage } from "../../redux/modules/messageSlice";
import styled from "styled-components";

const SignUpBox = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    loginId: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object().shape({
    loginId: Yup.string()
      .test(
        "len",
        "The login ID must be between 3 and 12 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 12
      )
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 3 and 32 characters.",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 32
      )
      .required("This field is required!"),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { loginId, password, passwordConfirm } = formValue;

    setSuccessful(false);

    dispatch(__signup({ loginId, password, passwordConfirm }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div className="col-md-12 signup-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleRegister}>
        <Form>
          {!successful && (
            <div>
              <SignupInput className="form-group">
                <label htmlFor="아이디">아이디</label>
                <Field name="loginId" type="text" className="form-control" />
                <ErrorMessage
                  name="loginId"
                  component="div"
                  className="alert alert-danger"
                />
              </SignupInput>
              <SignupInput className="form-group">
                <label htmlFor="password">비밀번호</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="alert alert-danger"
                />
              </SignupInput>
              <SignupInput className="form-group">
                <label htmlFor="passwordConfirm">비밀번호 확인</label>
                <Field
                  name="passwordConfirm"
                  type="password"
                  className="form-control"
                />
                <ErrorMessage
                  name="passwordConfirm"
                  component="div"
                  className="alert alert-danger"
                />
              </SignupInput>
              <SignupBoxButton className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  회원가입
                </button>
              </SignupBoxButton>
            </div>
          )}
        </Form>
      </Formik>
      {message && (
        <div className="form-group">
          <div
            className={
              successful ? "alert alert-success" : "alert alert-danger"
            }
            role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

const SignupInput = styled.div`
  margin-top: 20px;
`;
const SignupBoxButton = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default SignUpBox;
