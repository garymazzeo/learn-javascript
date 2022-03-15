import Tiny from './Tiny/tiny.js'

export default Tiny({
  template () {
    return `
      <div class='component total-component flow text'>
        <h2>Total Count</h2>
        <ul>
          <li>Parent Count: ${this.props.parentCount}</li>
          <li>Child Count: ${this.props.childCount}</li>
          <li>Total Count: ${this.props.parentCount + this.props.childCount}</li>
        </ul>
      </div>
    `
  }
})
