import { useState } from "react";

const Signup = () => {
  const [userRegister, setUserRegister] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserRegister({ ...userRegister, [name]: value });
  };

  return (
    <div>
      <p>이메일</p>
      <input
        onChange={onChangeHandler}
        value={userRegister.password}
        type="email"
        data-testid="email-input"
        maxlength="30"
        placeholder="Email 입력해주세요"
      />
      <p>패스워드</p>
      <input
        type="password"
        data-testid="password-input"
        maxlength="30"
        minLength="8"
        placeholder="passwourd 입력해주세요"
      />
      {userRegister.password.length > 8 ? (
        <p>최대 12자까지 가능합니다.</p>
      ) : (
        <></>
      )}

      <br />
      <button
        type="button"
        data-testid="signup-button"
        // disabled
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;
