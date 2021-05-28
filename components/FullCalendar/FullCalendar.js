import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import fiLocale from '@fullcalendar/core/locales/fi';
import googleCalendarPlugin from '@fullcalendar/google-calendar';

export default function FullCalendar(props) {
    return (
      <Calendar {...props} 
        plugins={[dayGridPlugin, googleCalendarPlugin]} 
        initialView="dayGridMonth" 
        locale={fiLocale}
        headerToolbar={{
          start:   'title',
          center: '',
          end:  'prev,next'
        }}
        height={600}
        googleCalendarApiKey={"AIzaSyB7CWYPd29f0W1JLv_gmkEUa0sW9uRkNpc"}
        events={{
          googleCalendarId: 'ja0c88smh461stms28f0okjir4@group.calendar.google.com',
        }}
        eventDataTransform={
          function(event) {
            event.url = "";
            return event;
        }
        }
      />
    );
}