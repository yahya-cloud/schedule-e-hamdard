<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/yahya-cloud/schedule-e-hamdard">
    <img src="frontend/src/assets/images/logo.png" alt="Logo" width="256" height="256">
  </a>

  <strong>
    <h3 align="center" >Schedule-e-Hamdard</h3>
  </strong>
  <p align="center">
    <strong>
      Class Scheduler for Jamia Hamdard
    </strong>
    <br />
    <a href="https://github.com/yahya-cloud/schedule-e-hamdard"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="/">View Demo</a>
    ·
    <a href="https://github.com/yahya-cloud/schedule-e-hamdard/issues">Report Bug</a>
    ·
    <a href="https://github.com/yahya-cloud/schedule-e-hamdard/issues">Request Feature</a>
  </p>
</p>

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#demonstration">Demonstration</a></li>
        <li><a href="#application-Flow">Application Flow</a></li>
         <li><a href="#Photos">Demonstration</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#installation">Setting up Database</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>


## About The Project

- As of now <strong>Jamia hamdard University</strong>, teachers doesn't have any medium to schedule classes else than whatsapp. Everything is done on whatsapp groups, for every subject there is a seprate whatsapp group. Which results in creation of multiple group's every semester, teachers have to remember all the sessions they have to take throught the day and are often in confusion at what time to schedule session for a class, if the class is free at that time or not which results in redundant conversation on whatsapp groups.    

- A SAAS product for staff, teacher and students of where faculty member can assign classes to teachers, teachers can schedule sessions for assigned classes and students can keep track of upcoming sessions  

---

### Demonstration 


![demonstration](https://user-images.githubusercontent.com/59670962/177033313-0f86b9e7-b955-4f4b-b9b1-5abcc3cc046c.png)


### Schedeul-e-Hamdard
![schedule](https://user-images.githubusercontent.com/59670962/177036057-6eeaa60e-70fb-4d7f-8018-6cf49cda622e.png)

|      Teachers        |       Students         |
| :---------------------:  | :----------------------: |
|![teachers](https://user-images.githubusercontent.com/59670962/177036171-6772caa2-1df8-4510-8dd6-636e3aec1705.png) |![students](https://user-images.githubusercontent.com/59670962/177036213-782b78b8-dbd8-4f5b-bc56-129af316b5ba.png) |

|      All Staff       |       Single Staff         |
| :---------------------:  | :----------------------: |
|![Screenshot 2022-07-03 at 16-32-36 React App](https://user-images.githubusercontent.com/59670962/177036641-c3aa1b22-86b7-46c6-a596-488a53ba7d48.png)
|![students](https://user-images.githubusercontent.com/59670962/177036213-782b78b8-dbd8-4f5b-bc56-129af316b5ba.png) |

|      Batches       |       Sections         |
| :---------------------:  | :----------------------: |
|![batches](https://user-images.githubusercontent.com/59670962/177036528-ad40b41a-47e4-4ade-9a7b-ab4116da1e41.png)
|![sections](https://user-images.githubusercontent.com/59670962/177036573-a390a844-22ff-44a5-9735-60f66c7646f3.png) |

---

### Built With

- [React](https://reactjs.org/docs/getting-started.html)
- [NodeJS](https://material-ui.com/getting-started/installation/)

Written in TypeScript ♥

## Getting Started

Follow the instructions to set up the project on your local machine.

### Prerequisites

Install [NodeJS LTS](https://nodejs.org/en/)

- npm

  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Fork the repo(required), a star is also appretiated but optional :P

2. Clone the forked repo

   ```sh
   git clone https://github.com/{your-github-username}/schedule-e-hamdard.git
   ```

   example : `git clone https://github.com/yahya-cloud/schedule-e-hamdard.git`

3. Install NPM packages

   ```sh
   npm run install-modules
   ```

4. Start the react and nodejs server concucrrently

   ```sh
   npm run dev
   ```
   
### Setting up Frontend

To setup the frontend of application navigate to '/frontend/example.env', you will see the below given code which are the enviorment variable for frontend, as this web-app usses [Crypto](https://cryptojs.gitbook.io/docs/) the first three 
to decypt the string using [crypto](https://cryptojs.gitbook.io/docs/) <strong>Please make sure ALGORITHM, IV_LENGTH, ENCRYPTION_KEY are same as .env vars in backend</strong>.

<ul>
     <li>REACT_APP_ALGORITHM: Algorithim that is used to decrpt the string using crypto </li>
     <li>REACT_APP_IV_LENGTH: Initialization vector for crypto cipheriv</li>
     <li>REACT_APP_ENCRYPTION_KEY: Any unique string</li>
     <li>REACT_APP_SERVER_URL: Server url</li>
</ul>

After setting up the enviorment vars rename example.env to .env

### Setting up Backend
This web-app uses [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2-in?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347&adgroup=115749713423&gclid=CjwKCAjw_ISWBhBkEiwAdqxb9ncTAxa9lxC0XmDJgnSd8gm4hy5RFCV90PWur3538R68wQp_5MH6HBoCcgwQAvD_BwE) as its database, so as to setup the backend you need to have mongodb account, cluster. Follow these guide to setup the MongoDB account and cluster. [Signup for MongoDB account](https://www.mongodb.com/docs/guides/atlas/account/), [Setup MongoDB cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)

After setting up the cluster white list your IP adress. To whitelist your Ip address follow this guide [Whitelist your Ip address](https://www.mongodb.com/docs/atlas/security/add-ip-address-to-list/) 

Now to setup the enviorments variables backend navigate to '/backend/example.env',you will see the below given code which are the enviorment variable for frontend, as this web-app usses [Crypto](https://cryptojs.gitbook.io/docs/) the first three to decypt the string using [crypto](https://cryptojs.gitbook.io/docs/) <strong>Please make sure ALGORITHM, IV_LENGTH, ENCRYPTION_KEY are same as .env vars in frontend</strong>.

<ul>
     <li>ALGORITHM: Algorithim that is used to decrpt the string using </li>
     <li>IV_LENGTH: Initialization vector for crypto cipheriv</li>
     <li>ENCRYPTION_KEY: Any unique string</li>
     <li>PORT: express server port number </li>
     <li>CONNECTION_URL = MongoDB account connection url follow this <a href='https://www.mongodb.com/docs/guides/atlas      /connection-string/'>guide</a> to genrate connection URL </li>
     <li>JWT_SECRET: Any unique string</li>
     <li>CLIENT_URL: Client url default is http://localhost:3000</li>
</ul>


