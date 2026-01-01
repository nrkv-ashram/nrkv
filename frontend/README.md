# Ashram Website Frontend Guide

## Managing Images, Data, and PDFs


### Images for Different Pages
- **Location:** Place all images in the `public/images/` directory. You can organize images in subfolders for each page or section (e.g., `public/images/gallery/`, `public/images/school/`).
- **Usage:** Reference images in React components using `/images/your-image-name.jpg` or `/images/subfolder/image.jpg`.
- **How to Add Images:**
	1. Copy your image file (JPG, PNG, etc.) into the appropriate folder inside `public/images/`.
	2. Use the image path in your component, e.g. `<img src="/images/banner.jpg" alt="Banner" />`.
- **Examples:**
	- Home page banner: `/images/banner.jpg`
	- About page leaders: `/images/leader1.jpg`, `/images/leader2.jpg`
	- School page: `/images/school/building.jpg`
	- Gallery images: `/images/gallery/event1/photo1.jpg`, `/images/gallery/event2/photo2.jpg`

### Editing Data JSON Files
- **Location:** All data files are in `src/data/` (e.g., `calendar.json`, `events.json`, `notices.json`).
- **Format:** Standard JSON arrays/objects. Each file contains structured data for its respective page.
- **How to Edit:**
	1. Open the relevant JSON file in a text editor.
	2. Add, remove, or update entries as needed. Make sure to follow the JSON format (commas, quotes, brackets).
	3. Save the file. Changes will reflect automatically if the app is running in development mode.
- **Example for `notices.json`:**
		```json
		[
			{
				"title": "Admission Open",
				"date": "2025-01-10",
				"description": "Admissions for 2025 session are now open.",
				"pdf": "/pdfs/admission-details.pdf"
			},
			{
				"title": "Annual Function",
				"date": "2025-02-15",
				"description": "Join us for the annual function and cultural events.",
				"pdf": null
			}
		]
		```
- **Example for `events.json`:**
		```json
		[
			{
				"name": "Yoga Camp",
				"date": "2025-03-05",
				"images": ["/images/events/yoga1.jpg", "/images/events/yoga2.jpg"],
				"description": "A week-long yoga camp for all age groups."
			}
		]
		```

### Storing PDFs and Attaching to Notices
- **Location:** Place all PDF files in the `public/pdfs/` directory. Organize by year or topic if needed (e.g., `public/pdfs/2025/`).
- **How to Attach:** In `notices.json`, add a `pdf` field with the path to the PDF (e.g., `/pdfs/notice1.pdf`). If no PDF is available, set the field to `null` or omit it.
- **Usage in Components:**
	- When rendering notices, check for the `pdf` field and display a download/view link if present:
		```jsx
		{notice.pdf && (
			<a href={notice.pdf} target="_blank" rel="noopener noreferrer">Download PDF</a>
		)}
		```
- **How to Add a PDF:**
	1. Copy your PDF file into `public/pdfs/`.
	2. Reference it in the relevant JSON file (e.g., `notices.json`).
	3. The frontend will automatically show a link if the `pdf` field is present.

---

### Editing Data JSON Files
- **Location:** All data files are in `src/data/` (e.g., `calendar.json`, `events.json`, `notices.json`).
- **Format:** Standard JSON arrays/objects. Each file contains structured data for its respective page.
- **How to Edit:**
	1. Open the relevant JSON file in a text editor.
	2. Add, remove, or update entries as needed. Example for `notices.json`:
		 ```json
		 [
			 {
				 "title": "Admission Open",
				 "date": "2025-01-10",
				 "description": "Admissions for 2025 session are now open.",
				 "pdf": "/pdfs/admission-details.pdf"
			 }
		 ]
		 ```
	3. Save the file. Changes will reflect automatically if the app is running in development mode.

### Storing PDFs and Attaching to Notices
- **Location:** Place all PDF files in the `public/pdfs/` directory.
- **How to Attach:** In `notices.json`, add a `pdf` field with the path to the PDF (e.g., `/pdfs/notice1.pdf`).
- **Usage in Components:** When rendering notices, check for the `pdf` field and display a download/view link if present.

---


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
