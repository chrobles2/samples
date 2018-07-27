var _secret = 1

module.exports = class Registry {
  constructor(props) {
    this.props = props
  }

  get secret() {
    return globalSecret
  }
}