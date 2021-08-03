<p align = "center"><img align = "center" src="https://static.vecteezy.com/system/resources/thumbnails/001/810/990/small/illustration-of-two-happy-people-talking-via-video-call-smiling-men-and-women-work-and-communicate-remotely-team-meeting-illustration-in-flat-design-vector.jpg" align = "center" alt="Logo" width="150" height="150" /></p>
<h1 align="center">Engage Video Calling WebApp</h1>
<p align = "center"> An easy to use and scalable 1:1 video calling app!! </p>
<p align = "center"> Link to the website: https://engage-video-calling.azurewebsites.net/ </p>

## Features
- 1:1 Video and Audio connect
- Invite using meeting link
- Mute/Unmute
- Video On/Off
- Share Screen
- Chat

This project was developed as part of [Microsoft Engage 2021](https://microsoft.acehacker.com/engage2021/) Program. 
Agile Development Methodology was used while developing this application. You can find details about the agile sprint details in my [notion page](https://www.notion.so/cd6fd2f396fc45b2a2e51a97d1f02e32?v=e80dfea049f949ffa3158f85f873f105)

### Technologies and source code
MVC architecture has been followed
- NodeJS - `server/app` folder contains the code for the backend 
- ReactJS - `video-client` folder has the code for the frontend
- Express - `server/server.js` creates the express app
- REDIS for database - `server/app/config-redis` has code on creating the redis client

## Requirements
### To install NodeJS
```
$ sudo apt install npm
```
### To install docker
```
$ sudo apt install docker-compose 
```

## Installation
```
$ git clone git@github.com:NikiAdivi/engage-video-chat.git
```

## Setup

```
$ cd engage-video-chat/server/app/config-redis
```

- Copy and Paste the `config.js.example` file and rename it as `config.js`
- You then need to create an account and a redis cache instance on [Azure](https://azure.microsoft.com/en-in/) and paste rediscachehostname that is available on the home page and rediscacheaccesskey that is available in the access keys tab in the field `REDISCACHEHOSTNAME` and `REDISCACHEKEY`.

### To run:

```sh
$ docker-compose build
$ docker-compose up
```

## Sneak peak into the UI
<table border="0">
 <tr>
  <td><b>HomePage</b><br><p align = "center"><img align = "center" src="https://github.com/NikiAdivi/engage-video-chat/blob/azure-redis/UI%20Images/HomePage.png" align = "center" alt="Logo" width="500" height="250" /></p></td>
    <td><b>CallPage</b><br><p align = "center"><img align = "center" src="https://github.com/NikiAdivi/engage-video-chat/blob/azure-redis/UI%20Images/VideoCall.png" align = "center" alt="Logo" width="500" height="250" /></p></td>
 </tr>
 <tr>
    <td><b>Chat</b><br><p align = "center"><img align = "center" src="https://github.com/NikiAdivi/engage-video-chat/blob/azure-redis/UI%20Images/Chat.png" align = "center" alt="Logo" width="500" height="250" /></p></td>
    <td><b>ScreenShare</b><br><p align = "center"><img align = "center" src="https://github.com/NikiAdivi/engage-video-chat/blob/azure-redis/UI%20Images/Screenshare.png" align = "center" alt="Logo" width="500" height="250" /></p></td>
 </tr>
</table>

## 📝 License

Copyright © 2021 [Nikitha Adivi](https://github.com/NikiAdivi).<br />
This project is [MIT](https://github.com/NikiAdivi/engage-video-chat/blob/master/LICENSE) licensed.
_
