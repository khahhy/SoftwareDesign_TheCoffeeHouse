import React, { useState, useRef } from "react";
import Footer from "components/footer/Footer.js";
import styles from "./PasswordReset.module.css";
>>>>>>> Stashed changes

const PasswordReset = () => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState("");
  const inputRefs = useRef([]);
  const location = useLocation();
  const navigate = useNavigate();

  const token = location.state?.token;
  const email = location.state?.email;

  const handleChange = (index, value) => {
    if (/^[0-9]$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (index < inputRefs.current.length - 1) {
        inputRefs.current[index + 1].focus();
      }
    } else if (value === "") {
      const newCode = [...code];
      newCode[index] = "";
      setCode(newCode);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleContinue = async () => {
    const enteredCode = code.join("");
    if (enteredCode.length < 6) {
      setError("Please enter the full 6-digit code.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5001/api/auth/verify-reset-code", {
        code: enteredCode,
        token,
      });

      // Nếu mã đúng → chuyển sang trang đặt mật khẩu mới
      navigate("/set-new-password", { state: { token, email } });
    } catch (err) {
      setError(err.response?.data?.message || "Verification failed.");
    }
  };

  return (
    <>
<<<<<<< Updated upstream
      <div className="password-reset-container">
        <div className="password-reset-box">
          <h2>Password Reset</h2>
          <p>We have sent a code to your email</p>

          <div className="code-inputs">
=======
      <div className={styles.passwordResetContainer}>
        <div className={styles.passwordResetBox}>
          <h2>Password Reset</h2>
          <p>We have sent a code to your email</p>
          <div className={styles.codeInputs}>
>>>>>>> Stashed changes
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                ref={(el) => (inputRefs.current[index] = el)}
              />
            ))}
          </div>
<<<<<<< Updated upstream

          {error && <p style={{ color: "red", marginTop: "10px" }}>{error}</p>}

          <button onClick={handleContinue}>Continue</button>

=======
          <button>Continue</button>
>>>>>>> Stashed changes
          <p>
            Didn’t receive the code? <a href="#">Click here</a>
          </p>
          <p>
            Back to <a href="/login">Log in</a>
          </p>
        </div>
<<<<<<< Updated upstream

        <div className="image-section">
          <h1>THE COFFEE HOUSE</h1>
        </div>
      </div>
=======
        <div className={styles.imageSection}>
          <h1>THE COFFEE HOUSE</h1>
        </div>
      </div>
      <Footer />
>>>>>>> Stashed changes
    </>
  );
};

export default PasswordReset;