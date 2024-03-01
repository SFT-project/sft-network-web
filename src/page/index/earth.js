import { e as earthFlyline, w } from './world.js'

earthFlyline.registerMap('world', w)

export function init() {
  const element = document.getElementById('container')
  if (element.getElementsByTagName('canvas').length > 0) {
    return
  }
  const lines = [{
    from: {
      id: '1',
      lon: -23.0075,
      lat: 50.4296,
    },
    to: {
      id: 2,
      lon: 26.1223,
      lat: -7.8756,
    },
  }, {
    from: {
      lon: 142.8123,
      lat: -58.9813,
      style: {
        color: 'yellow',
      },
    },
    to: {
      lon: 157.0064,
      lat: 10.7816,
      style: {
        color: 'yellow',
      },
    },
    style: {
      pathStyle: {
        color: 'yellow',
      },
      flyLineStyle: {
        color: 'yellow',
      },
    },
  }, {
    from: {
      lon: -175.6286,
      lat: 72.8359,
    },
    to: {
      lon: -39.071,
      lat: -35.438,
    },
  }, {
    from: {
      lon: 178.7439,
      lat: 25.8303,
    },
    to: {
      lon: 137.19,
      lat: 17.118,
    },
  }, {
    from: {
      lon: -162.6725,
      lat: 37.277,
    },
    to: {
      lon: -37.1681,
      lat: 38.5162,
    },
  }, {
    from: {
      lon: -7.5945,
      lat: 37.2754,
    },
    to: {
      lon: 41.4114,
      lat: 41.5946,
    },
  }]
  let index = 0

  function n() {
    setTimeout(() => {
        index++,
        index < lines.length && (n(),
          earth.addData('flyLine', [lines[index]]))
      }
      , 1e3)
  }

  n()
  const earth = earthFlyline.init({
    dom: element,
    map: 'world',
    bgColor: 'yellow',
    config: {
      earth: {
        color: "#103444",
      },
      spriteColor: '#16181d',
      mapStyle: {
        areaColor: '#526549', //区域颜色
        lineColor: '#526549',//边界线颜色
      },
    },
  })
  earth.renderer.setClearColor('#fff', 0)
}
