const Card = () => {
  return (
    <div className='w-full mx-auto shadow bg-neutral-100 rounded p-4 relative z-20 overflow-hidden space-y-8'>
      <div>
        <p className='text-2xl text-sbux-gold font-mali'>JOIN US FOR A</p>
        <p className='text-5xl text-sbux-coral font-great-vibes pl-6 my-2'>
          Latte
        </p>
        <p className='text-6xl text-sbux-green font-righteous pl-12 z-20'>
          FUN
        </p>
      </div>
      <div>
        <p className='text-5xl text-sbux-coral font-great-vibes w-full text-right pr-6'>
          {"Rori's"}
        </p>
        <p className='w-full text-right'>
          <span className='text-6xl flex justify-end text-sbux-gold font-righteous'>
            12
            <span className='text-2xl'>
              th <span className='text-sbux-coral'>BIRTHDAY</span>
            </span>
          </span>
        </p>
      </div>
      <div className='flex border-b-2 border-dashed border-sbux-coral pb-2 w-9/12'>
        <div className='text-center border-r-2 border-dashed border-sbux-coral p-2'>
          <p className='text-sbux-coral font-mali text-sm leading-none'>
            SATURDAY
          </p>
          <p className='text-5xl tracking-wider font-righteous text-sbux-green leading-none'>
            11
          </p>
          <p className='text-sbux-coral text-sm font-mali leading-none'>
            NOVEMBER
          </p>
        </div>
        <div className='text-center flex flex-col'>
          <span className='text-sbux-gold text-sm py-1 px-2 font-mali border-b-2 border-dashed border-sbux-coral'>
            2:00PM - 4:00PM
          </span>
          <span className='text-sbux-gold font-great-vibes text-lg font-bold pt-1'>
            {"Rori's"} House
          </span>
          <a
            href='https://maps.app.goo.gl/npooCPjMHB7jL1667'
            className='text-sbux-coral font-mali text-sm leading-none'
          >
            287 Coldwell Dr.
            <br />
            Gahanna, OH
          </a>
        </div>
      </div>
      <div className='w-9/12 text-center'>
        <a
          className='text-sbux-green font-mali'
          href='sms:614-716-8983'
        >
          RSVP to Katie 614-716-8983
        </a>
      </div>
      <img
        src='/refresher1.png'
        className='absolute top-32 left-1 w-28 rotate-[30deg] z-10'
      />
      <img
        src='/refresher2.png'
        className='absolute -top-16 -right-6 w-40 -rotate-[160deg]'
      />
      <img
        src='/refresher3.png'
        className='absolute -bottom-8 -right-16 w-56'
      />
    </div>
  );
};

export default Card;
