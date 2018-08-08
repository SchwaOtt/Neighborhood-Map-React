export const getAdditionalData = (place) => {

  const fourSquare = 'https://api.foursquare.com/v2/venues/'
  const client = 'client_id=N3KHGI3ICJ0UGT2ZLP3RRRCOYKJX0W5XMX5TSWXMUW2XPWHG&client_secret=LWOBREXOURC1SV1WZKBHQMBSACY1MV5FQFYY0A4ADGIUMYPH&v=20180807'

//place.query for more accurate result.
  const url = `${fourSquare}search?ll=${place.lat},${place.lng}&${client}&query=${place.query}&limit=1`;

  return fetch(url)

    .then(response => response.json())

    .then(data => {

//Get first hit.
    return fetch(`${fourSquare}${data.response.venues[0].id}?${client}`);

  })

  .then(response => response.json())

  .then(data => {

//Get photo itself.
    return {PhotoUrl: data.response.venue.bestPhoto.prefix + '300x300' + data.response.venue.bestPhoto.suffix};

  })

  .catch(error => {

    console.log(error)

  });
}
