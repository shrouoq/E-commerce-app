import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';

import blog1 from '../assets/blog-3.jpg.png';
import blog2 from '../assets/blog-5.jpg.png';
import container from '../assets/Container.png';
import link from '../assets/Link.png';

export default function BlogPage() {
  return (
    <div className="grid grid-cols-12 gap-5 p-6 md:p-15">
      {/* Main Content */}
      <div className="md:col-span-7 col-span-12 space-y-5 pl-14 pr-14">
        {/* Blog Post 1 */}
        <div className="overflow-auto "> <img src={blog1} alt="Blog Post 1"className="w-full h-100 object-cover"/>
          <div className="p-6">
            <p className="text-sm text-gray-500">BREWERY</p>
            <h2 className="text-2xl font-bold mb-2">
              But I must explain to you how all this mistaken idea
            </h2>
            <p className="text-sm text-gray-400 mb-2">Jun 12 2025 . 5 min read</p>
            <p className="text-gray-600">
              Donec finibus quis diam sit amet faucibus. Vivamus pellentesque, sem
              sed convallis ultrices, ante odio laoreet lorem, vitae suscipit
              lorem turpis sit amet lacus. Quisque egestas lorem id mauris
              ultrices…
            </p>
          </div>
        </div>
        {/* Blog Post 2 */}
        <div className="overflow-auto"> <img src={blog2} alt="Pergale Chocolate" className="w-full h-100 object-cover"/>

            <p className="text-sm text-gray-500">BREWERY</p>
            <h2 className="text-2xl font-bold mb-2">
              The Problem With Typefaces on the Web
            </h2>
            <p className="text-sm text-gray-400 mb-2">Jun 12 2025 . 5 min read</p>
            <p className="text-gray-600">
              Donec finibus quis diam sit amet faucibus. Vivamus pellentesque, sem
              sed convallis ultrices, ante odio laoreet lorem, vitae suscipit
              lorem turpis sit amet lacus. Quisque egestas lorem id mauris
              ultrices…
            </p>
          </div>
        </div>
    
      {/* Sidebar */}
      <div className="col-span-12 md:col-span-4 space-y-5 ">
        {/* Recent Posts */}
        <div className=" rounded-lg border border-gray p-5 shadow">
          <h3 className="font-bold text-lg mb-4 ">Recent Posts</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center space-x-2"> <img src={blog1} alt="Recent Post 1" className="w-10 h-10 object-cover rounded-full"/>
        
              <p>But I must explain to you how all this mistaken idea</p>
            </li>
            <li className="flex items-center space-x-2">
              <img src={blog2} alt="Recent Post 2" className="w-10 h-10 object-cover rounded-full"/>
              <p>The Problem With Typefaces on the Web</p>
            </li>
            <li className="flex items-center space-x-2">
              <img src={link} alt="Recent Post 3" className="w-10 h-10 object-cover rounded"/>
              <p>English Breakfast Tea: Tasting and Quality Check</p>
            </li>
          </ul>
        </div>
        {/* Social Media */}
        <div>
          <h3 className="font-blog  text-lg mb-4">Social Media</h3>
            <button  className="w-full bg-blue-600 text-white flex items-center gap-4"><FaFacebookF className='w-[25px]'/>Facebook</button>
            <button className="w-full bg-pink-500 text-white flex items-center gap-4"><FaInstagram className='w-[25px]'/> Instagram</button>
            <button className="w-full bg-sky-400 text-white flex items-center gap-4"><FaTwitter className='w-[25px]'/> Twitter</button>
            <button className="w-full bg-red-600 text-white flex items-center gap-4"><FaYoutube className='w-[25px]'/> Youtube</button>
          </div>
        {/* Widget Banner */}
        <div className="p-4   text-center">
          <img src={container} alt="Widget Banner" className=" w-full h-33 mx-auto mb-4"/>
          <h4 className="font-semibold">Happy Hour</h4>
        </div>
        {/* Tags */}

        <div>
          <h3 className="font-bold text-lg mb-4">Tags</h3>
          <div className="flex flex-wrap gap-2 text-sm">
            {['economics', 'food', 'grocery', 'lifestyle', 'organic', 'recipe', 'startup', 'store'].map(tag => (
              <span key={tag} className="px-3 py-1 bg-gray-100 cursor-pointer hover:bg-gray-200">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
