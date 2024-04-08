import Section from './Section'

const AllSections = () => {

  function onClickButton() {
    console.log('Butterfly Effect!');
  }

  return (
    <div className='w-full h-full relative'>
      <Section>
        <h1 className="text-white sm:text-[60px] text-[40px]">
          Ready to Spread Your Wings?
        </h1>
      </Section>

      <Section>
        <h1 className="text-white sm:text-[60px] text-[40px]">
          Curious Caterpillar?<br />Unleash Your Butterfly Brilliance!
        </h1>
      </Section>

      <Section>
        <h1 className="text-white sm:text-[60px] text-[40px]">
          Metamorphosis Magic!<br />
          Transform Like a<br />
          <span className='sm:text-[80px] text-[50px]'>Butterfly</span>
        </h1>
      </Section>

      <Section>
        <h1 className="text-white sm:text-[60px] text-[40px]">
          Feeling Cocoon-ed?<br />Let&apos;s Break Free and Soar!
        </h1>
      </Section>

      <Section>
        <h1 className="text-white sm:text-[60px] text-[40px]">
          Unfurl Your Imagination:<br />Paint the World with Butterfly Colors!
        </h1>
      </Section>

      <Section>
        <div className='p-[50px]'>
          <h1 className="text-white sm:text-[60px] text-[40px] sm:mb-8 mb-5">
            Ready for Takeoff?
          </h1>
          <h2 className='text-white sm:text-[40px] text-[30px] sm:mb-16 mb-11'>
            Flutter Your Creativity Free! Dazzle the World!
          </h2>
          <button
            className='px-6 py-3 rounded-full capitalize bg-white'
            style={{ boxShadow: '1px 1px 25px 10px rgba(255, 255, 255, 0.5)' }}
            onClick={onClickButton}>
            Unleash Your Creativity Now!
          </button>
        </div>
      </Section>
    </div>
  )
}

export default AllSections