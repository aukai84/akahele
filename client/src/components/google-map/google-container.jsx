export class Container extends React.Component {
  render() {
    if (!this.props.loaded) {
      return <div>Loading...</div>
    }
    return (
      <div>Map will go here</div>
    )
  }
}

export default GoogleApiComponent({
  apiKey: AIzaSyCC7M-pvWb75Zecv7358x-Zx9Bum_LPvGI
})(Container)