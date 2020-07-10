# Item Spreadsheet to JSON

This repository contains the code used to convert the Animal Crossing: New Horizons community items
google [spreadsheet](https://docs.google.com/spreadsheets/d/13d_LAJPlxMa_DubPTuirkIV4DERBMXbrWQsmSh8ReK4/edit?usp=sharing) into JSON.

# Setup

- Visit [Google Sheets API Quickstart](https://developers.google.com/sheets/api/quickstart/nodejs)
- Click `Enable the Google Sheets API` and choose `Desktop app` as your OAuth client. Download the credentials file `credentials.json`
- Copy `credentials.json` into the root of your local copy of this repository
- Run `yarn start` to start a water that will automatically build into `build`
- Run `yarn install` to install the required node modules
- Run `node build` to export data from Google Sheets into local `out` folder

To fetch the latest data and rebuild the output file:

 - Run `yarn rebuild`
