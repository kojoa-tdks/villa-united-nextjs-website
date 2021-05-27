import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import fiLocale from '@fullcalendar/core/locales/fi';

export default function FullCalendar(props) {
    return (
      <Calendar {...props} 
        plugins={[dayGridPlugin]} 
        initialView="dayGridMonth" 
        locale={fiLocale}
        headerToolbar={{
          start:   'title',
          center: '',
          end:  'prev,next'
        }}
        height={600}
      />
    );
}