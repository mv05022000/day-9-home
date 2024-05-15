
import './App.css';
import { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);


  const generatePassword = () => {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";

    let chars = lowercaseChars;
    if (includeUppercase) chars += uppercaseChars;
    if (includeNumbers) chars += numberChars;
    if (includeSymbols) chars += symbolChars;

    let newPassword = "";
    for(let i=0;i< passwordLength;i++){
      let randomIndex = Math.floor(Math.random() * chars.length);
      newPassword += chars.charAt(randomIndex);
    }
    setPassword(newPassword);
  }

  return (
    <>
     <div className='min-h-screen flex items-center justify-center bg-gray-100 flex-col	'>
      <div className=' p-8 rounded flex justify-items-center	 w-full max-w-md'>
        <h1 className='text-2xl font-semibold mb-4 '>Password Generators</h1>
      </div>

      <div >
        <label>Enter Length of the password</label>
        <input  type='number'
        value={passwordLength}
        onChange={(e)=> setPasswordLength(e.target.value)}
        className="w-full px-3 py-2 border rounded"/>
      </div>
      <div className='mb-4 flex flex-row'>
      <label className="block text-gray-700">Include Uppercase:</label>
      <input
            type="checkbox"
            checked={includeUppercase}
            onChange={() => setIncludeUppercase(!includeUppercase)}
          />
      <input />
      </div>
      <div className='mb-4 flex flex-row'>
      <label className="block text-gray-700">Include Numbers:</label>
      <input
            type="checkbox"
            checked={includeNumbers}
            onChange={() => setIncludeNumbers(!includeNumbers)}
          />
      <input />
      </div>
      <div className='mb-4 flex flex-row'>
      <label className="block text-gray-700">Include Symbols:</label>
      <input
            type="checkbox"
            checked={includeSymbols}
            onChange={() => setIncludeSymbols(!includeSymbols)}
          />
      <input />
      </div>
      <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={generatePassword}
        >
          Generate Password
        </button>

        <div >
          <h1 className='m-4'>
          Generated password:  👇
          </h1>
        <div className='flex space-x-1.5 mt-4'> 
        <h1 className="w-full px-3 py-2 border rounded">{password}</h1>
          <button onClick={() => {
         navigator.clipboard.writeText(password);}}>
         <svg class="h-8 w-8 text-red-500"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
       </button>
        </div>
        </div>
     </div>
    </>
  );
}

export default App;
