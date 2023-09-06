import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Basic = ({addBasicData}) => {
  const [name, setName] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
const navigate=useNavigate();
const location=useLocation();

useEffect(() => {
  if (location.state) {
    setName(location.state.name || '');
    setLast(location.state.last || '');
    setEmail(location.state.email || '');
    setContact(location.state.contact || '');
  }
}, [location.state]);
  const submit = (e) => {
    e.preventDefault();
    if (!name || !email || !contact || !last ) {
      alert("All fields necessary!");
    } else {

      addBasicData(name, last ,email, contact);
      
     navigate('/question');
    }
  }
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300">
      <div className="max-w-md rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <form onSubmit={submit}>
        <label className="block text-lg font-semibold mb-4 text-neutral-700 dark:text-neutral-300">
          Basic Details
        </label>
          <div className="mb-6">
            <input
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value) }}
              className="block w-full rounded border bg-transparent px-3 py-2 outline-none transition duration-200 ease-linear placeholder-opacity-75 dark:text-neutral-200 dark:placeholder-text-neutral-200"
              id="firstName"
              placeholder="First name"
            />
          </div>

          <div className="mb-6">
            <input
              type="text"
              value={last}
                    onChange={(e) => { setLast(e.target.value) }}
              className="block w-full rounded border bg-transparent px-3 py-2 outline-none transition duration-200 ease-linear placeholder-opacity-75 dark:text-neutral-200 dark:placeholder-text-neutral-200"
              id="lastName"
              placeholder="Last name"
            />
          </div>

          <div className="mb-6">
            <input
              type="email"
              value={email}
                    onChange={(e) => { setEmail(e.target.value) }}
              className="block w-full rounded border bg-transparent px-3 py-2 outline-none transition duration-200 ease-linear placeholder-opacity-75 dark:text-neutral-200 dark:placeholder-text-neutral-200"
              id="email"
              placeholder="Email address"
            />
          </div>

          <div className="mb-6">
            <input
              type="tel"
              value={contact}
                    onChange={(e) => { setContact(e.target.value) }}
              className="block w-full rounded border bg-transparent px-3 py-2 outline-none transition duration-200 ease-linear placeholder-opacity-75 dark:text-neutral-200 dark:placeholder-text-neutral-200"
              id="contactNo"
              placeholder="Contact No."
            />
          </div>

        
        

        <nav aria-label="Page navigation example">
          <div className="flex justify-between">
            <button
              className="block rounded px-3 py-1.5 text-sm bg-neutral-100 text-neutral-500 transition-all duration-300 dark:text-neutral-400 dark:bg-neutral-800"
            type='submit'
            >
              Previous
            </button>
            <button
              className="block rounded px-3 py-1.5 text-sm bg-neutral-100 text-black transition-all duration-300 dark:text-neutral-400 dark:bg-neutral-800"
            type='submit'
            >
              Next
            </button>
          </div>
        </nav>
        </form>
      </div>
    </div>
  );
};

export default Basic;
