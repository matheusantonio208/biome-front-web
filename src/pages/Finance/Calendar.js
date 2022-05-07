import React, { useState } from 'react';
import { Card, CardBody } from 'reactstrap';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import BootstrapTheme from '@fullcalendar/bootstrap';
import interactionPlugin from '@fullcalendar/interaction';
const Calender = () => {
  const [event, setEvent] = useState({});
  const [selectedNewDay, setSelectedNewDay] = useState(0);
  const [selectedDay, setSelectedDay] = useState(0);
  const [modal, setModal] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const toggle = () => {
    if (modal) {
      setModal(false);
      setEvent(null);
      setIsEdit(false);
    } else {
      setModal(true);
    }
  };
  const str_dt = function formatDate(date) {
    var monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    var d = new Date(date),
      month = '' + monthNames[d.getMonth()],
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [day + ' ' + month, year].join(',');
  };

  const date_r = function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
  };

  const handleEventClick = (arg) => {
    const event = arg.event;

    const st_date = event.start;
    const ed_date = event.end;
    const r_date =
      ed_date == null
        ? str_dt(st_date)
        : str_dt(st_date) + ' to ' + str_dt(ed_date);
    const er_date =
      ed_date == null
        ? date_r(st_date)
        : date_r(st_date) + ' to ' + date_r(ed_date);

    setEvent({
      id: event.id,
      title: event.title,
      start: event.start,
      end: event.end,
      className: event.classNames,
      category: event.classNames[0],
      location: event._def.extendedProps.location,
      description: event._def.extendedProps.description,
      defaultDate: er_date,
      datetag: r_date,
    });

    setIsEdit(true);
    toggle();
  };

  const handleDateClick = (arg) => {
    const date = arg['date'];
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    const currectDate = new Date();
    const currentHour = currectDate.getHours();
    const currentMin = currectDate.getMinutes();
    const currentSec = currectDate.getSeconds();
    const modifiedDate = new Date(
      year,
      month,
      day,
      currentHour,
      currentMin,
      currentSec,
    );

    const modifiedData = { ...arg, date: modifiedDate };

    setSelectedNewDay(date);
    setSelectedDay(modifiedData);
    toggle();
    document.getElementById('btn-save-event').removeAttribute('hidden');
  };
  return (
    <Card>
      <CardBody>
        <FullCalendar
          plugins={[BootstrapTheme, interactionPlugin, dayGridPlugin]}
          initialView='dayGridMonth'
          handleWindowResize={true}
          themeSystem='bootstrap'
          slotDuration={'00:15:00'}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,dayGridWeek,dayGridDay',
          }}
          droppable={true}
          selectable={true}
          eventClick={handleEventClick}
          dateClick={handleDateClick}
          editable={true}
        />
      </CardBody>
    </Card>
  );
};

Calender.propTypes = {};

export default Calender;
