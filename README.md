# Google Maps Screenshot Automation with Puppeteer

This project demonstrates the use of Puppeteer, a powerful Node.js library, to automate the process of capturing screenshots of a Google Maps page displaying markers for various cities. The map includes custom markers for each city, with the number of users displayed as part of the marker's title.

## Features

- **Automated Screenshot Capture**: Utilizes Puppeteer to navigate to a Google Maps page and capture a screenshot of the map with custom markers.
- **Custom Marker Icons**: Each city on the map is marked with a custom icon, displaying the number of users for that city.
- **Dynamic Content**: The map and markers are dynamically generated based on a predefined list of cities and their user counts.

## Getting Started

1. **Install Puppeteer**: Run `npm install puppeteer` to add Puppeteer to your project.
2. **Run the Script**: Execute the script with `node script.js` (replace `script.js` with the name of your script file).
3. **View the Screenshot**: The screenshot will be saved in the specified directory with a timestamp in the filename.

## Usage

The script navigates to a Google Maps page, waits for the map to load, and then captures a screenshot. The screenshot is saved to a specified directory on your local machine.
