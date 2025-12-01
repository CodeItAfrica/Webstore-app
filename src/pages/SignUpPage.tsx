import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { Checkbox } from "../components/ui/checkbox"
import { FiEye as Eye, FiEyeOff as EyeOff, FiGift } from "react-icons/fi"
import "../styles/SignUp.css"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [subscribe, setSubscribe] = useState(false)
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [verifyCode, setVerifyCode] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleObtainCode = async () => {
    console.log("[v0] Getting verify code for:", formData.email)
    // TODO: Implement OTP sending logic
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password !== formData.confirmPassword) {
      console.log("[v0] Passwords do not match")
      return
    }
    if (!agreeTerms) {
      console.log("[v0] Must agree to terms")
      return
    }

    setIsLoading(true)
    console.log("[v0] Sign up attempt:", { email: formData.email, firstName: formData.firstName })
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="signup-container" data-aos="fade-up">
      {/* Header */}
      <div className="signup-header">
        <h1 className="signup-title">Create Your oraimo Account</h1>
      </div>

      {/* Bonus Banner */}
      <div className="signup-bonus-banner">
        <p className="signup-bonus-text">
          <FiGift size={18} /> Register & Subscribe for 600 Points Bonus!
        </p>
      </div>

      <form onSubmit={handleSignUp} className="signup-form">
        {/* Personal Information Section */}
        <div>
          <h2 className="signup-section-title">Personal Information</h2>
          <div className="signup-grid">
            <div className="signup-field">
              <Label htmlFor="firstName">
                First Name <span className="signup-label-required">*</span>
              </Label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="signup-field">
              <Label htmlFor="lastName">
                Last Name <span className="signup-label-required">*</span>
              </Label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          {/* Subscribe Checkbox */}
          <div className="signup-subscribe-container">
            <Checkbox id="subscribe" checked={subscribe} onChange={(checked) => setSubscribe(checked)} />
            <Label htmlFor="subscribe" className="signup-subscribe-label">
              Subscribe now and earn <span className="signup-highlight">500 points!</span>
            </Label>
          </div>
        </div>

        {/* Sign-in Information Section */}
        <div className="signup-signin-section">
          <h2 className="signup-section-title">Sign-in Information</h2>
          <div className="signup-field">
            <Label htmlFor="email">
              Email Address <span className="signup-label-required">*</span>
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Verify Code Field */}
          <div className="signup-field" style={{ marginTop: "1.5rem" }}>
            <Label htmlFor="verifyCode">
              Verify Code <span className="signup-label-required">*</span>
            </Label>
            <div className="signup-verify-container">
              <Input
                id="verifyCode"
                type="text"
                placeholder="Enter code"
                value={verifyCode}
                onChange={(e) => setVerifyCode(e.target.value)}
                className="signup-verify-input"
              />
              <Button
                type="button"
                variant="secondary"
                onClick={handleObtainCode}
                className="signup-obtain-button"
              >
                Obtain
              </Button>
            </div>
          </div>

          {/* Password Field */}
          <div className="signup-field" style={{ marginTop: "1.5rem" }}>
            <Label htmlFor="password">
              Password <span className="signup-label-required">*</span>
            </Label>
            <div className="signup-password-wrapper">
              <Input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="signup-eye-button"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="signup-field" style={{ marginTop: "1.5rem" }}>
            <Label htmlFor="confirmPassword">
              Confirm Password <span className="signup-label-required">*</span>
            </Label>
            <div className="signup-password-wrapper">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="signup-eye-button"
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="signup-terms-container">
          <Checkbox id="terms" checked={agreeTerms} onChange={(checked) => setAgreeTerms(checked)} />
          <Label htmlFor="terms" className="signup-terms-label">
            I have read and agree to the oraimo Store{" "}
            <Link to="/terms" className="signup-link">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="signup-link">
              Privacy Policy
            </Link>
          </Label>
        </div>

        {/* Sign Up Button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="signup-submit-button"
        >
          {isLoading ? "Creating Account..." : "Create an Account"}
        </Button>

        {/* Sign In Link */}
        <div className="signup-footer">
          <span className="signup-footer-text">Already have an account? </span>
          <Link to="/login" className="signup-signin-link">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  )
}
