import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="mt-20 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          <div>
            <div className='text-center pb-5'><p className='text-3xl'>Registration Form</p></div>

           


            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
              <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                Experience
              </label>
              <div className="mt-2">
                <select
                  id="expirence"
                  name="expirence"
                  autoComplete="expirence-range"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option>0 years</option>
                  <option>0.6 years</option>
                  <option>0.6-1 years</option>
                  <option>1-1.5 years</option>
                  <option>more than 2 years</option>
                </select>
              </div>
            </div>

            <div className="">
            <fieldset>
              <legend className="text-sm font-medium leading-6 text-gray-900">Select account type</legend>
              <div className="mt-6 space-y-6">
                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="User-type"
                      name="User-type"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="User-type" className="font-medium text-gray-900">
                      User
                    </label>
                    <p className="text-gray-500">Join as normal user. get notification for your answers</p>
                  </div>
                </div>

                <div className="relative flex gap-x-3">
                  <div className="flex h-6 items-center">
                    <input
                      id="User-type"
                      name="User-type"
                      type="radio"
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label htmlFor="Expert-type" className="font-medium text-gray-900">
                      Expert
                    </label>
                    <p className="text-gray-500">Join as an expert.( You get notified when you will be verified)</p>
                  </div>
                </div>
              </div>
            </fieldset>
            </div>

          <div>
            <button
            style={{backgroundColor:"#005B41"}}
              type="submit"
              className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Register
            </button>
          </div>
        </form>

        <p className="mt-3 text-center text-sm text-gray-500">
          Already a member?{' '}
          <Link to={"/auth/login"} style={{color:"#005B41"}} className="font-semibold leading-6  hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  </>
  )
}

export default Signup