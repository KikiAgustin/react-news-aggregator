const HomePage = ({ berita }) => {

  const { articles } = berita
  return (
    <div>
      {
        articles.map(articles => {
          return (
            <p>{articles.title}</p>
          )
        })
      }
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://newsapi.org/v2/everything?q=technology&apiKey=04b5a6d0f25146dfa4e0ecf7016f50ef');
  const berita = await res.json();

  return {
    props: {
      berita
    }
  }
}

export default HomePage;