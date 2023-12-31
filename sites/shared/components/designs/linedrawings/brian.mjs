import { LineDrawingWrapper, thin, dashed } from './shared.mjs'

const strokeScale = 0.5

export const Brian = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 189 90" {...{ className, stroke }}>
      <Front stroke={stroke} />
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the front
 */
export const BrianFront = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="0 0 94 90" {...{ className, stroke }}>
      <Front stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * React component for the back
 */
export const BrianBack = ({
  className = 'w-64', // CSS classes to apply
  stroke = 1, // Stroke width to use
}) => {
  // Normalize stroke across designs
  stroke = stroke * strokeScale

  return (
    <LineDrawingWrapper viewBox="94 0 94 90" {...{ className, stroke }}>
      <Back stroke={stroke} />
    </LineDrawingWrapper>
  )
}

/*
 * SVG elements for the front
 */
export const Front = ({ stroke }) => (
  <>
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 54.817624,3.0896173 c -3.141297,2.5992178 -5.504643,2.3422408 -9.260307,2.4366778 -3.755655,0.09445 -5.624793,-0.245835 -8.752041,-2.3867638 M 56.07154,2.4268303 c -0.224406,1.36701 -0.501777,2.606058 -1.025865,3.6141478 C 50.562235,14.665093 39.508876,12.934888 36.731314,6.5626091 36.116164,5.1513643 35.674588,3.8028313 35.568172,2.5127983 M 70.561252,84.075766 C 54.377425,87.291052 36.80704,87.092719 21.869461,84.130576 M 90.17324,81.735001 78.945598,83.999563 M 2.5051075,81.735001 13.732732,83.999563"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 72.999649,7.5685891 -1.643063,7.0056369 c -0.497682,2.345531 -0.962025,4.698206 -1.350169,7.065169 -0.404813,2.362199 -0.752475,4.736306 -1.050131,7.115174 -0.154782,1.188244 -0.288131,2.381251 -0.414337,3.574257 -0.130969,1.193006 -0.242888,2.386012 -0.347663,3.5814 0.0762,-1.197769 0.159544,-2.393157 0.261938,-3.590925 0.107155,-1.195387 0.226218,-2.388394 0.36433,-3.5814 0.271463,-2.386012 0.619126,-4.760119 1.012031,-7.129462 0.404813,-2.366963 0.866776,-4.72202 1.393032,-7.06517 0.554831,-2.331243 1.173957,-4.6529619 1.774032,-6.9746799 z m -53.478113,0 c 0.600075,2.321718 1.216819,4.6434369 1.776413,6.9770619 0.526256,2.340768 0.988219,4.698206 1.393031,7.065169 0.392906,2.369344 0.740569,4.743449 1.012032,7.129462 0.138112,1.193006 0.257175,2.386012 0.36433,3.5814 0.102394,1.195387 0.185738,2.393156 0.261938,3.590925 -0.104775,-1.195388 -0.216694,-2.388393 -0.347663,-3.5814 -0.126206,-1.193006 -0.259556,-2.383631 -0.414337,-3.574256 -0.297656,-2.378869 -0.645319,-4.752975 -1.050131,-7.115175 -0.390525,-2.366963 -0.852488,-4.719637 -1.350169,-7.065169 z"
    />
    <path
      key="outline"
      d="m 54.999217,2.1756043 c -0.06642,0.766926 -0.199314,1.861758 -0.603576,2.898801 C 52.87357,8.8254071 49.183516,10.872115 45.562897,10.850623 42.095602,10.830013 38.693746,8.9057501 37.243306,5.0744053 36.8398,3.9982393 36.705124,2.9279863 36.63973,2.1756043 m 18.359487,-0.05958 c -3.312864,2.399895 -5.359959,2.466774 -9.421983,2.563263 -4.062015,0.096489 -6.167844,-0.509733 -8.937504,-2.563263 m 0,4.5e-5 -14.713119,3.5808568 c -0.535788,0.154782 -1.664496,0.557208 -2.674152,1.604961 -1.123947,1.164429 -6.543668,19.4167169 -7.369967,23.5291319 -0.624888,3.113379 -2.0224835,9.639198 -3.6692855,17.486973 -2.262806,10.783458 -4.043603,24.062877 -5.889044,34.414749 -0.06426,0.357192 -0.128592,0.728667 -0.185742,1.040607 L 13.368394,85.911712 19.801246,52.85302 24.598369,35.643526 21.840886,85.911712 c 0.607212,0.119061 1.073943,0.302418 2.226465,0.535779 12.511566,2.39674 32.534046,2.410357 44.457939,0 1.152522,-0.233361 1.619244,-0.416718 2.226465,-0.535779 l -2.759868,-50.268186 4.917571,17.74863 6.312404,32.519556 11.232358,-2.138364 C 90.39702,83.461408 90.33278,83.089933 90.26848,82.732741 88.384699,72.165796 86.528303,58.548391 84.239018,47.649166 82.653479,40.100398 81.3172,33.855514 80.710141,30.831019 79.883851,26.718604 74.464129,8.4663161 73.340173,7.3018871 72.330526,6.2541341 71.201809,5.8517081 70.66603,5.6969261 L 54.999217,2.1160693"
    />
  </>
)

