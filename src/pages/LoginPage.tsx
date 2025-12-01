import type React from "react"
import { useAuth } from "../auth/AuthProvider"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Button } from "../components/ui/button"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import { FiEye as Eye, FiEyeOff as EyeOff, FiFacebook as Facebook, FiGift, FiChevronRight } from "react-icons/fi"
import { FcGoogle } from "react-icons/fc"
import "../styles/LoginPage.css"

export default function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const { login } = useAuth();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await login(email, password);
      console.log("[v0] Login successful:", { email })
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setIsLoading(false)
    }
  }

  const handleSocialLogin = (provider: string) => {
    console.log("[v0] Social login:", provider)
    // TODO: Implement social login
  }

  return (
    <div className="login-page-wrapper">
      <div className="login-container" data-aos="fade-up">
        <div className="login-content">
        {/* Header */}
        <div className="login-header">
          <h1 className="login-title">Log into Your oraimo Account</h1>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="login-form">
          {/* Email Field */}
          <div className="login-field">
            <Label htmlFor="email">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="login-input"
            />
          </div>

          {/* Password Field */}
          <div className="login-field">
            <Label htmlFor="password">
              Password
            </Label>
            <div className="login-password-wrapper">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="login-input"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="login-eye-button"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="login-forgot-password">
            <span>Forgot your password?</span>
            <Link to="/auth/reset-password" className="login-forgot-link">
              Reset it <FiChevronRight />
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="login-submit-button"
          >
            {isLoading ? "Logging in..." : "Login"}
          </Button>

          {/* Sign Up Link */}
          <div className="login-signup-link-container">
            <span className="login-signup-text">Don't have an account? </span>
            <Link to="/signup" className="login-signup-link">
              Create one <FiChevronRight />
            </Link>
          </div>

          {/* Bonus Banner */}
          <div className="login-bonus-banner">
            <p className="login-bonus-text">
              <FiGift size={18} /> Register & Subscribe for 600 Points Bonus!
            </p>
          </div>
        </form>

        {/* Social Login */}
        <div className="login-social-container">
          <button
            type="button"
            onClick={() => handleSocialLogin("facebook")}
            className="login-social-button"
          >
            <Facebook size={24} className="login-facebook-icon" />
            Sign in with Facebook
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin("google")}
            className="login-social-button"
          >
            <FcGoogle size={24} />
            Sign in with Google
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
