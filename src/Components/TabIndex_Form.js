import React, { useState } from 'react';
import Ellipse from '../Images/Ellipse_2.png';
import vector from '../Images/Vector_2.png';
import vector_2 from '../Images/Vector_3.png';
import './TabIndex_Form.css';
export default function TabIndex_Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email format';
    }

    if (!phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'Invalid phone number';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted');
    }
  };

  return (
    <>
      <div className="form-wrapper">
        <div className="container">
          <div className="tab-part">
            <div className="tabInfo">
              <div className="circle circle-background">1</div>
              <div className="steps-info">
                <h4 className="tab-steps">STEP 1</h4>
                <h3 className="tab-heading">YOUR INFO</h3>
              </div>
            </div>
            <div className="tabInfo">
              <div className="circle">2</div>
              <div className="steps-info">
                <h4 className="tab-steps">STEP 2</h4>
                <h3 className="tab-heading">SELECT PLAN</h3>
              </div>
            </div>
            <div className="tabInfo">
              <div className="circle">3</div>
              <div className="steps-info">
                <h4 className="tab-steps">STEP 3</h4>
                <h3 className="tab-heading">ADD-ONS</h3>
              </div>
            </div>
            <div className="tabInfo">
              <div className="circle">4</div>
              <div className="steps-info">
                <h4 className="tab-steps">STEP 4</h4>
                <h3 className="tab-heading">SUMMARY</h3>
              </div>
            </div>
            <img className="tab-circle-img" src={Ellipse} alt="" />
            <img className="tab-img" src={vector} alt="" />
            <img className="tab-right-img" src={vector_2} alt="" />
          </div>
          <div className="form-part">
            <h1 className="info-heading">Personal info</h1>
            <p className="form-description">
              Please provide your name,email address,and phone number.
            </p>
            <div className="active-form">
              <form className="form-block" onSubmit={handleSubmit}>
                <div className="labelBlock">
                  <label htmlFor="name" className="label-heading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-margin-top input_style"
                    placeholder="e.g.Stephen King"
                    value={name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="mail" className="label-heading">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="mail"
                    className="input-margin-top input_style"
                    placeholder="mailto:e.g.Stephenking@lorem.com"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="phone" className="label-heading">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input-margin-top input_style"
                    placeholder="e.g + 1234 567 890"
                    value={phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div>{errors.phone}</div>}
                </div>
                <button className="form-btn">Next Step</button>
              </form>
            </div>

            <div className="active-form hide">
              <form className="form-block" onSubmit={handleSubmit}>
                <div className="labelBlock">
                  <label htmlFor="name" className="label-heading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-margin-top input_style"
                    placeholder="e.g.Stephen King"
                    value={name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="mail" className="label-heading">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="mail"
                    className="input-margin-top input_style"
                    placeholder="mailto:e.g.Stephenking@lorem.com"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="phone" className="label-heading">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input-margin-top input_style"
                    placeholder="e.g + 1234 567 890"
                    value={phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div>{errors.phone}</div>}
                </div>
                <button className="form-btn">Next Step</button>
              </form>
            </div>

            <div className="active-form hide">
              <form className="form-block" onSubmit={handleSubmit}>
                <div className="labelBlock">
                  <label htmlFor="name" className="label-heading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-margin-top input_style"
                    placeholder="e.g.Stephen King"
                    value={name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="mail" className="label-heading">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="mail"
                    className="input-margin-top input_style"
                    placeholder="mailto:e.g.Stephenking@lorem.com"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="phone" className="label-heading">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input-margin-top input_style"
                    placeholder="e.g + 1234 567 890"
                    value={phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div>{errors.phone}</div>}
                </div>
                <button className="form-btn">Next Step</button>
              </form>
            </div>

            <div className="active-form hide">
              <form className="form-block" onSubmit={handleSubmit}>
                <div className="labelBlock">
                  <label htmlFor="name" className="label-heading">
                    Name
                  </label>
                  <br />
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="input-margin-top input_style"
                    placeholder="e.g.Stephen King"
                    value={name}
                    onChange={handleInputChange}
                  />
                  {errors.name && <div>{errors.name}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="mail" className="label-heading">
                    Email Address
                  </label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    id="mail"
                    className="input-margin-top input_style"
                    placeholder="mailto:e.g.Stephenking@lorem.com"
                    value={email}
                    onChange={handleInputChange}
                  />
                  {errors.email && <div>{errors.email}</div>}
                </div>
                <div className="labelBlock">
                  <label htmlFor="phone" className="label-heading">
                    Phone Number
                  </label>
                  <br />
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    className="input-margin-top input_style"
                    placeholder="e.g + 1234 567 890"
                    value={phone}
                    onChange={handleInputChange}
                  />
                  {errors.phone && <div>{errors.phone}</div>}
                </div>
                <button className="form-btn">Next Step</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
