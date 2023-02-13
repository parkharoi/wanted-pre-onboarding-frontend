import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseInstance } from "../tools/instance";

const Signin = () => {
  const navigate = useNavigate("");
  const emailRef = useRef("");
  const pwRef = useRef("");
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <h1>로그인</h1>

      <p>이메일</p>
      <input
        ref={emailRef}
        type="email"
        data-testid="email-input"
        maxLength="30"
        placeholder="Email 입력해주세요"
      />

      <p>비밀번호</p>
      <input
        ref={pwRef}
        type="password"
        data-testid="password-input"
        maxLength="30"
        minLength="8"
        placeholder="passwourd 입력해주세요"
      />

      <br />
      <button
        onClick={(e) => {
          e.preventDefault();
          const join = {
            userId: emailRef.current.value,
            password: pwRef.current.value,
          };

          if (join.userId == "" || join.password == "") {
            alert("내용을 입력해 주세요");
          } else if (!join.userId.includes("@") || join.password.length < 8) {
            setDisabled(true);
            alert("email @와 비밀번호 8자리 이상인지 확인 해주세요!");
          } else {
            baseInstance
              .post("/auth/signin", {
                email: join.userId,
                password: join.password,
              })
              .then((res) =>
                localStorage.setItem("token", res.data.access_token)
              );
            alert("로그인 완료!");
            navigate("/home");
          }
        }}
        data-testid="signin-button"
      >
        로그인하기
      </button>
    </div>
  );
};

export default Signin;
