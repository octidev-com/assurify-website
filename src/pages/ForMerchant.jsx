import { Helmet } from 'react-helmet'
import TopBg from '../component/Common/TopBg'
import ForMerchantSection from '../component/ForMerchant/ForMerchantSection'

const ForMerchant = () => {
  return (
    <>
      <Helmet>
        <title>Assurify | For Merchant</title>
      </Helmet>
      <TopBg>
        <div className='pt-[32px] md:pt-[56px]'>
          <ForMerchantSection />
        </div>
      </TopBg>
    </>
  )
}

export default ForMerchant
