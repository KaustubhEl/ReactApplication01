import React from 'react'
import Card from './Components/Card.jsx'
import NavBar from './Components/NavBar.jsx'
import './index.css'


const App = () => {
   var dataSample = [
  {
    "name": "Alice Johnson",
    "summary": "I am a full-stack developer passionate about building scalable web applications with React and Node.js.",
    "likes": 124,
    "posts": 45,
    "views": 5600,
    "imgSrc": "./src/assets/User1.png"
  },
  {
    "name": "Michael Chen",
    "summary": "I am a UI/UX designer who loves creating intuitive and accessible digital experiences for mobile users.",
    "likes": 89,
    "posts": 22,
    "views": 3200,
    "imgSrc": "./src/assets/User2.png"
  },
  {
    "name": "Sarah Williams",
    "summary": "I am a data scientist engaged in solving complex problems using Python and Machine Learning models.",
    "likes": 21,
    "posts": 15,
    "views": 8500,
    "imgSrc": "./src/assets/User3.png"
  },
  {
    "name": "David Miller",
    "summary": "I am a DevOps engineer focused on automating deployment pipelines and cloud infrastructure management.",
    "likes": 65,
    "posts": 88,
    "views": 1200,
    "imgSrc": "./src/assets/User4.png"
  },
  {
    "name": "Emily Davis",
    "summary": "I am a software engineer who enjoys working with AI integration and natural language processing tools.",
    "likes": 34,
    "posts": 120,
    "views": 15400,
    "imgSrc": "./src/assets/User5.png"
  },
  {
    "name": "James Wilson",
    "summary": "I am a mobile developer specializing in Flutter and Swift for cross-platform application development.",
    "likes": 42,
    "posts": 30,
    "views": 2100,
    "imgSrc": "./src/assets/User6.png"
  },
  {
    "name": "Jessica Taylor",
    "summary": "I am a product manager helping teams streamline their agile workflows and deliver value to customers.",
    "likes": 98,
    "posts": 55,
    "views": 4300,
    "imgSrc": "./src/assets/User7.png"
  },
  {
    "name": "Robert Brown",
    "summary": "I am a cybersecurity analyst dedicated to securing network infrastructures and preventing data breaches.",
    "likes": 15,
    "posts": 62,
    "views": 6700,
    "imgSrc": "./src/assets/User8.png"
  },
  {
    "name": "Linda Martinez",
    "summary": "I am a frontend specialist who loves crafting pixel-perfect interfaces using Tailwind CSS and Vue.js.",
    "likes": 27,
    "posts": 95,
    "views": 9800,
    "imgSrc": "./src/assets/User9.png"
  },
  {
    "name": "Thomas Anderson",
    "summary": "I am a blockchain developer interested in smart contracts and decentralized finance applications.",
    "likes": 11,
    "posts": 40,
    "views": 5100,
    "imgSrc": "./src/assets/User10.png"
  }
]
return (
        <> 
    <div className='Container'>
        {dataSample.map(function(props, index){
            return <div key={index}> 
            <Card name={props.name} summary={props.summary} numLikes={props.likes} posts={props.posts} numViews={props.views} imgSrc={props.imgSrc}/>

            </div>
        })}
      </div>
    </>
  )
}

export default App
