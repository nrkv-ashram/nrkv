import React, { useState } from 'react';
import calendarData from '../data/calendar.json';
import { Calendar as CalendarComponent } from '../components/ui/calendar';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [selectedEvents, setSelectedEvents] = useState([]);

  // Convert calendar data to event map
  const eventMap = calendarData.reduce((acc, event) => {
    const eventDate = new Date(event.date).toDateString();
    if (!acc[eventDate]) {
      acc[eventDate] = [];
    }
    acc[eventDate].push(event);
    return acc;
  }, {});

  const handleDateSelect = (selectedDate) => {
    setDate(selectedDate);
    const dateString = selectedDate.toDateString();
    setSelectedEvents(eventMap[dateString] || []);
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'festival':
        return 'bg-orange-600 hover:bg-orange-700';
      case 'event':
        return 'bg-blue-600 hover:bg-blue-700';
      case 'special':
        return 'bg-green-600 hover:bg-green-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  // Get all event dates for highlighting
  const eventDates = calendarData.map(event => new Date(event.date));

  const modifiers = {
    event: eventDates,
  };

  const modifiersStyles = {
    event: {
      fontWeight: 'bold',
      backgroundColor: '#fed7aa',
      color: '#9a3412',
      borderRadius: '50%',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">Event Calendar</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            View our monthly calendar of spiritual events, festivals, and community activities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Calendar */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-2xl">Select a Date</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex justify-center">
                  <CalendarComponent
                    mode="single"
                    selected={date}
                    onSelect={handleDateSelect}
                    modifiers={modifiers}
                    modifiersStyles={modifiersStyles}
                    className="rounded-md border shadow-sm"
                  />
                </div>
                <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Note:</span> Dates highlighted in orange have scheduled events. Click on a date to view details.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Selected Date Events */}
          <div className="lg:col-span-1">
            <Card className="shadow-xl sticky top-6">
              <CardHeader className="bg-orange-600 text-white">
                <CardTitle className="text-xl">
                  {date.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {selectedEvents.length > 0 ? (
                  <div className="space-y-4">
                    {selectedEvents.map((event, index) => (
                      <div key={index} className="p-4 bg-orange-50 rounded-lg border-l-4 border-orange-600">
                        <Badge className={`${getEventTypeColor(event.type)} text-white mb-2`}>
                          {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                        </Badge>
                        <h3 className="font-semibold text-orange-900 text-lg">{event.title}</h3>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-600 text-center py-8">
                    No events scheduled for this date.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* All Upcoming Events */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-orange-900">All Scheduled Events</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {calendarData
              .sort((a, b) => new Date(a.date) - new Date(b.date))
              .map((event, index) => (
                <Card key={index} className="hover:shadow-xl transition-all border-2 border-orange-100">
                  <CardHeader>
                    <Badge className={`${getEventTypeColor(event.type)} text-white w-fit mb-2`}>
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                    <CardTitle className="text-lg text-orange-900">{event.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 flex items-center gap-2">
                      <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;