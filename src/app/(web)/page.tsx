import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <section className="text-center py-20">
        <h1 className="text-4xl font-bold">Easily Create Custom Countdowns</h1>
        <p className="text-xl mt-4 mb-8">A free tool to countdown to your significant events in style.</p>
        <Link href={'/my-countdowns/add'} className="btn btn-primary">Create Your Countdown</Link>
      </section>

      <section className="container mx-auto text-center py-20">
        <h2 className="text-3xl font-bold mb-10">Main Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* <div className="feature">
            <h3 className="text-xl font-bold">Fully Customizable</h3>
            <p>Adjust fonts, colors, and styles to match your event's theme.</p>
          </div> */}
          <div className="feature">
            <h3 className="text-xl font-bold">Easy to Use</h3>
            <p>Create your countdown with our user-friendly interface in minutes.</p>
          </div>
          <div className="feature">
            <h3 className="text-xl font-bold">Share with the World</h3>
            <p>Easily share your countdowns on social media or embed them on your site.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-800 text-gray-300 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Coming Soon</h2>
          <p className="text-lg text-center mb-12">Exciting new features are on the way! Stay tuned for updates.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Color Customization</h3>
              <p>Personalize your countdowns with an array of color schemes to match your style or event theme.</p>
            </div>
            <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Various Styles</h3>
              <p>Choose from multiple design styles to make your countdown stand out and captivate your audience.</p>
            </div>
            <div className="feature-card bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Integration Capabilities</h3>
              <p>Integrate your countdowns seamlessly with other platforms and services for enhanced functionality.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
