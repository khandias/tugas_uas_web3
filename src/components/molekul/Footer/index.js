import React from 'react'
import './footer.scss'
import { Logo, facebook, twitter, instagram, telegram, discord, github } from '../../../assets'

const Icon = ({img}) => {
    return (
        <div className='icon-wrapper'>
            <img className="icon-medsos" src={img} alt='icon'/>
        </div>
    )
}

const Footer = () => {
    return (
      <div>
            <div className='footer'>
                <div>
                    <img className="logo" src={Logo} alt='logo'/>
                </div>
                <div className='social-wrapper'>
                    <Icon img={facebook} />
                    <Icon img={twitter} />
                    <Icon img={instagram} />
                    <Icon img={telegram} />
                    <Icon img={discord} />
                    <Icon img={github} />

                </div>
            </div>
            <div className='copyright'>
               <p>Copyright</p>
            </div>
      </div>
   
  )
}

export default Footer
