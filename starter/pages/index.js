import Layout from '../modules/common/components/Layout'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'

import ProdukCard from '../modules/common/components/ProdukCard'

const HomePage = ({ berita }) => {

  const { articles } = berita
  return (
    <Layout>
      <Container maxWidth="sm" >
        <Grid container spacing={2} >
          {articles.map(articles => {
            return (
              <Grid key={articles.title} item xs={12} sm={12} >
                <ProdukCard>
                  urlToImage={articles.urlToImage}
                  title={articles.title}
                  publishedAt={articles.publishedAt}
                  content={articles.content}
                  url={articles.url}
                </ProdukCard>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Layout>
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