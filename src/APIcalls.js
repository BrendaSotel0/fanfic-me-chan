const quoteData = () => {
  return fetch('https://animechan.vercel.app/api/random')
  .then(response => response.json())
}

export default quoteData;