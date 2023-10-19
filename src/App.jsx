import Card from './Card';

function App() {
  return (
    <>
      <div className='max-w-[450px] mx-auto grid place-items-center h-full relative p-6 overflow-hidden'>
        <Card />
        <img
          src='/strawberries.png'
          className='absolute -top-10 z-0 w-[200%] h-[200%] object-cover blur-[2px] falling'
          style={{ '--fall-speed': '60s' }}
        />
        <img
          src='/strawberries.png'
          className='absolute -top-5 z-0 w-[150%] h-[150%] object-cover blur-[1px] -scale-x-[1] falling'
          style={{ '--fall-speed': '45s' }}
        />

        <img
          src='/strawberries.png'
          className='absolute -top-16 left-0 z-0 w-full h-full object-cover falling'
          style={{ '--fall-speed': '30s' }}
        />
      </div>
    </>
  );
}

export default App;
