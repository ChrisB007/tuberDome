import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer';
import axios from 'axios';
import Navbar from '../Navbar';

export const Contact = () => {
  const [contactus, setContactus] = useState({
    fullName: " ",
    email: " ",
    subject: " ",
    message: " "
  })

  //on Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:4040/contact", contactus).then(() =>{
      //Wite function to auto send email here.
    })
  }



  return (
      <>
      <Navbar /> 
    <div className="relative bg-white">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Send us note, we are excited to hear from you.
            </p>
            <dl className="mt-8 text-base text-gray-500">
              <div>
                <dt className="sr-only">Location</dt>
                <dd>
                  <p className="font-medium text-gray-700">Location</p>
                  <p>New York, NY</p>
                </dd>
              </div>
            </dl>
            <p className="mt-6 text-base text-gray-500">
              Looking for careers?{' '}
              <Link to="#" className="font-medium text-gray-700 underline">
                View all job openings
              </Link>
              .
            </p>
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form action="#" method="POST" className="grid grid-cols-1 gap-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  autoComplete="name"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Enter your full name"
                  value={contactus.fullName}
                  onChange={(e) => {setContactus({ ...contactus, fullName: e.target.value})}}
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder=""
                  value={contactus.email}
                  onChange={ (e) => { setContactus({ ...contactus, email: e.target.value})}}
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border-gray-300 rounded-md"
                  placeholder="Subject"
                  value={contactus.subject}
                  onChange={ (e) =>{ setContactus({ ...contactus, subject: e.target.value})}}
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full shadow-sm py-3 px-4 placeholder-gray-500 focus:ring-red-500 focus:border-red-500 border border-gray-300 rounded-md"
                  placeholder=" Please =type your message to us here"
                  value={contactus.message}
                  onChange={ (e) => { setContactus({ ...contactus, message: e.target.value})}}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