/*
 * SVG elements for the back
 */
const Back = ({ stroke }) => (
  <>
    <path
      key="outline"
      d="m 166.66375,85.678351 c -1.10014,-10.110789 -1.83357,-20.05965 -2.1979,-25.969914 -0.42148,-6.82704 -0.50483,-13.108779 -0.53578,-15.509079 -0.0428,-3.438522 -0.0262,-6.360318 0,-8.555832 1.20898,4.398687 3.68486,12.897513 5.67076,21.685104 2.75088,12.172671 4.99914,24.899409 5.55921,28.049679 l 11.76576,-1.604961 -6.00075,-34.759107 c -4.18147,-19.854855 -8.29866,-34.34238 -8.97493,-36.899847 -0.0334,-0.128583 -0.331,-1.297782 -1.06918,-2.6741429 -0.57865,-1.076328 -1.26683,-2.321721 -2.67414,-3.207546 -0.42387,-0.266697 -0.80725,-0.433386 -1.06918,-0.535779 L 150.88734,2.2576213 c -3.31286,2.399895 -5.35995,2.466774 -9.42197,2.563263 -4.06202,0.096489 -6.16786,-0.509742 -8.93752,-2.563263 l -15.12264,3.4393048 c -0.26194,0.100008 -0.64532,0.266697 -1.06918,0.535779 -1.40732,0.885825 -2.0955,2.131218 -2.67415,3.207546 -0.74057,1.3763609 -1.03584,2.5455599 -1.06918,2.6741429 -0.67628,2.557467 -4.79108,17.044992 -8.97493,36.899847 l -5.99837,34.759107 11.76576,1.604961 c 0.58543,-3.291453 3.05947,-17.047953 5.93283,-29.698074 1.85998,-8.188749 4.16398,-15.913908 5.29714,-20.036709 0.0262,2.195514 0.0428,5.11731 0,8.555832 -0.0285,2.397915 -0.11191,8.682039 -0.53578,15.509079 -0.36433,5.910264 -1.09776,15.978186 -2.1979,25.969914 0.60722,0.119061 1.07395,0.302418 2.22648,0.535779 12.51156,2.39674 32.40545,2.410348 44.32934,0 1.15253,-0.233361 1.61926,-0.416718 2.22648,-0.535779"
    />
    <path
      key="folds"
      opacity={0.3}
      d="m 168.79497,7.0328051 -1.64069,6.6436919 c -0.49768,2.226465 -0.96202,4.460076 -1.35017,6.705594 -0.40719,2.243142 -0.75247,4.498182 -1.05251,6.760368 -0.15478,1.131102 -0.28813,2.262195 -0.41433,3.395664 -0.13097,1.133478 -0.2429,2.269332 -0.34767,3.405186 0.0762,-1.13823 0.15955,-2.276469 0.26194,-3.412323 0.10715,-1.135863 0.22622,-2.271717 0.36433,-3.405195 0.27146,-2.266947 0.61913,-4.524372 1.01203,-6.774651 0.40481,-2.247903 0.86677,-4.483899 1.39303,-6.705603 0.55959,-2.212182 1.17396,-4.4100719 1.77404,-6.6127319 z m -53.47574,0 c 0.60008,2.200275 1.21444,4.4005499 1.77403,6.6127319 0.52626,2.221704 0.98822,4.4577 1.39304,6.705603 0.3929,2.250279 0.74056,4.507704 1.01203,6.774651 0.1381,1.133478 0.25717,2.269332 0.36433,3.405195 0.10239,1.135854 0.18573,2.274093 0.26193,3.412323 -0.10477,-1.135854 -0.21669,-2.271708 -0.34766,-3.405186 -0.1262,-1.133469 -0.25956,-2.266947 -0.41434,-3.395664 -0.30003,-2.262186 -0.64532,-4.51485 -1.05251,-6.760368 -0.39052,-2.247894 -0.85248,-4.481505 -1.35016,-6.705594 z"
    />
    <path
      key="stitches"
      {...dashed(stroke)}
      {...thin(stroke)}
      d="m 166.44534,84.090544 c -16.18384,3.215277 -33.50702,2.743335 -48.44461,-0.218853 m 68.64975,-2.173329 -11.68778,1.749681 m -77.10378,-1.749735 11.67309,1.749771 M 151.48929,2.6566808 c -0.93776,0.9757204 -3.04645,2.2423977 -4.3214,2.5995555 -1.74079,0.4876556 -3.49715,0.4392408 -5.77017,0.4963962 -2.11574,0.053201 -3.58611,-0.2197347 -5.11331,-0.4984868 -1.56156,-0.285025 -3.70481,-1.6371255 -4.35533,-2.7195354"
    />
  </>
)
