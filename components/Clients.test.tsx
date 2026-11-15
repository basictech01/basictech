import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Clients } from './Clients'

describe('Clients', () => {
  it('links clients to case studies or their websites, and shows unlinked clients as plain tiles', () => {
    render(
      <MemoryRouter>
        <Clients />
      </MemoryRouter>,
    )
    expect(screen.getByRole('link', { name: /quality care clinics/i })).toHaveAttribute('href', '/work/quality-care-clinics')
    const wiseflow = screen.getByRole('link', { name: /wiseflow ai/i })
    expect(wiseflow).toHaveAttribute('href', 'https://wiseflowai.eu/')
    expect(wiseflow).toHaveAttribute('target', '_blank')
    expect(screen.getByRole('heading', { name: 'Gopi Steels' }).closest('a')).toBeNull()
  })
})
