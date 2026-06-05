import Card from '../src/components/card/Card'
import Wcard from '../src/components/Wcard/Wcard'
import '../src/components/card/card.module.css'
import '../src/components/Wcard/Wcard.module.css'
import './App.css'

function App() {
  
const jobOpenings = [
  {
    id: 1,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Mumbai, India"
  },
  {
    id: 2,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    company: "Apple",
    datePosted: "2 weeks ago",
    post: "iOS Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bangalore, India"
  },
  {
    id: 3,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Meta_Platforms_Inc._logo_%28cropped%29.svg/250px-Meta_Platforms_Inc._logo_%28cropped%29.svg.png",
    company: "Meta",
    datePosted: "10 days ago",
    post: "React Developer",
    tag1: "Part-time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Hyderabad, India"
  },
  {
    id: 4,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    company: "Amazon",
    datePosted: "1 week ago",
    post: "Backend Developer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Pune, India"
  },
  {
    id: 5,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    datePosted: "3 weeks ago",
    post: "Full Stack Developer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Delhi, India"
  },
  {
    id: 6,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    company: "Microsoft",
    datePosted: "4 days ago",
    post: "Cloud Engineer",
    tag1: "Full-time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Noida, India"
  },
  {
    id: 7,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/b/bb/Tesla_T_symbol.svg",
    company: "Tesla",
    datePosted: "6 days ago",
    post: "Software Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Chennai, India"
  },
  {
    id: 8,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_Logo.png",
    company: "Adobe",
    datePosted: "8 days ago",
    post: "UI Engineer",
    tag1: "Part-time",
    tag2: "Mid Level",
    pay: "$42/hour",
    location: "Gurgaon, India"
  },
  {
    id: 9,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
    company: "Uber",
    datePosted: "12 days ago",
    post: "Data Engineer",
    tag1: "Full-time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Mumbai, India"
  },
  {
    id: 10,
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg",
    company: "Airbnb",
    datePosted: "2 days ago",
    post: "Frontend Engineer",
    tag1: "Full-time",
    tag2: "Junior Level",
    pay: "$48/hour",
    location: "Remote"
  }
];
  return ( 
    <div className='cards'>
    <Card img="https://imgs.search.brave.com/6HZf6To4YvtQMeiMOCqPjbvuwc2enSAB3Z-6p3WsPuQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE3NjA1NTk5/NDQ4MTctYWUyYWUy/MDI3YmUxP2ZtPWpw/ZyZxPTYwJnc9MzAw/MCZhdXRvPWZvcm1h/dCZmaXQ9Y3JvcCZp/eGxpYj1yYi00LjEu/MCZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE1UZDhm/RzVsZHlVeU1HTnZi/R3hsWTNScGIyNTha/VzU4TUh4OE1IeDhm/REE9  " title="Cloth Wardrobe" desc="Collection of Clothes"
    inside="see inside of wardrobe"/>


  <Card img="https://imgs.search.brave.com/qhAkSS3mhF_MYx_Ml30a_Xia4xOX3-yaHZsK4lZRQtM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/ODg4MDgwNy9waG90/by9waG90b2dyYXBo/cy1vZi13b21hbi1v/bi13aGl0ZS1iYWNr/Z3JvdW5kLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1FQUVR/ckM4VGpYSVJEZFU0/SXJfU0ZON2RLY1VU/amVVdkxNY0lPQXZL/WEpBPQ"
   title="Photography" desc="Model's portfolio" inside="view portfolio"/>

{jobOpenings.map((elem, idx)=>{
       return <div key={idx}>
         <Wcard 
brandLogo = {elem.brandLogo}
       company = {elem.company}
       datePosted = {elem.datePosted} 
       post = {elem.post}
       tag1 = {elem.tag1}
       tag2 = {elem.tag2}
       pay = {elem.pay}
       location = {elem.location}
       />
        </div>
})} 
</div>

  )
}

export default App
