# Delivery App

This project is utilising expo, react native and typescript to create a app for delivery packages. This app will record user packages being delviered or in the process of being delivered. It will also contain a delivery map section to recieve real time data of where the delivery is and how long from the user lcoation the delivery is (time ETA.)

## Dependecies used

This app uses the following dependencies and packages:

```
    - Typescript version 4.9.5 (workspace version is v4.9.5)
    - react-navigation/native
    - expo
    - react-native
    - tailwind-rn
    - Firebase
    - Stepzen
    - GraphQL
```

Once dependencies are installed via `npm install`, to run the app in dev mode, use the commands:

`npm run dev:tailwind`
which enables tailwind styling in the app.

`npx expo start`

### Stepzen setup

- Sign up for a stepzen account and install stepzen via `npm install -g stepzen`

This project runs stepzen in the cloud. If you dont want to create a stepzen account you can run stepzen locally via a docker container. More info at; `https://stepzen.com/docs/quick-start/install-and-setup`

- Login in via `stepzen login`

once logged in, run;
`stepzen start`

Sample data used in the app has been added as a json file. upload this json data in a new firebase real time database.
