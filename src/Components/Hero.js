import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
            <div className="flex-col justify-center hero-content lg:flex-row">
                <div className="text-center lg:text-left">
                <h1 className="mb-5 text-5xl font-bold herotext">Sponsor YouTube content creators.</h1> 
                <p className="mb-5 heroparagraph">Reach more people through their videos</p>
                </div> 
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label> 
                    <input type="text" placeholder="email" className="input input-bordered" />
                    </div> 
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label> 
                    <input type="text" placeholder="password" className="input input-bordered" /> 
                    <label className="label">
                        <a href="www.me.com" className="label-text-alt">Forgot password?</a>
                    </label>
                    </div> 
                    <div className="form-control mt-6">
                    <input type="button" defaultValue="Login" className="btn btn-primary login-button" />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Hero;
