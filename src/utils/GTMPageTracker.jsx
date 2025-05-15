import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GTMPageTracker = () => {
  const location = useLocation()

  useEffect(() => {
    const path = location.pathname

    const pageMap = {
      '/': { event: 'home_view', title: 'Home' }
      // '/for-merchant': { event: 'for_merchant_view', title: 'For Merchant' },
      // '/deals': { event: 'deals_view', title: 'Deals' },
      // '/pricing': { event: 'pricing_view', title: 'Pricing' },
      // '/doc': { event: 'doc_view', title: 'Doc' },
      // '/blog': { event: 'blog_view', title: 'Blog' },
      // '/view-demo': { event: 'view_demo_view', title: 'View Demo' },
      // '/try-for-free': { event: 'try_for_free_view', title: 'Try for Free' }
    }

    const page = pageMap[path] || { event: 'page_view', title: 'Unknown Page' }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: page.event,
      page_path: path,
      page_title: page.title
    })
  }, [location])

  return null
}

export default GTMPageTracker
