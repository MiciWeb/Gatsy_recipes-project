import React from 'react'
import AllRecipes from '../components/AllRecipes'
import Layout from '../components/Layout'

export const Recipes = () => {
    return (
        <Layout>
            <main className="page">
                <AllRecipes />
            </main>
        </Layout>
    )
}

export default Recipes