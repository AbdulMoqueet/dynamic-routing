import React from 'react'
import { useRouter } from 'next/router'

const DetailsPage = ({title, desc}) => {
  const router = useRouter()
  return (
    <div style={{color: "#fff", fontSize: "30px"}}>
      Title: {title} <br/>
      Description: {desc} <br/>
      Page_Query: {router.query.details}
    </div>
  )
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          details: "food-1"
        }
      },
      {
        params: {
          details: "food-2"
        }
      },
      {
        params: {
          details: "food-3"
        }
      }
    ]
  }
}

export async function getStaticProps() {

  return {
    props: {
      title: "Some Title",
      desc: "Some Description"
    },
  }
}

export default DetailsPage