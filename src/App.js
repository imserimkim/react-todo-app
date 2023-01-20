
// 클래스 컴포넌트
import React, {Component} from "react";  //리액트 라이브러리에서 가져 옴
import './App.css';

export default class App extends Component { //컴포넌트를 사용할 수 있게 확장

  state = {
    todoData : [
      {
        id: "1", 
        title: "공부하기",
        completed: true
      },
      {
        id: '2',
        title: '청소하기',
        completed: false 
      }
    ]
  } 
  
  btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px", 
    borderRadius: "50%",    // css -> jsx : ( border-radious -> borderRadius )
    cursor:"pointer",
    float:"right"
  }

  getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px dotted #ccc",
      textDecoration: 'none'
    }
  }


  handleClick = ( id ) =>{
    /* 할 일 : 클릭한 목록 지우기 */
    let newTodoData = this.state.todoData.filter(data => data.id !== id)  // data.id == id 같은 것은 지우고 다른것만 가져오기
    console.log('newTodoData', newTodoData)
    this.setState({todoData: newTodoData})
  };

  render() {                                 // 클래스 컴포넌트에서는 render 필요
    return(
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>
          </div>
    
          {this.state.todoData.map((data) => (
              <div style={this.getStyle()} key={data.id}>
                  <input type="checkbox" defaultChecked={false} /> {/* defaultChecked: 체크 안됨이 기본*/}
                  {data.title}
                  <button style={this.btnStyle} onClick={()=> this.handleClick(data.id)}>x</button>
              </div>
          ))}
        </div>
      </div>
    )
  }


}