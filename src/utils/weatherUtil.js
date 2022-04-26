/**
 A utility function for getting grouped weather data.
 API returns multiple records for each day (every hour).
 Filter it out and show only one record per day
 */
export const getGroupedWeatherData = data => {
  const groupedData = data.list.reduce((days, row) => {
    const date = row.dt_txt.split(' ')[0];
    days[date] = [...(days[date] ? days[date] : []), row];
    return days;
  }, {});
  const weatherData = [];
  for (let date of Object.keys(groupedData)) {
    weatherData.push(groupedData[date][0]);
  }
  data.list = weatherData.slice(0, 4);
  return data;
};
