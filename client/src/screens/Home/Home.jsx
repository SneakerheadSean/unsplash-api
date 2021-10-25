import './Home.css'
import ProductCards from '../../components/ProductCards/ProductCards'
import Layout from '../../components/Layout/Layout'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <ProductCards />
      </div>
    </Layout>
  )
}

export default Home