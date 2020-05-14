import React from "react"
import CTASimple from "./index"

export default {
    component: CTASimple,
    excludeStories: /.*Data$/,
    title: "Call to Action Section",
}

export const CTASimpleData = {
    title: "Sample Title",
    subtitle: "Subtitle"
}

export const Default = () => (
    <CTASimple { ... CTASimpleData} />
)