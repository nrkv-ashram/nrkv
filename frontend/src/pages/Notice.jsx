import React, { useState } from 'react';
import noticesData from '../data/notices.json';
import { Calendar, AlertCircle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

const Notice = () => {
  const [notices] = useState(noticesData);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high':
        return 'bg-red-600 hover:bg-red-700';
      case 'medium':
        return 'bg-orange-600 hover:bg-orange-700';
      case 'low':
        return 'bg-blue-600 hover:bg-blue-700';
      default:
        return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high':
        return <AlertCircle className="w-5 h-5" />;
      case 'medium':
        return <Info className="w-5 h-5" />;
      default:
        return <Info className="w-5 h-5" />;
    }
  };

  // Sort notices by date (newest first)
  const sortedNotices = [...notices].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-orange-900">Notice Board</h1>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Stay updated with important announcements and notifications from the ashram.
          </p>
        </div>

        {/* Notices List */}
        <div className="space-y-6">
          {sortedNotices.map((notice) => (
            <Card key={notice.id} className="hover:shadow-xl transition-all border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge className={`${getPriorityColor(notice.priority)} text-white flex items-center gap-1`}>
                        {getPriorityIcon(notice.priority)}
                        <span className="capitalize">{notice.priority} Priority</span>
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-orange-900 mb-2">{notice.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(notice.date)}</span>
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {notice.description || notice.content}
                </p>
                {notice.pdf && (
                  <div className="mt-4">
                    <a 
                      href={notice.pdf} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      Download Notice PDF
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {notices.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-gray-600">No notices available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Notice;