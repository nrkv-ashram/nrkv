# Natagarh Ramakrishna Vivekananda Ashram Website

## নাটগড় রামকৃষ্ণ বিবেকানন্দ আশ্রম ওয়েবসাইট

A beautiful, fully static website for Natagarh Ramakrishna Vivekananda Ashram built with React. The website showcases the ashram's mission, events, notices, calendar, and contact information.

## 🌟 Features

- **Bilingual Support**: English and Bengali (বাংলা)
- **Fully Static**: No backend server required, all content stored in JSON files
- **Responsive Design**: Works perfectly on mobile and desktop
- **6 Main Pages**:
  - 🏠 **Home**: Welcome message, spiritual leaders, mission, and features
  - 📖 **About**: History, teachings, philosophy, and activities
  - 🎉 **Events**: Past and upcoming events with beautiful cards
  - 📢 **Notice**: Priority-based notice board
  - 📅 **Calendar**: Interactive monthly calendar view
  - 📞 **Contact Us**: Address, phone, email, and Google Maps

## 🎨 Design Highlights

- Traditional spiritual aesthetic with saffron/orange color scheme
- Images and quotes of Sri Ramakrishna, Maa Sarada Devi, and Swami Vivekananda
- Smooth transitions and hover effects
- Clean, modern UI using shadcn components
- Proper spacing and readability

## 🏗️ Technology Stack

### Frontend
- **React** 19.0.0 - UI framework
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **shadcn/ui** - Component library
- **Lucide React** - Icons

## 📁 Project Structure

```
/ashram-website
│
├── frontend/                      # React application
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   │   ├── ui/              # shadcn UI components
│   │   │   ├── Navbar.jsx       # Navigation bar
│   │   │   └── Footer.jsx       # Footer component
│   │   ├── pages/               # Page components
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Events.jsx
│   │   │   ├── Notice.jsx
│   │   │   ├── CalendarPage.jsx
│   │   │   └── ContactUs.jsx
│   │   ├── data/                # Static content (JSON)
│   │   │   ├── events.json
│   │   │   ├── notices.json
│   │   │   └── calendar.json
│   │   ├── App.js               # Main app component
│   │   └── index.css            # Global styles
│   ├── public/                  # Static assets
│   └── package.json             # Dependencies
|
├── README.md                     # This file
└── DEPLOYMENT.md                 # GitHub Pages deployment guide
```

## 📱 Responsive Design

The website is fully responsive and tested on:
- 📱 Mobile (375px - 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🎯 Key Features Explained

### Bilingual Support
- All major sections have Bengali translations
- Spiritual leaders' names in Bengali script
- Famous quotes in both English and Bengali

### Event Management
- Events automatically categorized as upcoming or past
- Past events shown in grayscale with different styling
- Each event includes date, time, venue, and description

### Notice Board
- Priority-based system (High/Medium/Low)
- Color-coded badges for easy identification
- Sorted by date (newest first)

### Interactive Calendar
- Monthly grid view
- Event dates highlighted in orange
- Click on dates to see scheduled events
- List view of all scheduled events below calendar

## 🛠️ Customization

### Change Colors

Edit `frontend/src/index.css` and update CSS variables:
```css
:root {
  --primary: /* Your color */;
  --orange-600: /* Your orange shade */;
}
```

### Add New Pages

1. Create component in `frontend/src/pages/`
2. Update routing in `frontend/src/App.js`
3. Add navigation link in `frontend/src/components/Navbar.jsx`

### Update Content

#### Events
```json
{
  "id": 8,
  "title": "New Event",
  "date": "2025-12-31",
  "description": "Event description",
  "time": "9:00 AM - 5:00 PM",
  "venue": "Location",
  "imageUrl": "https://example.com/image.jpg",
  "pdfUrl": null
}
```

#### Notices
```json
{
  "id": 6,
  "title": "Notice Title",
  "date": "2025-12-31",
  "content": "Notice content...",
  "priority": "high",
  "pdfUrl": null
}
```

## 📸 Screenshots

### Home Page
Beautiful hero section with Om symbol and inspiring quote from Swami Vivekananda.

### Spiritual Leaders
Dedicated section featuring Sri Ramakrishna, Maa Sarada Devi, and Swami Vivekananda with their teachings.

### Events Page
Grid layout showcasing upcoming and past events with images and details.

### Calendar
Interactive monthly calendar highlighting important dates and festivals.

## 🤝 Contributing

This is a static website for Natagarh Ramakrishna Vivekananda Ashram. For updates or contributions:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is created for Natagarh Ramakrishna Vivekananda Ashram.

## 🙏 Acknowledgments

- Sri Ramakrishna Paramhansa
- Maa Sarada Devi
- Swami Vivekananda
- Ramakrishna Mission and Ramakrishna Math

## 📞 Support

For technical issues or questions:
- Create an issue in the GitHub repository
- Contact the ashram directly

## 🔮 Future Enhancements

Potential features for future versions:
- Photo gallery
- Online donation system
- Blog/Articles section
- Video sermons
- Multi-language support
- Newsletter subscription

---

**Made with 🧡 for Natagarh Ramakrishna Vivekananda Ashram**

*"Arise, awake, and stop not till the goal is reached" - Swami Vivekananda*

*"উত্তিষ্ঠত জাগ্রত প্রাপ্য বরান্নিবোধত" - স্বামী বিবেকানন্দ*
