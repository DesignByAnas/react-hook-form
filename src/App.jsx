import React from 'react'
import { useForm,} from "react-hook-form"

const App = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  return (
    <>
    <h1>Admission Form</h1>
    <form>
      <div>
        <label htmlFor="fullName">Full Name</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          required
          placeholder='Full Name'
        />
      </div>

      <div>
        <label htmlFor="fatherName">Father Name</label>
        <input
          type="text"
          id="fatherName"
          name="fatherName"
          required
          placeholder='Father Name'
        />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder='Email'
        />
      </div>

      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          required
          placeholder='Phone Number'
        />
      </div>

      <div>
        <label htmlFor="cnic">CNIC</label>
        <input
          type="text"
          id="cnic"
          name="cnic"
          required
          pattern="\d{5}-\d{7}-\d"
          placeholder="xxxxx-xxxxxxx-x"
        />
      </div>

      <div>
        <label htmlFor="dob">Date of Birth</label>
        <input
          type="date"
          id="dob"
          name="dob"
          required
        />
      </div>

      <div>
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      <div>
        <label htmlFor="laptop">Do you have a laptop?</label>
        <select
          id="laptop"
          name="laptop"
          required
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>
      </div>

      <div>
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          required
          placeholder='Address'
        />
      </div>

      <div>
        <label htmlFor="qualification">Last Qualification</label>
        <select
          id="qualification"
          name="qualification"
          required
        >
          <option value="Matric">Matric</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
        </select>
      </div>

      <div>
          <label htmlFor="profileImage">Upload Profile Picture</label>
          <input
            type="file"
            id="profileImage"
            name="profileImage"
            accept=".jpg,.jpeg,.png"
            required
          />
        </div>
        <ul>
          <li>With white or blue background</li>
          <li>File type: jpg, jpeg, png</li>
          <li>Upload your recent passport-size picture</li>
          <li>Your face should be clearly visible without any glasses.</li>
        </ul>
      <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default App