let nav = weex.requireModule('navigator')

class Navigator {
  push (option, cb) {
    let opt = {
      url: '',
      animated: 'true'
    }
    if (typeof option === 'string') {
      opt.url = option
    } else {
      opt = option
    }
    nav.push(opt, cb)
  }

  pop (...props) {
    nav.pop(...props)
  }
}
const navigator = new Navigator()
export default navigator
