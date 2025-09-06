  import about from "../assets/about-header.jpg.png";
  import ceo from "../assets/about-people.jpg.png";

  export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full h-100">
        <img src={ about} alt="About Banner"className="w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">About for Bacola</h1>
          <p className="text-lg mt-2">We can do more for you</p>
        </div>
      </div>
      {/* Intro Text */}
      <div className="max-w-5xl mx-auto py-12 px-6 text-gray-700 space-y-6">
        <p>
          In nec porta augue arcu accumsan facilisis. Duis condimentum elit
          ultricies convallis laoreet. Donec eget lacus dictum, tincidunt mi
          efficitur, consectetur quam erat. Nullam in rutrum. Aliquam rhoncus
          nisl eu finibus dapibus. Nam et risus lectus. Praesent volutpat nunc
          quis dolor egestas, tristique eu est facilisis. Vestibulum sit amet
          bibendum sapien. Ut ut risus luctus turpis placerat blandit. Duis
          hendrerit neque sit amet velit vehicula, at vulputate lacus varius.
        </p>
        <h2 className="text-2xl font-bold">
          Quisque erat urna, congue et libero in eleifend euismod velit.
        </h2>
        <p>
          In nec porta augue arcu accumsan facilisis. Duis condimentum elit
          ultricies convallis laoreet. Donec eget lacus dictum, tincidunt mi
          efficitur, consectetur quam erat. Nullam in rutrum. Aliquam rhoncus
          nisl eu finibus dapibus. Nam et risus lectus. Praesent volutpat nunc
          quis dolor egestas, tristique eu est facilisis. Vestibulum sit amet
          bibendum sapien. Ut ut risus luctus turpis placerat blandit. Duis
          hendrerit neque sit amet velit vehicula, at vulputate lacus varius.
        </p>
      </div>
      {/* CEO Section */}
      <div className="max-w-4xl mx-auto py-12 px-5 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <img src={ ceo } alt="CEO" className="w-100 h-100 object-contain"/>
        </div>
        <div className="space-y-4 text-gray-700">
          <p className="text-sm text-gray-500">Rachel Leonard · Bacola CEO</p>
          <h3 className="text-2xl font-bold">
            Duis convallis luctus pretium. Pellentesque habitant morbi
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Integer feugiat scelerisque varius morbi enim nunc. Vulputate dignissim
            suspendisse in est ante in nibh mauris cursus. Diam maecenas sed enim
            ut sem viverra aliquet eget sit. Facilisis magna etiam tempor orci eu.
            Ut sem nulla pharetra diam sit amet nisl suscipit adipiscing.
          </p>
        </div>
      </div>
      {/* Footer Paragraph */}
      <div className="max-w-5xl mx-auto pb-16 px-6 text-gray-700 space-y-6">
        <p>
          In nec porta augue arcu accumsan facilisis. Duis condimentum elit
          ultricies convallis laoreet. Donec eget lacus dictum, tincidunt mi
          efficitur, consectetur quam erat. Nullam in rutrum. Aliquam rhoncus
          nisl eu finibus dapibus. Nam et risus lectus. Praesent volutpat nunc
          quis dolor egestas, tristique eu est facilisis. Vestibulum sit amet
          bibendum sapien. Ut ut risus luctus turpis placerat blandit. Duis
          hendrerit neque sit amet velit vehicula, at vulputate lacus varius.
        </p>
      </div>
    </div>
  );
}
