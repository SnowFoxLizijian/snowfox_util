type RFSMethodName = 'webkitRequestFullScreen' | 'requestFullscreen' | 'msRequestFullscreen' | 'mozRequestFullScreen';
type EFSMethodName = 'webkitExitFullscreen' | 'msExitFullscreen' | 'mozCancelFullScreen' | 'exitFullscreen';
type FSEPropName = 'webkitFullscreenElement' | 'msFullscreenElement' | 'mozFullScreenElement' | 'fullscreenElement';
type ONFSCPropName = 'onfullscreenchange' | 'onwebkitfullscreenchange' | 'onmozfullscreenchange' | 'MSFullscreenChange';


const fullScreen = (trigger: boolean) => {
  const element:HTMLElement = document.documentElement

  if (trigger) {
    if (element) {
      if (element?.requestFullscreen) {
        element?.requestFullscreen();
      }
      // @ts-ignore
      if (element?.webkitRequestFullscreen) { // Chrome, Safari 和 Opera
        // @ts-ignore
        element?.webkitRequestFullscreen();
      }
      // @ts-ignore
      if (element?.mozRequestFullScreen) { // Firefox
        // @ts-ignore
        element?.mozRequestFullScreen();
      }
      // @ts-ignore
      if (element?.msRequestFullscreen) { // IE/Edge
        // @ts-ignore
        element?.msRequestFullscreen();
      }
    }
  }else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
      // @ts-ignore
    } else if (document.webkitExitFullscreen) { // Chrome, Safari 和 Opera
      // @ts-ignore
      document.webkitExitFullscreen();
      // @ts-ignore
    } else if (document.mozCancelFullScreen) { // Firefox
      // @ts-ignore
      document.mozCancelFullScreen();
      // @ts-ignore
    } else if (document.msExitFullscreen) { // IE/Edge
      // @ts-ignore
      document.msExitFullscreen();
    }
  }
}

export default fullScreen
