import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home() {
  return (
    <Layout>
      <h1>home page</h1>

      <StaticImage src="https://placekitten.com/800/600" alt="A kitten" />

    </Layout>
  )
}