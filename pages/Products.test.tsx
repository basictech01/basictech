import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ContactProvider, useContact } from '../components/layout/ContactContext'
import Products from './Products'

function Probe() {
  const { isOpen, context } = useContact()
  return <div data-testid="probe">{isOpen ? 'open' : 'closed'}|{context ?? ''}</div>
}

function renderPage() {
  return render(
    <ContactProvider>
      <MemoryRouter>
        <Products />
        <Probe />
      </MemoryRouter>
    </ContactProvider>,
  )
}

describe('Products', () => {
  it('renders the Uniun feature with headline, status, and CTAs', () => {
    renderPage()
    const feature = screen.getByTestId('uniun-feature')
    expect(feature).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Uniun' })).toBeInTheDocument()
    expect(screen.getByText('Live')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /visit uniun\.in/i })).toHaveAttribute('href', 'https://www.uniun.in/')
    expect(screen.getByRole('link', { name: /app store/i })).toHaveAttribute(
      'href',
      'https://apps.apple.com/in/app/uniun/id6778077321',
    )
    expect(screen.getByRole('link', { name: /google play/i })).toHaveAttribute(
      'href',
      'https://play.google.com/store/apps/details?id=in.uniun.app&hl=en_IN',
    )
  })

  it('lists client-proven products with a "Talk to us" enquiry CTA', () => {
    renderPage()
    const grid = screen.getByTestId('product-grid')
    for (const name of ['Searchex', 'Custom Chatbots', 'Demand Forecasting', 'Payroll Studio', 'Inventory Management']) {
      expect(within(grid).getByRole('heading', { level: 3, name })).toBeInTheDocument()
    }
    expect(within(grid).getByRole('link', { name: 'Hetvi Lifesciences Pvt Ltd' })).toHaveAttribute('href', 'https://hetvipharma.com/')
    expect(within(grid).getAllByText('Gopi Steels')).toHaveLength(2)
    const caseStudyHrefs = within(grid).getAllByRole('link', { name: /case study/i }).map((a) => a.getAttribute('href'))
    expect(caseStudyHrefs).toEqual(['/work/payroll-studio', '/work/inventory-management'])
    fireEvent.click(within(grid).getAllByRole('button', { name: /talk to us/i })[0])
    expect(screen.getByTestId('probe')).toHaveTextContent('open|Product enquiry: Searchex')
  })

  it('carousel cycles through the three Uniun pillars', async () => {
    renderPage()
    // Starts on Brahma
    expect(screen.getByText(/Brahma · Create/i)).toBeInTheDocument()

    const nextBtn = screen.getByRole('button', { name: /next screenshot/i })
    fireEvent.click(nextBtn)
    expect(await screen.findByText(/Vishnu · Reflect/i)).toBeInTheDocument()

    fireEvent.click(nextBtn)
    expect(await screen.findByText(/Shiv · Transform/i)).toBeInTheDocument()

    // Wraps back to Brahma
    fireEvent.click(nextBtn)
    expect(await screen.findByText(/Brahma · Create/i)).toBeInTheDocument()
  })
})
