/* eslint-disable @typescript-eslint/camelcase */
import * as fs from 'fs';
import * as readline from 'readline';
import {google} from 'googleapis';
import {OAuth2Client} from 'google-auth-library';
import {main} from './src';

interface Credentials {
  installed: {
    token_uri: string;
    project_id: string;
    auth_uri: string;
    auth_provider_x509_cert_url: string;
    client_secret: string;
    redirect_uris: string[];
    client_id: string;
  };
}

// If modifying these scopes, delete token.json.
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets.readonly'];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const TOKEN_PATH = 'token.json';

// Load client secrets from a local file.
fs.readFile('credentials.json', (err, content) => {
  if (err) return console.log('Error loading client secret file:', err);
  // Authorize a client with credentials, then call the Google Sheets API.
  authorize(JSON.parse(content.toString()), main);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(
  credentials: Credentials,
  callback: (auth: OAuth2Client) => void,
) {
  const {client_secret, client_id, redirect_uris} = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0],
  );

  // Check if we have previously stored a token.
  fs.readFile(TOKEN_PATH, (err, token) => {
    if (err) return getNewToken(oAuth2Client, callback);
    oAuth2Client.setCredentials(JSON.parse(token.toString()));
    callback(oAuth2Client);
  });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 * @param {OAuth2Client} oAuth2Client The OAuth2 client to get token for.
 * @param {callback} callback The callback for the authorized client.
 */
function getNewToken(
  oAuth2Client: OAuth2Client,
  callback: (auth: OAuth2Client) => void,
) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Authorize this app by visiting this url:', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question('Enter the code from that page here: ', async code => {
    rl.close();

    try {
      const token = await oAuth2Client.getToken(code);

      oAuth2Client.setCredentials(token.tokens);

      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token.tokens), fileErr => {
        if (fileErr) return console.error(fileErr);
        console.log('Token stored to', TOKEN_PATH);
      });
      callback(oAuth2Client);
    } catch (oauthErr) {
      console.error('Error while trying to retrieve access token', oauthErr);
    }
  });
}
