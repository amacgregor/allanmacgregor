import React from 'react'
import { replace } from 'gatsby';

class PostHeading extends React.Component {
  render() {
    const headingBlock = (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-8 py-5 px-4 sm:px-5 md:py-5 lg:px-5 lg:py-5">
                <h1 className="text-5xl mt-0 leading-9 font-extrabold tracking-tight text-gray-900 sm:text-5xl sm:leading-10">
                    {this.props.title} 
                <br />
                <span className="text-2xl text-indigo-600">{this.props.subtitle}</span>
                </h1>
                <hr className="m-2"/>
            </div>
        </div>
    )

    return <div>{headingBlock}</div>
  }
}

export default PostHeading