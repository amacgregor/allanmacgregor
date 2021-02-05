import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
const _ = require('lodash')

const EssayMetadata = ({
  abstract,
  tags,
  updated_at,
  created_at,
  status,
  confidence,
}) => (
  <div id="page-metadata">
    <p className="p-0 m-0" id="topics">
      <strong>Topics:</strong>
      <span className="pl-4" id="tags">
        {tags.map((tag) => {
          return (
            <span className="inline-flex items-center px-3 py-0.5 mr-1 rounded-full text-sm font-medium leading-5 bg-orange-100 text-orange-800">
              <Link to={'/tags/' + _.kebabCase(tag)}>{tag}</Link>
            </span>
          )
        })}
      </span>
    </p>
    <p className="p-0 m-0" id="information">
      <span className="pr-4 font-bold" id="created_at">
        Created:{' '}
        <span className="font-normal nline-flex items-center px-3 py-0.5 rounded-full text-sm leading-5 bg-gray-100 text-gray-800">
          {created_at}
        </span>
      </span>
      <span className="pr-4 font-bold" id="updated_at">
        Updated:{' '}
        <span className="font-normal nline-flex items-center px-3 py-0.5 rounded-full text-sm leading-5 bg-gray-100 text-gray-800">
          {updated_at}
        </span>
      </span>
      <span className="pr-4 font-bold" id="status">
        Status:{' '}
        <span className="font-normal nline-flex items-center px-3 py-0.5 rounded-full text-sm leading-5 bg-gray-100 text-gray-800">
          {status}
        </span>
      </span>
      <span className="pr-4 font-bold" id="confidence">
        Confidence:{' '}
        <span className="font-normal nline-flex items-center px-3 py-0.5 rounded-full text-sm leading-5 bg-gray-100 text-gray-800">
          {confidence}
        </span>
      </span>
    </p>
  </div>
)

export default EssayMetadata
