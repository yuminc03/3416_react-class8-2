import React, { Component } from 'react';

class R073_ReatRef extends Component{
  constructor(props){
		super(props);
		this.InputRef = React.createRef();
	}

	RefFocus = (e) => {
		this.InputRef.current.focus();
	}

	JavascriptFocus(){
		//react에서 element값을 얻거나 수정할때 javascript jQuery사용
		//idsk class와 같은 속성으로 element에 접근
		document.getElementById('id').focus();
	}

	render(){
		return(
			<>
			{/* ref를 사용하면 DOM에 접근할 수 있도록 허락한다
			element가 참조하는 변수에 접근해 변경하고 element를 제어할 수 있다 */}
				<input id='id' type="text" ref={this.InputRef}/>
				<input type="button" value="Ref Focus" onClick={this.RefFocus}/>
				<input type="button" value="Javascript Focus" onClick={this.JavascriptFocus}/>
			</>
		)
	}
}

export default R073_ReatRef;