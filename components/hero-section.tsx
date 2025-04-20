import Image from "next/image"

const HeroSection = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our Amazing Website</h1>
        <p className="text-lg text-gray-700 mb-8">Discover the best products and services we have to offer.</p>
        <Image
          src="/hero-image.jpg" // Replace with your image path
          alt="Hero Image"
          width={800}
          height={400}
          className="mx-auto rounded-lg shadow-md"
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Learn More
        </button>
      </div>
    </section>
  )
}

export default HeroSection
