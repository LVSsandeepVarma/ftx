import React from 'react'

export default function RegisterForm() {
  return (
    <>
        <form className="auth-form" style={{ textAlign: "start" }}>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="user-1"></i>
                        <label for="name" className="form-label">
                          Name
                        </label>
                        <input
                          type="name"
                          placeholder="Enter your name"
                          className="form-control"
                          id="name"
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="mail"></i>
                        <label for="emailid" className="form-label">
                          Email ID
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your mail id"
                          className="form-control"
                          id="emailid"
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="lock-2"></i>
                        <label for="password" className="form-label">
                          Password
                        </label>
                        <input
                          placeholder="Enter your password"
                          type="password"
                          className="form-control"
                          id="password"
                        />
                      </div>
                      <div className="mb-3 form-group">
                        <i className="iconsax" data-icon="lock-2"></i>
                        <label for="password1" className="form-label">
                          Confirm Password
                        </label>
                        <input
                          placeholder="Enter your password"
                          type="password"
                          className="form-control"
                          id="password1"
                        />
                      </div>
                      <a
                        href=""
                        data-cursor="pointer"
                        className="btn-solid w-100 text-center mt-4"
                      >
                        Sign up
                      </a>
                      <h4 className="text-title text-center mt-2">
                        Already have an account{" "}
                        <a
                          data-cursor="pointer"
                          onclick="loginClick()"
                          href="javascript:void(0)"
                        >
                          Sign in
                        </a>
                      </h4>
                    </form>
    </>
  )
}
