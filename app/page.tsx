"use client"

import { FormEvent } from 'react'

export default function Home() 
{
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
 
    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })
 
    // Handle response if necessary
    const data = await response.json()
    // ...
  }
  return (
    <div className="container">
      <div className="row">
      <div className="offset-4 col-4 align-self-center">
      <h4>Signup</h4>
      <form onSubmit={onSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input type="text" className="form-control" id="firstName" name="firstName" />
      </div>
      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input type="text" className="form-control" id="lastName"  name="lastName" />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="text" className="form-control" id="email" name="email" />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
      </div>
      </div>
    </div>
  );
}
