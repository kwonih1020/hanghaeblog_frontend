import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Error from "./Error";
import { registerUser } from "../../redux/modules/userActions";
import { useNavigate } from "react-router-dom";

const SignUpBox = () => {
  const [customError, setCustomError] = useState(null);

  const { loading, userInfo, error, success } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    // redirect authenticated user to home
    if (userInfo) navigate("/");
    console.log(userInfo);
    // redirect user to login page if registration was successful
    if (success) navigate("/login");
    console.log(success);
  }, [navigate, userInfo, success]);

  const submitForm = (data) => {
    // check if passwords match
    if (data.password !== data.passwordConfirm) {
      alert("Password mismatch");
      return;
    }
    // transform id string to lowercase to avoid case sensitivity issues during login
    data.loginId = data.loginId.toLowerCase();

    dispatch(registerUser(data));
  };

  return (
    <div className="col-md-12 signup-form">
      <form onSubmit={handleSubmit(submitForm)}>
        {/* render error message with Error component, if any */}
        {error && <Error>{error}</Error>}
        {customError && <Error>{customError}</Error>}

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
          <label htmlFor="password">비밀번호</label>
          <input
            type="password"
            className="form-input"
            {...register("password")}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="비밀번호 확인">비밀번호 확인</label>
          <input
            type="password"
            className="form-input"
            {...register("passwordConfirm")}
            required
          />
        </div>
        <button type="submit" className="button" disabled={loading}>
          Register
        </button>
      </form>
    </div>
  );
};

// const SignupInput = styled.div`
//   margin-top: 20px;
// `;
// const SignupBoxButton = styled.div`
//   text-align: center;
//   margin-top: 20px;
// `;

export default SignUpBox;
