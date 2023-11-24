import SampleImg from '../assets/sample-img.jpg';
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={SampleImg} className='w-96 rounded-lg'/>
        <div>
          <h1 className="text-5xl font-bold">Why Game Harbour?</h1>
          <div className='space-y-4 py-10'>
            <p><strong>🌊 Discover Diverse Horizons:</strong> Explore a rich collection of free-to-play games spanning genres and platforms. From epic adventures to quick pick-up-and-play gems, we've got it all.</p>
            <p><strong>🧭 Navigate with Ease:</strong> Use our user-friendly panel to tailor your gaming journey. Filter games by genre, platform, or dive into curated lists for a shortcut to the finest gaming experiences.</p>
            <h2 className='text-lg'><b>Embark on Your Gaming Odyssey!</b></h2>
            <p>The gaming sea is vast, but fear not! Game Harbour is your lighthouse, guiding you to new and exciting gaming destinations. So, hoist the anchor, set sail, and let the gaming adventures begin!</p>
          </div>
          
          <Link to='/games' className='btn btn-primary'>List of games</Link>
        </div>
      </div>
    </div>
  )
}