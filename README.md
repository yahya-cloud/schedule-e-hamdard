<!-- PROJECT LOGO -->
<br />
<p align="center">

  <strong>
    <h1 align="center" >Schedule-e-Hamdard</h1>
  </strong>
  
  <p align="center">
    <strong>
      Class Scheduler for Jamia Hamdard University
    </strong>
    <br />
    <a href="https://github.com/yahya-cloud/schedule-e-hamdard"><strong>Explore the project »</strong></a>
    <br />
    <br />
    <a href="https://main--taupe-wisp-7f5ba2.netlify.app">View Demo</a>
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
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#setting-up-frontend">Setting up Frontend</a></li>
        <li><a href="#setting-up-backend">Setting up Backend</a></li>
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

- A SAAS product for staff, teacher and students. Where faculty member can assign classes to teachers, teachers can schedule sessions for assigned classes and students can keep track of upcoming sessions  

---

### Demonstration 


![demonstration](https://user-images.githubusercontent.com/59670962/177033313-0f86b9e7-b955-4f4b-b9b1-5abcc3cc046c.png)


### Schedeul-e-Hamdard
![schedule](https://user-images.githubusercontent.com/59670962/177036057-6eeaa60e-70fb-4d7f-8018-6cf49cda622e.png)
 
|      Teachers            |       Students           |
| :---------------------:  | :----------------------: |
|![teachers](https://user-images.githubusercontent.com/59670962/177036171-6772caa2-1df8-4510-8dd6-636e3aec1705.png) |![students](https://user-images.githubusercontent.com/59670962/177036213-782b78b8-dbd8-4f5b-bc56-129af316b5ba.png) |


|      All Staff           |       Single Staff         |
| :---------------------:  | :----------------------:   |
|![staff](https://user-images.githubusercontent.com/59670962/177048059-8991a5c2-8cc0-40e4-9560-9a2c0c2dfacf.png) |![single-staff](https://user-images.githubusercontent.com/59670962/177048344-087d7412-b853-437f-8323-8e7710f07cd5.png) |


|      Batches             |       Sections           |
| :---------------------:  | :----------------------: |
| ![batches](https://user-images.githubusercontent.com/59670962/177048157-b130f3b1-fade-42b1-9e7a-a23811f9b183.png) | ![sections](https://user-images.githubusercontent.com/59670962/177048231-c2e67b0e-3287-4357-8f74-912e6d243268.png) |


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

To setup the frontend of application navigate to '/frontend/example.env', you will see the below given code,

```sh
REACT_APP_ALGORITHM = String encrypt/decrypt algo
REACT_APP_IV_LENGTH = Cipher initialization vector
REACT_APP_ENCRYPTION_KEY = Encryption key for example 'this is key'
REACT_APP_SERVER_URL = Server URL default is http://localhost:4000/v1
```


as this web-app usses [Crypto](https://cryptojs.gitbook.io/docs/) the first three variables are required to decypt/encrypt the string using [crypto](https://cryptojs.gitbook.io/docs/). Create new file in frontend folder name it ".env", copy paste the content of "exapmle.env" to ".env". <strong>Please make sure ALGORITHM, IV_LENGTH, ENCRYPTION_KEY are same as .env vars in backend</strong>.


### Setting up Backend

This web-app uses [MongoDB](https://www.mongodb.com/cloud/atlas/lp/try2-in?utm_source=google&utm_campaign=gs_apac_india_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624347&adgroup=115749713423&gclid=CjwKCAjw_ISWBhBkEiwAdqxb9ncTAxa9lxC0XmDJgnSd8gm4hy5RFCV90PWur3538R68wQp_5MH6HBoCcgwQAvD_BwE) as its database, so as to setup the backend you need to have mongodb account and cluster. Follow these guide to setup the MongoDB account and cluster. [Signup for MongoDB account](https://www.mongodb.com/docs/guides/atlas/account/), [Setup MongoDB cluster](https://www.mongodb.com/docs/guides/atlas/cluster/)

After setting up the cluster white list your IP address and generate a connection url. To whitelist your Ip address and genrate connection url follow these guide's [Whitelist your Ip address](https://www.mongodb.com/docs/atlas/security/add-ip-address-to-list/), [MongoDB Connection URL](https://www.mongodb.com/docs/guides/atlas/connection-string/) 

Now to setup the enviorment variables for backend navigate to '/backend/example.env', you will see the below given code.

```sh
  ALGORITHM = string encrypt/decrypt algo
  IV_LENGTH = initialization vector
  ENCRYPTION_KEY = encryption key for example 'this is key'
  PORT = 4000
  JWT_SECRET = any unique string
  CONNECTION_URL = MongoDB account connection url
  CLIENT_URL = Client URL default is http://localhost:3000
```


As this web-app usses [Crypto](https://cryptojs.gitbook.io/docs/) the first three variables are required to decypt/encrypt the string using [crypto](https://cryptojs.gitbook.io/docs/). Create new file in backend folder name it ".env", copy paste the content of "exapmle.env" to ".env". <strong>Please make sure ALGORITHM, IV_LENGTH, ENCRYPTION_KEY are same as .env vars in frontend</strong>.


## Roadmap

See the [open issues](https://github.com/yahya-cloud/schedule-e-hamdard/issues) for a list of proposed features (and known issues).

### Future Goals

- [ ] Feature to add multiple students and teachers in database by reading excel file   
- [ ] Enhancing the login page
- [ ] Add feature to export teacher table and student table as excel sheet.
- [ ] Add group chat feature for every section.
- [ ] Add option to upload photo while saving teachers and students 
- [ ] Feature to update teacher, schedule, and student as of now we can only add and delete them  
- [ ] Add option to delete Batch, so when we delete batch all sections in that Batch and all students inside each section should also get delted from database 
- [ ] Add caching using react query/rtk query in frontend and redis/node-cache in backend
- [ ] Write Unit Test

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Refer to this [article](https://medium.com/geekculture/a-quick-guide-to-create-a-pull-request-on-github-80fc081b8a80) if you have any difficulty in making pull request


# Contact

Mohd. Yahya - yahya01work@gmail.com , [mohammadyahya.in](https://mohammadyahya.in) 

Project Link: https://main--taupe-wisp-7f5ba2.netlify.app

---

## Acknowledgements

- [react-hook-form](https://react-hook-form.com/)
- [crypto-js](https://www.npmjs.com/package/crypto-js/)
- [mui](https://mui.com/)
- [emotion](https://emotion.sh/)
- [full-calendar](https://fullcalendar.io/)
- [mongoose](https://mongoosejs.com/)
- [Heroku](https://www.heroku.com/)
- [Netlify](https://www.netlify.com/)
- [axios](https://www.npmjs.com/package/axios)
- [Best-README-Template](https://github.com/othneildrew/Best-README-Template)


