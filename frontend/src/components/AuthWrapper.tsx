import React, { useState } from 'react';
import { SignIn } from './auth/SignIn';
import { SignUp } from './auth/SignUp';
import { ForgotPassword } from './auth/ForgotPassword';

type AuthView = 'signin' | 'signup' | 'forgot';

export const AuthWrapper: React.FC = () => {
  const [currentView, setCurrentView] = useState<AuthView>('signin');

  const handleViewChange = (view: AuthView) => {
    setCurrentView(view);
  };

  switch (currentView) {
    case 'signup':
      return <SignUp onToggleView={handleViewChange} />;
    case 'forgot':
      return <ForgotPassword onToggleView={handleViewChange} />;
    default:
      return <SignIn onToggleView={handleViewChange} />;
  }
};