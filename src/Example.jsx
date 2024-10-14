import { useState } from 'react';

export default function Example({ onSubmit }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    contactPerson: '',
    contactPhone: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div>
      <div className="text-center">
        <h2 className="text-4xl font-bold tracking-tight text-white">ลงทะเบียน</h2>
        <p className="mt-2 text-lg leading-8 text-gray-300">
          ลงทะเบียนเพื่อจองพื้นที่กางเต็นท์
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              ชื่อ
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                name="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              นามสกุล
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                name="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              อีเมล
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="phone-number"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              เบอร์โทร
            </label>
            <div className="mt-2.5">
              <input
                id="phone-number"
                name="phoneNumber"
                type="tel"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-person"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              บุคคลที่สามารถติดต่อได้ (ชื่อ)
            </label>
            <div className="mt-2.5">
              <input
                id="contact-person"
                name="contactPerson"
                type="text"
                value={formData.contactPerson}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="contact-phone"
              className="block text-sm font-semibold leading-6 text-gray-300"
            >
              เบอร์โทรศัพท์ของบุคคลที่ติดต่อได้
            </label>
            <div className="mt-2.5">
              <input
                id="contact-phone"
                name="contactPhone"
                type="tel"
                value={formData.contactPhone}
                onChange={handleChange}
                required
                className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
