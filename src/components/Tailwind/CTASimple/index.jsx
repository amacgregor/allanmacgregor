import React from 'react'
import { replace } from 'gatsby';

class CTASimple extends React.Component {
  render() {
    const ctaBlock = (
        <div className="bg-white">
            <div className="max-w-screen-xl mx-8 py-5 px-4 sm:px-5 md:py-5 lg:px-5 lg:py-5">
                <h2 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                    {this.props.title} 
                <br />
                <span className="text-indigo-600">{this.props.subtitle}</span>
                </h2>
                <hr className="m-2"/>
            </div>
        </div>
    )

    return <div>{ctaBlock}</div>
  }
}

export default CTASimple