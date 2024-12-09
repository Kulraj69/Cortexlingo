import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cortex Lingo</title>
        <meta name="description" content="Revolutionizing language learning with AI-driven insights." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-gray-50 text-gray-800">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cortex Lingo</h1>
            <p className="text-lg md:text-2xl mb-6">
              Revolutionizing language learning with AI-driven insights.
            </p>
            <a
              href="#features"
              className="bg-white text-blue-600 font-semibold py-2 px-6 rounded shadow hover:bg-gray-100"
            >
              Learn More
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Cortex Lingo?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center border p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">AI-Powered Learning</h3>
                <p>
                  Personalized learning experiences tailored to your pace and goals.
                </p>
              </div>
              <div className="text-center border p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">Interactive Tools</h3>
                <p>
                  Engage with real-time tools to improve speaking, listening, and writing skills.
                </p>
              </div>
              <div className="text-center border p-6 rounded-lg shadow-md hover:shadow-lg">
                <h3 className="text-xl font-bold mb-4">Multilingual Support</h3>
                <p>
                  Access courses and resources in a variety of languages.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer className="bg-gray-800 text-white py-6">
          <div className="container mx-auto text-center">
            <p className="text-sm">&copy; 2024 Cortex Lingo. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
