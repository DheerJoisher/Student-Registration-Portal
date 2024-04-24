import React from 'react'

export default function Courses() {
  return (
    <>
      <h1 style={{textAlign: 'center',fontFamily:'Arial',fontSize:'50px'}}>Courses</h1>
      
      <div style={containerStyle}>
        {/* Professor 1 */}
        <div style={profileStyle}>
          <img src="https://www.keenesystems.com/hs-fs/hubfs/blog-images/ux-design.jpg?width=900&name=ux-design.jpg" alt="UI/UX" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>UI/UX Design Fundamentals</h1>
          <p>Dive into the world of user interface and user experience design. It defines the experience a user would go through when interacting with a company, </p>
        </div>
      
        <div style={profileStyle}>
          <img src="https://media.licdn.com/dms/image/D4D12AQEi4KnIfPdpYA/article-cover_image-shrink_720_1280/0/1696242059780?e=2147483647&v=beta&t=WwqNNa3gpD7-8KefnNvFEl-Jtg9um5V903FmN9AkZW8" alt="Python" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Introduction to Python Programming</h1>
          <p>Learn the basics of Python programming from scratch. It is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation.</p>
         
        </div>
        <div style={profileStyle}>
          <img src="https://supersourcing.com/blog/wp-content/uploads/2022/03/Flutter-development.png" alt="app dev" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>App Dev with Flatter</h1>
          <p>Build cross-platform mobile apps using the Flutter framework</p>
          
          </div>
        <div style={profileStyle}>
          <img src="https://media.licdn.com/dms/image/D5612AQHbfgoT1MOYgg/article-cover_image-shrink_720_1280/0/1682706007923?e=2147483647&v=beta&t=I1zyAFg-p_PpgnWM0ePp9v-Aj8onktI9_hJpm-IDQMI" alt="cs" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Ethical Hacking and Cybersecurity</h1>
          <p>Learn how to secure systems and networks from cyber attacks</p>
        
        </div>
        <div style={profileStyle}>
          <img src="https://media.opensesame.com/images%2FCourse%203%20-%20Public%20Speaking%20Mastery.jpg?crop=16:9&width=832" alt="public speaking" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Public Speaking Mastery</h1>
          <p>Demonstrating good communication skills and the ability to connect with the audience.</p>
          
          </div>
        <div style={profileStyle}>
          <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/343614112/original/a0cb02605eef4e2a19c52c58d884e97fe436c813/write-indelible-stories-for-you.png" alt="LITERATURE" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Creative Writing Workshop</h1>
          <p>Unlocking your literary imagination</p>
          </div>
        <div style={profileStyle}>
          <img src="https://assets.yousician.com/app/uploads/2021/02/15152144/learn-guitar-1-1000x1000.jpg" alt="GUITAR" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Guitar For Beginners</h1>
          <p>Learning chords and strumming techniques</p>
          
           </div>
        <div style={profileStyle}>
          <img src="https://images.squarespace-cdn.com/content/v1/5f15fab5fd73757ac7d6a1b6/1658932188220-UV7XX9RYNSB013BDV2BQ/Meditation+Stock+Photo.jpg" alt="meditation" style={imageStyle} />
          <h1 style={{ fontSize: '20px', fontWeight: 'bold'}}>Cultivating inner peace and calm</h1>
          <p>It is a practice in which an individual uses a technique – such as mindfulness, or focusing the mind on a particular object, thought, or activity – to train attention and awareness, and achieve a mentally clear and emotionally calm and stable state.</p>
          </div>
          </div>
    </>
)}

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gridGap: '20px',
  padding: '20px',
  backgroundColor: '#faedcd',
};

const profileStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
};

const imageStyle = {
  width: '100%',
  borderRadius: '8px',
  marginBottom: '10px'
};

const linkStyle = {
  textDecoration: 'none',
  color: '#0077b5'
};
 
