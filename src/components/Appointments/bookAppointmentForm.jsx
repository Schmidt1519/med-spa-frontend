// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import {
//   getNextHourDate,
//   asDate,
//   asFormatDate,
//   asFormatHour
// } from '../utils/date-time';

// export default function BookAppointmentForm(props) {
//   const initialDateTime = getNextHourDate();
//   const [formState, setFormState] = useState({
//     service_id: null,
//     date: null,
//     start: null,
//     end: null
//   });
//   const [excludeTimesState, setExcludeTimesState] = useState([]); // [{date: [{start: '', end: ''}, {start: '', end: ''}]}]

//   const updateExcludeTimes = dateStr => {
//     const excludes = [];
//     props.appointments.forEach(appt => {
//       if (appt.date === dateStr) {
//         //assuming interval is only one hour from start time
//         const d = asDate(dateStr, appt.start);
//         excludes.push(d);
//       }
//     });

//     setExcludeTimesState(excludes);
//   };

//   const onSubmit = e => {
//     e.preventDefault();
//     props.onSubmit(formState);
//   };

//   const onServiceSelected = id => {
//     setFormState({ ...formState, service_id: id });
//   };

//   const onDateSelected = date => {
//     const dateStr = asFormatDate(date);
//     updateExcludeTimes(dateStr);
//     setFormState({
//       ...formState,
//       date: dateStr
//     });
//   };

//   const onTimeSelected = date => {
//     setFormState({
//       ...formState,
//       start: asFormatHour(date),
//       end: asFormatHour(date, 1)
//     });
//   };

//   return (
//     <form class="book-appointment-form" onSubmit={onSubmit}>
//       <div class="book-appointment-form--service-picker form-group">
//         <label>Select Service</label>
//         <select onChange={onServiceSelected}>
//           <option value="">Select Service</option>
//           {props.services.map(service => (
//             <option value={service.id}>{service.name}</option>
//           ))}
//         </select>
//       </div>

//       <div class="form-group">
//         <label>Schedule Date</label>
//         <DatePicker
//           onChange={onDateSelected}
//           disabled={formState.service_id == null}
//           minDate={new Date()}
//           showTimeSelect={false}
//           dateFormat="MMMM d, yyyy"
//         />
//       </div>

//       <div class="form-group">
//         <label>Schedule Time</label>
//         <DatePicker
//           onChange={onTimeSelected}
//           disabled={formState.date == null}
//           minDate={initialDateTime}
//           showTimeSelect
//           showTimeSelectOnly
//           timeFormat="h:mm"
//           timeIntervals={60}
//           excludeTimes={excludeTimesState}
//         />
//       </div>
//       <button class="book-appointment-form--submit" type="submit">
//         Submit
//       </button>
//     </form>
//   );
// }
