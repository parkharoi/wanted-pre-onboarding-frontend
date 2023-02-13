import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseInstance } from "../tools/instance";

const Signup = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@") || password.length < 8) {
      setDisabled(true);
      alert("email @와 비밀번호 8자리 이상인지 확인 해주세요!");
    } else {
      baseInstance
        .post("/auth/signup", {
          email: email,
          password: password,
        })
        .then((res) => console.log(res));
      alert("회원 가입 완료!");
      navigate("/signin");
    }
  };

  return (
    <div>
      <p>이메일</p>
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        data-testid="email-input"
        maxLength="30"
        placeholder="Email 입력해주세요"
      />
      {!email.includes("@") ? <p>이메일에 @ 꼭 넣어주세요</p> : <></>}
      <p>패스워드</p>
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        data-testid="password-input"
        maxLength="30"
        minLength="8"
        placeholder="passwourd 입력해주세요"
      />
      {password.length < 8 ? <p>8자 이상 입력해 주세요 </p> : <></>}
      <br />
      <button
        type="button"
        data-testid="signup-button"
        onClick={handleSubmit}
        // disabled
      >
        회원가입
      </button>
    </div>
  );
};

export default Signup;
