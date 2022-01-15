import { useState } from 'react'
import { InputText } from 'primereact/inputtext'
import { InputTextarea } from 'primereact/inputtextarea'

// interface InputTextDemoProps {
//   label: string
//   name?: string
// }

const InputTextDemo = () => {
  const [text1, setText1] = useState<string>('')
  const [text2, setText2] = useState<string>('')

  return (
    <div data-testid='main-div'>
      <div className='card'>
        <h5 data-testid='berth-label' style={{ color: 'red' }}>
          Berth Id
        </h5>
        <InputText
          value={text1}
          placeholder='please type'
          onChange={(e: any) => setText1(e.target.value)}
          style={{
            borderRadius: 0,
            borderBottom: '2px solid grey',
            borderTop: 'none',
            borderRight: 'none',
            borderLeft: 'none',
          }}
        />
        <h5 data-testid='remark-label'>Remark</h5>
        <InputTextarea
          value={text2}
          placeholder='please typesd'
          onChange={(e: any) => setText2(e.target.value)}
          rows={20}
          cols={30}
        />
      </div>
    </div>
  )
}

export default InputTextDemo

// import React, { Component } from 'react'

// export class InputTextDemo extends Component {
//   state = {
//     text1: '',
//     text2: '',
//   }

//   render() {
//     return (
//       <div data-testid='main-div'>
//         <div className='card'>
//           <h5 data-testid='berth-label' style={{ color: 'red' }}>
//             Berth Id
//           </h5>
//           <InputText
//             value={this.state.text1}
//             placeholder='please type'
//             onChange={(e: any) =>
//               this.setState({
//                 text1: e.target.value,
//               })
//             }
//             style={{
//               borderRadius: 0,
//               borderBottom: '2px solid grey',
//               borderTop: 'none',
//               borderRight: 'none',
//               borderLeft: 'none',
//             }}
//           />
//           <h5 data-testid='remark-label'>Remark</h5>
//           <InputTextarea
//             value={this.state.text2}
//             placeholder='please typesd'
//             onChange={(e: any) =>
//               this.setState({
//                 text2: e.target.value,
//               })
//             }
//             rows={20}
//             cols={30}
//           />
//         </div>
//       </div>
//     )
//   }
// }

// export default InputTextDemo
