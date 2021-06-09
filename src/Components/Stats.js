import React from 'react'

const Stats = () => {
    return (
        <>
            <div className="stats shadow w-full">
                <div className="stat">
                <div className="stat-figure text-primary">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div> 
                <div className="stat-title">My Rate</div> 
                <div className="stat-desc">Starts at</div>
                <div className="stat-value text-primary"><span id="blkdollar">$</span>2K</div> 
                <div className="stat-desc">Per Video</div>
                <div className="stat-title"><a href="www.me.com">What to expect</a></div> 
                </div> 
                <div className="stat">
                    <div className="stat-figure text-info">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                    </div> 
                    <div className="stat-title">Subscribers</div> 
                    <div className="stat-value text-info">2.6M</div> 
                    <div className="stat-desc">21% more than last month</div>
                </div> 
                <div className="stat">
                    <div className="stat-figure text-info">
                        <div className="avatar online">
                        <div className="w-16 h-16 p-1 mask mask-squircle bg-base-100">
                            <span>
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                            </span>
                            <div className="stat-desc">Availability</div>
                        </div>
                        </div>
                    </div> 
                    <div className="stat-value">Outdoors</div>
                    <div className="stat-title">Category</div>
                    <div className="stat-desc">Fishing</div>
                </div>
            </div>

        </>
    )
}

export default Stats;
