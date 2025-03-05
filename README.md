# Furat

# Discord Bot Configuration & Setup

## Configuration

Below is the configuration file for the Discord bot. Make sure to replace the placeholders with your actual values before running the bot.

```javascript
module.exports = {
    token: '', // Bot token
    channels: {
      applicationChannel: '', // Channel ID for application submissions
      responseChannel: '', // Channel ID for rejection messages
      acceptedChannel: '', // Channel ID for acceptance messages
      banLogChannel: '' // Channel ID for ban logs
    },
    roles: {
      accepted: '', // Role ID for accepted users
      rejected: '', // Role ID for rejected users
      banned: '', // Role ID for banned users
      staff: '' // Role ID for staff members
    },
    images: {
      thumbnail: '', // Server logo URL
      banner: '' // Server banner URL
    },
    interviewServer: '' // Interview waiting link
};
```

## Installation

To set up and run the bot, follow these steps:

### 1. Install Node.js
Ensure you have [Node.js](https://nodejs.org/) installed on your system.

### 2. Install Required Packages
Run the following command to install the necessary dependencies:

```sh
npm install discord.js dotenv
```

### 3. Running the Bot
Once the dependencies are installed, you can start the bot using:

```sh
node index
```

Replace `bot.js` with the actual file name of your bot script if it's different.

## Notes
- Keep your bot token private and never share it.
- Ensure the bot has the necessary permissions for the configured channels and roles.
- Update the configuration file with the correct IDs and URLs before starting the bot.

Happy coding! 🚀

