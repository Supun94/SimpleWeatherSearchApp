# SimpleWeatherSearchApp
A React-Native mobile app for search last 4 days weather forecasting using Open Weather Search API. [OpenWeatherMap](https://openweathermap.org/api) is a simple and fast and free weather API from OpenWeatherMap you have access to current weather data, hourly, 5- and 16-day forecasts. 
<img width="1153" alt="Screenshot 2022-04-27 at 00 27 58" src="https://user-images.githubusercontent.com/12759418/165372532-17aecb08-a9f5-47c4-a18b-f519c6182e60.png">

# App Setup

1. Clone the repo `https://github.com/Supun94/SimpleWeatherSearchApp.git`
2. Install dependencies `npm install`
3. Open SimpleWeatherSearchApp.xcworkspace in Xcode.
4. Hit Build and test it in the iPhone simulator.

Or you can use `npx react-native start` and `npx react-native run-ios` from the root folder.
(note: if you faced any versioning issues in iOS build better to run `pod install` from `ios` directly).

# API Setup

1. Subscribe to [OpenWeatherMap](https://openweathermap.org/api) and you can get a API key.
2. Your new API key need to add into config.json file ("openweathermap_api_key": "KEY").
3. Since I want to get last 4 days weather forecasting I used `/data/2.5/forecast?` endpoint.

# Key Features

1. App provides an interface to type in a search term (for city name). When the user taps on a search button last 4 days weather forcasting display as a list.
2. Followed Best practices for loading online images(lazy load with `react-native-fast-image`).
3. Hanndled network/device errors.
4. All the components are unit tested and planning to integrate e2e tests suite in the future.
5. Temporary blocked LandscapeLeft and LandscapeRight due to some UI changes. Needs to add an Event Listener for chapturing orientation changes.
