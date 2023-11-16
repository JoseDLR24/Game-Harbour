import SampleImg from '../assets/sample-img.jpg';
import { Link } from 'react-router-dom'

export default function About(){
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <img src={SampleImg} className='w-96 rounded-lg'/>
        <div>
          <h1 className="text-5xl font-bold">About Page!</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <Link to='/games' className='btn btn-primary'>List of games</Link>
        </div>
      </div>
    </div>
  )
}