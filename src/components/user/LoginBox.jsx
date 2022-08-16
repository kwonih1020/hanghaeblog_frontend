import React, { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../../redux/modules/userActions";
import Error from "./Error";
import { useNavigate } from "react-router-dom";

const LoginBox = () => {
  const { loading, userInfo, error } = useSelector((state) => state.user);
  // console.log(error);

  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  // redirect authenticated user to home screen
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const submitForm = (data) => {
    dispatch(userLogin(data));
  };

  return (
    <LoginBoxContainer>
      <form onSubmit={handleSubmit(submitForm)}>
        {error && <Error>{error}</Error>}

        <div className="form-group">
          <label htmlFor="아이디">아이디</label>
          <input
            type="loginId"
            className="form-input"
            {...register("loginId")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-input"
            {...register("password")}
            required
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          Login
        </button>
      </form>
    </LoginBoxContainer>
  );
};

const LoginBoxContainer = styled.div``;
// const LoginInput = styled.div`
//   margin-top: 20px;
// `;
// const LoginBoxButton = styled.div`
//   text-align: center;
//   margin-top: 20px;
// `;

export default LoginBox;
