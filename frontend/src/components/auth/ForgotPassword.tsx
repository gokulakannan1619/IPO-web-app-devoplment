import React, { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';

interface ForgotPasswordProps {
  onToggleView: (view: 'signin' | 'signup' | 'forgot') => void;
}

export const ForgotPassword: React.FC<ForgotPasswordProps> = ({ onToggleView }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const { resetPassword, isLoading } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      await resetPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      setError('Failed to send reset email. Please try again.');
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <div className="text-white font-bold text-xl">BF</div>
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900">BLUESTOCK</span>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-green-800 mb-2">Check your email</h2>
            <p className="text-green-600 mb-4">
              We've sent a password reset link to {email}
            </p>
            <button
              onClick={() => onToggleView('signin')}
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Back to login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <div className="text-white font-bold text-xl">BF</div>
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900">BLUESTOCK</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Forgot Password?</h2>
          <p className="text-gray-600">
            Enter your email address to get the password reset link.
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="hello@bluestock.in"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {isLoading ? 'Sending...' : 'Password Reset'}
          </button>

          <div className="text-center">
            <button
              type="button"
              onClick={() => onToggleView('signin')}
              className="text-indigo-600 hover:text-indigo-500 font-medium"
            >
              Back to login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};