import { DetailsDiv, SelectionDiv } from 'containers'
import { Header, Footer, TopHeader, ImageSlider } from 'components'
import 'containers/Home/styles.scss'

export const Home = () => (
  <div>
    <TopHeader />
    <Header />
    <div className={'app'}>
      <ImageSlider />
      <DetailsDiv />
      <SelectionDiv />
    </div>
    <Footer />
  </div>
)
