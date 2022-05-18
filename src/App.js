import PokeContainer from './components/PokeContainer'

export default function Example() {
  return (
    <>
      <div className="min-h-full">
        <div className="py-10">
          <header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">Pokédex</h1>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="px-4 py-8 sm:px-0">
                <div className="border-4 border-dashed border-gray-200 p-8 rounded-lg">
                  <PokeContainer />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}