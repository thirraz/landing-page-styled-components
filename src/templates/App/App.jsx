import { MenuLink } from '../../components/MenuLink/MenuLink'
import { GridTwoColumns } from '../../components/GridTwoColumns/GridTwoColumns'
import { GridContent } from '../../components/GridContent/GridContent'
import { GridSection } from '../../components/GridSection/GridSection'
import { GridImage } from '../../components/GridImage/GridImage'
import { Footer } from '../../components/Footer/Footer'
import { GoTop } from '../../components/GoTop/GoTop'
import { useEffect, useState } from 'react'

function Home() {
  return (
    <>
      <MenuLink />
      <GridTwoColumns background />
      <GridContent />
      <GridSection />
      <GridImage />
      <Footer />
      <GoTop />
    </>
  )
}

export default Home
