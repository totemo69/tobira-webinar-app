

import style, {css} from 'styled-components';
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'


const MyStyle = {
  width: "100%",
  height: "40px",
  borderRadius: "8px",
}



const InputPhone = () => {
  return(
    <ReactPhoneInput inputStyle={MyStyle} />
  )
}

export default InputPhone;