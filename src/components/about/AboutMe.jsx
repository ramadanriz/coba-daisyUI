import { aboutContents } from '../../constant'
import heroImg from '../../assets/real-face.jpg'
import Avatar from '../Avatar'
import SectionTitle from '../SectionTitle'

const AboutMe = () => {
  return (
    <div className="hero">
      <div className="hero-content p-0 flex-col lg:flex-row-reverse">
        <Avatar className="w-48 h-48 rounded-full">
          <img src={heroImg} alt="me" />
        </Avatar>
        <div className="space-y-2 text-center md:text-left">
          <SectionTitle>About Me</SectionTitle>
          {aboutContents.map((content, index) => (
            <p
            className='text-justify dark:text-gray-200 text-light-fg-secondary'
            key={index}
            >
            {content}
            </p>
          ))}
        </div>
      </div>
    </div>

    // <div className='flex items-center flex-col-reverse gap-8 md:flex-row md:gap-16 mt-2'>
    //     <div className='space-y-4 md:w-4/6'>
    //         <SectionTitle>About Me</SectionTitle>
    //         {aboutContents.map((content, index) => (
    //             <p
    //             className='text-justify dark:text-gray-200 text-light-fg-secondary'
    //             key={index}
    //             >
    //             {content}
    //             </p>
    //         ))}
    //     </div>
            
    //     <Avatar >
    //         <img src={heroImg} alt="me" />
    //     </Avatar>
    // </div>
  )
}

export default AboutMe