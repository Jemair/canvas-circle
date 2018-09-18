import React, { PureComponent } from 'react'
import { hot } from 'react-hot-loader'
import './App.css'

class App extends PureComponent {
  componentDidMount() {
    const cvs = this.cvs
    this.drawCircle(cvs, '#3d80fa', 40)
    this.drawCircle(cvs, {
      eAngle: -1 / 2 * Math.PI,
    }, '#ff9d27', 40)
    this.drawCircle(cvs, {
      eAngle: -3.1,
    },
      '#3d80fa',
      20,
      cvs.width / 2 - 40)
  }

  drawCircle(cvs, options, style, width, r = cvs.width / 2 - 30) {
    if (!cvs) { return }
    const ctx = cvs.getContext('2d')
    const initCvsOptions = {
      cx: cvs.width / 2, // 圆心位置x
      cy: cvs.width / 2, // 圆心位置y
      r, // 圆半径
      sAngle: Math.PI, // 起始角
      eAngle: Math.PI * 4, // 结束角
    }
    if (typeof options !== 'object') {
      width = style
      style = options
      options = initCvsOptions
    } else {
      options = {
        ...initCvsOptions,
        ...options,
      }
    }
    ctx.beginPath()
    ctx.arc(...Object.values(options))
    ctx.strokeStyle = style
    ctx.lineCap = 'butt'
    ctx.lineWidth = width
    ctx.stroke()
  }

  render() {
    return <canvas width="800" height="800" ref={cvs => { this.cvs = cvs }} />
  }
}

export default hot(module)(App)
