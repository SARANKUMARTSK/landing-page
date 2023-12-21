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
      image: "https://photos5.appleinsider.com/gallery/27917-42517-5BCD3CEE-2850-4992-B461-F9414162D3FF-l.jpg",
      title: "Fully Responsive Design",
      para: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!"
    },
    {
      isReverse : true ,
      image: "https://lh3.googleusercontent.com/YiHxHCxngm1kn_yoHW45Utlrgy86ijRJDdnKS2zRgURzi-YgVKOEtNf6AHMNnFGYrmxrmLVxIwdR-gkU4euzV7B3h4vL6V3rLR6e0Fj8uND_MLJes6oT-EzuG5qyVD855qELsnPdJ2Iq0SbA6A",
      title: "Updated For Bootstrap 5",
      para: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!"
    },
    {
      isReverse : false ,
      image: "https://lh4.googleusercontent.com/2bpT2Gc-6X6iMlg-lIucUP_zRHIq8zznn3aVaicckYOqX6EcHWqrh3LYzTgS3uw1yjrJnMil-sAxmAIQ2pC2uxT6oKnVkgHkmolNUp4yNlX9TnpvbcBlwfs0V1EdsP6UyNhv3WBr",
      title: "Easy to Use & Customize",
      para: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!"
    }
  ]
  let testData = [
    {
      img : "https://img.etimg.com/thumb/width-640,height-480,imgsize-58054,resizemode-75,msid-80754620/news/politics-and-nation/vijay-mallya-allowed-some-access-to-uk-court-held-funds-to-meet-legal-living-expenses/mallya.jpg",
      name : "Margaret E.",
      command : "This is fantastic! Thanks so much guys!"
    },
    {
      img : "data:image/jpeg;base64,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",
      name : "Fred S.",
      command : "Bootstrap is amazing. I've been using it to create lots of super nice landing pages."
    },
    {
      img : "https://inc42.com/wp-content/uploads/2023/12/Mukesh-Ambani-Web-760x570.jpg",
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