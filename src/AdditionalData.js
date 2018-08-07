export const additionalData = (place) => {

  const fourSquare = 'https://api.foursquare.com/v2/venues/'
  const client = 'client_id=N3KHGI3ICJ0UGT2ZLP3RRRCOYKJX0W5XMX5TSWXMUW2XPWHG&client_secret=LWOBREXOURC1SV1WZKBHQMBSACY1MV5FQFYY0A4ADGIUMYPH&v=20180807'
  const url = `${fourSquare}search?ll=${place.lat},${place.lng}&${client}&limit=1`;

  return fetch(url)

    .then(response => response.json())

    .then(data => {

    const venueId = data.response.venues[0].id;

    return fetch(`${fourSquare}${venueId}?${client}`);

  })

  .then(response => response.json())

  .then(data => {

    const PhotoUrl = data.response.venue.bestPhoto.prefix + '300x300' + data.response.venue.bestPhoto.suffix;

    return {PhotoUrl};

  })

  .catch(error => {

    console.log(error)

  });
}
