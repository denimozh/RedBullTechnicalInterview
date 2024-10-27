import { useState } from 'react'
import DriverStatistics from './api/DriverStatistics'


function App() {
    const [selectedYear, setSelectedYear] = useState(2024);
    const handleYearChange = (e: any) => {
      setSelectedYear(Number(e.target.value)); // Parse to a number if input is of type "number"
    };

    return (
      <div className='container mx-auto py-10 font-futura font-medium'>
        <h1 className='text-5xl font-medium'>{selectedYear} Driver Standings</h1>
        <div className='pt-5'>
          <label htmlFor="yearSelect" className='text-lg'>Select Year: </label>
          <select 
            id="yearSelect" 
            value={selectedYear} 
            onChange={handleYearChange} 
            className="border rounded p-2"
          >
            <option value={2024}>2024</option>
            <option value={2023}>2023</option>
            <option value={2022}>2022</option>
            <option value={2021}>2021</option>
          </select>
        </div>
        <DriverStatistics year={selectedYear}/>
      </div>
    )
}

export default App
