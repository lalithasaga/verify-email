import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const EmailVerificationPopup = () => {
  const { isLoggedIn, isEmailVerified } = useContext(AuthContext);

  const sendVerificationEmail = () => {
    const user = firebase.auth().currentUser;

    user.sendEmailVerification()
      .then(() => {
        console.log('Verification email sent.');
      })
      .catch((error) => {
        console.error('Error sending verification email:', error);
      });
  };

  return (
    <div className="popup">
      {isLoggedIn && !isEmailVerified && (
        <>
          <p>Please verify your email address.</p>
          <button onClick={sendVerificationEmail}>Verify Email</button>
        </>
      )}
      {isLoggedIn && isEmailVerified && (
        <p>Your email is now verified.</p>
      )}
    </div>
  );
};

export default EmailVerificationPopup;
