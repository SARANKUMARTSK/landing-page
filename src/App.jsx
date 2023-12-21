import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'
import Content from './components/Content';
import Testimonial from './components/Testimonial';
import Call from './components/Call';
import Footer from './components/Footer';


function App() {
  let cardData = [
    {
      icon: "bi-window",
      heading: "Fully Responsive",
      content: "This theme will look great on any device, no matter the size!"
    },
    {
      icon: "bi-layers",
      heading: "Bootstrap 5 Ready",
      content: "Featuring the latest build of the new Bootstrap 5 framework!"
    },
    {
      icon: "bi-terminal",
      heading: "Easy to Use",
      content: "Ready to use with your own content, or customize the source files!"
    }
  ]
  let contentData = [
    {
      isReverse : false ,
      image: "./src/components/img/img2.jpg",
      title: "Fully Responsive Design",
      para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      isReverse : true ,
      image: "./src/components/img/img3.jpg",
      title: "Updated For Bootstrap 5",
      para: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      isReverse : false ,
      image: "./src/components/img/img4.jpg",
      title: "Easy to Use & Customize",
      para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]
  let testData = [
    {
      img : "./src/components/img/img5.jpg",
      name : "Margaret E.",
      command : "This is fantastic! Thanks so much guys!"
    },
    {
      img : "./src/components/img/img6.jpg",
      name : "Fred S.",
      command : "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      img : "./src/components/img/img7.jpg",
      name : "Sarah W.",
      command : "Thanks so much for making these free resources available to us!"
    }
  ]

  return <>
  
    <Navbar />
    <Header />
    {/* Card Component */}
    <section className="features-icons bg-light text-center">
      <div className="container">
        <div className="row">
          {
            cardData.map((e, i) => {
              return <Card cardData={e} key={i} />
            })
          }
        </div>
      </div>
    </section>
    {/* Content Component  */}
    <section className="showcase">
      <div className="container-fluid p-0">
        {
          
          contentData.map((e,i)=>{
            return <Content contentData={e} key={i}/>
          })
        }
      </div>
    </section>
    {/* Testimonial Component */}
    <section className="testimonials text-center bg-light">
      <div className="container">
        <h2 className="mb-5">What people are saying...</h2>
        <div className="row">
        {
          testData.map((e,i)=>{
            return <Testimonial testData={e} key={i}/>
          })
        }
        </div>
      </div>
    </section>
    <Call/>
    <Footer/>
  </>
}

export default App