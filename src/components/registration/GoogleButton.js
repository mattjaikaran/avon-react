import React from 'react'

export const GoogleButton = () => {
  return (
    <div ng-show="showGoogleLogin">
      <div id="google_login" className="btn loginBtn loginBtn-google m-top-s1 google-div ng-isolate-scope">
        <span className="ng-binding loginBtn-text">SIGN IN WITH GOOGLE</span>
      </div>
    </div>
  )
}
