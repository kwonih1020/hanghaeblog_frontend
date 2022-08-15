import React, { useState, useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { __login } from "../../redux/modules/authSlice";
import { clearMessage } from "../../redux/modules/messageSlice";
import styled from "styled-components";

const LoginBox = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);
  const initialValues = {
    loginId: "",
    password: "",
  };
  const validationSchema = Yup.object().shape({
    loginId: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });
  const handleLogin = (formValue) => {
    const { loginId, password } = formValue;
    setLoading(true);
    dispatch(__login({ loginId, password }))
      .unwrap()
      .then(() => {
        props.history.push("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }
  return (
    <LoginBoxContainer className="col-md-12 login-form">
      {/* <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleLogin}>
        <Form>
          <LoginInput className="form-group">
            <label htmlFor="아이디">아이디</label>
            <Field name="loginId" type="text" className="form-control" />
            <ErrorMessage
              name="loginId"
              component="div"
              className="alert alert-danger"
            />
          </LoginInput>
          <LoginInput className="form-group">
            <label htmlFor="비밀번호">비밀번호</label>
            <Field name="password" type="password" className="form-control" />
            <ErrorMessage
              name="password"
              component="div"
              className="alert alert-danger"
            />
          </LoginInput>
          <LoginBoxButton className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block"
              disabled={loading}>
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>로그인</span>
            </button>
          </LoginBoxButton>
        </Form>
      </Formik>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </LoginBoxContainer>
  );
};

const LoginBoxContainer = styled.div``;
const LoginInput = styled.div`
  margin-top: 20px;
`;
const LoginBoxButton = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export default LoginBox;
