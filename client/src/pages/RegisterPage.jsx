import { useState } from "react";
import "../styles/registerPage.css";
import { Link, useOutletContext } from "react-router-dom";

function RegisterPage() {
  // State for form data, errors, and submission message
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    newsletter: false,
    agreed: false,
  });
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  // Function provided by the outlet context to trigger the login popup
  const toggleLogin = useOutletContext();

  // Handle form input changes
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: val }));
    validateField(name, val);
    if (name === "confirmPassword" && formData.password !== value) {
      validateField("confirmPassword", value);
    }
  };

  // Validate individual form fields
  const validateField = (name, value) => {
    let errorMessage = "";
    switch (name) {
      case "fullName":
        errorMessage = value.trim() ? "" : "Full Name is required";
        break;
      case "email":
        errorMessage = /\S+@\S+\.\S+/.test(value) ? "" : "Email is invalid";
        break;
      case "password":
        errorMessage = validatePassword(value);
        break;
      case "confirmPassword":
        errorMessage =
          formData.password === value ? "" : "Passwords do not match";
        break;
      case "agreed":
      case "newsletter":
        errorMessage = value ? "" : `Please agree to the ${name}.`;
        break;
      default:
        errorMessage = "";
    }
    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Validate password complexity
  const validatePassword = (value) => {
    const hasNumber = /\d/.test(value);
    const hasCapitalLetter = /[A-Z]/.test(value);
    const hasRequiredLength = value.length >= 8;
    let errorMessage = "";
    if (!hasNumber)
      errorMessage += "Password must contain at least one number. ";
    if (!hasCapitalLetter)
      errorMessage += "Password must contain at least one capital letter. ";
    if (!hasRequiredLength)
      errorMessage += "Password must be at least 8 characters long. ";
    return errorMessage.trim();
  };

  // Placeholder for submission handler
  const handleSubmit = (event) => {
    event.preventDefault();

    const formValid = Object.values(errors).every((error) => error === "");
    if (formValid) {
      console.log("Form submitted:", formData);
      setFormData({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        newsletter: false,
        agreed: false,
      });
      setSubmissionMessage("Form submitted successfully!");
    } else {
      setSubmissionMessage("");
    }
  };

  return (
    <section className="register-page">
      <h1>Create your account</h1>
      <p>
        Already have an account? <Link onClick={toggleLogin}>Login</Link>
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
            name="fullName"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          {errors.fullName && <p className="error">{errors.fullName}</p>}
        </div>
        <div className="form-group email">
          <label htmlFor="email">Email Address</label>
          <input
            className={errors.email ? "error" : ""}
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group password">
          <label htmlFor="password">Password</label>
          <input
            className={errors.password ? "error" : ""}
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div className="form-group password">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            className={errors.confirmPassword ? "error" : ""}
            type="password"
            id="confirm-password"
            name="confirmPassword"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && (
            <p className="error">{errors.confirmPassword}</p>
          )}
        </div>
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="newsletter"
              checked={formData.newsletter}
              onChange={handleChange}
            />
            I want to receive the newsletter.
          </label>
        </div>
        <div className="form-group checkbox">
          <label>
            <input
              type="checkbox"
              name="agreed"
              checked={formData.agreed}
              onChange={handleChange}
              required
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
