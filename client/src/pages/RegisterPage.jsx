import { useState } from "react";
import "../styles/registerPage.css";

function RegisterPage() {
  // State variables for form inputs, errors, agreement, and submission message
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Real-time validation for Full Name
  const handleFullNameChange = (event) => {
    const value = event.target.value;
    setFullName(value);
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        fullName: "Full Name is required",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, fullName: "" }));
    }
  };

  // Real-time validation for Email
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
    if (!value.trim()) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Email is required",
      }));
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: "Email is invalid" }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
    }
  };

  // Real-time validation for Password
  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Regular expressions for password validation
    const hasNumber = /\d/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasRequiredLength = value.length >= 8;

    // Generate dynamic error message based on validation criteria
    let errorMessage = "";
    if (!hasNumber) {
      errorMessage += "Password must contain at least one number. ";
    }
    if (!hasCapitalLetter) {
      errorMessage += "Password must contain at least one capital letter. ";
    }
    if (!hasRequiredLength) {
      errorMessage += "Password must be at least 8 characters long. ";
    }

    // Set the error message
    setErrors((prevErrors) => ({
      ...prevErrors,
      password: errorMessage.trim(),
    }));
  };

  // Real-time validation for Confirm Password
  const handleConfirmPasswordChange = (event) => {
    const value = event.target.value;
    setConfirmPassword(value);
    if (value !== password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, confirmPassword: "" }));
    }
  };

  // Checkbox change handler for newsletter subscription
  const handleNewsletterChange = () => {
    setNewsletter((prevNewsletter) => !prevNewsletter);
  };

  // Checkbox change handler for agreement
  const handleAgreementChange = () => {
    setAgreed((prevAgreed) => !prevAgreed);
  };

  // Placeholder for submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Check if all required fields are filled
    if (!fullName.trim() || !email.trim() || !password.trim()) {
      alert("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!agreed) {
      alert("Please agree to the terms before submitting.");
      return;
    }

    console.log("Form submitted:", { fullName, email, password });

    // Clear form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    // Display success message
    setSubmissionMessage("Form submitted successfully!");
  };

  return (
    <section className="register-page">
      <h1>Create your account</h1>
      <p>
        Already have an account? <a>Login</a>
      </p>
      {submissionMessage && (
        <p style={{ color: "#00897B" }}>{submissionMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="form-group full-name">
          <label htmlFor="full-name">Full Name</label>
          <input
            className={errors.fullName ? "error" : ""}
            type="text"
            id="full-name"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          <input
            className={errors.email ? "error" : ""}
            type="email"
            id="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          <input
            className={errors.password ? "error" : ""}
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group password">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            className={errors.confirmPassword ? "error" : ""}
            type="password"
            id="confirm-password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={newsletter}
              onChange={handleNewsletterChange}
            />
            I want to receive the newsletter.
          </label>
        </div>
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreementChange}
            />
            I agree to the terms and conditions.
          </label>
        </div>
        <div className="form-group submit-btn">
          <input type="submit" value="SIGN UP" />
        </div>
      </form>
    </section>
  );
}

export default RegisterPage;
