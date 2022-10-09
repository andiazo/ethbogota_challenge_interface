import styles from '../styles/Home.module.css';

export default function Footer() {
  return (
    <>
    <div className={styles.footer}>

      <div className="container p-5 text-gray-800">
    <div className="grid lg:grid-cols-2 gap-4">
      <div className="mb-6 md:mb-0">
        <h5 className="font-medium mb-2 uppercase">Wanna grow web3 ecosystem?</h5>
          <p className="mb-4">
          Our mission is to empower young
          people with the skills and knowledge they need to succeed in the new digital economy.
          We offer a range of programs and resources that can help you get started with web3 and blockchain technologies. 
          With our support, you can explore new opportunities and make a real difference in the world.
          </p>
      </div>
      <div className="mb-6 md:mb-0">
        <h5 className="font-medium mb-2 uppercase">Follow us!</h5>
        <p className="mb-4">
        If you're ready to learn more about how web3 and blockchain can benefit you, we encourage you to explore our website and resources.
         We're here to support you on your journey into Web3!.
        </p>
      </div>
    </div>
  </div>
  <div className="text-center text-gray-700 p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
    <a
      href="https://ethglobal.com/showcase"
      target="_blank"
      rel="noopener noreferrer"
    >
      For our ETHGlobal @ ETHbogota community
      
    </a>
    </div>
  </div>
  </>
  )
}
