let nav = weex.requireModule('navigator')
const base = 'http://192.168.15.193:8081/dist/'

class Navigator {
  push (option, cb) {
    let opt = {
      url: '',
      animated: 'true'
    }
    if (typeof option === 'string') {
      opt.url = base + option.replace(/.vue/g, '.js')
    } else {
      opt = {
        url: base + option.url.replace(/.vue/g, '.js'),
        animated: option.animated || 'true'
      }
    }
    nav.push(opt, cb)
  }

  pop (...props) {
    nav.pop(...props)
  }
}
const navigator = new Navigator()
export default navigator
