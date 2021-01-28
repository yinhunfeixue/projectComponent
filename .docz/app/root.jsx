import React from 'react'
import { Link, Router, Routes } from 'docz'

import Theme from '/Users/xujunjie/Documents/git/projectComponent/node_modules/docz-theme-umi/es/index.js'

import { imports } from './imports'
import database from './db.json'

const Root = () => {
  return (
    <Theme linkComponent={Link} db={database}>
      <Routes imports={imports} />
    </Theme>
  )
}

export default Root
