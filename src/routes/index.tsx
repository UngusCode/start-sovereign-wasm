import { createFileRoute } from '@tanstack/react-router'

import { createStandardRollup, StandardRollup } from '@sovereign-sdk/web3';
import { createServerFn } from '@tanstack/react-start';

export const Route = createFileRoute('/')({
  component: Home,
})


const wasmIssuesServerFunc = createServerFn({ method: "POST" })
.handler(async (ctx) => {
  try {
    const sdk = await import('@sovereign-sdk/web3')
    const rollup = sdk.createStandardRollup({
      context: {
        defaultTxDetails: {
          max_priority_fee_bips: 0,
          max_fee: "100000000",
          gas_limit: null,
          chain_id: 4321,
        },
      },
    });
    
  } catch (error) {
    return JSON.stringify(error)
    
  }

  return "No issues"



  

});

function Home() {
  const handleClick = async () => {
    const res = await wasmIssuesServerFunc()
    alert(JSON.stringify(res))
  }
  return (
    <div className="p-2">
      <h3>Welcome Home!!!</h3>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        wasmIssuesServerFunc
      </button>
    </div>
  )
}
