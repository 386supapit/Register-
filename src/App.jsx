import { useState } from 'react';
import Example from './Example';
import RentalItems from './RentalItems';
import CalendarComponent from './CalenderComponent';

function App() {
  const [total, setTotal] = useState(0);
  const [formData, setFormData] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedPeople, setSelectedPeople] = useState(1);
  const maxCapacity = 10; // สมมติว่ามีพื้นที่กางเต็นท์สำหรับ 10 คนต่อวัน

  const handleUpdate = (price) => {
    setTotal((prevTotal) => prevTotal + price);
  };

  const handleFormSubmit = (data) => {
    setFormData(data);
    console.log('ข้อมูลการลงทะเบียน:', data);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setSelectedPeople(value);
  };

  const isCampingAvailable = selectedPeople <= maxCapacity; // เช็คว่าพื้นที่พอไหม

  return (
    <div className="flex flex-col md:flex-row items-start justify-center min-h-screen bg-gray-800">
      {/* แบบฟอร์มลงทะเบียน */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-8 max-w-xl w-full md:w-1/2">
        <Example onSubmit={handleFormSubmit} />
      </div>

      {/* ส่วนเลือกวันและอุปกรณ์ */}
      <div className="mt-8 md:mt-0 md:ml-8 bg-gray-900 rounded-lg p-8 w-full md:w-1/2 flex flex-col">
        <CalendarComponent onDateChange={handleDateChange} />
        
        <div className="text-white mt-4">
          <label htmlFor="people" className="block text-sm font-semibold leading-6 text-gray-300">
            จำนวนคน:
          </label>
          <input
            id="people"
            name="people"
            type="number"
            value={selectedPeople}
            onChange={handlePeopleChange}
            min={1}
            max={maxCapacity}
            className="block w-full rounded-md border border-gray-700 bg-gray-800 text-gray-300 px-3.5 py-2 shadow-sm sm:text-sm"
          />
        </div>

        {!isCampingAvailable && (
          <p className="text-red-500 mt-4">ขออภัย พื้นที่กางเต็นท์เต็มสำหรับจำนวนคนที่เลือก</p>
        )}

        {/* อุปกรณ์ */}
        <div className="mt-4 flex-grow">
          <RentalItems onUpdate={handleUpdate} />
          <div className="text-white mt-4">
            <h3>ราคาทั้งหมด: {total} บาท</h3>
          </div>
        </div>

        {/* ปุ่มย้อนกลับ และยืนยัน */}
        <div className="mt-4 w-full flex justify-between">
          <button
            onClick={() => console.log('กลับ')}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
          >
            ย้อนกลับ
          </button>
          <button
            onClick={() => {
              if (isCampingAvailable) {
                console.log('ยืนยัน');
              } else {
                console.log('พื้นที่กางเต็นท์เต็ม');
              }
            }}
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
          >
            ยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
