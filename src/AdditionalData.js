export const getAdditionalData = (place) => {

  const fourSquare = 'https://api.foursquare.com/v2/venues/'
  const client = 'client_id=FNGCYJA2OJHSB3VMYSGCGD0URU4NUVY2FDAIAGSDQKF3DR0S&client_secret=ZCYCMIWWBWKUOUPT0OPEXS1L5MIJPZKZ0VWSEPYEDWIDKAHR&v=20180807'

//place.query for more accurate result.
  const url = `${fourSquare}search?ll=${place.lat},${place.lng}&${client}&query=${place.query}&limit=1`;

  return fetch(url)

  .catch(error => {

    console.log(`First error log: ${error}`)

  })

  .then(response => response.json())

  .then(data => {

//Get first hit.
    return fetch(`${fourSquare}${data.response.venues[0].id}?${client}`);

  })

  .catch(error => {

    console.log(`Second error log: ${error}`)

  })

  .then(response => response.json())

  .then(data => {

//Get photo itself.
    return {PhotoUrl: data.response.venue.bestPhoto.prefix + '300x300' + data.response.venue.bestPhoto.suffix};

  })

  .catch(error => {

    console.log(`Third error log: ${error}`)

  });
}
