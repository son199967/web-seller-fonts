import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move:"",
      laptophang: [],
      computer: [],
      cpu:[],
      main:[],
      vga:[],
      ram:[],
      print:[],
      screen:[],
      keyboard:[],
      mouse:[],
      listen:[],
      desk:[],
      tivi:[],
      loa:[],
      usb:[]
    }
  }
  redirectTo = (e) => {
    this.props.history.push(`/product/${e}`)
  }
  enter() {

  }
  getListTag = async () => {
    const laptophang = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=laptop&&type=laptop`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
    const computer = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=computer&&type=computer`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const cpu = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=linhkien&&type=CPU`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const vga = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=linhkien&&type=VGA`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const main = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=linhkien&&type=Mainboard`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const ram = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=linhkien&&type=ram`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const screen = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=screen&&type=screen`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const print = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=print&&type=print`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const keyboard = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=gamegear&&type=keyboard`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const mouse = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=gamegear&&type=mouse`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const listen = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=gamegear&&type=listen`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const desk = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=gamegear&&type=desk`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const tivi = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=data&&type=tivi`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const loa = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=data&&type=loa`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      const usb = await axios.get(API_BASE_URL + `/product/getAllBranch?tag=data&&type=usb`)
      .then(function (response) {
        if (response.status === 200) {
          return response.data;
        }
      })
      
    this.setState({ laptophang, computer , cpu,vga,main,ram,screen,print,keyboard,mouse,listen,desk,tivi,loa,usb})
  }

  componentDidMount = () => {
    this.getListTag();
  }
  changeX=(a)=>{
   this.setState({move:a})
  }

  render() {
    console.log("99999",this.state.vga)
    const laptophangR = this.state.laptophang.map((s) =>
      <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>
    )
    const computer = this.state.computer.map((s) =>
      <Link to={`/product/${s}`}>{s}</Link>
    )
    const cpuK =this.state.cpu.map((s)=>
      <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>
    )
    const vgaK =this.state.vga.map((s)=>
    <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>
  )
  const mainK =this.state.main.map((s)=>
    <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>
    
  )
  const ramK =this.state.ram.map((s)=>
    <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
  )
  const screenK =this.state.screen.map((s)=>
    <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
  )
  const printK =this.state.print.map((s)=>
    <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
  )
  const keyboardK =this.state.keyboard.map((s)=>
  <Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const mouseK =this.state.mouse.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const listenK =this.state.listen.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const deskK =this.state.desk.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const tiviK =this.state.tivi.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const loaK =this.state.loa.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
const usbK =this.state.usb.map((s)=>
<Link to={`/product/${this.state.move}/${s}`}>{s}</Link>  
)
    // console.log("move",this.state.move)

    return (
      <nav class="navbar navbar-expand-sm bg-danger navbar-light" style={{ padding: "0" }}>
        <ul class="navbar-nav">
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" ><Link to={`/product/laptop`}>Máy tính xách tay- Laptop</Link></a>
            <div class="dropdown-content" >
              <div className="d-flex">
                <div className="XX" onMouseMove={()=>this.changeX("laptop")}>
                  <div className="center ml-3 mt-3 mb-3" >Lap top theo hãng</div>
                  {laptophangR}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("computer")}>Máy Tính - Máy chủ</a>
            <div class="dropdown-content">
              <div className="d-flex">
                <div className="XX">
                  <div className="center ml-3 mt-3 mb-3" >Máy tính để bàn theo hãng</div>
                  {computer}
                </div>
              </div>

            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("computer")}>Linh kiện máy tính</a>
            <div class="dropdown-content">
              <div className="d-flex">
                <div className="XX" onMouseMove={()=>this.changeX("CPU")}>
                  <div className="center ml-3 mt-3 mb-3" >CPU-Vi xử lý</div>
                  {cpuK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("VGA")}>
                  <div className="center ml-3 mt-3 mb-3" >VGA - Cạc màn hình</div>
                  {vgaK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("Mainboard")}>
                  <div className="center ml-3 mt-3 mb-3" >Mainboard</div>
                  {mainK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("ram")}>
                  <div className="center ml-3 mt-3 mb-3" >Ram -Bộ nhớ trong</div>
                  {ramK}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("screen")}>Màn hình máy tính</a>
            <div class="dropdown-content">
              <div className="d-flex">
              <div className="XX" onMouseMove={()=>this.changeX("screen")}>
                  <div className="center ml-3 mt-3 mb-3" >Màn máy tính thao hãng</div>
                  {screenK}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("print")}>Máy in</a>
            <div class="dropdown-content">
              <div className="d-flex">
              <div className="XX" onMouseMove={()=>this.changeX("print")}>
                  <div className="center ml-3 mt-3 mb-3" >Máy in </div>
                  {printK}
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("gamegear")}>Gaming Gear</a>
            <div class="dropdown-content">
              <div className="d-flex">
              <div className="XX" onMouseMove={()=>this.changeX("keyboard")}>
                  <div className="center ml-3 mt-3 mb-3" >Bàn Phím cơ chơi game </div>
                  {keyboardK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("mouse")}>
                  <div className="center ml-3 mt-3 mb-3" >Chuột chơi game</div>
                  {mouseK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("listen")}>
                  <div className="center ml-3 mt-3 mb-3" >Tai nghe chơi game </div>
                  {listenK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("desk")}>
                  <div className="center ml-3 mt-3 mb-3" >Ghế chơi game </div>
                  {deskK}
                </div>
                {/* <div className="XX" onMouseMove={()=>this.changeX("print")}>
                  <div className="center ml-3 mt-3 mb-3" >Bàn Gaming </div>
                  {laptophangR} */}
                {/* </div>
                <div className="XX" onMouseMove={()=>this.changeX("print")}>
                  <div className="center ml-3 mt-3 mb-3" >Tay cầm chơi game </div>
                  {laptophangR}
                </div> */}
                {/* <div className="XX" onMouseMove={()=>this.changeX("print")}>
                  <div className="center ml-3 mt-3 mb-3" >Bàn di chuột chơi game </div>
                  {laptophangR}
                </div> */}
              </div>
            </div>
          </li>
          <li class="nav-item active dropdown">
            <a class="nav-link dropbtn" href="#" onClick={() => this.redirectTo("data")}>Thiết bị lưu trữ - nghe nhìn</a>
            <div class="dropdown-content">
              <div className="d-flex">
              <div className="XX" onMouseMove={()=>this.changeX("tivi")}>
                  <div className="center ml-3 mt-3 mb-3" > Tivi Let-SmartTv </div>
                  {tiviK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("loa")}>
                  <div className="center ml-3 mt-3 mb-3" > Loa vi tính </div>
                  {loaK}
                </div>
                <div className="XX" onMouseMove={()=>this.changeX("usb")}>
                  <div className="center ml-3 mt-3 mb-3" > Ổ cứng di động </div>
                  {usbK}
                </div>
              </div>
            </div>
          
          </li>
        </ul>
      </nav>
    )
  }
}

export default withRouter(Category);