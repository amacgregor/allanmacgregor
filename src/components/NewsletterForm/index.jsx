//In src/components/sub-form.component.js
import React, { useState } from 'react'

const NewsletterForm = () => {
  const [status, setStatus] = useState(null)
  const [email, setEmail] = useState('')

  //FORM_URL should be the same as the form action url pointed out above
  const FORM_URL = `https://app.convertkit.com/forms/1865364/subscriptions`

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = new FormData(e.target)
    try {
      const response = await fetch(FORM_URL, {
        method: 'post',
        body: data,
        headers: {
          accept: 'application/json',
        },
      })
      setEmail('')
      const json = await response.json()
      if (json.status === 'success') {
        setStatus('SUCCESS')
        return
      }
    } catch (err) {
      setStatus('ERROR')
      console.log(err)
    }
  }

  const handleInputChange = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  return (
    <div className="bg-white py-5 px-4 sm:px-5 md:py-5 lg:px-5 lg:py-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-indigo-700 rounded-md">
        <h2 className="inline text-3xl font-extrabold tracking-tight text-white mt-0 sm:block sm:text-4xl">
          Want to know when the book is out?
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
          Sign up to get updates of my upcoming book on{' '}
          <strong>Elixir Design Patterns.</strong>
        </p>
        {status === 'SUCCESS' && (
          <p className="bg-green-50 px-2 py-1.5 rounded-md text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-50 focus:ring-green-600">
            Please go confirm your subscription!
          </p>
        )}
        {status === 'ERROR' && (
          <p className="rounded-md bg-red-50 p-4 text-sm font-medium text-red-800">
            Oops, Something went wrong! try again.
          </p>
        )}
        <form
          action={FORM_URL}
          method="post"
          onSubmit={handleSubmit}
          className="mt-8 sm:flex"
        >
          <label for="email_address" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            aria-label="Your email"
            name="email_address"
            onChange={handleInputChange}
            value={email}
            required
            autocomplete="email"
            required
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm p-2 border-gray-300 rounded-md"
            placeholder="Enter your email"
          />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <button
              type="submit"
              className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-700 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Notify me
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsletterForm
