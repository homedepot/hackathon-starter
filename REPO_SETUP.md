# Repo Setup for Hackathon Starter
This document will hopefully guide you through setting this repo up for your project and makes a few assumptions on where the deployment location, ci/cd pipeline, and front-end/back-end languages. If you find an problem with this guide, please create an [issue](https://github.com/homedepot/hackathon-starter/issues). 

## Assumptions

- This project is being deployed to Google App Engine.
- This project will use Travis-CI. 
- This project will record code coverage at [CodeCov](https://codecov.io)
- This project uses MongoDB for its database. 
- The user following this guide has access to all the neccessary resources to administrate these services. 

## Setup Repository

- TODO

## Setup GAE Keys

An active Google App Engine account is required for the deployment. Travis will deploy two applications, one for UI and one for API to this app engine account and requires a service account to accomplish this task. 

1. Go to the [Service Accounts](https://console.cloud.google.com/iam-admin/serviceaccounts) page and click `+ CREATE SERVICE ACCOUNT`
2. Name your service account logically and give it a service account id/description. 
3. Give the service account the following roles and click continue: 
   1. App Engine Deployer
   2. App Engine Service Admin
   3. App Engine flexible environment Service Agent
   4. Storage Object Creator
   5. Storage Object Viewer
4.  Create and save a JSON-type key for the service account. 
    1.  Save this key in a safe place for later. 

## Setup MongoDB Atlas

We use MongoDB Atlas for our example deployment. Essentially you need a MongoDB server to which you can create a database and user credential set for the project. Below is how to setup with MongoDB atlas for your deployment. 

1. Create and account with [MongoDB Atlas Cloud](https://www.mongodb.com/download-center)
2. Once in your account, click `Build a New Cluster` in the top right of the `Atlas -> Clusters` page.
   1. You will want to select an `M0` instance in `Iowa (us-central1)` as it will be free to start.
3. When your cluster has been created, go to `Collections` tab of your cluster to create a new collection for the application. 
4. To create an app acount for the new collection:
   1.  Start with going to `Security -> Database Access` in the left hand navigation.
   2.  Navigate to the `MongoDB Roles` tab and click `+ ADD NEW CUSTOM ROLE`
   3.  Name the role and grant `Database Actions and Roles -> Built-in Roles -> readWrite` to your newly created database.
   4.  Navigate back to the `MongoDB Users` tab and click `+ ADD NEW USER`
   5.  Name the user, generate or enter a password and select the custom role we just made. 
5. Save the Username/Password and Cluster/Database names from the previous step in a safe place for later. 

## Setup CodeCov

- TODO

## Setup Travis

- TODO
