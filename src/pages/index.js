import React from "react"
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { message, Button} from 'antd';
import { RiFileCopyLine } from 'react-icons/ri'

import '../styles/styles.scss';
import "@fontsource/source-code-pro";
const btcAddr='3H4B3acFy1n1MesyA4khfcL1gHzWbJXjjW'
const ethAddr='mattquinn.eth'

const onBtcClick = async ()=>{
  try {
    await navigator.clipboard.writeText(btcAddr);
  } catch (error) {
    message.error('Error copying address')
  }
  message.success('Address copied to Clipboard');
}

const onEthClick = async ()=>{
  try {
    await navigator.clipboard.writeText(ethAddr);
  } catch (error) {
    message.error('Error copying address')
  }
  message.success('Address copied to Clipboard');
}

const IndexPage = () => (
  <>
  <link rel="preconnect" href="https://fonts.googleapis.com"/> 
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap" rel="stylesheet"/>
  <div className="blob">
  <svg xmlns="http://www.w3.org/1999/xlink" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 350">
  <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z"/>
  </svg>
  </div>
    <div style={{
      margin: `0 auto`,
      maxWidth: 960,
      padding: `0 1.0875rem 1.45rem`,
    }}
  >
    <main>  <h1>Matt Quinn</h1>
    <div className='social'>
    <ul>
     <li><a href="https://www.github.com/msquinn"><GithubOutlined/></a></li>
     <li> <a href="https://www.linkedin.com/in/matthew-quinn-57b54511a/"><LinkedinOutlined /></a></li>
      </ul>
    </div>
    <p>Software Engineer</p>
    <p><span role="img" aria-label="pin">📍</span> Chicago, IL</p>
      <Button onClick={onBtcClick}>BTC: 3H4B3acFy1n1MesyA4khfcL1gHzWbJXjjW <RiFileCopyLine/></Button>
      <div style={{marginTop:`.5rem`}}>
      <Button onClick={onEthClick}>ETH: mattquinn.eth<RiFileCopyLine/></Button>
      </div>
    </main>
  </div>
  </>
)

export default IndexPage
