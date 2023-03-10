import React from 'react'

import { createRoot } from 'react-dom/client'
import { OmniSearchApp } from './OmniSearch.mjs'

import './admin.scss'

function getConfig() {
  const el = document.getElementById('djangomni-search')
  if (el) {
    return JSON.parse(el.dataset.config)
  }
  return null
}

function mountToHeader() {
  const header = document.getElementById('branding')
  const config = getConfig()
  if (header && config) {
    header.innerHTML = ''
    const reactRoot = createRoot(header)
    reactRoot.render(<OmniSearchApp config={config} />)
  } else {
    console.warn('Django Admin Omni Search did not find the header branding')
  }
}

document.addEventListener('DOMContentLoaded', mountToHeader)
