import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { EuiDatePicker, EuiDatePickerRange } from '@elastic/eui'
import '@elastic/eui/dist/eui_theme_light.css';
import moment from 'moment'

function App() {

  const [startDate, setStartDate] = useState(moment().subtract(15, 'd'));
  const [endDate, setEndDate] = useState(moment());

  return (
    <EuiDatePickerRange
      iconType={false}
      startDateControl={
        <EuiDatePicker
          dateFormat="DD/MM/YYYY"
          allowSameDay
          selected={startDate}
          onChange={(date) => setStartDate(date!)}
          startDate={startDate}
          endDate={endDate}
        />
      }
      endDateControl={
        <EuiDatePicker
          dateFormat="DD/MM/YYYY"
          allowSameDay
          selected={endDate}
          onChange={(date) => setEndDate(date!)}
          startDate={startDate}
          endDate={endDate}
          aria-label="End date"
        />
      }
    />
  )
}

export default App
