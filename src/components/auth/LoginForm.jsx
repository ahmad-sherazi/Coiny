import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { LOGIN_CONTENT } from '../../constants/auth';
import { Button } from '../ui/Button';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 1200);
  };

  return (
    <div className="w-full max-w-md p-8 rounded-2xl border border-border/80 bg-surface/60 backdrop-blur-xl shadow-card transition-colors duration-300">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-sans font-bold text-ink tracking-tight mb-2">
          {LOGIN_CONTENT.title}
        </h2>
        <p className="text-sm text-muted">
          {LOGIN_CONTENT.subtitle}
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-danger/10 border border-danger/20 text-danger text-sm font-medium">
          {error}
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-xs font-semibold text-ink-soft mb-2 tracking-wide uppercase">
            {LOGIN_CONTENT.emailLabel}
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
              <Mail size={18} />
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={LOGIN_CONTENT.emailPlaceholder}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-border bg-surface-soft/40 text-ink placeholder-muted/60 text-sm outline-none transition-all duration-200 focus:border-green focus:ring-1 focus:ring-green focus:bg-surface-soft/80"
              required
            />
          </div>
        </div>

        {/* Password */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <label className="text-xs font-semibold text-ink-soft tracking-wide uppercase">
              {LOGIN_CONTENT.passwordLabel}
            </label>
            <a href="#" className="text-xs font-medium text-green hover:underline">
              {LOGIN_CONTENT.forgotPassword}
            </a>
          </div>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3.5 text-muted">
              <Lock size={18} />
            </span>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder={LOGIN_CONTENT.passwordPlaceholder}
              className="w-full pl-11 pr-11 py-3 rounded-xl border border-border bg-surface-soft/40 text-ink placeholder-muted/60 text-sm outline-none transition-all duration-200 focus:border-green focus:ring-1 focus:ring-green focus:bg-surface-soft/80"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 flex items-center pr-3.5 text-muted hover:text-ink transition-colors"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        {/* Remember Me */}
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
            className="w-4 h-4 rounded border-border text-green focus:ring-green accent-green cursor-pointer"
          />
          <label htmlFor="remember-me" className="ml-2 text-xs text-muted cursor-pointer font-medium select-none">
            {LOGIN_CONTENT.rememberMe}
          </label>
        </div>

        {/* Submit */}
        <Button
          type="submit"
          variant="primary"
          disabled={loading}
          className="w-full rounded-xl py-3 mt-4 text-ink font-semibold flex items-center justify-center gap-2 hover:translate-y-[-1px] transition-all duration-200"
        >
          {loading ? 'Logging in...' : LOGIN_CONTENT.submitButton}
          {!loading && <ArrowRight size={18} />}
        </Button>
      </form>

      {/* Footer */}
      <div className="text-center mt-8 pt-6 border-t border-border/50 text-sm">
        <span className="text-muted mr-1">{LOGIN_CONTENT.footerText}</span>
        <Link to="/signup" className="text-green font-semibold hover:underline">
          {LOGIN_CONTENT.footerLinkText}
        </Link>
      </div>
    </div>
  );
}
