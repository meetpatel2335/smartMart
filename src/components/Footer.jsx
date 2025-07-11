
const Footer = () => {
  return (
    <footer className="bg-[#f8f8ff] text-[#333] py-10 px-6 md:px-20 text-sm border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Shop Non-Stop on Meesho</h2>
          <p className="text-gray-600 mb-1">Trusted by crores of Indians</p>
          <p className="text-gray-600 mb-4">Cash on Delivery | Free Delivery</p>
          <div className="flex space-x-4">
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-32"
              />
            </a>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-32"
              />
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-semibold mb-2">Careers</h3>
          <p className="mb-2 cursor-pointer hover:underline">Become a supplier</p>
          <p className="mb-2 cursor-pointer hover:underline">Hall of Fame</p>
          <p className="mb-2 cursor-pointer hover:underline">Sitemap</p>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-semibold mb-2">Legal and Policies</h3>
          <p className="mb-2 cursor-pointer hover:underline">Meesho Tech Blog</p>
          <p className="mb-2 cursor-pointer hover:underline">Notices and Returns</p>
          <h3 className="font-semibold mt-4 mb-2">Reach out to us</h3>
          <div className="flex space-x-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145802.png" alt="Facebook" className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" className="w-5 h-5" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" alt="YouTube" className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-600">
            Meesho Technologies Private Limited <br />
            CIN: U62099KA2024PTC186568 <br />
            3rd Floor, Wing-E, Helios Business Park,<br />
            Kadubeesanahalli Village, Varthur Hobli, Outer Ring Road Bellandur,<br />
            Bangalore, Bangalore South, Karnataka, India, 560103
          </p>
          <p className="mt-2">E-mail address: <a href="mailto:query@meesho.com" className="text-blue-600">query@meesho.com</a></p>
          <p className="text-gray-500 mt-1">© 2015-2025 Meesho.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
