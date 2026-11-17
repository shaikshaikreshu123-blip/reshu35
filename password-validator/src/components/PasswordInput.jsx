import { useState } from "react";
import RequirementItem from "./RequirementItem";
import { validatePassword } from "../utils/passwordValidation";

const PasswordInput = () => {
  const [password, setPassword] = useState("");

  const validations = validatePassword(password);

  const allValid = Object.values(validations).every(
    Boolean
  );

  return (
    <div className="validator-card">
      <h1>Create Password</h1>

      <div className="input-group">
        <input
          type="password"
          placeholder="Enter password..."
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />
      </div>

      <div className="requirements">
        <RequirementItem
          valid={validations.hasLength}
          text="At least 8 characters"
        />

        <RequirementItem
          valid={validations.hasUppercase}
          text="One uppercase letter"
        />

        <RequirementItem
          valid={validations.hasNumber}
          text="One number"
        />

        <RequirementItem
          valid={validations.hasSpecialChar}
          text="One special character"
        />
      </div>

      <div
        className={`status ${
          allValid ? "success" : "error"
        }`}
      >
        {allValid
          ? "Strong Password ✓"
          : "Password does not meet requirements"}
      </div>
    </div>
  );
};

export default PasswordInput;