import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GTMPageTracker = () => {
  const location = useLocation()

  useEffect(() => {
    // Ensure dataLayer exists
    window.dataLayer = window.dataLayer || []

    const path = location.pathname
    const pageMap = {
      '/': { event: 'home_view', title: 'Home' },
      '/pricing': { event: 'pricing_view', title: 'Pricing' },
      '/for-merchant': { event: 'for_merchant_view', title: 'For Merchant' },
      '/deals': { event: 'deals_view', title: 'Deals' },
      '/contact-us': { event: 'contact_us_view', title: 'Contact Us' },
      '/checkout': { event: 'checkout_view', title: 'Checkout' },
      '/confirmation': { event: 'confirmation_view', title: 'Confirmation' },
      '/privacy-policy': {
        event: 'privacy_policy_view',
        title: 'Privacy Policy'
      }
    }

    const page = pageMap[path] || {
      event: 'page_view',
      title: `Unknown Page: ${path}`
    }

    // Push to dataLayer
    window.dataLayer.push({
      event: page.event,
      page_path: path,
      page_title: page.title
    })
  }, [location])

  return null
}

export default GTMPageTracker
